/**
 * 类名:ViewIdGCVariableRelaCRUDEx(界面:ViewIdGCVariableRelaCRUD)
 * 表名:ViewIdGCVariableRela(00050631)
 * 版本:2024.05.19.1(服务器:DESKTOP-1KM2OK3)
 * 日期:2024/05/28 01:30:21
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { ViewIdGCVariableRelaCRUD } from '@/viewsBase/GeneCode/ViewIdGCVariableRelaCRUD';

import {
  GetCheckedKeyLstsInDivObj,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';

import {
  divVarSet,
  refViewIdGCVariableRela_Edit,
  viewVarSet,
} from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import { Format } from '@/ts/PubFun/clsString';
import ViewIdGCVariableRela_EditEx from '@/views/GeneCode/ViewIdGCVariableRela_EditEx';
/** ViewIdGCVariableRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class ViewIdGCVariableRelaCRUDExBak extends ViewIdGCVariableRelaCRUD implements IShowList {
  //public static mstrSortViewIdGCVariableRelaBy = "VarId";
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
    console.log('InitVarSet in ViewIdGCVariableRelaCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewIdGCVariableRelaCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ViewIdGCVariableRela':
        alert('该类没有绑定该函数：[this.BindGv_ViewIdGCVariableRela4Func]!');
        //this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
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
    let objPage: ViewIdGCVariableRelaCRUDExBak;
    let objPageEdit;
    if (ViewIdGCVariableRelaCRUD.objPageCRUD == null) {
      ViewIdGCVariableRelaCRUD.objPageCRUD = new ViewIdGCVariableRelaCRUDExBak();
      objPage = <ViewIdGCVariableRelaCRUDExBak>ViewIdGCVariableRelaCRUD.objPageCRUD;
    } else {
      objPage = <ViewIdGCVariableRelaCRUDExBak>ViewIdGCVariableRelaCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
    // let objKeyLst;
    let strKeyLst = '';
    switch (strCommandName) {
      case 'SetRetrievalMethodId': //自定义功能:设置获取方式Id
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new ViewIdGCVariableRela_EditEx('ViewIdGCVariableRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refViewIdGCVariableRela_Edit.value.btnViewIdGCVariableRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ViewIdGCVariableRela_EditEx('ViewIdGCVariableRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyLst = GetFirstCheckedKeyLstInDivObj(divVarSet.refDivList);
        refViewIdGCVariableRela_Edit.value.btnViewIdGCVariableRela_Edit_Click(
          strCommandName,
          strKeyLst,
        );
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyLsts.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(ViewIdGCVariableRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    viewVarSet.sortViewIdGCVariableRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
    // PrjTabCRUD.ascOrDesc4SortFun = sortDirection;
    // PrjTabCRUD.sortFunStatic = sortFun;
    await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
  }
}
