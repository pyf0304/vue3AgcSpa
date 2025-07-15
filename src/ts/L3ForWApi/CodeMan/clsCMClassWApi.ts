/**
 * 类名:clsCMClassWApi
 * 表名:CMClass(00050501)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM类(CMClass)
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
import { clsCMClassEN } from '@/ts/L0Entity/CodeMan/clsCMClassEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMClass_Controller = 'CMClassApi';
export const cMClass_ConstructorName = 'cMClass';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmClassId:关键字
 * @returns 对象
 **/
export async function CMClass_GetObjByCmClassIdAsync(
  strCmClassId: string,
): Promise<clsCMClassEN | null> {
  const strThisFuncName = 'GetObjByCmClassIdAsync';

  if (IsNullOrEmpty(strCmClassId) == true) {
    const strMsg = Format('参数:[strCmClassId]不能为空!(In clsCMClassWApi.GetObjByCmClassIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassId]的长度:[{0}]不正确!(clsCMClassWApi.GetObjByCmClassIdAsync)',
      strCmClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCmClassId';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmClassId,
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
      const objCMClass = CMClass_GetObjFromJsonObj(returnObj);
      return objCMClass;
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param strCmClassId:所给的关键字
 * @returns 对象
 */
export async function CMClass_GetObjByCmClassIdCache(
  strCmClassId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCmClassIdCache';

  if (IsNullOrEmpty(strCmClassId) == true) {
    const strMsg = Format('参数:[strCmClassId]不能为空!(In clsCMClassWApi.GetObjByCmClassIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassId]的长度:[{0}]不正确!(clsCMClassWApi.GetObjByCmClassIdCache)',
      strCmClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
  try {
    const arrCMClassSel = arrCMClassObjLstCache.filter((x) => x.cmClassId == strCmClassId);
    let objCMClass: clsCMClassEN;
    if (arrCMClassSel.length > 0) {
      objCMClass = arrCMClassSel[0];
      return objCMClass;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCMClassConst = await CMClass_GetObjByCmClassIdAsync(strCmClassId);
        if (objCMClassConst != null) {
          CMClass_ReFreshThisCache(strPrjId);
          return objCMClassConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmClassId,
      cMClass_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCmClassId:所给的关键字
 * @returns 对象
 */
export async function CMClass_GetObjByCmClassIdlocalStorage(strCmClassId: string) {
  const strThisFuncName = 'GetObjByCmClassIdlocalStorage';

  if (IsNullOrEmpty(strCmClassId) == true) {
    const strMsg = Format(
      '参数:[strCmClassId]不能为空!(In clsCMClassWApi.GetObjByCmClassIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassId]的长度:[{0}]不正确!(clsCMClassWApi.GetObjByCmClassIdlocalStorage)',
      strCmClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strCmClassId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCMClassCache: clsCMClassEN = JSON.parse(strTempObj);
    return objCMClassCache;
  }
  try {
    const objCMClass = await CMClass_GetObjByCmClassIdAsync(strCmClassId);
    if (objCMClass != null) {
      localStorage.setItem(strKey, JSON.stringify(objCMClass));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCMClass;
    }
    return objCMClass;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmClassId,
      cMClass_ConstructorName,
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
 * @param objCMClass:所给的对象
 * @returns 对象
 */
export async function CMClass_UpdateObjInLstCache(objCMClass: clsCMClassEN, strPrjId: string) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
    const obj = arrCMClassObjLstCache.find(
      (x) =>
        x.tabName == objCMClass.tabName &&
        x.nameSpace == objCMClass.nameSpace &&
        x.clsName == objCMClass.clsName &&
        x.fileName == objCMClass.fileName &&
        x.userId == objCMClass.userId &&
        x.prjId == objCMClass.prjId &&
        x.progLangTypeId == objCMClass.progLangTypeId,
    );
    if (obj != null) {
      objCMClass.cmClassId = obj.cmClassId;
      ObjectAssign(obj, objCMClass);
    } else {
      arrCMClassObjLstCache.push(objCMClass);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cMClass_ConstructorName,
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
export async function CMClass_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsCMClassWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsCMClassWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsCMClassEN.con_CmClassId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCMClassEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCMClassEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCmClassId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCMClass = await CMClass_GetObjByCmClassIdCache(strCmClassId, strPrjIdClassfy);
  if (objCMClass == null) return '';
  if (objCMClass.GetFldValue(strOutFldName) == null) return '';
  return objCMClass.GetFldValue(strOutFldName).toString();
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
export function CMClass_SortFunDefa(a: clsCMClassEN, b: clsCMClassEN): number {
  return a.cmClassId.localeCompare(b.cmClassId);
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
export function CMClass_SortFunDefa2Fld(a: clsCMClassEN, b: clsCMClassEN): number {
  if (a.applicationTypeId == b.applicationTypeId)
    return a.progLangTypeId.localeCompare(b.progLangTypeId);
  else return a.applicationTypeId - b.applicationTypeId;
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
export function CMClass_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMClassEN.con_CmClassId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.cmClassId.localeCompare(b.cmClassId);
        };
      case clsCMClassEN.con_ApplicationTypeId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsCMClassEN.con_ProgLangTypeId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsCMClassEN.con_TabName:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.tabName == null) return -1;
          if (b.tabName == null) return 1;
          return a.tabName.localeCompare(b.tabName);
        };
      case clsCMClassEN.con_NameSpace:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.nameSpace == null) return -1;
          if (b.nameSpace == null) return 1;
          return a.nameSpace.localeCompare(b.nameSpace);
        };
      case clsCMClassEN.con_ProjectPath:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.projectPath.localeCompare(b.projectPath);
        };
      case clsCMClassEN.con_FilePath:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.filePath.localeCompare(b.filePath);
        };
      case clsCMClassEN.con_FileName:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.fileName.localeCompare(b.fileName);
        };
      case clsCMClassEN.con_FileText:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.fileText == null) return -1;
          if (b.fileText == null) return 1;
          return a.fileText.localeCompare(b.fileText);
        };
      case clsCMClassEN.con_FuncModuleAgcId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.funcModuleAgcId == null) return -1;
          if (b.funcModuleAgcId == null) return 1;
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsCMClassEN.con_CodeTypeId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsCMClassEN.con_UserId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsCMClassEN.con_PrjId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMClassEN.con_IsOpen:
        return (a: clsCMClassEN) => {
          if (a.isOpen == true) return 1;
          else return -1;
        };
      case clsCMClassEN.con_UpdDate:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMClassEN.con_UpdUser:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMClassEN.con_Memo:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsCMClassEN.con_ClsName:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return a.clsName.localeCompare(b.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMClass]中不存在!(in ${cMClass_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMClassEN.con_CmClassId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.cmClassId.localeCompare(a.cmClassId);
        };
      case clsCMClassEN.con_ApplicationTypeId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsCMClassEN.con_ProgLangTypeId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsCMClassEN.con_TabName:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.tabName == null) return -1;
          if (a.tabName == null) return 1;
          return b.tabName.localeCompare(a.tabName);
        };
      case clsCMClassEN.con_NameSpace:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.nameSpace == null) return -1;
          if (a.nameSpace == null) return 1;
          return b.nameSpace.localeCompare(a.nameSpace);
        };
      case clsCMClassEN.con_ProjectPath:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.projectPath.localeCompare(a.projectPath);
        };
      case clsCMClassEN.con_FilePath:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.filePath.localeCompare(a.filePath);
        };
      case clsCMClassEN.con_FileName:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.fileName.localeCompare(a.fileName);
        };
      case clsCMClassEN.con_FileText:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.fileText == null) return -1;
          if (a.fileText == null) return 1;
          return b.fileText.localeCompare(a.fileText);
        };
      case clsCMClassEN.con_FuncModuleAgcId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.funcModuleAgcId == null) return -1;
          if (a.funcModuleAgcId == null) return 1;
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsCMClassEN.con_CodeTypeId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsCMClassEN.con_UserId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsCMClassEN.con_PrjId:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMClassEN.con_IsOpen:
        return (b: clsCMClassEN) => {
          if (b.isOpen == true) return 1;
          else return -1;
        };
      case clsCMClassEN.con_UpdDate:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMClassEN.con_UpdUser:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMClassEN.con_Memo:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsCMClassEN.con_ClsName:
        return (a: clsCMClassEN, b: clsCMClassEN) => {
          return b.clsName.localeCompare(a.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMClass]中不存在!(in ${cMClass_ConstructorName}.${strThisFuncName})`;
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
export async function CMClass_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMClassEN.con_CmClassId:
      return (obj: clsCMClassEN) => {
        return obj.cmClassId === value;
      };
    case clsCMClassEN.con_ApplicationTypeId:
      return (obj: clsCMClassEN) => {
        return obj.applicationTypeId === value;
      };
    case clsCMClassEN.con_ProgLangTypeId:
      return (obj: clsCMClassEN) => {
        return obj.progLangTypeId === value;
      };
    case clsCMClassEN.con_TabName:
      return (obj: clsCMClassEN) => {
        return obj.tabName === value;
      };
    case clsCMClassEN.con_NameSpace:
      return (obj: clsCMClassEN) => {
        return obj.nameSpace === value;
      };
    case clsCMClassEN.con_ProjectPath:
      return (obj: clsCMClassEN) => {
        return obj.projectPath === value;
      };
    case clsCMClassEN.con_FilePath:
      return (obj: clsCMClassEN) => {
        return obj.filePath === value;
      };
    case clsCMClassEN.con_FileName:
      return (obj: clsCMClassEN) => {
        return obj.fileName === value;
      };
    case clsCMClassEN.con_FileText:
      return (obj: clsCMClassEN) => {
        return obj.fileText === value;
      };
    case clsCMClassEN.con_FuncModuleAgcId:
      return (obj: clsCMClassEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsCMClassEN.con_CodeTypeId:
      return (obj: clsCMClassEN) => {
        return obj.codeTypeId === value;
      };
    case clsCMClassEN.con_UserId:
      return (obj: clsCMClassEN) => {
        return obj.userId === value;
      };
    case clsCMClassEN.con_PrjId:
      return (obj: clsCMClassEN) => {
        return obj.prjId === value;
      };
    case clsCMClassEN.con_IsOpen:
      return (obj: clsCMClassEN) => {
        return obj.isOpen === value;
      };
    case clsCMClassEN.con_UpdDate:
      return (obj: clsCMClassEN) => {
        return obj.updDate === value;
      };
    case clsCMClassEN.con_UpdUser:
      return (obj: clsCMClassEN) => {
        return obj.updUser === value;
      };
    case clsCMClassEN.con_Memo:
      return (obj: clsCMClassEN) => {
        return obj.memo === value;
      };
    case clsCMClassEN.con_ClsName:
      return (obj: clsCMClassEN) => {
        return obj.clsName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMClass]中不存在!(in ${cMClass_ConstructorName}.${strThisFuncName})`;
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
export async function CMClass_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsCMClassWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsCMClassWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsCMClassEN.con_CmClassId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCMClass = await CMClass_GetObjLstCache(strPrjIdClassfy);
  if (arrCMClass == null) return [];
  let arrCMClassSel = arrCMClass;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCMClassSel = arrCMClassSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCMClassSel = arrCMClassSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCMClassSel = arrCMClassSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrCMClassSel.length == 0) return [];
  return arrCMClassSel.map((x) => x.cmClassId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMClass_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetFirstObjAsync(strWhereCond: string): Promise<clsCMClassEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
      const objCMClass = CMClass_GetObjFromJsonObj(returnObj);
      return objCMClass;
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMClassEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMClassEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCMClassEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMClassEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCMClassExObjLstCache: Array<clsCMClassEN> = CacheHelper.Get(strKey);
    const arrCMClassObjLstT = CMClass_GetObjLstByJSONObjLst(arrCMClassExObjLstCache);
    return arrCMClassObjLstT;
  }
  try {
    const arrCMClassExObjLst = await CMClass_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCMClassExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMClassExObjLst.length,
    );
    console.log(strInfo);
    return arrCMClassExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMClass_ConstructorName,
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
export async function CMClass_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMClassEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMClassEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMClassEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCMClassEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMClassEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMClassExObjLstCache: Array<clsCMClassEN> = JSON.parse(strTempObjLst);
    const arrCMClassObjLstT = CMClass_GetObjLstByJSONObjLst(arrCMClassExObjLstCache);
    return arrCMClassObjLstT;
  }
  try {
    const arrCMClassExObjLst = await CMClass_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCMClassExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMClassExObjLst.length,
    );
    console.log(strInfo);
    return arrCMClassExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMClass_ConstructorName,
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
export async function CMClass_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMClassObjLstCache: Array<clsCMClassEN> = JSON.parse(strTempObjLst);
    return arrCMClassObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CMClass_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCMClassEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
          cMClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClass_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMClassEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMClassEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMClassEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsCMClassEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMClassEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMClassExObjLstCache: Array<clsCMClassEN> = JSON.parse(strTempObjLst);
    const arrCMClassObjLstT = CMClass_GetObjLstByJSONObjLst(arrCMClassExObjLstCache);
    return arrCMClassObjLstT;
  }
  try {
    const arrCMClassExObjLst = await CMClass_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCMClassExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMClassExObjLst.length,
    );
    console.log(strInfo);
    return arrCMClassExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMClass_ConstructorName,
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
export async function CMClass_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMClassObjLstCache: Array<clsCMClassEN> = JSON.parse(strTempObjLst);
    return arrCMClassObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMClass_GetObjLstCache(strPrjId: string): Promise<Array<clsCMClassEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsCMClassWApi.CMClass_GetObjLstCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCMClassWApi.CMClass_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrCMClassObjLstCache;
  switch (clsCMClassEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMClassObjLstCache = await CMClass_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrCMClassObjLstCache = await CMClass_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrCMClassObjLstCache = await CMClass_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrCMClassObjLstCache = await CMClass_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrCMClassObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMClass_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCMClassObjLstCache;
  switch (clsCMClassEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMClassObjLstCache = await CMClass_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrCMClassObjLstCache = await CMClass_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrCMClassObjLstCache = null;
      break;
    default:
      arrCMClassObjLstCache = null;
      break;
  }
  return arrCMClassObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCmClassIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMClass_GetSubObjLstCache(objCMClassCond: clsCMClassEN, strPrjId: string) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
  let arrCMClassSel = arrCMClassObjLstCache;
  if (objCMClassCond.sfFldComparisonOp == null || objCMClassCond.sfFldComparisonOp == '')
    return arrCMClassSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMClassCond.sfFldComparisonOp,
  );
  //console.log("clsCMClassWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMClassCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMClassSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMClassCond),
      cMClass_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMClassEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCmClassId:关键字列表
 * @returns 对象列表
 **/
export async function CMClass_GetObjLstByCmClassIdLstAsync(
  arrCmClassId: Array<string>,
): Promise<Array<clsCMClassEN>> {
  const strThisFuncName = 'GetObjLstByCmClassIdLstAsync';
  const strAction = 'GetObjLstByCmClassIdLst';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmClassId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClass_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param arrstrCmClassIdLst:关键字列表
 * @returns 对象列表
 */
export async function CMClass_GetObjLstByCmClassIdLstCache(
  arrCmClassIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByCmClassIdLstCache';
  try {
    const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
    const arrCMClassSel = arrCMClassObjLstCache.filter(
      (x) => arrCmClassIdLst.indexOf(x.cmClassId) > -1,
    );
    return arrCMClassSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCmClassIdLst.join(','),
      cMClass_ConstructorName,
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
export async function CMClass_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMClassEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
          cMClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClass_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMClassEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
          cMClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClass_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetObjLstByPagerCache(objPagerPara: stuPagerPara, strPrjId: string) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMClassEN>();
  const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
  if (arrCMClassObjLstCache.length == 0) return arrCMClassObjLstCache;
  let arrCMClassSel = arrCMClassObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCMClassCond = new clsCMClassEN();
  ObjectAssign(objCMClassCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCMClassWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMClassSel = arrCMClassSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMClassSel.length == 0) return arrCMClassSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCMClassSel = arrCMClassSel.sort(CMClass_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMClassSel = arrCMClassSel.sort(objPagerPara.sortFun);
    }
    arrCMClassSel = arrCMClassSel.slice(intStart, intEnd);
    return arrCMClassSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMClass_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMClassEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CMClass_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMClassEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMClassEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
          cMClass_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMClass_GetObjLstByJSONObjLst(returnObjLst);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param strCmClassId:关键字
 * @returns 获取删除的结果
 **/
export async function CMClass_DelRecordAsync(strCmClassId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMClass_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCmClassId);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param arrCmClassId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMClass_DelCMClasssAsync(arrCmClassId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelCMClasssAsync';
  const strAction = 'DelCMClasss';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmClassId, config);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_DelCMClasssByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCMClasssByCondAsync';
  const strAction = 'DelCMClasssByCond';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param objCMClassEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClass_AddNewRecordAsync(objCMClassEN: clsCMClassEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMClassEN);
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassEN, config);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param objCMClassEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMClass_AddNewRecordWithMaxIdAsync(
  objCMClassEN: clsCMClassEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassEN, config);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param objCMClassEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMClass_AddNewRecordWithReturnKeyAsync(
  objCMClassEN: clsCMClassEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassEN, config);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param objCMClassEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMClass_UpdateRecordAsync(objCMClassEN: clsCMClassEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMClassEN.sfUpdFldSetStr === undefined ||
    objCMClassEN.sfUpdFldSetStr === null ||
    objCMClassEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMClassEN.cmClassId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassEN, config);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param objCMClassEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMClass_UpdateWithConditionAsync(
  objCMClassEN: clsCMClassEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMClassEN.sfUpdFldSetStr === undefined ||
    objCMClassEN.sfUpdFldSetStr === null ||
    objCMClassEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMClassEN.cmClassId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);
  objCMClassEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMClassEN, config);
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param objstrCmClassIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMClass_IsExistRecordCache(objCMClassCond: clsCMClassEN, strPrjId: string) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
  if (arrCMClassObjLstCache == null) return false;
  let arrCMClassSel = arrCMClassObjLstCache;
  if (objCMClassCond.sfFldComparisonOp == null || objCMClassCond.sfFldComparisonOp == '')
    return arrCMClassSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMClassCond.sfFldComparisonOp,
  );
  //console.log("clsCMClassWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMClassCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMClassSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCMClassCond),
      cMClass_ConstructorName,
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
export async function CMClass_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param strCmClassId:所给的关键字
 * @returns 对象
 */
export async function CMClass_IsExistCache(strCmClassId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
  if (arrCMClassObjLstCache == null) return false;
  try {
    const arrCMClassSel = arrCMClassObjLstCache.filter((x) => x.cmClassId == strCmClassId);
    if (arrCMClassSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCmClassId,
      cMClass_ConstructorName,
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
 * @param strCmClassId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMClass_IsExistAsync(strCmClassId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmClassId,
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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
 * @param objCMClassCond:条件对象
 * @returns 对象列表记录数
 */
export async function CMClass_GetRecCountByCondCache(
  objCMClassCond: clsCMClassEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCMClassObjLstCache = await CMClass_GetObjLstCache(strPrjId);
  if (arrCMClassObjLstCache == null) return 0;
  let arrCMClassSel = arrCMClassObjLstCache;
  if (objCMClassCond.sfFldComparisonOp == null || objCMClassCond.sfFldComparisonOp == '')
    return arrCMClassSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMClassCond.sfFldComparisonOp,
  );
  //console.log("clsCMClassWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMClassCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMClassCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMClassSel = arrCMClassSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMClassSel = arrCMClassSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMClassSel = arrCMClassSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMClassSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMClassCond),
      cMClass_ConstructorName,
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
export async function CMClass_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export async function CMClass_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMClass_Controller, strAction);

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
        cMClass_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMClass_ConstructorName,
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
export function CMClass_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMClass_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsCMClassWApi.clsCMClassWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsCMClassWApi.clsCMClassWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strPrjId);
  switch (clsCMClassEN.CacheModeId) {
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
export function CMClass_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsCMClassWApi.CMClass_ReFreshThisCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsCMClassWApi.CMClass_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsCMClassEN._CurrTabName, strPrjId);
    switch (clsCMClassEN.CacheModeId) {
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
export async function CMClass_BindDdl_CmClassIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsCMClassWApi.BindDdl_CmClassIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCMClassWApi.BindDdl_CmClassIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CmClassIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CmClassIdInDivCache");
  let arrObjLstSel = await CMClass_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCMClassEN.con_CmClassId,
    clsCMClassEN.con_ClsName,
    'CM类',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMClass_CheckPropertyNew(pobjCMClassEN: clsCMClassEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjCMClassEN.applicationTypeId ||
    (pobjCMClassEN.applicationTypeId != null &&
      pobjCMClassEN.applicationTypeId.toString() === '') ||
    pobjCMClassEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[应用程序类型ID]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.progLangTypeId) === true ||
    pobjCMClassEN.progLangTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[编程语言类型Id]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.projectPath) === true) {
    throw new Error(
      '(errid:Watl000411)字段[工程路径]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.filePath) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件路径]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.fileName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件名]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.codeTypeId) === true ||
    pobjCMClassEN.codeTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[代码类型Id]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.prjId) === true || pobjCMClassEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.clsName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[类名]不能为空(In CM类)!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjCMClassEN.cmClassId) == false && GetStrLen(pobjCMClassEN.cmClassId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[类Id(cmClassId)]的长度不能超过8(In CM类(CMClass))!值:$(pobjCMClassEN.cmClassId)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.progLangTypeId) == false &&
    GetStrLen(pobjCMClassEN.progLangTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In CM类(CMClass))!值:$(pobjCMClassEN.progLangTypeId)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.tabName) == false && GetStrLen(pobjCMClassEN.tabName) > 100) {
    throw new Error(
      '(errid:Watl000413)字段[表名(tabName)]的长度不能超过100(In CM类(CMClass))!值:$(pobjCMClassEN.tabName)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.nameSpace) == false && GetStrLen(pobjCMClassEN.nameSpace) > 50) {
    throw new Error(
      '(errid:Watl000413)字段[域名(nameSpace)]的长度不能超过50(In CM类(CMClass))!值:$(pobjCMClassEN.nameSpace)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.projectPath) == false &&
    GetStrLen(pobjCMClassEN.projectPath) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程路径(projectPath)]的长度不能超过500(In CM类(CMClass))!值:$(pobjCMClassEN.projectPath)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.filePath) == false && GetStrLen(pobjCMClassEN.filePath) > 500) {
    throw new Error(
      '(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In CM类(CMClass))!值:$(pobjCMClassEN.filePath)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.fileName) == false && GetStrLen(pobjCMClassEN.fileName) > 150) {
    throw new Error(
      '(errid:Watl000413)字段[文件名(fileName)]的长度不能超过150(In CM类(CMClass))!值:$(pobjCMClassEN.fileName)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.funcModuleAgcId) == false &&
    GetStrLen(pobjCMClassEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In CM类(CMClass))!值:$(pobjCMClassEN.funcModuleAgcId)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.codeTypeId) == false && GetStrLen(pobjCMClassEN.codeTypeId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In CM类(CMClass))!值:$(pobjCMClassEN.codeTypeId)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.userId) == false && GetStrLen(pobjCMClassEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In CM类(CMClass))!值:$(pobjCMClassEN.userId)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.prjId) == false && GetStrLen(pobjCMClassEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In CM类(CMClass))!值:$(pobjCMClassEN.prjId)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.updDate) == false && GetStrLen(pobjCMClassEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM类(CMClass))!值:$(pobjCMClassEN.updDate)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.updUser) == false && GetStrLen(pobjCMClassEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM类(CMClass))!值:$(pobjCMClassEN.updUser)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.memo) == false && GetStrLen(pobjCMClassEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM类(CMClass))!值:$(pobjCMClassEN.memo)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.clsName) == false && GetStrLen(pobjCMClassEN.clsName) > 100) {
    throw new Error(
      '(errid:Watl000413)字段[类名(clsName)]的长度不能超过100(In CM类(CMClass))!值:$(pobjCMClassEN.clsName)(clsCMClassBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMClassEN.cmClassId) == false &&
    undefined !== pobjCMClassEN.cmClassId &&
    tzDataType.isString(pobjCMClassEN.cmClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类Id(cmClassId)]的值:[$(pobjCMClassEN.cmClassId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMClassEN.applicationTypeId &&
    undefined !== pobjCMClassEN.applicationTypeId &&
    tzDataType.isNumber(pobjCMClassEN.applicationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[$(pobjCMClassEN.applicationTypeId)], 非法,应该为数值型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.progLangTypeId) == false &&
    undefined !== pobjCMClassEN.progLangTypeId &&
    tzDataType.isString(pobjCMClassEN.progLangTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[$(pobjCMClassEN.progLangTypeId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.tabName) == false &&
    undefined !== pobjCMClassEN.tabName &&
    tzDataType.isString(pobjCMClassEN.tabName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表名(tabName)]的值:[$(pobjCMClassEN.tabName)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.nameSpace) == false &&
    undefined !== pobjCMClassEN.nameSpace &&
    tzDataType.isString(pobjCMClassEN.nameSpace) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[域名(nameSpace)]的值:[$(pobjCMClassEN.nameSpace)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.projectPath) == false &&
    undefined !== pobjCMClassEN.projectPath &&
    tzDataType.isString(pobjCMClassEN.projectPath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程路径(projectPath)]的值:[$(pobjCMClassEN.projectPath)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.filePath) == false &&
    undefined !== pobjCMClassEN.filePath &&
    tzDataType.isString(pobjCMClassEN.filePath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件路径(filePath)]的值:[$(pobjCMClassEN.filePath)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.fileName) == false &&
    undefined !== pobjCMClassEN.fileName &&
    tzDataType.isString(pobjCMClassEN.fileName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件名(fileName)]的值:[$(pobjCMClassEN.fileName)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.fileText) == false &&
    undefined !== pobjCMClassEN.fileText &&
    tzDataType.isString(pobjCMClassEN.fileText) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件内容(fileText)]的值:[$(pobjCMClassEN.fileText)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.funcModuleAgcId) == false &&
    undefined !== pobjCMClassEN.funcModuleAgcId &&
    tzDataType.isString(pobjCMClassEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjCMClassEN.funcModuleAgcId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.codeTypeId) == false &&
    undefined !== pobjCMClassEN.codeTypeId &&
    tzDataType.isString(pobjCMClassEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[$(pobjCMClassEN.codeTypeId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.userId) == false &&
    undefined !== pobjCMClassEN.userId &&
    tzDataType.isString(pobjCMClassEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjCMClassEN.userId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.prjId) == false &&
    undefined !== pobjCMClassEN.prjId &&
    tzDataType.isString(pobjCMClassEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjCMClassEN.prjId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMClassEN.isOpen &&
    undefined !== pobjCMClassEN.isOpen &&
    tzDataType.isBoolean(pobjCMClassEN.isOpen) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否开放(isOpen)]的值:[$(pobjCMClassEN.isOpen)], 非法,应该为布尔型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.updDate) == false &&
    undefined !== pobjCMClassEN.updDate &&
    tzDataType.isString(pobjCMClassEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMClassEN.updDate)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.updUser) == false &&
    undefined !== pobjCMClassEN.updUser &&
    tzDataType.isString(pobjCMClassEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMClassEN.updUser)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.memo) == false &&
    undefined !== pobjCMClassEN.memo &&
    tzDataType.isString(pobjCMClassEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMClassEN.memo)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.clsName) == false &&
    undefined !== pobjCMClassEN.clsName &&
    tzDataType.isString(pobjCMClassEN.clsName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类名(clsName)]的值:[$(pobjCMClassEN.clsName)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMClass_CheckProperty4Update(pobjCMClassEN: clsCMClassEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjCMClassEN.cmClassId) == false && GetStrLen(pobjCMClassEN.cmClassId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[类Id(cmClassId)]的长度不能超过8(In CM类(CMClass))!值:$(pobjCMClassEN.cmClassId)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.progLangTypeId) == false &&
    GetStrLen(pobjCMClassEN.progLangTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In CM类(CMClass))!值:$(pobjCMClassEN.progLangTypeId)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.tabName) == false && GetStrLen(pobjCMClassEN.tabName) > 100) {
    throw new Error(
      '(errid:Watl000416)字段[表名(tabName)]的长度不能超过100(In CM类(CMClass))!值:$(pobjCMClassEN.tabName)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.nameSpace) == false && GetStrLen(pobjCMClassEN.nameSpace) > 50) {
    throw new Error(
      '(errid:Watl000416)字段[域名(nameSpace)]的长度不能超过50(In CM类(CMClass))!值:$(pobjCMClassEN.nameSpace)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.projectPath) == false &&
    GetStrLen(pobjCMClassEN.projectPath) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程路径(projectPath)]的长度不能超过500(In CM类(CMClass))!值:$(pobjCMClassEN.projectPath)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.filePath) == false && GetStrLen(pobjCMClassEN.filePath) > 500) {
    throw new Error(
      '(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In CM类(CMClass))!值:$(pobjCMClassEN.filePath)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.fileName) == false && GetStrLen(pobjCMClassEN.fileName) > 150) {
    throw new Error(
      '(errid:Watl000416)字段[文件名(fileName)]的长度不能超过150(In CM类(CMClass))!值:$(pobjCMClassEN.fileName)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.funcModuleAgcId) == false &&
    GetStrLen(pobjCMClassEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In CM类(CMClass))!值:$(pobjCMClassEN.funcModuleAgcId)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.codeTypeId) == false && GetStrLen(pobjCMClassEN.codeTypeId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In CM类(CMClass))!值:$(pobjCMClassEN.codeTypeId)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.userId) == false && GetStrLen(pobjCMClassEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In CM类(CMClass))!值:$(pobjCMClassEN.userId)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.prjId) == false && GetStrLen(pobjCMClassEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In CM类(CMClass))!值:$(pobjCMClassEN.prjId)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.updDate) == false && GetStrLen(pobjCMClassEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM类(CMClass))!值:$(pobjCMClassEN.updDate)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.updUser) == false && GetStrLen(pobjCMClassEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM类(CMClass))!值:$(pobjCMClassEN.updUser)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.memo) == false && GetStrLen(pobjCMClassEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM类(CMClass))!值:$(pobjCMClassEN.memo)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMClassEN.clsName) == false && GetStrLen(pobjCMClassEN.clsName) > 100) {
    throw new Error(
      '(errid:Watl000416)字段[类名(clsName)]的长度不能超过100(In CM类(CMClass))!值:$(pobjCMClassEN.clsName)(clsCMClassBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMClassEN.cmClassId) == false &&
    undefined !== pobjCMClassEN.cmClassId &&
    tzDataType.isString(pobjCMClassEN.cmClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类Id(cmClassId)]的值:[$(pobjCMClassEN.cmClassId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMClassEN.applicationTypeId &&
    undefined !== pobjCMClassEN.applicationTypeId &&
    tzDataType.isNumber(pobjCMClassEN.applicationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[$(pobjCMClassEN.applicationTypeId)], 非法,应该为数值型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.progLangTypeId) == false &&
    undefined !== pobjCMClassEN.progLangTypeId &&
    tzDataType.isString(pobjCMClassEN.progLangTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[$(pobjCMClassEN.progLangTypeId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.tabName) == false &&
    undefined !== pobjCMClassEN.tabName &&
    tzDataType.isString(pobjCMClassEN.tabName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表名(tabName)]的值:[$(pobjCMClassEN.tabName)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.nameSpace) == false &&
    undefined !== pobjCMClassEN.nameSpace &&
    tzDataType.isString(pobjCMClassEN.nameSpace) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[域名(nameSpace)]的值:[$(pobjCMClassEN.nameSpace)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.projectPath) == false &&
    undefined !== pobjCMClassEN.projectPath &&
    tzDataType.isString(pobjCMClassEN.projectPath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程路径(projectPath)]的值:[$(pobjCMClassEN.projectPath)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.filePath) == false &&
    undefined !== pobjCMClassEN.filePath &&
    tzDataType.isString(pobjCMClassEN.filePath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件路径(filePath)]的值:[$(pobjCMClassEN.filePath)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.fileName) == false &&
    undefined !== pobjCMClassEN.fileName &&
    tzDataType.isString(pobjCMClassEN.fileName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件名(fileName)]的值:[$(pobjCMClassEN.fileName)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.fileText) == false &&
    undefined !== pobjCMClassEN.fileText &&
    tzDataType.isString(pobjCMClassEN.fileText) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件内容(fileText)]的值:[$(pobjCMClassEN.fileText)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.funcModuleAgcId) == false &&
    undefined !== pobjCMClassEN.funcModuleAgcId &&
    tzDataType.isString(pobjCMClassEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjCMClassEN.funcModuleAgcId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.codeTypeId) == false &&
    undefined !== pobjCMClassEN.codeTypeId &&
    tzDataType.isString(pobjCMClassEN.codeTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[$(pobjCMClassEN.codeTypeId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.userId) == false &&
    undefined !== pobjCMClassEN.userId &&
    tzDataType.isString(pobjCMClassEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjCMClassEN.userId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.prjId) == false &&
    undefined !== pobjCMClassEN.prjId &&
    tzDataType.isString(pobjCMClassEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjCMClassEN.prjId)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMClassEN.isOpen &&
    undefined !== pobjCMClassEN.isOpen &&
    tzDataType.isBoolean(pobjCMClassEN.isOpen) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否开放(isOpen)]的值:[$(pobjCMClassEN.isOpen)], 非法,应该为布尔型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.updDate) == false &&
    undefined !== pobjCMClassEN.updDate &&
    tzDataType.isString(pobjCMClassEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMClassEN.updDate)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.updUser) == false &&
    undefined !== pobjCMClassEN.updUser &&
    tzDataType.isString(pobjCMClassEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMClassEN.updUser)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.memo) == false &&
    undefined !== pobjCMClassEN.memo &&
    tzDataType.isString(pobjCMClassEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMClassEN.memo)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMClassEN.clsName) == false &&
    undefined !== pobjCMClassEN.clsName &&
    tzDataType.isString(pobjCMClassEN.clsName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类名(clsName)]的值:[$(pobjCMClassEN.clsName)], 非法,应该为字符型(In CM类(CMClass))!(clsCMClassBL:CheckProperty4Update)',
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
export function CMClass_GetJSONStrByObj(pobjCMClassEN: clsCMClassEN): string {
  pobjCMClassEN.sfUpdFldSetStr = pobjCMClassEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMClassEN);
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
export function CMClass_GetObjLstByJSONStr(strJSON: string): Array<clsCMClassEN> {
  let arrCMClassObjLst = new Array<clsCMClassEN>();
  if (strJSON === '') {
    return arrCMClassObjLst;
  }
  try {
    arrCMClassObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMClassObjLst;
  }
  return arrCMClassObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMClassObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMClass_GetObjLstByJSONObjLst(
  arrCMClassObjLstS: Array<clsCMClassEN>,
): Array<clsCMClassEN> {
  const arrCMClassObjLst = new Array<clsCMClassEN>();
  for (const objInFor of arrCMClassObjLstS) {
    const obj1 = CMClass_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMClassObjLst.push(obj1);
  }
  return arrCMClassObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMClass_GetObjByJSONStr(strJSON: string): clsCMClassEN {
  let pobjCMClassEN = new clsCMClassEN();
  if (strJSON === '') {
    return pobjCMClassEN;
  }
  try {
    pobjCMClassEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMClassEN;
  }
  return pobjCMClassEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMClass_GetCombineCondition(objCMClassCond: clsCMClassEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_CmClassId,
    ) == true
  ) {
    const strComparisonOpCmClassId: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_CmClassId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_CmClassId,
      objCMClassCond.cmClassId,
      strComparisonOpCmClassId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMClassEN.con_ApplicationTypeId,
      objCMClassCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_ProgLangTypeId,
      objCMClassCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_TabName,
    ) == true
  ) {
    const strComparisonOpTabName: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_TabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_TabName,
      objCMClassCond.tabName,
      strComparisonOpTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_NameSpace,
    ) == true
  ) {
    const strComparisonOpNameSpace: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_NameSpace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_NameSpace,
      objCMClassCond.nameSpace,
      strComparisonOpNameSpace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_ProjectPath,
    ) == true
  ) {
    const strComparisonOpProjectPath: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_ProjectPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_ProjectPath,
      objCMClassCond.projectPath,
      strComparisonOpProjectPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_FilePath,
      objCMClassCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_FileName,
    ) == true
  ) {
    const strComparisonOpFileName: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_FileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_FileName,
      objCMClassCond.fileName,
      strComparisonOpFileName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_FuncModuleAgcId,
      objCMClassCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_CodeTypeId,
      objCMClassCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_UserId,
      objCMClassCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string = objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_PrjId,
      objCMClassCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_IsOpen,
    ) == true
  ) {
    if (objCMClassCond.isOpen == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMClassEN.con_IsOpen);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMClassEN.con_IsOpen);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_UpdDate,
      objCMClassCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_UpdUser,
      objCMClassCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_Memo,
      objCMClassCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMClassCond.dicFldComparisonOp,
      clsCMClassEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objCMClassCond.dicFldComparisonOp[clsCMClassEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMClassEN.con_ClsName,
      objCMClassCond.clsName,
      strComparisonOpClsName,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMClass(CM类),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabName: 表名(要求唯一的字段)
 * @param strNameSpace: 域名(要求唯一的字段)
 * @param strClsName: 类名(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strProgLangTypeId: 编程语言类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMClass_GetUniCondStr(objCMClassEN: clsCMClassEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabName = '{0}'", objCMClassEN.tabName);
  strWhereCond += Format(" and NameSpace = '{0}'", objCMClassEN.nameSpace);
  strWhereCond += Format(" and ClsName = '{0}'", objCMClassEN.clsName);
  strWhereCond += Format(" and FileName = '{0}'", objCMClassEN.fileName);
  strWhereCond += Format(" and UserId = '{0}'", objCMClassEN.userId);
  strWhereCond += Format(" and PrjId = '{0}'", objCMClassEN.prjId);
  strWhereCond += Format(" and ProgLangTypeId = '{0}'", objCMClassEN.progLangTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMClass(CM类),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabName: 表名(要求唯一的字段)
 * @param strNameSpace: 域名(要求唯一的字段)
 * @param strClsName: 类名(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strProgLangTypeId: 编程语言类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMClass_GetUniCondStr4Update(objCMClassEN: clsCMClassEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmClassId <> '{0}'", objCMClassEN.cmClassId);
  strWhereCond += Format(" and TabName = '{0}'", objCMClassEN.tabName);
  strWhereCond += Format(" and NameSpace = '{0}'", objCMClassEN.nameSpace);
  strWhereCond += Format(" and ClsName = '{0}'", objCMClassEN.clsName);
  strWhereCond += Format(" and FileName = '{0}'", objCMClassEN.fileName);
  strWhereCond += Format(" and UserId = '{0}'", objCMClassEN.userId);
  strWhereCond += Format(" and PrjId = '{0}'", objCMClassEN.prjId);
  strWhereCond += Format(" and ProgLangTypeId = '{0}'", objCMClassEN.progLangTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMClassENS:源对象
 * @param objCMClassENT:目标对象
 */
export function CMClass_GetObjFromJsonObj(objCMClassENS: clsCMClassEN): clsCMClassEN {
  const objCMClassENT: clsCMClassEN = new clsCMClassEN();
  ObjectAssign(objCMClassENT, objCMClassENS);
  return objCMClassENT;
}
