/**
* 类名:clscss_FldDispUnitStyleExWApi
* 表名:css_FldDispUnitStyle(00050615)
* 版本:2023.02.04.1(服务器:LAPTOP-RAFT5SD9)
* 日期:2023/02/05 00:03:34
* 生成者:pyf
* 生成服务器IP:
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
* 相关数据库:103.116.76.183,9433AGC_CS12
* PrjDataBaseId:0005
模块中文名:样式表管理(CssManage)
* 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
* 编程语言:TypeScript
* 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
  *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
**/

/**
 * 字段显示单元样式(css_FldDispUnitStyle)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年02月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { css_StyleEx_GetHtmlElementByStyleId } from './clscss_StyleExWApi';
import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';
import { clscss_FldDispUnitStyleENEx } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleENEx';
import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import {
  css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdCache,
  css_FldDispUnitStyle_GetObjLstAsync,
  css_FldDispUnitStyle_SortFunByKey,
} from '@/ts/L3ForWApi/CssManage/clscss_FldDispUnitStyleWApi';
import { css_Style_func } from '@/ts/L3ForWApi/CssManage/clscss_StyleWApi';
import {
  CtlType_func,
  CtlType_funcKey,
  CtlType_GetNameByCtlTypeIdCache,
  CtlType_GetObjByCtlTypeIdCache,
} from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  GetButton_Empty,
  GetDiv_Empty,
  GetLabel_Empty,
  GetSelect_Empty,
  GetSpan_Empty,
  GetTable_Empty,
  GetTd_Empty,
  GetTextBox_Empty,
  GetTr_Empty,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { AccessCtlTypeDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format, HtmlEncode, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const css_FldDispUnitStyleEx_Controller = 'css_FldDispUnitStyleExApi';
export const css_FldDispUnitStyleEx_ConstructorName = 'css_FldDispUnitStyleEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function css_FldDispUnitStyleEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  // const strThisFuncName = 'GetWebApiUrl';
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objcss_FldDispUnitStyleENS:源对象
 * @returns 目标对象=>clscss_FldDispUnitStyleEN:objcss_FldDispUnitStyleENT
 **/
export function css_FldDispUnitStyleEx_CopyToEx(
  objcss_FldDispUnitStyleENS: clscss_FldDispUnitStyleEN,
): clscss_FldDispUnitStyleENEx {
  const strThisFuncName = css_FldDispUnitStyleEx_CopyToEx.name;
  const objcss_FldDispUnitStyleENT = new clscss_FldDispUnitStyleENEx();
  try {
    ObjectAssign(objcss_FldDispUnitStyleENT, objcss_FldDispUnitStyleENS);
    return objcss_FldDispUnitStyleENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcss_FldDispUnitStyleENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function css_FldDispUnitStyleEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_FldDispUnitStyleENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcss_FldDispUnitStyleObjLst = await css_FldDispUnitStyle_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcss_FldDispUnitStyleExObjLst = arrcss_FldDispUnitStyleObjLst.map(
    css_FldDispUnitStyleEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscss_FldDispUnitStyleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcss_FldDispUnitStyleExObjLst) {
      await css_FldDispUnitStyleEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcss_FldDispUnitStyleExObjLst.length == 0) return arrcss_FldDispUnitStyleExObjLst;
  let arrcss_FldDispUnitStyle_Sel: Array<clscss_FldDispUnitStyleENEx> =
    arrcss_FldDispUnitStyleExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcss_FldDispUnitStyle_Sel = arrcss_FldDispUnitStyle_Sel.sort(
        css_FldDispUnitStyleEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcss_FldDispUnitStyle_Sel = arrcss_FldDispUnitStyle_Sel.sort(objPagerPara.sortFun);
    }

    return arrcss_FldDispUnitStyle_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_FldDispUnitStyleENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyleEx_FuncMap_CtlTypeName(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyleEx_FuncMap_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.ctlTypeName) == true) {
      const CtlType_ctlTypeId = objcss_FldDispUnitStyle.ctlTypeId;
      const CtlType_CtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlType_ctlTypeId,
      );
      objcss_FldDispUnitStyle.ctlTypeName = CtlType_CtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000252)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_FldDispUnitStyleEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_FldDispUnitStyleENEx.con_CtlTypeName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameContent:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return a.styleNameContent.localeCompare(b.styleNameContent);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameTitle:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return a.styleNameTitle.localeCompare(b.styleNameTitle);
        };
      case clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return a.fldDispUnitFormatDisp.localeCompare(b.fldDispUnitFormatDisp);
        };
      case clscss_FldDispUnitStyleENEx.con_DuFldDispUnitStyleName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return a.duFldDispUnitStyleName.localeCompare(b.duFldDispUnitStyleName);
        };
      default:
        return css_FldDispUnitStyle_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscss_FldDispUnitStyleENEx.con_CtlTypeName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameContent:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return b.styleNameContent.localeCompare(a.styleNameContent);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameTitle:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return b.styleNameTitle.localeCompare(a.styleNameTitle);
        };
      case clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return b.fldDispUnitFormatDisp.localeCompare(a.fldDispUnitFormatDisp);
        };
      case clscss_FldDispUnitStyleENEx.con_DuFldDispUnitStyleName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return b.duFldDispUnitStyleName.localeCompare(a.duFldDispUnitStyleName);
        };
      default:
        return css_FldDispUnitStyle_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function css_FldDispUnitStyleEx_FuncMapByFldName(
  strFldName: string,
  objcss_FldDispUnitStyleEx: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyleEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscss_FldDispUnitStyleEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscss_FldDispUnitStyleENEx.con_CtlTypeName:
      return css_FldDispUnitStyleEx_FuncMap_CtlTypeName(objcss_FldDispUnitStyleEx);
    case clscss_FldDispUnitStyleENEx.con_StyleNameContent:
      return css_FldDispUnitStyleEx_FuncMap_StyleNameContent(objcss_FldDispUnitStyleEx);
    case clscss_FldDispUnitStyleENEx.con_StyleNameTitle:
      return css_FldDispUnitStyleEx_FuncMap_StyleNameTitle(objcss_FldDispUnitStyleEx);
    case clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp:
      return css_FldDispUnitStyleEx_FuncMap_FldDispUnitFormatDisp(objcss_FldDispUnitStyleEx);
    case clscss_FldDispUnitStyleENEx.con_DuFldDispUnitStyleName:
      return css_FldDispUnitStyleEx_FuncMap_DuFldDispUnitStyleName(objcss_FldDispUnitStyleEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyleEx_FuncMapKey_CtlTypeName(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
): Promise<Array<string>> {
  const strThisFuncName = css_FldDispUnitStyleEx_FuncMapKey_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.ctlTypeName) == true) return [];
    const CtlType_CtlTypeName = objcss_FldDispUnitStyle.ctlTypeName;
    const arrctlTypeId = await CtlType_funcKey(
      clsCtlTypeEN.con_CtlTypeName,
      CtlType_CtlTypeName,
      enumComparisonOp.Like_03,
    );
    return arrctlTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000252)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function css_FldDispUnitStyleEx_CreateGraph4FldDispUnitBak(
  strFldDispUnitStyleId: string,
): Promise<HTMLDivElement> {
  const strThisFuncName = css_FldDispUnitStyleEx_CreateGraph4FldDispUnit.name;
  // const intVersionNo = 1;
  const divFldDispUnit: HTMLDivElement = await GetDiv_Empty('');

  const objCss_FldDispUnitStyle = await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdCache(
    strFldDispUnitStyleId,
  );
  if (objCss_FldDispUnitStyle == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return divFldDispUnit;
  }
  let btnCurr;
  let spaCurr;
  let txtCurr;
  let ddlCurr;
  let tabCurr;
  let trCurr;
  let tdCurr1;
  let spnTemp1;
  let spnTemp2;
  let tdCurr2;
  let objControl;

  switch (objCss_FldDispUnitStyle.ctlTypeId) {
    case enumCtlType.Button_01:
      btnCurr = GetButton_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      btnCurr.innerHTML = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      divFldDispUnit.appendChild(btnCurr);
      break;
    case enumCtlType.span_43:
      spaCurr = GetSpan_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      spaCurr.innerHTML = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      divFldDispUnit.appendChild(spaCurr);
      break;
    case enumCtlType.TextBox_16:
      txtCurr = GetTextBox_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      txtCurr.value = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      divFldDispUnit.appendChild(txtCurr);
      break;
    case enumCtlType.DropDownList_06:
      ddlCurr = GetSelect_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      ddlCurr.add(new Option(objCss_FldDispUnitStyle.fldDispUnitStyleDesc, '01'));
      ddlCurr.add(new Option('选项2', '01'));

      divFldDispUnit.appendChild(ddlCurr);
      break;
    case enumCtlType.Table_42:
      tabCurr = GetTable_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      trCurr = GetTr_Empty('');
      tdCurr1 = GetTd_Empty('');
      spnTemp1 = GetSpan_Empty('');
      spnTemp1.innerHTML = '格1';
      spnTemp2 = GetSpan_Empty('');
      spnTemp2.innerHTML = '格2';
      tdCurr1.appendChild(spnTemp1);
      tdCurr2 = GetTd_Empty('');
      tdCurr2.appendChild(spnTemp2);
      trCurr.appendChild(tdCurr1);
      trCurr.appendChild(tdCurr2);
      tabCurr.appendChild(trCurr);

      divFldDispUnit.appendChild(tabCurr);
      break;
    case enumCtlType.CheckBox_02:
      break;
    case enumCtlType.TableHeader_44:
      break;
    case enumCtlType.TablePager_45:
      break;
    default:
      objControl = await CtlType_GetObjByCtlTypeIdCache(objCss_FldDispUnitStyle.ctlTypeId);
      if (objControl == null) break;

      AccessCtlTypeDefault(
        objControl.ctlTypeName,
        'css_FldDispUnitStyleEx_CreateGraph4FldDispUnitBak',
      );

      break;
  }

  return divFldDispUnit;
}

export async function css_FldDispUnitStyleEx_GetHtml4TitleContent(
  strFldDispUnitStyleId: string,
  strTitle: string,
  strContent: string,
): Promise<string> {
  const strThisFuncName = css_FldDispUnitStyleEx_CreateGraph4FldDispUnit.name;
  // const intVersionNo = 1;

  const objCss_FldDispUnitStyle = await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdCache(
    strFldDispUnitStyleId,
  );
  if (objCss_FldDispUnitStyle == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return '';
  }
  let btnCurr;
  let spaCurr;
  let txtCurr;
  let ddlCurr;
  let tabCurr;
  let trCurr;
  let tdCurr1;
  let spnTemp1;
  let spnTemp2;
  let tdCurr2;
  let objControl;

  let lblCurr;
  switch (objCss_FldDispUnitStyle.ctlTypeId) {
    case enumCtlType.Button_01:
      btnCurr = GetButton_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      btnCurr.innerHTML = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      return btnCurr.innerHTML;
    case enumCtlType.span_43:
      spaCurr = GetSpan_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      if (
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdTitle) == false &&
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdContent) == false
      ) {
        const spaStyle_Title = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdTitle,
          strTitle,
        );
        const spaStyle_Content = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdContent,
          strContent,
        );

        spaCurr.innerHTML = Format(
          objCss_FldDispUnitStyle.fldDispUnitFormat,
          spaStyle_Title.outerHTML,
          spaStyle_Content.outerHTML,
        ); // objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      }
      return spaCurr.innerHTML;
    case enumCtlType.Label_10:
      lblCurr = GetLabel_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      if (
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdTitle) == false &&
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdContent) == false
      ) {
        const spaStyle_Title = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdTitle,
          strTitle,
        );
        const spaStyle_Content = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdContent,
          strContent,
        );

        lblCurr.innerHTML = Format(
          objCss_FldDispUnitStyle.fldDispUnitFormat,
          spaStyle_Title.outerHTML,
          spaStyle_Content.outerHTML,
        ); // objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      }
      return lblCurr.innerHTML;

    case enumCtlType.TextBox_16:
      txtCurr = GetTextBox_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      txtCurr.value = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      return txtCurr.outerHTML;
      break;
    case enumCtlType.DropDownList_06:
      ddlCurr = GetSelect_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      ddlCurr.add(new Option(objCss_FldDispUnitStyle.fldDispUnitStyleDesc, '01'));
      ddlCurr.add(new Option('选项2', '01'));

      return ddlCurr.outerHTML;

    case enumCtlType.Table_42:
      tabCurr = GetTable_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      trCurr = GetTr_Empty('');
      tdCurr1 = GetTd_Empty('');
      spnTemp1 = GetSpan_Empty('');
      spnTemp1.innerHTML = '格1';
      spnTemp2 = GetSpan_Empty('');
      spnTemp2.innerHTML = '格2';
      tdCurr1.appendChild(spnTemp1);
      tdCurr2 = GetTd_Empty('');
      tdCurr2.appendChild(spnTemp2);
      trCurr.appendChild(tdCurr1);
      trCurr.appendChild(tdCurr2);
      tabCurr.appendChild(trCurr);

      return tabCurr.outerHTML;

    case enumCtlType.CheckBox_02:
      break;
    case enumCtlType.TableHeader_44:
      break;
    case enumCtlType.TablePager_45:
      break;
    default:
      objControl = await CtlType_GetObjByCtlTypeIdCache(objCss_FldDispUnitStyle.ctlTypeId);
      if (objControl == null) break;

      AccessCtlTypeDefault(objControl.ctlTypeName, 'css_FldDispUnitStyleEx_GetHtml4TitleContent');

      break;
  }

  return '';
}

export async function css_FldDispUnitStyleEx_CreateGraph4FldDispUnit(
  strFldDispUnitStyleId: string,
): Promise<HTMLDivElement> {
  const strThisFuncName = css_FldDispUnitStyleEx_CreateGraph4FldDispUnit.name;
  // const intVersionNo = 1;
  const divFldDispUnit: HTMLDivElement = await GetDiv_Empty('');

  const objCss_FldDispUnitStyle = await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdCache(
    strFldDispUnitStyleId,
  );
  if (objCss_FldDispUnitStyle == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return divFldDispUnit;
  }
  let btnCurr;
  let spaCurr;
  let txtCurr;
  let ddlCurr;
  let tabCurr;
  let trCurr;
  let tdCurr1;
  let spnTemp1;
  let spnTemp2;
  let tdCurr2;
  let objControl;

  let lblCurr;
  switch (objCss_FldDispUnitStyle.ctlTypeId) {
    case enumCtlType.Button_01:
      btnCurr = GetButton_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      btnCurr.innerHTML = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      divFldDispUnit.appendChild(btnCurr);
      break;
    case enumCtlType.span_43:
      spaCurr = GetSpan_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      if (
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdTitle) == false &&
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdContent) == false
      ) {
        const spaStyle_Title = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdTitle,
          '标题',
        );
        const spaStyle_Content = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdContent,
          '内容',
        );

        spaCurr.innerHTML = Format(
          objCss_FldDispUnitStyle.fldDispUnitFormat,
          spaStyle_Title.outerHTML,
          spaStyle_Content.outerHTML,
        ); // objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      }
      divFldDispUnit.appendChild(spaCurr);
      break;
    case enumCtlType.Label_10:
      lblCurr = GetLabel_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      if (
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdTitle) == false &&
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdContent) == false
      ) {
        const spaStyle_Title = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdTitle,
          '标题',
        );
        const spaStyle_Content = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdContent,
          '内容',
        );

        lblCurr.innerHTML = Format(
          objCss_FldDispUnitStyle.fldDispUnitFormat,
          spaStyle_Title.outerHTML,
          spaStyle_Content.outerHTML,
        ); // objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      }
      divFldDispUnit.appendChild(lblCurr);
      break;
    case enumCtlType.TextBox_16:
      txtCurr = GetTextBox_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      txtCurr.value = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      divFldDispUnit.appendChild(txtCurr);
      break;
    case enumCtlType.DropDownList_06:
      ddlCurr = GetSelect_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      ddlCurr.add(new Option(objCss_FldDispUnitStyle.fldDispUnitStyleDesc, '01'));
      ddlCurr.add(new Option('选项2', '01'));

      divFldDispUnit.appendChild(ddlCurr);
      break;
    case enumCtlType.Table_42:
      tabCurr = GetTable_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      trCurr = GetTr_Empty('');
      tdCurr1 = GetTd_Empty('');
      spnTemp1 = GetSpan_Empty('');
      spnTemp1.innerHTML = '格1';
      spnTemp2 = GetSpan_Empty('');
      spnTemp2.innerHTML = '格2';
      tdCurr1.appendChild(spnTemp1);
      tdCurr2 = GetTd_Empty('');
      tdCurr2.appendChild(spnTemp2);
      trCurr.appendChild(tdCurr1);
      trCurr.appendChild(tdCurr2);
      tabCurr.appendChild(trCurr);

      divFldDispUnit.appendChild(tabCurr);
      break;
    case enumCtlType.CheckBox_02:
      break;
    case enumCtlType.TableHeader_44:
      break;
    case enumCtlType.TablePager_45:
      break;
    default:
      objControl = await CtlType_GetObjByCtlTypeIdCache(objCss_FldDispUnitStyle.ctlTypeId);
      if (objControl == null) break;

      AccessCtlTypeDefault(
        objControl.ctlTypeName,
        'css_FldDispUnitStyleEx_CreateGraph4FldDispUnit',
      );

      break;
  }

  return divFldDispUnit;
}

export async function css_FldDispUnitStyleEx_CreateDiv4FldDispUnit(
  strFldDispUnitStyleId: string,
  strTitle: string,
  strContent: string,
): Promise<HTMLDivElement> {
  const strThisFuncName = css_FldDispUnitStyleEx_CreateGraph4FldDispUnit.name;
  // const intVersionNo = 1;
  const divFldDispUnit: HTMLDivElement = await GetDiv_Empty('');

  const objCss_FldDispUnitStyle = await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdCache(
    strFldDispUnitStyleId,
  );
  if (objCss_FldDispUnitStyle == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return divFldDispUnit;
  }
  const objCss_FldDispUnitStyleEx = css_FldDispUnitStyleEx_CopyToEx(objCss_FldDispUnitStyle);
  css_FldDispUnitStyleEx_FuncMap_DuFldDispUnitStyleName(objCss_FldDispUnitStyleEx);
  const strCtlTypeName = await CtlType_GetNameByCtlTypeIdCache(objCss_FldDispUnitStyle.ctlTypeId);
  const spnCtlType = GetSpan_Empty('border text-danger');
  spnCtlType.innerHTML = Format(
    '{0}({1}):',
    strCtlTypeName.toUpperCase(),
    objCss_FldDispUnitStyle.fldDispUnitStyleName,
  );
  const divLeft = GetDiv_Empty('border float-left');
  divLeft.appendChild(spnCtlType);
  //const objBr = GetBr_Empty();
  let btnCurr;
  let spaCurr;
  let txtCurr;
  let ddlCurr;
  let tabCurr;
  let trCurr;
  let tdCurr1;
  let spnTemp1;
  let spnTemp2;
  let tdCurr2;
  let objControl;

  let lblCurr;
  switch (objCss_FldDispUnitStyle.ctlTypeId) {
    case enumCtlType.Button_01:
      btnCurr = GetButton_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      btnCurr.innerHTML = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      divFldDispUnit.appendChild(btnCurr);
      break;
    case enumCtlType.span_43:
      spaCurr = GetSpan_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);

      if (
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdTitle) == false &&
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdContent) == false
      ) {
        const divTemp = GetDiv_Empty('border float-left ml-2');
        const spaStyle_Title = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdTitle,
          strTitle,
        );
        const spaStyle_Content = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdContent,
          strContent,
        );

        spaCurr.innerHTML = Format(
          objCss_FldDispUnitStyle.fldDispUnitFormat,
          spaStyle_Title.outerHTML,
          spaStyle_Content.outerHTML,
        ); // objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
        divTemp.appendChild(spaCurr);
        divFldDispUnit.appendChild(divLeft);
        //divFldDispUnit.appendChild(objBr);
        divFldDispUnit.appendChild(divTemp);
      }

      break;
    case enumCtlType.Label_10:
      lblCurr = GetLabel_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);

      if (
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdTitle) == false &&
        IsNullOrEmpty(objCss_FldDispUnitStyle.styleIdContent) == false
      ) {
        const divTemp = GetDiv_Empty('border float-left ml-2');
        const spaStyle_Title = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdTitle,
          strTitle,
        );
        const spaStyle_Content = await css_StyleEx_GetHtmlElementByStyleId(
          objCss_FldDispUnitStyle.styleIdContent,
          strContent,
        );

        lblCurr.innerHTML = Format(
          objCss_FldDispUnitStyle.fldDispUnitFormat,
          spaStyle_Title.outerHTML,
          spaStyle_Content.outerHTML,
        ); // objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
        divTemp.appendChild(lblCurr);
        divFldDispUnit.appendChild(divLeft);
        //divFldDispUnit.appendChild(objBr);
        divFldDispUnit.appendChild(divTemp);
      }

      break;
    case enumCtlType.TextBox_16:
      txtCurr = GetTextBox_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      txtCurr.value = objCss_FldDispUnitStyle.fldDispUnitStyleDesc;
      divFldDispUnit.appendChild(txtCurr);
      break;
    case enumCtlType.DropDownList_06:
      ddlCurr = GetSelect_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      ddlCurr.add(new Option(objCss_FldDispUnitStyle.fldDispUnitStyleDesc, '01'));
      ddlCurr.add(new Option('选项2', '01'));

      divFldDispUnit.appendChild(ddlCurr);
      break;
    case enumCtlType.Table_42:
      tabCurr = GetTable_Empty(objCss_FldDispUnitStyle.fldDispUnitStyleContent);
      trCurr = GetTr_Empty('');
      tdCurr1 = GetTd_Empty('');
      spnTemp1 = GetSpan_Empty('');
      spnTemp1.innerHTML = '格1';
      spnTemp2 = GetSpan_Empty('');
      spnTemp2.innerHTML = '格2';
      tdCurr1.appendChild(spnTemp1);
      tdCurr2 = GetTd_Empty('');
      tdCurr2.appendChild(spnTemp2);
      trCurr.appendChild(tdCurr1);
      trCurr.appendChild(tdCurr2);
      tabCurr.appendChild(trCurr);

      divFldDispUnit.appendChild(tabCurr);
      break;
    case enumCtlType.CheckBox_02:
      break;
    case enumCtlType.TableHeader_44:
      break;
    case enumCtlType.TablePager_45:
      break;
    default:
      objControl = await CtlType_GetObjByCtlTypeIdCache(objCss_FldDispUnitStyle.ctlTypeId);
      if (objControl == null) break;

      AccessCtlTypeDefault(objControl.ctlTypeName, 'css_FldDispUnitStyleEx_CreateDiv4FldDispUnit');

      break;
  }

  return divFldDispUnit;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyleEx_FuncMap_StyleNameContent(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyleEx_FuncMap_StyleNameContent.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.styleNameContent) == true) {
      const css_Style_StyleId = objcss_FldDispUnitStyle.styleIdContent;
      const css_Style_StyleName = await css_Style_func(
        clscss_StyleEN.con_StyleId,
        clscss_StyleEN.con_StyleName,
        css_Style_StyleId,
      );
      objcss_FldDispUnitStyle.styleNameContent = css_Style_StyleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000253)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyleEx_FuncMap_StyleNameTitle(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyleEx_FuncMap_StyleNameTitle.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.styleNameTitle) == true) {
      const css_Style_StyleId = objcss_FldDispUnitStyle.styleIdTitle;
      const css_Style_StyleName = await css_Style_func(
        clscss_StyleEN.con_StyleId,
        clscss_StyleEN.con_StyleName,
        css_Style_StyleId,
      );
      objcss_FldDispUnitStyle.styleNameTitle = css_Style_StyleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000254)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyleEx_FuncMap_FldDispUnitFormatDisp(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyleEx_FuncMap_StyleNameTitle.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.fldDispUnitFormatDisp) == true) {
      objcss_FldDispUnitStyle.fldDispUnitFormatDisp = HtmlEncode(
        Format('{0}', objcss_FldDispUnitStyle.fldDispUnitFormat),
      );
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000254)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyleEx_FuncMap_DuFldDispUnitStyleName(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyleEx_FuncMap_DuFldDispUnitStyleName.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.duFldDispUnitStyleName) == true) {
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '字段显示单元样式名称';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleIdContent, strContent);
      spnStyle_Content.innerHTML = objcss_FldDispUnitStyle.fldDispUnitStyleName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objcss_FldDispUnitStyle.duFldDispUnitStyleName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000259)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
