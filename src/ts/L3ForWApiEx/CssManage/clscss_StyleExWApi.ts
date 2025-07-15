/**
* 类名:clscss_StyleExWApi
* 表名:css_Style(00050468)
* 版本:2023.02.04.1(服务器:LAPTOP-RAFT5SD9)
* 日期:2023/02/05 11:21:00
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
 * css_Style(css_Style)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年02月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
import { clscss_StyleENEx } from '@/ts/L0Entity/CssManage/clscss_StyleENEx';
import { clsCtlTypeEN, enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import {
  css_Style_GetObjByStyleIdCache,
  css_Style_GetObjLstByPagerAsync,
  css_Style_SortFunByKey,
} from '@/ts/L3ForWApi/CssManage/clscss_StyleWApi';
import {
  CtlType_func,
  CtlType_funcKey,
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
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const css_StyleEx_Controller = 'css_StyleExApi';
export const css_StyleEx_ConstructorName = 'css_StyleEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function css_StyleEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objcss_StyleENS:源对象
 * @returns 目标对象=>clscss_StyleEN:objcss_StyleENT
 **/
export function css_StyleEx_CopyToEx(objcss_StyleENS: clscss_StyleEN): clscss_StyleENEx {
  const strThisFuncName = css_StyleEx_CopyToEx.name;
  const objcss_StyleENT = new clscss_StyleENEx();
  try {
    ObjectAssign(objcss_StyleENT, objcss_StyleENS);
    return objcss_StyleENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_StyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcss_StyleENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function css_StyleEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_StyleENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcss_StyleObjLst = await css_Style_GetObjLstByPagerAsync(objPagerPara);
  const arrcss_StyleExObjLst = arrcss_StyleObjLst.map(css_StyleEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscss_StyleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrcss_StyleExObjLst) {
      await css_StyleEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcss_StyleExObjLst.length == 0) return arrcss_StyleExObjLst;
  let arrcss_Style_Sel: Array<clscss_StyleENEx> = arrcss_StyleExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcss_Style_Sel = arrcss_Style_Sel.sort(css_StyleEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcss_Style_Sel = arrcss_Style_Sel.sort(objPagerPara.sortFun);
    }

    return arrcss_Style_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      css_StyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_StyleENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcss_StyleS:源对象
 **/
export async function css_StyleEx_FuncMap_CtlTypeName(objcss_Style: clscss_StyleENEx) {
  const strThisFuncName = css_StyleEx_FuncMap_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objcss_Style.ctlTypeName) == true) {
      const CtlType_CtlTypeId = objcss_Style.ctlTypeId;
      const CtlType_CtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlType_CtlTypeId,
      );
      objcss_Style.ctlTypeName = CtlType_CtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000252)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_StyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-02-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_StyleEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_StyleENEx.con_CtlTypeName:
        return (a: clscss_StyleENEx, b: clscss_StyleENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      default:
        return css_Style_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscss_StyleENEx.con_CtlTypeName:
        return (a: clscss_StyleENEx, b: clscss_StyleENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      default:
        return css_Style_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-02-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function css_StyleEx_FuncMapByFldName(strFldName: string, objcss_StyleEx: clscss_StyleENEx) {
  const strThisFuncName = css_StyleEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscss_StyleEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscss_StyleENEx.con_CtlTypeName:
      return css_StyleEx_FuncMap_CtlTypeName(objcss_StyleEx);
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
 * @param objcss_StyleS:源对象
 **/
export async function css_StyleEx_FuncMapKey_CtlTypeName(
  objcss_Style: clscss_StyleENEx,
): Promise<Array<string>> {
  const strThisFuncName = css_StyleEx_FuncMapKey_CtlTypeName.name;
  try {
    if (IsNullOrEmpty(objcss_Style.ctlTypeName) == true) return [];
    const CtlType_CtlTypeName = objcss_Style.ctlTypeName;
    const arrCtlTypeId = await CtlType_funcKey(
      clsCtlTypeEN.con_CtlTypeName,
      CtlType_CtlTypeName,
      enumComparisonOp.Like_03,
    );
    return arrCtlTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000252)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_StyleEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function css_StyleEx_GetHtml4Content(
  strStyleId: string,
  strContent: string,
): Promise<string> {
  const strThisFuncName = css_StyleEx_GetHtml4Content.name;
  // const intVersionNo = 1;

  const objcss_Style = await css_Style_GetObjByStyleIdCache(strStyleId);
  if (objcss_Style == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
      css_StyleEx_ConstructorName,
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

  switch (objcss_Style.ctlTypeId) {
    case enumCtlType.Button_01:
      btnCurr = GetButton_Empty(objcss_Style.styleContent);
      btnCurr.innerHTML = objcss_Style.styleName;
      return btnCurr.outerHTML;

    case enumCtlType.span_43:
      spaCurr = GetSpan_Empty(objcss_Style.styleContent);
      spaCurr.innerHTML = strContent;
      return spaCurr.outerHTML;

    case enumCtlType.TextBox_16:
      txtCurr = GetTextBox_Empty(objcss_Style.styleContent);
      txtCurr.value = objcss_Style.styleName;
      return txtCurr.outerHTML;
    case enumCtlType.DropDownList_06:
      ddlCurr = GetSelect_Empty(objcss_Style.styleContent);
      ddlCurr.add(new Option(objcss_Style.styleName, '01'));
      ddlCurr.add(new Option('选项2', '01'));

      return ddlCurr.outerHTML;
    case enumCtlType.Table_42:
      tabCurr = GetTable_Empty(objcss_Style.styleContent);
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
      objControl = await CtlType_GetObjByCtlTypeIdCache(objcss_Style.ctlTypeId);
      if (objControl == null) break;

      AccessCtlTypeDefault(objControl.ctlTypeName, 'css_StyleEx_GetHtml4Content');

      break;
  }

  return '';
}

export async function css_StyleEx_CreateGraph4FldDispUnit(
  strStyleId: string,
): Promise<HTMLDivElement> {
  const strThisFuncName = css_StyleEx_CreateGraph4FldDispUnit.name;
  // const intVersionNo = 1;
  const divFldDispUnit: HTMLDivElement = await GetDiv_Empty('');

  const objcss_Style = await css_Style_GetObjByStyleIdCache(strStyleId);
  if (objcss_Style == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
      css_StyleEx_ConstructorName,
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
  switch (objcss_Style.ctlTypeId) {
    case enumCtlType.Button_01:
      btnCurr = GetButton_Empty(objcss_Style.styleContent);
      btnCurr.innerHTML = objcss_Style.styleName;
      divFldDispUnit.appendChild(btnCurr);
      break;
    case enumCtlType.span_43:
      spaCurr = GetSpan_Empty(objcss_Style.styleContent);
      spaCurr.innerHTML = objcss_Style.styleName;
      divFldDispUnit.appendChild(spaCurr);
      break;
    case enumCtlType.Label_10:
      lblCurr = GetLabel_Empty(objcss_Style.styleContent);
      lblCurr.innerHTML = objcss_Style.styleName;
      divFldDispUnit.appendChild(lblCurr);
      break;
    case enumCtlType.TextBox_16:
      txtCurr = GetTextBox_Empty(objcss_Style.styleContent);
      txtCurr.value = objcss_Style.styleName;
      divFldDispUnit.appendChild(txtCurr);
      break;
    case enumCtlType.DropDownList_06:
      ddlCurr = GetSelect_Empty(objcss_Style.styleContent);
      ddlCurr.add(new Option(objcss_Style.styleName, '01'));
      ddlCurr.add(new Option('选项2', '01'));

      divFldDispUnit.appendChild(ddlCurr);
      break;
    case enumCtlType.Table_42:
      tabCurr = GetTable_Empty(objcss_Style.styleContent);
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
      objControl = await CtlType_GetObjByCtlTypeIdCache(objcss_Style.ctlTypeId);
      if (objControl == null) break;

      AccessCtlTypeDefault(objControl.ctlTypeName, 'css_StyleEx_GetHtml4Content');

      break;
  }

  return divFldDispUnit;
}

export async function css_StyleEx_GetHtmlElementByStyleId(
  strStyleId: string,
  strContent: string,
): Promise<HTMLElement> {
  const strThisFuncName = css_StyleEx_GetHtmlElementByStyleId.name;
  // const intVersionNo = 1;
  const divFldDispUnit: HTMLDivElement = await GetDiv_Empty('');

  const objcss_Style = await css_Style_GetObjByStyleIdCache(strStyleId);
  if (objcss_Style == null) {
    const strMsg = Format(
      '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
      css_StyleEx_ConstructorName,
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
  switch (objcss_Style.ctlTypeId) {
    case enumCtlType.Button_01:
      btnCurr = GetButton_Empty(objcss_Style.styleContent);
      btnCurr.innerHTML = strContent;
      //divFldDispUnit.appendChild(btnCurr);
      return btnCurr;
    case enumCtlType.span_43:
      spaCurr = GetSpan_Empty(objcss_Style.styleContent);
      spaCurr.innerHTML = strContent;
      return spaCurr;
    case enumCtlType.Label_10:
      lblCurr = GetLabel_Empty(objcss_Style.styleContent);
      lblCurr.innerHTML = strContent;
      return lblCurr;
    case enumCtlType.TextBox_16:
      txtCurr = GetTextBox_Empty(objcss_Style.styleContent);
      txtCurr.value = strContent;
      return txtCurr;
    case enumCtlType.DropDownList_06:
      ddlCurr = GetSelect_Empty(objcss_Style.styleContent);
      ddlCurr.add(new Option(objcss_Style.styleName, '01'));
      ddlCurr.add(new Option('选项2', '01'));
      return ddlCurr;
    case enumCtlType.Table_42:
      tabCurr = GetTable_Empty(objcss_Style.styleContent);
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

      return tabCurr;
    case enumCtlType.CheckBox_02:
      break;
    case enumCtlType.TableHeader_44:
      break;
    case enumCtlType.TablePager_45:
      break;
    default:
      objControl = await CtlType_GetObjByCtlTypeIdCache(objcss_Style.ctlTypeId);
      if (objControl == null) break;

      AccessCtlTypeDefault(objControl.ctlTypeName, 'css_StyleEx_GetHtmlElementByStyleId');

      break;
  }

  return divFldDispUnit;
}
