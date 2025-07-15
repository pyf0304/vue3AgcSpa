/**
 * 类名:clsSelfDefDataTypeWApi
 * 表名:SelfDefDataType(00050350)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:58
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
 * 自定义数据类型(SelfDefDataType)
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
import { clsSelfDefDataTypeEN } from '@/ts/L0Entity/GeneCode/clsSelfDefDataTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const selfDefDataType_Controller = 'SelfDefDataTypeApi';
export const selfDefDataType_ConstructorName = 'selfDefDataType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSdDataTypeId:关键字
 * @returns 对象
 **/
export async function SelfDefDataType_GetObjBySdDataTypeIdAsync(
  strSdDataTypeId: string,
): Promise<clsSelfDefDataTypeEN | null> {
  const strThisFuncName = 'GetObjBySdDataTypeIdAsync';

  if (IsNullOrEmpty(strSdDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strSdDataTypeId]不能为空!(In clsSelfDefDataTypeWApi.GetObjBySdDataTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSdDataTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSdDataTypeId]的长度:[{0}]不正确!(clsSelfDefDataTypeWApi.GetObjBySdDataTypeIdAsync)',
      strSdDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySdDataTypeId';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSdDataTypeId,
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
      const objSelfDefDataType = SelfDefDataType_GetObjFromJsonObj(returnObj);
      return objSelfDefDataType;
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param strSdDataTypeId:所给的关键字
 * @returns 对象
 */
export async function SelfDefDataType_GetObjBySdDataTypeIdCache(
  strSdDataTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySdDataTypeIdCache';

  if (IsNullOrEmpty(strSdDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strSdDataTypeId]不能为空!(In clsSelfDefDataTypeWApi.GetObjBySdDataTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSdDataTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSdDataTypeId]的长度:[{0}]不正确!(clsSelfDefDataTypeWApi.GetObjBySdDataTypeIdCache)',
      strSdDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
  try {
    const arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache.filter(
      (x) => x.sdDataTypeId == strSdDataTypeId,
    );
    let objSelfDefDataType: clsSelfDefDataTypeEN;
    if (arrSelfDefDataTypeSel.length > 0) {
      objSelfDefDataType = arrSelfDefDataTypeSel[0];
      return objSelfDefDataType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSelfDefDataTypeConst = await SelfDefDataType_GetObjBySdDataTypeIdAsync(
          strSdDataTypeId,
        );
        if (objSelfDefDataTypeConst != null) {
          SelfDefDataType_ReFreshThisCache();
          return objSelfDefDataTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSdDataTypeId,
      selfDefDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strSdDataTypeId:所给的关键字
 * @returns 对象
 */
export async function SelfDefDataType_GetObjBySdDataTypeIdlocalStorage(strSdDataTypeId: string) {
  const strThisFuncName = 'GetObjBySdDataTypeIdlocalStorage';

  if (IsNullOrEmpty(strSdDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strSdDataTypeId]不能为空!(In clsSelfDefDataTypeWApi.GetObjBySdDataTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSdDataTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSdDataTypeId]的长度:[{0}]不正确!(clsSelfDefDataTypeWApi.GetObjBySdDataTypeIdlocalStorage)',
      strSdDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSelfDefDataTypeEN._CurrTabName, strSdDataTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSelfDefDataTypeCache: clsSelfDefDataTypeEN = JSON.parse(strTempObj);
    return objSelfDefDataTypeCache;
  }
  try {
    const objSelfDefDataType = await SelfDefDataType_GetObjBySdDataTypeIdAsync(strSdDataTypeId);
    if (objSelfDefDataType != null) {
      localStorage.setItem(strKey, JSON.stringify(objSelfDefDataType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSelfDefDataType;
    }
    return objSelfDefDataType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSdDataTypeId,
      selfDefDataType_ConstructorName,
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
 * @param objSelfDefDataType:所给的对象
 * @returns 对象
 */
export async function SelfDefDataType_UpdateObjInLstCache(
  objSelfDefDataType: clsSelfDefDataTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
    const obj = arrSelfDefDataTypeObjLstCache.find(
      (x) =>
        x.dataTypeName == objSelfDefDataType.dataTypeName && x.prjId == objSelfDefDataType.prjId,
    );
    if (obj != null) {
      objSelfDefDataType.sdDataTypeId = obj.sdDataTypeId;
      ObjectAssign(obj, objSelfDefDataType);
    } else {
      arrSelfDefDataTypeObjLstCache.push(objSelfDefDataType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      selfDefDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSdDataTypeId:所给的关键字
 * @returns 对象
 */
export async function SelfDefDataType_GetNameBySdDataTypeIdCache(strSdDataTypeId: string) {
  if (IsNullOrEmpty(strSdDataTypeId) == true) {
    const strMsg = Format(
      '参数:[strSdDataTypeId]不能为空!(In clsSelfDefDataTypeWApi.GetNameBySdDataTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSdDataTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSdDataTypeId]的长度:[{0}]不正确!(clsSelfDefDataTypeWApi.GetNameBySdDataTypeIdCache)',
      strSdDataTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
  if (arrSelfDefDataTypeObjLstCache == null) return '';
  try {
    const arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache.filter(
      (x) => x.sdDataTypeId == strSdDataTypeId,
    );
    let objSelfDefDataType: clsSelfDefDataTypeEN;
    if (arrSelfDefDataTypeSel.length > 0) {
      objSelfDefDataType = arrSelfDefDataTypeSel[0];
      return objSelfDefDataType.dataTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strSdDataTypeId,
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
 * @returns 返回一个输出字段值
 */
export async function SelfDefDataType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSelfDefDataTypeEN.con_SdDataTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSelfDefDataTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSelfDefDataTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSdDataTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSelfDefDataType = await SelfDefDataType_GetObjBySdDataTypeIdCache(strSdDataTypeId);
  if (objSelfDefDataType == null) return '';
  if (objSelfDefDataType.GetFldValue(strOutFldName) == null) return '';
  return objSelfDefDataType.GetFldValue(strOutFldName).toString();
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
export function SelfDefDataType_SortFunDefa(
  a: clsSelfDefDataTypeEN,
  b: clsSelfDefDataTypeEN,
): number {
  return a.sdDataTypeId.localeCompare(b.sdDataTypeId);
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
export function SelfDefDataType_SortFunDefa2Fld(
  a: clsSelfDefDataTypeEN,
  b: clsSelfDefDataTypeEN,
): number {
  if (a.dataTypeName == b.dataTypeName) return a.defaVarName.localeCompare(b.defaVarName);
  else return a.dataTypeName.localeCompare(b.dataTypeName);
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
export function SelfDefDataType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSelfDefDataTypeEN.con_SdDataTypeId:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return a.sdDataTypeId.localeCompare(b.sdDataTypeId);
        };
      case clsSelfDefDataTypeEN.con_DataTypeName:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsSelfDefDataTypeEN.con_IsObject:
        return (a: clsSelfDefDataTypeEN) => {
          if (a.isObject == true) return 1;
          else return -1;
        };
      case clsSelfDefDataTypeEN.con_DefaVarName:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.defaVarName == null) return -1;
          if (b.defaVarName == null) return 1;
          return a.defaVarName.localeCompare(b.defaVarName);
        };
      case clsSelfDefDataTypeEN.con_DataCnName:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.dataCnName == null) return -1;
          if (b.dataCnName == null) return 1;
          return a.dataCnName.localeCompare(b.dataCnName);
        };
      case clsSelfDefDataTypeEN.con_DataTypeAbbr:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.dataTypeAbbr == null) return -1;
          if (b.dataTypeAbbr == null) return 1;
          return a.dataTypeAbbr.localeCompare(b.dataTypeAbbr);
        };
      case clsSelfDefDataTypeEN.con_VbNetType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.vbNetType == null) return -1;
          if (b.vbNetType == null) return 1;
          return a.vbNetType.localeCompare(b.vbNetType);
        };
      case clsSelfDefDataTypeEN.con_CsType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsSelfDefDataTypeEN.con_JavaType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.javaType == null) return -1;
          if (b.javaType == null) return 1;
          return a.javaType.localeCompare(b.javaType);
        };
      case clsSelfDefDataTypeEN.con_JavaObjType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.javaObjType == null) return -1;
          if (b.javaObjType == null) return 1;
          return a.javaObjType.localeCompare(b.javaObjType);
        };
      case clsSelfDefDataTypeEN.con_SwiftType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.swiftType == null) return -1;
          if (b.swiftType == null) return 1;
          return a.swiftType.localeCompare(b.swiftType);
        };
      case clsSelfDefDataTypeEN.con_IsNeedQuote:
        return (a: clsSelfDefDataTypeEN) => {
          if (a.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsSelfDefDataTypeEN.con_OraDbType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.oraDbType == null) return -1;
          if (b.oraDbType == null) return 1;
          return a.oraDbType.localeCompare(b.oraDbType);
        };
      case clsSelfDefDataTypeEN.con_IsReturnType:
        return (a: clsSelfDefDataTypeEN) => {
          if (a.isReturnType == true) return 1;
          else return -1;
        };
      case clsSelfDefDataTypeEN.con_SqlParaType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.sqlParaType == null) return -1;
          if (b.sqlParaType == null) return 1;
          return a.sqlParaType.localeCompare(b.sqlParaType);
        };
      case clsSelfDefDataTypeEN.con_MySqlType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.mySqlType == null) return -1;
          if (b.mySqlType == null) return 1;
          return a.mySqlType.localeCompare(b.mySqlType);
        };
      case clsSelfDefDataTypeEN.con_DefaFldLength:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return a.defaFldLength - b.defaFldLength;
        };
      case clsSelfDefDataTypeEN.con_DefaFldPrecision:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return a.defaFldPrecision - b.defaFldPrecision;
        };
      case clsSelfDefDataTypeEN.con_PrjId:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsSelfDefDataTypeEN.con_UpdDate:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSelfDefDataTypeEN.con_UpdUser:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsSelfDefDataTypeEN.con_Memo:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SelfDefDataType]中不存在!(in ${selfDefDataType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSelfDefDataTypeEN.con_SdDataTypeId:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return b.sdDataTypeId.localeCompare(a.sdDataTypeId);
        };
      case clsSelfDefDataTypeEN.con_DataTypeName:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsSelfDefDataTypeEN.con_IsObject:
        return (b: clsSelfDefDataTypeEN) => {
          if (b.isObject == true) return 1;
          else return -1;
        };
      case clsSelfDefDataTypeEN.con_DefaVarName:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.defaVarName == null) return -1;
          if (a.defaVarName == null) return 1;
          return b.defaVarName.localeCompare(a.defaVarName);
        };
      case clsSelfDefDataTypeEN.con_DataCnName:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.dataCnName == null) return -1;
          if (a.dataCnName == null) return 1;
          return b.dataCnName.localeCompare(a.dataCnName);
        };
      case clsSelfDefDataTypeEN.con_DataTypeAbbr:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.dataTypeAbbr == null) return -1;
          if (a.dataTypeAbbr == null) return 1;
          return b.dataTypeAbbr.localeCompare(a.dataTypeAbbr);
        };
      case clsSelfDefDataTypeEN.con_VbNetType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.vbNetType == null) return -1;
          if (a.vbNetType == null) return 1;
          return b.vbNetType.localeCompare(a.vbNetType);
        };
      case clsSelfDefDataTypeEN.con_CsType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsSelfDefDataTypeEN.con_JavaType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.javaType == null) return -1;
          if (a.javaType == null) return 1;
          return b.javaType.localeCompare(a.javaType);
        };
      case clsSelfDefDataTypeEN.con_JavaObjType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.javaObjType == null) return -1;
          if (a.javaObjType == null) return 1;
          return b.javaObjType.localeCompare(a.javaObjType);
        };
      case clsSelfDefDataTypeEN.con_SwiftType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.swiftType == null) return -1;
          if (a.swiftType == null) return 1;
          return b.swiftType.localeCompare(a.swiftType);
        };
      case clsSelfDefDataTypeEN.con_IsNeedQuote:
        return (b: clsSelfDefDataTypeEN) => {
          if (b.isNeedQuote == true) return 1;
          else return -1;
        };
      case clsSelfDefDataTypeEN.con_OraDbType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.oraDbType == null) return -1;
          if (a.oraDbType == null) return 1;
          return b.oraDbType.localeCompare(a.oraDbType);
        };
      case clsSelfDefDataTypeEN.con_IsReturnType:
        return (b: clsSelfDefDataTypeEN) => {
          if (b.isReturnType == true) return 1;
          else return -1;
        };
      case clsSelfDefDataTypeEN.con_SqlParaType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.sqlParaType == null) return -1;
          if (a.sqlParaType == null) return 1;
          return b.sqlParaType.localeCompare(a.sqlParaType);
        };
      case clsSelfDefDataTypeEN.con_MySqlType:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.mySqlType == null) return -1;
          if (a.mySqlType == null) return 1;
          return b.mySqlType.localeCompare(a.mySqlType);
        };
      case clsSelfDefDataTypeEN.con_DefaFldLength:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return b.defaFldLength - a.defaFldLength;
        };
      case clsSelfDefDataTypeEN.con_DefaFldPrecision:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          return b.defaFldPrecision - a.defaFldPrecision;
        };
      case clsSelfDefDataTypeEN.con_PrjId:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsSelfDefDataTypeEN.con_UpdDate:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSelfDefDataTypeEN.con_UpdUser:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsSelfDefDataTypeEN.con_Memo:
        return (a: clsSelfDefDataTypeEN, b: clsSelfDefDataTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SelfDefDataType]中不存在!(in ${selfDefDataType_ConstructorName}.${strThisFuncName})`;
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
export async function SelfDefDataType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSelfDefDataTypeEN.con_SdDataTypeId:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.sdDataTypeId === value;
      };
    case clsSelfDefDataTypeEN.con_DataTypeName:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.dataTypeName === value;
      };
    case clsSelfDefDataTypeEN.con_IsObject:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.isObject === value;
      };
    case clsSelfDefDataTypeEN.con_DefaVarName:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.defaVarName === value;
      };
    case clsSelfDefDataTypeEN.con_DataCnName:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.dataCnName === value;
      };
    case clsSelfDefDataTypeEN.con_DataTypeAbbr:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.dataTypeAbbr === value;
      };
    case clsSelfDefDataTypeEN.con_VbNetType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.vbNetType === value;
      };
    case clsSelfDefDataTypeEN.con_CsType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.csType === value;
      };
    case clsSelfDefDataTypeEN.con_JavaType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.javaType === value;
      };
    case clsSelfDefDataTypeEN.con_JavaObjType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.javaObjType === value;
      };
    case clsSelfDefDataTypeEN.con_SwiftType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.swiftType === value;
      };
    case clsSelfDefDataTypeEN.con_IsNeedQuote:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.isNeedQuote === value;
      };
    case clsSelfDefDataTypeEN.con_OraDbType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.oraDbType === value;
      };
    case clsSelfDefDataTypeEN.con_IsReturnType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.isReturnType === value;
      };
    case clsSelfDefDataTypeEN.con_SqlParaType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.sqlParaType === value;
      };
    case clsSelfDefDataTypeEN.con_MySqlType:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.mySqlType === value;
      };
    case clsSelfDefDataTypeEN.con_DefaFldLength:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.defaFldLength === value;
      };
    case clsSelfDefDataTypeEN.con_DefaFldPrecision:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.defaFldPrecision === value;
      };
    case clsSelfDefDataTypeEN.con_PrjId:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.prjId === value;
      };
    case clsSelfDefDataTypeEN.con_UpdDate:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.updDate === value;
      };
    case clsSelfDefDataTypeEN.con_UpdUser:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.updUser === value;
      };
    case clsSelfDefDataTypeEN.con_Memo:
      return (obj: clsSelfDefDataTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SelfDefDataType]中不存在!(in ${selfDefDataType_ConstructorName}.${strThisFuncName})`;
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
export async function SelfDefDataType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSelfDefDataTypeEN.con_SdDataTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSelfDefDataType = await SelfDefDataType_GetObjLstCache();
  if (arrSelfDefDataType == null) return [];
  let arrSelfDefDataTypeSel = arrSelfDefDataType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSelfDefDataTypeSel.length == 0) return [];
  return arrSelfDefDataTypeSel.map((x) => x.sdDataTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SelfDefDataType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSelfDefDataTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
      const objSelfDefDataType = SelfDefDataType_GetObjFromJsonObj(returnObj);
      return objSelfDefDataType;
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSelfDefDataTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSelfDefDataTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSelfDefDataTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSelfDefDataTypeExObjLstCache: Array<clsSelfDefDataTypeEN> = CacheHelper.Get(strKey);
    const arrSelfDefDataTypeObjLstT = SelfDefDataType_GetObjLstByJSONObjLst(
      arrSelfDefDataTypeExObjLstCache,
    );
    return arrSelfDefDataTypeObjLstT;
  }
  try {
    const arrSelfDefDataTypeExObjLst = await SelfDefDataType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSelfDefDataTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSelfDefDataTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSelfDefDataTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSelfDefDataTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSelfDefDataTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSelfDefDataTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSelfDefDataTypeExObjLstCache: Array<clsSelfDefDataTypeEN> = JSON.parse(strTempObjLst);
    const arrSelfDefDataTypeObjLstT = SelfDefDataType_GetObjLstByJSONObjLst(
      arrSelfDefDataTypeExObjLstCache,
    );
    return arrSelfDefDataTypeObjLstT;
  }
  try {
    const arrSelfDefDataTypeExObjLst = await SelfDefDataType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSelfDefDataTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSelfDefDataTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSelfDefDataTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSelfDefDataTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSelfDefDataTypeObjLstCache: Array<clsSelfDefDataTypeEN> = JSON.parse(strTempObjLst);
    return arrSelfDefDataTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SelfDefDataType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSelfDefDataTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
          selfDefDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SelfDefDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSelfDefDataTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSelfDefDataTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSelfDefDataTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSelfDefDataTypeExObjLstCache: Array<clsSelfDefDataTypeEN> = JSON.parse(strTempObjLst);
    const arrSelfDefDataTypeObjLstT = SelfDefDataType_GetObjLstByJSONObjLst(
      arrSelfDefDataTypeExObjLstCache,
    );
    return arrSelfDefDataTypeObjLstT;
  }
  try {
    const arrSelfDefDataTypeExObjLst = await SelfDefDataType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSelfDefDataTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSelfDefDataTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSelfDefDataTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSelfDefDataTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSelfDefDataTypeObjLstCache: Array<clsSelfDefDataTypeEN> = JSON.parse(strTempObjLst);
    return arrSelfDefDataTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SelfDefDataType_GetObjLstCache(): Promise<Array<clsSelfDefDataTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSelfDefDataTypeObjLstCache;
  switch (clsSelfDefDataTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstClientCache();
      break;
    default:
      arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstClientCache();
      break;
  }
  return arrSelfDefDataTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SelfDefDataType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSelfDefDataTypeObjLstCache;
  switch (clsSelfDefDataTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSelfDefDataTypeObjLstCache = null;
      break;
    default:
      arrSelfDefDataTypeObjLstCache = null;
      break;
  }
  return arrSelfDefDataTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSdDataTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SelfDefDataType_GetSubObjLstCache(
  objSelfDefDataTypeCond: clsSelfDefDataTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
  let arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache;
  if (
    objSelfDefDataTypeCond.sfFldComparisonOp == null ||
    objSelfDefDataTypeCond.sfFldComparisonOp == ''
  )
    return arrSelfDefDataTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSelfDefDataTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSelfDefDataTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSelfDefDataTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSelfDefDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSelfDefDataTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSelfDefDataTypeCond),
      selfDefDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSelfDefDataTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSdDataTypeId:关键字列表
 * @returns 对象列表
 **/
export async function SelfDefDataType_GetObjLstBySdDataTypeIdLstAsync(
  arrSdDataTypeId: Array<string>,
): Promise<Array<clsSelfDefDataTypeEN>> {
  const strThisFuncName = 'GetObjLstBySdDataTypeIdLstAsync';
  const strAction = 'GetObjLstBySdDataTypeIdLst';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSdDataTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          selfDefDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SelfDefDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param arrstrSdDataTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function SelfDefDataType_GetObjLstBySdDataTypeIdLstCache(
  arrSdDataTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstBySdDataTypeIdLstCache';
  try {
    const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
    const arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache.filter(
      (x) => arrSdDataTypeIdLst.indexOf(x.sdDataTypeId) > -1,
    );
    return arrSelfDefDataTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSdDataTypeIdLst.join(','),
      selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSelfDefDataTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
          selfDefDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SelfDefDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSelfDefDataTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
          selfDefDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SelfDefDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSelfDefDataTypeEN>();
  const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
  if (arrSelfDefDataTypeObjLstCache.length == 0) return arrSelfDefDataTypeObjLstCache;
  let arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSelfDefDataTypeCond = new clsSelfDefDataTypeEN();
  ObjectAssign(objSelfDefDataTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSelfDefDataTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSelfDefDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSelfDefDataTypeSel.length == 0) return arrSelfDefDataTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.sort(
        SelfDefDataType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.sort(objPagerPara.sortFun);
    }
    arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.slice(intStart, intEnd);
    return arrSelfDefDataTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      selfDefDataType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSelfDefDataTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SelfDefDataType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSelfDefDataTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSelfDefDataTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
          selfDefDataType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SelfDefDataType_GetObjLstByJSONObjLst(returnObjLst);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param strSdDataTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function SelfDefDataType_DelRecordAsync(strSdDataTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSdDataTypeId);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param arrSdDataTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SelfDefDataType_DelSelfDefDataTypesAsync(
  arrSdDataTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSelfDefDataTypesAsync';
  const strAction = 'DelSelfDefDataTypes';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSdDataTypeId, config);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_DelSelfDefDataTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSelfDefDataTypesByCondAsync';
  const strAction = 'DelSelfDefDataTypesByCond';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param objSelfDefDataTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SelfDefDataType_AddNewRecordAsync(
  objSelfDefDataTypeEN: clsSelfDefDataTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSelfDefDataTypeEN);
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSelfDefDataTypeEN, config);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param objSelfDefDataTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SelfDefDataType_AddNewRecordWithMaxIdAsync(
  objSelfDefDataTypeEN: clsSelfDefDataTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSelfDefDataTypeEN, config);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param objSelfDefDataTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SelfDefDataType_AddNewRecordWithReturnKeyAsync(
  objSelfDefDataTypeEN: clsSelfDefDataTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSelfDefDataTypeEN, config);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param objSelfDefDataTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SelfDefDataType_UpdateRecordAsync(
  objSelfDefDataTypeEN: clsSelfDefDataTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSelfDefDataTypeEN.sfUpdFldSetStr === undefined ||
    objSelfDefDataTypeEN.sfUpdFldSetStr === null ||
    objSelfDefDataTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSelfDefDataTypeEN.sdDataTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSelfDefDataTypeEN, config);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param objSelfDefDataTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SelfDefDataType_UpdateWithConditionAsync(
  objSelfDefDataTypeEN: clsSelfDefDataTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSelfDefDataTypeEN.sfUpdFldSetStr === undefined ||
    objSelfDefDataTypeEN.sfUpdFldSetStr === null ||
    objSelfDefDataTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSelfDefDataTypeEN.sdDataTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);
  objSelfDefDataTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSelfDefDataTypeEN, config);
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param objstrSdDataTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SelfDefDataType_IsExistRecordCache(
  objSelfDefDataTypeCond: clsSelfDefDataTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
  if (arrSelfDefDataTypeObjLstCache == null) return false;
  let arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache;
  if (
    objSelfDefDataTypeCond.sfFldComparisonOp == null ||
    objSelfDefDataTypeCond.sfFldComparisonOp == ''
  )
    return arrSelfDefDataTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSelfDefDataTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSelfDefDataTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSelfDefDataTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSelfDefDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSelfDefDataTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSelfDefDataTypeCond),
      selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param strSdDataTypeId:所给的关键字
 * @returns 对象
 */
export async function SelfDefDataType_IsExistCache(strSdDataTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
  if (arrSelfDefDataTypeObjLstCache == null) return false;
  try {
    const arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache.filter(
      (x) => x.sdDataTypeId == strSdDataTypeId,
    );
    if (arrSelfDefDataTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSdDataTypeId,
      selfDefDataType_ConstructorName,
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
 * @param strSdDataTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SelfDefDataType_IsExistAsync(strSdDataTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSdDataTypeId,
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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
 * @param objSelfDefDataTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function SelfDefDataType_GetRecCountByCondCache(
  objSelfDefDataTypeCond: clsSelfDefDataTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSelfDefDataTypeObjLstCache = await SelfDefDataType_GetObjLstCache();
  if (arrSelfDefDataTypeObjLstCache == null) return 0;
  let arrSelfDefDataTypeSel = arrSelfDefDataTypeObjLstCache;
  if (
    objSelfDefDataTypeCond.sfFldComparisonOp == null ||
    objSelfDefDataTypeCond.sfFldComparisonOp == ''
  )
    return arrSelfDefDataTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSelfDefDataTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSelfDefDataTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSelfDefDataTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSelfDefDataTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSelfDefDataTypeSel = arrSelfDefDataTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSelfDefDataTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSelfDefDataTypeCond),
      selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export async function SelfDefDataType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(selfDefDataType_Controller, strAction);

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
        selfDefDataType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        selfDefDataType_ConstructorName,
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
export function SelfDefDataType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SelfDefDataType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSelfDefDataTypeEN._CurrTabName;
  switch (clsSelfDefDataTypeEN.CacheModeId) {
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
export function SelfDefDataType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSelfDefDataTypeEN._CurrTabName;
    switch (clsSelfDefDataTypeEN.CacheModeId) {
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

*/
export async function SelfDefDataType_BindDdl_SdDataTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_SdDataTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SdDataTypeIdInDivCache");
  const arrObjLstSel = await SelfDefDataType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSelfDefDataTypeEN.con_SdDataTypeId,
    clsSelfDefDataTypeEN.con_DataTypeName,
    '自定义数据类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SelfDefDataType_CheckPropertyNew(pobjSelfDefDataTypeEN: clsSelfDefDataTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[数据类型名称]不能为空(In 自定义数据类型)!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjSelfDefDataTypeEN.csType) === true) {
    throw new Error(
      '(errid:Watl000411)字段[CS类型]不能为空(In 自定义数据类型)!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjSelfDefDataTypeEN.isNeedQuote ||
    (pobjSelfDefDataTypeEN.isNeedQuote != null &&
      pobjSelfDefDataTypeEN.isNeedQuote.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否需要引号]不能为空(In 自定义数据类型)!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjSelfDefDataTypeEN.defaFldPrecision ||
    (pobjSelfDefDataTypeEN.defaFldPrecision != null &&
      pobjSelfDefDataTypeEN.defaFldPrecision.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[默认小数位数]不能为空(In 自定义数据类型)!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sdDataTypeId) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.sdDataTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[自定义数据类型Id(sdDataTypeId)]的长度不能超过4(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.sdDataTypeId)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeName) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.dataTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据类型名称(dataTypeName)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.dataTypeName)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.defaVarName) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.defaVarName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[默认变量名(defaVarName)]的长度不能超过50(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.defaVarName)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataCnName) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.dataCnName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据类型中文名称(dataCnName)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.dataCnName)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeAbbr) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.dataTypeAbbr) > 5
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据类型缩写(dataTypeAbbr)]的长度不能超过5(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.dataTypeAbbr)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.vbNetType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.vbNetType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[VBNET类型(vbNetType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.vbNetType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.csType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.csType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[CS类型(csType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.csType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.javaType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[JAVA类型(javaType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.javaType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaObjType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.javaObjType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[JAVA对象类型(javaObjType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.javaObjType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.swiftType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.swiftType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[SwiftType(swiftType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.swiftType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.oraDbType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.oraDbType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Ora数据类型(oraDbType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.oraDbType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sqlParaType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.sqlParaType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[SQL参数类型(sqlParaType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.sqlParaType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.mySqlType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.mySqlType) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[MySqlType(mySqlType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.mySqlType)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.prjId) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.prjId)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updDate) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.updDate)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updUser) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.updUser)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.memo) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.memo)(clsSelfDefDataTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sdDataTypeId) == false &&
    undefined !== pobjSelfDefDataTypeEN.sdDataTypeId &&
    tzDataType.isString(pobjSelfDefDataTypeEN.sdDataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[自定义数据类型Id(sdDataTypeId)]的值:[$(pobjSelfDefDataTypeEN.sdDataTypeId)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeName) == false &&
    undefined !== pobjSelfDefDataTypeEN.dataTypeName &&
    tzDataType.isString(pobjSelfDefDataTypeEN.dataTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据类型名称(dataTypeName)]的值:[$(pobjSelfDefDataTypeEN.dataTypeName)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.isObject &&
    undefined !== pobjSelfDefDataTypeEN.isObject &&
    tzDataType.isBoolean(pobjSelfDefDataTypeEN.isObject) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否对象(isObject)]的值:[$(pobjSelfDefDataTypeEN.isObject)], 非法,应该为布尔型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.defaVarName) == false &&
    undefined !== pobjSelfDefDataTypeEN.defaVarName &&
    tzDataType.isString(pobjSelfDefDataTypeEN.defaVarName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[默认变量名(defaVarName)]的值:[$(pobjSelfDefDataTypeEN.defaVarName)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataCnName) == false &&
    undefined !== pobjSelfDefDataTypeEN.dataCnName &&
    tzDataType.isString(pobjSelfDefDataTypeEN.dataCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据类型中文名称(dataCnName)]的值:[$(pobjSelfDefDataTypeEN.dataCnName)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeAbbr) == false &&
    undefined !== pobjSelfDefDataTypeEN.dataTypeAbbr &&
    tzDataType.isString(pobjSelfDefDataTypeEN.dataTypeAbbr) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据类型缩写(dataTypeAbbr)]的值:[$(pobjSelfDefDataTypeEN.dataTypeAbbr)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.vbNetType) == false &&
    undefined !== pobjSelfDefDataTypeEN.vbNetType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.vbNetType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[VBNET类型(vbNetType)]的值:[$(pobjSelfDefDataTypeEN.vbNetType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.csType) == false &&
    undefined !== pobjSelfDefDataTypeEN.csType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.csType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CS类型(csType)]的值:[$(pobjSelfDefDataTypeEN.csType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaType) == false &&
    undefined !== pobjSelfDefDataTypeEN.javaType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.javaType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[JAVA类型(javaType)]的值:[$(pobjSelfDefDataTypeEN.javaType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaObjType) == false &&
    undefined !== pobjSelfDefDataTypeEN.javaObjType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.javaObjType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[JAVA对象类型(javaObjType)]的值:[$(pobjSelfDefDataTypeEN.javaObjType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.swiftType) == false &&
    undefined !== pobjSelfDefDataTypeEN.swiftType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.swiftType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[SwiftType(swiftType)]的值:[$(pobjSelfDefDataTypeEN.swiftType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.isNeedQuote &&
    undefined !== pobjSelfDefDataTypeEN.isNeedQuote &&
    tzDataType.isBoolean(pobjSelfDefDataTypeEN.isNeedQuote) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否需要引号(isNeedQuote)]的值:[$(pobjSelfDefDataTypeEN.isNeedQuote)], 非法,应该为布尔型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.oraDbType) == false &&
    undefined !== pobjSelfDefDataTypeEN.oraDbType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.oraDbType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Ora数据类型(oraDbType)]的值:[$(pobjSelfDefDataTypeEN.oraDbType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.isReturnType &&
    undefined !== pobjSelfDefDataTypeEN.isReturnType &&
    tzDataType.isBoolean(pobjSelfDefDataTypeEN.isReturnType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否可作返回类型(isReturnType)]的值:[$(pobjSelfDefDataTypeEN.isReturnType)], 非法,应该为布尔型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sqlParaType) == false &&
    undefined !== pobjSelfDefDataTypeEN.sqlParaType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.sqlParaType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[SQL参数类型(sqlParaType)]的值:[$(pobjSelfDefDataTypeEN.sqlParaType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.mySqlType) == false &&
    undefined !== pobjSelfDefDataTypeEN.mySqlType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.mySqlType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[MySqlType(mySqlType)]的值:[$(pobjSelfDefDataTypeEN.mySqlType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.defaFldLength &&
    undefined !== pobjSelfDefDataTypeEN.defaFldLength &&
    tzDataType.isNumber(pobjSelfDefDataTypeEN.defaFldLength) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[默认长度(defaFldLength)]的值:[$(pobjSelfDefDataTypeEN.defaFldLength)], 非法,应该为数值型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.defaFldPrecision &&
    undefined !== pobjSelfDefDataTypeEN.defaFldPrecision &&
    tzDataType.isNumber(pobjSelfDefDataTypeEN.defaFldPrecision) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[默认小数位数(defaFldPrecision)]的值:[$(pobjSelfDefDataTypeEN.defaFldPrecision)], 非法,应该为数值型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.prjId) == false &&
    undefined !== pobjSelfDefDataTypeEN.prjId &&
    tzDataType.isString(pobjSelfDefDataTypeEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjSelfDefDataTypeEN.prjId)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updDate) == false &&
    undefined !== pobjSelfDefDataTypeEN.updDate &&
    tzDataType.isString(pobjSelfDefDataTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSelfDefDataTypeEN.updDate)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updUser) == false &&
    undefined !== pobjSelfDefDataTypeEN.updUser &&
    tzDataType.isString(pobjSelfDefDataTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjSelfDefDataTypeEN.updUser)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.memo) == false &&
    undefined !== pobjSelfDefDataTypeEN.memo &&
    tzDataType.isString(pobjSelfDefDataTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjSelfDefDataTypeEN.memo)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SelfDefDataType_CheckProperty4Update(pobjSelfDefDataTypeEN: clsSelfDefDataTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sdDataTypeId) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.sdDataTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[自定义数据类型Id(sdDataTypeId)]的长度不能超过4(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.sdDataTypeId)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeName) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.dataTypeName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据类型名称(dataTypeName)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.dataTypeName)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.defaVarName) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.defaVarName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[默认变量名(defaVarName)]的长度不能超过50(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.defaVarName)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataCnName) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.dataCnName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据类型中文名称(dataCnName)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.dataCnName)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeAbbr) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.dataTypeAbbr) > 5
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据类型缩写(dataTypeAbbr)]的长度不能超过5(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.dataTypeAbbr)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.vbNetType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.vbNetType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[VBNET类型(vbNetType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.vbNetType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.csType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.csType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[CS类型(csType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.csType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.javaType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[JAVA类型(javaType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.javaType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaObjType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.javaObjType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[JAVA对象类型(javaObjType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.javaObjType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.swiftType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.swiftType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[SwiftType(swiftType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.swiftType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.oraDbType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.oraDbType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Ora数据类型(oraDbType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.oraDbType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sqlParaType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.sqlParaType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[SQL参数类型(sqlParaType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.sqlParaType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.mySqlType) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.mySqlType) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[MySqlType(mySqlType)]的长度不能超过100(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.mySqlType)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.prjId) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.prjId)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updDate) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.updDate)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updUser) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.updUser)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.memo) == false &&
    GetStrLen(pobjSelfDefDataTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 自定义数据类型(SelfDefDataType))!值:$(pobjSelfDefDataTypeEN.memo)(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sdDataTypeId) == false &&
    undefined !== pobjSelfDefDataTypeEN.sdDataTypeId &&
    tzDataType.isString(pobjSelfDefDataTypeEN.sdDataTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[自定义数据类型Id(sdDataTypeId)]的值:[$(pobjSelfDefDataTypeEN.sdDataTypeId)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeName) == false &&
    undefined !== pobjSelfDefDataTypeEN.dataTypeName &&
    tzDataType.isString(pobjSelfDefDataTypeEN.dataTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据类型名称(dataTypeName)]的值:[$(pobjSelfDefDataTypeEN.dataTypeName)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.isObject &&
    undefined !== pobjSelfDefDataTypeEN.isObject &&
    tzDataType.isBoolean(pobjSelfDefDataTypeEN.isObject) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否对象(isObject)]的值:[$(pobjSelfDefDataTypeEN.isObject)], 非法,应该为布尔型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.defaVarName) == false &&
    undefined !== pobjSelfDefDataTypeEN.defaVarName &&
    tzDataType.isString(pobjSelfDefDataTypeEN.defaVarName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[默认变量名(defaVarName)]的值:[$(pobjSelfDefDataTypeEN.defaVarName)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataCnName) == false &&
    undefined !== pobjSelfDefDataTypeEN.dataCnName &&
    tzDataType.isString(pobjSelfDefDataTypeEN.dataCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据类型中文名称(dataCnName)]的值:[$(pobjSelfDefDataTypeEN.dataCnName)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.dataTypeAbbr) == false &&
    undefined !== pobjSelfDefDataTypeEN.dataTypeAbbr &&
    tzDataType.isString(pobjSelfDefDataTypeEN.dataTypeAbbr) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据类型缩写(dataTypeAbbr)]的值:[$(pobjSelfDefDataTypeEN.dataTypeAbbr)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.vbNetType) == false &&
    undefined !== pobjSelfDefDataTypeEN.vbNetType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.vbNetType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[VBNET类型(vbNetType)]的值:[$(pobjSelfDefDataTypeEN.vbNetType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.csType) == false &&
    undefined !== pobjSelfDefDataTypeEN.csType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.csType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CS类型(csType)]的值:[$(pobjSelfDefDataTypeEN.csType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaType) == false &&
    undefined !== pobjSelfDefDataTypeEN.javaType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.javaType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[JAVA类型(javaType)]的值:[$(pobjSelfDefDataTypeEN.javaType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.javaObjType) == false &&
    undefined !== pobjSelfDefDataTypeEN.javaObjType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.javaObjType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[JAVA对象类型(javaObjType)]的值:[$(pobjSelfDefDataTypeEN.javaObjType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.swiftType) == false &&
    undefined !== pobjSelfDefDataTypeEN.swiftType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.swiftType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[SwiftType(swiftType)]的值:[$(pobjSelfDefDataTypeEN.swiftType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.isNeedQuote &&
    undefined !== pobjSelfDefDataTypeEN.isNeedQuote &&
    tzDataType.isBoolean(pobjSelfDefDataTypeEN.isNeedQuote) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否需要引号(isNeedQuote)]的值:[$(pobjSelfDefDataTypeEN.isNeedQuote)], 非法,应该为布尔型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.oraDbType) == false &&
    undefined !== pobjSelfDefDataTypeEN.oraDbType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.oraDbType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Ora数据类型(oraDbType)]的值:[$(pobjSelfDefDataTypeEN.oraDbType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.isReturnType &&
    undefined !== pobjSelfDefDataTypeEN.isReturnType &&
    tzDataType.isBoolean(pobjSelfDefDataTypeEN.isReturnType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否可作返回类型(isReturnType)]的值:[$(pobjSelfDefDataTypeEN.isReturnType)], 非法,应该为布尔型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.sqlParaType) == false &&
    undefined !== pobjSelfDefDataTypeEN.sqlParaType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.sqlParaType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[SQL参数类型(sqlParaType)]的值:[$(pobjSelfDefDataTypeEN.sqlParaType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.mySqlType) == false &&
    undefined !== pobjSelfDefDataTypeEN.mySqlType &&
    tzDataType.isString(pobjSelfDefDataTypeEN.mySqlType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[MySqlType(mySqlType)]的值:[$(pobjSelfDefDataTypeEN.mySqlType)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.defaFldLength &&
    undefined !== pobjSelfDefDataTypeEN.defaFldLength &&
    tzDataType.isNumber(pobjSelfDefDataTypeEN.defaFldLength) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[默认长度(defaFldLength)]的值:[$(pobjSelfDefDataTypeEN.defaFldLength)], 非法,应该为数值型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSelfDefDataTypeEN.defaFldPrecision &&
    undefined !== pobjSelfDefDataTypeEN.defaFldPrecision &&
    tzDataType.isNumber(pobjSelfDefDataTypeEN.defaFldPrecision) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[默认小数位数(defaFldPrecision)]的值:[$(pobjSelfDefDataTypeEN.defaFldPrecision)], 非法,应该为数值型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.prjId) == false &&
    undefined !== pobjSelfDefDataTypeEN.prjId &&
    tzDataType.isString(pobjSelfDefDataTypeEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjSelfDefDataTypeEN.prjId)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updDate) == false &&
    undefined !== pobjSelfDefDataTypeEN.updDate &&
    tzDataType.isString(pobjSelfDefDataTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSelfDefDataTypeEN.updDate)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.updUser) == false &&
    undefined !== pobjSelfDefDataTypeEN.updUser &&
    tzDataType.isString(pobjSelfDefDataTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjSelfDefDataTypeEN.updUser)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSelfDefDataTypeEN.memo) == false &&
    undefined !== pobjSelfDefDataTypeEN.memo &&
    tzDataType.isString(pobjSelfDefDataTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjSelfDefDataTypeEN.memo)], 非法,应该为字符型(In 自定义数据类型(SelfDefDataType))!(clsSelfDefDataTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
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
export function SelfDefDataType_GetJSONStrByObj(
  pobjSelfDefDataTypeEN: clsSelfDefDataTypeEN,
): string {
  pobjSelfDefDataTypeEN.sfUpdFldSetStr = pobjSelfDefDataTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSelfDefDataTypeEN);
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
export function SelfDefDataType_GetObjLstByJSONStr(strJSON: string): Array<clsSelfDefDataTypeEN> {
  let arrSelfDefDataTypeObjLst = new Array<clsSelfDefDataTypeEN>();
  if (strJSON === '') {
    return arrSelfDefDataTypeObjLst;
  }
  try {
    arrSelfDefDataTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSelfDefDataTypeObjLst;
  }
  return arrSelfDefDataTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSelfDefDataTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SelfDefDataType_GetObjLstByJSONObjLst(
  arrSelfDefDataTypeObjLstS: Array<clsSelfDefDataTypeEN>,
): Array<clsSelfDefDataTypeEN> {
  const arrSelfDefDataTypeObjLst = new Array<clsSelfDefDataTypeEN>();
  for (const objInFor of arrSelfDefDataTypeObjLstS) {
    const obj1 = SelfDefDataType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSelfDefDataTypeObjLst.push(obj1);
  }
  return arrSelfDefDataTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SelfDefDataType_GetObjByJSONStr(strJSON: string): clsSelfDefDataTypeEN {
  let pobjSelfDefDataTypeEN = new clsSelfDefDataTypeEN();
  if (strJSON === '') {
    return pobjSelfDefDataTypeEN;
  }
  try {
    pobjSelfDefDataTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSelfDefDataTypeEN;
  }
  return pobjSelfDefDataTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SelfDefDataType_GetCombineCondition(
  objSelfDefDataTypeCond: clsSelfDefDataTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_SdDataTypeId,
    ) == true
  ) {
    const strComparisonOpSdDataTypeId: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_SdDataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_SdDataTypeId,
      objSelfDefDataTypeCond.sdDataTypeId,
      strComparisonOpSdDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_DataTypeName,
    ) == true
  ) {
    const strComparisonOpDataTypeName: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_DataTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_DataTypeName,
      objSelfDefDataTypeCond.dataTypeName,
      strComparisonOpDataTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_IsObject,
    ) == true
  ) {
    if (objSelfDefDataTypeCond.isObject == true) {
      strWhereCond += Format(" And {0} = '1'", clsSelfDefDataTypeEN.con_IsObject);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsSelfDefDataTypeEN.con_IsObject);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_DefaVarName,
    ) == true
  ) {
    const strComparisonOpDefaVarName: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_DefaVarName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_DefaVarName,
      objSelfDefDataTypeCond.defaVarName,
      strComparisonOpDefaVarName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_DataCnName,
    ) == true
  ) {
    const strComparisonOpDataCnName: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_DataCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_DataCnName,
      objSelfDefDataTypeCond.dataCnName,
      strComparisonOpDataCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_DataTypeAbbr,
    ) == true
  ) {
    const strComparisonOpDataTypeAbbr: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_DataTypeAbbr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_DataTypeAbbr,
      objSelfDefDataTypeCond.dataTypeAbbr,
      strComparisonOpDataTypeAbbr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_VbNetType,
    ) == true
  ) {
    const strComparisonOpVbNetType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_VbNetType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_VbNetType,
      objSelfDefDataTypeCond.vbNetType,
      strComparisonOpVbNetType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_CsType,
    ) == true
  ) {
    const strComparisonOpCsType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_CsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_CsType,
      objSelfDefDataTypeCond.csType,
      strComparisonOpCsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_JavaType,
    ) == true
  ) {
    const strComparisonOpJavaType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_JavaType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_JavaType,
      objSelfDefDataTypeCond.javaType,
      strComparisonOpJavaType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_JavaObjType,
    ) == true
  ) {
    const strComparisonOpJavaObjType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_JavaObjType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_JavaObjType,
      objSelfDefDataTypeCond.javaObjType,
      strComparisonOpJavaObjType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_SwiftType,
    ) == true
  ) {
    const strComparisonOpSwiftType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_SwiftType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_SwiftType,
      objSelfDefDataTypeCond.swiftType,
      strComparisonOpSwiftType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_IsNeedQuote,
    ) == true
  ) {
    if (objSelfDefDataTypeCond.isNeedQuote == true) {
      strWhereCond += Format(" And {0} = '1'", clsSelfDefDataTypeEN.con_IsNeedQuote);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsSelfDefDataTypeEN.con_IsNeedQuote);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_OraDbType,
    ) == true
  ) {
    const strComparisonOpOraDbType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_OraDbType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_OraDbType,
      objSelfDefDataTypeCond.oraDbType,
      strComparisonOpOraDbType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_IsReturnType,
    ) == true
  ) {
    if (objSelfDefDataTypeCond.isReturnType == true) {
      strWhereCond += Format(" And {0} = '1'", clsSelfDefDataTypeEN.con_IsReturnType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsSelfDefDataTypeEN.con_IsReturnType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_SqlParaType,
    ) == true
  ) {
    const strComparisonOpSqlParaType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_SqlParaType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_SqlParaType,
      objSelfDefDataTypeCond.sqlParaType,
      strComparisonOpSqlParaType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_MySqlType,
    ) == true
  ) {
    const strComparisonOpMySqlType: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_MySqlType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_MySqlType,
      objSelfDefDataTypeCond.mySqlType,
      strComparisonOpMySqlType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_DefaFldLength,
    ) == true
  ) {
    const strComparisonOpDefaFldLength: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_DefaFldLength];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSelfDefDataTypeEN.con_DefaFldLength,
      objSelfDefDataTypeCond.defaFldLength,
      strComparisonOpDefaFldLength,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_DefaFldPrecision,
    ) == true
  ) {
    const strComparisonOpDefaFldPrecision: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_DefaFldPrecision];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSelfDefDataTypeEN.con_DefaFldPrecision,
      objSelfDefDataTypeCond.defaFldPrecision,
      strComparisonOpDefaFldPrecision,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_PrjId,
      objSelfDefDataTypeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_UpdDate,
      objSelfDefDataTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_UpdUser,
      objSelfDefDataTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSelfDefDataTypeCond.dicFldComparisonOp,
      clsSelfDefDataTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSelfDefDataTypeCond.dicFldComparisonOp[clsSelfDefDataTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSelfDefDataTypeEN.con_Memo,
      objSelfDefDataTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SelfDefDataType(自定义数据类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDataTypeName: 数据类型名称(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SelfDefDataType_GetUniCondStr(objSelfDefDataTypeEN: clsSelfDefDataTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DataTypeName = '{0}'", objSelfDefDataTypeEN.dataTypeName);
  strWhereCond += Format(" and PrjId = '{0}'", objSelfDefDataTypeEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SelfDefDataType(自定义数据类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDataTypeName: 数据类型名称(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SelfDefDataType_GetUniCondStr4Update(
  objSelfDefDataTypeEN: clsSelfDefDataTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and SdDataTypeId <> '{0}'", objSelfDefDataTypeEN.sdDataTypeId);
  strWhereCond += Format(" and DataTypeName = '{0}'", objSelfDefDataTypeEN.dataTypeName);
  strWhereCond += Format(" and PrjId = '{0}'", objSelfDefDataTypeEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSelfDefDataTypeENS:源对象
 * @param objSelfDefDataTypeENT:目标对象
 */
export function SelfDefDataType_GetObjFromJsonObj(
  objSelfDefDataTypeENS: clsSelfDefDataTypeEN,
): clsSelfDefDataTypeEN {
  const objSelfDefDataTypeENT: clsSelfDefDataTypeEN = new clsSelfDefDataTypeEN();
  ObjectAssign(objSelfDefDataTypeENT, objSelfDefDataTypeENS);
  return objSelfDefDataTypeENT;
}
