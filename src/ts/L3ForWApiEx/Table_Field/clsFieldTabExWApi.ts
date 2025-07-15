import axios from 'axios';
import {
  FieldTab4CodeConvEx_CopyToEx,
  FieldTab4CodeConvEx_FuncMapByFldName,
} from './clsFieldTab4CodeConvExWApi';
import { vFieldTab_SimEx_func } from './clsvFieldTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsFieldTab4CodeConvENEx } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvENEx';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
import { clsFieldTabENEx } from '@/ts/L0Entity/Table_Field/clsFieldTabENEx';
import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTabNumEN } from '@/ts/L0Entity/Table_Field/clsvPrjTabNumEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { FieldTab4CodeConv_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsFieldTab4CodeConvWApi';
import {
  FieldTab_GetObjLstByPagerAsync,
  FieldTab_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import { FieldType_func } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vPrjTabNumEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTabNumExWApi';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';

export const fieldTabEx_Controller = 'FieldTabExApi';
export const fieldTabEx_ConstructorName = 'fieldTabEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFieldTabENS">源对象</param>
/// <param name = "objFieldTabENT">目标对象</param>
export function FieldTabEx_CopyToEx(objFieldTabENS: clsFieldTabEN): clsFieldTabENEx {
  const objFieldTabENT = new clsFieldTabENEx();
  try {
    ObjectAssign(objFieldTabENT, objFieldTabENS);
    return objFieldTabENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFieldTabENT;
  }
}
/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:20210703115014
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FieldTabEx_SortFunByFldName(a: clsFieldTabEN, b: clsFieldTabEN): number {
  return a.fldName.localeCompare(b.fldName);
}
/**
 * 导入字段到表FieldTab中
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFldName: 字段名
 * @param strCaption: 标题
 * @param strTypeName: 类型名
 * @param intFldLength: 字段长度
 * @param intFldPrecision: 精度
 * @param bolIsNull: 是否可空
 * @param strPrjId: 工程Id
 * @param strUpdUser: 修改用户
 * @returns 获取的相应对象列表
 */
export async function FieldTabEx_ImportFldToFieldTab(
  strFldName: string,
  strCaption: string,
  strTypeName: string,
  intFldLength: number,
  intFldPrecision: number,
  bolIsNull: boolean,
  strPrjId: string,
  strUpdUser: string,
): Promise<string> {
  const strThisFuncName = FieldTabEx_ImportFldToFieldTab.name;
  const strAction = 'ImportFldToFieldTab';
  const strUrl = GetWebApiUrl(fieldTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strFldName', strFldName);
  // mapParam.add('strCaption', strCaption);
  // mapParam.add('strTypeName', strTypeName);
  // mapParam.add('intFldLength', intFldLength);
  // mapParam.add('intFldPrecision', intFldPrecision);
  // mapParam.add('bolIsNull', bolIsNull);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strUpdUser', strUpdUser);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strCaption,
      strTypeName,
      intFldLength,
      intFldPrecision,
      bolIsNull,
      strPrjId,
      strUpdUser,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 添加新记录
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFldName: 字段名
 * @param strCaption: 标题
 * @param strDataTypeId: 数据类型Id
 * @param intFldLength: 字段长度
 * @param intFldPrecision: 精度
 * @param bolIsNull: 是否可空
 * @param strPrjId: 工程Id
 * @param strUpdUser: 修改用户
 * @returns 获取的相应对象列表
 */
export async function FieldTabEx_AddNewRec(
  strFldName: string,
  strCaption: string,
  strDataTypeId: string,
  intFldLength: number,
  intFldPrecision: number,
  bolIsNull: boolean,
  strPrjId: string,
  strUpdUser: string,
): Promise<string> {
  const strThisFuncName = FieldTabEx_AddNewRec.name;
  const strAction = 'AddNewRec';
  const strUrl = GetWebApiUrl(fieldTabEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strFldName', strFldName);
  // mapParam.add('strCaption', strCaption);
  // mapParam.add('strDataTypeId', strDataTypeId);
  // mapParam.add('intFldLength', intFldLength);
  // mapParam.add('intFldPrecision', intFldPrecision);
  // mapParam.add('bolIsNull', bolIsNull);
  // mapParam.add('strPrjId', strPrjId);
  // mapParam.add('strUpdUser', strUpdUser);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strCaption,
      strDataTypeId,
      intFldLength,
      intFldPrecision,
      bolIsNull,
      strPrjId,
      strUpdUser,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FieldTabEx_GetObjExLstByPagerAsyncBak(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFieldTabObjLst = await FieldTab_GetObjLstByPagerAsync(objPagerPara);
  const arrFieldTabExObjLst = arrFieldTabObjLst.map(FieldTabEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFieldTabEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFieldTabExObjLst) {
      await FieldTabEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrFieldTabExObjLst.length == 0) return arrFieldTabExObjLst;
  let arrFieldTab_Sel: Array<clsFieldTabENEx> = arrFieldTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFieldTab_Sel = arrFieldTab_Sel.sort(FieldTabEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrFieldTab_Sel = arrFieldTab_Sel.sort(objPagerPara.sortFun);
    }
    return arrFieldTab_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTabENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FieldTabEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFieldTabObjLst = await FieldTab_GetObjLstByPagerAsync(objPagerPara);
  const arrFieldTabExObjLst = arrFieldTabObjLst.map(FieldTabEx_CopyToEx);
  if (arrFieldTabExObjLst.length == 0) return arrFieldTabExObjLst;
  let arrFieldTabSel: Array<clsFieldTabENEx> = arrFieldTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      // const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      // let strSortType = 'asc';
      // const strSortFld = sstrSplit[0];
      // if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      // arrFieldTabSel = arrFieldTabSel.sort(FieldTabEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFieldTabSel = arrFieldTabSel.sort(objPagerPara.sortFun);
    }
    return arrFieldTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTabENEx>();
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
export function FieldTabEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTabENEx.con_FieldTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsFieldTabENEx.con_DataTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsFieldTabENEx.con_TabNum:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return a.tabNum - b.tabNum;
        };
      case clsFieldTabENEx.con_ConvFldName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return a.convFldName.localeCompare(b.convFldName);
        };
      default:
        return FieldTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFieldTabENEx.con_FieldTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsFieldTabENEx.con_DataTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsFieldTabENEx.con_TabNum:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return b.tabNum - a.tabNum;
        };
      case clsFieldTabENEx.con_ConvFldName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return b.convFldName.localeCompare(a.convFldName);
        };
      default:
        return FieldTab_SortFunByKey(strKey, AscOrDesc);
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
export function FieldTabEx_FuncMapByFldName(strFldName: string, objFieldTabEx: clsFieldTabENEx) {
  const strThisFuncName = FieldTabEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsFieldTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFieldTabENEx.con_ConvFldName:
      return FieldTabEx_FuncMap_ConvFldName(objFieldTabEx);

    case clsFieldTabENEx.con_FieldTypeName:
      return FieldTabEx_FuncMap_FieldTypeName(objFieldTabEx);
    case clsFieldTabENEx.con_DataTypeName:
      return FieldTabEx_FuncMap_DataTypeName(objFieldTabEx);
    // case clsFieldTabENEx.con_TabNum:
    //   return FieldTabEx_FuncMap_TabNum(objFieldTabEx);
    case clsFieldTabENEx.con_FldNameEx:
      return FieldTabEx_FuncMap_FldNameEx(objFieldTabEx);
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFieldTabS:源对象
 **/
export async function FieldTabEx_FuncMap_FieldTypeName(objFieldTab: clsFieldTabENEx) {
  const strThisFuncName = FieldTabEx_FuncMap_FieldTypeName.name;
  try {
    if (IsNullOrEmpty(objFieldTab.fieldTypeName) == true) {
      const FieldType_FieldTypeId = objFieldTab.fieldTypeId;
      const FieldType_FieldTypeName = await FieldType_func(
        clsFieldTypeEN.con_FieldTypeId,
        clsFieldTypeEN.con_FieldTypeName,
        FieldType_FieldTypeId,
      );
      objFieldTab.fieldTypeName = FieldType_FieldTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000090)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFieldTabS:源对象
 **/
export async function FieldTabEx_FuncMap_DataTypeName(objFieldTab: clsFieldTabENEx) {
  const strThisFuncName = FieldTabEx_FuncMap_DataTypeName.name;
  try {
    if (IsNullOrEmpty(objFieldTab.dataTypeName) == true) {
      const DataTypeAbbr_DataTypeId = objFieldTab.dataTypeId;
      const DataTypeAbbr_DataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbr_DataTypeId,
      );
      objFieldTab.dataTypeName = DataTypeAbbr_DataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000091)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFieldTabS:源对象
 **/
export async function FieldTabEx_FuncMap_TabNum(objFieldTab: clsFieldTabENEx) {
  const strThisFuncName = FieldTabEx_FuncMap_TabNum.name;
  try {
    if (objFieldTab.tabNum == 0) {
      const FieldTab_FldId = objFieldTab.fldId;
      const vPrjTabNum_TabNum = await vPrjTabNumEx_func(
        clsvPrjTabNumEN.con_FldId,
        clsvPrjTabNumEN.con_TabNum,
        FieldTab_FldId,
        objFieldTab.prjId,
      );
      objFieldTab.tabNum = vPrjTabNum_TabNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000093)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function FieldTabEx_FuncMap_ConvFldName(objFieldTab: clsFieldTabENEx) {
  const strThisFuncName = 'FieldTabEx_FuncMap_ConvFldName';
  if (IsNullOrEmpty(objFieldTab.convFldName) == false) return;
  let objFieldTab4Conv;
  try {
    objFieldTab4Conv = await FieldTab4CodeConv_GetObjByFldIdCache(
      objFieldTab.fldId,
      objFieldTab.prjId,
      false,
    );
  } catch (e) {
    console.error('出现异常！pyf');
    console.error(e);

    return;
  }
  if (objFieldTab4Conv == null) {
    // console.error('用于转换字段的对象为空！(正常情况)');
    return;
  }
  try {
    const objFieldTab4ConvEx = FieldTab4CodeConvEx_CopyToEx(objFieldTab4Conv);
    await FieldTab4CodeConvEx_FuncMapByFldName(
      clsFieldTab4CodeConvENEx.con_CodeTabName,
      objFieldTab4ConvEx,
    );
    await FieldTab4CodeConvEx_FuncMapByFldName(
      clsFieldTab4CodeConvENEx.con_CodeFldName,
      objFieldTab4ConvEx,
    );
    await FieldTab4CodeConvEx_FuncMapByFldName(
      clsFieldTab4CodeConvENEx.con_CodeNameFldName,
      objFieldTab4ConvEx,
    );

    const spnRoot = document.createElement('span');
    spnRoot.className = 'text-info';
    spnRoot.title = '转换字段信息';

    const spnTab0 = document.createElement('span');
    spnTab0.className = 'text-primary  font-weight-bold';
    spnTab0.title = '表名';
    spnTab0.innerHTML = '表名:';

    const spnTab1 = document.createElement('span');
    spnTab1.className = 'text-secondary  font-weight-bold';
    spnTab1.title = objFieldTab4ConvEx.codeTabName;
    spnTab1.innerHTML = objFieldTab4ConvEx.codeTabName;

    const spnTab = document.createElement('span');
    spnTab.appendChild(spnTab0);
    spnTab.appendChild(spnTab1);
    const spnCode0 = document.createElement('span');
    spnCode0.className = 'text-primary';
    spnCode0.title = '代码:';
    spnCode0.innerHTML = '代码:';

    const spnCode1 = document.createElement('span');
    spnCode1.className = 'text-secondary';
    spnCode1.title = objFieldTab4ConvEx.codeFldName;
    spnCode1.innerHTML = objFieldTab4ConvEx.codeFldName;

    const spnCode = document.createElement('span');
    spnCode.appendChild(spnCode0);
    spnCode.appendChild(spnCode1);

    const spnName0 = document.createElement('span');
    spnName0.className = 'text-primary';
    spnName0.title = '文本';
    spnName0.innerHTML = '文本:';

    const spnName1 = document.createElement('span');
    spnName1.className = 'text-secondary';
    spnName1.title = objFieldTab4ConvEx.codeNameFldName;
    spnName1.innerHTML = objFieldTab4ConvEx.codeNameFldName;

    const spnName = document.createElement('span');
    spnName.appendChild(spnName0);
    spnName.appendChild(spnName1);
    const objBr = document.createElement('br');
    const objBr1 = document.createElement('br');

    spnRoot.appendChild(spnTab);
    spnRoot.appendChild(objBr);
    spnRoot.appendChild(spnCode);
    spnRoot.appendChild(objBr1);
    spnRoot.appendChild(spnName);

    objFieldTab.convFldName = spnRoot.outerHTML;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function FieldTabEx_GetSpanByCacheClassifyField(
  strFldId: string,
): Promise<HTMLSpanElement | null> {
  if (IsNullOrEmpty(strFldId) == true) return null;
  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strFldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objFieldTab == null) {
    return null;
  }
  const spnField = GetSpan_Empty('text-primary');
  spnField.innerText = objFieldTab.fldName;
  return spnField;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFieldTabS:源对象
 **/
export async function FieldTabEx_FuncMap_FldNameEx(objFieldTab: clsFieldTabENEx) {
  const strThisFuncName = FieldTabEx_FuncMap_FldNameEx.name;
  try {
    if (IsNullOrEmpty(objFieldTab.fldNameEx) == true) {
      const spnRoot = document.createElement('span');
      spnRoot.className = 'text-info';
      spnRoot.title = '扩展字段信息';
      const spnFldName = document.createElement('span');
      spnFldName.className = 'link-info text-info font-weight-bold';
      spnFldName.title = Format('字段名:{0}', objFieldTab.fldName);
      spnFldName.innerHTML = objFieldTab.fldName;
      spnRoot.appendChild(spnFldName);

      const vFieldTab_Sim_HomologousFldId = objFieldTab.homologousFldId;

      if (IsNullOrEmpty(vFieldTab_Sim_HomologousFldId) == false) {
        const vFieldTab_Sim_HomologousFldName = await vFieldTab_SimEx_func(
          clsvFieldTab_SimEN.con_FldId,
          clsvFieldTab_SimEN.con_FldName,
          vFieldTab_Sim_HomologousFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );

        const spnHomologousFldName0 = document.createElement('span');
        spnHomologousFldName0.className = 'text-primary  font-weight-bold';
        spnHomologousFldName0.title = '同源字段';
        spnHomologousFldName0.innerHTML = '同源:';

        const spnHomologousFldName1 = document.createElement('span');
        spnHomologousFldName1.className = 'text-secondary  font-weight-bold';
        spnHomologousFldName1.title = vFieldTab_Sim_HomologousFldName;
        spnHomologousFldName1.innerHTML = vFieldTab_Sim_HomologousFldName;

        const spnHomologousFldName = GetSpan_Empty('');
        spnHomologousFldName.appendChild(spnHomologousFldName0);
        spnHomologousFldName.appendChild(spnHomologousFldName1);
        const objBr1 = document.createElement('br');
        spnRoot.appendChild(objBr1);
        spnRoot.appendChild(spnHomologousFldName);
      }

      objFieldTab.fldNameEx = spnRoot.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 复制一些字段到其他表,并同步到数据库
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param arrMid: 关键字列表
 * @param strTabId: 表Id
 * @param strPrjId: 工程Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function FieldTabEx_CopyToPrjTab(myData: any): Promise<boolean> {
  const strThisFuncName = 'FieldTabEx_CopyToPrjTab';
  const strAction = 'CopyToPrjTab';
  const strUrl = GetWebApiUrl(fieldTabEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, myData, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 为字段Id修改表数
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFldId: 字段Id
 * @returns 获取的相应对象列表
 */
export async function FieldTabEx_UpdateTabNumForFldId(strFldId: string): Promise<boolean> {
  const strThisFuncName = FieldTabEx_UpdateTabNumForFldId.name;
  const strAction = 'UpdateTabNumForFldId';
  const strUrl = GetWebApiUrl(fieldTabEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        fieldTabEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
