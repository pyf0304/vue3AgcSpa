/**
 * 类名:clsCTCodeTypeGroupWApi
 * 表名:CTCodeTypeGroup(00050648)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 13:16:57
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
 * CTCodeTypeGroup(CTCodeTypeGroup)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年06月06日.
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { cTCodeTypeGroupCache, isFuncMapCache } from '@/views/GeneCode/CTCodeTypeGroupVueShare';
import { clsCTCodeTypeGroupENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupENEx';
import {
  clsCTCodeTypeGroupEN,
  CTCodeTypeGroupKey,
} from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const cTCodeTypeGroup_Controller = 'CTCodeTypeGroupApi';
export const cTCodeTypeGroup_ConstructorName = 'cTCodeTypeGroup';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param key:包含关键字的对象
 * @returns 对象
 **/
export async function CTCodeTypeGroup_GetObjByKeyAsync(
  key: CTCodeTypeGroupKey,
): Promise<clsCTCodeTypeGroupEN | null> {
  const strThisFuncName = 'GetObjByKeyAsync';
  if (key.ctGroupId === undefined || key.ctGroupId === null || key.ctGroupId === '') {
    const strMsg = Format(
      '关键字段[CtGroupId]不能为空!(in {0}.{1})',
      cTCodeTypeGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAction = 'GetObjByCtGroupId';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtGroupId: key.ctGroupId,
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
      const objCTCodeTypeGroup = CTCodeTypeGroup_GetObjFromJsonObj(returnObj);
      return objCTCodeTypeGroup;
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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

/**
 * 根据关键字获取特定对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param key:关键字对象
 * @returns 对象
 */
export async function CTCodeTypeGroup_GetObjByKeyCache(
  key: CTCodeTypeGroupKey,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCtGroupIdCache';

  if (IsNullOrEmpty(key.ctGroupId) == true) {
    const strMsg = Format(
      '参数:[key.ctGroupId]不能为空!(In clsCTCodeTypeGroupWApi.GetObjByCtGroupIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.ctGroupId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[key.ctGroupId]的长度:[{0}]不正确!(clsCTCodeTypeGroupWApi.GetObjByCtGroupIdCache)',
      key.ctGroupId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
  try {
    const arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache.filter(
      (x) => x.ctGroupId == key.ctGroupId,
    );
    let objCTCodeTypeGroup: clsCTCodeTypeGroupEN;
    if (arrCTCodeTypeGroupSel.length > 0) {
      objCTCodeTypeGroup = arrCTCodeTypeGroupSel[0];
      return objCTCodeTypeGroup;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCTCodeTypeGroupConst = await CTCodeTypeGroup_GetObjByKeyAsync(key);
        if (objCTCodeTypeGroupConst != null) {
          CTCodeTypeGroup_ReFreshThisCache();
          return objCTCodeTypeGroupConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      key.ctGroupId,
      cTCodeTypeGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCTCodeTypeGroup:所给的对象
 * @returns 对象
 */
export async function CTCodeTypeGroup_UpdateObjInLstCache(
  objCTCodeTypeGroup: clsCTCodeTypeGroupEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
    const obj = arrCTCodeTypeGroupObjLstCache.find(
      (x) =>
        x.applicationTypeId == objCTCodeTypeGroup.applicationTypeId &&
        x.groupName == objCTCodeTypeGroup.groupName,
    );
    if (obj != null) {
      objCTCodeTypeGroup.ctGroupId = obj.ctGroupId;
      ObjectAssign(obj, objCTCodeTypeGroup);
    } else {
      arrCTCodeTypeGroupObjLstCache.push(objCTCodeTypeGroup);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cTCodeTypeGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroup_SortFunDefa(
  a: clsCTCodeTypeGroupEN,
  b: clsCTCodeTypeGroupEN,
): number {
  return a.ctGroupId.localeCompare(b.ctGroupId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroup_SortFunDefa2Fld(
  a: clsCTCodeTypeGroupEN,
  b: clsCTCodeTypeGroupEN,
): number {
  if (a.applicationTypeId == b.applicationTypeId) return a.groupName.localeCompare(b.groupName);
  else return a.applicationTypeId - b.applicationTypeId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroup_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCTCodeTypeGroupEN.con_CtGroupId:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          return a.ctGroupId.localeCompare(b.ctGroupId);
        };
      case clsCTCodeTypeGroupEN.con_ApplicationTypeId:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsCTCodeTypeGroupEN.con_GroupName:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (a.groupName == null) return -1;
          if (b.groupName == null) return 1;
          return a.groupName.localeCompare(b.groupName);
        };
      case clsCTCodeTypeGroupEN.con_GroupENName:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (a.groupENName == null) return -1;
          if (b.groupENName == null) return 1;
          return a.groupENName.localeCompare(b.groupENName);
        };
      case clsCTCodeTypeGroupEN.con_Description:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (a.description == null) return -1;
          if (b.description == null) return 1;
          return a.description.localeCompare(b.description);
        };
      case clsCTCodeTypeGroupEN.con_OrderNum:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCTCodeTypeGroupEN.con_InUse:
        return (a: clsCTCodeTypeGroupEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsCTCodeTypeGroupEN.con_UpdDate:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCTCodeTypeGroupEN.con_UpdUser:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CTCodeTypeGroup]中不存在!(in ${cTCodeTypeGroup_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCTCodeTypeGroupEN.con_CtGroupId:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          return b.ctGroupId.localeCompare(a.ctGroupId);
        };
      case clsCTCodeTypeGroupEN.con_ApplicationTypeId:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsCTCodeTypeGroupEN.con_GroupName:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (b.groupName == null) return -1;
          if (a.groupName == null) return 1;
          return b.groupName.localeCompare(a.groupName);
        };
      case clsCTCodeTypeGroupEN.con_GroupENName:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (b.groupENName == null) return -1;
          if (a.groupENName == null) return 1;
          return b.groupENName.localeCompare(a.groupENName);
        };
      case clsCTCodeTypeGroupEN.con_Description:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (b.description == null) return -1;
          if (a.description == null) return 1;
          return b.description.localeCompare(a.description);
        };
      case clsCTCodeTypeGroupEN.con_OrderNum:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCTCodeTypeGroupEN.con_InUse:
        return (b: clsCTCodeTypeGroupEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsCTCodeTypeGroupEN.con_UpdDate:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCTCodeTypeGroupEN.con_UpdUser:
        return (a: clsCTCodeTypeGroupEN, b: clsCTCodeTypeGroupEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CTCodeTypeGroup]中不存在!(in ${cTCodeTypeGroup_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param key:关键字对象
 * @returns 名称属性值
 */
export async function CTCodeTypeGroup_GetNameByKeyCache(key: CTCodeTypeGroupKey) {
  if (IsNullOrEmpty(key.ctGroupId) == true) {
    const strMsg = Format(
      '参数:[key.ctGroupId]不能为空!(In clsCTCodeTypeGroupWApi.GetNameByKeyCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.ctGroupId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[key.ctGroupId]的长度:[{0}]不正确!(clsCTCodeTypeGroupWApi.GetNameByKeyCache)',
      key.ctGroupId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
  if (arrCTCodeTypeGroupObjLstCache == null) return '';
  try {
    const arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache.filter(
      (x) => x.ctGroupId == key.ctGroupId,
    );
    let objCTCodeTypeGroup: clsCTCodeTypeGroupEN;
    if (arrCTCodeTypeGroupSel.length > 0) {
      objCTCodeTypeGroup = arrCTCodeTypeGroupSel[0];
      return objCTCodeTypeGroup.groupName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      key.ctGroupId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CTCodeTypeGroup_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCTCodeTypeGroupEN.con_CtGroupId:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.ctGroupId === value;
      };
    case clsCTCodeTypeGroupEN.con_ApplicationTypeId:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.applicationTypeId === value;
      };
    case clsCTCodeTypeGroupEN.con_GroupName:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.groupName === value;
      };
    case clsCTCodeTypeGroupEN.con_GroupENName:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.groupENName === value;
      };
    case clsCTCodeTypeGroupEN.con_Description:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.description === value;
      };
    case clsCTCodeTypeGroupEN.con_OrderNum:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.orderNum === value;
      };
    case clsCTCodeTypeGroupEN.con_InUse:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.inUse === value;
      };
    case clsCTCodeTypeGroupEN.con_UpdDate:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.updDate === value;
      };
    case clsCTCodeTypeGroupEN.con_UpdUser:
      return (obj: clsCTCodeTypeGroupEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CTCodeTypeGroup]中不存在!(in ${cTCodeTypeGroup_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function CTCodeTypeGroup_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCTCodeTypeGroupEN.con_CtGroupId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCTCodeTypeGroupEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCTCodeTypeGroupEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCtGroupId = strInValue;
  if (IsNullOrEmpty(strCtGroupId) == true) {
    return '';
  }
  const objCTCodeTypeGroup = await CTCodeTypeGroup_GetObjByKeyCache({ ctGroupId: strCtGroupId });
  if (objCTCodeTypeGroup == null) return '';
  if (objCTCodeTypeGroup.GetFldValue(strOutFldName) == null) return '';
  return objCTCodeTypeGroup.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function CTCodeTypeGroup_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCTCodeTypeGroupEN.con_CtGroupId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCTCodeTypeGroup = await CTCodeTypeGroup_GetObjLstCache();
  if (arrCTCodeTypeGroup == null) return [];
  let arrCTCodeTypeGroupSel = arrCTCodeTypeGroup;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCTCodeTypeGroupSel.length == 0) return [];
  return arrCTCodeTypeGroupSel.map((x) => x.ctGroupId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CTCodeTypeGroup_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCTCodeTypeGroupEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
      const objCTCodeTypeGroup = CTCodeTypeGroup_GetObjFromJsonObj(returnObj);
      return objCTCodeTypeGroup;
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCTCodeTypeGroupEN._CurrTabName;
  if (IsNullOrEmpty(clsCTCodeTypeGroupEN._WhereFormat) == false) {
    strWhereCond = clsCTCodeTypeGroupEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsCTCodeTypeGroupEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCTCodeTypeGroupEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCTCodeTypeGroupExObjLstCache: Array<clsCTCodeTypeGroupEN> = CacheHelper.Get(strKey);
    const arrCTCodeTypeGroupObjLstT = CTCodeTypeGroup_GetObjLstByJSONObjLst(
      arrCTCodeTypeGroupExObjLstCache,
    );
    return arrCTCodeTypeGroupObjLstT;
  }
  try {
    const arrCTCodeTypeGroupExObjLst = await CTCodeTypeGroup_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCTCodeTypeGroupExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCTCodeTypeGroupExObjLst.length,
    );
    console.log(strInfo);
    return arrCTCodeTypeGroupExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCTCodeTypeGroupEN._CurrTabName;
  if (IsNullOrEmpty(clsCTCodeTypeGroupEN._WhereFormat) == false) {
    strWhereCond = clsCTCodeTypeGroupEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsCTCodeTypeGroupEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCTCodeTypeGroupEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCTCodeTypeGroupExObjLstCache: Array<clsCTCodeTypeGroupEN> = JSON.parse(strTempObjLst);
    const arrCTCodeTypeGroupObjLstT = CTCodeTypeGroup_GetObjLstByJSONObjLst(
      arrCTCodeTypeGroupExObjLstCache,
    );
    return arrCTCodeTypeGroupObjLstT;
  }
  try {
    const arrCTCodeTypeGroupExObjLst = await CTCodeTypeGroup_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCTCodeTypeGroupExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCTCodeTypeGroupExObjLst.length,
    );
    console.log(strInfo);
    return arrCTCodeTypeGroupExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCTCodeTypeGroupEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCTCodeTypeGroupObjLstCache: Array<clsCTCodeTypeGroupEN> = JSON.parse(strTempObjLst);
    return arrCTCodeTypeGroupObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CTCodeTypeGroup_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCTCodeTypeGroupEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
          cTCodeTypeGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCTCodeTypeGroupEN._CurrTabName;
  if (IsNullOrEmpty(clsCTCodeTypeGroupEN._WhereFormat) == false) {
    strWhereCond = clsCTCodeTypeGroupEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsCTCodeTypeGroupEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCTCodeTypeGroupEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCTCodeTypeGroupExObjLstCache: Array<clsCTCodeTypeGroupEN> = JSON.parse(strTempObjLst);
    const arrCTCodeTypeGroupObjLstT = CTCodeTypeGroup_GetObjLstByJSONObjLst(
      arrCTCodeTypeGroupExObjLstCache,
    );
    return arrCTCodeTypeGroupObjLstT;
  }
  try {
    const arrCTCodeTypeGroupExObjLst = await CTCodeTypeGroup_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCTCodeTypeGroupExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCTCodeTypeGroupExObjLst.length,
    );
    console.log(strInfo);
    return arrCTCodeTypeGroupExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCTCodeTypeGroupEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCTCodeTypeGroupObjLstCache: Array<clsCTCodeTypeGroupEN> = JSON.parse(strTempObjLst);
    return arrCTCodeTypeGroupObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CTCodeTypeGroup_GetObjLstCache(): Promise<Array<clsCTCodeTypeGroupEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCTCodeTypeGroupObjLstCache;
  switch (clsCTCodeTypeGroupEN._CacheModeId) {
    case '04': //sessionStorage
      arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstClientCache();
      break;
    default:
      arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstClientCache();
      break;
  }
  return arrCTCodeTypeGroupObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CTCodeTypeGroup_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCTCodeTypeGroupObjLstCache;
  switch (clsCTCodeTypeGroupEN._CacheModeId) {
    case '04': //sessionStorage
      arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCTCodeTypeGroupObjLstCache = null;
      break;
    default:
      arrCTCodeTypeGroupObjLstCache = null;
      break;
  }
  return arrCTCodeTypeGroupObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCtGroupIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CTCodeTypeGroup_GetSubObjLstCache(
  objCTCodeTypeGroupCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
  let arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache;
  if (objCTCodeTypeGroupCond.GetConditions().length == 0) return arrCTCodeTypeGroupSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objCTCodeTypeGroupCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCTCodeTypeGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCTCodeTypeGroupCond),
      cTCodeTypeGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCTCodeTypeGroupEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCtGroupId:关键字列表
 * @returns 对象列表
 **/
export async function CTCodeTypeGroup_GetObjLstByCtGroupIdLstAsync(
  arrCtGroupId: Array<string>,
): Promise<Array<clsCTCodeTypeGroupEN>> {
  const strThisFuncName = 'GetObjLstByCtGroupIdLstAsync';
  const strAction = 'GetObjLstByCtGroupIdLst';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCtGroupId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cTCodeTypeGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param arrstrCtGroupIdLst:关键字列表
 * @returns 对象列表
 */
export async function CTCodeTypeGroup_GetObjLstByCtGroupIdLstCache(arrCtGroupIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCtGroupIdLstCache';
  try {
    const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
    const arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache.filter(
      (x) => arrCtGroupIdLst.indexOf(x.ctGroupId) > -1,
    );
    return arrCTCodeTypeGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCtGroupIdLst.join(','),
      cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCTCodeTypeGroupEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
          cTCodeTypeGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCTCodeTypeGroupEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
          cTCodeTypeGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCTCodeTypeGroupEN>();
  const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
  if (arrCTCodeTypeGroupObjLstCache.length == 0) return arrCTCodeTypeGroupObjLstCache;
  let arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache;
  const objCTCodeTypeGroupCond = objPagerPara.conditionCollection;
  if (objCTCodeTypeGroupCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsCTCodeTypeGroupEN>();
  }
  //console.log("clsCTCodeTypeGroupWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objCTCodeTypeGroupCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCTCodeTypeGroupSel.length == 0) return arrCTCodeTypeGroupSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(
        CTCodeTypeGroup_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(objPagerPara.sortFun);
    }
    arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.slice(intStart, intEnd);
    return arrCTCodeTypeGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cTCodeTypeGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCTCodeTypeGroupEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CTCodeTypeGroup_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCTCodeTypeGroupEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCTCodeTypeGroupEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
          cTCodeTypeGroup_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroup_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_DelRecordAsync(key: CTCodeTypeGroupKey): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, key.ctGroupId);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param arrCtGroupId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CTCodeTypeGroup_DelKeysAsync(arrCtGroupId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelKeysAsync';
  const strAction = 'DelKeys';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCtGroupId, config);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCTCodeTypeGroupENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrCTCodeTypeGroupObjLst = await CTCodeTypeGroup_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsCTCodeTypeGroupENEx>();
  const arrCTCodeTypeGroupExObjLst = arrCTCodeTypeGroupObjLst.map((obj) => {
    const cacheKey = `${obj.ctGroupId}`;
    if (cTCodeTypeGroupCache[cacheKey]) {
      const oldObj = cTCodeTypeGroupCache[cacheKey];
      return oldObj;
    } else {
      const newObj = CTCodeTypeGroup_CopyToEx(obj);
      arrNewObj.push(newObj);
      cTCodeTypeGroupCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await CTCodeTypeGroup_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCTCodeTypeGroupEN._AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrCTCodeTypeGroupExObjLst) {
      await CTCodeTypeGroup_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.ctGroupId}`;
      cTCodeTypeGroupCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrCTCodeTypeGroupExObjLst.length == 0) return arrCTCodeTypeGroupExObjLst;
  let arrCTCodeTypeGroupSel: Array<clsCTCodeTypeGroupENEx> = arrCTCodeTypeGroupExObjLst;
  const objCTCodeTypeGroupCond = objPagerPara.conditionCollection;
  if (objCTCodeTypeGroupCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrCTCodeTypeGroupExObjLst;
  }
  try {
    for (const objCondition of objCTCodeTypeGroupCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCTCodeTypeGroupSel.length == 0) return arrCTCodeTypeGroupSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(
        CTCodeTypeGroup_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(objPagerPara.sortFun);
    }
    arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.slice(intStart, intEnd);
    return arrCTCodeTypeGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cTCodeTypeGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCTCodeTypeGroupENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objCTCodeTypeGroupENS:源对象
 * @returns 目标对象=>clsCTCodeTypeGroupEN:objCTCodeTypeGroupENT
 **/
export function CTCodeTypeGroup_CopyToEx(
  objCTCodeTypeGroupENS: clsCTCodeTypeGroupEN,
): clsCTCodeTypeGroupENEx {
  const strThisFuncName = CTCodeTypeGroup_CopyToEx.name;
  const objCTCodeTypeGroupENT = new clsCTCodeTypeGroupENEx();
  try {
    ObjectAssign(objCTCodeTypeGroupENT, objCTCodeTypeGroupENS);
    return objCTCodeTypeGroupENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroup_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCTCodeTypeGroupENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CTCodeTypeGroup_FuncMapByFldName(
  strFldName: string,
  objCTCodeTypeGroupEx: clsCTCodeTypeGroupENEx,
) {
  const strThisFuncName = CTCodeTypeGroup_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCTCodeTypeGroupEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCTCodeTypeGroupENEx.con_ApplicationTypeName:
      return CTCodeTypeGroup_FuncMapApplicationTypeName(objCTCodeTypeGroupEx);
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
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroup_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCTCodeTypeGroupENEx.con_ApplicationTypeName:
        return (a: clsCTCodeTypeGroupENEx, b: clsCTCodeTypeGroupENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      default:
        return CTCodeTypeGroup_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCTCodeTypeGroupENEx.con_ApplicationTypeName:
        return (a: clsCTCodeTypeGroupENEx, b: clsCTCodeTypeGroupENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      default:
        return CTCodeTypeGroup_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCTCodeTypeGroupS:源对象
 **/
export async function CTCodeTypeGroup_FuncMapApplicationTypeName(
  objCTCodeTypeGroup: clsCTCodeTypeGroupENEx,
) {
  const strThisFuncName = CTCodeTypeGroup_FuncMapApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCTCodeTypeGroup.applicationTypeName) == true) {
      const ApplicationTypeApplicationTypeId = objCTCodeTypeGroup.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationTypeApplicationTypeId,
      );
      objCTCodeTypeGroup.applicationTypeName = ApplicationTypeApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001307)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_DelCTCodeTypeGroupsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCTCodeTypeGroupsByCondAsync';
  const strAction = 'DelCTCodeTypeGroupsByCond';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param objCTCodeTypeGroupEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CTCodeTypeGroup_AddNewRecordAsync(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCTCodeTypeGroupEN);
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupEN, config);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param objCTCodeTypeGroupEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CTCodeTypeGroup_AddNewRecordWithMaxIdAsync(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupEN, config);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function CTCodeTypeGroup_AddNewObjSave(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CTCodeTypeGroup_CheckPropertyNew(objCTCodeTypeGroupEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cTCodeTypeGroup_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CTCodeTypeGroup_CheckUniCond4Add(objCTCodeTypeGroupEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await CTCodeTypeGroup_AddNewRecordWithMaxIdAsync(objCTCodeTypeGroupEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      CTCodeTypeGroup_ReFreshCache();
    } else {
      const strInfo = `添加[CTCodeTypeGroup(CTCodeTypeGroup)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${cTCodeTypeGroup_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function CTCodeTypeGroup_CheckUniCond4Add(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<boolean> {
  const strUniquenessCondition = CTCodeTypeGroup_GetUniCondStr(objCTCodeTypeGroupEN);
  const bolIsExistCondition = await CTCodeTypeGroup_IsExistRecordAsync(strUniquenessCondition);
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
export async function CTCodeTypeGroup_CheckUniCond4Update(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<boolean> {
  const strUniquenessCondition = CTCodeTypeGroup_GetUniCondStr4Update(objCTCodeTypeGroupEN);
  const bolIsExistCondition = await CTCodeTypeGroup_IsExistRecordAsync(strUniquenessCondition);
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
export async function CTCodeTypeGroup_UpdateObjSave(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCTCodeTypeGroupEN.sfUpdFldSetStr = objCTCodeTypeGroupEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objCTCodeTypeGroupEN.ctGroupId == '' || objCTCodeTypeGroupEN.ctGroupId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CTCodeTypeGroup_CheckProperty4Update(objCTCodeTypeGroupEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cTCodeTypeGroup_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CTCodeTypeGroup_CheckUniCond4Update(objCTCodeTypeGroupEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await CTCodeTypeGroup_UpdateRecordAsync(objCTCodeTypeGroupEN);
    if (returnBool == true) {
      CTCodeTypeGroup_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${cTCodeTypeGroup_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCTCodeTypeGroupEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CTCodeTypeGroup_AddNewRecordWithReturnKeyAsync(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupEN, config);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param objCTCodeTypeGroupEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CTCodeTypeGroup_UpdateRecordAsync(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCTCodeTypeGroupEN.sfUpdFldSetStr === undefined ||
    objCTCodeTypeGroupEN.sfUpdFldSetStr === null ||
    objCTCodeTypeGroupEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTCodeTypeGroupEN.ctGroupId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupEN, config);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param objCTCodeTypeGroupEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CTCodeTypeGroup_EditRecordExAsync(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCTCodeTypeGroupEN.sfUpdFldSetStr === undefined ||
    objCTCodeTypeGroupEN.sfUpdFldSetStr === null ||
    objCTCodeTypeGroupEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTCodeTypeGroupEN.ctGroupId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupEN, config);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param objCTCodeTypeGroupEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CTCodeTypeGroup_UpdateWithConditionAsync(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCTCodeTypeGroupEN.sfUpdFldSetStr === undefined ||
    objCTCodeTypeGroupEN.sfUpdFldSetStr === null ||
    objCTCodeTypeGroupEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTCodeTypeGroupEN.ctGroupId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);
  objCTCodeTypeGroupEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupEN, config);
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param objstrCtGroupIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CTCodeTypeGroup_IsExistRecordCache(
  objCTCodeTypeGroupCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
  if (arrCTCodeTypeGroupObjLstCache == null) return false;
  let arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache;
  if (objCTCodeTypeGroupCond.GetConditions().length == 0)
    return arrCTCodeTypeGroupSel.length > 0 ? true : false;
  try {
    for (const objCondition of objCTCodeTypeGroupCond.GetConditions()) {
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
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCTCodeTypeGroupSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCTCodeTypeGroupCond),
      cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param key:关键字对象
 * @returns 是否存在
 */
export async function CTCodeTypeGroup_IsExistCache(key: CTCodeTypeGroupKey): Promise<boolean> {
  const strThisFuncName = 'IsExistCache';
  const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
  if (arrCTCodeTypeGroupObjLstCache == null) return false;
  try {
    const arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache.filter(
      (x) => x.ctGroupId == key.ctGroupId,
    );
    if (arrCTCodeTypeGroupSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      key.ctGroupId,
      cTCodeTypeGroup_ConstructorName,
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
 * @param key:包含关键字的对象
 * @returns 是否存在?存在返回True
 **/
export async function CTCodeTypeGroup_IsExistAsync(key: CTCodeTypeGroupKey): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtGroupId: key.ctGroupId,
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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
 * @param objCTCodeTypeGroupCond:条件对象
 * @returns 对象列表记录数
 */
export async function CTCodeTypeGroup_GetRecCountByCondCache(
  objCTCodeTypeGroupCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCTCodeTypeGroupObjLstCache = await CTCodeTypeGroup_GetObjLstCache();
  if (arrCTCodeTypeGroupObjLstCache == null) return 0;
  let arrCTCodeTypeGroupSel = arrCTCodeTypeGroupObjLstCache;
  if (objCTCodeTypeGroupCond.GetConditions().length == 0) return arrCTCodeTypeGroupSel.length;
  try {
    for (const objCondition of objCTCodeTypeGroupCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCTCodeTypeGroupSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCTCodeTypeGroupCond),
      cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export async function CTCodeTypeGroup_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cTCodeTypeGroup_Controller, strAction);

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
        cTCodeTypeGroup_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroup_ConstructorName,
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
export function CTCodeTypeGroup_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CTCodeTypeGroup_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCTCodeTypeGroupEN._CurrTabName;
  switch (clsCTCodeTypeGroupEN._CacheModeId) {
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
  clsCTCodeTypeGroupEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function CTCodeTypeGroup_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCTCodeTypeGroupEN._CurrTabName;
    switch (clsCTCodeTypeGroupEN._CacheModeId) {
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
    clsCTCodeTypeGroupEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function CTCodeTypeGroup_GetLastRefreshTime(): string {
  if (clsCTCodeTypeGroupEN._RefreshTimeLst.length == 0) return '';
  return clsCTCodeTypeGroupEN._RefreshTimeLst[clsCTCodeTypeGroupEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框(TabFeatureId:00050486)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param intApplicationTypeId:
*/
export async function CTCodeTypeGroup_BindDdl_CtGroupIdByApplicationTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  intApplicationTypeId: number,
) {
  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空！(In clsCTCodeTypeGroupWApi.BindDdl_CtGroupIdByApplicationTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_CtGroupIdByApplicationTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtGroupIdByApplicationTypeIdInDivCache");
  let arrObjLstSel = await CTCodeTypeGroup_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.applicationTypeId == intApplicationTypeId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCTCodeTypeGroupEN.con_CtGroupId,
    clsCTCodeTypeGroupEN.con_GroupName,
    '选CTCodeTypeGroup...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框(TabFeatureId:00050486)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param intApplicationTypeId:
*/
export async function CTCodeTypeGroup_GetArrCTCodeTypeGroupByApplicationTypeIdCache(
  intApplicationTypeId: number,
) {
  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空！(In clsCTCodeTypeGroupWApi.BindDdl_CtGroupIdByApplicationTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtGroupIdByApplicationTypeIdInDivCache");
  const arrCTCodeTypeGroup = new Array<clsCTCodeTypeGroupEN>();
  let arrObjLstSel = await CTCodeTypeGroup_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.applicationTypeId == intApplicationTypeId);
  const obj0 = new clsCTCodeTypeGroupEN();
  obj0.ctGroupId = '0';
  obj0.groupName = '选CTCodeTypeGroup...';
  arrCTCodeTypeGroup.push(obj0);
  arrObjLstSel.forEach((x) => arrCTCodeTypeGroup.push(x));
  return arrCTCodeTypeGroup;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CTCodeTypeGroup_CheckPropertyNew(pobjCTCodeTypeGroupEN: clsCTCodeTypeGroupEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjCTCodeTypeGroupEN.applicationTypeId ||
    (pobjCTCodeTypeGroupEN.applicationTypeId != null &&
      pobjCTCodeTypeGroupEN.applicationTypeId.toString() === '') ||
    pobjCTCodeTypeGroupEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In CTCodeTypeGroup)!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.ctGroupId) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.ctGroupId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Ct组Id(ctGroupId)]的长度不能超过4(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.ctGroupId}(clsCTCodeTypeGroupBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupName) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[组名(groupName)]的长度不能超过30(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.groupName}(clsCTCodeTypeGroupBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupENName) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.groupENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[组英文名(groupENName)]的长度不能超过100(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.groupENName}(clsCTCodeTypeGroupBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.description) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.description) > 300
  ) {
    throw new Error(
      `(errid:Watl000413)字段[描述(description)]的长度不能超过300(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.description}(clsCTCodeTypeGroupBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updDate) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.updDate}(clsCTCodeTypeGroupBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updUser) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.updUser}(clsCTCodeTypeGroupBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.ctGroupId) == false &&
    undefined !== pobjCTCodeTypeGroupEN.ctGroupId &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.ctGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Ct组Id(ctGroupId)]的值:[${pobjCTCodeTypeGroupEN.ctGroupId}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupEN.applicationTypeId &&
    undefined !== pobjCTCodeTypeGroupEN.applicationTypeId &&
    tzDataType.isNumber(pobjCTCodeTypeGroupEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjCTCodeTypeGroupEN.applicationTypeId}], 非法,应该为数值型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupName) == false &&
    undefined !== pobjCTCodeTypeGroupEN.groupName &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[组名(groupName)]的值:[${pobjCTCodeTypeGroupEN.groupName}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupENName) == false &&
    undefined !== pobjCTCodeTypeGroupEN.groupENName &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.groupENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[组英文名(groupENName)]的值:[${pobjCTCodeTypeGroupEN.groupENName}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.description) == false &&
    undefined !== pobjCTCodeTypeGroupEN.description &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.description) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[描述(description)]的值:[${pobjCTCodeTypeGroupEN.description}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupEN.orderNum &&
    undefined !== pobjCTCodeTypeGroupEN.orderNum &&
    tzDataType.isNumber(pobjCTCodeTypeGroupEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjCTCodeTypeGroupEN.orderNum}], 非法,应该为数值型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupEN.inUse &&
    undefined !== pobjCTCodeTypeGroupEN.inUse &&
    tzDataType.isBoolean(pobjCTCodeTypeGroupEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjCTCodeTypeGroupEN.inUse}], 非法,应该为布尔型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updDate) == false &&
    undefined !== pobjCTCodeTypeGroupEN.updDate &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCTCodeTypeGroupEN.updDate}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updUser) == false &&
    undefined !== pobjCTCodeTypeGroupEN.updUser &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjCTCodeTypeGroupEN.updUser}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CTCodeTypeGroup_CheckProperty4Update(pobjCTCodeTypeGroupEN: clsCTCodeTypeGroupEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.ctGroupId) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.ctGroupId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Ct组Id(ctGroupId)]的长度不能超过4(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.ctGroupId}(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupName) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[组名(groupName)]的长度不能超过30(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.groupName}(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupENName) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.groupENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[组英文名(groupENName)]的长度不能超过100(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.groupENName}(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.description) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.description) > 300
  ) {
    throw new Error(
      `(errid:Watl000416)字段[描述(description)]的长度不能超过300(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.description}(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updDate) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.updDate}(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updUser) == false &&
    GetStrLen(pobjCTCodeTypeGroupEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CTCodeTypeGroup(CTCodeTypeGroup))!值:${pobjCTCodeTypeGroupEN.updUser}(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.ctGroupId) == false &&
    undefined !== pobjCTCodeTypeGroupEN.ctGroupId &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.ctGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Ct组Id(ctGroupId)]的值:[${pobjCTCodeTypeGroupEN.ctGroupId}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupEN.applicationTypeId &&
    undefined !== pobjCTCodeTypeGroupEN.applicationTypeId &&
    tzDataType.isNumber(pobjCTCodeTypeGroupEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjCTCodeTypeGroupEN.applicationTypeId}], 非法,应该为数值型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupName) == false &&
    undefined !== pobjCTCodeTypeGroupEN.groupName &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[组名(groupName)]的值:[${pobjCTCodeTypeGroupEN.groupName}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.groupENName) == false &&
    undefined !== pobjCTCodeTypeGroupEN.groupENName &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.groupENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[组英文名(groupENName)]的值:[${pobjCTCodeTypeGroupEN.groupENName}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.description) == false &&
    undefined !== pobjCTCodeTypeGroupEN.description &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.description) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[描述(description)]的值:[${pobjCTCodeTypeGroupEN.description}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupEN.orderNum &&
    undefined !== pobjCTCodeTypeGroupEN.orderNum &&
    tzDataType.isNumber(pobjCTCodeTypeGroupEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjCTCodeTypeGroupEN.orderNum}], 非法,应该为数值型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupEN.inUse &&
    undefined !== pobjCTCodeTypeGroupEN.inUse &&
    tzDataType.isBoolean(pobjCTCodeTypeGroupEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjCTCodeTypeGroupEN.inUse}], 非法,应该为布尔型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updDate) == false &&
    undefined !== pobjCTCodeTypeGroupEN.updDate &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCTCodeTypeGroupEN.updDate}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupEN.updUser) == false &&
    undefined !== pobjCTCodeTypeGroupEN.updUser &&
    tzDataType.isString(pobjCTCodeTypeGroupEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjCTCodeTypeGroupEN.updUser}], 非法,应该为字符型(In CTCodeTypeGroup(CTCodeTypeGroup))!(clsCTCodeTypeGroupBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CTCodeTypeGroup_GetJSONStrByObj(
  pobjCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): string {
  pobjCTCodeTypeGroupEN.sfUpdFldSetStr = pobjCTCodeTypeGroupEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCTCodeTypeGroupEN);
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
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CTCodeTypeGroup_GetObjLstByJSONStr(strJSON: string): Array<clsCTCodeTypeGroupEN> {
  let arrCTCodeTypeGroupObjLst = new Array<clsCTCodeTypeGroupEN>();
  if (strJSON === '') {
    return arrCTCodeTypeGroupObjLst;
  }
  try {
    arrCTCodeTypeGroupObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCTCodeTypeGroupObjLst;
  }
  return arrCTCodeTypeGroupObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCTCodeTypeGroupObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CTCodeTypeGroup_GetObjLstByJSONObjLst(
  arrCTCodeTypeGroupObjLstS: Array<clsCTCodeTypeGroupEN>,
): Array<clsCTCodeTypeGroupEN> {
  const arrCTCodeTypeGroupObjLst = new Array<clsCTCodeTypeGroupEN>();
  for (const objInFor of arrCTCodeTypeGroupObjLstS) {
    const obj1 = CTCodeTypeGroup_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCTCodeTypeGroupObjLst.push(obj1);
  }
  return arrCTCodeTypeGroupObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CTCodeTypeGroup_GetObjByJSONStr(strJSON: string): clsCTCodeTypeGroupEN {
  let pobjCTCodeTypeGroupEN = new clsCTCodeTypeGroupEN();
  if (strJSON === '') {
    return pobjCTCodeTypeGroupEN;
  }
  try {
    pobjCTCodeTypeGroupEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCTCodeTypeGroupEN;
  }
  return pobjCTCodeTypeGroupEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CTCodeTypeGroup_GetCombineCondition(
  objCTCodeTypeGroupCond: clsCTCodeTypeGroupEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_CtGroupId,
    ) == true
  ) {
    const strComparisonOpCtGroupId: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_CtGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupEN.con_CtGroupId,
      objCTCodeTypeGroupCond.ctGroupId,
      strComparisonOpCtGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupEN.con_ApplicationTypeId,
      objCTCodeTypeGroupCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_GroupName,
    ) == true
  ) {
    const strComparisonOpGroupName: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_GroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupEN.con_GroupName,
      objCTCodeTypeGroupCond.groupName,
      strComparisonOpGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_GroupENName,
    ) == true
  ) {
    const strComparisonOpGroupENName: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_GroupENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupEN.con_GroupENName,
      objCTCodeTypeGroupCond.groupENName,
      strComparisonOpGroupENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_Description,
    ) == true
  ) {
    const strComparisonOpDescription: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_Description];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupEN.con_Description,
      objCTCodeTypeGroupCond.description,
      strComparisonOpDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupEN.con_OrderNum,
      objCTCodeTypeGroupCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_InUse,
    ) == true
  ) {
    if (objCTCodeTypeGroupCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsCTCodeTypeGroupEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCTCodeTypeGroupEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupEN.con_UpdDate,
      objCTCodeTypeGroupCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupCond.dicFldComparisonOp,
      clsCTCodeTypeGroupEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCTCodeTypeGroupCond.dicFldComparisonOp[clsCTCodeTypeGroupEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupEN.con_UpdUser,
      objCTCodeTypeGroupCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CTCodeTypeGroup(CTCodeTypeGroup),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strGroupName: 组名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CTCodeTypeGroup_GetUniCondStr(objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objCTCodeTypeGroupEN.applicationTypeId);
  strWhereCond += Format(" and GroupName = '{0}'", objCTCodeTypeGroupEN.groupName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CTCodeTypeGroup(CTCodeTypeGroup),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strGroupName: 组名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CTCodeTypeGroup_GetUniCondStr4Update(
  objCTCodeTypeGroupEN: clsCTCodeTypeGroupEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CtGroupId <> '{0}'", objCTCodeTypeGroupEN.ctGroupId);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objCTCodeTypeGroupEN.applicationTypeId);
  strWhereCond += Format(" and GroupName = '{0}'", objCTCodeTypeGroupEN.groupName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCTCodeTypeGroupENS:源对象
 * @param objCTCodeTypeGroupENT:目标对象
 */
export function CTCodeTypeGroup_GetObjFromJsonObj(
  objCTCodeTypeGroupENS: clsCTCodeTypeGroupEN,
): clsCTCodeTypeGroupEN {
  const objCTCodeTypeGroupENT: clsCTCodeTypeGroupEN = new clsCTCodeTypeGroupEN();
  ObjectAssign(objCTCodeTypeGroupENT, objCTCodeTypeGroupENS);
  return objCTCodeTypeGroupENT;
}
