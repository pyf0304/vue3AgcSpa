/**
 * 类名:clsTabFieldRelaWApi
 * 表名:TabFieldRela(00050266)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:00
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:数据同步(DataSynch)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 表字段关系(TabFieldRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsTabFieldRelaEN } from '@/ts/L0Entity/DataSynch/clsTabFieldRelaEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const tabFieldRela_Controller = 'TabFieldRelaApi';
export const tabFieldRela_ConstructorName = 'tabFieldRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdFieldTabRela:关键字
 * @returns 对象
 **/
export async function TabFieldRela_GetObjByIdFieldTabRelaAsync(
  lngIdFieldTabRela: number,
): Promise<clsTabFieldRelaEN | null> {
  const strThisFuncName = 'GetObjByIdFieldTabRelaAsync';

  if (lngIdFieldTabRela == 0) {
    const strMsg = Format(
      '参数:[lngIdFieldTabRela]不能为空!(In clsTabFieldRelaWApi.GetObjByIdFieldTabRelaAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdFieldTabRela';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngIdFieldTabRela,
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
      const objTabFieldRela = TabFieldRela_GetObjFromJsonObj(returnObj);
      return objTabFieldRela;
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByIdFieldTabRelaCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByIdFieldTabRelalocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByIdFieldTabRelaCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function TabFieldRela_SortFunDefa(a: clsTabFieldRelaEN, b: clsTabFieldRelaEN): number {
  return a.idFieldTabRela - b.idFieldTabRela;
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
export function TabFieldRela_SortFunDefa2Fld(a: clsTabFieldRelaEN, b: clsTabFieldRelaEN): number {
  if (a.fldId == b.fldId) return a.tabId.localeCompare(b.tabId);
  else return a.fldId.localeCompare(b.fldId);
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
export function TabFieldRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFieldRelaEN.con_IdFieldTabRela:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.idFieldTabRela - b.idFieldTabRela;
        };
      case clsTabFieldRelaEN.con_FldId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsTabFieldRelaEN.con_TabId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsTabFieldRelaEN.con_SqlFldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.sqlFldName == null) return -1;
          if (b.sqlFldName == null) return 1;
          return a.sqlFldName.localeCompare(b.sqlFldName);
        };
      case clsTabFieldRelaEN.con_ExcelFieldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.excelFieldName == null) return -1;
          if (b.excelFieldName == null) return 1;
          return a.excelFieldName.localeCompare(b.excelFieldName);
        };
      case clsTabFieldRelaEN.con_DefaultValue:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsTabFieldRelaEN.con_IsNeedTrans:
        return (a: clsTabFieldRelaEN) => {
          if (a.isNeedTrans == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_TransWayId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.transWayId.localeCompare(b.transWayId);
        };
      case clsTabFieldRelaEN.con_TransTabName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.transTabName == null) return -1;
          if (b.transTabName == null) return 1;
          return a.transTabName.localeCompare(b.transTabName);
        };
      case clsTabFieldRelaEN.con_TransInFldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.transInFldName == null) return -1;
          if (b.transInFldName == null) return 1;
          return a.transInFldName.localeCompare(b.transInFldName);
        };
      case clsTabFieldRelaEN.con_TransOutFldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.transOutFldName == null) return -1;
          if (b.transOutFldName == null) return 1;
          return a.transOutFldName.localeCompare(b.transOutFldName);
        };
      case clsTabFieldRelaEN.con_IsTabPrimary:
        return (a: clsTabFieldRelaEN) => {
          if (a.isTabPrimary == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_IsTabForeignKey:
        return (a: clsTabFieldRelaEN) => {
          if (a.isTabForeignKey == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_PrimaryTypeId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.primaryTypeId == null) return -1;
          if (b.primaryTypeId == null) return 1;
          return a.primaryTypeId.localeCompare(b.primaryTypeId);
        };
      case clsTabFieldRelaEN.con_IsIdentity:
        return (a: clsTabFieldRelaEN) => {
          if (a.isIdentity == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_IsTabUnique:
        return (a: clsTabFieldRelaEN) => {
          if (a.isTabUnique == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_IsTabNullable:
        return (a: clsTabFieldRelaEN) => {
          if (a.isTabNullable == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_FieldTypeId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey:
        return (a: clsTabFieldRelaEN) => {
          if (a.isNeedCheckPriForeignKey == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_PrimaryKeyTabName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.primaryKeyTabName == null) return -1;
          if (b.primaryKeyTabName == null) return 1;
          return a.primaryKeyTabName.localeCompare(b.primaryKeyTabName);
        };
      case clsTabFieldRelaEN.con_PrimaryKeyFieldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.primaryKeyFieldName == null) return -1;
          if (b.primaryKeyFieldName == null) return 1;
          return a.primaryKeyFieldName.localeCompare(b.primaryKeyFieldName);
        };
      case clsTabFieldRelaEN.con_TransMissingValue:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.transMissingValue == null) return -1;
          if (b.transMissingValue == null) return 1;
          return a.transMissingValue.localeCompare(b.transMissingValue);
        };
      case clsTabFieldRelaEN.con_TransNullValue:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.transNullValue == null) return -1;
          if (b.transNullValue == null) return 1;
          return a.transNullValue.localeCompare(b.transNullValue);
        };
      case clsTabFieldRelaEN.con_PrjId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsTabFieldRelaEN.con_IsVisible:
        return (a: clsTabFieldRelaEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_SequenceNumber:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.sequenceNumber - b.sequenceNumber;
        };
      case clsTabFieldRelaEN.con_Memo:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsTabFieldRelaEN.con_FieldTypeIdS:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.fieldTypeIdS == null) return -1;
          if (b.fieldTypeIdS == null) return 1;
          return a.fieldTypeIdS.localeCompare(b.fieldTypeIdS);
        };
      case clsTabFieldRelaEN.con_FldLengthS:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.fldLengthS - b.fldLengthS;
        };
      case clsTabFieldRelaEN.con_ForeignKeyTabId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.foreignKeyTabId == null) return -1;
          if (b.foreignKeyTabId == null) return 1;
          return a.foreignKeyTabId.localeCompare(b.foreignKeyTabId);
        };
      case clsTabFieldRelaEN.con_HashIndex:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return a.hashIndex - b.hashIndex;
        };
      case clsTabFieldRelaEN.con_IsUseHash:
        return (a: clsTabFieldRelaEN) => {
          if (a.isUseHash == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_Prefix:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.prefix == null) return -1;
          if (b.prefix == null) return 1;
          return a.prefix.localeCompare(b.prefix);
        };
      case clsTabFieldRelaEN.con_PrefixFldId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.prefixFldId == null) return -1;
          if (b.prefixFldId == null) return 1;
          return a.prefixFldId.localeCompare(b.prefixFldId);
        };
      case clsTabFieldRelaEN.con_vFieldCnName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (a.vFieldCnName == null) return -1;
          if (b.vFieldCnName == null) return 1;
          return a.vFieldCnName.localeCompare(b.vFieldCnName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFieldRela]中不存在!(in ${tabFieldRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTabFieldRelaEN.con_IdFieldTabRela:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.idFieldTabRela - a.idFieldTabRela;
        };
      case clsTabFieldRelaEN.con_FldId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsTabFieldRelaEN.con_TabId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsTabFieldRelaEN.con_SqlFldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.sqlFldName == null) return -1;
          if (a.sqlFldName == null) return 1;
          return b.sqlFldName.localeCompare(a.sqlFldName);
        };
      case clsTabFieldRelaEN.con_ExcelFieldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.excelFieldName == null) return -1;
          if (a.excelFieldName == null) return 1;
          return b.excelFieldName.localeCompare(a.excelFieldName);
        };
      case clsTabFieldRelaEN.con_DefaultValue:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsTabFieldRelaEN.con_IsNeedTrans:
        return (b: clsTabFieldRelaEN) => {
          if (b.isNeedTrans == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_TransWayId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.transWayId.localeCompare(a.transWayId);
        };
      case clsTabFieldRelaEN.con_TransTabName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.transTabName == null) return -1;
          if (a.transTabName == null) return 1;
          return b.transTabName.localeCompare(a.transTabName);
        };
      case clsTabFieldRelaEN.con_TransInFldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.transInFldName == null) return -1;
          if (a.transInFldName == null) return 1;
          return b.transInFldName.localeCompare(a.transInFldName);
        };
      case clsTabFieldRelaEN.con_TransOutFldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.transOutFldName == null) return -1;
          if (a.transOutFldName == null) return 1;
          return b.transOutFldName.localeCompare(a.transOutFldName);
        };
      case clsTabFieldRelaEN.con_IsTabPrimary:
        return (b: clsTabFieldRelaEN) => {
          if (b.isTabPrimary == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_IsTabForeignKey:
        return (b: clsTabFieldRelaEN) => {
          if (b.isTabForeignKey == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_PrimaryTypeId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.primaryTypeId == null) return -1;
          if (a.primaryTypeId == null) return 1;
          return b.primaryTypeId.localeCompare(a.primaryTypeId);
        };
      case clsTabFieldRelaEN.con_IsIdentity:
        return (b: clsTabFieldRelaEN) => {
          if (b.isIdentity == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_IsTabUnique:
        return (b: clsTabFieldRelaEN) => {
          if (b.isTabUnique == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_IsTabNullable:
        return (b: clsTabFieldRelaEN) => {
          if (b.isTabNullable == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_FieldTypeId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey:
        return (b: clsTabFieldRelaEN) => {
          if (b.isNeedCheckPriForeignKey == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_PrimaryKeyTabName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.primaryKeyTabName == null) return -1;
          if (a.primaryKeyTabName == null) return 1;
          return b.primaryKeyTabName.localeCompare(a.primaryKeyTabName);
        };
      case clsTabFieldRelaEN.con_PrimaryKeyFieldName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.primaryKeyFieldName == null) return -1;
          if (a.primaryKeyFieldName == null) return 1;
          return b.primaryKeyFieldName.localeCompare(a.primaryKeyFieldName);
        };
      case clsTabFieldRelaEN.con_TransMissingValue:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.transMissingValue == null) return -1;
          if (a.transMissingValue == null) return 1;
          return b.transMissingValue.localeCompare(a.transMissingValue);
        };
      case clsTabFieldRelaEN.con_TransNullValue:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.transNullValue == null) return -1;
          if (a.transNullValue == null) return 1;
          return b.transNullValue.localeCompare(a.transNullValue);
        };
      case clsTabFieldRelaEN.con_PrjId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsTabFieldRelaEN.con_IsVisible:
        return (b: clsTabFieldRelaEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_SequenceNumber:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.sequenceNumber - a.sequenceNumber;
        };
      case clsTabFieldRelaEN.con_Memo:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsTabFieldRelaEN.con_FieldTypeIdS:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.fieldTypeIdS == null) return -1;
          if (a.fieldTypeIdS == null) return 1;
          return b.fieldTypeIdS.localeCompare(a.fieldTypeIdS);
        };
      case clsTabFieldRelaEN.con_FldLengthS:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.fldLengthS - a.fldLengthS;
        };
      case clsTabFieldRelaEN.con_ForeignKeyTabId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.foreignKeyTabId == null) return -1;
          if (a.foreignKeyTabId == null) return 1;
          return b.foreignKeyTabId.localeCompare(a.foreignKeyTabId);
        };
      case clsTabFieldRelaEN.con_HashIndex:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          return b.hashIndex - a.hashIndex;
        };
      case clsTabFieldRelaEN.con_IsUseHash:
        return (b: clsTabFieldRelaEN) => {
          if (b.isUseHash == true) return 1;
          else return -1;
        };
      case clsTabFieldRelaEN.con_Prefix:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.prefix == null) return -1;
          if (a.prefix == null) return 1;
          return b.prefix.localeCompare(a.prefix);
        };
      case clsTabFieldRelaEN.con_PrefixFldId:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.prefixFldId == null) return -1;
          if (a.prefixFldId == null) return 1;
          return b.prefixFldId.localeCompare(a.prefixFldId);
        };
      case clsTabFieldRelaEN.con_vFieldCnName:
        return (a: clsTabFieldRelaEN, b: clsTabFieldRelaEN) => {
          if (b.vFieldCnName == null) return -1;
          if (a.vFieldCnName == null) return 1;
          return b.vFieldCnName.localeCompare(a.vFieldCnName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFieldRela]中不存在!(in ${tabFieldRela_ConstructorName}.${strThisFuncName})`;
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
export async function TabFieldRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTabFieldRelaEN.con_IdFieldTabRela:
      return (obj: clsTabFieldRelaEN) => {
        return obj.idFieldTabRela === value;
      };
    case clsTabFieldRelaEN.con_FldId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.fldId === value;
      };
    case clsTabFieldRelaEN.con_TabId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.tabId === value;
      };
    case clsTabFieldRelaEN.con_SqlFldName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.sqlFldName === value;
      };
    case clsTabFieldRelaEN.con_ExcelFieldName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.excelFieldName === value;
      };
    case clsTabFieldRelaEN.con_DefaultValue:
      return (obj: clsTabFieldRelaEN) => {
        return obj.defaultValue === value;
      };
    case clsTabFieldRelaEN.con_IsNeedTrans:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isNeedTrans === value;
      };
    case clsTabFieldRelaEN.con_TransWayId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.transWayId === value;
      };
    case clsTabFieldRelaEN.con_TransTabName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.transTabName === value;
      };
    case clsTabFieldRelaEN.con_TransInFldName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.transInFldName === value;
      };
    case clsTabFieldRelaEN.con_TransOutFldName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.transOutFldName === value;
      };
    case clsTabFieldRelaEN.con_IsTabPrimary:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isTabPrimary === value;
      };
    case clsTabFieldRelaEN.con_IsTabForeignKey:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isTabForeignKey === value;
      };
    case clsTabFieldRelaEN.con_PrimaryTypeId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.primaryTypeId === value;
      };
    case clsTabFieldRelaEN.con_IsIdentity:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isIdentity === value;
      };
    case clsTabFieldRelaEN.con_IsTabUnique:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isTabUnique === value;
      };
    case clsTabFieldRelaEN.con_IsTabNullable:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isTabNullable === value;
      };
    case clsTabFieldRelaEN.con_FieldTypeId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.fieldTypeId === value;
      };
    case clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isNeedCheckPriForeignKey === value;
      };
    case clsTabFieldRelaEN.con_PrimaryKeyTabName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.primaryKeyTabName === value;
      };
    case clsTabFieldRelaEN.con_PrimaryKeyFieldName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.primaryKeyFieldName === value;
      };
    case clsTabFieldRelaEN.con_TransMissingValue:
      return (obj: clsTabFieldRelaEN) => {
        return obj.transMissingValue === value;
      };
    case clsTabFieldRelaEN.con_TransNullValue:
      return (obj: clsTabFieldRelaEN) => {
        return obj.transNullValue === value;
      };
    case clsTabFieldRelaEN.con_PrjId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.prjId === value;
      };
    case clsTabFieldRelaEN.con_IsVisible:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isVisible === value;
      };
    case clsTabFieldRelaEN.con_SequenceNumber:
      return (obj: clsTabFieldRelaEN) => {
        return obj.sequenceNumber === value;
      };
    case clsTabFieldRelaEN.con_Memo:
      return (obj: clsTabFieldRelaEN) => {
        return obj.memo === value;
      };
    case clsTabFieldRelaEN.con_FieldTypeIdS:
      return (obj: clsTabFieldRelaEN) => {
        return obj.fieldTypeIdS === value;
      };
    case clsTabFieldRelaEN.con_FldLengthS:
      return (obj: clsTabFieldRelaEN) => {
        return obj.fldLengthS === value;
      };
    case clsTabFieldRelaEN.con_ForeignKeyTabId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.foreignKeyTabId === value;
      };
    case clsTabFieldRelaEN.con_HashIndex:
      return (obj: clsTabFieldRelaEN) => {
        return obj.hashIndex === value;
      };
    case clsTabFieldRelaEN.con_IsUseHash:
      return (obj: clsTabFieldRelaEN) => {
        return obj.isUseHash === value;
      };
    case clsTabFieldRelaEN.con_Prefix:
      return (obj: clsTabFieldRelaEN) => {
        return obj.prefix === value;
      };
    case clsTabFieldRelaEN.con_PrefixFldId:
      return (obj: clsTabFieldRelaEN) => {
        return obj.prefixFldId === value;
      };
    case clsTabFieldRelaEN.con_vFieldCnName:
      return (obj: clsTabFieldRelaEN) => {
        return obj.vFieldCnName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TabFieldRela]中不存在!(in ${tabFieldRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[TabFieldRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFieldRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTabFieldRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
      const objTabFieldRela = TabFieldRela_GetObjFromJsonObj(returnObj);
      return objTabFieldRela;
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTabFieldRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
          tabFieldRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFieldRela_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param arrIdFieldTabRela:关键字列表
 * @returns 对象列表
 **/
export async function TabFieldRela_GetObjLstByIdFieldTabRelaLstAsync(
  arrIdFieldTabRela: Array<string>,
): Promise<Array<clsTabFieldRelaEN>> {
  const strThisFuncName = 'GetObjLstByIdFieldTabRelaLstAsync';
  const strAction = 'GetObjLstByIdFieldTabRelaLst';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdFieldTabRela, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          tabFieldRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFieldRela_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByIdFieldTabRelaLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function TabFieldRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTabFieldRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
          tabFieldRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFieldRela_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTabFieldRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
          tabFieldRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFieldRela_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabFieldRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabFieldRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
          tabFieldRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFieldRela_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param lngIdFieldTabRela:关键字
 * @returns 获取删除的结果
 **/
export async function TabFieldRela_DelRecordAsync(lngIdFieldTabRela: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngIdFieldTabRela);

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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param arrIdFieldTabRela:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function TabFieldRela_DelTabFieldRelasAsync(
  arrIdFieldTabRela: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTabFieldRelasAsync';
  const strAction = 'DelTabFieldRelas';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdFieldTabRela, config);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_DelTabFieldRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTabFieldRelasByCondAsync';
  const strAction = 'DelTabFieldRelasByCond';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param objTabFieldRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFieldRela_AddNewRecordAsync(
  objTabFieldRelaEN: clsTabFieldRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTabFieldRelaEN);
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFieldRelaEN, config);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param objTabFieldRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TabFieldRela_AddNewRecordWithReturnKeyAsync(
  objTabFieldRelaEN: clsTabFieldRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFieldRelaEN, config);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param objTabFieldRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabFieldRela_UpdateRecordAsync(
  objTabFieldRelaEN: clsTabFieldRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTabFieldRelaEN.sfUpdFldSetStr === undefined ||
    objTabFieldRelaEN.sfUpdFldSetStr === null ||
    objTabFieldRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFieldRelaEN.idFieldTabRela,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFieldRelaEN, config);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param objTabFieldRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFieldRela_UpdateWithConditionAsync(
  objTabFieldRelaEN: clsTabFieldRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTabFieldRelaEN.sfUpdFldSetStr === undefined ||
    objTabFieldRelaEN.sfUpdFldSetStr === null ||
    objTabFieldRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFieldRelaEN.idFieldTabRela,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);
  objTabFieldRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFieldRelaEN, config);
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
 * @param lngIdFieldTabRela:关键字
 * @returns 是否存在?存在返回True
 **/
export async function TabFieldRela_IsExistAsync(lngIdFieldTabRela: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngIdFieldTabRela,
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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export async function TabFieldRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabFieldRela_Controller, strAction);

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
        tabFieldRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFieldRela_ConstructorName,
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
export function TabFieldRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TabFieldRela_CheckPropertyNew(pobjTabFieldRelaEN: clsTabFieldRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fldId) === true ||
    pobjTabFieldRelaEN.fldId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[字段Id]不能为空(In 表字段关系)!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.tabId) === true ||
    pobjTabFieldRelaEN.tabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[表ID]不能为空(In 表字段关系)!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjTabFieldRelaEN.transWayId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[转换方式ID]不能为空(In 表字段关系)!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prjId) === true ||
    pobjTabFieldRelaEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 表字段关系)!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjTabFieldRelaEN.fldId) == false && GetStrLen(pobjTabFieldRelaEN.fldId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.fldId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjTabFieldRelaEN.tabId) == false && GetStrLen(pobjTabFieldRelaEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.tabId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.sqlFldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.sqlFldName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Sql字段名称(sqlFldName)]的长度不能超过100(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.sqlFldName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.excelFieldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.excelFieldName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Excel字段名称(excelFieldName)]的长度不能超过100(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.excelFieldName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.defaultValue) == false &&
    GetStrLen(pobjTabFieldRelaEN.defaultValue) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[缺省值(defaultValue)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.defaultValue)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transWayId) == false &&
    GetStrLen(pobjTabFieldRelaEN.transWayId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[转换方式ID(transWayId)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transWayId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transTabName) == false &&
    GetStrLen(pobjTabFieldRelaEN.transTabName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[转换表名(transTabName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transTabName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transInFldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.transInFldName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[转换IN字段名(transInFldName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transInFldName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transOutFldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.transOutFldName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[转换Out字段名(transOutFldName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transOutFldName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryTypeId) == false &&
    GetStrLen(pobjTabFieldRelaEN.primaryTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.primaryTypeId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeId) == false &&
    GetStrLen(pobjTabFieldRelaEN.fieldTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.fieldTypeId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyTabName) == false &&
    GetStrLen(pobjTabFieldRelaEN.primaryKeyTabName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主键表(primaryKeyTabName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.primaryKeyTabName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyFieldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.primaryKeyFieldName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主键字段名(primaryKeyFieldName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.primaryKeyFieldName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transMissingValue) == false &&
    GetStrLen(pobjTabFieldRelaEN.transMissingValue) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[转换失败值(transMissingValue)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transMissingValue)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transNullValue) == false &&
    GetStrLen(pobjTabFieldRelaEN.transNullValue) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[转换空值(transNullValue)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transNullValue)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjTabFieldRelaEN.prjId) == false && GetStrLen(pobjTabFieldRelaEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.prjId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.memo) == false &&
    GetStrLen(pobjTabFieldRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.memo)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeIdS) == false &&
    GetStrLen(pobjTabFieldRelaEN.fieldTypeIdS) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[FieldTypeId_S(fieldTypeIdS)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.fieldTypeIdS)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.foreignKeyTabId) == false &&
    GetStrLen(pobjTabFieldRelaEN.foreignKeyTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[外键表ID(foreignKeyTabId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.foreignKeyTabId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefix) == false &&
    GetStrLen(pobjTabFieldRelaEN.prefix) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[前缀(prefix)]的长度不能超过10(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.prefix)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefixFldId) == false &&
    GetStrLen(pobjTabFieldRelaEN.prefixFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[前缀字段Id(prefixFldId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.prefixFldId)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.vFieldCnName) == false &&
    GetStrLen(pobjTabFieldRelaEN.vFieldCnName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[视图字段中文名称(vFieldCnName)]的长度不能超过100(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.vFieldCnName)(clsTabFieldRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabFieldRelaEN.idFieldTabRela &&
    undefined !== pobjTabFieldRelaEN.idFieldTabRela &&
    tzDataType.isNumber(pobjTabFieldRelaEN.idFieldTabRela) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段表关系流水号(idFieldTabRela)]的值:[$(pobjTabFieldRelaEN.idFieldTabRela)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fldId) == false &&
    undefined !== pobjTabFieldRelaEN.fldId &&
    tzDataType.isString(pobjTabFieldRelaEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段Id(fldId)]的值:[$(pobjTabFieldRelaEN.fldId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.tabId) == false &&
    undefined !== pobjTabFieldRelaEN.tabId &&
    tzDataType.isString(pobjTabFieldRelaEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjTabFieldRelaEN.tabId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.sqlFldName) == false &&
    undefined !== pobjTabFieldRelaEN.sqlFldName &&
    tzDataType.isString(pobjTabFieldRelaEN.sqlFldName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Sql字段名称(sqlFldName)]的值:[$(pobjTabFieldRelaEN.sqlFldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.excelFieldName) == false &&
    undefined !== pobjTabFieldRelaEN.excelFieldName &&
    tzDataType.isString(pobjTabFieldRelaEN.excelFieldName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Excel字段名称(excelFieldName)]的值:[$(pobjTabFieldRelaEN.excelFieldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.defaultValue) == false &&
    undefined !== pobjTabFieldRelaEN.defaultValue &&
    tzDataType.isString(pobjTabFieldRelaEN.defaultValue) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[缺省值(defaultValue)]的值:[$(pobjTabFieldRelaEN.defaultValue)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isNeedTrans &&
    undefined !== pobjTabFieldRelaEN.isNeedTrans &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isNeedTrans) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否需要转换(isNeedTrans)]的值:[$(pobjTabFieldRelaEN.isNeedTrans)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transWayId) == false &&
    undefined !== pobjTabFieldRelaEN.transWayId &&
    tzDataType.isString(pobjTabFieldRelaEN.transWayId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[转换方式ID(transWayId)]的值:[$(pobjTabFieldRelaEN.transWayId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transTabName) == false &&
    undefined !== pobjTabFieldRelaEN.transTabName &&
    tzDataType.isString(pobjTabFieldRelaEN.transTabName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[转换表名(transTabName)]的值:[$(pobjTabFieldRelaEN.transTabName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transInFldName) == false &&
    undefined !== pobjTabFieldRelaEN.transInFldName &&
    tzDataType.isString(pobjTabFieldRelaEN.transInFldName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[转换IN字段名(transInFldName)]的值:[$(pobjTabFieldRelaEN.transInFldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transOutFldName) == false &&
    undefined !== pobjTabFieldRelaEN.transOutFldName &&
    tzDataType.isString(pobjTabFieldRelaEN.transOutFldName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[转换Out字段名(transOutFldName)]的值:[$(pobjTabFieldRelaEN.transOutFldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabPrimary &&
    undefined !== pobjTabFieldRelaEN.isTabPrimary &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabPrimary) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否作为表中主键(isTabPrimary)]的值:[$(pobjTabFieldRelaEN.isTabPrimary)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabForeignKey &&
    undefined !== pobjTabFieldRelaEN.isTabForeignKey &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabForeignKey) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否表外键(isTabForeignKey)]的值:[$(pobjTabFieldRelaEN.isTabForeignKey)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryTypeId) == false &&
    undefined !== pobjTabFieldRelaEN.primaryTypeId &&
    tzDataType.isString(pobjTabFieldRelaEN.primaryTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主键类型ID(primaryTypeId)]的值:[$(pobjTabFieldRelaEN.primaryTypeId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isIdentity &&
    undefined !== pobjTabFieldRelaEN.isIdentity &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isIdentity) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否Identity(isIdentity)]的值:[$(pobjTabFieldRelaEN.isIdentity)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabUnique &&
    undefined !== pobjTabFieldRelaEN.isTabUnique &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabUnique) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否表中唯一(isTabUnique)]的值:[$(pobjTabFieldRelaEN.isTabUnique)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabNullable &&
    undefined !== pobjTabFieldRelaEN.isTabNullable &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabNullable) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否表中可空(isTabNullable)]的值:[$(pobjTabFieldRelaEN.isTabNullable)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeId) == false &&
    undefined !== pobjTabFieldRelaEN.fieldTypeId &&
    tzDataType.isString(pobjTabFieldRelaEN.fieldTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[$(pobjTabFieldRelaEN.fieldTypeId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isNeedCheckPriForeignKey &&
    undefined !== pobjTabFieldRelaEN.isNeedCheckPriForeignKey &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isNeedCheckPriForeignKey) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否检查主外键(isNeedCheckPriForeignKey)]的值:[$(pobjTabFieldRelaEN.isNeedCheckPriForeignKey)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyTabName) == false &&
    undefined !== pobjTabFieldRelaEN.primaryKeyTabName &&
    tzDataType.isString(pobjTabFieldRelaEN.primaryKeyTabName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主键表(primaryKeyTabName)]的值:[$(pobjTabFieldRelaEN.primaryKeyTabName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyFieldName) == false &&
    undefined !== pobjTabFieldRelaEN.primaryKeyFieldName &&
    tzDataType.isString(pobjTabFieldRelaEN.primaryKeyFieldName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主键字段名(primaryKeyFieldName)]的值:[$(pobjTabFieldRelaEN.primaryKeyFieldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transMissingValue) == false &&
    undefined !== pobjTabFieldRelaEN.transMissingValue &&
    tzDataType.isString(pobjTabFieldRelaEN.transMissingValue) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[转换失败值(transMissingValue)]的值:[$(pobjTabFieldRelaEN.transMissingValue)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transNullValue) == false &&
    undefined !== pobjTabFieldRelaEN.transNullValue &&
    tzDataType.isString(pobjTabFieldRelaEN.transNullValue) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[转换空值(transNullValue)]的值:[$(pobjTabFieldRelaEN.transNullValue)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prjId) == false &&
    undefined !== pobjTabFieldRelaEN.prjId &&
    tzDataType.isString(pobjTabFieldRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjTabFieldRelaEN.prjId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isVisible &&
    undefined !== pobjTabFieldRelaEN.isVisible &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否显示(isVisible)]的值:[$(pobjTabFieldRelaEN.isVisible)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.sequenceNumber &&
    undefined !== pobjTabFieldRelaEN.sequenceNumber &&
    tzDataType.isNumber(pobjTabFieldRelaEN.sequenceNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[顺序号(sequenceNumber)]的值:[$(pobjTabFieldRelaEN.sequenceNumber)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.memo) == false &&
    undefined !== pobjTabFieldRelaEN.memo &&
    tzDataType.isString(pobjTabFieldRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjTabFieldRelaEN.memo)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeIdS) == false &&
    undefined !== pobjTabFieldRelaEN.fieldTypeIdS &&
    tzDataType.isString(pobjTabFieldRelaEN.fieldTypeIdS) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[FieldTypeId_S(fieldTypeIdS)]的值:[$(pobjTabFieldRelaEN.fieldTypeIdS)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.fldLengthS &&
    undefined !== pobjTabFieldRelaEN.fldLengthS &&
    tzDataType.isNumber(pobjTabFieldRelaEN.fldLengthS) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[FldLength_S(fldLengthS)]的值:[$(pobjTabFieldRelaEN.fldLengthS)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.foreignKeyTabId) == false &&
    undefined !== pobjTabFieldRelaEN.foreignKeyTabId &&
    tzDataType.isString(pobjTabFieldRelaEN.foreignKeyTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[外键表ID(foreignKeyTabId)]的值:[$(pobjTabFieldRelaEN.foreignKeyTabId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.hashIndex &&
    undefined !== pobjTabFieldRelaEN.hashIndex &&
    tzDataType.isNumber(pobjTabFieldRelaEN.hashIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[HASH表序号(hashIndex)]的值:[$(pobjTabFieldRelaEN.hashIndex)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isUseHash &&
    undefined !== pobjTabFieldRelaEN.isUseHash &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isUseHash) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否用HASH表(isUseHash)]的值:[$(pobjTabFieldRelaEN.isUseHash)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefix) == false &&
    undefined !== pobjTabFieldRelaEN.prefix &&
    tzDataType.isString(pobjTabFieldRelaEN.prefix) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[前缀(prefix)]的值:[$(pobjTabFieldRelaEN.prefix)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefixFldId) == false &&
    undefined !== pobjTabFieldRelaEN.prefixFldId &&
    tzDataType.isString(pobjTabFieldRelaEN.prefixFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[前缀字段Id(prefixFldId)]的值:[$(pobjTabFieldRelaEN.prefixFldId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.vFieldCnName) == false &&
    undefined !== pobjTabFieldRelaEN.vFieldCnName &&
    tzDataType.isString(pobjTabFieldRelaEN.vFieldCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[视图字段中文名称(vFieldCnName)]的值:[$(pobjTabFieldRelaEN.vFieldCnName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.tabId) == false &&
    pobjTabFieldRelaEN.tabId != '[nuull]' &&
    GetStrLen(pobjTabFieldRelaEN.tabId) != 8
  ) {
    throw '(errid:Watl000415)字段[表ID]作为外键字段,长度应该为8(In 表字段关系)!(clsTabFieldRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabFieldRela_CheckProperty4Update(pobjTabFieldRelaEN: clsTabFieldRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjTabFieldRelaEN.fldId) == false && GetStrLen(pobjTabFieldRelaEN.fldId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.fldId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjTabFieldRelaEN.tabId) == false && GetStrLen(pobjTabFieldRelaEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.tabId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.sqlFldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.sqlFldName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Sql字段名称(sqlFldName)]的长度不能超过100(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.sqlFldName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.excelFieldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.excelFieldName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Excel字段名称(excelFieldName)]的长度不能超过100(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.excelFieldName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.defaultValue) == false &&
    GetStrLen(pobjTabFieldRelaEN.defaultValue) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[缺省值(defaultValue)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.defaultValue)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transWayId) == false &&
    GetStrLen(pobjTabFieldRelaEN.transWayId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[转换方式ID(transWayId)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transWayId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transTabName) == false &&
    GetStrLen(pobjTabFieldRelaEN.transTabName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[转换表名(transTabName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transTabName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transInFldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.transInFldName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[转换IN字段名(transInFldName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transInFldName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transOutFldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.transOutFldName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[转换Out字段名(transOutFldName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transOutFldName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryTypeId) == false &&
    GetStrLen(pobjTabFieldRelaEN.primaryTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主键类型ID(primaryTypeId)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.primaryTypeId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeId) == false &&
    GetStrLen(pobjTabFieldRelaEN.fieldTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.fieldTypeId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyTabName) == false &&
    GetStrLen(pobjTabFieldRelaEN.primaryKeyTabName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主键表(primaryKeyTabName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.primaryKeyTabName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyFieldName) == false &&
    GetStrLen(pobjTabFieldRelaEN.primaryKeyFieldName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主键字段名(primaryKeyFieldName)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.primaryKeyFieldName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transMissingValue) == false &&
    GetStrLen(pobjTabFieldRelaEN.transMissingValue) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[转换失败值(transMissingValue)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transMissingValue)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transNullValue) == false &&
    GetStrLen(pobjTabFieldRelaEN.transNullValue) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[转换空值(transNullValue)]的长度不能超过50(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.transNullValue)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjTabFieldRelaEN.prjId) == false && GetStrLen(pobjTabFieldRelaEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.prjId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.memo) == false &&
    GetStrLen(pobjTabFieldRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.memo)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeIdS) == false &&
    GetStrLen(pobjTabFieldRelaEN.fieldTypeIdS) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[FieldTypeId_S(fieldTypeIdS)]的长度不能超过2(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.fieldTypeIdS)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.foreignKeyTabId) == false &&
    GetStrLen(pobjTabFieldRelaEN.foreignKeyTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[外键表ID(foreignKeyTabId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.foreignKeyTabId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefix) == false &&
    GetStrLen(pobjTabFieldRelaEN.prefix) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[前缀(prefix)]的长度不能超过10(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.prefix)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefixFldId) == false &&
    GetStrLen(pobjTabFieldRelaEN.prefixFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[前缀字段Id(prefixFldId)]的长度不能超过8(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.prefixFldId)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.vFieldCnName) == false &&
    GetStrLen(pobjTabFieldRelaEN.vFieldCnName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[视图字段中文名称(vFieldCnName)]的长度不能超过100(In 表字段关系(TabFieldRela))!值:$(pobjTabFieldRelaEN.vFieldCnName)(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjTabFieldRelaEN.idFieldTabRela &&
    undefined !== pobjTabFieldRelaEN.idFieldTabRela &&
    tzDataType.isNumber(pobjTabFieldRelaEN.idFieldTabRela) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段表关系流水号(idFieldTabRela)]的值:[$(pobjTabFieldRelaEN.idFieldTabRela)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fldId) == false &&
    undefined !== pobjTabFieldRelaEN.fldId &&
    tzDataType.isString(pobjTabFieldRelaEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段Id(fldId)]的值:[$(pobjTabFieldRelaEN.fldId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.tabId) == false &&
    undefined !== pobjTabFieldRelaEN.tabId &&
    tzDataType.isString(pobjTabFieldRelaEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjTabFieldRelaEN.tabId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.sqlFldName) == false &&
    undefined !== pobjTabFieldRelaEN.sqlFldName &&
    tzDataType.isString(pobjTabFieldRelaEN.sqlFldName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Sql字段名称(sqlFldName)]的值:[$(pobjTabFieldRelaEN.sqlFldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.excelFieldName) == false &&
    undefined !== pobjTabFieldRelaEN.excelFieldName &&
    tzDataType.isString(pobjTabFieldRelaEN.excelFieldName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Excel字段名称(excelFieldName)]的值:[$(pobjTabFieldRelaEN.excelFieldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.defaultValue) == false &&
    undefined !== pobjTabFieldRelaEN.defaultValue &&
    tzDataType.isString(pobjTabFieldRelaEN.defaultValue) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[缺省值(defaultValue)]的值:[$(pobjTabFieldRelaEN.defaultValue)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isNeedTrans &&
    undefined !== pobjTabFieldRelaEN.isNeedTrans &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isNeedTrans) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否需要转换(isNeedTrans)]的值:[$(pobjTabFieldRelaEN.isNeedTrans)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transWayId) == false &&
    undefined !== pobjTabFieldRelaEN.transWayId &&
    tzDataType.isString(pobjTabFieldRelaEN.transWayId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[转换方式ID(transWayId)]的值:[$(pobjTabFieldRelaEN.transWayId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transTabName) == false &&
    undefined !== pobjTabFieldRelaEN.transTabName &&
    tzDataType.isString(pobjTabFieldRelaEN.transTabName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[转换表名(transTabName)]的值:[$(pobjTabFieldRelaEN.transTabName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transInFldName) == false &&
    undefined !== pobjTabFieldRelaEN.transInFldName &&
    tzDataType.isString(pobjTabFieldRelaEN.transInFldName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[转换IN字段名(transInFldName)]的值:[$(pobjTabFieldRelaEN.transInFldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transOutFldName) == false &&
    undefined !== pobjTabFieldRelaEN.transOutFldName &&
    tzDataType.isString(pobjTabFieldRelaEN.transOutFldName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[转换Out字段名(transOutFldName)]的值:[$(pobjTabFieldRelaEN.transOutFldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabPrimary &&
    undefined !== pobjTabFieldRelaEN.isTabPrimary &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabPrimary) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否作为表中主键(isTabPrimary)]的值:[$(pobjTabFieldRelaEN.isTabPrimary)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabForeignKey &&
    undefined !== pobjTabFieldRelaEN.isTabForeignKey &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabForeignKey) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否表外键(isTabForeignKey)]的值:[$(pobjTabFieldRelaEN.isTabForeignKey)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryTypeId) == false &&
    undefined !== pobjTabFieldRelaEN.primaryTypeId &&
    tzDataType.isString(pobjTabFieldRelaEN.primaryTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主键类型ID(primaryTypeId)]的值:[$(pobjTabFieldRelaEN.primaryTypeId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isIdentity &&
    undefined !== pobjTabFieldRelaEN.isIdentity &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isIdentity) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否Identity(isIdentity)]的值:[$(pobjTabFieldRelaEN.isIdentity)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabUnique &&
    undefined !== pobjTabFieldRelaEN.isTabUnique &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabUnique) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否表中唯一(isTabUnique)]的值:[$(pobjTabFieldRelaEN.isTabUnique)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isTabNullable &&
    undefined !== pobjTabFieldRelaEN.isTabNullable &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isTabNullable) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否表中可空(isTabNullable)]的值:[$(pobjTabFieldRelaEN.isTabNullable)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeId) == false &&
    undefined !== pobjTabFieldRelaEN.fieldTypeId &&
    tzDataType.isString(pobjTabFieldRelaEN.fieldTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[$(pobjTabFieldRelaEN.fieldTypeId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isNeedCheckPriForeignKey &&
    undefined !== pobjTabFieldRelaEN.isNeedCheckPriForeignKey &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isNeedCheckPriForeignKey) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否检查主外键(isNeedCheckPriForeignKey)]的值:[$(pobjTabFieldRelaEN.isNeedCheckPriForeignKey)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyTabName) == false &&
    undefined !== pobjTabFieldRelaEN.primaryKeyTabName &&
    tzDataType.isString(pobjTabFieldRelaEN.primaryKeyTabName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主键表(primaryKeyTabName)]的值:[$(pobjTabFieldRelaEN.primaryKeyTabName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.primaryKeyFieldName) == false &&
    undefined !== pobjTabFieldRelaEN.primaryKeyFieldName &&
    tzDataType.isString(pobjTabFieldRelaEN.primaryKeyFieldName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主键字段名(primaryKeyFieldName)]的值:[$(pobjTabFieldRelaEN.primaryKeyFieldName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transMissingValue) == false &&
    undefined !== pobjTabFieldRelaEN.transMissingValue &&
    tzDataType.isString(pobjTabFieldRelaEN.transMissingValue) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[转换失败值(transMissingValue)]的值:[$(pobjTabFieldRelaEN.transMissingValue)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.transNullValue) == false &&
    undefined !== pobjTabFieldRelaEN.transNullValue &&
    tzDataType.isString(pobjTabFieldRelaEN.transNullValue) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[转换空值(transNullValue)]的值:[$(pobjTabFieldRelaEN.transNullValue)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prjId) == false &&
    undefined !== pobjTabFieldRelaEN.prjId &&
    tzDataType.isString(pobjTabFieldRelaEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjTabFieldRelaEN.prjId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isVisible &&
    undefined !== pobjTabFieldRelaEN.isVisible &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isVisible) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否显示(isVisible)]的值:[$(pobjTabFieldRelaEN.isVisible)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.sequenceNumber &&
    undefined !== pobjTabFieldRelaEN.sequenceNumber &&
    tzDataType.isNumber(pobjTabFieldRelaEN.sequenceNumber) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[顺序号(sequenceNumber)]的值:[$(pobjTabFieldRelaEN.sequenceNumber)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.memo) == false &&
    undefined !== pobjTabFieldRelaEN.memo &&
    tzDataType.isString(pobjTabFieldRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjTabFieldRelaEN.memo)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.fieldTypeIdS) == false &&
    undefined !== pobjTabFieldRelaEN.fieldTypeIdS &&
    tzDataType.isString(pobjTabFieldRelaEN.fieldTypeIdS) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[FieldTypeId_S(fieldTypeIdS)]的值:[$(pobjTabFieldRelaEN.fieldTypeIdS)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.fldLengthS &&
    undefined !== pobjTabFieldRelaEN.fldLengthS &&
    tzDataType.isNumber(pobjTabFieldRelaEN.fldLengthS) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[FldLength_S(fldLengthS)]的值:[$(pobjTabFieldRelaEN.fldLengthS)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.foreignKeyTabId) == false &&
    undefined !== pobjTabFieldRelaEN.foreignKeyTabId &&
    tzDataType.isString(pobjTabFieldRelaEN.foreignKeyTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[外键表ID(foreignKeyTabId)]的值:[$(pobjTabFieldRelaEN.foreignKeyTabId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.hashIndex &&
    undefined !== pobjTabFieldRelaEN.hashIndex &&
    tzDataType.isNumber(pobjTabFieldRelaEN.hashIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[HASH表序号(hashIndex)]的值:[$(pobjTabFieldRelaEN.hashIndex)], 非法,应该为数值型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjTabFieldRelaEN.isUseHash &&
    undefined !== pobjTabFieldRelaEN.isUseHash &&
    tzDataType.isBoolean(pobjTabFieldRelaEN.isUseHash) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否用HASH表(isUseHash)]的值:[$(pobjTabFieldRelaEN.isUseHash)], 非法,应该为布尔型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefix) == false &&
    undefined !== pobjTabFieldRelaEN.prefix &&
    tzDataType.isString(pobjTabFieldRelaEN.prefix) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[前缀(prefix)]的值:[$(pobjTabFieldRelaEN.prefix)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.prefixFldId) == false &&
    undefined !== pobjTabFieldRelaEN.prefixFldId &&
    tzDataType.isString(pobjTabFieldRelaEN.prefixFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[前缀字段Id(prefixFldId)]的值:[$(pobjTabFieldRelaEN.prefixFldId)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.vFieldCnName) == false &&
    undefined !== pobjTabFieldRelaEN.vFieldCnName &&
    tzDataType.isString(pobjTabFieldRelaEN.vFieldCnName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[视图字段中文名称(vFieldCnName)]的值:[$(pobjTabFieldRelaEN.vFieldCnName)], 非法,应该为字符型(In 表字段关系(TabFieldRela))!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjTabFieldRelaEN.idFieldTabRela ||
    (pobjTabFieldRelaEN.idFieldTabRela != null &&
      pobjTabFieldRelaEN.idFieldTabRela.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[字段表关系流水号]不能为空(In 表字段关系)!(clsTabFieldRelaBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTabFieldRelaEN.tabId) == false &&
    pobjTabFieldRelaEN.tabId != '[nuull]' &&
    GetStrLen(pobjTabFieldRelaEN.tabId) != 8
  ) {
    throw '(errid:Watl000418)字段[表ID]作为外键字段,长度应该为8(In 表字段关系)!(clsTabFieldRelaBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabFieldRela_GetJSONStrByObj(pobjTabFieldRelaEN: clsTabFieldRelaEN): string {
  pobjTabFieldRelaEN.sfUpdFldSetStr = pobjTabFieldRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTabFieldRelaEN);
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
export function TabFieldRela_GetObjLstByJSONStr(strJSON: string): Array<clsTabFieldRelaEN> {
  let arrTabFieldRelaObjLst = new Array<clsTabFieldRelaEN>();
  if (strJSON === '') {
    return arrTabFieldRelaObjLst;
  }
  try {
    arrTabFieldRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTabFieldRelaObjLst;
  }
  return arrTabFieldRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTabFieldRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TabFieldRela_GetObjLstByJSONObjLst(
  arrTabFieldRelaObjLstS: Array<clsTabFieldRelaEN>,
): Array<clsTabFieldRelaEN> {
  const arrTabFieldRelaObjLst = new Array<clsTabFieldRelaEN>();
  for (const objInFor of arrTabFieldRelaObjLstS) {
    const obj1 = TabFieldRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTabFieldRelaObjLst.push(obj1);
  }
  return arrTabFieldRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabFieldRela_GetObjByJSONStr(strJSON: string): clsTabFieldRelaEN {
  let pobjTabFieldRelaEN = new clsTabFieldRelaEN();
  if (strJSON === '') {
    return pobjTabFieldRelaEN;
  }
  try {
    pobjTabFieldRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTabFieldRelaEN;
  }
  return pobjTabFieldRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TabFieldRela_GetCombineCondition(objTabFieldRelaCond: clsTabFieldRelaEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IdFieldTabRela,
    ) == true
  ) {
    const strComparisonOpIdFieldTabRela: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_IdFieldTabRela];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFieldRelaEN.con_IdFieldTabRela,
      objTabFieldRelaCond.idFieldTabRela,
      strComparisonOpIdFieldTabRela,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_FldId,
      objTabFieldRelaCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_TabId,
      objTabFieldRelaCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_SqlFldName,
    ) == true
  ) {
    const strComparisonOpSqlFldName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_SqlFldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_SqlFldName,
      objTabFieldRelaCond.sqlFldName,
      strComparisonOpSqlFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_ExcelFieldName,
    ) == true
  ) {
    const strComparisonOpExcelFieldName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_ExcelFieldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_ExcelFieldName,
      objTabFieldRelaCond.excelFieldName,
      strComparisonOpExcelFieldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_DefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_DefaultValue,
      objTabFieldRelaCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsNeedTrans,
    ) == true
  ) {
    if (objTabFieldRelaCond.isNeedTrans == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsNeedTrans);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsNeedTrans);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_TransWayId,
    ) == true
  ) {
    const strComparisonOpTransWayId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_TransWayId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_TransWayId,
      objTabFieldRelaCond.transWayId,
      strComparisonOpTransWayId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_TransTabName,
    ) == true
  ) {
    const strComparisonOpTransTabName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_TransTabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_TransTabName,
      objTabFieldRelaCond.transTabName,
      strComparisonOpTransTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_TransInFldName,
    ) == true
  ) {
    const strComparisonOpTransInFldName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_TransInFldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_TransInFldName,
      objTabFieldRelaCond.transInFldName,
      strComparisonOpTransInFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_TransOutFldName,
    ) == true
  ) {
    const strComparisonOpTransOutFldName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_TransOutFldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_TransOutFldName,
      objTabFieldRelaCond.transOutFldName,
      strComparisonOpTransOutFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsTabPrimary,
    ) == true
  ) {
    if (objTabFieldRelaCond.isTabPrimary == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsTabPrimary);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsTabPrimary);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsTabForeignKey,
    ) == true
  ) {
    if (objTabFieldRelaCond.isTabForeignKey == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsTabForeignKey);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsTabForeignKey);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_PrimaryTypeId,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_PrimaryTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_PrimaryTypeId,
      objTabFieldRelaCond.primaryTypeId,
      strComparisonOpPrimaryTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsIdentity,
    ) == true
  ) {
    if (objTabFieldRelaCond.isIdentity == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsIdentity);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsIdentity);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsTabUnique,
    ) == true
  ) {
    if (objTabFieldRelaCond.isTabUnique == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsTabUnique);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsTabUnique);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsTabNullable,
    ) == true
  ) {
    if (objTabFieldRelaCond.isTabNullable == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsTabNullable);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsTabNullable);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_FieldTypeId,
      objTabFieldRelaCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey,
    ) == true
  ) {
    if (objTabFieldRelaCond.isNeedCheckPriForeignKey == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_PrimaryKeyTabName,
    ) == true
  ) {
    const strComparisonOpPrimaryKeyTabName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_PrimaryKeyTabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_PrimaryKeyTabName,
      objTabFieldRelaCond.primaryKeyTabName,
      strComparisonOpPrimaryKeyTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_PrimaryKeyFieldName,
    ) == true
  ) {
    const strComparisonOpPrimaryKeyFieldName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_PrimaryKeyFieldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_PrimaryKeyFieldName,
      objTabFieldRelaCond.primaryKeyFieldName,
      strComparisonOpPrimaryKeyFieldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_TransMissingValue,
    ) == true
  ) {
    const strComparisonOpTransMissingValue: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_TransMissingValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_TransMissingValue,
      objTabFieldRelaCond.transMissingValue,
      strComparisonOpTransMissingValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_TransNullValue,
    ) == true
  ) {
    const strComparisonOpTransNullValue: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_TransNullValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_TransNullValue,
      objTabFieldRelaCond.transNullValue,
      strComparisonOpTransNullValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_PrjId,
      objTabFieldRelaCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsVisible,
    ) == true
  ) {
    if (objTabFieldRelaCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_SequenceNumber,
    ) == true
  ) {
    const strComparisonOpSequenceNumber: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_SequenceNumber];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFieldRelaEN.con_SequenceNumber,
      objTabFieldRelaCond.sequenceNumber,
      strComparisonOpSequenceNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_Memo,
      objTabFieldRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_FieldTypeIdS,
    ) == true
  ) {
    const strComparisonOpFieldTypeIdS: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_FieldTypeIdS];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_FieldTypeIdS,
      objTabFieldRelaCond.fieldTypeIdS,
      strComparisonOpFieldTypeIdS,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_FldLengthS,
    ) == true
  ) {
    const strComparisonOpFldLengthS: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_FldLengthS];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFieldRelaEN.con_FldLengthS,
      objTabFieldRelaCond.fldLengthS,
      strComparisonOpFldLengthS,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_ForeignKeyTabId,
    ) == true
  ) {
    const strComparisonOpForeignKeyTabId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_ForeignKeyTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_ForeignKeyTabId,
      objTabFieldRelaCond.foreignKeyTabId,
      strComparisonOpForeignKeyTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_HashIndex,
    ) == true
  ) {
    const strComparisonOpHashIndex: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_HashIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFieldRelaEN.con_HashIndex,
      objTabFieldRelaCond.hashIndex,
      strComparisonOpHashIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_IsUseHash,
    ) == true
  ) {
    if (objTabFieldRelaCond.isUseHash == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFieldRelaEN.con_IsUseHash);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFieldRelaEN.con_IsUseHash);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_Prefix,
    ) == true
  ) {
    const strComparisonOpPrefix: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_Prefix];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_Prefix,
      objTabFieldRelaCond.prefix,
      strComparisonOpPrefix,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_PrefixFldId,
    ) == true
  ) {
    const strComparisonOpPrefixFldId: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_PrefixFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_PrefixFldId,
      objTabFieldRelaCond.prefixFldId,
      strComparisonOpPrefixFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFieldRelaCond.dicFldComparisonOp,
      clsTabFieldRelaEN.con_vFieldCnName,
    ) == true
  ) {
    const strComparisonOpvFieldCnName: string =
      objTabFieldRelaCond.dicFldComparisonOp[clsTabFieldRelaEN.con_vFieldCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFieldRelaEN.con_vFieldCnName,
      objTabFieldRelaCond.vFieldCnName,
      strComparisonOpvFieldCnName,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFieldRela(表字段关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFieldRela_GetUniCondStr(objTabFieldRelaEN: clsTabFieldRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FldId = '{0}'", objTabFieldRelaEN.fldId);
  strWhereCond += Format(" and TabId = '{0}'", objTabFieldRelaEN.tabId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFieldRela(表字段关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strTabId: 表ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFieldRela_GetUniCondStr4Update(objTabFieldRelaEN: clsTabFieldRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdFieldTabRela <> '{0}'", objTabFieldRelaEN.idFieldTabRela);
  strWhereCond += Format(" and FldId = '{0}'", objTabFieldRelaEN.fldId);
  strWhereCond += Format(" and TabId = '{0}'", objTabFieldRelaEN.tabId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTabFieldRelaENS:源对象
 * @param objTabFieldRelaENT:目标对象
 */
export function TabFieldRela_GetObjFromJsonObj(
  objTabFieldRelaENS: clsTabFieldRelaEN,
): clsTabFieldRelaEN {
  const objTabFieldRelaENT: clsTabFieldRelaEN = new clsTabFieldRelaEN();
  ObjectAssign(objTabFieldRelaENT, objTabFieldRelaENS);
  return objTabFieldRelaENT;
}
