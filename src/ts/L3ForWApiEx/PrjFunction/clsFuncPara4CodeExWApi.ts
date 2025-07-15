/**
 * 函数参数4Code(FuncPara4Code)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年07月28日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
//import $ from "jquery";
import { DataTypeAbbr_func } from '../../L3ForWApi/SysPara/clsDataTypeAbbrWApi.js';
import { clsDataTypeAbbrEN } from '../../L0Entity/SysPara/clsDataTypeAbbrEN.js';
import { FunctionPurpose_func } from '../../L3ForWApi/PrjFunction/clsFunctionPurposeWApi.js';
import { clsFunctionPurposeEN } from '../../L0Entity/PrjFunction/clsFunctionPurposeEN.js';
import {
  ObjectAssign,
  GetSortExpressInfo,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsFuncPara4CodeENEx } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeENEx';
import {
  FuncPara4Code_GetObjLstAsync,
  FuncPara4Code_GetObjLstByPagerAsync,
  FuncPara4Code_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsFuncPara4CodeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFuncPara4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDataTypeAbbr } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { DataTypeAbbr_GetObjByDataTypeIdCache } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { DataTypeAbbrEx_GetTypeString } from '@/ts/L3ForWApiEx/SysPara/clsDataTypeAbbrExWApi.js';
import { clsFuncPara4Code } from '@/ts/L0Entity/PrjFunction/clsFuncPara4Code.js';
export const funcPara4CodeExController = 'FuncPara4CodeExApi';
export const funcPara4CodeEx_ConstructorName = 'funcPara4CodeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function FuncPara4CodeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objFuncPara4CodeENS:源对象
 * @returns 目标对象=>clsFuncPara4CodeEN:objFuncPara4CodeENT
 **/
export function FuncPara4CodeEx_CopyToEx(
  objFuncPara4CodeENS: clsFuncPara4CodeEN,
): clsFuncPara4CodeENEx {
  const strThisFuncName = FuncPara4CodeEx_CopyToEx.name;
  const objFuncPara4CodeENT = new clsFuncPara4CodeENEx();
  try {
    ObjectAssign(objFuncPara4CodeENT, objFuncPara4CodeENS);
    return objFuncPara4CodeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcPara4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncPara4CodeENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FuncPara4CodeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFuncPara4CodeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFuncPara4CodeObjLst = await FuncPara4Code_GetObjLstByPagerAsync(objPagerPara);
  const arrFuncPara4CodeExObjLst = arrFuncPara4CodeObjLst.map(FuncPara4CodeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFuncPara4CodeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFuncPara4CodeExObjLst) {
      await FuncPara4CodeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrFuncPara4CodeExObjLst.length == 0) return arrFuncPara4CodeExObjLst;
  let arrFuncPara4CodeSel: Array<clsFuncPara4CodeENEx> = arrFuncPara4CodeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFuncPara4CodeSel = arrFuncPara4CodeSel.sort(
        FuncPara4CodeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFuncPara4CodeSel = arrFuncPara4CodeSel.sort(objPagerPara.sortFun);
    }

    return arrFuncPara4CodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      funcPara4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncPara4CodeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-28
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncPara4CodeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return FuncPara4Code_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return FuncPara4Code_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

export async function FuncPara4CodeEx_GetParaTypeName(
  objFuncPara4CodeEN: clsFuncPara4Code,
  strProgLangTypeId: string,
): Promise<string> {
  let objDataTypeAbbr; // = null;
  let strParameterType = '';
  //            throw new NotImplementedException();
  switch (objFuncPara4CodeEN.dataTypeId) {
    case enumDataTypeAbbr.Object_29:
      if (IsNullOrEmpty(objFuncPara4CodeEN.parameterType) == false)
        return objFuncPara4CodeEN.parameterType;
      objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objFuncPara4CodeEN.dataTypeId);
      return DataTypeAbbrEx_GetTypeString(objDataTypeAbbr, strProgLangTypeId);

    case enumDataTypeAbbr.ObjectLst_30:
      strParameterType = objFuncPara4CodeEN.parameterType.replace('[', '<').replace(']', '>');
      if (IsNullOrEmpty(strParameterType) == false) return strParameterType;
      objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objFuncPara4CodeEN.dataTypeId);
      return DataTypeAbbrEx_GetTypeString(objDataTypeAbbr, strProgLangTypeId);
    case enumDataTypeAbbr.Array_31:
      strParameterType = objFuncPara4CodeEN.parameterType.replace('[', '<').replace(']', '>');
      if (IsNullOrEmpty(strParameterType) == false) return strParameterType;
      objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objFuncPara4CodeEN.dataTypeId);
      return DataTypeAbbrEx_GetTypeString(objDataTypeAbbr, strProgLangTypeId);
    default:
      objDataTypeAbbr = await DataTypeAbbr_GetObjByDataTypeIdCache(objFuncPara4CodeEN.dataTypeId);
      return DataTypeAbbrEx_GetTypeString(objDataTypeAbbr, strProgLangTypeId);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFuncPara4CodeS:源对象
 **/
export async function FuncPara4CodeEx_FuncMapDataTypeName(objFuncPara4Code: clsFuncPara4CodeENEx) {
  const strThisFuncName = FuncPara4CodeEx_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objFuncPara4Code.dataTypeName) == true) {
      const DataTypeAbbrDataTypeId = objFuncPara4Code.dataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objFuncPara4Code.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000302)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcPara4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFuncPara4CodeS:源对象
 **/
export async function FuncPara4CodeEx_FuncMapFuncPurposeName(
  objFuncPara4Code: clsFuncPara4CodeENEx,
) {
  const strThisFuncName = FuncPara4CodeEx_FuncMapFuncPurposeName.name;
  try {
    if (IsNullOrEmpty(objFuncPara4Code.funcPurposeName) == true) {
      const FunctionPurposeFuncPurposeId = objFuncPara4Code.funcPurposeId;
      const FunctionPurposeFuncPurposeName = await FunctionPurpose_func(
        clsFunctionPurposeEN.con_FuncPurposeId,
        clsFunctionPurposeEN.con_FuncPurposeName,
        FunctionPurposeFuncPurposeId,
      );
      objFuncPara4Code.funcPurposeName = FunctionPurposeFuncPurposeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000421)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcPara4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export function FuncPara4CodeEx_FuncMapByFldName(
  strFldName: string,
  objFuncPara4CodeEx: clsFuncPara4CodeENEx,
) {
  const strThisFuncName = FuncPara4CodeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFuncPara4CodeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFuncPara4CodeENEx.con_DataTypeName:
      return FuncPara4CodeEx_FuncMapDataTypeName(objFuncPara4CodeEx);
    case clsFuncPara4CodeENEx.con_FuncPurposeName:
      return FuncPara4CodeEx_FuncMapFuncPurposeName(objFuncPara4CodeEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

export async function FuncPara4CodeEx_BindDdl_FuncParaId4CodeInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFuncPurposeId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空！(In clsFuncPara4CodeWApi.BindDdl_FuncParaId4CodeInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确！(clsFuncPara4CodeWApi.BindDdl_FuncParaId4CodeInDiv)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncParaId4CodeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncParaId4CodeInDivCache");
  const strCondition = `${clsFuncPara4CodeEN.con_FuncPurposeId}='${strFuncPurposeId}' and PrjId='${strPrjId}'`;
  let arrObjLstSel = await FuncPara4Code_GetObjLstAsync(strCondition);
  arrObjLstSel = arrObjLstSel.sort(FuncPara4CodeEx_SortByParaName);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFuncPara4CodeEN.con_FuncParaId4Code,
    clsFuncPara4CodeEN.con_ParaName,
    '函数参数4Code',
  );
}
export function FuncPara4CodeEx_SortByParaName(
  a: clsFuncPara4CodeEN,
  b: clsFuncPara4CodeEN,
): number {
  return a.paraName.localeCompare(b.paraName);
}
