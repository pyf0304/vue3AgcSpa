import $ from 'jquery';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { ViewRegionEx_GetObjLstByViewIdCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { SetSpanHtmlByIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format } from '@/ts/PubFun/clsString';
declare let strUrl_Session_SetString: string;

/// <summary>
/// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
/// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
/// </summary>
export class Main_ViewInfo {
  public static divName4LayoutHead = 'divName4LayoutHead';
  /*
   按钮单击,用于调用Js函数中btn_Click
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
  */
  public static ShowCurrItem(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const objPage: ViewRelaTabCRUDEx = new ViewRelaTabCRUDEx();
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
    const liViewRegionInTab: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liViewRegionInTab')
    );
    const liViewInfo_U: HTMLLIElement = <HTMLLIElement>document.getElementById('liViewInfo_U');
    const liViewRelaTabCRUD: HTMLLIElement = <HTMLLIElement>(
      document.getElementById('liViewRelaTabCRUD')
    );
    const liGeneViewCode: HTMLLIElement = <HTMLLIElement>document.getElementById('liGeneViewCode');

    if (liQueryRegion != null) liQueryRegion.className = 'nav-item ml-2';
    if (liEditRegion != null) liEditRegion.className = 'nav-item ml-2';
    if (liListRegion != null) liListRegion.className = 'nav-item ml-2';
    if (liFeatureRegion != null) liFeatureRegion.className = 'nav-item ml-2';
    if (liExcelExportRegion != null) liExcelExportRegion.className = 'nav-item ml-2';
    if (liDetailRegion != null) liDetailRegion.className = 'nav-item ml-2';
    if (liGeneViewCode != null) liGeneViewCode.className = 'nav-item ml-2';
    if (liViewRelaTabCRUD != null) liViewRelaTabCRUD.className = 'nav-item ml-2';
    if (liViewInfo_U != null) liViewInfo_U.className = 'nav-item ml-2';
    if (liViewRegionInTab != null) liViewRegionInTab.className = 'nav-item ml-2';

    switch (strCommandName) {
      case 'QryRegionFldsCRUD':
        if (liQueryRegion != null)
          liQueryRegion.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'FeatureRegionFldsCRUD':
        if (liFeatureRegion != null)
          liFeatureRegion.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'DGRegionFldsCRUD':
        if (liListRegion != null)
          liListRegion.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'EditRegionFldsCRUD':
        if (liEditRegion != null)
          liEditRegion.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'DetailRegionFldsCRUD':
        if (liDetailRegion != null)
          liDetailRegion.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'ExcelExportRegionFldsCRUD':
        if (liExcelExportRegion != null)
          liExcelExportRegion.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'ViewInfo_U':
        if (liViewInfo_U != null)
          liViewInfo_U.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'ViewRegionInTab':
        if (liViewRegionInTab != null)
          liViewRegionInTab.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'ViewRelaTabCRUD':
        if (liViewRelaTabCRUD != null)
          liViewRelaTabCRUD.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
      case 'GeneViewCode':
        if (liGeneViewCode != null)
          liGeneViewCode.className = 'nav-item ml-2 font-weight-bold text-g active';
        break;
    }
  }

  public static DispUserInfo() {
    //var objUserLoginInfo = clsPubSessionStorage.UserLoginInfo;
    //$('#spnUserId').html(objUserLoginInfo.userId);
    //$('#spnRoleName').html(objUserLoginInfo.roleName);

    //$('#spnCurrSelPrjId').html(objUserLoginInfo.currSelPrjId);
    //$('#spnCurrSelPrjName').html(objUserLoginInfo.currSelPrjName);

    //$('#spnPrjDataBaseName').html(objUserLoginInfo.prjDataBaseName);
    SetSpanHtmlByIdInDiv(Main_ViewInfo.divName4LayoutHead, 'spnUserId', clsPubLocalStorage.userId);
    SetSpanHtmlByIdInDiv(
      Main_ViewInfo.divName4LayoutHead,
      'spnRoleName',
      clsPubLocalStorage.roleName,
    );
    SetSpanHtmlByIdInDiv(
      Main_ViewInfo.divName4LayoutHead,
      'spnCurrSelPrjId',
      clsPrivateSessionStorage.currSelPrjId,
    );
    SetSpanHtmlByIdInDiv(
      Main_ViewInfo.divName4LayoutHead,
      'spnCurrSelPrjName',
      clsPrivateSessionStorage.currSelPrjName,
    );
    SetSpanHtmlByIdInDiv(
      Main_ViewInfo.divName4LayoutHead,
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

  public static async DispViewInfo() {
    //let objViewInfo4Session = clsPubSessionStorage.ViewInfo4Session;
    $('#spnViewId').html(clsPrivateSessionStorage.viewId_Main);
    $('#spnViewName').html(clsPrivateSessionStorage.viewName);

    $('#spnFuncModuleNameSim').html(clsPrivateSessionStorage.funcModuleNameSim);
    $('#spnFuncModuleENName').html(clsPrivateSessionStorage.funcModuleEnName);

    $('#spnApplicationTypeId').html(clsPrivateSessionStorage.applicationTypeId);
    $('#spnApplicationTypeName').html(clsPubSessionStorage.applicationTypeName);

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
    const liGeneViewCode: HTMLLIElement = <HTMLLIElement>document.getElementById('liGeneViewCode');
    if (liGeneViewCode != null) {
      const objA_GC: HTMLAnchorElement = <HTMLAnchorElement>liGeneViewCode.firstChild;
      if (objA_GC.href.indexOf('?') == -1) {
        const strHtml = Format(
          '{0}?viewId={1}',
          objA_GC.href,
          clsPrivateSessionStorage.viewId_Main,
        );
        objA_GC.href = strHtml;
      }
    }
    const arrLi: Array<HTMLLIElement> = new Array<HTMLLIElement>();

    if (liQueryRegion != null) arrLi.push(liQueryRegion);
    if (liEditRegion != null) arrLi.push(liEditRegion);
    if (liListRegion != null) arrLi.push(liListRegion);
    if (liFeatureRegion != null) arrLi.push(liFeatureRegion);
    if (liExcelExportRegion != null) arrLi.push(liExcelExportRegion);
    if (liDetailRegion != null) arrLi.push(liDetailRegion);

    const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(
      clsPrivateSessionStorage.viewId_Main,
      clsPrivateSessionStorage.cmPrjId,
    );
    let objLi;
    let objA;
    let strHtml;
    for (const objViewRegion of arrViewRegion) {
      switch (objViewRegion.regionTypeId) {
        case enumRegionType.QueryRegion_0001:
          if (liQueryRegion == null) continue;
          liQueryRegion.style.display = 'block';
          Main_ViewInfo.remove(arrLi, liQueryRegion);
          objLi = <HTMLLIElement>document.getElementById('liQueryRegion');
          objA = <HTMLAnchorElement>objLi.firstChild;
          if (objA.href != undefined && objA.href != null && objA.href.indexOf('?') == -1) {
            strHtml = Format('{0}?regionId={1}', objA.href, objViewRegion.regionId);
            objA.href = strHtml;
          }
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            objA.classList.add('bg-danger');
            objA.title = objViewRegion.errMsg;
            objLi.classList.add('bg-danger');
          }
          break;
        case enumRegionType.EditRegion_0003:
          if (liEditRegion == null) continue;
          liEditRegion.style.display = 'block';
          Main_ViewInfo.remove(arrLi, liEditRegion);
          objLi = <HTMLLIElement>document.getElementById('liEditRegion');
          objA = <HTMLAnchorElement>objLi.firstChild;
          if (objA.href != undefined && objA.href != null && objA.href.indexOf('?') == -1) {
            strHtml = Format('{0}?regionId={1}', objA.href, objViewRegion.regionId);
            objA.href = strHtml;
          }
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            objA.classList.add('bg-danger');
            objA.title = objViewRegion.errMsg;
            objLi.classList.add('bg-danger');
          }
          break;
        case enumRegionType.ListRegion_0002:
          if (liListRegion == null) continue;
          liListRegion.style.display = 'block';
          Main_ViewInfo.remove(arrLi, liListRegion);
          objLi = <HTMLLIElement>document.getElementById('liListRegion');
          objA = <HTMLAnchorElement>objLi.firstChild;
          if (objA.href != undefined && objA.href != null && objA.href.indexOf('?') == -1) {
            strHtml = Format('{0}?regionId={1}', objA.href, objViewRegion.regionId);
            objA.href = strHtml;
          }
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            objA.classList.add('bg-danger');
            objA.title = objViewRegion.errMsg;
            objLi.classList.add('bg-danger');
          }
          break;
        case enumRegionType.FeatureRegion_0008:
          if (liFeatureRegion == null) continue;
          liFeatureRegion.style.display = 'block';
          Main_ViewInfo.remove(arrLi, liFeatureRegion);
          objLi = <HTMLLIElement>document.getElementById('liFeatureRegion');
          objA = <HTMLAnchorElement>objLi.firstChild;
          if (objA.href != undefined && objA.href != null && objA.href.indexOf('?') == -1) {
            strHtml = Format('{0}?regionId={1}', objA.href, objViewRegion.regionId);
            objA.href = strHtml;
          }
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            objA.classList.add('bg-danger');
            objA.title = objViewRegion.errMsg;
            objLi.classList.add('bg-danger');
          }
          break;
        case enumRegionType.DetailRegion_0006:
          if (liDetailRegion == null) continue;
          liDetailRegion.style.display = 'block';
          Main_ViewInfo.remove(arrLi, liDetailRegion);
          console.log('liDetailRegion.style.display', liDetailRegion.style.display);
          objLi = <HTMLLIElement>document.getElementById('liDetailRegion');
          objA = <HTMLAnchorElement>objLi.firstChild;
          if (objA.href != undefined && objA.href != null && objA.href.indexOf('?') == -1) {
            strHtml = Format('{0}?regionId={1}', objA.href, objViewRegion.regionId);
            objA.href = strHtml;
          }
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            objA.classList.add('bg-danger');
            objA.title = objViewRegion.errMsg;
            objLi.classList.add('bg-danger');
          }
          break;
        case enumRegionType.ExcelExportRegion_0007:
          if (liExcelExportRegion == null) continue;
          liExcelExportRegion.style.display = 'block';
          Main_ViewInfo.remove(arrLi, liExcelExportRegion);
          objLi = <HTMLLIElement>document.getElementById('liExcelExportRegion');
          objA = <HTMLAnchorElement>objLi.firstChild;
          if (objA.href != undefined && objA.href != null && objA.href.indexOf('?') == -1) {
            strHtml = Format('{0}?regionId={1}', objA.href, objViewRegion.regionId);
            objA.href = strHtml;
          }
          if (objViewRegion.errMsg != null && objViewRegion.errMsg.length > 0) {
            objA.classList.add('bg-danger');
            objA.title = objViewRegion.errMsg;
            objLi.classList.add('bg-danger');
          }
          break;
      }
    }

    for (const itmLi of arrLi) {
      itmLi.style.display = 'none';
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

  public static async DispViewInfoV2() {
    //let objViewInfo4Session = clsPubSessionStorage.ViewInfo4Session;
    $('#spnViewId').html(clsPrivateSessionStorage.viewId_Main);
    $('#spnViewName').html(clsPrivateSessionStorage.viewName);

    $('#spnApplicationTypeId').html(clsPrivateSessionStorage.applicationTypeId);
    $('#spnApplicationTypeName').html(clsPubSessionStorage.applicationTypeName);

    const ifrQryRegion = <HTMLIFrameElement>document.getElementById('ifrQryRegion');
    const ifrEditRegion = <HTMLIFrameElement>document.getElementById('ifrEditRegion');
    const ifrListRegion = <HTMLIFrameElement>document.getElementById('ifrListRegion');
    const ifrFeatureRegion = <HTMLIFrameElement>document.getElementById('ifrFeatureRegion');
    const ifrExcelExportRegion = <HTMLIFrameElement>document.getElementById('ifrExcelExportRegion');
    const ifrDetailRegion = <HTMLIFrameElement>document.getElementById('ifrDetailRegion');

    ifrQryRegion.style.display = 'none';
    ifrEditRegion.style.display = 'none';
    ifrListRegion.style.display = 'none';
    ifrFeatureRegion.style.display = 'none';
    ifrExcelExportRegion.style.display = 'none';
    ifrDetailRegion.style.display = 'none';
    ifrDetailRegion.style.display = 'none';
    console.log('liDetailRegion.style.display', ifrDetailRegion.style.display);

    const arrViewRegion = await ViewRegionEx_GetObjLstByViewIdCache(
      clsPrivateSessionStorage.viewId_Main,
      clsPrivateSessionStorage.cmPrjId,
    );
    // let objLi;
    // let objA;
    let strHtml;
    for (const objViewRegion of arrViewRegion) {
      switch (objViewRegion.regionTypeId) {
        case enumRegionType.QueryRegion_0001:
          ifrQryRegion.style.display = 'block';
          strHtml = Format(
            '../../RegionManage/QryRegionFldsCRUD?Op=ViewEdit&regionId={0}&viewId={1}',
            objViewRegion.regionId,
            clsPrivateSessionStorage.viewId_Main,
          );
          ifrEditRegion.src = strHtml;
          break;
        case enumRegionType.EditRegion_0003:
          ifrEditRegion.style.display = 'block';

          strHtml = Format(
            '../../RegionManage/EditRegionFldsCRUD?Op=ViewEdit&regionId={0}&viewId={1}',
            objViewRegion.regionId,
            clsPrivateSessionStorage.viewId_Main,
          );
          ifrEditRegion.src = strHtml;
          break;
        case enumRegionType.ListRegion_0002:
          ifrListRegion.style.display = 'block';

          strHtml = Format(
            '../../RegionManage/DGRegionFldsCRUD?Op=ViewEdit&regionId={0}&viewId={1}',
            objViewRegion.regionId,
            clsPrivateSessionStorage.viewId_Main,
          );
          ifrEditRegion.src = strHtml;

          break;
        case enumRegionType.FeatureRegion_0008:
          ifrFeatureRegion.style.display = 'block';

          strHtml = Format(
            '../../RegionManage/FeatureRegionFldsCRUD?Op=ViewEdit&regionId={0}&viewId={1}',
            objViewRegion.regionId,
            clsPrivateSessionStorage.viewId_Main,
          );
          ifrEditRegion.src = strHtml;
          break;
        case enumRegionType.DetailRegion_0006:
          ifrDetailRegion.style.display = 'block';

          strHtml = Format(
            '../../RegionManage/DetailRegionFldsCRUD?Op=ViewEdit&regionId={0}&viewId={1}',
            objViewRegion.regionId,
            clsPrivateSessionStorage.viewId_Main,
          );
          ifrEditRegion.src = strHtml;
          break;
        case enumRegionType.ExcelExportRegion_0007:
          ifrExcelExportRegion.style.display = 'block';

          strHtml = Format(
            '../../RegionManage/ExcelExportRegionFldsCRUD?Op=ViewEdit&regionId={0}&viewId={1}',
            objViewRegion.regionId,
            clsPrivateSessionStorage.viewId_Main,
          );
          ifrEditRegion.src = strHtml;

          break;
      }
    }
  }
}
