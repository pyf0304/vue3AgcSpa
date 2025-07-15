import $ from 'jquery';
import PrjTabFldCRUDEx from './PrjTabFldCRUDEx';
import { enumSQLDSType } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { ApplicationType_GetObjByApplicationTypeIdCache } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';

import { FuncModule_Agc_GetObjByFuncModuleAgcIdCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { Projects_GetObjByPrjIdCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { PrjTab_GetObjByTabIdAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import {
  PrjTabEx_GetRelaTabIdByViewTabId,
  PrjTabEx_GetRelaViewTabIdByTabId,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  getAObjByIdInDivObj,
  GetArray,
  getLiObjByIdInDivObj,
  SetSpanHtmlByIdInDiv,
  SetSpanHtmlByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ViewInfo_GetObjLstAsync } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';
import { divVarSet } from '@/views/Table_Field/PrjTab_AllPropVueShare';

declare let strUrl_Session_SetString: string;
// declare let strUrl_Session_GetString: string;
// declare let strUserLoginInfo: string;

// declare let strWebRoot: string;
/// <summary>
/// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
/// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
/// </summary>
export class PrjTab_AllPropEx {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static; //界面布局的层对象
  public static divName4LayoutHead = 'divName4LayoutHead';
  // public divLayout = GetUniDivInDoc('divLayout');
  public static DispUserInfo(strDivName: string) {
    //var objUserLoginInfo = clsPubSessionStorage.UserLoginInfo;

    SetSpanHtmlByIdInDiv(strDivName, 'spnUserId', clsPubLocalStorage.userId);
    SetSpanHtmlByIdInDiv(strDivName, 'spnRoleName', clsPubLocalStorage.roleName);
    SetSpanHtmlByIdInDiv(strDivName, 'spnCurrSelPrjId', clsPrivateSessionStorage.currSelPrjId);
    SetSpanHtmlByIdInDiv(strDivName, 'spnCurrSelPrjName', clsPrivateSessionStorage.currSelPrjName);
    SetSpanHtmlByIdInDiv(
      strDivName,
      'spnPrjDataBaseName',
      clsPrivateSessionStorage.prjDataBaseName,
    );
  }
  public static remove(arrLi: Array<HTMLLIElement>, itmDel: HTMLLIElement) {
    const index = arrLi.indexOf(itmDel);
    if (index > -1) {
      arrLi.splice(index, 1);
    }
  }

  public static async DispTabInfo(strDivName: string) {
    //let objPrjTab4Session = clsPubSessionStorage.PrjTab4Session;
    let strTabId = PrjTab_AllPropEx.GetPropValue('tabId');
    if (IsNullOrEmpty(strTabId) == true) strTabId = clsPrivateSessionStorage.tabId_Main;

    SetSpanHtmlByIdInDiv(strDivName, 'spnTabId', strTabId);
    SetSpanHtmlByIdInDiv(strDivName, 'spnTabName', clsPrivateSessionStorage.tabName);

    //$('#spnApplicationTypeId').html(objPrjTab4Session.applicationTypeId.toString());
    //$('#spnApplicationTypeName').html(objPrjTab4Session.applicationTypeName);

    //var objA_GC: HTMLAnchorElement = <HTMLAnchorElement>liGeneViewCode.firstChild;
    //if (objA_GC.href.indexOf("?") == -1) {
    //    var strHtml = Format("{0}?viewId={1}", objA_GC.href, clsPrivateSessionStorage.viewId_Main);
    //    objA_GC.href = strHtml;
    //}
  }

  /*
     演示Session 操作
    */
  public static async Demo_Session() {
    try {
      //设置Session
      const strUserId = 'TestUserId';
      await this.SetSessionAsync('userId', strUserId);
      //获取Session
      const strUserId_Value1 = await this.GetSessionAsync('userId');
      console.log(`strUserId_Value1:${strUserId_Value1}`);
      //获取Session方法2:直接读取页面中的hidUserId
      const strUserId_Value2 = $('#hidUserId').val();
      console.log(`strUserId_Value2:${strUserId_Value2}`);
    } catch (e: any) {
      const strMsg = `演示Session不成功,${e}.`;
      alert(strMsg);
    }
  }
  /*
     设置Session    
     <param name = "Key">关键字</param>
     <param name = "Value">值</param>
    */
  public static SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data: any) {
          //$('#myValue').val(text);
          const strKey = data.key;
          const strValue = data.value;

          //$('#myKey').html(strKey);
          //$('#myValue').html(strValue);
          console.log(strKey + strValue);
        },
      });
    });
  }

  /*
 获取Session 关键字的值
 <param name = "Key">关键字</param>
 <return>值</return>
*/
  public static GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: '/Session/GetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data: any) {
          const strValue = data.value;

          console.log(Key + strValue);
          resolve(data);
        },
        error: (e: any) => {
          // const strErrMsg = e.responseText;
          reject(e);
        },
      });
    });
  }

  public static async DispPrjTabFld(strDivName: string) {
    //let objPrjTab4Session = clsPubSessionStorage.PrjTab4Session;
    console.error('public static async DispPrjTabFld(strDivName: string)', strDivName);
    const objPage = new PrjTabFldCRUDEx();
    // objPage.divName4Function = 'divFunction_PrjTabFld';
    // objPage.divName4Layout = 'divLayout_PrjTabFld';
    objPage.divName4DataList = 'divDataLst_PrjTabFld';
    objPage.PageLoadCache();
  }

  public static async btn_EditTabClick(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btn_EditTabClick.name;
    let strTabId = PrjTab_AllPropEx.GetPropValue('tabId');
    if (IsNullOrEmpty(strTabId) == true) strTabId = clsPrivateSessionStorage.tabId_Main;

    const strMsg = '';
    let myIframe: HTMLIFrameElement;
    switch (strCommandName) {
      //    ../Table_Field/PrjTabU ? AA = AA & Op=Edit - PrjTabU
      //    case "PrjTabU":    //自定义功能:设置用于扩展类

      //const objPage = new PrjTabUEx();
      //objPage.divName4Function = "divFunction_PrjTabFld";
      //objPage.divName4Layout = "divLayout_PrjTabFld";
      //objPage.divName4DataList = "divDataLst_PrjTabFld";
      //objPage.TabId = this.tabId;
      //objPage.PageLoadCache();

      //break;

      case 'PrjTabFld': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_PrjTabFld') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = '../Table_Field/PrjTabFldCRUD?AA=AA&Op=Edit-PrjTabFld';
        }

        break;
      case 'TabFeature': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_TabFeature') as HTMLIFrameElement;
        myIframe.src = Format(
          '../Table_Field/TabFeatureCRUD_Edit?tabId={0}&Op=Edit-TabFeature',
          strTabId,
        );
        //const objPage_TabFeature = new TabFeatureCRUD_EditEx();
        //objPage_TabFeature.divName4Function = "divFunction_TabFeature";
        //objPage_TabFeature.divName4Layout = "divLayout_TabFeature";
        //objPage_TabFeature.divName4DataList = "divDataLst_TabFeature";
        //objPage_TabFeature.divName4Pager = "divPager_TabFeature";
        //objPage_TabFeature.Op = "Edit-TabFeature";
        //objPage_TabFeature.TabId = this.tabId;
        //objPage_TabFeature.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;
      case 'CheckConsistency': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_CheckConsistency') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = '../Table_Field/PrjTabFldCRUD?AA=AA&Op=CheckConsistency';
        }
        //const objPage_CheckConsistency = new PrjTabFldCRUDEx();
        //objPage_CheckConsistency.divName4Function = "divFunction_CheckConsistency";
        //objPage_CheckConsistency.divName4Layout = "divLayout_CheckConsistency";
        //objPage_CheckConsistency.divName4DataList = "divDataLst_CheckConsistency";
        //objPage_CheckConsistency.divName4Pager = "divPager_CheckConsistency";
        //objPage_CheckConsistency.Op = "CheckConsistency";
        //objPage_CheckConsistency.TabId = this.tabId;
        //objPage_CheckConsistency.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;

      case 'TabFunctionProp': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_TabFunctionProp') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = '../PrjFunction/TabFunctionPropCRUD?AA=AA&Op=Edit-TabFunctionProp';
        }
        //const objPage_TabFunctionProp = new TabFunctionPropCRUDEx();
        //objPage_TabFunctionProp.divName4Function = "divFunction_TabFunctionProp";
        //objPage_TabFunctionProp.divName4Layout = "divLayout_TabFunctionProp";
        //objPage_TabFunctionProp.divName4DataList = "divDataLst_TabFunctionProp";
        //objPage_TabFunctionProp.divName4Pager = "divPager_TabFunctionProp";
        //objPage_TabFunctionProp.divName4Query = "divQuery_TabFunctionProp";

        //objPage_TabFunctionProp.TabId = this.tabId;
        //objPage_TabFunctionProp.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;
      case 'DnFuncMap': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_DnFuncMap') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = '../AIModule/DnFuncMapCRUD_Edit?AA=AA&Op=Edit-DnFuncMap1';
        }
        //const objPage_DnFuncMap = new DnFuncMapCRUD_EditEx();
        //objPage_DnFuncMap.divName4Function = "divFunction_DnFuncMap";
        //objPage_DnFuncMap.divName4Layout = "divLayout_DnFuncMap";
        //objPage_DnFuncMap.divName4DataList = "divDataLst_DnFuncMap";
        //objPage_DnFuncMap.divName4Pager = "divPager_DnFuncMap";
        //objPage_DnFuncMap.TabId = this.tabId;
        //objPage_DnFuncMap.PageLoadCache();

        break;
      case 'GeneCode': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_GeneCode') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = '../Table_Field/GeneTabCode?AA=AA&Op=TabEdit';
        }
        //const objPage_GeneCode = new GeneTabCodeEx();
        //objPage_GeneCode.TabId = this.tabId;
        //objPage_GeneCode.PageLoadCache();

        break;

      case 'ReturnToPrjTabCURD':
        Redirect('./Table_Field/PrjTabCRUD');
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabFldCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    const strTabId = this.tabId;
    const objvPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvPrjTab == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    SetSpanHtmlByIdInDivObj(
      divVarSet.refDivLayout,
      'spnTabName',
      `${objvPrjTab.tabName}(${objvPrjTab.tabId})`,
    );
    console.log(objvPrjTab.tabName);
    //SetSpanHtmlByIdInDiv("divLayout", "spnTabId", strTabId);
    await this.ShowFunc4RelaTab(strTabId);
    await this.ShowInterface4CurrTab(strTabId);
  }
  public static ReloadRelaTabInfo() {
    PrjTab_AllPropEx.vuebtn_Click('PageLoad', '');
  }
  public async ShowFunc4RelaTab(strTabId: string) {
    const strThisFuncName = this.ShowFunc4RelaTab.name;
    //const strTabId = this.tabId;
    const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(
      strTabId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objvPrjTab_Sim == null) return;
    //SetLabelHtmlByIdInDivObj(divFunction, "lblPrjTabFldList", Format("项目表:{0}({1})-表字段维护", objvPrjTab_Sim.tabName, objvPrjTab_Sim.tabId));
    // const vsTabName = objvPrjTab_Sim.tabName;
    const vsSqlDsTypeId = objvPrjTab_Sim.sqlDsTypeId;
    if (vsSqlDsTypeId == enumSQLDSType.SqlTab_01) {
      const strRelaViewTabId = await PrjTabEx_GetRelaViewTabIdByTabId(
        strTabId,
        clsPrivateSessionStorage.currSelPrjId,
      );

      if (IsNullOrEmpty(strRelaViewTabId) == false) {
        const objPrjTabRelaView = await vPrjTab_SimEx_GetObjByTabIdCache(
          strRelaViewTabId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objPrjTabRelaView == null) return;

        const objA = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aEditRelaTab');
        //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("视图:{0}({1})", objPrjTabRelaView.tabName, objPrjTabRelaView.tabId));
        objA.innerHTML = Format(
          "<span class=' font-weight-bold text-g'>视图</span>:{0}({1})",
          objPrjTabRelaView.tabName,
          objPrjTabRelaView.tabId,
        );

        const objData = { tabId: strRelaViewTabId, Op: 'TabFldEdit' };

        (function (objData: any) {
          objA.onclick = function () {
            PrjTab_AllPropEx.vuebtn_Click('PageLoad', objData);
          };
        })(objData);

        objA.className = 'link-secondary text-secondary font-weight-bold';
        objA.title = '编辑相关视图的字段信息。';
      }

      //HideDivInDiv(divFunction, "divViewFunc");
    } else {
      const strRelaTabId = await PrjTabEx_GetRelaTabIdByViewTabId(strTabId);
      if (IsNullOrEmpty(strRelaTabId) == false) {
        const objPrjTabRelaTab = await vPrjTab_SimEx_GetObjByTabIdCache(
          strRelaTabId,
          clsPrivateSessionStorage.cmPrjId,
        );
        if (objPrjTabRelaTab == null) return;
        //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("表:{0}({1})", objPrjTabRelaTab.tabName, objPrjTabRelaTab.tabId));
        const objA = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aEditRelaTab');
        //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("视图:{0}({1})", objPrjTabRelaView.tabName, objPrjTabRelaView.tabId));
        objA.innerHTML = Format('表:{0}({1})', objPrjTabRelaTab.tabName, objPrjTabRelaTab.tabId);

        const objData = { tabId: strRelaTabId, Op: 'TabFldEdit' };

        (function (objData: any) {
          objA.onclick = function () {
            PrjTab_AllPropEx.vuebtn_Click('PageLoad', objData);
          };
        })(objData);

        objA.className = 'link-secondary text-secondary font-weight-bold';
        objA.title = '编辑相关表的字段信息。';
      } else {
        const objPrjTabEN = await PrjTab_GetObjByTabIdAsync(strTabId);
        if (objPrjTabEN == null) return;

        if (IsNullOrEmpty(objPrjTabEN.relaTabId4View) == false) {
          const objPrjTabRelaTab = await vPrjTab_SimEx_GetObjByTabIdCache(
            objPrjTabEN.relaTabId4View,
            clsPrivateSessionStorage.cmPrjId,
          );
          if (objPrjTabRelaTab == null) return;
          //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("表:{0}({1})", objPrjTabRelaTab.tabName, objPrjTabRelaTab.tabId));
          const objA = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aEditRelaTab');
          //SetLabelHtmlByIdInDivObj(this.divName4Layout, "lblRelaTabName", Format("视图:{0}({1})", objPrjTabRelaView.tabName, objPrjTabRelaView.tabId));
          objA.innerHTML = Format(
            '相关主表:{0}({1})',
            objPrjTabRelaTab.tabName,
            objPrjTabRelaTab.tabId,
          );
          // const strLinkFile0 = Format(
          //   '../T1able_Field/PrjTabFldCRUD?tabId={0}&Op=TabFldEdit',
          //   objPrjTabEN.relaTabId4View,
          // );
          // let strHref = `${strLinkFile0}`;
          // strHref = strHref.replace('//', '/');
          // objA.href = strHref;
          (function (strTabId1) {
            objA.onclick = function () {
              EditPrjTab(strTabId1);
            };
          })(objPrjTabEN.relaTabId4View);

          objA.className = 'link-secondary text-secondary font-weight-bold';
          objA.title = '编辑相关主表的字段信息。';
        }
      }
      //btnAnalysis.Visible = false;
    }

    try {
      //EditPrjTab(vsTabId);
      //DispGeneCode();
      //DispGeneStoreProcedure();
      //设置是否显示3个相关LinkButton
      this.DispReleButton();
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0101)在显示相关表的功能时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public DispReleButton() {}
  public async ShowInterface4CurrTab(strTabId: string) {
    //为数据源于表的下拉框设置内容
    const strWhere = Format(
      " {0} in (select {0} from {1} where {2}='{3}')",
      clsViewInfoCmPrjIdRelaEN.con_ViewId,
      clsViewInfoCmPrjIdRelaEN._CurrTabName,
      clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
      clsPrivateSessionStorage.cmPrjId,
    );
    const arrViewInfo = await ViewInfo_GetObjLstAsync(strWhere);
    const arrViewInfo_Sel = arrViewInfo.filter((x) => x.mainTabId == strTabId);
    if (arrViewInfo_Sel.length == 0) return;

    const aAddNewView = getAObjByIdInDivObj(divVarSet.refDivLayout, 'aAddNewView');
    aAddNewView.innerText = Format('添加新界面');
    aAddNewView.title = Format('添加新界面。');
    aAddNewView.className = 'link-primary text-primary font-weight-bold';

    let strLinkFile0 = Format('../PrjInterface/ViewInfoCRUD?viewId={0}&Op=TabFldEdit', '');
    let strHref = `${strLinkFile0}`;
    strHref = strHref.replace('//', '/');
    aAddNewView.href = strHref;

    const liAddNewView = getLiObjByIdInDivObj(divVarSet.refDivLayout, 'liAddNewView');
    const objNextSibling = liAddNewView.nextSibling;
    for (const objViewInfo of arrViewInfo_Sel) {
      const li0 = <HTMLLIElement>document.createElement('li');
      li0.className = 'nav-item ml-3';
      const a0 = <HTMLAnchorElement>document.createElement('a');
      a0.innerText = Format('编辑:{0}', objViewInfo.viewName);
      a0.title = Format('编辑界面信息：{0}({1})。', objViewInfo.viewName, objViewInfo.viewId);
      a0.className = 'link-primary text-primary font-weight-bold';
      const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
        objViewInfo.applicationTypeId,
      );
      if (objApplicationType == null) {
        const strMsg = Format(
          '应用Id:[{0}]，没有相应的类型，请检查！',
          objViewInfo.applicationTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const objCurrProjects = await Projects_GetObjByPrjIdCache(
        clsPrivateSessionStorage.currSelPrjId,
      );

      if (objCurrProjects == null) {
        const strMsg = Format(
          '项目Id:[{0}]，没有相应的项目，请检查！',
          clsPrivateSessionStorage.currSelPrjId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      const objFuncModule_Agc = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
        objViewInfo.funcModuleAgcId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objFuncModule_Agc == null) {
        const strMsg = Format(
          '模块Id:[{0}]，没有相应的模块，请检查！',
          objViewInfo.funcModuleAgcId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      // const objViewInfo4Session: stuViewInfo4Session = {
      //   //viewId: objViewInfo.viewId,
      //   //viewName: objViewInfo.viewName,
      //   funcModuleNameSim: objFuncModule_Agc.funcModuleNameSim,
      //   funcModuleEnName: objFuncModule_Agc.funcModuleEnName,
      //   applicationTypeId: objViewInfo.applicationTypeId,
      //   applicationTypeName: objApplicationType.applicationTypeSimName,
      //   currSelPrjId: clsPrivateSessionStorage.currSelPrjId,
      //   currSelPrjName: objCurrProjects.prjName,
      //   keyId4Test: objViewInfo.keyId4Test,
      //   mainTabId: objViewInfo.mainTabId,
      //   outTabId: objViewInfo.outRelaTabId,
      //   cmPrjId: clsPrivateSessionStorage.cmPrjId,
      // };
      clsPrivateSessionStorage.viewId_Main = objViewInfo.viewId;
      clsPrivateSessionStorage.viewName = objViewInfo.viewName;
      clsPrivateSessionStorage.funcModuleNameSim = objFuncModule_Agc.funcModuleNameSim;
      clsPrivateSessionStorage.funcModuleEnName = objFuncModule_Agc.funcModuleEnName;

      //clsPubSessionStorage.ViewInfo4Session = objViewInfo4Session;
      // const strJson = JSON.stringify(objViewInfo4Session);

      // this.SetSessionAsync('objViewInfo4Session', strJson);

      clsPrivateSessionStorage.viewId_Main = objViewInfo.viewId;
      //Redirect("/Index/Main_ViewInfo.js");
      //Redirect("/PrjInterface/ViewInfo_U");
      // '../PrjInterface/ViewInfo_U?viewId={0}&Op=TabFldEdit',
      strLinkFile0 = Format(
        '#/account/editViewRegion?viewId={0}&Op=TabFldEdit',
        objViewInfo.viewId,
      );
      strHref = `${strLinkFile0}`;
      strHref = strHref.replace('//', '/');
      a0.href = strHref;

      li0.appendChild(a0);
      const objParent = liAddNewView.parentElement;
      if (objParent != null) {
        if (this.IsExistHyperLink(objParent, a0.title) == false) {
          objParent.insertBefore(li0, objNextSibling);
        }
      }
    }
  }
  public IsExistHyperLink(objParent: HTMLElement, strFindingTitle: string) {
    const arrA = objParent.getElementsByTagName('a');
    const arrA1 = GetArray(arrA);
    for (const objA of arrA1) {
      if (objA.title == strFindingTitle) return true;
    }
    return false;
  }
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: clsSysPara4WebApi.Url_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data: any) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(strKey + strValue);
        },
      });
    });
  }

  public get tabId(): string {
    const strTabId = PrjTab_AllPropEx.GetPropValue('tabId');
    if (IsNullOrEmpty(strTabId) == false) return strTabId;
    return clsPrivateSessionStorage.tabId_Main;
  }
  public get Op(): string {
    const strOp = PrjTab_AllPropEx.GetPropValue('Op');
    if (IsNullOrEmpty(strOp) == false) return strOp;
    return '';
    // return clsPrivateSessionStorage.Op;
  }
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage = new PrjTab_AllPropEx();
    // strKeyId = objPage.toString();
    console.log(objPage, strKeyId);
    //const objPageEdit: Ex = new Ex(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'StudentInfoList.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
}

function EditPrjTab(strTabId: string) {
  PrjTab_AllPropEx.vuebtn_Click('EditPrjTab', strTabId);
}
