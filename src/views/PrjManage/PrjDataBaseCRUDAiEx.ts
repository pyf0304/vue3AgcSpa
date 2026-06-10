import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { divVarSet, viewVarSet } from '@/views/PrjManage/PrjDataBaseVueShare';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import PrjDataBase_EditEx from '@/views/PrjManage/PrjDataBase_EditAiEx';
import { PrjDataBaseCRUDAi } from '@/viewsBase/PrjManage/PrjDataBaseCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { PrjDataBaseCommandIdAi } from '@/viewsBase/PrjManage/PrjDataBaseCRUDAiCommands';
import { PrjDataBaseKey } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
import PrjDataBase_DetailEx from '@/views/PrjManage/PrjDataBase_DetailAiEx';
/**
 * PrjDataBaseCRUDAiEx 扩展类
 * 继承自 PrjDataBaseCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 * 生成器：AutoGCLib.Vue_ViewScriptAiEx_TS4TypeScript
 */
export default class PrjDataBaseCRUDAiEx extends PrjDataBaseCRUDAi implements IShowList {
  public static vuebtn_Click: (strCommandName: string, key: PrjDataBaseKey) => void;
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
      case 'PrjDataBase':
        this.BindGv_PrjDataBase4Func(divVarSet.refDivList);
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
  public async onCreate(strCommandName: string, key: PrjDataBaseKey) {
    const objPageEdit = new PrjDataBase_EditEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, key);
  }

  /**
   * 查看详情操作
   */
  public async onDetail(strCommandName: string, key: PrjDataBaseKey | null) {
    const objPageDetail = new PrjDataBase_DetailEx(this);
    console.log(objPageDetail);

    // 🔥 检查 key 是否为 null 或关键字段为空
    let actualKey = key;
    if (key == null || key.prjDataBaseId === '' || key.prjDataBaseId == null) {
      // 从列表中获取第一个被选中的记录关键字
      const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
        const strMsg = `在查看详情时，获取记录关键字为:${currentKeyId},不成功!`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      actualKey = { prjDataBaseId: currentKeyId };
    }
    objPageDetail.btnDetail_Click(strCommandName, actualKey as PrjDataBaseKey);
  }

  /**
   * 更新记录操作
   */
  public async onUpdate(strCommandName: string) {
    const objPageEdit = new PrjDataBase_EditEx(this);
    console.log(objPageEdit);

    const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
      const strMsg = `在修改记录时，获取记录关键字为:${currentKeyId},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const currentKey: PrjDataBaseKey = { prjDataBaseId: currentKeyId };
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
    return await this.ExportExcel_PrjDataBaseAi();
  }

  /**
   * SetUseStateId 操作
   * 设置字段值功能
   */
  public async onSetUseStateId() {
    await this.btnSetUseStateId_Click();
  }

  /**
   * 执行命令（命令模式入口）
   */
  public async executeCommand(commandId: PrjDataBaseCommandIdAi): Promise<ExportExcelData | void> {
    switch (commandId) {
      case 'query':
        await this.onQuery();
        return;
      case 'export':
        return await this.onExportAi();
      case 'create':
        await this.onCreate('Create', { prjDataBaseId: '' });
        return;
      case 'detail':
        await this.onDetail('Detail', null);
        return;
      case 'update':
        await this.onUpdate('Update');
        return;
      case 'delete':
        await this.onDelete();
        return;
      // 🔥 SetUseStateId 命令
      case 'setUseState':
        await this.onSetUseStateId();
        return;
      default:
        return;
    }
  }

  /**
   * 静态按钮点击处理（兼容旧版本）
   */
  public static async btn_Click(strCommandName: string, key: PrjDataBaseKey | null) {
    const objPage = new PrjDataBaseCRUDAiEx();
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

      case 'Detail':
      case 'btnDetail':
        await objPage.onDetail(strCommandName, key);
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

      case 'SetUseStateId':
      case 'btnSetUseStateId':
        await objPage.executeCommand('setUseState');
        break;

      default:
        strMsg = `命令:${strCommandName}在函数(PrjDataBaseCRUDExAi.btn_Click)中没有被处理!`;
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
      case 'dataBaseTypeName|Ex':
        viewVarSet.sortPrjDataBaseBy = `dataBaseTypeName ${sortDirection}|(DataBaseType)PrjDataBase.DataBaseTypeId = DataBaseType.DataBaseTypeId|`;
        break;
      case 'useStateName|Ex':
        viewVarSet.sortPrjDataBaseBy = `useStateName ${sortDirection}|(UseState)PrjDataBase.UseStateId = UseState.UseStateId|`;
        break;
      default:
        viewVarSet.sortPrjDataBaseBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_PrjDataBase4Func(this.listPara.listDiv);
  }
}
