/**
 * 类名:PrjTabAddiCRUDEx(界面:PrjTabAddiCRUD,00050341)
 * 表名:PrjTabAddi(00050635)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/11 23:55:10
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { PrjTabAddiCRUD } from '@/viewsBase/Table_Field/PrjTabAddiCRUD';
import { viewVarSet, divVarSet, refPrjTabAddi_Edit } from '@/views/Table_Field/PrjTabAddiVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import PrjTabAddi_EditEx from '@/views/Table_Field/PrjTabAddi_EditEx';
/** PrjTabAddiCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class PrjTabAddiCRUDEx extends PrjTabAddiCRUD implements IShowList {
  //public static mstrSortPrjTabAddiBy = "TabId";
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
    console.log('InitVarSet in PrjTabAddiCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in PrjTabAddiCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_PrjTabAddi4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'PrjTabAddi':
        alert('该类没有绑定该函数：[this.BindGv_PrjTabAddi4Func]!');
        //this.BindGv_PrjTabAddi4Func(divVarSet.refDivList);
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
    let objPage: PrjTabAddiCRUDEx;
    let objPageEdit;
    if (PrjTabAddiCRUD.objPageCRUD == null) {
      PrjTabAddiCRUD.objPageCRUD = new PrjTabAddiCRUDEx();
      objPage = <PrjTabAddiCRUDEx>PrjTabAddiCRUDEx.objPageCRUD;
    } else {
      objPage = <PrjTabAddiCRUDEx>PrjTabAddiCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new PrjTabAddi_EditEx('PrjTabAddi_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refPrjTabAddi_Edit.value.btnPrjTabAddi_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new PrjTabAddi_EditEx('PrjTabAddi_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refPrjTabAddi_Edit.value.btnPrjTabAddi_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(PrjTabAddiCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'tabName|Ex':
        viewVarSet.sortPrjTabAddiBy = `vPrjTab_Sim|TabName ${sortDirection}|PrjTabAddi.TabId = vPrjTab_Sim.TabId`;
        break;
      case 'funcModuleName|Ex':
        viewVarSet.sortPrjTabAddiBy = `vPrjTab_Sim|FuncModuleName ${sortDirection}|PrjTabAddi.TabId = vPrjTab_Sim.TabId,vPrjTab_Sim.FuncModuleAgcId = FuncModule_Agc.FuncModuleAgcId`;
        break;
      default:
        viewVarSet.sortPrjTabAddiBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_PrjTabAddi4Func(this.thisDivList);
  }
}
