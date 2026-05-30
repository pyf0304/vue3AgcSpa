import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { divVarSet, viewVarSet } from '@/views/GeneCode/GCConstantPrjIdRelaVueShare';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyLstInDivObj, // 🔥 仅多关键字时导入
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { GCConstantPrjIdRela_SplitKeyLst } from '@/ts/L3ForWApi/GeneCode/clsGCConstantPrjIdRelaWApi';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import GCConstantPrjIdRela_EditEx from '@/views/GeneCode/GCConstantPrjIdRela_EditAiEx';
import GCConstantPrjIdRela_DetailEx from '@/views/GeneCode/GCConstantPrjIdRela_DetailAiEx';
import { GCConstantPrjIdRelaCRUDAi } from '@/viewsBase/GeneCode/GCConstantPrjIdRelaCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { GCConstantPrjIdRelaCommandIdAi } from '@/viewsBase/GeneCode/GCConstantPrjIdRelaCRUDAiCommands';
import { GCConstantPrjIdRelaKey } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';

/**
 * GCConstantPrjIdRelaCRUDAiEx 扩展类
 * 继承自 GCConstantPrjIdRelaCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 * 生成器：AutoGCLib.Vue_ViewScriptAiEx_TS4TypeScript
 */
export default class GCConstantPrjIdRelaCRUDAiEx
  extends GCConstantPrjIdRelaCRUDAi
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, key: GCConstantPrjIdRelaKey) => void;
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
      case 'GCConstantPrjIdRela':
        this.BindGv_GCConstantPrjIdRela4Func(divVarSet.refDivList);
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
  public async onCreate(strCommandName: string, key: GCConstantPrjIdRelaKey | null) {
    const objPageEdit = new GCConstantPrjIdRela_EditEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, key);
  }

  /**
   * 查看详情操作
   */
  public async onDetail(strCommandName: string, key: GCConstantPrjIdRelaKey | null) {
    const objPageDetail = new GCConstantPrjIdRela_DetailEx(this);
    console.log(objPageDetail);

    // 🔥 检查 key 是否为 null 或关键字段为空
    let actualKey = key;
    if (
      key == null ||
      key.constId === '' ||
      key.constId == null ||
      key.prjId === '' ||
      key.prjId == null
    ) {
      // 从列表中获取第一个被选中的记录关键字
      const currentKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
      const currKey = GCConstantPrjIdRela_SplitKeyLst(currentKeyLst);
      if (
        currKey.constId == null ||
        currKey.constId === '' ||
        currKey.constId === 'undefined' ||
        currKey.prjId == null ||
        currKey.prjId === '' ||
        currKey.prjId === 'undefined'
      ) {
        const strMsg = `在查看详情时，获取记录关键字为:${JSON.stringify(currKey)},不成功!`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      actualKey = currKey;
    }
    objPageDetail.btnDetail_Click(strCommandName, actualKey as GCConstantPrjIdRelaKey);
  }

  /**
   * 更新记录操作
   */
  public async onUpdate(strCommandName: string) {
    const objPageEdit = new GCConstantPrjIdRela_EditEx(this);
    console.log(objPageEdit);

    const currentKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
    const currKey = GCConstantPrjIdRela_SplitKeyLst(currentKeyLst);
    if (
      currKey.constId == null ||
      currKey.constId === '' ||
      currKey.constId === 'undefined' ||
      currKey.prjId == null ||
      currKey.prjId === '' ||
      currKey.prjId === 'undefined'
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
    return await this.ExportExcel_GCConstantPrjIdRelaAi();
  }

  /**
   * 执行命令（命令模式入口）
   */
  public async executeCommand(
    commandId: GCConstantPrjIdRelaCommandIdAi,
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
      case 'detail':
        await this.onDetail('Detail', null);
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
  public static async btn_Click(strCommandName: string, key: GCConstantPrjIdRelaKey | null) {
    const objPage = new GCConstantPrjIdRelaCRUDAiEx();
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

      default:
        strMsg = `命令:${strCommandName}在函数(GCConstantPrjIdRelaCRUDExAi.btn_Click)中没有被处理!`;
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
      case 'constName|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `constName ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|`;
        break;
      case 'dataTypeName|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `dataTypeName ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|(DataTypeAbbr)GCDefaConstants.DataTypeId = DataTypeAbbr.DataTypeId|`;
        break;
      case 'csType|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `csType ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|(DataTypeAbbr)GCDefaConstants.DataTypeId = DataTypeAbbr.DataTypeId|`;
        break;
      case 'typeScriptType|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `typeScriptType ${sortDirection}|(GCDefaConstants)GCConstantPrjIdRela.ConstId = GCDefaConstants.ConstId|(DataTypeAbbr)GCDefaConstants.DataTypeId = DataTypeAbbr.DataTypeId|`;
        break;
      case 'prjName|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = `prjName ${sortDirection}|(Projects)GCConstantPrjIdRela.PrjId = Projects.PrjId|`;
        break;
      case 'dateTimeSim|Ex':
        viewVarSet.sortGCConstantPrjIdRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortGCConstantPrjIdRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_GCConstantPrjIdRela4Func(this.listPara.listDiv);
  }
}
