/**
 * 类名:vFunctionTemplateRela_SimCRUDEx(界面:vFunctionTemplateRela_SimCRUD,00050321)
 * 表名:vFunctionTemplateRela_Sim(00050604)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 06:22:17
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
import { vFunctionTemplateRela_SimCRUD } from '@/viewsBase/PrjFunction/vFunctionTemplateRela_SimCRUD';
import { viewVarSet, divVarSet } from '@/views/PrjFunction/vFunctionTemplateRela_SimVueShare';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** vFunctionTemplateRela_SimCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class vFunctionTemplateRela_SimCRUDEx
  extends vFunctionTemplateRela_SimCRUD
  implements IShowList
{
  //public static mstrSortvFunctionTemplateRela_SimBy = "FuncId4GC";
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
    console.log('InitVarSet in vFunctionTemplateRela_SimCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in vFunctionTemplateRela_SimCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_vFunctionTemplateRela_Sim4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vFunctionTemplateRela_Sim':
        alert('该类没有绑定该函数：[this.BindGv_vFunctionTemplateRela_Sim4Func]!');
        //this.BindGv_vFunctionTemplateRela_Sim4Func(divVarSet.refDivList);
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
    console.log('btn_Click', strCommandName, strKeyId);
    let objPage: vFunctionTemplateRela_SimCRUDEx;
    // let objPageEdit;
    if (vFunctionTemplateRela_SimCRUD.objPageCRUD == null) {
      vFunctionTemplateRela_SimCRUD.objPageCRUD = new vFunctionTemplateRela_SimCRUDEx();
      objPage = <vFunctionTemplateRela_SimCRUDEx>vFunctionTemplateRela_SimCRUDEx.objPageCRUD;
    } else {
      objPage = <vFunctionTemplateRela_SimCRUDEx>vFunctionTemplateRela_SimCRUDEx.objPageCRUD;
    }
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'progLangTypeName|Ex':
        viewVarSet.sortvFunctionTemplateRela_SimBy = `vFunction4GeneCode_Sim|progLangTypeName ${sortDirection}|vFunctionTemplateRela_Sim.FuncId4GC = vFunction4GeneCode_Sim.FuncId4GC,vFunction4GeneCode_Sim.FuncCodeTypeId = vCodeType_Sim.CodeTypeId,vCodeType_Sim.ProgLangTypeId = ProgLangType.ProgLangTypeId`;
        break;
      case 'sqlDsTypeId|Ex':
        viewVarSet.sortvFunctionTemplateRela_SimBy = `vFunction4GeneCode_Sim|sqlDsTypeId ${sortDirection}|vFunctionTemplateRela_Sim.FuncId4GC = vFunction4GeneCode_Sim.FuncId4GC`;
        break;
      default:
        viewVarSet.sortvFunctionTemplateRela_SimBy = Format(
          '{0} {1}',
          sortColumnKey,
          sortDirection,
        );
        break;
    }
    await this.BindGv_vFunctionTemplateRela_Sim4Func(this.listPara.listDiv);
  }
}
