/**
 * 类名:clsWebSrvClassWApi
 * 表名:WebSrvClass(00050344)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:31
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * WebSrv类(WebSrvClass)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月26日.
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
import { clsWebSrvClassEN } from '@/ts/L0Entity/GeneCode/clsWebSrvClassEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const webSrvClass_Controller = 'WebSrvClassApi';
export const webSrvClass_ConstructorName = 'webSrvClass';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strWebSrvClassId:关键字
 * @returns 对象
 **/
export async function WebSrvClass_GetObjByWebSrvClassIdAsync(
  strWebSrvClassId: string,
): Promise<clsWebSrvClassEN | null> {
  const strThisFuncName = 'GetObjByWebSrvClassIdAsync';

  if (IsNullOrEmpty(strWebSrvClassId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassId]不能为空!(In clsWebSrvClassWApi.GetObjByWebSrvClassIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassId]的长度:[{0}]不正确!(clsWebSrvClassWApi.GetObjByWebSrvClassIdAsync)',
      strWebSrvClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByWebSrvClassId';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvClassId,
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
      const objWebSrvClass = WebSrvClass_GetObjFromJsonObj(returnObj);
      return objWebSrvClass;
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param strWebSrvClassId:所给的关键字
 * @returns 对象
 */
export async function WebSrvClass_GetObjByWebSrvClassIdCache(
  strWebSrvClassId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByWebSrvClassIdCache';

  if (IsNullOrEmpty(strWebSrvClassId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassId]不能为空!(In clsWebSrvClassWApi.GetObjByWebSrvClassIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassId]的长度:[{0}]不正确!(clsWebSrvClassWApi.GetObjByWebSrvClassIdCache)',
      strWebSrvClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
  try {
    const arrWebSrvClassSel = arrWebSrvClassObjLstCache.filter(
      (x) => x.webSrvClassId == strWebSrvClassId,
    );
    let objWebSrvClass: clsWebSrvClassEN;
    if (arrWebSrvClassSel.length > 0) {
      objWebSrvClass = arrWebSrvClassSel[0];
      return objWebSrvClass;
    } else {
      if (bolTryAsyncOnce == true) {
        const objWebSrvClassConst = await WebSrvClass_GetObjByWebSrvClassIdAsync(strWebSrvClassId);
        if (objWebSrvClassConst != null) {
          WebSrvClass_ReFreshThisCache(strPrjId);
          return objWebSrvClassConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strWebSrvClassId,
      webSrvClass_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strWebSrvClassId:所给的关键字
 * @returns 对象
 */
export async function WebSrvClass_GetObjByWebSrvClassIdlocalStorage(strWebSrvClassId: string) {
  const strThisFuncName = 'GetObjByWebSrvClassIdlocalStorage';

  if (IsNullOrEmpty(strWebSrvClassId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassId]不能为空!(In clsWebSrvClassWApi.GetObjByWebSrvClassIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassId]的长度:[{0}]不正确!(clsWebSrvClassWApi.GetObjByWebSrvClassIdlocalStorage)',
      strWebSrvClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strWebSrvClassId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objWebSrvClassCache: clsWebSrvClassEN = JSON.parse(strTempObj);
    return objWebSrvClassCache;
  }
  try {
    const objWebSrvClass = await WebSrvClass_GetObjByWebSrvClassIdAsync(strWebSrvClassId);
    if (objWebSrvClass != null) {
      localStorage.setItem(strKey, JSON.stringify(objWebSrvClass));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objWebSrvClass;
    }
    return objWebSrvClass;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strWebSrvClassId,
      webSrvClass_ConstructorName,
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
 * @param objWebSrvClass:所给的对象
 * @returns 对象
 */
export async function WebSrvClass_UpdateObjInLstCache(
  objWebSrvClass: clsWebSrvClassEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
    const obj = arrWebSrvClassObjLstCache.find(
      (x) => x.clsName == objWebSrvClass.clsName && x.prjId == objWebSrvClass.prjId,
    );
    if (obj != null) {
      objWebSrvClass.webSrvClassId = obj.webSrvClassId;
      ObjectAssign(obj, objWebSrvClass);
    } else {
      arrWebSrvClassObjLstCache.push(objWebSrvClass);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      webSrvClass_ConstructorName,
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
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function WebSrvClass_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsWebSrvClassWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsWebSrvClassWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsWebSrvClassEN.con_WebSrvClassId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsWebSrvClassEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsWebSrvClassEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strWebSrvClassId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objWebSrvClass = await WebSrvClass_GetObjByWebSrvClassIdCache(
    strWebSrvClassId,
    strPrjIdClassfy,
  );
  if (objWebSrvClass == null) return '';
  if (objWebSrvClass.GetFldValue(strOutFldName) == null) return '';
  return objWebSrvClass.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function WebSrvClass_SortFunDefa(a: clsWebSrvClassEN, b: clsWebSrvClassEN): number {
  return a.webSrvClassId.localeCompare(b.webSrvClassId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function WebSrvClass_SortFunDefa2Fld(a: clsWebSrvClassEN, b: clsWebSrvClassEN): number {
  if (a.nameSpace == b.nameSpace) return a.webSrvUrl.localeCompare(b.webSrvUrl);
  else return a.nameSpace.localeCompare(b.nameSpace);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function WebSrvClass_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsWebSrvClassEN.con_WebSrvClassId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return a.webSrvClassId.localeCompare(b.webSrvClassId);
        };
      case clsWebSrvClassEN.con_NameSpace:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (a.nameSpace == null) return -1;
          if (b.nameSpace == null) return 1;
          return a.nameSpace.localeCompare(b.nameSpace);
        };
      case clsWebSrvClassEN.con_WebSrvUrl:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return a.webSrvUrl.localeCompare(b.webSrvUrl);
        };
      case clsWebSrvClassEN.con_PageName:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return a.pageName.localeCompare(b.pageName);
        };
      case clsWebSrvClassEN.con_FuncModuleAgcId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (a.funcModuleAgcId == null) return -1;
          if (b.funcModuleAgcId == null) return 1;
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsWebSrvClassEN.con_IsNeedGene:
        return (a: clsWebSrvClassEN) => {
          if (a.isNeedGene == true) return 1;
          else return -1;
        };
      case clsWebSrvClassEN.con_PrjId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsWebSrvClassEN.con_UpdDate:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsWebSrvClassEN.con_UpdUser:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsWebSrvClassEN.con_Memo:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsWebSrvClassEN.con_CodeTypeId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsWebSrvClassEN.con_ClsName:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return a.clsName.localeCompare(b.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[WebSrvClass]中不存在!(in ${webSrvClass_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsWebSrvClassEN.con_WebSrvClassId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return b.webSrvClassId.localeCompare(a.webSrvClassId);
        };
      case clsWebSrvClassEN.con_NameSpace:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (b.nameSpace == null) return -1;
          if (a.nameSpace == null) return 1;
          return b.nameSpace.localeCompare(a.nameSpace);
        };
      case clsWebSrvClassEN.con_WebSrvUrl:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return b.webSrvUrl.localeCompare(a.webSrvUrl);
        };
      case clsWebSrvClassEN.con_PageName:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return b.pageName.localeCompare(a.pageName);
        };
      case clsWebSrvClassEN.con_FuncModuleAgcId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (b.funcModuleAgcId == null) return -1;
          if (a.funcModuleAgcId == null) return 1;
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsWebSrvClassEN.con_IsNeedGene:
        return (b: clsWebSrvClassEN) => {
          if (b.isNeedGene == true) return 1;
          else return -1;
        };
      case clsWebSrvClassEN.con_PrjId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsWebSrvClassEN.con_UpdDate:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsWebSrvClassEN.con_UpdUser:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsWebSrvClassEN.con_Memo:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsWebSrvClassEN.con_CodeTypeId:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsWebSrvClassEN.con_ClsName:
        return (a: clsWebSrvClassEN, b: clsWebSrvClassEN) => {
          return b.clsName.localeCompare(a.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[WebSrvClass]中不存在!(in ${webSrvClass_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function WebSrvClass_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsWebSrvClassEN.con_WebSrvClassId:
      return (obj: clsWebSrvClassEN) => {
        return obj.webSrvClassId === value;
      };
    case clsWebSrvClassEN.con_NameSpace:
      return (obj: clsWebSrvClassEN) => {
        return obj.nameSpace === value;
      };
    case clsWebSrvClassEN.con_WebSrvUrl:
      return (obj: clsWebSrvClassEN) => {
        return obj.webSrvUrl === value;
      };
    case clsWebSrvClassEN.con_PageName:
      return (obj: clsWebSrvClassEN) => {
        return obj.pageName === value;
      };
    case clsWebSrvClassEN.con_FuncModuleAgcId:
      return (obj: clsWebSrvClassEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsWebSrvClassEN.con_IsNeedGene:
      return (obj: clsWebSrvClassEN) => {
        return obj.isNeedGene === value;
      };
    case clsWebSrvClassEN.con_PrjId:
      return (obj: clsWebSrvClassEN) => {
        return obj.prjId === value;
      };
    case clsWebSrvClassEN.con_UpdDate:
      return (obj: clsWebSrvClassEN) => {
        return obj.updDate === value;
      };
    case clsWebSrvClassEN.con_UpdUser:
      return (obj: clsWebSrvClassEN) => {
        return obj.updUser === value;
      };
    case clsWebSrvClassEN.con_Memo:
      return (obj: clsWebSrvClassEN) => {
        return obj.memo === value;
      };
    case clsWebSrvClassEN.con_CodeTypeId:
      return (obj: clsWebSrvClassEN) => {
        return obj.codeTypeId === value;
      };
    case clsWebSrvClassEN.con_ClsName:
      return (obj: clsWebSrvClassEN) => {
        return obj.clsName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[WebSrvClass]中不存在!(in ${webSrvClass_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function WebSrvClass_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsWebSrvClassWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsWebSrvClassWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsWebSrvClassEN.con_WebSrvClassId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrWebSrvClass = await WebSrvClass_GetObjLstCache(strPrjIdClassfy);
  if (arrWebSrvClass == null) return [];
  let arrWebSrvClassSel = arrWebSrvClass;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrWebSrvClassSel = arrWebSrvClassSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrWebSrvClassSel = arrWebSrvClassSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrWebSrvClassSel.length == 0) return [];
  return arrWebSrvClassSel.map((x) => x.webSrvClassId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function WebSrvClass_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsWebSrvClassEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
      const objWebSrvClass = WebSrvClass_GetObjFromJsonObj(returnObj);
      return objWebSrvClass;
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsWebSrvClassEN.WhereFormat) == false) {
    strWhereCond = Format(clsWebSrvClassEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsWebSrvClassEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsWebSrvClassEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrWebSrvClassExObjLstCache: Array<clsWebSrvClassEN> = CacheHelper.Get(strKey);
    const arrWebSrvClassObjLstT = WebSrvClass_GetObjLstByJSONObjLst(arrWebSrvClassExObjLstCache);
    return arrWebSrvClassObjLstT;
  }
  try {
    const arrWebSrvClassExObjLst = await WebSrvClass_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrWebSrvClassExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrWebSrvClassExObjLst.length,
    );
    console.log(strInfo);
    return arrWebSrvClassExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsWebSrvClassEN.WhereFormat) == false) {
    strWhereCond = Format(clsWebSrvClassEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsWebSrvClassEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsWebSrvClassEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsWebSrvClassEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrWebSrvClassExObjLstCache: Array<clsWebSrvClassEN> = JSON.parse(strTempObjLst);
    const arrWebSrvClassObjLstT = WebSrvClass_GetObjLstByJSONObjLst(arrWebSrvClassExObjLstCache);
    return arrWebSrvClassObjLstT;
  }
  try {
    const arrWebSrvClassExObjLst = await WebSrvClass_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrWebSrvClassExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrWebSrvClassExObjLst.length,
    );
    console.log(strInfo);
    return arrWebSrvClassExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrWebSrvClassObjLstCache: Array<clsWebSrvClassEN> = JSON.parse(strTempObjLst);
    return arrWebSrvClassObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function WebSrvClass_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsWebSrvClassEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
          webSrvClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvClass_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsWebSrvClassEN.WhereFormat) == false) {
    strWhereCond = Format(clsWebSrvClassEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsWebSrvClassEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsWebSrvClassEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsWebSrvClassEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrWebSrvClassExObjLstCache: Array<clsWebSrvClassEN> = JSON.parse(strTempObjLst);
    const arrWebSrvClassObjLstT = WebSrvClass_GetObjLstByJSONObjLst(arrWebSrvClassExObjLstCache);
    return arrWebSrvClassObjLstT;
  }
  try {
    const arrWebSrvClassExObjLst = await WebSrvClass_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrWebSrvClassExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrWebSrvClassExObjLst.length,
    );
    console.log(strInfo);
    return arrWebSrvClassExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrWebSrvClassObjLstCache: Array<clsWebSrvClassEN> = JSON.parse(strTempObjLst);
    return arrWebSrvClassObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function WebSrvClass_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsWebSrvClassEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsWebSrvClassWApi.WebSrvClass_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsWebSrvClassWApi.WebSrvClass_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrWebSrvClassObjLstCache;
  switch (clsWebSrvClassEN.CacheModeId) {
    case '04': //sessionStorage
      arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrWebSrvClassObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function WebSrvClass_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrWebSrvClassObjLstCache;
  switch (clsWebSrvClassEN.CacheModeId) {
    case '04': //sessionStorage
      arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrWebSrvClassObjLstCache = null;
      break;
    default:
      arrWebSrvClassObjLstCache = null;
      break;
  }
  return arrWebSrvClassObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrWebSrvClassIdCond:条件对象
 * @returns 对象列表子集
 */
export async function WebSrvClass_GetSubObjLstCache(
  objWebSrvClassCond: clsWebSrvClassEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
  let arrWebSrvClassSel = arrWebSrvClassObjLstCache;
  if (objWebSrvClassCond.sfFldComparisonOp == null || objWebSrvClassCond.sfFldComparisonOp == '')
    return arrWebSrvClassSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objWebSrvClassCond.sfFldComparisonOp,
  );
  //console.log("clsWebSrvClassWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objWebSrvClassCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrWebSrvClassSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objWebSrvClassCond),
      webSrvClass_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsWebSrvClassEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrWebSrvClassId:关键字列表
 * @returns 对象列表
 **/
export async function WebSrvClass_GetObjLstByWebSrvClassIdLstAsync(
  arrWebSrvClassId: Array<string>,
): Promise<Array<clsWebSrvClassEN>> {
  const strThisFuncName = 'GetObjLstByWebSrvClassIdLstAsync';
  const strAction = 'GetObjLstByWebSrvClassIdLst';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWebSrvClassId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          webSrvClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvClass_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param arrstrWebSrvClassIdLst:关键字列表
 * @returns 对象列表
 */
export async function WebSrvClass_GetObjLstByWebSrvClassIdLstCache(
  arrWebSrvClassIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByWebSrvClassIdLstCache';
  try {
    const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
    const arrWebSrvClassSel = arrWebSrvClassObjLstCache.filter(
      (x) => arrWebSrvClassIdLst.indexOf(x.webSrvClassId) > -1,
    );
    return arrWebSrvClassSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrWebSrvClassIdLst.join(','),
      webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsWebSrvClassEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
          webSrvClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvClass_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsWebSrvClassEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
          webSrvClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvClass_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsWebSrvClassEN>();
  const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
  if (arrWebSrvClassObjLstCache.length == 0) return arrWebSrvClassObjLstCache;
  let arrWebSrvClassSel = arrWebSrvClassObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objWebSrvClassCond = new clsWebSrvClassEN();
  ObjectAssign(objWebSrvClassCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsWebSrvClassWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrWebSrvClassSel.length == 0) return arrWebSrvClassSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrWebSrvClassSel = arrWebSrvClassSel.sort(WebSrvClass_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrWebSrvClassSel = arrWebSrvClassSel.sort(objPagerPara.sortFun);
    }
    arrWebSrvClassSel = arrWebSrvClassSel.slice(intStart, intEnd);
    return arrWebSrvClassSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      webSrvClass_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsWebSrvClassEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function WebSrvClass_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsWebSrvClassEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsWebSrvClassEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
          webSrvClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvClass_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param strWebSrvClassId:关键字
 * @returns 获取删除的结果
 **/
export async function WebSrvClass_DelRecordAsync(strWebSrvClassId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strWebSrvClassId);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param arrWebSrvClassId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function WebSrvClass_DelWebSrvClasssAsync(
  arrWebSrvClassId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelWebSrvClasssAsync';
  const strAction = 'DelWebSrvClasss';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWebSrvClassId, config);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_DelWebSrvClasssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelWebSrvClasssByCondAsync';
  const strAction = 'DelWebSrvClasssByCond';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param objWebSrvClassEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function WebSrvClass_AddNewRecordAsync(
  objWebSrvClassEN: clsWebSrvClassEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objWebSrvClassEN);
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvClassEN, config);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param objWebSrvClassEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function WebSrvClass_AddNewRecordWithMaxIdAsync(
  objWebSrvClassEN: clsWebSrvClassEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvClassEN, config);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param objWebSrvClassEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function WebSrvClass_AddNewRecordWithReturnKeyAsync(
  objWebSrvClassEN: clsWebSrvClassEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvClassEN, config);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param objWebSrvClassEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function WebSrvClass_UpdateRecordAsync(
  objWebSrvClassEN: clsWebSrvClassEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objWebSrvClassEN.sfUpdFldSetStr === undefined ||
    objWebSrvClassEN.sfUpdFldSetStr === null ||
    objWebSrvClassEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objWebSrvClassEN.webSrvClassId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvClassEN, config);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param objWebSrvClassEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function WebSrvClass_UpdateWithConditionAsync(
  objWebSrvClassEN: clsWebSrvClassEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objWebSrvClassEN.sfUpdFldSetStr === undefined ||
    objWebSrvClassEN.sfUpdFldSetStr === null ||
    objWebSrvClassEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objWebSrvClassEN.webSrvClassId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);
  objWebSrvClassEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvClassEN, config);
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param objstrWebSrvClassIdCond:条件对象
 * @returns 对象列表子集
 */
export async function WebSrvClass_IsExistRecordCache(
  objWebSrvClassCond: clsWebSrvClassEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
  if (arrWebSrvClassObjLstCache == null) return false;
  let arrWebSrvClassSel = arrWebSrvClassObjLstCache;
  if (objWebSrvClassCond.sfFldComparisonOp == null || objWebSrvClassCond.sfFldComparisonOp == '')
    return arrWebSrvClassSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objWebSrvClassCond.sfFldComparisonOp,
  );
  //console.log("clsWebSrvClassWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objWebSrvClassCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrWebSrvClassSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objWebSrvClassCond),
      webSrvClass_ConstructorName,
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
export async function WebSrvClass_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param strWebSrvClassId:所给的关键字
 * @returns 对象
 */
export async function WebSrvClass_IsExistCache(strWebSrvClassId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
  if (arrWebSrvClassObjLstCache == null) return false;
  try {
    const arrWebSrvClassSel = arrWebSrvClassObjLstCache.filter(
      (x) => x.webSrvClassId == strWebSrvClassId,
    );
    if (arrWebSrvClassSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strWebSrvClassId,
      webSrvClass_ConstructorName,
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
 * @param strWebSrvClassId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function WebSrvClass_IsExistAsync(strWebSrvClassId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvClassId,
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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
 * @param objWebSrvClassCond:条件对象
 * @returns 对象列表记录数
 */
export async function WebSrvClass_GetRecCountByCondCache(
  objWebSrvClassCond: clsWebSrvClassEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrWebSrvClassObjLstCache = await WebSrvClass_GetObjLstCache(strPrjId);
  if (arrWebSrvClassObjLstCache == null) return 0;
  let arrWebSrvClassSel = arrWebSrvClassObjLstCache;
  if (objWebSrvClassCond.sfFldComparisonOp == null || objWebSrvClassCond.sfFldComparisonOp == '')
    return arrWebSrvClassSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objWebSrvClassCond.sfFldComparisonOp,
  );
  //console.log("clsWebSrvClassWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objWebSrvClassCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrWebSrvClassSel = arrWebSrvClassSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrWebSrvClassSel = arrWebSrvClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrWebSrvClassSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objWebSrvClassCond),
      webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export async function WebSrvClass_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(webSrvClass_Controller, strAction);

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
        webSrvClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvClass_ConstructorName,
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
export function WebSrvClass_GetWebApiUrl(strController: string, strAction: string): string {
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
export function WebSrvClass_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsWebSrvClassWApi.clsWebSrvClassWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsWebSrvClassWApi.clsWebSrvClassWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strPrjId);
  switch (clsWebSrvClassEN.CacheModeId) {
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
export function WebSrvClass_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsWebSrvClassWApi.WebSrvClass_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsWebSrvClassWApi.WebSrvClass_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsWebSrvClassEN._CurrTabName, strPrjId);
    switch (clsWebSrvClassEN.CacheModeId) {
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
export async function WebSrvClass_BindDdl_WebSrvClassIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsWebSrvClassWApi.BindDdl_WebSrvClassIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsWebSrvClassWApi.BindDdl_WebSrvClassIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_WebSrvClassIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_WebSrvClassIdInDivCache");
  const arrObjLstSel = await WebSrvClass_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsWebSrvClassEN.con_WebSrvClassId,
    clsWebSrvClassEN.con_ClsName,
    'WebSrv类',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function WebSrvClass_CheckPropertyNew(pobjWebSrvClassEN: clsWebSrvClassEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjWebSrvClassEN.webSrvUrl) === true) {
    throw new Error(
      '(errid:Watl000411)字段[WebSrv地址]不能为空(In WebSrv类)!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvClassEN.pageName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[页面名称]不能为空(In WebSrv类)!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.prjId) === true ||
    pobjWebSrvClassEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In WebSrv类)!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.codeTypeId) === true ||
    pobjWebSrvClassEN.codeTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[代码类型Id]不能为空(In WebSrv类)!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvClassEN.clsName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[类名]不能为空(In WebSrv类)!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvClassId) == false &&
    GetStrLen(pobjWebSrvClassEN.webSrvClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类Id(webSrvClassId)]的长度不能超过8(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.webSrvClassId)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.nameSpace) == false &&
    GetStrLen(pobjWebSrvClassEN.nameSpace) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[域名(nameSpace)]的长度不能超过50(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.nameSpace)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvUrl) == false &&
    GetStrLen(pobjWebSrvClassEN.webSrvUrl) > 300
  ) {
    throw new Error(
      '(errid:Watl000413)字段[WebSrv地址(webSrvUrl)]的长度不能超过300(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.webSrvUrl)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.pageName) == false &&
    GetStrLen(pobjWebSrvClassEN.pageName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[页面名称(pageName)]的长度不能超过100(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.pageName)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.funcModuleAgcId) == false &&
    GetStrLen(pobjWebSrvClassEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.funcModuleAgcId)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvClassEN.prjId) == false && GetStrLen(pobjWebSrvClassEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.prjId)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updDate) == false &&
    GetStrLen(pobjWebSrvClassEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.updDate)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updUser) == false &&
    GetStrLen(pobjWebSrvClassEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.updUser)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvClassEN.memo) == false && GetStrLen(pobjWebSrvClassEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.memo)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.codeTypeId) == false &&
    GetStrLen(pobjWebSrvClassEN.codeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.codeTypeId)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.clsName) == false &&
    GetStrLen(pobjWebSrvClassEN.clsName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类名(clsName)]的长度不能超过100(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.clsName)(clsWebSrvClassBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvClassId) == false &&
    undefined !== pobjWebSrvClassEN.webSrvClassId &&
    tzDataType.isString(pobjWebSrvClassEN.webSrvClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类Id(webSrvClassId)]的值:[$(pobjWebSrvClassEN.webSrvClassId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.nameSpace) == false &&
    undefined !== pobjWebSrvClassEN.nameSpace &&
    tzDataType.isString(pobjWebSrvClassEN.nameSpace) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[域名(nameSpace)]的值:[$(pobjWebSrvClassEN.nameSpace)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvUrl) == false &&
    undefined !== pobjWebSrvClassEN.webSrvUrl &&
    tzDataType.isString(pobjWebSrvClassEN.webSrvUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[WebSrv地址(webSrvUrl)]的值:[$(pobjWebSrvClassEN.webSrvUrl)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.pageName) == false &&
    undefined !== pobjWebSrvClassEN.pageName &&
    tzDataType.isString(pobjWebSrvClassEN.pageName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页面名称(pageName)]的值:[$(pobjWebSrvClassEN.pageName)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.funcModuleAgcId) == false &&
    undefined !== pobjWebSrvClassEN.funcModuleAgcId &&
    tzDataType.isString(pobjWebSrvClassEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjWebSrvClassEN.funcModuleAgcId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvClassEN.isNeedGene &&
    undefined !== pobjWebSrvClassEN.isNeedGene &&
    tzDataType.isBoolean(pobjWebSrvClassEN.isNeedGene) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否需要生成(isNeedGene)]的值:[$(pobjWebSrvClassEN.isNeedGene)], 非法,应该为布尔型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.prjId) == false &&
    undefined !== pobjWebSrvClassEN.prjId &&
    tzDataType.isString(pobjWebSrvClassEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjWebSrvClassEN.prjId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updDate) == false &&
    undefined !== pobjWebSrvClassEN.updDate &&
    tzDataType.isString(pobjWebSrvClassEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjWebSrvClassEN.updDate)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updUser) == false &&
    undefined !== pobjWebSrvClassEN.updUser &&
    tzDataType.isString(pobjWebSrvClassEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjWebSrvClassEN.updUser)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.memo) == false &&
    undefined !== pobjWebSrvClassEN.memo &&
    tzDataType.isString(pobjWebSrvClassEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjWebSrvClassEN.memo)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.codeTypeId) == false &&
    undefined !== pobjWebSrvClassEN.codeTypeId &&
    tzDataType.isString(pobjWebSrvClassEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[$(pobjWebSrvClassEN.codeTypeId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.clsName) == false &&
    undefined !== pobjWebSrvClassEN.clsName &&
    tzDataType.isString(pobjWebSrvClassEN.clsName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类名(clsName)]的值:[$(pobjWebSrvClassEN.clsName)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function WebSrvClass_CheckProperty4Update(pobjWebSrvClassEN: clsWebSrvClassEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvClassId) == false &&
    GetStrLen(pobjWebSrvClassEN.webSrvClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类Id(webSrvClassId)]的长度不能超过8(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.webSrvClassId)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.nameSpace) == false &&
    GetStrLen(pobjWebSrvClassEN.nameSpace) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[域名(nameSpace)]的长度不能超过50(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.nameSpace)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvUrl) == false &&
    GetStrLen(pobjWebSrvClassEN.webSrvUrl) > 300
  ) {
    throw new Error(
      '(errid:Watl000416)字段[WebSrv地址(webSrvUrl)]的长度不能超过300(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.webSrvUrl)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.pageName) == false &&
    GetStrLen(pobjWebSrvClassEN.pageName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[页面名称(pageName)]的长度不能超过100(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.pageName)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.funcModuleAgcId) == false &&
    GetStrLen(pobjWebSrvClassEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.funcModuleAgcId)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvClassEN.prjId) == false && GetStrLen(pobjWebSrvClassEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.prjId)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updDate) == false &&
    GetStrLen(pobjWebSrvClassEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.updDate)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updUser) == false &&
    GetStrLen(pobjWebSrvClassEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.updUser)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvClassEN.memo) == false && GetStrLen(pobjWebSrvClassEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.memo)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.codeTypeId) == false &&
    GetStrLen(pobjWebSrvClassEN.codeTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.codeTypeId)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.clsName) == false &&
    GetStrLen(pobjWebSrvClassEN.clsName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类名(clsName)]的长度不能超过100(In WebSrv类(WebSrvClass))!值:$(pobjWebSrvClassEN.clsName)(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvClassId) == false &&
    undefined !== pobjWebSrvClassEN.webSrvClassId &&
    tzDataType.isString(pobjWebSrvClassEN.webSrvClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类Id(webSrvClassId)]的值:[$(pobjWebSrvClassEN.webSrvClassId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.nameSpace) == false &&
    undefined !== pobjWebSrvClassEN.nameSpace &&
    tzDataType.isString(pobjWebSrvClassEN.nameSpace) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[域名(nameSpace)]的值:[$(pobjWebSrvClassEN.nameSpace)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.webSrvUrl) == false &&
    undefined !== pobjWebSrvClassEN.webSrvUrl &&
    tzDataType.isString(pobjWebSrvClassEN.webSrvUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[WebSrv地址(webSrvUrl)]的值:[$(pobjWebSrvClassEN.webSrvUrl)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.pageName) == false &&
    undefined !== pobjWebSrvClassEN.pageName &&
    tzDataType.isString(pobjWebSrvClassEN.pageName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页面名称(pageName)]的值:[$(pobjWebSrvClassEN.pageName)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.funcModuleAgcId) == false &&
    undefined !== pobjWebSrvClassEN.funcModuleAgcId &&
    tzDataType.isString(pobjWebSrvClassEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjWebSrvClassEN.funcModuleAgcId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvClassEN.isNeedGene &&
    undefined !== pobjWebSrvClassEN.isNeedGene &&
    tzDataType.isBoolean(pobjWebSrvClassEN.isNeedGene) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否需要生成(isNeedGene)]的值:[$(pobjWebSrvClassEN.isNeedGene)], 非法,应该为布尔型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.prjId) == false &&
    undefined !== pobjWebSrvClassEN.prjId &&
    tzDataType.isString(pobjWebSrvClassEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjWebSrvClassEN.prjId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updDate) == false &&
    undefined !== pobjWebSrvClassEN.updDate &&
    tzDataType.isString(pobjWebSrvClassEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjWebSrvClassEN.updDate)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.updUser) == false &&
    undefined !== pobjWebSrvClassEN.updUser &&
    tzDataType.isString(pobjWebSrvClassEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjWebSrvClassEN.updUser)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.memo) == false &&
    undefined !== pobjWebSrvClassEN.memo &&
    tzDataType.isString(pobjWebSrvClassEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjWebSrvClassEN.memo)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.codeTypeId) == false &&
    undefined !== pobjWebSrvClassEN.codeTypeId &&
    tzDataType.isString(pobjWebSrvClassEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[$(pobjWebSrvClassEN.codeTypeId)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvClassEN.clsName) == false &&
    undefined !== pobjWebSrvClassEN.clsName &&
    tzDataType.isString(pobjWebSrvClassEN.clsName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类名(clsName)]的值:[$(pobjWebSrvClassEN.clsName)], 非法,应该为字符型(In WebSrv类(WebSrvClass))!(clsWebSrvClassBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function WebSrvClass_GetJSONStrByObj(pobjWebSrvClassEN: clsWebSrvClassEN): string {
  pobjWebSrvClassEN.sfUpdFldSetStr = pobjWebSrvClassEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjWebSrvClassEN);
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
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function WebSrvClass_GetObjLstByJSONStr(strJSON: string): Array<clsWebSrvClassEN> {
  let arrWebSrvClassObjLst = new Array<clsWebSrvClassEN>();
  if (strJSON === '') {
    return arrWebSrvClassObjLst;
  }
  try {
    arrWebSrvClassObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrWebSrvClassObjLst;
  }
  return arrWebSrvClassObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrWebSrvClassObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function WebSrvClass_GetObjLstByJSONObjLst(
  arrWebSrvClassObjLstS: Array<clsWebSrvClassEN>,
): Array<clsWebSrvClassEN> {
  const arrWebSrvClassObjLst = new Array<clsWebSrvClassEN>();
  for (const objInFor of arrWebSrvClassObjLstS) {
    const obj1 = WebSrvClass_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrWebSrvClassObjLst.push(obj1);
  }
  return arrWebSrvClassObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function WebSrvClass_GetObjByJSONStr(strJSON: string): clsWebSrvClassEN {
  let pobjWebSrvClassEN = new clsWebSrvClassEN();
  if (strJSON === '') {
    return pobjWebSrvClassEN;
  }
  try {
    pobjWebSrvClassEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjWebSrvClassEN;
  }
  return pobjWebSrvClassEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function WebSrvClass_GetCombineCondition(objWebSrvClassCond: clsWebSrvClassEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_WebSrvClassId,
    ) == true
  ) {
    const strComparisonOpWebSrvClassId: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_WebSrvClassId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_WebSrvClassId,
      objWebSrvClassCond.webSrvClassId,
      strComparisonOpWebSrvClassId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_NameSpace,
    ) == true
  ) {
    const strComparisonOpNameSpace: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_NameSpace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_NameSpace,
      objWebSrvClassCond.nameSpace,
      strComparisonOpNameSpace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_WebSrvUrl,
    ) == true
  ) {
    const strComparisonOpWebSrvUrl: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_WebSrvUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_WebSrvUrl,
      objWebSrvClassCond.webSrvUrl,
      strComparisonOpWebSrvUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_PageName,
    ) == true
  ) {
    const strComparisonOpPageName: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_PageName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_PageName,
      objWebSrvClassCond.pageName,
      strComparisonOpPageName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_FuncModuleAgcId,
      objWebSrvClassCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_IsNeedGene,
    ) == true
  ) {
    if (objWebSrvClassCond.isNeedGene == true) {
      strWhereCond += Format(" And {0} = '1'", clsWebSrvClassEN.con_IsNeedGene);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsWebSrvClassEN.con_IsNeedGene);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_PrjId,
      objWebSrvClassCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_UpdDate,
      objWebSrvClassCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_UpdUser,
      objWebSrvClassCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_Memo,
      objWebSrvClassCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_CodeTypeId,
      objWebSrvClassCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvClassCond.dicFldComparisonOp,
      clsWebSrvClassEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objWebSrvClassCond.dicFldComparisonOp[clsWebSrvClassEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvClassEN.con_ClsName,
      objWebSrvClassCond.clsName,
      strComparisonOpClsName,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--WebSrvClass(WebSrv类),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strClsName: 类名(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function WebSrvClass_GetUniCondStr(objWebSrvClassEN: clsWebSrvClassEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ClsName = '{0}'", objWebSrvClassEN.clsName);
  strWhereCond += Format(" and PrjId = '{0}'", objWebSrvClassEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--WebSrvClass(WebSrv类),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strClsName: 类名(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function WebSrvClass_GetUniCondStr4Update(objWebSrvClassEN: clsWebSrvClassEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and WebSrvClassId <> '{0}'", objWebSrvClassEN.webSrvClassId);
  strWhereCond += Format(" and ClsName = '{0}'", objWebSrvClassEN.clsName);
  strWhereCond += Format(" and PrjId = '{0}'", objWebSrvClassEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objWebSrvClassENS:源对象
 * @param objWebSrvClassENT:目标对象
 */
export function WebSrvClass_GetObjFromJsonObj(
  objWebSrvClassENS: clsWebSrvClassEN,
): clsWebSrvClassEN {
  const objWebSrvClassENT: clsWebSrvClassEN = new clsWebSrvClassEN();
  ObjectAssign(objWebSrvClassENT, objWebSrvClassENS);
  return objWebSrvClassENT;
}
