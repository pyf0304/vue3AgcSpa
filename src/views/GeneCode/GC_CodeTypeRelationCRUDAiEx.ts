import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { divVarSet, viewVarSet } from '@/views/GeneCode/GC_CodeTypeRelationVueShare';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj, // ✅ 仅单关键字时导入
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import GC_CodeTypeRelation_EditEx from '@/views/GeneCode/GC_CodeTypeRelation_EditAiEx';
import { GC_CodeTypeRelationCRUDAi } from '@/viewsBase/GeneCode/GC_CodeTypeRelationCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { GC_CodeTypeRelationCommandIdAi } from '@/viewsBase/GeneCode/GC_CodeTypeRelationCRUDAiCommands';
import { GC_CodeTypeRelationKey } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';

/**
 * GC_CodeTypeRelationCRUDAiEx 扩展类
 * 继承自 GC_CodeTypeRelationCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 * 生成器：AutoGCLib.Vue_ViewScriptAiEx_TS4TypeScript
 */
export default class GC_CodeTypeRelationCRUDAiEx
  extends GC_CodeTypeRelationCRUDAi
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, key: GC_CodeTypeRelationKey) => void;
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
      case 'GC_CodeTypeRelation':
        this.BindGv_GC_CodeTypeRelation4Func(divVarSet.refDivList);
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
  public async onCreate(strCommandName: string, key: GC_CodeTypeRelationKey | null) {
    const objPageEdit = new GC_CodeTypeRelation_EditEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, key);
  }

  /**
   * 更新记录操作
   */
  public async onUpdate(strCommandName: string) {
    const objPageEdit = new GC_CodeTypeRelation_EditEx(this);
    console.log(objPageEdit);

    const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
      const strMsg = `在修改记录时，获取记录关键字为:${currentKeyId},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const currentKey: GC_CodeTypeRelationKey = { relationId: Number(currentKeyId) };
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
    return await this.ExportExcel_GC_CodeTypeRelationAi();
  }

  /**
   * SetChildCodeTypeId 操作
   * 设置字段值功能
   */
  public async onSetChildCodeTypeId() {
    await this.btnSetChildCodeTypeId_Click();
  }
  /**
   * SetCtRelationTypeId 操作
   * 设置字段值功能
   */
  public async onSetCtRelationTypeId() {
    await this.btnSetCtRelationTypeId_Click();
  }

  /**
   * 执行命令（命令模式入口）
   */
  public async executeCommand(
    commandId: GC_CodeTypeRelationCommandIdAi,
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
      case 'copy':
        await this.onCopy();
        return;
      case 'update':
        await this.onUpdate('Update');
        return;
      case 'delete':
        await this.onDelete();
        return;
      // 🔥 SetChildCodeTypeId 命令
      case 'setChildCodeType':
        await this.onSetChildCodeTypeId();
        return;
      // 🔥 SetCtRelationTypeId 命令
      case 'setCtRelationType':
        await this.onSetCtRelationTypeId();
        return;
      default:
        return;
    }
  }

  /**
   * 复制记录操作
   */
  public async onCopy() {
    await this.btnCopyRecord_Click();
  }

  /**
   * 静态按钮点击处理（兼容旧版本）
   */
  public static async btn_Click(strCommandName: string, key: GC_CodeTypeRelationKey | null) {
    console.log('btn_Click', strCommandName, key);
    const objPage = new GC_CodeTypeRelationCRUDAiEx();
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

      case 'CopyRecord':
      case 'btnCopyRecord':
      case 'Clone':
        await objPage.executeCommand('copy');
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

      case 'SetChildCodeTypeId':
      case 'btnSetChildCodeTypeId':
        await objPage.executeCommand('setChildCodeType');
        break;
      case 'SetCtRelationTypeId':
      case 'btnSetCtRelationTypeId':
        await objPage.executeCommand('setCtRelationType');
        break;

      default:
        strMsg = `命令:${strCommandName}在函数(GC_CodeTypeRelationCRUDExAi.btn_Click)中没有被处理!`;
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
      case 'parentCodeTypeName|Ex':
        viewVarSet.sortGC_CodeTypeRelationBy = `parentCodeTypeName ${sortDirection}|(vCodeType_Sim)GC_CodeTypeRelation.ChildCodeTypeId = vCodeType_Sim.CodeTypeId|`;
        break;
      case 'relationTypeName|Ex':
        viewVarSet.sortGC_CodeTypeRelationBy = `relationTypeName ${sortDirection}|(CTRelationType)GC_CodeTypeRelation.CtRelationTypeId = CTRelationType.CtRelationTypeId|`;
        break;
      case 'childCodeTypeName|Ex':
        viewVarSet.sortGC_CodeTypeRelationBy = `childCodeTypeName ${sortDirection}|(vCodeType_Sim)GC_CodeTypeRelation.ChildCodeTypeId = vCodeType_Sim.CodeTypeId|`;
        break;
      case 'arrowType|Ex':
        viewVarSet.sortGC_CodeTypeRelationBy = `arrowType ${sortDirection}|(CTRelationType)GC_CodeTypeRelation.CtRelationTypeId = CTRelationType.CtRelationTypeId|`;
        break;
      default:
        viewVarSet.sortGC_CodeTypeRelationBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_GC_CodeTypeRelation4Func(this.listPara.listDiv);
  }
}
