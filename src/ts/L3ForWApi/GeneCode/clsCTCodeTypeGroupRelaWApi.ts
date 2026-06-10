/**
 * 类名:clsCTCodeTypeGroupRelaWApi
 * 表名:CTCodeTypeGroupRela(00050647)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/07 14:10:06
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
 * CTCodeTypeGroupRela(CTCodeTypeGroupRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年06月07日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsCTCodeTypeGroupRelaENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaENEx';
import {
  clsCTCodeTypeGroupRelaEN,
  CTCodeTypeGroupRelaKey,
} from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { CTCodeTypeGroup_func } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
import { clsCTCodeTypeGroupEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const cTCodeTypeGroupRela_Controller = 'CTCodeTypeGroupRelaApi';
export const cTCodeTypeGroupRela_ConstructorName = 'cTCodeTypeGroupRela';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function CTCodeTypeGroupRela_SplitKeyLst(strKeyLst: string): CTCodeTypeGroupRelaKey {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    ctGroupId: arrKey[0],
    codeTypeId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.ctGroupId) == true) {
    const strMsg = '关键字段(ctGroupId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.codeTypeId) == true) {
    const strMsg = '关键字段(codeTypeId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param key:包含关键字的对象
 * @returns 对象
 **/
export async function CTCodeTypeGroupRela_GetObjByKeyAsync(
  key: CTCodeTypeGroupRelaKey,
): Promise<clsCTCodeTypeGroupRelaEN | null> {
  const strThisFuncName = 'GetObjByKeyAsync';
  if (key.ctGroupId === undefined || key.ctGroupId === null || key.ctGroupId === '') {
    const strMsg = Format(
      '关键字段[CtGroupId]不能为空!(in {0}.{1})',
      cTCodeTypeGroupRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (key.codeTypeId === undefined || key.codeTypeId === null || key.codeTypeId === '') {
    const strMsg = Format(
      '关键字段[CodeTypeId]不能为空!(in {0}.{1})',
      cTCodeTypeGroupRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtGroupId: key.ctGroupId,
      strCodeTypeId: key.codeTypeId,
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
      const objCTCodeTypeGroupRela = CTCodeTypeGroupRela_GetObjFromJsonObj(returnObj);
      return objCTCodeTypeGroupRela;
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用localStorage,不需要生成[GetObjByKeylocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage )
//该表没有使用Cache,不需要生成[GetObjByKeyCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroupRela_SortFunDefa(
  a: clsCTCodeTypeGroupRelaEN,
  b: clsCTCodeTypeGroupRelaEN,
): number {
  return a.ctGroupId.localeCompare(b.ctGroupId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroupRela_SortFunDefa2Fld(
  a: clsCTCodeTypeGroupRelaEN,
  b: clsCTCodeTypeGroupRelaEN,
): number {
  if (a.orderNum == b.orderNum) return a.layerNo - b.layerNo;
  else return a.orderNum - b.orderNum;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroupRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCTCodeTypeGroupRelaEN.con_CtGroupId:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.ctGroupId.localeCompare(b.ctGroupId);
        };
      case clsCTCodeTypeGroupRelaEN.con_CodeTypeId:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsCTCodeTypeGroupRelaEN.con_IsMainGroup:
        return (a: clsCTCodeTypeGroupRelaEN) => {
          if (a.isMainGroup == true) return 1;
          else return -1;
        };
      case clsCTCodeTypeGroupRelaEN.con_OrderNum:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCTCodeTypeGroupRelaEN.con_LayerNo:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.layerNo - b.layerNo;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosX:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.posX - b.posX;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosY:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.posY - b.posY;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosXSmall:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.posXSmall - b.posXSmall;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosYSmall:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.posYSmall - b.posYSmall;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosXLarge:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.posXLarge - b.posXLarge;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosYLarge:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.posYLarge - b.posYLarge;
        };
      case clsCTCodeTypeGroupRelaEN.con_LayoutVersion:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return a.layoutVersion - b.layoutVersion;
        };
      case clsCTCodeTypeGroupRelaEN.con_IsPinned:
        return (a: clsCTCodeTypeGroupRelaEN) => {
          if (a.isPinned == true) return 1;
          else return -1;
        };
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (a.layoutUpdatedBy == null) return -1;
          if (b.layoutUpdatedBy == null) return 1;
          return a.layoutUpdatedBy.localeCompare(b.layoutUpdatedBy);
        };
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (a.layoutUpdatedAt == null) return -1;
          if (b.layoutUpdatedAt == null) return 1;
          return a.layoutUpdatedAt.localeCompare(b.layoutUpdatedAt);
        };
      case clsCTCodeTypeGroupRelaEN.con_UpdDate:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCTCodeTypeGroupRelaEN.con_UpdUser:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CTCodeTypeGroupRela]中不存在!(in ${cTCodeTypeGroupRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCTCodeTypeGroupRelaEN.con_CtGroupId:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.ctGroupId.localeCompare(a.ctGroupId);
        };
      case clsCTCodeTypeGroupRelaEN.con_CodeTypeId:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsCTCodeTypeGroupRelaEN.con_IsMainGroup:
        return (b: clsCTCodeTypeGroupRelaEN) => {
          if (b.isMainGroup == true) return 1;
          else return -1;
        };
      case clsCTCodeTypeGroupRelaEN.con_OrderNum:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCTCodeTypeGroupRelaEN.con_LayerNo:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.layerNo - a.layerNo;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosX:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.posX - a.posX;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosY:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.posY - a.posY;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosXSmall:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.posXSmall - a.posXSmall;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosYSmall:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.posYSmall - a.posYSmall;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosXLarge:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.posXLarge - a.posXLarge;
        };
      case clsCTCodeTypeGroupRelaEN.con_PosYLarge:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.posYLarge - a.posYLarge;
        };
      case clsCTCodeTypeGroupRelaEN.con_LayoutVersion:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          return b.layoutVersion - a.layoutVersion;
        };
      case clsCTCodeTypeGroupRelaEN.con_IsPinned:
        return (b: clsCTCodeTypeGroupRelaEN) => {
          if (b.isPinned == true) return 1;
          else return -1;
        };
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (b.layoutUpdatedBy == null) return -1;
          if (a.layoutUpdatedBy == null) return 1;
          return b.layoutUpdatedBy.localeCompare(a.layoutUpdatedBy);
        };
      case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (b.layoutUpdatedAt == null) return -1;
          if (a.layoutUpdatedAt == null) return 1;
          return b.layoutUpdatedAt.localeCompare(a.layoutUpdatedAt);
        };
      case clsCTCodeTypeGroupRelaEN.con_UpdDate:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCTCodeTypeGroupRelaEN.con_UpdUser:
        return (a: clsCTCodeTypeGroupRelaEN, b: clsCTCodeTypeGroupRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CTCodeTypeGroupRela]中不存在!(in ${cTCodeTypeGroupRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByKeyCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CTCodeTypeGroupRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCTCodeTypeGroupRelaEN.con_CtGroupId:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.ctGroupId === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_CodeTypeId:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.codeTypeId === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_IsMainGroup:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.isMainGroup === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_OrderNum:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.orderNum === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_LayerNo:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.layerNo === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_PosX:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.posX === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_PosY:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.posY === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_PosXSmall:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.posXSmall === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_PosYSmall:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.posYSmall === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_PosXLarge:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.posXLarge === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_PosYLarge:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.posYLarge === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_LayoutVersion:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.layoutVersion === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_IsPinned:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.isPinned === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.layoutUpdatedBy === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.layoutUpdatedAt === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_UpdDate:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.updDate === value;
      };
    case clsCTCodeTypeGroupRelaEN.con_UpdUser:
      return (obj: clsCTCodeTypeGroupRelaEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CTCodeTypeGroupRela]中不存在!(in ${cTCodeTypeGroupRela_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[CTCodeTypeGroupRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CTCodeTypeGroupRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCTCodeTypeGroupRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
      const objCTCodeTypeGroupRela = CTCodeTypeGroupRela_GetObjFromJsonObj(returnObj);
      return objCTCodeTypeGroupRela;
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCTCodeTypeGroupRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
          cTCodeTypeGroupRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroupRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
//该表没有使用Cache,不需要生成[GetObjLstByCtGroupIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function CTCodeTypeGroupRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCTCodeTypeGroupRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
          cTCodeTypeGroupRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroupRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCTCodeTypeGroupRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
          cTCodeTypeGroupRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroupRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCTCodeTypeGroupRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCTCodeTypeGroupRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
          cTCodeTypeGroupRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CTCodeTypeGroupRela_GetObjLstByJSONObjLst(returnObjLst);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param key:关键字对象
 * @returns 获取删除的结果
 **/
export async function CTCodeTypeGroupRela_DelRecordAsync(
  key: CTCodeTypeGroupRelaKey,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      CtGroupId: key.ctGroupId,
      CodeTypeId: key.codeTypeId,
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function CTCodeTypeGroupRela_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param objCTCodeTypeGroupRelaENS:源对象
 * @returns 目标对象=>clsCTCodeTypeGroupRelaEN:objCTCodeTypeGroupRelaENT
 **/
export function CTCodeTypeGroupRela_CopyToEx(
  objCTCodeTypeGroupRelaENS: clsCTCodeTypeGroupRelaEN,
): clsCTCodeTypeGroupRelaENEx {
  const strThisFuncName = CTCodeTypeGroupRela_CopyToEx.name;
  const objCTCodeTypeGroupRelaENT = new clsCTCodeTypeGroupRelaENEx();
  try {
    ObjectAssign(objCTCodeTypeGroupRelaENT, objCTCodeTypeGroupRelaENS);
    return objCTCodeTypeGroupRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroupRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCTCodeTypeGroupRelaENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CTCodeTypeGroupRela_FuncMapByFldName(
  strFldName: string,
  objCTCodeTypeGroupRelaEx: clsCTCodeTypeGroupRelaENEx,
) {
  const strThisFuncName = CTCodeTypeGroupRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCTCodeTypeGroupRelaEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCTCodeTypeGroupRelaENEx.con_CodeTypeName:
      return CTCodeTypeGroupRela_FuncMapCodeTypeName(objCTCodeTypeGroupRelaEx);
    case clsCTCodeTypeGroupRelaENEx.con_GroupName:
      return CTCodeTypeGroupRela_FuncMapGroupName(objCTCodeTypeGroupRelaEx);
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
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroupRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCTCodeTypeGroupRelaENEx.con_CodeTypeName:
        return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsCTCodeTypeGroupRelaENEx.con_GroupName:
        return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
          return a.groupName.localeCompare(b.groupName);
        };
      default:
        return CTCodeTypeGroupRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCTCodeTypeGroupRelaENEx.con_CodeTypeName:
        return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsCTCodeTypeGroupRelaENEx.con_GroupName:
        return (a: clsCTCodeTypeGroupRelaENEx, b: clsCTCodeTypeGroupRelaENEx) => {
          return b.groupName.localeCompare(a.groupName);
        };
      default:
        return CTCodeTypeGroupRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCTCodeTypeGroupRelaS:源对象
 **/
export async function CTCodeTypeGroupRela_FuncMapCodeTypeName(
  objCTCodeTypeGroupRela: clsCTCodeTypeGroupRelaENEx,
) {
  const strThisFuncName = CTCodeTypeGroupRela_FuncMapCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objCTCodeTypeGroupRela.codeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objCTCodeTypeGroupRela.codeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objCTCodeTypeGroupRela.codeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001309)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroupRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCTCodeTypeGroupRelaS:源对象
 **/
export async function CTCodeTypeGroupRela_FuncMapGroupName(
  objCTCodeTypeGroupRela: clsCTCodeTypeGroupRelaENEx,
) {
  const strThisFuncName = CTCodeTypeGroupRela_FuncMapGroupName.name;
  try {
    if (IsNullOrEmpty(objCTCodeTypeGroupRela.groupName) == true) {
      const CTCodeTypeGroupCtGroupId = objCTCodeTypeGroupRela.ctGroupId;
      const CTCodeTypeGroupGroupName = await CTCodeTypeGroup_func(
        clsCTCodeTypeGroupEN.con_CtGroupId,
        clsCTCodeTypeGroupEN.con_GroupName,
        CTCodeTypeGroupCtGroupId,
      );
      objCTCodeTypeGroupRela.groupName = CTCodeTypeGroupGroupName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001310)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_DelCTCodeTypeGroupRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCTCodeTypeGroupRelasByCondAsync';
  const strAction = 'DelCTCodeTypeGroupRelasByCond';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param objCTCodeTypeGroupRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CTCodeTypeGroupRela_AddNewRecordAsync(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCTCodeTypeGroupRelaEN.ctGroupId === null || objCTCodeTypeGroupRelaEN.ctGroupId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCTCodeTypeGroupRelaEN);
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupRelaEN, config);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param objCTCodeTypeGroupRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CTCodeTypeGroupRela_AddNewRecordWithMaxIdAsync(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupRelaEN, config);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_AddNewObjSave(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CTCodeTypeGroupRela_CheckPropertyNew(objCTCodeTypeGroupRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cTCodeTypeGroupRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await CTCodeTypeGroupRela_IsExistAsync({
      ctGroupId: objCTCodeTypeGroupRelaEN.ctGroupId,
      codeTypeId: objCTCodeTypeGroupRelaEN.codeTypeId,
    });
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objCTCodeTypeGroupRelaEN.ctGroupId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await CTCodeTypeGroupRela_AddNewRecordAsync(objCTCodeTypeGroupRelaEN);
    if (returnBool == true) {
      //CTCodeTypeGroupRela_ReFreshCache();
    } else {
      const strInfo = `添加[CTCodeTypeGroupRela(CTCodeTypeGroupRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    let strReturnKeyLst = '';
    strReturnKeyLst += `${objCTCodeTypeGroupRelaEN.ctGroupId}`;
    strReturnKeyLst += `|${objCTCodeTypeGroupRelaEN.codeTypeId}`;
    return { keyword: strReturnKeyLst, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${cTCodeTypeGroupRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function CTCodeTypeGroupRela_UpdateObjSave(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCTCodeTypeGroupRelaEN.sfUpdFldSetStr = objCTCodeTypeGroupRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objCTCodeTypeGroupRelaEN.ctGroupId == '' || objCTCodeTypeGroupRelaEN.ctGroupId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CTCodeTypeGroupRela_CheckProperty4Update(objCTCodeTypeGroupRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cTCodeTypeGroupRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await CTCodeTypeGroupRela_UpdateRecordAsync(objCTCodeTypeGroupRelaEN);
    if (returnBool == true) {
      //CTCodeTypeGroupRela_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${cTCodeTypeGroupRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCTCodeTypeGroupRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CTCodeTypeGroupRela_AddNewRecordWithReturnKeyAsync(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupRelaEN, config);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param objCTCodeTypeGroupRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CTCodeTypeGroupRela_UpdateRecordAsync(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === undefined ||
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === null ||
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTCodeTypeGroupRelaEN.ctGroupId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupRelaEN, config);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param objCTCodeTypeGroupRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CTCodeTypeGroupRela_EditRecordExAsync(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === undefined ||
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === null ||
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTCodeTypeGroupRelaEN.ctGroupId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupRelaEN, config);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param objCTCodeTypeGroupRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CTCodeTypeGroupRela_UpdateWithConditionAsync(
  objCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === undefined ||
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === null ||
    objCTCodeTypeGroupRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCTCodeTypeGroupRelaEN.ctGroupId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);
  objCTCodeTypeGroupRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCTCodeTypeGroupRelaEN, config);
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
 * @param key:包含关键字的对象
 * @returns 是否存在?存在返回True
 **/
export async function CTCodeTypeGroupRela_IsExistAsync(
  key: CTCodeTypeGroupRelaKey,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtGroupId: key.ctGroupId,
      strCodeTypeId: key.codeTypeId,
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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export async function CTCodeTypeGroupRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cTCodeTypeGroupRela_Controller, strAction);

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
        cTCodeTypeGroupRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cTCodeTypeGroupRela_ConstructorName,
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
export function CTCodeTypeGroupRela_GetWebApiUrl(strController: string, strAction: string): string {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CTCodeTypeGroupRela_CheckPropertyNew(
  pobjCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjCTCodeTypeGroupRelaEN.isMainGroup ||
    (pobjCTCodeTypeGroupRelaEN.isMainGroup != null &&
      pobjCTCodeTypeGroupRelaEN.isMainGroup.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[IsMainGroup]不能为空(In CTCodeTypeGroupRela)!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjCTCodeTypeGroupRelaEN.layoutVersion ||
    (pobjCTCodeTypeGroupRelaEN.layoutVersion != null &&
      pobjCTCodeTypeGroupRelaEN.layoutVersion.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[LayoutVersion]不能为空(In CTCodeTypeGroupRela)!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjCTCodeTypeGroupRelaEN.isPinned ||
    (pobjCTCodeTypeGroupRelaEN.isPinned != null &&
      pobjCTCodeTypeGroupRelaEN.isPinned.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[IsPinned]不能为空(In CTCodeTypeGroupRela)!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.ctGroupId) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.ctGroupId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Ct组Id(ctGroupId)]的长度不能超过4(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.ctGroupId}(clsCTCodeTypeGroupRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.codeTypeId) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.codeTypeId}(clsCTCodeTypeGroupRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[LayoutUpdatedBy(layoutUpdatedBy)]的长度不能超过100(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy}(clsCTCodeTypeGroupRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[LayoutUpdatedAt(layoutUpdatedAt)]的长度不能超过20(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt}(clsCTCodeTypeGroupRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updDate) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.updDate}(clsCTCodeTypeGroupRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updUser) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.updUser}(clsCTCodeTypeGroupRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.ctGroupId) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.ctGroupId &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.ctGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Ct组Id(ctGroupId)]的值:[${pobjCTCodeTypeGroupRelaEN.ctGroupId}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.codeTypeId) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.codeTypeId &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjCTCodeTypeGroupRelaEN.codeTypeId}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.isMainGroup &&
    undefined !== pobjCTCodeTypeGroupRelaEN.isMainGroup &&
    tzDataType.isBoolean(pobjCTCodeTypeGroupRelaEN.isMainGroup) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsMainGroup(isMainGroup)]的值:[${pobjCTCodeTypeGroupRelaEN.isMainGroup}], 非法,应该为布尔型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.orderNum &&
    undefined !== pobjCTCodeTypeGroupRelaEN.orderNum &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjCTCodeTypeGroupRelaEN.orderNum}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.layerNo &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layerNo &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.layerNo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[LayerNo(layerNo)]的值:[${pobjCTCodeTypeGroupRelaEN.layerNo}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posX &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posX &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posX) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PosX(posX)]的值:[${pobjCTCodeTypeGroupRelaEN.posX}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posY &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posY &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posY) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PosY(posY)]的值:[${pobjCTCodeTypeGroupRelaEN.posY}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posXSmall &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posXSmall &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posXSmall) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PosXSmall(posXSmall)]的值:[${pobjCTCodeTypeGroupRelaEN.posXSmall}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posYSmall &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posYSmall &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posYSmall) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PosYSmall(posYSmall)]的值:[${pobjCTCodeTypeGroupRelaEN.posYSmall}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posXLarge &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posXLarge &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posXLarge) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PosXLarge(posXLarge)]的值:[${pobjCTCodeTypeGroupRelaEN.posXLarge}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posYLarge &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posYLarge &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posYLarge) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[PosYLarge(posYLarge)]的值:[${pobjCTCodeTypeGroupRelaEN.posYLarge}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.layoutVersion &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layoutVersion &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.layoutVersion) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[LayoutVersion(layoutVersion)]的值:[${pobjCTCodeTypeGroupRelaEN.layoutVersion}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.isPinned &&
    undefined !== pobjCTCodeTypeGroupRelaEN.isPinned &&
    tzDataType.isBoolean(pobjCTCodeTypeGroupRelaEN.isPinned) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsPinned(isPinned)]的值:[${pobjCTCodeTypeGroupRelaEN.isPinned}], 非法,应该为布尔型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[LayoutUpdatedBy(layoutUpdatedBy)]的值:[${pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[LayoutUpdatedAt(layoutUpdatedAt)]的值:[${pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updDate) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.updDate &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCTCodeTypeGroupRelaEN.updDate}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updUser) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.updUser &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjCTCodeTypeGroupRelaEN.updUser}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CTCodeTypeGroupRela_CheckProperty4Update(
  pobjCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.ctGroupId) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.ctGroupId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Ct组Id(ctGroupId)]的长度不能超过4(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.ctGroupId}(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.codeTypeId) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.codeTypeId}(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[LayoutUpdatedBy(layoutUpdatedBy)]的长度不能超过100(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy}(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[LayoutUpdatedAt(layoutUpdatedAt)]的长度不能超过20(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt}(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updDate) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.updDate}(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updUser) == false &&
    GetStrLen(pobjCTCodeTypeGroupRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!值:${pobjCTCodeTypeGroupRelaEN.updUser}(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.ctGroupId) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.ctGroupId &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.ctGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Ct组Id(ctGroupId)]的值:[${pobjCTCodeTypeGroupRelaEN.ctGroupId}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.codeTypeId) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.codeTypeId &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjCTCodeTypeGroupRelaEN.codeTypeId}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.isMainGroup &&
    undefined !== pobjCTCodeTypeGroupRelaEN.isMainGroup &&
    tzDataType.isBoolean(pobjCTCodeTypeGroupRelaEN.isMainGroup) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsMainGroup(isMainGroup)]的值:[${pobjCTCodeTypeGroupRelaEN.isMainGroup}], 非法,应该为布尔型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.orderNum &&
    undefined !== pobjCTCodeTypeGroupRelaEN.orderNum &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjCTCodeTypeGroupRelaEN.orderNum}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.layerNo &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layerNo &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.layerNo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[LayerNo(layerNo)]的值:[${pobjCTCodeTypeGroupRelaEN.layerNo}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posX &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posX &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posX) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PosX(posX)]的值:[${pobjCTCodeTypeGroupRelaEN.posX}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posY &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posY &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posY) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PosY(posY)]的值:[${pobjCTCodeTypeGroupRelaEN.posY}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posXSmall &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posXSmall &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posXSmall) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PosXSmall(posXSmall)]的值:[${pobjCTCodeTypeGroupRelaEN.posXSmall}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posYSmall &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posYSmall &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posYSmall) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PosYSmall(posYSmall)]的值:[${pobjCTCodeTypeGroupRelaEN.posYSmall}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posXLarge &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posXLarge &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posXLarge) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PosXLarge(posXLarge)]的值:[${pobjCTCodeTypeGroupRelaEN.posXLarge}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.posYLarge &&
    undefined !== pobjCTCodeTypeGroupRelaEN.posYLarge &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.posYLarge) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[PosYLarge(posYLarge)]的值:[${pobjCTCodeTypeGroupRelaEN.posYLarge}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.layoutVersion &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layoutVersion &&
    tzDataType.isNumber(pobjCTCodeTypeGroupRelaEN.layoutVersion) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[LayoutVersion(layoutVersion)]的值:[${pobjCTCodeTypeGroupRelaEN.layoutVersion}], 非法,应该为数值型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCTCodeTypeGroupRelaEN.isPinned &&
    undefined !== pobjCTCodeTypeGroupRelaEN.isPinned &&
    tzDataType.isBoolean(pobjCTCodeTypeGroupRelaEN.isPinned) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsPinned(isPinned)]的值:[${pobjCTCodeTypeGroupRelaEN.isPinned}], 非法,应该为布尔型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[LayoutUpdatedBy(layoutUpdatedBy)]的值:[${pobjCTCodeTypeGroupRelaEN.layoutUpdatedBy}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[LayoutUpdatedAt(layoutUpdatedAt)]的值:[${pobjCTCodeTypeGroupRelaEN.layoutUpdatedAt}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updDate) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.updDate &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCTCodeTypeGroupRelaEN.updDate}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.updUser) == false &&
    undefined !== pobjCTCodeTypeGroupRelaEN.updUser &&
    tzDataType.isString(pobjCTCodeTypeGroupRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjCTCodeTypeGroupRelaEN.updUser}], 非法,应该为字符型(In CTCodeTypeGroupRela(CTCodeTypeGroupRela))!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjCTCodeTypeGroupRelaEN.ctGroupId) === true) {
    throw new Error(
      `(errid:Watl000064)字段[Ct组Id]不能为空(In CTCodeTypeGroupRela)!(clsCTCodeTypeGroupRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CTCodeTypeGroupRela_GetJSONStrByObj(
  pobjCTCodeTypeGroupRelaEN: clsCTCodeTypeGroupRelaEN,
): string {
  pobjCTCodeTypeGroupRelaEN.sfUpdFldSetStr = pobjCTCodeTypeGroupRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCTCodeTypeGroupRelaEN);
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
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CTCodeTypeGroupRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsCTCodeTypeGroupRelaEN> {
  let arrCTCodeTypeGroupRelaObjLst = new Array<clsCTCodeTypeGroupRelaEN>();
  if (strJSON === '') {
    return arrCTCodeTypeGroupRelaObjLst;
  }
  try {
    arrCTCodeTypeGroupRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCTCodeTypeGroupRelaObjLst;
  }
  return arrCTCodeTypeGroupRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCTCodeTypeGroupRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CTCodeTypeGroupRela_GetObjLstByJSONObjLst(
  arrCTCodeTypeGroupRelaObjLstS: Array<clsCTCodeTypeGroupRelaEN>,
): Array<clsCTCodeTypeGroupRelaEN> {
  const arrCTCodeTypeGroupRelaObjLst = new Array<clsCTCodeTypeGroupRelaEN>();
  for (const objInFor of arrCTCodeTypeGroupRelaObjLstS) {
    const obj1 = CTCodeTypeGroupRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCTCodeTypeGroupRelaObjLst.push(obj1);
  }
  return arrCTCodeTypeGroupRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-06-07
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CTCodeTypeGroupRela_GetObjByJSONStr(strJSON: string): clsCTCodeTypeGroupRelaEN {
  let pobjCTCodeTypeGroupRelaEN = new clsCTCodeTypeGroupRelaEN();
  if (strJSON === '') {
    return pobjCTCodeTypeGroupRelaEN;
  }
  try {
    pobjCTCodeTypeGroupRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCTCodeTypeGroupRelaEN;
  }
  return pobjCTCodeTypeGroupRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CTCodeTypeGroupRela_GetCombineCondition(
  objCTCodeTypeGroupRelaCond: clsCTCodeTypeGroupRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_CtGroupId,
    ) == true
  ) {
    const strComparisonOpCtGroupId: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_CtGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupRelaEN.con_CtGroupId,
      objCTCodeTypeGroupRelaCond.ctGroupId,
      strComparisonOpCtGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
      objCTCodeTypeGroupRelaCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_IsMainGroup,
    ) == true
  ) {
    if (objCTCodeTypeGroupRelaCond.isMainGroup == true) {
      strWhereCond += Format(" And {0} = '1'", clsCTCodeTypeGroupRelaEN.con_IsMainGroup);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCTCodeTypeGroupRelaEN.con_IsMainGroup);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_OrderNum,
      objCTCodeTypeGroupRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_LayerNo,
    ) == true
  ) {
    const strComparisonOpLayerNo: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_LayerNo];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_LayerNo,
      objCTCodeTypeGroupRelaCond.layerNo,
      strComparisonOpLayerNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_PosX,
    ) == true
  ) {
    const strComparisonOpPosX: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_PosX];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_PosX,
      objCTCodeTypeGroupRelaCond.posX,
      strComparisonOpPosX,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_PosY,
    ) == true
  ) {
    const strComparisonOpPosY: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_PosY];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_PosY,
      objCTCodeTypeGroupRelaCond.posY,
      strComparisonOpPosY,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_PosXSmall,
    ) == true
  ) {
    const strComparisonOpPosXSmall: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_PosXSmall];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_PosXSmall,
      objCTCodeTypeGroupRelaCond.posXSmall,
      strComparisonOpPosXSmall,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_PosYSmall,
    ) == true
  ) {
    const strComparisonOpPosYSmall: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_PosYSmall];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_PosYSmall,
      objCTCodeTypeGroupRelaCond.posYSmall,
      strComparisonOpPosYSmall,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_PosXLarge,
    ) == true
  ) {
    const strComparisonOpPosXLarge: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_PosXLarge];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_PosXLarge,
      objCTCodeTypeGroupRelaCond.posXLarge,
      strComparisonOpPosXLarge,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_PosYLarge,
    ) == true
  ) {
    const strComparisonOpPosYLarge: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_PosYLarge];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_PosYLarge,
      objCTCodeTypeGroupRelaCond.posYLarge,
      strComparisonOpPosYLarge,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_LayoutVersion,
    ) == true
  ) {
    const strComparisonOpLayoutVersion: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_LayoutVersion];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCTCodeTypeGroupRelaEN.con_LayoutVersion,
      objCTCodeTypeGroupRelaCond.layoutVersion,
      strComparisonOpLayoutVersion,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_IsPinned,
    ) == true
  ) {
    if (objCTCodeTypeGroupRelaCond.isPinned == true) {
      strWhereCond += Format(" And {0} = '1'", clsCTCodeTypeGroupRelaEN.con_IsPinned);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCTCodeTypeGroupRelaEN.con_IsPinned);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy,
    ) == true
  ) {
    const strComparisonOpLayoutUpdatedBy: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedBy,
      objCTCodeTypeGroupRelaCond.layoutUpdatedBy,
      strComparisonOpLayoutUpdatedBy,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt,
    ) == true
  ) {
    const strComparisonOpLayoutUpdatedAt: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupRelaEN.con_LayoutUpdatedAt,
      objCTCodeTypeGroupRelaCond.layoutUpdatedAt,
      strComparisonOpLayoutUpdatedAt,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupRelaEN.con_UpdDate,
      objCTCodeTypeGroupRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp,
      clsCTCodeTypeGroupRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCTCodeTypeGroupRelaCond.dicFldComparisonOp[clsCTCodeTypeGroupRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCTCodeTypeGroupRelaEN.con_UpdUser,
      objCTCodeTypeGroupRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCTCodeTypeGroupRelaENS:源对象
 * @param objCTCodeTypeGroupRelaENT:目标对象
 */
export function CTCodeTypeGroupRela_GetObjFromJsonObj(
  objCTCodeTypeGroupRelaENS: clsCTCodeTypeGroupRelaEN,
): clsCTCodeTypeGroupRelaEN {
  const objCTCodeTypeGroupRelaENT: clsCTCodeTypeGroupRelaEN = new clsCTCodeTypeGroupRelaEN();
  ObjectAssign(objCTCodeTypeGroupRelaENT, objCTCodeTypeGroupRelaENS);
  return objCTCodeTypeGroupRelaENT;
}
