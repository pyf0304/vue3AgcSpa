/**
 * 类名:clsCodeParaWApi
 * 表名:CodePara(00050437)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:45
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
 * 代码参数(CodePara)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
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
import { clsCodeParaEN } from '@/ts/L0Entity/GeneCode/clsCodeParaEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const codePara_Controller = 'CodeParaApi';
export const codePara_ConstructorName = 'codePara';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCodeParaId:关键字
 * @returns 对象
 **/
export async function CodePara_GetObjByCodeParaIdAsync(
  strCodeParaId: string,
): Promise<clsCodeParaEN | null> {
  const strThisFuncName = 'GetObjByCodeParaIdAsync';

  if (IsNullOrEmpty(strCodeParaId) == true) {
    const strMsg = Format(
      '参数:[strCodeParaId]不能为空!(In clsCodeParaWApi.GetObjByCodeParaIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeParaId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCodeParaId]的长度:[{0}]不正确!(clsCodeParaWApi.GetObjByCodeParaIdAsync)',
      strCodeParaId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCodeParaId';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeParaId,
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
      const objCodePara = CodePara_GetObjFromJsonObj(returnObj);
      return objCodePara;
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param strCodeParaId:所给的关键字
 * @returns 对象
 */
export async function CodePara_GetObjByCodeParaIdCache(
  strCodeParaId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCodeParaIdCache';

  if (IsNullOrEmpty(strCodeParaId) == true) {
    const strMsg = Format(
      '参数:[strCodeParaId]不能为空!(In clsCodeParaWApi.GetObjByCodeParaIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeParaId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCodeParaId]的长度:[{0}]不正确!(clsCodeParaWApi.GetObjByCodeParaIdCache)',
      strCodeParaId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
  try {
    const arrCodeParaSel = arrCodeParaObjLstCache.filter((x) => x.codeParaId == strCodeParaId);
    let objCodePara: clsCodeParaEN;
    if (arrCodeParaSel.length > 0) {
      objCodePara = arrCodeParaSel[0];
      return objCodePara;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCodeParaConst = await CodePara_GetObjByCodeParaIdAsync(strCodeParaId);
        if (objCodeParaConst != null) {
          CodePara_ReFreshThisCache(strPrjId);
          return objCodeParaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeParaId,
      codePara_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCodeParaId:所给的关键字
 * @returns 对象
 */
export async function CodePara_GetObjByCodeParaIdlocalStorage(strCodeParaId: string) {
  const strThisFuncName = 'GetObjByCodeParaIdlocalStorage';

  if (IsNullOrEmpty(strCodeParaId) == true) {
    const strMsg = Format(
      '参数:[strCodeParaId]不能为空!(In clsCodeParaWApi.GetObjByCodeParaIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeParaId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCodeParaId]的长度:[{0}]不正确!(clsCodeParaWApi.GetObjByCodeParaIdlocalStorage)',
      strCodeParaId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strCodeParaId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCodeParaCache: clsCodeParaEN = JSON.parse(strTempObj);
    return objCodeParaCache;
  }
  try {
    const objCodePara = await CodePara_GetObjByCodeParaIdAsync(strCodeParaId);
    if (objCodePara != null) {
      localStorage.setItem(strKey, JSON.stringify(objCodePara));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCodePara;
    }
    return objCodePara;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeParaId,
      codePara_ConstructorName,
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
 * @param objCodePara:所给的对象
 * @returns 对象
 */
export async function CodePara_UpdateObjInLstCache(objCodePara: clsCodeParaEN, strPrjId: string) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
    const obj = arrCodeParaObjLstCache.find((x) => x.codeParaId == objCodePara.codeParaId);
    if (obj != null) {
      objCodePara.codeParaId = obj.codeParaId;
      ObjectAssign(obj, objCodePara);
    } else {
      arrCodeParaObjLstCache.push(objCodePara);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      codePara_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCodeParaId:所给的关键字
 * @returns 对象
 */
export async function CodePara_GetNameByCodeParaIdCache(strCodeParaId: string, strPrjId: string) {
  if (IsNullOrEmpty(strCodeParaId) == true) {
    const strMsg = Format(
      '参数:[strCodeParaId]不能为空!(In clsCodeParaWApi.GetNameByCodeParaIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeParaId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCodeParaId]的长度:[{0}]不正确!(clsCodeParaWApi.GetNameByCodeParaIdCache)',
      strCodeParaId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
  if (arrCodeParaObjLstCache == null) return '';
  try {
    const arrCodeParaSel = arrCodeParaObjLstCache.filter((x) => x.codeParaId == strCodeParaId);
    let objCodePara: clsCodeParaEN;
    if (arrCodeParaSel.length > 0) {
      objCodePara = arrCodeParaSel[0];
      return objCodePara.codeParaName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCodeParaId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

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
export async function CodePara_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsCodeParaWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsCodeParaWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsCodeParaEN.con_CodeParaId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCodeParaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCodeParaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCodeParaId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCodePara = await CodePara_GetObjByCodeParaIdCache(strCodeParaId, strPrjIdClassfy);
  if (objCodePara == null) return '';
  if (objCodePara.GetFldValue(strOutFldName) == null) return '';
  return objCodePara.GetFldValue(strOutFldName).toString();
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
export function CodePara_SortFunDefa(a: clsCodeParaEN, b: clsCodeParaEN): number {
  return a.codeParaId.localeCompare(b.codeParaId);
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
export function CodePara_SortFunDefa2Fld(a: clsCodeParaEN, b: clsCodeParaEN): number {
  if (a.codeParaName == b.codeParaName) return a.dataTypeId.localeCompare(b.dataTypeId);
  else return a.codeParaName.localeCompare(b.codeParaName);
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
export function CodePara_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCodeParaEN.con_CodeParaId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return a.codeParaId.localeCompare(b.codeParaId);
        };
      case clsCodeParaEN.con_CodeParaName:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return a.codeParaName.localeCompare(b.codeParaName);
        };
      case clsCodeParaEN.con_DataTypeId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsCodeParaEN.con_TabId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsCodeParaEN.con_FldId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsCodeParaEN.con_PrjId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCodeParaEN.con_CodeParaContent:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (a.codeParaContent == null) return -1;
          if (b.codeParaContent == null) return 1;
          return a.codeParaContent.localeCompare(b.codeParaContent);
        };
      case clsCodeParaEN.con_UpdDate:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCodeParaEN.con_UpdUser:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCodeParaEN.con_Memo:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodePara]中不存在!(in ${codePara_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCodeParaEN.con_CodeParaId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return b.codeParaId.localeCompare(a.codeParaId);
        };
      case clsCodeParaEN.con_CodeParaName:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return b.codeParaName.localeCompare(a.codeParaName);
        };
      case clsCodeParaEN.con_DataTypeId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsCodeParaEN.con_TabId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsCodeParaEN.con_FldId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsCodeParaEN.con_PrjId:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCodeParaEN.con_CodeParaContent:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (b.codeParaContent == null) return -1;
          if (a.codeParaContent == null) return 1;
          return b.codeParaContent.localeCompare(a.codeParaContent);
        };
      case clsCodeParaEN.con_UpdDate:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCodeParaEN.con_UpdUser:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCodeParaEN.con_Memo:
        return (a: clsCodeParaEN, b: clsCodeParaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodePara]中不存在!(in ${codePara_ConstructorName}.${strThisFuncName})`;
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
export async function CodePara_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCodeParaEN.con_CodeParaId:
      return (obj: clsCodeParaEN) => {
        return obj.codeParaId === value;
      };
    case clsCodeParaEN.con_CodeParaName:
      return (obj: clsCodeParaEN) => {
        return obj.codeParaName === value;
      };
    case clsCodeParaEN.con_DataTypeId:
      return (obj: clsCodeParaEN) => {
        return obj.dataTypeId === value;
      };
    case clsCodeParaEN.con_TabId:
      return (obj: clsCodeParaEN) => {
        return obj.tabId === value;
      };
    case clsCodeParaEN.con_FldId:
      return (obj: clsCodeParaEN) => {
        return obj.fldId === value;
      };
    case clsCodeParaEN.con_PrjId:
      return (obj: clsCodeParaEN) => {
        return obj.prjId === value;
      };
    case clsCodeParaEN.con_CodeParaContent:
      return (obj: clsCodeParaEN) => {
        return obj.codeParaContent === value;
      };
    case clsCodeParaEN.con_UpdDate:
      return (obj: clsCodeParaEN) => {
        return obj.updDate === value;
      };
    case clsCodeParaEN.con_UpdUser:
      return (obj: clsCodeParaEN) => {
        return obj.updUser === value;
      };
    case clsCodeParaEN.con_Memo:
      return (obj: clsCodeParaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CodePara]中不存在!(in ${codePara_ConstructorName}.${strThisFuncName})`;
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
export async function CodePara_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsCodeParaWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsCodeParaWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsCodeParaEN.con_CodeParaId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCodePara = await CodePara_GetObjLstCache(strPrjIdClassfy);
  if (arrCodePara == null) return [];
  let arrCodeParaSel = arrCodePara;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCodeParaSel = arrCodeParaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCodeParaSel = arrCodeParaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCodeParaSel = arrCodeParaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrCodeParaSel.length == 0) return [];
  return arrCodeParaSel.map((x) => x.codeParaId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodePara_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCodeParaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
      const objCodePara = CodePara_GetObjFromJsonObj(returnObj);
      return objCodePara;
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCodeParaEN.WhereFormat) == false) {
    strWhereCond = Format(clsCodeParaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCodeParaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeParaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCodeParaExObjLstCache: Array<clsCodeParaEN> = CacheHelper.Get(strKey);
    const arrCodeParaObjLstT = CodePara_GetObjLstByJSONObjLst(arrCodeParaExObjLstCache);
    return arrCodeParaObjLstT;
  }
  try {
    const arrCodeParaExObjLst = await CodePara_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCodeParaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeParaExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeParaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codePara_ConstructorName,
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
export async function CodePara_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCodeParaEN.WhereFormat) == false) {
    strWhereCond = Format(clsCodeParaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCodeParaEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCodeParaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeParaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCodeParaExObjLstCache: Array<clsCodeParaEN> = JSON.parse(strTempObjLst);
    const arrCodeParaObjLstT = CodePara_GetObjLstByJSONObjLst(arrCodeParaExObjLstCache);
    return arrCodeParaObjLstT;
  }
  try {
    const arrCodeParaExObjLst = await CodePara_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCodeParaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeParaExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeParaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codePara_ConstructorName,
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
export async function CodePara_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCodeParaObjLstCache: Array<clsCodeParaEN> = JSON.parse(strTempObjLst);
    return arrCodeParaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CodePara_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCodeParaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
          codePara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodePara_GetObjLstByJSONObjLst(returnObjLst);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCodeParaEN.WhereFormat) == false) {
    strWhereCond = Format(clsCodeParaEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCodeParaEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCodeParaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeParaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCodeParaExObjLstCache: Array<clsCodeParaEN> = JSON.parse(strTempObjLst);
    const arrCodeParaObjLstT = CodePara_GetObjLstByJSONObjLst(arrCodeParaExObjLstCache);
    return arrCodeParaObjLstT;
  }
  try {
    const arrCodeParaExObjLst = await CodePara_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCodeParaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeParaExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeParaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codePara_ConstructorName,
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
export async function CodePara_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCodeParaObjLstCache: Array<clsCodeParaEN> = JSON.parse(strTempObjLst);
    return arrCodeParaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CodePara_GetObjLstCache(strPrjId: string): Promise<Array<clsCodeParaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsCodeParaWApi.CodePara_GetObjLstCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCodeParaWApi.CodePara_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrCodeParaObjLstCache;
  switch (clsCodeParaEN.CacheModeId) {
    case '04': //sessionStorage
      arrCodeParaObjLstCache = await CodePara_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrCodeParaObjLstCache = await CodePara_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrCodeParaObjLstCache = await CodePara_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrCodeParaObjLstCache = await CodePara_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrCodeParaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CodePara_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCodeParaObjLstCache;
  switch (clsCodeParaEN.CacheModeId) {
    case '04': //sessionStorage
      arrCodeParaObjLstCache = await CodePara_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrCodeParaObjLstCache = await CodePara_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrCodeParaObjLstCache = null;
      break;
    default:
      arrCodeParaObjLstCache = null;
      break;
  }
  return arrCodeParaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCodeParaIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CodePara_GetSubObjLstCache(objCodeParaCond: clsCodeParaEN, strPrjId: string) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
  let arrCodeParaSel = arrCodeParaObjLstCache;
  if (objCodeParaCond.sfFldComparisonOp == null || objCodeParaCond.sfFldComparisonOp == '')
    return arrCodeParaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeParaCond.sfFldComparisonOp,
  );
  //console.log("clsCodeParaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeParaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeParaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCodeParaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCodeParaCond),
      codePara_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCodeParaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCodeParaId:关键字列表
 * @returns 对象列表
 **/
export async function CodePara_GetObjLstByCodeParaIdLstAsync(
  arrCodeParaId: Array<string>,
): Promise<Array<clsCodeParaEN>> {
  const strThisFuncName = 'GetObjLstByCodeParaIdLstAsync';
  const strAction = 'GetObjLstByCodeParaIdLst';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCodeParaId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          codePara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodePara_GetObjLstByJSONObjLst(returnObjLst);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param arrstrCodeParaIdLst:关键字列表
 * @returns 对象列表
 */
export async function CodePara_GetObjLstByCodeParaIdLstCache(
  arrCodeParaIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByCodeParaIdLstCache';
  try {
    const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
    const arrCodeParaSel = arrCodeParaObjLstCache.filter(
      (x) => arrCodeParaIdLst.indexOf(x.codeParaId) > -1,
    );
    return arrCodeParaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCodeParaIdLst.join(','),
      codePara_ConstructorName,
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
export async function CodePara_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCodeParaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
          codePara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodePara_GetObjLstByJSONObjLst(returnObjLst);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCodeParaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
          codePara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodePara_GetObjLstByJSONObjLst(returnObjLst);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_GetObjLstByPagerCache(objPagerPara: stuPagerPara, strPrjId: string) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCodeParaEN>();
  const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
  if (arrCodeParaObjLstCache.length == 0) return arrCodeParaObjLstCache;
  let arrCodeParaSel = arrCodeParaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCodeParaCond = new clsCodeParaEN();
  ObjectAssign(objCodeParaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCodeParaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeParaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCodeParaSel.length == 0) return arrCodeParaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCodeParaSel = arrCodeParaSel.sort(CodePara_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCodeParaSel = arrCodeParaSel.sort(objPagerPara.sortFun);
    }
    arrCodeParaSel = arrCodeParaSel.slice(intStart, intEnd);
    return arrCodeParaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      codePara_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCodeParaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CodePara_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCodeParaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCodeParaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
          codePara_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodePara_GetObjLstByJSONObjLst(returnObjLst);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param strCodeParaId:关键字
 * @returns 获取删除的结果
 **/
export async function CodePara_DelRecordAsync(strCodeParaId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(codePara_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCodeParaId);

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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param arrCodeParaId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CodePara_DelCodeParasAsync(arrCodeParaId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelCodeParasAsync';
  const strAction = 'DelCodeParas';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCodeParaId, config);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_DelCodeParasByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCodeParasByCondAsync';
  const strAction = 'DelCodeParasByCond';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param objCodeParaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodePara_AddNewRecordAsync(objCodeParaEN: clsCodeParaEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCodeParaEN.codeParaId === null || objCodeParaEN.codeParaId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCodeParaEN);
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeParaEN, config);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param objCodeParaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodePara_AddNewRecordWithMaxIdAsync(
  objCodeParaEN: clsCodeParaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeParaEN, config);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param objCodeParaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CodePara_AddNewRecordWithReturnKeyAsync(
  objCodeParaEN: clsCodeParaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeParaEN, config);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param objCodeParaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CodePara_UpdateRecordAsync(objCodeParaEN: clsCodeParaEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCodeParaEN.sfUpdFldSetStr === undefined ||
    objCodeParaEN.sfUpdFldSetStr === null ||
    objCodeParaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeParaEN.codeParaId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeParaEN, config);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param objCodeParaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodePara_UpdateWithConditionAsync(
  objCodeParaEN: clsCodeParaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCodeParaEN.sfUpdFldSetStr === undefined ||
    objCodeParaEN.sfUpdFldSetStr === null ||
    objCodeParaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeParaEN.codeParaId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);
  objCodeParaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeParaEN, config);
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param objstrCodeParaIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CodePara_IsExistRecordCache(
  objCodeParaCond: clsCodeParaEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
  if (arrCodeParaObjLstCache == null) return false;
  let arrCodeParaSel = arrCodeParaObjLstCache;
  if (objCodeParaCond.sfFldComparisonOp == null || objCodeParaCond.sfFldComparisonOp == '')
    return arrCodeParaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeParaCond.sfFldComparisonOp,
  );
  //console.log("clsCodeParaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeParaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeParaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCodeParaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCodeParaCond),
      codePara_ConstructorName,
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
export async function CodePara_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param strCodeParaId:所给的关键字
 * @returns 对象
 */
export async function CodePara_IsExistCache(strCodeParaId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
  if (arrCodeParaObjLstCache == null) return false;
  try {
    const arrCodeParaSel = arrCodeParaObjLstCache.filter((x) => x.codeParaId == strCodeParaId);
    if (arrCodeParaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCodeParaId,
      codePara_ConstructorName,
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
 * @param strCodeParaId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CodePara_IsExistAsync(strCodeParaId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeParaId,
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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export async function CodePara_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
 * @param objCodeParaCond:条件对象
 * @returns 对象列表记录数
 */
export async function CodePara_GetRecCountByCondCache(
  objCodeParaCond: clsCodeParaEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCodeParaObjLstCache = await CodePara_GetObjLstCache(strPrjId);
  if (arrCodeParaObjLstCache == null) return 0;
  let arrCodeParaSel = arrCodeParaObjLstCache;
  if (objCodeParaCond.sfFldComparisonOp == null || objCodeParaCond.sfFldComparisonOp == '')
    return arrCodeParaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeParaCond.sfFldComparisonOp,
  );
  //console.log("clsCodeParaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeParaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeParaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCodeParaSel = arrCodeParaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeParaSel = arrCodeParaSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCodeParaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCodeParaCond),
      codePara_ConstructorName,
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
export async function CodePara_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(codePara_Controller, strAction);

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
        codePara_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codePara_ConstructorName,
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
export function CodePara_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CodePara_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsCodeParaWApi.clsCodeParaWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsCodeParaWApi.clsCodeParaWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strPrjId);
  switch (clsCodeParaEN.CacheModeId) {
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
export function CodePara_ReFreshThisCache(strPrjId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsCodeParaEN._CurrTabName, strPrjId);
    switch (clsCodeParaEN.CacheModeId) {
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
export async function CodePara_BindDdl_CodeParaIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsCodeParaWApi.BindDdl_CodeParaIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCodeParaWApi.BindDdl_CodeParaIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CodeParaIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CodeParaIdInDivCache");
  const arrObjLstSel = await CodePara_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCodeParaEN.con_CodeParaId,
    clsCodeParaEN.con_CodeParaName,
    '代码参数',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodePara_CheckPropertyNew(pobjCodeParaEN: clsCodeParaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCodeParaEN.codeParaName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[代码参数名]不能为空(In 代码参数)!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.dataTypeId) === true ||
    pobjCodeParaEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[数据类型Id]不能为空(In 代码参数)!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.tabId) === true || pobjCodeParaEN.tabId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[表ID]不能为空(In 代码参数)!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.fldId) === true || pobjCodeParaEN.fldId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[字段Id]不能为空(In 代码参数)!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.prjId) === true || pobjCodeParaEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 代码参数)!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaId) == false &&
    GetStrLen(pobjCodeParaEN.codeParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码参数Id(codeParaId)]的长度不能超过8(In 代码参数(CodePara))!值:$(pobjCodeParaEN.codeParaId)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaName) == false &&
    GetStrLen(pobjCodeParaEN.codeParaName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码参数名(codeParaName)]的长度不能超过50(In 代码参数(CodePara))!值:$(pobjCodeParaEN.codeParaName)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.dataTypeId) == false &&
    GetStrLen(pobjCodeParaEN.dataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 代码参数(CodePara))!值:$(pobjCodeParaEN.dataTypeId)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.tabId) == false && GetStrLen(pobjCodeParaEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 代码参数(CodePara))!值:$(pobjCodeParaEN.tabId)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.fldId) == false && GetStrLen(pobjCodeParaEN.fldId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 代码参数(CodePara))!值:$(pobjCodeParaEN.fldId)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.prjId) == false && GetStrLen(pobjCodeParaEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 代码参数(CodePara))!值:$(pobjCodeParaEN.prjId)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaContent) == false &&
    GetStrLen(pobjCodeParaEN.codeParaContent) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码参数内容(codeParaContent)]的长度不能超过100(In 代码参数(CodePara))!值:$(pobjCodeParaEN.codeParaContent)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.updDate) == false && GetStrLen(pobjCodeParaEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 代码参数(CodePara))!值:$(pobjCodeParaEN.updDate)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.updUser) == false && GetStrLen(pobjCodeParaEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 代码参数(CodePara))!值:$(pobjCodeParaEN.updUser)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.memo) == false && GetStrLen(pobjCodeParaEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 代码参数(CodePara))!值:$(pobjCodeParaEN.memo)(clsCodeParaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaId) == false &&
    undefined !== pobjCodeParaEN.codeParaId &&
    tzDataType.isString(pobjCodeParaEN.codeParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码参数Id(codeParaId)]的值:[$(pobjCodeParaEN.codeParaId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaName) == false &&
    undefined !== pobjCodeParaEN.codeParaName &&
    tzDataType.isString(pobjCodeParaEN.codeParaName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码参数名(codeParaName)]的值:[$(pobjCodeParaEN.codeParaName)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.dataTypeId) == false &&
    undefined !== pobjCodeParaEN.dataTypeId &&
    tzDataType.isString(pobjCodeParaEN.dataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[$(pobjCodeParaEN.dataTypeId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.tabId) == false &&
    undefined !== pobjCodeParaEN.tabId &&
    tzDataType.isString(pobjCodeParaEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjCodeParaEN.tabId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.fldId) == false &&
    undefined !== pobjCodeParaEN.fldId &&
    tzDataType.isString(pobjCodeParaEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段Id(fldId)]的值:[$(pobjCodeParaEN.fldId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.prjId) == false &&
    undefined !== pobjCodeParaEN.prjId &&
    tzDataType.isString(pobjCodeParaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjCodeParaEN.prjId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaContent) == false &&
    undefined !== pobjCodeParaEN.codeParaContent &&
    tzDataType.isString(pobjCodeParaEN.codeParaContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码参数内容(codeParaContent)]的值:[$(pobjCodeParaEN.codeParaContent)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.updDate) == false &&
    undefined !== pobjCodeParaEN.updDate &&
    tzDataType.isString(pobjCodeParaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCodeParaEN.updDate)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.updUser) == false &&
    undefined !== pobjCodeParaEN.updUser &&
    tzDataType.isString(pobjCodeParaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCodeParaEN.updUser)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.memo) == false &&
    undefined !== pobjCodeParaEN.memo &&
    tzDataType.isString(pobjCodeParaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCodeParaEN.memo)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodePara_CheckProperty4Update(pobjCodeParaEN: clsCodeParaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaId) == false &&
    GetStrLen(pobjCodeParaEN.codeParaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码参数Id(codeParaId)]的长度不能超过8(In 代码参数(CodePara))!值:$(pobjCodeParaEN.codeParaId)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaName) == false &&
    GetStrLen(pobjCodeParaEN.codeParaName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码参数名(codeParaName)]的长度不能超过50(In 代码参数(CodePara))!值:$(pobjCodeParaEN.codeParaName)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.dataTypeId) == false &&
    GetStrLen(pobjCodeParaEN.dataTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 代码参数(CodePara))!值:$(pobjCodeParaEN.dataTypeId)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.tabId) == false && GetStrLen(pobjCodeParaEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 代码参数(CodePara))!值:$(pobjCodeParaEN.tabId)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.fldId) == false && GetStrLen(pobjCodeParaEN.fldId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 代码参数(CodePara))!值:$(pobjCodeParaEN.fldId)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.prjId) == false && GetStrLen(pobjCodeParaEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 代码参数(CodePara))!值:$(pobjCodeParaEN.prjId)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaContent) == false &&
    GetStrLen(pobjCodeParaEN.codeParaContent) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码参数内容(codeParaContent)]的长度不能超过100(In 代码参数(CodePara))!值:$(pobjCodeParaEN.codeParaContent)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.updDate) == false && GetStrLen(pobjCodeParaEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 代码参数(CodePara))!值:$(pobjCodeParaEN.updDate)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.updUser) == false && GetStrLen(pobjCodeParaEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 代码参数(CodePara))!值:$(pobjCodeParaEN.updUser)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCodeParaEN.memo) == false && GetStrLen(pobjCodeParaEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 代码参数(CodePara))!值:$(pobjCodeParaEN.memo)(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaId) == false &&
    undefined !== pobjCodeParaEN.codeParaId &&
    tzDataType.isString(pobjCodeParaEN.codeParaId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码参数Id(codeParaId)]的值:[$(pobjCodeParaEN.codeParaId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaName) == false &&
    undefined !== pobjCodeParaEN.codeParaName &&
    tzDataType.isString(pobjCodeParaEN.codeParaName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码参数名(codeParaName)]的值:[$(pobjCodeParaEN.codeParaName)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.dataTypeId) == false &&
    undefined !== pobjCodeParaEN.dataTypeId &&
    tzDataType.isString(pobjCodeParaEN.dataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[$(pobjCodeParaEN.dataTypeId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.tabId) == false &&
    undefined !== pobjCodeParaEN.tabId &&
    tzDataType.isString(pobjCodeParaEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjCodeParaEN.tabId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.fldId) == false &&
    undefined !== pobjCodeParaEN.fldId &&
    tzDataType.isString(pobjCodeParaEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段Id(fldId)]的值:[$(pobjCodeParaEN.fldId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.prjId) == false &&
    undefined !== pobjCodeParaEN.prjId &&
    tzDataType.isString(pobjCodeParaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjCodeParaEN.prjId)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.codeParaContent) == false &&
    undefined !== pobjCodeParaEN.codeParaContent &&
    tzDataType.isString(pobjCodeParaEN.codeParaContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码参数内容(codeParaContent)]的值:[$(pobjCodeParaEN.codeParaContent)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.updDate) == false &&
    undefined !== pobjCodeParaEN.updDate &&
    tzDataType.isString(pobjCodeParaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCodeParaEN.updDate)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.updUser) == false &&
    undefined !== pobjCodeParaEN.updUser &&
    tzDataType.isString(pobjCodeParaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCodeParaEN.updUser)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeParaEN.memo) == false &&
    undefined !== pobjCodeParaEN.memo &&
    tzDataType.isString(pobjCodeParaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCodeParaEN.memo)], 非法,应该为字符型(In 代码参数(CodePara))!(clsCodeParaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjCodeParaEN.codeParaId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[代码参数Id]不能为空(In 代码参数)!(clsCodeParaBL:CheckProperty4Update)',
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
export function CodePara_GetJSONStrByObj(pobjCodeParaEN: clsCodeParaEN): string {
  pobjCodeParaEN.sfUpdFldSetStr = pobjCodeParaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCodeParaEN);
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
export function CodePara_GetObjLstByJSONStr(strJSON: string): Array<clsCodeParaEN> {
  let arrCodeParaObjLst = new Array<clsCodeParaEN>();
  if (strJSON === '') {
    return arrCodeParaObjLst;
  }
  try {
    arrCodeParaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCodeParaObjLst;
  }
  return arrCodeParaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCodeParaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CodePara_GetObjLstByJSONObjLst(
  arrCodeParaObjLstS: Array<clsCodeParaEN>,
): Array<clsCodeParaEN> {
  const arrCodeParaObjLst = new Array<clsCodeParaEN>();
  for (const objInFor of arrCodeParaObjLstS) {
    const obj1 = CodePara_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCodeParaObjLst.push(obj1);
  }
  return arrCodeParaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CodePara_GetObjByJSONStr(strJSON: string): clsCodeParaEN {
  let pobjCodeParaEN = new clsCodeParaEN();
  if (strJSON === '') {
    return pobjCodeParaEN;
  }
  try {
    pobjCodeParaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCodeParaEN;
  }
  return pobjCodeParaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CodePara_GetCombineCondition(objCodeParaCond: clsCodeParaEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_CodeParaId,
    ) == true
  ) {
    const strComparisonOpCodeParaId: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_CodeParaId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_CodeParaId,
      objCodeParaCond.codeParaId,
      strComparisonOpCodeParaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_CodeParaName,
    ) == true
  ) {
    const strComparisonOpCodeParaName: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_CodeParaName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_CodeParaName,
      objCodeParaCond.codeParaName,
      strComparisonOpCodeParaName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_DataTypeId,
      objCodeParaCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_TabId,
      objCodeParaCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_FldId,
      objCodeParaCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_PrjId,
      objCodeParaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_CodeParaContent,
    ) == true
  ) {
    const strComparisonOpCodeParaContent: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_CodeParaContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_CodeParaContent,
      objCodeParaCond.codeParaContent,
      strComparisonOpCodeParaContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_UpdDate,
      objCodeParaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_UpdUser,
      objCodeParaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeParaCond.dicFldComparisonOp,
      clsCodeParaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objCodeParaCond.dicFldComparisonOp[clsCodeParaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeParaEN.con_Memo,
      objCodeParaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCodeParaENS:源对象
 * @param objCodeParaENT:目标对象
 */
export function CodePara_GetObjFromJsonObj(objCodeParaENS: clsCodeParaEN): clsCodeParaEN {
  const objCodeParaENT: clsCodeParaEN = new clsCodeParaEN();
  ObjectAssign(objCodeParaENT, objCodeParaENS);
  return objCodeParaENT;
}
