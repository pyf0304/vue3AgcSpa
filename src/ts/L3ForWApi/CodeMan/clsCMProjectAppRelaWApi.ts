/**
 * 类名:clsCMProjectAppRelaWApi
 * 表名:CMProjectAppRela(00050600)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:28:05
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM项目应用关系(CMProjectAppRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { cMProjectAppRelaCache, isFuncMapCache } from '@/views/CodeMan/CMProjectAppRelaVueShare';
import { clsCMProjectAppRelaENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaENEx';
import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';
import { CMProject_func } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const cMProjectAppRela_Controller = 'CMProjectAppRelaApi';
export const cMProjectAppRela_ConstructorName = 'cMProjectAppRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngCMProjectAppRelaId:关键字
 * @returns 对象
 **/
export async function CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
  lngCMProjectAppRelaId: number,
): Promise<clsCMProjectAppRelaEN | null> {
  const strThisFuncName = 'GetObjByCMProjectAppRelaIdAsync';

  if (lngCMProjectAppRelaId == 0) {
    const strMsg = Format(
      '参数:[lngCMProjectAppRelaId]不能为空!(In clsCMProjectAppRelaWApi.GetObjByCMProjectAppRelaIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCMProjectAppRelaId';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngCMProjectAppRelaId,
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
      const objCMProjectAppRela = CMProjectAppRela_GetObjFromJsonObj(returnObj);
      return objCMProjectAppRela;
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngCMProjectAppRelaId:所给的关键字
 * @returns 对象
 */
export async function CMProjectAppRela_GetObjByCMProjectAppRelaIdlocalStorage(
  lngCMProjectAppRelaId: number,
) {
  const strThisFuncName = 'GetObjByCMProjectAppRelaIdlocalStorage';

  if (lngCMProjectAppRelaId == 0) {
    const strMsg = Format(
      '参数:[lngCMProjectAppRelaId]不能为空!(In clsCMProjectAppRelaWApi.GetObjByCMProjectAppRelaIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, lngCMProjectAppRelaId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCMProjectAppRelaCache: clsCMProjectAppRelaEN = JSON.parse(strTempObj);
    return objCMProjectAppRelaCache;
  }
  try {
    const objCMProjectAppRela = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
      lngCMProjectAppRelaId,
    );
    if (objCMProjectAppRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objCMProjectAppRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCMProjectAppRela;
    }
    return objCMProjectAppRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngCMProjectAppRelaId,
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngCMProjectAppRelaId:所给的关键字
 * @returns 对象
 */
export async function CMProjectAppRela_GetObjByCMProjectAppRelaIdCache(
  lngCMProjectAppRelaId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCMProjectAppRelaIdCache';

  if (lngCMProjectAppRelaId == 0) {
    const strMsg = Format(
      '参数:[lngCMProjectAppRelaId]不能为空!(In clsCMProjectAppRelaWApi.GetObjByCMProjectAppRelaIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
  try {
    const arrCMProjectAppRelaSel = arrCMProjectAppRelaObjLstCache.filter(
      (x) => x.cMProjectAppRelaId == lngCMProjectAppRelaId,
    );
    let objCMProjectAppRela: clsCMProjectAppRelaEN;
    if (arrCMProjectAppRelaSel.length > 0) {
      objCMProjectAppRela = arrCMProjectAppRelaSel[0];
      return objCMProjectAppRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCMProjectAppRelaConst = await CMProjectAppRela_GetObjByCMProjectAppRelaIdAsync(
          lngCMProjectAppRelaId,
        );
        if (objCMProjectAppRelaConst != null) {
          CMProjectAppRela_ReFreshThisCache(strPrjId);
          return objCMProjectAppRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngCMProjectAppRelaId,
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCMProjectAppRela:所给的对象
 * @returns 对象
 */
export async function CMProjectAppRela_UpdateObjInLstCache(
  objCMProjectAppRela: clsCMProjectAppRelaEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
    const obj = arrCMProjectAppRelaObjLstCache.find(
      (x) =>
        x.cmPrjId == objCMProjectAppRela.cmPrjId &&
        x.applicationTypeId == objCMProjectAppRela.applicationTypeId,
    );
    if (obj != null) {
      objCMProjectAppRela.cMProjectAppRelaId = obj.cMProjectAppRelaId;
      ObjectAssign(obj, objCMProjectAppRela);
    } else {
      arrCMProjectAppRelaObjLstCache.push(objCMProjectAppRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMProjectAppRela_SortFunDefa(
  a: clsCMProjectAppRelaEN,
  b: clsCMProjectAppRelaEN,
): number {
  return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMProjectAppRela_SortFunDefa2Fld(
  a: clsCMProjectAppRelaEN,
  b: clsCMProjectAppRelaEN,
): number {
  if (a.cmPrjId == b.cmPrjId) return a.applicationTypeId - b.applicationTypeId;
  else return a.cmPrjId.localeCompare(b.cmPrjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMProjectAppRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMProjectAppRelaEN.con_CMProjectAppRelaId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
        };
      case clsCMProjectAppRelaEN.con_CmPrjId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsCMProjectAppRelaEN.con_ApplicationTypeId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsCMProjectAppRelaEN.con_OrderNum:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCMProjectAppRelaEN.con_PrjId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMProjectAppRelaEN.con_UpdDate:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMProjectAppRelaEN.con_UpdUser:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMProjectAppRelaEN.con_Memo:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMProjectAppRela]中不存在!(in ${cMProjectAppRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMProjectAppRelaEN.con_CMProjectAppRelaId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return b.cMProjectAppRelaId - a.cMProjectAppRelaId;
        };
      case clsCMProjectAppRelaEN.con_CmPrjId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsCMProjectAppRelaEN.con_ApplicationTypeId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsCMProjectAppRelaEN.con_OrderNum:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCMProjectAppRelaEN.con_PrjId:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMProjectAppRelaEN.con_UpdDate:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMProjectAppRelaEN.con_UpdUser:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMProjectAppRelaEN.con_Memo:
        return (a: clsCMProjectAppRelaEN, b: clsCMProjectAppRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMProjectAppRela]中不存在!(in ${cMProjectAppRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CMProjectAppRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMProjectAppRelaEN.con_CMProjectAppRelaId:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.cMProjectAppRelaId === value;
      };
    case clsCMProjectAppRelaEN.con_CmPrjId:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.cmPrjId === value;
      };
    case clsCMProjectAppRelaEN.con_ApplicationTypeId:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.applicationTypeId === value;
      };
    case clsCMProjectAppRelaEN.con_OrderNum:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.orderNum === value;
      };
    case clsCMProjectAppRelaEN.con_PrjId:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.prjId === value;
      };
    case clsCMProjectAppRelaEN.con_UpdDate:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.updDate === value;
      };
    case clsCMProjectAppRelaEN.con_UpdUser:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.updUser === value;
      };
    case clsCMProjectAppRelaEN.con_Memo:
      return (obj: clsCMProjectAppRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMProjectAppRela]中不存在!(in ${cMProjectAppRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function CMProjectAppRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsCMProjectAppRelaWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsCMProjectAppRelaWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsCMProjectAppRelaEN.con_CMProjectAppRelaId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCMProjectAppRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCMProjectAppRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngCMProjectAppRelaId = Number(strInValue);
  if (lngCMProjectAppRelaId == 0) {
    return '';
  }
  const objCMProjectAppRela = await CMProjectAppRela_GetObjByCMProjectAppRelaIdCache(
    lngCMProjectAppRelaId,
    strPrjIdClassfy,
  );
  if (objCMProjectAppRela == null) return '';
  if (objCMProjectAppRela.GetFldValue(strOutFldName) == null) return '';
  return objCMProjectAppRela.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function CMProjectAppRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsCMProjectAppRelaWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsCMProjectAppRelaWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsCMProjectAppRelaEN.con_CMProjectAppRelaId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrCMProjectAppRela = await CMProjectAppRela_GetObjLstCache(strPrjIdClassfy);
  if (arrCMProjectAppRela == null) return [];
  let arrCMProjectAppRelaSel = arrCMProjectAppRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCMProjectAppRelaSel.length == 0) return [];
  return arrCMProjectAppRelaSel.map((x) => x.cMProjectAppRelaId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMProjectAppRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMProjectAppRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
      const objCMProjectAppRela = CMProjectAppRela_GetObjFromJsonObj(returnObj);
      return objCMProjectAppRela;
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMProjectAppRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMProjectAppRelaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCMProjectAppRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMProjectAppRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCMProjectAppRelaExObjLstCache: Array<clsCMProjectAppRelaEN> = CacheHelper.Get(strKey);
    const arrCMProjectAppRelaObjLstT = CMProjectAppRela_GetObjLstByJSONObjLst(
      arrCMProjectAppRelaExObjLstCache,
    );
    return arrCMProjectAppRelaObjLstT;
  }
  try {
    const arrCMProjectAppRelaExObjLst = await CMProjectAppRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCMProjectAppRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMProjectAppRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrCMProjectAppRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMProjectAppRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMProjectAppRelaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMProjectAppRelaEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCMProjectAppRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMProjectAppRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMProjectAppRelaExObjLstCache: Array<clsCMProjectAppRelaEN> =
      JSON.parse(strTempObjLst);
    const arrCMProjectAppRelaObjLstT = CMProjectAppRela_GetObjLstByJSONObjLst(
      arrCMProjectAppRelaExObjLstCache,
    );
    return arrCMProjectAppRelaObjLstT;
  }
  try {
    const arrCMProjectAppRelaExObjLst = await CMProjectAppRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCMProjectAppRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMProjectAppRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrCMProjectAppRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMProjectAppRelaObjLstCache: Array<clsCMProjectAppRelaEN> = JSON.parse(strTempObjLst);
    return arrCMProjectAppRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CMProjectAppRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMProjectAppRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
          cMProjectAppRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProjectAppRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMProjectAppRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMProjectAppRelaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMProjectAppRelaEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCMProjectAppRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMProjectAppRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMProjectAppRelaExObjLstCache: Array<clsCMProjectAppRelaEN> =
      JSON.parse(strTempObjLst);
    const arrCMProjectAppRelaObjLstT = CMProjectAppRela_GetObjLstByJSONObjLst(
      arrCMProjectAppRelaExObjLstCache,
    );
    return arrCMProjectAppRelaObjLstT;
  }
  try {
    const arrCMProjectAppRelaExObjLst = await CMProjectAppRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCMProjectAppRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMProjectAppRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrCMProjectAppRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMProjectAppRelaObjLstCache: Array<clsCMProjectAppRelaEN> = JSON.parse(strTempObjLst);
    return arrCMProjectAppRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMProjectAppRela_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsCMProjectAppRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsCMProjectAppRelaWApi.CMProjectAppRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCMProjectAppRelaWApi.CMProjectAppRela_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrCMProjectAppRelaObjLstCache;
  switch (clsCMProjectAppRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrCMProjectAppRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMProjectAppRela_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCMProjectAppRelaObjLstCache;
  switch (clsCMProjectAppRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrCMProjectAppRelaObjLstCache = null;
      break;
    default:
      arrCMProjectAppRelaObjLstCache = null;
      break;
  }
  return arrCMProjectAppRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngCMProjectAppRelaIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMProjectAppRela_GetSubObjLstCache(
  objCMProjectAppRelaCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
  let arrCMProjectAppRelaSel = arrCMProjectAppRelaObjLstCache;
  if (objCMProjectAppRelaCond.GetConditions().length == 0) return arrCMProjectAppRelaSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objCMProjectAppRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCMProjectAppRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMProjectAppRelaCond),
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMProjectAppRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCMProjectAppRelaId:关键字列表
 * @returns 对象列表
 **/
export async function CMProjectAppRela_GetObjLstByCMProjectAppRelaIdLstAsync(
  arrCMProjectAppRelaId: Array<string>,
): Promise<Array<clsCMProjectAppRelaEN>> {
  const strThisFuncName = 'GetObjLstByCMProjectAppRelaIdLstAsync';
  const strAction = 'GetObjLstByCMProjectAppRelaIdLst';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCMProjectAppRelaId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMProjectAppRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProjectAppRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param arrlngCMProjectAppRelaIdLst:关键字列表
 * @returns 对象列表
 */
export async function CMProjectAppRela_GetObjLstByCMProjectAppRelaIdLstCache(
  arrCMProjectAppRelaIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByCMProjectAppRelaIdLstCache';
  try {
    const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
    const arrCMProjectAppRelaSel = arrCMProjectAppRelaObjLstCache.filter(
      (x) => arrCMProjectAppRelaIdLst.indexOf(x.cMProjectAppRelaId) > -1,
    );
    return arrCMProjectAppRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCMProjectAppRelaIdLst.join(','),
      cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMProjectAppRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
          cMProjectAppRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProjectAppRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMProjectAppRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
          cMProjectAppRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProjectAppRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMProjectAppRelaEN>();
  const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
  if (arrCMProjectAppRelaObjLstCache.length == 0) return arrCMProjectAppRelaObjLstCache;
  let arrCMProjectAppRelaSel = arrCMProjectAppRelaObjLstCache;
  const objCMProjectAppRelaCond = objPagerPara.conditionCollection;
  if (objCMProjectAppRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsCMProjectAppRelaEN>();
  }
  //console.log("clsCMProjectAppRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objCMProjectAppRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCMProjectAppRelaSel.length == 0) return arrCMProjectAppRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.sort(
        CMProjectAppRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.sort(objPagerPara.sortFun);
    }
    arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.slice(intStart, intEnd);
    return arrCMProjectAppRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMProjectAppRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CMProjectAppRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMProjectAppRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMProjectAppRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
          cMProjectAppRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProjectAppRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param lngCMProjectAppRelaId:关键字
 * @returns 获取删除的结果
 **/
export async function CMProjectAppRela_DelRecordAsync(
  lngCMProjectAppRelaId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngCMProjectAppRelaId);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param arrCMProjectAppRelaId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMProjectAppRela_DelCMProjectAppRelasAsync(
  arrCMProjectAppRelaId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMProjectAppRelasAsync';
  const strAction = 'DelCMProjectAppRelas';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCMProjectAppRelaId, config);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CMProjectAppRela_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsCMProjectAppRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrCMProjectAppRelaObjLst = await CMProjectAppRela_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsCMProjectAppRelaENEx>();
  const arrCMProjectAppRelaExObjLst = arrCMProjectAppRelaObjLst.map((obj) => {
    const cacheKey = `${obj.cMProjectAppRelaId}_${obj.prjId}`;
    if (cMProjectAppRelaCache[cacheKey]) {
      const oldObj = cMProjectAppRelaCache[cacheKey];
      return oldObj;
    } else {
      const newObj = CMProjectAppRela_CopyToEx(obj);
      arrNewObj.push(newObj);
      cMProjectAppRelaCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await CMProjectAppRela_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCMProjectAppRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrCMProjectAppRelaExObjLst) {
      await CMProjectAppRela_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.cMProjectAppRelaId}_${newObj.prjId}`;
      cMProjectAppRelaCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrCMProjectAppRelaExObjLst.length == 0) return arrCMProjectAppRelaExObjLst;
  let arrCMProjectAppRelaSel: Array<clsCMProjectAppRelaENEx> = arrCMProjectAppRelaExObjLst;
  const objCMProjectAppRelaCond = objPagerPara.conditionCollection;
  if (objCMProjectAppRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrCMProjectAppRelaExObjLst;
  }
  try {
    for (const objCondition of objCMProjectAppRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCMProjectAppRelaSel.length == 0) return arrCMProjectAppRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.sort(
        CMProjectAppRela_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.sort(objPagerPara.sortFun);
    }
    arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.slice(intStart, intEnd);
    return arrCMProjectAppRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMProjectAppRelaENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objCMProjectAppRelaENS:源对象
 * @returns 目标对象=>clsCMProjectAppRelaEN:objCMProjectAppRelaENT
 **/
export function CMProjectAppRela_CopyToEx(
  objCMProjectAppRelaENS: clsCMProjectAppRelaEN,
): clsCMProjectAppRelaENEx {
  const strThisFuncName = CMProjectAppRela_CopyToEx.name;
  const objCMProjectAppRelaENT = new clsCMProjectAppRelaENEx();
  try {
    ObjectAssign(objCMProjectAppRelaENT, objCMProjectAppRelaENS);
    return objCMProjectAppRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCMProjectAppRelaENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CMProjectAppRela_FuncMapByFldName(
  strFldName: string,
  objCMProjectAppRelaEx: clsCMProjectAppRelaENEx,
) {
  const strThisFuncName = CMProjectAppRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCMProjectAppRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCMProjectAppRelaENEx.con_CmPrjName:
      return CMProjectAppRela_FuncMapCmPrjName(objCMProjectAppRelaEx);
    case clsCMProjectAppRelaENEx.con_ApplicationTypeName:
      return CMProjectAppRela_FuncMapApplicationTypeName(objCMProjectAppRelaEx);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMProjectAppRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMProjectAppRelaENEx.con_CmPrjName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return -1;
          if (b.cmPrjName === null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsCMProjectAppRelaENEx.con_CmPrjAppName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          if (a.cmPrjAppName === null && b.cmPrjAppName === null) return 0;
          if (a.cmPrjAppName === null) return -1;
          if (b.cmPrjAppName === null) return 1;
          return a.cmPrjAppName.localeCompare(b.cmPrjAppName);
        };
      case clsCMProjectAppRelaENEx.con_ApplicationTypeName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      default:
        return CMProjectAppRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCMProjectAppRelaENEx.con_CmPrjName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return 1;
          if (b.cmPrjName === null) return -1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsCMProjectAppRelaENEx.con_CmPrjAppName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          if (a.cmPrjAppName === null && b.cmPrjAppName === null) return 0;
          if (a.cmPrjAppName === null) return 1;
          if (b.cmPrjAppName === null) return -1;
          return b.cmPrjAppName.localeCompare(a.cmPrjAppName);
        };
      case clsCMProjectAppRelaENEx.con_ApplicationTypeName:
        return (a: clsCMProjectAppRelaENEx, b: clsCMProjectAppRelaENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      default:
        return CMProjectAppRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectAppRelaS:源对象
 **/
export async function CMProjectAppRela_FuncMapCmPrjName(
  objCMProjectAppRela: clsCMProjectAppRelaENEx,
) {
  const strThisFuncName = CMProjectAppRela_FuncMapCmPrjName.name;
  try {
    if (IsNullOrEmpty(objCMProjectAppRela.cmPrjName) == true) {
      const CMProjectCmPrjId = objCMProjectAppRela.cmPrjId;
      const CMProjectCmPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        CMProjectCmPrjId,
      );
      objCMProjectAppRela.cmPrjName = CMProjectCmPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001320)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectAppRelaS:源对象
 **/
export async function CMProjectAppRela_FuncMapApplicationTypeName(
  objCMProjectAppRela: clsCMProjectAppRelaENEx,
) {
  const strThisFuncName = CMProjectAppRela_FuncMapApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCMProjectAppRela.applicationTypeName) == true) {
      const ApplicationTypeApplicationTypeId = objCMProjectAppRela.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationTypeApplicationTypeId,
      );
      objCMProjectAppRela.applicationTypeName = ApplicationTypeApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001307)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_DelCMProjectAppRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCMProjectAppRelasByCondAsync';
  const strAction = 'DelCMProjectAppRelasByCond';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param objCMProjectAppRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMProjectAppRela_AddNewRecordAsync(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMProjectAppRelaEN);
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectAppRelaEN, config);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_AddNewObjSave(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CMProjectAppRela_CheckPropertyNew(objCMProjectAppRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cMProjectAppRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CMProjectAppRela_CheckUniCond4Add(objCMProjectAppRelaEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await CMProjectAppRela_AddNewRecordAsync(objCMProjectAppRelaEN);
    if (returnBool == true) {
      CMProjectAppRela_ReFreshCache(objCMProjectAppRelaEN.prjId);
    } else {
      const strInfo = `添加[CM项目应用关系(CMProjectAppRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objCMProjectAppRelaEN.cMProjectAppRelaId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${cMProjectAppRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function CMProjectAppRela_CheckUniCond4Add(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = CMProjectAppRela_GetUniCondStr(objCMProjectAppRelaEN);
  const bolIsExistCondition = await CMProjectAppRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function CMProjectAppRela_CheckUniCond4Update(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = CMProjectAppRela_GetUniCondStr4Update(objCMProjectAppRelaEN);
  const bolIsExistCondition = await CMProjectAppRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function CMProjectAppRela_UpdateObjSave(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCMProjectAppRelaEN.sfUpdFldSetStr = objCMProjectAppRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objCMProjectAppRelaEN.cMProjectAppRelaId == 0 ||
    objCMProjectAppRelaEN.cMProjectAppRelaId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CMProjectAppRela_CheckProperty4Update(objCMProjectAppRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cMProjectAppRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CMProjectAppRela_CheckUniCond4Update(objCMProjectAppRelaEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await CMProjectAppRela_UpdateRecordAsync(objCMProjectAppRelaEN);
    if (returnBool == true) {
      CMProjectAppRela_ReFreshCache(objCMProjectAppRelaEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${cMProjectAppRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCMProjectAppRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMProjectAppRela_AddNewRecordWithReturnKeyAsync(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectAppRelaEN, config);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param objCMProjectAppRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMProjectAppRela_UpdateRecordAsync(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMProjectAppRelaEN.sfUpdFldSetStr === undefined ||
    objCMProjectAppRelaEN.sfUpdFldSetStr === null ||
    objCMProjectAppRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMProjectAppRelaEN.cMProjectAppRelaId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectAppRelaEN, config);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param objCMProjectAppRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMProjectAppRela_EditRecordExAsync(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCMProjectAppRelaEN.sfUpdFldSetStr === undefined ||
    objCMProjectAppRelaEN.sfUpdFldSetStr === null ||
    objCMProjectAppRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMProjectAppRelaEN.cMProjectAppRelaId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectAppRelaEN, config);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param objCMProjectAppRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMProjectAppRela_UpdateWithConditionAsync(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMProjectAppRelaEN.sfUpdFldSetStr === undefined ||
    objCMProjectAppRelaEN.sfUpdFldSetStr === null ||
    objCMProjectAppRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMProjectAppRelaEN.cMProjectAppRelaId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);
  objCMProjectAppRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectAppRelaEN, config);
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param objlngCMProjectAppRelaIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMProjectAppRela_IsExistRecordCache(
  objCMProjectAppRelaCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
  if (arrCMProjectAppRelaObjLstCache == null) return false;
  let arrCMProjectAppRelaSel = arrCMProjectAppRelaObjLstCache;
  if (objCMProjectAppRelaCond.GetConditions().length == 0)
    return arrCMProjectAppRelaSel.length > 0 ? true : false;
  try {
    for (const objCondition of objCMProjectAppRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCMProjectAppRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCMProjectAppRelaCond),
      cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param lngCMProjectAppRelaId:所给的关键字
 * @returns 对象
 */
export async function CMProjectAppRela_IsExistCache(
  lngCMProjectAppRelaId: number,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
  if (arrCMProjectAppRelaObjLstCache == null) return false;
  try {
    const arrCMProjectAppRelaSel = arrCMProjectAppRelaObjLstCache.filter(
      (x) => x.cMProjectAppRelaId == lngCMProjectAppRelaId,
    );
    if (arrCMProjectAppRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngCMProjectAppRelaId,
      cMProjectAppRela_ConstructorName,
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
 * @param lngCMProjectAppRelaId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMProjectAppRela_IsExistAsync(
  lngCMProjectAppRelaId: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngCMProjectAppRelaId,
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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export async function CMProjectAppRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
 * @param objCMProjectAppRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function CMProjectAppRela_GetRecCountByCondCache(
  objCMProjectAppRelaCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCMProjectAppRelaObjLstCache = await CMProjectAppRela_GetObjLstCache(strPrjId);
  if (arrCMProjectAppRelaObjLstCache == null) return 0;
  let arrCMProjectAppRelaSel = arrCMProjectAppRelaObjLstCache;
  if (objCMProjectAppRelaCond.GetConditions().length == 0) return arrCMProjectAppRelaSel.length;
  try {
    for (const objCondition of objCMProjectAppRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMProjectAppRelaSel = arrCMProjectAppRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCMProjectAppRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMProjectAppRelaCond),
      cMProjectAppRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function CMProjectAppRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMProjectAppRela_Controller, strAction);

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
        cMProjectAppRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProjectAppRela_ConstructorName,
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
export function CMProjectAppRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMProjectAppRela_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsCMProjectAppRelaWApi.clsCMProjectAppRelaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsCMProjectAppRelaWApi.clsCMProjectAppRelaWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, strPrjId);
  switch (clsCMProjectAppRelaEN.CacheModeId) {
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
  clsCMProjectAppRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function CMProjectAppRela_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsCMProjectAppRelaWApi.CMProjectAppRela_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsCMProjectAppRelaWApi.CMProjectAppRela_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsCMProjectAppRelaEN._CurrTabName, strPrjId);
    switch (clsCMProjectAppRelaEN.CacheModeId) {
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
    clsCMProjectAppRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/**
 * 获取最新的缓存刷新时间
 * @returns 最新的缓存刷新时间，字符串型
 **/
export function CMProjectAppRela_GetLastRefreshTime(): string {
  if (clsCMProjectAppRelaEN._RefreshTimeLst.length == 0) return '';
  return clsCMProjectAppRelaEN._RefreshTimeLst[clsCMProjectAppRelaEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMProjectAppRela_CheckPropertyNew(pobjCMProjectAppRelaEN: clsCMProjectAppRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.cmPrjId) === true ||
    pobjCMProjectAppRelaEN.cmPrjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[Cm工程Id]不能为空(In CM项目应用关系)!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjCMProjectAppRelaEN.applicationTypeId ||
    (pobjCMProjectAppRelaEN.applicationTypeId != null &&
      pobjCMProjectAppRelaEN.applicationTypeId.toString() === '') ||
    pobjCMProjectAppRelaEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In CM项目应用关系)!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjCMProjectAppRelaEN.orderNum ||
    (pobjCMProjectAppRelaEN.orderNum != null && pobjCMProjectAppRelaEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In CM项目应用关系)!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.prjId) === true ||
    pobjCMProjectAppRelaEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In CM项目应用关系)!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.cmPrjId) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Cm工程Id(cmPrjId)]的长度不能超过6(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.cmPrjId}(clsCMProjectAppRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.prjId) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.prjId}(clsCMProjectAppRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updDate) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.updDate}(clsCMProjectAppRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updUser) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.updUser}(clsCMProjectAppRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.memo) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.memo}(clsCMProjectAppRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMProjectAppRelaEN.cMProjectAppRelaId &&
    undefined !== pobjCMProjectAppRelaEN.cMProjectAppRelaId &&
    tzDataType.isNumber(pobjCMProjectAppRelaEN.cMProjectAppRelaId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Cm工程应用关系Id(cMProjectAppRelaId)]的值:[${pobjCMProjectAppRelaEN.cMProjectAppRelaId}], 非法,应该为数值型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.cmPrjId) == false &&
    undefined !== pobjCMProjectAppRelaEN.cmPrjId &&
    tzDataType.isString(pobjCMProjectAppRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Cm工程Id(cmPrjId)]的值:[${pobjCMProjectAppRelaEN.cmPrjId}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCMProjectAppRelaEN.applicationTypeId &&
    undefined !== pobjCMProjectAppRelaEN.applicationTypeId &&
    tzDataType.isNumber(pobjCMProjectAppRelaEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjCMProjectAppRelaEN.applicationTypeId}], 非法,应该为数值型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCMProjectAppRelaEN.orderNum &&
    undefined !== pobjCMProjectAppRelaEN.orderNum &&
    tzDataType.isNumber(pobjCMProjectAppRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjCMProjectAppRelaEN.orderNum}], 非法,应该为数值型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.prjId) == false &&
    undefined !== pobjCMProjectAppRelaEN.prjId &&
    tzDataType.isString(pobjCMProjectAppRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjCMProjectAppRelaEN.prjId}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updDate) == false &&
    undefined !== pobjCMProjectAppRelaEN.updDate &&
    tzDataType.isString(pobjCMProjectAppRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCMProjectAppRelaEN.updDate}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updUser) == false &&
    undefined !== pobjCMProjectAppRelaEN.updUser &&
    tzDataType.isString(pobjCMProjectAppRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjCMProjectAppRelaEN.updUser}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.memo) == false &&
    undefined !== pobjCMProjectAppRelaEN.memo &&
    tzDataType.isString(pobjCMProjectAppRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjCMProjectAppRelaEN.memo}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMProjectAppRela_CheckProperty4Update(
  pobjCMProjectAppRelaEN: clsCMProjectAppRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.cmPrjId) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Cm工程Id(cmPrjId)]的长度不能超过6(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.cmPrjId}(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.prjId) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.prjId}(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updDate) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.updDate}(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updUser) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.updUser}(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.memo) == false &&
    GetStrLen(pobjCMProjectAppRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM项目应用关系(CMProjectAppRela))!值:${pobjCMProjectAppRelaEN.memo}(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjCMProjectAppRelaEN.cMProjectAppRelaId &&
    undefined !== pobjCMProjectAppRelaEN.cMProjectAppRelaId &&
    tzDataType.isNumber(pobjCMProjectAppRelaEN.cMProjectAppRelaId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Cm工程应用关系Id(cMProjectAppRelaId)]的值:[${pobjCMProjectAppRelaEN.cMProjectAppRelaId}], 非法,应该为数值型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.cmPrjId) == false &&
    undefined !== pobjCMProjectAppRelaEN.cmPrjId &&
    tzDataType.isString(pobjCMProjectAppRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Cm工程Id(cmPrjId)]的值:[${pobjCMProjectAppRelaEN.cmPrjId}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCMProjectAppRelaEN.applicationTypeId &&
    undefined !== pobjCMProjectAppRelaEN.applicationTypeId &&
    tzDataType.isNumber(pobjCMProjectAppRelaEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjCMProjectAppRelaEN.applicationTypeId}], 非法,应该为数值型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCMProjectAppRelaEN.orderNum &&
    undefined !== pobjCMProjectAppRelaEN.orderNum &&
    tzDataType.isNumber(pobjCMProjectAppRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjCMProjectAppRelaEN.orderNum}], 非法,应该为数值型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.prjId) == false &&
    undefined !== pobjCMProjectAppRelaEN.prjId &&
    tzDataType.isString(pobjCMProjectAppRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjCMProjectAppRelaEN.prjId}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updDate) == false &&
    undefined !== pobjCMProjectAppRelaEN.updDate &&
    tzDataType.isString(pobjCMProjectAppRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCMProjectAppRelaEN.updDate}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.updUser) == false &&
    undefined !== pobjCMProjectAppRelaEN.updUser &&
    tzDataType.isString(pobjCMProjectAppRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjCMProjectAppRelaEN.updUser}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectAppRelaEN.memo) == false &&
    undefined !== pobjCMProjectAppRelaEN.memo &&
    tzDataType.isString(pobjCMProjectAppRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjCMProjectAppRelaEN.memo}], 非法,应该为字符型(In CM项目应用关系(CMProjectAppRela))!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjCMProjectAppRelaEN.cMProjectAppRelaId ||
    (pobjCMProjectAppRelaEN.cMProjectAppRelaId != null &&
      pobjCMProjectAppRelaEN.cMProjectAppRelaId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[Cm工程应用关系Id]不能为空(In CM项目应用关系)!(clsCMProjectAppRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMProjectAppRela_GetJSONStrByObj(
  pobjCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): string {
  pobjCMProjectAppRelaEN.sfUpdFldSetStr = pobjCMProjectAppRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMProjectAppRelaEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CMProjectAppRela_GetObjLstByJSONStr(strJSON: string): Array<clsCMProjectAppRelaEN> {
  let arrCMProjectAppRelaObjLst = new Array<clsCMProjectAppRelaEN>();
  if (strJSON === '') {
    return arrCMProjectAppRelaObjLst;
  }
  try {
    arrCMProjectAppRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMProjectAppRelaObjLst;
  }
  return arrCMProjectAppRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMProjectAppRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMProjectAppRela_GetObjLstByJSONObjLst(
  arrCMProjectAppRelaObjLstS: Array<clsCMProjectAppRelaEN>,
): Array<clsCMProjectAppRelaEN> {
  const arrCMProjectAppRelaObjLst = new Array<clsCMProjectAppRelaEN>();
  for (const objInFor of arrCMProjectAppRelaObjLstS) {
    const obj1 = CMProjectAppRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMProjectAppRelaObjLst.push(obj1);
  }
  return arrCMProjectAppRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMProjectAppRela_GetObjByJSONStr(strJSON: string): clsCMProjectAppRelaEN {
  let pobjCMProjectAppRelaEN = new clsCMProjectAppRelaEN();
  if (strJSON === '') {
    return pobjCMProjectAppRelaEN;
  }
  try {
    pobjCMProjectAppRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMProjectAppRelaEN;
  }
  return pobjCMProjectAppRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMProjectAppRela_GetCombineCondition(
  objCMProjectAppRelaCond: clsCMProjectAppRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_CMProjectAppRelaId,
    ) == true
  ) {
    const strComparisonOpCMProjectAppRelaId: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_CMProjectAppRelaId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMProjectAppRelaEN.con_CMProjectAppRelaId,
      objCMProjectAppRelaCond.cMProjectAppRelaId,
      strComparisonOpCMProjectAppRelaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectAppRelaEN.con_CmPrjId,
      objCMProjectAppRelaCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMProjectAppRelaEN.con_ApplicationTypeId,
      objCMProjectAppRelaCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMProjectAppRelaEN.con_OrderNum,
      objCMProjectAppRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectAppRelaEN.con_PrjId,
      objCMProjectAppRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectAppRelaEN.con_UpdDate,
      objCMProjectAppRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectAppRelaEN.con_UpdUser,
      objCMProjectAppRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectAppRelaCond.dicFldComparisonOp,
      clsCMProjectAppRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMProjectAppRelaCond.dicFldComparisonOp[clsCMProjectAppRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectAppRelaEN.con_Memo,
      objCMProjectAppRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMProjectAppRela(CM项目应用关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCmPrjId: Cm工程Id(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMProjectAppRela_GetUniCondStr(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmPrjId = '{0}'", objCMProjectAppRelaEN.cmPrjId);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objCMProjectAppRelaEN.applicationTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMProjectAppRela(CM项目应用关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCmPrjId: Cm工程Id(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMProjectAppRela_GetUniCondStr4Update(
  objCMProjectAppRelaEN: clsCMProjectAppRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and CMProjectAppRelaId <> '{0}'",
    objCMProjectAppRelaEN.cMProjectAppRelaId,
  );
  strWhereCond += Format(" and CmPrjId = '{0}'", objCMProjectAppRelaEN.cmPrjId);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objCMProjectAppRelaEN.applicationTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMProjectAppRelaENS:源对象
 * @param objCMProjectAppRelaENT:目标对象
 */
export function CMProjectAppRela_GetObjFromJsonObj(
  objCMProjectAppRelaENS: clsCMProjectAppRelaEN,
): clsCMProjectAppRelaEN {
  const objCMProjectAppRelaENT: clsCMProjectAppRelaEN = new clsCMProjectAppRelaEN();
  ObjectAssign(objCMProjectAppRelaENT, objCMProjectAppRelaENS);
  return objCMProjectAppRelaENT;
}
