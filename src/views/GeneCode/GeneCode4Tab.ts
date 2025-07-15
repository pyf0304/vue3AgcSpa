/*-- -- -- -- -- -- -- -- -- -- --
类名:GeneCode4Tab
表名:PrjTab(00050009)
生成代码版本:2019.07.04.1
生成日期:2019/07/04 17:06:33
生成者:
工程名称:AGC
工程ID:0005
相关数据库:101.251.68.133,9433AGC_CS12
prjDataBaseId:0005
模块中文名:字段、表维护
模块英文名:Table_Field
框架-层名:WApi界面脚本后台_TS(WA_ViewScriptCS_TS)
编程语言:TypeScript
== == == == == == == == == == == == 
*/

import $ from 'jquery';
import { clsGCPara } from '@/ts/L0Entity/clsGCPara';
import { AutoGeneCode_GeneCodeAsync } from '@/ts/L3ForWApiEx/GeneCode/AutoGeneCodeWApi';
import { SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

/* GeneCode4Tab 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class GeneCode4Tab {
  public static divEdit: HTMLDivElement;
  public static getQueryString(name: string): string {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public static async GeneCode() {
    //await Main_PrjTab.ShowCurrItem("GeneTabCode", "");

    SetInputValueInDivObj(GeneCode4Tab.divEdit, 'hidDivName', 'divAddNewRecordSave');
    const objGCPara: clsGCPara = new clsGCPara();

    objGCPara.prjId = this.getQueryString('prjId'); //"0116";
    objGCPara.prjDataBaseId = this.getQueryString('prjDataBaseId'); //"0111";
    objGCPara.gcUserId = this.getQueryString('GCUserId'); //"pyf";

    const vsTabId = this.getQueryString('tabId');
    const vsViewId: string = this.getQueryString('viewId'); //WebApp,,,wfmExamType_QUDI
    const vsTypeParas = '';
    const vsDataBaseType = this.getQueryString('DataBaseType'); //"MsSql";
    const bolIsGeneTable = true; //是否生成表
    //bolIsGeneTable = false;//是否生成表
    const vsIsGeneTable = bolIsGeneTable;
    if (vsIsGeneTable == true) {
      objGCPara.tabId = vsTabId;
    } else {
      objGCPara.viewId = vsViewId;
    }
    objGCPara.dataBaseType = vsDataBaseType;
    objGCPara.typeParas = vsTypeParas;
    objGCPara.codeTypeId = this.getQueryString('codeTypeId'); //"0001";

    if (objGCPara.codeTypeId == '') {
      alert('生成代码的代码类型不能为空！');
      return;
    }

    if (objGCPara.tabId == '' && objGCPara.viewId == '') {
      alert('生成代码的表Id 或者界面Id不能全为空！');
      return;
    }

    if (objGCPara.prjId == '') {
      alert('生成代码的工程Id不能为空！');
      return;
    }
    if (objGCPara.dataBaseType == '') {
      alert('生成代码的数据库类型不能为空！');
      return;
    }
    if (objGCPara.prjDataBaseId == '') {
      alert('生成代码的数据库Id不能为空！');
      return;
    }
    if (objGCPara.gcUserId == '') {
      alert('生成代码的用户Id不能为空！');
      return;
    }

    try {
      const objGCResult = await AutoGeneCode_GeneCodeAsync(objGCPara);

      $('#txtCodeText').val(objGCResult.codeText);
      $('#lblClassName').val(objGCResult.re_ClsName);
      $('#lblFileName').val(objGCResult.re_FileNameWithModuleName);
      $('#lblPrjName').text(objGCResult.prjName);
      $('#lblSQLDSTypeName').text(objGCResult.dataBaseType);
      $('#lblCodeTypeName').text(objGCResult.codeTypeName);
      $('#lblLangType').text(objGCResult.langType);
      $('#lblGCUserId').text(objGCResult.gcUserId);
      $('#lblTabName').text(objGCResult.tabName);

      if (objGCResult == null) {
        const strInfo = `生成代码不成功!`;
        $('#lblResult23').val(strInfo);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `生成代码成功!`;
        $('#lblResult23').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      const strMsg = `生成代码不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  public static async GeneCodeBak20190706() {
    SetInputValueInDivObj(GeneCode4Tab.divEdit, 'hidDivName', 'divAddNewRecordSave');
    const objGCPara: clsGCPara = new clsGCPara();

    objGCPara.prjId = '0116';
    objGCPara.prjDataBaseId = '0111';
    objGCPara.gcUserId = 'pyf';
    let vsTabId = '01160001'; //DepartmentInfo
    vsTabId = '01160002'; //Users

    vsTabId = '01160003'; //UserState
    vsTabId = '01160017'; //UserState
    vsTabId = this.getQueryString('tabId');
    const vsViewId = '01160088'; //WebApp,,,wfmExamType_QUDI
    const vsTypeParas = '';
    const vsDataBaseType = 'MsSql';
    const bolIsGeneTable = true; //是否生成表
    //bolIsGeneTable = false;//是否生成表
    const vsIsGeneTable = bolIsGeneTable;
    if (vsIsGeneTable == true) {
      objGCPara.tabId = vsTabId;
    } else {
      objGCPara.viewId = vsViewId;
    }
    objGCPara.dataBaseType = vsDataBaseType;
    objGCPara.typeParas = vsTypeParas;
    objGCPara.codeTypeId = '0001';
    objGCPara.gcUserId = 'pyf';

    try {
      const objGCResult = await AutoGeneCode_GeneCodeAsync(objGCPara);

      $('#txtCodeText').val(objGCResult.codeText);
      $('#lblClassName').val(objGCResult.re_ClsName);
      $('#lblFileName').val(objGCResult.re_FileNameWithModuleName);
      if (objGCResult == null) {
        const strInfo = `生成代码不成功!`;
        $('#lblResult23').val(strInfo);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `生成代码成功!`;
        $('#lblResult23').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      const strMsg = `生成代码不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }
}
