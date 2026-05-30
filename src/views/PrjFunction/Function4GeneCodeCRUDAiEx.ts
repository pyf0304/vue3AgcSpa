import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { divVarSet, viewVarSet } from '@/views/PrjFunction/Function4GeneCodeVueShare';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import Function4GeneCode_EditEx from '@/views/PrjFunction/Function4GeneCode_EditAiEx';
import { Function4GeneCodeCRUDAi } from '@/viewsBase/PrjFunction/Function4GeneCodeCRUDAi';
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { Function4GeneCodeCommandIdAi } from '@/viewsBase/PrjFunction/Function4GeneCodeCRUDAiCommands';
import { Function4GeneCodeKey } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import Function4GeneCode_DetailEx from '@/views/PrjFunction/Function4GeneCode_DetailAiEx';
/**
 * Function4GeneCodeCRUDAiEx 扩展类
 * 继承自 Function4GeneCodeCRUDAi 基类
 * 实现命令模式和 CRUD 操作
 * 生成器：AutoGCLib.Vue_ViewScriptAiEx_TS4TypeScript
 */
export default class Function4GeneCodeCRUDAiEx
  extends Function4GeneCodeCRUDAi
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, key: Function4GeneCodeKey) => void;
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
      case 'Function4GeneCode':
        this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
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
  public async onCreate(strCommandName: string, key: Function4GeneCodeKey) {
    const objPageEdit = new Function4GeneCode_EditEx(this);
    console.log(objPageEdit);
    objPageEdit.btnEdit_Click(strCommandName, key);
  }

  /**
   * 查看详情操作
   */
  public async onDetail(strCommandName: string, key: Function4GeneCodeKey | null) {
    const objPageDetail = new Function4GeneCode_DetailEx(this);
    console.log(objPageDetail);

    // 🔥 检查 key 是否为 null 或关键字段为空
    let actualKey = key;
    if (key == null || key.funcId4GC === '' || key.funcId4GC == null) {
      // 从列表中获取第一个被选中的记录关键字
      const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
      if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
        const strMsg = `在查看详情时，获取记录关键字为:${currentKeyId},不成功!`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      actualKey = { funcId4GC: currentKeyId };
    }
    objPageDetail.btnDetail_Click(strCommandName, actualKey as Function4GeneCodeKey);
  }

  /**
   * 更新记录操作
   */
  public async onUpdate(strCommandName: string) {
    const objPageEdit = new Function4GeneCode_EditEx(this);
    console.log(objPageEdit);

    const currentKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    if (currentKeyId == null || currentKeyId === '' || currentKeyId === 'undefined') {
      const strMsg = `在修改记录时，获取记录关键字为:${currentKeyId},不成功!`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const currentKey: Function4GeneCodeKey = { funcId4GC: currentKeyId };
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
    return await this.ExportExcel_Function4GeneCodeAi();
  }

  /**
   * SetInUse 操作
   * 设置字段值功能
   */
  public async onSetInUse() {
    await this.btnSetInUse_Click();
  }

  /**
   * 执行命令（命令模式入口）
   */
  public async executeCommand(
    commandId: Function4GeneCodeCommandIdAi,
  ): Promise<ExportExcelData | void> {
    switch (commandId) {
      case 'query':
        await this.onQuery();
        return;
      case 'export':
        return await this.onExportAi();
      case 'create':
        await this.onCreate('Create', { funcId4GC: '' });
        return;
      case 'detail':
        await this.onDetail('Detail', null);
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
      // 🔥 SetInUse 命令
      case 'setInUse':
        await this.onSetInUse();
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
  public static async btn_Click(strCommandName: string, key: Function4GeneCodeKey | null) {
    const objPage = new Function4GeneCodeCRUDAiEx();
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

      case 'SetInUse':
      case 'btnSetInUse':
        await objPage.executeCommand('setInUse');
        break;

      default:
        strMsg = `命令:${strCommandName}在函数(Function4GeneCodeCRUDExAi.btn_Click)中没有被处理!`;
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
      case 'featureName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `featureName ${sortDirection}|(vPrjFeatureSim)Function4GeneCode.FeatureId = vPrjFeatureSim.FeatureId|`;
        break;
      case 'funcName4Code|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `funcName4Code ${sortDirection}|(vFunction4Code_Sim)Function4GeneCode.FuncId4Code = vFunction4Code_Sim.FuncId4Code|`;
        break;
      case 'funcGCTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `funcGCTypeName ${sortDirection}|(FuncGCType)Function4GeneCode.FuncGCTypeId = FuncGCType.FuncGCTypeId|`;
        break;
      case 'progLangTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `progLangTypeName ${sortDirection}|(ProgLangType)Function4GeneCode.ProgLangTypeId = ProgLangType.ProgLangTypeId|`;
        break;
      case 'codeTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `codeTypeName ${sortDirection}|(vCodeType_Sim)Function4GeneCode.FuncCodeTypeId = vCodeType_Sim.CodeTypeId|`;
        break;
      case 'sqlDsTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `sqlDsTypeName ${sortDirection}|(SQLDSType)Function4GeneCode.SqlDsTypeId = SQLDSType.SqlDsTypeId|`;
        break;
      case 'funcTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `funcTypeName ${sortDirection}|(FunctionType)Function4GeneCode.FuncTypeId = FunctionType.FuncTypeId|`;
        break;
      default:
        viewVarSet.sortFunction4GeneCodeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_Function4GeneCode4Func(this.listPara.listDiv);
  }
}
