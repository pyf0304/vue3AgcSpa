/**
 * 类名:clsGC_CodeTypeRelationWApi
 * 表名:GC_CodeTypeRelation(00050646)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 05:48:23
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GC_代码类型关系(GC_CodeTypeRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年06月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsGC_CodeTypeRelationENEx } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationENEx';
import {
  clsGC_CodeTypeRelationEN,
  GC_CodeTypeRelationKey,
} from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { CTRelationType_func } from '@/ts/L3ForWApi/GeneCode/clsCTRelationTypeWApi';
import { clsCTRelationTypeEN } from '@/ts/L0Entity/GeneCode/clsCTRelationTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const gC_CodeTypeRelation_Controller = 'GC_CodeTypeRelationApi';
export const gC_CodeTypeRelation_ConstructorName = 'gC_CodeTypeRelation';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param key:包含关键字的对象
 * @returns 对象
 **/
export async function GC_CodeTypeRelation_GetObjByKeyAsync(
  key: GC_CodeTypeRelationKey,
): Promise<clsGC_CodeTypeRelationEN | null> {
  const strThisFuncName = 'GetObjByKeyAsync';
  if (key.relationId === undefined || key.relationId === null || key.relationId === 0) {
    const strMsg = Format(
      '关键字段[RelationId]不能为空!(in {0}.{1})',
      gC_CodeTypeRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAction = 'GetObjByRelationId';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngRelationId: key.relationId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objGC_CodeTypeRelation = GC_CodeTypeRelation_GetObjFromJsonObj(returnObj);
      return objGC_CodeTypeRelation;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用localStorage,不需要生成[GetObjByKeylocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage )
//该表没有使用Cache,不需要生成[GetObjByKeyCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GC_CodeTypeRelation_SortFunDefa(
  a: clsGC_CodeTypeRelationEN,
  b: clsGC_CodeTypeRelationEN,
): number {
  return a.relationId - b.relationId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GC_CodeTypeRelation_SortFunDefa2Fld(
  a: clsGC_CodeTypeRelationEN,
  b: clsGC_CodeTypeRelationEN,
): number {
  if (a.parentCodeTypeId == b.parentCodeTypeId)
    return a.childCodeTypeId.localeCompare(b.childCodeTypeId);
  else return a.parentCodeTypeId.localeCompare(b.parentCodeTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GC_CodeTypeRelation_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGC_CodeTypeRelationEN.con_RelationId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          return a.relationId - b.relationId;
        };
      case clsGC_CodeTypeRelationEN.con_ParentCodeTypeId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (a.parentCodeTypeId == null) return -1;
          if (b.parentCodeTypeId == null) return 1;
          return a.parentCodeTypeId.localeCompare(b.parentCodeTypeId);
        };
      case clsGC_CodeTypeRelationEN.con_ChildCodeTypeId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (a.childCodeTypeId == null) return -1;
          if (b.childCodeTypeId == null) return 1;
          return a.childCodeTypeId.localeCompare(b.childCodeTypeId);
        };
      case clsGC_CodeTypeRelationEN.con_CtRelationTypeId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (a.ctRelationTypeId == null) return -1;
          if (b.ctRelationTypeId == null) return 1;
          return a.ctRelationTypeId.localeCompare(b.ctRelationTypeId);
        };
      case clsGC_CodeTypeRelationEN.con_Description:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (a.description == null) return -1;
          if (b.description == null) return 1;
          return a.description.localeCompare(b.description);
        };
      case clsGC_CodeTypeRelationEN.con_UpdDate:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGC_CodeTypeRelationEN.con_UpdUser:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GC_CodeTypeRelation]中不存在!(in ${gC_CodeTypeRelation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGC_CodeTypeRelationEN.con_RelationId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          return b.relationId - a.relationId;
        };
      case clsGC_CodeTypeRelationEN.con_ParentCodeTypeId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (b.parentCodeTypeId == null) return -1;
          if (a.parentCodeTypeId == null) return 1;
          return b.parentCodeTypeId.localeCompare(a.parentCodeTypeId);
        };
      case clsGC_CodeTypeRelationEN.con_ChildCodeTypeId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (b.childCodeTypeId == null) return -1;
          if (a.childCodeTypeId == null) return 1;
          return b.childCodeTypeId.localeCompare(a.childCodeTypeId);
        };
      case clsGC_CodeTypeRelationEN.con_CtRelationTypeId:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (b.ctRelationTypeId == null) return -1;
          if (a.ctRelationTypeId == null) return 1;
          return b.ctRelationTypeId.localeCompare(a.ctRelationTypeId);
        };
      case clsGC_CodeTypeRelationEN.con_Description:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (b.description == null) return -1;
          if (a.description == null) return 1;
          return b.description.localeCompare(a.description);
        };
      case clsGC_CodeTypeRelationEN.con_UpdDate:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGC_CodeTypeRelationEN.con_UpdUser:
        return (a: clsGC_CodeTypeRelationEN, b: clsGC_CodeTypeRelationEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GC_CodeTypeRelation]中不存在!(in ${gC_CodeTypeRelation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByKeyCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GC_CodeTypeRelation_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGC_CodeTypeRelationEN.con_RelationId:
      return (obj: clsGC_CodeTypeRelationEN) => {
        return obj.relationId === value;
      };
    case clsGC_CodeTypeRelationEN.con_ParentCodeTypeId:
      return (obj: clsGC_CodeTypeRelationEN) => {
        return obj.parentCodeTypeId === value;
      };
    case clsGC_CodeTypeRelationEN.con_ChildCodeTypeId:
      return (obj: clsGC_CodeTypeRelationEN) => {
        return obj.childCodeTypeId === value;
      };
    case clsGC_CodeTypeRelationEN.con_CtRelationTypeId:
      return (obj: clsGC_CodeTypeRelationEN) => {
        return obj.ctRelationTypeId === value;
      };
    case clsGC_CodeTypeRelationEN.con_Description:
      return (obj: clsGC_CodeTypeRelationEN) => {
        return obj.description === value;
      };
    case clsGC_CodeTypeRelationEN.con_UpdDate:
      return (obj: clsGC_CodeTypeRelationEN) => {
        return obj.updDate === value;
      };
    case clsGC_CodeTypeRelationEN.con_UpdUser:
      return (obj: clsGC_CodeTypeRelationEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GC_CodeTypeRelation]中不存在!(in ${gC_CodeTypeRelation_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[GC_CodeTypeRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GC_CodeTypeRelation_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GC_CodeTypeRelation_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function GC_CodeTypeRelation_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function GC_CodeTypeRelation_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGC_CodeTypeRelationEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objGC_CodeTypeRelation = GC_CodeTypeRelation_GetObjFromJsonObj(returnObj);
      return objGC_CodeTypeRelation;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GC_CodeTypeRelation_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGC_CodeTypeRelationEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gC_CodeTypeRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GC_CodeTypeRelation_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRelationId:关键字列表
 * @returns 对象列表
 **/
export async function GC_CodeTypeRelation_GetObjLstByRelationIdLstAsync(
  arrRelationId: Array<string>,
): Promise<Array<clsGC_CodeTypeRelationEN>> {
  const strThisFuncName = 'GetObjLstByRelationIdLstAsync';
  const strAction = 'GetObjLstByRelationIdLst';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRelationId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gC_CodeTypeRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GC_CodeTypeRelation_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByRelationIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function GC_CodeTypeRelation_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGC_CodeTypeRelationEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gC_CodeTypeRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GC_CodeTypeRelation_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GC_CodeTypeRelation_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGC_CodeTypeRelationEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gC_CodeTypeRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GC_CodeTypeRelation_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GC_CodeTypeRelation_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGC_CodeTypeRelationEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGC_CodeTypeRelationEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gC_CodeTypeRelation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GC_CodeTypeRelation_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param key:关键字对象
 * @returns 获取删除的结果
 **/
export async function GC_CodeTypeRelation_DelRecordAsync(
  key: GC_CodeTypeRelationKey,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, key.relationId);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrRelationId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GC_CodeTypeRelation_DelKeysAsync(
  arrRelationId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelKeysAsync';
  const strAction = 'DelKeys';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRelationId, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objGC_CodeTypeRelationENS:源对象
 * @returns 目标对象=>clsGC_CodeTypeRelationEN:objGC_CodeTypeRelationENT
 **/
export function GC_CodeTypeRelation_CopyToEx(
  objGC_CodeTypeRelationENS: clsGC_CodeTypeRelationEN,
): clsGC_CodeTypeRelationENEx {
  const strThisFuncName = GC_CodeTypeRelation_CopyToEx.name;
  const objGC_CodeTypeRelationENT = new clsGC_CodeTypeRelationENEx();
  try {
    ObjectAssign(objGC_CodeTypeRelationENT, objGC_CodeTypeRelationENS);
    return objGC_CodeTypeRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGC_CodeTypeRelationENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GC_CodeTypeRelation_FuncMapByFldName(
  strFldName: string,
  objGC_CodeTypeRelationEx: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelation_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGC_CodeTypeRelationEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName:
      return GC_CodeTypeRelation_FuncMapChildCodeTypeName(objGC_CodeTypeRelationEx);
    case clsGC_CodeTypeRelationENEx.con_ArrowType:
      return GC_CodeTypeRelation_FuncMapArrowType(objGC_CodeTypeRelationEx);
    case clsGC_CodeTypeRelationENEx.con_RelationTypeName:
      return GC_CodeTypeRelation_FuncMapRelationTypeName(objGC_CodeTypeRelationEx);
    case clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName:
      return GC_CodeTypeRelation_FuncMapParentCodeTypeName(objGC_CodeTypeRelationEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GC_CodeTypeRelation_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return a.childCodeTypeName.localeCompare(b.childCodeTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ArrowType:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.arrowType === null && b.arrowType === null) return 0;
          if (a.arrowType === null) return -1;
          if (b.arrowType === null) return 1;
          return a.arrowType.localeCompare(b.arrowType);
        };
      case clsGC_CodeTypeRelationENEx.con_RelationTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.relationTypeName === null && b.relationTypeName === null) return 0;
          if (a.relationTypeName === null) return -1;
          if (b.relationTypeName === null) return 1;
          return a.relationTypeName.localeCompare(b.relationTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return a.parentCodeTypeName.localeCompare(b.parentCodeTypeName);
        };
      default:
        return GC_CodeTypeRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return b.childCodeTypeName.localeCompare(a.childCodeTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ArrowType:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.arrowType === null && b.arrowType === null) return 0;
          if (a.arrowType === null) return 1;
          if (b.arrowType === null) return -1;
          return b.arrowType.localeCompare(a.arrowType);
        };
      case clsGC_CodeTypeRelationENEx.con_RelationTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.relationTypeName === null && b.relationTypeName === null) return 0;
          if (a.relationTypeName === null) return 1;
          if (b.relationTypeName === null) return -1;
          return b.relationTypeName.localeCompare(a.relationTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return b.parentCodeTypeName.localeCompare(a.parentCodeTypeName);
        };
      default:
        return GC_CodeTypeRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelation_FuncMapChildCodeTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelation_FuncMapChildCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.childCodeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objGC_CodeTypeRelation.childCodeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objGC_CodeTypeRelation.childCodeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001537)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelation_FuncMapArrowType(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelation_FuncMapArrowType.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.arrowType) == true) {
      const CTRelationTypeCTRelationTypeId = objGC_CodeTypeRelation.ctRelationTypeId;
      const CTRelationTypeArrowType = await CTRelationType_func(
        clsCTRelationTypeEN.con_CtRelationTypeId,
        clsCTRelationTypeEN.con_ArrowType,
        CTRelationTypeCTRelationTypeId,
      );
      objGC_CodeTypeRelation.arrowType = CTRelationTypeArrowType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001538)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelation_FuncMapRelationTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelation_FuncMapRelationTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.relationTypeName) == true) {
      const CTRelationTypeCTRelationTypeId = objGC_CodeTypeRelation.ctRelationTypeId;
      const CTRelationTypeRelationTypeName = await CTRelationType_func(
        clsCTRelationTypeEN.con_CtRelationTypeId,
        clsCTRelationTypeEN.con_RelationTypeName,
        CTRelationTypeCTRelationTypeId,
      );
      objGC_CodeTypeRelation.relationTypeName = CTRelationTypeRelationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001539)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelation_FuncMapParentCodeTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelation_FuncMapParentCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.parentCodeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objGC_CodeTypeRelation.parentCodeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objGC_CodeTypeRelation.parentCodeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function GC_CodeTypeRelation_DelGC_CodeTypeRelationsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGC_CodeTypeRelationsByCondAsync';
  const strAction = 'DelGC_CodeTypeRelationsByCond';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objGC_CodeTypeRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GC_CodeTypeRelation_AddNewRecordAsync(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objGC_CodeTypeRelationEN);
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGC_CodeTypeRelationEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function GC_CodeTypeRelation_AddNewObjSave(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GC_CodeTypeRelation_CheckPropertyNew(objGC_CodeTypeRelationEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gC_CodeTypeRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GC_CodeTypeRelation_CheckUniCond4Add(objGC_CodeTypeRelationEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await GC_CodeTypeRelation_AddNewRecordAsync(objGC_CodeTypeRelationEN);
    if (returnBool == true) {
      //GC_CodeTypeRelation_ReFreshCache();
    } else {
      const strInfo = `添加[GC_代码类型关系(GC_CodeTypeRelation)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objGC_CodeTypeRelationEN.relationId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gC_CodeTypeRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function GC_CodeTypeRelation_CheckUniCond4Add(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<boolean> {
  const strUniquenessCondition = GC_CodeTypeRelation_GetUniCondStr(objGC_CodeTypeRelationEN);
  const bolIsExistCondition = await GC_CodeTypeRelation_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function GC_CodeTypeRelation_CheckUniCond4Update(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<boolean> {
  const strUniquenessCondition = GC_CodeTypeRelation_GetUniCondStr4Update(objGC_CodeTypeRelationEN);
  const bolIsExistCondition = await GC_CodeTypeRelation_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function GC_CodeTypeRelation_UpdateObjSave(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGC_CodeTypeRelationEN.sfUpdFldSetStr = objGC_CodeTypeRelationEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objGC_CodeTypeRelationEN.relationId == 0 ||
    objGC_CodeTypeRelationEN.relationId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GC_CodeTypeRelation_CheckProperty4Update(objGC_CodeTypeRelationEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gC_CodeTypeRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GC_CodeTypeRelation_CheckUniCond4Update(objGC_CodeTypeRelationEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await GC_CodeTypeRelation_UpdateRecordAsync(objGC_CodeTypeRelationEN);
    if (returnBool == true) {
      //GC_CodeTypeRelation_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gC_CodeTypeRelation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGC_CodeTypeRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GC_CodeTypeRelation_AddNewRecordWithReturnKeyAsync(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGC_CodeTypeRelationEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objGC_CodeTypeRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GC_CodeTypeRelation_UpdateRecordAsync(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === undefined ||
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === null ||
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGC_CodeTypeRelationEN.relationId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGC_CodeTypeRelationEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objGC_CodeTypeRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GC_CodeTypeRelation_EditRecordExAsync(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === undefined ||
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === null ||
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGC_CodeTypeRelationEN.relationId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGC_CodeTypeRelationEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objGC_CodeTypeRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GC_CodeTypeRelation_UpdateWithConditionAsync(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === undefined ||
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === null ||
    objGC_CodeTypeRelationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGC_CodeTypeRelationEN.relationId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);
  objGC_CodeTypeRelationEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGC_CodeTypeRelationEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function GC_CodeTypeRelation_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param key:包含关键字的对象
 * @returns 是否存在?存在返回True
 **/
export async function GC_CodeTypeRelation_IsExistAsync(
  key: GC_CodeTypeRelationKey,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngRelationId: key.relationId,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function GC_CodeTypeRelation_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function GC_CodeTypeRelation_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gC_CodeTypeRelation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gC_CodeTypeRelation_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function GC_CodeTypeRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GC_CodeTypeRelation_CheckPropertyNew(
  pobjGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.parentCodeTypeId) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.parentCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[父代码类型Id(parentCodeTypeId)]的长度不能超过4(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.parentCodeTypeId}(clsGC_CodeTypeRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.childCodeTypeId) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.childCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[子代码类型Id(childCodeTypeId)]的长度不能超过4(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.childCodeTypeId}(clsGC_CodeTypeRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.ctRelationTypeId) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.ctRelationTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Ct关系类型Id(ctRelationTypeId)]的长度不能超过2(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.ctRelationTypeId}(clsGC_CodeTypeRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.description) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.description) > 300
  ) {
    throw new Error(
      `(errid:Watl000413)字段[描述(description)]的长度不能超过300(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.description}(clsGC_CodeTypeRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updDate) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.updDate}(clsGC_CodeTypeRelationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updUser) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.updUser}(clsGC_CodeTypeRelationBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjGC_CodeTypeRelationEN.relationId &&
    undefined !== pobjGC_CodeTypeRelationEN.relationId &&
    tzDataType.isNumber(pobjGC_CodeTypeRelationEN.relationId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关系Id(relationId)]的值:[${pobjGC_CodeTypeRelationEN.relationId}], 非法,应该为数值型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.parentCodeTypeId) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.parentCodeTypeId &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.parentCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[父代码类型Id(parentCodeTypeId)]的值:[${pobjGC_CodeTypeRelationEN.parentCodeTypeId}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.childCodeTypeId) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.childCodeTypeId &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.childCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[子代码类型Id(childCodeTypeId)]的值:[${pobjGC_CodeTypeRelationEN.childCodeTypeId}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.ctRelationTypeId) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.ctRelationTypeId &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.ctRelationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Ct关系类型Id(ctRelationTypeId)]的值:[${pobjGC_CodeTypeRelationEN.ctRelationTypeId}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.description) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.description &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.description) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[描述(description)]的值:[${pobjGC_CodeTypeRelationEN.description}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updDate) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.updDate &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGC_CodeTypeRelationEN.updDate}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updUser) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.updUser &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGC_CodeTypeRelationEN.updUser}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GC_CodeTypeRelation_CheckProperty4Update(
  pobjGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.parentCodeTypeId) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.parentCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[父代码类型Id(parentCodeTypeId)]的长度不能超过4(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.parentCodeTypeId}(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.childCodeTypeId) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.childCodeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[子代码类型Id(childCodeTypeId)]的长度不能超过4(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.childCodeTypeId}(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.ctRelationTypeId) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.ctRelationTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Ct关系类型Id(ctRelationTypeId)]的长度不能超过2(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.ctRelationTypeId}(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.description) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.description) > 300
  ) {
    throw new Error(
      `(errid:Watl000416)字段[描述(description)]的长度不能超过300(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.description}(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updDate) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.updDate}(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updUser) == false &&
    GetStrLen(pobjGC_CodeTypeRelationEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC_代码类型关系(GC_CodeTypeRelation))!值:${pobjGC_CodeTypeRelationEN.updUser}(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjGC_CodeTypeRelationEN.relationId &&
    undefined !== pobjGC_CodeTypeRelationEN.relationId &&
    tzDataType.isNumber(pobjGC_CodeTypeRelationEN.relationId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关系Id(relationId)]的值:[${pobjGC_CodeTypeRelationEN.relationId}], 非法,应该为数值型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.parentCodeTypeId) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.parentCodeTypeId &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.parentCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[父代码类型Id(parentCodeTypeId)]的值:[${pobjGC_CodeTypeRelationEN.parentCodeTypeId}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.childCodeTypeId) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.childCodeTypeId &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.childCodeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[子代码类型Id(childCodeTypeId)]的值:[${pobjGC_CodeTypeRelationEN.childCodeTypeId}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.ctRelationTypeId) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.ctRelationTypeId &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.ctRelationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Ct关系类型Id(ctRelationTypeId)]的值:[${pobjGC_CodeTypeRelationEN.ctRelationTypeId}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.description) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.description &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.description) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[描述(description)]的值:[${pobjGC_CodeTypeRelationEN.description}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updDate) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.updDate &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGC_CodeTypeRelationEN.updDate}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGC_CodeTypeRelationEN.updUser) == false &&
    undefined !== pobjGC_CodeTypeRelationEN.updUser &&
    tzDataType.isString(pobjGC_CodeTypeRelationEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGC_CodeTypeRelationEN.updUser}], 非法,应该为字符型(In GC_代码类型关系(GC_CodeTypeRelation))!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjGC_CodeTypeRelationEN.relationId ||
    (pobjGC_CodeTypeRelationEN.relationId != null &&
      pobjGC_CodeTypeRelationEN.relationId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[关系Id]不能为空(In GC_代码类型关系)!(clsGC_CodeTypeRelationBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GC_CodeTypeRelation_GetJSONStrByObj(
  pobjGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): string {
  pobjGC_CodeTypeRelationEN.sfUpdFldSetStr = pobjGC_CodeTypeRelationEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGC_CodeTypeRelationEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function GC_CodeTypeRelation_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsGC_CodeTypeRelationEN> {
  let arrGC_CodeTypeRelationObjLst = new Array<clsGC_CodeTypeRelationEN>();
  if (strJSON === '') {
    return arrGC_CodeTypeRelationObjLst;
  }
  try {
    arrGC_CodeTypeRelationObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGC_CodeTypeRelationObjLst;
  }
  return arrGC_CodeTypeRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGC_CodeTypeRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GC_CodeTypeRelation_GetObjLstByJSONObjLst(
  arrGC_CodeTypeRelationObjLstS: Array<clsGC_CodeTypeRelationEN>,
): Array<clsGC_CodeTypeRelationEN> {
  const arrGC_CodeTypeRelationObjLst = new Array<clsGC_CodeTypeRelationEN>();
  for (const objInFor of arrGC_CodeTypeRelationObjLstS) {
    const obj1 = GC_CodeTypeRelation_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGC_CodeTypeRelationObjLst.push(obj1);
  }
  return arrGC_CodeTypeRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GC_CodeTypeRelation_GetObjByJSONStr(strJSON: string): clsGC_CodeTypeRelationEN {
  let pobjGC_CodeTypeRelationEN = new clsGC_CodeTypeRelationEN();
  if (strJSON === '') {
    return pobjGC_CodeTypeRelationEN;
  }
  try {
    pobjGC_CodeTypeRelationEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGC_CodeTypeRelationEN;
  }
  return pobjGC_CodeTypeRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GC_CodeTypeRelation_GetCombineCondition(
  objGC_CodeTypeRelationCond: clsGC_CodeTypeRelationEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGC_CodeTypeRelationCond.dicFldComparisonOp,
      clsGC_CodeTypeRelationEN.con_RelationId,
    ) == true
  ) {
    const strComparisonOpRelationId: string =
      objGC_CodeTypeRelationCond.dicFldComparisonOp[clsGC_CodeTypeRelationEN.con_RelationId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsGC_CodeTypeRelationEN.con_RelationId,
      objGC_CodeTypeRelationCond.relationId,
      strComparisonOpRelationId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGC_CodeTypeRelationCond.dicFldComparisonOp,
      clsGC_CodeTypeRelationEN.con_ParentCodeTypeId,
    ) == true
  ) {
    const strComparisonOpParentCodeTypeId: string =
      objGC_CodeTypeRelationCond.dicFldComparisonOp[clsGC_CodeTypeRelationEN.con_ParentCodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGC_CodeTypeRelationEN.con_ParentCodeTypeId,
      objGC_CodeTypeRelationCond.parentCodeTypeId,
      strComparisonOpParentCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGC_CodeTypeRelationCond.dicFldComparisonOp,
      clsGC_CodeTypeRelationEN.con_ChildCodeTypeId,
    ) == true
  ) {
    const strComparisonOpChildCodeTypeId: string =
      objGC_CodeTypeRelationCond.dicFldComparisonOp[clsGC_CodeTypeRelationEN.con_ChildCodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGC_CodeTypeRelationEN.con_ChildCodeTypeId,
      objGC_CodeTypeRelationCond.childCodeTypeId,
      strComparisonOpChildCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGC_CodeTypeRelationCond.dicFldComparisonOp,
      clsGC_CodeTypeRelationEN.con_CtRelationTypeId,
    ) == true
  ) {
    const strComparisonOpCtRelationTypeId: string =
      objGC_CodeTypeRelationCond.dicFldComparisonOp[clsGC_CodeTypeRelationEN.con_CtRelationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGC_CodeTypeRelationEN.con_CtRelationTypeId,
      objGC_CodeTypeRelationCond.ctRelationTypeId,
      strComparisonOpCtRelationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGC_CodeTypeRelationCond.dicFldComparisonOp,
      clsGC_CodeTypeRelationEN.con_Description,
    ) == true
  ) {
    const strComparisonOpDescription: string =
      objGC_CodeTypeRelationCond.dicFldComparisonOp[clsGC_CodeTypeRelationEN.con_Description];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGC_CodeTypeRelationEN.con_Description,
      objGC_CodeTypeRelationCond.description,
      strComparisonOpDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGC_CodeTypeRelationCond.dicFldComparisonOp,
      clsGC_CodeTypeRelationEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGC_CodeTypeRelationCond.dicFldComparisonOp[clsGC_CodeTypeRelationEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGC_CodeTypeRelationEN.con_UpdDate,
      objGC_CodeTypeRelationCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGC_CodeTypeRelationCond.dicFldComparisonOp,
      clsGC_CodeTypeRelationEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGC_CodeTypeRelationCond.dicFldComparisonOp[clsGC_CodeTypeRelationEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGC_CodeTypeRelationEN.con_UpdUser,
      objGC_CodeTypeRelationCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GC_CodeTypeRelation(GC_代码类型关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strParentCodeTypeId: 父代码类型Id(要求唯一的字段)
 * @param strChildCodeTypeId: 子代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GC_CodeTypeRelation_GetUniCondStr(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ParentCodeTypeId = '{0}'",
    objGC_CodeTypeRelationEN.parentCodeTypeId,
  );
  strWhereCond += Format(" and ChildCodeTypeId = '{0}'", objGC_CodeTypeRelationEN.childCodeTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GC_CodeTypeRelation(GC_代码类型关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strParentCodeTypeId: 父代码类型Id(要求唯一的字段)
 * @param strChildCodeTypeId: 子代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GC_CodeTypeRelation_GetUniCondStr4Update(
  objGC_CodeTypeRelationEN: clsGC_CodeTypeRelationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RelationId <> '{0}'", objGC_CodeTypeRelationEN.relationId);
  strWhereCond += Format(
    " and ParentCodeTypeId = '{0}'",
    objGC_CodeTypeRelationEN.parentCodeTypeId,
  );
  strWhereCond += Format(" and ChildCodeTypeId = '{0}'", objGC_CodeTypeRelationEN.childCodeTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGC_CodeTypeRelationENS:源对象
 * @param objGC_CodeTypeRelationENT:目标对象
 */
export function GC_CodeTypeRelation_GetObjFromJsonObj(
  objGC_CodeTypeRelationENS: clsGC_CodeTypeRelationEN,
): clsGC_CodeTypeRelationEN {
  const objGC_CodeTypeRelationENT: clsGC_CodeTypeRelationEN = new clsGC_CodeTypeRelationEN();
  ObjectAssign(objGC_CodeTypeRelationENT, objGC_CodeTypeRelationENS);
  return objGC_CodeTypeRelationENT;
}
