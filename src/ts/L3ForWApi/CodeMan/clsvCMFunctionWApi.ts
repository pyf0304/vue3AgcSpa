/**
 * 类名:clsvCMFunctionWApi
 * 表名:vCMFunction(00050507)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:38
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
 * vCM函数(vCMFunction)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvCMFunctionEN } from '@/ts/L0Entity/CodeMan/clsvCMFunctionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vCMFunction_Controller = 'vCMFunctionApi';
export const vCMFunction_ConstructorName = 'vCMFunction';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmFunctionId:关键字
 * @returns 对象
 **/
export async function vCMFunction_GetObjByCmFunctionIdAsync(
  strCmFunctionId: string,
): Promise<clsvCMFunctionEN | null> {
  const strThisFuncName = 'GetObjByCmFunctionIdAsync';

  if (IsNullOrEmpty(strCmFunctionId) == true) {
    const strMsg = Format(
      '参数:[strCmFunctionId]不能为空!(In clsvCMFunctionWApi.GetObjByCmFunctionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFunctionId]的长度:[{0}]不正确!(clsvCMFunctionWApi.GetObjByCmFunctionIdAsync)',
      strCmFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCmFunctionId';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFunctionId,
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
      const objvCMFunction = vCMFunction_GetObjFromJsonObj(returnObj);
      return objvCMFunction;
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByCmFunctionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByCmFunctionIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetNameByCmFunctionIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCMFunction_SortFunDefa(a: clsvCMFunctionEN, b: clsvCMFunctionEN): number {
  return a.cmFunctionId.localeCompare(b.cmFunctionId);
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
export function vCMFunction_SortFunDefa2Fld(a: clsvCMFunctionEN, b: clsvCMFunctionEN): number {
  if (a.cmClassId == b.cmClassId) return a.applicationTypeId - b.applicationTypeId;
  else return a.cmClassId.localeCompare(b.cmClassId);
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
export function vCMFunction_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvCMFunctionEN.con_CmFunctionId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.cmFunctionId.localeCompare(b.cmFunctionId);
        };
      case clsvCMFunctionEN.con_CmClassId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.cmClassId.localeCompare(b.cmClassId);
        };
      case clsvCMFunctionEN.con_ApplicationTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvCMFunctionEN.con_ProgLangTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvCMFunctionEN.con_ProgLangTypeName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsvCMFunctionEN.con_ProgLangTypeSimName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.progLangTypeSimName == null) return -1;
          if (b.progLangTypeSimName == null) return 1;
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      case clsvCMFunctionEN.con_NameSpace:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.nameSpace == null) return -1;
          if (b.nameSpace == null) return 1;
          return a.nameSpace.localeCompare(b.nameSpace);
        };
      case clsvCMFunctionEN.con_ProjectPath:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.projectPath == null) return -1;
          if (b.projectPath == null) return 1;
          return a.projectPath.localeCompare(b.projectPath);
        };
      case clsvCMFunctionEN.con_FilePath:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.filePath == null) return -1;
          if (b.filePath == null) return 1;
          return a.filePath.localeCompare(b.filePath);
        };
      case clsvCMFunctionEN.con_FileName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.fileName == null) return -1;
          if (b.fileName == null) return 1;
          return a.fileName.localeCompare(b.fileName);
        };
      case clsvCMFunctionEN.con_CodeTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsvCMFunctionEN.con_UserId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvCMFunctionEN.con_PrjId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvCMFunctionEN.con_PrjName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.prjName == null) return -1;
          if (b.prjName == null) return 1;
          return a.prjName.localeCompare(b.prjName);
        };
      case clsvCMFunctionEN.con_FunctionName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.functionName == null) return -1;
          if (b.functionName == null) return 1;
          return a.functionName.localeCompare(b.functionName);
        };
      case clsvCMFunctionEN.con_FuncContent:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.funcContent == null) return -1;
          if (b.funcContent == null) return 1;
          return a.funcContent.localeCompare(b.funcContent);
        };
      case clsvCMFunctionEN.con_KeyWords:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.keyWords == null) return -1;
          if (b.keyWords == null) return 1;
          return a.keyWords.localeCompare(b.keyWords);
        };
      case clsvCMFunctionEN.con_FuncParaLst:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.funcParaLst == null) return -1;
          if (b.funcParaLst == null) return 1;
          return a.funcParaLst.localeCompare(b.funcParaLst);
        };
      case clsvCMFunctionEN.con_FuncComments:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.funcComments == null) return -1;
          if (b.funcComments == null) return 1;
          return a.funcComments.localeCompare(b.funcComments);
        };
      case clsvCMFunctionEN.con_FunctionSignature:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsvCMFunctionEN.con_ReturnType:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.returnType.localeCompare(b.returnType);
        };
      case clsvCMFunctionEN.con_IsKnownType:
        return (a: clsvCMFunctionEN) => {
          if (a.isKnownType == true) return 1;
          else return -1;
        };
      case clsvCMFunctionEN.con_ReturnTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsvCMFunctionEN.con_ClassNameLst:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.classNameLst == null) return -1;
          if (b.classNameLst == null) return 1;
          return a.classNameLst.localeCompare(b.classNameLst);
        };
      case clsvCMFunctionEN.con_UpdDate:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvCMFunctionEN.con_UpdUser:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvCMFunctionEN.con_Memo:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvCMFunctionEN.con_ParaNum:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return a.paraNum - b.paraNum;
        };
      case clsvCMFunctionEN.con_ClsName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (a.clsName == null) return -1;
          if (b.clsName == null) return 1;
          return a.clsName.localeCompare(b.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vCMFunction]中不存在!(in ${vCMFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvCMFunctionEN.con_CmFunctionId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.cmFunctionId.localeCompare(a.cmFunctionId);
        };
      case clsvCMFunctionEN.con_CmClassId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.cmClassId.localeCompare(a.cmClassId);
        };
      case clsvCMFunctionEN.con_ApplicationTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvCMFunctionEN.con_ProgLangTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvCMFunctionEN.con_ProgLangTypeName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsvCMFunctionEN.con_ProgLangTypeSimName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.progLangTypeSimName == null) return -1;
          if (a.progLangTypeSimName == null) return 1;
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      case clsvCMFunctionEN.con_NameSpace:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.nameSpace == null) return -1;
          if (a.nameSpace == null) return 1;
          return b.nameSpace.localeCompare(a.nameSpace);
        };
      case clsvCMFunctionEN.con_ProjectPath:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.projectPath == null) return -1;
          if (a.projectPath == null) return 1;
          return b.projectPath.localeCompare(a.projectPath);
        };
      case clsvCMFunctionEN.con_FilePath:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.filePath == null) return -1;
          if (a.filePath == null) return 1;
          return b.filePath.localeCompare(a.filePath);
        };
      case clsvCMFunctionEN.con_FileName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.fileName == null) return -1;
          if (a.fileName == null) return 1;
          return b.fileName.localeCompare(a.fileName);
        };
      case clsvCMFunctionEN.con_CodeTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsvCMFunctionEN.con_UserId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvCMFunctionEN.con_PrjId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvCMFunctionEN.con_PrjName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.prjName == null) return -1;
          if (a.prjName == null) return 1;
          return b.prjName.localeCompare(a.prjName);
        };
      case clsvCMFunctionEN.con_FunctionName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.functionName == null) return -1;
          if (a.functionName == null) return 1;
          return b.functionName.localeCompare(a.functionName);
        };
      case clsvCMFunctionEN.con_FuncContent:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.funcContent == null) return -1;
          if (a.funcContent == null) return 1;
          return b.funcContent.localeCompare(a.funcContent);
        };
      case clsvCMFunctionEN.con_KeyWords:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.keyWords == null) return -1;
          if (a.keyWords == null) return 1;
          return b.keyWords.localeCompare(a.keyWords);
        };
      case clsvCMFunctionEN.con_FuncParaLst:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.funcParaLst == null) return -1;
          if (a.funcParaLst == null) return 1;
          return b.funcParaLst.localeCompare(a.funcParaLst);
        };
      case clsvCMFunctionEN.con_FuncComments:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.funcComments == null) return -1;
          if (a.funcComments == null) return 1;
          return b.funcComments.localeCompare(a.funcComments);
        };
      case clsvCMFunctionEN.con_FunctionSignature:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsvCMFunctionEN.con_ReturnType:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.returnType.localeCompare(a.returnType);
        };
      case clsvCMFunctionEN.con_IsKnownType:
        return (b: clsvCMFunctionEN) => {
          if (b.isKnownType == true) return 1;
          else return -1;
        };
      case clsvCMFunctionEN.con_ReturnTypeId:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsvCMFunctionEN.con_ClassNameLst:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.classNameLst == null) return -1;
          if (a.classNameLst == null) return 1;
          return b.classNameLst.localeCompare(a.classNameLst);
        };
      case clsvCMFunctionEN.con_UpdDate:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvCMFunctionEN.con_UpdUser:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvCMFunctionEN.con_Memo:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvCMFunctionEN.con_ParaNum:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          return b.paraNum - a.paraNum;
        };
      case clsvCMFunctionEN.con_ClsName:
        return (a: clsvCMFunctionEN, b: clsvCMFunctionEN) => {
          if (b.clsName == null) return -1;
          if (a.clsName == null) return 1;
          return b.clsName.localeCompare(a.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vCMFunction]中不存在!(in ${vCMFunction_ConstructorName}.${strThisFuncName})`;
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
export async function vCMFunction_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvCMFunctionEN.con_CmFunctionId:
      return (obj: clsvCMFunctionEN) => {
        return obj.cmFunctionId === value;
      };
    case clsvCMFunctionEN.con_CmClassId:
      return (obj: clsvCMFunctionEN) => {
        return obj.cmClassId === value;
      };
    case clsvCMFunctionEN.con_ApplicationTypeId:
      return (obj: clsvCMFunctionEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvCMFunctionEN.con_ProgLangTypeId:
      return (obj: clsvCMFunctionEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvCMFunctionEN.con_ProgLangTypeName:
      return (obj: clsvCMFunctionEN) => {
        return obj.progLangTypeName === value;
      };
    case clsvCMFunctionEN.con_ProgLangTypeSimName:
      return (obj: clsvCMFunctionEN) => {
        return obj.progLangTypeSimName === value;
      };
    case clsvCMFunctionEN.con_NameSpace:
      return (obj: clsvCMFunctionEN) => {
        return obj.nameSpace === value;
      };
    case clsvCMFunctionEN.con_ProjectPath:
      return (obj: clsvCMFunctionEN) => {
        return obj.projectPath === value;
      };
    case clsvCMFunctionEN.con_FilePath:
      return (obj: clsvCMFunctionEN) => {
        return obj.filePath === value;
      };
    case clsvCMFunctionEN.con_FileName:
      return (obj: clsvCMFunctionEN) => {
        return obj.fileName === value;
      };
    case clsvCMFunctionEN.con_CodeTypeId:
      return (obj: clsvCMFunctionEN) => {
        return obj.codeTypeId === value;
      };
    case clsvCMFunctionEN.con_UserId:
      return (obj: clsvCMFunctionEN) => {
        return obj.userId === value;
      };
    case clsvCMFunctionEN.con_PrjId:
      return (obj: clsvCMFunctionEN) => {
        return obj.prjId === value;
      };
    case clsvCMFunctionEN.con_PrjName:
      return (obj: clsvCMFunctionEN) => {
        return obj.prjName === value;
      };
    case clsvCMFunctionEN.con_FunctionName:
      return (obj: clsvCMFunctionEN) => {
        return obj.functionName === value;
      };
    case clsvCMFunctionEN.con_FuncContent:
      return (obj: clsvCMFunctionEN) => {
        return obj.funcContent === value;
      };
    case clsvCMFunctionEN.con_KeyWords:
      return (obj: clsvCMFunctionEN) => {
        return obj.keyWords === value;
      };
    case clsvCMFunctionEN.con_FuncParaLst:
      return (obj: clsvCMFunctionEN) => {
        return obj.funcParaLst === value;
      };
    case clsvCMFunctionEN.con_FuncComments:
      return (obj: clsvCMFunctionEN) => {
        return obj.funcComments === value;
      };
    case clsvCMFunctionEN.con_FunctionSignature:
      return (obj: clsvCMFunctionEN) => {
        return obj.functionSignature === value;
      };
    case clsvCMFunctionEN.con_ReturnType:
      return (obj: clsvCMFunctionEN) => {
        return obj.returnType === value;
      };
    case clsvCMFunctionEN.con_IsKnownType:
      return (obj: clsvCMFunctionEN) => {
        return obj.isKnownType === value;
      };
    case clsvCMFunctionEN.con_ReturnTypeId:
      return (obj: clsvCMFunctionEN) => {
        return obj.returnTypeId === value;
      };
    case clsvCMFunctionEN.con_ClassNameLst:
      return (obj: clsvCMFunctionEN) => {
        return obj.classNameLst === value;
      };
    case clsvCMFunctionEN.con_UpdDate:
      return (obj: clsvCMFunctionEN) => {
        return obj.updDate === value;
      };
    case clsvCMFunctionEN.con_UpdUser:
      return (obj: clsvCMFunctionEN) => {
        return obj.updUser === value;
      };
    case clsvCMFunctionEN.con_Memo:
      return (obj: clsvCMFunctionEN) => {
        return obj.memo === value;
      };
    case clsvCMFunctionEN.con_ParaNum:
      return (obj: clsvCMFunctionEN) => {
        return obj.paraNum === value;
      };
    case clsvCMFunctionEN.con_ClsName:
      return (obj: clsvCMFunctionEN) => {
        return obj.clsName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vCMFunction]中不存在!(in ${vCMFunction_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[vCMFunction__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vCMFunction_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
export async function vCMFunction_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
export async function vCMFunction_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvCMFunctionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
      const objvCMFunction = vCMFunction_GetObjFromJsonObj(returnObj);
      return objvCMFunction;
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
export async function vCMFunction_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
          vCMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
 * @param arrCmFunctionId:关键字列表
 * @returns 对象列表
 **/
export async function vCMFunction_GetObjLstByCmFunctionIdLstAsync(
  arrCmFunctionId: Array<string>,
): Promise<Array<clsvCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstByCmFunctionIdLstAsync';
  const strAction = 'GetObjLstByCmFunctionIdLst';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmFunctionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vCMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByCmFunctionIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vCMFunction_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvCMFunctionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
          vCMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
export async function vCMFunction_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
          vCMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
export async function vCMFunction_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvCMFunctionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
          vCMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vCMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
export async function vCMFunction_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
 * @param strCmFunctionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vCMFunction_IsExistAsync(strCmFunctionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFunctionId,
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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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
export async function vCMFunction_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vCMFunction_Controller, strAction);

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
        vCMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vCMFunction_ConstructorName,
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

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vCMFunction_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function vCMFunction_BindDdl_CmFunctionIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CmFunctionIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CmFunctionIdInDivCache");
  const strCondition = `1=1`;
  const arrObjLstSel = await vCMFunction_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvCMFunctionEN.con_CmFunctionId,
    clsvCMFunctionEN.con_UserId,
    'vCM函数',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vCMFunction_GetJSONStrByObj(pobjvCMFunctionEN: clsvCMFunctionEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvCMFunctionEN);
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
export function vCMFunction_GetObjLstByJSONStr(strJSON: string): Array<clsvCMFunctionEN> {
  let arrvCMFunctionObjLst = new Array<clsvCMFunctionEN>();
  if (strJSON === '') {
    return arrvCMFunctionObjLst;
  }
  try {
    arrvCMFunctionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvCMFunctionObjLst;
  }
  return arrvCMFunctionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCMFunctionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vCMFunction_GetObjLstByJSONObjLst(
  arrvCMFunctionObjLstS: Array<clsvCMFunctionEN>,
): Array<clsvCMFunctionEN> {
  const arrvCMFunctionObjLst = new Array<clsvCMFunctionEN>();
  for (const objInFor of arrvCMFunctionObjLstS) {
    const obj1 = vCMFunction_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvCMFunctionObjLst.push(obj1);
  }
  return arrvCMFunctionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vCMFunction_GetObjByJSONStr(strJSON: string): clsvCMFunctionEN {
  let pobjvCMFunctionEN = new clsvCMFunctionEN();
  if (strJSON === '') {
    return pobjvCMFunctionEN;
  }
  try {
    pobjvCMFunctionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvCMFunctionEN;
  }
  return pobjvCMFunctionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vCMFunction_GetCombineCondition(objvCMFunctionCond: clsvCMFunctionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_CmFunctionId,
    ) == true
  ) {
    const strComparisonOpCmFunctionId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_CmFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_CmFunctionId,
      objvCMFunctionCond.cmFunctionId,
      strComparisonOpCmFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_CmClassId,
    ) == true
  ) {
    const strComparisonOpCmClassId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_CmClassId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_CmClassId,
      objvCMFunctionCond.cmClassId,
      strComparisonOpCmClassId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvCMFunctionEN.con_ApplicationTypeId,
      objvCMFunctionCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ProgLangTypeId,
      objvCMFunctionCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ProgLangTypeName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeName: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ProgLangTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ProgLangTypeName,
      objvCMFunctionCond.progLangTypeName,
      strComparisonOpProgLangTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ProgLangTypeSimName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeSimName: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ProgLangTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ProgLangTypeSimName,
      objvCMFunctionCond.progLangTypeSimName,
      strComparisonOpProgLangTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_NameSpace,
    ) == true
  ) {
    const strComparisonOpNameSpace: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_NameSpace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_NameSpace,
      objvCMFunctionCond.nameSpace,
      strComparisonOpNameSpace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ProjectPath,
    ) == true
  ) {
    const strComparisonOpProjectPath: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ProjectPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ProjectPath,
      objvCMFunctionCond.projectPath,
      strComparisonOpProjectPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_FilePath,
      objvCMFunctionCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_FileName,
    ) == true
  ) {
    const strComparisonOpFileName: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_FileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_FileName,
      objvCMFunctionCond.fileName,
      strComparisonOpFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_CodeTypeId,
      objvCMFunctionCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_UserId,
      objvCMFunctionCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_PrjId,
      objvCMFunctionCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_PrjName,
    ) == true
  ) {
    const strComparisonOpPrjName: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_PrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_PrjName,
      objvCMFunctionCond.prjName,
      strComparisonOpPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_FunctionName,
    ) == true
  ) {
    const strComparisonOpFunctionName: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_FunctionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_FunctionName,
      objvCMFunctionCond.functionName,
      strComparisonOpFunctionName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_KeyWords,
    ) == true
  ) {
    const strComparisonOpKeyWords: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_KeyWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_KeyWords,
      objvCMFunctionCond.keyWords,
      strComparisonOpKeyWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_FuncParaLst,
    ) == true
  ) {
    const strComparisonOpFuncParaLst: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_FuncParaLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_FuncParaLst,
      objvCMFunctionCond.funcParaLst,
      strComparisonOpFuncParaLst,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_FunctionSignature,
      objvCMFunctionCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ReturnType,
    ) == true
  ) {
    const strComparisonOpReturnType: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ReturnType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ReturnType,
      objvCMFunctionCond.returnType,
      strComparisonOpReturnType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_IsKnownType,
    ) == true
  ) {
    if (objvCMFunctionCond.isKnownType == true) {
      strWhereCond += Format(" And {0} = '1'", clsvCMFunctionEN.con_IsKnownType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvCMFunctionEN.con_IsKnownType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ReturnTypeId,
      objvCMFunctionCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ClassNameLst,
    ) == true
  ) {
    const strComparisonOpClassNameLst: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ClassNameLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ClassNameLst,
      objvCMFunctionCond.classNameLst,
      strComparisonOpClassNameLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_UpdDate,
      objvCMFunctionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_UpdUser,
      objvCMFunctionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_Memo,
      objvCMFunctionCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ParaNum,
    ) == true
  ) {
    const strComparisonOpParaNum: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ParaNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvCMFunctionEN.con_ParaNum,
      objvCMFunctionCond.paraNum,
      strComparisonOpParaNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvCMFunctionCond.dicFldComparisonOp,
      clsvCMFunctionEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objvCMFunctionCond.dicFldComparisonOp[clsvCMFunctionEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvCMFunctionEN.con_ClsName,
      objvCMFunctionCond.clsName,
      strComparisonOpClsName,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCMFunctionENS:源对象
 * @param objvCMFunctionENT:目标对象
 */
export function vCMFunction_GetObjFromJsonObj(
  objvCMFunctionENS: clsvCMFunctionEN,
): clsvCMFunctionEN {
  const objvCMFunctionENT: clsvCMFunctionEN = new clsvCMFunctionEN();
  ObjectAssign(objvCMFunctionENT, objvCMFunctionENS);
  return objvCMFunctionENT;
}
