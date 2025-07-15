/**
 * 类名:clsCodeTypeWApi
 * 表名:CodeType(00050203)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:39
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
 * 代码类型(CodeType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsCodeTypeENEx } from '@/ts/L0Entity/GeneCode/clsCodeTypeENEx';
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const codeType_Controller = 'CodeTypeApi';
export const codeType_ConstructorName = 'codeType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCodeTypeId:关键字
 * @returns 对象
 **/
export async function CodeType_GetObjByCodeTypeIdAsync(
  strCodeTypeId: string,
): Promise<clsCodeTypeEN | null> {
  const strThisFuncName = 'GetObjByCodeTypeIdAsync';

  if (IsNullOrEmpty(strCodeTypeId) == true) {
    const strMsg = Format(
      '参数:[strCodeTypeId]不能为空!(In clsCodeTypeWApi.GetObjByCodeTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeTypeId]的长度:[{0}]不正确!(clsCodeTypeWApi.GetObjByCodeTypeIdAsync)',
      strCodeTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCodeTypeId';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
      const objCodeType = CodeType_GetObjFromJsonObj(returnObj);
      return objCodeType;
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByCodeTypeIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByCodeTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CodeType_SortFunDefa(a: clsCodeTypeEN, b: clsCodeTypeEN): number {
  return a.codeTypeId.localeCompare(b.codeTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CodeType_SortFunDefa2Fld(a: clsCodeTypeEN, b: clsCodeTypeEN): number {
  if (a.codeTypeName == b.codeTypeName) return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
  else return a.codeTypeName.localeCompare(b.codeTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CodeType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCodeTypeEN.con_CodeTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsCodeTypeEN.con_CodeTypeName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsCodeTypeEN.con_CodeTypeSimName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsCodeTypeEN.con_CodeTypeENName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.codeTypeENName == null) return -1;
          if (b.codeTypeENName == null) return 1;
          return a.codeTypeENName.localeCompare(b.codeTypeENName);
        };
      case clsCodeTypeEN.con_GroupName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.groupName == null) return -1;
          if (b.groupName == null) return 1;
          return a.groupName.localeCompare(b.groupName);
        };
      case clsCodeTypeEN.con_ProgLangTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsCodeTypeEN.con_RegionTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsCodeTypeEN.con_Prefix:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.prefix == null) return -1;
          if (b.prefix == null) return 1;
          return a.prefix.localeCompare(b.prefix);
        };
      case clsCodeTypeEN.con_DependsOn:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.dependsOn == null) return -1;
          if (b.dependsOn == null) return 1;
          return a.dependsOn.localeCompare(b.dependsOn);
        };
      case clsCodeTypeEN.con_FrontOrBack:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.frontOrBack == null) return -1;
          if (b.frontOrBack == null) return 1;
          return a.frontOrBack.localeCompare(b.frontOrBack);
        };
      case clsCodeTypeEN.con_SqlDsTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsCodeTypeEN.con_ClassNameFormat:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.classNameFormat == null) return -1;
          if (b.classNameFormat == null) return 1;
          return a.classNameFormat.localeCompare(b.classNameFormat);
        };
      case clsCodeTypeEN.con_FileNameFormat:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.fileNameFormat == null) return -1;
          if (b.fileNameFormat == null) return 1;
          return a.fileNameFormat.localeCompare(b.fileNameFormat);
        };
      case clsCodeTypeEN.con_ClassNamePattern:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.classNamePattern == null) return -1;
          if (b.classNamePattern == null) return 1;
          return a.classNamePattern.localeCompare(b.classNamePattern);
        };
      case clsCodeTypeEN.con_IsCSharp:
        return (a: clsCodeTypeEN) => {
          if (a.isCSharp == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsJava:
        return (a: clsCodeTypeEN) => {
          if (a.isJava == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsJavaScript:
        return (a: clsCodeTypeEN) => {
          if (a.isJavaScript == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsTypeScript:
        return (a: clsCodeTypeEN) => {
          if (a.isTypeScript == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsSilverLight:
        return (a: clsCodeTypeEN) => {
          if (a.isSilverLight == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsSwift:
        return (a: clsCodeTypeEN) => {
          if (a.isSwift == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsVB:
        return (a: clsCodeTypeEN) => {
          if (a.isVB == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsTableFldConst:
        return (a: clsCodeTypeEN) => {
          if (a.isTableFldConst == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsPubApp4WinWeb:
        return (a: clsCodeTypeEN) => {
          if (a.isPubApp4WinWeb == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsWeb:
        return (a: clsCodeTypeEN) => {
          if (a.isWeb == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsAspMvc:
        return (a: clsCodeTypeEN) => {
          if (a.isAspMvc == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsWebSrvAccess:
        return (a: clsCodeTypeEN) => {
          if (a.isWebSrvAccess == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsWin:
        return (a: clsCodeTypeEN) => {
          if (a.isWin == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsMobileApp:
        return (a: clsCodeTypeEN) => {
          if (a.isMobileApp == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsExtend:
        return (a: clsCodeTypeEN) => {
          if (a.isExtend == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_OrderNum:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCodeTypeEN.con_WinOrWeb:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.winOrWeb == null) return -1;
          if (b.winOrWeb == null) return 1;
          return a.winOrWeb.localeCompare(b.winOrWeb);
        };
      case clsCodeTypeEN.con_IsDirByTabName:
        return (a: clsCodeTypeEN) => {
          if (a.isDirByTabName == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsDefaultOverride:
        return (a: clsCodeTypeEN) => {
          if (a.isDefaultOverride == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_InUse:
        return (a: clsCodeTypeEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsAutoParseFile:
        return (a: clsCodeTypeEN) => {
          if (a.isAutoParseFile == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_UpdDate:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCodeTypeEN.con_UpdUser:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCodeTypeEN.con_Memo:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodeType]中不存在!(in ${codeType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCodeTypeEN.con_CodeTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsCodeTypeEN.con_CodeTypeName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsCodeTypeEN.con_CodeTypeSimName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsCodeTypeEN.con_CodeTypeENName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.codeTypeENName == null) return -1;
          if (a.codeTypeENName == null) return 1;
          return b.codeTypeENName.localeCompare(a.codeTypeENName);
        };
      case clsCodeTypeEN.con_GroupName:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.groupName == null) return -1;
          if (a.groupName == null) return 1;
          return b.groupName.localeCompare(a.groupName);
        };
      case clsCodeTypeEN.con_ProgLangTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsCodeTypeEN.con_RegionTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsCodeTypeEN.con_Prefix:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.prefix == null) return -1;
          if (a.prefix == null) return 1;
          return b.prefix.localeCompare(a.prefix);
        };
      case clsCodeTypeEN.con_DependsOn:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.dependsOn == null) return -1;
          if (a.dependsOn == null) return 1;
          return b.dependsOn.localeCompare(a.dependsOn);
        };
      case clsCodeTypeEN.con_FrontOrBack:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.frontOrBack == null) return -1;
          if (a.frontOrBack == null) return 1;
          return b.frontOrBack.localeCompare(a.frontOrBack);
        };
      case clsCodeTypeEN.con_SqlDsTypeId:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsCodeTypeEN.con_ClassNameFormat:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.classNameFormat == null) return -1;
          if (a.classNameFormat == null) return 1;
          return b.classNameFormat.localeCompare(a.classNameFormat);
        };
      case clsCodeTypeEN.con_FileNameFormat:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.fileNameFormat == null) return -1;
          if (a.fileNameFormat == null) return 1;
          return b.fileNameFormat.localeCompare(a.fileNameFormat);
        };
      case clsCodeTypeEN.con_ClassNamePattern:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.classNamePattern == null) return -1;
          if (a.classNamePattern == null) return 1;
          return b.classNamePattern.localeCompare(a.classNamePattern);
        };
      case clsCodeTypeEN.con_IsCSharp:
        return (b: clsCodeTypeEN) => {
          if (b.isCSharp == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsJava:
        return (b: clsCodeTypeEN) => {
          if (b.isJava == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsJavaScript:
        return (b: clsCodeTypeEN) => {
          if (b.isJavaScript == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsTypeScript:
        return (b: clsCodeTypeEN) => {
          if (b.isTypeScript == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsSilverLight:
        return (b: clsCodeTypeEN) => {
          if (b.isSilverLight == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsSwift:
        return (b: clsCodeTypeEN) => {
          if (b.isSwift == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsVB:
        return (b: clsCodeTypeEN) => {
          if (b.isVB == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsTableFldConst:
        return (b: clsCodeTypeEN) => {
          if (b.isTableFldConst == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsPubApp4WinWeb:
        return (b: clsCodeTypeEN) => {
          if (b.isPubApp4WinWeb == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsWeb:
        return (b: clsCodeTypeEN) => {
          if (b.isWeb == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsAspMvc:
        return (b: clsCodeTypeEN) => {
          if (b.isAspMvc == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsWebSrvAccess:
        return (b: clsCodeTypeEN) => {
          if (b.isWebSrvAccess == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsWin:
        return (b: clsCodeTypeEN) => {
          if (b.isWin == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsMobileApp:
        return (b: clsCodeTypeEN) => {
          if (b.isMobileApp == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsExtend:
        return (b: clsCodeTypeEN) => {
          if (b.isExtend == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_OrderNum:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCodeTypeEN.con_WinOrWeb:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.winOrWeb == null) return -1;
          if (a.winOrWeb == null) return 1;
          return b.winOrWeb.localeCompare(a.winOrWeb);
        };
      case clsCodeTypeEN.con_IsDirByTabName:
        return (b: clsCodeTypeEN) => {
          if (b.isDirByTabName == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsDefaultOverride:
        return (b: clsCodeTypeEN) => {
          if (b.isDefaultOverride == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_InUse:
        return (b: clsCodeTypeEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_IsAutoParseFile:
        return (b: clsCodeTypeEN) => {
          if (b.isAutoParseFile == true) return 1;
          else return -1;
        };
      case clsCodeTypeEN.con_UpdDate:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCodeTypeEN.con_UpdUser:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCodeTypeEN.con_Memo:
        return (a: clsCodeTypeEN, b: clsCodeTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodeType]中不存在!(in ${codeType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByCodeTypeIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CodeType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCodeTypeEN.con_CodeTypeId:
      return (obj: clsCodeTypeEN) => {
        return obj.codeTypeId === value;
      };
    case clsCodeTypeEN.con_CodeTypeName:
      return (obj: clsCodeTypeEN) => {
        return obj.codeTypeName === value;
      };
    case clsCodeTypeEN.con_CodeTypeSimName:
      return (obj: clsCodeTypeEN) => {
        return obj.codeTypeSimName === value;
      };
    case clsCodeTypeEN.con_CodeTypeENName:
      return (obj: clsCodeTypeEN) => {
        return obj.codeTypeENName === value;
      };
    case clsCodeTypeEN.con_GroupName:
      return (obj: clsCodeTypeEN) => {
        return obj.groupName === value;
      };
    case clsCodeTypeEN.con_ProgLangTypeId:
      return (obj: clsCodeTypeEN) => {
        return obj.progLangTypeId === value;
      };
    case clsCodeTypeEN.con_RegionTypeId:
      return (obj: clsCodeTypeEN) => {
        return obj.regionTypeId === value;
      };
    case clsCodeTypeEN.con_Prefix:
      return (obj: clsCodeTypeEN) => {
        return obj.prefix === value;
      };
    case clsCodeTypeEN.con_DependsOn:
      return (obj: clsCodeTypeEN) => {
        return obj.dependsOn === value;
      };
    case clsCodeTypeEN.con_FrontOrBack:
      return (obj: clsCodeTypeEN) => {
        return obj.frontOrBack === value;
      };
    case clsCodeTypeEN.con_SqlDsTypeId:
      return (obj: clsCodeTypeEN) => {
        return obj.sqlDsTypeId === value;
      };
    case clsCodeTypeEN.con_ClassNameFormat:
      return (obj: clsCodeTypeEN) => {
        return obj.classNameFormat === value;
      };
    case clsCodeTypeEN.con_FileNameFormat:
      return (obj: clsCodeTypeEN) => {
        return obj.fileNameFormat === value;
      };
    case clsCodeTypeEN.con_ClassNamePattern:
      return (obj: clsCodeTypeEN) => {
        return obj.classNamePattern === value;
      };
    case clsCodeTypeEN.con_IsCSharp:
      return (obj: clsCodeTypeEN) => {
        return obj.isCSharp === value;
      };
    case clsCodeTypeEN.con_IsJava:
      return (obj: clsCodeTypeEN) => {
        return obj.isJava === value;
      };
    case clsCodeTypeEN.con_IsJavaScript:
      return (obj: clsCodeTypeEN) => {
        return obj.isJavaScript === value;
      };
    case clsCodeTypeEN.con_IsTypeScript:
      return (obj: clsCodeTypeEN) => {
        return obj.isTypeScript === value;
      };
    case clsCodeTypeEN.con_IsSilverLight:
      return (obj: clsCodeTypeEN) => {
        return obj.isSilverLight === value;
      };
    case clsCodeTypeEN.con_IsSwift:
      return (obj: clsCodeTypeEN) => {
        return obj.isSwift === value;
      };
    case clsCodeTypeEN.con_IsVB:
      return (obj: clsCodeTypeEN) => {
        return obj.isVB === value;
      };
    case clsCodeTypeEN.con_IsTableFldConst:
      return (obj: clsCodeTypeEN) => {
        return obj.isTableFldConst === value;
      };
    case clsCodeTypeEN.con_IsPubApp4WinWeb:
      return (obj: clsCodeTypeEN) => {
        return obj.isPubApp4WinWeb === value;
      };
    case clsCodeTypeEN.con_IsWeb:
      return (obj: clsCodeTypeEN) => {
        return obj.isWeb === value;
      };
    case clsCodeTypeEN.con_IsAspMvc:
      return (obj: clsCodeTypeEN) => {
        return obj.isAspMvc === value;
      };
    case clsCodeTypeEN.con_IsWebSrvAccess:
      return (obj: clsCodeTypeEN) => {
        return obj.isWebSrvAccess === value;
      };
    case clsCodeTypeEN.con_IsWin:
      return (obj: clsCodeTypeEN) => {
        return obj.isWin === value;
      };
    case clsCodeTypeEN.con_IsMobileApp:
      return (obj: clsCodeTypeEN) => {
        return obj.isMobileApp === value;
      };
    case clsCodeTypeEN.con_IsExtend:
      return (obj: clsCodeTypeEN) => {
        return obj.isExtend === value;
      };
    case clsCodeTypeEN.con_OrderNum:
      return (obj: clsCodeTypeEN) => {
        return obj.orderNum === value;
      };
    case clsCodeTypeEN.con_WinOrWeb:
      return (obj: clsCodeTypeEN) => {
        return obj.winOrWeb === value;
      };
    case clsCodeTypeEN.con_IsDirByTabName:
      return (obj: clsCodeTypeEN) => {
        return obj.isDirByTabName === value;
      };
    case clsCodeTypeEN.con_IsDefaultOverride:
      return (obj: clsCodeTypeEN) => {
        return obj.isDefaultOverride === value;
      };
    case clsCodeTypeEN.con_InUse:
      return (obj: clsCodeTypeEN) => {
        return obj.inUse === value;
      };
    case clsCodeTypeEN.con_IsAutoParseFile:
      return (obj: clsCodeTypeEN) => {
        return obj.isAutoParseFile === value;
      };
    case clsCodeTypeEN.con_UpdDate:
      return (obj: clsCodeTypeEN) => {
        return obj.updDate === value;
      };
    case clsCodeTypeEN.con_UpdUser:
      return (obj: clsCodeTypeEN) => {
        return obj.updUser === value;
      };
    case clsCodeTypeEN.con_Memo:
      return (obj: clsCodeTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CodeType]中不存在!(in ${codeType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[CodeType__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodeType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCodeTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
      const objCodeType = CodeType_GetObjFromJsonObj(returnObj);
      return objCodeType;
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCodeTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
          codeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param arrCodeTypeId:关键字列表
 * @returns 对象列表
 **/
export async function CodeType_GetObjLstByCodeTypeIdLstAsync(
  arrCodeTypeId: Array<string>,
): Promise<Array<clsCodeTypeEN>> {
  const strThisFuncName = 'GetObjLstByCodeTypeIdLstAsync';
  const strAction = 'GetObjLstByCodeTypeIdLst';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
          codeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByCodeTypeIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function CodeType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCodeTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
          codeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCodeTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
          codeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCodeTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCodeTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
          codeType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeType_GetObjLstByJSONObjLst(returnObjLst);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param strCodeTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function CodeType_DelRecordAsync(strCodeTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(codeType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCodeTypeId);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param arrCodeTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CodeType_DelCodeTypesAsync(arrCodeTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelCodeTypesAsync';
  const strAction = 'DelCodeTypes';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objCodeTypeENS:源对象
 * @returns 目标对象=>clsCodeTypeEN:objCodeTypeENT
 **/
export function CodeType_CopyToEx(objCodeTypeENS: clsCodeTypeEN): clsCodeTypeENEx {
  const strThisFuncName = CodeType_CopyToEx.name;
  const objCodeTypeENT = new clsCodeTypeENEx();
  try {
    ObjectAssign(objCodeTypeENT, objCodeTypeENS);
    return objCodeTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      codeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCodeTypeENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CodeType_FuncMapByFldName(strFldName: string, objCodeTypeEx: clsCodeTypeENEx) {
  const strThisFuncName = CodeType_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCodeTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCodeTypeENEx.con_SqlDsTypeName:
      return CodeType_FuncMapSqlDsTypeName(objCodeTypeEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CodeType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCodeTypeENEx.con_ClassNameFormatEx:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          if (a.classNameFormatEx === null && b.classNameFormatEx === null) return 0;
          if (a.classNameFormatEx === null) return -1;
          if (b.classNameFormatEx === null) return 1;
          return a.classNameFormatEx.localeCompare(b.classNameFormatEx);
        };
      case clsCodeTypeENEx.con_SqlDsTypeName:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsCodeTypeENEx.con_FuncCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return a.funcCount - b.funcCount;
        };
      case clsCodeTypeENEx.con_AppCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return a.appCount - b.appCount;
        };
      default:
        return CodeType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCodeTypeENEx.con_ClassNameFormatEx:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          if (a.classNameFormatEx === null && b.classNameFormatEx === null) return 0;
          if (a.classNameFormatEx === null) return 1;
          if (b.classNameFormatEx === null) return -1;
          return b.classNameFormatEx.localeCompare(a.classNameFormatEx);
        };
      case clsCodeTypeENEx.con_SqlDsTypeName:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsCodeTypeENEx.con_FuncCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return b.funcCount - a.funcCount;
        };
      case clsCodeTypeENEx.con_AppCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return b.appCount - a.appCount;
        };
      default:
        return CodeType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCodeTypeS:源对象
 **/
export async function CodeType_FuncMapSqlDsTypeName(objCodeType: clsCodeTypeENEx) {
  const strThisFuncName = CodeType_FuncMapSqlDsTypeName.name;
  try {
    if (IsNullOrEmpty(objCodeType.sqlDsTypeName) == true) {
      const SQLDSTypeSqlDsTypeId = objCodeType.sqlDsTypeId;
      const SQLDSTypeSqlDsTypeName = await SQLDSType_func(
        clsSQLDSTypeEN.con_SqlDsTypeId,
        clsSQLDSTypeEN.con_SqlDsTypeName,
        SQLDSTypeSqlDsTypeId,
      );
      objCodeType.sqlDsTypeName = SQLDSTypeSqlDsTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001323)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      codeType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function CodeType_DelCodeTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCodeTypesByCondAsync';
  const strAction = 'DelCodeTypesByCond';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param objCodeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodeType_AddNewRecordAsync(objCodeTypeEN: clsCodeTypeEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCodeTypeEN);
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeTypeEN, config);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param objCodeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodeType_AddNewRecordWithMaxIdAsync(
  objCodeTypeEN: clsCodeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeTypeEN, config);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function CodeType_AddNewObjSave(
  objCodeTypeEN: clsCodeTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CodeType_CheckPropertyNew(objCodeTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${codeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CodeType_CheckUniCond4Add(objCodeTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await CodeType_AddNewRecordWithMaxIdAsync(objCodeTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //CodeType_ReFreshCache();
    } else {
      const strInfo = `添加[代码类型(CodeType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${codeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function CodeType_CheckUniCond4Add(objCodeTypeEN: clsCodeTypeEN): Promise<boolean> {
  const strUniquenessCondition = CodeType_GetUniCondStr(objCodeTypeEN);
  const bolIsExistCondition = await CodeType_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function CodeType_CheckUniCond4Update(objCodeTypeEN: clsCodeTypeEN): Promise<boolean> {
  const strUniquenessCondition = CodeType_GetUniCondStr4Update(objCodeTypeEN);
  const bolIsExistCondition = await CodeType_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function CodeType_UpdateObjSave(objCodeTypeEN: clsCodeTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCodeTypeEN.sfUpdFldSetStr = objCodeTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objCodeTypeEN.codeTypeId == '' || objCodeTypeEN.codeTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CodeType_CheckProperty4Update(objCodeTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${codeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CodeType_CheckUniCond4Update(objCodeTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await CodeType_UpdateRecordAsync(objCodeTypeEN);
    if (returnBool == true) {
      //CodeType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${codeType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCodeTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CodeType_AddNewRecordWithReturnKeyAsync(
  objCodeTypeEN: clsCodeTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeTypeEN, config);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param objCodeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CodeType_UpdateRecordAsync(objCodeTypeEN: clsCodeTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCodeTypeEN.sfUpdFldSetStr === undefined ||
    objCodeTypeEN.sfUpdFldSetStr === null ||
    objCodeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeTypeEN.codeTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeTypeEN, config);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objCodeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CodeType_EditRecordExAsync(objCodeTypeEN: clsCodeTypeEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCodeTypeEN.sfUpdFldSetStr === undefined ||
    objCodeTypeEN.sfUpdFldSetStr === null ||
    objCodeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeTypeEN.codeTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeTypeEN, config);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param objCodeTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodeType_UpdateWithConditionAsync(
  objCodeTypeEN: clsCodeTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCodeTypeEN.sfUpdFldSetStr === undefined ||
    objCodeTypeEN.sfUpdFldSetStr === null ||
    objCodeTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeTypeEN.codeTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);
  objCodeTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeTypeEN, config);
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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * @param strCodeTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CodeType_IsExistAsync(strCodeTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function CodeType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export async function CodeType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(codeType_Controller, strAction);

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
        codeType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeType_ConstructorName,
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
export function CodeType_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strProgLangTypeId:
*/
export async function CodeType_BindDdl_CodeTypeIdByProgLangTypeIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strProgLangTypeId: string,
) {
  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空！(In clsCodeTypeWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确！(clsCodeTypeWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
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
  const strCondition = `progLangTypeId = '${strProgLangTypeId}'`;
  const arrObjLstSel = await CodeType_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCodeTypeEN.con_CodeTypeId,
    clsCodeTypeEN.con_CodeTypeName,
    '代码类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strProgLangTypeId:
*/
export async function CodeType_GetArrCodeTypeByProgLangTypeId(strProgLangTypeId: string) {
  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空！(In clsCodeTypeWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确！(clsCodeTypeWApi.BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CodeTypeIdByProgLangTypeIdInDivCache");
  const arrCodeType = new Array<clsCodeTypeEN>();
  const strCondition = `progLangTypeId = '${strProgLangTypeId}'`;
  const arrObjLstSel = await CodeType_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsCodeTypeEN();
  obj0.codeTypeId = '0';
  obj0.codeTypeName = '选代码类型...';
  arrCodeType.push(obj0);
  arrObjLstSel.forEach((x) => arrCodeType.push(x));
  return arrCodeType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodeType_CheckPropertyNew(pobjCodeTypeEN: clsCodeTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCodeTypeEN.codeTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[代码类型名]不能为空(In 代码类型)!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.codeTypeSimName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[简称]不能为空(In 代码类型)!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.progLangTypeId) === true ||
    pobjCodeTypeEN.progLangTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[编程语言类型Id]不能为空(In 代码类型)!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.regionTypeId) === true ||
    pobjCodeTypeEN.regionTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[区域类型Id]不能为空(In 代码类型)!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.sqlDsTypeId) === true ||
    pobjCodeTypeEN.sqlDsTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[数据源类型Id]不能为空(In 代码类型)!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjCodeTypeEN.isDefaultOverride ||
    (pobjCodeTypeEN.isDefaultOverride != null && pobjCodeTypeEN.isDefaultOverride.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否默认覆盖]不能为空(In 代码类型)!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeId}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeName) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型名(codeTypeName)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeName}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeSimName) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeSimName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[简称(codeTypeSimName)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeSimName}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeENName) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型英文名(codeTypeENName)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeENName}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.groupName) == false &&
    GetStrLen(pobjCodeTypeEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[组名(groupName)]的长度不能超过30(In 代码类型(CodeType))!值:${pobjCodeTypeEN.groupName}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.progLangTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 代码类型(CodeType))!值:${pobjCodeTypeEN.progLangTypeId}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.regionTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 代码类型(CodeType))!值:${pobjCodeTypeEN.regionTypeId}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.prefix) == false && GetStrLen(pobjCodeTypeEN.prefix) > 10) {
    throw new Error(
      `(errid:Watl000413)字段[前缀(prefix)]的长度不能超过10(In 代码类型(CodeType))!值:${pobjCodeTypeEN.prefix}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.dependsOn) == false &&
    GetStrLen(pobjCodeTypeEN.dependsOn) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[依赖于(dependsOn)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.dependsOn}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.frontOrBack) == false &&
    GetStrLen(pobjCodeTypeEN.frontOrBack) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[前台Or后台(frontOrBack)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.frontOrBack}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.sqlDsTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 代码类型(CodeType))!值:${pobjCodeTypeEN.sqlDsTypeId}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNameFormat) == false &&
    GetStrLen(pobjCodeTypeEN.classNameFormat) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[类名格式(classNameFormat)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.classNameFormat}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.fileNameFormat) == false &&
    GetStrLen(pobjCodeTypeEN.fileNameFormat) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文件名格式(fileNameFormat)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.fileNameFormat}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNamePattern) == false &&
    GetStrLen(pobjCodeTypeEN.classNamePattern) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[类名模式(classNamePattern)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.classNamePattern}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.winOrWeb) == false && GetStrLen(pobjCodeTypeEN.winOrWeb) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[WinOrWeb(winOrWeb)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.winOrWeb}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.updDate) == false && GetStrLen(pobjCodeTypeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 代码类型(CodeType))!值:${pobjCodeTypeEN.updDate}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.updUser) == false && GetStrLen(pobjCodeTypeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 代码类型(CodeType))!值:${pobjCodeTypeEN.updUser}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.memo) == false && GetStrLen(pobjCodeTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 代码类型(CodeType))!值:${pobjCodeTypeEN.memo}(clsCodeTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeId) == false &&
    undefined !== pobjCodeTypeEN.codeTypeId &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjCodeTypeEN.codeTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeName) == false &&
    undefined !== pobjCodeTypeEN.codeTypeName &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型名(codeTypeName)]的值:[${pobjCodeTypeEN.codeTypeName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeSimName) == false &&
    undefined !== pobjCodeTypeEN.codeTypeSimName &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[简称(codeTypeSimName)]的值:[${pobjCodeTypeEN.codeTypeSimName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeENName) == false &&
    undefined !== pobjCodeTypeEN.codeTypeENName &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型英文名(codeTypeENName)]的值:[${pobjCodeTypeEN.codeTypeENName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.groupName) == false &&
    undefined !== pobjCodeTypeEN.groupName &&
    tzDataType.isString(pobjCodeTypeEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[组名(groupName)]的值:[${pobjCodeTypeEN.groupName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.progLangTypeId) == false &&
    undefined !== pobjCodeTypeEN.progLangTypeId &&
    tzDataType.isString(pobjCodeTypeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjCodeTypeEN.progLangTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.regionTypeId) == false &&
    undefined !== pobjCodeTypeEN.regionTypeId &&
    tzDataType.isString(pobjCodeTypeEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型Id(regionTypeId)]的值:[${pobjCodeTypeEN.regionTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.prefix) == false &&
    undefined !== pobjCodeTypeEN.prefix &&
    tzDataType.isString(pobjCodeTypeEN.prefix) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[前缀(prefix)]的值:[${pobjCodeTypeEN.prefix}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.dependsOn) == false &&
    undefined !== pobjCodeTypeEN.dependsOn &&
    tzDataType.isString(pobjCodeTypeEN.dependsOn) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[依赖于(dependsOn)]的值:[${pobjCodeTypeEN.dependsOn}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.frontOrBack) == false &&
    undefined !== pobjCodeTypeEN.frontOrBack &&
    tzDataType.isString(pobjCodeTypeEN.frontOrBack) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[前台Or后台(frontOrBack)]的值:[${pobjCodeTypeEN.frontOrBack}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.sqlDsTypeId) == false &&
    undefined !== pobjCodeTypeEN.sqlDsTypeId &&
    tzDataType.isString(pobjCodeTypeEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjCodeTypeEN.sqlDsTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNameFormat) == false &&
    undefined !== pobjCodeTypeEN.classNameFormat &&
    tzDataType.isString(pobjCodeTypeEN.classNameFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[类名格式(classNameFormat)]的值:[${pobjCodeTypeEN.classNameFormat}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.fileNameFormat) == false &&
    undefined !== pobjCodeTypeEN.fileNameFormat &&
    tzDataType.isString(pobjCodeTypeEN.fileNameFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文件名格式(fileNameFormat)]的值:[${pobjCodeTypeEN.fileNameFormat}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNamePattern) == false &&
    undefined !== pobjCodeTypeEN.classNamePattern &&
    tzDataType.isString(pobjCodeTypeEN.classNamePattern) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[类名模式(classNamePattern)]的值:[${pobjCodeTypeEN.classNamePattern}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isCSharp &&
    undefined !== pobjCodeTypeEN.isCSharp &&
    tzDataType.isBoolean(pobjCodeTypeEN.isCSharp) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否CSharp语言(isCSharp)]的值:[${pobjCodeTypeEN.isCSharp}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isJava &&
    undefined !== pobjCodeTypeEN.isJava &&
    tzDataType.isBoolean(pobjCodeTypeEN.isJava) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否Java语言(isJava)]的值:[${pobjCodeTypeEN.isJava}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isJavaScript &&
    undefined !== pobjCodeTypeEN.isJavaScript &&
    tzDataType.isBoolean(pobjCodeTypeEN.isJavaScript) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否JavaScript语言(isJavaScript)]的值:[${pobjCodeTypeEN.isJavaScript}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isTypeScript &&
    undefined !== pobjCodeTypeEN.isTypeScript &&
    tzDataType.isBoolean(pobjCodeTypeEN.isTypeScript) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否TypeScript语言(isTypeScript)]的值:[${pobjCodeTypeEN.isTypeScript}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isSilverLight &&
    undefined !== pobjCodeTypeEN.isSilverLight &&
    tzDataType.isBoolean(pobjCodeTypeEN.isSilverLight) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否SilverLight语言(isSilverLight)]的值:[${pobjCodeTypeEN.isSilverLight}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isSwift &&
    undefined !== pobjCodeTypeEN.isSwift &&
    tzDataType.isBoolean(pobjCodeTypeEN.isSwift) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否Swift语言(isSwift)]的值:[${pobjCodeTypeEN.isSwift}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isVB &&
    undefined !== pobjCodeTypeEN.isVB &&
    tzDataType.isBoolean(pobjCodeTypeEN.isVB) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsVB语言(isVB)]的值:[${pobjCodeTypeEN.isVB}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isTableFldConst &&
    undefined !== pobjCodeTypeEN.isTableFldConst &&
    tzDataType.isBoolean(pobjCodeTypeEN.isTableFldConst) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsTableFldConst(isTableFldConst)]的值:[${pobjCodeTypeEN.isTableFldConst}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isPubApp4WinWeb &&
    undefined !== pobjCodeTypeEN.isPubApp4WinWeb &&
    tzDataType.isBoolean(pobjCodeTypeEN.isPubApp4WinWeb) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsPubApp4WinWeb(isPubApp4WinWeb)]的值:[${pobjCodeTypeEN.isPubApp4WinWeb}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isWeb &&
    undefined !== pobjCodeTypeEN.isWeb &&
    tzDataType.isBoolean(pobjCodeTypeEN.isWeb) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否Web应用(isWeb)]的值:[${pobjCodeTypeEN.isWeb}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isAspMvc &&
    undefined !== pobjCodeTypeEN.isAspMvc &&
    tzDataType.isBoolean(pobjCodeTypeEN.isAspMvc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否AspMvc(isAspMvc)]的值:[${pobjCodeTypeEN.isAspMvc}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isWebSrvAccess &&
    undefined !== pobjCodeTypeEN.isWebSrvAccess &&
    tzDataType.isBoolean(pobjCodeTypeEN.isWebSrvAccess) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsWebSrvAccess(isWebSrvAccess)]的值:[${pobjCodeTypeEN.isWebSrvAccess}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isWin &&
    undefined !== pobjCodeTypeEN.isWin &&
    tzDataType.isBoolean(pobjCodeTypeEN.isWin) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否Win应用(isWin)]的值:[${pobjCodeTypeEN.isWin}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isMobileApp &&
    undefined !== pobjCodeTypeEN.isMobileApp &&
    tzDataType.isBoolean(pobjCodeTypeEN.isMobileApp) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否移动终端应用(isMobileApp)]的值:[${pobjCodeTypeEN.isMobileApp}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isExtend &&
    undefined !== pobjCodeTypeEN.isExtend &&
    tzDataType.isBoolean(pobjCodeTypeEN.isExtend) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否扩展类(isExtend)]的值:[${pobjCodeTypeEN.isExtend}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.orderNum &&
    undefined !== pobjCodeTypeEN.orderNum &&
    tzDataType.isNumber(pobjCodeTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjCodeTypeEN.orderNum}], 非法,应该为数值型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.winOrWeb) == false &&
    undefined !== pobjCodeTypeEN.winOrWeb &&
    tzDataType.isString(pobjCodeTypeEN.winOrWeb) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[WinOrWeb(winOrWeb)]的值:[${pobjCodeTypeEN.winOrWeb}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isDirByTabName &&
    undefined !== pobjCodeTypeEN.isDirByTabName &&
    tzDataType.isBoolean(pobjCodeTypeEN.isDirByTabName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否用表名作为路径(isDirByTabName)]的值:[${pobjCodeTypeEN.isDirByTabName}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isDefaultOverride &&
    undefined !== pobjCodeTypeEN.isDefaultOverride &&
    tzDataType.isBoolean(pobjCodeTypeEN.isDefaultOverride) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否默认覆盖(isDefaultOverride)]的值:[${pobjCodeTypeEN.isDefaultOverride}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.inUse &&
    undefined !== pobjCodeTypeEN.inUse &&
    tzDataType.isBoolean(pobjCodeTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjCodeTypeEN.inUse}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isAutoParseFile &&
    undefined !== pobjCodeTypeEN.isAutoParseFile &&
    tzDataType.isBoolean(pobjCodeTypeEN.isAutoParseFile) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否自动分析文件(isAutoParseFile)]的值:[${pobjCodeTypeEN.isAutoParseFile}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.updDate) == false &&
    undefined !== pobjCodeTypeEN.updDate &&
    tzDataType.isString(pobjCodeTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCodeTypeEN.updDate}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.updUser) == false &&
    undefined !== pobjCodeTypeEN.updUser &&
    tzDataType.isString(pobjCodeTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjCodeTypeEN.updUser}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.memo) == false &&
    undefined !== pobjCodeTypeEN.memo &&
    tzDataType.isString(pobjCodeTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjCodeTypeEN.memo}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodeType_CheckProperty4Update(pobjCodeTypeEN: clsCodeTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeId}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeName) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型名(codeTypeName)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeName}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeSimName) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeSimName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[简称(codeTypeSimName)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeSimName}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeENName) == false &&
    GetStrLen(pobjCodeTypeEN.codeTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型英文名(codeTypeENName)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.codeTypeENName}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.groupName) == false &&
    GetStrLen(pobjCodeTypeEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[组名(groupName)]的长度不能超过30(In 代码类型(CodeType))!值:${pobjCodeTypeEN.groupName}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.progLangTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 代码类型(CodeType))!值:${pobjCodeTypeEN.progLangTypeId}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.regionTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 代码类型(CodeType))!值:${pobjCodeTypeEN.regionTypeId}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.prefix) == false && GetStrLen(pobjCodeTypeEN.prefix) > 10) {
    throw new Error(
      `(errid:Watl000416)字段[前缀(prefix)]的长度不能超过10(In 代码类型(CodeType))!值:${pobjCodeTypeEN.prefix}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.dependsOn) == false &&
    GetStrLen(pobjCodeTypeEN.dependsOn) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[依赖于(dependsOn)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.dependsOn}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.frontOrBack) == false &&
    GetStrLen(pobjCodeTypeEN.frontOrBack) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[前台Or后台(frontOrBack)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.frontOrBack}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.sqlDsTypeId) == false &&
    GetStrLen(pobjCodeTypeEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 代码类型(CodeType))!值:${pobjCodeTypeEN.sqlDsTypeId}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNameFormat) == false &&
    GetStrLen(pobjCodeTypeEN.classNameFormat) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[类名格式(classNameFormat)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.classNameFormat}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.fileNameFormat) == false &&
    GetStrLen(pobjCodeTypeEN.fileNameFormat) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文件名格式(fileNameFormat)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.fileNameFormat}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNamePattern) == false &&
    GetStrLen(pobjCodeTypeEN.classNamePattern) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[类名模式(classNamePattern)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.classNamePattern}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.winOrWeb) == false && GetStrLen(pobjCodeTypeEN.winOrWeb) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[WinOrWeb(winOrWeb)]的长度不能超过50(In 代码类型(CodeType))!值:${pobjCodeTypeEN.winOrWeb}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.updDate) == false && GetStrLen(pobjCodeTypeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 代码类型(CodeType))!值:${pobjCodeTypeEN.updDate}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.updUser) == false && GetStrLen(pobjCodeTypeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 代码类型(CodeType))!值:${pobjCodeTypeEN.updUser}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCodeTypeEN.memo) == false && GetStrLen(pobjCodeTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 代码类型(CodeType))!值:${pobjCodeTypeEN.memo}(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeId) == false &&
    undefined !== pobjCodeTypeEN.codeTypeId &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjCodeTypeEN.codeTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeName) == false &&
    undefined !== pobjCodeTypeEN.codeTypeName &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型名(codeTypeName)]的值:[${pobjCodeTypeEN.codeTypeName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeSimName) == false &&
    undefined !== pobjCodeTypeEN.codeTypeSimName &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[简称(codeTypeSimName)]的值:[${pobjCodeTypeEN.codeTypeSimName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.codeTypeENName) == false &&
    undefined !== pobjCodeTypeEN.codeTypeENName &&
    tzDataType.isString(pobjCodeTypeEN.codeTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型英文名(codeTypeENName)]的值:[${pobjCodeTypeEN.codeTypeENName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.groupName) == false &&
    undefined !== pobjCodeTypeEN.groupName &&
    tzDataType.isString(pobjCodeTypeEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[组名(groupName)]的值:[${pobjCodeTypeEN.groupName}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.progLangTypeId) == false &&
    undefined !== pobjCodeTypeEN.progLangTypeId &&
    tzDataType.isString(pobjCodeTypeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjCodeTypeEN.progLangTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.regionTypeId) == false &&
    undefined !== pobjCodeTypeEN.regionTypeId &&
    tzDataType.isString(pobjCodeTypeEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型Id(regionTypeId)]的值:[${pobjCodeTypeEN.regionTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.prefix) == false &&
    undefined !== pobjCodeTypeEN.prefix &&
    tzDataType.isString(pobjCodeTypeEN.prefix) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[前缀(prefix)]的值:[${pobjCodeTypeEN.prefix}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.dependsOn) == false &&
    undefined !== pobjCodeTypeEN.dependsOn &&
    tzDataType.isString(pobjCodeTypeEN.dependsOn) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[依赖于(dependsOn)]的值:[${pobjCodeTypeEN.dependsOn}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.frontOrBack) == false &&
    undefined !== pobjCodeTypeEN.frontOrBack &&
    tzDataType.isString(pobjCodeTypeEN.frontOrBack) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[前台Or后台(frontOrBack)]的值:[${pobjCodeTypeEN.frontOrBack}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.sqlDsTypeId) == false &&
    undefined !== pobjCodeTypeEN.sqlDsTypeId &&
    tzDataType.isString(pobjCodeTypeEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源类型Id(sqlDsTypeId)]的值:[${pobjCodeTypeEN.sqlDsTypeId}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNameFormat) == false &&
    undefined !== pobjCodeTypeEN.classNameFormat &&
    tzDataType.isString(pobjCodeTypeEN.classNameFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[类名格式(classNameFormat)]的值:[${pobjCodeTypeEN.classNameFormat}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.fileNameFormat) == false &&
    undefined !== pobjCodeTypeEN.fileNameFormat &&
    tzDataType.isString(pobjCodeTypeEN.fileNameFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文件名格式(fileNameFormat)]的值:[${pobjCodeTypeEN.fileNameFormat}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.classNamePattern) == false &&
    undefined !== pobjCodeTypeEN.classNamePattern &&
    tzDataType.isString(pobjCodeTypeEN.classNamePattern) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[类名模式(classNamePattern)]的值:[${pobjCodeTypeEN.classNamePattern}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isCSharp &&
    undefined !== pobjCodeTypeEN.isCSharp &&
    tzDataType.isBoolean(pobjCodeTypeEN.isCSharp) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否CSharp语言(isCSharp)]的值:[${pobjCodeTypeEN.isCSharp}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isJava &&
    undefined !== pobjCodeTypeEN.isJava &&
    tzDataType.isBoolean(pobjCodeTypeEN.isJava) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否Java语言(isJava)]的值:[${pobjCodeTypeEN.isJava}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isJavaScript &&
    undefined !== pobjCodeTypeEN.isJavaScript &&
    tzDataType.isBoolean(pobjCodeTypeEN.isJavaScript) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否JavaScript语言(isJavaScript)]的值:[${pobjCodeTypeEN.isJavaScript}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isTypeScript &&
    undefined !== pobjCodeTypeEN.isTypeScript &&
    tzDataType.isBoolean(pobjCodeTypeEN.isTypeScript) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否TypeScript语言(isTypeScript)]的值:[${pobjCodeTypeEN.isTypeScript}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isSilverLight &&
    undefined !== pobjCodeTypeEN.isSilverLight &&
    tzDataType.isBoolean(pobjCodeTypeEN.isSilverLight) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否SilverLight语言(isSilverLight)]的值:[${pobjCodeTypeEN.isSilverLight}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isSwift &&
    undefined !== pobjCodeTypeEN.isSwift &&
    tzDataType.isBoolean(pobjCodeTypeEN.isSwift) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否Swift语言(isSwift)]的值:[${pobjCodeTypeEN.isSwift}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isVB &&
    undefined !== pobjCodeTypeEN.isVB &&
    tzDataType.isBoolean(pobjCodeTypeEN.isVB) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsVB语言(isVB)]的值:[${pobjCodeTypeEN.isVB}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isTableFldConst &&
    undefined !== pobjCodeTypeEN.isTableFldConst &&
    tzDataType.isBoolean(pobjCodeTypeEN.isTableFldConst) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsTableFldConst(isTableFldConst)]的值:[${pobjCodeTypeEN.isTableFldConst}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isPubApp4WinWeb &&
    undefined !== pobjCodeTypeEN.isPubApp4WinWeb &&
    tzDataType.isBoolean(pobjCodeTypeEN.isPubApp4WinWeb) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsPubApp4WinWeb(isPubApp4WinWeb)]的值:[${pobjCodeTypeEN.isPubApp4WinWeb}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isWeb &&
    undefined !== pobjCodeTypeEN.isWeb &&
    tzDataType.isBoolean(pobjCodeTypeEN.isWeb) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否Web应用(isWeb)]的值:[${pobjCodeTypeEN.isWeb}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isAspMvc &&
    undefined !== pobjCodeTypeEN.isAspMvc &&
    tzDataType.isBoolean(pobjCodeTypeEN.isAspMvc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否AspMvc(isAspMvc)]的值:[${pobjCodeTypeEN.isAspMvc}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isWebSrvAccess &&
    undefined !== pobjCodeTypeEN.isWebSrvAccess &&
    tzDataType.isBoolean(pobjCodeTypeEN.isWebSrvAccess) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsWebSrvAccess(isWebSrvAccess)]的值:[${pobjCodeTypeEN.isWebSrvAccess}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isWin &&
    undefined !== pobjCodeTypeEN.isWin &&
    tzDataType.isBoolean(pobjCodeTypeEN.isWin) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否Win应用(isWin)]的值:[${pobjCodeTypeEN.isWin}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isMobileApp &&
    undefined !== pobjCodeTypeEN.isMobileApp &&
    tzDataType.isBoolean(pobjCodeTypeEN.isMobileApp) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否移动终端应用(isMobileApp)]的值:[${pobjCodeTypeEN.isMobileApp}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isExtend &&
    undefined !== pobjCodeTypeEN.isExtend &&
    tzDataType.isBoolean(pobjCodeTypeEN.isExtend) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否扩展类(isExtend)]的值:[${pobjCodeTypeEN.isExtend}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.orderNum &&
    undefined !== pobjCodeTypeEN.orderNum &&
    tzDataType.isNumber(pobjCodeTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjCodeTypeEN.orderNum}], 非法,应该为数值型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.winOrWeb) == false &&
    undefined !== pobjCodeTypeEN.winOrWeb &&
    tzDataType.isString(pobjCodeTypeEN.winOrWeb) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[WinOrWeb(winOrWeb)]的值:[${pobjCodeTypeEN.winOrWeb}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isDirByTabName &&
    undefined !== pobjCodeTypeEN.isDirByTabName &&
    tzDataType.isBoolean(pobjCodeTypeEN.isDirByTabName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否用表名作为路径(isDirByTabName)]的值:[${pobjCodeTypeEN.isDirByTabName}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isDefaultOverride &&
    undefined !== pobjCodeTypeEN.isDefaultOverride &&
    tzDataType.isBoolean(pobjCodeTypeEN.isDefaultOverride) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否默认覆盖(isDefaultOverride)]的值:[${pobjCodeTypeEN.isDefaultOverride}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.inUse &&
    undefined !== pobjCodeTypeEN.inUse &&
    tzDataType.isBoolean(pobjCodeTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjCodeTypeEN.inUse}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCodeTypeEN.isAutoParseFile &&
    undefined !== pobjCodeTypeEN.isAutoParseFile &&
    tzDataType.isBoolean(pobjCodeTypeEN.isAutoParseFile) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否自动分析文件(isAutoParseFile)]的值:[${pobjCodeTypeEN.isAutoParseFile}], 非法,应该为布尔型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.updDate) == false &&
    undefined !== pobjCodeTypeEN.updDate &&
    tzDataType.isString(pobjCodeTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCodeTypeEN.updDate}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.updUser) == false &&
    undefined !== pobjCodeTypeEN.updUser &&
    tzDataType.isString(pobjCodeTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjCodeTypeEN.updUser}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCodeTypeEN.memo) == false &&
    undefined !== pobjCodeTypeEN.memo &&
    tzDataType.isString(pobjCodeTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjCodeTypeEN.memo}], 非法,应该为字符型(In 代码类型(CodeType))!(clsCodeTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CodeType_GetJSONStrByObj(pobjCodeTypeEN: clsCodeTypeEN): string {
  pobjCodeTypeEN.sfUpdFldSetStr = pobjCodeTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCodeTypeEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CodeType_GetObjLstByJSONStr(strJSON: string): Array<clsCodeTypeEN> {
  let arrCodeTypeObjLst = new Array<clsCodeTypeEN>();
  if (strJSON === '') {
    return arrCodeTypeObjLst;
  }
  try {
    arrCodeTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCodeTypeObjLst;
  }
  return arrCodeTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCodeTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CodeType_GetObjLstByJSONObjLst(
  arrCodeTypeObjLstS: Array<clsCodeTypeEN>,
): Array<clsCodeTypeEN> {
  const arrCodeTypeObjLst = new Array<clsCodeTypeEN>();
  for (const objInFor of arrCodeTypeObjLstS) {
    const obj1 = CodeType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCodeTypeObjLst.push(obj1);
  }
  return arrCodeTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CodeType_GetObjByJSONStr(strJSON: string): clsCodeTypeEN {
  let pobjCodeTypeEN = new clsCodeTypeEN();
  if (strJSON === '') {
    return pobjCodeTypeEN;
  }
  try {
    pobjCodeTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCodeTypeEN;
  }
  return pobjCodeTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CodeType_GetCombineCondition(objCodeTypeCond: clsCodeTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_CodeTypeId,
      objCodeTypeCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_CodeTypeName,
    ) == true
  ) {
    const strComparisonOpCodeTypeName: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_CodeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_CodeTypeName,
      objCodeTypeCond.codeTypeName,
      strComparisonOpCodeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_CodeTypeSimName,
    ) == true
  ) {
    const strComparisonOpCodeTypeSimName: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_CodeTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_CodeTypeSimName,
      objCodeTypeCond.codeTypeSimName,
      strComparisonOpCodeTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_CodeTypeENName,
    ) == true
  ) {
    const strComparisonOpCodeTypeENName: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_CodeTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_CodeTypeENName,
      objCodeTypeCond.codeTypeENName,
      strComparisonOpCodeTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_GroupName,
    ) == true
  ) {
    const strComparisonOpGroupName: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_GroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_GroupName,
      objCodeTypeCond.groupName,
      strComparisonOpGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_ProgLangTypeId,
      objCodeTypeCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_RegionTypeId,
      objCodeTypeCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_Prefix,
    ) == true
  ) {
    const strComparisonOpPrefix: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_Prefix];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_Prefix,
      objCodeTypeCond.prefix,
      strComparisonOpPrefix,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_DependsOn,
    ) == true
  ) {
    const strComparisonOpDependsOn: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_DependsOn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_DependsOn,
      objCodeTypeCond.dependsOn,
      strComparisonOpDependsOn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_FrontOrBack,
    ) == true
  ) {
    const strComparisonOpFrontOrBack: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_FrontOrBack];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_FrontOrBack,
      objCodeTypeCond.frontOrBack,
      strComparisonOpFrontOrBack,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_SqlDsTypeId,
      objCodeTypeCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_ClassNameFormat,
    ) == true
  ) {
    const strComparisonOpClassNameFormat: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_ClassNameFormat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_ClassNameFormat,
      objCodeTypeCond.classNameFormat,
      strComparisonOpClassNameFormat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_FileNameFormat,
    ) == true
  ) {
    const strComparisonOpFileNameFormat: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_FileNameFormat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_FileNameFormat,
      objCodeTypeCond.fileNameFormat,
      strComparisonOpFileNameFormat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_ClassNamePattern,
    ) == true
  ) {
    const strComparisonOpClassNamePattern: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_ClassNamePattern];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_ClassNamePattern,
      objCodeTypeCond.classNamePattern,
      strComparisonOpClassNamePattern,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsCSharp,
    ) == true
  ) {
    if (objCodeTypeCond.isCSharp == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsCSharp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsCSharp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsJava,
    ) == true
  ) {
    if (objCodeTypeCond.isJava == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsJava);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsJava);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsJavaScript,
    ) == true
  ) {
    if (objCodeTypeCond.isJavaScript == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsJavaScript);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsJavaScript);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsTypeScript,
    ) == true
  ) {
    if (objCodeTypeCond.isTypeScript == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsTypeScript);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsTypeScript);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsSilverLight,
    ) == true
  ) {
    if (objCodeTypeCond.isSilverLight == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsSilverLight);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsSilverLight);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsSwift,
    ) == true
  ) {
    if (objCodeTypeCond.isSwift == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsSwift);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsSwift);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsVB,
    ) == true
  ) {
    if (objCodeTypeCond.isVB == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsVB);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsVB);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsTableFldConst,
    ) == true
  ) {
    if (objCodeTypeCond.isTableFldConst == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsTableFldConst);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsTableFldConst);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsPubApp4WinWeb,
    ) == true
  ) {
    if (objCodeTypeCond.isPubApp4WinWeb == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsPubApp4WinWeb);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsPubApp4WinWeb);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsWeb,
    ) == true
  ) {
    if (objCodeTypeCond.isWeb == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsWeb);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsWeb);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsAspMvc,
    ) == true
  ) {
    if (objCodeTypeCond.isAspMvc == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsAspMvc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsAspMvc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsWebSrvAccess,
    ) == true
  ) {
    if (objCodeTypeCond.isWebSrvAccess == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsWebSrvAccess);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsWebSrvAccess);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsWin,
    ) == true
  ) {
    if (objCodeTypeCond.isWin == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsWin);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsWin);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsMobileApp,
    ) == true
  ) {
    if (objCodeTypeCond.isMobileApp == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsMobileApp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsMobileApp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsExtend,
    ) == true
  ) {
    if (objCodeTypeCond.isExtend == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsExtend);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsExtend);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCodeTypeEN.con_OrderNum,
      objCodeTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_WinOrWeb,
    ) == true
  ) {
    const strComparisonOpWinOrWeb: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_WinOrWeb];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_WinOrWeb,
      objCodeTypeCond.winOrWeb,
      strComparisonOpWinOrWeb,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsDirByTabName,
    ) == true
  ) {
    if (objCodeTypeCond.isDirByTabName == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsDirByTabName);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsDirByTabName);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsDefaultOverride,
    ) == true
  ) {
    if (objCodeTypeCond.isDefaultOverride == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsDefaultOverride);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsDefaultOverride);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_InUse,
    ) == true
  ) {
    if (objCodeTypeCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_IsAutoParseFile,
    ) == true
  ) {
    if (objCodeTypeCond.isAutoParseFile == true) {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_IsAutoParseFile);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_IsAutoParseFile);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_UpdDate,
      objCodeTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_UpdUser,
      objCodeTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeTypeCond.dicFldComparisonOp,
      clsCodeTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objCodeTypeCond.dicFldComparisonOp[clsCodeTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeTypeEN.con_Memo,
      objCodeTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CodeType(代码类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCodeTypeName: 代码类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CodeType_GetUniCondStr(objCodeTypeEN: clsCodeTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CodeTypeName = '{0}'", objCodeTypeEN.codeTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CodeType(代码类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCodeTypeName: 代码类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CodeType_GetUniCondStr4Update(objCodeTypeEN: clsCodeTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CodeTypeId <> '{0}'", objCodeTypeEN.codeTypeId);
  strWhereCond += Format(" and CodeTypeName = '{0}'", objCodeTypeEN.codeTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCodeTypeENS:源对象
 * @param objCodeTypeENT:目标对象
 */
export function CodeType_GetObjFromJsonObj(objCodeTypeENS: clsCodeTypeEN): clsCodeTypeEN {
  const objCodeTypeENT: clsCodeTypeEN = new clsCodeTypeEN();
  ObjectAssign(objCodeTypeENT, objCodeTypeENS);
  return objCodeTypeENT;
}
