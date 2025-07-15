/**
 * 类名:clsFileResExcludePathWApi
 * 表名:FileResExcludePath(00050588)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:48
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 文件资源导入排除目录(FileResExcludePath)
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
import { clsFileResExcludePathEN } from '@/ts/L0Entity/ResourceMan/clsFileResExcludePathEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const fileResExcludePath_Controller = 'FileResExcludePathApi';
export const fileResExcludePath_ConstructorName = 'fileResExcludePath';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FileResExcludePath_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFileResExcludePathEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsFileResExcludePathWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
      const objFileResExcludePath = FileResExcludePath_GetObjFromJsonObj(returnObj);
      return objFileResExcludePath;
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsFileResExcludePathWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
  try {
    const arrFileResExcludePathSel = arrFileResExcludePathObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objFileResExcludePath: clsFileResExcludePathEN;
    if (arrFileResExcludePathSel.length > 0) {
      objFileResExcludePath = arrFileResExcludePathSel[0];
      return objFileResExcludePath;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFileResExcludePathConst = await FileResExcludePath_GetObjBymIdAsync(lngmId);
        if (objFileResExcludePathConst != null) {
          FileResExcludePath_ReFreshThisCache();
          return objFileResExcludePathConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFileResExcludePathWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFileResExcludePathEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFileResExcludePathCache: clsFileResExcludePathEN = JSON.parse(strTempObj);
    return objFileResExcludePathCache;
  }
  try {
    const objFileResExcludePath = await FileResExcludePath_GetObjBymIdAsync(lngmId);
    if (objFileResExcludePath != null) {
      localStorage.setItem(strKey, JSON.stringify(objFileResExcludePath));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFileResExcludePath;
    }
    return objFileResExcludePath;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      fileResExcludePath_ConstructorName,
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
 * @param objFileResExcludePath:所给的对象
 * @returns 对象
 */
export async function FileResExcludePath_UpdateObjInLstCache(
  objFileResExcludePath: clsFileResExcludePathEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
    const obj = arrFileResExcludePathObjLstCache.find(
      (x) => x.excludeDirName == objFileResExcludePath.excludeDirName,
    );
    if (obj != null) {
      objFileResExcludePath.mId = obj.mId;
      ObjectAssign(obj, objFileResExcludePath);
    } else {
      arrFileResExcludePathObjLstCache.push(objFileResExcludePath);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFileResExcludePathEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFileResExcludePathEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFileResExcludePathEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objFileResExcludePath = await FileResExcludePath_GetObjBymIdCache(lngmId);
  if (objFileResExcludePath == null) return '';
  if (objFileResExcludePath.GetFldValue(strOutFldName) == null) return '';
  return objFileResExcludePath.GetFldValue(strOutFldName).toString();
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
export function FileResExcludePath_SortFunDefa(
  a: clsFileResExcludePathEN,
  b: clsFileResExcludePathEN,
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
export function FileResExcludePath_SortFunDefa2Fld(
  a: clsFileResExcludePathEN,
  b: clsFileResExcludePathEN,
): number {
  if (a.excludeDirName == b.excludeDirName) return a.prjId.localeCompare(b.prjId);
  else return a.excludeDirName.localeCompare(b.excludeDirName);
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
export function FileResExcludePath_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFileResExcludePathEN.con_mId:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          return a.mId - b.mId;
        };
      case clsFileResExcludePathEN.con_ExcludeDirName:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          return a.excludeDirName.localeCompare(b.excludeDirName);
        };
      case clsFileResExcludePathEN.con_PrjId:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFileResExcludePathEN.con_CmPrjId:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (a.cmPrjId == null) return -1;
          if (b.cmPrjId == null) return 1;
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsFileResExcludePathEN.con_UpdDate:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFileResExcludePathEN.con_UpdUser:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFileResExcludePathEN.con_Memo:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FileResExcludePath]中不存在!(in ${fileResExcludePath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFileResExcludePathEN.con_mId:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          return b.mId - a.mId;
        };
      case clsFileResExcludePathEN.con_ExcludeDirName:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          return b.excludeDirName.localeCompare(a.excludeDirName);
        };
      case clsFileResExcludePathEN.con_PrjId:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFileResExcludePathEN.con_CmPrjId:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (b.cmPrjId == null) return -1;
          if (a.cmPrjId == null) return 1;
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsFileResExcludePathEN.con_UpdDate:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFileResExcludePathEN.con_UpdUser:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFileResExcludePathEN.con_Memo:
        return (a: clsFileResExcludePathEN, b: clsFileResExcludePathEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FileResExcludePath]中不存在!(in ${fileResExcludePath_ConstructorName}.${strThisFuncName})`;
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
export async function FileResExcludePath_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFileResExcludePathEN.con_mId:
      return (obj: clsFileResExcludePathEN) => {
        return obj.mId === value;
      };
    case clsFileResExcludePathEN.con_ExcludeDirName:
      return (obj: clsFileResExcludePathEN) => {
        return obj.excludeDirName === value;
      };
    case clsFileResExcludePathEN.con_PrjId:
      return (obj: clsFileResExcludePathEN) => {
        return obj.prjId === value;
      };
    case clsFileResExcludePathEN.con_CmPrjId:
      return (obj: clsFileResExcludePathEN) => {
        return obj.cmPrjId === value;
      };
    case clsFileResExcludePathEN.con_UpdDate:
      return (obj: clsFileResExcludePathEN) => {
        return obj.updDate === value;
      };
    case clsFileResExcludePathEN.con_UpdUser:
      return (obj: clsFileResExcludePathEN) => {
        return obj.updUser === value;
      };
    case clsFileResExcludePathEN.con_Memo:
      return (obj: clsFileResExcludePathEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FileResExcludePath]中不存在!(in ${fileResExcludePath_ConstructorName}.${strThisFuncName})`;
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
export async function FileResExcludePath_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFileResExcludePathEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrFileResExcludePath = await FileResExcludePath_GetObjLstCache();
  if (arrFileResExcludePath == null) return [];
  let arrFileResExcludePathSel = arrFileResExcludePath;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFileResExcludePathSel.length == 0) return [];
  return arrFileResExcludePathSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FileResExcludePath_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFileResExcludePathEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
      const objFileResExcludePath = FileResExcludePath_GetObjFromJsonObj(returnObj);
      return objFileResExcludePath;
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFileResExcludePathEN._CurrTabName;
  if (IsNullOrEmpty(clsFileResExcludePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFileResExcludePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFileResExcludePathExObjLstCache: Array<clsFileResExcludePathEN> =
      CacheHelper.Get(strKey);
    const arrFileResExcludePathObjLstT = FileResExcludePath_GetObjLstByJSONObjLst(
      arrFileResExcludePathExObjLstCache,
    );
    return arrFileResExcludePathObjLstT;
  }
  try {
    const arrFileResExcludePathExObjLst = await FileResExcludePath_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFileResExcludePathExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFileResExcludePathExObjLst.length,
    );
    console.log(strInfo);
    return arrFileResExcludePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFileResExcludePathEN._CurrTabName;
  if (IsNullOrEmpty(clsFileResExcludePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFileResExcludePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFileResExcludePathExObjLstCache: Array<clsFileResExcludePathEN> =
      JSON.parse(strTempObjLst);
    const arrFileResExcludePathObjLstT = FileResExcludePath_GetObjLstByJSONObjLst(
      arrFileResExcludePathExObjLstCache,
    );
    return arrFileResExcludePathObjLstT;
  }
  try {
    const arrFileResExcludePathExObjLst = await FileResExcludePath_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFileResExcludePathExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFileResExcludePathExObjLst.length,
    );
    console.log(strInfo);
    return arrFileResExcludePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFileResExcludePathEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFileResExcludePathObjLstCache: Array<clsFileResExcludePathEN> =
      JSON.parse(strTempObjLst);
    return arrFileResExcludePathObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FileResExcludePath_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFileResExcludePathEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
          fileResExcludePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResExcludePath_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFileResExcludePathEN._CurrTabName;
  if (IsNullOrEmpty(clsFileResExcludePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFileResExcludePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFileResExcludePathExObjLstCache: Array<clsFileResExcludePathEN> =
      JSON.parse(strTempObjLst);
    const arrFileResExcludePathObjLstT = FileResExcludePath_GetObjLstByJSONObjLst(
      arrFileResExcludePathExObjLstCache,
    );
    return arrFileResExcludePathObjLstT;
  }
  try {
    const arrFileResExcludePathExObjLst = await FileResExcludePath_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFileResExcludePathExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFileResExcludePathExObjLst.length,
    );
    console.log(strInfo);
    return arrFileResExcludePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFileResExcludePathEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFileResExcludePathObjLstCache: Array<clsFileResExcludePathEN> =
      JSON.parse(strTempObjLst);
    return arrFileResExcludePathObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FileResExcludePath_GetObjLstCache(): Promise<Array<clsFileResExcludePathEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFileResExcludePathObjLstCache;
  switch (clsFileResExcludePathEN.CacheModeId) {
    case '04': //sessionStorage
      arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstClientCache();
      break;
    default:
      arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstClientCache();
      break;
  }
  return arrFileResExcludePathObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FileResExcludePath_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFileResExcludePathObjLstCache;
  switch (clsFileResExcludePathEN.CacheModeId) {
    case '04': //sessionStorage
      arrFileResExcludePathObjLstCache =
        await FileResExcludePath_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFileResExcludePathObjLstCache = null;
      break;
    default:
      arrFileResExcludePathObjLstCache = null;
      break;
  }
  return arrFileResExcludePathObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FileResExcludePath_GetSubObjLstCache(
  objFileResExcludePathCond: clsFileResExcludePathEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
  let arrFileResExcludePathSel = arrFileResExcludePathObjLstCache;
  if (
    objFileResExcludePathCond.sfFldComparisonOp == null ||
    objFileResExcludePathCond.sfFldComparisonOp == ''
  )
    return arrFileResExcludePathSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFileResExcludePathCond.sfFldComparisonOp,
  );
  //console.log("clsFileResExcludePathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFileResExcludePathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFileResExcludePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFileResExcludePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFileResExcludePathCond),
      fileResExcludePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFileResExcludePathEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function FileResExcludePath_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFileResExcludePathEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
          fileResExcludePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResExcludePath_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
    const arrFileResExcludePathSel = arrFileResExcludePathObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrFileResExcludePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFileResExcludePathEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
          fileResExcludePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResExcludePath_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFileResExcludePathEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
          fileResExcludePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResExcludePath_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFileResExcludePathEN>();
  const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
  if (arrFileResExcludePathObjLstCache.length == 0) return arrFileResExcludePathObjLstCache;
  let arrFileResExcludePathSel = arrFileResExcludePathObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objFileResExcludePathCond = new clsFileResExcludePathEN();
  ObjectAssign(objFileResExcludePathCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsFileResExcludePathWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFileResExcludePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFileResExcludePathSel.length == 0) return arrFileResExcludePathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFileResExcludePathSel = arrFileResExcludePathSel.sort(
        FileResExcludePath_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFileResExcludePathSel = arrFileResExcludePathSel.sort(objPagerPara.sortFun);
    }
    arrFileResExcludePathSel = arrFileResExcludePathSel.slice(intStart, intEnd);
    return arrFileResExcludePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fileResExcludePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFileResExcludePathEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FileResExcludePath_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFileResExcludePathEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFileResExcludePathEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
          fileResExcludePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResExcludePath_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_DelFileResExcludePathsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFileResExcludePathsAsync';
  const strAction = 'DelFileResExcludePaths';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_DelFileResExcludePathsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFileResExcludePathsByCondAsync';
  const strAction = 'DelFileResExcludePathsByCond';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
 * @param objFileResExcludePathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FileResExcludePath_AddNewRecordAsync(
  objFileResExcludePathEN: clsFileResExcludePathEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFileResExcludePathEN);
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResExcludePathEN, config);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
 * @param objFileResExcludePathEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FileResExcludePath_AddNewRecordWithReturnKeyAsync(
  objFileResExcludePathEN: clsFileResExcludePathEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResExcludePathEN, config);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
 * @param objFileResExcludePathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FileResExcludePath_UpdateRecordAsync(
  objFileResExcludePathEN: clsFileResExcludePathEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFileResExcludePathEN.sfUpdFldSetStr === undefined ||
    objFileResExcludePathEN.sfUpdFldSetStr === null ||
    objFileResExcludePathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFileResExcludePathEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResExcludePathEN, config);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
 * @param objFileResExcludePathEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FileResExcludePath_UpdateWithConditionAsync(
  objFileResExcludePathEN: clsFileResExcludePathEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFileResExcludePathEN.sfUpdFldSetStr === undefined ||
    objFileResExcludePathEN.sfUpdFldSetStr === null ||
    objFileResExcludePathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFileResExcludePathEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);
  objFileResExcludePathEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResExcludePathEN, config);
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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_IsExistRecordCache(
  objFileResExcludePathCond: clsFileResExcludePathEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
  if (arrFileResExcludePathObjLstCache == null) return false;
  let arrFileResExcludePathSel = arrFileResExcludePathObjLstCache;
  if (
    objFileResExcludePathCond.sfFldComparisonOp == null ||
    objFileResExcludePathCond.sfFldComparisonOp == ''
  )
    return arrFileResExcludePathSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFileResExcludePathCond.sfFldComparisonOp,
  );
  //console.log("clsFileResExcludePathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFileResExcludePathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFileResExcludePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFileResExcludePathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFileResExcludePathCond),
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
  if (arrFileResExcludePathObjLstCache == null) return false;
  try {
    const arrFileResExcludePathSel = arrFileResExcludePathObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrFileResExcludePathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
 * @param objFileResExcludePathCond:条件对象
 * @returns 对象列表记录数
 */
export async function FileResExcludePath_GetRecCountByCondCache(
  objFileResExcludePathCond: clsFileResExcludePathEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFileResExcludePathObjLstCache = await FileResExcludePath_GetObjLstCache();
  if (arrFileResExcludePathObjLstCache == null) return 0;
  let arrFileResExcludePathSel = arrFileResExcludePathObjLstCache;
  if (
    objFileResExcludePathCond.sfFldComparisonOp == null ||
    objFileResExcludePathCond.sfFldComparisonOp == ''
  )
    return arrFileResExcludePathSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFileResExcludePathCond.sfFldComparisonOp,
  );
  //console.log("clsFileResExcludePathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFileResExcludePathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFileResExcludePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFileResExcludePathSel = arrFileResExcludePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFileResExcludePathSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFileResExcludePathCond),
      fileResExcludePath_ConstructorName,
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
export async function FileResExcludePath_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fileResExcludePath_Controller, strAction);

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
        fileResExcludePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResExcludePath_ConstructorName,
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
export function FileResExcludePath_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FileResExcludePath_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFileResExcludePathEN._CurrTabName;
  switch (clsFileResExcludePathEN.CacheModeId) {
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
export function FileResExcludePath_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFileResExcludePathEN._CurrTabName;
    switch (clsFileResExcludePathEN.CacheModeId) {
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
export function FileResExcludePath_CheckPropertyNew(
  pobjFileResExcludePathEN: clsFileResExcludePathEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFileResExcludePathEN.excludeDirName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件目录名]不能为空(In 文件资源导入排除目录)!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.excludeDirName) == false &&
    GetStrLen(pobjFileResExcludePathEN.excludeDirName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文件目录名(excludeDirName)]的长度不能超过200(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.excludeDirName)(clsFileResExcludePathBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.prjId) == false &&
    GetStrLen(pobjFileResExcludePathEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.prjId)(clsFileResExcludePathBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.cmPrjId) == false &&
    GetStrLen(pobjFileResExcludePathEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.cmPrjId)(clsFileResExcludePathBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updDate) == false &&
    GetStrLen(pobjFileResExcludePathEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.updDate)(clsFileResExcludePathBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updUser) == false &&
    GetStrLen(pobjFileResExcludePathEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.updUser)(clsFileResExcludePathBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.memo) == false &&
    GetStrLen(pobjFileResExcludePathEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.memo)(clsFileResExcludePathBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFileResExcludePathEN.mId &&
    undefined !== pobjFileResExcludePathEN.mId &&
    tzDataType.isNumber(pobjFileResExcludePathEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjFileResExcludePathEN.mId)], 非法,应该为数值型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.excludeDirName) == false &&
    undefined !== pobjFileResExcludePathEN.excludeDirName &&
    tzDataType.isString(pobjFileResExcludePathEN.excludeDirName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件目录名(excludeDirName)]的值:[$(pobjFileResExcludePathEN.excludeDirName)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.prjId) == false &&
    undefined !== pobjFileResExcludePathEN.prjId &&
    tzDataType.isString(pobjFileResExcludePathEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjFileResExcludePathEN.prjId)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.cmPrjId) == false &&
    undefined !== pobjFileResExcludePathEN.cmPrjId &&
    tzDataType.isString(pobjFileResExcludePathEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[$(pobjFileResExcludePathEN.cmPrjId)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updDate) == false &&
    undefined !== pobjFileResExcludePathEN.updDate &&
    tzDataType.isString(pobjFileResExcludePathEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFileResExcludePathEN.updDate)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updUser) == false &&
    undefined !== pobjFileResExcludePathEN.updUser &&
    tzDataType.isString(pobjFileResExcludePathEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjFileResExcludePathEN.updUser)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.memo) == false &&
    undefined !== pobjFileResExcludePathEN.memo &&
    tzDataType.isString(pobjFileResExcludePathEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjFileResExcludePathEN.memo)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FileResExcludePath_CheckProperty4Update(
  pobjFileResExcludePathEN: clsFileResExcludePathEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.excludeDirName) == false &&
    GetStrLen(pobjFileResExcludePathEN.excludeDirName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文件目录名(excludeDirName)]的长度不能超过200(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.excludeDirName)(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.prjId) == false &&
    GetStrLen(pobjFileResExcludePathEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.prjId)(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.cmPrjId) == false &&
    GetStrLen(pobjFileResExcludePathEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.cmPrjId)(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updDate) == false &&
    GetStrLen(pobjFileResExcludePathEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.updDate)(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updUser) == false &&
    GetStrLen(pobjFileResExcludePathEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.updUser)(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.memo) == false &&
    GetStrLen(pobjFileResExcludePathEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 文件资源导入排除目录(FileResExcludePath))!值:$(pobjFileResExcludePathEN.memo)(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFileResExcludePathEN.mId &&
    undefined !== pobjFileResExcludePathEN.mId &&
    tzDataType.isNumber(pobjFileResExcludePathEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjFileResExcludePathEN.mId)], 非法,应该为数值型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.excludeDirName) == false &&
    undefined !== pobjFileResExcludePathEN.excludeDirName &&
    tzDataType.isString(pobjFileResExcludePathEN.excludeDirName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件目录名(excludeDirName)]的值:[$(pobjFileResExcludePathEN.excludeDirName)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.prjId) == false &&
    undefined !== pobjFileResExcludePathEN.prjId &&
    tzDataType.isString(pobjFileResExcludePathEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjFileResExcludePathEN.prjId)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.cmPrjId) == false &&
    undefined !== pobjFileResExcludePathEN.cmPrjId &&
    tzDataType.isString(pobjFileResExcludePathEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[$(pobjFileResExcludePathEN.cmPrjId)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updDate) == false &&
    undefined !== pobjFileResExcludePathEN.updDate &&
    tzDataType.isString(pobjFileResExcludePathEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFileResExcludePathEN.updDate)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.updUser) == false &&
    undefined !== pobjFileResExcludePathEN.updUser &&
    tzDataType.isString(pobjFileResExcludePathEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjFileResExcludePathEN.updUser)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResExcludePathEN.memo) == false &&
    undefined !== pobjFileResExcludePathEN.memo &&
    tzDataType.isString(pobjFileResExcludePathEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjFileResExcludePathEN.memo)], 非法,应该为字符型(In 文件资源导入排除目录(FileResExcludePath))!(clsFileResExcludePathBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFileResExcludePathEN.mId ||
    (pobjFileResExcludePathEN.mId != null && pobjFileResExcludePathEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 文件资源导入排除目录)!(clsFileResExcludePathBL:CheckProperty4Update)',
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
export function FileResExcludePath_GetJSONStrByObj(
  pobjFileResExcludePathEN: clsFileResExcludePathEN,
): string {
  pobjFileResExcludePathEN.sfUpdFldSetStr = pobjFileResExcludePathEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFileResExcludePathEN);
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
export function FileResExcludePath_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFileResExcludePathEN> {
  let arrFileResExcludePathObjLst = new Array<clsFileResExcludePathEN>();
  if (strJSON === '') {
    return arrFileResExcludePathObjLst;
  }
  try {
    arrFileResExcludePathObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFileResExcludePathObjLst;
  }
  return arrFileResExcludePathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFileResExcludePathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FileResExcludePath_GetObjLstByJSONObjLst(
  arrFileResExcludePathObjLstS: Array<clsFileResExcludePathEN>,
): Array<clsFileResExcludePathEN> {
  const arrFileResExcludePathObjLst = new Array<clsFileResExcludePathEN>();
  for (const objInFor of arrFileResExcludePathObjLstS) {
    const obj1 = FileResExcludePath_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFileResExcludePathObjLst.push(obj1);
  }
  return arrFileResExcludePathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FileResExcludePath_GetObjByJSONStr(strJSON: string): clsFileResExcludePathEN {
  let pobjFileResExcludePathEN = new clsFileResExcludePathEN();
  if (strJSON === '') {
    return pobjFileResExcludePathEN;
  }
  try {
    pobjFileResExcludePathEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFileResExcludePathEN;
  }
  return pobjFileResExcludePathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FileResExcludePath_GetCombineCondition(
  objFileResExcludePathCond: clsFileResExcludePathEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResExcludePathCond.dicFldComparisonOp,
      clsFileResExcludePathEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFileResExcludePathCond.dicFldComparisonOp[clsFileResExcludePathEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFileResExcludePathEN.con_mId,
      objFileResExcludePathCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResExcludePathCond.dicFldComparisonOp,
      clsFileResExcludePathEN.con_ExcludeDirName,
    ) == true
  ) {
    const strComparisonOpExcludeDirName: string =
      objFileResExcludePathCond.dicFldComparisonOp[clsFileResExcludePathEN.con_ExcludeDirName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResExcludePathEN.con_ExcludeDirName,
      objFileResExcludePathCond.excludeDirName,
      strComparisonOpExcludeDirName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResExcludePathCond.dicFldComparisonOp,
      clsFileResExcludePathEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFileResExcludePathCond.dicFldComparisonOp[clsFileResExcludePathEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResExcludePathEN.con_PrjId,
      objFileResExcludePathCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResExcludePathCond.dicFldComparisonOp,
      clsFileResExcludePathEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objFileResExcludePathCond.dicFldComparisonOp[clsFileResExcludePathEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResExcludePathEN.con_CmPrjId,
      objFileResExcludePathCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResExcludePathCond.dicFldComparisonOp,
      clsFileResExcludePathEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFileResExcludePathCond.dicFldComparisonOp[clsFileResExcludePathEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResExcludePathEN.con_UpdDate,
      objFileResExcludePathCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResExcludePathCond.dicFldComparisonOp,
      clsFileResExcludePathEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFileResExcludePathCond.dicFldComparisonOp[clsFileResExcludePathEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResExcludePathEN.con_UpdUser,
      objFileResExcludePathCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResExcludePathCond.dicFldComparisonOp,
      clsFileResExcludePathEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFileResExcludePathCond.dicFldComparisonOp[clsFileResExcludePathEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResExcludePathEN.con_Memo,
      objFileResExcludePathCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FileResExcludePath(文件资源导入排除目录),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strExcludeDirName: 文件目录名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FileResExcludePath_GetUniCondStr(
  objFileResExcludePathEN: clsFileResExcludePathEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ExcludeDirName = '{0}'", objFileResExcludePathEN.excludeDirName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FileResExcludePath(文件资源导入排除目录),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strExcludeDirName: 文件目录名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FileResExcludePath_GetUniCondStr4Update(
  objFileResExcludePathEN: clsFileResExcludePathEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFileResExcludePathEN.mId);
  strWhereCond += Format(" and ExcludeDirName = '{0}'", objFileResExcludePathEN.excludeDirName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFileResExcludePathENS:源对象
 * @param objFileResExcludePathENT:目标对象
 */
export function FileResExcludePath_GetObjFromJsonObj(
  objFileResExcludePathENS: clsFileResExcludePathEN,
): clsFileResExcludePathEN {
  const objFileResExcludePathENT: clsFileResExcludePathEN = new clsFileResExcludePathEN();
  ObjectAssign(objFileResExcludePathENT, objFileResExcludePathENS);
  return objFileResExcludePathENT;
}
