/**
 * 类名:clsExcelExportRegionFldsWApi
 * 表名:ExcelExportRegionFlds(00050149)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 19:03:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * Excel导出区域字段(ExcelExportRegionFlds)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  excelExportRegionFldsCache,
  isFuncMapCache,
} from '@/views/RegionManage/ExcelExportRegionFldsVueShare';
import { clsExcelExportRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsENEx';
import { clsExcelExportRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const excelExportRegionFlds_Controller = 'ExcelExportRegionFldsApi';
export const excelExportRegionFlds_ConstructorName = 'excelExportRegionFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ExcelExportRegionFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsExcelExportRegionFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsExcelExportRegionFldsWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
      const objExcelExportRegionFlds = ExcelExportRegionFlds_GetObjFromJsonObj(returnObj);
      return objExcelExportRegionFlds;
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ExcelExportRegionFlds_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsExcelExportRegionFldsWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objExcelExportRegionFldsCache: clsExcelExportRegionFldsEN = JSON.parse(strTempObj);
    return objExcelExportRegionFldsCache;
  }
  try {
    const objExcelExportRegionFlds = await ExcelExportRegionFlds_GetObjBymIdAsync(lngmId);
    if (objExcelExportRegionFlds != null) {
      localStorage.setItem(strKey, JSON.stringify(objExcelExportRegionFlds));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objExcelExportRegionFlds;
    }
    return objExcelExportRegionFlds;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ExcelExportRegionFlds_GetObjBymIdCache(
  lngmId: number,
  strRegionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsExcelExportRegionFldsWApi.GetObjBymIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
    strRegionId,
  );
  try {
    const arrExcelExportRegionFldsSel = arrExcelExportRegionFldsObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objExcelExportRegionFlds: clsExcelExportRegionFldsEN;
    if (arrExcelExportRegionFldsSel.length > 0) {
      objExcelExportRegionFlds = arrExcelExportRegionFldsSel[0];
      return objExcelExportRegionFlds;
    } else {
      if (bolTryAsyncOnce == true) {
        const objExcelExportRegionFldsConst = await ExcelExportRegionFlds_GetObjBymIdAsync(lngmId);
        if (objExcelExportRegionFldsConst != null) {
          ExcelExportRegionFlds_ReFreshThisCache(strRegionId);
          return objExcelExportRegionFldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objExcelExportRegionFlds:所给的对象
 * @returns 对象
 */
export async function ExcelExportRegionFlds_UpdateObjInLstCache(
  objExcelExportRegionFlds: clsExcelExportRegionFldsEN,
  strRegionId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
      strRegionId,
    );
    const obj = arrExcelExportRegionFldsObjLstCache.find(
      (x) =>
        x.regionId == objExcelExportRegionFlds.regionId &&
        x.fldId == objExcelExportRegionFlds.fldId &&
        x.outFldId == objExcelExportRegionFlds.outFldId,
    );
    if (obj != null) {
      objExcelExportRegionFlds.mId = obj.mId;
      ObjectAssign(obj, objExcelExportRegionFlds);
    } else {
      arrExcelExportRegionFldsObjLstCache.push(objExcelExportRegionFlds);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ExcelExportRegionFlds_SortFunDefa(
  a: clsExcelExportRegionFldsEN,
  b: clsExcelExportRegionFldsEN,
): number {
  return a.mId - b.mId;
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
export function ExcelExportRegionFlds_SortFunDefa2Fld(
  a: clsExcelExportRegionFldsEN,
  b: clsExcelExportRegionFldsEN,
): number {
  if (a.regionId == b.regionId) return a.fldId.localeCompare(b.fldId);
  else return a.regionId.localeCompare(b.regionId);
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
export function ExcelExportRegionFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsExcelExportRegionFldsEN.con_mId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return a.mId - b.mId;
        };
      case clsExcelExportRegionFldsEN.con_RegionId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsExcelExportRegionFldsEN.con_FldId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsExcelExportRegionFldsEN.con_OutFldId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (a.outFldId == null) return -1;
          if (b.outFldId == null) return 1;
          return a.outFldId.localeCompare(b.outFldId);
        };
      case clsExcelExportRegionFldsEN.con_SeqNum:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsExcelExportRegionFldsEN.con_ColCaption:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (a.colCaption == null) return -1;
          if (b.colCaption == null) return 1;
          return a.colCaption.localeCompare(b.colCaption);
        };
      case clsExcelExportRegionFldsEN.con_InUse:
        return (a: clsExcelExportRegionFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsExcelExportRegionFldsEN.con_ErrMsg:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsExcelExportRegionFldsEN.con_PrjId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsExcelExportRegionFldsEN.con_UpdDate:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsExcelExportRegionFldsEN.con_UpdUser:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsExcelExportRegionFldsEN.con_Memo:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsExcelExportRegionFldsEN.con_IsDefaultSort:
        return (a: clsExcelExportRegionFldsEN) => {
          if (a.isDefaultSort == true) return 1;
          else return -1;
        };
      case clsExcelExportRegionFldsEN.con_IsNeedSort:
        return (a: clsExcelExportRegionFldsEN) => {
          if (a.isNeedSort == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ExcelExportRegionFlds]中不存在!(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsExcelExportRegionFldsEN.con_mId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return b.mId - a.mId;
        };
      case clsExcelExportRegionFldsEN.con_RegionId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsExcelExportRegionFldsEN.con_FldId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsExcelExportRegionFldsEN.con_OutFldId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (b.outFldId == null) return -1;
          if (a.outFldId == null) return 1;
          return b.outFldId.localeCompare(a.outFldId);
        };
      case clsExcelExportRegionFldsEN.con_SeqNum:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsExcelExportRegionFldsEN.con_ColCaption:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (b.colCaption == null) return -1;
          if (a.colCaption == null) return 1;
          return b.colCaption.localeCompare(a.colCaption);
        };
      case clsExcelExportRegionFldsEN.con_InUse:
        return (b: clsExcelExportRegionFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsExcelExportRegionFldsEN.con_ErrMsg:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsExcelExportRegionFldsEN.con_PrjId:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsExcelExportRegionFldsEN.con_UpdDate:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsExcelExportRegionFldsEN.con_UpdUser:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsExcelExportRegionFldsEN.con_Memo:
        return (a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsExcelExportRegionFldsEN.con_IsDefaultSort:
        return (b: clsExcelExportRegionFldsEN) => {
          if (b.isDefaultSort == true) return 1;
          else return -1;
        };
      case clsExcelExportRegionFldsEN.con_IsNeedSort:
        return (b: clsExcelExportRegionFldsEN) => {
          if (b.isNeedSort == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ExcelExportRegionFlds]中不存在!(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ExcelExportRegionFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsExcelExportRegionFldsEN.con_mId:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.mId === value;
      };
    case clsExcelExportRegionFldsEN.con_RegionId:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.regionId === value;
      };
    case clsExcelExportRegionFldsEN.con_FldId:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.fldId === value;
      };
    case clsExcelExportRegionFldsEN.con_OutFldId:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.outFldId === value;
      };
    case clsExcelExportRegionFldsEN.con_SeqNum:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.seqNum === value;
      };
    case clsExcelExportRegionFldsEN.con_ColCaption:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.colCaption === value;
      };
    case clsExcelExportRegionFldsEN.con_InUse:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.inUse === value;
      };
    case clsExcelExportRegionFldsEN.con_ErrMsg:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.errMsg === value;
      };
    case clsExcelExportRegionFldsEN.con_PrjId:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.prjId === value;
      };
    case clsExcelExportRegionFldsEN.con_UpdDate:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.updDate === value;
      };
    case clsExcelExportRegionFldsEN.con_UpdUser:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.updUser === value;
      };
    case clsExcelExportRegionFldsEN.con_Memo:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.memo === value;
      };
    case clsExcelExportRegionFldsEN.con_IsDefaultSort:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.isDefaultSort === value;
      };
    case clsExcelExportRegionFldsEN.con_IsNeedSort:
      return (obj: clsExcelExportRegionFldsEN) => {
        return obj.isNeedSort === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ExcelExportRegionFlds]中不存在!(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strRegionId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function ExcelExportRegionFlds_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strRegionIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strRegionIdClassfy]不能为空!(In clsExcelExportRegionFldsWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsExcelExportRegionFldsWApi.func)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsExcelExportRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsExcelExportRegionFldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsExcelExportRegionFldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objExcelExportRegionFlds = await ExcelExportRegionFlds_GetObjBymIdCache(
    lngmId,
    strRegionIdClassfy,
  );
  if (objExcelExportRegionFlds == null) return '';
  if (objExcelExportRegionFlds.GetFldValue(strOutFldName) == null) return '';
  return objExcelExportRegionFlds.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strRegionId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ExcelExportRegionFlds_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strRegionIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strRegionIdClassfy]不能为空!(In clsExcelExportRegionFldsWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsExcelExportRegionFldsWApi.funcKey)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsExcelExportRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrExcelExportRegionFlds = await ExcelExportRegionFlds_GetObjLstCache(strRegionIdClassfy);
  if (arrExcelExportRegionFlds == null) return [];
  let arrExcelExportRegionFldsSel = arrExcelExportRegionFlds;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrExcelExportRegionFldsSel.length == 0) return [];
  return arrExcelExportRegionFldsSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ExcelExportRegionFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsExcelExportRegionFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
      const objExcelExportRegionFlds = ExcelExportRegionFlds_GetObjFromJsonObj(returnObj);
      return objExcelExportRegionFlds;
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetObjLstClientCache(strRegionId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsExcelExportRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsExcelExportRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("RegionId='{0}'", strRegionId);
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsExcelExportRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsExcelExportRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrExcelExportRegionFldsExObjLstCache: Array<clsExcelExportRegionFldsEN> =
      CacheHelper.Get(strKey);
    const arrExcelExportRegionFldsObjLstT = ExcelExportRegionFlds_GetObjLstByJSONObjLst(
      arrExcelExportRegionFldsExObjLstCache,
    );
    return arrExcelExportRegionFldsObjLstT;
  }
  try {
    const arrExcelExportRegionFldsExObjLst = await ExcelExportRegionFlds_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrExcelExportRegionFldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrExcelExportRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrExcelExportRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetObjLstlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsExcelExportRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsExcelExportRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsExcelExportRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsExcelExportRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsExcelExportRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrExcelExportRegionFldsExObjLstCache: Array<clsExcelExportRegionFldsEN> =
      JSON.parse(strTempObjLst);
    const arrExcelExportRegionFldsObjLstT = ExcelExportRegionFlds_GetObjLstByJSONObjLst(
      arrExcelExportRegionFldsExObjLstCache,
    );
    return arrExcelExportRegionFldsObjLstT;
  }
  try {
    const arrExcelExportRegionFldsExObjLst = await ExcelExportRegionFlds_GetObjLstAsync(
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsExcelExportRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrExcelExportRegionFldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrExcelExportRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrExcelExportRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetObjLstlocalStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrExcelExportRegionFldsObjLstCache: Array<clsExcelExportRegionFldsEN> =
      JSON.parse(strTempObjLst);
    return arrExcelExportRegionFldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ExcelExportRegionFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsExcelExportRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
          excelExportRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetObjLstsessionStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsExcelExportRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsExcelExportRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsExcelExportRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsExcelExportRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsExcelExportRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrExcelExportRegionFldsExObjLstCache: Array<clsExcelExportRegionFldsEN> =
      JSON.parse(strTempObjLst);
    const arrExcelExportRegionFldsObjLstT = ExcelExportRegionFlds_GetObjLstByJSONObjLst(
      arrExcelExportRegionFldsExObjLstCache,
    );
    return arrExcelExportRegionFldsObjLstT;
  }
  try {
    const arrExcelExportRegionFldsExObjLst = await ExcelExportRegionFlds_GetObjLstAsync(
      strWhereCond,
    );
    const strPrefix = Format('{0}_', clsExcelExportRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrExcelExportRegionFldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrExcelExportRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrExcelExportRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetObjLstsessionStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrExcelExportRegionFldsObjLstCache: Array<clsExcelExportRegionFldsEN> =
      JSON.parse(strTempObjLst);
    return arrExcelExportRegionFldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ExcelExportRegionFlds_GetObjLstCache(
  strRegionId: string,
): Promise<Array<clsExcelExportRegionFldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空！(In clsExcelExportRegionFldsWApi.ExcelExportRegionFlds_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确！(clsExcelExportRegionFldsWApi.ExcelExportRegionFlds_GetObjLstCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrExcelExportRegionFldsObjLstCache;
  switch (clsExcelExportRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstsessionStorage(
        strRegionId,
      );
      break;
    case '03': //localStorage
      arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstlocalStorage(
        strRegionId,
      );
      break;
    case '02': //ClientCache
      arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstClientCache(
        strRegionId,
      );
      break;
    default:
      arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstClientCache(
        strRegionId,
      );
      break;
  }
  return arrExcelExportRegionFldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ExcelExportRegionFlds_GetObjLstPureCache(strRegionId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrExcelExportRegionFldsObjLstCache;
  switch (clsExcelExportRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrExcelExportRegionFldsObjLstCache =
        await ExcelExportRegionFlds_GetObjLstsessionStoragePureCache(strRegionId);
      break;
    case '03': //localStorage
      arrExcelExportRegionFldsObjLstCache =
        await ExcelExportRegionFlds_GetObjLstlocalStoragePureCache(strRegionId);
      break;
    case '02': //ClientCache
      arrExcelExportRegionFldsObjLstCache = null;
      break;
    default:
      arrExcelExportRegionFldsObjLstCache = null;
      break;
  }
  return arrExcelExportRegionFldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ExcelExportRegionFlds_GetSubObjLstCache(
  objExcelExportRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
    strRegionId,
  );
  let arrExcelExportRegionFldsSel = arrExcelExportRegionFldsObjLstCache;
  if (objExcelExportRegionFldsCond.GetConditions().length == 0) return arrExcelExportRegionFldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objExcelExportRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrExcelExportRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objExcelExportRegionFldsCond),
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsExcelExportRegionFldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function ExcelExportRegionFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsExcelExportRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
          excelExportRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function ExcelExportRegionFlds_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
      strRegionId,
    );
    const arrExcelExportRegionFldsSel = arrExcelExportRegionFldsObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrExcelExportRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsExcelExportRegionFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
          excelExportRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsExcelExportRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
          excelExportRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsExcelExportRegionFldsEN>();
  const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
    strRegionId,
  );
  if (arrExcelExportRegionFldsObjLstCache.length == 0) return arrExcelExportRegionFldsObjLstCache;
  let arrExcelExportRegionFldsSel = arrExcelExportRegionFldsObjLstCache;
  const objExcelExportRegionFldsCond = objPagerPara.conditionCollection;
  if (objExcelExportRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsExcelExportRegionFldsEN>();
  }
  //console.log("clsExcelExportRegionFldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objExcelExportRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrExcelExportRegionFldsSel.length == 0) return arrExcelExportRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.sort(
        ExcelExportRegionFlds_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.slice(intStart, intEnd);
    return arrExcelExportRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsExcelExportRegionFldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ExcelExportRegionFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsExcelExportRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsExcelExportRegionFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
          excelExportRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_DelExcelExportRegionFldssAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelExcelExportRegionFldssAsync';
  const strAction = 'DelExcelExportRegionFldss';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ExcelExportRegionFlds_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
): Promise<Array<clsExcelExportRegionFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrExcelExportRegionFldsObjLst = await ExcelExportRegionFlds_GetObjLstCache(strRegionId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsExcelExportRegionFldsENEx>();
  const arrExcelExportRegionFldsExObjLst = arrExcelExportRegionFldsObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.regionId}`;
    if (excelExportRegionFldsCache[cacheKey]) {
      const oldObj = excelExportRegionFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ExcelExportRegionFlds_CopyToEx(obj);
      arrNewObj.push(newObj);
      excelExportRegionFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ExcelExportRegionFlds_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsExcelExportRegionFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrExcelExportRegionFldsExObjLst) {
      await ExcelExportRegionFlds_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.regionId}`;
      excelExportRegionFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrExcelExportRegionFldsExObjLst.length == 0) return arrExcelExportRegionFldsExObjLst;
  let arrExcelExportRegionFldsSel: Array<clsExcelExportRegionFldsENEx> =
    arrExcelExportRegionFldsExObjLst;
  const objExcelExportRegionFldsCond = objPagerPara.conditionCollection;
  if (objExcelExportRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrExcelExportRegionFldsExObjLst;
  }
  try {
    for (const objCondition of objExcelExportRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrExcelExportRegionFldsSel.length == 0) return arrExcelExportRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.sort(
        ExcelExportRegionFlds_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.slice(intStart, intEnd);
    return arrExcelExportRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsExcelExportRegionFldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objExcelExportRegionFldsENS:源对象
 * @returns 目标对象=>clsExcelExportRegionFldsEN:objExcelExportRegionFldsENT
 **/
export function ExcelExportRegionFlds_CopyToEx(
  objExcelExportRegionFldsENS: clsExcelExportRegionFldsEN,
): clsExcelExportRegionFldsENEx {
  const strThisFuncName = ExcelExportRegionFlds_CopyToEx.name;
  const objExcelExportRegionFldsENT = new clsExcelExportRegionFldsENEx();
  try {
    ObjectAssign(objExcelExportRegionFldsENT, objExcelExportRegionFldsENS);
    return objExcelExportRegionFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objExcelExportRegionFldsENT;
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
export function ExcelExportRegionFlds_FuncMapByFldName(
  strFldName: string,
  objExcelExportRegionFldsEx: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFlds_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsExcelExportRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsExcelExportRegionFldsENEx.con_FldName:
      return ExcelExportRegionFlds_FuncMapFldName(objExcelExportRegionFldsEx);
    case clsExcelExportRegionFldsENEx.con_OutFldName:
      return ExcelExportRegionFlds_FuncMapOutFldName(objExcelExportRegionFldsEx);
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
export function ExcelExportRegionFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsExcelExportRegionFldsENEx.con_FldName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsExcelExportRegionFldsENEx.con_FldNameV2:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      case clsExcelExportRegionFldsENEx.con_TabName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsExcelExportRegionFldsENEx.con_DateTimeSim:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return -1;
          if (b.dateTimeSim === null) return 1;
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsExcelExportRegionFldsENEx.con_TrClass:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsExcelExportRegionFldsENEx.con_TdClass:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return -1;
          if (b.tdClass === null) return 1;
          return a.tdClass.localeCompare(b.tdClass);
        };
      case clsExcelExportRegionFldsENEx.con_OutFldName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return -1;
          if (b.outFldName === null) return 1;
          return a.outFldName.localeCompare(b.outFldName);
        };
      case clsExcelExportRegionFldsENEx.con_TabId:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsExcelExportRegionFldsENEx.con_DnPathIdEx:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.dnPathIdEx.localeCompare(b.dnPathIdEx);
        };
      case clsExcelExportRegionFldsENEx.con_DnPathId:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsExcelExportRegionFldsENEx.con_IsUseFunc:
        return (a: clsExcelExportRegionFldsENEx) => {
          if (a.isUseFunc == true) return 1;
          else return -1;
        };
      case clsExcelExportRegionFldsENEx.con_DataPropertyName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return -1;
          if (b.dataPropertyName === null) return 1;
          return a.dataPropertyName.localeCompare(b.dataPropertyName);
        };
      default:
        return ExcelExportRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsExcelExportRegionFldsENEx.con_FldName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsExcelExportRegionFldsENEx.con_FldNameV2:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      case clsExcelExportRegionFldsENEx.con_TabName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsExcelExportRegionFldsENEx.con_DateTimeSim:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return 1;
          if (b.dateTimeSim === null) return -1;
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsExcelExportRegionFldsENEx.con_TrClass:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsExcelExportRegionFldsENEx.con_TdClass:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return 1;
          if (b.tdClass === null) return -1;
          return b.tdClass.localeCompare(a.tdClass);
        };
      case clsExcelExportRegionFldsENEx.con_OutFldName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.outFldName === null && b.outFldName === null) return 0;
          if (a.outFldName === null) return 1;
          if (b.outFldName === null) return -1;
          return b.outFldName.localeCompare(a.outFldName);
        };
      case clsExcelExportRegionFldsENEx.con_TabId:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsExcelExportRegionFldsENEx.con_DnPathIdEx:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.dnPathIdEx.localeCompare(a.dnPathIdEx);
        };
      case clsExcelExportRegionFldsENEx.con_DnPathId:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsExcelExportRegionFldsENEx.con_IsUseFunc:
        return (b: clsExcelExportRegionFldsENEx) => {
          if (b.isUseFunc == true) return 1;
          else return -1;
        };
      case clsExcelExportRegionFldsENEx.con_DataPropertyName:
        return (a: clsExcelExportRegionFldsENEx, b: clsExcelExportRegionFldsENEx) => {
          if (a.dataPropertyName === null && b.dataPropertyName === null) return 0;
          if (a.dataPropertyName === null) return 1;
          if (b.dataPropertyName === null) return -1;
          return b.dataPropertyName.localeCompare(a.dataPropertyName);
        };
      default:
        return ExcelExportRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFlds_FuncMapFldName(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFlds_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.fldName) == true) {
      const vFieldTabSimFldId = objExcelExportRegionFlds.fldId;
      if (IsNullOrEmpty(objExcelExportRegionFlds.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objExcelExportRegionFlds.prjId,
      );
      objExcelExportRegionFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objExcelExportRegionFldsS:源对象
 **/
export async function ExcelExportRegionFlds_FuncMapOutFldName(
  objExcelExportRegionFlds: clsExcelExportRegionFldsENEx,
) {
  const strThisFuncName = ExcelExportRegionFlds_FuncMapOutFldName.name;
  try {
    if (IsNullOrEmpty(objExcelExportRegionFlds.outFldName) == true) {
      const vFieldTabSimFldId = objExcelExportRegionFlds.outFldId;
      if (IsNullOrEmpty(objExcelExportRegionFlds.prjId) == true) {
        const strMsg = `函数映射[OutFldName]数据出错,prjId不能为空!(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objExcelExportRegionFlds.prjId,
      );
      objExcelExportRegionFlds.outFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001305)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_DelExcelExportRegionFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelExcelExportRegionFldssByCondAsync';
  const strAction = 'DelExcelExportRegionFldssByCond';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegionFlds_AddNewRecordAsync(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objExcelExportRegionFldsEN);
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionFldsEN, config);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegionFlds_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegionFlds_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objExcelExportRegionFldsEN);
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegionFlds_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objExcelExportRegionFldsEN);
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_AddNewObjSave(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ExcelExportRegionFlds_CheckPropertyNew(objExcelExportRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ExcelExportRegionFlds_CheckUniCond4Add(objExcelExportRegionFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await ExcelExportRegionFlds_AddNewRecordAsync(objExcelExportRegionFldsEN);
    if (returnBool == true) {
      ExcelExportRegionFlds_ReFreshCache(objExcelExportRegionFldsEN.regionId);
    } else {
      const strInfo = `添加[Excel导出区域字段(ExcelExportRegionFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objExcelExportRegionFldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ExcelExportRegionFlds_CheckUniCond4Add(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = ExcelExportRegionFlds_GetUniCondStr(objExcelExportRegionFldsEN);
  const bolIsExistCondition = await ExcelExportRegionFlds_IsExistRecordAsync(
    strUniquenessCondition,
  );
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
export async function ExcelExportRegionFlds_CheckUniCond4Update(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = ExcelExportRegionFlds_GetUniCondStr4Update(
    objExcelExportRegionFldsEN,
  );
  const bolIsExistCondition = await ExcelExportRegionFlds_IsExistRecordAsync(
    strUniquenessCondition,
  );
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
export async function ExcelExportRegionFlds_UpdateObjSave(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objExcelExportRegionFldsEN.sfUpdFldSetStr = objExcelExportRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objExcelExportRegionFldsEN.mId == 0 || objExcelExportRegionFldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ExcelExportRegionFlds_CheckProperty4Update(objExcelExportRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ExcelExportRegionFlds_CheckUniCond4Update(
      objExcelExportRegionFldsEN,
    );
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ExcelExportRegionFlds_UpdateRecordAsync(objExcelExportRegionFldsEN);
    if (returnBool == true) {
      ExcelExportRegionFlds_ReFreshCache(objExcelExportRegionFldsEN.regionId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${excelExportRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegionFlds_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objExcelExportRegionFldsEN);
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegionFlds_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objExcelExportRegionFldsEN);
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ExcelExportRegionFlds_AddNewRecordWithReturnKeyAsync(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionFldsEN, config);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ExcelExportRegionFlds_UpdateRecordAsync(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objExcelExportRegionFldsEN.sfUpdFldSetStr === undefined ||
    objExcelExportRegionFldsEN.sfUpdFldSetStr === null ||
    objExcelExportRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objExcelExportRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionFldsEN, config);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ExcelExportRegionFlds_EditRecordExAsync(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objExcelExportRegionFldsEN.sfUpdFldSetStr === undefined ||
    objExcelExportRegionFldsEN.sfUpdFldSetStr === null ||
    objExcelExportRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objExcelExportRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionFldsEN, config);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ExcelExportRegionFlds_UpdateWithConditionAsync(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objExcelExportRegionFldsEN.sfUpdFldSetStr === undefined ||
    objExcelExportRegionFldsEN.sfUpdFldSetStr === null ||
    objExcelExportRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objExcelExportRegionFldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);
  objExcelExportRegionFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionFldsEN, config);
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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ExcelExportRegionFlds_IsExistRecordCache(
  objExcelExportRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
    strRegionId,
  );
  if (arrExcelExportRegionFldsObjLstCache == null) return false;
  let arrExcelExportRegionFldsSel = arrExcelExportRegionFldsObjLstCache;
  if (objExcelExportRegionFldsCond.GetConditions().length == 0)
    return arrExcelExportRegionFldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objExcelExportRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrExcelExportRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objExcelExportRegionFldsCond),
      excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ExcelExportRegionFlds_IsExistCache(lngmId: number, strRegionId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
    strRegionId,
  );
  if (arrExcelExportRegionFldsObjLstCache == null) return false;
  try {
    const arrExcelExportRegionFldsSel = arrExcelExportRegionFldsObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrExcelExportRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      excelExportRegionFlds_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ExcelExportRegionFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
 * @param objExcelExportRegionFldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function ExcelExportRegionFlds_GetRecCountByCondCache(
  objExcelExportRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrExcelExportRegionFldsObjLstCache = await ExcelExportRegionFlds_GetObjLstCache(
    strRegionId,
  );
  if (arrExcelExportRegionFldsObjLstCache == null) return 0;
  let arrExcelExportRegionFldsSel = arrExcelExportRegionFldsObjLstCache;
  if (objExcelExportRegionFldsCond.GetConditions().length == 0)
    return arrExcelExportRegionFldsSel.length;
  try {
    for (const objCondition of objExcelExportRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionFldsSel = arrExcelExportRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrExcelExportRegionFldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objExcelExportRegionFldsCond),
      excelExportRegionFlds_ConstructorName,
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
export async function ExcelExportRegionFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(excelExportRegionFlds_Controller, strAction);

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
        excelExportRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegionFlds_ConstructorName,
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
export function ExcelExportRegionFlds_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function ExcelExportRegionFlds_ReFreshCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsExcelExportRegionFldsWApi.clsExcelExportRegionFldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsExcelExportRegionFldsWApi.clsExcelExportRegionFldsWApi.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, strRegionId);
  switch (clsExcelExportRegionFldsEN.CacheModeId) {
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
  clsExcelExportRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ExcelExportRegionFlds_ReFreshThisCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsExcelExportRegionFldsWApi.ExcelExportRegionFlds_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsExcelExportRegionFldsWApi.ExcelExportRegionFlds_ReFreshThisCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsExcelExportRegionFldsEN._CurrTabName, strRegionId);
    switch (clsExcelExportRegionFldsEN.CacheModeId) {
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
    clsExcelExportRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/**
 * 获取最新的缓存刷新时间
 * @returns 最新的缓存刷新时间，字符串型
 **/
export function ExcelExportRegionFlds_GetLastRefreshTime(): string {
  if (clsExcelExportRegionFldsEN._RefreshTimeLst.length == 0) return '';
  return clsExcelExportRegionFldsEN._RefreshTimeLst[
    clsExcelExportRegionFldsEN._RefreshTimeLst.length - 1
  ];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ExcelExportRegionFlds_CheckPropertyNew(
  pobjExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjExcelExportRegionFldsEN.regionId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域Id]不能为空(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjExcelExportRegionFldsEN.seqNum ||
    (pobjExcelExportRegionFldsEN.seqNum != null &&
      pobjExcelExportRegionFldsEN.seqNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段序号]不能为空(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.prjId) === true ||
    pobjExcelExportRegionFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjExcelExportRegionFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjExcelExportRegionFldsEN.isDefaultSort ||
    (pobjExcelExportRegionFldsEN.isDefaultSort != null &&
      pobjExcelExportRegionFldsEN.isDefaultSort.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否默认排序]不能为空(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjExcelExportRegionFldsEN.isNeedSort ||
    (pobjExcelExportRegionFldsEN.isNeedSort != null &&
      pobjExcelExportRegionFldsEN.isNeedSort.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否需要排序]不能为空(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.regionId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.regionId}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.fldId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.fldId}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[OutFldId(outFldId)]的长度不能超过8(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.outFldId}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.colCaption) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.colCaption) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[列标题(colCaption)]的长度不能超过100(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.colCaption}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.errMsg}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.prjId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.prjId}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updDate) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.updDate}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updUser) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.updUser}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.memo) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.memo}(clsExcelExportRegionFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjExcelExportRegionFldsEN.mId &&
    undefined !== pobjExcelExportRegionFldsEN.mId &&
    tzDataType.isNumber(pobjExcelExportRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjExcelExportRegionFldsEN.mId}], 非法,应该为数值型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.regionId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.regionId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjExcelExportRegionFldsEN.regionId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.fldId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.fldId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjExcelExportRegionFldsEN.fldId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.outFldId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.outFldId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[OutFldId(outFldId)]的值:[${pobjExcelExportRegionFldsEN.outFldId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.seqNum &&
    undefined !== pobjExcelExportRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjExcelExportRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段序号(seqNum)]的值:[${pobjExcelExportRegionFldsEN.seqNum}], 非法,应该为数值型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.colCaption) == false &&
    undefined !== pobjExcelExportRegionFldsEN.colCaption &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.colCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列标题(colCaption)]的值:[${pobjExcelExportRegionFldsEN.colCaption}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.inUse &&
    undefined !== pobjExcelExportRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjExcelExportRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjExcelExportRegionFldsEN.inUse}], 非法,应该为布尔型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.errMsg) == false &&
    undefined !== pobjExcelExportRegionFldsEN.errMsg &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjExcelExportRegionFldsEN.errMsg}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.prjId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.prjId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjExcelExportRegionFldsEN.prjId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updDate) == false &&
    undefined !== pobjExcelExportRegionFldsEN.updDate &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjExcelExportRegionFldsEN.updDate}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updUser) == false &&
    undefined !== pobjExcelExportRegionFldsEN.updUser &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjExcelExportRegionFldsEN.updUser}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.memo) == false &&
    undefined !== pobjExcelExportRegionFldsEN.memo &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjExcelExportRegionFldsEN.memo}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.isDefaultSort &&
    undefined !== pobjExcelExportRegionFldsEN.isDefaultSort &&
    tzDataType.isBoolean(pobjExcelExportRegionFldsEN.isDefaultSort) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否默认排序(isDefaultSort)]的值:[${pobjExcelExportRegionFldsEN.isDefaultSort}], 非法,应该为布尔型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.isNeedSort &&
    undefined !== pobjExcelExportRegionFldsEN.isNeedSort &&
    tzDataType.isBoolean(pobjExcelExportRegionFldsEN.isNeedSort) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要排序(isNeedSort)]的值:[${pobjExcelExportRegionFldsEN.isNeedSort}], 非法,应该为布尔型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.prjId) == false &&
    pobjExcelExportRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjExcelExportRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ExcelExportRegionFlds_CheckProperty4Update(
  pobjExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.regionId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.regionId}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.fldId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.fldId}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.outFldId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.outFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[OutFldId(outFldId)]的长度不能超过8(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.outFldId}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.colCaption) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.colCaption) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[列标题(colCaption)]的长度不能超过100(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.colCaption}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.errMsg}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.prjId) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.prjId}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updDate) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.updDate}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updUser) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.updUser}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.memo) == false &&
    GetStrLen(pobjExcelExportRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In Excel导出区域字段(ExcelExportRegionFlds))!值:${pobjExcelExportRegionFldsEN.memo}(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjExcelExportRegionFldsEN.mId &&
    undefined !== pobjExcelExportRegionFldsEN.mId &&
    tzDataType.isNumber(pobjExcelExportRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjExcelExportRegionFldsEN.mId}], 非法,应该为数值型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.regionId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.regionId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjExcelExportRegionFldsEN.regionId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.fldId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.fldId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjExcelExportRegionFldsEN.fldId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.outFldId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.outFldId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.outFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[OutFldId(outFldId)]的值:[${pobjExcelExportRegionFldsEN.outFldId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.seqNum &&
    undefined !== pobjExcelExportRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjExcelExportRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段序号(seqNum)]的值:[${pobjExcelExportRegionFldsEN.seqNum}], 非法,应该为数值型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.colCaption) == false &&
    undefined !== pobjExcelExportRegionFldsEN.colCaption &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.colCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列标题(colCaption)]的值:[${pobjExcelExportRegionFldsEN.colCaption}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.inUse &&
    undefined !== pobjExcelExportRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjExcelExportRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjExcelExportRegionFldsEN.inUse}], 非法,应该为布尔型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.errMsg) == false &&
    undefined !== pobjExcelExportRegionFldsEN.errMsg &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjExcelExportRegionFldsEN.errMsg}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.prjId) == false &&
    undefined !== pobjExcelExportRegionFldsEN.prjId &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjExcelExportRegionFldsEN.prjId}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updDate) == false &&
    undefined !== pobjExcelExportRegionFldsEN.updDate &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjExcelExportRegionFldsEN.updDate}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.updUser) == false &&
    undefined !== pobjExcelExportRegionFldsEN.updUser &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjExcelExportRegionFldsEN.updUser}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.memo) == false &&
    undefined !== pobjExcelExportRegionFldsEN.memo &&
    tzDataType.isString(pobjExcelExportRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjExcelExportRegionFldsEN.memo}], 非法,应该为字符型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.isDefaultSort &&
    undefined !== pobjExcelExportRegionFldsEN.isDefaultSort &&
    tzDataType.isBoolean(pobjExcelExportRegionFldsEN.isDefaultSort) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否默认排序(isDefaultSort)]的值:[${pobjExcelExportRegionFldsEN.isDefaultSort}], 非法,应该为布尔型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjExcelExportRegionFldsEN.isNeedSort &&
    undefined !== pobjExcelExportRegionFldsEN.isNeedSort &&
    tzDataType.isBoolean(pobjExcelExportRegionFldsEN.isNeedSort) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要排序(isNeedSort)]的值:[${pobjExcelExportRegionFldsEN.isNeedSort}], 非法,应该为布尔型(In Excel导出区域字段(ExcelExportRegionFlds))!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjExcelExportRegionFldsEN.mId ||
    (pobjExcelExportRegionFldsEN.mId != null && pobjExcelExportRegionFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionFldsEN.prjId) == false &&
    pobjExcelExportRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjExcelExportRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In Excel导出区域字段)!(clsExcelExportRegionFldsBL:CheckPropertyNew)';
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
export function ExcelExportRegionFlds_GetJSONStrByObj(
  pobjExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): string {
  pobjExcelExportRegionFldsEN.sfUpdFldSetStr = pobjExcelExportRegionFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjExcelExportRegionFldsEN);
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
export function ExcelExportRegionFlds_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsExcelExportRegionFldsEN> {
  let arrExcelExportRegionFldsObjLst = new Array<clsExcelExportRegionFldsEN>();
  if (strJSON === '') {
    return arrExcelExportRegionFldsObjLst;
  }
  try {
    arrExcelExportRegionFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrExcelExportRegionFldsObjLst;
  }
  return arrExcelExportRegionFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrExcelExportRegionFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ExcelExportRegionFlds_GetObjLstByJSONObjLst(
  arrExcelExportRegionFldsObjLstS: Array<clsExcelExportRegionFldsEN>,
): Array<clsExcelExportRegionFldsEN> {
  const arrExcelExportRegionFldsObjLst = new Array<clsExcelExportRegionFldsEN>();
  for (const objInFor of arrExcelExportRegionFldsObjLstS) {
    const obj1 = ExcelExportRegionFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrExcelExportRegionFldsObjLst.push(obj1);
  }
  return arrExcelExportRegionFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ExcelExportRegionFlds_GetObjByJSONStr(strJSON: string): clsExcelExportRegionFldsEN {
  let pobjExcelExportRegionFldsEN = new clsExcelExportRegionFldsEN();
  if (strJSON === '') {
    return pobjExcelExportRegionFldsEN;
  }
  try {
    pobjExcelExportRegionFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjExcelExportRegionFldsEN;
  }
  return pobjExcelExportRegionFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ExcelExportRegionFlds_GetCombineCondition(
  objExcelExportRegionFldsCond: clsExcelExportRegionFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsExcelExportRegionFldsEN.con_mId,
      objExcelExportRegionFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_RegionId,
      objExcelExportRegionFldsCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_FldId,
      objExcelExportRegionFldsCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_OutFldId,
    ) == true
  ) {
    const strComparisonOpOutFldId: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_OutFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_OutFldId,
      objExcelExportRegionFldsCond.outFldId,
      strComparisonOpOutFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsExcelExportRegionFldsEN.con_SeqNum,
      objExcelExportRegionFldsCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_ColCaption,
    ) == true
  ) {
    const strComparisonOpColCaption: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_ColCaption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_ColCaption,
      objExcelExportRegionFldsCond.colCaption,
      strComparisonOpColCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_InUse,
    ) == true
  ) {
    if (objExcelExportRegionFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsExcelExportRegionFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsExcelExportRegionFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_ErrMsg,
      objExcelExportRegionFldsCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_PrjId,
      objExcelExportRegionFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_UpdDate,
      objExcelExportRegionFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_UpdUser,
      objExcelExportRegionFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objExcelExportRegionFldsCond.dicFldComparisonOp[clsExcelExportRegionFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionFldsEN.con_Memo,
      objExcelExportRegionFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_IsDefaultSort,
    ) == true
  ) {
    if (objExcelExportRegionFldsCond.isDefaultSort == true) {
      strWhereCond += Format(" And {0} = '1'", clsExcelExportRegionFldsEN.con_IsDefaultSort);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsExcelExportRegionFldsEN.con_IsDefaultSort);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionFldsCond.dicFldComparisonOp,
      clsExcelExportRegionFldsEN.con_IsNeedSort,
    ) == true
  ) {
    if (objExcelExportRegionFldsCond.isNeedSort == true) {
      strWhereCond += Format(" And {0} = '1'", clsExcelExportRegionFldsEN.con_IsNeedSort);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsExcelExportRegionFldsEN.con_IsNeedSort);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ExcelExportRegionFlds(Excel导出区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ExcelExportRegionFlds_GetUniCondStr(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId = '{0}'", objExcelExportRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objExcelExportRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objExcelExportRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ExcelExportRegionFlds(Excel导出区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @param strOutFldId: OutFldId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ExcelExportRegionFlds_GetUniCondStr4Update(
  objExcelExportRegionFldsEN: clsExcelExportRegionFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objExcelExportRegionFldsEN.mId);
  strWhereCond += Format(" and RegionId = '{0}'", objExcelExportRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objExcelExportRegionFldsEN.fldId);
  strWhereCond += Format(" and OutFldId = '{0}'", objExcelExportRegionFldsEN.outFldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objExcelExportRegionFldsENS:源对象
 * @param objExcelExportRegionFldsENT:目标对象
 */
export function ExcelExportRegionFlds_GetObjFromJsonObj(
  objExcelExportRegionFldsENS: clsExcelExportRegionFldsEN,
): clsExcelExportRegionFldsEN {
  const objExcelExportRegionFldsENT: clsExcelExportRegionFldsEN = new clsExcelExportRegionFldsEN();
  ObjectAssign(objExcelExportRegionFldsENT, objExcelExportRegionFldsENS);
  return objExcelExportRegionFldsENT;
}
