/**
 * 类名:clsViewInfoCmPrjIdRelaWApi
 * 表名:ViewInfoCmPrjIdRela(00050621)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/25 17:34:50
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面CmPrjId关系(ViewInfoCmPrjIdRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月25日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
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
import { clsViewInfoCmPrjIdRelaEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoCmPrjIdRelaEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewInfoCmPrjIdRela_Controller = 'ViewInfoCmPrjIdRelaApi';
export const viewInfoCmPrjIdRela_ConstructorName = 'viewInfoCmPrjIdRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function ViewInfoCmPrjIdRela_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    viewId: arrKey[0],
    cmPrjId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.viewId) == true) {
    const strMsg = '关键字段(viewId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.cmPrjId) == true) {
    const strMsg = '关键字段(cmPrjId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewId:关键字
 * @returns 对象
 **/
export async function ViewInfoCmPrjIdRela_GetObjByKeyLstAsync(
  strViewId: string,
  strCmPrjId: string,
): Promise<clsViewInfoCmPrjIdRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format(
      '参数:[strViewId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstAsync)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
      strCmPrjId,
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
      const objViewInfoCmPrjIdRela = ViewInfoCmPrjIdRela_GetObjFromJsonObj(returnObj);
      return objViewInfoCmPrjIdRela;
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param strViewId:所给的关键字
 * @returns 对象
 */
export async function ViewInfoCmPrjIdRela_GetObjByKeyLstCache(
  strViewId: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format(
      '参数:[strViewId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstCache)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
  try {
    const arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaObjLstCache.filter(
      (x) => x.viewId == strViewId && x.cmPrjId == strCmPrjId,
    );
    let objViewInfoCmPrjIdRela: clsViewInfoCmPrjIdRelaEN;
    if (arrViewInfoCmPrjIdRelaSel.length > 0) {
      objViewInfoCmPrjIdRela = arrViewInfoCmPrjIdRelaSel[0];
      return objViewInfoCmPrjIdRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewInfoCmPrjIdRelaConst = await ViewInfoCmPrjIdRela_GetObjByKeyLstAsync(
          strViewId,
          strCmPrjId,
        );
        if (objViewInfoCmPrjIdRelaConst != null) {
          ViewInfoCmPrjIdRela_ReFreshThisCache(strCmPrjId);
          return objViewInfoCmPrjIdRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewId,
      viewInfoCmPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strViewId:所给的关键字
 * @returns 对象
 */
export async function ViewInfoCmPrjIdRela_GetObjByKeyLstlocalStorage(
  strViewId: string,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format(
      '参数:[strViewId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.GetObjByKeyLstlocalStorage)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strViewId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewInfoCmPrjIdRelaCache: clsViewInfoCmPrjIdRelaEN = JSON.parse(strTempObj);
    return objViewInfoCmPrjIdRelaCache;
  }
  try {
    const objViewInfoCmPrjIdRela = await ViewInfoCmPrjIdRela_GetObjByKeyLstAsync(
      strViewId,
      strCmPrjId,
    );
    if (objViewInfoCmPrjIdRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewInfoCmPrjIdRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewInfoCmPrjIdRela;
    }
    return objViewInfoCmPrjIdRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewId,
      viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objViewInfoCmPrjIdRela:所给的对象
 * @returns 对象
 */
export async function ViewInfoCmPrjIdRela_UpdateObjInLstCache(
  objViewInfoCmPrjIdRela: clsViewInfoCmPrjIdRelaEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
    const obj = arrViewInfoCmPrjIdRelaObjLstCache.find(
      (x) => x.viewId == objViewInfoCmPrjIdRela.viewId,
    );
    if (obj != null) {
      objViewInfoCmPrjIdRela.viewId = obj.viewId;
      ObjectAssign(obj, objViewInfoCmPrjIdRela);
    } else {
      arrViewInfoCmPrjIdRelaObjLstCache.push(objViewInfoCmPrjIdRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewInfoCmPrjIdRela_ConstructorName,
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
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function ViewInfoCmPrjIdRela_func(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName1 != clsViewInfoCmPrjIdRelaEN.con_ViewId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsViewInfoCmPrjIdRelaEN.con_CmPrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewInfoCmPrjIdRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewInfoCmPrjIdRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewId = strInValue1;
  if (IsNullOrEmpty(strInValue1) == true) {
    return '';
  }
  const strCmPrjId = strInValue2;
  if (IsNullOrEmpty(strInValue2) == true) {
    return '';
  }
  const objViewInfoCmPrjIdRela = await ViewInfoCmPrjIdRela_GetObjByKeyLstCache(
    strViewId,
    strCmPrjId,
  );
  if (objViewInfoCmPrjIdRela == null) return '';
  if (objViewInfoCmPrjIdRela.GetFldValue(strOutFldName) == null) return '';
  return objViewInfoCmPrjIdRela.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfoCmPrjIdRela_SortFunDefa(
  a: clsViewInfoCmPrjIdRelaEN,
  b: clsViewInfoCmPrjIdRelaEN,
): number {
  return a.viewId.localeCompare(b.viewId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfoCmPrjIdRela_SortFunDefa2Fld(
  a: clsViewInfoCmPrjIdRelaEN,
  b: clsViewInfoCmPrjIdRelaEN,
): number {
  if (a.updDate == b.updDate) return a.updUserId.localeCompare(b.updUserId);
  else return a.updDate.localeCompare(b.updDate);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfoCmPrjIdRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewInfoCmPrjIdRelaEN.con_ViewId:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          return a.viewId.localeCompare(b.viewId);
        };
      case clsViewInfoCmPrjIdRelaEN.con_CmPrjId:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsViewInfoCmPrjIdRelaEN.con_UpdDate:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewInfoCmPrjIdRelaEN.con_UpdUserId:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsViewInfoCmPrjIdRelaEN.con_Memo:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewInfoCmPrjIdRela]中不存在!(in ${viewInfoCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewInfoCmPrjIdRelaEN.con_ViewId:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          return b.viewId.localeCompare(a.viewId);
        };
      case clsViewInfoCmPrjIdRelaEN.con_CmPrjId:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsViewInfoCmPrjIdRelaEN.con_UpdDate:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewInfoCmPrjIdRelaEN.con_UpdUserId:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsViewInfoCmPrjIdRelaEN.con_Memo:
        return (a: clsViewInfoCmPrjIdRelaEN, b: clsViewInfoCmPrjIdRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewInfoCmPrjIdRela]中不存在!(in ${viewInfoCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewInfoCmPrjIdRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewInfoCmPrjIdRelaEN.con_ViewId:
      return (obj: clsViewInfoCmPrjIdRelaEN) => {
        return obj.viewId === value;
      };
    case clsViewInfoCmPrjIdRelaEN.con_CmPrjId:
      return (obj: clsViewInfoCmPrjIdRelaEN) => {
        return obj.cmPrjId === value;
      };
    case clsViewInfoCmPrjIdRelaEN.con_UpdDate:
      return (obj: clsViewInfoCmPrjIdRelaEN) => {
        return obj.updDate === value;
      };
    case clsViewInfoCmPrjIdRelaEN.con_UpdUserId:
      return (obj: clsViewInfoCmPrjIdRelaEN) => {
        return obj.updUserId === value;
      };
    case clsViewInfoCmPrjIdRelaEN.con_Memo:
      return (obj: clsViewInfoCmPrjIdRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewInfoCmPrjIdRela]中不存在!(in ${viewInfoCmPrjIdRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ViewInfoCmPrjIdRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCmPrjIdClassfy]不能为空!(In clsViewInfoCmPrjIdRelaWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.funcKey)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsViewInfoCmPrjIdRelaEN.con_ViewId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsViewInfoCmPrjIdRelaEN.con_CmPrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewInfoCmPrjIdRela = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjIdClassfy);
  if (arrViewInfoCmPrjIdRela == null) return [];
  let arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewInfoCmPrjIdRelaSel.length == 0) return [];
  return arrViewInfoCmPrjIdRela.map((x) => `${x.viewId}|${x.cmPrjId}`);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewInfoCmPrjIdRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewInfoCmPrjIdRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
      const objViewInfoCmPrjIdRela = ViewInfoCmPrjIdRela_GetObjFromJsonObj(returnObj);
      return objViewInfoCmPrjIdRela;
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewInfoCmPrjIdRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewInfoCmPrjIdRelaEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsViewInfoCmPrjIdRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewInfoCmPrjIdRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewInfoCmPrjIdRelaExObjLstCache: Array<clsViewInfoCmPrjIdRelaEN> =
      CacheHelper.Get(strKey);
    const arrViewInfoCmPrjIdRelaObjLstT = ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(
      arrViewInfoCmPrjIdRelaExObjLstCache,
    );
    return arrViewInfoCmPrjIdRelaObjLstT;
  }
  try {
    const arrViewInfoCmPrjIdRelaExObjLst = await ViewInfoCmPrjIdRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewInfoCmPrjIdRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewInfoCmPrjIdRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrViewInfoCmPrjIdRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewInfoCmPrjIdRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewInfoCmPrjIdRelaEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewInfoCmPrjIdRelaEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsViewInfoCmPrjIdRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewInfoCmPrjIdRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewInfoCmPrjIdRelaExObjLstCache: Array<clsViewInfoCmPrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    const arrViewInfoCmPrjIdRelaObjLstT = ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(
      arrViewInfoCmPrjIdRelaExObjLstCache,
    );
    return arrViewInfoCmPrjIdRelaObjLstT;
  }
  try {
    const arrViewInfoCmPrjIdRelaExObjLst = await ViewInfoCmPrjIdRela_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewInfoCmPrjIdRelaEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrViewInfoCmPrjIdRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewInfoCmPrjIdRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrViewInfoCmPrjIdRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetObjLstlocalStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewInfoCmPrjIdRelaObjLstCache: Array<clsViewInfoCmPrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    return arrViewInfoCmPrjIdRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewInfoCmPrjIdRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewInfoCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
          viewInfoCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewInfoCmPrjIdRelaEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewInfoCmPrjIdRelaEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewInfoCmPrjIdRelaEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsViewInfoCmPrjIdRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewInfoCmPrjIdRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewInfoCmPrjIdRelaExObjLstCache: Array<clsViewInfoCmPrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    const arrViewInfoCmPrjIdRelaObjLstT = ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(
      arrViewInfoCmPrjIdRelaExObjLstCache,
    );
    return arrViewInfoCmPrjIdRelaObjLstT;
  }
  try {
    const arrViewInfoCmPrjIdRelaExObjLst = await ViewInfoCmPrjIdRela_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewInfoCmPrjIdRelaEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrViewInfoCmPrjIdRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewInfoCmPrjIdRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrViewInfoCmPrjIdRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetObjLstsessionStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewInfoCmPrjIdRelaObjLstCache: Array<clsViewInfoCmPrjIdRelaEN> =
      JSON.parse(strTempObjLst);
    return arrViewInfoCmPrjIdRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewInfoCmPrjIdRela_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsViewInfoCmPrjIdRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsViewInfoCmPrjIdRelaWApi.ViewInfoCmPrjIdRela_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsViewInfoCmPrjIdRelaWApi.ViewInfoCmPrjIdRela_GetObjLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrViewInfoCmPrjIdRelaObjLstCache;
  switch (clsViewInfoCmPrjIdRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstsessionStorage(
        strCmPrjId,
      );
      break;
    case '03': //localStorage
      arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstlocalStorage(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstClientCache(
        strCmPrjId,
      );
      break;
    default:
      arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstClientCache(
        strCmPrjId,
      );
      break;
  }
  return arrViewInfoCmPrjIdRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewInfoCmPrjIdRela_GetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewInfoCmPrjIdRelaObjLstCache;
  switch (clsViewInfoCmPrjIdRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewInfoCmPrjIdRelaObjLstCache =
        await ViewInfoCmPrjIdRela_GetObjLstsessionStoragePureCache(strCmPrjId);
      break;
    case '03': //localStorage
      arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstlocalStoragePureCache(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrViewInfoCmPrjIdRelaObjLstCache = null;
      break;
    default:
      arrViewInfoCmPrjIdRelaObjLstCache = null;
      break;
  }
  return arrViewInfoCmPrjIdRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewInfoCmPrjIdRela_GetSubObjLstCache(
  objViewInfoCmPrjIdRelaCond: clsViewInfoCmPrjIdRelaEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
  let arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaObjLstCache;
  if (
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp == null ||
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp == ''
  )
    return arrViewInfoCmPrjIdRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp,
  );
  //console.log("clsViewInfoCmPrjIdRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewInfoCmPrjIdRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewInfoCmPrjIdRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewInfoCmPrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewInfoCmPrjIdRelaCond),
      viewInfoCmPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewInfoCmPrjIdRelaEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来,用|连接(Join)--ViewInfoCmPrjIdRela(界面CmPrjId关系)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objViewInfoCmPrjIdRelaEN">需要连接的对象</param>
/// <returns></returns>
export function ViewInfoCmPrjIdRela_JoinByKeyLst(
  objViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
): string {
  //检测记录是否存在
  const strResult = `${objViewInfoCmPrjIdRelaEN.viewId};
|${objViewInfoCmPrjIdRelaEN.cmPrjId}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrViewIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewInfoCmPrjIdRela_GetObjLstByKeyLstsCache(
  arrViewIdLst: Array<string>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
    const arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaObjLstCache.filter(
      (x) => arrViewIdLst.indexOf(ViewInfoCmPrjIdRela_JoinByKeyLst(x)) > -1,
    );
    return arrViewInfoCmPrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewIdLst.join(','),
      viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewInfoCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
          viewInfoCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewInfoCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
          viewInfoCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewInfoCmPrjIdRelaEN>();
  const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
  if (arrViewInfoCmPrjIdRelaObjLstCache.length == 0) return arrViewInfoCmPrjIdRelaObjLstCache;
  let arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objViewInfoCmPrjIdRelaCond = new clsViewInfoCmPrjIdRelaEN();
  ObjectAssign(objViewInfoCmPrjIdRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsViewInfoCmPrjIdRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewInfoCmPrjIdRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewInfoCmPrjIdRelaSel.length == 0) return arrViewInfoCmPrjIdRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.sort(
        ViewInfoCmPrjIdRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.sort(objPagerPara.sortFun);
    }
    arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.slice(intStart, intEnd);
    return arrViewInfoCmPrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewInfoCmPrjIdRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewInfoCmPrjIdRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewInfoCmPrjIdRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewInfoCmPrjIdRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewInfoCmPrjIdRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
          viewInfoCmPrjIdRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param strViewId,strCmPrjId:关键字列表
 * @returns 获取删除的结果
 **/
export async function ViewInfoCmPrjIdRela_DelRecKeyLstAsync(
  strViewId: string,
  strCmPrjId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      ViewId: strViewId,
      CmPrjId: strCmPrjId,
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function ViewInfoCmPrjIdRela_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_DelViewInfoCmPrjIdRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewInfoCmPrjIdRelasByCondAsync';
  const strAction = 'DelViewInfoCmPrjIdRelasByCond';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objViewInfoCmPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewInfoCmPrjIdRela_AddNewRecordAsync(
  objViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objViewInfoCmPrjIdRelaEN.viewId === null || objViewInfoCmPrjIdRelaEN.viewId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewInfoCmPrjIdRelaEN);
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoCmPrjIdRelaEN, config);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objViewInfoCmPrjIdRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewInfoCmPrjIdRela_AddNewRecordWithMaxIdAsync(
  objViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoCmPrjIdRelaEN, config);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objViewInfoCmPrjIdRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewInfoCmPrjIdRela_AddNewRecordWithReturnKeyAsync(
  objViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoCmPrjIdRelaEN, config);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objViewInfoCmPrjIdRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewInfoCmPrjIdRela_UpdateRecordAsync(
  objViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewInfoCmPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objViewInfoCmPrjIdRelaEN.sfUpdFldSetStr === null ||
    objViewInfoCmPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewInfoCmPrjIdRelaEN.viewId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoCmPrjIdRelaEN, config);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objViewInfoCmPrjIdRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewInfoCmPrjIdRela_UpdateWithConditionAsync(
  objViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewInfoCmPrjIdRelaEN.sfUpdFldSetStr === undefined ||
    objViewInfoCmPrjIdRelaEN.sfUpdFldSetStr === null ||
    objViewInfoCmPrjIdRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewInfoCmPrjIdRelaEN.viewId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);
  objViewInfoCmPrjIdRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoCmPrjIdRelaEN, config);
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objstrViewIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewInfoCmPrjIdRela_IsExistRecordCache(
  objViewInfoCmPrjIdRelaCond: clsViewInfoCmPrjIdRelaEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
  if (arrViewInfoCmPrjIdRelaObjLstCache == null) return false;
  let arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaObjLstCache;
  if (
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp == null ||
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp == ''
  )
    return arrViewInfoCmPrjIdRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp,
  );
  //console.log("clsViewInfoCmPrjIdRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewInfoCmPrjIdRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewInfoCmPrjIdRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewInfoCmPrjIdRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewInfoCmPrjIdRelaCond),
      viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param strViewId:所给的关键字
 * @returns 对象
 */
export async function ViewInfoCmPrjIdRela_IsExistCache(strViewId: string, strCmPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
  if (arrViewInfoCmPrjIdRelaObjLstCache == null) return false;
  try {
    const arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaObjLstCache.filter(
      (x) => x.viewId == strViewId && x.cmPrjId == strCmPrjId,
    );
    if (arrViewInfoCmPrjIdRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewId,
      viewInfoCmPrjIdRela_ConstructorName,
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
 * @param strViewId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewInfoCmPrjIdRela_IsExistAsync(strViewId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
 * @param objViewInfoCmPrjIdRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewInfoCmPrjIdRela_GetRecCountByCondCache(
  objViewInfoCmPrjIdRelaCond: clsViewInfoCmPrjIdRelaEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewInfoCmPrjIdRelaObjLstCache = await ViewInfoCmPrjIdRela_GetObjLstCache(strCmPrjId);
  if (arrViewInfoCmPrjIdRelaObjLstCache == null) return 0;
  let arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaObjLstCache;
  if (
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp == null ||
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp == ''
  )
    return arrViewInfoCmPrjIdRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewInfoCmPrjIdRelaCond.sfFldComparisonOp,
  );
  //console.log("clsViewInfoCmPrjIdRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewInfoCmPrjIdRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewInfoCmPrjIdRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewInfoCmPrjIdRelaSel = arrViewInfoCmPrjIdRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewInfoCmPrjIdRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewInfoCmPrjIdRelaCond),
      viewInfoCmPrjIdRela_ConstructorName,
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
export async function ViewInfoCmPrjIdRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewInfoCmPrjIdRela_Controller, strAction);

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
        viewInfoCmPrjIdRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfoCmPrjIdRela_ConstructorName,
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
export function ViewInfoCmPrjIdRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewInfoCmPrjIdRela_ReFreshCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.clsViewInfoCmPrjIdRelaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.clsViewInfoCmPrjIdRelaWApi.ReFreshCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strCmPrjId);
  switch (clsViewInfoCmPrjIdRelaEN.CacheModeId) {
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
export function ViewInfoCmPrjIdRela_ReFreshThisCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsViewInfoCmPrjIdRelaWApi.ViewInfoCmPrjIdRela_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsViewInfoCmPrjIdRelaWApi.ViewInfoCmPrjIdRela_ReFreshThisCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsViewInfoCmPrjIdRelaEN._CurrTabName, strCmPrjId);
    switch (clsViewInfoCmPrjIdRelaEN.CacheModeId) {
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
export function ViewInfoCmPrjIdRela_CheckPropertyNew(
  pobjViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.viewId) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.viewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面Id(viewId)]的长度不能超过8(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.viewId)(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.cmPrjId) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.cmPrjId)(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.updDate)(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updUserId) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.updUserId)(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.memo)(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.viewId) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.viewId &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面Id(viewId)]的值:[$(pobjViewInfoCmPrjIdRelaEN.viewId)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.cmPrjId) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.cmPrjId &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[$(pobjViewInfoCmPrjIdRelaEN.cmPrjId)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updDate) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewInfoCmPrjIdRelaEN.updDate)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updUserId) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.updUserId &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjViewInfoCmPrjIdRelaEN.updUserId)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.memo) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.memo &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjViewInfoCmPrjIdRelaEN.memo)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewInfoCmPrjIdRela_CheckProperty4Update(
  pobjViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.viewId) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.viewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面Id(viewId)]的长度不能超过8(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.viewId)(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.cmPrjId) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.cmPrjId)(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updDate) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.updDate)(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updUserId) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.updUserId)(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.memo) == false &&
    GetStrLen(pobjViewInfoCmPrjIdRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!值:$(pobjViewInfoCmPrjIdRelaEN.memo)(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.viewId) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.viewId &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面Id(viewId)]的值:[$(pobjViewInfoCmPrjIdRelaEN.viewId)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.cmPrjId) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.cmPrjId &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[$(pobjViewInfoCmPrjIdRelaEN.cmPrjId)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updDate) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.updDate &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewInfoCmPrjIdRelaEN.updDate)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.updUserId) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.updUserId &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjViewInfoCmPrjIdRelaEN.updUserId)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.memo) == false &&
    undefined !== pobjViewInfoCmPrjIdRelaEN.memo &&
    tzDataType.isString(pobjViewInfoCmPrjIdRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjViewInfoCmPrjIdRelaEN.memo)], 非法,应该为字符型(In 界面CmPrjId关系(ViewInfoCmPrjIdRela))!(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjViewInfoCmPrjIdRelaEN.viewId) === true ||
    pobjViewInfoCmPrjIdRelaEN.viewId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[界面Id]不能为空(In 界面CmPrjId关系)!(clsViewInfoCmPrjIdRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewInfoCmPrjIdRela_GetJSONStrByObj(
  pobjViewInfoCmPrjIdRelaEN: clsViewInfoCmPrjIdRelaEN,
): string {
  pobjViewInfoCmPrjIdRelaEN.sfUpdFldSetStr = pobjViewInfoCmPrjIdRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewInfoCmPrjIdRelaEN);
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
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewInfoCmPrjIdRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsViewInfoCmPrjIdRelaEN> {
  let arrViewInfoCmPrjIdRelaObjLst = new Array<clsViewInfoCmPrjIdRelaEN>();
  if (strJSON === '') {
    return arrViewInfoCmPrjIdRelaObjLst;
  }
  try {
    arrViewInfoCmPrjIdRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewInfoCmPrjIdRelaObjLst;
  }
  return arrViewInfoCmPrjIdRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewInfoCmPrjIdRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewInfoCmPrjIdRela_GetObjLstByJSONObjLst(
  arrViewInfoCmPrjIdRelaObjLstS: Array<clsViewInfoCmPrjIdRelaEN>,
): Array<clsViewInfoCmPrjIdRelaEN> {
  const arrViewInfoCmPrjIdRelaObjLst = new Array<clsViewInfoCmPrjIdRelaEN>();
  for (const objInFor of arrViewInfoCmPrjIdRelaObjLstS) {
    const obj1 = ViewInfoCmPrjIdRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewInfoCmPrjIdRelaObjLst.push(obj1);
  }
  return arrViewInfoCmPrjIdRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewInfoCmPrjIdRela_GetObjByJSONStr(strJSON: string): clsViewInfoCmPrjIdRelaEN {
  let pobjViewInfoCmPrjIdRelaEN = new clsViewInfoCmPrjIdRelaEN();
  if (strJSON === '') {
    return pobjViewInfoCmPrjIdRelaEN;
  }
  try {
    pobjViewInfoCmPrjIdRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewInfoCmPrjIdRelaEN;
  }
  return pobjViewInfoCmPrjIdRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewInfoCmPrjIdRela_GetCombineCondition(
  objViewInfoCmPrjIdRelaCond: clsViewInfoCmPrjIdRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewInfoCmPrjIdRelaEN.con_ViewId,
    ) == true
  ) {
    const strComparisonOpViewId: string =
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp[clsViewInfoCmPrjIdRelaEN.con_ViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoCmPrjIdRelaEN.con_ViewId,
      objViewInfoCmPrjIdRelaCond.viewId,
      strComparisonOpViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp[clsViewInfoCmPrjIdRelaEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoCmPrjIdRelaEN.con_CmPrjId,
      objViewInfoCmPrjIdRelaCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewInfoCmPrjIdRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp[clsViewInfoCmPrjIdRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoCmPrjIdRelaEN.con_UpdDate,
      objViewInfoCmPrjIdRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewInfoCmPrjIdRelaEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp[clsViewInfoCmPrjIdRelaEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoCmPrjIdRelaEN.con_UpdUserId,
      objViewInfoCmPrjIdRelaCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp,
      clsViewInfoCmPrjIdRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewInfoCmPrjIdRelaCond.dicFldComparisonOp[clsViewInfoCmPrjIdRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoCmPrjIdRelaEN.con_Memo,
      objViewInfoCmPrjIdRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewInfoCmPrjIdRelaENS:源对象
 * @param objViewInfoCmPrjIdRelaENT:目标对象
 */
export function ViewInfoCmPrjIdRela_GetObjFromJsonObj(
  objViewInfoCmPrjIdRelaENS: clsViewInfoCmPrjIdRelaEN,
): clsViewInfoCmPrjIdRelaEN {
  const objViewInfoCmPrjIdRelaENT: clsViewInfoCmPrjIdRelaEN = new clsViewInfoCmPrjIdRelaEN();
  ObjectAssign(objViewInfoCmPrjIdRelaENT, objViewInfoCmPrjIdRelaENS);
  return objViewInfoCmPrjIdRelaENT;
}
