import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  divVarSet,
  refFunctionTemplateRela_Detail,
  viewVarSet,
} from '@/views/PrjFunction/FunctionTemplateRelaVueShare';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import FunctionTemplateRela_EditAiEx from '@/views/PrjFunction/FunctionTemplateRela_EditAiEx';
import { FunctionTemplateRelaCRUDAi } from '@/viewsBase/PrjFunction/FunctionTemplateRelaCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { FunctionTemplateRelaCommandIdAi } from '@/viewsBase/PrjFunction/FunctionTemplateRelaCRUDAiCommands';

/**
 * FunctionTemplateRelaCRUDExAi 扩展类
 * 继承自 FunctionTemplateRelaCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 * 生成器：AutoGCLib.Vue_ViewScriptExAi_TS4TypeScript
 */
export default class FunctionTemplateRelaCRUDExAi
  extends FunctionTemplateRelaCRUDAi
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
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
      case 'FunctionTemplateRela':
        this.BindGv_FunctionTemplateRela4Func(divVarSet.refDivList);
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
  public async onCreate(strCommandName: string, strKeyId: string) {
    const objPageEdit = new FunctionTemplateRela_EditAiEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, strKeyId);
  }

  /**
   * 查看详情操作
   */
  public async onDetail(strCommandName: string, strKeyId: string) {
    refFunctionTemplateRela_Detail.value.btnFunctionTemplateRela_Detail_Click(
      strCommandName,
      strKeyId,
    );
  }

  /**
   * 更新记录操作
   */
  public async onUpdate(strCommandName: string, strKeyId: string) {
    const objPageEdit = new FunctionTemplateRela_EditAiEx(this);
    console.log(objPageEdit);

    const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
      const strMsg = `在修改记录时，获取记录关键字为:${currentKeyId},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    objPageEdit.btnEdit_Click(strCommandName, currentKeyId || strKeyId);
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
    return await this.ExportExcel_FunctionTemplateRelaAi();
  }

  /**
   * 执行命令（命令模式入口）
   */
  public async executeCommand(
    commandId: FunctionTemplateRelaCommandIdAi,
  ): Promise<ExportExcelData | void> {
    switch (commandId) {
      case 'query':
        await this.onQuery();
        return;
      case 'export':
        return await this.onExportAi();
      case 'create':
        await this.onCreate('Create', '');
        return;
      case 'update':
        await this.onUpdate('Update', '');
        return;
      case 'delete':
        await this.onDelete();
        return;
      // 🔥 SetFunctionTemplateId 命令
      case 'setFunctionTemplate':
        await this.btnSetFunctionTemplateId_Click();
        return;
      default:
        return;
    }
  }

  /**
   * 静态按钮点击处理（兼容旧版本）
   * 将旧的按钮命令名统一映射到新的命令ID
   */
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    const objPage = new FunctionTemplateRelaCRUDExAi();
    let strMsg = '';

    switch (strCommandName) {
      // 🔥 查询命令
      case 'Query':
      case 'btnQuery':
        await objPage.executeCommand('query');
        break;

      // 🔥 创建命令（所有别名统一映射到 'create'）
      case 'AddNewRecordWithMaxId':
      case 'btnAddNewRecordWithMaxId':
      case 'CreateWithMaxId':
      case 'AddNewRecord':
      case 'btnAddNewRecord':
      case 'Create':
        await objPage.executeCommand('create');
        break;

      // 🔥 详情命令
      case 'Detail':
      case 'btnDetail':
        await objPage.onDetail(strCommandName, strKeyId);
        break;

      // 🔥 更新命令（所有别名统一映射到 'update'）
      case 'UpdateRecord':
      case 'btnUpdateRecord':
      case 'Update':
        await objPage.executeCommand('update');
        break;

      // 🔥 导出命令
      case 'ExportExcel':
      case 'btnExportExcel':
        await objPage.executeCommand('export');
        break;

      // 🔥 删除命令（所有别名统一映射到 'delete'）
      case 'DelRecord':
      case 'btnDelRecord':
      case 'Delete':
        await objPage.executeCommand('delete');
        break;

      // 🔥 设置字段值命令: SetFunctionTemplateId
      case 'SetFunctionTemplateId':
      case 'btnSetFunctionTemplateId':
        await objPage.executeCommand('setFunctionTemplate');
        break;

      default:
        strMsg = `命令:${strCommandName}在函数(FunctionTemplateRelaCRUDExAi.btn_Click)中没有被处理!`;
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
      default:
        viewVarSet.sortFunctionTemplateRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_FunctionTemplateRela4Func(this.listPara.listDiv);
  }
}
