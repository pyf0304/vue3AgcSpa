/**
 * 类名:clsPrjUserCharEncodingRelaWApi
 * 表名:PrjUserCharEncodingRela(00050264)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:38
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 项目用户字符编码关系(PrjUserCharEncodingRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjUserCharEncodingRelaEN } from '@/ts/L0Entity/SystemSet/clsPrjUserCharEncodingRelaEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const prjUserCharEncodingRela_Controller = 'PrjUserCharEncodingRelaApi';
export const prjUserCharEncodingRela_ConstructorName = 'prjUserCharEncodingRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function PrjUserCharEncodingRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsPrjUserCharEncodingRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsPrjUserCharEncodingRelaWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objPrjUserCharEncodingRela = PrjUserCharEncodingRela_GetObjFromJsonObj(returnObj);
      return objPrjUserCharEncodingRela;
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function PrjUserCharEncodingRela_GetObjBymIdCache(
  lngmId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsPrjUserCharEncodingRelaWApi.GetObjBymIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
  try {
    const arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objPrjUserCharEncodingRela: clsPrjUserCharEncodingRelaEN;
    if (arrPrjUserCharEncodingRelaSel.length > 0) {
      objPrjUserCharEncodingRela = arrPrjUserCharEncodingRelaSel[0];
      return objPrjUserCharEncodingRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjUserCharEncodingRelaConst = await PrjUserCharEncodingRela_GetObjBymIdAsync(
          lngmId,
        );
        if (objPrjUserCharEncodingRelaConst != null) {
          PrjUserCharEncodingRela_ReFreshThisCache();
          return objPrjUserCharEncodingRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      prjUserCharEncodingRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function PrjUserCharEncodingRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsPrjUserCharEncodingRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjUserCharEncodingRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjUserCharEncodingRelaCache: clsPrjUserCharEncodingRelaEN = JSON.parse(strTempObj);
    return objPrjUserCharEncodingRelaCache;
  }
  try {
    const objPrjUserCharEncodingRela = await PrjUserCharEncodingRela_GetObjBymIdAsync(lngmId);
    if (objPrjUserCharEncodingRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjUserCharEncodingRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjUserCharEncodingRela;
    }
    return objPrjUserCharEncodingRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      prjUserCharEncodingRela_ConstructorName,
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
 * @param objPrjUserCharEncodingRela:所给的对象
 * @returns 对象
 */
export async function PrjUserCharEncodingRela_UpdateObjInLstCache(
  objPrjUserCharEncodingRela: clsPrjUserCharEncodingRelaEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
    const obj = arrPrjUserCharEncodingRelaObjLstCache.find(
      (x) =>
        x.prjId == objPrjUserCharEncodingRela.prjId &&
        x.userId == objPrjUserCharEncodingRela.userId,
    );
    if (obj != null) {
      objPrjUserCharEncodingRela.mId = obj.mId;
      ObjectAssign(obj, objPrjUserCharEncodingRela);
    } else {
      arrPrjUserCharEncodingRelaObjLstCache.push(objPrjUserCharEncodingRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjUserCharEncodingRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PrjUserCharEncodingRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjUserCharEncodingRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjUserCharEncodingRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjUserCharEncodingRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objPrjUserCharEncodingRela = await PrjUserCharEncodingRela_GetObjBymIdCache(lngmId);
  if (objPrjUserCharEncodingRela == null) return '';
  if (objPrjUserCharEncodingRela.GetFldValue(strOutFldName) == null) return '';
  return objPrjUserCharEncodingRela.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjUserCharEncodingRela_SortFunDefa(
  a: clsPrjUserCharEncodingRelaEN,
  b: clsPrjUserCharEncodingRelaEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjUserCharEncodingRela_SortFunDefa2Fld(
  a: clsPrjUserCharEncodingRelaEN,
  b: clsPrjUserCharEncodingRelaEN,
): number {
  if (a.prjId == b.prjId) return a.userId.localeCompare(b.userId);
  else return a.prjId.localeCompare(b.prjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjUserCharEncodingRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjUserCharEncodingRelaEN.con_mId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          return a.mId - b.mId;
        };
      case clsPrjUserCharEncodingRelaEN.con_PrjId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjUserCharEncodingRelaEN.con_UserId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsPrjUserCharEncodingRelaEN.con_CharEncodingId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          return a.charEncodingId.localeCompare(b.charEncodingId);
        };
      case clsPrjUserCharEncodingRelaEN.con_UpdDate:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjUserCharEncodingRelaEN.con_UpdUserId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsPrjUserCharEncodingRelaEN.con_Memo:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjUserCharEncodingRela]中不存在!(in ${prjUserCharEncodingRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjUserCharEncodingRelaEN.con_mId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          return b.mId - a.mId;
        };
      case clsPrjUserCharEncodingRelaEN.con_PrjId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjUserCharEncodingRelaEN.con_UserId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsPrjUserCharEncodingRelaEN.con_CharEncodingId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          return b.charEncodingId.localeCompare(a.charEncodingId);
        };
      case clsPrjUserCharEncodingRelaEN.con_UpdDate:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjUserCharEncodingRelaEN.con_UpdUserId:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsPrjUserCharEncodingRelaEN.con_Memo:
        return (a: clsPrjUserCharEncodingRelaEN, b: clsPrjUserCharEncodingRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjUserCharEncodingRela]中不存在!(in ${prjUserCharEncodingRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjUserCharEncodingRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjUserCharEncodingRelaEN.con_mId:
      return (obj: clsPrjUserCharEncodingRelaEN) => {
        return obj.mId === value;
      };
    case clsPrjUserCharEncodingRelaEN.con_PrjId:
      return (obj: clsPrjUserCharEncodingRelaEN) => {
        return obj.prjId === value;
      };
    case clsPrjUserCharEncodingRelaEN.con_UserId:
      return (obj: clsPrjUserCharEncodingRelaEN) => {
        return obj.userId === value;
      };
    case clsPrjUserCharEncodingRelaEN.con_CharEncodingId:
      return (obj: clsPrjUserCharEncodingRelaEN) => {
        return obj.charEncodingId === value;
      };
    case clsPrjUserCharEncodingRelaEN.con_UpdDate:
      return (obj: clsPrjUserCharEncodingRelaEN) => {
        return obj.updDate === value;
      };
    case clsPrjUserCharEncodingRelaEN.con_UpdUserId:
      return (obj: clsPrjUserCharEncodingRelaEN) => {
        return obj.updUserId === value;
      };
    case clsPrjUserCharEncodingRelaEN.con_Memo:
      return (obj: clsPrjUserCharEncodingRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjUserCharEncodingRela]中不存在!(in ${prjUserCharEncodingRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PrjUserCharEncodingRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjUserCharEncodingRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrPrjUserCharEncodingRela = await PrjUserCharEncodingRela_GetObjLstCache();
  if (arrPrjUserCharEncodingRela == null) return [];
  let arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjUserCharEncodingRelaSel.length == 0) return [];
  return arrPrjUserCharEncodingRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjUserCharEncodingRela_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjUserCharEncodingRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
      const objPrjUserCharEncodingRela = PrjUserCharEncodingRela_GetObjFromJsonObj(returnObj);
      return objPrjUserCharEncodingRela;
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjUserCharEncodingRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjUserCharEncodingRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjUserCharEncodingRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjUserCharEncodingRelaExObjLstCache: Array<clsPrjUserCharEncodingRelaEN> =
      CacheHelper.Get(strKey);
    const arrPrjUserCharEncodingRelaObjLstT = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(
      arrPrjUserCharEncodingRelaExObjLstCache,
    );
    return arrPrjUserCharEncodingRelaObjLstT;
  }
  try {
    const arrPrjUserCharEncodingRelaExObjLst = await PrjUserCharEncodingRela_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrPrjUserCharEncodingRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjUserCharEncodingRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjUserCharEncodingRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjUserCharEncodingRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjUserCharEncodingRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjUserCharEncodingRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjUserCharEncodingRelaExObjLstCache: Array<clsPrjUserCharEncodingRelaEN> =
      JSON.parse(strTempObjLst);
    const arrPrjUserCharEncodingRelaObjLstT = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(
      arrPrjUserCharEncodingRelaExObjLstCache,
    );
    return arrPrjUserCharEncodingRelaObjLstT;
  }
  try {
    const arrPrjUserCharEncodingRelaExObjLst = await PrjUserCharEncodingRela_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrPrjUserCharEncodingRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjUserCharEncodingRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjUserCharEncodingRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjUserCharEncodingRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjUserCharEncodingRelaObjLstCache: Array<clsPrjUserCharEncodingRelaEN> =
      JSON.parse(strTempObjLst);
    return arrPrjUserCharEncodingRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjUserCharEncodingRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjUserCharEncodingRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
          prjUserCharEncodingRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjUserCharEncodingRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjUserCharEncodingRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjUserCharEncodingRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjUserCharEncodingRelaExObjLstCache: Array<clsPrjUserCharEncodingRelaEN> =
      JSON.parse(strTempObjLst);
    const arrPrjUserCharEncodingRelaObjLstT = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(
      arrPrjUserCharEncodingRelaExObjLstCache,
    );
    return arrPrjUserCharEncodingRelaObjLstT;
  }
  try {
    const arrPrjUserCharEncodingRelaExObjLst = await PrjUserCharEncodingRela_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjUserCharEncodingRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjUserCharEncodingRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjUserCharEncodingRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjUserCharEncodingRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjUserCharEncodingRelaObjLstCache: Array<clsPrjUserCharEncodingRelaEN> =
      JSON.parse(strTempObjLst);
    return arrPrjUserCharEncodingRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjUserCharEncodingRela_GetObjLstCache(): Promise<
  Array<clsPrjUserCharEncodingRelaEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjUserCharEncodingRelaObjLstCache;
  switch (clsPrjUserCharEncodingRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjUserCharEncodingRelaObjLstCache =
        await PrjUserCharEncodingRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstClientCache();
      break;
    default:
      arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstClientCache();
      break;
  }
  return arrPrjUserCharEncodingRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjUserCharEncodingRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjUserCharEncodingRelaObjLstCache;
  switch (clsPrjUserCharEncodingRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjUserCharEncodingRelaObjLstCache =
        await PrjUserCharEncodingRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjUserCharEncodingRelaObjLstCache =
        await PrjUserCharEncodingRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjUserCharEncodingRelaObjLstCache = null;
      break;
    default:
      arrPrjUserCharEncodingRelaObjLstCache = null;
      break;
  }
  return arrPrjUserCharEncodingRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjUserCharEncodingRela_GetSubObjLstCache(
  objPrjUserCharEncodingRelaCond: clsPrjUserCharEncodingRelaEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
  let arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaObjLstCache;
  if (
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp == null ||
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp == ''
  )
    return arrPrjUserCharEncodingRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp,
  );
  //console.log("clsPrjUserCharEncodingRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjUserCharEncodingRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserCharEncodingRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjUserCharEncodingRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjUserCharEncodingRelaCond),
      prjUserCharEncodingRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjUserCharEncodingRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function PrjUserCharEncodingRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsPrjUserCharEncodingRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjUserCharEncodingRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjUserCharEncodingRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
    const arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrPrjUserCharEncodingRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjUserCharEncodingRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
          prjUserCharEncodingRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjUserCharEncodingRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
          prjUserCharEncodingRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjUserCharEncodingRelaEN>();
  const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
  if (arrPrjUserCharEncodingRelaObjLstCache.length == 0)
    return arrPrjUserCharEncodingRelaObjLstCache;
  let arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPrjUserCharEncodingRelaCond = new clsPrjUserCharEncodingRelaEN();
  ObjectAssign(objPrjUserCharEncodingRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPrjUserCharEncodingRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserCharEncodingRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjUserCharEncodingRelaSel.length == 0) return arrPrjUserCharEncodingRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.sort(
        PrjUserCharEncodingRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.sort(objPagerPara.sortFun);
    }
    arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.slice(intStart, intEnd);
    return arrPrjUserCharEncodingRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjUserCharEncodingRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjUserCharEncodingRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjUserCharEncodingRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjUserCharEncodingRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjUserCharEncodingRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
          prjUserCharEncodingRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserCharEncodingRela_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjUserCharEncodingRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjUserCharEncodingRela_DelPrjUserCharEncodingRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrjUserCharEncodingRelasAsync';
  const strAction = 'DelPrjUserCharEncodingRelas';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_DelPrjUserCharEncodingRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjUserCharEncodingRelasByCondAsync';
  const strAction = 'DelPrjUserCharEncodingRelasByCond';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param objPrjUserCharEncodingRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjUserCharEncodingRela_AddNewRecordAsync(
  objPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjUserCharEncodingRelaEN);
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserCharEncodingRelaEN, config);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjUserCharEncodingRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjUserCharEncodingRela_AddNewRecordWithReturnKeyAsync(
  objPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserCharEncodingRelaEN, config);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param objPrjUserCharEncodingRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjUserCharEncodingRela_UpdateRecordAsync(
  objPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjUserCharEncodingRelaEN.sfUpdFldSetStr === undefined ||
    objPrjUserCharEncodingRelaEN.sfUpdFldSetStr === null ||
    objPrjUserCharEncodingRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjUserCharEncodingRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserCharEncodingRelaEN, config);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param objPrjUserCharEncodingRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjUserCharEncodingRela_UpdateWithConditionAsync(
  objPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjUserCharEncodingRelaEN.sfUpdFldSetStr === undefined ||
    objPrjUserCharEncodingRelaEN.sfUpdFldSetStr === null ||
    objPrjUserCharEncodingRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjUserCharEncodingRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);
  objPrjUserCharEncodingRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserCharEncodingRelaEN, config);
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjUserCharEncodingRela_IsExistRecordCache(
  objPrjUserCharEncodingRelaCond: clsPrjUserCharEncodingRelaEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
  if (arrPrjUserCharEncodingRelaObjLstCache == null) return false;
  let arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaObjLstCache;
  if (
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp == null ||
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp == ''
  )
    return arrPrjUserCharEncodingRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp,
  );
  //console.log("clsPrjUserCharEncodingRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjUserCharEncodingRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserCharEncodingRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjUserCharEncodingRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjUserCharEncodingRelaCond),
      prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function PrjUserCharEncodingRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
  if (arrPrjUserCharEncodingRelaObjLstCache == null) return false;
  try {
    const arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrPrjUserCharEncodingRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      prjUserCharEncodingRela_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjUserCharEncodingRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
 * @param objPrjUserCharEncodingRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjUserCharEncodingRela_GetRecCountByCondCache(
  objPrjUserCharEncodingRelaCond: clsPrjUserCharEncodingRelaEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjUserCharEncodingRelaObjLstCache = await PrjUserCharEncodingRela_GetObjLstCache();
  if (arrPrjUserCharEncodingRelaObjLstCache == null) return 0;
  let arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaObjLstCache;
  if (
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp == null ||
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp == ''
  )
    return arrPrjUserCharEncodingRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjUserCharEncodingRelaCond.sfFldComparisonOp,
  );
  //console.log("clsPrjUserCharEncodingRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjUserCharEncodingRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserCharEncodingRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjUserCharEncodingRelaSel = arrPrjUserCharEncodingRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjUserCharEncodingRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjUserCharEncodingRelaCond),
      prjUserCharEncodingRela_ConstructorName,
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
export async function PrjUserCharEncodingRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjUserCharEncodingRela_Controller, strAction);

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
        prjUserCharEncodingRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserCharEncodingRela_ConstructorName,
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
export function PrjUserCharEncodingRela_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function PrjUserCharEncodingRela_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjUserCharEncodingRelaEN._CurrTabName;
  switch (clsPrjUserCharEncodingRelaEN.CacheModeId) {
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
export function PrjUserCharEncodingRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjUserCharEncodingRelaEN._CurrTabName;
    switch (clsPrjUserCharEncodingRelaEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjUserCharEncodingRela_CheckPropertyNew(
  pobjPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.prjId) === true ||
    pobjPrjUserCharEncodingRelaEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 项目用户字符编码关系)!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.charEncodingId) === true ||
    pobjPrjUserCharEncodingRelaEN.charEncodingId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[字符编码]不能为空(In 项目用户字符编码关系)!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.prjId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.prjId)(clsPrjUserCharEncodingRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.userId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.userId)(clsPrjUserCharEncodingRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.charEncodingId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.charEncodingId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字符编码(charEncodingId)]的长度不能超过20(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.charEncodingId)(clsPrjUserCharEncodingRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updDate) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.updDate)(clsPrjUserCharEncodingRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updUserId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.updUserId)(clsPrjUserCharEncodingRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.memo) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.memo)(clsPrjUserCharEncodingRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPrjUserCharEncodingRelaEN.mId &&
    undefined !== pobjPrjUserCharEncodingRelaEN.mId &&
    tzDataType.isNumber(pobjPrjUserCharEncodingRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjPrjUserCharEncodingRelaEN.mId)], 非法,应该为数值型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.prjId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.prjId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjPrjUserCharEncodingRelaEN.prjId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.userId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.userId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjPrjUserCharEncodingRelaEN.userId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.charEncodingId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.charEncodingId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.charEncodingId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字符编码(charEncodingId)]的值:[$(pobjPrjUserCharEncodingRelaEN.charEncodingId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updDate) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.updDate &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjPrjUserCharEncodingRelaEN.updDate)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updUserId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.updUserId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjPrjUserCharEncodingRelaEN.updUserId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.memo) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.memo &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjPrjUserCharEncodingRelaEN.memo)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjUserCharEncodingRela_CheckProperty4Update(
  pobjPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.prjId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.prjId)(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.userId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.userId)(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.charEncodingId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.charEncodingId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字符编码(charEncodingId)]的长度不能超过20(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.charEncodingId)(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updDate) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.updDate)(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updUserId) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.updUserId)(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.memo) == false &&
    GetStrLen(pobjPrjUserCharEncodingRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 项目用户字符编码关系(PrjUserCharEncodingRela))!值:$(pobjPrjUserCharEncodingRelaEN.memo)(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjPrjUserCharEncodingRelaEN.mId &&
    undefined !== pobjPrjUserCharEncodingRelaEN.mId &&
    tzDataType.isNumber(pobjPrjUserCharEncodingRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjPrjUserCharEncodingRelaEN.mId)], 非法,应该为数值型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.prjId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.prjId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjPrjUserCharEncodingRelaEN.prjId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.userId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.userId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjPrjUserCharEncodingRelaEN.userId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.charEncodingId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.charEncodingId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.charEncodingId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字符编码(charEncodingId)]的值:[$(pobjPrjUserCharEncodingRelaEN.charEncodingId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updDate) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.updDate &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjPrjUserCharEncodingRelaEN.updDate)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.updUserId) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.updUserId &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjPrjUserCharEncodingRelaEN.updUserId)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserCharEncodingRelaEN.memo) == false &&
    undefined !== pobjPrjUserCharEncodingRelaEN.memo &&
    tzDataType.isString(pobjPrjUserCharEncodingRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjPrjUserCharEncodingRelaEN.memo)], 非法,应该为字符型(In 项目用户字符编码关系(PrjUserCharEncodingRela))!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjPrjUserCharEncodingRelaEN.mId ||
    (pobjPrjUserCharEncodingRelaEN.mId != null &&
      pobjPrjUserCharEncodingRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 项目用户字符编码关系)!(clsPrjUserCharEncodingRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjUserCharEncodingRela_GetJSONStrByObj(
  pobjPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
): string {
  pobjPrjUserCharEncodingRelaEN.sfUpdFldSetStr = pobjPrjUserCharEncodingRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjUserCharEncodingRelaEN);
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjUserCharEncodingRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsPrjUserCharEncodingRelaEN> {
  let arrPrjUserCharEncodingRelaObjLst = new Array<clsPrjUserCharEncodingRelaEN>();
  if (strJSON === '') {
    return arrPrjUserCharEncodingRelaObjLst;
  }
  try {
    arrPrjUserCharEncodingRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjUserCharEncodingRelaObjLst;
  }
  return arrPrjUserCharEncodingRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjUserCharEncodingRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjUserCharEncodingRela_GetObjLstByJSONObjLst(
  arrPrjUserCharEncodingRelaObjLstS: Array<clsPrjUserCharEncodingRelaEN>,
): Array<clsPrjUserCharEncodingRelaEN> {
  const arrPrjUserCharEncodingRelaObjLst = new Array<clsPrjUserCharEncodingRelaEN>();
  for (const objInFor of arrPrjUserCharEncodingRelaObjLstS) {
    const obj1 = PrjUserCharEncodingRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjUserCharEncodingRelaObjLst.push(obj1);
  }
  return arrPrjUserCharEncodingRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjUserCharEncodingRela_GetObjByJSONStr(
  strJSON: string,
): clsPrjUserCharEncodingRelaEN {
  let pobjPrjUserCharEncodingRelaEN = new clsPrjUserCharEncodingRelaEN();
  if (strJSON === '') {
    return pobjPrjUserCharEncodingRelaEN;
  }
  try {
    pobjPrjUserCharEncodingRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjUserCharEncodingRelaEN;
  }
  return pobjPrjUserCharEncodingRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjUserCharEncodingRela_GetCombineCondition(
  objPrjUserCharEncodingRelaCond: clsPrjUserCharEncodingRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp,
      clsPrjUserCharEncodingRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp[clsPrjUserCharEncodingRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjUserCharEncodingRelaEN.con_mId,
      objPrjUserCharEncodingRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp,
      clsPrjUserCharEncodingRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp[clsPrjUserCharEncodingRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserCharEncodingRelaEN.con_PrjId,
      objPrjUserCharEncodingRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp,
      clsPrjUserCharEncodingRelaEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp[clsPrjUserCharEncodingRelaEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserCharEncodingRelaEN.con_UserId,
      objPrjUserCharEncodingRelaCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp,
      clsPrjUserCharEncodingRelaEN.con_CharEncodingId,
    ) == true
  ) {
    const strComparisonOpCharEncodingId: string =
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp[
        clsPrjUserCharEncodingRelaEN.con_CharEncodingId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserCharEncodingRelaEN.con_CharEncodingId,
      objPrjUserCharEncodingRelaCond.charEncodingId,
      strComparisonOpCharEncodingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp,
      clsPrjUserCharEncodingRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp[clsPrjUserCharEncodingRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserCharEncodingRelaEN.con_UpdDate,
      objPrjUserCharEncodingRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp,
      clsPrjUserCharEncodingRelaEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp[clsPrjUserCharEncodingRelaEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserCharEncodingRelaEN.con_UpdUserId,
      objPrjUserCharEncodingRelaCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp,
      clsPrjUserCharEncodingRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjUserCharEncodingRelaCond.dicFldComparisonOp[clsPrjUserCharEncodingRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserCharEncodingRelaEN.con_Memo,
      objPrjUserCharEncodingRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjUserCharEncodingRela(项目用户字符编码关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjUserCharEncodingRela_GetUniCondStr(
  objPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objPrjUserCharEncodingRelaEN.prjId);
  strWhereCond += Format(" and UserId = '{0}'", objPrjUserCharEncodingRelaEN.userId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjUserCharEncodingRela(项目用户字符编码关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjUserCharEncodingRela_GetUniCondStr4Update(
  objPrjUserCharEncodingRelaEN: clsPrjUserCharEncodingRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objPrjUserCharEncodingRelaEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjUserCharEncodingRelaEN.prjId);
  strWhereCond += Format(" and UserId = '{0}'", objPrjUserCharEncodingRelaEN.userId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjUserCharEncodingRelaENS:源对象
 * @param objPrjUserCharEncodingRelaENT:目标对象
 */
export function PrjUserCharEncodingRela_GetObjFromJsonObj(
  objPrjUserCharEncodingRelaENS: clsPrjUserCharEncodingRelaEN,
): clsPrjUserCharEncodingRelaEN {
  const objPrjUserCharEncodingRelaENT: clsPrjUserCharEncodingRelaEN =
    new clsPrjUserCharEncodingRelaEN();
  ObjectAssign(objPrjUserCharEncodingRelaENT, objPrjUserCharEncodingRelaENS);
  return objPrjUserCharEncodingRelaENT;
}
