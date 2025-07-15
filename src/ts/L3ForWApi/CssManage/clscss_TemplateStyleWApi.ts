/**
 * 类名:clscss_TemplateStyleWApi
 * 表名:css_TemplateStyle(00050470)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:24
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * css_TemplateStyle(css_TemplateStyle)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscss_TemplateStyleEN } from '@/ts/L0Entity/CssManage/clscss_TemplateStyleEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const css_TemplateStyle_Controller = 'css_TemplateStyleApi';
export const css_TemplateStyle_ConstructorName = 'css_TemplateStyle';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function css_TemplateStyle_GetObjBymIdAsync(
  lngmId: number,
): Promise<clscss_TemplateStyleEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clscss_TemplateStyleWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
      const objcss_TemplateStyle = css_TemplateStyle_GetObjFromJsonObj(returnObj);
      return objcss_TemplateStyle;
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_TemplateStyle_SortFunDefa(
  a: clscss_TemplateStyleEN,
  b: clscss_TemplateStyleEN,
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
export function css_TemplateStyle_SortFunDefa2Fld(
  a: clscss_TemplateStyleEN,
  b: clscss_TemplateStyleEN,
): number {
  if (a.styleId == b.styleId) return a.templateId.localeCompare(b.templateId);
  else return a.styleId.localeCompare(b.styleId);
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
export function css_TemplateStyle_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_TemplateStyleEN.con_mId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          return a.mId - b.mId;
        };
      case clscss_TemplateStyleEN.con_StyleId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (a.styleId == null) return -1;
          if (b.styleId == null) return 1;
          return a.styleId.localeCompare(b.styleId);
        };
      case clscss_TemplateStyleEN.con_TemplateId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (a.templateId == null) return -1;
          if (b.templateId == null) return 1;
          return a.templateId.localeCompare(b.templateId);
        };
      case clscss_TemplateStyleEN.con_cssModuleAreaId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          return a.cssModuleAreaId.localeCompare(b.cssModuleAreaId);
        };
      case clscss_TemplateStyleEN.con_TemplateStyleName:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (a.templateStyleName == null) return -1;
          if (b.templateStyleName == null) return 1;
          return a.templateStyleName.localeCompare(b.templateStyleName);
        };
      case clscss_TemplateStyleEN.con_UpdDate:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clscss_TemplateStyleEN.con_UpdUser:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clscss_TemplateStyleEN.con_Memo:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clscss_TemplateStyleEN.con_TemplateStyleNameEn:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (a.templateStyleNameEn == null) return -1;
          if (b.templateStyleNameEn == null) return 1;
          return a.templateStyleNameEn.localeCompare(b.templateStyleNameEn);
        };
      case clscss_TemplateStyleEN.con_IsDelete:
        return (a: clscss_TemplateStyleEN) => {
          if (a.isDelete == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_TemplateStyle]中不存在!(in ${css_TemplateStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscss_TemplateStyleEN.con_mId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          return b.mId - a.mId;
        };
      case clscss_TemplateStyleEN.con_StyleId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (b.styleId == null) return -1;
          if (a.styleId == null) return 1;
          return b.styleId.localeCompare(a.styleId);
        };
      case clscss_TemplateStyleEN.con_TemplateId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (b.templateId == null) return -1;
          if (a.templateId == null) return 1;
          return b.templateId.localeCompare(a.templateId);
        };
      case clscss_TemplateStyleEN.con_cssModuleAreaId:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          return b.cssModuleAreaId.localeCompare(a.cssModuleAreaId);
        };
      case clscss_TemplateStyleEN.con_TemplateStyleName:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (b.templateStyleName == null) return -1;
          if (a.templateStyleName == null) return 1;
          return b.templateStyleName.localeCompare(a.templateStyleName);
        };
      case clscss_TemplateStyleEN.con_UpdDate:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clscss_TemplateStyleEN.con_UpdUser:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clscss_TemplateStyleEN.con_Memo:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clscss_TemplateStyleEN.con_TemplateStyleNameEn:
        return (a: clscss_TemplateStyleEN, b: clscss_TemplateStyleEN) => {
          if (b.templateStyleNameEn == null) return -1;
          if (a.templateStyleNameEn == null) return 1;
          return b.templateStyleNameEn.localeCompare(a.templateStyleNameEn);
        };
      case clscss_TemplateStyleEN.con_IsDelete:
        return (b: clscss_TemplateStyleEN) => {
          if (b.isDelete == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_TemplateStyle]中不存在!(in ${css_TemplateStyle_ConstructorName}.${strThisFuncName})`;
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
export async function css_TemplateStyle_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscss_TemplateStyleEN.con_mId:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.mId === value;
      };
    case clscss_TemplateStyleEN.con_StyleId:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.styleId === value;
      };
    case clscss_TemplateStyleEN.con_TemplateId:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.templateId === value;
      };
    case clscss_TemplateStyleEN.con_cssModuleAreaId:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.cssModuleAreaId === value;
      };
    case clscss_TemplateStyleEN.con_TemplateStyleName:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.templateStyleName === value;
      };
    case clscss_TemplateStyleEN.con_UpdDate:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.updDate === value;
      };
    case clscss_TemplateStyleEN.con_UpdUser:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.updUser === value;
      };
    case clscss_TemplateStyleEN.con_Memo:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.memo === value;
      };
    case clscss_TemplateStyleEN.con_TemplateStyleNameEn:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.templateStyleNameEn === value;
      };
    case clscss_TemplateStyleEN.con_IsDelete:
      return (obj: clscss_TemplateStyleEN) => {
        return obj.isDelete === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[css_TemplateStyle]中不存在!(in ${css_TemplateStyle_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[css_TemplateStyle__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_TemplateStyle_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export async function css_TemplateStyle_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export async function css_TemplateStyle_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscss_TemplateStyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
      const objcss_TemplateStyle = css_TemplateStyle_GetObjFromJsonObj(returnObj);
      return objcss_TemplateStyle;
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function css_TemplateStyle_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscss_TemplateStyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
          css_TemplateStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_TemplateStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function css_TemplateStyle_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clscss_TemplateStyleEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
          css_TemplateStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_TemplateStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function css_TemplateStyle_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscss_TemplateStyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
          css_TemplateStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_TemplateStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export async function css_TemplateStyle_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscss_TemplateStyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
          css_TemplateStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_TemplateStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function css_TemplateStyle_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_TemplateStyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscss_TemplateStyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
          css_TemplateStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_TemplateStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export async function css_TemplateStyle_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export async function css_TemplateStyle_Delcss_TemplateStylesAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delcss_TemplateStylesAsync';
  const strAction = 'Delcss_TemplateStyles';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export async function css_TemplateStyle_Delcss_TemplateStylesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delcss_TemplateStylesByCondAsync';
  const strAction = 'Delcss_TemplateStylesByCond';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
 * @param objcss_TemplateStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_TemplateStyle_AddNewRecordAsync(
  objcss_TemplateStyleEN: clscss_TemplateStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objcss_TemplateStyleEN);
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateStyleEN, config);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
 * @param objcss_TemplateStyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function css_TemplateStyle_AddNewRecordWithReturnKeyAsync(
  objcss_TemplateStyleEN: clscss_TemplateStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateStyleEN, config);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
 * @param objcss_TemplateStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function css_TemplateStyle_UpdateRecordAsync(
  objcss_TemplateStyleEN: clscss_TemplateStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcss_TemplateStyleEN.sfUpdFldSetStr === undefined ||
    objcss_TemplateStyleEN.sfUpdFldSetStr === null ||
    objcss_TemplateStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_TemplateStyleEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateStyleEN, config);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
 * @param objcss_TemplateStyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_TemplateStyle_UpdateWithConditionAsync(
  objcss_TemplateStyleEN: clscss_TemplateStyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcss_TemplateStyleEN.sfUpdFldSetStr === undefined ||
    objcss_TemplateStyleEN.sfUpdFldSetStr === null ||
    objcss_TemplateStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_TemplateStyleEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);
  objcss_TemplateStyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateStyleEN, config);
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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function css_TemplateStyle_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function css_TemplateStyle_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export async function css_TemplateStyle_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function css_TemplateStyle_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(css_TemplateStyle_Controller, strAction);

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
        css_TemplateStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_TemplateStyle_ConstructorName,
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
export function css_TemplateStyle_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function css_TemplateStyle_CheckPropertyNew(
  pobjcss_TemplateStyleEN: clscss_TemplateStyleEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjcss_TemplateStyleEN.cssModuleAreaId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[区域主键]不能为空(In css_TemplateStyle)!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.styleId) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.styleId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[样式ID(styleId)]的长度不能超过8(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.styleId)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateId) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.templateId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[模板ID(templateId)]的长度不能超过8(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.templateId)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.cssModuleAreaId) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.cssModuleAreaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[区域主键(cssModuleAreaId)]的长度不能超过8(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.cssModuleAreaId)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleName) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.templateStyleName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[模板样式名称(templateStyleName)]的长度不能超过50(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.templateStyleName)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updDate) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.updDate)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updUser) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.updUser)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.memo) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.memo)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleNameEn) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.templateStyleNameEn) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[模板样式英文(templateStyleNameEn)]的长度不能超过200(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.templateStyleNameEn)(clscss_TemplateStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjcss_TemplateStyleEN.mId &&
    undefined !== pobjcss_TemplateStyleEN.mId &&
    tzDataType.isNumber(pobjcss_TemplateStyleEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjcss_TemplateStyleEN.mId)], 非法,应该为数值型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.styleId) == false &&
    undefined !== pobjcss_TemplateStyleEN.styleId &&
    tzDataType.isString(pobjcss_TemplateStyleEN.styleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[样式ID(styleId)]的值:[$(pobjcss_TemplateStyleEN.styleId)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateId) == false &&
    undefined !== pobjcss_TemplateStyleEN.templateId &&
    tzDataType.isString(pobjcss_TemplateStyleEN.templateId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[模板ID(templateId)]的值:[$(pobjcss_TemplateStyleEN.templateId)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.cssModuleAreaId) == false &&
    undefined !== pobjcss_TemplateStyleEN.cssModuleAreaId &&
    tzDataType.isString(pobjcss_TemplateStyleEN.cssModuleAreaId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[区域主键(cssModuleAreaId)]的值:[$(pobjcss_TemplateStyleEN.cssModuleAreaId)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleName) == false &&
    undefined !== pobjcss_TemplateStyleEN.templateStyleName &&
    tzDataType.isString(pobjcss_TemplateStyleEN.templateStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[模板样式名称(templateStyleName)]的值:[$(pobjcss_TemplateStyleEN.templateStyleName)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updDate) == false &&
    undefined !== pobjcss_TemplateStyleEN.updDate &&
    tzDataType.isString(pobjcss_TemplateStyleEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcss_TemplateStyleEN.updDate)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updUser) == false &&
    undefined !== pobjcss_TemplateStyleEN.updUser &&
    tzDataType.isString(pobjcss_TemplateStyleEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjcss_TemplateStyleEN.updUser)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.memo) == false &&
    undefined !== pobjcss_TemplateStyleEN.memo &&
    tzDataType.isString(pobjcss_TemplateStyleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjcss_TemplateStyleEN.memo)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleNameEn) == false &&
    undefined !== pobjcss_TemplateStyleEN.templateStyleNameEn &&
    tzDataType.isString(pobjcss_TemplateStyleEN.templateStyleNameEn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[模板样式英文(templateStyleNameEn)]的值:[$(pobjcss_TemplateStyleEN.templateStyleNameEn)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcss_TemplateStyleEN.isDelete &&
    undefined !== pobjcss_TemplateStyleEN.isDelete &&
    tzDataType.isBoolean(pobjcss_TemplateStyleEN.isDelete) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[IsDelete(isDelete)]的值:[$(pobjcss_TemplateStyleEN.isDelete)], 非法,应该为布尔型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function css_TemplateStyle_CheckProperty4Update(
  pobjcss_TemplateStyleEN: clscss_TemplateStyleEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.styleId) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.styleId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[样式ID(styleId)]的长度不能超过8(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.styleId)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateId) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.templateId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[模板ID(templateId)]的长度不能超过8(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.templateId)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.cssModuleAreaId) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.cssModuleAreaId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[区域主键(cssModuleAreaId)]的长度不能超过8(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.cssModuleAreaId)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleName) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.templateStyleName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[模板样式名称(templateStyleName)]的长度不能超过50(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.templateStyleName)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updDate) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.updDate)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updUser) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.updUser)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.memo) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.memo)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleNameEn) == false &&
    GetStrLen(pobjcss_TemplateStyleEN.templateStyleNameEn) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[模板样式英文(templateStyleNameEn)]的长度不能超过200(In css_TemplateStyle(css_TemplateStyle))!值:$(pobjcss_TemplateStyleEN.templateStyleNameEn)(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjcss_TemplateStyleEN.mId &&
    undefined !== pobjcss_TemplateStyleEN.mId &&
    tzDataType.isNumber(pobjcss_TemplateStyleEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjcss_TemplateStyleEN.mId)], 非法,应该为数值型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.styleId) == false &&
    undefined !== pobjcss_TemplateStyleEN.styleId &&
    tzDataType.isString(pobjcss_TemplateStyleEN.styleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[样式ID(styleId)]的值:[$(pobjcss_TemplateStyleEN.styleId)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateId) == false &&
    undefined !== pobjcss_TemplateStyleEN.templateId &&
    tzDataType.isString(pobjcss_TemplateStyleEN.templateId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[模板ID(templateId)]的值:[$(pobjcss_TemplateStyleEN.templateId)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.cssModuleAreaId) == false &&
    undefined !== pobjcss_TemplateStyleEN.cssModuleAreaId &&
    tzDataType.isString(pobjcss_TemplateStyleEN.cssModuleAreaId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[区域主键(cssModuleAreaId)]的值:[$(pobjcss_TemplateStyleEN.cssModuleAreaId)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleName) == false &&
    undefined !== pobjcss_TemplateStyleEN.templateStyleName &&
    tzDataType.isString(pobjcss_TemplateStyleEN.templateStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[模板样式名称(templateStyleName)]的值:[$(pobjcss_TemplateStyleEN.templateStyleName)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updDate) == false &&
    undefined !== pobjcss_TemplateStyleEN.updDate &&
    tzDataType.isString(pobjcss_TemplateStyleEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcss_TemplateStyleEN.updDate)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.updUser) == false &&
    undefined !== pobjcss_TemplateStyleEN.updUser &&
    tzDataType.isString(pobjcss_TemplateStyleEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjcss_TemplateStyleEN.updUser)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.memo) == false &&
    undefined !== pobjcss_TemplateStyleEN.memo &&
    tzDataType.isString(pobjcss_TemplateStyleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjcss_TemplateStyleEN.memo)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateStyleEN.templateStyleNameEn) == false &&
    undefined !== pobjcss_TemplateStyleEN.templateStyleNameEn &&
    tzDataType.isString(pobjcss_TemplateStyleEN.templateStyleNameEn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[模板样式英文(templateStyleNameEn)]的值:[$(pobjcss_TemplateStyleEN.templateStyleNameEn)], 非法,应该为字符型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcss_TemplateStyleEN.isDelete &&
    undefined !== pobjcss_TemplateStyleEN.isDelete &&
    tzDataType.isBoolean(pobjcss_TemplateStyleEN.isDelete) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[IsDelete(isDelete)]的值:[$(pobjcss_TemplateStyleEN.isDelete)], 非法,应该为布尔型(In css_TemplateStyle(css_TemplateStyle))!(clscss_TemplateStyleBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjcss_TemplateStyleEN.mId ||
    (pobjcss_TemplateStyleEN.mId != null && pobjcss_TemplateStyleEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In css_TemplateStyle)!(clscss_TemplateStyleBL:CheckProperty4Update)',
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
export function css_TemplateStyle_GetJSONStrByObj(
  pobjcss_TemplateStyleEN: clscss_TemplateStyleEN,
): string {
  pobjcss_TemplateStyleEN.sfUpdFldSetStr = pobjcss_TemplateStyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcss_TemplateStyleEN);
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
export function css_TemplateStyle_GetObjLstByJSONStr(
  strJSON: string,
): Array<clscss_TemplateStyleEN> {
  let arrcss_TemplateStyleObjLst = new Array<clscss_TemplateStyleEN>();
  if (strJSON === '') {
    return arrcss_TemplateStyleObjLst;
  }
  try {
    arrcss_TemplateStyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcss_TemplateStyleObjLst;
  }
  return arrcss_TemplateStyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcss_TemplateStyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function css_TemplateStyle_GetObjLstByJSONObjLst(
  arrcss_TemplateStyleObjLstS: Array<clscss_TemplateStyleEN>,
): Array<clscss_TemplateStyleEN> {
  const arrcss_TemplateStyleObjLst = new Array<clscss_TemplateStyleEN>();
  for (const objInFor of arrcss_TemplateStyleObjLstS) {
    const obj1 = css_TemplateStyle_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcss_TemplateStyleObjLst.push(obj1);
  }
  return arrcss_TemplateStyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function css_TemplateStyle_GetObjByJSONStr(strJSON: string): clscss_TemplateStyleEN {
  let pobjcss_TemplateStyleEN = new clscss_TemplateStyleEN();
  if (strJSON === '') {
    return pobjcss_TemplateStyleEN;
  }
  try {
    pobjcss_TemplateStyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcss_TemplateStyleEN;
  }
  return pobjcss_TemplateStyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function css_TemplateStyle_GetCombineCondition(
  objcss_TemplateStyleCond: clscss_TemplateStyleEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscss_TemplateStyleEN.con_mId,
      objcss_TemplateStyleCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_StyleId,
    ) == true
  ) {
    const strComparisonOpStyleId: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_StyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_StyleId,
      objcss_TemplateStyleCond.styleId,
      strComparisonOpStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_TemplateId,
    ) == true
  ) {
    const strComparisonOpTemplateId: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_TemplateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_TemplateId,
      objcss_TemplateStyleCond.templateId,
      strComparisonOpTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_cssModuleAreaId,
    ) == true
  ) {
    const strComparisonOpcssModuleAreaId: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_cssModuleAreaId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_cssModuleAreaId,
      objcss_TemplateStyleCond.cssModuleAreaId,
      strComparisonOpcssModuleAreaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_TemplateStyleName,
    ) == true
  ) {
    const strComparisonOpTemplateStyleName: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_TemplateStyleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_TemplateStyleName,
      objcss_TemplateStyleCond.templateStyleName,
      strComparisonOpTemplateStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_UpdDate,
      objcss_TemplateStyleCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_UpdUser,
      objcss_TemplateStyleCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_Memo,
      objcss_TemplateStyleCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_TemplateStyleNameEn,
    ) == true
  ) {
    const strComparisonOpTemplateStyleNameEn: string =
      objcss_TemplateStyleCond.dicFldComparisonOp[clscss_TemplateStyleEN.con_TemplateStyleNameEn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateStyleEN.con_TemplateStyleNameEn,
      objcss_TemplateStyleCond.templateStyleNameEn,
      strComparisonOpTemplateStyleNameEn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateStyleCond.dicFldComparisonOp,
      clscss_TemplateStyleEN.con_IsDelete,
    ) == true
  ) {
    if (objcss_TemplateStyleCond.isDelete == true) {
      strWhereCond += Format(" And {0} = '1'", clscss_TemplateStyleEN.con_IsDelete);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscss_TemplateStyleEN.con_IsDelete);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--css_TemplateStyle(css_TemplateStyle),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTemplateStyleName: 模板样式名称(要求唯一的字段)
 * @param strTemplateId: 模板ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function css_TemplateStyle_GetUniCondStr(
  objcss_TemplateStyleEN: clscss_TemplateStyleEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and TemplateStyleName = '{0}'",
    objcss_TemplateStyleEN.templateStyleName,
  );
  strWhereCond += Format(" and TemplateId = '{0}'", objcss_TemplateStyleEN.templateId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--css_TemplateStyle(css_TemplateStyle),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTemplateStyleName: 模板样式名称(要求唯一的字段)
 * @param strTemplateId: 模板ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function css_TemplateStyle_GetUniCondStr4Update(
  objcss_TemplateStyleEN: clscss_TemplateStyleEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objcss_TemplateStyleEN.mId);
  strWhereCond += Format(
    " and TemplateStyleName = '{0}'",
    objcss_TemplateStyleEN.templateStyleName,
  );
  strWhereCond += Format(" and TemplateId = '{0}'", objcss_TemplateStyleEN.templateId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcss_TemplateStyleENS:源对象
 * @param objcss_TemplateStyleENT:目标对象
 */
export function css_TemplateStyle_GetObjFromJsonObj(
  objcss_TemplateStyleENS: clscss_TemplateStyleEN,
): clscss_TemplateStyleEN {
  const objcss_TemplateStyleENT: clscss_TemplateStyleEN = new clscss_TemplateStyleEN();
  ObjectAssign(objcss_TemplateStyleENT, objcss_TemplateStyleENS);
  return objcss_TemplateStyleENT;
}
