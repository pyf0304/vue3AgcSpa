import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvTabFeatureFlds_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeatureFlds_SimEN';
import { FieldType_GetObjByFieldTypeIdCache } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import {
  TabFeatureFlds_AddNewRecordAsync,
  TabFeatureFlds_CheckPropertyNew,
  TabFeatureFlds_GetObjBymIdAsync,
  TabFeatureFlds_GetObjLstAsync,
  TabFeatureFlds_GetObjLstByPagerAsync,
  TabFeatureFlds_GetUniCondStr,
  TabFeatureFlds_IsExistRecordAsync,
  TabFeatureFlds_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsTabFeatureFldsWApi';
import {
  BindDdl_ObjLstInDivObj_V,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vFieldTab_Sim_GetObjByFldIdCache,
  vFieldTab_Sim_GetObjLstAsync,
} from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { vTabFeatureFlds_Sim_GetObjLstCache } from '@/ts/L3ForWApi/Table_Field/clsvTabFeatureFlds_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const tabFeatureFldsEx_Controller = 'TabFeatureFldsExApi';
export const tabFeatureFldsEx_ConstructorName = 'tabFeatureFldsEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objTabFeatureFldsENS">源对象</param>
/// <param name = "objTabFeatureFldsENT">目标对象</param>
export function TabFeatureFldsEx_CopyToEx(
  objTabFeatureFldsENS: clsTabFeatureFldsEN,
): clsTabFeatureFldsENEx {
  const objTabFeatureFldsENT = new clsTabFeatureFldsENEx();
  try {
    ObjectAssign(objTabFeatureFldsENT, objTabFeatureFldsENS);
    return objTabFeatureFldsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objTabFeatureFldsENT;
  }
}

/**
 * 根据Out结点获取所有的关系
 * @param strTabFeatureId Out结点Id
 */
export async function TabFeatureFldsEx_GetObjLstByTabFeatureId(
  strTabFeatureId: string,
): Promise<Array<clsTabFeatureFldsEN>> {
  const strCondition = Format("{0}='{1}'", clsTabFeatureFldsEN.con_TabFeatureId, strTabFeatureId);
  const arrTabFeatureFlds = await TabFeatureFlds_GetObjLstAsync(strCondition);

  return arrTabFeatureFlds;
}
///**
//* 根据Out结点获取所有的关系
//* @param strTabFeatureId Out结点Id
//*/
//export async function TabFeatureFldsEx_GetObjLstByTabFeatureIdCache(strTabFeatureId: string, strPrjId: string): Promise<Array<clsTabFeatureFldsEN>> {
//    let arrTabFeatureFlds = await TabFeatureFlds_GetObjLstCache(strPrjId);
//    arrTabFeatureFlds = arrTabFeatureFlds.filter(x => x.tabFeatureId == strTabFeatureId);
//    return arrTabFeatureFlds;
//}
export async function TabFeatureFldsEx_GetSpan4FieldWithTabName(
  strFldId: string,
  strFieldTypeId: string,
  strPrjId: string,
  bolIsEx: boolean,
  intIndex = 0,
): Promise<HTMLSpanElement> {
  const objFieldTab = await vFieldTab_Sim_GetObjByFldIdCache(
    strFldId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  const objFieldType = await FieldType_GetObjByFieldTypeIdCache(strFieldTypeId);
  if (objFieldType == null || IsNullOrEmpty(objFieldType.fieldTypeName) == true) {
    throw '字段类型名不能为空！(in TabFeatureFldsEx_GetSpan4FieldWithTabName())';
  }
  const objSpan: HTMLSpanElement = document.createElement('span');
  objSpan.setAttribute('class', 'text-primary');
  let strFldName = '';
  if (objFieldTab == null || IsNullOrEmpty(objFieldTab.fldName) == true) {
    const strMsg = Format('字段Id：[{0}]在字段表中不存在。', strFldId);
    console.error(strMsg);
    strFldName = strMsg;
    objSpan.setAttribute('errMsg', strMsg);
  } else {
    strFldName = objFieldTab.fldName;
  }

  //objSpan.style.display = "inline-block";
  //objSpan.style.width = Format("150px");

  const objSpan_TabName: HTMLSpanElement = document.createElement('span');
  objSpan_TabName.setAttribute('class', 'text-primary');
  if (intIndex > 0) {
    objSpan_TabName.innerHTML = Format('{0}.{1}:', intIndex, objFieldType.fieldTypeName);
  } else {
    objSpan_TabName.innerHTML = Format('{0}:', objFieldType.fieldTypeName);
  }
  // const objBr: HTMLBRElement = document.createElement('br');
  const strIsEx = bolIsEx == true ? '(扩展)' : '';
  const objSpan_FldName: HTMLSpanElement = document.createElement('span');
  if (objFieldTab == null)
    objSpan_FldName.setAttribute('class', 'text-danger font-weight-bold ml-1');
  else objSpan_FldName.setAttribute('class', 'text-info font-weight-bold ml-1');
  objSpan_FldName.innerHTML = Format('{0}{1}', strFldName, strIsEx);

  objSpan.appendChild(objSpan_TabName);
  //objSpan.appendChild(objBr);
  objSpan.appendChild(objSpan_FldName);
  return objSpan;
}

/**
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objTabFeatureFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 */
export async function TabFeatureFldsEx_EditRecordEx(
  objTabFeatureFldsEN: clsTabFeatureFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'TabFeatureFldsEx_EditRecordEx';
  let strMsg = '';
  const strAction = 'EditRecordEx';
  if (
    objTabFeatureFldsEN.sfUpdFldSetStr === undefined ||
    objTabFeatureFldsEN.sfUpdFldSetStr === null ||
    objTabFeatureFldsEN.sfUpdFldSetStr === ''
  ) {
    strMsg = `对象(关键字: ${objTabFeatureFldsEN.mId})的【修改字段集】为空，不能修改!`;
    throw strMsg;
  }

  const strUrl = GetWebApiUrl(tabFeatureFldsEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureFldsEN, config);
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
        tabFeatureFldsEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabFeatureFldsEx_ConstructorName,
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:20210703115125
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeatureFldsEx_SortFun_OrderNumEx(
  a: clsTabFeatureFldsENEx,
  b: clsTabFeatureFldsENEx,
): number {
  return a.orderNum - b.orderNum;
}
export function TabFeatureFldsEx_SortFun_OrderNum(
  a: clsTabFeatureFldsEN,
  b: clsTabFeatureFldsEN,
): number {
  return a.orderNum - b.orderNum;
}
export async function TabFeatureFldsEx_CopyNodeToNewVersion(
  lngMid: number,
  strTabFeatureId: string,
): Promise<boolean> {
  const objTabFeatureFlds = await TabFeatureFlds_GetObjBymIdAsync(lngMid);
  if (objTabFeatureFlds == null) {
    const strMsg = Format('关键字:[{0}]的表功能字段不存在！', lngMid);
    throw new Error(strMsg);
  }

  objTabFeatureFlds.tabFeatureId = strTabFeatureId;
  objTabFeatureFlds.updDate = clsDateTime.getTodayDateTimeStr(1); // 修改日期
  objTabFeatureFlds.updUser = clsPubLocalStorage.userId; // 修改者
  const strCondition = TabFeatureFlds_GetUniCondStr(objTabFeatureFlds);
  const bolIsExist = await TabFeatureFlds_IsExistRecordAsync(strCondition);
  if (bolIsExist == true) {
    const strMsg = Format('条件:[{0}]的新表功能字段已经存在！', strCondition);
    throw new Error(strMsg);
  }
  try {
    TabFeatureFlds_CheckPropertyNew(objTabFeatureFlds);
  } catch (e: any) {
    const strMsg = `检查数据不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
  try {
    const returnBool = await TabFeatureFlds_AddNewRecordAsync(objTabFeatureFlds);

    if (returnBool == true) {
      //TabFeatureFlds_ReFreshThisCache(strPrjId);
      // const strInfo = `复制记录成功!`;
      //显示信息框
      //alert(strInfo);
    } else {
      const strInfo = `复制记录不成功!`;
      //显示信息框
      alert(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    const strMsg = `复制记录不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
    return false; //一定要有一个返回值，否则会出错！
  }
}
/**
 * 绑定基于Web的下拉框
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function TabFeatureFldsEx_BindDdl_FldIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strFieldTypeId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In TabFeatureFldsEx_BindDdl_FldIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId == '9991') {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为[999991]！(In TabFeatureFldsEx_BindDdl_FldIdInDivCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In TabFeatureFldsEx_BindDdl_FldIdInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }

  const strWhere = `substring(${clsvFieldTab_SimEN.con_FldId},1,4) = '${strPrjId}'`;
  let arrObjLst_Sel: Array<clsvFieldTab_SimEN> = await vFieldTab_Sim_GetObjLstAsync(strWhere);
  // const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  const arrTabFeatureFldsObjLst_Sel: Array<clsvTabFeatureFlds_SimEN> =
    await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  const arrFldId_Sel: Array<string> = arrTabFeatureFldsObjLst_Sel
    .filter((x) => x.fieldTypeId == strFieldTypeId)
    .map((x) => x.fldId);
  arrObjLst_Sel = arrObjLst_Sel
    .filter((x) => arrFldId_Sel.indexOf(x.fldId) > -1)
    .sort((x, y) => x.fldName.localeCompare(y.fldName));
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvFieldTab_SimEN.con_FldId,
    clsvFieldTab_SimEN.con_FldName,
    '字段',
  );
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
export function TabFeatureFldsEx_FuncMapByFldName(
  strFldName: string,
  objTabFeatureFldsEx: clsTabFeatureFldsENEx,
) {
  const strThisFuncName = TabFeatureFldsEx_FuncMapByFldName.name;
  console.log(objTabFeatureFldsEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsTabFeatureFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function TabFeatureFldsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabFeatureFldsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrTabFeatureFldsObjLst = await TabFeatureFlds_GetObjLstByPagerAsync(objPagerPara);
  const arrTabFeatureFldsExObjLst = arrTabFeatureFldsObjLst.map(TabFeatureFldsEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsTabFeatureFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrTabFeatureFldsExObjLst) {
      await TabFeatureFldsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrTabFeatureFldsExObjLst.length == 0) return arrTabFeatureFldsExObjLst;
  let arrTabFeatureFldsSel: Array<clsTabFeatureFldsENEx> = arrTabFeatureFldsExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTabFeatureFldsSel = arrTabFeatureFldsSel.sort(
        TabFeatureFldsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTabFeatureFldsSel = arrTabFeatureFldsSel.sort(objPagerPara.sortFun);
    }

    return arrTabFeatureFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tabFeatureFldsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFeatureFldsENEx>();
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
export function TabFeatureFldsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFeatureFldsENEx.con_IsForExtendClass:
        return (a: clsTabFeatureFldsENEx) => {
          if (a.isForExtendClass == true) return 1;
          else return -1;
        };
      default:
        return TabFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsTabFeatureFldsENEx.con_IsForExtendClass:
        return (b: clsTabFeatureFldsENEx) => {
          if (b.isForExtendClass == true) return 1;
          else return -1;
        };
      default:
        return TabFeatureFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}
