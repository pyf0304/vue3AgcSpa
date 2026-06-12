import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  dataListFileResource,
  divVarSet,
  viewVarSet,
} from '@/views/ResourceMan/FileResourceVueShare';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import FileResource_EditAiEx from '@/views/ResourceMan/FileResource_EditAiEx';
import { FileResourceCRUDAi } from '@/viewsBase/ResourceMan/FileResourceCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { FileResourceCommandIdAi } from '@/viewsBase/ResourceMan/FileResourceCRUDAiCommands';
import { clsFileResourceEN, FileResourceKey } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
import { clsFileResourceENEx } from '@/ts/L0Entity/ResourceMan/clsFileResourceENEx';
import { FileResource_UpdateRecordAsync } from '@/ts/L3ForWApi/ResourceMan/clsFileResourceWApi';
import { FileResourceEx_GetFileTypeInfoBatch } from '@/ts/L3ForWApiEx/ResourceMan/clsFileResourceExWApi';

/**
 * FileResourceCRUDAiEx 扩展类
 * 继承自 FileResourceCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 */
export default class FileResourceCRUDAiEx extends FileResourceCRUDAi implements IShowList {
  public static vuebtn_Click: (strCommandName: string, key: FileResourceKey) => void;
  public static GetPropValue: (strPropName: string) => string;

  public get pageSize(): number {
    return this._pageSize ?? 10;
  }

  /** 绑定数据视图（同步方法） */
  public BindGv(strType: string, strPara: string) {
    this.BindGvCache(strType, strPara);
  }

  /** 绑定数据视图（从缓存） */
  public async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'FileResource':
        await this.BindGv_FileResource4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /** 查询操作 */
  public async onQuery() {
    await this.btnQuery_Click();
  }

  /** 创建记录操作 */
  public async onCreate(strCommandName: string, key: FileResourceKey | null) {
    const objPageEdit = new FileResource_EditAiEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, key);
  }

  /** 更新记录操作 */
  public async onUpdate(strCommandName: string) {
    const objPageEdit = new FileResource_EditAiEx(this);
    console.log(objPageEdit);

    const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
      const strMsg = `在修改记录时，获取记录关键字为:${currentKeyId},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const currentKey: FileResourceKey = { fileResourceId: Number(currentKeyId) };
    objPageEdit.btnEdit_Click(strCommandName, currentKey);
  }

  /** 删除记录操作 */
  public async onDelete() {
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length === 0) {
      alert(`请选择需要删除的[${this.thisTabName}]记录!`);
      return;
    }
    await this.btnDelRecord_Click();
  }

  /** 导出 Excel 操作 */
  public async onExportAi(): Promise<ExportExcelData> {
    return await this.ExportExcel_FileResourceAi();
  }

  /** SetPrjFileTypeId 操作 */
  public async onSetPrjFileTypeId() {
    await this.btnSetPrjFileTypeId_Click();
  }

  /** 对选中记录识别文件类型并回写 CodeTypeId/TabId。 */
  public async onIdentifyFileType() {
    const arrSelectedKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrSelectedKeyIds.length === 0) {
      alert(`请选择需要识别文件类型的[${this.thisTabName}]记录!`);
      return;
    }

    const arrSelectedFileResource = arrSelectedKeyIds
      .map((strKeyId) =>
        dataListFileResource.value.find((item) => item.fileResourceId.toString() === strKeyId),
      )
      .filter((item): item is clsFileResourceENEx => item != null);

    if (arrSelectedFileResource.length === 0) {
      alert(`未找到选中的[${this.thisTabName}]记录，请刷新列表后重试!`);
      return;
    }

    const strPrjId = arrSelectedFileResource[0].prjId;
    if (IsNullOrEmpty(strPrjId) === true) {
      alert('选中记录中的工程Id为空，无法识别文件类型!');
      return;
    }

    if (arrSelectedFileResource.some((item) => item.prjId !== strPrjId) === true) {
      alert('选中记录存在不同的工程Id，当前不支持混合识别!');
      return;
    }

    const objBatchResult = await FileResourceEx_GetFileTypeInfoBatch({
      fileNames: arrSelectedFileResource.map((item) => item.fileName),
      prjId: strPrjId,
    });

    if (objBatchResult.errorId != 0) {
      alert(objBatchResult.errorMsg || '批量识别文件类型失败!');
      return;
    }

    let intMatchedCount = 0;
    let intUpdatedCount = 0;
    const arrUnmatchedFileInfo: Array<string> = [];
    const arrFailedFileName: Array<string> = [];

    for (let i = 0; i < arrSelectedFileResource.length; i++) {
      const objFileResource = arrSelectedFileResource[i];
      const objFileTypeInfo = objBatchResult.fileTypeInfoList[i];
      if (objFileTypeInfo == null) {
        arrUnmatchedFileInfo.push(`${objFileResource.fileName}(接口未返回结果)`);
        continue;
      }
      if (objFileTypeInfo.isMatched === false) {
        const strUnmatchedReason = IsNullOrEmpty(objFileTypeInfo.errorMessage)
          ? '未识别到类型'
          : objFileTypeInfo.errorMessage;
        arrUnmatchedFileInfo.push(`${objFileResource.fileName}(${strUnmatchedReason})`);
        continue;
      }

      intMatchedCount++;

      const bolNoChange =
        objFileResource.codeTypeId === objFileTypeInfo.codeTypeId &&
        objFileResource.tabId === objFileTypeInfo.tabId;
      if (bolNoChange === true) continue;

      const objUpdate = new clsFileResourceEN();
      objUpdate.SetFileResourceId(objFileResource.fileResourceId);
      objUpdate.SetCodeTypeId(objFileTypeInfo.codeTypeId);
      objUpdate.SetTabId(objFileTypeInfo.tabId);

      const returnBool = await FileResource_UpdateRecordAsync(objUpdate);
      if (returnBool === true) {
        intUpdatedCount++;
      } else {
        arrFailedFileName.push(objFileResource.fileName);
      }
    }

    await this.BindGv_FileResource4Func(divVarSet.refDivList);

    const arrMsgLines: Array<string> = [];
    arrMsgLines.push('文件类型识别完成!');
    arrMsgLines.push(Format('选中:{0}条', arrSelectedFileResource.length));
    arrMsgLines.push(Format('匹配:{0}条', intMatchedCount));
    arrMsgLines.push(Format('更新:{0}条', intUpdatedCount));

    if (arrUnmatchedFileInfo.length > 0) {
      arrMsgLines.push(Format('未匹配:{0}条', arrUnmatchedFileInfo.length));
      arrMsgLines.push('未匹配明细:');
      arrUnmatchedFileInfo.forEach((item, index) => {
        arrMsgLines.push(Format('{0}. {1}', index + 1, item));
      });
    }
    if (arrFailedFileName.length > 0) {
      arrMsgLines.push(Format('更新失败:{0}条', arrFailedFileName.length));
      arrMsgLines.push('更新失败文件:');
      arrFailedFileName.forEach((item, index) => {
        arrMsgLines.push(Format('{0}. {1}', index + 1, item));
      });
    }
    alert(arrMsgLines.join('\n'));
  }

  /** 执行命令（命令模式入口） */
  public async executeCommand(
    commandId: FileResourceCommandIdAi,
    strAuxValue?: string,
  ): Promise<ExportExcelData | void> {
    console.log('executeCommand', commandId, strAuxValue);
    switch (commandId) {
      case 'query':
        await this.onQuery();
        return;
      case 'export':
        return await this.onExportAi();
      case 'create':
        await this.onCreate('Create', null);
        return;
      case 'update':
        await this.onUpdate('Update');
        return;
      case 'delete':
        await this.onDelete();
        return;

      case 'identifyFileType':
        await this.onIdentifyFileType();
        return;
      case 'setPrjFileType':
        await this.onSetPrjFileTypeId();
        return;
      default:
        return;
    }
  }

  /** 静态按钮点击处理（兼容旧版本） */
  public static async btn_Click(strCommandName: string, key: FileResourceKey | null) {
    console.log('btn_Click', strCommandName, key);
    const objPage = new FileResourceCRUDAiEx();
    let strMsg = '';

    switch (strCommandName) {
      case 'Query':
      case 'btnQuery':
        await objPage.executeCommand('query');
        break;

      case 'AddNewRecordWithMaxId':
      case 'btnAddNewRecordWithMaxId':
      case 'CreateWithMaxId':
      case 'AddNewRecord':
      case 'btnAddNewRecord':
      case 'Create':
        await objPage.executeCommand('create');
        break;

      case 'UpdateRecord':
      case 'btnUpdateRecord':
      case 'Update':
        await objPage.executeCommand('update');
        break;

      case 'ExportExcel':
      case 'btnExportExcel':
        await objPage.executeCommand('export');
        break;

      case 'DelRecord':
      case 'btnDelRecord':
      case 'Delete':
        await objPage.executeCommand('delete');
        break;

      case 'IdentifyFileType':
      case 'btnIdentifyFileType':
        await objPage.executeCommand('identifyFileType');
        break;

      case 'SetPrjFileTypeId':
      case 'btnSetPrjFileTypeId':
        await objPage.executeCommand('setPrjFileType');
        break;

      default:
        strMsg = `命令:${strCommandName}在函数(FileResourceCRUDExAi.btn_Click)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 列排序处理 */
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'codeTypeSimName|Ex':
        viewVarSet.sortFileResourceBy = `codeTypeSimName ${sortDirection}|(vCodeType_Sim)FileResource.CodeTypeId = vCodeType_Sim.CodeTypeId|`;
        break;
      case 'prjFileTypeName|Ex':
        viewVarSet.sortFileResourceBy = `prjFileTypeName ${sortDirection}|(PrjFileType)FileResource.PrjFileTypeId = PrjFileType.PrjFileTypeId|`;
        break;
      case 'tabName|Ex':
        viewVarSet.sortFileResourceBy = `tabName ${sortDirection}|(vPrjTab_Sim)FileResource.TabId = vPrjTab_Sim.TabId|`;
        break;
      default:
        viewVarSet.sortFileResourceBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_FileResource4Func(this.listPara.listDiv);
  }
}
