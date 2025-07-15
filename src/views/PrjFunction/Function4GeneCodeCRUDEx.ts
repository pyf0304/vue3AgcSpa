/**
 * 类名:Function4GeneCodeCRUDEx(界面:Function4GeneCodeCRUD,00050342)
 * 表名:Function4GeneCode(00050311)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 23:44:24
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { Function4GeneCodeCRUD } from '@/viewsBase/PrjFunction/Function4GeneCodeCRUD';
import {
  viewVarSet,
  divVarSet,
  refFunction4GeneCode_Edit,
  refFunction4GeneCode_Detail,
} from '@/views/PrjFunction/Function4GeneCodeVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import Function4GeneCode_EditEx from '@/views/PrjFunction/Function4GeneCode_EditEx';
/** Function4GeneCodeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class Function4GeneCodeCRUDEx extends Function4GeneCodeCRUD implements IShowList {
  //public static mstrSortFunction4GeneCodeBy = "FuncId4GC";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in Function4GeneCodeCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in Function4GeneCodeCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'Function4GeneCode':
        alert('该类没有绑定该函数：[this.BindGv_Function4GeneCode4Func]!');
        //this.BindGv_Function4GeneCode4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: Function4GeneCodeCRUDEx;
    let objPageEdit;
    if (Function4GeneCodeCRUD.objPageCRUD == null) {
      Function4GeneCodeCRUD.objPageCRUD = new Function4GeneCodeCRUDEx();
      objPage = <Function4GeneCodeCRUDEx>Function4GeneCodeCRUDEx.objPageCRUD;
    } else {
      objPage = <Function4GeneCodeCRUDEx>Function4GeneCodeCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetInUse': //自定义功能:设置是否在用
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new Function4GeneCode_EditEx('Function4GeneCode_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refFunction4GeneCode_Edit.value.btnFunction4GeneCode_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFunction4GeneCode_Detail.value.btnFunction4GeneCode_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new Function4GeneCode_EditEx('Function4GeneCode_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refFunction4GeneCode_Edit.value.btnFunction4GeneCode_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要复制的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(Function4GeneCodeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'featureName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `vPrjFeatureSim|featureName ${sortDirection}|Function4GeneCode.FeatureId = vPrjFeatureSim.FeatureId`;
        break;
      case 'funcName4Code|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `vFunction4Code_Sim|funcName4Code ${sortDirection}|Function4GeneCode.FuncId4Code = vFunction4Code_Sim.FuncId4Code`;
        break;
      case 'funcGCTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `FuncGCType|funcGCTypeName ${sortDirection}|Function4GeneCode.FuncGCTypeId = FuncGCType.FuncGCTypeId`;
        break;
      case 'progLangTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `ProgLangType|progLangTypeName ${sortDirection}|Function4GeneCode.ProgLangTypeId = ProgLangType.ProgLangTypeId`;
        break;
      case 'codeTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `vCodeType_Sim|codeTypeName ${sortDirection}|Function4GeneCode.FuncCodeTypeId = vCodeType_Sim.CodeTypeId`;
        break;
      case 'sqlDsTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `SQLDSType|sqlDsTypeName ${sortDirection}|Function4GeneCode.SqlDsTypeId = SQLDSType.SqlDsTypeId`;
        break;
      case 'funcTypeName|Ex':
        viewVarSet.sortFunction4GeneCodeBy = `FunctionType|funcTypeName ${sortDirection}|Function4GeneCode.FuncTypeId = FunctionType.FuncTypeId`;
        break;
      case '|Ex':
        viewVarSet.sortFunction4GeneCodeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortFunction4GeneCodeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_Function4GeneCode4Func(this.listPara.listDiv);
  }
}
