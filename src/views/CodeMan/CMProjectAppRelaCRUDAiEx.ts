import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { divVarSet, viewVarSet } from '@/views/CodeMan/CMProjectAppRelaVueShare';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj, // ✅ 仅单关键字时导入
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import CMProjectAppRela_EditEx from '@/views/CodeMan/CMProjectAppRela_EditAiEx';
import { CMProjectAppRelaCRUDAi } from '@/viewsBase/CodeMan/CMProjectAppRelaCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { CMProjectAppRelaCommandIdAi } from '@/viewsBase/CodeMan/CMProjectAppRelaCRUDAiCommands';
import { CMProjectAppRelaKey } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';

/**
 * CMProjectAppRelaCRUDAiEx 扩展类
 * 继承自 CMProjectAppRelaCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 * 生成器：AutoGCLib.Vue_ViewScriptAiEx_TS4TypeScript
 */
export default class CMProjectAppRelaCRUDAiEx extends CMProjectAppRelaCRUDAi implements IShowList {
  public static vuebtn_Click: (strCommandName: string, key: CMProjectAppRelaKey) => void;
  public static GetPropValue: (strPropName: string) => string;

  public get pageSize(): number {
    return this._pageSize ?? 10;
  }

  /**
   * 绑定数据视图（同步方法）
   */
  public BindGv(strType: string, strPara: string) {
    this.BindGvCache(strType, strPara);
  }

  /**
   * 绑定数据视图（从缓存）
   */
  public BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'CMProjectAppRela':
        this.BindGv_CMProjectAppRela4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 查询操作
   */
  public async onQuery() {
    await this.btnQuery_Click();
  }

  /**
   * 创建记录操作
   */
  public async onCreate(strCommandName: string, key: CMProjectAppRelaKey | null) {
    const objPageEdit = new CMProjectAppRela_EditEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, key);
  }

  /**
   * 更新记录操作
   */
  public async onUpdate(strCommandName: string) {
    const objPageEdit = new CMProjectAppRela_EditEx(this);
    console.log(objPageEdit);

    const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
      const strMsg = `在修改记录时，获取记录关键字为:${currentKeyId},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const currentKey: CMProjectAppRelaKey = { cMProjectAppRelaId: Number(currentKeyId) };
    objPageEdit.btnEdit_Click(strCommandName, currentKey);
  }

  /**
   * 删除记录操作
   */
  public async onDelete() {
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length === 0) {
      alert(`请选择需要删除的[${this.thisTabName}]记录!`);
      return;
    }
    await this.btnDelRecord_Click();
  }

  /**
   * 导出 Excel 操作
   */
  public async onExportAi(): Promise<ExportExcelData> {
    return await this.ExportExcel_CMProjectAppRelaCacheAi();
  }

  /**
   * 执行命令（命令模式入口）
   */
  public async executeCommand(
    commandId: CMProjectAppRelaCommandIdAi,
  ): Promise<ExportExcelData | void> {
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
      default:
        return;
    }
  }

  /**
   * 静态按钮点击处理（兼容旧版本）
   */
  public static async btn_Click(strCommandName: string, key: CMProjectAppRelaKey | null) {
    console.log('btn_Click', strCommandName, key);
    const objPage = new CMProjectAppRelaCRUDAiEx();
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

      default:
        strMsg = `命令:${strCommandName}在函数(CMProjectAppRelaCRUDExAi.btn_Click)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 列排序处理
   */
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'cmPrjName|Ex':
        viewVarSet.sortCMProjectAppRelaBy = `cmPrjName ${sortDirection}|(CMProject)CMProjectAppRela.CmPrjId = CMProject.CmPrjId|`;
        break;
      case 'applicationTypeName|Ex':
        viewVarSet.sortCMProjectAppRelaBy = `applicationTypeName ${sortDirection}|(ApplicationType)CMProjectAppRela.ApplicationTypeId = ApplicationType.ApplicationTypeId|`;
        break;
      default:
        viewVarSet.sortCMProjectAppRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_CMProjectAppRela4Func(this.listPara.listDiv);
  }
}
