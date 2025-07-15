/**
 * 类名:clsQxDepartmentInfoV2WApi
 * 表名:QxDepartmentInfoV2(00140111)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 15:27:39
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 部门V2(QxDepartmentInfoV2)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
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
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxDepartmentInfoV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoV2EN';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qxDepartmentInfoV2_Controller = 'QxDepartmentInfoV2Api';
export const qxDepartmentInfoV2_ConstructorName = 'qxDepartmentInfoV2';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param intDepartmentIdInt:关键字
 * @returns 对象
 **/
export async function QxDepartmentInfoV2_GetObjByDepartmentIdIntAsync(
  intDepartmentIdInt: number,
): Promise<clsQxDepartmentInfoV2EN | null> {
  const strThisFuncName = 'GetObjByDepartmentIdIntAsync';

  if (intDepartmentIdInt == 0) {
    const strMsg = Format(
      '参数:[intDepartmentIdInt]不能为空！(In clsQxDepartmentInfoV2WApi.GetObjByDepartmentIdIntAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDepartmentIdInt';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intDepartmentIdInt,
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
      const objQxDepartmentInfoV2 = QxDepartmentInfoV2_GetObjFromJsonObj(returnObj);
      return objQxDepartmentInfoV2;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * @param intDepartmentIdInt:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfoV2_GetObjByDepartmentIdIntCache(
  intDepartmentIdInt: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDepartmentIdIntCache';

  if (intDepartmentIdInt == 0) {
    const strMsg = Format(
      '参数:[intDepartmentIdInt]不能为空！(In clsQxDepartmentInfoV2WApi.GetObjByDepartmentIdIntCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
  try {
    const arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache.filter(
      (x) => x.departmentIdInt == intDepartmentIdInt,
    );
    let objQxDepartmentInfoV2: clsQxDepartmentInfoV2EN;
    if (arrQxDepartmentInfoV2Sel.length > 0) {
      objQxDepartmentInfoV2 = arrQxDepartmentInfoV2Sel[0];
      return objQxDepartmentInfoV2;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQxDepartmentInfoV2Const = await QxDepartmentInfoV2_GetObjByDepartmentIdIntAsync(
          intDepartmentIdInt,
        );
        if (objQxDepartmentInfoV2Const != null) {
          QxDepartmentInfoV2_ReFreshThisCache();
          return objQxDepartmentInfoV2Const;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      intDepartmentIdInt,
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param intDepartmentIdInt:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfoV2_GetObjByDepartmentIdIntlocalStorage(
  intDepartmentIdInt: number,
) {
  const strThisFuncName = 'GetObjByDepartmentIdIntlocalStorage';

  if (intDepartmentIdInt == 0) {
    const strMsg = Format(
      '参数:[intDepartmentIdInt]不能为空！(In clsQxDepartmentInfoV2WApi.GetObjByDepartmentIdIntlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQxDepartmentInfoV2EN._CurrTabName, intDepartmentIdInt);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQxDepartmentInfoV2Cache: clsQxDepartmentInfoV2EN = JSON.parse(strTempObj);
    return objQxDepartmentInfoV2Cache;
  }
  try {
    const objQxDepartmentInfoV2 = await QxDepartmentInfoV2_GetObjByDepartmentIdIntAsync(
      intDepartmentIdInt,
    );
    if (objQxDepartmentInfoV2 != null) {
      localStorage.setItem(strKey, JSON.stringify(objQxDepartmentInfoV2));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQxDepartmentInfoV2;
    }
    return objQxDepartmentInfoV2;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      intDepartmentIdInt,
      qxDepartmentInfoV2_ConstructorName,
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
 * @param objQxDepartmentInfoV2:所给的对象
 * @returns 对象
 */
export async function QxDepartmentInfoV2_UpdateObjInLstCache(
  objQxDepartmentInfoV2: clsQxDepartmentInfoV2EN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
    const obj = arrQxDepartmentInfoV2ObjLstCache.find(
      (x) => x.departmentName == objQxDepartmentInfoV2.departmentName,
    );
    if (obj != null) {
      objQxDepartmentInfoV2.departmentIdInt = obj.departmentIdInt;
      ObjectAssign(obj, objQxDepartmentInfoV2);
    } else {
      arrQxDepartmentInfoV2ObjLstCache.push(objQxDepartmentInfoV2);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param intDepartmentIdInt:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfoV2_GetNameByDepartmentIdIntCache(intDepartmentIdInt: number) {
  if (intDepartmentIdInt == 0) {
    const strMsg = Format(
      '参数:[intDepartmentIdInt]不能为空！(In clsQxDepartmentInfoV2WApi.GetNameByDepartmentIdIntCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrQxDepartmentInfoV2ObjLstCache == null) return '';
  try {
    const arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache.filter(
      (x) => x.departmentIdInt == intDepartmentIdInt,
    );
    let objQxDepartmentInfoV2: clsQxDepartmentInfoV2EN;
    if (arrQxDepartmentInfoV2Sel.length > 0) {
      objQxDepartmentInfoV2 = arrQxDepartmentInfoV2Sel[0];
      return objQxDepartmentInfoV2.departmentName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      intDepartmentIdInt,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function QxDepartmentInfoV2_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsQxDepartmentInfoV2EN.con_DepartmentIdInt) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQxDepartmentInfoV2EN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsQxDepartmentInfoV2EN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const intDepartmentIdInt = Number(strInValue);
  if (intDepartmentIdInt == 0) {
    return '';
  }
  const objQxDepartmentInfoV2 = await QxDepartmentInfoV2_GetObjByDepartmentIdIntCache(
    intDepartmentIdInt,
  );
  if (objQxDepartmentInfoV2 == null) return '';
  if (objQxDepartmentInfoV2.GetFldValue(strOutFldName) == null) return '';
  return objQxDepartmentInfoV2.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxDepartmentInfoV2_SortFunDefa(
  a: clsQxDepartmentInfoV2EN,
  b: clsQxDepartmentInfoV2EN,
): number {
  return a.departmentIdInt - b.departmentIdInt;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxDepartmentInfoV2_SortFunDefa2Fld(
  a: clsQxDepartmentInfoV2EN,
  b: clsQxDepartmentInfoV2EN,
): number {
  if (a.departmentName == b.departmentName)
    return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
  else return a.departmentName.localeCompare(b.departmentName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxDepartmentInfoV2_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxDepartmentInfoV2EN.con_DepartmentIdInt:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return a.departmentIdInt - b.departmentIdInt;
        };
      case clsQxDepartmentInfoV2EN.con_DepartmentName:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return a.departmentName.localeCompare(b.departmentName);
        };
      case clsQxDepartmentInfoV2EN.con_DepartmentAbbrName:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (a.departmentAbbrName == null) return -1;
          if (b.departmentAbbrName == null) return 1;
          return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
        };
      case clsQxDepartmentInfoV2EN.con_DepartmentTypeId:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (a.departmentTypeId == null) return -1;
          if (b.departmentTypeId == null) return 1;
          return a.departmentTypeId.localeCompare(b.departmentTypeId);
        };
      case clsQxDepartmentInfoV2EN.con_parentDepId:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return a.parentDepId - b.parentDepId;
        };
      case clsQxDepartmentInfoV2EN.con_OrderNum:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return a.orderNum - b.orderNum;
        };
      case clsQxDepartmentInfoV2EN.con_InUse:
        return (a: clsQxDepartmentInfoV2EN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsQxDepartmentInfoV2EN.con_Memo:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsQxDepartmentInfoV2EN.con_CreateTime:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (a.createTime == null) return -1;
          if (b.createTime == null) return 1;
          return a.createTime.localeCompare(b.createTime);
        };
      case clsQxDepartmentInfoV2EN.con_updateTime:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (a.updateTime == null) return -1;
          if (b.updateTime == null) return 1;
          return a.updateTime.localeCompare(b.updateTime);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentInfoV2]中不存在！(in ${qxDepartmentInfoV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxDepartmentInfoV2EN.con_DepartmentIdInt:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return b.departmentIdInt - a.departmentIdInt;
        };
      case clsQxDepartmentInfoV2EN.con_DepartmentName:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return b.departmentName.localeCompare(a.departmentName);
        };
      case clsQxDepartmentInfoV2EN.con_DepartmentAbbrName:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (b.departmentAbbrName == null) return -1;
          if (a.departmentAbbrName == null) return 1;
          return b.departmentAbbrName.localeCompare(a.departmentAbbrName);
        };
      case clsQxDepartmentInfoV2EN.con_DepartmentTypeId:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (b.departmentTypeId == null) return -1;
          if (a.departmentTypeId == null) return 1;
          return b.departmentTypeId.localeCompare(a.departmentTypeId);
        };
      case clsQxDepartmentInfoV2EN.con_parentDepId:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return b.parentDepId - a.parentDepId;
        };
      case clsQxDepartmentInfoV2EN.con_OrderNum:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          return b.orderNum - a.orderNum;
        };
      case clsQxDepartmentInfoV2EN.con_InUse:
        return (b: clsQxDepartmentInfoV2EN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsQxDepartmentInfoV2EN.con_Memo:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsQxDepartmentInfoV2EN.con_CreateTime:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (b.createTime == null) return -1;
          if (a.createTime == null) return 1;
          return b.createTime.localeCompare(a.createTime);
        };
      case clsQxDepartmentInfoV2EN.con_updateTime:
        return (a: clsQxDepartmentInfoV2EN, b: clsQxDepartmentInfoV2EN) => {
          if (b.updateTime == null) return -1;
          if (a.updateTime == null) return 1;
          return b.updateTime.localeCompare(a.updateTime);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentInfoV2]中不存在！(in ${qxDepartmentInfoV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxDepartmentInfoV2_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxDepartmentInfoV2EN.con_DepartmentIdInt:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.departmentIdInt === value;
      };
    case clsQxDepartmentInfoV2EN.con_DepartmentName:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.departmentName === value;
      };
    case clsQxDepartmentInfoV2EN.con_DepartmentAbbrName:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.departmentAbbrName === value;
      };
    case clsQxDepartmentInfoV2EN.con_DepartmentTypeId:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.departmentTypeId === value;
      };
    case clsQxDepartmentInfoV2EN.con_parentDepId:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.parentDepId === value;
      };
    case clsQxDepartmentInfoV2EN.con_OrderNum:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.orderNum === value;
      };
    case clsQxDepartmentInfoV2EN.con_InUse:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.inUse === value;
      };
    case clsQxDepartmentInfoV2EN.con_Memo:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.memo === value;
      };
    case clsQxDepartmentInfoV2EN.con_CreateTime:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.createTime === value;
      };
    case clsQxDepartmentInfoV2EN.con_updateTime:
      return (obj: clsQxDepartmentInfoV2EN) => {
        return obj.updateTime === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxDepartmentInfoV2]中不存在！(in ${qxDepartmentInfoV2_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function QxDepartmentInfoV2_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsQxDepartmentInfoV2EN.con_DepartmentIdInt) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrQxDepartmentInfoV2 = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrQxDepartmentInfoV2 == null) return [];
  let arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrQxDepartmentInfoV2Sel.length == 0) return [];
  return arrQxDepartmentInfoV2Sel.map((x) => x.departmentIdInt);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxDepartmentInfoV2_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
export async function QxDepartmentInfoV2_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
export async function QxDepartmentInfoV2_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQxDepartmentInfoV2EN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
      const objQxDepartmentInfoV2 = QxDepartmentInfoV2_GetObjFromJsonObj(returnObj);
      return objQxDepartmentInfoV2;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxDepartmentInfoV2EN._CurrTabName;
  if (IsNullOrEmpty(clsQxDepartmentInfoV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxDepartmentInfoV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrQxDepartmentInfoV2ExObjLstCache: Array<clsQxDepartmentInfoV2EN> =
      CacheHelper.Get(strKey);
    const arrQxDepartmentInfoV2ObjLstT = QxDepartmentInfoV2_GetObjLstByJSONObjLst(
      arrQxDepartmentInfoV2ExObjLstCache,
    );
    return arrQxDepartmentInfoV2ObjLstT;
  }
  try {
    const arrQxDepartmentInfoV2ExObjLst = await QxDepartmentInfoV2_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQxDepartmentInfoV2ExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxDepartmentInfoV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrQxDepartmentInfoV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxDepartmentInfoV2EN._CurrTabName;
  if (IsNullOrEmpty(clsQxDepartmentInfoV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxDepartmentInfoV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoV2ExObjLstCache: Array<clsQxDepartmentInfoV2EN> =
      JSON.parse(strTempObjLst);
    const arrQxDepartmentInfoV2ObjLstT = QxDepartmentInfoV2_GetObjLstByJSONObjLst(
      arrQxDepartmentInfoV2ExObjLstCache,
    );
    return arrQxDepartmentInfoV2ObjLstT;
  }
  try {
    const arrQxDepartmentInfoV2ExObjLst = await QxDepartmentInfoV2_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrQxDepartmentInfoV2ExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxDepartmentInfoV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrQxDepartmentInfoV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.如果本地不存在就返回null，不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxDepartmentInfoV2EN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoV2ObjLstCache: Array<clsQxDepartmentInfoV2EN> =
      JSON.parse(strTempObjLst);
    return arrQxDepartmentInfoV2ObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQxDepartmentInfoV2EN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
          qxDepartmentInfoV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfoV2_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxDepartmentInfoV2EN._CurrTabName;
  if (IsNullOrEmpty(clsQxDepartmentInfoV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxDepartmentInfoV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoV2ExObjLstCache: Array<clsQxDepartmentInfoV2EN> =
      JSON.parse(strTempObjLst);
    const arrQxDepartmentInfoV2ObjLstT = QxDepartmentInfoV2_GetObjLstByJSONObjLst(
      arrQxDepartmentInfoV2ExObjLstCache,
    );
    return arrQxDepartmentInfoV2ObjLstT;
  }
  try {
    const arrQxDepartmentInfoV2ExObjLst = await QxDepartmentInfoV2_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrQxDepartmentInfoV2ExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxDepartmentInfoV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrQxDepartmentInfoV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxDepartmentInfoV2EN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxDepartmentInfoV2ObjLstCache: Array<clsQxDepartmentInfoV2EN> =
      JSON.parse(strTempObjLst);
    return arrQxDepartmentInfoV2ObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstCache(): Promise<Array<clsQxDepartmentInfoV2EN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrQxDepartmentInfoV2ObjLstCache;
  switch (clsQxDepartmentInfoV2EN.CacheModeId) {
    case '04': //sessionStorage
      arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstClientCache();
      break;
    default:
      arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstClientCache();
      break;
  }
  return arrQxDepartmentInfoV2ObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQxDepartmentInfoV2ObjLstCache;
  switch (clsQxDepartmentInfoV2EN.CacheModeId) {
    case '04': //sessionStorage
      arrQxDepartmentInfoV2ObjLstCache =
        await QxDepartmentInfoV2_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrQxDepartmentInfoV2ObjLstCache = null;
      break;
    default:
      arrQxDepartmentInfoV2ObjLstCache = null;
      break;
  }
  return arrQxDepartmentInfoV2ObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objintDepartmentIdIntCond:条件对象
 * @returns 对象列表子集
 */
export async function QxDepartmentInfoV2_GetSubObjLstCache(
  objQxDepartmentInfoV2Cond: clsQxDepartmentInfoV2EN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
  let arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache;
  if (
    objQxDepartmentInfoV2Cond.sfFldComparisonOp == null ||
    objQxDepartmentInfoV2Cond.sfFldComparisonOp == ''
  )
    return arrQxDepartmentInfoV2Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxDepartmentInfoV2Cond.sfFldComparisonOp,
  );
  //console.log("clsQxDepartmentInfoV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxDepartmentInfoV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQxDepartmentInfoV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxDepartmentInfoV2Cond),
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxDepartmentInfoV2EN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDepartmentIdInt:关键字列表
 * @returns 对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstByDepartmentIdIntLstAsync(
  arrDepartmentIdInt: Array<string>,
): Promise<Array<clsQxDepartmentInfoV2EN>> {
  const strThisFuncName = 'GetObjLstByDepartmentIdIntLstAsync';
  const strAction = 'GetObjLstByDepartmentIdIntLst';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDepartmentIdInt, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxDepartmentInfoV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfoV2_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * @param arrintDepartmentIdIntLst:关键字列表
 * @returns 对象列表
 */
export async function QxDepartmentInfoV2_GetObjLstByDepartmentIdIntLstCache(
  arrDepartmentIdIntLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByDepartmentIdIntLstCache';
  try {
    const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
    const arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache.filter(
      (x) => arrDepartmentIdIntLst.indexOf(x.departmentIdInt) > -1,
    );
    return arrQxDepartmentInfoV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDepartmentIdIntLst.join(','),
      qxDepartmentInfoV2_ConstructorName,
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
export async function QxDepartmentInfoV2_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxDepartmentInfoV2EN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
          qxDepartmentInfoV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfoV2_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表，获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxDepartmentInfoV2EN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
          qxDepartmentInfoV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfoV2_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxDepartmentInfoV2_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxDepartmentInfoV2EN>();
  const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrQxDepartmentInfoV2ObjLstCache.length == 0) return arrQxDepartmentInfoV2ObjLstCache;
  let arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxDepartmentInfoV2Cond = new clsQxDepartmentInfoV2EN();
  ObjectAssign(objQxDepartmentInfoV2Cond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxDepartmentInfoV2WApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxDepartmentInfoV2Sel.length == 0) return arrQxDepartmentInfoV2Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.sort(
        QxDepartmentInfoV2_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.sort(objPagerPara.sortFun);
    }
    arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.slice(intStart, intEnd);
    return arrQxDepartmentInfoV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxDepartmentInfoV2EN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxDepartmentInfoV2_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxDepartmentInfoV2EN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxDepartmentInfoV2EN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
          qxDepartmentInfoV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxDepartmentInfoV2_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * 调用WebApi来删除记录，根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param intDepartmentIdInt:关键字
 * @returns 获取删除的结果
 **/
export async function QxDepartmentInfoV2_DelRecordAsync(
  intDepartmentIdInt: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, intDepartmentIdInt);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * @param arrDepartmentIdInt:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function QxDepartmentInfoV2_DelQxDepartmentInfoV2sAsync(
  arrDepartmentIdInt: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelQxDepartmentInfoV2sAsync';
  const strAction = 'DelQxDepartmentInfoV2s';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDepartmentIdInt, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
export async function QxDepartmentInfoV2_DelQxDepartmentInfoV2sByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelQxDepartmentInfoV2sByCondAsync';
  const strAction = 'DelQxDepartmentInfoV2sByCond';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQxDepartmentInfoV2EN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxDepartmentInfoV2_AddNewRecordAsync(
  objQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objQxDepartmentInfoV2EN);
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoV2EN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型，不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxDepartmentInfoV2EN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxDepartmentInfoV2_AddNewRecordWithReturnKeyAsync(
  objQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoV2EN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQxDepartmentInfoV2EN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxDepartmentInfoV2_UpdateRecordAsync(
  objQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxDepartmentInfoV2EN.sfUpdFldSetStr === undefined ||
    objQxDepartmentInfoV2EN.sfUpdFldSetStr === null ||
    objQxDepartmentInfoV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objQxDepartmentInfoV2EN.departmentIdInt,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoV2EN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * @param objQxDepartmentInfoV2EN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxDepartmentInfoV2_UpdateWithConditionAsync(
  objQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxDepartmentInfoV2EN.sfUpdFldSetStr === undefined ||
    objQxDepartmentInfoV2EN.sfUpdFldSetStr === null ||
    objQxDepartmentInfoV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objQxDepartmentInfoV2EN.departmentIdInt,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);
  objQxDepartmentInfoV2EN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxDepartmentInfoV2EN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * @param objintDepartmentIdIntCond:条件对象
 * @returns 对象列表子集
 */
export async function QxDepartmentInfoV2_IsExistRecordCache(
  objQxDepartmentInfoV2Cond: clsQxDepartmentInfoV2EN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrQxDepartmentInfoV2ObjLstCache == null) return false;
  let arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache;
  if (
    objQxDepartmentInfoV2Cond.sfFldComparisonOp == null ||
    objQxDepartmentInfoV2Cond.sfFldComparisonOp == ''
  )
    return arrQxDepartmentInfoV2Sel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxDepartmentInfoV2Cond.sfFldComparisonOp,
  );
  //console.log("clsQxDepartmentInfoV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxDepartmentInfoV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxDepartmentInfoV2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQxDepartmentInfoV2Cond),
      qxDepartmentInfoV2_ConstructorName,
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
export async function QxDepartmentInfoV2_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * @param intDepartmentIdInt:所给的关键字
 * @returns 对象
 */
export async function QxDepartmentInfoV2_IsExistCache(intDepartmentIdInt: number) {
  const strThisFuncName = 'IsExistCache';
  const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrQxDepartmentInfoV2ObjLstCache == null) return false;
  try {
    const arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache.filter(
      (x) => x.departmentIdInt == intDepartmentIdInt,
    );
    if (arrQxDepartmentInfoV2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      intDepartmentIdInt,
      qxDepartmentInfoV2_ConstructorName,
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
 * @param intDepartmentIdInt:关键字
 * @returns 是否存在?存在返回True
 **/
export async function QxDepartmentInfoV2_IsExistAsync(
  intDepartmentIdInt: number,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intDepartmentIdInt,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
export async function QxDepartmentInfoV2_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
 * @param objQxDepartmentInfoV2Cond:条件对象
 * @returns 对象列表记录数
 */
export async function QxDepartmentInfoV2_GetRecCountByCondCache(
  objQxDepartmentInfoV2Cond: clsQxDepartmentInfoV2EN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQxDepartmentInfoV2ObjLstCache = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrQxDepartmentInfoV2ObjLstCache == null) return 0;
  let arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2ObjLstCache;
  if (
    objQxDepartmentInfoV2Cond.sfFldComparisonOp == null ||
    objQxDepartmentInfoV2Cond.sfFldComparisonOp == ''
  )
    return arrQxDepartmentInfoV2Sel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxDepartmentInfoV2Cond.sfFldComparisonOp,
  );
  //console.log("clsQxDepartmentInfoV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxDepartmentInfoV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrQxDepartmentInfoV2Sel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxDepartmentInfoV2Cond),
      qxDepartmentInfoV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增，不需要生成获取最大关键字函数！*/
/*该表的关键字类型不是字符型带前缀自增，不需要生成获取最大关键字函数！*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function QxDepartmentInfoV2_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qxDepartmentInfoV2_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxDepartmentInfoV2_ConstructorName,
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
export function QxDepartmentInfoV2_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QxDepartmentInfoV2_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsQxDepartmentInfoV2EN._CurrTabName;
  switch (clsQxDepartmentInfoV2EN.CacheModeId) {
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
export function QxDepartmentInfoV2_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsQxDepartmentInfoV2EN._CurrTabName;
    switch (clsQxDepartmentInfoV2EN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功！');
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

 * @param strDepartmentTypeId:
*/
export async function QxDepartmentInfoV2_BindDdl_DepartmentIdIntByDepartmentTypeIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strDepartmentTypeId: string,
) {
  if (IsNullOrEmpty(strDepartmentTypeId) == true) {
    const strMsg = Format(
      '参数:[strDepartmentTypeId]不能为空！(In clsQxDepartmentInfoV2WApi.BindDdl_DepartmentIdIntByDepartmentTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDepartmentTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDepartmentTypeId]的长度:[{0}]不正确！(clsQxDepartmentInfoV2WApi.BindDdl_DepartmentIdIntByDepartmentTypeIdInDiv)',
      strDepartmentTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在！(In BindDdl_DepartmentIdIntByDepartmentTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DepartmentIdIntByDepartmentTypeIdInDivCache");
  let arrObjLstSel = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.departmentTypeId == strDepartmentTypeId);
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLstSel,
    clsQxDepartmentInfoV2EN.con_DepartmentIdInt,
    clsQxDepartmentInfoV2EN.con_DepartmentName,
    '部门V2',
  );
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function QxDepartmentInfoV2_BindDdl_DepartmentIdIntInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_DepartmentIdIntInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DepartmentIdIntInDivCache");
  const arrObjLstSel = await QxDepartmentInfoV2_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLstSel,
    clsQxDepartmentInfoV2EN.con_DepartmentIdInt,
    clsQxDepartmentInfoV2EN.con_DepartmentName,
    '部门V2',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxDepartmentInfoV2_CheckPropertyNew(
  pobjQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentName) === true) {
    throw new Error(
      '(errid:Watl000058)字段[部门名]不能为空(In 部门V2)!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentName) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentName) > 100
  ) {
    throw new Error(
      '(errid:Watl000059)字段[部门名(departmentName)]的长度不能超过100(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.departmentName)(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentAbbrName) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentAbbrName) > 8
  ) {
    throw new Error(
      '(errid:Watl000059)字段[名称缩写(departmentAbbrName)]的长度不能超过8(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.departmentAbbrName)(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentTypeId) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000059)字段[部门类型ID(departmentTypeId)]的长度不能超过2(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.departmentTypeId)(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.memo) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000059)字段[备注(memo)]的长度不能超过1000(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.memo)(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.createTime) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.createTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[建立时间(createTime)]的长度不能超过20(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.createTime)(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.updateTime) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.updateTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[修改时间(updateTime)]的长度不能超过20(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.updateTime)(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQxDepartmentInfoV2EN.departmentIdInt &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentIdInt &&
    tzDataType.isNumber(pobjQxDepartmentInfoV2EN.departmentIdInt) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[部门Id(departmentIdInt)]的值:[$(pobjQxDepartmentInfoV2EN.departmentIdInt)], 非法，应该为数值型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentName) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentName &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.departmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[部门名(departmentName)]的值:[$(pobjQxDepartmentInfoV2EN.departmentName)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentAbbrName) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentAbbrName &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.departmentAbbrName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[名称缩写(departmentAbbrName)]的值:[$(pobjQxDepartmentInfoV2EN.departmentAbbrName)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentTypeId) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentTypeId &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.departmentTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[部门类型ID(departmentTypeId)]的值:[$(pobjQxDepartmentInfoV2EN.departmentTypeId)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjQxDepartmentInfoV2EN.parentDepId &&
    undefined !== pobjQxDepartmentInfoV2EN.parentDepId &&
    tzDataType.isNumber(pobjQxDepartmentInfoV2EN.parentDepId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[所属部门号(parentDepId)]的值:[$(pobjQxDepartmentInfoV2EN.parentDepId)], 非法，应该为数值型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjQxDepartmentInfoV2EN.orderNum &&
    undefined !== pobjQxDepartmentInfoV2EN.orderNum &&
    tzDataType.isNumber(pobjQxDepartmentInfoV2EN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[排序号(orderNum)]的值:[$(pobjQxDepartmentInfoV2EN.orderNum)], 非法，应该为数值型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjQxDepartmentInfoV2EN.inUse &&
    undefined !== pobjQxDepartmentInfoV2EN.inUse &&
    tzDataType.isBoolean(pobjQxDepartmentInfoV2EN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[是否在用(inUse)]的值:[$(pobjQxDepartmentInfoV2EN.inUse)], 非法，应该为布尔型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.memo) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.memo &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[备注(memo)]的值:[$(pobjQxDepartmentInfoV2EN.memo)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.createTime) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.createTime &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.createTime) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[建立时间(createTime)]的值:[$(pobjQxDepartmentInfoV2EN.createTime)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.updateTime) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.updateTime &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.updateTime) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改时间(updateTime)]的值:[$(pobjQxDepartmentInfoV2EN.updateTime)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentTypeId) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentTypeId) != 2
  ) {
    throw '(errid:Watl000061)字段[部门类型ID]作为外键字段,长度应该为2(In 部门V2)!(clsQxDepartmentInfoV2BL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxDepartmentInfoV2_CheckProperty4Update(
  pobjQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentName) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentName) > 100
  ) {
    throw new Error(
      '(errid:Watl000062)字段[部门名(departmentName)]的长度不能超过100(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.departmentName)(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentAbbrName) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentAbbrName) > 8
  ) {
    throw new Error(
      '(errid:Watl000062)字段[名称缩写(departmentAbbrName)]的长度不能超过8(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.departmentAbbrName)(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentTypeId) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000062)字段[部门类型ID(departmentTypeId)]的长度不能超过2(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.departmentTypeId)(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.memo) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000062)字段[备注(memo)]的长度不能超过1000(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.memo)(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.createTime) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.createTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[建立时间(createTime)]的长度不能超过20(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.createTime)(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.updateTime) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.updateTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[修改时间(updateTime)]的长度不能超过20(In 部门V2(QxDepartmentInfoV2))!值:$(pobjQxDepartmentInfoV2EN.updateTime)(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQxDepartmentInfoV2EN.departmentIdInt &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentIdInt &&
    tzDataType.isNumber(pobjQxDepartmentInfoV2EN.departmentIdInt) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[部门Id(departmentIdInt)]的值:[$(pobjQxDepartmentInfoV2EN.departmentIdInt)], 非法，应该为数值型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentName) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentName &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.departmentName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[部门名(departmentName)]的值:[$(pobjQxDepartmentInfoV2EN.departmentName)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentAbbrName) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentAbbrName &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.departmentAbbrName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[名称缩写(departmentAbbrName)]的值:[$(pobjQxDepartmentInfoV2EN.departmentAbbrName)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentTypeId) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.departmentTypeId &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.departmentTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[部门类型ID(departmentTypeId)]的值:[$(pobjQxDepartmentInfoV2EN.departmentTypeId)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxDepartmentInfoV2EN.parentDepId &&
    undefined !== pobjQxDepartmentInfoV2EN.parentDepId &&
    tzDataType.isNumber(pobjQxDepartmentInfoV2EN.parentDepId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[所属部门号(parentDepId)]的值:[$(pobjQxDepartmentInfoV2EN.parentDepId)], 非法，应该为数值型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxDepartmentInfoV2EN.orderNum &&
    undefined !== pobjQxDepartmentInfoV2EN.orderNum &&
    tzDataType.isNumber(pobjQxDepartmentInfoV2EN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[排序号(orderNum)]的值:[$(pobjQxDepartmentInfoV2EN.orderNum)], 非法，应该为数值型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxDepartmentInfoV2EN.inUse &&
    undefined !== pobjQxDepartmentInfoV2EN.inUse &&
    tzDataType.isBoolean(pobjQxDepartmentInfoV2EN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[是否在用(inUse)]的值:[$(pobjQxDepartmentInfoV2EN.inUse)], 非法，应该为布尔型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.memo) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.memo &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[备注(memo)]的值:[$(pobjQxDepartmentInfoV2EN.memo)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.createTime) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.createTime &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.createTime) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[建立时间(createTime)]的值:[$(pobjQxDepartmentInfoV2EN.createTime)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.updateTime) == false &&
    undefined !== pobjQxDepartmentInfoV2EN.updateTime &&
    tzDataType.isString(pobjQxDepartmentInfoV2EN.updateTime) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改时间(updateTime)]的值:[$(pobjQxDepartmentInfoV2EN.updateTime)], 非法，应该为字符型(In 部门V2(QxDepartmentInfoV2))!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (
    null === pobjQxDepartmentInfoV2EN.departmentIdInt ||
    (pobjQxDepartmentInfoV2EN.departmentIdInt != null &&
      pobjQxDepartmentInfoV2EN.departmentIdInt.toString() === '') ||
    pobjQxDepartmentInfoV2EN.departmentIdInt.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[部门Id]不能为空(In 部门V2)!(clsQxDepartmentInfoV2BL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjQxDepartmentInfoV2EN.departmentTypeId) == false &&
    GetStrLen(pobjQxDepartmentInfoV2EN.departmentTypeId) != 2
  ) {
    throw '(errid:Watl000065)字段[部门类型ID]作为外键字段,长度应该为2(In 部门V2)!(clsQxDepartmentInfoV2BL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxDepartmentInfoV2_GetJSONStrByObj(
  pobjQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
): string {
  pobjQxDepartmentInfoV2EN.sfUpdFldSetStr = pobjQxDepartmentInfoV2EN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxDepartmentInfoV2EN);
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
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QxDepartmentInfoV2_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsQxDepartmentInfoV2EN> {
  let arrQxDepartmentInfoV2ObjLst = new Array<clsQxDepartmentInfoV2EN>();
  if (strJSON === '') {
    return arrQxDepartmentInfoV2ObjLst;
  }
  try {
    arrQxDepartmentInfoV2ObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxDepartmentInfoV2ObjLst;
  }
  return arrQxDepartmentInfoV2ObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxDepartmentInfoV2ObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxDepartmentInfoV2_GetObjLstByJSONObjLst(
  arrQxDepartmentInfoV2ObjLstS: Array<clsQxDepartmentInfoV2EN>,
): Array<clsQxDepartmentInfoV2EN> {
  const arrQxDepartmentInfoV2ObjLst = new Array<clsQxDepartmentInfoV2EN>();
  for (const objInFor of arrQxDepartmentInfoV2ObjLstS) {
    const obj1 = QxDepartmentInfoV2_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxDepartmentInfoV2ObjLst.push(obj1);
  }
  return arrQxDepartmentInfoV2ObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxDepartmentInfoV2_GetObjByJSONStr(strJSON: string): clsQxDepartmentInfoV2EN {
  let pobjQxDepartmentInfoV2EN = new clsQxDepartmentInfoV2EN();
  if (strJSON === '') {
    return pobjQxDepartmentInfoV2EN;
  }
  try {
    pobjQxDepartmentInfoV2EN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxDepartmentInfoV2EN;
  }
  return pobjQxDepartmentInfoV2EN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxDepartmentInfoV2_GetCombineCondition(
  objQxDepartmentInfoV2Cond: clsQxDepartmentInfoV2EN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_DepartmentIdInt,
    ) == true
  ) {
    const strComparisonOpDepartmentIdInt: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_DepartmentIdInt];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxDepartmentInfoV2EN.con_DepartmentIdInt,
      objQxDepartmentInfoV2Cond.departmentIdInt,
      strComparisonOpDepartmentIdInt,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_DepartmentName,
    ) == true
  ) {
    const strComparisonOpDepartmentName: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_DepartmentName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoV2EN.con_DepartmentName,
      objQxDepartmentInfoV2Cond.departmentName,
      strComparisonOpDepartmentName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_DepartmentAbbrName,
    ) == true
  ) {
    const strComparisonOpDepartmentAbbrName: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_DepartmentAbbrName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoV2EN.con_DepartmentAbbrName,
      objQxDepartmentInfoV2Cond.departmentAbbrName,
      strComparisonOpDepartmentAbbrName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_DepartmentTypeId,
    ) == true
  ) {
    const strComparisonOpDepartmentTypeId: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_DepartmentTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoV2EN.con_DepartmentTypeId,
      objQxDepartmentInfoV2Cond.departmentTypeId,
      strComparisonOpDepartmentTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_parentDepId,
    ) == true
  ) {
    const strComparisonOpparentDepId: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_parentDepId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxDepartmentInfoV2EN.con_parentDepId,
      objQxDepartmentInfoV2Cond.parentDepId,
      strComparisonOpparentDepId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxDepartmentInfoV2EN.con_OrderNum,
      objQxDepartmentInfoV2Cond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_InUse,
    ) == true
  ) {
    if (objQxDepartmentInfoV2Cond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxDepartmentInfoV2EN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxDepartmentInfoV2EN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoV2EN.con_Memo,
      objQxDepartmentInfoV2Cond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_CreateTime,
    ) == true
  ) {
    const strComparisonOpCreateTime: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_CreateTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoV2EN.con_CreateTime,
      objQxDepartmentInfoV2Cond.createTime,
      strComparisonOpCreateTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxDepartmentInfoV2Cond.dicFldComparisonOp,
      clsQxDepartmentInfoV2EN.con_updateTime,
    ) == true
  ) {
    const strComparisonOpupdateTime: string =
      objQxDepartmentInfoV2Cond.dicFldComparisonOp[clsQxDepartmentInfoV2EN.con_updateTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxDepartmentInfoV2EN.con_updateTime,
      objQxDepartmentInfoV2Cond.updateTime,
      strComparisonOpupdateTime,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxDepartmentInfoV2(部门V2),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDepartmentName: 部门名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxDepartmentInfoV2_GetUniCondStr(
  objQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DepartmentName = '{0}'", objQxDepartmentInfoV2EN.departmentName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxDepartmentInfoV2(部门V2),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDepartmentName: 部门名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxDepartmentInfoV2_GetUniCondStr4Update(
  objQxDepartmentInfoV2EN: clsQxDepartmentInfoV2EN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DepartmentIdInt <> '{0}'", objQxDepartmentInfoV2EN.departmentIdInt);
  strWhereCond += Format(" and DepartmentName = '{0}'", objQxDepartmentInfoV2EN.departmentName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxDepartmentInfoV2ENS:源对象
 * @param objQxDepartmentInfoV2ENT:目标对象
 */
export function QxDepartmentInfoV2_GetObjFromJsonObj(
  objQxDepartmentInfoV2ENS: clsQxDepartmentInfoV2EN,
): clsQxDepartmentInfoV2EN {
  const objQxDepartmentInfoV2ENT: clsQxDepartmentInfoV2EN = new clsQxDepartmentInfoV2EN();
  ObjectAssign(objQxDepartmentInfoV2ENT, objQxDepartmentInfoV2ENS);
  return objQxDepartmentInfoV2ENT;
}
