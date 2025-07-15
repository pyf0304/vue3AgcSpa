/**
 * 类名:clswf_PointWApi
 * 表名:wf_Point(00050485)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/29 20:20:18
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工作流管理(WorkFlow)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工作流结点(wf_Point)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年07月29日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clswf_PointEN } from '@/ts/L0Entity/WorkFlow/clswf_PointEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const wf_Point_Controller = 'wf_PointApi';
export const wf_Point_ConstructorName = 'wf_Point';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPointId:关键字
 * @returns 对象
 **/
export async function wf_Point_GetObjByPointIdAsync(
  strPointId: string,
): Promise<clswf_PointEN | null> {
  const strThisFuncName = 'GetObjByPointIdAsync';

  if (IsNullOrEmpty(strPointId) == true) {
    const strMsg = Format('参数:[strPointId]不能为空!(In clswf_PointWApi.GetObjByPointIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPointId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPointId]的长度:[{0}]不正确!(clswf_PointWApi.GetObjByPointIdAsync)',
      strPointId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPointId';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPointId,
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
      const objwf_Point = wf_Point_GetObjFromJsonObj(returnObj);
      return objwf_Point;
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strPointId:所给的关键字
 * @returns 对象
 */
export async function wf_Point_GetObjByPointIdCache(strPointId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByPointIdCache';

  if (IsNullOrEmpty(strPointId) == true) {
    const strMsg = Format('参数:[strPointId]不能为空!(In clswf_PointWApi.GetObjByPointIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPointId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPointId]的长度:[{0}]不正确!(clswf_PointWApi.GetObjByPointIdCache)',
      strPointId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
  try {
    const arrwf_PointSel = arrwf_PointObjLstCache.filter((x) => x.pointId == strPointId);
    let objwf_Point: clswf_PointEN;
    if (arrwf_PointSel.length > 0) {
      objwf_Point = arrwf_PointSel[0];
      return objwf_Point;
    } else {
      if (bolTryAsyncOnce == true) {
        const objwf_PointConst = await wf_Point_GetObjByPointIdAsync(strPointId);
        if (objwf_PointConst != null) {
          wf_Point_ReFreshThisCache();
          return objwf_PointConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPointId,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPointId:所给的关键字
 * @returns 对象
 */
export async function wf_Point_GetObjByPointIdlocalStorage(strPointId: string) {
  const strThisFuncName = 'GetObjByPointIdlocalStorage';

  if (IsNullOrEmpty(strPointId) == true) {
    const strMsg = Format(
      '参数:[strPointId]不能为空!(In clswf_PointWApi.GetObjByPointIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPointId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPointId]的长度:[{0}]不正确!(clswf_PointWApi.GetObjByPointIdlocalStorage)',
      strPointId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clswf_PointEN._CurrTabName, strPointId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objwf_PointCache: clswf_PointEN = JSON.parse(strTempObj);
    return objwf_PointCache;
  }
  try {
    const objwf_Point = await wf_Point_GetObjByPointIdAsync(strPointId);
    if (objwf_Point != null) {
      localStorage.setItem(strKey, JSON.stringify(objwf_Point));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objwf_Point;
    }
    return objwf_Point;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPointId,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objwf_Point:所给的对象
 * @returns 对象
 */
export async function wf_Point_UpdateObjInLstCache(objwf_Point: clswf_PointEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
    const obj = arrwf_PointObjLstCache.find(
      (x) => x.prjId == objwf_Point.prjId && x.pointName == objwf_Point.pointName,
    );
    if (obj != null) {
      objwf_Point.pointId = obj.pointId;
      ObjectAssign(obj, objwf_Point);
    } else {
      arrwf_PointObjLstCache.push(objwf_Point);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPointId:所给的关键字
 * @returns 对象
 */
export async function wf_Point_GetNameByPointIdCache(strPointId: string) {
  if (IsNullOrEmpty(strPointId) == true) {
    const strMsg = Format('参数:[strPointId]不能为空!(In clswf_PointWApi.GetNameByPointIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPointId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPointId]的长度:[{0}]不正确!(clswf_PointWApi.GetNameByPointIdCache)',
      strPointId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
  if (arrwf_PointObjLstCache == null) return '';
  try {
    const arrwf_PointSel = arrwf_PointObjLstCache.filter((x) => x.pointId == strPointId);
    let objwf_Point: clswf_PointEN;
    if (arrwf_PointSel.length > 0) {
      objwf_Point = arrwf_PointSel[0];
      return objwf_Point.pointName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPointId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function wf_Point_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clswf_PointEN.con_PointId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clswf_PointEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clswf_PointEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPointId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objwf_Point = await wf_Point_GetObjByPointIdCache(strPointId);
  if (objwf_Point == null) return '';
  if (objwf_Point.GetFldValue(strOutFldName) == null) return '';
  return objwf_Point.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function wf_Point_SortFunDefa(a: clswf_PointEN, b: clswf_PointEN): number {
  return a.pointId.localeCompare(b.pointId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function wf_Point_SortFunDefa2Fld(a: clswf_PointEN, b: clswf_PointEN): number {
  if (a.pointName == b.pointName) return a.prjId.localeCompare(b.prjId);
  else return a.pointName.localeCompare(b.pointName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function wf_Point_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clswf_PointEN.con_PointId:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          return a.pointId.localeCompare(b.pointId);
        };
      case clswf_PointEN.con_PointName:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          return a.pointName.localeCompare(b.pointName);
        };
      case clswf_PointEN.con_PrjId:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clswf_PointEN.con_TabName:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (a.tabName == null) return -1;
          if (b.tabName == null) return 1;
          return a.tabName.localeCompare(b.tabName);
        };
      case clswf_PointEN.con_TabKeyId:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (a.tabKeyId == null) return -1;
          if (b.tabKeyId == null) return 1;
          return a.tabKeyId.localeCompare(b.tabKeyId);
        };
      case clswf_PointEN.con_InUse:
        return (a: clswf_PointEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clswf_PointEN.con_UpdDate:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clswf_PointEN.con_UpdUser:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clswf_PointEN.con_Memo:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[wf_Point]中不存在!(in ${wf_Point_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clswf_PointEN.con_PointId:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          return b.pointId.localeCompare(a.pointId);
        };
      case clswf_PointEN.con_PointName:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          return b.pointName.localeCompare(a.pointName);
        };
      case clswf_PointEN.con_PrjId:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clswf_PointEN.con_TabName:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (b.tabName == null) return -1;
          if (a.tabName == null) return 1;
          return b.tabName.localeCompare(a.tabName);
        };
      case clswf_PointEN.con_TabKeyId:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (b.tabKeyId == null) return -1;
          if (a.tabKeyId == null) return 1;
          return b.tabKeyId.localeCompare(a.tabKeyId);
        };
      case clswf_PointEN.con_InUse:
        return (b: clswf_PointEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clswf_PointEN.con_UpdDate:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clswf_PointEN.con_UpdUser:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clswf_PointEN.con_Memo:
        return (a: clswf_PointEN, b: clswf_PointEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[wf_Point]中不存在!(in ${wf_Point_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function wf_Point_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clswf_PointEN.con_PointId:
      return (obj: clswf_PointEN) => {
        return obj.pointId === value;
      };
    case clswf_PointEN.con_PointName:
      return (obj: clswf_PointEN) => {
        return obj.pointName === value;
      };
    case clswf_PointEN.con_PrjId:
      return (obj: clswf_PointEN) => {
        return obj.prjId === value;
      };
    case clswf_PointEN.con_TabName:
      return (obj: clswf_PointEN) => {
        return obj.tabName === value;
      };
    case clswf_PointEN.con_TabKeyId:
      return (obj: clswf_PointEN) => {
        return obj.tabKeyId === value;
      };
    case clswf_PointEN.con_InUse:
      return (obj: clswf_PointEN) => {
        return obj.inUse === value;
      };
    case clswf_PointEN.con_UpdDate:
      return (obj: clswf_PointEN) => {
        return obj.updDate === value;
      };
    case clswf_PointEN.con_UpdUser:
      return (obj: clswf_PointEN) => {
        return obj.updUser === value;
      };
    case clswf_PointEN.con_Memo:
      return (obj: clswf_PointEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[wf_Point]中不存在!(in ${wf_Point_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function wf_Point_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clswf_PointEN.con_PointId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrwf_Point = await wf_Point_GetObjLstCache();
  if (arrwf_Point == null) return [];
  let arrwf_PointSel = arrwf_Point;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrwf_PointSel = arrwf_PointSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrwf_PointSel = arrwf_PointSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrwf_PointSel = arrwf_PointSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrwf_PointSel.length == 0) return [];
  return arrwf_PointSel.map((x) => x.pointId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function wf_Point_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
export async function wf_Point_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
export async function wf_Point_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clswf_PointEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
      const objwf_Point = wf_Point_GetObjFromJsonObj(returnObj);
      return objwf_Point;
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function wf_Point_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clswf_PointEN._CurrTabName;
  if (IsNullOrEmpty(clswf_PointEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clswf_PointEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrwf_PointExObjLstCache: Array<clswf_PointEN> = CacheHelper.Get(strKey);
    const arrwf_PointObjLstT = wf_Point_GetObjLstByJSONObjLst(arrwf_PointExObjLstCache);
    return arrwf_PointObjLstT;
  }
  try {
    const arrwf_PointExObjLst = await wf_Point_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrwf_PointExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrwf_PointExObjLst.length,
    );
    console.log(strInfo);
    return arrwf_PointExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function wf_Point_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clswf_PointEN._CurrTabName;
  if (IsNullOrEmpty(clswf_PointEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clswf_PointEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrwf_PointExObjLstCache: Array<clswf_PointEN> = JSON.parse(strTempObjLst);
    const arrwf_PointObjLstT = wf_Point_GetObjLstByJSONObjLst(arrwf_PointExObjLstCache);
    return arrwf_PointObjLstT;
  }
  try {
    const arrwf_PointExObjLst = await wf_Point_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrwf_PointExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrwf_PointExObjLst.length,
    );
    console.log(strInfo);
    return arrwf_PointExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function wf_Point_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clswf_PointEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrwf_PointObjLstCache: Array<clswf_PointEN> = JSON.parse(strTempObjLst);
    return arrwf_PointObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function wf_Point_GetObjLstAsync(strWhereCond: string): Promise<Array<clswf_PointEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
          wf_Point_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_Point_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function wf_Point_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clswf_PointEN._CurrTabName;
  if (IsNullOrEmpty(clswf_PointEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clswf_PointEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrwf_PointExObjLstCache: Array<clswf_PointEN> = JSON.parse(strTempObjLst);
    const arrwf_PointObjLstT = wf_Point_GetObjLstByJSONObjLst(arrwf_PointExObjLstCache);
    return arrwf_PointObjLstT;
  }
  try {
    const arrwf_PointExObjLst = await wf_Point_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrwf_PointExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrwf_PointExObjLst.length,
    );
    console.log(strInfo);
    return arrwf_PointExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function wf_Point_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clswf_PointEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrwf_PointObjLstCache: Array<clswf_PointEN> = JSON.parse(strTempObjLst);
    return arrwf_PointObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function wf_Point_GetObjLstCache(): Promise<Array<clswf_PointEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrwf_PointObjLstCache;
  switch (clswf_PointEN.CacheModeId) {
    case '04': //sessionStorage
      arrwf_PointObjLstCache = await wf_Point_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrwf_PointObjLstCache = await wf_Point_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrwf_PointObjLstCache = await wf_Point_GetObjLstClientCache();
      break;
    default:
      arrwf_PointObjLstCache = await wf_Point_GetObjLstClientCache();
      break;
  }
  return arrwf_PointObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function wf_Point_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrwf_PointObjLstCache;
  switch (clswf_PointEN.CacheModeId) {
    case '04': //sessionStorage
      arrwf_PointObjLstCache = await wf_Point_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrwf_PointObjLstCache = await wf_Point_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrwf_PointObjLstCache = null;
      break;
    default:
      arrwf_PointObjLstCache = null;
      break;
  }
  return arrwf_PointObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPointIdCond:条件对象
 * @returns 对象列表子集
 */
export async function wf_Point_GetSubObjLstCache(objwf_PointCond: clswf_PointEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
  let arrwf_PointSel = arrwf_PointObjLstCache;
  if (objwf_PointCond.sfFldComparisonOp == null || objwf_PointCond.sfFldComparisonOp == '')
    return arrwf_PointSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objwf_PointCond.sfFldComparisonOp,
  );
  //console.log("clswf_PointWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objwf_PointCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objwf_PointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrwf_PointSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objwf_PointCond),
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clswf_PointEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPointId:关键字列表
 * @returns 对象列表
 **/
export async function wf_Point_GetObjLstByPointIdLstAsync(
  arrPointId: Array<string>,
): Promise<Array<clswf_PointEN>> {
  const strThisFuncName = 'GetObjLstByPointIdLstAsync';
  const strAction = 'GetObjLstByPointIdLst';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPointId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          wf_Point_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_Point_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrPointIdLst:关键字列表
 * @returns 对象列表
 */
export async function wf_Point_GetObjLstByPointIdLstCache(arrPointIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByPointIdLstCache';
  try {
    const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
    const arrwf_PointSel = arrwf_PointObjLstCache.filter(
      (x) => arrPointIdLst.indexOf(x.pointId) > -1,
    );
    return arrwf_PointSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPointIdLst.join(','),
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function wf_Point_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clswf_PointEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
          wf_Point_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_Point_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
export async function wf_Point_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clswf_PointEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
          wf_Point_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_Point_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function wf_Point_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clswf_PointEN>();
  const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
  if (arrwf_PointObjLstCache.length == 0) return arrwf_PointObjLstCache;
  let arrwf_PointSel = arrwf_PointObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objwf_PointCond = new clswf_PointEN();
  ObjectAssign(objwf_PointCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clswf_PointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objwf_PointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrwf_PointSel.length == 0) return arrwf_PointSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrwf_PointSel = arrwf_PointSel.sort(wf_Point_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrwf_PointSel = arrwf_PointSel.sort(objPagerPara.sortFun);
    }
    arrwf_PointSel = arrwf_PointSel.slice(intStart, intEnd);
    return arrwf_PointSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clswf_PointEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function wf_Point_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clswf_PointEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clswf_PointEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
          wf_Point_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = wf_Point_GetObjLstByJSONObjLst(returnObjLst);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * @param strPointId:关键字
 * @returns 获取删除的结果
 **/
export async function wf_Point_DelRecordAsync(strPointId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(wf_Point_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, strPointId);

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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * @param arrPointId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function wf_Point_Delwf_PointsAsync(arrPointId: Array<string>): Promise<number> {
  const strThisFuncName = 'Delwf_PointsAsync';
  const strAction = 'Delwf_Points';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPointId, config);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function wf_Point_Delwf_PointsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'Delwf_PointsByCondAsync';
  const strAction = 'Delwf_PointsByCond';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * @param objwf_PointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_Point_AddNewRecordAsync(objwf_PointEN: clswf_PointEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objwf_PointEN);
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_PointEN, config);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objwf_PointEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function wf_Point_AddNewRecordWithMaxIdAsync(
  objwf_PointEN: clswf_PointEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_PointEN, config);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objwf_PointEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function wf_Point_AddNewRecordWithReturnKeyAsync(
  objwf_PointEN: clswf_PointEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_PointEN, config);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * @param objwf_PointEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function wf_Point_UpdateRecordAsync(objwf_PointEN: clswf_PointEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objwf_PointEN.sfUpdFldSetStr === undefined ||
    objwf_PointEN.sfUpdFldSetStr === null ||
    objwf_PointEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objwf_PointEN.pointId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_PointEN, config);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * @param objwf_PointEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function wf_Point_UpdateWithConditionAsync(
  objwf_PointEN: clswf_PointEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objwf_PointEN.sfUpdFldSetStr === undefined ||
    objwf_PointEN.sfUpdFldSetStr === null ||
    objwf_PointEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objwf_PointEN.pointId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);
  objwf_PointEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objwf_PointEN, config);
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrPointIdCond:条件对象
 * @returns 对象列表子集
 */
export async function wf_Point_IsExistRecordCache(objwf_PointCond: clswf_PointEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
  if (arrwf_PointObjLstCache == null) return false;
  let arrwf_PointSel = arrwf_PointObjLstCache;
  if (objwf_PointCond.sfFldComparisonOp == null || objwf_PointCond.sfFldComparisonOp == '')
    return arrwf_PointSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objwf_PointCond.sfFldComparisonOp,
  );
  //console.log("clswf_PointWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objwf_PointCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objwf_PointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrwf_PointSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objwf_PointCond),
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function wf_Point_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strPointId:所给的关键字
 * @returns 对象
 */
export async function wf_Point_IsExistCache(strPointId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
  if (arrwf_PointObjLstCache == null) return false;
  try {
    const arrwf_PointSel = arrwf_PointObjLstCache.filter((x) => x.pointId == strPointId);
    if (arrwf_PointSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPointId,
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strPointId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function wf_Point_IsExistAsync(strPointId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPointId,
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
export async function wf_Point_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objwf_PointCond:条件对象
 * @returns 对象列表记录数
 */
export async function wf_Point_GetRecCountByCondCache(objwf_PointCond: clswf_PointEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrwf_PointObjLstCache = await wf_Point_GetObjLstCache();
  if (arrwf_PointObjLstCache == null) return 0;
  let arrwf_PointSel = arrwf_PointObjLstCache;
  if (objwf_PointCond.sfFldComparisonOp == null || objwf_PointCond.sfFldComparisonOp == '')
    return arrwf_PointSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objwf_PointCond.sfFldComparisonOp,
  );
  //console.log("clswf_PointWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objwf_PointCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objwf_PointCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrwf_PointSel = arrwf_PointSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrwf_PointSel = arrwf_PointSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrwf_PointSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objwf_PointCond),
      wf_Point_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function wf_Point_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function wf_Point_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(wf_Point_Controller, strAction);

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
        wf_Point_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        wf_Point_ConstructorName,
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
export function wf_Point_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function wf_Point_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clswf_PointEN._CurrTabName;
  switch (clswf_PointEN.CacheModeId) {
    case '04': //sessionStorage
      sessionStorage.removeItem(strKey);
      break;
    case '03': //localStorage
      localStorage.removeItem(strKey);
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function wf_Point_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clswf_PointEN._CurrTabName;
    switch (clswf_PointEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function wf_Point_BindDdl_PointIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PointIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PointIdInDivCache");
  const arrObjLstSel = await wf_Point_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clswf_PointEN.con_PointId,
    clswf_PointEN.con_PointName,
    '工作流结点',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function wf_Point_CheckPropertyNew(pobjwf_PointEN: clswf_PointEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjwf_PointEN.pointName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[结点名称]不能为空(In 工作流结点)!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.prjId) === true || pobjwf_PointEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 工作流结点)!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjwf_PointEN.pointId) == false && GetStrLen(pobjwf_PointEN.pointId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[结点Id(pointId)]的长度不能超过8(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.pointId)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.pointName) == false &&
    GetStrLen(pobjwf_PointEN.pointName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[结点名称(pointName)]的长度不能超过100(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.pointName)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.prjId) == false && GetStrLen(pobjwf_PointEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.prjId)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.tabName) == false && GetStrLen(pobjwf_PointEN.tabName) > 100) {
    throw new Error(
      '(errid:Watl000413)字段[表名(tabName)]的长度不能超过100(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.tabName)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.tabKeyId) == false && GetStrLen(pobjwf_PointEN.tabKeyId) > 50) {
    throw new Error(
      '(errid:Watl000413)字段[表关键字Id(tabKeyId)]的长度不能超过50(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.tabKeyId)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.updDate) == false && GetStrLen(pobjwf_PointEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.updDate)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.updUser) == false && GetStrLen(pobjwf_PointEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.updUser)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.memo) == false && GetStrLen(pobjwf_PointEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.memo)(clswf_PointBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjwf_PointEN.pointId) == false &&
    undefined !== pobjwf_PointEN.pointId &&
    tzDataType.isString(pobjwf_PointEN.pointId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[结点Id(pointId)]的值:[$(pobjwf_PointEN.pointId)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.pointName) == false &&
    undefined !== pobjwf_PointEN.pointName &&
    tzDataType.isString(pobjwf_PointEN.pointName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[结点名称(pointName)]的值:[$(pobjwf_PointEN.pointName)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.prjId) == false &&
    undefined !== pobjwf_PointEN.prjId &&
    tzDataType.isString(pobjwf_PointEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjwf_PointEN.prjId)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.tabName) == false &&
    undefined !== pobjwf_PointEN.tabName &&
    tzDataType.isString(pobjwf_PointEN.tabName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表名(tabName)]的值:[$(pobjwf_PointEN.tabName)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.tabKeyId) == false &&
    undefined !== pobjwf_PointEN.tabKeyId &&
    tzDataType.isString(pobjwf_PointEN.tabKeyId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表关键字Id(tabKeyId)]的值:[$(pobjwf_PointEN.tabKeyId)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjwf_PointEN.inUse &&
    undefined !== pobjwf_PointEN.inUse &&
    tzDataType.isBoolean(pobjwf_PointEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjwf_PointEN.inUse)], 非法,应该为布尔型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.updDate) == false &&
    undefined !== pobjwf_PointEN.updDate &&
    tzDataType.isString(pobjwf_PointEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjwf_PointEN.updDate)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.updUser) == false &&
    undefined !== pobjwf_PointEN.updUser &&
    tzDataType.isString(pobjwf_PointEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjwf_PointEN.updUser)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.memo) == false &&
    undefined !== pobjwf_PointEN.memo &&
    tzDataType.isString(pobjwf_PointEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjwf_PointEN.memo)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function wf_Point_CheckProperty4Update(pobjwf_PointEN: clswf_PointEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjwf_PointEN.pointId) == false && GetStrLen(pobjwf_PointEN.pointId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[结点Id(pointId)]的长度不能超过8(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.pointId)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.pointName) == false &&
    GetStrLen(pobjwf_PointEN.pointName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[结点名称(pointName)]的长度不能超过100(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.pointName)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.prjId) == false && GetStrLen(pobjwf_PointEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.prjId)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.tabName) == false && GetStrLen(pobjwf_PointEN.tabName) > 100) {
    throw new Error(
      '(errid:Watl000416)字段[表名(tabName)]的长度不能超过100(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.tabName)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.tabKeyId) == false && GetStrLen(pobjwf_PointEN.tabKeyId) > 50) {
    throw new Error(
      '(errid:Watl000416)字段[表关键字Id(tabKeyId)]的长度不能超过50(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.tabKeyId)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.updDate) == false && GetStrLen(pobjwf_PointEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.updDate)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.updUser) == false && GetStrLen(pobjwf_PointEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.updUser)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjwf_PointEN.memo) == false && GetStrLen(pobjwf_PointEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工作流结点(wf_Point))!值:$(pobjwf_PointEN.memo)(clswf_PointBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjwf_PointEN.pointId) == false &&
    undefined !== pobjwf_PointEN.pointId &&
    tzDataType.isString(pobjwf_PointEN.pointId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[结点Id(pointId)]的值:[$(pobjwf_PointEN.pointId)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.pointName) == false &&
    undefined !== pobjwf_PointEN.pointName &&
    tzDataType.isString(pobjwf_PointEN.pointName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[结点名称(pointName)]的值:[$(pobjwf_PointEN.pointName)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.prjId) == false &&
    undefined !== pobjwf_PointEN.prjId &&
    tzDataType.isString(pobjwf_PointEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjwf_PointEN.prjId)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.tabName) == false &&
    undefined !== pobjwf_PointEN.tabName &&
    tzDataType.isString(pobjwf_PointEN.tabName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表名(tabName)]的值:[$(pobjwf_PointEN.tabName)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.tabKeyId) == false &&
    undefined !== pobjwf_PointEN.tabKeyId &&
    tzDataType.isString(pobjwf_PointEN.tabKeyId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表关键字Id(tabKeyId)]的值:[$(pobjwf_PointEN.tabKeyId)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjwf_PointEN.inUse &&
    undefined !== pobjwf_PointEN.inUse &&
    tzDataType.isBoolean(pobjwf_PointEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjwf_PointEN.inUse)], 非法,应该为布尔型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.updDate) == false &&
    undefined !== pobjwf_PointEN.updDate &&
    tzDataType.isString(pobjwf_PointEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjwf_PointEN.updDate)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.updUser) == false &&
    undefined !== pobjwf_PointEN.updUser &&
    tzDataType.isString(pobjwf_PointEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjwf_PointEN.updUser)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjwf_PointEN.memo) == false &&
    undefined !== pobjwf_PointEN.memo &&
    tzDataType.isString(pobjwf_PointEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjwf_PointEN.memo)], 非法,应该为字符型(In 工作流结点(wf_Point))!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjwf_PointEN.pointId) === true || pobjwf_PointEN.pointId.toString() === '0') {
    throw new Error(
      '(errid:Watl000064)字段[结点Id]不能为空(In 工作流结点)!(clswf_PointBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function wf_Point_GetJSONStrByObj(pobjwf_PointEN: clswf_PointEN): string {
  pobjwf_PointEN.sfUpdFldSetStr = pobjwf_PointEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjwf_PointEN);
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
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function wf_Point_GetObjLstByJSONStr(strJSON: string): Array<clswf_PointEN> {
  let arrwf_PointObjLst = new Array<clswf_PointEN>();
  if (strJSON === '') {
    return arrwf_PointObjLst;
  }
  try {
    arrwf_PointObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrwf_PointObjLst;
  }
  return arrwf_PointObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrwf_PointObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function wf_Point_GetObjLstByJSONObjLst(
  arrwf_PointObjLstS: Array<clswf_PointEN>,
): Array<clswf_PointEN> {
  const arrwf_PointObjLst = new Array<clswf_PointEN>();
  for (const objInFor of arrwf_PointObjLstS) {
    const obj1 = wf_Point_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrwf_PointObjLst.push(obj1);
  }
  return arrwf_PointObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function wf_Point_GetObjByJSONStr(strJSON: string): clswf_PointEN {
  let pobjwf_PointEN = new clswf_PointEN();
  if (strJSON === '') {
    return pobjwf_PointEN;
  }
  try {
    pobjwf_PointEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjwf_PointEN;
  }
  return pobjwf_PointEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function wf_Point_GetCombineCondition(objwf_PointCond: clswf_PointEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_PointId,
    ) == true
  ) {
    const strComparisonOpPointId: string =
      objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_PointId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_PointId,
      objwf_PointCond.pointId,
      strComparisonOpPointId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_PointName,
    ) == true
  ) {
    const strComparisonOpPointName: string =
      objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_PointName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_PointName,
      objwf_PointCond.pointName,
      strComparisonOpPointName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_PrjId,
      objwf_PointCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_TabName,
      objwf_PointCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_TabKeyId,
    ) == true
  ) {
    const strComparisonOpTabKeyId: string =
      objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_TabKeyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_TabKeyId,
      objwf_PointCond.tabKeyId,
      strComparisonOpTabKeyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_InUse,
    ) == true
  ) {
    if (objwf_PointCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clswf_PointEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clswf_PointEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_UpdDate,
      objwf_PointCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_UpdUser,
      objwf_PointCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objwf_PointCond.dicFldComparisonOp,
      clswf_PointEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objwf_PointCond.dicFldComparisonOp[clswf_PointEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clswf_PointEN.con_Memo,
      objwf_PointCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--wf_Point(工作流结点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPointName: 结点名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function wf_Point_GetUniCondStr(objwf_PointEN: clswf_PointEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objwf_PointEN.prjId);
  strWhereCond += Format(" and PointName = '{0}'", objwf_PointEN.pointName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--wf_Point(工作流结点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strPointName: 结点名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function wf_Point_GetUniCondStr4Update(objwf_PointEN: clswf_PointEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PointId <> '{0}'", objwf_PointEN.pointId);
  strWhereCond += Format(" and PrjId = '{0}'", objwf_PointEN.prjId);
  strWhereCond += Format(" and PointName = '{0}'", objwf_PointEN.pointName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objwf_PointENS:源对象
 * @param objwf_PointENT:目标对象
 */
export function wf_Point_GetObjFromJsonObj(objwf_PointENS: clswf_PointEN): clswf_PointEN {
  const objwf_PointENT: clswf_PointEN = new clswf_PointEN();
  ObjectAssign(objwf_PointENT, objwf_PointENS);
  return objwf_PointENT;
}
