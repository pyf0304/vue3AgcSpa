/**
 * 类名:clsTabFunctionPropWApi
 * 表名:TabFunctionProp(00050522)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:50:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 表函数属性(TabFunctionProp)
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
import { tabFunctionPropCache, isFuncMapCache } from '@/views/PrjFunction/TabFunctionPropVueShare';
import { clsTabFunctionPropENEx } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropENEx';
import { clsTabFunctionPropEN } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { FunctionTemplate_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { vFunction4GeneCode_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { vFunction4Code_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';
import { clsvFunction4Code_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimEN';
import { MethodModifier_func } from '@/ts/L3ForWApi/PrjFunction/clsMethodModifierWApi';
import { clsMethodModifierEN } from '@/ts/L0Entity/PrjFunction/clsMethodModifierEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const tabFunctionProp_Controller = 'TabFunctionPropApi';
export const tabFunctionProp_ConstructorName = 'tabFunctionProp';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function TabFunctionProp_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsTabFunctionPropEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsTabFunctionPropWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
      const objTabFunctionProp = TabFunctionProp_GetObjFromJsonObj(returnObj);
      return objTabFunctionProp;
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsTabFunctionPropWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objTabFunctionPropCache: clsTabFunctionPropEN = JSON.parse(strTempObj);
    return objTabFunctionPropCache;
  }
  try {
    const objTabFunctionProp = await TabFunctionProp_GetObjBymIdAsync(lngmId);
    if (objTabFunctionProp != null) {
      localStorage.setItem(strKey, JSON.stringify(objTabFunctionProp));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objTabFunctionProp;
    }
    return objTabFunctionProp;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjBymIdCache(
  lngmId: number,
  strTabId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsTabFunctionPropWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
  try {
    const arrTabFunctionPropSel = arrTabFunctionPropObjLstCache.filter((x) => x.mId == lngmId);
    let objTabFunctionProp: clsTabFunctionPropEN;
    if (arrTabFunctionPropSel.length > 0) {
      objTabFunctionProp = arrTabFunctionPropSel[0];
      return objTabFunctionProp;
    } else {
      if (bolTryAsyncOnce == true) {
        const objTabFunctionPropConst = await TabFunctionProp_GetObjBymIdAsync(lngmId);
        if (objTabFunctionPropConst != null) {
          TabFunctionProp_ReFreshThisCache(strTabId);
          return objTabFunctionPropConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objTabFunctionProp:所给的对象
 * @returns 对象
 */
export async function TabFunctionProp_UpdateObjInLstCache(
  objTabFunctionProp: clsTabFunctionPropEN,
  strTabId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
    const obj = arrTabFunctionPropObjLstCache.find(
      (x) =>
        x.prjId == objTabFunctionProp.prjId &&
        x.tabId == objTabFunctionProp.tabId &&
        x.codeTypeId == objTabFunctionProp.codeTypeId &&
        x.funcId4GC == objTabFunctionProp.funcId4GC &&
        x.functionTemplateId == objTabFunctionProp.functionTemplateId,
    );
    if (obj != null) {
      objTabFunctionProp.mId = obj.mId;
      ObjectAssign(obj, objTabFunctionProp);
    } else {
      arrTabFunctionPropObjLstCache.push(objTabFunctionProp);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
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
export function TabFunctionProp_SortFunDefa(
  a: clsTabFunctionPropEN,
  b: clsTabFunctionPropEN,
): number {
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
export function TabFunctionProp_SortFunDefa2Fld(
  a: clsTabFunctionPropEN,
  b: clsTabFunctionPropEN,
): number {
  if (a.tabId == b.tabId) return a.functionTemplateId.localeCompare(b.functionTemplateId);
  else return a.tabId.localeCompare(b.tabId);
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
export function TabFunctionProp_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFunctionPropEN.con_mId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return a.mId - b.mId;
        };
      case clsTabFunctionPropEN.con_TabId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsTabFunctionPropEN.con_FunctionTemplateId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (a.functionTemplateId == null) return -1;
          if (b.functionTemplateId == null) return 1;
          return a.functionTemplateId.localeCompare(b.functionTemplateId);
        };
      case clsTabFunctionPropEN.con_CodeTypeId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsTabFunctionPropEN.con_FuncId4GC:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsTabFunctionPropEN.con_MethodModifierId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (a.methodModifierId == null) return -1;
          if (b.methodModifierId == null) return 1;
          return a.methodModifierId.localeCompare(b.methodModifierId);
        };
      case clsTabFunctionPropEN.con_IsForAllTemplate:
        return (a: clsTabFunctionPropEN) => {
          if (a.isForAllTemplate == true) return 1;
          else return -1;
        };
      case clsTabFunctionPropEN.con_OrderNum:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsTabFunctionPropEN.con_PrjId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsTabFunctionPropEN.con_UpdDate:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsTabFunctionPropEN.con_UpdUser:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsTabFunctionPropEN.con_Memo:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFunctionProp]中不存在!(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTabFunctionPropEN.con_mId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return b.mId - a.mId;
        };
      case clsTabFunctionPropEN.con_TabId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsTabFunctionPropEN.con_FunctionTemplateId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (b.functionTemplateId == null) return -1;
          if (a.functionTemplateId == null) return 1;
          return b.functionTemplateId.localeCompare(a.functionTemplateId);
        };
      case clsTabFunctionPropEN.con_CodeTypeId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsTabFunctionPropEN.con_FuncId4GC:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsTabFunctionPropEN.con_MethodModifierId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (b.methodModifierId == null) return -1;
          if (a.methodModifierId == null) return 1;
          return b.methodModifierId.localeCompare(a.methodModifierId);
        };
      case clsTabFunctionPropEN.con_IsForAllTemplate:
        return (b: clsTabFunctionPropEN) => {
          if (b.isForAllTemplate == true) return 1;
          else return -1;
        };
      case clsTabFunctionPropEN.con_OrderNum:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsTabFunctionPropEN.con_PrjId:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsTabFunctionPropEN.con_UpdDate:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsTabFunctionPropEN.con_UpdUser:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsTabFunctionPropEN.con_Memo:
        return (a: clsTabFunctionPropEN, b: clsTabFunctionPropEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFunctionProp]中不存在!(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
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
export async function TabFunctionProp_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTabFunctionPropEN.con_mId:
      return (obj: clsTabFunctionPropEN) => {
        return obj.mId === value;
      };
    case clsTabFunctionPropEN.con_TabId:
      return (obj: clsTabFunctionPropEN) => {
        return obj.tabId === value;
      };
    case clsTabFunctionPropEN.con_FunctionTemplateId:
      return (obj: clsTabFunctionPropEN) => {
        return obj.functionTemplateId === value;
      };
    case clsTabFunctionPropEN.con_CodeTypeId:
      return (obj: clsTabFunctionPropEN) => {
        return obj.codeTypeId === value;
      };
    case clsTabFunctionPropEN.con_FuncId4GC:
      return (obj: clsTabFunctionPropEN) => {
        return obj.funcId4GC === value;
      };
    case clsTabFunctionPropEN.con_MethodModifierId:
      return (obj: clsTabFunctionPropEN) => {
        return obj.methodModifierId === value;
      };
    case clsTabFunctionPropEN.con_IsForAllTemplate:
      return (obj: clsTabFunctionPropEN) => {
        return obj.isForAllTemplate === value;
      };
    case clsTabFunctionPropEN.con_OrderNum:
      return (obj: clsTabFunctionPropEN) => {
        return obj.orderNum === value;
      };
    case clsTabFunctionPropEN.con_PrjId:
      return (obj: clsTabFunctionPropEN) => {
        return obj.prjId === value;
      };
    case clsTabFunctionPropEN.con_UpdDate:
      return (obj: clsTabFunctionPropEN) => {
        return obj.updDate === value;
      };
    case clsTabFunctionPropEN.con_UpdUser:
      return (obj: clsTabFunctionPropEN) => {
        return obj.updUser === value;
      };
    case clsTabFunctionPropEN.con_Memo:
      return (obj: clsTabFunctionPropEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TabFunctionProp]中不存在!(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
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
 @param strTabId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function TabFunctionProp_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strTabIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strTabIdClassfy) == true) {
    const strMsg = Format('参数:[strTabIdClassfy]不能为空!(In clsTabFunctionPropWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabIdClassfy]的长度:[{0}]不正确!(clsTabFunctionPropWApi.func)',
      strTabIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsTabFunctionPropEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsTabFunctionPropEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsTabFunctionPropEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objTabFunctionProp = await TabFunctionProp_GetObjBymIdCache(lngmId, strTabIdClassfy);
  if (objTabFunctionProp == null) return '';
  if (objTabFunctionProp.GetFldValue(strOutFldName) == null) return '';
  return objTabFunctionProp.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strTabId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function TabFunctionProp_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strTabIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strTabIdClassfy) == true) {
    const strMsg = Format('参数:[strTabIdClassfy]不能为空!(In clsTabFunctionPropWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabIdClassfy]的长度:[{0}]不正确!(clsTabFunctionPropWApi.funcKey)',
      strTabIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsTabFunctionPropEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrTabFunctionProp = await TabFunctionProp_GetObjLstCache(strTabIdClassfy);
  if (arrTabFunctionProp == null) return [];
  let arrTabFunctionPropSel = arrTabFunctionProp;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrTabFunctionPropSel.length == 0) return [];
  return arrTabFunctionPropSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFunctionProp_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTabFunctionPropEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
      const objTabFunctionProp = TabFunctionProp_GetObjFromJsonObj(returnObj);
      return objTabFunctionProp;
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstClientCache(strTabId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTabFunctionPropEN.WhereFormat) == false) {
    strWhereCond = Format(clsTabFunctionPropEN.WhereFormat, strTabId);
  } else {
    strWhereCond = Format("TabId='{0}'", strTabId);
  }
  const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, strTabId);
  if (IsNullOrEmpty(clsTabFunctionPropEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabFunctionPropEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrTabFunctionPropExObjLstCache: Array<clsTabFunctionPropEN> = CacheHelper.Get(strKey);
    const arrTabFunctionPropObjLstT = TabFunctionProp_GetObjLstByJSONObjLst(
      arrTabFunctionPropExObjLstCache,
    );
    return arrTabFunctionPropObjLstT;
  }
  try {
    const arrTabFunctionPropExObjLst = await TabFunctionProp_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrTabFunctionPropExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabFunctionPropExObjLst.length,
    );
    console.log(strInfo);
    return arrTabFunctionPropExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstlocalStorage(strTabId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTabFunctionPropEN.WhereFormat) == false) {
    strWhereCond = Format(clsTabFunctionPropEN.WhereFormat, strTabId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsTabFunctionPropEN.con_TabId, strTabId);
  }
  const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, strTabId);
  if (IsNullOrEmpty(clsTabFunctionPropEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabFunctionPropEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTabFunctionPropExObjLstCache: Array<clsTabFunctionPropEN> = JSON.parse(strTempObjLst);
    const arrTabFunctionPropObjLstT = TabFunctionProp_GetObjLstByJSONObjLst(
      arrTabFunctionPropExObjLstCache,
    );
    return arrTabFunctionPropObjLstT;
  }
  try {
    const arrTabFunctionPropExObjLst = await TabFunctionProp_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrTabFunctionPropExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabFunctionPropExObjLst.length,
    );
    console.log(strInfo);
    return arrTabFunctionPropExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstlocalStoragePureCache(strTabId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTabFunctionPropObjLstCache: Array<clsTabFunctionPropEN> = JSON.parse(strTempObjLst);
    return arrTabFunctionPropObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function TabFunctionProp_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTabFunctionPropEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
          tabFunctionProp_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFunctionProp_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstsessionStorage(strTabId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTabFunctionPropEN.WhereFormat) == false) {
    strWhereCond = Format(clsTabFunctionPropEN.WhereFormat, strTabId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsTabFunctionPropEN.con_TabId, strTabId);
  }
  const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, strTabId);
  if (IsNullOrEmpty(clsTabFunctionPropEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabFunctionPropEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTabFunctionPropExObjLstCache: Array<clsTabFunctionPropEN> = JSON.parse(strTempObjLst);
    const arrTabFunctionPropObjLstT = TabFunctionProp_GetObjLstByJSONObjLst(
      arrTabFunctionPropExObjLstCache,
    );
    return arrTabFunctionPropObjLstT;
  }
  try {
    const arrTabFunctionPropExObjLst = await TabFunctionProp_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrTabFunctionPropExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabFunctionPropExObjLst.length,
    );
    console.log(strInfo);
    return arrTabFunctionPropExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstsessionStoragePureCache(strTabId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTabFunctionPropObjLstCache: Array<clsTabFunctionPropEN> = JSON.parse(strTempObjLst);
    return arrTabFunctionPropObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TabFunctionProp_GetObjLstCache(
  strTabId: string,
): Promise<Array<clsTabFunctionPropEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In clsTabFunctionPropWApi.TabFunctionProp_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确！(clsTabFunctionPropWApi.TabFunctionProp_GetObjLstCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrTabFunctionPropObjLstCache;
  switch (clsTabFunctionPropEN.CacheModeId) {
    case '04': //sessionStorage
      arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstsessionStorage(strTabId);
      break;
    case '03': //localStorage
      arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstlocalStorage(strTabId);
      break;
    case '02': //ClientCache
      arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstClientCache(strTabId);
      break;
    default:
      arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstClientCache(strTabId);
      break;
  }
  return arrTabFunctionPropObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TabFunctionProp_GetObjLstPureCache(strTabId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrTabFunctionPropObjLstCache;
  switch (clsTabFunctionPropEN.CacheModeId) {
    case '04': //sessionStorage
      arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstsessionStoragePureCache(
        strTabId,
      );
      break;
    case '03': //localStorage
      arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstlocalStoragePureCache(
        strTabId,
      );
      break;
    case '02': //ClientCache
      arrTabFunctionPropObjLstCache = null;
      break;
    default:
      arrTabFunctionPropObjLstCache = null;
      break;
  }
  return arrTabFunctionPropObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TabFunctionProp_GetSubObjLstCache(
  objTabFunctionPropCond: ConditionCollection,
  strTabId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
  let arrTabFunctionPropSel = arrTabFunctionPropObjLstCache;
  if (objTabFunctionPropCond.GetConditions().length == 0) return arrTabFunctionPropSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objTabFunctionPropCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFunctionPropSel = arrTabFunctionPropSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTabFunctionPropSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTabFunctionPropCond),
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFunctionPropEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function TabFunctionProp_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsTabFunctionPropEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
          tabFunctionProp_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFunctionProp_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strTabId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
    const arrTabFunctionPropSel = arrTabFunctionPropObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrTabFunctionPropSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTabFunctionPropEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
          tabFunctionProp_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFunctionProp_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTabFunctionPropEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
          tabFunctionProp_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFunctionProp_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTabId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabFunctionPropEN>();
  const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
  if (arrTabFunctionPropObjLstCache.length == 0) return arrTabFunctionPropObjLstCache;
  let arrTabFunctionPropSel = arrTabFunctionPropObjLstCache;
  const objTabFunctionPropCond = objPagerPara.conditionCollection;
  if (objTabFunctionPropCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsTabFunctionPropEN>();
  }
  //console.log("clsTabFunctionPropWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objTabFunctionPropCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFunctionPropSel = arrTabFunctionPropSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTabFunctionPropSel.length == 0) return arrTabFunctionPropSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTabFunctionPropSel = arrTabFunctionPropSel.sort(
        TabFunctionProp_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTabFunctionPropSel = arrTabFunctionPropSel.sort(objPagerPara.sortFun);
    }
    arrTabFunctionPropSel = arrTabFunctionPropSel.slice(intStart, intEnd);
    return arrTabFunctionPropSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFunctionPropEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function TabFunctionProp_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabFunctionPropEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabFunctionPropEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
          tabFunctionProp_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFunctionProp_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_DelTabFunctionPropsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTabFunctionPropsAsync';
  const strAction = 'DelTabFunctionProps';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTabId: string,
): Promise<Array<clsTabFunctionPropENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrTabFunctionPropObjLst = await TabFunctionProp_GetObjLstCache(strTabId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsTabFunctionPropENEx>();
  const arrTabFunctionPropExObjLst = arrTabFunctionPropObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.tabId}`;
    if (tabFunctionPropCache[cacheKey]) {
      const oldObj = tabFunctionPropCache[cacheKey];
      return oldObj;
    } else {
      const newObj = TabFunctionProp_CopyToEx(obj);
      arrNewObj.push(newObj);
      tabFunctionPropCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await TabFunctionProp_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsTabFunctionPropEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrTabFunctionPropExObjLst) {
      await TabFunctionProp_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.tabId}`;
      tabFunctionPropCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrTabFunctionPropExObjLst.length == 0) return arrTabFunctionPropExObjLst;
  let arrTabFunctionPropSel: Array<clsTabFunctionPropENEx> = arrTabFunctionPropExObjLst;
  const objTabFunctionPropCond = objPagerPara.conditionCollection;
  if (objTabFunctionPropCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrTabFunctionPropExObjLst;
  }
  try {
    for (const objCondition of objTabFunctionPropCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFunctionPropSel = arrTabFunctionPropSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTabFunctionPropSel.length == 0) return arrTabFunctionPropSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrTabFunctionPropSel = arrTabFunctionPropSel.sort(
        TabFunctionProp_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTabFunctionPropSel = arrTabFunctionPropSel.sort(objPagerPara.sortFun);
    }
    arrTabFunctionPropSel = arrTabFunctionPropSel.slice(intStart, intEnd);
    return arrTabFunctionPropSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFunctionPropENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objTabFunctionPropENS:源对象
 * @returns 目标对象=>clsTabFunctionPropEN:objTabFunctionPropENT
 **/
export function TabFunctionProp_CopyToEx(
  objTabFunctionPropENS: clsTabFunctionPropEN,
): clsTabFunctionPropENEx {
  const strThisFuncName = TabFunctionProp_CopyToEx.name;
  const objTabFunctionPropENT = new clsTabFunctionPropENEx();
  try {
    ObjectAssign(objTabFunctionPropENT, objTabFunctionPropENS);
    return objTabFunctionPropENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objTabFunctionPropENT;
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
export function TabFunctionProp_FuncMapByFldName(
  strFldName: string,
  objTabFunctionPropEx: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionProp_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsTabFunctionPropEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsTabFunctionPropENEx.con_TabName:
      return TabFunctionProp_FuncMapTabName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_FunctionTemplateName:
      return TabFunctionProp_FuncMapFunctionTemplateName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_MethodModifierName:
      return TabFunctionProp_FuncMapMethodModifierName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_FuncName:
      return TabFunctionProp_FuncMapFuncName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_FuncId4Code:
      return TabFunctionProp_FuncMapFuncId4Code(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_FuncName4Code:
      return TabFunctionProp_FuncMapFuncName4Code(objTabFunctionPropEx);
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
export function TabFunctionProp_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFunctionPropENEx.con_TabName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsTabFunctionPropENEx.con_FunctionTemplateName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeENName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          if (a.codeTypeENName === null && b.codeTypeENName === null) return 0;
          if (a.codeTypeENName === null) return -1;
          if (b.codeTypeENName === null) return 1;
          return a.codeTypeENName.localeCompare(b.codeTypeENName);
        };
      case clsTabFunctionPropENEx.con_ProgLangTypeId:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsTabFunctionPropENEx.con_ProgLangTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsTabFunctionPropENEx.con_MethodModifierName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          if (a.methodModifierName === null && b.methodModifierName === null) return 0;
          if (a.methodModifierName === null) return -1;
          if (b.methodModifierName === null) return 1;
          return a.methodModifierName.localeCompare(b.methodModifierName);
        };
      case clsTabFunctionPropENEx.con_FuncName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsTabFunctionPropENEx.con_FuncId4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsTabFunctionPropENEx.con_FuncName4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      default:
        return TabFunctionProp_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsTabFunctionPropENEx.con_TabName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsTabFunctionPropENEx.con_FunctionTemplateName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeENName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          if (a.codeTypeENName === null && b.codeTypeENName === null) return 0;
          if (a.codeTypeENName === null) return 1;
          if (b.codeTypeENName === null) return -1;
          return b.codeTypeENName.localeCompare(a.codeTypeENName);
        };
      case clsTabFunctionPropENEx.con_ProgLangTypeId:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsTabFunctionPropENEx.con_ProgLangTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsTabFunctionPropENEx.con_MethodModifierName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          if (a.methodModifierName === null && b.methodModifierName === null) return 0;
          if (a.methodModifierName === null) return 1;
          if (b.methodModifierName === null) return -1;
          return b.methodModifierName.localeCompare(a.methodModifierName);
        };
      case clsTabFunctionPropENEx.con_FuncName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsTabFunctionPropENEx.con_FuncId4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsTabFunctionPropENEx.con_FuncName4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      default:
        return TabFunctionProp_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionProp_FuncMapTabName(objTabFunctionProp: clsTabFunctionPropENEx) {
  const strThisFuncName = TabFunctionProp_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.tabName) == true) {
      const vPrjTabSimTabId = objTabFunctionProp.tabId;
      if (IsNullOrEmpty(objTabFunctionProp.prjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,prjId不能为空!(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objTabFunctionProp.prjId,
      );
      objTabFunctionProp.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionProp_FuncMapFunctionTemplateName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionProp_FuncMapFunctionTemplateName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.functionTemplateName) == true) {
      const FunctionTemplateFunctionTemplateId = objTabFunctionProp.functionTemplateId;
      const FunctionTemplateFunctionTemplateName = await FunctionTemplate_func(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        clsFunctionTemplateEN.con_FunctionTemplateName,
        FunctionTemplateFunctionTemplateId,
      );
      objTabFunctionProp.functionTemplateName = FunctionTemplateFunctionTemplateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001318)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionProp_FuncMapFuncName4Code(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionProp_FuncMapFuncName4Code.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.funcName4Code) == true) {
      const vFunction4GeneCodeSimFuncId4GC = objTabFunctionProp.funcId4GC;
      const vFunction4GeneCodeSimFuncId4Code = await vFunction4GeneCode_Sim_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        vFunction4GeneCodeSimFuncId4GC,
      );
      const vFunction4CodeSimFuncId4Code = vFunction4GeneCodeSimFuncId4Code;
      const vFunction4CodeSimFuncName4Code = await vFunction4Code_Sim_func(
        clsvFunction4Code_SimEN.con_FuncId4Code,
        clsvFunction4Code_SimEN.con_FuncName4Code,
        vFunction4CodeSimFuncId4Code,
      );
      objTabFunctionProp.funcName4Code = vFunction4CodeSimFuncName4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001360)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionProp_FuncMapMethodModifierName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionProp_FuncMapMethodModifierName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.methodModifierName) == true) {
      const MethodModifierMethodModifierId = objTabFunctionProp.methodModifierId;
      const MethodModifierMethodModifierName = await MethodModifier_func(
        clsMethodModifierEN.con_MethodModifierId,
        clsMethodModifierEN.con_MethodModifierName,
        MethodModifierMethodModifierId,
      );
      objTabFunctionProp.methodModifierName = MethodModifierMethodModifierName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001386)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionProp_FuncMapFuncId4Code(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionProp_FuncMapFuncId4Code.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.funcId4Code) == true) {
      const vFunction4GeneCodeSimFuncId4GC = objTabFunctionProp.funcId4GC;
      const vFunction4GeneCodeSimFuncId4Code = await vFunction4GeneCode_Sim_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        vFunction4GeneCodeSimFuncId4GC,
      );
      objTabFunctionProp.funcId4Code = vFunction4GeneCodeSimFuncId4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001387)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionProp_FuncMapFuncName(objTabFunctionProp: clsTabFunctionPropENEx) {
  const strThisFuncName = TabFunctionProp_FuncMapFuncName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.funcName) == true) {
      const vFunction4GeneCodeSimFuncId4GC = objTabFunctionProp.funcId4GC;
      const vFunction4GeneCodeSimFuncName = await vFunction4GeneCode_Sim_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncName,
        vFunction4GeneCodeSimFuncId4GC,
      );
      objTabFunctionProp.funcName = vFunction4GeneCodeSimFuncName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001359)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_DelTabFunctionPropsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTabFunctionPropsByCondAsync';
  const strAction = 'DelTabFunctionPropsByCond';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
 * @param objTabFunctionPropEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFunctionProp_AddNewRecordAsync(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTabFunctionPropEN);
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFunctionPropEN, config);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_AddNewObjSave(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    TabFunctionProp_CheckPropertyNew(objTabFunctionPropEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await TabFunctionProp_CheckUniCond4Add(objTabFunctionPropEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await TabFunctionProp_AddNewRecordAsync(objTabFunctionPropEN);
    if (returnBool == true) {
      TabFunctionProp_ReFreshCache(objTabFunctionPropEN.tabId);
    } else {
      const strInfo = `添加[表函数属性(TabFunctionProp)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objTabFunctionPropEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function TabFunctionProp_CheckUniCond4Add(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFunctionProp_GetUniCondStr(objTabFunctionPropEN);
  const bolIsExistCondition = await TabFunctionProp_IsExistRecordAsync(strUniquenessCondition);
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
export async function TabFunctionProp_CheckUniCond4Update(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFunctionProp_GetUniCondStr4Update(objTabFunctionPropEN);
  const bolIsExistCondition = await TabFunctionProp_IsExistRecordAsync(strUniquenessCondition);
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
export async function TabFunctionProp_UpdateObjSave(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objTabFunctionPropEN.sfUpdFldSetStr = objTabFunctionPropEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objTabFunctionPropEN.mId == 0 || objTabFunctionPropEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    TabFunctionProp_CheckProperty4Update(objTabFunctionPropEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await TabFunctionProp_CheckUniCond4Update(objTabFunctionPropEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await TabFunctionProp_UpdateRecordAsync(objTabFunctionPropEN);
    if (returnBool == true) {
      TabFunctionProp_ReFreshCache(objTabFunctionPropEN.tabId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${tabFunctionProp_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objTabFunctionPropEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TabFunctionProp_AddNewRecordWithReturnKeyAsync(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFunctionPropEN, config);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
 * @param objTabFunctionPropEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabFunctionProp_UpdateRecordAsync(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTabFunctionPropEN.sfUpdFldSetStr === undefined ||
    objTabFunctionPropEN.sfUpdFldSetStr === null ||
    objTabFunctionPropEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFunctionPropEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFunctionPropEN, config);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
 * @param objTabFunctionPropEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabFunctionProp_EditRecordExAsync(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objTabFunctionPropEN.sfUpdFldSetStr === undefined ||
    objTabFunctionPropEN.sfUpdFldSetStr === null ||
    objTabFunctionPropEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFunctionPropEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFunctionPropEN, config);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
 * @param objTabFunctionPropEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFunctionProp_UpdateWithConditionAsync(
  objTabFunctionPropEN: clsTabFunctionPropEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTabFunctionPropEN.sfUpdFldSetStr === undefined ||
    objTabFunctionPropEN.sfUpdFldSetStr === null ||
    objTabFunctionPropEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFunctionPropEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);
  objTabFunctionPropEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFunctionPropEN, config);
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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_IsExistRecordCache(
  objTabFunctionPropCond: ConditionCollection,
  strTabId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
  if (arrTabFunctionPropObjLstCache == null) return false;
  let arrTabFunctionPropSel = arrTabFunctionPropObjLstCache;
  if (objTabFunctionPropCond.GetConditions().length == 0)
    return arrTabFunctionPropSel.length > 0 ? true : false;
  try {
    for (const objCondition of objTabFunctionPropCond.GetConditions()) {
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
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTabFunctionPropSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objTabFunctionPropCond),
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_IsExistCache(lngmId: number, strTabId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
  if (arrTabFunctionPropObjLstCache == null) return false;
  try {
    const arrTabFunctionPropSel = arrTabFunctionPropObjLstCache.filter((x) => x.mId == lngmId);
    if (arrTabFunctionPropSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
 * @param objTabFunctionPropCond:条件对象
 * @returns 对象列表记录数
 */
export async function TabFunctionProp_GetRecCountByCondCache(
  objTabFunctionPropCond: ConditionCollection,
  strTabId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrTabFunctionPropObjLstCache = await TabFunctionProp_GetObjLstCache(strTabId);
  if (arrTabFunctionPropObjLstCache == null) return 0;
  let arrTabFunctionPropSel = arrTabFunctionPropObjLstCache;
  if (objTabFunctionPropCond.GetConditions().length == 0) return arrTabFunctionPropSel.length;
  try {
    for (const objCondition of objTabFunctionPropCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFunctionPropSel = arrTabFunctionPropSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTabFunctionPropSel = arrTabFunctionPropSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTabFunctionPropSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTabFunctionPropCond),
      tabFunctionProp_ConstructorName,
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
export async function TabFunctionProp_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabFunctionProp_Controller, strAction);

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
        tabFunctionProp_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFunctionProp_ConstructorName,
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
export function TabFunctionProp_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TabFunctionProp_ReFreshCache(strTabId: string): void {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsTabFunctionPropWApi.clsTabFunctionPropWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsTabFunctionPropWApi.clsTabFunctionPropWApi.ReFreshCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, strTabId);
  switch (clsTabFunctionPropEN.CacheModeId) {
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
  clsTabFunctionPropEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function TabFunctionProp_ReFreshThisCache(strTabId: string): void {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsTabFunctionPropWApi.TabFunctionProp_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsTabFunctionPropWApi.TabFunctionProp_ReFreshThisCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsTabFunctionPropEN._CurrTabName, strTabId);
    switch (clsTabFunctionPropEN.CacheModeId) {
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
    clsTabFunctionPropEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function TabFunctionProp_GetLastRefreshTime(): string {
  if (clsTabFunctionPropEN._RefreshTimeLst.length == 0) return '';
  return clsTabFunctionPropEN._RefreshTimeLst[clsTabFunctionPropEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabFunctionProp_CheckPropertyNew(pobjTabFunctionPropEN: clsTabFunctionPropEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.tabId) === true ||
    pobjTabFunctionPropEN.tabId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 表函数属性)!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.funcId4GC) === true ||
    pobjTabFunctionPropEN.funcId4GC.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数ID]不能为空(In 表函数属性)!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjTabFunctionPropEN.isForAllTemplate ||
    (pobjTabFunctionPropEN.isForAllTemplate != null &&
      pobjTabFunctionPropEN.isForAllTemplate.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否针对所有模板]不能为空(In 表函数属性)!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjTabFunctionPropEN.orderNum ||
    (pobjTabFunctionPropEN.orderNum != null && pobjTabFunctionPropEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 表函数属性)!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.tabId) == false &&
    GetStrLen(pobjTabFunctionPropEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.tabId}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.functionTemplateId) == false &&
    GetStrLen(pobjTabFunctionPropEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.functionTemplateId}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.codeTypeId) == false &&
    GetStrLen(pobjTabFunctionPropEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.codeTypeId}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.funcId4GC) == false &&
    GetStrLen(pobjTabFunctionPropEN.funcId4GC) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数ID(funcId4GC)]的长度不能超过10(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.funcId4GC}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.methodModifierId) == false &&
    GetStrLen(pobjTabFunctionPropEN.methodModifierId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数修饰语Id(methodModifierId)]的长度不能超过2(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.methodModifierId}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.prjId) == false &&
    GetStrLen(pobjTabFunctionPropEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.prjId}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updDate) == false &&
    GetStrLen(pobjTabFunctionPropEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.updDate}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updUser) == false &&
    GetStrLen(pobjTabFunctionPropEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.updUser}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.memo) == false &&
    GetStrLen(pobjTabFunctionPropEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.memo}(clsTabFunctionPropBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabFunctionPropEN.mId &&
    undefined !== pobjTabFunctionPropEN.mId &&
    tzDataType.isNumber(pobjTabFunctionPropEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjTabFunctionPropEN.mId}], 非法,应该为数值型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.tabId) == false &&
    undefined !== pobjTabFunctionPropEN.tabId &&
    tzDataType.isString(pobjTabFunctionPropEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjTabFunctionPropEN.tabId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.functionTemplateId) == false &&
    undefined !== pobjTabFunctionPropEN.functionTemplateId &&
    tzDataType.isString(pobjTabFunctionPropEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数模板Id(functionTemplateId)]的值:[${pobjTabFunctionPropEN.functionTemplateId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.codeTypeId) == false &&
    undefined !== pobjTabFunctionPropEN.codeTypeId &&
    tzDataType.isString(pobjTabFunctionPropEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjTabFunctionPropEN.codeTypeId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.funcId4GC) == false &&
    undefined !== pobjTabFunctionPropEN.funcId4GC &&
    tzDataType.isString(pobjTabFunctionPropEN.funcId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数ID(funcId4GC)]的值:[${pobjTabFunctionPropEN.funcId4GC}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.methodModifierId) == false &&
    undefined !== pobjTabFunctionPropEN.methodModifierId &&
    tzDataType.isString(pobjTabFunctionPropEN.methodModifierId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数修饰语Id(methodModifierId)]的值:[${pobjTabFunctionPropEN.methodModifierId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFunctionPropEN.isForAllTemplate &&
    undefined !== pobjTabFunctionPropEN.isForAllTemplate &&
    tzDataType.isBoolean(pobjTabFunctionPropEN.isForAllTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否针对所有模板(isForAllTemplate)]的值:[${pobjTabFunctionPropEN.isForAllTemplate}], 非法,应该为布尔型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFunctionPropEN.orderNum &&
    undefined !== pobjTabFunctionPropEN.orderNum &&
    tzDataType.isNumber(pobjTabFunctionPropEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjTabFunctionPropEN.orderNum}], 非法,应该为数值型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.prjId) == false &&
    undefined !== pobjTabFunctionPropEN.prjId &&
    tzDataType.isString(pobjTabFunctionPropEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjTabFunctionPropEN.prjId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updDate) == false &&
    undefined !== pobjTabFunctionPropEN.updDate &&
    tzDataType.isString(pobjTabFunctionPropEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjTabFunctionPropEN.updDate}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updUser) == false &&
    undefined !== pobjTabFunctionPropEN.updUser &&
    tzDataType.isString(pobjTabFunctionPropEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjTabFunctionPropEN.updUser}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.memo) == false &&
    undefined !== pobjTabFunctionPropEN.memo &&
    tzDataType.isString(pobjTabFunctionPropEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjTabFunctionPropEN.memo}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabFunctionProp_CheckProperty4Update(pobjTabFunctionPropEN: clsTabFunctionPropEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.tabId) == false &&
    GetStrLen(pobjTabFunctionPropEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.tabId}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.functionTemplateId) == false &&
    GetStrLen(pobjTabFunctionPropEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.functionTemplateId}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.codeTypeId) == false &&
    GetStrLen(pobjTabFunctionPropEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.codeTypeId}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.funcId4GC) == false &&
    GetStrLen(pobjTabFunctionPropEN.funcId4GC) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数ID(funcId4GC)]的长度不能超过10(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.funcId4GC}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.methodModifierId) == false &&
    GetStrLen(pobjTabFunctionPropEN.methodModifierId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数修饰语Id(methodModifierId)]的长度不能超过2(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.methodModifierId}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.prjId) == false &&
    GetStrLen(pobjTabFunctionPropEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.prjId}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updDate) == false &&
    GetStrLen(pobjTabFunctionPropEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.updDate}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updUser) == false &&
    GetStrLen(pobjTabFunctionPropEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.updUser}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.memo) == false &&
    GetStrLen(pobjTabFunctionPropEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 表函数属性(TabFunctionProp))!值:${pobjTabFunctionPropEN.memo}(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabFunctionPropEN.mId &&
    undefined !== pobjTabFunctionPropEN.mId &&
    tzDataType.isNumber(pobjTabFunctionPropEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjTabFunctionPropEN.mId}], 非法,应该为数值型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.tabId) == false &&
    undefined !== pobjTabFunctionPropEN.tabId &&
    tzDataType.isString(pobjTabFunctionPropEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjTabFunctionPropEN.tabId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.functionTemplateId) == false &&
    undefined !== pobjTabFunctionPropEN.functionTemplateId &&
    tzDataType.isString(pobjTabFunctionPropEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数模板Id(functionTemplateId)]的值:[${pobjTabFunctionPropEN.functionTemplateId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.codeTypeId) == false &&
    undefined !== pobjTabFunctionPropEN.codeTypeId &&
    tzDataType.isString(pobjTabFunctionPropEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjTabFunctionPropEN.codeTypeId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.funcId4GC) == false &&
    undefined !== pobjTabFunctionPropEN.funcId4GC &&
    tzDataType.isString(pobjTabFunctionPropEN.funcId4GC) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数ID(funcId4GC)]的值:[${pobjTabFunctionPropEN.funcId4GC}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.methodModifierId) == false &&
    undefined !== pobjTabFunctionPropEN.methodModifierId &&
    tzDataType.isString(pobjTabFunctionPropEN.methodModifierId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数修饰语Id(methodModifierId)]的值:[${pobjTabFunctionPropEN.methodModifierId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFunctionPropEN.isForAllTemplate &&
    undefined !== pobjTabFunctionPropEN.isForAllTemplate &&
    tzDataType.isBoolean(pobjTabFunctionPropEN.isForAllTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否针对所有模板(isForAllTemplate)]的值:[${pobjTabFunctionPropEN.isForAllTemplate}], 非法,应该为布尔型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFunctionPropEN.orderNum &&
    undefined !== pobjTabFunctionPropEN.orderNum &&
    tzDataType.isNumber(pobjTabFunctionPropEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjTabFunctionPropEN.orderNum}], 非法,应该为数值型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.prjId) == false &&
    undefined !== pobjTabFunctionPropEN.prjId &&
    tzDataType.isString(pobjTabFunctionPropEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjTabFunctionPropEN.prjId}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updDate) == false &&
    undefined !== pobjTabFunctionPropEN.updDate &&
    tzDataType.isString(pobjTabFunctionPropEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjTabFunctionPropEN.updDate}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.updUser) == false &&
    undefined !== pobjTabFunctionPropEN.updUser &&
    tzDataType.isString(pobjTabFunctionPropEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjTabFunctionPropEN.updUser}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFunctionPropEN.memo) == false &&
    undefined !== pobjTabFunctionPropEN.memo &&
    tzDataType.isString(pobjTabFunctionPropEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjTabFunctionPropEN.memo}], 非法,应该为字符型(In 表函数属性(TabFunctionProp))!(clsTabFunctionPropBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjTabFunctionPropEN.mId ||
    (pobjTabFunctionPropEN.mId != null && pobjTabFunctionPropEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 表函数属性)!(clsTabFunctionPropBL:CheckProperty4Update)`,
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
export function TabFunctionProp_GetJSONStrByObj(
  pobjTabFunctionPropEN: clsTabFunctionPropEN,
): string {
  pobjTabFunctionPropEN.sfUpdFldSetStr = pobjTabFunctionPropEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTabFunctionPropEN);
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
export function TabFunctionProp_GetObjLstByJSONStr(strJSON: string): Array<clsTabFunctionPropEN> {
  let arrTabFunctionPropObjLst = new Array<clsTabFunctionPropEN>();
  if (strJSON === '') {
    return arrTabFunctionPropObjLst;
  }
  try {
    arrTabFunctionPropObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTabFunctionPropObjLst;
  }
  return arrTabFunctionPropObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTabFunctionPropObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TabFunctionProp_GetObjLstByJSONObjLst(
  arrTabFunctionPropObjLstS: Array<clsTabFunctionPropEN>,
): Array<clsTabFunctionPropEN> {
  const arrTabFunctionPropObjLst = new Array<clsTabFunctionPropEN>();
  for (const objInFor of arrTabFunctionPropObjLstS) {
    const obj1 = TabFunctionProp_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTabFunctionPropObjLst.push(obj1);
  }
  return arrTabFunctionPropObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabFunctionProp_GetObjByJSONStr(strJSON: string): clsTabFunctionPropEN {
  let pobjTabFunctionPropEN = new clsTabFunctionPropEN();
  if (strJSON === '') {
    return pobjTabFunctionPropEN;
  }
  try {
    pobjTabFunctionPropEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTabFunctionPropEN;
  }
  return pobjTabFunctionPropEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TabFunctionProp_GetCombineCondition(
  objTabFunctionPropCond: clsTabFunctionPropEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFunctionPropEN.con_mId,
      objTabFunctionPropCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_TabId,
      objTabFunctionPropCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_FunctionTemplateId,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateId: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_FunctionTemplateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_FunctionTemplateId,
      objTabFunctionPropCond.functionTemplateId,
      strComparisonOpFunctionTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_CodeTypeId,
      objTabFunctionPropCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_FuncId4GC];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_FuncId4GC,
      objTabFunctionPropCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_MethodModifierId,
    ) == true
  ) {
    const strComparisonOpMethodModifierId: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_MethodModifierId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_MethodModifierId,
      objTabFunctionPropCond.methodModifierId,
      strComparisonOpMethodModifierId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_IsForAllTemplate,
    ) == true
  ) {
    if (objTabFunctionPropCond.isForAllTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFunctionPropEN.con_IsForAllTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFunctionPropEN.con_IsForAllTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFunctionPropEN.con_OrderNum,
      objTabFunctionPropCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_PrjId,
      objTabFunctionPropCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_UpdDate,
      objTabFunctionPropCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_UpdUser,
      objTabFunctionPropCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFunctionPropCond.dicFldComparisonOp,
      clsTabFunctionPropEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTabFunctionPropCond.dicFldComparisonOp[clsTabFunctionPropEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFunctionPropEN.con_Memo,
      objTabFunctionPropCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFunctionProp(表函数属性),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strFuncId4GC: 函数ID(要求唯一的字段)
 * @param strFunctionTemplateId: 函数模板Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFunctionProp_GetUniCondStr(objTabFunctionPropEN: clsTabFunctionPropEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objTabFunctionPropEN.prjId);
  strWhereCond += Format(" and TabId = '{0}'", objTabFunctionPropEN.tabId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objTabFunctionPropEN.codeTypeId);
  strWhereCond += Format(" and FuncId4GC = '{0}'", objTabFunctionPropEN.funcId4GC);
  strWhereCond += Format(
    " and FunctionTemplateId = '{0}'",
    objTabFunctionPropEN.functionTemplateId,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFunctionProp(表函数属性),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param strFuncId4GC: 函数ID(要求唯一的字段)
 * @param strFunctionTemplateId: 函数模板Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFunctionProp_GetUniCondStr4Update(
  objTabFunctionPropEN: clsTabFunctionPropEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objTabFunctionPropEN.mId);
  strWhereCond += Format(" and PrjId = '{0}'", objTabFunctionPropEN.prjId);
  strWhereCond += Format(" and TabId = '{0}'", objTabFunctionPropEN.tabId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objTabFunctionPropEN.codeTypeId);
  strWhereCond += Format(" and FuncId4GC = '{0}'", objTabFunctionPropEN.funcId4GC);
  strWhereCond += Format(
    " and FunctionTemplateId = '{0}'",
    objTabFunctionPropEN.functionTemplateId,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTabFunctionPropENS:源对象
 * @param objTabFunctionPropENT:目标对象
 */
export function TabFunctionProp_GetObjFromJsonObj(
  objTabFunctionPropENS: clsTabFunctionPropEN,
): clsTabFunctionPropEN {
  const objTabFunctionPropENT: clsTabFunctionPropEN = new clsTabFunctionPropEN();
  ObjectAssign(objTabFunctionPropENT, objTabFunctionPropENS);
  return objTabFunctionPropENT;
}
