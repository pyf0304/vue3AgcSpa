import axios from 'axios';
import { SqlViewEx_GetSqlViewIdByTabIdCache } from '../SqlViewMan/clsSqlViewExWApi';
import {
  SqlViewFldEx_FuncMap4Path,
  SqlViewFldEx_GetObjLstBySqlViewIdCache,
} from '../SqlViewMan/clsSqlViewFldExWApi';
// import { FieldTabEx_CopyToEx, FieldTabEx_FuncMapByFldName } from './clsFieldTabExWApi';
import {
  vFieldTab_SimEx_CopyToEx,
  vFieldTab_SimEx_func,
  vFieldTab_SimEx_FuncMapByFldName,
  vFieldTab_SimEx_GetFldPrecisionByFldIdCacheEx,
} from './clsvFieldTab_SimExWApi';
import { vPrjTab_SimEx_func, vPrjTab_SimEx_GetObjByTabIdCache } from './clsvPrjTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumSQLDSType } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsFieldTabENEx } from '@/ts/L0Entity/Table_Field/clsFieldTabENEx';
import { clsFieldTypeEN, enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { clsPrimaryTypeEN } from '@/ts/L0Entity/Table_Field/clsPrimaryTypeEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { clsPrjTabFldENEx4GC } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx4GC';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { FieldType_func } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { PrimaryType_func } from '@/ts/L3ForWApi/Table_Field/clsPrimaryTypeWApi';
import {
  PrjTabFld_GetObjLstAsync,
  PrjTabFld_GetObjLstByPagerAsync,
  PrjTabFld_GetObjLstCache,
  PrjTabFld_ReFreshCache,
  PrjTabFld_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

// import { clsSysPara4WebApi, GetWebApiUrl } from '@/tz/PubConfig/clsSysPara4WebApi';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubVar } from '@/ts/PubConfig/clsPubVar';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { css_FldDispUnitStyleEx_CreateDiv4FldDispUnit } from '@/ts/L3ForWApiEx/CssManage/clscss_FldDispUnitStyleExWApi';
import { DnPathEx_CreateGraph4DnPathCache } from '@/ts/L3ForWApiEx/AIModule/clsDnPathExWApi';

import { clsPrjTabFld } from '@/ts/L0Entity/Table_Field/clsPrjTabFld';

import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { FieldTab4CodeConv_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsFieldTab4CodeConvWApi';

export const prjTabFldEx_Controller = 'PrjTabFldExApi';
export const prjTabFldEx_ConstructorName = 'prjTabFldEx';

// public objPrjTabFldEN: clsPrjTabFldEN = new clsPrjTabFldEN();

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objPrjTabFldENS">源对象</param>
/// <param name = "objPrjTabFldENT">目标对象</param>
export function PrjTabFldEx_CopyToEx(objPrjTabFldENS: clsPrjTabFldEN): clsPrjTabFldENEx {
  const objPrjTabFldENT = new clsPrjTabFldENEx();
  try {
    ObjectAssign(objPrjTabFldENT, objPrjTabFldENS);
    return objPrjTabFldENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabFldENT;
  }
}
export function PrjTabFldEx_CopyToV2(objPrjTabFldENS: clsPrjTabFld): clsPrjTabFldEN {
  const objPrjTabFldENT = new clsPrjTabFldEN();
  try {
    ObjectAssign(objPrjTabFldENT, objPrjTabFldENS);
    return objPrjTabFldENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabFldENT;
  }
}

export function PrjTabFldEx_CopyToEx4GC(objPrjTabFldENS: clsPrjTabFldEN): clsPrjTabFldENEx4GC {
  const objPrjTabFldENT = new clsPrjTabFldENEx4GC();
  try {
    ObjectAssign(objPrjTabFldENT, objPrjTabFldENS);
    return objPrjTabFldENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabFldENT;
  }
}
/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "lngmId">所给的关键字</param>
/// <param name = "strTabId">strTabId</param>
/// <returns>根据关键字获取的对象</returns>
export async function PrjTabFldEx_GetObjBymIdCacheExB(
  lngmId: number,
  strPrjId: string,
  strTabId: string,
) {
  const strThisFuncName = PrjTabFldEx_GetObjBymIdCacheExB.name;
  let strMsg = '';
  if (lngmId == 0) {
    strMsg = `mId不能为空！(${prjTabFldEx_ConstructorName}.${strThisFuncName})`;
    throw new Error(strMsg);
  }
  //初始化列表缓存
  const arrObjLstCache: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(strTabId);

  const arr_Sel = await arrObjLstCache.filter((x) => x.mId == lngmId);
  if (arr_Sel.length == 0) return null;
  return arr_Sel[0];
}
export async function PrjTabFldEx_GetObjExObjBymIdExB(
  lngmId: number,
  strPrjId: string,
  strTabId: string,
) {
  const prjTabFldStore = usePrjTabFldStore();
  let objPrjTabFldEN = await PrjTabFldEx_GetObjBymIdCacheExB(lngmId, strPrjId, strTabId);

  if (objPrjTabFldEN != null) {
    const objPrjTabFldENEx: clsPrjTabFldENEx4GC = PrjTabFldEx_CopyToEx4GC(objPrjTabFldEN);

    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      objPrjTabFldEN.tabId,
      clsPrivateSessionStorage.cmPrjId,
    );

    if (objPrjTab != null) {
      objPrjTabFldENEx.tabName = objPrjTab.tabName;
    }
    const objFieldTab0 = await vFieldTab_Sim_GetObjByFldIdCache(
      objPrjTabFldENEx.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (objFieldTab0 == null) {
      const strMsg = `fldId:${objPrjTabFldENEx.fldId}所对应的对象不存在！`;
      throw Error(strMsg);
    }
    const objFieldTab1 = vFieldTab_SimEx_CopyToEx(objFieldTab0);
    objPrjTabFldENEx.ObjFieldTabENEx = vFieldTab_SimEx_CopyToEx(objFieldTab1);
    return objPrjTabFldENEx;
  }

  PrjTabFld_ReFreshCache(strTabId);
  prjTabFldStore.delObjLstByTabId(strTabId);
  objPrjTabFldEN = await PrjTabFldEx_GetObjBymIdCacheExB(lngmId, strPrjId, strTabId);
  if (objPrjTabFldEN != null) {
    const objPrjTabFldENEx = PrjTabFldEx_CopyToEx4GC(objPrjTabFldEN);
    const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
      objPrjTabFldEN.tabId,
      clsPrivateSessionStorage.cmPrjId,
    );
    if (objPrjTab != null) {
      objPrjTabFldENEx.tabName = objPrjTab.tabName;
    }
    const conFieldTab0 = await vFieldTab_Sim_GetObjByFldIdCache(
      objPrjTabFldENEx.fldId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    if (conFieldTab0 == null) {
      const strMsg = `fldId:${objPrjTabFldENEx.fldId}所对应的对象不存在！`;
      throw Error(strMsg);
    }
    const conFieldTab = vFieldTab_SimEx_CopyToEx(conFieldTab0);
    objPrjTabFldENEx.ObjFieldTabENEx = vFieldTab_SimEx_CopyToEx(conFieldTab);
    return objPrjTabFldENEx;
  }

  return null;
}

/// <summary>
/// 根据关键字获取相关对象, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strTabId">所给的关键字</param>
/// <param name = "strPrjId">所给的关键字</param>
/// <returns>根据关键字获取的对象</returns>
export async function PrjTabFldEx_GetObjLstByTabIdCache(
  strTabId: string,
): Promise<Array<clsPrjTabFld>> {
  const prjTabFldStore = usePrjTabFldStore();
  //初始化列表缓存
  const arrPrjTabFldObjLst_Sel1: Array<clsPrjTabFld> = await prjTabFldStore.getObjLstByTabId(
    strTabId,
  );

  return arrPrjTabFldObjLst_Sel1;
}

export async function PrjTabFldEx_GetObjLstByTabId(strTabId: string): Promise<Array<clsPrjTabFld>> {
  //初始化列表缓存
  const strWhere = `${clsPrjTabFldEN.con_TabId} = '${strTabId}'`;
  const arrPrjTabFldObjLst_Sel1 = await PrjTabFld_GetObjLstAsync(strWhere);

  return arrPrjTabFldObjLst_Sel1;
}
export async function PrjTabFldEx_GetFldIdLstByTabIdCache(
  strTabId: string,
): Promise<Array<string>> {
  //初始化列表缓存
  const arrPrjTabFldObjLst_Sel1: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(strTabId);
  return arrPrjTabFldObjLst_Sel1.map((x) => x.fldId);
}

export async function PrjTabFldEx_GetRecNumByTabIdCache(strTabId: string): Promise<number> {
  //初始化列表缓存
  const arrPrjTabFldObjLst_Sel1: Array<clsPrjTabFldEN> = await PrjTabFld_GetObjLstCache(strTabId);
  return arrPrjTabFldObjLst_Sel1.length;
}
export async function PrjTabFldEx_GetObjByFldIdCache(
  strTabId: string,
  strFldId: string,
): Promise<clsPrjTabFldEN> {
  if (IsNullOrEmpty(strTabId) == true)
    throw `在从缓存中根据字段Id获取对象时TabId不能为空！(in PrjTabFldEx_GetObjByFldIdCache)`;
  const arrPrjTabFldObjList = await PrjTabFldEx_GetObjLstByTabIdCache(strTabId);

  const objPrjTabFld = arrPrjTabFldObjList.find((x) => x.fldId == strFldId);

  if (objPrjTabFld == null) return new clsPrjTabFldEN();
  else {
    const objPrjTabFldEN = PrjTabFldEx_CopyToV2(objPrjTabFld);
    return objPrjTabFldEN;
  }
}

export async function PrjTabFldEx_IsExistByFldIdCache(
  strTabId: string,
  strFldId: string,
): Promise<boolean> {
  const arrPrjTabFldObjList = await PrjTabFldEx_GetObjLstByTabIdCache(strTabId);

  const objPrjTabFldEN = arrPrjTabFldObjList.find((x) => x.fldId == strFldId);
  if (objPrjTabFldEN == null) return false;
  else return true;
}
export async function PrjTabFldEx_IsExistByFldId(
  strTabId: string,
  strFldId: string,
): Promise<boolean> {
  const arrPrjTabFldObjList = await PrjTabFldEx_GetObjLstByTabId(strTabId);

  const objPrjTabFldEN = arrPrjTabFldObjList.find((x) => x.fldId == strFldId);
  if (objPrjTabFldEN == null) return false;
  else return true;
}
export async function PrjTabFldEx_GetDnPathIdByFldIdCache(
  strTabId: string,
  strFldId: string,
): Promise<string> {
  const arrPrjTabFldObjList = await PrjTabFldEx_GetObjLstByTabIdCache(strTabId);

  const objPrjTabFldEN = arrPrjTabFldObjList.find((x) => x.fldId == strFldId);
  if (objPrjTabFldEN == null) return '';
  else return objPrjTabFldEN.dnPathId;
}

export async function PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache(
  strTabId: string,
  strOutFldId: string,
): Promise<string> {
  const arrPrjTabFldObjList = await PrjTabFldEx_GetObjLstByTabIdCache(strTabId);

  const objPrjTabFldEN = arrPrjTabFldObjList.find(
    (x) => x.fldId == strOutFldId && x.tabId == strTabId,
  );
  if (objPrjTabFldEN == null) return '';
  else return objPrjTabFldEN.dnPathId;
}

/**
 * 从表Id获取关键表字段对象,从缓存中获取
 * @param strTabId:表字段列表
 * @param strPrjId:工程Id
 * @returns 关键字表字段对象列表
 */
export async function PrjTabFldEx_GetPrimaryKeyObjLstByTabIdCache(
  strTabId: string,
): Promise<Array<clsPrjTabFldEN>> {
  const arrObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  const arrObjLst_Sel = arrObjLstCache.filter((x) => x.fieldTypeId == enumFieldType.KeyField_02);
  return arrObjLst_Sel;
}
/**
 * 根据表Id获取关键表字段数目,从缓存中获取
 * @param strTabId:表字段列表
 * @returns 关键字表字段的数目
 */
export async function PrjTabFldEx_GetPrimaryKeyNumByTabIdCache(strTabId: string): Promise<number> {
  const arrObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  const arrObjLst_Sel = arrObjLstCache.filter((x) => x.fieldTypeId == enumFieldType.KeyField_02);
  return arrObjLst_Sel.length;
}
export async function PrjTabFldEx_GetNameObjLstByTabIdCache(
  strTabId: string,
): Promise<Array<clsPrjTabFldEN>> {
  const arrObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  const arrObjLst_Sel = arrObjLstCache.filter((x) => x.fieldTypeId == enumFieldType.NameField_03);
  return arrObjLst_Sel;
}

export async function PrjTabFldEx_GetNameObjByTabIdCache(
  strTabId: string,
): Promise<clsPrjTabFldEN | null> {
  const arrObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  const arrObjLst_Sel = arrObjLstCache.filter((x) => x.fieldTypeId == enumFieldType.NameField_03);
  if (arrObjLst_Sel.length == 0) return null;
  return arrObjLst_Sel[0];
}

export async function PrjTabFldEx_IsHasNameObjByTabIdCache(strTabId: string): Promise<boolean> {
  const arrObjLstCache = await PrjTabFld_GetObjLstCache(strTabId);
  const arrObjLst_Sel = arrObjLstCache.filter((x) => x.fieldTypeId == enumFieldType.NameField_03);
  if (arrObjLst_Sel.length == 0) return false;
  return true;
}

/// <summary>
/// 扩展删除表字段
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strTabId">表Id</param>
/// <param name = "strFldId">字段Id</param>
/// <returns>获取的相应对象列表</returns>
export async function PrjTabFldEx_DelRecordEx(
  strTabId: string,
  strFldId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabFldEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strFldId', strFldId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export function PrjTabFldEx_SortFunBySequenceNumber(a: clsPrjTabFldEN, b: clsPrjTabFldEN): number {
  return a.sequenceNumber - b.sequenceNumber;
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_SourceTabName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_SourceTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.sourceTabName) == true) {
      if (clsPubVar.prjTabFldExSqlDsTypeIdStatic == enumSQLDSType.SqlView_02) {
        const strSqlViewId = await SqlViewEx_GetSqlViewIdByTabIdCache(
          clsPubVar.prjTabFldExTabIdCache,
          clsPubVar.prjTabFldExPrjIdCache,
        );
        if (IsNullOrEmpty(strSqlViewId) == true) return;
        const arrSqlViewFld = await SqlViewFldEx_GetObjLstBySqlViewIdCache(
          strSqlViewId,
          clsPubVar.prjTabFldExPrjIdCache,
        );
        const objSqlViewFld_Sel = arrSqlViewFld.find((x) => x.fldId == objPrjTabFld.fldId);
        if (objSqlViewFld_Sel == null) return;
        //const SqlViewRelaTab_TabId = await SqlViewRelaTab_func(clsSqlViewRelaTabEN.con_RelaTabId, clsSqlViewRelaTabEN.con_TabId,
        //    objSqlViewFld_Sel.relaTabId, clsPrivateSessionStorage.currSelPrjId);

        //const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(clsvPrjTab_SimEN.con_TabId, clsvPrjTab_SimEN.con_TabName, SqlViewRelaTab_TabId, clsPrivateSessionStorage.currSelPrjId);
        //objPrjTabFld.sourceTabName = vPrjTab_Sim_TabName;
        //使用Json对象来传递参数
        const objDnPathPara = {
          inDataNodeName: 'SqlViewFld_RelaTabId',
          outDataNodeName: 'vPrjTab_Sim_TabName',
          inValue: objSqlViewFld_Sel.relaTabId,
          prjId: clsPubVar.prjTabFldExPrjIdCache,
        };

        try {
          const vPrjTab_Sim_TabName = await SqlViewFldEx_FuncMap4Path(objDnPathPara);
          //console.error(vPrjTab_Sim_TabName);
          if (vPrjTab_Sim_TabName != undefined) {
            if (IsNullOrEmpty(vPrjTab_Sim_TabName) == false) {
              objPrjTabFld.sourceTabName = vPrjTab_Sim_TabName;
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:WiTsCs0012)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function PrjTabFldEx_ReFreshCache(strPrjId: string, strTabId: string): void {
  // const strThisFuncName = 'ReFreshCache';
  const strMsg = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}_{2}', clsPrjTabFldEN._CurrTabName, strPrjId, strTabId);
  switch (clsPrjTabFldEN.CacheModeId) {
    case '04': //sessionStorage
      if (IsNullOrEmpty(strTabId) == true) {
        CacheHelper.ClearSessionStorage4Head(strKey);
      } else {
        sessionStorage.removeItem(strKey);
      }
      break;
    case '03': //localStorage
      if (IsNullOrEmpty(strTabId) == true) {
        CacheHelper.ClearLocalStorage4Head(strKey);
      } else {
        localStorage.removeItem(strKey);
      }
      break;
    case '02': //ClientCache
      CacheHelper.Remove(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}

/**
 * 添加新记录
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strFldId: 字段Id
 * @param bolIsTabNullable: 表中是否可空
 * @param strUpdUser: 修改用户
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_AddNewRec(
  strTabId: string,
  strFldId: string,
  bolIsTabNullable: boolean,
  strUpdUser: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabFldEx_AddNewRec.name;
  const strAction = 'AddNewRec';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strFldId', strFldId);
  // mapParam.add('bolIsTabNullable', bolIsTabNullable);
  // mapParam.add('strUpdUser', strUpdUser);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strFldId,
      bolIsTabNullable,
      strUpdUser,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 同步Sql字段信息到代码系统中
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strColumn_Name: 字段列名
 * @param strTypeName: 类型名
 * @param intFldLength: 字段长度
 * @param intFldPrecision: 精度
 * @param strIs_Nullable: 是否可空
 * @param strUpdUser: 修改用户
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_SynchFieldFromColumnObj(
  strTabId: string,
  strColumn_Name: string,
  strTypeName: string,
  intFldLength: number,
  intFldPrecision: number,
  bolIs_Nullable: boolean,
  strUpdUser: string,
): Promise<string> {
  const strThisFuncName = PrjTabFldEx_SynchFieldFromColumnObj.name;
  const strAction = 'SynchFieldFromColumnObj';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strColumn_Name', strColumn_Name);
  // mapParam.add('strTypeName', strTypeName);
  // mapParam.add('intFldLength', intFldLength);
  // mapParam.add('intFldPrecision', intFldPrecision);
  // mapParam.add('bolIs_Nullable', bolIs_Nullable);
  // mapParam.add('strUpdUser', strUpdUser);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strColumn_Name,
      strTypeName,
      intFldLength,
      intFldPrecision,
      bolIs_Nullable,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 根据fldId获取相关的tabId列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFldId: 字段Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_getTabIdLstByFldId(strFldId: string): Promise<Array<string>> {
  const strThisFuncName = PrjTabFldEx_getTabIdLstByFldId.name;
  const strAction = 'getTabIdLstByFldId';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strFldId', strFldId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

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
      const returnStrLst = data.returnStrLst.split(',');
      //console.log("returnStrLst", returnStrLst);
      return returnStrLst;
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 为表字段替换一个新的字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param lngMid: lngMid
 * @param strFldName: 字段名
 * @param strUpdUser: 修改用户
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_ReplaceFldName(
  lngMid: number,
  strFldName: string,
  strUpdUser: string,
): Promise<string> {
  const strThisFuncName = PrjTabFldEx_ReplaceFldName.name;
  const strAction = 'ReplaceFldName';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('lngMid', lngMid);
  // mapParam.add('strFldName', strFldName);
  // mapParam.add('strUpdUser', strUpdUser);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngMid,
      strFldName,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 为字段设置一个新标题
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param lngMid: lngMid
 * @param strCaption: 标题
 * @param strUpdUser: 修改用户
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_SetNewCaption(
  lngMid: number,
  strCaption: string,
  strUpdUser: string,
): Promise<string> {
  const strThisFuncName = PrjTabFldEx_SetNewCaption.name;
  const strAction = 'SetNewCaption';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('lngMid', lngMid);
  // mapParam.add('strCaption', strCaption);
  // mapParam.add('strUpdUser', strUpdUser);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngMid,
      strCaption,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 把记录移到新的位置
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param lngMid: lngMid
 * @param intNewSeqNum: 新的序号
 * @param strTabId: 表Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_MoveRecTo(
  lngMid: number,
  intNewSeqNum: number,
  strTabId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabFldEx_MoveRecTo.name;
  const strAction = 'MoveRecTo';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('lngMid', lngMid);
  // mapParam.add('intNewSeqNum', intNewSeqNum);
  // mapParam.add('strTabId', strTabId);
  // mapParam.add('strOpUserId', strOpUserId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngMid,
      intNewSeqNum,
      strTabId,
      strOpUserId,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 复制一些字段到其他表,并同步到数据库
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param arrMid: 关键字列表
 * @param strTabId: 表Id
 * @param strPrjId: 工程Id
 * @param strPrjDataBaseId: 工程数据库Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_CopyToPrjTab(myData: any): Promise<boolean> {
  const strThisFuncName = 'PrjTabFldEx_CopyToPrjTab';
  const strAction = 'CopyToPrjTab';
  const strUrl = GetWebApiUrl(prjTabFldEx_Controller, strAction);
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
export async function PrjTabFldEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabFldENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPrjTabFldObjLst = await PrjTabFld_GetObjLstByPagerAsync(objPagerPara);
  const arrPrjTabFldExObjLst = arrPrjTabFldObjLst.map(PrjTabFldEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabFldEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPrjTabFldExObjLst) {
      await PrjTabFldEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPrjTabFldExObjLst.length == 0) return arrPrjTabFldExObjLst;
  let arrPrjTabFld_Sel: Array<clsPrjTabFldENEx> = arrPrjTabFldExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabFld_Sel = arrPrjTabFld_Sel.sort(PrjTabFldEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPrjTabFld_Sel = arrPrjTabFld_Sel.sort(objPagerPara.sortFun);
    }

    return arrPrjTabFld_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabFldENEx>();
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
export function PrjTabFldEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabFldENEx.con_FldName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsPrjTabFldENEx.con_Caption:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.caption.localeCompare(b.caption);
        };
      case clsPrjTabFldENEx.con_PrimaryTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.primaryTypeName.localeCompare(b.primaryTypeName);
        };
      case clsPrjTabFldENEx.con_FieldTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsPrjTabFldENEx.con_DataTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsPrjTabFldENEx.con_FldLength:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.fldLength - b.fldLength;
        };
      case clsPrjTabFldENEx.con_TabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsPrjTabFldENEx.con_DataTypeId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsPrjTabFldENEx.con_FldPrecision:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.fldPrecision - b.fldPrecision;
        };
      case clsPrjTabFldENEx.con_ErrMsg:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.errMsg == null || b.errMsg == null) return 0;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsPrjTabFldENEx.con_ErrorLevelId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.errorLevelId - b.errorLevelId;
        };
      case clsPrjTabFldENEx.con_TrClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.trClass.localeCompare(b.trClass);
        };
      case clsPrjTabFldENEx.con_TdClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.tdClass.localeCompare(b.tdClass);
        };
      case clsPrjTabFldENEx.con_TypeNameSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.typeNameSql.localeCompare(b.typeNameSql);
        };
      case clsPrjTabFldENEx.con_LengthSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.lengthSql - b.lengthSql;
        };
      case clsPrjTabFldENEx.con_PrecisionSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.precisionSql - b.precisionSql;
        };
      case clsPrjTabFldENEx.con_IsNullableSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          console.log(b);
          if (a.isNullableSql == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_SourceTabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return a.sourceTabName.localeCompare(b.sourceTabName);
        };
      default:
        return PrjTabFld_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjTabFldENEx.con_FldName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsPrjTabFldENEx.con_Caption:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.caption.localeCompare(a.caption);
        };
      case clsPrjTabFldENEx.con_PrimaryTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.primaryTypeName.localeCompare(a.primaryTypeName);
        };
      case clsPrjTabFldENEx.con_FieldTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsPrjTabFldENEx.con_DataTypeName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsPrjTabFldENEx.con_FldLength:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.fldLength - a.fldLength;
        };
      case clsPrjTabFldENEx.con_TabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsPrjTabFldENEx.con_DataTypeId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsPrjTabFldENEx.con_FldPrecision:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.fldPrecision - a.fldPrecision;
        };
      case clsPrjTabFldENEx.con_ErrMsg:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (a.errMsg == null || b.errMsg == null) return 0;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsPrjTabFldENEx.con_ErrorLevelId:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.errorLevelId - a.errorLevelId;
        };
      case clsPrjTabFldENEx.con_TrClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.trClass.localeCompare(a.trClass);
        };
      case clsPrjTabFldENEx.con_TdClass:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.tdClass.localeCompare(a.tdClass);
        };
      case clsPrjTabFldENEx.con_TypeNameSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.typeNameSql.localeCompare(a.typeNameSql);
        };
      case clsPrjTabFldENEx.con_LengthSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.lengthSql - a.lengthSql;
        };
      case clsPrjTabFldENEx.con_PrecisionSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.precisionSql - a.precisionSql;
        };
      case clsPrjTabFldENEx.con_IsNullableSql:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          if (b.isNullableSql == true) return 1;
          else return -1;
        };
      case clsPrjTabFldENEx.con_SourceTabName:
        return (a: clsPrjTabFldENEx, b: clsPrjTabFldENEx) => {
          return b.sourceTabName.localeCompare(a.sourceTabName);
        };
      default:
        return PrjTabFld_SortFunByKey(strKey, AscOrDesc);
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
export async function PrjTabFldEx_FuncMapByFldName(
  strFldName: string,
  objPrjTabFldEx: clsPrjTabFldENEx,
) {
  const strThisFuncName = PrjTabFldEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPrjTabFldEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjTabFldENEx.con_ConvFldName:
      return PrjTabFldEx_FuncMap_ConvFldName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_TabName:
      return PrjTabFldEx_FuncMap_TabName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_DataTypeId:
      return PrjTabFldEx_FuncMap_DataTypeId(objPrjTabFldEx);

    case clsPrjTabFldENEx.con_SourceTabName:
      return PrjTabFldEx_FuncMap_SourceTabName(objPrjTabFldEx);

    case clsPrjTabFldENEx.con_FldPrecision:
      return PrjTabFldEx_FuncMap_FldPrecision(objPrjTabFldEx);

    case clsPrjTabFldENEx.con_FldName:
      return PrjTabFldEx_FuncMap_FldName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_FldNameEx:
      return PrjTabFldEx_FuncMap_FldNameEx(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_Caption:
      return PrjTabFldEx_FuncMap_Caption(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_PrimaryTypeName:
      return PrjTabFldEx_FuncMap_PrimaryTypeName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_FieldTypeName:
      return PrjTabFldEx_FuncMap_FieldTypeName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_DataTypeName:
      return PrjTabFldEx_FuncMap_DataTypeName(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_FldLength:
      return PrjTabFldEx_FuncMap_FldLength(objPrjTabFldEx);
    case clsPrjTabFldENEx.con_ForeignKeyTabName:
      return PrjTabFldEx_FuncMapForeignKeyTabName(objPrjTabFldEx);
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
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_FldName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_FldName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.fldName) == true) {
      const vFieldTab_Sim_FldId = objPrjTabFld.fldId;
      const vFieldTab_Sim_FldName = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objPrjTabFld.fldName = vFieldTab_Sim_FldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_FldNameEx(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_FldNameEx.name;
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  try {
    if (IsNullOrEmpty(objPrjTabFld.fldNameEx) == true) {
      await PrjTabFldEx_FuncMap_FldName(objPrjTabFld);

      const spnRoot = document.createElement('span');
      spnRoot.className = 'text-info';
      spnRoot.title = '扩展字段信息';
      const spnFldName = document.createElement('span');
      spnFldName.className = 'link-info text-info font-weight-bold';
      spnFldName.title = Format('字段名:{0}', objPrjTabFld.fldName);
      spnFldName.innerHTML = objPrjTabFld.fldName;
      spnRoot.appendChild(spnFldName);
      const vFieldTab_Sim_InFldId = objPrjTabFld.inFldId;

      if (IsNullOrEmpty(vFieldTab_Sim_InFldId) == false) {
        const vFieldTab_Sim_InFldName = await vFieldTab_SimEx_func(
          clsvFieldTab_SimEN.con_FldId,
          clsvFieldTab_SimEN.con_FldName,
          vFieldTab_Sim_InFldId,
          clsPrivateSessionStorage.currSelPrjId,
        );

        const spnInFldName0 = document.createElement('span');
        spnInFldName0.className = 'text-primary  font-weight-bold';
        spnInFldName0.title = 'In字段';
        spnInFldName0.innerHTML = 'In字段:';

        const spnInFldName1 = document.createElement('span');
        spnInFldName1.className = 'text-secondary  font-weight-bold';
        spnInFldName1.title = vFieldTab_Sim_InFldName;
        spnInFldName1.innerHTML = vFieldTab_Sim_InFldName;

        const spnInFldName = GetSpan_Empty('');
        spnInFldName.appendChild(spnInFldName0);
        spnInFldName.appendChild(spnInFldName1);
        const objBr = document.createElement('br');
        spnRoot.appendChild(objBr);
        spnRoot.appendChild(spnInFldName);
      }

      const vFieldTab_Sim_FldId = objPrjTabFld.fldId;
      const vFieldTab_Sim_HomologousFldId = await vFieldTab_Sim2Store.getHomologousFldId(
        vFieldTab_Sim_FldId,
      );

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
      if (objPrjTabFld.isGeneProp == false) {
        const spnisGeneProp = document.createElement('span');
        spnisGeneProp.className = 'text-danger  font-weight-bold';
        spnisGeneProp.title = '此字段不生成相关属性';
        spnisGeneProp.innerHTML = '不生成相关属性!';

        const objBr1 = document.createElement('br');
        spnRoot.appendChild(objBr1);
        spnRoot.appendChild(spnisGeneProp);
      }
      objPrjTabFld.fldNameEx = spnRoot.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000087)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_Caption(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_Caption.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.caption) == true) {
      const vFieldTab_Sim_FldId = objPrjTabFld.fldId;
      const vFieldTab_Sim_Caption = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_Caption,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objPrjTabFld.caption = vFieldTab_Sim_Caption;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000088)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_PrimaryTypeName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_PrimaryTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.primaryTypeName) == true) {
      const PrimaryType_PrimaryTypeId = objPrjTabFld.primaryTypeId;
      const PrimaryType_PrimaryTypeName = await PrimaryType_func(
        clsPrimaryTypeEN.con_PrimaryTypeId,
        clsPrimaryTypeEN.con_PrimaryTypeName,
        PrimaryType_PrimaryTypeId,
      );
      objPrjTabFld.primaryTypeName = PrimaryType_PrimaryTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000089)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_FieldTypeName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_FieldTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.fieldTypeName) == true) {
      const FieldType_FieldTypeId = objPrjTabFld.fieldTypeId;
      const FieldType_FieldTypeName = await FieldType_func(
        clsFieldTypeEN.con_FieldTypeId,
        clsFieldTypeEN.con_FieldTypeName,
        FieldType_FieldTypeId,
      );
      if (FieldType_FieldTypeId == enumFieldType.KeyField_02) {
        const PrimaryType_PrimaryTypeId = objPrjTabFld.primaryTypeId;
        const PrimaryType_PrimaryTypeName = await PrimaryType_func(
          clsPrimaryTypeEN.con_PrimaryTypeId,
          clsPrimaryTypeEN.con_PrimaryTypeName,
          PrimaryType_PrimaryTypeId,
        );
        //objPrjTabFld.primaryTypeName = PrimaryType_PrimaryTypeName;
        objPrjTabFld.fieldTypeName = Format(
          '{0}({1})',
          FieldType_FieldTypeName,
          PrimaryType_PrimaryTypeName,
        );
      } else {
        objPrjTabFld.fieldTypeName = FieldType_FieldTypeName;
      }
      if (objPrjTabFld.isForExtendClass == true) {
        objPrjTabFld.fieldTypeName = Format(
          "{0}(<span class='text-primary' title='该字段只用于显示信息扩展类，在Sql表中不存在.'>扩展类</span>)",
          objPrjTabFld.fieldTypeName,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000090)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_DataTypeName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_DataTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.dataTypeName) == true) {
      const vFieldTab_Sim_FldId = objPrjTabFld.fldId;
      const vFieldTab_Sim_DataTypeId = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_DataTypeId,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const DataTypeAbbr_DataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        vFieldTab_Sim_DataTypeId,
      );
      objPrjTabFld.dataTypeName = DataTypeAbbr_DataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000091)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_TabName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.tabName) == true) {
      const vPrjTab_Sim_TabId = objPrjTabFld.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objPrjTabFld.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_DataTypeId(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_DataTypeId.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.dataTypeId) == true) {
      const vFieldTab_Sim_FldId = objPrjTabFld.fldId;
      const vFieldTab_Sim_DataTypeId = await vFieldTab_SimEx_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_DataTypeId,
        vFieldTab_Sim_FldId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      objPrjTabFld.dataTypeId = vFieldTab_Sim_DataTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000152)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_FldLength(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_FldLength.name;
  const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
  try {
    if (objPrjTabFld.fldLength == 0) {
      const vFieldTab_Sim2_FldId = objPrjTabFld.fldId;
      const vFieldTab_Sim2 = await vFieldTab_Sim2Store.getObj(vFieldTab_Sim2_FldId);
      if (vFieldTab_Sim2 == null) return 0;

      objPrjTabFld.fldLength = vFieldTab_Sim2.fldLength;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000092)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMap_FldPrecision(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_FldPrecision.name;
  try {
    if (objPrjTabFld.fldPrecision == 0) {
      const vFieldTab_Sim2_FldId = objPrjTabFld.fldId;
      const vFieldTab_Sim2_FldPrecision = await vFieldTab_SimEx_GetFldPrecisionByFldIdCacheEx(
        vFieldTab_Sim2_FldId,
      );
      objPrjTabFld.fldPrecision = vFieldTab_Sim2_FldPrecision;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000150)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabFldEx_FuncMap_ConvFldName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMap_ConvFldName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.convFldName) == true) {
      const objFieldTab0 = await vFieldTab_Sim_GetObjByFldIdCache(
        objPrjTabFld.fldId,
        objPrjTabFld.prjId,
      );
      if (objFieldTab0 == null) return;

      const objFieldTabEx = vFieldTab_SimEx_CopyToEx(objFieldTab0);
      await vFieldTab_SimEx_FuncMapByFldName(clsFieldTabENEx.con_ConvFldName, objFieldTabEx);

      objPrjTabFld.convFldName = objFieldTabEx.convFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000084)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 检查表字段，并回溯修改字段表的错误信息
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTabId: 表Id
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_CheckTabFldsUp(
  strTabId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabFldEx_CheckTabFldsUp.name;
  const strAction = 'CheckTabFldsUp';
  const strUrl = PrjTabFldEx_GetWebApiUrl(prjTabFldEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strPrjId,
      strOpUserId,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PrjTabFldEx_GetWebApiUrl(strController: string, strAction: string): string {
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

export async function PrjTabFldEx_GetDnPath(item: clsPrjTabFldENEx) {
  if (item.fieldTypeId == enumFieldType.DisplayUnit_20) {
    if (IsNullOrEmpty(item.fldDispUnitStyleId)) {
      const div1 = document.createElement('div');
      div1.innerHTML = '还未设置显示格式!';
      return div1.innerHTML;
    } else {
      const divFldDispUnitStyle = await css_FldDispUnitStyleEx_CreateDiv4FldDispUnit(
        item.fldDispUnitStyleId,
        '标题',
        '内容',
      );
      item.dnPathDivStr = divFldDispUnitStyle.innerHTML;
      return;
    }
  } else if (IsNullOrEmpty(item.dnPathId) == true) {
    const div2 = document.createElement('div');

    const objEx = new clsPrjTabFldENEx();
    ObjectAssign(objEx, item);

    await PrjTabFldEx_FuncMapByFldName(clsPrjTabFldENEx.con_TabName, objEx);
    div2.innerHTML = objEx.tabName;
    item.dnPathDivStr = div2.innerHTML;
    return;
  } else {
    const divPath = await DnPathEx_CreateGraph4DnPathCache(item.dnPathId);
    // strKey = strText;
    item.dnPathDivStr = divPath.innerHTML;
    return;
  }
}

/**
 * 获取TabId列表的所有对象列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param arrTabId: TabId列表
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_GetObjLstByTabIdLst(
  arrTabId: Array<string>,
): Promise<Array<clsPrjTabFldEN>> {
  const strThisFuncName = PrjTabFldEx_GetObjLstByTabIdLst.name;
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = PrjTabFldEx_GetWebApiUrl(prjTabFldEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      arrTabId,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      //console.log(returnObjLst);
      return returnObjLst;
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
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
 * 刷新某FldId的相关表的修改日期，即使用过该FldId的相关表都刷新一下日期
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFldId: 字段Id
 * @param strUserId: 用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjTabFldEx_RefreshUpdDate4ReleTab(
  strFldId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = PrjTabFldEx_RefreshUpdDate4ReleTab.name;
  const strAction = 'RefreshUpdDate4ReleTab';
  const strUrl = PrjTabFldEx_GetWebApiUrl(prjTabFldEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
      strUserId,
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
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjTabFldEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function PrjTabFldEx_GetInFldId(
  strTabId: string,
  strOutFldId: string,
): Promise<string> {
  //alert('请在扩展层:DataNode_EditEx中重写该函数！');

  try {
    const objPrjTabFld = await PrjTabFldEx_GetObjByFldIdCache(strTabId, strOutFldId);
    if (objPrjTabFld != null) {
      console.log('objPrjTabFld.inFldId:', objPrjTabFld.inFldId);
      return objPrjTabFld.inFldId;
      // refQryRegionFlds_Edit.value.fldId = objPrjTabFld.inFldId; // objDataNode_MinDepth.fldId;
    } else return '';
  } catch (e: any) {
    // const ss = e;
    console.log(e);
    alert(e);
    return '';
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjTabFldS:源对象
 **/
export async function PrjTabFldEx_FuncMapForeignKeyTabName(objPrjTabFld: clsPrjTabFldENEx) {
  const strThisFuncName = PrjTabFldEx_FuncMapForeignKeyTabName.name;
  try {
    if (IsNullOrEmpty(objPrjTabFld.foreignKeyTabName) == true) {
      const vPrjTabSimTabId = objPrjTabFld.foreignKeyTabId;
      if (vPrjTabSimTabId == '0') {
        objPrjTabFld.foreignKeyTabName = '';
      } else {
        const vPrjTabSimTabName = await vPrjTab_SimEx_func(
          clsvPrjTab_SimEN.con_TabId,
          clsvPrjTab_SimEN.con_TabName,
          vPrjTabSimTabId,
        );
        objPrjTabFld.foreignKeyTabName = vPrjTabSimTabName;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001011)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabFldEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjTabFldEx_isNeedAddConvFldName(item: clsPrjTabFldENEx): Promise<boolean> {
  if (item.fieldTypeId === enumFieldType.KeyField_02) {
    const IsHasNameField = await PrjTabFldEx_IsHasNameObjByTabIdCache(item.tabId);
    if (IsHasNameField) {
      try {
        const objFieldTab4Conv = await FieldTab4CodeConv_GetObjByFldIdCache(
          item.fldId,
          clsPrivateSessionStorage.currSelPrjId,
          false,
        );
        if (objFieldTab4Conv == null) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.error('出现异常！pyf');
        console.error(e);

        return false;
      }
    } else {
      return false; // '主键-转换成名称字段';
    }
  } else {
    return false;
  }
}
