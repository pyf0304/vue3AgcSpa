/**
 * 类名:clsvTabFeatureFlds_SimWApi
 * 表名:vTabFeatureFlds_Sim(00050611)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v表功能字段_Sim(vTabFeatureFlds_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvTabFeatureFlds_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeatureFlds_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vTabFeatureFlds_Sim_Controller = 'vTabFeatureFlds_SimApi';
export const vTabFeatureFlds_Sim_ConstructorName = 'vTabFeatureFlds_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vTabFeatureFlds_Sim_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvTabFeatureFlds_SimEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvTabFeatureFlds_SimWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
      const objvTabFeatureFlds_Sim = vTabFeatureFlds_Sim_GetObjFromJsonObj(returnObj);
      return objvTabFeatureFlds_Sim;
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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvTabFeatureFlds_SimWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objvTabFeatureFlds_Sim: clsvTabFeatureFlds_SimEN;
    if (arrvTabFeatureFlds_SimSel.length > 0) {
      objvTabFeatureFlds_Sim = arrvTabFeatureFlds_SimSel[0];
      return objvTabFeatureFlds_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvTabFeatureFlds_SimConst = await vTabFeatureFlds_Sim_GetObjBymIdAsync(lngmId);
        if (objvTabFeatureFlds_SimConst != null) {
          vTabFeatureFlds_Sim_ReFreshThisCache(strPrjId);
          return objvTabFeatureFlds_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvTabFeatureFlds_SimWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvTabFeatureFlds_SimCache: clsvTabFeatureFlds_SimEN = JSON.parse(strTempObj);
    return objvTabFeatureFlds_SimCache;
  }
  try {
    const objvTabFeatureFlds_Sim = await vTabFeatureFlds_Sim_GetObjBymIdAsync(lngmId);
    if (objvTabFeatureFlds_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvTabFeatureFlds_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvTabFeatureFlds_Sim;
    }
    return objvTabFeatureFlds_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vTabFeatureFlds_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vTabFeatureFlds_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvTabFeatureFlds_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvTabFeatureFlds_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvTabFeatureFlds_SimEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvTabFeatureFlds_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvTabFeatureFlds_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvTabFeatureFlds_Sim = await vTabFeatureFlds_Sim_GetObjBymIdCache(
    lngmId,
    strPrjIdClassfy,
  );
  if (objvTabFeatureFlds_Sim == null) return '';
  if (objvTabFeatureFlds_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvTabFeatureFlds_Sim.GetFldValue(strOutFldName).toString();
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
export function vTabFeatureFlds_Sim_SortFunDefa(
  a: clsvTabFeatureFlds_SimEN,
  b: clsvTabFeatureFlds_SimEN,
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
export function vTabFeatureFlds_Sim_SortFunDefa2Fld(
  a: clsvTabFeatureFlds_SimEN,
  b: clsvTabFeatureFlds_SimEN,
): number {
  if (a.tabFeatureId == b.tabFeatureId) return a.fldId.localeCompare(b.fldId);
  else return a.tabFeatureId.localeCompare(b.tabFeatureId);
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
export function vTabFeatureFlds_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvTabFeatureFlds_SimEN.con_mId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return a.mId - b.mId;
        };
      case clsvTabFeatureFlds_SimEN.con_TabFeatureId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return a.tabFeatureId.localeCompare(b.tabFeatureId);
        };
      case clsvTabFeatureFlds_SimEN.con_FldId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsvTabFeatureFlds_SimEN.con_IsCurrTab:
        return (a: clsvTabFeatureFlds_SimEN) => {
          if (a.isCurrTab == true) return 1;
          else return -1;
        };
      case clsvTabFeatureFlds_SimEN.con_FieldTypeId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsvTabFeatureFlds_SimEN.con_ValueGivingModeId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return a.valueGivingModeId.localeCompare(b.valueGivingModeId);
        };
      case clsvTabFeatureFlds_SimEN.con_DefaultValue:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsvTabFeatureFlds_SimEN.con_OrderNum:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvTabFeatureFlds_SimEN.con_InUse:
        return (a: clsvTabFeatureFlds_SimEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvTabFeatureFlds_SimEN.con_PrjId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vTabFeatureFlds_Sim]中不存在!(in ${vTabFeatureFlds_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvTabFeatureFlds_SimEN.con_mId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return b.mId - a.mId;
        };
      case clsvTabFeatureFlds_SimEN.con_TabFeatureId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return b.tabFeatureId.localeCompare(a.tabFeatureId);
        };
      case clsvTabFeatureFlds_SimEN.con_FldId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsvTabFeatureFlds_SimEN.con_IsCurrTab:
        return (b: clsvTabFeatureFlds_SimEN) => {
          if (b.isCurrTab == true) return 1;
          else return -1;
        };
      case clsvTabFeatureFlds_SimEN.con_FieldTypeId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsvTabFeatureFlds_SimEN.con_ValueGivingModeId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return b.valueGivingModeId.localeCompare(a.valueGivingModeId);
        };
      case clsvTabFeatureFlds_SimEN.con_DefaultValue:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsvTabFeatureFlds_SimEN.con_OrderNum:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvTabFeatureFlds_SimEN.con_InUse:
        return (b: clsvTabFeatureFlds_SimEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvTabFeatureFlds_SimEN.con_PrjId:
        return (a: clsvTabFeatureFlds_SimEN, b: clsvTabFeatureFlds_SimEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vTabFeatureFlds_Sim]中不存在!(in ${vTabFeatureFlds_Sim_ConstructorName}.${strThisFuncName})`;
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
export async function vTabFeatureFlds_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvTabFeatureFlds_SimEN.con_mId:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.mId === value;
      };
    case clsvTabFeatureFlds_SimEN.con_TabFeatureId:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.tabFeatureId === value;
      };
    case clsvTabFeatureFlds_SimEN.con_FldId:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.fldId === value;
      };
    case clsvTabFeatureFlds_SimEN.con_IsCurrTab:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.isCurrTab === value;
      };
    case clsvTabFeatureFlds_SimEN.con_FieldTypeId:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.fieldTypeId === value;
      };
    case clsvTabFeatureFlds_SimEN.con_ValueGivingModeId:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.valueGivingModeId === value;
      };
    case clsvTabFeatureFlds_SimEN.con_DefaultValue:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.defaultValue === value;
      };
    case clsvTabFeatureFlds_SimEN.con_OrderNum:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.orderNum === value;
      };
    case clsvTabFeatureFlds_SimEN.con_InUse:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.inUse === value;
      };
    case clsvTabFeatureFlds_SimEN.con_PrjId:
      return (obj: clsvTabFeatureFlds_SimEN) => {
        return obj.prjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vTabFeatureFlds_Sim]中不存在!(in ${vTabFeatureFlds_Sim_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vTabFeatureFlds_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvTabFeatureFlds_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvTabFeatureFlds_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvTabFeatureFlds_SimEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvTabFeatureFlds_Sim = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvTabFeatureFlds_Sim == null) return [];
  let arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvTabFeatureFlds_SimSel.length == 0) return [];
  return arrvTabFeatureFlds_SimSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vTabFeatureFlds_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvTabFeatureFlds_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
      const objvTabFeatureFlds_Sim = vTabFeatureFlds_Sim_GetObjFromJsonObj(returnObj);
      return objvTabFeatureFlds_Sim;
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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabFeatureFlds_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeatureFlds_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvTabFeatureFlds_SimExObjLstCache: Array<clsvTabFeatureFlds_SimEN> =
      CacheHelper.Get(strKey);
    const arrvTabFeatureFlds_SimObjLstT = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
      arrvTabFeatureFlds_SimExObjLstCache,
    );
    return arrvTabFeatureFlds_SimObjLstT;
  }
  try {
    const arrvTabFeatureFlds_SimExObjLst = await vTabFeatureFlds_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvTabFeatureFlds_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabFeatureFlds_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeatureFlds_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabFeatureFlds_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvTabFeatureFlds_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeatureFlds_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabFeatureFlds_SimExObjLstCache: Array<clsvTabFeatureFlds_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvTabFeatureFlds_SimObjLstT = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
      arrvTabFeatureFlds_SimExObjLstCache,
    );
    return arrvTabFeatureFlds_SimObjLstT;
  }
  try {
    const arrvTabFeatureFlds_SimExObjLst = await vTabFeatureFlds_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvTabFeatureFlds_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvTabFeatureFlds_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabFeatureFlds_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeatureFlds_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabFeatureFlds_SimObjLstCache: Array<clsvTabFeatureFlds_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvTabFeatureFlds_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vTabFeatureFlds_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvTabFeatureFlds_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
          vTabFeatureFlds_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabFeatureFlds_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvTabFeatureFlds_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvTabFeatureFlds_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeatureFlds_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabFeatureFlds_SimExObjLstCache: Array<clsvTabFeatureFlds_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvTabFeatureFlds_SimObjLstT = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
      arrvTabFeatureFlds_SimExObjLstCache,
    );
    return arrvTabFeatureFlds_SimObjLstT;
  }
  try {
    const arrvTabFeatureFlds_SimExObjLst = await vTabFeatureFlds_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvTabFeatureFlds_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvTabFeatureFlds_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabFeatureFlds_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeatureFlds_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabFeatureFlds_SimObjLstCache: Array<clsvTabFeatureFlds_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvTabFeatureFlds_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeatureFlds_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvTabFeatureFlds_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvTabFeatureFlds_SimWApi.vTabFeatureFlds_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvTabFeatureFlds_SimWApi.vTabFeatureFlds_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvTabFeatureFlds_SimObjLstCache;
  switch (clsvTabFeatureFlds_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstsessionStorage(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvTabFeatureFlds_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeatureFlds_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvTabFeatureFlds_SimObjLstCache;
  switch (clsvTabFeatureFlds_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabFeatureFlds_SimObjLstCache =
        await vTabFeatureFlds_Sim_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrvTabFeatureFlds_SimObjLstCache = null;
      break;
    default:
      arrvTabFeatureFlds_SimObjLstCache = null;
      break;
  }
  return arrvTabFeatureFlds_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vTabFeatureFlds_Sim_GetSubObjLstCache(
  objvTabFeatureFlds_SimCond: clsvTabFeatureFlds_SimEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  let arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimObjLstCache;
  if (
    objvTabFeatureFlds_SimCond.sfFldComparisonOp == null ||
    objvTabFeatureFlds_SimCond.sfFldComparisonOp == ''
  )
    return arrvTabFeatureFlds_SimSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvTabFeatureFlds_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvTabFeatureFlds_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvTabFeatureFlds_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabFeatureFlds_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvTabFeatureFlds_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvTabFeatureFlds_SimCond),
      vTabFeatureFlds_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTabFeatureFlds_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vTabFeatureFlds_Sim_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvTabFeatureFlds_SimEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
          vTabFeatureFlds_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
    const arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvTabFeatureFlds_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvTabFeatureFlds_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
          vTabFeatureFlds_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvTabFeatureFlds_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
          vTabFeatureFlds_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvTabFeatureFlds_SimEN>();
  const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  if (arrvTabFeatureFlds_SimObjLstCache.length == 0) return arrvTabFeatureFlds_SimObjLstCache;
  let arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvTabFeatureFlds_SimCond = new clsvTabFeatureFlds_SimEN();
  ObjectAssign(objvTabFeatureFlds_SimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvTabFeatureFlds_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabFeatureFlds_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvTabFeatureFlds_SimSel.length == 0) return arrvTabFeatureFlds_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.sort(
        vTabFeatureFlds_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.sort(objPagerPara.sortFun);
    }
    arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.slice(intStart, intEnd);
    return arrvTabFeatureFlds_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vTabFeatureFlds_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTabFeatureFlds_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vTabFeatureFlds_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvTabFeatureFlds_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvTabFeatureFlds_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
          vTabFeatureFlds_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_IsExistRecordCache(
  objvTabFeatureFlds_SimCond: clsvTabFeatureFlds_SimEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  if (arrvTabFeatureFlds_SimObjLstCache == null) return false;
  let arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimObjLstCache;
  if (
    objvTabFeatureFlds_SimCond.sfFldComparisonOp == null ||
    objvTabFeatureFlds_SimCond.sfFldComparisonOp == ''
  )
    return arrvTabFeatureFlds_SimSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvTabFeatureFlds_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvTabFeatureFlds_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvTabFeatureFlds_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabFeatureFlds_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvTabFeatureFlds_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvTabFeatureFlds_SimCond),
      vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_IsExistCache(lngmId: number, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  if (arrvTabFeatureFlds_SimObjLstCache == null) return false;
  try {
    const arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrvTabFeatureFlds_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
export async function vTabFeatureFlds_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vTabFeatureFlds_Sim_Controller, strAction);

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
        vTabFeatureFlds_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeatureFlds_Sim_ConstructorName,
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
 * @param objvTabFeatureFlds_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vTabFeatureFlds_Sim_GetRecCountByCondCache(
  objvTabFeatureFlds_SimCond: clsvTabFeatureFlds_SimEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvTabFeatureFlds_SimObjLstCache = await vTabFeatureFlds_Sim_GetObjLstCache(strPrjId);
  if (arrvTabFeatureFlds_SimObjLstCache == null) return 0;
  let arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimObjLstCache;
  if (
    objvTabFeatureFlds_SimCond.sfFldComparisonOp == null ||
    objvTabFeatureFlds_SimCond.sfFldComparisonOp == ''
  )
    return arrvTabFeatureFlds_SimSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvTabFeatureFlds_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvTabFeatureFlds_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvTabFeatureFlds_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabFeatureFlds_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabFeatureFlds_SimSel = arrvTabFeatureFlds_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvTabFeatureFlds_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvTabFeatureFlds_SimCond),
      vTabFeatureFlds_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vTabFeatureFlds_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vTabFeatureFlds_Sim_ReFreshThisCache(strPrjId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvTabFeatureFlds_SimEN._CurrTabName, strPrjId);
    switch (clsvTabFeatureFlds_SimEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vTabFeatureFlds_Sim_GetJSONStrByObj(
  pobjvTabFeatureFlds_SimEN: clsvTabFeatureFlds_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvTabFeatureFlds_SimEN);
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
export function vTabFeatureFlds_Sim_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvTabFeatureFlds_SimEN> {
  let arrvTabFeatureFlds_SimObjLst = new Array<clsvTabFeatureFlds_SimEN>();
  if (strJSON === '') {
    return arrvTabFeatureFlds_SimObjLst;
  }
  try {
    arrvTabFeatureFlds_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvTabFeatureFlds_SimObjLst;
  }
  return arrvTabFeatureFlds_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvTabFeatureFlds_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vTabFeatureFlds_Sim_GetObjLstByJSONObjLst(
  arrvTabFeatureFlds_SimObjLstS: Array<clsvTabFeatureFlds_SimEN>,
): Array<clsvTabFeatureFlds_SimEN> {
  const arrvTabFeatureFlds_SimObjLst = new Array<clsvTabFeatureFlds_SimEN>();
  for (const objInFor of arrvTabFeatureFlds_SimObjLstS) {
    const obj1 = vTabFeatureFlds_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvTabFeatureFlds_SimObjLst.push(obj1);
  }
  return arrvTabFeatureFlds_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vTabFeatureFlds_Sim_GetObjByJSONStr(strJSON: string): clsvTabFeatureFlds_SimEN {
  let pobjvTabFeatureFlds_SimEN = new clsvTabFeatureFlds_SimEN();
  if (strJSON === '') {
    return pobjvTabFeatureFlds_SimEN;
  }
  try {
    pobjvTabFeatureFlds_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvTabFeatureFlds_SimEN;
  }
  return pobjvTabFeatureFlds_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vTabFeatureFlds_Sim_GetCombineCondition(
  objvTabFeatureFlds_SimCond: clsvTabFeatureFlds_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvTabFeatureFlds_SimEN.con_mId,
      objvTabFeatureFlds_SimCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_TabFeatureId,
    ) == true
  ) {
    const strComparisonOpTabFeatureId: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_TabFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeatureFlds_SimEN.con_TabFeatureId,
      objvTabFeatureFlds_SimCond.tabFeatureId,
      strComparisonOpTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeatureFlds_SimEN.con_FldId,
      objvTabFeatureFlds_SimCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_IsCurrTab,
    ) == true
  ) {
    if (objvTabFeatureFlds_SimCond.isCurrTab == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeatureFlds_SimEN.con_IsCurrTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeatureFlds_SimEN.con_IsCurrTab);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeatureFlds_SimEN.con_FieldTypeId,
      objvTabFeatureFlds_SimCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_ValueGivingModeId,
    ) == true
  ) {
    const strComparisonOpValueGivingModeId: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_ValueGivingModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeatureFlds_SimEN.con_ValueGivingModeId,
      objvTabFeatureFlds_SimCond.valueGivingModeId,
      strComparisonOpValueGivingModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_DefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeatureFlds_SimEN.con_DefaultValue,
      objvTabFeatureFlds_SimCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvTabFeatureFlds_SimEN.con_OrderNum,
      objvTabFeatureFlds_SimCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_InUse,
    ) == true
  ) {
    if (objvTabFeatureFlds_SimCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeatureFlds_SimEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeatureFlds_SimEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeatureFlds_SimCond.dicFldComparisonOp,
      clsvTabFeatureFlds_SimEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvTabFeatureFlds_SimCond.dicFldComparisonOp[clsvTabFeatureFlds_SimEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeatureFlds_SimEN.con_PrjId,
      objvTabFeatureFlds_SimCond.prjId,
      strComparisonOpPrjId,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vTabFeatureFlds_Sim(v表功能字段_Sim),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabFeatureId: 表功能Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vTabFeatureFlds_Sim_GetUniCondStr(
  objvTabFeatureFlds_SimEN: clsvTabFeatureFlds_SimEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabFeatureId = '{0}'", objvTabFeatureFlds_SimEN.tabFeatureId);
  strWhereCond += Format(" and FldId = '{0}'", objvTabFeatureFlds_SimEN.fldId);
  strWhereCond += Format(" and FieldTypeId = '{0}'", objvTabFeatureFlds_SimEN.fieldTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vTabFeatureFlds_Sim(v表功能字段_Sim),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabFeatureId: 表功能Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vTabFeatureFlds_Sim_GetUniCondStr4Update(
  objvTabFeatureFlds_SimEN: clsvTabFeatureFlds_SimEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objvTabFeatureFlds_SimEN.mId);
  strWhereCond += Format(" and TabFeatureId = '{0}'", objvTabFeatureFlds_SimEN.tabFeatureId);
  strWhereCond += Format(" and FldId = '{0}'", objvTabFeatureFlds_SimEN.fldId);
  strWhereCond += Format(" and FieldTypeId = '{0}'", objvTabFeatureFlds_SimEN.fieldTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvTabFeatureFlds_SimENS:源对象
 * @param objvTabFeatureFlds_SimENT:目标对象
 */
export function vTabFeatureFlds_Sim_GetObjFromJsonObj(
  objvTabFeatureFlds_SimENS: clsvTabFeatureFlds_SimEN,
): clsvTabFeatureFlds_SimEN {
  const objvTabFeatureFlds_SimENT: clsvTabFeatureFlds_SimEN = new clsvTabFeatureFlds_SimEN();
  ObjectAssign(objvTabFeatureFlds_SimENT, objvTabFeatureFlds_SimENS);
  return objvTabFeatureFlds_SimENT;
}
