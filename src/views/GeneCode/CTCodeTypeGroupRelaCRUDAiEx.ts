import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { divVarSet, viewVarSet } from '@/views/GeneCode/CTCodeTypeGroupRelaVueShare';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyLstInDivObj, // 🔥 仅多关键字时导入
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { CTCodeTypeGroupRela_SplitKeyLst } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupRelaWApi';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import CTCodeTypeGroupRela_EditEx from '@/views/GeneCode/CTCodeTypeGroupRela_EditAiEx';
import { CTCodeTypeGroupRelaCRUDAi } from '@/viewsBase/GeneCode/CTCodeTypeGroupRelaCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { CTCodeTypeGroupRelaCommandIdAi } from '@/viewsBase/GeneCode/CTCodeTypeGroupRelaCRUDAiCommands';
import { CTCodeTypeGroupRelaKey } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';

/**
 * CTCodeTypeGroupRelaCRUDAiEx 扩展类
 * 继承自 CTCodeTypeGroupRelaCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 * 生成器：AutoGCLib.Vue_ViewScriptAiEx_TS4TypeScript
 */
export default class CTCodeTypeGroupRelaCRUDAiEx
  extends CTCodeTypeGroupRelaCRUDAi
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, key: CTCodeTypeGroupRelaKey) => void;
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
  public async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'CTCodeTypeGroupRela':
        await this.BindGv_CTCodeTypeGroupRela4Func(divVarSet.refDivList);
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
  public async onCreate(strCommandName: string, key: CTCodeTypeGroupRelaKey | null) {
    const objPageEdit = new CTCodeTypeGroupRela_EditEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, key);
  }

  /**
   * 更新记录操作
   */
  public async onUpdate(strCommandName: string) {
    const objPageEdit = new CTCodeTypeGroupRela_EditEx(this);
    console.log(objPageEdit);

    const currentKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
    const currKey = CTCodeTypeGroupRela_SplitKeyLst(currentKeyLst);
    if (
      currKey.ctGroupId == null ||
      currKey.ctGroupId === '' ||
      currKey.ctGroupId === 'undefined' ||
      currKey.codeTypeId == null ||
      currKey.codeTypeId === '' ||
      currKey.codeTypeId === 'undefined'
    ) {
      const strMsg = `在修改记录时，获取记录关键字为:${JSON.stringify(currKey)},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    objPageEdit.btnEdit_Click(strCommandName, currKey);
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
    return await this.ExportExcel_CTCodeTypeGroupRelaAi();
  }

  /**
   * 执行命令（命令模式入口）
   */
  public async executeCommand(
    commandId: CTCodeTypeGroupRelaCommandIdAi,
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
  public static async btn_Click(strCommandName: string, key: CTCodeTypeGroupRelaKey | null) {
    console.log('btn_Click', strCommandName, key);
    const objPage = new CTCodeTypeGroupRelaCRUDAiEx();
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
        strMsg = `命令:${strCommandName}在函数(CTCodeTypeGroupRelaCRUDExAi.btn_Click)中没有被处理!`;
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
      case 'groupName|Ex':
        viewVarSet.sortCTCodeTypeGroupRelaBy = `groupName ${sortDirection}|(CTCodeTypeGroup)CTCodeTypeGroupRela.CtGroupId = CTCodeTypeGroup.CtGroupId|`;
        break;
      case 'codeTypeName|Ex':
        viewVarSet.sortCTCodeTypeGroupRelaBy = `codeTypeName ${sortDirection}|(vCodeType_Sim)CTCodeTypeGroupRela.CodeTypeId = vCodeType_Sim.CodeTypeId|`;
        break;
      default:
        viewVarSet.sortCTCodeTypeGroupRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_CTCodeTypeGroupRela4Func(this.listPara.listDiv);
  }
}
