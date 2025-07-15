/**
 * 类名:clsFieldTabWApi
 * 表名:FieldTab(00050021)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:47:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程字段(FieldTab)
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
import { clsFieldTabENEx } from '@/ts/L0Entity/Table_Field/clsFieldTabENEx';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
import { FieldType_func } from '@/ts/L3ForWApi/Table_Field/clsFieldTypeWApi';
import { clsFieldTypeEN } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const fieldTab_Controller = 'FieldTabApi';
export const fieldTab_ConstructorName = 'fieldTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFldId:关键字
 * @returns 对象
 **/
export async function FieldTab_GetObjByFldIdAsync(strFldId: string): Promise<clsFieldTabEN | null> {
  const strThisFuncName = 'GetObjByFldIdAsync';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format('参数:[strFldId]不能为空!(In clsFieldTabWApi.GetObjByFldIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsFieldTabWApi.GetObjByFldIdAsync)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFldId';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
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
      const objFieldTab = FieldTab_GetObjFromJsonObj(returnObj);
      return objFieldTab;
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFldIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByFldIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
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
export function FieldTab_SortFunDefa(a: clsFieldTabEN, b: clsFieldTabEN): number {
  return a.fldId.localeCompare(b.fldId);
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
export function FieldTab_SortFunDefa2Fld(a: clsFieldTabEN, b: clsFieldTabEN): number {
  if (a.fldName == b.fldName) return a.fldCnName.localeCompare(b.fldCnName);
  else return a.fldName.localeCompare(b.fldName);
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
export function FieldTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTabEN.con_FldId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsFieldTabEN.con_FldName:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsFieldTabEN.con_FldCnName:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.fldCnName == null) return -1;
          if (b.fldCnName == null) return 1;
          return a.fldCnName.localeCompare(b.fldCnName);
        };
      case clsFieldTabEN.con_Caption:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.caption.localeCompare(b.caption);
        };
      case clsFieldTabEN.con_FieldTypeId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsFieldTabEN.con_DataTypeId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsFieldTabEN.con_FldLength:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.fldLength - b.fldLength;
        };
      case clsFieldTabEN.con_FldPrecision:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.fldPrecision - b.fldPrecision;
        };
      case clsFieldTabEN.con_FldInfo:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.fldInfo == null) return -1;
          if (b.fldInfo == null) return 1;
          return a.fldInfo.localeCompare(b.fldInfo);
        };
      case clsFieldTabEN.con_IsNull:
        return (a: clsFieldTabEN) => {
          if (a.isNull == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsPrimaryKey:
        return (a: clsFieldTabEN) => {
          if (a.isPrimaryKey == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsIdentity:
        return (a: clsFieldTabEN) => {
          if (a.isIdentity == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsChecked:
        return (a: clsFieldTabEN) => {
          if (a.isChecked == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsArchive:
        return (a: clsFieldTabEN) => {
          if (a.isArchive == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsOnlyOne:
        return (a: clsFieldTabEN) => {
          if (a.isOnlyOne == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_MaxValue:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.maxValue == null) return -1;
          if (b.maxValue == null) return 1;
          return a.maxValue.localeCompare(b.maxValue);
        };
      case clsFieldTabEN.con_MinValue:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.minValue == null) return -1;
          if (b.minValue == null) return 1;
          return a.minValue.localeCompare(b.minValue);
        };
      case clsFieldTabEN.con_DefaultValue:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsFieldTabEN.con_FldStateId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.fldStateId.localeCompare(b.fldStateId);
        };
      case clsFieldTabEN.con_HomologousFldId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.homologousFldId == null) return -1;
          if (b.homologousFldId == null) return 1;
          return a.homologousFldId.localeCompare(b.homologousFldId);
        };
      case clsFieldTabEN.con_TabNum:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.tabNum - b.tabNum;
        };
      case clsFieldTabEN.con_InUse:
        return (a: clsFieldTabEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_PrjId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFieldTabEN.con_UpdDate:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFieldTabEN.con_UpdUser:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFieldTabEN.con_Memo:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsFieldTabEN.con_IsNeedTransCode:
        return (a: clsFieldTabEN) => {
          if (a.isNeedTransCode == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldTab]中不存在!(in ${fieldTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFieldTabEN.con_FldId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsFieldTabEN.con_FldName:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsFieldTabEN.con_FldCnName:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.fldCnName == null) return -1;
          if (a.fldCnName == null) return 1;
          return b.fldCnName.localeCompare(a.fldCnName);
        };
      case clsFieldTabEN.con_Caption:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.caption.localeCompare(a.caption);
        };
      case clsFieldTabEN.con_FieldTypeId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsFieldTabEN.con_DataTypeId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsFieldTabEN.con_FldLength:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.fldLength - a.fldLength;
        };
      case clsFieldTabEN.con_FldPrecision:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.fldPrecision - a.fldPrecision;
        };
      case clsFieldTabEN.con_FldInfo:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.fldInfo == null) return -1;
          if (a.fldInfo == null) return 1;
          return b.fldInfo.localeCompare(a.fldInfo);
        };
      case clsFieldTabEN.con_IsNull:
        return (b: clsFieldTabEN) => {
          if (b.isNull == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsPrimaryKey:
        return (b: clsFieldTabEN) => {
          if (b.isPrimaryKey == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsIdentity:
        return (b: clsFieldTabEN) => {
          if (b.isIdentity == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsChecked:
        return (b: clsFieldTabEN) => {
          if (b.isChecked == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsArchive:
        return (b: clsFieldTabEN) => {
          if (b.isArchive == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_IsOnlyOne:
        return (b: clsFieldTabEN) => {
          if (b.isOnlyOne == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_MaxValue:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.maxValue == null) return -1;
          if (a.maxValue == null) return 1;
          return b.maxValue.localeCompare(a.maxValue);
        };
      case clsFieldTabEN.con_MinValue:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.minValue == null) return -1;
          if (a.minValue == null) return 1;
          return b.minValue.localeCompare(a.minValue);
        };
      case clsFieldTabEN.con_DefaultValue:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsFieldTabEN.con_FldStateId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.fldStateId.localeCompare(a.fldStateId);
        };
      case clsFieldTabEN.con_HomologousFldId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.homologousFldId == null) return -1;
          if (a.homologousFldId == null) return 1;
          return b.homologousFldId.localeCompare(a.homologousFldId);
        };
      case clsFieldTabEN.con_TabNum:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.tabNum - a.tabNum;
        };
      case clsFieldTabEN.con_InUse:
        return (b: clsFieldTabEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsFieldTabEN.con_PrjId:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFieldTabEN.con_UpdDate:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFieldTabEN.con_UpdUser:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFieldTabEN.con_Memo:
        return (a: clsFieldTabEN, b: clsFieldTabEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsFieldTabEN.con_IsNeedTransCode:
        return (b: clsFieldTabEN) => {
          if (b.isNeedTransCode == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldTab]中不存在!(in ${fieldTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByFldIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FieldTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFieldTabEN.con_FldId:
      return (obj: clsFieldTabEN) => {
        return obj.fldId === value;
      };
    case clsFieldTabEN.con_FldName:
      return (obj: clsFieldTabEN) => {
        return obj.fldName === value;
      };
    case clsFieldTabEN.con_FldCnName:
      return (obj: clsFieldTabEN) => {
        return obj.fldCnName === value;
      };
    case clsFieldTabEN.con_Caption:
      return (obj: clsFieldTabEN) => {
        return obj.caption === value;
      };
    case clsFieldTabEN.con_FieldTypeId:
      return (obj: clsFieldTabEN) => {
        return obj.fieldTypeId === value;
      };
    case clsFieldTabEN.con_DataTypeId:
      return (obj: clsFieldTabEN) => {
        return obj.dataTypeId === value;
      };
    case clsFieldTabEN.con_FldLength:
      return (obj: clsFieldTabEN) => {
        return obj.fldLength === value;
      };
    case clsFieldTabEN.con_FldPrecision:
      return (obj: clsFieldTabEN) => {
        return obj.fldPrecision === value;
      };
    case clsFieldTabEN.con_FldInfo:
      return (obj: clsFieldTabEN) => {
        return obj.fldInfo === value;
      };
    case clsFieldTabEN.con_IsNull:
      return (obj: clsFieldTabEN) => {
        return obj.isNull === value;
      };
    case clsFieldTabEN.con_IsPrimaryKey:
      return (obj: clsFieldTabEN) => {
        return obj.isPrimaryKey === value;
      };
    case clsFieldTabEN.con_IsIdentity:
      return (obj: clsFieldTabEN) => {
        return obj.isIdentity === value;
      };
    case clsFieldTabEN.con_IsChecked:
      return (obj: clsFieldTabEN) => {
        return obj.isChecked === value;
      };
    case clsFieldTabEN.con_IsArchive:
      return (obj: clsFieldTabEN) => {
        return obj.isArchive === value;
      };
    case clsFieldTabEN.con_IsOnlyOne:
      return (obj: clsFieldTabEN) => {
        return obj.isOnlyOne === value;
      };
    case clsFieldTabEN.con_MaxValue:
      return (obj: clsFieldTabEN) => {
        return obj.maxValue === value;
      };
    case clsFieldTabEN.con_MinValue:
      return (obj: clsFieldTabEN) => {
        return obj.minValue === value;
      };
    case clsFieldTabEN.con_DefaultValue:
      return (obj: clsFieldTabEN) => {
        return obj.defaultValue === value;
      };
    case clsFieldTabEN.con_FldStateId:
      return (obj: clsFieldTabEN) => {
        return obj.fldStateId === value;
      };
    case clsFieldTabEN.con_HomologousFldId:
      return (obj: clsFieldTabEN) => {
        return obj.homologousFldId === value;
      };
    case clsFieldTabEN.con_TabNum:
      return (obj: clsFieldTabEN) => {
        return obj.tabNum === value;
      };
    case clsFieldTabEN.con_InUse:
      return (obj: clsFieldTabEN) => {
        return obj.inUse === value;
      };
    case clsFieldTabEN.con_PrjId:
      return (obj: clsFieldTabEN) => {
        return obj.prjId === value;
      };
    case clsFieldTabEN.con_UpdDate:
      return (obj: clsFieldTabEN) => {
        return obj.updDate === value;
      };
    case clsFieldTabEN.con_UpdUser:
      return (obj: clsFieldTabEN) => {
        return obj.updUser === value;
      };
    case clsFieldTabEN.con_Memo:
      return (obj: clsFieldTabEN) => {
        return obj.memo === value;
      };
    case clsFieldTabEN.con_IsNeedTransCode:
      return (obj: clsFieldTabEN) => {
        return obj.isNeedTransCode === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FieldTab]中不存在!(in ${fieldTab_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[FieldTab__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldTab_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFieldTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
      const objFieldTab = FieldTab_GetObjFromJsonObj(returnObj);
      return objFieldTab;
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_GetObjLstAsync(strWhereCond: string): Promise<Array<clsFieldTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
          fieldTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param arrFldId:关键字列表
 * @returns 对象列表
 **/
export async function FieldTab_GetObjLstByFldIdLstAsync(
  arrFldId: Array<string>,
): Promise<Array<clsFieldTabEN>> {
  const strThisFuncName = 'GetObjLstByFldIdLstAsync';
  const strAction = 'GetObjLstByFldIdLst';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          fieldTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFldIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function FieldTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFieldTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
          fieldTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFieldTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
          fieldTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFieldTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
          fieldTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param strFldId:关键字
 * @returns 获取删除的结果
 **/
export async function FieldTab_DelRecordAsync(strFldId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(fieldTab_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFldId);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param arrFldId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FieldTab_DelFieldTabsAsync(arrFldId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelFieldTabsAsync';
  const strAction = 'DelFieldTabs';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldId, config);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param objFieldTabENS:源对象
 * @returns 目标对象=>clsFieldTabEN:objFieldTabENT
 **/
export function FieldTab_CopyToEx(objFieldTabENS: clsFieldTabEN): clsFieldTabENEx {
  const strThisFuncName = FieldTab_CopyToEx.name;
  const objFieldTabENT = new clsFieldTabENEx();
  try {
    ObjectAssign(objFieldTabENT, objFieldTabENS);
    return objFieldTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFieldTabENT;
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
export function FieldTab_FuncMapByFldName(strFldName: string, objFieldTabEx: clsFieldTabENEx) {
  const strThisFuncName = FieldTab_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFieldTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFieldTabENEx.con_FieldTypeName:
      return FieldTab_FuncMapFieldTypeName(objFieldTabEx);
    case clsFieldTabENEx.con_DataTypeName:
      return FieldTab_FuncMapDataTypeName(objFieldTabEx);
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
export function FieldTab_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTabENEx.con_FieldTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          if (a.fieldTypeName === null && b.fieldTypeName === null) return 0;
          if (a.fieldTypeName === null) return -1;
          if (b.fieldTypeName === null) return 1;
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsFieldTabENEx.con_DataTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsFieldTabENEx.con_ConvFldName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return a.convFldName.localeCompare(b.convFldName);
        };
      case clsFieldTabENEx.con_FldNameEx:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          if (a.fldNameEx === null && b.fldNameEx === null) return 0;
          if (a.fldNameEx === null) return -1;
          if (b.fldNameEx === null) return 1;
          return a.fldNameEx.localeCompare(b.fldNameEx);
        };
      default:
        return FieldTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFieldTabENEx.con_FieldTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          if (a.fieldTypeName === null && b.fieldTypeName === null) return 0;
          if (a.fieldTypeName === null) return 1;
          if (b.fieldTypeName === null) return -1;
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsFieldTabENEx.con_DataTypeName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsFieldTabENEx.con_ConvFldName:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          return b.convFldName.localeCompare(a.convFldName);
        };
      case clsFieldTabENEx.con_FldNameEx:
        return (a: clsFieldTabENEx, b: clsFieldTabENEx) => {
          if (a.fldNameEx === null && b.fldNameEx === null) return 0;
          if (a.fldNameEx === null) return 1;
          if (b.fldNameEx === null) return -1;
          return b.fldNameEx.localeCompare(a.fldNameEx);
        };
      default:
        return FieldTab_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFieldTabS:源对象
 **/
export async function FieldTab_FuncMapFieldTypeName(objFieldTab: clsFieldTabENEx) {
  const strThisFuncName = FieldTab_FuncMapFieldTypeName.name;
  try {
    if (IsNullOrEmpty(objFieldTab.fieldTypeName) == true) {
      const FieldTypeFieldTypeId = objFieldTab.fieldTypeId;
      const FieldTypeFieldTypeName = await FieldType_func(
        clsFieldTypeEN.con_FieldTypeId,
        clsFieldTypeEN.con_FieldTypeName,
        FieldTypeFieldTypeId,
      );
      objFieldTab.fieldTypeName = FieldTypeFieldTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001348)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFieldTabS:源对象
 **/
export async function FieldTab_FuncMapDataTypeName(objFieldTab: clsFieldTabENEx) {
  const strThisFuncName = FieldTab_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objFieldTab.dataTypeName) == true) {
      const DataTypeAbbrDataTypeId = objFieldTab.dataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objFieldTab.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001349)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab_ConstructorName,
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
export async function FieldTab_DelFieldTabsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelFieldTabsByCondAsync';
  const strAction = 'DelFieldTabsByCond';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param objFieldTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldTab_AddNewRecordAsync(objFieldTabEN: clsFieldTabEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objFieldTabEN.fldId === null || objFieldTabEN.fldId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFieldTabEN);
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTabEN, config);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param objFieldTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldTab_AddNewRecordWithMaxIdAsync(
  objFieldTabEN: clsFieldTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTabEN, config);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_AddNewObjSave(
  objFieldTabEN: clsFieldTabEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FieldTab_CheckPropertyNew(objFieldTabEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fieldTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FieldTab_CheckUniCond4Add(objFieldTabEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FieldTab_AddNewRecordWithMaxIdAsync(objFieldTabEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //FieldTab_ReFreshCache();
    } else {
      const strInfo = `添加[工程字段(FieldTab)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${fieldTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FieldTab_CheckUniCond4Add(objFieldTabEN: clsFieldTabEN): Promise<boolean> {
  const strUniquenessCondition = FieldTab_GetUniCondStr(objFieldTabEN);
  const bolIsExistCondition = await FieldTab_IsExistRecordAsync(strUniquenessCondition);
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
export async function FieldTab_CheckUniCond4Update(objFieldTabEN: clsFieldTabEN): Promise<boolean> {
  const strUniquenessCondition = FieldTab_GetUniCondStr4Update(objFieldTabEN);
  const bolIsExistCondition = await FieldTab_IsExistRecordAsync(strUniquenessCondition);
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
export async function FieldTab_UpdateObjSave(objFieldTabEN: clsFieldTabEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFieldTabEN.sfUpdFldSetStr = objFieldTabEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFieldTabEN.fldId == '' || objFieldTabEN.fldId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FieldTab_CheckProperty4Update(objFieldTabEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fieldTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FieldTab_CheckUniCond4Update(objFieldTabEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FieldTab_UpdateRecordAsync(objFieldTabEN);
    if (returnBool == true) {
      //FieldTab_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${fieldTab_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFieldTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FieldTab_AddNewRecordWithReturnKeyAsync(
  objFieldTabEN: clsFieldTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTabEN, config);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param objFieldTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FieldTab_UpdateRecordAsync(objFieldTabEN: clsFieldTabEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFieldTabEN.sfUpdFldSetStr === undefined ||
    objFieldTabEN.sfUpdFldSetStr === null ||
    objFieldTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objFieldTabEN.fldId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTabEN, config);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param objFieldTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FieldTab_EditRecordExAsync(objFieldTabEN: clsFieldTabEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFieldTabEN.sfUpdFldSetStr === undefined ||
    objFieldTabEN.sfUpdFldSetStr === null ||
    objFieldTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objFieldTabEN.fldId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTabEN, config);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param objFieldTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldTab_UpdateWithConditionAsync(
  objFieldTabEN: clsFieldTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFieldTabEN.sfUpdFldSetStr === undefined ||
    objFieldTabEN.sfUpdFldSetStr === null ||
    objFieldTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objFieldTabEN.fldId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);
  objFieldTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTabEN, config);
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * @param strFldId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FieldTab_IsExistAsync(strFldId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export async function FieldTab_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function FieldTab_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function FieldTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fieldTab_Controller, strAction);

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
        fieldTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab_ConstructorName,
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
export function FieldTab_GetWebApiUrl(strController: string, strAction: string): string {
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

 * @param strPrjId:
*/
export async function FieldTab_BindDdl_FldIdByPrjIdInDiv(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsFieldTabWApi.BindDdl_FldIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsFieldTabWApi.BindDdl_FldIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FldIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldIdByPrjIdInDivCache");
  const strCondition = `prjId = '${strPrjId}'`;
  const arrObjLstSel = await FieldTab_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFieldTabEN.con_FldId,
    clsFieldTabEN.con_FldName,
    '工程字段...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function FieldTab_GetArrFieldTabByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsFieldTabWApi.BindDdl_FldIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsFieldTabWApi.BindDdl_FldIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldIdByPrjIdInDivCache");
  const arrFieldTab = new Array<clsFieldTabEN>();
  const strCondition = `prjId = '${strPrjId}'`;
  const arrObjLstSel = await FieldTab_GetObjLstAsync(strCondition);
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFieldTabEN();
  obj0.fldId = '0';
  obj0.fldName = '选工程字段...';
  arrFieldTab.push(obj0);
  arrObjLstSel.forEach((x) => arrFieldTab.push(x));
  return arrFieldTab;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FieldTab_CheckPropertyNew(pobjFieldTabEN: clsFieldTabEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFieldTabEN.fldName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[字段名]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.caption) === true) {
    throw new Error(
      `(errid:Watl000411)字段[标题]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.dataTypeId) === true ||
    pobjFieldTabEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[数据类型Id]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFieldTabEN.fldLength ||
    (pobjFieldTabEN.fldLength != null && pobjFieldTabEN.fldLength.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段长度]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFieldTabEN.isNull ||
    (pobjFieldTabEN.isNull != null && pobjFieldTabEN.isNull.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否可空]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFieldTabEN.isPrimaryKey ||
    (pobjFieldTabEN.isPrimaryKey != null && pobjFieldTabEN.isPrimaryKey.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否主键]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldStateId) === true ||
    pobjFieldTabEN.fldStateId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段状态Id]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFieldTabEN.inUse ||
    (pobjFieldTabEN.inUse != null && pobjFieldTabEN.inUse.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否在用]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.prjId) === true || pobjFieldTabEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 工程字段)!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjFieldTabEN.fldId) == false && GetStrLen(pobjFieldTabEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldId}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.fldName) == false && GetStrLen(pobjFieldTabEN.fldName) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[字段名(fldName)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldName}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldCnName) == false &&
    GetStrLen(pobjFieldTabEN.fldCnName) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段中文详名(fldCnName)]的长度不能超过200(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldCnName}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.caption) == false && GetStrLen(pobjFieldTabEN.caption) > 200) {
    throw new Error(
      `(errid:Watl000413)字段[标题(caption)]的长度不能超过200(In 工程字段(FieldTab))!值:${pobjFieldTabEN.caption}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fieldTypeId) == false &&
    GetStrLen(pobjFieldTabEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fieldTypeId}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.dataTypeId) == false &&
    GetStrLen(pobjFieldTabEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 工程字段(FieldTab))!值:${pobjFieldTabEN.dataTypeId}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.fldInfo) == false && GetStrLen(pobjFieldTabEN.fldInfo) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[字段信息(fldInfo)]的长度不能超过100(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldInfo}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.maxValue) == false && GetStrLen(pobjFieldTabEN.maxValue) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[最大值(maxValue)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.maxValue}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.minValue) == false && GetStrLen(pobjFieldTabEN.minValue) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[最小值(minValue)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.minValue}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.defaultValue) == false &&
    GetStrLen(pobjFieldTabEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缺省值(defaultValue)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.defaultValue}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldStateId) == false &&
    GetStrLen(pobjFieldTabEN.fldStateId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段状态Id(fldStateId)]的长度不能超过2(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldStateId}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.homologousFldId) == false &&
    GetStrLen(pobjFieldTabEN.homologousFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[同源字段Id(homologousFldId)]的长度不能超过8(In 工程字段(FieldTab))!值:${pobjFieldTabEN.homologousFldId}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.prjId) == false && GetStrLen(pobjFieldTabEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 工程字段(FieldTab))!值:${pobjFieldTabEN.prjId}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.updDate) == false && GetStrLen(pobjFieldTabEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程字段(FieldTab))!值:${pobjFieldTabEN.updDate}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.updUser) == false && GetStrLen(pobjFieldTabEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 工程字段(FieldTab))!值:${pobjFieldTabEN.updUser}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.memo) == false && GetStrLen(pobjFieldTabEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程字段(FieldTab))!值:${pobjFieldTabEN.memo}(clsFieldTabBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldId) == false &&
    undefined !== pobjFieldTabEN.fldId &&
    tzDataType.isString(pobjFieldTabEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjFieldTabEN.fldId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldName) == false &&
    undefined !== pobjFieldTabEN.fldName &&
    tzDataType.isString(pobjFieldTabEN.fldName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段名(fldName)]的值:[${pobjFieldTabEN.fldName}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldCnName) == false &&
    undefined !== pobjFieldTabEN.fldCnName &&
    tzDataType.isString(pobjFieldTabEN.fldCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段中文详名(fldCnName)]的值:[${pobjFieldTabEN.fldCnName}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.caption) == false &&
    undefined !== pobjFieldTabEN.caption &&
    tzDataType.isString(pobjFieldTabEN.caption) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[标题(caption)]的值:[${pobjFieldTabEN.caption}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fieldTypeId) == false &&
    undefined !== pobjFieldTabEN.fieldTypeId &&
    tzDataType.isString(pobjFieldTabEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[${pobjFieldTabEN.fieldTypeId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.dataTypeId) == false &&
    undefined !== pobjFieldTabEN.dataTypeId &&
    tzDataType.isString(pobjFieldTabEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[${pobjFieldTabEN.dataTypeId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.fldLength &&
    undefined !== pobjFieldTabEN.fldLength &&
    tzDataType.isNumber(pobjFieldTabEN.fldLength) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段长度(fldLength)]的值:[${pobjFieldTabEN.fldLength}], 非法,应该为数值型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.fldPrecision &&
    undefined !== pobjFieldTabEN.fldPrecision &&
    tzDataType.isNumber(pobjFieldTabEN.fldPrecision) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[精确度(fldPrecision)]的值:[${pobjFieldTabEN.fldPrecision}], 非法,应该为数值型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldInfo) == false &&
    undefined !== pobjFieldTabEN.fldInfo &&
    tzDataType.isString(pobjFieldTabEN.fldInfo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段信息(fldInfo)]的值:[${pobjFieldTabEN.fldInfo}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.isNull &&
    undefined !== pobjFieldTabEN.isNull &&
    tzDataType.isBoolean(pobjFieldTabEN.isNull) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否可空(isNull)]的值:[${pobjFieldTabEN.isNull}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.isPrimaryKey &&
    undefined !== pobjFieldTabEN.isPrimaryKey &&
    tzDataType.isBoolean(pobjFieldTabEN.isPrimaryKey) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否主键(isPrimaryKey)]的值:[${pobjFieldTabEN.isPrimaryKey}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.isIdentity &&
    undefined !== pobjFieldTabEN.isIdentity &&
    tzDataType.isBoolean(pobjFieldTabEN.isIdentity) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否Identity(isIdentity)]的值:[${pobjFieldTabEN.isIdentity}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.isChecked &&
    undefined !== pobjFieldTabEN.isChecked &&
    tzDataType.isBoolean(pobjFieldTabEN.isChecked) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否核实(isChecked)]的值:[${pobjFieldTabEN.isChecked}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.isArchive &&
    undefined !== pobjFieldTabEN.isArchive &&
    tzDataType.isBoolean(pobjFieldTabEN.isArchive) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否存档(isArchive)]的值:[${pobjFieldTabEN.isArchive}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.isOnlyOne &&
    undefined !== pobjFieldTabEN.isOnlyOne &&
    tzDataType.isBoolean(pobjFieldTabEN.isOnlyOne) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否唯一(isOnlyOne)]的值:[${pobjFieldTabEN.isOnlyOne}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.maxValue) == false &&
    undefined !== pobjFieldTabEN.maxValue &&
    tzDataType.isString(pobjFieldTabEN.maxValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[最大值(maxValue)]的值:[${pobjFieldTabEN.maxValue}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.minValue) == false &&
    undefined !== pobjFieldTabEN.minValue &&
    tzDataType.isString(pobjFieldTabEN.minValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[最小值(minValue)]的值:[${pobjFieldTabEN.minValue}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.defaultValue) == false &&
    undefined !== pobjFieldTabEN.defaultValue &&
    tzDataType.isString(pobjFieldTabEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缺省值(defaultValue)]的值:[${pobjFieldTabEN.defaultValue}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldStateId) == false &&
    undefined !== pobjFieldTabEN.fldStateId &&
    tzDataType.isString(pobjFieldTabEN.fldStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段状态Id(fldStateId)]的值:[${pobjFieldTabEN.fldStateId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.homologousFldId) == false &&
    undefined !== pobjFieldTabEN.homologousFldId &&
    tzDataType.isString(pobjFieldTabEN.homologousFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[同源字段Id(homologousFldId)]的值:[${pobjFieldTabEN.homologousFldId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.tabNum &&
    undefined !== pobjFieldTabEN.tabNum &&
    tzDataType.isNumber(pobjFieldTabEN.tabNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表数(tabNum)]的值:[${pobjFieldTabEN.tabNum}], 非法,应该为数值型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.inUse &&
    undefined !== pobjFieldTabEN.inUse &&
    tzDataType.isBoolean(pobjFieldTabEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjFieldTabEN.inUse}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.prjId) == false &&
    undefined !== pobjFieldTabEN.prjId &&
    tzDataType.isString(pobjFieldTabEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjFieldTabEN.prjId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.updDate) == false &&
    undefined !== pobjFieldTabEN.updDate &&
    tzDataType.isString(pobjFieldTabEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFieldTabEN.updDate}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.updUser) == false &&
    undefined !== pobjFieldTabEN.updUser &&
    tzDataType.isString(pobjFieldTabEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFieldTabEN.updUser}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.memo) == false &&
    undefined !== pobjFieldTabEN.memo &&
    tzDataType.isString(pobjFieldTabEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFieldTabEN.memo}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFieldTabEN.isNeedTransCode &&
    undefined !== pobjFieldTabEN.isNeedTransCode &&
    tzDataType.isBoolean(pobjFieldTabEN.isNeedTransCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要转换代码(isNeedTransCode)]的值:[${pobjFieldTabEN.isNeedTransCode}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFieldTabEN.dataTypeId) == false &&
    pobjFieldTabEN.dataTypeId != '[nuull]' &&
    GetStrLen(pobjFieldTabEN.dataTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[数据类型Id]作为外键字段,长度应该为2(In 工程字段)!(clsFieldTabBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.prjId) == false &&
    pobjFieldTabEN.prjId != '[nuull]' &&
    GetStrLen(pobjFieldTabEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 工程字段)!(clsFieldTabBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FieldTab_CheckProperty4Update(pobjFieldTabEN: clsFieldTabEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjFieldTabEN.fldId) == false && GetStrLen(pobjFieldTabEN.fldId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldId}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.fldName) == false && GetStrLen(pobjFieldTabEN.fldName) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[字段名(fldName)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldName}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldCnName) == false &&
    GetStrLen(pobjFieldTabEN.fldCnName) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段中文详名(fldCnName)]的长度不能超过200(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldCnName}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.caption) == false && GetStrLen(pobjFieldTabEN.caption) > 200) {
    throw new Error(
      `(errid:Watl000416)字段[标题(caption)]的长度不能超过200(In 工程字段(FieldTab))!值:${pobjFieldTabEN.caption}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fieldTypeId) == false &&
    GetStrLen(pobjFieldTabEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fieldTypeId}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.dataTypeId) == false &&
    GetStrLen(pobjFieldTabEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In 工程字段(FieldTab))!值:${pobjFieldTabEN.dataTypeId}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.fldInfo) == false && GetStrLen(pobjFieldTabEN.fldInfo) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[字段信息(fldInfo)]的长度不能超过100(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldInfo}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.maxValue) == false && GetStrLen(pobjFieldTabEN.maxValue) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[最大值(maxValue)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.maxValue}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.minValue) == false && GetStrLen(pobjFieldTabEN.minValue) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[最小值(minValue)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.minValue}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.defaultValue) == false &&
    GetStrLen(pobjFieldTabEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缺省值(defaultValue)]的长度不能超过50(In 工程字段(FieldTab))!值:${pobjFieldTabEN.defaultValue}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldStateId) == false &&
    GetStrLen(pobjFieldTabEN.fldStateId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段状态Id(fldStateId)]的长度不能超过2(In 工程字段(FieldTab))!值:${pobjFieldTabEN.fldStateId}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.homologousFldId) == false &&
    GetStrLen(pobjFieldTabEN.homologousFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[同源字段Id(homologousFldId)]的长度不能超过8(In 工程字段(FieldTab))!值:${pobjFieldTabEN.homologousFldId}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.prjId) == false && GetStrLen(pobjFieldTabEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 工程字段(FieldTab))!值:${pobjFieldTabEN.prjId}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.updDate) == false && GetStrLen(pobjFieldTabEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程字段(FieldTab))!值:${pobjFieldTabEN.updDate}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.updUser) == false && GetStrLen(pobjFieldTabEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 工程字段(FieldTab))!值:${pobjFieldTabEN.updUser}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjFieldTabEN.memo) == false && GetStrLen(pobjFieldTabEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程字段(FieldTab))!值:${pobjFieldTabEN.memo}(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldId) == false &&
    undefined !== pobjFieldTabEN.fldId &&
    tzDataType.isString(pobjFieldTabEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjFieldTabEN.fldId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldName) == false &&
    undefined !== pobjFieldTabEN.fldName &&
    tzDataType.isString(pobjFieldTabEN.fldName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段名(fldName)]的值:[${pobjFieldTabEN.fldName}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldCnName) == false &&
    undefined !== pobjFieldTabEN.fldCnName &&
    tzDataType.isString(pobjFieldTabEN.fldCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段中文详名(fldCnName)]的值:[${pobjFieldTabEN.fldCnName}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.caption) == false &&
    undefined !== pobjFieldTabEN.caption &&
    tzDataType.isString(pobjFieldTabEN.caption) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[标题(caption)]的值:[${pobjFieldTabEN.caption}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fieldTypeId) == false &&
    undefined !== pobjFieldTabEN.fieldTypeId &&
    tzDataType.isString(pobjFieldTabEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[${pobjFieldTabEN.fieldTypeId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.dataTypeId) == false &&
    undefined !== pobjFieldTabEN.dataTypeId &&
    tzDataType.isString(pobjFieldTabEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[${pobjFieldTabEN.dataTypeId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.fldLength &&
    undefined !== pobjFieldTabEN.fldLength &&
    tzDataType.isNumber(pobjFieldTabEN.fldLength) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段长度(fldLength)]的值:[${pobjFieldTabEN.fldLength}], 非法,应该为数值型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.fldPrecision &&
    undefined !== pobjFieldTabEN.fldPrecision &&
    tzDataType.isNumber(pobjFieldTabEN.fldPrecision) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[精确度(fldPrecision)]的值:[${pobjFieldTabEN.fldPrecision}], 非法,应该为数值型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldInfo) == false &&
    undefined !== pobjFieldTabEN.fldInfo &&
    tzDataType.isString(pobjFieldTabEN.fldInfo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段信息(fldInfo)]的值:[${pobjFieldTabEN.fldInfo}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.isNull &&
    undefined !== pobjFieldTabEN.isNull &&
    tzDataType.isBoolean(pobjFieldTabEN.isNull) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否可空(isNull)]的值:[${pobjFieldTabEN.isNull}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.isPrimaryKey &&
    undefined !== pobjFieldTabEN.isPrimaryKey &&
    tzDataType.isBoolean(pobjFieldTabEN.isPrimaryKey) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否主键(isPrimaryKey)]的值:[${pobjFieldTabEN.isPrimaryKey}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.isIdentity &&
    undefined !== pobjFieldTabEN.isIdentity &&
    tzDataType.isBoolean(pobjFieldTabEN.isIdentity) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否Identity(isIdentity)]的值:[${pobjFieldTabEN.isIdentity}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.isChecked &&
    undefined !== pobjFieldTabEN.isChecked &&
    tzDataType.isBoolean(pobjFieldTabEN.isChecked) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否核实(isChecked)]的值:[${pobjFieldTabEN.isChecked}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.isArchive &&
    undefined !== pobjFieldTabEN.isArchive &&
    tzDataType.isBoolean(pobjFieldTabEN.isArchive) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否存档(isArchive)]的值:[${pobjFieldTabEN.isArchive}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.isOnlyOne &&
    undefined !== pobjFieldTabEN.isOnlyOne &&
    tzDataType.isBoolean(pobjFieldTabEN.isOnlyOne) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否唯一(isOnlyOne)]的值:[${pobjFieldTabEN.isOnlyOne}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.maxValue) == false &&
    undefined !== pobjFieldTabEN.maxValue &&
    tzDataType.isString(pobjFieldTabEN.maxValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[最大值(maxValue)]的值:[${pobjFieldTabEN.maxValue}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.minValue) == false &&
    undefined !== pobjFieldTabEN.minValue &&
    tzDataType.isString(pobjFieldTabEN.minValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[最小值(minValue)]的值:[${pobjFieldTabEN.minValue}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.defaultValue) == false &&
    undefined !== pobjFieldTabEN.defaultValue &&
    tzDataType.isString(pobjFieldTabEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缺省值(defaultValue)]的值:[${pobjFieldTabEN.defaultValue}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.fldStateId) == false &&
    undefined !== pobjFieldTabEN.fldStateId &&
    tzDataType.isString(pobjFieldTabEN.fldStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段状态Id(fldStateId)]的值:[${pobjFieldTabEN.fldStateId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.homologousFldId) == false &&
    undefined !== pobjFieldTabEN.homologousFldId &&
    tzDataType.isString(pobjFieldTabEN.homologousFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[同源字段Id(homologousFldId)]的值:[${pobjFieldTabEN.homologousFldId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.tabNum &&
    undefined !== pobjFieldTabEN.tabNum &&
    tzDataType.isNumber(pobjFieldTabEN.tabNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表数(tabNum)]的值:[${pobjFieldTabEN.tabNum}], 非法,应该为数值型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.inUse &&
    undefined !== pobjFieldTabEN.inUse &&
    tzDataType.isBoolean(pobjFieldTabEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjFieldTabEN.inUse}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.prjId) == false &&
    undefined !== pobjFieldTabEN.prjId &&
    tzDataType.isString(pobjFieldTabEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjFieldTabEN.prjId}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.updDate) == false &&
    undefined !== pobjFieldTabEN.updDate &&
    tzDataType.isString(pobjFieldTabEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFieldTabEN.updDate}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.updUser) == false &&
    undefined !== pobjFieldTabEN.updUser &&
    tzDataType.isString(pobjFieldTabEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFieldTabEN.updUser}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.memo) == false &&
    undefined !== pobjFieldTabEN.memo &&
    tzDataType.isString(pobjFieldTabEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFieldTabEN.memo}], 非法,应该为字符型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFieldTabEN.isNeedTransCode &&
    undefined !== pobjFieldTabEN.isNeedTransCode &&
    tzDataType.isBoolean(pobjFieldTabEN.isNeedTransCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要转换代码(isNeedTransCode)]的值:[${pobjFieldTabEN.isNeedTransCode}], 非法,应该为布尔型(In 工程字段(FieldTab))!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjFieldTabEN.fldId) === true || pobjFieldTabEN.fldId.toString() === '0') {
    throw new Error(
      `(errid:Watl000064)字段[字段Id]不能为空(In 工程字段)!(clsFieldTabBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFieldTabEN.dataTypeId) == false &&
    pobjFieldTabEN.dataTypeId != '[nuull]' &&
    GetStrLen(pobjFieldTabEN.dataTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[数据类型Id]作为外键字段,长度应该为2(In 工程字段)!(clsFieldTabBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFieldTabEN.prjId) == false &&
    pobjFieldTabEN.prjId != '[nuull]' &&
    GetStrLen(pobjFieldTabEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 工程字段)!(clsFieldTabBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FieldTab_GetJSONStrByObj(pobjFieldTabEN: clsFieldTabEN): string {
  pobjFieldTabEN.sfUpdFldSetStr = pobjFieldTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFieldTabEN);
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
export function FieldTab_GetObjLstByJSONStr(strJSON: string): Array<clsFieldTabEN> {
  let arrFieldTabObjLst = new Array<clsFieldTabEN>();
  if (strJSON === '') {
    return arrFieldTabObjLst;
  }
  try {
    arrFieldTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFieldTabObjLst;
  }
  return arrFieldTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFieldTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FieldTab_GetObjLstByJSONObjLst(
  arrFieldTabObjLstS: Array<clsFieldTabEN>,
): Array<clsFieldTabEN> {
  const arrFieldTabObjLst = new Array<clsFieldTabEN>();
  for (const objInFor of arrFieldTabObjLstS) {
    const obj1 = FieldTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFieldTabObjLst.push(obj1);
  }
  return arrFieldTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FieldTab_GetObjByJSONStr(strJSON: string): clsFieldTabEN {
  let pobjFieldTabEN = new clsFieldTabEN();
  if (strJSON === '') {
    return pobjFieldTabEN;
  }
  try {
    pobjFieldTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFieldTabEN;
  }
  return pobjFieldTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FieldTab_GetCombineCondition(objFieldTabCond: clsFieldTabEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_FldId,
      objFieldTabCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FldName,
    ) == true
  ) {
    const strComparisonOpFldName: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_FldName,
      objFieldTabCond.fldName,
      strComparisonOpFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FldCnName,
    ) == true
  ) {
    const strComparisonOpFldCnName: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FldCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_FldCnName,
      objFieldTabCond.fldCnName,
      strComparisonOpFldCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_Caption,
    ) == true
  ) {
    const strComparisonOpCaption: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_Caption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_Caption,
      objFieldTabCond.caption,
      strComparisonOpCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_FieldTypeId,
      objFieldTabCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_DataTypeId,
      objFieldTabCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FldLength,
    ) == true
  ) {
    const strComparisonOpFldLength: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FldLength];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFieldTabEN.con_FldLength,
      objFieldTabCond.fldLength,
      strComparisonOpFldLength,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FldPrecision,
    ) == true
  ) {
    const strComparisonOpFldPrecision: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FldPrecision];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFieldTabEN.con_FldPrecision,
      objFieldTabCond.fldPrecision,
      strComparisonOpFldPrecision,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FldInfo,
    ) == true
  ) {
    const strComparisonOpFldInfo: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FldInfo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_FldInfo,
      objFieldTabCond.fldInfo,
      strComparisonOpFldInfo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_IsNull,
    ) == true
  ) {
    if (objFieldTabCond.isNull == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_IsNull);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_IsNull);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_IsPrimaryKey,
    ) == true
  ) {
    if (objFieldTabCond.isPrimaryKey == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_IsPrimaryKey);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_IsPrimaryKey);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_IsIdentity,
    ) == true
  ) {
    if (objFieldTabCond.isIdentity == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_IsIdentity);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_IsIdentity);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_IsChecked,
    ) == true
  ) {
    if (objFieldTabCond.isChecked == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_IsChecked);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_IsChecked);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_IsArchive,
    ) == true
  ) {
    if (objFieldTabCond.isArchive == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_IsArchive);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_IsArchive);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_IsOnlyOne,
    ) == true
  ) {
    if (objFieldTabCond.isOnlyOne == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_IsOnlyOne);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_IsOnlyOne);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_MaxValue,
    ) == true
  ) {
    const strComparisonOpMaxValue: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_MaxValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_MaxValue,
      objFieldTabCond.maxValue,
      strComparisonOpMaxValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_MinValue,
    ) == true
  ) {
    const strComparisonOpMinValue: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_MinValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_MinValue,
      objFieldTabCond.minValue,
      strComparisonOpMinValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_DefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_DefaultValue,
      objFieldTabCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_FldStateId,
    ) == true
  ) {
    const strComparisonOpFldStateId: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_FldStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_FldStateId,
      objFieldTabCond.fldStateId,
      strComparisonOpFldStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_HomologousFldId,
    ) == true
  ) {
    const strComparisonOpHomologousFldId: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_HomologousFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_HomologousFldId,
      objFieldTabCond.homologousFldId,
      strComparisonOpHomologousFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_TabNum,
    ) == true
  ) {
    const strComparisonOpTabNum: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_TabNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFieldTabEN.con_TabNum,
      objFieldTabCond.tabNum,
      strComparisonOpTabNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_InUse,
    ) == true
  ) {
    if (objFieldTabCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_PrjId,
      objFieldTabCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_UpdDate,
      objFieldTabCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_UpdUser,
      objFieldTabCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objFieldTabCond.dicFldComparisonOp[clsFieldTabEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTabEN.con_Memo,
      objFieldTabCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTabCond.dicFldComparisonOp,
      clsFieldTabEN.con_IsNeedTransCode,
    ) == true
  ) {
    if (objFieldTabCond.isNeedTransCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTabEN.con_IsNeedTransCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTabEN.con_IsNeedTransCode);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FieldTab(工程字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFldName: 字段名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FieldTab_GetUniCondStr(objFieldTabEN: clsFieldTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FldName = '{0}'", objFieldTabEN.fldName);
  strWhereCond += Format(" and PrjId = '{0}'", objFieldTabEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FieldTab(工程字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFldName: 字段名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FieldTab_GetUniCondStr4Update(objFieldTabEN: clsFieldTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FldId <> '{0}'", objFieldTabEN.fldId);
  strWhereCond += Format(" and FldName = '{0}'", objFieldTabEN.fldName);
  strWhereCond += Format(" and PrjId = '{0}'", objFieldTabEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFieldTabENS:源对象
 * @param objFieldTabENT:目标对象
 */
export function FieldTab_GetObjFromJsonObj(objFieldTabENS: clsFieldTabEN): clsFieldTabEN {
  const objFieldTabENT: clsFieldTabEN = new clsFieldTabEN();
  ObjectAssign(objFieldTabENT, objFieldTabENS);
  return objFieldTabENT;
}
