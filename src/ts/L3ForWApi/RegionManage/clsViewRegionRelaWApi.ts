/**
 * 类名:clsViewRegionRelaWApi
 * 表名:ViewRegionRela(00050573)
 * 版本:2025.06.13.1(服务器:PYF-AI)
 * 日期:2025/06/14 17:57:41
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面区域关系(ViewRegionRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { viewRegionRelaCache, isFuncMapCache } from '@/views/RegionManage/ViewRegionRelaVueShare';
import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { ViewInfo_func } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const viewRegionRela_Controller = 'ViewRegionRelaApi';
export const viewRegionRela_ConstructorName = 'viewRegionRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ViewRegionRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsViewRegionRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsViewRegionRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
      const objViewRegionRela = ViewRegionRela_GetObjFromJsonObj(returnObj);
      return objViewRegionRela;
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ViewRegionRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsViewRegionRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewRegionRelaCache: clsViewRegionRelaEN = JSON.parse(strTempObj);
    return objViewRegionRelaCache;
  }
  try {
    const objViewRegionRela = await ViewRegionRela_GetObjBymIdAsync(lngmId);
    if (objViewRegionRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewRegionRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewRegionRela;
    }
    return objViewRegionRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      viewRegionRela_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ViewRegionRela_GetObjBymIdCache(
  lngmId: number,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsViewRegionRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  try {
    const arrViewRegionRelaSel = arrViewRegionRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objViewRegionRela: clsViewRegionRelaEN;
    if (arrViewRegionRelaSel.length > 0) {
      objViewRegionRela = arrViewRegionRelaSel[0];
      return objViewRegionRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewRegionRelaConst = await ViewRegionRela_GetObjBymIdAsync(lngmId);
        if (objViewRegionRelaConst != null) {
          ViewRegionRela_ReFreshThisCache(strCmPrjId);
          return objViewRegionRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      viewRegionRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewRegionRela:所给的对象
 * @returns 对象
 */
export async function ViewRegionRela_UpdateObjInLstCache(
  objViewRegionRela: clsViewRegionRelaEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
    const obj = arrViewRegionRelaObjLstCache.find(
      (x) => x.viewId == objViewRegionRela.viewId && x.regionId == objViewRegionRela.regionId,
    );
    if (obj != null) {
      objViewRegionRela.mId = obj.mId;
      ObjectAssign(obj, objViewRegionRela);
    } else {
      arrViewRegionRelaObjLstCache.push(objViewRegionRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewRegionRela_ConstructorName,
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
export function ViewRegionRela_SortFunDefa(a: clsViewRegionRelaEN, b: clsViewRegionRelaEN): number {
  return a.mId - b.mId;
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
export function ViewRegionRela_SortFunDefa2Fld(
  a: clsViewRegionRelaEN,
  b: clsViewRegionRelaEN,
): number {
  if (a.regionId == b.regionId) return a.viewId.localeCompare(b.viewId);
  else return a.regionId.localeCompare(b.regionId);
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
export function ViewRegionRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRegionRelaEN.con_mId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return a.mId - b.mId;
        };
      case clsViewRegionRelaEN.con_RegionId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsViewRegionRelaEN.con_ViewId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return a.viewId.localeCompare(b.viewId);
        };
      case clsViewRegionRelaEN.con_InUse:
        return (a: clsViewRegionRelaEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsViewRegionRelaEN.con_IsDisp:
        return (a: clsViewRegionRelaEN) => {
          if (a.isDisp == true) return 1;
          else return -1;
        };
      case clsViewRegionRelaEN.con_PrjId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewRegionRelaEN.con_UpdUser:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsViewRegionRelaEN.con_UpdDate:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewRegionRelaEN.con_Memo:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewRegionRela]中不存在!(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewRegionRelaEN.con_mId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return b.mId - a.mId;
        };
      case clsViewRegionRelaEN.con_RegionId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsViewRegionRelaEN.con_ViewId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return b.viewId.localeCompare(a.viewId);
        };
      case clsViewRegionRelaEN.con_InUse:
        return (b: clsViewRegionRelaEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsViewRegionRelaEN.con_IsDisp:
        return (b: clsViewRegionRelaEN) => {
          if (b.isDisp == true) return 1;
          else return -1;
        };
      case clsViewRegionRelaEN.con_PrjId:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewRegionRelaEN.con_UpdUser:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsViewRegionRelaEN.con_UpdDate:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewRegionRelaEN.con_Memo:
        return (a: clsViewRegionRelaEN, b: clsViewRegionRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewRegionRela]中不存在!(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
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
export async function ViewRegionRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewRegionRelaEN.con_mId:
      return (obj: clsViewRegionRelaEN) => {
        return obj.mId === value;
      };
    case clsViewRegionRelaEN.con_RegionId:
      return (obj: clsViewRegionRelaEN) => {
        return obj.regionId === value;
      };
    case clsViewRegionRelaEN.con_ViewId:
      return (obj: clsViewRegionRelaEN) => {
        return obj.viewId === value;
      };
    case clsViewRegionRelaEN.con_InUse:
      return (obj: clsViewRegionRelaEN) => {
        return obj.inUse === value;
      };
    case clsViewRegionRelaEN.con_IsDisp:
      return (obj: clsViewRegionRelaEN) => {
        return obj.isDisp === value;
      };
    case clsViewRegionRelaEN.con_PrjId:
      return (obj: clsViewRegionRelaEN) => {
        return obj.prjId === value;
      };
    case clsViewRegionRelaEN.con_UpdUser:
      return (obj: clsViewRegionRelaEN) => {
        return obj.updUser === value;
      };
    case clsViewRegionRelaEN.con_UpdDate:
      return (obj: clsViewRegionRelaEN) => {
        return obj.updDate === value;
      };
    case clsViewRegionRelaEN.con_Memo:
      return (obj: clsViewRegionRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewRegionRela]中不存在!(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function ViewRegionRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCmPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsViewRegionRelaWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsViewRegionRelaWApi.func)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsViewRegionRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewRegionRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewRegionRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objViewRegionRela = await ViewRegionRela_GetObjBymIdCache(lngmId, strCmPrjIdClassfy);
  if (objViewRegionRela == null) return '';
  if (objViewRegionRela.GetFldValue(strOutFldName) == null) return '';
  return objViewRegionRela.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ViewRegionRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsViewRegionRelaWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsViewRegionRelaWApi.funcKey)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsViewRegionRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrViewRegionRela = await ViewRegionRela_GetObjLstCache(strCmPrjIdClassfy);
  if (arrViewRegionRela == null) return [];
  let arrViewRegionRelaSel = arrViewRegionRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewRegionRelaSel.length == 0) return [];
  return arrViewRegionRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewRegionRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewRegionRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
      const objViewRegionRela = ViewRegionRela_GetObjFromJsonObj(returnObj);
      return objViewRegionRela;
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewRegionRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewRegionRelaEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsViewRegionRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewRegionRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewRegionRelaExObjLstCache: Array<clsViewRegionRelaEN> = CacheHelper.Get(strKey);
    const arrViewRegionRelaObjLstT = ViewRegionRela_GetObjLstByJSONObjLst(
      arrViewRegionRelaExObjLstCache,
    );
    return arrViewRegionRelaObjLstT;
  }
  try {
    const arrViewRegionRelaExObjLst = await ViewRegionRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewRegionRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewRegionRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrViewRegionRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewRegionRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewRegionRelaEN.WhereFormat, strCmPrjId);
  } else {
    const strMsg = '分类字段为扩展字段,此时WhereFormat不能为空!';
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsViewRegionRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewRegionRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewRegionRelaExObjLstCache: Array<clsViewRegionRelaEN> = JSON.parse(strTempObjLst);
    const arrViewRegionRelaObjLstT = ViewRegionRela_GetObjLstByJSONObjLst(
      arrViewRegionRelaExObjLstCache,
    );
    return arrViewRegionRelaObjLstT;
  }
  try {
    const arrViewRegionRelaExObjLst = await ViewRegionRela_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewRegionRelaEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrViewRegionRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewRegionRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrViewRegionRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstlocalStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewRegionRelaObjLstCache: Array<clsViewRegionRelaEN> = JSON.parse(strTempObjLst);
    return arrViewRegionRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewRegionRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewRegionRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
          viewRegionRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewRegionRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewRegionRelaEN.WhereFormat, strCmPrjId);
  } else {
    const strMsg = '分类字段为扩展字段,此时WhereFormat不能为空!';
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsViewRegionRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewRegionRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewRegionRelaExObjLstCache: Array<clsViewRegionRelaEN> = JSON.parse(strTempObjLst);
    const arrViewRegionRelaObjLstT = ViewRegionRela_GetObjLstByJSONObjLst(
      arrViewRegionRelaExObjLstCache,
    );
    return arrViewRegionRelaObjLstT;
  }
  try {
    const arrViewRegionRelaExObjLst = await ViewRegionRela_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewRegionRelaEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrViewRegionRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewRegionRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrViewRegionRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstsessionStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewRegionRelaObjLstCache: Array<clsViewRegionRelaEN> = JSON.parse(strTempObjLst);
    return arrViewRegionRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewRegionRela_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsViewRegionRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsViewRegionRelaWApi.ViewRegionRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsViewRegionRelaWApi.ViewRegionRela_GetObjLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrViewRegionRelaObjLstCache;
  switch (clsViewRegionRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstsessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstlocalStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstClientCache(strCmPrjId);
      break;
    default:
      arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstClientCache(strCmPrjId);
      break;
  }
  return arrViewRegionRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewRegionRela_GetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewRegionRelaObjLstCache;
  switch (clsViewRegionRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstsessionStoragePureCache(
        strCmPrjId,
      );
      break;
    case '03': //localStorage
      arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstlocalStoragePureCache(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrViewRegionRelaObjLstCache = null;
      break;
    default:
      arrViewRegionRelaObjLstCache = null;
      break;
  }
  return arrViewRegionRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewRegionRela_GetSubObjLstCache(
  objViewRegionRelaCond: ConditionCollection,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  let arrViewRegionRelaSel = arrViewRegionRelaObjLstCache;
  if (objViewRegionRelaCond.GetConditions().length == 0) return arrViewRegionRelaSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objViewRegionRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionRelaSel = arrViewRegionRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewRegionRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewRegionRelaCond),
      viewRegionRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function ViewRegionRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsViewRegionRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
          viewRegionRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
    const arrViewRegionRelaSel = arrViewRegionRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrViewRegionRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewRegionRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
          viewRegionRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewRegionRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
          viewRegionRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewRegionRelaEN>();
  const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  if (arrViewRegionRelaObjLstCache.length == 0) return arrViewRegionRelaObjLstCache;
  let arrViewRegionRelaSel = arrViewRegionRelaObjLstCache;
  const objViewRegionRelaCond = objPagerPara.conditionCollection;
  if (objViewRegionRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsViewRegionRelaEN>();
  }
  //console.log("clsViewRegionRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objViewRegionRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionRelaSel = arrViewRegionRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewRegionRelaSel.length == 0) return arrViewRegionRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewRegionRelaSel = arrViewRegionRelaSel.sort(
        ViewRegionRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewRegionRelaSel = arrViewRegionRelaSel.sort(objPagerPara.sortFun);
    }
    arrViewRegionRelaSel = arrViewRegionRelaSel.slice(intStart, intEnd);
    return arrViewRegionRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegionRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewRegionRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRegionRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewRegionRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
          viewRegionRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegionRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_DelViewRegionRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewRegionRelasAsync';
  const strAction = 'DelViewRegionRelas';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
): Promise<Array<clsViewRegionRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrViewRegionRelaObjLst = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsViewRegionRelaENEx>();
  const arrViewRegionRelaExObjLst = arrViewRegionRelaObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${strCmPrjId}`;
    if (viewRegionRelaCache[cacheKey]) {
      const oldObj = viewRegionRelaCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ViewRegionRela_CopyToEx(obj);
      arrNewObj.push(newObj);
      viewRegionRelaCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ViewRegionRela_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewRegionRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrViewRegionRelaExObjLst) {
      await ViewRegionRela_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${strCmPrjId}`;
      viewRegionRelaCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrViewRegionRelaExObjLst.length == 0) return arrViewRegionRelaExObjLst;
  let arrViewRegionRelaSel: Array<clsViewRegionRelaENEx> = arrViewRegionRelaExObjLst;
  const objViewRegionRelaCond = objPagerPara.conditionCollection;
  if (objViewRegionRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrViewRegionRelaExObjLst;
  }
  try {
    for (const objCondition of objViewRegionRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionRelaSel = arrViewRegionRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewRegionRelaSel.length == 0) return arrViewRegionRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrViewRegionRelaSel = arrViewRegionRelaSel.sort(
        ViewRegionRela_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewRegionRelaSel = arrViewRegionRelaSel.sort(objPagerPara.sortFun);
    }
    arrViewRegionRelaSel = arrViewRegionRelaSel.slice(intStart, intEnd);
    return arrViewRegionRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegionRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionRelaENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objViewRegionRelaENS:源对象
 * @returns 目标对象=>clsViewRegionRelaEN:objViewRegionRelaENT
 **/
export function ViewRegionRela_CopyToEx(
  objViewRegionRelaENS: clsViewRegionRelaEN,
): clsViewRegionRelaENEx {
  const strThisFuncName = ViewRegionRela_CopyToEx.name;
  const objViewRegionRelaENT = new clsViewRegionRelaENEx();
  try {
    ObjectAssign(objViewRegionRelaENT, objViewRegionRelaENS);
    return objViewRegionRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewRegionRelaENT;
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
export function ViewRegionRela_FuncMapByFldName(
  strFldName: string,
  objViewRegionRelaEx: clsViewRegionRelaENEx,
) {
  const strThisFuncName = ViewRegionRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewRegionRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewRegionRelaENEx.con_ViewName:
      return ViewRegionRela_FuncMapViewName(objViewRegionRelaEx);
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
export function ViewRegionRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRegionRelaENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.regionTypeOrderNum - b.regionTypeOrderNum;
        };
      case clsViewRegionRelaENEx.con_RegionName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.regionName.localeCompare(b.regionName);
        };
      case clsViewRegionRelaENEx.con_RegionTypeSimName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          if (a.regionTypeSimName === null && b.regionTypeSimName === null) return 0;
          if (a.regionTypeSimName === null) return -1;
          if (b.regionTypeSimName === null) return 1;
          return a.regionTypeSimName.localeCompare(b.regionTypeSimName);
        };
      case clsViewRegionRelaENEx.con_ContainerTypeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          if (a.containerTypeName === null && b.containerTypeName === null) return 0;
          if (a.containerTypeName === null) return -1;
          if (b.containerTypeName === null) return 1;
          return a.containerTypeName.localeCompare(b.containerTypeName);
        };
      case clsViewRegionRelaENEx.con_PageDispModeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          if (a.pageDispModeName === null && b.pageDispModeName === null) return 0;
          if (a.pageDispModeName === null) return -1;
          if (b.pageDispModeName === null) return 1;
          return a.pageDispModeName.localeCompare(b.pageDispModeName);
        };
      case clsViewRegionRelaENEx.con_FldNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.fldNum - b.fldNum;
        };
      case clsViewRegionRelaENEx.con_ViewName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.viewName.localeCompare(b.viewName);
        };
      case clsViewRegionRelaENEx.con_RegionTabName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.regionTabName.localeCompare(b.regionTabName);
        };
      case clsViewRegionRelaENEx.con_ClsName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.clsName.localeCompare(b.clsName);
        };
      case clsViewRegionRelaENEx.con_FileName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.fileName.localeCompare(b.fileName);
        };
      case clsViewRegionRelaENEx.con_RegionTypeId:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsViewRegionRelaENEx.con_CmPrjId:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        return ViewRegionRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewRegionRelaENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.regionTypeOrderNum - a.regionTypeOrderNum;
        };
      case clsViewRegionRelaENEx.con_RegionName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.regionName.localeCompare(a.regionName);
        };
      case clsViewRegionRelaENEx.con_RegionTypeSimName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          if (a.regionTypeSimName === null && b.regionTypeSimName === null) return 0;
          if (a.regionTypeSimName === null) return 1;
          if (b.regionTypeSimName === null) return -1;
          return b.regionTypeSimName.localeCompare(a.regionTypeSimName);
        };
      case clsViewRegionRelaENEx.con_ContainerTypeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          if (a.containerTypeName === null && b.containerTypeName === null) return 0;
          if (a.containerTypeName === null) return 1;
          if (b.containerTypeName === null) return -1;
          return b.containerTypeName.localeCompare(a.containerTypeName);
        };
      case clsViewRegionRelaENEx.con_PageDispModeName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          if (a.pageDispModeName === null && b.pageDispModeName === null) return 0;
          if (a.pageDispModeName === null) return 1;
          if (b.pageDispModeName === null) return -1;
          return b.pageDispModeName.localeCompare(a.pageDispModeName);
        };
      case clsViewRegionRelaENEx.con_FldNum:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.fldNum - a.fldNum;
        };
      case clsViewRegionRelaENEx.con_ViewName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.viewName.localeCompare(a.viewName);
        };
      case clsViewRegionRelaENEx.con_RegionTabName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.regionTabName.localeCompare(a.regionTabName);
        };
      case clsViewRegionRelaENEx.con_ClsName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.clsName.localeCompare(a.clsName);
        };
      case clsViewRegionRelaENEx.con_FileName:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.fileName.localeCompare(a.fileName);
        };
      case clsViewRegionRelaENEx.con_RegionTypeId:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsViewRegionRelaENEx.con_CmPrjId:
        return (a: clsViewRegionRelaENEx, b: clsViewRegionRelaENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        return ViewRegionRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionRelaS:源对象
 **/
export async function ViewRegionRela_FuncMapViewName(objViewRegionRela: clsViewRegionRelaENEx) {
  const strThisFuncName = ViewRegionRela_FuncMapViewName.name;
  try {
    if (IsNullOrEmpty(objViewRegionRela.viewName) == true) {
      const ViewInfoViewId = objViewRegionRela.viewId;
      if (IsNullOrEmpty(objViewRegionRela.prjId) == true) {
        const strMsg = `函数映射[ViewName]数据出错,prjId不能为空!(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const ViewInfoViewName = await ViewInfo_func(
        clsViewInfoEN.con_ViewId,
        clsViewInfoEN.con_ViewName,
        ViewInfoViewId,
        objViewRegionRela.prjId,
      );
      objViewRegionRela.viewName = ViewInfoViewName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001306)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_DelViewRegionRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewRegionRelasByCondAsync';
  const strAction = 'DelViewRegionRelasByCond';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
 * @param objViewRegionRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewRegionRela_AddNewRecordAsync(
  objViewRegionRelaEN: clsViewRegionRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewRegionRelaEN);
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionRelaEN, config);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_AddNewObjSave(
  objViewRegionRelaEN: clsViewRegionRelaEN,
  strCmPrjId: string,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewRegionRela_CheckPropertyNew(objViewRegionRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewRegionRela_CheckUniCond4Add(objViewRegionRelaEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await ViewRegionRela_AddNewRecordAsync(objViewRegionRelaEN);
    if (returnBool == true) {
      ViewRegionRela_ReFreshCache(strCmPrjId);
    } else {
      const strInfo = `添加[界面区域关系(ViewRegionRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objViewRegionRelaEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ViewRegionRela_CheckUniCond4Add(
  objViewRegionRelaEN: clsViewRegionRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewRegionRela_GetUniCondStr(objViewRegionRelaEN);
  const bolIsExistCondition = await ViewRegionRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewRegionRela_CheckUniCond4Update(
  objViewRegionRelaEN: clsViewRegionRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewRegionRela_GetUniCondStr4Update(objViewRegionRelaEN);
  const bolIsExistCondition = await ViewRegionRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewRegionRela_UpdateObjSave(
  objViewRegionRelaEN: clsViewRegionRelaEN,
  strCmPrjId: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewRegionRelaEN.sfUpdFldSetStr = objViewRegionRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewRegionRelaEN.mId == 0 || objViewRegionRelaEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewRegionRela_CheckProperty4Update(objViewRegionRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewRegionRela_CheckUniCond4Update(objViewRegionRelaEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ViewRegionRela_UpdateRecordAsync(objViewRegionRelaEN);
    if (returnBool == true) {
      ViewRegionRela_ReFreshCache(strCmPrjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewRegionRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewRegionRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewRegionRela_AddNewRecordWithReturnKeyAsync(
  objViewRegionRelaEN: clsViewRegionRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionRelaEN, config);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
 * @param objViewRegionRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewRegionRela_UpdateRecordAsync(
  objViewRegionRelaEN: clsViewRegionRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewRegionRelaEN.sfUpdFldSetStr === undefined ||
    objViewRegionRelaEN.sfUpdFldSetStr === null ||
    objViewRegionRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionRelaEN, config);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
 * @param objViewRegionRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewRegionRela_EditRecordExAsync(
  objViewRegionRelaEN: clsViewRegionRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewRegionRelaEN.sfUpdFldSetStr === undefined ||
    objViewRegionRelaEN.sfUpdFldSetStr === null ||
    objViewRegionRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionRelaEN, config);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
 * @param objViewRegionRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewRegionRela_UpdateWithConditionAsync(
  objViewRegionRelaEN: clsViewRegionRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewRegionRelaEN.sfUpdFldSetStr === undefined ||
    objViewRegionRelaEN.sfUpdFldSetStr === null ||
    objViewRegionRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);
  objViewRegionRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionRelaEN, config);
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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_IsExistRecordCache(
  objViewRegionRelaCond: ConditionCollection,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  if (arrViewRegionRelaObjLstCache == null) return false;
  let arrViewRegionRelaSel = arrViewRegionRelaObjLstCache;
  if (objViewRegionRelaCond.GetConditions().length == 0)
    return arrViewRegionRelaSel.length > 0 ? true : false;
  try {
    for (const objCondition of objViewRegionRelaCond.GetConditions()) {
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
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewRegionRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewRegionRelaCond),
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_IsExistCache(lngmId: number, strCmPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  if (arrViewRegionRelaObjLstCache == null) return false;
  try {
    const arrViewRegionRelaSel = arrViewRegionRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrViewRegionRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
 * @param objViewRegionRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewRegionRela_GetRecCountByCondCache(
  objViewRegionRelaCond: ConditionCollection,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewRegionRelaObjLstCache = await ViewRegionRela_GetObjLstCache(strCmPrjId);
  if (arrViewRegionRelaObjLstCache == null) return 0;
  let arrViewRegionRelaSel = arrViewRegionRelaObjLstCache;
  if (objViewRegionRelaCond.GetConditions().length == 0) return arrViewRegionRelaSel.length;
  try {
    for (const objCondition of objViewRegionRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionRelaSel = arrViewRegionRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewRegionRelaSel = arrViewRegionRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewRegionRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewRegionRelaCond),
      viewRegionRela_ConstructorName,
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
export async function ViewRegionRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewRegionRela_Controller, strAction);

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
        viewRegionRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegionRela_ConstructorName,
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
export function ViewRegionRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewRegionRela_ReFreshCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewRegionRelaWApi.clsViewRegionRelaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewRegionRelaWApi.clsViewRegionRelaWApi.ReFreshCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, strCmPrjId);
  switch (clsViewRegionRelaEN.CacheModeId) {
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
  clsViewRegionRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewRegionRela_ReFreshThisCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewRegionRelaWApi.ViewRegionRela_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewRegionRelaWApi.ViewRegionRela_ReFreshThisCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsViewRegionRelaEN._CurrTabName, strCmPrjId);
    switch (clsViewRegionRelaEN.CacheModeId) {
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
    clsViewRegionRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ViewRegionRela_GetLastRefreshTime(): string {
  if (clsViewRegionRelaEN._RefreshTimeLst.length == 0) return '';
  return clsViewRegionRelaEN._RefreshTimeLst[clsViewRegionRelaEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewRegionRela_CheckPropertyNew(pobjViewRegionRelaEN: clsViewRegionRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewRegionRelaEN.regionId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域Id]不能为空(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.viewId) === true ||
    pobjViewRegionRelaEN.viewId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[界面Id]不能为空(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjViewRegionRelaEN.isDisp ||
    (pobjViewRegionRelaEN.isDisp != null && pobjViewRegionRelaEN.isDisp.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否显示]不能为空(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.prjId) === true ||
    pobjViewRegionRelaEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.regionId) == false &&
    GetStrLen(pobjViewRegionRelaEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.regionId}(clsViewRegionRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.viewId) == false &&
    GetStrLen(pobjViewRegionRelaEN.viewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面Id(viewId)]的长度不能超过8(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.viewId}(clsViewRegionRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.prjId) == false &&
    GetStrLen(pobjViewRegionRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.prjId}(clsViewRegionRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updUser) == false &&
    GetStrLen(pobjViewRegionRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.updUser}(clsViewRegionRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updDate) == false &&
    GetStrLen(pobjViewRegionRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.updDate}(clsViewRegionRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.memo) == false &&
    GetStrLen(pobjViewRegionRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.memo}(clsViewRegionRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewRegionRelaEN.mId &&
    undefined !== pobjViewRegionRelaEN.mId &&
    tzDataType.isNumber(pobjViewRegionRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjViewRegionRelaEN.mId}], 非法,应该为数值型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.regionId) == false &&
    undefined !== pobjViewRegionRelaEN.regionId &&
    tzDataType.isString(pobjViewRegionRelaEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjViewRegionRelaEN.regionId}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.viewId) == false &&
    undefined !== pobjViewRegionRelaEN.viewId &&
    tzDataType.isString(pobjViewRegionRelaEN.viewId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面Id(viewId)]的值:[${pobjViewRegionRelaEN.viewId}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewRegionRelaEN.inUse &&
    undefined !== pobjViewRegionRelaEN.inUse &&
    tzDataType.isBoolean(pobjViewRegionRelaEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjViewRegionRelaEN.inUse}], 非法,应该为布尔型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewRegionRelaEN.isDisp &&
    undefined !== pobjViewRegionRelaEN.isDisp &&
    tzDataType.isBoolean(pobjViewRegionRelaEN.isDisp) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否显示(isDisp)]的值:[${pobjViewRegionRelaEN.isDisp}], 非法,应该为布尔型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.prjId) == false &&
    undefined !== pobjViewRegionRelaEN.prjId &&
    tzDataType.isString(pobjViewRegionRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjViewRegionRelaEN.prjId}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updUser) == false &&
    undefined !== pobjViewRegionRelaEN.updUser &&
    tzDataType.isString(pobjViewRegionRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjViewRegionRelaEN.updUser}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updDate) == false &&
    undefined !== pobjViewRegionRelaEN.updDate &&
    tzDataType.isString(pobjViewRegionRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjViewRegionRelaEN.updDate}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.memo) == false &&
    undefined !== pobjViewRegionRelaEN.memo &&
    tzDataType.isString(pobjViewRegionRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjViewRegionRelaEN.memo}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.regionId) == false &&
    pobjViewRegionRelaEN.regionId != '[nuull]' &&
    GetStrLen(pobjViewRegionRelaEN.regionId) != 10
  ) {
    throw '(errid:Watl000415)字段[区域Id]作为外键字段,长度应该为10(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.viewId) == false &&
    pobjViewRegionRelaEN.viewId != '[nuull]' &&
    GetStrLen(pobjViewRegionRelaEN.viewId) != 8
  ) {
    throw '(errid:Watl000415)字段[界面Id]作为外键字段,长度应该为8(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewRegionRela_CheckProperty4Update(pobjViewRegionRelaEN: clsViewRegionRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.regionId) == false &&
    GetStrLen(pobjViewRegionRelaEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.regionId}(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.viewId) == false &&
    GetStrLen(pobjViewRegionRelaEN.viewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面Id(viewId)]的长度不能超过8(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.viewId}(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.prjId) == false &&
    GetStrLen(pobjViewRegionRelaEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.prjId}(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updUser) == false &&
    GetStrLen(pobjViewRegionRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.updUser}(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updDate) == false &&
    GetStrLen(pobjViewRegionRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.updDate}(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.memo) == false &&
    GetStrLen(pobjViewRegionRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面区域关系(ViewRegionRela))!值:${pobjViewRegionRelaEN.memo}(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewRegionRelaEN.mId &&
    undefined !== pobjViewRegionRelaEN.mId &&
    tzDataType.isNumber(pobjViewRegionRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjViewRegionRelaEN.mId}], 非法,应该为数值型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.regionId) == false &&
    undefined !== pobjViewRegionRelaEN.regionId &&
    tzDataType.isString(pobjViewRegionRelaEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjViewRegionRelaEN.regionId}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.viewId) == false &&
    undefined !== pobjViewRegionRelaEN.viewId &&
    tzDataType.isString(pobjViewRegionRelaEN.viewId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面Id(viewId)]的值:[${pobjViewRegionRelaEN.viewId}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewRegionRelaEN.inUse &&
    undefined !== pobjViewRegionRelaEN.inUse &&
    tzDataType.isBoolean(pobjViewRegionRelaEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjViewRegionRelaEN.inUse}], 非法,应该为布尔型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewRegionRelaEN.isDisp &&
    undefined !== pobjViewRegionRelaEN.isDisp &&
    tzDataType.isBoolean(pobjViewRegionRelaEN.isDisp) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否显示(isDisp)]的值:[${pobjViewRegionRelaEN.isDisp}], 非法,应该为布尔型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.prjId) == false &&
    undefined !== pobjViewRegionRelaEN.prjId &&
    tzDataType.isString(pobjViewRegionRelaEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjViewRegionRelaEN.prjId}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updUser) == false &&
    undefined !== pobjViewRegionRelaEN.updUser &&
    tzDataType.isString(pobjViewRegionRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjViewRegionRelaEN.updUser}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.updDate) == false &&
    undefined !== pobjViewRegionRelaEN.updDate &&
    tzDataType.isString(pobjViewRegionRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjViewRegionRelaEN.updDate}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.memo) == false &&
    undefined !== pobjViewRegionRelaEN.memo &&
    tzDataType.isString(pobjViewRegionRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjViewRegionRelaEN.memo}], 非法,应该为字符型(In 界面区域关系(ViewRegionRela))!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjViewRegionRelaEN.mId ||
    (pobjViewRegionRelaEN.mId != null && pobjViewRegionRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 界面区域关系)!(clsViewRegionRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.regionId) == false &&
    pobjViewRegionRelaEN.regionId != '[nuull]' &&
    GetStrLen(pobjViewRegionRelaEN.regionId) != 10
  ) {
    throw '(errid:Watl000418)字段[区域Id]作为外键字段,长度应该为10(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewRegionRelaEN.viewId) == false &&
    pobjViewRegionRelaEN.viewId != '[nuull]' &&
    GetStrLen(pobjViewRegionRelaEN.viewId) != 8
  ) {
    throw '(errid:Watl000418)字段[界面Id]作为外键字段,长度应该为8(In 界面区域关系)!(clsViewRegionRelaBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewRegionRela_GetJSONStrByObj(pobjViewRegionRelaEN: clsViewRegionRelaEN): string {
  pobjViewRegionRelaEN.sfUpdFldSetStr = pobjViewRegionRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewRegionRelaEN);
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
export function ViewRegionRela_GetObjLstByJSONStr(strJSON: string): Array<clsViewRegionRelaEN> {
  let arrViewRegionRelaObjLst = new Array<clsViewRegionRelaEN>();
  if (strJSON === '') {
    return arrViewRegionRelaObjLst;
  }
  try {
    arrViewRegionRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewRegionRelaObjLst;
  }
  return arrViewRegionRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewRegionRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewRegionRela_GetObjLstByJSONObjLst(
  arrViewRegionRelaObjLstS: Array<clsViewRegionRelaEN>,
): Array<clsViewRegionRelaEN> {
  const arrViewRegionRelaObjLst = new Array<clsViewRegionRelaEN>();
  for (const objInFor of arrViewRegionRelaObjLstS) {
    const obj1 = ViewRegionRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewRegionRelaObjLst.push(obj1);
  }
  return arrViewRegionRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewRegionRela_GetObjByJSONStr(strJSON: string): clsViewRegionRelaEN {
  let pobjViewRegionRelaEN = new clsViewRegionRelaEN();
  if (strJSON === '') {
    return pobjViewRegionRelaEN;
  }
  try {
    pobjViewRegionRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewRegionRelaEN;
  }
  return pobjViewRegionRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewRegionRela_GetCombineCondition(
  objViewRegionRelaCond: clsViewRegionRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objViewRegionRelaCond.dicFldComparisonOp[clsViewRegionRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewRegionRelaEN.con_mId,
      objViewRegionRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objViewRegionRelaCond.dicFldComparisonOp[clsViewRegionRelaEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionRelaEN.con_RegionId,
      objViewRegionRelaCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_ViewId,
    ) == true
  ) {
    const strComparisonOpViewId: string =
      objViewRegionRelaCond.dicFldComparisonOp[clsViewRegionRelaEN.con_ViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionRelaEN.con_ViewId,
      objViewRegionRelaCond.viewId,
      strComparisonOpViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_InUse,
    ) == true
  ) {
    if (objViewRegionRelaCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewRegionRelaEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewRegionRelaEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_IsDisp,
    ) == true
  ) {
    if (objViewRegionRelaCond.isDisp == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewRegionRelaEN.con_IsDisp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewRegionRelaEN.con_IsDisp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewRegionRelaCond.dicFldComparisonOp[clsViewRegionRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionRelaEN.con_PrjId,
      objViewRegionRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewRegionRelaCond.dicFldComparisonOp[clsViewRegionRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionRelaEN.con_UpdUser,
      objViewRegionRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewRegionRelaCond.dicFldComparisonOp[clsViewRegionRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionRelaEN.con_UpdDate,
      objViewRegionRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionRelaCond.dicFldComparisonOp,
      clsViewRegionRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewRegionRelaCond.dicFldComparisonOp[clsViewRegionRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionRelaEN.con_Memo,
      objViewRegionRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewRegionRela(界面区域关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewRegionRela_GetUniCondStr(objViewRegionRelaEN: clsViewRegionRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewId = '{0}'", objViewRegionRelaEN.viewId);
  strWhereCond += Format(" and RegionId = '{0}'", objViewRegionRelaEN.regionId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewRegionRela(界面区域关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewRegionRela_GetUniCondStr4Update(
  objViewRegionRelaEN: clsViewRegionRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objViewRegionRelaEN.mId);
  strWhereCond += Format(" and ViewId = '{0}'", objViewRegionRelaEN.viewId);
  strWhereCond += Format(" and RegionId = '{0}'", objViewRegionRelaEN.regionId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewRegionRelaENS:源对象
 * @param objViewRegionRelaENT:目标对象
 */
export function ViewRegionRela_GetObjFromJsonObj(
  objViewRegionRelaENS: clsViewRegionRelaEN,
): clsViewRegionRelaEN {
  const objViewRegionRelaENT: clsViewRegionRelaEN = new clsViewRegionRelaEN();
  ObjectAssign(objViewRegionRelaENT, objViewRegionRelaENS);
  return objViewRegionRelaENT;
}
