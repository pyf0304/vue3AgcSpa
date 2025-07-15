/**
 * 类名:clscss_TemplateWApi
 * 表名:css_Template(00050469)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:22
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
 * css_Template(css_Template)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clscss_TemplateEN } from '@/ts/L0Entity/CssManage/clscss_TemplateEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const css_Template_Controller = 'css_TemplateApi';
export const css_Template_ConstructorName = 'css_Template';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTemplateId:关键字
 * @returns 对象
 **/
export async function css_Template_GetObjByTemplateIdAsync(
  strTemplateId: string,
): Promise<clscss_TemplateEN | null> {
  const strThisFuncName = 'GetObjByTemplateIdAsync';

  if (IsNullOrEmpty(strTemplateId) == true) {
    const strMsg = Format(
      '参数:[strTemplateId]不能为空!(In clscss_TemplateWApi.GetObjByTemplateIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTemplateId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTemplateId]的长度:[{0}]不正确!(clscss_TemplateWApi.GetObjByTemplateIdAsync)',
      strTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTemplateId';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTemplateId,
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
      const objcss_Template = css_Template_GetObjFromJsonObj(returnObj);
      return objcss_Template;
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByTemplateIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByTemplateIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByTemplateIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function css_Template_SortFunDefa(a: clscss_TemplateEN, b: clscss_TemplateEN): number {
  return a.templateId.localeCompare(b.templateId);
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
export function css_Template_SortFunDefa2Fld(a: clscss_TemplateEN, b: clscss_TemplateEN): number {
  if (a.templateName == b.templateName) return a.templateDesc.localeCompare(b.templateDesc);
  else return a.templateName.localeCompare(b.templateName);
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
export function css_Template_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_TemplateEN.con_TemplateId:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          return a.templateId.localeCompare(b.templateId);
        };
      case clscss_TemplateEN.con_TemplateName:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (a.templateName == null) return -1;
          if (b.templateName == null) return 1;
          return a.templateName.localeCompare(b.templateName);
        };
      case clscss_TemplateEN.con_TemplateDesc:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (a.templateDesc == null) return -1;
          if (b.templateDesc == null) return 1;
          return a.templateDesc.localeCompare(b.templateDesc);
        };
      case clscss_TemplateEN.con_OrderNum:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          return a.orderNum - b.orderNum;
        };
      case clscss_TemplateEN.con_TemplatePic:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (a.templatePic == null) return -1;
          if (b.templatePic == null) return 1;
          return a.templatePic.localeCompare(b.templatePic);
        };
      case clscss_TemplateEN.con_IsPublic:
        return (a: clscss_TemplateEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clscss_TemplateEN.con_IsDeleted:
        return (a: clscss_TemplateEN) => {
          if (a.isDeleted == true) return 1;
          else return -1;
        };
      case clscss_TemplateEN.con_DeletedDate:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (a.deletedDate == null) return -1;
          if (b.deletedDate == null) return 1;
          return a.deletedDate.localeCompare(b.deletedDate);
        };
      case clscss_TemplateEN.con_UpdDate:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clscss_TemplateEN.con_UpdUser:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clscss_TemplateEN.con_Memo:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_Template]中不存在!(in ${css_Template_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscss_TemplateEN.con_TemplateId:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          return b.templateId.localeCompare(a.templateId);
        };
      case clscss_TemplateEN.con_TemplateName:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (b.templateName == null) return -1;
          if (a.templateName == null) return 1;
          return b.templateName.localeCompare(a.templateName);
        };
      case clscss_TemplateEN.con_TemplateDesc:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (b.templateDesc == null) return -1;
          if (a.templateDesc == null) return 1;
          return b.templateDesc.localeCompare(a.templateDesc);
        };
      case clscss_TemplateEN.con_OrderNum:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          return b.orderNum - a.orderNum;
        };
      case clscss_TemplateEN.con_TemplatePic:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (b.templatePic == null) return -1;
          if (a.templatePic == null) return 1;
          return b.templatePic.localeCompare(a.templatePic);
        };
      case clscss_TemplateEN.con_IsPublic:
        return (b: clscss_TemplateEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clscss_TemplateEN.con_IsDeleted:
        return (b: clscss_TemplateEN) => {
          if (b.isDeleted == true) return 1;
          else return -1;
        };
      case clscss_TemplateEN.con_DeletedDate:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (b.deletedDate == null) return -1;
          if (a.deletedDate == null) return 1;
          return b.deletedDate.localeCompare(a.deletedDate);
        };
      case clscss_TemplateEN.con_UpdDate:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clscss_TemplateEN.con_UpdUser:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clscss_TemplateEN.con_Memo:
        return (a: clscss_TemplateEN, b: clscss_TemplateEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_Template]中不存在!(in ${css_Template_ConstructorName}.${strThisFuncName})`;
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
export async function css_Template_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscss_TemplateEN.con_TemplateId:
      return (obj: clscss_TemplateEN) => {
        return obj.templateId === value;
      };
    case clscss_TemplateEN.con_TemplateName:
      return (obj: clscss_TemplateEN) => {
        return obj.templateName === value;
      };
    case clscss_TemplateEN.con_TemplateDesc:
      return (obj: clscss_TemplateEN) => {
        return obj.templateDesc === value;
      };
    case clscss_TemplateEN.con_OrderNum:
      return (obj: clscss_TemplateEN) => {
        return obj.orderNum === value;
      };
    case clscss_TemplateEN.con_TemplatePic:
      return (obj: clscss_TemplateEN) => {
        return obj.templatePic === value;
      };
    case clscss_TemplateEN.con_IsPublic:
      return (obj: clscss_TemplateEN) => {
        return obj.isPublic === value;
      };
    case clscss_TemplateEN.con_IsDeleted:
      return (obj: clscss_TemplateEN) => {
        return obj.isDeleted === value;
      };
    case clscss_TemplateEN.con_DeletedDate:
      return (obj: clscss_TemplateEN) => {
        return obj.deletedDate === value;
      };
    case clscss_TemplateEN.con_UpdDate:
      return (obj: clscss_TemplateEN) => {
        return obj.updDate === value;
      };
    case clscss_TemplateEN.con_UpdUser:
      return (obj: clscss_TemplateEN) => {
        return obj.updUser === value;
      };
    case clscss_TemplateEN.con_Memo:
      return (obj: clscss_TemplateEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[css_Template]中不存在!(in ${css_Template_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[css_Template__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_Template_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscss_TemplateEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
      const objcss_Template = css_Template_GetObjFromJsonObj(returnObj);
      return objcss_Template;
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscss_TemplateEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
          css_Template_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Template_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param arrTemplateId:关键字列表
 * @returns 对象列表
 **/
export async function css_Template_GetObjLstByTemplateIdLstAsync(
  arrTemplateId: Array<string>,
): Promise<Array<clscss_TemplateEN>> {
  const strThisFuncName = 'GetObjLstByTemplateIdLstAsync';
  const strAction = 'GetObjLstByTemplateIdLst';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTemplateId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          css_Template_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Template_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByTemplateIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function css_Template_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscss_TemplateEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
          css_Template_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Template_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscss_TemplateEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
          css_Template_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Template_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_TemplateEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscss_TemplateEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
          css_Template_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Template_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param strTemplateId:关键字
 * @returns 获取删除的结果
 **/
export async function css_Template_DelRecordAsync(strTemplateId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(css_Template_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTemplateId);

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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param arrTemplateId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function css_Template_Delcss_TemplatesAsync(
  arrTemplateId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delcss_TemplatesAsync';
  const strAction = 'Delcss_Templates';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTemplateId, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_Delcss_TemplatesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delcss_TemplatesByCondAsync';
  const strAction = 'Delcss_TemplatesByCond';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Template_AddNewRecordAsync(
  objcss_TemplateEN: clscss_TemplateEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objcss_TemplateEN.templateId === null || objcss_TemplateEN.templateId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcss_TemplateEN);
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateEN, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Template_AddNewRecordWithMaxIdAsync(
  objcss_TemplateEN: clscss_TemplateEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateEN, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Template_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Template_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcss_TemplateEN);
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Template_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcss_TemplateEN);
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Template_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcss_TemplateEN);
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Template_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objcss_TemplateEN);
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param objcss_TemplateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function css_Template_AddNewRecordWithReturnKeyAsync(
  objcss_TemplateEN: clscss_TemplateEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateEN, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param objcss_TemplateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function css_Template_UpdateRecordAsync(
  objcss_TemplateEN: clscss_TemplateEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcss_TemplateEN.sfUpdFldSetStr === undefined ||
    objcss_TemplateEN.sfUpdFldSetStr === null ||
    objcss_TemplateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_TemplateEN.templateId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateEN, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param objcss_TemplateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_Template_UpdateWithConditionAsync(
  objcss_TemplateEN: clscss_TemplateEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcss_TemplateEN.sfUpdFldSetStr === undefined ||
    objcss_TemplateEN.sfUpdFldSetStr === null ||
    objcss_TemplateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_TemplateEN.templateId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);
  objcss_TemplateEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_TemplateEN, config);
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
 * @param strTemplateId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function css_Template_IsExistAsync(strTemplateId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTemplateId,
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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export async function css_Template_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(css_Template_Controller, strAction);

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
        css_Template_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Template_ConstructorName,
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
export function css_Template_GetWebApiUrl(strController: string, strAction: string): string {
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
export function css_Template_CheckPropertyNew(pobjcss_TemplateEN: clscss_TemplateEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateId) == false &&
    GetStrLen(pobjcss_TemplateEN.templateId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[模板ID(templateId)]的长度不能超过8(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templateId)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateName) == false &&
    GetStrLen(pobjcss_TemplateEN.templateName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[模板名称(templateName)]的长度不能超过50(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templateName)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateDesc) == false &&
    GetStrLen(pobjcss_TemplateEN.templateDesc) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[模板描述(templateDesc)]的长度不能超过100(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templateDesc)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templatePic) == false &&
    GetStrLen(pobjcss_TemplateEN.templatePic) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[模板图片(templatePic)]的长度不能超过100(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templatePic)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.deletedDate) == false &&
    GetStrLen(pobjcss_TemplateEN.deletedDate) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[删除日期(deletedDate)]的长度不能超过50(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.deletedDate)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updDate) == false &&
    GetStrLen(pobjcss_TemplateEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.updDate)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updUser) == false &&
    GetStrLen(pobjcss_TemplateEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.updUser)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.memo) == false &&
    GetStrLen(pobjcss_TemplateEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.memo)(clscss_TemplateBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateId) == false &&
    undefined !== pobjcss_TemplateEN.templateId &&
    tzDataType.isString(pobjcss_TemplateEN.templateId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[模板ID(templateId)]的值:[$(pobjcss_TemplateEN.templateId)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateName) == false &&
    undefined !== pobjcss_TemplateEN.templateName &&
    tzDataType.isString(pobjcss_TemplateEN.templateName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[模板名称(templateName)]的值:[$(pobjcss_TemplateEN.templateName)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateDesc) == false &&
    undefined !== pobjcss_TemplateEN.templateDesc &&
    tzDataType.isString(pobjcss_TemplateEN.templateDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[模板描述(templateDesc)]的值:[$(pobjcss_TemplateEN.templateDesc)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcss_TemplateEN.orderNum &&
    undefined !== pobjcss_TemplateEN.orderNum &&
    tzDataType.isNumber(pobjcss_TemplateEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjcss_TemplateEN.orderNum)], 非法,应该为数值型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templatePic) == false &&
    undefined !== pobjcss_TemplateEN.templatePic &&
    tzDataType.isString(pobjcss_TemplateEN.templatePic) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[模板图片(templatePic)]的值:[$(pobjcss_TemplateEN.templatePic)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcss_TemplateEN.isPublic &&
    undefined !== pobjcss_TemplateEN.isPublic &&
    tzDataType.isBoolean(pobjcss_TemplateEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否公开(isPublic)]的值:[$(pobjcss_TemplateEN.isPublic)], 非法,应该为布尔型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjcss_TemplateEN.isDeleted &&
    undefined !== pobjcss_TemplateEN.isDeleted &&
    tzDataType.isBoolean(pobjcss_TemplateEN.isDeleted) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否删除(isDeleted)]的值:[$(pobjcss_TemplateEN.isDeleted)], 非法,应该为布尔型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.deletedDate) == false &&
    undefined !== pobjcss_TemplateEN.deletedDate &&
    tzDataType.isString(pobjcss_TemplateEN.deletedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[删除日期(deletedDate)]的值:[$(pobjcss_TemplateEN.deletedDate)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updDate) == false &&
    undefined !== pobjcss_TemplateEN.updDate &&
    tzDataType.isString(pobjcss_TemplateEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjcss_TemplateEN.updDate)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updUser) == false &&
    undefined !== pobjcss_TemplateEN.updUser &&
    tzDataType.isString(pobjcss_TemplateEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjcss_TemplateEN.updUser)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.memo) == false &&
    undefined !== pobjcss_TemplateEN.memo &&
    tzDataType.isString(pobjcss_TemplateEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjcss_TemplateEN.memo)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function css_Template_CheckProperty4Update(pobjcss_TemplateEN: clscss_TemplateEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateId) == false &&
    GetStrLen(pobjcss_TemplateEN.templateId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[模板ID(templateId)]的长度不能超过8(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templateId)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateName) == false &&
    GetStrLen(pobjcss_TemplateEN.templateName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[模板名称(templateName)]的长度不能超过50(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templateName)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateDesc) == false &&
    GetStrLen(pobjcss_TemplateEN.templateDesc) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[模板描述(templateDesc)]的长度不能超过100(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templateDesc)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templatePic) == false &&
    GetStrLen(pobjcss_TemplateEN.templatePic) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[模板图片(templatePic)]的长度不能超过100(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.templatePic)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.deletedDate) == false &&
    GetStrLen(pobjcss_TemplateEN.deletedDate) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[删除日期(deletedDate)]的长度不能超过50(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.deletedDate)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updDate) == false &&
    GetStrLen(pobjcss_TemplateEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.updDate)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updUser) == false &&
    GetStrLen(pobjcss_TemplateEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.updUser)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.memo) == false &&
    GetStrLen(pobjcss_TemplateEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In css_Template(css_Template))!值:$(pobjcss_TemplateEN.memo)(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateId) == false &&
    undefined !== pobjcss_TemplateEN.templateId &&
    tzDataType.isString(pobjcss_TemplateEN.templateId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[模板ID(templateId)]的值:[$(pobjcss_TemplateEN.templateId)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateName) == false &&
    undefined !== pobjcss_TemplateEN.templateName &&
    tzDataType.isString(pobjcss_TemplateEN.templateName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[模板名称(templateName)]的值:[$(pobjcss_TemplateEN.templateName)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templateDesc) == false &&
    undefined !== pobjcss_TemplateEN.templateDesc &&
    tzDataType.isString(pobjcss_TemplateEN.templateDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[模板描述(templateDesc)]的值:[$(pobjcss_TemplateEN.templateDesc)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcss_TemplateEN.orderNum &&
    undefined !== pobjcss_TemplateEN.orderNum &&
    tzDataType.isNumber(pobjcss_TemplateEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjcss_TemplateEN.orderNum)], 非法,应该为数值型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.templatePic) == false &&
    undefined !== pobjcss_TemplateEN.templatePic &&
    tzDataType.isString(pobjcss_TemplateEN.templatePic) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[模板图片(templatePic)]的值:[$(pobjcss_TemplateEN.templatePic)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcss_TemplateEN.isPublic &&
    undefined !== pobjcss_TemplateEN.isPublic &&
    tzDataType.isBoolean(pobjcss_TemplateEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否公开(isPublic)]的值:[$(pobjcss_TemplateEN.isPublic)], 非法,应该为布尔型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjcss_TemplateEN.isDeleted &&
    undefined !== pobjcss_TemplateEN.isDeleted &&
    tzDataType.isBoolean(pobjcss_TemplateEN.isDeleted) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否删除(isDeleted)]的值:[$(pobjcss_TemplateEN.isDeleted)], 非法,应该为布尔型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.deletedDate) == false &&
    undefined !== pobjcss_TemplateEN.deletedDate &&
    tzDataType.isString(pobjcss_TemplateEN.deletedDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[删除日期(deletedDate)]的值:[$(pobjcss_TemplateEN.deletedDate)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updDate) == false &&
    undefined !== pobjcss_TemplateEN.updDate &&
    tzDataType.isString(pobjcss_TemplateEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjcss_TemplateEN.updDate)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.updUser) == false &&
    undefined !== pobjcss_TemplateEN.updUser &&
    tzDataType.isString(pobjcss_TemplateEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjcss_TemplateEN.updUser)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjcss_TemplateEN.memo) == false &&
    undefined !== pobjcss_TemplateEN.memo &&
    tzDataType.isString(pobjcss_TemplateEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjcss_TemplateEN.memo)], 非法,应该为字符型(In css_Template(css_Template))!(clscss_TemplateBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjcss_TemplateEN.templateId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[模板ID]不能为空(In css_Template)!(clscss_TemplateBL:CheckProperty4Update)',
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
export function css_Template_GetJSONStrByObj(pobjcss_TemplateEN: clscss_TemplateEN): string {
  pobjcss_TemplateEN.sfUpdFldSetStr = pobjcss_TemplateEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcss_TemplateEN);
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
export function css_Template_GetObjLstByJSONStr(strJSON: string): Array<clscss_TemplateEN> {
  let arrcss_TemplateObjLst = new Array<clscss_TemplateEN>();
  if (strJSON === '') {
    return arrcss_TemplateObjLst;
  }
  try {
    arrcss_TemplateObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcss_TemplateObjLst;
  }
  return arrcss_TemplateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcss_TemplateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function css_Template_GetObjLstByJSONObjLst(
  arrcss_TemplateObjLstS: Array<clscss_TemplateEN>,
): Array<clscss_TemplateEN> {
  const arrcss_TemplateObjLst = new Array<clscss_TemplateEN>();
  for (const objInFor of arrcss_TemplateObjLstS) {
    const obj1 = css_Template_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcss_TemplateObjLst.push(obj1);
  }
  return arrcss_TemplateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function css_Template_GetObjByJSONStr(strJSON: string): clscss_TemplateEN {
  let pobjcss_TemplateEN = new clscss_TemplateEN();
  if (strJSON === '') {
    return pobjcss_TemplateEN;
  }
  try {
    pobjcss_TemplateEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcss_TemplateEN;
  }
  return pobjcss_TemplateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function css_Template_GetCombineCondition(objcss_TemplateCond: clscss_TemplateEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_TemplateId,
    ) == true
  ) {
    const strComparisonOpTemplateId: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_TemplateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_TemplateId,
      objcss_TemplateCond.templateId,
      strComparisonOpTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_TemplateName,
    ) == true
  ) {
    const strComparisonOpTemplateName: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_TemplateName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_TemplateName,
      objcss_TemplateCond.templateName,
      strComparisonOpTemplateName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_TemplateDesc,
    ) == true
  ) {
    const strComparisonOpTemplateDesc: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_TemplateDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_TemplateDesc,
      objcss_TemplateCond.templateDesc,
      strComparisonOpTemplateDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscss_TemplateEN.con_OrderNum,
      objcss_TemplateCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_TemplatePic,
    ) == true
  ) {
    const strComparisonOpTemplatePic: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_TemplatePic];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_TemplatePic,
      objcss_TemplateCond.templatePic,
      strComparisonOpTemplatePic,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_IsPublic,
    ) == true
  ) {
    if (objcss_TemplateCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clscss_TemplateEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscss_TemplateEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_IsDeleted,
    ) == true
  ) {
    if (objcss_TemplateCond.isDeleted == true) {
      strWhereCond += Format(" And {0} = '1'", clscss_TemplateEN.con_IsDeleted);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscss_TemplateEN.con_IsDeleted);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_DeletedDate,
    ) == true
  ) {
    const strComparisonOpDeletedDate: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_DeletedDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_DeletedDate,
      objcss_TemplateCond.deletedDate,
      strComparisonOpDeletedDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_UpdDate,
      objcss_TemplateCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_UpdUser,
      objcss_TemplateCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_TemplateCond.dicFldComparisonOp,
      clscss_TemplateEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcss_TemplateCond.dicFldComparisonOp[clscss_TemplateEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_TemplateEN.con_Memo,
      objcss_TemplateCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcss_TemplateENS:源对象
 * @param objcss_TemplateENT:目标对象
 */
export function css_Template_GetObjFromJsonObj(
  objcss_TemplateENS: clscss_TemplateEN,
): clscss_TemplateEN {
  const objcss_TemplateENT: clscss_TemplateEN = new clscss_TemplateEN();
  ObjectAssign(objcss_TemplateENT, objcss_TemplateENS);
  return objcss_TemplateENT;
}
