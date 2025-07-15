/**
 * 类名:clsViewGroupWApi
 * 表名:ViewGroup(00050134)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:39
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
 * 界面组(ViewGroup)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
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
import { clsViewGroupEN } from '@/ts/L0Entity/PrjInterface/clsViewGroupEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewGroup_Controller = 'ViewGroupApi';
export const viewGroup_ConstructorName = 'viewGroup';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewGroupId:关键字
 * @returns 对象
 **/
export async function ViewGroup_GetObjByViewGroupIdAsync(
  strViewGroupId: string,
): Promise<clsViewGroupEN | null> {
  const strThisFuncName = 'GetObjByViewGroupIdAsync';

  if (IsNullOrEmpty(strViewGroupId) == true) {
    const strMsg = Format(
      '参数:[strViewGroupId]不能为空!(In clsViewGroupWApi.GetObjByViewGroupIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewGroupId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewGroupId]的长度:[{0}]不正确!(clsViewGroupWApi.GetObjByViewGroupIdAsync)',
      strViewGroupId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewGroupId';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewGroupId,
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
      const objViewGroup = ViewGroup_GetObjFromJsonObj(returnObj);
      return objViewGroup;
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param strViewGroupId:所给的关键字
 * @returns 对象
 */
export async function ViewGroup_GetObjByViewGroupIdCache(
  strViewGroupId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewGroupIdCache';

  if (IsNullOrEmpty(strViewGroupId) == true) {
    const strMsg = Format(
      '参数:[strViewGroupId]不能为空!(In clsViewGroupWApi.GetObjByViewGroupIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewGroupId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewGroupId]的长度:[{0}]不正确!(clsViewGroupWApi.GetObjByViewGroupIdCache)',
      strViewGroupId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
  try {
    const arrViewGroupSel = arrViewGroupObjLstCache.filter((x) => x.viewGroupId == strViewGroupId);
    let objViewGroup: clsViewGroupEN;
    if (arrViewGroupSel.length > 0) {
      objViewGroup = arrViewGroupSel[0];
      return objViewGroup;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewGroupConst = await ViewGroup_GetObjByViewGroupIdAsync(strViewGroupId);
        if (objViewGroupConst != null) {
          ViewGroup_ReFreshThisCache(strPrjId);
          return objViewGroupConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewGroupId,
      viewGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strViewGroupId:所给的关键字
 * @returns 对象
 */
export async function ViewGroup_GetObjByViewGroupIdlocalStorage(strViewGroupId: string) {
  const strThisFuncName = 'GetObjByViewGroupIdlocalStorage';

  if (IsNullOrEmpty(strViewGroupId) == true) {
    const strMsg = Format(
      '参数:[strViewGroupId]不能为空!(In clsViewGroupWApi.GetObjByViewGroupIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewGroupId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewGroupId]的长度:[{0}]不正确!(clsViewGroupWApi.GetObjByViewGroupIdlocalStorage)',
      strViewGroupId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strViewGroupId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewGroupCache: clsViewGroupEN = JSON.parse(strTempObj);
    return objViewGroupCache;
  }
  try {
    const objViewGroup = await ViewGroup_GetObjByViewGroupIdAsync(strViewGroupId);
    if (objViewGroup != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewGroup));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewGroup;
    }
    return objViewGroup;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewGroupId,
      viewGroup_ConstructorName,
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
 * @param objViewGroup:所给的对象
 * @returns 对象
 */
export async function ViewGroup_UpdateObjInLstCache(
  objViewGroup: clsViewGroupEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
    const obj = arrViewGroupObjLstCache.find(
      (x) => x.viewGroupName == objViewGroup.viewGroupName && x.prjId == objViewGroup.prjId,
    );
    if (obj != null) {
      objViewGroup.viewGroupId = obj.viewGroupId;
      ObjectAssign(obj, objViewGroup);
    } else {
      arrViewGroupObjLstCache.push(objViewGroup);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strViewGroupId:所给的关键字
 * @returns 对象
 */
export async function ViewGroup_GetNameByViewGroupIdCache(
  strViewGroupId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strViewGroupId) == true) {
    const strMsg = Format(
      '参数:[strViewGroupId]不能为空!(In clsViewGroupWApi.GetNameByViewGroupIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewGroupId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewGroupId]的长度:[{0}]不正确!(clsViewGroupWApi.GetNameByViewGroupIdCache)',
      strViewGroupId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
  if (arrViewGroupObjLstCache == null) return '';
  try {
    const arrViewGroupSel = arrViewGroupObjLstCache.filter((x) => x.viewGroupId == strViewGroupId);
    let objViewGroup: clsViewGroupEN;
    if (arrViewGroupSel.length > 0) {
      objViewGroup = arrViewGroupSel[0];
      return objViewGroup.viewGroupName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strViewGroupId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function ViewGroup_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewGroupWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewGroupWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsViewGroupEN.con_ViewGroupId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewGroupEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewGroupEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewGroupId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objViewGroup = await ViewGroup_GetObjByViewGroupIdCache(strViewGroupId, strPrjIdClassfy);
  if (objViewGroup == null) return '';
  if (objViewGroup.GetFldValue(strOutFldName) == null) return '';
  return objViewGroup.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewGroup_SortFunDefa(a: clsViewGroupEN, b: clsViewGroupEN): number {
  return a.viewGroupId.localeCompare(b.viewGroupId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewGroup_SortFunDefa2Fld(a: clsViewGroupEN, b: clsViewGroupEN): number {
  if (a.viewGroupName == b.viewGroupName) return a.inSqlDsTypeId.localeCompare(b.inSqlDsTypeId);
  else return a.viewGroupName.localeCompare(b.viewGroupName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewGroup_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewGroupEN.con_ViewGroupId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return a.viewGroupId.localeCompare(b.viewGroupId);
        };
      case clsViewGroupEN.con_ViewGroupName:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return a.viewGroupName.localeCompare(b.viewGroupName);
        };
      case clsViewGroupEN.con_InSqlDsTypeId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (a.inSqlDsTypeId == null) return -1;
          if (b.inSqlDsTypeId == null) return 1;
          return a.inSqlDsTypeId.localeCompare(b.inSqlDsTypeId);
        };
      case clsViewGroupEN.con_InRelaTabId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (a.inRelaTabId == null) return -1;
          if (b.inRelaTabId == null) return 1;
          return a.inRelaTabId.localeCompare(b.inRelaTabId);
        };
      case clsViewGroupEN.con_OutSqlDsTypeId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (a.outSqlDsTypeId == null) return -1;
          if (b.outSqlDsTypeId == null) return 1;
          return a.outSqlDsTypeId.localeCompare(b.outSqlDsTypeId);
        };
      case clsViewGroupEN.con_OutRelaTabId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return a.outRelaTabId.localeCompare(b.outRelaTabId);
        };
      case clsViewGroupEN.con_PrjDomain:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (a.prjDomain == null) return -1;
          if (b.prjDomain == null) return 1;
          return a.prjDomain.localeCompare(b.prjDomain);
        };
      case clsViewGroupEN.con_ActionPath:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return a.actionPath.localeCompare(b.actionPath);
        };
      case clsViewGroupEN.con_PrjId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewGroupEN.con_UserId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsViewGroupEN.con_UpdDate:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewGroupEN.con_Memo:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsViewGroupEN.con_TableNameForProg:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (a.tableNameForProg == null) return -1;
          if (b.tableNameForProg == null) return 1;
          return a.tableNameForProg.localeCompare(b.tableNameForProg);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewGroup]中不存在!(in ${viewGroup_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewGroupEN.con_ViewGroupId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return b.viewGroupId.localeCompare(a.viewGroupId);
        };
      case clsViewGroupEN.con_ViewGroupName:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return b.viewGroupName.localeCompare(a.viewGroupName);
        };
      case clsViewGroupEN.con_InSqlDsTypeId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (b.inSqlDsTypeId == null) return -1;
          if (a.inSqlDsTypeId == null) return 1;
          return b.inSqlDsTypeId.localeCompare(a.inSqlDsTypeId);
        };
      case clsViewGroupEN.con_InRelaTabId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (b.inRelaTabId == null) return -1;
          if (a.inRelaTabId == null) return 1;
          return b.inRelaTabId.localeCompare(a.inRelaTabId);
        };
      case clsViewGroupEN.con_OutSqlDsTypeId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (b.outSqlDsTypeId == null) return -1;
          if (a.outSqlDsTypeId == null) return 1;
          return b.outSqlDsTypeId.localeCompare(a.outSqlDsTypeId);
        };
      case clsViewGroupEN.con_OutRelaTabId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return b.outRelaTabId.localeCompare(a.outRelaTabId);
        };
      case clsViewGroupEN.con_PrjDomain:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (b.prjDomain == null) return -1;
          if (a.prjDomain == null) return 1;
          return b.prjDomain.localeCompare(a.prjDomain);
        };
      case clsViewGroupEN.con_ActionPath:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return b.actionPath.localeCompare(a.actionPath);
        };
      case clsViewGroupEN.con_PrjId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewGroupEN.con_UserId:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsViewGroupEN.con_UpdDate:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewGroupEN.con_Memo:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsViewGroupEN.con_TableNameForProg:
        return (a: clsViewGroupEN, b: clsViewGroupEN) => {
          if (b.tableNameForProg == null) return -1;
          if (a.tableNameForProg == null) return 1;
          return b.tableNameForProg.localeCompare(a.tableNameForProg);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewGroup]中不存在!(in ${viewGroup_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewGroup_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewGroupEN.con_ViewGroupId:
      return (obj: clsViewGroupEN) => {
        return obj.viewGroupId === value;
      };
    case clsViewGroupEN.con_ViewGroupName:
      return (obj: clsViewGroupEN) => {
        return obj.viewGroupName === value;
      };
    case clsViewGroupEN.con_InSqlDsTypeId:
      return (obj: clsViewGroupEN) => {
        return obj.inSqlDsTypeId === value;
      };
    case clsViewGroupEN.con_InRelaTabId:
      return (obj: clsViewGroupEN) => {
        return obj.inRelaTabId === value;
      };
    case clsViewGroupEN.con_OutSqlDsTypeId:
      return (obj: clsViewGroupEN) => {
        return obj.outSqlDsTypeId === value;
      };
    case clsViewGroupEN.con_OutRelaTabId:
      return (obj: clsViewGroupEN) => {
        return obj.outRelaTabId === value;
      };
    case clsViewGroupEN.con_PrjDomain:
      return (obj: clsViewGroupEN) => {
        return obj.prjDomain === value;
      };
    case clsViewGroupEN.con_ActionPath:
      return (obj: clsViewGroupEN) => {
        return obj.actionPath === value;
      };
    case clsViewGroupEN.con_PrjId:
      return (obj: clsViewGroupEN) => {
        return obj.prjId === value;
      };
    case clsViewGroupEN.con_UserId:
      return (obj: clsViewGroupEN) => {
        return obj.userId === value;
      };
    case clsViewGroupEN.con_UpdDate:
      return (obj: clsViewGroupEN) => {
        return obj.updDate === value;
      };
    case clsViewGroupEN.con_Memo:
      return (obj: clsViewGroupEN) => {
        return obj.memo === value;
      };
    case clsViewGroupEN.con_TableNameForProg:
      return (obj: clsViewGroupEN) => {
        return obj.tableNameForProg === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewGroup]中不存在!(in ${viewGroup_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ViewGroup_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewGroupWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewGroupWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsViewGroupEN.con_ViewGroupId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewGroup = await ViewGroup_GetObjLstCache(strPrjIdClassfy);
  if (arrViewGroup == null) return [];
  let arrViewGroupSel = arrViewGroup;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewGroupSel = arrViewGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewGroupSel.length == 0) return [];
  return arrViewGroupSel.map((x) => x.viewGroupId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewGroup_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewGroupEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
      const objViewGroup = ViewGroup_GetObjFromJsonObj(returnObj);
      return objViewGroup;
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewGroupEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewGroupEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewGroupEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewGroupEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewGroupExObjLstCache: Array<clsViewGroupEN> = CacheHelper.Get(strKey);
    const arrViewGroupObjLstT = ViewGroup_GetObjLstByJSONObjLst(arrViewGroupExObjLstCache);
    return arrViewGroupObjLstT;
  }
  try {
    const arrViewGroupExObjLst = await ViewGroup_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewGroupExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewGroupExObjLst.length,
    );
    console.log(strInfo);
    return arrViewGroupExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewGroup_ConstructorName,
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
export async function ViewGroup_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewGroupEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewGroupEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewGroupEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewGroupEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewGroupEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewGroupExObjLstCache: Array<clsViewGroupEN> = JSON.parse(strTempObjLst);
    const arrViewGroupObjLstT = ViewGroup_GetObjLstByJSONObjLst(arrViewGroupExObjLstCache);
    return arrViewGroupObjLstT;
  }
  try {
    const arrViewGroupExObjLst = await ViewGroup_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewGroupExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewGroupExObjLst.length,
    );
    console.log(strInfo);
    return arrViewGroupExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewGroup_ConstructorName,
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
export async function ViewGroup_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewGroupObjLstCache: Array<clsViewGroupEN> = JSON.parse(strTempObjLst);
    return arrViewGroupObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewGroup_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewGroupEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
          viewGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewGroupEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewGroupEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewGroupEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewGroupEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewGroupEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewGroupExObjLstCache: Array<clsViewGroupEN> = JSON.parse(strTempObjLst);
    const arrViewGroupObjLstT = ViewGroup_GetObjLstByJSONObjLst(arrViewGroupExObjLstCache);
    return arrViewGroupObjLstT;
  }
  try {
    const arrViewGroupExObjLst = await ViewGroup_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewGroupExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewGroupExObjLst.length,
    );
    console.log(strInfo);
    return arrViewGroupExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewGroup_ConstructorName,
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
export async function ViewGroup_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewGroupObjLstCache: Array<clsViewGroupEN> = JSON.parse(strTempObjLst);
    return arrViewGroupObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewGroup_GetObjLstCache(strPrjId: string): Promise<Array<clsViewGroupEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewGroupWApi.ViewGroup_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewGroupWApi.ViewGroup_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrViewGroupObjLstCache;
  switch (clsViewGroupEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewGroupObjLstCache = await ViewGroup_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrViewGroupObjLstCache = await ViewGroup_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrViewGroupObjLstCache = await ViewGroup_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrViewGroupObjLstCache = await ViewGroup_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrViewGroupObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewGroup_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewGroupObjLstCache;
  switch (clsViewGroupEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewGroupObjLstCache = await ViewGroup_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrViewGroupObjLstCache = await ViewGroup_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrViewGroupObjLstCache = null;
      break;
    default:
      arrViewGroupObjLstCache = null;
      break;
  }
  return arrViewGroupObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewGroupIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewGroup_GetSubObjLstCache(
  objViewGroupCond: clsViewGroupEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
  let arrViewGroupSel = arrViewGroupObjLstCache;
  if (objViewGroupCond.sfFldComparisonOp == null || objViewGroupCond.sfFldComparisonOp == '')
    return arrViewGroupSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewGroupCond.sfFldComparisonOp,
  );
  //console.log("clsViewGroupWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewGroupCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewGroupCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewGroupCond),
      viewGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewGroupEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewGroupId:关键字列表
 * @returns 对象列表
 **/
export async function ViewGroup_GetObjLstByViewGroupIdLstAsync(
  arrViewGroupId: Array<string>,
): Promise<Array<clsViewGroupEN>> {
  const strThisFuncName = 'GetObjLstByViewGroupIdLstAsync';
  const strAction = 'GetObjLstByViewGroupIdLst';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewGroupId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param arrstrViewGroupIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewGroup_GetObjLstByViewGroupIdLstCache(
  arrViewGroupIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByViewGroupIdLstCache';
  try {
    const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
    const arrViewGroupSel = arrViewGroupObjLstCache.filter(
      (x) => arrViewGroupIdLst.indexOf(x.viewGroupId) > -1,
    );
    return arrViewGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewGroupIdLst.join(','),
      viewGroup_ConstructorName,
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
export async function ViewGroup_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewGroupEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
          viewGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewGroupEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
          viewGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewGroupEN>();
  const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
  if (arrViewGroupObjLstCache.length == 0) return arrViewGroupObjLstCache;
  let arrViewGroupSel = arrViewGroupObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objViewGroupCond = new clsViewGroupEN();
  ObjectAssign(objViewGroupCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsViewGroupWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewGroupCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewGroupSel.length == 0) return arrViewGroupSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewGroupSel = arrViewGroupSel.sort(ViewGroup_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewGroupSel = arrViewGroupSel.sort(objPagerPara.sortFun);
    }
    arrViewGroupSel = arrViewGroupSel.slice(intStart, intEnd);
    return arrViewGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewGroupEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewGroup_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewGroupEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewGroupEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
          viewGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param strViewGroupId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewGroup_DelRecordAsync(strViewGroupId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewGroup_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strViewGroupId);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param arrViewGroupId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewGroup_DelViewGroupsAsync(arrViewGroupId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelViewGroupsAsync';
  const strAction = 'DelViewGroups';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewGroupId, config);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_DelViewGroupsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelViewGroupsByCondAsync';
  const strAction = 'DelViewGroupsByCond';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param objViewGroupEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewGroup_AddNewRecordAsync(
  objViewGroupEN: clsViewGroupEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objViewGroupEN.viewGroupId === null || objViewGroupEN.viewGroupId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewGroupEN);
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupEN, config);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param objViewGroupEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewGroup_AddNewRecordWithMaxIdAsync(
  objViewGroupEN: clsViewGroupEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupEN, config);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param objViewGroupEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewGroup_AddNewRecordWithReturnKeyAsync(
  objViewGroupEN: clsViewGroupEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupEN, config);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param objViewGroupEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewGroup_UpdateRecordAsync(
  objViewGroupEN: clsViewGroupEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewGroupEN.sfUpdFldSetStr === undefined ||
    objViewGroupEN.sfUpdFldSetStr === null ||
    objViewGroupEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewGroupEN.viewGroupId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupEN, config);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param objViewGroupEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewGroup_UpdateWithConditionAsync(
  objViewGroupEN: clsViewGroupEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewGroupEN.sfUpdFldSetStr === undefined ||
    objViewGroupEN.sfUpdFldSetStr === null ||
    objViewGroupEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewGroupEN.viewGroupId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);
  objViewGroupEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewGroupEN, config);
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param objstrViewGroupIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewGroup_IsExistRecordCache(
  objViewGroupCond: clsViewGroupEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
  if (arrViewGroupObjLstCache == null) return false;
  let arrViewGroupSel = arrViewGroupObjLstCache;
  if (objViewGroupCond.sfFldComparisonOp == null || objViewGroupCond.sfFldComparisonOp == '')
    return arrViewGroupSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewGroupCond.sfFldComparisonOp,
  );
  //console.log("clsViewGroupWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewGroupCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewGroupCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewGroupSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewGroupCond),
      viewGroup_ConstructorName,
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
export async function ViewGroup_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param strViewGroupId:所给的关键字
 * @returns 对象
 */
export async function ViewGroup_IsExistCache(strViewGroupId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
  if (arrViewGroupObjLstCache == null) return false;
  try {
    const arrViewGroupSel = arrViewGroupObjLstCache.filter((x) => x.viewGroupId == strViewGroupId);
    if (arrViewGroupSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewGroupId,
      viewGroup_ConstructorName,
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
 * @param strViewGroupId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewGroup_IsExistAsync(strViewGroupId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewGroupId,
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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export async function ViewGroup_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * @param objViewGroupCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewGroup_GetRecCountByCondCache(
  objViewGroupCond: clsViewGroupEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewGroupObjLstCache = await ViewGroup_GetObjLstCache(strPrjId);
  if (arrViewGroupObjLstCache == null) return 0;
  let arrViewGroupSel = arrViewGroupObjLstCache;
  if (objViewGroupCond.sfFldComparisonOp == null || objViewGroupCond.sfFldComparisonOp == '')
    return arrViewGroupSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewGroupCond.sfFldComparisonOp,
  );
  //console.log("clsViewGroupWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewGroupCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewGroupCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewGroupSel = arrViewGroupSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewGroupSel = arrViewGroupSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewGroupSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewGroupCond),
      viewGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function ViewGroup_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function ViewGroup_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewGroup_Controller, strAction);

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
        viewGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewGroup_ConstructorName,
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
export function ViewGroup_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewGroup_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsViewGroupWApi.clsViewGroupWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewGroupWApi.clsViewGroupWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strPrjId);
  switch (clsViewGroupEN.CacheModeId) {
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
export function ViewGroup_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsViewGroupWApi.ViewGroup_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewGroupWApi.ViewGroup_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsViewGroupEN._CurrTabName, strPrjId);
    switch (clsViewGroupEN.CacheModeId) {
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

 * @param strPrjId:
*/
export async function ViewGroup_BindDdl_ViewGroupIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewGroupWApi.BindDdl_ViewGroupIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewGroupWApi.BindDdl_ViewGroupIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ViewGroupIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewGroupIdInDivCache");
  const arrObjLstSel = await ViewGroup_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewGroupEN.con_ViewGroupId,
    clsViewGroupEN.con_ViewGroupName,
    '界面组',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewGroup_CheckPropertyNew(pobjViewGroupEN: clsViewGroupEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewGroupEN.viewGroupName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[界面组名称]不能为空(In 界面组)!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outRelaTabId) === true ||
    pobjViewGroupEN.outRelaTabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[输出数据源表ID]不能为空(In 界面组)!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.actionPath) === true) {
    throw new Error(
      '(errid:Watl000411)字段[Action路径]不能为空(In 界面组)!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.prjId) === true || pobjViewGroupEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 界面组)!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.userId) === true || pobjViewGroupEN.userId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[用户Id]不能为空(In 界面组)!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupId) == false &&
    GetStrLen(pobjViewGroupEN.viewGroupId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面组ID(viewGroupId)]的长度不能超过8(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.viewGroupId)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupName) == false &&
    GetStrLen(pobjViewGroupEN.viewGroupName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面组名称(viewGroupName)]的长度不能超过30(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.viewGroupName)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inSqlDsTypeId) == false &&
    GetStrLen(pobjViewGroupEN.inSqlDsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[输入数据源类型(inSqlDsTypeId)]的长度不能超过2(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.inSqlDsTypeId)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inRelaTabId) == false &&
    GetStrLen(pobjViewGroupEN.inRelaTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[输入数据源表ID(inRelaTabId)]的长度不能超过8(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.inRelaTabId)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outSqlDsTypeId) == false &&
    GetStrLen(pobjViewGroupEN.outSqlDsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[输出数据源类型(outSqlDsTypeId)]的长度不能超过2(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.outSqlDsTypeId)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outRelaTabId) == false &&
    GetStrLen(pobjViewGroupEN.outRelaTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[输出数据源表ID(outRelaTabId)]的长度不能超过8(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.outRelaTabId)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjDomain) == false &&
    GetStrLen(pobjViewGroupEN.prjDomain) > 128
  ) {
    throw new Error(
      '(errid:Watl000413)字段[域/包名(prjDomain)]的长度不能超过128(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.prjDomain)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.actionPath) == false &&
    GetStrLen(pobjViewGroupEN.actionPath) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Action路径(actionPath)]的长度不能超过100(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.actionPath)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.prjId) == false && GetStrLen(pobjViewGroupEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.prjId)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.userId) == false && GetStrLen(pobjViewGroupEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.userId)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.updDate) == false && GetStrLen(pobjViewGroupEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.updDate)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.memo) == false && GetStrLen(pobjViewGroupEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.memo)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.tableNameForProg) == false &&
    GetStrLen(pobjViewGroupEN.tableNameForProg) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[编程用表名(tableNameForProg)]的长度不能超过50(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.tableNameForProg)(clsViewGroupBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupId) == false &&
    undefined !== pobjViewGroupEN.viewGroupId &&
    tzDataType.isString(pobjViewGroupEN.viewGroupId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面组ID(viewGroupId)]的值:[$(pobjViewGroupEN.viewGroupId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupName) == false &&
    undefined !== pobjViewGroupEN.viewGroupName &&
    tzDataType.isString(pobjViewGroupEN.viewGroupName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面组名称(viewGroupName)]的值:[$(pobjViewGroupEN.viewGroupName)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inSqlDsTypeId) == false &&
    undefined !== pobjViewGroupEN.inSqlDsTypeId &&
    tzDataType.isString(pobjViewGroupEN.inSqlDsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[输入数据源类型(inSqlDsTypeId)]的值:[$(pobjViewGroupEN.inSqlDsTypeId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inRelaTabId) == false &&
    undefined !== pobjViewGroupEN.inRelaTabId &&
    tzDataType.isString(pobjViewGroupEN.inRelaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[输入数据源表ID(inRelaTabId)]的值:[$(pobjViewGroupEN.inRelaTabId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outSqlDsTypeId) == false &&
    undefined !== pobjViewGroupEN.outSqlDsTypeId &&
    tzDataType.isString(pobjViewGroupEN.outSqlDsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[输出数据源类型(outSqlDsTypeId)]的值:[$(pobjViewGroupEN.outSqlDsTypeId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outRelaTabId) == false &&
    undefined !== pobjViewGroupEN.outRelaTabId &&
    tzDataType.isString(pobjViewGroupEN.outRelaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[输出数据源表ID(outRelaTabId)]的值:[$(pobjViewGroupEN.outRelaTabId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjDomain) == false &&
    undefined !== pobjViewGroupEN.prjDomain &&
    tzDataType.isString(pobjViewGroupEN.prjDomain) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[域/包名(prjDomain)]的值:[$(pobjViewGroupEN.prjDomain)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.actionPath) == false &&
    undefined !== pobjViewGroupEN.actionPath &&
    tzDataType.isString(pobjViewGroupEN.actionPath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Action路径(actionPath)]的值:[$(pobjViewGroupEN.actionPath)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjId) == false &&
    undefined !== pobjViewGroupEN.prjId &&
    tzDataType.isString(pobjViewGroupEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjViewGroupEN.prjId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.userId) == false &&
    undefined !== pobjViewGroupEN.userId &&
    tzDataType.isString(pobjViewGroupEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjViewGroupEN.userId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.updDate) == false &&
    undefined !== pobjViewGroupEN.updDate &&
    tzDataType.isString(pobjViewGroupEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjViewGroupEN.updDate)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.memo) == false &&
    undefined !== pobjViewGroupEN.memo &&
    tzDataType.isString(pobjViewGroupEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjViewGroupEN.memo)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.tableNameForProg) == false &&
    undefined !== pobjViewGroupEN.tableNameForProg &&
    tzDataType.isString(pobjViewGroupEN.tableNameForProg) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[编程用表名(tableNameForProg)]的值:[$(pobjViewGroupEN.tableNameForProg)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewGroupEN.inSqlDsTypeId) == false &&
    pobjViewGroupEN.inSqlDsTypeId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.inSqlDsTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[输入数据源类型]作为外键字段,长度应该为2(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inRelaTabId) == false &&
    pobjViewGroupEN.inRelaTabId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.inRelaTabId) != 8
  ) {
    throw '(errid:Watl000415)字段[输入数据源表ID]作为外键字段,长度应该为8(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outSqlDsTypeId) == false &&
    pobjViewGroupEN.outSqlDsTypeId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.outSqlDsTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[输出数据源类型]作为外键字段,长度应该为2(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outRelaTabId) == false &&
    pobjViewGroupEN.outRelaTabId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.outRelaTabId) != 8
  ) {
    throw '(errid:Watl000415)字段[输出数据源表ID]作为外键字段,长度应该为8(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjId) == false &&
    pobjViewGroupEN.prjId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程ID]作为外键字段,长度应该为4(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewGroup_CheckProperty4Update(pobjViewGroupEN: clsViewGroupEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupId) == false &&
    GetStrLen(pobjViewGroupEN.viewGroupId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面组ID(viewGroupId)]的长度不能超过8(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.viewGroupId)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupName) == false &&
    GetStrLen(pobjViewGroupEN.viewGroupName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面组名称(viewGroupName)]的长度不能超过30(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.viewGroupName)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inSqlDsTypeId) == false &&
    GetStrLen(pobjViewGroupEN.inSqlDsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[输入数据源类型(inSqlDsTypeId)]的长度不能超过2(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.inSqlDsTypeId)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inRelaTabId) == false &&
    GetStrLen(pobjViewGroupEN.inRelaTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[输入数据源表ID(inRelaTabId)]的长度不能超过8(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.inRelaTabId)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outSqlDsTypeId) == false &&
    GetStrLen(pobjViewGroupEN.outSqlDsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[输出数据源类型(outSqlDsTypeId)]的长度不能超过2(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.outSqlDsTypeId)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outRelaTabId) == false &&
    GetStrLen(pobjViewGroupEN.outRelaTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[输出数据源表ID(outRelaTabId)]的长度不能超过8(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.outRelaTabId)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjDomain) == false &&
    GetStrLen(pobjViewGroupEN.prjDomain) > 128
  ) {
    throw new Error(
      '(errid:Watl000416)字段[域/包名(prjDomain)]的长度不能超过128(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.prjDomain)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.actionPath) == false &&
    GetStrLen(pobjViewGroupEN.actionPath) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Action路径(actionPath)]的长度不能超过100(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.actionPath)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.prjId) == false && GetStrLen(pobjViewGroupEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.prjId)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.userId) == false && GetStrLen(pobjViewGroupEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.userId)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.updDate) == false && GetStrLen(pobjViewGroupEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.updDate)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewGroupEN.memo) == false && GetStrLen(pobjViewGroupEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.memo)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.tableNameForProg) == false &&
    GetStrLen(pobjViewGroupEN.tableNameForProg) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[编程用表名(tableNameForProg)]的长度不能超过50(In 界面组(ViewGroup))!值:$(pobjViewGroupEN.tableNameForProg)(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupId) == false &&
    undefined !== pobjViewGroupEN.viewGroupId &&
    tzDataType.isString(pobjViewGroupEN.viewGroupId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面组ID(viewGroupId)]的值:[$(pobjViewGroupEN.viewGroupId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupName) == false &&
    undefined !== pobjViewGroupEN.viewGroupName &&
    tzDataType.isString(pobjViewGroupEN.viewGroupName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面组名称(viewGroupName)]的值:[$(pobjViewGroupEN.viewGroupName)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inSqlDsTypeId) == false &&
    undefined !== pobjViewGroupEN.inSqlDsTypeId &&
    tzDataType.isString(pobjViewGroupEN.inSqlDsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[输入数据源类型(inSqlDsTypeId)]的值:[$(pobjViewGroupEN.inSqlDsTypeId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inRelaTabId) == false &&
    undefined !== pobjViewGroupEN.inRelaTabId &&
    tzDataType.isString(pobjViewGroupEN.inRelaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[输入数据源表ID(inRelaTabId)]的值:[$(pobjViewGroupEN.inRelaTabId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outSqlDsTypeId) == false &&
    undefined !== pobjViewGroupEN.outSqlDsTypeId &&
    tzDataType.isString(pobjViewGroupEN.outSqlDsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[输出数据源类型(outSqlDsTypeId)]的值:[$(pobjViewGroupEN.outSqlDsTypeId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outRelaTabId) == false &&
    undefined !== pobjViewGroupEN.outRelaTabId &&
    tzDataType.isString(pobjViewGroupEN.outRelaTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[输出数据源表ID(outRelaTabId)]的值:[$(pobjViewGroupEN.outRelaTabId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjDomain) == false &&
    undefined !== pobjViewGroupEN.prjDomain &&
    tzDataType.isString(pobjViewGroupEN.prjDomain) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[域/包名(prjDomain)]的值:[$(pobjViewGroupEN.prjDomain)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.actionPath) == false &&
    undefined !== pobjViewGroupEN.actionPath &&
    tzDataType.isString(pobjViewGroupEN.actionPath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Action路径(actionPath)]的值:[$(pobjViewGroupEN.actionPath)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjId) == false &&
    undefined !== pobjViewGroupEN.prjId &&
    tzDataType.isString(pobjViewGroupEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjViewGroupEN.prjId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.userId) == false &&
    undefined !== pobjViewGroupEN.userId &&
    tzDataType.isString(pobjViewGroupEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjViewGroupEN.userId)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.updDate) == false &&
    undefined !== pobjViewGroupEN.updDate &&
    tzDataType.isString(pobjViewGroupEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjViewGroupEN.updDate)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.memo) == false &&
    undefined !== pobjViewGroupEN.memo &&
    tzDataType.isString(pobjViewGroupEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjViewGroupEN.memo)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.tableNameForProg) == false &&
    undefined !== pobjViewGroupEN.tableNameForProg &&
    tzDataType.isString(pobjViewGroupEN.tableNameForProg) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[编程用表名(tableNameForProg)]的值:[$(pobjViewGroupEN.tableNameForProg)], 非法,应该为字符型(In 界面组(ViewGroup))!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjViewGroupEN.viewGroupId) === true ||
    pobjViewGroupEN.viewGroupId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[界面组ID]不能为空(In 界面组)!(clsViewGroupBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewGroupEN.inSqlDsTypeId) == false &&
    pobjViewGroupEN.inSqlDsTypeId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.inSqlDsTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[输入数据源类型]作为外键字段,长度应该为2(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.inRelaTabId) == false &&
    pobjViewGroupEN.inRelaTabId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.inRelaTabId) != 8
  ) {
    throw '(errid:Watl000418)字段[输入数据源表ID]作为外键字段,长度应该为8(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outSqlDsTypeId) == false &&
    pobjViewGroupEN.outSqlDsTypeId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.outSqlDsTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[输出数据源类型]作为外键字段,长度应该为2(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.outRelaTabId) == false &&
    pobjViewGroupEN.outRelaTabId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.outRelaTabId) != 8
  ) {
    throw '(errid:Watl000418)字段[输出数据源表ID]作为外键字段,长度应该为8(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewGroupEN.prjId) == false &&
    pobjViewGroupEN.prjId != '[nuull]' &&
    GetStrLen(pobjViewGroupEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程ID]作为外键字段,长度应该为4(In 界面组)!(clsViewGroupBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewGroup_GetJSONStrByObj(pobjViewGroupEN: clsViewGroupEN): string {
  pobjViewGroupEN.sfUpdFldSetStr = pobjViewGroupEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewGroupEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewGroup_GetObjLstByJSONStr(strJSON: string): Array<clsViewGroupEN> {
  let arrViewGroupObjLst = new Array<clsViewGroupEN>();
  if (strJSON === '') {
    return arrViewGroupObjLst;
  }
  try {
    arrViewGroupObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewGroupObjLst;
  }
  return arrViewGroupObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewGroupObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewGroup_GetObjLstByJSONObjLst(
  arrViewGroupObjLstS: Array<clsViewGroupEN>,
): Array<clsViewGroupEN> {
  const arrViewGroupObjLst = new Array<clsViewGroupEN>();
  for (const objInFor of arrViewGroupObjLstS) {
    const obj1 = ViewGroup_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewGroupObjLst.push(obj1);
  }
  return arrViewGroupObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewGroup_GetObjByJSONStr(strJSON: string): clsViewGroupEN {
  let pobjViewGroupEN = new clsViewGroupEN();
  if (strJSON === '') {
    return pobjViewGroupEN;
  }
  try {
    pobjViewGroupEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewGroupEN;
  }
  return pobjViewGroupEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewGroup_GetCombineCondition(objViewGroupCond: clsViewGroupEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_ViewGroupId,
    ) == true
  ) {
    const strComparisonOpViewGroupId: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_ViewGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_ViewGroupId,
      objViewGroupCond.viewGroupId,
      strComparisonOpViewGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_ViewGroupName,
    ) == true
  ) {
    const strComparisonOpViewGroupName: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_ViewGroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_ViewGroupName,
      objViewGroupCond.viewGroupName,
      strComparisonOpViewGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_InSqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpInSqlDsTypeId: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_InSqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_InSqlDsTypeId,
      objViewGroupCond.inSqlDsTypeId,
      strComparisonOpInSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_InRelaTabId,
    ) == true
  ) {
    const strComparisonOpInRelaTabId: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_InRelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_InRelaTabId,
      objViewGroupCond.inRelaTabId,
      strComparisonOpInRelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_OutSqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpOutSqlDsTypeId: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_OutSqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_OutSqlDsTypeId,
      objViewGroupCond.outSqlDsTypeId,
      strComparisonOpOutSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_OutRelaTabId,
    ) == true
  ) {
    const strComparisonOpOutRelaTabId: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_OutRelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_OutRelaTabId,
      objViewGroupCond.outRelaTabId,
      strComparisonOpOutRelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_PrjDomain,
    ) == true
  ) {
    const strComparisonOpPrjDomain: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_PrjDomain];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_PrjDomain,
      objViewGroupCond.prjDomain,
      strComparisonOpPrjDomain,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_ActionPath,
    ) == true
  ) {
    const strComparisonOpActionPath: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_ActionPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_ActionPath,
      objViewGroupCond.actionPath,
      strComparisonOpActionPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_PrjId,
      objViewGroupCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_UserId,
      objViewGroupCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_UpdDate,
      objViewGroupCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_Memo,
      objViewGroupCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewGroupCond.dicFldComparisonOp,
      clsViewGroupEN.con_TableNameForProg,
    ) == true
  ) {
    const strComparisonOpTableNameForProg: string =
      objViewGroupCond.dicFldComparisonOp[clsViewGroupEN.con_TableNameForProg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewGroupEN.con_TableNameForProg,
      objViewGroupCond.tableNameForProg,
      strComparisonOpTableNameForProg,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewGroup(界面组),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewGroupName: 界面组名称(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewGroup_GetUniCondStr(objViewGroupEN: clsViewGroupEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewGroupName = '{0}'", objViewGroupEN.viewGroupName);
  strWhereCond += Format(" and PrjId = '{0}'", objViewGroupEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewGroup(界面组),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewGroupName: 界面组名称(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewGroup_GetUniCondStr4Update(objViewGroupEN: clsViewGroupEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewGroupId <> '{0}'", objViewGroupEN.viewGroupId);
  strWhereCond += Format(" and ViewGroupName = '{0}'", objViewGroupEN.viewGroupName);
  strWhereCond += Format(" and PrjId = '{0}'", objViewGroupEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewGroupENS:源对象
 * @param objViewGroupENT:目标对象
 */
export function ViewGroup_GetObjFromJsonObj(objViewGroupENS: clsViewGroupEN): clsViewGroupEN {
  const objViewGroupENT: clsViewGroupEN = new clsViewGroupEN();
  ObjectAssign(objViewGroupENT, objViewGroupENS);
  return objViewGroupENT;
}
