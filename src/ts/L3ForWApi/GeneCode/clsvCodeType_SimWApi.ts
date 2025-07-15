/**
 * 类名:clsvCodeType_SimWApi
 * 表名:vCodeType_Sim(00050623)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 21:16:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vCodeType_Sim(vCodeType_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vCodeType_Sim_Controller = 'vCodeType_SimApi';
export const vCodeType_Sim_ConstructorName = 'vCodeType_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCodeTypeId:关键字
 * @returns 对象
 **/
export async function vCodeType_Sim_GetObjByCodeTypeIdAsync(
  strCodeTypeId: string,
): Promise<clsvCodeType_SimEN | null> {
  const strThisFuncName = 'GetObjByCodeTypeIdAsync';

  if (IsNullOrEmpty(strCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strCodeTypeId]不能为空!(In clsvCodeType_SimWApi.GetObjByCodeTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeTypeId]的长度:[{0}]不正确!(clsvCodeType_SimWApi.GetObjByCodeTypeIdAsync)',
      strCodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCodeTypeId';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeTypeId,
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
      const objvCodeType_Sim = vCodeType_Sim_GetObjFromJsonObj(returnObj);
      return objvCodeType_Sim;
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
 * @param strCodeTypeId:所给的关键字
 * @returns 对象
 */
export async function vCodeType_Sim_GetObjByCodeTypeIdlocalStorage(strCodeTypeId: string) {
  const strThisFuncName = 'GetObjByCodeTypeIdlocalStorage';

  if (IsNullOrEmpty(strCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strCodeTypeId]不能为空!(In clsvCodeType_SimWApi.GetObjByCodeTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeTypeId]的长度:[{0}]不正确!(clsvCodeType_SimWApi.GetObjByCodeTypeIdlocalStorage)',
      strCodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvCodeType_SimEN._CurrTabName, strCodeTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvCodeType_SimCache: clsvCodeType_SimEN = JSON.parse(strTempObj);
    return objvCodeType_SimCache;
  }
  try {
    const objvCodeType_Sim = await vCodeType_Sim_GetObjByCodeTypeIdAsync(strCodeTypeId);
    if (objvCodeType_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvCodeType_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvCodeType_Sim;
    }
    return objvCodeType_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeTypeId,
      vCodeType_Sim_ConstructorName,
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
 * @param strCodeTypeId:所给的关键字
 * @returns 对象
 */
export async function vCodeType_Sim_GetObjByCodeTypeIdCache(
  strCodeTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCodeTypeIdCache';

  if (IsNullOrEmpty(strCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strCodeTypeId]不能为空!(In clsvCodeType_SimWApi.GetObjByCodeTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeTypeId]的长度:[{0}]不正确!(clsvCodeType_SimWApi.GetObjByCodeTypeIdCache)',
      strCodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
  try {
    const arrvCodeType_SimSel = arrvCodeType_SimObjLstCache.filter(
      (x) => x.codeTypeId == strCodeTypeId,
    );
    let objvCodeType_Sim: clsvCodeType_SimEN;
    if (arrvCodeType_SimSel.length > 0) {
      objvCodeType_Sim = arrvCodeType_SimSel[0];
      return objvCodeType_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvCodeType_SimConst = await vCodeType_Sim_GetObjByCodeTypeIdAsync(strCodeTypeId);
        if (objvCodeType_SimConst != null) {
          vCodeType_Sim_ReFreshThisCache();
          return objvCodeType_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeTypeId,
      vCodeType_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCodeType_Sim_SortFunDefa(a: clsvCodeType_SimEN, b: clsvCodeType_SimEN): number {
  return a.codeTypeId.localeCompare(b.codeTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCodeType_Sim_SortFunDefa2Fld(
  a: clsvCodeType_SimEN,
  b: clsvCodeType_SimEN,
): number {
  if (a.codeTypeName == b.codeTypeName) return a.codeTypeENName.localeCompare(b.codeTypeENName);
  else return a.codeTypeName.localeCompare(b.codeTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCodeType_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvCodeType_SimEN.con_CodeTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsvCodeType_SimEN.con_CodeTypeName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsvCodeType_SimEN.con_CodeTypeENName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (a.codeTypeENName == null) return -1;
          if (b.codeTypeENName == null) return 1;
          return a.codeTypeENName.localeCompare(b.codeTypeENName);
        };
      case clsvCodeType_SimEN.con_GroupName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.groupName.localeCompare(b.groupName);
        };
      case clsvCodeType_SimEN.con_DependsOn:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (a.dependsOn == null) return -1;
          if (b.dependsOn == null) return 1;
          return a.dependsOn.localeCompare(b.dependsOn);
        };
      case clsvCodeType_SimEN.con_FrontOrBack:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (a.frontOrBack == null) return -1;
          if (b.frontOrBack == null) return 1;
          return a.frontOrBack.localeCompare(b.frontOrBack);
        };
      case clsvCodeType_SimEN.con_OrderNum:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvCodeType_SimEN.con_ProgLangTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvCodeType_SimEN.con_Prefix:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (a.prefix == null) return -1;
          if (b.prefix == null) return 1;
          return a.prefix.localeCompare(b.prefix);
        };
      case clsvCodeType_SimEN.con_AppCount:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.appCount - b.appCount;
        };
      case clsvCodeType_SimEN.con_FuncCount:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.funcCount - b.funcCount;
        };
      case clsvCodeType_SimEN.con_ClassNameFormat:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (a.classNameFormat == null) return -1;
          if (b.classNameFormat == null) return 1;
          return a.classNameFormat.localeCompare(b.classNameFormat);
        };
      case clsvCodeType_SimEN.con_CodeTypeSimName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsvCodeType_SimEN.con_RegionTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsvCodeType_SimEN.con_InUse:
        return (a: clsvCodeType_SimEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_SqlDsTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvCodeType_SimEN.con_IsDefaultOverride:
        return (a: clsvCodeType_SimEN) => {
          if (a.isDefaultOverride == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_IsExtend:
        return (a: clsvCodeType_SimEN) => {
          if (a.isExtend == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_IsAutoParseFile:
        return (a: clsvCodeType_SimEN) => {
          if (a.isAutoParseFile == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_FileNameFormat:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (a.fileNameFormat == null) return -1;
          if (b.fileNameFormat == null) return 1;
          return a.fileNameFormat.localeCompare(b.fileNameFormat);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vCodeType_Sim]中不存在!(in ${vCodeType_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvCodeType_SimEN.con_CodeTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsvCodeType_SimEN.con_CodeTypeName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsvCodeType_SimEN.con_CodeTypeENName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (b.codeTypeENName == null) return -1;
          if (a.codeTypeENName == null) return 1;
          return b.codeTypeENName.localeCompare(a.codeTypeENName);
        };
      case clsvCodeType_SimEN.con_GroupName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.groupName.localeCompare(a.groupName);
        };
      case clsvCodeType_SimEN.con_DependsOn:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (b.dependsOn == null) return -1;
          if (a.dependsOn == null) return 1;
          return b.dependsOn.localeCompare(a.dependsOn);
        };
      case clsvCodeType_SimEN.con_FrontOrBack:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (b.frontOrBack == null) return -1;
          if (a.frontOrBack == null) return 1;
          return b.frontOrBack.localeCompare(a.frontOrBack);
        };
      case clsvCodeType_SimEN.con_OrderNum:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvCodeType_SimEN.con_ProgLangTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvCodeType_SimEN.con_Prefix:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (b.prefix == null) return -1;
          if (a.prefix == null) return 1;
          return b.prefix.localeCompare(a.prefix);
        };
      case clsvCodeType_SimEN.con_AppCount:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.appCount - a.appCount;
        };
      case clsvCodeType_SimEN.con_FuncCount:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.funcCount - a.funcCount;
        };
      case clsvCodeType_SimEN.con_ClassNameFormat:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (b.classNameFormat == null) return -1;
          if (a.classNameFormat == null) return 1;
          return b.classNameFormat.localeCompare(a.classNameFormat);
        };
      case clsvCodeType_SimEN.con_CodeTypeSimName:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsvCodeType_SimEN.con_RegionTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsvCodeType_SimEN.con_InUse:
        return (b: clsvCodeType_SimEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_SqlDsTypeId:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvCodeType_SimEN.con_IsDefaultOverride:
        return (b: clsvCodeType_SimEN) => {
          if (b.isDefaultOverride == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_IsExtend:
        return (b: clsvCodeType_SimEN) => {
          if (b.isExtend == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_IsAutoParseFile:
        return (b: clsvCodeType_SimEN) => {
          if (b.isAutoParseFile == true) return 1;
          else return -1;
        };
      case clsvCodeType_SimEN.con_FileNameFormat:
        return (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) => {
          if (b.fileNameFormat == null) return -1;
          if (a.fileNameFormat == null) return 1;
          return b.fileNameFormat.localeCompare(a.fileNameFormat);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vCodeType_Sim]中不存在!(in ${vCodeType_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCodeTypeId:所给的关键字
 * @returns 对象
 */
export async function vCodeType_Sim_GetNameByCodeTypeIdCache(strCodeTypeId: string) {
  if (IsNullOrEmpty(strCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strCodeTypeId]不能为空!(In clsvCodeType_SimWApi.GetNameByCodeTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeTypeId]的长度:[{0}]不正确!(clsvCodeType_SimWApi.GetNameByCodeTypeIdCache)',
      strCodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
  if (arrvCodeType_SimObjLstCache == null) return '';
  try {
    const arrvCodeType_SimSel = arrvCodeType_SimObjLstCache.filter(
      (x) => x.codeTypeId == strCodeTypeId,
    );
    let objvCodeType_Sim: clsvCodeType_SimEN;
    if (arrvCodeType_SimSel.length > 0) {
      objvCodeType_Sim = arrvCodeType_SimSel[0];
      return objvCodeType_Sim.codeTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCodeTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vCodeType_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvCodeType_SimEN.con_CodeTypeId:
      return (obj: clsvCodeType_SimEN) => {
        return obj.codeTypeId === value;
      };
    case clsvCodeType_SimEN.con_CodeTypeName:
      return (obj: clsvCodeType_SimEN) => {
        return obj.codeTypeName === value;
      };
    case clsvCodeType_SimEN.con_CodeTypeENName:
      return (obj: clsvCodeType_SimEN) => {
        return obj.codeTypeENName === value;
      };
    case clsvCodeType_SimEN.con_GroupName:
      return (obj: clsvCodeType_SimEN) => {
        return obj.groupName === value;
      };
    case clsvCodeType_SimEN.con_DependsOn:
      return (obj: clsvCodeType_SimEN) => {
        return obj.dependsOn === value;
      };
    case clsvCodeType_SimEN.con_FrontOrBack:
      return (obj: clsvCodeType_SimEN) => {
        return obj.frontOrBack === value;
      };
    case clsvCodeType_SimEN.con_OrderNum:
      return (obj: clsvCodeType_SimEN) => {
        return obj.orderNum === value;
      };
    case clsvCodeType_SimEN.con_ProgLangTypeId:
      return (obj: clsvCodeType_SimEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvCodeType_SimEN.con_Prefix:
      return (obj: clsvCodeType_SimEN) => {
        return obj.prefix === value;
      };
    case clsvCodeType_SimEN.con_AppCount:
      return (obj: clsvCodeType_SimEN) => {
        return obj.appCount === value;
      };
    case clsvCodeType_SimEN.con_FuncCount:
      return (obj: clsvCodeType_SimEN) => {
        return obj.funcCount === value;
      };
    case clsvCodeType_SimEN.con_ClassNameFormat:
      return (obj: clsvCodeType_SimEN) => {
        return obj.classNameFormat === value;
      };
    case clsvCodeType_SimEN.con_CodeTypeSimName:
      return (obj: clsvCodeType_SimEN) => {
        return obj.codeTypeSimName === value;
      };
    case clsvCodeType_SimEN.con_RegionTypeId:
      return (obj: clsvCodeType_SimEN) => {
        return obj.regionTypeId === value;
      };
    case clsvCodeType_SimEN.con_InUse:
      return (obj: clsvCodeType_SimEN) => {
        return obj.inUse === value;
      };
    case clsvCodeType_SimEN.con_SqlDsTypeId:
      return (obj: clsvCodeType_SimEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsvCodeType_SimEN.con_IsDefaultOverride:
      return (obj: clsvCodeType_SimEN) => {
        return obj.isDefaultOverride === value;
      };
    case clsvCodeType_SimEN.con_IsExtend:
      return (obj: clsvCodeType_SimEN) => {
        return obj.isExtend === value;
      };
    case clsvCodeType_SimEN.con_IsAutoParseFile:
      return (obj: clsvCodeType_SimEN) => {
        return obj.isAutoParseFile === value;
      };
    case clsvCodeType_SimEN.con_FileNameFormat:
      return (obj: clsvCodeType_SimEN) => {
        return obj.fileNameFormat === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vCodeType_Sim]中不存在!(in ${vCodeType_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vCodeType_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvCodeType_SimEN.con_CodeTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvCodeType_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvCodeType_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCodeTypeId = strInValue;
  if (IsNullOrEmpty(strCodeTypeId) == true) {
    return '';
  }
  const objvCodeType_Sim = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
  if (objvCodeType_Sim == null) return '';
  if (objvCodeType_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvCodeType_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vCodeType_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvCodeType_SimEN.con_CodeTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvCodeType_Sim = await vCodeType_Sim_GetObjLstCache();
  if (arrvCodeType_Sim == null) return [];
  let arrvCodeType_SimSel = arrvCodeType_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvCodeType_SimSel.length == 0) return [];
  return arrvCodeType_SimSel.map((x) => x.codeTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vCodeType_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvCodeType_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
      const objvCodeType_Sim = vCodeType_Sim_GetObjFromJsonObj(returnObj);
      return objvCodeType_Sim;
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvCodeType_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvCodeType_SimEN.WhereFormat) == false) {
    strWhereCond = clsvCodeType_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvCodeType_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvCodeType_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvCodeType_SimExObjLstCache: Array<clsvCodeType_SimEN> = CacheHelper.Get(strKey);
    const arrvCodeType_SimObjLstT = vCodeType_Sim_GetObjLstByJSONObjLst(
      arrvCodeType_SimExObjLstCache,
    );
    return arrvCodeType_SimObjLstT;
  }
  try {
    const arrvCodeType_SimExObjLst = await vCodeType_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvCodeType_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvCodeType_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvCodeType_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvCodeType_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvCodeType_SimEN.WhereFormat) == false) {
    strWhereCond = clsvCodeType_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvCodeType_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvCodeType_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvCodeType_SimExObjLstCache: Array<clsvCodeType_SimEN> = JSON.parse(strTempObjLst);
    const arrvCodeType_SimObjLstT = vCodeType_Sim_GetObjLstByJSONObjLst(
      arrvCodeType_SimExObjLstCache,
    );
    return arrvCodeType_SimObjLstT;
  }
  try {
    const arrvCodeType_SimExObjLst = await vCodeType_Sim_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvCodeType_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvCodeType_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvCodeType_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvCodeType_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvCodeType_SimObjLstCache: Array<clsvCodeType_SimEN> = JSON.parse(strTempObjLst);
    return arrvCodeType_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vCodeType_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvCodeType_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
          vCodeType_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCodeType_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvCodeType_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvCodeType_SimEN.WhereFormat) == false) {
    strWhereCond = clsvCodeType_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvCodeType_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvCodeType_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvCodeType_SimExObjLstCache: Array<clsvCodeType_SimEN> = JSON.parse(strTempObjLst);
    const arrvCodeType_SimObjLstT = vCodeType_Sim_GetObjLstByJSONObjLst(
      arrvCodeType_SimExObjLstCache,
    );
    return arrvCodeType_SimObjLstT;
  }
  try {
    const arrvCodeType_SimExObjLst = await vCodeType_Sim_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvCodeType_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvCodeType_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvCodeType_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvCodeType_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvCodeType_SimObjLstCache: Array<clsvCodeType_SimEN> = JSON.parse(strTempObjLst);
    return arrvCodeType_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vCodeType_Sim_GetObjLstCache(): Promise<Array<clsvCodeType_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvCodeType_SimObjLstCache;
  switch (clsvCodeType_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstClientCache();
      break;
    default:
      arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstClientCache();
      break;
  }
  return arrvCodeType_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vCodeType_Sim_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvCodeType_SimObjLstCache;
  switch (clsvCodeType_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvCodeType_SimObjLstCache = null;
      break;
    default:
      arrvCodeType_SimObjLstCache = null;
      break;
  }
  return arrvCodeType_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCodeTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vCodeType_Sim_GetSubObjLstCache(objvCodeType_SimCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
  let arrvCodeType_SimSel = arrvCodeType_SimObjLstCache;
  if (objvCodeType_SimCond.GetConditions().length == 0) return arrvCodeType_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvCodeType_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvCodeType_SimSel = arrvCodeType_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvCodeType_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvCodeType_SimCond),
      vCodeType_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvCodeType_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCodeTypeId:关键字列表
 * @returns 对象列表
 **/
export async function vCodeType_Sim_GetObjLstByCodeTypeIdLstAsync(
  arrCodeTypeId: Array<string>,
): Promise<Array<clsvCodeType_SimEN>> {
  const strThisFuncName = 'GetObjLstByCodeTypeIdLstAsync';
  const strAction = 'GetObjLstByCodeTypeIdLst';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCodeTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vCodeType_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCodeType_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
 * @param arrstrCodeTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function vCodeType_Sim_GetObjLstByCodeTypeIdLstCache(arrCodeTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCodeTypeIdLstCache';
  try {
    const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
    const arrvCodeType_SimSel = arrvCodeType_SimObjLstCache.filter(
      (x) => arrCodeTypeIdLst.indexOf(x.codeTypeId) > -1,
    );
    return arrvCodeType_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCodeTypeIdLst.join(','),
      vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvCodeType_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
          vCodeType_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCodeType_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvCodeType_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
          vCodeType_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCodeType_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvCodeType_SimEN>();
  const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
  if (arrvCodeType_SimObjLstCache.length == 0) return arrvCodeType_SimObjLstCache;
  let arrvCodeType_SimSel = arrvCodeType_SimObjLstCache;
  const objvCodeType_SimCond = objPagerPara.conditionCollection;
  if (objvCodeType_SimCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsvCodeType_SimEN>();
  }
  //console.log("clsvCodeType_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objvCodeType_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvCodeType_SimSel = arrvCodeType_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvCodeType_SimSel.length == 0) return arrvCodeType_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvCodeType_SimSel = arrvCodeType_SimSel.sort(
        vCodeType_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvCodeType_SimSel = arrvCodeType_SimSel.sort(objPagerPara.sortFun);
    }
    arrvCodeType_SimSel = arrvCodeType_SimSel.slice(intStart, intEnd);
    return arrvCodeType_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vCodeType_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvCodeType_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vCodeType_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvCodeType_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvCodeType_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
          vCodeType_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCodeType_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
 * @param objstrCodeTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vCodeType_Sim_IsExistRecordCache(objvCodeType_SimCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
  if (arrvCodeType_SimObjLstCache == null) return false;
  let arrvCodeType_SimSel = arrvCodeType_SimObjLstCache;
  if (objvCodeType_SimCond.GetConditions().length == 0)
    return arrvCodeType_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvCodeType_SimCond.GetConditions()) {
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
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvCodeType_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvCodeType_SimCond),
      vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
 * @param strCodeTypeId:所给的关键字
 * @returns 对象
 */
export async function vCodeType_Sim_IsExistCache(strCodeTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
  if (arrvCodeType_SimObjLstCache == null) return false;
  try {
    const arrvCodeType_SimSel = arrvCodeType_SimObjLstCache.filter(
      (x) => x.codeTypeId == strCodeTypeId,
    );
    if (arrvCodeType_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCodeTypeId,
      vCodeType_Sim_ConstructorName,
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
 * @param strCodeTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vCodeType_Sim_IsExistAsync(strCodeTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeTypeId,
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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
export async function vCodeType_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vCodeType_Sim_Controller, strAction);

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
        vCodeType_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCodeType_Sim_ConstructorName,
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
 * @param objvCodeType_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vCodeType_Sim_GetRecCountByCondCache(
  objvCodeType_SimCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvCodeType_SimObjLstCache = await vCodeType_Sim_GetObjLstCache();
  if (arrvCodeType_SimObjLstCache == null) return 0;
  let arrvCodeType_SimSel = arrvCodeType_SimObjLstCache;
  if (objvCodeType_SimCond.GetConditions().length == 0) return arrvCodeType_SimSel.length;
  try {
    for (const objCondition of objvCodeType_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvCodeType_SimSel = arrvCodeType_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvCodeType_SimSel = arrvCodeType_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvCodeType_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvCodeType_SimCond),
      vCodeType_Sim_ConstructorName,
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
export function vCodeType_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vCodeType_Sim_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvCodeType_SimEN._CurrTabName;
    switch (clsvCodeType_SimEN.CacheModeId) {
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
    clsvCodeType_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vCodeType_Sim_GetLastRefreshTime(): string {
  if (clsvCodeType_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvCodeType_SimEN._RefreshTimeLst[clsvCodeType_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strProgLangTypeId:
*/
export async function vCodeType_Sim_BindDdl_CodeTypeIdByProgLangTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strProgLangTypeId: string,
) {
  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空！(In clsvCodeType_SimWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确！(clsvCodeType_SimWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CodeTypeIdByProgLangTypeIdInDivCache");
  let arrObjLstSel = await vCodeType_Sim_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.progLangTypeId == strProgLangTypeId);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvCodeType_SimEN.con_CodeTypeId,
    clsvCodeType_SimEN.con_CodeTypeName,
    'vCodeType_Sim...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strProgLangTypeId:
*/
export async function vCodeType_Sim_GetArrvCodeType_SimByProgLangTypeId(strProgLangTypeId: string) {
  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空！(In clsvCodeType_SimWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确！(clsvCodeType_SimWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CodeTypeIdByProgLangTypeIdInDivCache");
  const arrvCodeType_Sim = new Array<clsvCodeType_SimEN>();
  let arrObjLstSel = await vCodeType_Sim_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.progLangTypeId == strProgLangTypeId);
  const obj0 = new clsvCodeType_SimEN();
  obj0.codeTypeId = '0';
  obj0.codeTypeName = '选vCodeType_Sim...';
  arrvCodeType_Sim.push(obj0);
  arrObjLstSel.forEach((x) => arrvCodeType_Sim.push(x));
  return arrvCodeType_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vCodeType_Sim_GetJSONStrByObj(pobjvCodeType_SimEN: clsvCodeType_SimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvCodeType_SimEN);
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
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vCodeType_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvCodeType_SimEN> {
  let arrvCodeType_SimObjLst = new Array<clsvCodeType_SimEN>();
  if (strJSON === '') {
    return arrvCodeType_SimObjLst;
  }
  try {
    arrvCodeType_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvCodeType_SimObjLst;
  }
  return arrvCodeType_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCodeType_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vCodeType_Sim_GetObjLstByJSONObjLst(
  arrvCodeType_SimObjLstS: Array<clsvCodeType_SimEN>,
): Array<clsvCodeType_SimEN> {
  const arrvCodeType_SimObjLst = new Array<clsvCodeType_SimEN>();
  for (const objInFor of arrvCodeType_SimObjLstS) {
    const obj1 = vCodeType_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvCodeType_SimObjLst.push(obj1);
  }
  return arrvCodeType_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vCodeType_Sim_GetObjByJSONStr(strJSON: string): clsvCodeType_SimEN {
  let pobjvCodeType_SimEN = new clsvCodeType_SimEN();
  if (strJSON === '') {
    return pobjvCodeType_SimEN;
  }
  try {
    pobjvCodeType_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvCodeType_SimEN;
  }
  return pobjvCodeType_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vCodeType_Sim_GetCombineCondition(
  objvCodeType_SimCond: clsvCodeType_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_CodeTypeId,
      objvCodeType_SimCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_CodeTypeName,
    ) == true
  ) {
    const strComparisonOpCodeTypeName: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_CodeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_CodeTypeName,
      objvCodeType_SimCond.codeTypeName,
      strComparisonOpCodeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_CodeTypeENName,
    ) == true
  ) {
    const strComparisonOpCodeTypeENName: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_CodeTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_CodeTypeENName,
      objvCodeType_SimCond.codeTypeENName,
      strComparisonOpCodeTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_GroupName,
    ) == true
  ) {
    const strComparisonOpGroupName: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_GroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_GroupName,
      objvCodeType_SimCond.groupName,
      strComparisonOpGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_DependsOn,
    ) == true
  ) {
    const strComparisonOpDependsOn: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_DependsOn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_DependsOn,
      objvCodeType_SimCond.dependsOn,
      strComparisonOpDependsOn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_FrontOrBack,
    ) == true
  ) {
    const strComparisonOpFrontOrBack: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_FrontOrBack];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_FrontOrBack,
      objvCodeType_SimCond.frontOrBack,
      strComparisonOpFrontOrBack,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvCodeType_SimEN.con_OrderNum,
      objvCodeType_SimCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_ProgLangTypeId,
      objvCodeType_SimCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_Prefix,
    ) == true
  ) {
    const strComparisonOpPrefix: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_Prefix];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_Prefix,
      objvCodeType_SimCond.prefix,
      strComparisonOpPrefix,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_AppCount,
    ) == true
  ) {
    const strComparisonOpAppCount: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_AppCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvCodeType_SimEN.con_AppCount,
      objvCodeType_SimCond.appCount,
      strComparisonOpAppCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_FuncCount,
    ) == true
  ) {
    const strComparisonOpFuncCount: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_FuncCount];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvCodeType_SimEN.con_FuncCount,
      objvCodeType_SimCond.funcCount,
      strComparisonOpFuncCount,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_ClassNameFormat,
    ) == true
  ) {
    const strComparisonOpClassNameFormat: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_ClassNameFormat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_ClassNameFormat,
      objvCodeType_SimCond.classNameFormat,
      strComparisonOpClassNameFormat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_CodeTypeSimName,
    ) == true
  ) {
    const strComparisonOpCodeTypeSimName: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_CodeTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_CodeTypeSimName,
      objvCodeType_SimCond.codeTypeSimName,
      strComparisonOpCodeTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_RegionTypeId,
      objvCodeType_SimCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_InUse,
    ) == true
  ) {
    if (objvCodeType_SimCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvCodeType_SimEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvCodeType_SimEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_SqlDsTypeId,
      objvCodeType_SimCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_IsDefaultOverride,
    ) == true
  ) {
    if (objvCodeType_SimCond.isDefaultOverride == true) {
      strWhereCond += Format(" And {0} = '1'", clsvCodeType_SimEN.con_IsDefaultOverride);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvCodeType_SimEN.con_IsDefaultOverride);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_IsExtend,
    ) == true
  ) {
    if (objvCodeType_SimCond.isExtend == true) {
      strWhereCond += Format(" And {0} = '1'", clsvCodeType_SimEN.con_IsExtend);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvCodeType_SimEN.con_IsExtend);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_IsAutoParseFile,
    ) == true
  ) {
    if (objvCodeType_SimCond.isAutoParseFile == true) {
      strWhereCond += Format(" And {0} = '1'", clsvCodeType_SimEN.con_IsAutoParseFile);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvCodeType_SimEN.con_IsAutoParseFile);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCodeType_SimCond.dicFldComparisonOp,
      clsvCodeType_SimEN.con_FileNameFormat,
    ) == true
  ) {
    const strComparisonOpFileNameFormat: string =
      objvCodeType_SimCond.dicFldComparisonOp[clsvCodeType_SimEN.con_FileNameFormat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCodeType_SimEN.con_FileNameFormat,
      objvCodeType_SimCond.fileNameFormat,
      strComparisonOpFileNameFormat,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCodeType_SimENS:源对象
 * @param objvCodeType_SimENT:目标对象
 */
export function vCodeType_Sim_GetObjFromJsonObj(
  objvCodeType_SimENS: clsvCodeType_SimEN,
): clsvCodeType_SimEN {
  const objvCodeType_SimENT: clsvCodeType_SimEN = new clsvCodeType_SimEN();
  ObjectAssign(objvCodeType_SimENT, objvCodeType_SimENS);
  return objvCodeType_SimENT;
}
