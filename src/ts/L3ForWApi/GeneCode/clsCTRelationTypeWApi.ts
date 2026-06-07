/**
 * 类名:clsCTRelationTypeWApi
 * 表名:CTRelationType(00050645)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 05:10:20
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CT关系类型(CTRelationType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年06月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsCTRelationTypeEN, CTRelationTypeKey } from '@/ts/L0Entity/GeneCode/clsCTRelationTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const cTRelationType_Controller = 'CTRelationTypeApi';
export const cTRelationType_ConstructorName = 'cTRelationType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param key:包含关键字的对象
 * @returns 对象
 **/
export async function CTRelationType_GetObjByKeyAsync(
  key: CTRelationTypeKey,
): Promise<clsCTRelationTypeEN | null> {
  const strThisFuncName = 'GetObjByKeyAsync';
  if (
    key.ctRelationTypeId === undefined ||
    key.ctRelationTypeId === null ||
    key.ctRelationTypeId === ''
  ) {
    const strMsg = Format(
      '关键字段[CtRelationTypeId]不能为空!(in {0}.{1})',
      cTRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAction = 'GetObjByCtRelationTypeId';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtRelationTypeId: key.ctRelationTypeId,
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
      const objCTRelationType = CTRelationType_GetObjFromJsonObj(returnObj);
      return objCTRelationType;
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * 根据关键字获取特定对象, 从 localStorage 中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param key:关键字对象
 * @returns 对象
 */
export async function CTRelationType_GetObjByKeylocalStorage(key: CTRelationTypeKey) {
  const strThisFuncName = 'GetObjByCtRelationTypeIdlocalStorage';

  if (IsNullOrEmpty(key.ctRelationTypeId) == true) {
    const strMsg = Format(
      '参数:[key.ctRelationTypeId]不能为空!(In clsCTRelationTypeWApi.GetObjByCtRelationTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.ctRelationTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[key.ctRelationTypeId]的长度:[{0}]不正确!(clsCTRelationTypeWApi.GetObjByCtRelationTypeIdlocalStorage)',
      key.ctRelationTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCTRelationTypeEN._CurrTabName, key.ctRelationTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCTRelationTypeCache: clsCTRelationTypeEN = JSON.parse(strTempObj);
    return objCTRelationTypeCache;
  }
  try {
    const objCTRelationType = await CTRelationType_GetObjByKeyAsync(key);
    if (objCTRelationType != null) {
      localStorage.setItem(strKey, JSON.stringify(objCTRelationType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCTRelationType;
    }
    return objCTRelationType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      key.ctRelationTypeId,
      cTRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取特定对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param key:关键字对象
 * @returns 对象
 */
export async function CTRelationType_GetObjByKeyCache(
  key: CTRelationTypeKey,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCtRelationTypeIdCache';

  if (IsNullOrEmpty(key.ctRelationTypeId) == true) {
    const strMsg = Format(
      '参数:[key.ctRelationTypeId]不能为空!(In clsCTRelationTypeWApi.GetObjByCtRelationTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.ctRelationTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[key.ctRelationTypeId]的长度:[{0}]不正确!(clsCTRelationTypeWApi.GetObjByCtRelationTypeIdCache)',
      key.ctRelationTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
  try {
    const arrCTRelationTypeSel = arrCTRelationTypeObjLstCache.filter(
      (x) => x.ctRelationTypeId == key.ctRelationTypeId,
    );
    let objCTRelationType: clsCTRelationTypeEN;
    if (arrCTRelationTypeSel.length > 0) {
      objCTRelationType = arrCTRelationTypeSel[0];
      return objCTRelationType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCTRelationTypeConst = await CTRelationType_GetObjByKeyAsync(key);
        if (objCTRelationTypeConst != null) {
          CTRelationType_ReFreshThisCache();
          return objCTRelationTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      key.ctRelationTypeId,
      cTRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCTRelationType:所给的对象
 * @returns 对象
 */
export async function CTRelationType_UpdateObjInLstCache(objCTRelationType: clsCTRelationTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
    const obj = arrCTRelationTypeObjLstCache.find(
      (x) => x.ctRelationTypeId == objCTRelationType.ctRelationTypeId,
    );
    if (obj != null) {
      objCTRelationType.ctRelationTypeId = obj.ctRelationTypeId;
      ObjectAssign(obj, objCTRelationType);
    } else {
      arrCTRelationTypeObjLstCache.push(objCTRelationType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cTRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTRelationType_SortFunDefa(a: clsCTRelationTypeEN, b: clsCTRelationTypeEN): number {
  return a.ctRelationTypeId.localeCompare(b.ctRelationTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTRelationType_SortFunDefa2Fld(
  a: clsCTRelationTypeEN,
  b: clsCTRelationTypeEN,
): number {
  if (a.relationTypeName == b.relationTypeName)
    return a.relationTypeEN.localeCompare(b.relationTypeEN);
  else return a.relationTypeName.localeCompare(b.relationTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTRelationType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCTRelationTypeEN.con_CtRelationTypeId:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return a.ctRelationTypeId.localeCompare(b.ctRelationTypeId);
        };
      case clsCTRelationTypeEN.con_RelationTypeName:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return a.relationTypeName.localeCompare(b.relationTypeName);
        };
      case clsCTRelationTypeEN.con_RelationTypeEN:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.relationTypeEN == null) return -1;
          if (b.relationTypeEN == null) return 1;
          return a.relationTypeEN.localeCompare(b.relationTypeEN);
        };
      case clsCTRelationTypeEN.con_Description:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.description == null) return -1;
          if (b.description == null) return 1;
          return a.description.localeCompare(b.description);
        };
      case clsCTRelationTypeEN.con_OrderNum:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCTRelationTypeEN.con_InUse:
        return (a: clsCTRelationTypeEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsCTRelationTypeEN.con_LineColor:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.lineColor == null) return -1;
          if (b.lineColor == null) return 1;
          return a.lineColor.localeCompare(b.lineColor);
        };
      case clsCTRelationTypeEN.con_LineStyle:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.lineStyle == null) return -1;
          if (b.lineStyle == null) return 1;
          return a.lineStyle.localeCompare(b.lineStyle);
        };
      case clsCTRelationTypeEN.con_LineWidth:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return a.lineWidth - b.lineWidth;
        };
      case clsCTRelationTypeEN.con_ArrowType:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.arrowType == null) return -1;
          if (b.arrowType == null) return 1;
          return a.arrowType.localeCompare(b.arrowType);
        };
      case clsCTRelationTypeEN.con_DisplayColor:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.displayColor == null) return -1;
          if (b.displayColor == null) return 1;
          return a.displayColor.localeCompare(b.displayColor);
        };
      case clsCTRelationTypeEN.con_UpdDate:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCTRelationTypeEN.con_UpdUser:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCTRelationTypeEN.con_Memo:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CTRelationType]中不存在!(in ${cTRelationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCTRelationTypeEN.con_CtRelationTypeId:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return b.ctRelationTypeId.localeCompare(a.ctRelationTypeId);
        };
      case clsCTRelationTypeEN.con_RelationTypeName:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return b.relationTypeName.localeCompare(a.relationTypeName);
        };
      case clsCTRelationTypeEN.con_RelationTypeEN:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.relationTypeEN == null) return -1;
          if (a.relationTypeEN == null) return 1;
          return b.relationTypeEN.localeCompare(a.relationTypeEN);
        };
      case clsCTRelationTypeEN.con_Description:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.description == null) return -1;
          if (a.description == null) return 1;
          return b.description.localeCompare(a.description);
        };
      case clsCTRelationTypeEN.con_OrderNum:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCTRelationTypeEN.con_InUse:
        return (b: clsCTRelationTypeEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsCTRelationTypeEN.con_LineColor:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.lineColor == null) return -1;
          if (a.lineColor == null) return 1;
          return b.lineColor.localeCompare(a.lineColor);
        };
      case clsCTRelationTypeEN.con_LineStyle:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.lineStyle == null) return -1;
          if (a.lineStyle == null) return 1;
          return b.lineStyle.localeCompare(a.lineStyle);
        };
      case clsCTRelationTypeEN.con_LineWidth:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          return b.lineWidth - a.lineWidth;
        };
      case clsCTRelationTypeEN.con_ArrowType:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.arrowType == null) return -1;
          if (a.arrowType == null) return 1;
          return b.arrowType.localeCompare(a.arrowType);
        };
      case clsCTRelationTypeEN.con_DisplayColor:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.displayColor == null) return -1;
          if (a.displayColor == null) return 1;
          return b.displayColor.localeCompare(a.displayColor);
        };
      case clsCTRelationTypeEN.con_UpdDate:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCTRelationTypeEN.con_UpdUser:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCTRelationTypeEN.con_Memo:
        return (a: clsCTRelationTypeEN, b: clsCTRelationTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CTRelationType]中不存在!(in ${cTRelationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param key:关键字对象
 * @returns 名称属性值
 */
export async function CTRelationType_GetNameByKeyCache(key: CTRelationTypeKey) {
  if (IsNullOrEmpty(key.ctRelationTypeId) == true) {
    const strMsg = Format(
      '参数:[key.ctRelationTypeId]不能为空!(In clsCTRelationTypeWApi.GetNameByKeyCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.ctRelationTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[key.ctRelationTypeId]的长度:[{0}]不正确!(clsCTRelationTypeWApi.GetNameByKeyCache)',
      key.ctRelationTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
  if (arrCTRelationTypeObjLstCache == null) return '';
  try {
    const arrCTRelationTypeSel = arrCTRelationTypeObjLstCache.filter(
      (x) => x.ctRelationTypeId == key.ctRelationTypeId,
    );
    let objCTRelationType: clsCTRelationTypeEN;
    if (arrCTRelationTypeSel.length > 0) {
      objCTRelationType = arrCTRelationTypeSel[0];
      return objCTRelationType.relationTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      key.ctRelationTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CTRelationType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCTRelationTypeEN.con_CtRelationTypeId:
      return (obj: clsCTRelationTypeEN) => {
        return obj.ctRelationTypeId === value;
      };
    case clsCTRelationTypeEN.con_RelationTypeName:
      return (obj: clsCTRelationTypeEN) => {
        return obj.relationTypeName === value;
      };
    case clsCTRelationTypeEN.con_RelationTypeEN:
      return (obj: clsCTRelationTypeEN) => {
        return obj.relationTypeEN === value;
      };
    case clsCTRelationTypeEN.con_Description:
      return (obj: clsCTRelationTypeEN) => {
        return obj.description === value;
      };
    case clsCTRelationTypeEN.con_OrderNum:
      return (obj: clsCTRelationTypeEN) => {
        return obj.orderNum === value;
      };
    case clsCTRelationTypeEN.con_InUse:
      return (obj: clsCTRelationTypeEN) => {
        return obj.inUse === value;
      };
    case clsCTRelationTypeEN.con_LineColor:
      return (obj: clsCTRelationTypeEN) => {
        return obj.lineColor === value;
      };
    case clsCTRelationTypeEN.con_LineStyle:
      return (obj: clsCTRelationTypeEN) => {
        return obj.lineStyle === value;
      };
    case clsCTRelationTypeEN.con_LineWidth:
      return (obj: clsCTRelationTypeEN) => {
        return obj.lineWidth === value;
      };
    case clsCTRelationTypeEN.con_ArrowType:
      return (obj: clsCTRelationTypeEN) => {
        return obj.arrowType === value;
      };
    case clsCTRelationTypeEN.con_DisplayColor:
      return (obj: clsCTRelationTypeEN) => {
        return obj.displayColor === value;
      };
    case clsCTRelationTypeEN.con_UpdDate:
      return (obj: clsCTRelationTypeEN) => {
        return obj.updDate === value;
      };
    case clsCTRelationTypeEN.con_UpdUser:
      return (obj: clsCTRelationTypeEN) => {
        return obj.updUser === value;
      };
    case clsCTRelationTypeEN.con_Memo:
      return (obj: clsCTRelationTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CTRelationType]中不存在!(in ${cTRelationType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function CTRelationType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCTRelationTypeEN.con_CtRelationTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCTRelationTypeEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCTRelationTypeEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCtRelationTypeId = strInValue;
  if (IsNullOrEmpty(strCtRelationTypeId) == true) {
    return '';
  }
  const objCTRelationType = await CTRelationType_GetObjByKeyCache({
    ctRelationTypeId: strCtRelationTypeId,
  });
  if (objCTRelationType == null) return '';
  if (objCTRelationType.GetFldValue(strOutFldName) == null) return '';
  return objCTRelationType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function CTRelationType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCTRelationTypeEN.con_CtRelationTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCTRelationType = await CTRelationType_GetObjLstCache();
  if (arrCTRelationType == null) return [];
  let arrCTRelationTypeSel = arrCTRelationType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCTRelationTypeSel.length == 0) return [];
  return arrCTRelationTypeSel.map((x) => x.ctRelationTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CTRelationType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCTRelationTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
      const objCTRelationType = CTRelationType_GetObjFromJsonObj(returnObj);
      return objCTRelationType;
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCTRelationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCTRelationTypeEN._WhereFormat) == false) {
    strWhereCond = clsCTRelationTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsCTRelationTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCTRelationTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCTRelationTypeExObjLstCache: Array<clsCTRelationTypeEN> = CacheHelper.Get(strKey);
    const arrCTRelationTypeObjLstT = CTRelationType_GetObjLstByJSONObjLst(
      arrCTRelationTypeExObjLstCache,
    );
    return arrCTRelationTypeObjLstT;
  }
  try {
    const arrCTRelationTypeExObjLst = await CTRelationType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCTRelationTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCTRelationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCTRelationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cTRelationType_ConstructorName,
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
export async function CTRelationType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCTRelationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCTRelationTypeEN._WhereFormat) == false) {
    strWhereCond = clsCTRelationTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsCTRelationTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCTRelationTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCTRelationTypeExObjLstCache: Array<clsCTRelationTypeEN> = JSON.parse(strTempObjLst);
    const arrCTRelationTypeObjLstT = CTRelationType_GetObjLstByJSONObjLst(
      arrCTRelationTypeExObjLstCache,
    );
    return arrCTRelationTypeObjLstT;
  }
  try {
    const arrCTRelationTypeExObjLst = await CTRelationType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCTRelationTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCTRelationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCTRelationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cTRelationType_ConstructorName,
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
export async function CTRelationType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCTRelationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCTRelationTypeObjLstCache: Array<clsCTRelationTypeEN> = JSON.parse(strTempObjLst);
    return arrCTRelationTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CTRelationType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCTRelationTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
          cTRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCTRelationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCTRelationTypeEN._WhereFormat) == false) {
    strWhereCond = clsCTRelationTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsCTRelationTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCTRelationTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCTRelationTypeExObjLstCache: Array<clsCTRelationTypeEN> = JSON.parse(strTempObjLst);
    const arrCTRelationTypeObjLstT = CTRelationType_GetObjLstByJSONObjLst(
      arrCTRelationTypeExObjLstCache,
    );
    return arrCTRelationTypeObjLstT;
  }
  try {
    const arrCTRelationTypeExObjLst = await CTRelationType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCTRelationTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCTRelationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCTRelationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cTRelationType_ConstructorName,
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
export async function CTRelationType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCTRelationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCTRelationTypeObjLstCache: Array<clsCTRelationTypeEN> = JSON.parse(strTempObjLst);
    return arrCTRelationTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CTRelationType_GetObjLstCache(): Promise<Array<clsCTRelationTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCTRelationTypeObjLstCache;
  switch (clsCTRelationTypeEN._CacheModeId) {
    case '04': //sessionStorage
      arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstClientCache();
      break;
    default:
      arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstClientCache();
      break;
  }
  return arrCTRelationTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CTRelationType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCTRelationTypeObjLstCache;
  switch (clsCTRelationTypeEN._CacheModeId) {
    case '04': //sessionStorage
      arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCTRelationTypeObjLstCache = null;
      break;
    default:
      arrCTRelationTypeObjLstCache = null;
      break;
  }
  return arrCTRelationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCtRelationTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CTRelationType_GetSubObjLstCache(objCTRelationTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
  let arrCTRelationTypeSel = arrCTRelationTypeObjLstCache;
  if (objCTRelationTypeCond.GetConditions().length == 0) return arrCTRelationTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objCTRelationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCTRelationTypeSel = arrCTRelationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCTRelationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCTRelationTypeCond),
      cTRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCTRelationTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCtRelationTypeId:关键字列表
 * @returns 对象列表
 **/
export async function CTRelationType_GetObjLstByCtRelationTypeIdLstAsync(
  arrCtRelationTypeId: Array<string>,
): Promise<Array<clsCTRelationTypeEN>> {
  const strThisFuncName = 'GetObjLstByCtRelationTypeIdLstAsync';
  const strAction = 'GetObjLstByCtRelationTypeIdLst';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCtRelationTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cTRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param arrstrCtRelationTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function CTRelationType_GetObjLstByCtRelationTypeIdLstCache(
  arrCtRelationTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByCtRelationTypeIdLstCache';
  try {
    const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
    const arrCTRelationTypeSel = arrCTRelationTypeObjLstCache.filter(
      (x) => arrCtRelationTypeIdLst.indexOf(x.ctRelationTypeId) > -1,
    );
    return arrCTRelationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCtRelationTypeIdLst.join(','),
      cTRelationType_ConstructorName,
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
export async function CTRelationType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCTRelationTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
          cTRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCTRelationTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
          cTRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param key:关键字对象
 * @returns 获取删除的结果
 **/
export async function CTRelationType_DelRecordAsync(key: CTRelationTypeKey): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, key.ctRelationTypeId);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param arrCtRelationTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CTRelationType_DelKeysAsync(
  arrCtRelationTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelKeysAsync';
  const strAction = 'DelKeys';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCtRelationTypeId, config);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function CTRelationType_DelCTRelationTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCTRelationTypesByCondAsync';
  const strAction = 'DelCTRelationTypesByCond';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param objCTRelationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CTRelationType_AddNewRecordAsync(
  objCTRelationTypeEN: clsCTRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objCTRelationTypeEN.ctRelationTypeId === null ||
    objCTRelationTypeEN.ctRelationTypeId === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCTRelationTypeEN);
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTRelationTypeEN, config);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param objCTRelationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CTRelationType_AddNewRecordWithMaxIdAsync(
  objCTRelationTypeEN: clsCTRelationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTRelationTypeEN, config);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_AddNewObjSave(
  objCTRelationTypeEN: clsCTRelationTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CTRelationType_CheckPropertyNew(objCTRelationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cTRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await CTRelationType_IsExistAsync({
      ctRelationTypeId: objCTRelationTypeEN.ctRelationTypeId,
    });
    if (bolIsExist == true) {
      const strMsg = Format(
        '添加记录时,关键字：{0}已经存在!',
        objCTRelationTypeEN.ctRelationTypeId,
      );
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await CTRelationType_AddNewRecordAsync(objCTRelationTypeEN);
    if (returnBool == true) {
      CTRelationType_ReFreshCache();
    } else {
      const strInfo = `添加[CT关系类型(CTRelationType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objCTRelationTypeEN.ctRelationTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${cTRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function CTRelationType_UpdateObjSave(
  objCTRelationTypeEN: clsCTRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCTRelationTypeEN.sfUpdFldSetStr = objCTRelationTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objCTRelationTypeEN.ctRelationTypeId == '' ||
    objCTRelationTypeEN.ctRelationTypeId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CTRelationType_CheckProperty4Update(objCTRelationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cTRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await CTRelationType_UpdateRecordAsync(objCTRelationTypeEN);
    if (returnBool == true) {
      CTRelationType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${cTRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCTRelationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CTRelationType_AddNewRecordWithReturnKeyAsync(
  objCTRelationTypeEN: clsCTRelationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTRelationTypeEN, config);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param objCTRelationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CTRelationType_UpdateRecordAsync(
  objCTRelationTypeEN: clsCTRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCTRelationTypeEN.sfUpdFldSetStr === undefined ||
    objCTRelationTypeEN.sfUpdFldSetStr === null ||
    objCTRelationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTRelationTypeEN.ctRelationTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTRelationTypeEN, config);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param objCTRelationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CTRelationType_EditRecordExAsync(
  objCTRelationTypeEN: clsCTRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCTRelationTypeEN.sfUpdFldSetStr === undefined ||
    objCTRelationTypeEN.sfUpdFldSetStr === null ||
    objCTRelationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTRelationTypeEN.ctRelationTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTRelationTypeEN, config);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param objCTRelationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CTRelationType_UpdateWithConditionAsync(
  objCTRelationTypeEN: clsCTRelationTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCTRelationTypeEN.sfUpdFldSetStr === undefined ||
    objCTRelationTypeEN.sfUpdFldSetStr === null ||
    objCTRelationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTRelationTypeEN.ctRelationTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);
  objCTRelationTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTRelationTypeEN, config);
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param objstrCtRelationTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CTRelationType_IsExistRecordCache(
  objCTRelationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
  if (arrCTRelationTypeObjLstCache == null) return false;
  let arrCTRelationTypeSel = arrCTRelationTypeObjLstCache;
  if (objCTRelationTypeCond.GetConditions().length == 0)
    return arrCTRelationTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objCTRelationTypeCond.GetConditions()) {
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
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCTRelationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCTRelationTypeCond),
      cTRelationType_ConstructorName,
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
export async function CTRelationType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param key:关键字对象
 * @returns 是否存在
 */
export async function CTRelationType_IsExistCache(key: CTRelationTypeKey): Promise<boolean> {
  const strThisFuncName = 'IsExistCache';
  const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
  if (arrCTRelationTypeObjLstCache == null) return false;
  try {
    const arrCTRelationTypeSel = arrCTRelationTypeObjLstCache.filter(
      (x) => x.ctRelationTypeId == key.ctRelationTypeId,
    );
    if (arrCTRelationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      key.ctRelationTypeId,
      cTRelationType_ConstructorName,
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
 * @param key:包含关键字的对象
 * @returns 是否存在?存在返回True
 **/
export async function CTRelationType_IsExistAsync(key: CTRelationTypeKey): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtRelationTypeId: key.ctRelationTypeId,
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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export async function CTRelationType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
 * @param objCTRelationTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function CTRelationType_GetRecCountByCondCache(
  objCTRelationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCTRelationTypeObjLstCache = await CTRelationType_GetObjLstCache();
  if (arrCTRelationTypeObjLstCache == null) return 0;
  let arrCTRelationTypeSel = arrCTRelationTypeObjLstCache;
  if (objCTRelationTypeCond.GetConditions().length == 0) return arrCTRelationTypeSel.length;
  try {
    for (const objCondition of objCTRelationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCTRelationTypeSel = arrCTRelationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTRelationTypeSel = arrCTRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCTRelationTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCTRelationTypeCond),
      cTRelationType_ConstructorName,
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
export async function CTRelationType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cTRelationType_Controller, strAction);

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
        cTRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTRelationType_ConstructorName,
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
export function CTRelationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CTRelationType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCTRelationTypeEN._CurrTabName;
  switch (clsCTRelationTypeEN._CacheModeId) {
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
  clsCTRelationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function CTRelationType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCTRelationTypeEN._CurrTabName;
    switch (clsCTRelationTypeEN._CacheModeId) {
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
    clsCTRelationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function CTRelationType_GetLastRefreshTime(): string {
  if (clsCTRelationTypeEN._RefreshTimeLst.length == 0) return '';
  return clsCTRelationTypeEN._RefreshTimeLst[clsCTRelationTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框(TabFeatureId:00050485)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function CTRelationType_BindDdl_CTRelationTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CTRelationTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CTRelationTypeIdInDivCache");
  const arrObjLstSel = await CTRelationType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCTRelationTypeEN.con_CtRelationTypeId,
    clsCTRelationTypeEN.con_RelationTypeName,
    '选CT关系类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框(TabFeatureId:00050485)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function CTRelationType_GetArrCTRelationType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CTRelationTypeIdInDivCache");
  const arrCTRelationType = new Array<clsCTRelationTypeEN>();
  const arrObjLstSel = await CTRelationType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsCTRelationTypeEN();
  obj0.ctRelationTypeId = '0';
  obj0.relationTypeName = '选CT关系类型...';
  arrCTRelationType.push(obj0);
  arrObjLstSel.forEach((x) => arrCTRelationType.push(x));
  return arrCTRelationType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CTRelationType_CheckPropertyNew(pobjCTRelationTypeEN: clsCTRelationTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[关系类型名]不能为空(In CT关系类型)!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.ctRelationTypeId) == false &&
    GetStrLen(pobjCTRelationTypeEN.ctRelationTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Ct关系类型Id(ctRelationTypeId)]的长度不能超过2(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.ctRelationTypeId}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeName) == false &&
    GetStrLen(pobjCTRelationTypeEN.relationTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关系类型名(relationTypeName)]的长度不能超过50(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.relationTypeName}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeEN) == false &&
    GetStrLen(pobjCTRelationTypeEN.relationTypeEN) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关系类型英文名(relationTypeEN)]的长度不能超过50(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.relationTypeEN}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.description) == false &&
    GetStrLen(pobjCTRelationTypeEN.description) > 300
  ) {
    throw new Error(
      `(errid:Watl000413)字段[描述(description)]的长度不能超过300(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.description}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineColor) == false &&
    GetStrLen(pobjCTRelationTypeEN.lineColor) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[LineColor(lineColor)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.lineColor}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineStyle) == false &&
    GetStrLen(pobjCTRelationTypeEN.lineStyle) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[LineStyle(lineStyle)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.lineStyle}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.arrowType) == false &&
    GetStrLen(pobjCTRelationTypeEN.arrowType) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[箭头类型(arrowType)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.arrowType}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.displayColor) == false &&
    GetStrLen(pobjCTRelationTypeEN.displayColor) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DisplayColor(displayColor)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.displayColor}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updDate) == false &&
    GetStrLen(pobjCTRelationTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.updDate}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updUser) == false &&
    GetStrLen(pobjCTRelationTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.updUser}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.memo) == false &&
    GetStrLen(pobjCTRelationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.memo}(clsCTRelationTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.ctRelationTypeId) == false &&
    undefined !== pobjCTRelationTypeEN.ctRelationTypeId &&
    tzDataType.isString(pobjCTRelationTypeEN.ctRelationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Ct关系类型Id(ctRelationTypeId)]的值:[${pobjCTRelationTypeEN.ctRelationTypeId}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeName) == false &&
    undefined !== pobjCTRelationTypeEN.relationTypeName &&
    tzDataType.isString(pobjCTRelationTypeEN.relationTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关系类型名(relationTypeName)]的值:[${pobjCTRelationTypeEN.relationTypeName}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeEN) == false &&
    undefined !== pobjCTRelationTypeEN.relationTypeEN &&
    tzDataType.isString(pobjCTRelationTypeEN.relationTypeEN) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关系类型英文名(relationTypeEN)]的值:[${pobjCTRelationTypeEN.relationTypeEN}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.description) == false &&
    undefined !== pobjCTRelationTypeEN.description &&
    tzDataType.isString(pobjCTRelationTypeEN.description) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[描述(description)]的值:[${pobjCTRelationTypeEN.description}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTRelationTypeEN.orderNum &&
    undefined !== pobjCTRelationTypeEN.orderNum &&
    tzDataType.isNumber(pobjCTRelationTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjCTRelationTypeEN.orderNum}], 非法,应该为数值型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTRelationTypeEN.inUse &&
    undefined !== pobjCTRelationTypeEN.inUse &&
    tzDataType.isBoolean(pobjCTRelationTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjCTRelationTypeEN.inUse}], 非法,应该为布尔型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineColor) == false &&
    undefined !== pobjCTRelationTypeEN.lineColor &&
    tzDataType.isString(pobjCTRelationTypeEN.lineColor) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[LineColor(lineColor)]的值:[${pobjCTRelationTypeEN.lineColor}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineStyle) == false &&
    undefined !== pobjCTRelationTypeEN.lineStyle &&
    tzDataType.isString(pobjCTRelationTypeEN.lineStyle) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[LineStyle(lineStyle)]的值:[${pobjCTRelationTypeEN.lineStyle}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTRelationTypeEN.lineWidth &&
    undefined !== pobjCTRelationTypeEN.lineWidth &&
    tzDataType.isNumber(pobjCTRelationTypeEN.lineWidth) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[LineWidth(lineWidth)]的值:[${pobjCTRelationTypeEN.lineWidth}], 非法,应该为数值型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.arrowType) == false &&
    undefined !== pobjCTRelationTypeEN.arrowType &&
    tzDataType.isString(pobjCTRelationTypeEN.arrowType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[箭头类型(arrowType)]的值:[${pobjCTRelationTypeEN.arrowType}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.displayColor) == false &&
    undefined !== pobjCTRelationTypeEN.displayColor &&
    tzDataType.isString(pobjCTRelationTypeEN.displayColor) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DisplayColor(displayColor)]的值:[${pobjCTRelationTypeEN.displayColor}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updDate) == false &&
    undefined !== pobjCTRelationTypeEN.updDate &&
    tzDataType.isString(pobjCTRelationTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCTRelationTypeEN.updDate}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updUser) == false &&
    undefined !== pobjCTRelationTypeEN.updUser &&
    tzDataType.isString(pobjCTRelationTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjCTRelationTypeEN.updUser}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.memo) == false &&
    undefined !== pobjCTRelationTypeEN.memo &&
    tzDataType.isString(pobjCTRelationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjCTRelationTypeEN.memo}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CTRelationType_CheckProperty4Update(pobjCTRelationTypeEN: clsCTRelationTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.ctRelationTypeId) == false &&
    GetStrLen(pobjCTRelationTypeEN.ctRelationTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Ct关系类型Id(ctRelationTypeId)]的长度不能超过2(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.ctRelationTypeId}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeName) == false &&
    GetStrLen(pobjCTRelationTypeEN.relationTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关系类型名(relationTypeName)]的长度不能超过50(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.relationTypeName}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeEN) == false &&
    GetStrLen(pobjCTRelationTypeEN.relationTypeEN) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关系类型英文名(relationTypeEN)]的长度不能超过50(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.relationTypeEN}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.description) == false &&
    GetStrLen(pobjCTRelationTypeEN.description) > 300
  ) {
    throw new Error(
      `(errid:Watl000416)字段[描述(description)]的长度不能超过300(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.description}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineColor) == false &&
    GetStrLen(pobjCTRelationTypeEN.lineColor) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[LineColor(lineColor)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.lineColor}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineStyle) == false &&
    GetStrLen(pobjCTRelationTypeEN.lineStyle) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[LineStyle(lineStyle)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.lineStyle}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.arrowType) == false &&
    GetStrLen(pobjCTRelationTypeEN.arrowType) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[箭头类型(arrowType)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.arrowType}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.displayColor) == false &&
    GetStrLen(pobjCTRelationTypeEN.displayColor) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DisplayColor(displayColor)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.displayColor}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updDate) == false &&
    GetStrLen(pobjCTRelationTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.updDate}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updUser) == false &&
    GetStrLen(pobjCTRelationTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.updUser}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.memo) == false &&
    GetStrLen(pobjCTRelationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CT关系类型(CTRelationType))!值:${pobjCTRelationTypeEN.memo}(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.ctRelationTypeId) == false &&
    undefined !== pobjCTRelationTypeEN.ctRelationTypeId &&
    tzDataType.isString(pobjCTRelationTypeEN.ctRelationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Ct关系类型Id(ctRelationTypeId)]的值:[${pobjCTRelationTypeEN.ctRelationTypeId}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeName) == false &&
    undefined !== pobjCTRelationTypeEN.relationTypeName &&
    tzDataType.isString(pobjCTRelationTypeEN.relationTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关系类型名(relationTypeName)]的值:[${pobjCTRelationTypeEN.relationTypeName}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.relationTypeEN) == false &&
    undefined !== pobjCTRelationTypeEN.relationTypeEN &&
    tzDataType.isString(pobjCTRelationTypeEN.relationTypeEN) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关系类型英文名(relationTypeEN)]的值:[${pobjCTRelationTypeEN.relationTypeEN}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.description) == false &&
    undefined !== pobjCTRelationTypeEN.description &&
    tzDataType.isString(pobjCTRelationTypeEN.description) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[描述(description)]的值:[${pobjCTRelationTypeEN.description}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTRelationTypeEN.orderNum &&
    undefined !== pobjCTRelationTypeEN.orderNum &&
    tzDataType.isNumber(pobjCTRelationTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjCTRelationTypeEN.orderNum}], 非法,应该为数值型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTRelationTypeEN.inUse &&
    undefined !== pobjCTRelationTypeEN.inUse &&
    tzDataType.isBoolean(pobjCTRelationTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjCTRelationTypeEN.inUse}], 非法,应该为布尔型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineColor) == false &&
    undefined !== pobjCTRelationTypeEN.lineColor &&
    tzDataType.isString(pobjCTRelationTypeEN.lineColor) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[LineColor(lineColor)]的值:[${pobjCTRelationTypeEN.lineColor}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.lineStyle) == false &&
    undefined !== pobjCTRelationTypeEN.lineStyle &&
    tzDataType.isString(pobjCTRelationTypeEN.lineStyle) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[LineStyle(lineStyle)]的值:[${pobjCTRelationTypeEN.lineStyle}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTRelationTypeEN.lineWidth &&
    undefined !== pobjCTRelationTypeEN.lineWidth &&
    tzDataType.isNumber(pobjCTRelationTypeEN.lineWidth) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[LineWidth(lineWidth)]的值:[${pobjCTRelationTypeEN.lineWidth}], 非法,应该为数值型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.arrowType) == false &&
    undefined !== pobjCTRelationTypeEN.arrowType &&
    tzDataType.isString(pobjCTRelationTypeEN.arrowType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[箭头类型(arrowType)]的值:[${pobjCTRelationTypeEN.arrowType}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.displayColor) == false &&
    undefined !== pobjCTRelationTypeEN.displayColor &&
    tzDataType.isString(pobjCTRelationTypeEN.displayColor) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DisplayColor(displayColor)]的值:[${pobjCTRelationTypeEN.displayColor}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updDate) == false &&
    undefined !== pobjCTRelationTypeEN.updDate &&
    tzDataType.isString(pobjCTRelationTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCTRelationTypeEN.updDate}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.updUser) == false &&
    undefined !== pobjCTRelationTypeEN.updUser &&
    tzDataType.isString(pobjCTRelationTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjCTRelationTypeEN.updUser}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.memo) == false &&
    undefined !== pobjCTRelationTypeEN.memo &&
    tzDataType.isString(pobjCTRelationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjCTRelationTypeEN.memo}], 非法,应该为字符型(In CT关系类型(CTRelationType))!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjCTRelationTypeEN.ctRelationTypeId) === true ||
    pobjCTRelationTypeEN.ctRelationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[Ct关系类型Id]不能为空(In CT关系类型)!(clsCTRelationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CTRelationType_GetJSONStrByObj(pobjCTRelationTypeEN: clsCTRelationTypeEN): string {
  pobjCTRelationTypeEN.sfUpdFldSetStr = pobjCTRelationTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCTRelationTypeEN);
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
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CTRelationType_GetObjLstByJSONStr(strJSON: string): Array<clsCTRelationTypeEN> {
  let arrCTRelationTypeObjLst = new Array<clsCTRelationTypeEN>();
  if (strJSON === '') {
    return arrCTRelationTypeObjLst;
  }
  try {
    arrCTRelationTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCTRelationTypeObjLst;
  }
  return arrCTRelationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCTRelationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CTRelationType_GetObjLstByJSONObjLst(
  arrCTRelationTypeObjLstS: Array<clsCTRelationTypeEN>,
): Array<clsCTRelationTypeEN> {
  const arrCTRelationTypeObjLst = new Array<clsCTRelationTypeEN>();
  for (const objInFor of arrCTRelationTypeObjLstS) {
    const obj1 = CTRelationType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCTRelationTypeObjLst.push(obj1);
  }
  return arrCTRelationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CTRelationType_GetObjByJSONStr(strJSON: string): clsCTRelationTypeEN {
  let pobjCTRelationTypeEN = new clsCTRelationTypeEN();
  if (strJSON === '') {
    return pobjCTRelationTypeEN;
  }
  try {
    pobjCTRelationTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCTRelationTypeEN;
  }
  return pobjCTRelationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CTRelationType_GetCombineCondition(
  objCTRelationTypeCond: clsCTRelationTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_CtRelationTypeId,
    ) == true
  ) {
    const strComparisonOpCtRelationTypeId: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_CtRelationTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_CtRelationTypeId,
      objCTRelationTypeCond.ctRelationTypeId,
      strComparisonOpCtRelationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_RelationTypeName,
    ) == true
  ) {
    const strComparisonOpRelationTypeName: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_RelationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_RelationTypeName,
      objCTRelationTypeCond.relationTypeName,
      strComparisonOpRelationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_RelationTypeEN,
    ) == true
  ) {
    const strComparisonOpRelationTypeEN: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_RelationTypeEN];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_RelationTypeEN,
      objCTRelationTypeCond.relationTypeEN,
      strComparisonOpRelationTypeEN,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_Description,
    ) == true
  ) {
    const strComparisonOpDescription: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_Description];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_Description,
      objCTRelationTypeCond.description,
      strComparisonOpDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTRelationTypeEN.con_OrderNum,
      objCTRelationTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_InUse,
    ) == true
  ) {
    if (objCTRelationTypeCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsCTRelationTypeEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCTRelationTypeEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_LineColor,
    ) == true
  ) {
    const strComparisonOpLineColor: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_LineColor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_LineColor,
      objCTRelationTypeCond.lineColor,
      strComparisonOpLineColor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_LineStyle,
    ) == true
  ) {
    const strComparisonOpLineStyle: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_LineStyle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_LineStyle,
      objCTRelationTypeCond.lineStyle,
      strComparisonOpLineStyle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_LineWidth,
    ) == true
  ) {
    const strComparisonOpLineWidth: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_LineWidth];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTRelationTypeEN.con_LineWidth,
      objCTRelationTypeCond.lineWidth,
      strComparisonOpLineWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_ArrowType,
    ) == true
  ) {
    const strComparisonOpArrowType: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_ArrowType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_ArrowType,
      objCTRelationTypeCond.arrowType,
      strComparisonOpArrowType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_DisplayColor,
    ) == true
  ) {
    const strComparisonOpDisplayColor: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_DisplayColor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_DisplayColor,
      objCTRelationTypeCond.displayColor,
      strComparisonOpDisplayColor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_UpdDate,
      objCTRelationTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_UpdUser,
      objCTRelationTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTRelationTypeCond.dicFldComparisonOp,
      clsCTRelationTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCTRelationTypeCond.dicFldComparisonOp[clsCTRelationTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTRelationTypeEN.con_Memo,
      objCTRelationTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCTRelationTypeENS:源对象
 * @param objCTRelationTypeENT:目标对象
 */
export function CTRelationType_GetObjFromJsonObj(
  objCTRelationTypeENS: clsCTRelationTypeEN,
): clsCTRelationTypeEN {
  const objCTRelationTypeENT: clsCTRelationTypeEN = new clsCTRelationTypeEN();
  ObjectAssign(objCTRelationTypeENT, objCTRelationTypeENS);
  return objCTRelationTypeENT;
}
