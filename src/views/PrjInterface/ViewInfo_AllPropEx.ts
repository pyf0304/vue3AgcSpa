import $ from 'jquery';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';

import {
  ViewRegionEx_GetObjLstByViewIdCache,
  ViewRegionEx_GetRegionIdByTypeCache,
} from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetArray, SetSpanHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { useviewInfoStore } from '@/store/modules/viewInfo';

declare let strUrl_Session_SetString: string;
// declare let strUrl_Session_GetString: string;
// declare let strUserLoginInfo: string;

// declare let strWebRoot: string;
/// <summary>
/// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
/// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
/// </summary>
export class ViewInfo_AllPropEx {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static divName4LayoutHead = 'divName4LayoutHead';
  public divName4Layout = 'divLayout';

  public static remove(arrLi: Array<HTMLLIElement>, itmDel: HTMLLIElement) {
    const index = arrLi.indexOf(itmDel);
    if (index > -1) {
      arrLi.splice(index, 1);
    }
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

  public static async btn_EditTabClick(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btn_EditTabClick.name;

    let myIframe: HTMLIFrameElement;
    let strRegionId = '';
    let objViewInfo;
    switch (strCommandName) {
      case 'ViewInfo_U': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_ViewInfo_U') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = '../PrjInterface/ViewInfo_U?AA=AA&Op=Edit-PrjTabFld';
        }
        break;
      case 'ViewRegionInTab': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_ViewRegionInTab') as HTMLIFrameElement;
        myIframe.src = '../RegionManage/ViewRegionInTab?Op=ViewEdit1';

        break;
      case 'ViewRelaTabCRUD': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_ViewRelaTabCRUD') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = '../PrjInterface/ViewRelaTabCRUD?Op=ViewEdit';
        }
        break;

      case 'QryRegionFldsCRUD': //自定义功能:设置用于扩展类
        strRegionId = await ViewRegionEx_GetRegionIdByTypeCache(
          clsPrivateSessionStorage.viewId_Main,
          enumRegionType.QueryRegion_0001,
          clsPrivateSessionStorage.cmPrjId,
        );
        myIframe = document.getElementById('iframe_QryRegionFldsCRUD') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = Format(
            '../RegionManage/QryRegionFldsCRUD?regionId={0}&Op=ViewEdit',
            strRegionId,
          );
        }
        break;
      case 'FeatureRegionFldsCRUD': //自定义功能:设置用于扩展类
        strRegionId = await ViewRegionEx_GetRegionIdByTypeCache(
          clsPrivateSessionStorage.viewId_Main,
          enumRegionType.FeatureRegion_0008,
          clsPrivateSessionStorage.cmPrjId,
        );
        myIframe = document.getElementById('iframe_FeatureRegionFldsCRUD') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = Format(
            '../RegionManage/FeatureRegionFldsCRUD?regionId={0}&Op=ViewEdit',
            strRegionId,
          );
        }

        break;

      case 'DGRegionFldsCRUD': //自定义功能:设置用于扩展类
        strRegionId = await ViewRegionEx_GetRegionIdByTypeCache(
          clsPrivateSessionStorage.viewId_Main,
          enumRegionType.ListRegion_0002,
          clsPrivateSessionStorage.cmPrjId,
        );
        myIframe = document.getElementById('iframe_DGRegionFldsCRUD') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = Format(
            '../RegionManage/DGRegionFldsCRUD?regionId={0}&Op=ViewEdit',
            strRegionId,
          );
        }

        break;

      case 'EditRegionFldsCRUD': //自定义功能:设置用于扩展类
        strRegionId = await ViewRegionEx_GetRegionIdByTypeCache(
          clsPrivateSessionStorage.viewId_Main,
          enumRegionType.EditRegion_0003,
          clsPrivateSessionStorage.cmPrjId,
        );
        myIframe = document.getElementById('iframe_EditRegionFldsCRUD') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = Format(
            '../RegionManage/EditRegionFldsCRUD?regionId={0}&Op=ViewEdit',
            strRegionId,
          );
        }

        break;

      case 'DetailRegionFldsCRUD': //自定义功能:设置用于扩展类
        strRegionId = await ViewRegionEx_GetRegionIdByTypeCache(
          clsPrivateSessionStorage.viewId_Main,
          enumRegionType.DetailRegion_0006,
          clsPrivateSessionStorage.cmPrjId,
        );
        myIframe = document.getElementById('iframe_DetailRegionFldsCRUD') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = Format(
            '../RegionManage/DetailRegionFldsCRUD?regionId={0}&Op=ViewEdit',
            strRegionId,
          );
        }

        break;

      case 'ExcelExportRegionFldsCRUD': //自定义功能:设置用于扩展类
        strRegionId = await ViewRegionEx_GetRegionIdByTypeCache(
          clsPrivateSessionStorage.viewId_Main,
          enumRegionType.ExcelExportRegion_0007,
          clsPrivateSessionStorage.cmPrjId,
        );
        myIframe = document.getElementById('iframe_ExcelExportRegionFldsCRUD') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = Format(
            '../RegionManage/ExcelExportRegionFldsCRUD?regionId={0}&Op=ViewEdit',
            strRegionId,
          );
        }

        break;

      case 'GeneViewCode': //自定义功能:设置用于扩展类
        myIframe = document.getElementById('iframe_GeneViewCode') as HTMLIFrameElement;
        if (IsNullOrEmpty(myIframe.src) == true) {
          myIframe.src = Format(
            '../PrjInterface/GeneViewCode?viewId={0}&Op=ViewEdit',
            clsPrivateSessionStorage.viewId_Main,
          );
        }
        break;

      case 'ViewInfoCRUD':
        Redirect('./PrjInterface/ViewInfoCRUD');
        break;
      case 'RefreshViewInfo':
        objViewInfo = new ViewInfo_AllPropEx();
        objViewInfo.PageLoadCache();
        break;

      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabFldCRUDEx.btn_Click');

        break;
    }
  }
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    const viewInfoStore = useviewInfoStore();
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    const objViewInfo = await viewInfoStore.getObj(strViewId);
    if (objViewInfo == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    //SetSpanHtmlByIdInDiv("divLayout", "spnTabName", objvPrjTab.tabName);
    //SetSpanHtmlByIdInDiv("divLayout", "spnTabId", strViewId);

    ViewInfo_AllPropEx.DispViewInfo();
  }

  public static async DispViewInfo() {
    //let objViewInfo4Session = clsPubSessionStorage.ViewInfo4Session;
    SetSpanHtmlByIdInDivObj(
      ViewInfo_AllPropEx.divLayout,
      'spnViewName',
      `${clsPrivateSessionStorage.viewName}(${clsPrivateSessionStorage.viewId_Main})`,
    );
    SetSpanHtmlByIdInDivObj(
      ViewInfo_AllPropEx.divLayout,
      'spnFuncModuleName_Sim',
      `${clsPrivateSessionStorage.funcModuleNameSim}(${clsPrivateSessionStorage.funcModuleEnName})`,
    );

    SetSpanHtmlByIdInDivObj(
      ViewInfo_AllPropEx.divLayout,
      'spnApplicationTypeName',
      `${clsPrivateSessionStorage.applicationTypeName}(${clsPrivateSessionStorage.applicationTypeId})`,
    );

    const liQueryRegion: HTMLLIElement = <HTMLLIElement>document.getElementById('liQueryRegion');
    const liEditRegion: HTMLLIElement = <HTMLLIElement>document.getElementById('liEditRegion');
    const liListRegion: HTMLLIElement = <HTMLLIElement>document.getElementById('liListRegion');
    const liFeatureRegion: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liFeatureRegion')
    );
    const liExcelExportRegion: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liExcelExportRegion')
    );
    const liDetailRegion: HTMLLIElement = <HTMLLIElement>document.getElementById('liDetailRegion');

    const arrLi: Array<HTMLLIElement> = new Array<HTMLLIElement>();

    arrLi.push(liQueryRegion);
    arrLi.push(liEditRegion);
    arrLi.push(liListRegion);
    arrLi.push(liFeatureRegion);
    arrLi.push(liExcelExportRegion);
    arrLi.push(liDetailRegion);
    //arrLi.push(liDetailRegion);

    //liQueryRegion.style.display = "none";
    //liEditRegion.style.display = "none";
    //liListRegion.style.display = "none";
    //liFeatureRegion.style.display = "none";
    //liExcelExportRegion.style.display = "none";
    //liDetailRegion.style.display = "none";
    //liDetailRegion.style.display = "none";
    //console.log("liDetailRegion.style.display", liDetailRegion.style.display);

    const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(
      clsPrivateSessionStorage.viewId_Main,
      clsPrivateSessionStorage.cmPrjId,
    );
    for (const objViewRegion of arrViewRegion) {
      switch (objViewRegion.regionTypeId) {
        case enumRegionType.QueryRegion_0001:
          liQueryRegion.style.display = 'block';
          ViewInfo_AllPropEx.remove(arrLi, liQueryRegion);
          //var objLi: HTMLLIElement = <HTMLLIElement>document.getElementById("liQueryRegion");
          //var objA: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
          //if (objA.href.indexOf("?") == -1) {
          //    var strHtml = Format("{0}?regionId={1}", objA.href, objViewRegion.regionId);
          //    objA.href = strHtml;
          //}
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            liQueryRegion.title = objViewRegion.errMsg;
            liQueryRegion.classList.add('bg-warning');
          } else {
            liQueryRegion.title = '';
            liQueryRegion.classList.remove('bg-warning');
          }

          break;
        case enumRegionType.EditRegion_0003:
          liEditRegion.style.display = 'block';
          ViewInfo_AllPropEx.remove(arrLi, liEditRegion);
          //var objLi: HTMLLIElement = <HTMLLIElement>document.getElementById("liEditRegion");
          //var objA: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
          //if (objA.href.indexOf("?") == -1) {
          //    var strHtml = Format("{0}?regionId={1}", objA.href, objViewRegion.regionId);
          //    objA.href = strHtml;
          //}
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            liEditRegion.title = objViewRegion.errMsg;
            liEditRegion.classList.add('bg-warning');
          } else {
            liEditRegion.title = '';
            liEditRegion.classList.remove('bg-warning');
          }
          break;
        case enumRegionType.ListRegion_0002:
          liListRegion.style.display = 'block';
          ViewInfo_AllPropEx.remove(arrLi, liListRegion);
          //var objLi: HTMLLIElement = <HTMLLIElement>document.getElementById("liListRegion");
          //var objA: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
          //if (objA.href.indexOf("?") == -1) {
          //    var strHtml = Format("{0}?regionId={1}", objA.href, objViewRegion.regionId);
          //    objA.href = strHtml;
          //}
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            liListRegion.title = objViewRegion.errMsg;
            liListRegion.classList.add('bg-warning');
          } else {
            liListRegion.title = '';
            liListRegion.classList.remove('bg-warning');
          }
          break;
        case enumRegionType.FeatureRegion_0008:
          liFeatureRegion.style.display = 'block';
          ViewInfo_AllPropEx.remove(arrLi, liFeatureRegion);
          //var objLi: HTMLLIElement = <HTMLLIElement>document.getElementById("liFeatureRegion");
          //var objA: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
          //if (objA.href.indexOf("?") == -1) {
          //    var strHtml = Format("{0}?regionId={1}", objA.href, objViewRegion.regionId);
          //    objA.href = strHtml;
          //}
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            liFeatureRegion.title = objViewRegion.errMsg;
            liFeatureRegion.classList.add('bg-warning');
          } else {
            liFeatureRegion.title = '';
            liFeatureRegion.classList.remove('bg-warning');
          }
          break;
        case enumRegionType.DetailRegion_0006:
          liDetailRegion.style.display = 'block';
          ViewInfo_AllPropEx.remove(arrLi, liDetailRegion);
          //console.log("liDetailRegion.style.display", liDetailRegion.style.display);
          //var objLi: HTMLLIElement = <HTMLLIElement>document.getElementById("liDetailRegion");
          //var objA: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
          //if (objA.href.indexOf("?") == -1) {
          //    var strHtml = Format("{0}?regionId={1}", objA.href, objViewRegion.regionId);
          //    objA.href = strHtml;
          //}
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            liDetailRegion.title = objViewRegion.errMsg;
            liDetailRegion.classList.add('bg-warning');
          } else {
            liDetailRegion.title = '';
            liDetailRegion.classList.remove('bg-warning');
          }
          break;
        case enumRegionType.ExcelExportRegion_0007:
          liExcelExportRegion.style.display = 'block';
          ViewInfo_AllPropEx.remove(arrLi, liExcelExportRegion);
          //var objLi: HTMLLIElement = <HTMLLIElement>document.getElementById("liExcelExportRegion");
          //var objA: HTMLAnchorElement = <HTMLAnchorElement>objLi.firstChild;
          //if (objA.href.indexOf("?") == -1) {
          //    var strHtml = Format("{0}?regionId={1}", objA.href, objViewRegion.regionId);
          //    objA.href = strHtml;
          //}
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            liExcelExportRegion.title = objViewRegion.errMsg;
            liExcelExportRegion.classList.add('bg-warning');
          } else {
            liExcelExportRegion.title = '';
            liExcelExportRegion.classList.remove('bg-warning');
          }
          break;
      }
    }

    for (const itmLi of arrLi) {
      if (itmLi == null) continue;
      itmLi.style.display = 'none';
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
}
