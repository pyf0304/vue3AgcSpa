import DnFuncMapCRUD_EditEx from '../AIModule/DnFuncMapCRUD_EditEx';
import TabFunctionPropCRUDEx from '../PrjFunction/TabFunctionPropCRUDEx';
import { GeneTabCodeEx } from '../Table_Field/GeneTabCodeEx';
import PrjTabFldCRUDEx from '../Table_Field/PrjTabFldCRUDEx';
import TabFeatureCRUD_EditEx from '../Table_Field/TabFeatureCRUD_EditEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { SetSpanHtmlByIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

declare let strUrl_Session_SetString: string;

/// <summary>
/// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
/// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
/// </summary>
export class Main_PrjTabTabs {
  public static divName4LayoutHead = 'divName4LayoutHead';

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

    SetSpanHtmlByIdInDiv(strDivName, 'spnTabId', clsPrivateSessionStorage.tabId_Main);
    SetSpanHtmlByIdInDiv(strDivName, 'spnTabName', clsPrivateSessionStorage.tabName);
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
    return new Promise(function () {
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
    // const strThisFuncName = this.btn_EditTabClick.name;
    console.log(strKeyId);

    let objPage_GeneCode;
    let objPage;
    let objPage_DnFuncMap;
    let objPage_TabFeature;
    let objPage_CheckConsistency;
    let objPage_TabFunctionProp;
    switch (strCommandName) {
      //    ../Table_Field/PrjTabU ? AA = AA & Op=Edit - PrjTabU
      //    case "PrjTabU":    //自定义功能:设置用于扩展类

      case 'PrjTabFld': //自定义功能:设置用于扩展类
        objPage = new PrjTabFldCRUDEx();
        objPage.divName4Function = 'divFunction_PrjTabFld';
        objPage.divName4Layout = 'divLayout_PrjTabFld';
        objPage.divName4DataList = 'divDataLst_PrjTabFld';
        objPage.divName4Pager = 'divPager_PrjTabFld';
        objPage.TabId = clsPrivateSessionStorage.tabId_Main;
        objPage.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;
      case 'TabFeature': //自定义功能:设置用于扩展类
        objPage_TabFeature = new TabFeatureCRUD_EditEx();
        objPage_TabFeature.divName4Function = 'divFunction_TabFeature';
        objPage_TabFeature.divName4Layout = 'divLayout_TabFeature';
        objPage_TabFeature.divName4DataList = 'divDataLst_TabFeature';
        objPage_TabFeature.divName4Pager = 'divPager_TabFeature';
        objPage_TabFeature.Op = 'Edit-TabFeature';
        objPage_TabFeature.TabId = clsPrivateSessionStorage.tabId_Main;
        objPage_TabFeature.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;
      case 'CheckConsistency': //自定义功能:设置用于扩展类
        objPage_CheckConsistency = new PrjTabFldCRUDEx();
        objPage_CheckConsistency.divName4Function = 'divFunction_CheckConsistency';
        objPage_CheckConsistency.divName4Layout = 'divLayout_CheckConsistency';
        objPage_CheckConsistency.divName4DataList = 'divDataLst_CheckConsistency';
        objPage_CheckConsistency.divName4Pager = 'divPager_CheckConsistency';
        objPage_CheckConsistency.Op = 'CheckConsistency';
        objPage_CheckConsistency.TabId = clsPrivateSessionStorage.tabId_Main;
        objPage_CheckConsistency.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;

      case 'TabFunctionProp': //自定义功能:设置用于扩展类
        objPage_TabFunctionProp = new TabFunctionPropCRUDEx();
        objPage_TabFunctionProp.divName4Function = 'divFunction_TabFunctionProp';
        objPage_TabFunctionProp.divName4Layout = 'divLayout_TabFunctionProp';
        objPage_TabFunctionProp.divName4DataList = 'divDataLst_TabFunctionProp';
        objPage_TabFunctionProp.divName4Pager = 'divPager_TabFunctionProp';
        objPage_TabFunctionProp.divName4Query = 'divQuery_TabFunctionProp';

        objPage_TabFunctionProp.TabId = clsPrivateSessionStorage.tabId_Main;
        objPage_TabFunctionProp.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;
      case 'DnFuncMap': //自定义功能:设置用于扩展类
        objPage_DnFuncMap = new DnFuncMapCRUD_EditEx();
        objPage_DnFuncMap.divName4Function = 'divFunction_DnFuncMap';
        objPage_DnFuncMap.divName4Layout = 'divLayout_DnFuncMap';
        objPage_DnFuncMap.divName4DataList = 'divDataLst_DnFuncMap';
        objPage_DnFuncMap.divName4Pager = 'divPager_DnFuncMap';
        objPage_DnFuncMap.TabId = clsPrivateSessionStorage.tabId_Main;
        objPage_DnFuncMap.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;
      case 'GeneCode': //自定义功能:设置用于扩展类
        objPage_GeneCode = new GeneTabCodeEx();
        objPage_GeneCode.TabId = clsPrivateSessionStorage.tabId_Main;
        //objPage_GeneCode.divName4Function = "divFunction_GeneCode";
        //objPage_GeneCode.divName4Layout = "divLayout_GeneCode";
        //objPage_GeneCode.divName4DataList = "divDataLst_GeneCode";
        objPage_GeneCode.PageLoadCache();
        //objPage.btnSetInFldId_Click();
        break;

      case 'ReturnToPrjTabCURD':
        Redirect('./Table_Field/PrjTabCRUD');
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabFldCRUDEx.btn_Click');

        break;
    }
  }
}
