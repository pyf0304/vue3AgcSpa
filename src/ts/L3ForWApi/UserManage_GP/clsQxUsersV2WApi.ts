/**
 * 类名:clsQxUsersV2WApi
 * 表名:QxUsersV2(00140110)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 10:33:45
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户V2(QxUsersV2)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月31日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxUsersV2ENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersV2ENEx';
import { clsQxUsersV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersV2EN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';

export const qxUsersV2_Controller = 'QxUsersV2Api';
export const qxUsersV2_ConstructorName = 'qxUsersV2';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param intid:关键字
 * @returns 对象
 **/
export async function QxUsersV2_GetObjByidAsync(intid: number): Promise<clsQxUsersV2EN | null> {
  const strThisFuncName = 'GetObjByidAsync';

  if (intid == 0) {
    const strMsg = Format('参数:[intid]不能为空!(In clsQxUsersV2WApi.GetObjByidAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByid';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intid,
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
      const objQxUsersV2 = QxUsersV2_GetObjFromJsonObj(returnObj);
      return objQxUsersV2;
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByidlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByidCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsersV2_SortFunDefa(a: clsQxUsersV2EN, b: clsQxUsersV2EN): number {
  return a.id - b.id;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsersV2_SortFunDefa2Fld(a: clsQxUsersV2EN, b: clsQxUsersV2EN): number {
  if (a.createTime == b.createTime) return a.updateTime.localeCompare(b.updateTime);
  else return a.createTime.localeCompare(b.createTime);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsersV2_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxUsersV2EN.con_CreateTime:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.createTime == null) return -1;
          if (b.createTime == null) return 1;
          return a.createTime.localeCompare(b.createTime);
        };
      case clsQxUsersV2EN.con_updateTime:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.updateTime == null) return -1;
          if (b.updateTime == null) return 1;
          return a.updateTime.localeCompare(b.updateTime);
        };
      case clsQxUsersV2EN.con_id:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.id - b.id;
        };
      case clsQxUsersV2EN.con_DepartmentIdInt:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.departmentIdInt - b.departmentIdInt;
        };
      case clsQxUsersV2EN.con_name:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.name.localeCompare(b.name);
        };
      case clsQxUsersV2EN.con_UserName:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsQxUsersV2EN.con_Password:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.password.localeCompare(b.password);
        };
      case clsQxUsersV2EN.con_psalt:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.psalt == null) return -1;
          if (b.psalt == null) return 1;
          return a.psalt.localeCompare(b.psalt);
        };
      case clsQxUsersV2EN.con_nickName:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.nickName == null) return -1;
          if (b.nickName == null) return 1;
          return a.nickName.localeCompare(b.nickName);
        };
      case clsQxUsersV2EN.con_headImg:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.headImg == null) return -1;
          if (b.headImg == null) return 1;
          return a.headImg.localeCompare(b.headImg);
        };
      case clsQxUsersV2EN.con_Email:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.email == null) return -1;
          if (b.email == null) return 1;
          return a.email.localeCompare(b.email);
        };
      case clsQxUsersV2EN.con_phone:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.phone.localeCompare(b.phone);
        };
      case clsQxUsersV2EN.con_remark:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.remark == null) return -1;
          if (b.remark == null) return 1;
          return a.remark.localeCompare(b.remark);
        };
      case clsQxUsersV2EN.con_status:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.status - b.status;
        };
      case clsQxUsersV2EN.con_OpenId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.openId == null) return -1;
          if (b.openId == null) return 1;
          return a.openId.localeCompare(b.openId);
        };
      case clsQxUsersV2EN.con_UpdUser:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsQxUsersV2EN.con_IsArchive:
        return (a: clsQxUsersV2EN) => {
          if (a.isArchive == true) return 1;
          else return -1;
        };
      case clsQxUsersV2EN.con_IdentityId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.identityId == null) return -1;
          if (b.identityId == null) return 1;
          return a.identityId.localeCompare(b.identityId);
        };
      case clsQxUsersV2EN.con_StuTeacherId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.stuTeacherId == null) return -1;
          if (b.stuTeacherId == null) return 1;
          return a.stuTeacherId.localeCompare(b.stuTeacherId);
        };
      case clsQxUsersV2EN.con_EffitiveBeginDate:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.effitiveBeginDate == null) return -1;
          if (b.effitiveBeginDate == null) return 1;
          return a.effitiveBeginDate.localeCompare(b.effitiveBeginDate);
        };
      case clsQxUsersV2EN.con_EffitiveEndDate:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.effitiveEndDate == null) return -1;
          if (b.effitiveEndDate == null) return 1;
          return a.effitiveEndDate.localeCompare(b.effitiveEndDate);
        };
      case clsQxUsersV2EN.con_UserId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsQxUsersV2EN.con_EffectiveDate:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (a.effectiveDate == null) return -1;
          if (b.effectiveDate == null) return 1;
          return a.effectiveDate.localeCompare(b.effectiveDate);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxUsersV2]中不存在!(in ${qxUsersV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxUsersV2EN.con_CreateTime:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.createTime == null) return -1;
          if (a.createTime == null) return 1;
          return b.createTime.localeCompare(a.createTime);
        };
      case clsQxUsersV2EN.con_updateTime:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.updateTime == null) return -1;
          if (a.updateTime == null) return 1;
          return b.updateTime.localeCompare(a.updateTime);
        };
      case clsQxUsersV2EN.con_id:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.id - a.id;
        };
      case clsQxUsersV2EN.con_DepartmentIdInt:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.departmentIdInt - a.departmentIdInt;
        };
      case clsQxUsersV2EN.con_name:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.name.localeCompare(a.name);
        };
      case clsQxUsersV2EN.con_UserName:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsQxUsersV2EN.con_Password:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.password.localeCompare(a.password);
        };
      case clsQxUsersV2EN.con_psalt:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.psalt == null) return -1;
          if (a.psalt == null) return 1;
          return b.psalt.localeCompare(a.psalt);
        };
      case clsQxUsersV2EN.con_nickName:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.nickName == null) return -1;
          if (a.nickName == null) return 1;
          return b.nickName.localeCompare(a.nickName);
        };
      case clsQxUsersV2EN.con_headImg:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.headImg == null) return -1;
          if (a.headImg == null) return 1;
          return b.headImg.localeCompare(a.headImg);
        };
      case clsQxUsersV2EN.con_Email:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.email == null) return -1;
          if (a.email == null) return 1;
          return b.email.localeCompare(a.email);
        };
      case clsQxUsersV2EN.con_phone:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.phone.localeCompare(a.phone);
        };
      case clsQxUsersV2EN.con_remark:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.remark == null) return -1;
          if (a.remark == null) return 1;
          return b.remark.localeCompare(a.remark);
        };
      case clsQxUsersV2EN.con_status:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.status - a.status;
        };
      case clsQxUsersV2EN.con_OpenId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.openId == null) return -1;
          if (a.openId == null) return 1;
          return b.openId.localeCompare(a.openId);
        };
      case clsQxUsersV2EN.con_UpdUser:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsQxUsersV2EN.con_IsArchive:
        return (b: clsQxUsersV2EN) => {
          if (b.isArchive == true) return 1;
          else return -1;
        };
      case clsQxUsersV2EN.con_IdentityId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.identityId == null) return -1;
          if (a.identityId == null) return 1;
          return b.identityId.localeCompare(a.identityId);
        };
      case clsQxUsersV2EN.con_StuTeacherId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.stuTeacherId == null) return -1;
          if (a.stuTeacherId == null) return 1;
          return b.stuTeacherId.localeCompare(a.stuTeacherId);
        };
      case clsQxUsersV2EN.con_EffitiveBeginDate:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.effitiveBeginDate == null) return -1;
          if (a.effitiveBeginDate == null) return 1;
          return b.effitiveBeginDate.localeCompare(a.effitiveBeginDate);
        };
      case clsQxUsersV2EN.con_EffitiveEndDate:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.effitiveEndDate == null) return -1;
          if (a.effitiveEndDate == null) return 1;
          return b.effitiveEndDate.localeCompare(a.effitiveEndDate);
        };
      case clsQxUsersV2EN.con_UserId:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsQxUsersV2EN.con_EffectiveDate:
        return (a: clsQxUsersV2EN, b: clsQxUsersV2EN) => {
          if (b.effectiveDate == null) return -1;
          if (a.effectiveDate == null) return 1;
          return b.effectiveDate.localeCompare(a.effectiveDate);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxUsersV2]中不存在!(in ${qxUsersV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByidCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxUsersV2_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxUsersV2EN.con_CreateTime:
      return (obj: clsQxUsersV2EN) => {
        return obj.createTime === value;
      };
    case clsQxUsersV2EN.con_updateTime:
      return (obj: clsQxUsersV2EN) => {
        return obj.updateTime === value;
      };
    case clsQxUsersV2EN.con_id:
      return (obj: clsQxUsersV2EN) => {
        return obj.id === value;
      };
    case clsQxUsersV2EN.con_DepartmentIdInt:
      return (obj: clsQxUsersV2EN) => {
        return obj.departmentIdInt === value;
      };
    case clsQxUsersV2EN.con_name:
      return (obj: clsQxUsersV2EN) => {
        return obj.name === value;
      };
    case clsQxUsersV2EN.con_UserName:
      return (obj: clsQxUsersV2EN) => {
        return obj.userName === value;
      };
    case clsQxUsersV2EN.con_Password:
      return (obj: clsQxUsersV2EN) => {
        return obj.password === value;
      };
    case clsQxUsersV2EN.con_psalt:
      return (obj: clsQxUsersV2EN) => {
        return obj.psalt === value;
      };
    case clsQxUsersV2EN.con_nickName:
      return (obj: clsQxUsersV2EN) => {
        return obj.nickName === value;
      };
    case clsQxUsersV2EN.con_headImg:
      return (obj: clsQxUsersV2EN) => {
        return obj.headImg === value;
      };
    case clsQxUsersV2EN.con_Email:
      return (obj: clsQxUsersV2EN) => {
        return obj.email === value;
      };
    case clsQxUsersV2EN.con_phone:
      return (obj: clsQxUsersV2EN) => {
        return obj.phone === value;
      };
    case clsQxUsersV2EN.con_remark:
      return (obj: clsQxUsersV2EN) => {
        return obj.remark === value;
      };
    case clsQxUsersV2EN.con_status:
      return (obj: clsQxUsersV2EN) => {
        return obj.status === value;
      };
    case clsQxUsersV2EN.con_OpenId:
      return (obj: clsQxUsersV2EN) => {
        return obj.openId === value;
      };
    case clsQxUsersV2EN.con_UpdUser:
      return (obj: clsQxUsersV2EN) => {
        return obj.updUser === value;
      };
    case clsQxUsersV2EN.con_IsArchive:
      return (obj: clsQxUsersV2EN) => {
        return obj.isArchive === value;
      };
    case clsQxUsersV2EN.con_IdentityId:
      return (obj: clsQxUsersV2EN) => {
        return obj.identityId === value;
      };
    case clsQxUsersV2EN.con_StuTeacherId:
      return (obj: clsQxUsersV2EN) => {
        return obj.stuTeacherId === value;
      };
    case clsQxUsersV2EN.con_EffitiveBeginDate:
      return (obj: clsQxUsersV2EN) => {
        return obj.effitiveBeginDate === value;
      };
    case clsQxUsersV2EN.con_EffitiveEndDate:
      return (obj: clsQxUsersV2EN) => {
        return obj.effitiveEndDate === value;
      };
    case clsQxUsersV2EN.con_UserId:
      return (obj: clsQxUsersV2EN) => {
        return obj.userId === value;
      };
    case clsQxUsersV2EN.con_EffectiveDate:
      return (obj: clsQxUsersV2EN) => {
        return obj.effectiveDate === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxUsersV2]中不存在!(in ${qxUsersV2_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUsersV2__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxUsersV2_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQxUsersV2EN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
      const objQxUsersV2 = QxUsersV2_GetObjFromJsonObj(returnObj);
      return objQxUsersV2;
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQxUsersV2EN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
          qxUsersV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsersV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param arrid:关键字列表
 * @returns 对象列表
 **/
export async function QxUsersV2_GetObjLstByidLstAsync(
  arrid: Array<string>,
): Promise<Array<clsQxUsersV2EN>> {
  const strThisFuncName = 'GetObjLstByidLstAsync';
  const strAction = 'GetObjLstByidLst';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrid, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          qxUsersV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsersV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByidLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function QxUsersV2_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxUsersV2EN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
          qxUsersV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsersV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxUsersV2EN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
          qxUsersV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsersV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUsersV2EN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxUsersV2EN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
          qxUsersV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxUsersV2_GetObjLstByJSONObjLst(returnObjLst);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param intid:关键字
 * @returns 获取删除的结果
 **/
export async function QxUsersV2_DelRecordAsync(intid: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, intid);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param arrid:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function QxUsersV2_DelQxUsersV2sAsync(arrid: Array<string>): Promise<number> {
  const strThisFuncName = 'DelQxUsersV2sAsync';
  const strAction = 'DelQxUsersV2s';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrid, config);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param objQxUsersV2ENS:源对象
 * @returns 目标对象=>clsQxUsersV2EN:objQxUsersV2ENT
 **/
export function QxUsersV2_CopyToEx(objQxUsersV2ENS: clsQxUsersV2EN): clsQxUsersV2ENEx {
  const strThisFuncName = QxUsersV2_CopyToEx.name;
  const objQxUsersV2ENT = new clsQxUsersV2ENEx();
  try {
    ObjectAssign(objQxUsersV2ENT, objQxUsersV2ENS);
    return objQxUsersV2ENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUsersV2ENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxUsersV2_FuncMapByFldName(strFldName: string, objQxUsersV2Ex: clsQxUsersV2ENEx) {
  const strThisFuncName = QxUsersV2_FuncMapByFldName.name;
  console.log(objQxUsersV2Ex);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxUsersV2EN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsersV2_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxUsersV2_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxUsersV2_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function QxUsersV2_DelQxUsersV2sByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelQxUsersV2sByCondAsync';
  const strAction = 'DelQxUsersV2sByCond';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param objQxUsersV2EN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxUsersV2_AddNewRecordAsync(
  objQxUsersV2EN: clsQxUsersV2EN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objQxUsersV2EN);
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersV2EN, config);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function QxUsersV2_AddNewObjSave(
  objQxUsersV2EN: clsQxUsersV2EN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    QxUsersV2_CheckPropertyNew(objQxUsersV2EN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${qxUsersV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await QxUsersV2_CheckUniCond4Add(objQxUsersV2EN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await QxUsersV2_AddNewRecordAsync(objQxUsersV2EN);
    if (returnBool == true) {
      //QxUsersV2_ReFreshCache();
    } else {
      const strInfo = `添加[用户V2(QxUsersV2)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objQxUsersV2EN.id.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${qxUsersV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function QxUsersV2_CheckUniCond4Add(objQxUsersV2EN: clsQxUsersV2EN): Promise<boolean> {
  const strUniquenessCondition = QxUsersV2_GetUniCondStr(objQxUsersV2EN);
  const bolIsExistCondition = await QxUsersV2_IsExistRecordAsync(strUniquenessCondition);
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
export async function QxUsersV2_CheckUniCond4Update(
  objQxUsersV2EN: clsQxUsersV2EN,
): Promise<boolean> {
  const strUniquenessCondition = QxUsersV2_GetUniCondStr4Update(objQxUsersV2EN);
  const bolIsExistCondition = await QxUsersV2_IsExistRecordAsync(strUniquenessCondition);
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
export async function QxUsersV2_UpdateObjSave(objQxUsersV2EN: clsQxUsersV2EN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objQxUsersV2EN.sfUpdFldSetStr = objQxUsersV2EN.updFldString; //设置哪些字段被修改(脏字段)
  if (objQxUsersV2EN.id == 0 || objQxUsersV2EN.id == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    QxUsersV2_CheckProperty4Update(objQxUsersV2EN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${qxUsersV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await QxUsersV2_CheckUniCond4Update(objQxUsersV2EN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await QxUsersV2_UpdateRecordAsync(objQxUsersV2EN);
    if (returnBool == true) {
      //QxUsersV2_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${qxUsersV2_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUsersV2EN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxUsersV2_AddNewRecordWithReturnKeyAsync(
  objQxUsersV2EN: clsQxUsersV2EN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersV2EN, config);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param objQxUsersV2EN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxUsersV2_UpdateRecordAsync(
  objQxUsersV2EN: clsQxUsersV2EN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxUsersV2EN.sfUpdFldSetStr === undefined ||
    objQxUsersV2EN.sfUpdFldSetStr === null ||
    objQxUsersV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objQxUsersV2EN.id);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersV2EN, config);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param objQxUsersV2EN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxUsersV2_EditRecordExAsync(
  objQxUsersV2EN: clsQxUsersV2EN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objQxUsersV2EN.sfUpdFldSetStr === undefined ||
    objQxUsersV2EN.sfUpdFldSetStr === null ||
    objQxUsersV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objQxUsersV2EN.id);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersV2EN, config);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param objQxUsersV2EN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxUsersV2_UpdateWithConditionAsync(
  objQxUsersV2EN: clsQxUsersV2EN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxUsersV2EN.sfUpdFldSetStr === undefined ||
    objQxUsersV2EN.sfUpdFldSetStr === null ||
    objQxUsersV2EN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objQxUsersV2EN.id);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);
  objQxUsersV2EN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxUsersV2EN, config);
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
 * @param intid:关键字
 * @returns 是否存在?存在返回True
 **/
export async function QxUsersV2_IsExistAsync(intid: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intid,
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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export async function QxUsersV2_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qxUsersV2_Controller, strAction);

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
        qxUsersV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        qxUsersV2_ConstructorName,
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
export function QxUsersV2_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QxUsersV2_CheckPropertyNew(pobjQxUsersV2EN: clsQxUsersV2EN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjQxUsersV2EN.name) === true) {
    throw new Error(
      `(errid:Watl000411)字段[姓名]不能为空(In 用户V2)!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.userName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[用户名]不能为空(In 用户V2)!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.password) === true) {
    throw new Error(
      `(errid:Watl000411)字段[口令]不能为空(In 用户V2)!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.phone) === true) {
    throw new Error(
      `(errid:Watl000411)字段[电话号码]不能为空(In 用户V2)!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjQxUsersV2EN.status ||
    (pobjQxUsersV2EN.status != null && pobjQxUsersV2EN.status.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[用户状态Id]不能为空(In 用户V2)!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.userId) === true || pobjQxUsersV2EN.userId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[用户ID]不能为空(In 用户V2)!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.createTime) == false &&
    GetStrLen(pobjQxUsersV2EN.createTime) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[建立时间(createTime)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.createTime}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.updateTime) == false &&
    GetStrLen(pobjQxUsersV2EN.updateTime) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改时间(updateTime)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.updateTime}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.name) == false && GetStrLen(pobjQxUsersV2EN.name) > 30) {
    throw new Error(
      `(errid:Watl000413)字段[姓名(name)]的长度不能超过30(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.name}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.userName) == false &&
    GetStrLen(pobjQxUsersV2EN.userName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户名(userName)]的长度不能超过30(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.userName}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.password) == false &&
    GetStrLen(pobjQxUsersV2EN.password) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[口令(password)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.password}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.psalt) == false && GetStrLen(pobjQxUsersV2EN.psalt) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[密码盐值(psalt)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.psalt}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.nickName) == false &&
    GetStrLen(pobjQxUsersV2EN.nickName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[呢称(nickName)]的长度不能超过100(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.nickName}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.headImg) == false && GetStrLen(pobjQxUsersV2EN.headImg) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[头像(headImg)]的长度不能超过100(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.headImg}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.email) == false && GetStrLen(pobjQxUsersV2EN.email) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[邮箱(email)]的长度不能超过100(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.email}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.phone) == false && GetStrLen(pobjQxUsersV2EN.phone) > 15) {
    throw new Error(
      `(errid:Watl000413)字段[电话号码(phone)]的长度不能超过15(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.phone}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.remark) == false && GetStrLen(pobjQxUsersV2EN.remark) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[备注(remark)]的长度不能超过1000(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.remark}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.openId) == false && GetStrLen(pobjQxUsersV2EN.openId) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[微信openid(openId)]的长度不能超过50(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.openId}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.updUser) == false && GetStrLen(pobjQxUsersV2EN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.updUser}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.identityId) == false &&
    GetStrLen(pobjQxUsersV2EN.identityId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[身份编号(identityId)]的长度不能超过2(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.identityId}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.stuTeacherId) == false &&
    GetStrLen(pobjQxUsersV2EN.stuTeacherId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.stuTeacherId}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveBeginDate) == false &&
    GetStrLen(pobjQxUsersV2EN.effitiveBeginDate) > 14
  ) {
    throw new Error(
      `(errid:Watl000413)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.effitiveBeginDate}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveEndDate) == false &&
    GetStrLen(pobjQxUsersV2EN.effitiveEndDate) > 14
  ) {
    throw new Error(
      `(errid:Watl000413)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.effitiveEndDate}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.userId) == false && GetStrLen(pobjQxUsersV2EN.userId) > 18) {
    throw new Error(
      `(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.userId}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effectiveDate) == false &&
    GetStrLen(pobjQxUsersV2EN.effectiveDate) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[有效日期(effectiveDate)]的长度不能超过8(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.effectiveDate}(clsQxUsersV2BL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.createTime) == false &&
    undefined !== pobjQxUsersV2EN.createTime &&
    tzDataType.isString(pobjQxUsersV2EN.createTime) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[建立时间(createTime)]的值:[${pobjQxUsersV2EN.createTime}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.updateTime) == false &&
    undefined !== pobjQxUsersV2EN.updateTime &&
    tzDataType.isString(pobjQxUsersV2EN.updateTime) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改时间(updateTime)]的值:[${pobjQxUsersV2EN.updateTime}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.id &&
    undefined !== pobjQxUsersV2EN.id &&
    tzDataType.isNumber(pobjQxUsersV2EN.id) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[id(id)]的值:[${pobjQxUsersV2EN.id}], 非法,应该为数值型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.departmentIdInt &&
    undefined !== pobjQxUsersV2EN.departmentIdInt &&
    tzDataType.isNumber(pobjQxUsersV2EN.departmentIdInt) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[部门Id(departmentIdInt)]的值:[${pobjQxUsersV2EN.departmentIdInt}], 非法,应该为数值型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.name) == false &&
    undefined !== pobjQxUsersV2EN.name &&
    tzDataType.isString(pobjQxUsersV2EN.name) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[姓名(name)]的值:[${pobjQxUsersV2EN.name}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.userName) == false &&
    undefined !== pobjQxUsersV2EN.userName &&
    tzDataType.isString(pobjQxUsersV2EN.userName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户名(userName)]的值:[${pobjQxUsersV2EN.userName}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.password) == false &&
    undefined !== pobjQxUsersV2EN.password &&
    tzDataType.isString(pobjQxUsersV2EN.password) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[口令(password)]的值:[${pobjQxUsersV2EN.password}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.psalt) == false &&
    undefined !== pobjQxUsersV2EN.psalt &&
    tzDataType.isString(pobjQxUsersV2EN.psalt) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[密码盐值(psalt)]的值:[${pobjQxUsersV2EN.psalt}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.nickName) == false &&
    undefined !== pobjQxUsersV2EN.nickName &&
    tzDataType.isString(pobjQxUsersV2EN.nickName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[呢称(nickName)]的值:[${pobjQxUsersV2EN.nickName}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.headImg) == false &&
    undefined !== pobjQxUsersV2EN.headImg &&
    tzDataType.isString(pobjQxUsersV2EN.headImg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[头像(headImg)]的值:[${pobjQxUsersV2EN.headImg}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.email) == false &&
    undefined !== pobjQxUsersV2EN.email &&
    tzDataType.isString(pobjQxUsersV2EN.email) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[邮箱(email)]的值:[${pobjQxUsersV2EN.email}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.phone) == false &&
    undefined !== pobjQxUsersV2EN.phone &&
    tzDataType.isString(pobjQxUsersV2EN.phone) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[电话号码(phone)]的值:[${pobjQxUsersV2EN.phone}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.remark) == false &&
    undefined !== pobjQxUsersV2EN.remark &&
    tzDataType.isString(pobjQxUsersV2EN.remark) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备注(remark)]的值:[${pobjQxUsersV2EN.remark}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.status &&
    undefined !== pobjQxUsersV2EN.status &&
    tzDataType.isNumber(pobjQxUsersV2EN.status) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户状态Id(status)]的值:[${pobjQxUsersV2EN.status}], 非法,应该为数值型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.openId) == false &&
    undefined !== pobjQxUsersV2EN.openId &&
    tzDataType.isString(pobjQxUsersV2EN.openId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[微信openid(openId)]的值:[${pobjQxUsersV2EN.openId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.updUser) == false &&
    undefined !== pobjQxUsersV2EN.updUser &&
    tzDataType.isString(pobjQxUsersV2EN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxUsersV2EN.updUser}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.isArchive &&
    undefined !== pobjQxUsersV2EN.isArchive &&
    tzDataType.isBoolean(pobjQxUsersV2EN.isArchive) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否存档(isArchive)]的值:[${pobjQxUsersV2EN.isArchive}], 非法,应该为布尔型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.identityId) == false &&
    undefined !== pobjQxUsersV2EN.identityId &&
    tzDataType.isString(pobjQxUsersV2EN.identityId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[身份编号(identityId)]的值:[${pobjQxUsersV2EN.identityId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.stuTeacherId) == false &&
    undefined !== pobjQxUsersV2EN.stuTeacherId &&
    tzDataType.isString(pobjQxUsersV2EN.stuTeacherId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学工号(stuTeacherId)]的值:[${pobjQxUsersV2EN.stuTeacherId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveBeginDate) == false &&
    undefined !== pobjQxUsersV2EN.effitiveBeginDate &&
    tzDataType.isString(pobjQxUsersV2EN.effitiveBeginDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[有效开始日期(effitiveBeginDate)]的值:[${pobjQxUsersV2EN.effitiveBeginDate}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveEndDate) == false &&
    undefined !== pobjQxUsersV2EN.effitiveEndDate &&
    tzDataType.isString(pobjQxUsersV2EN.effitiveEndDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[有效结束日期(effitiveEndDate)]的值:[${pobjQxUsersV2EN.effitiveEndDate}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.userId) == false &&
    undefined !== pobjQxUsersV2EN.userId &&
    tzDataType.isString(pobjQxUsersV2EN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUsersV2EN.userId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effectiveDate) == false &&
    undefined !== pobjQxUsersV2EN.effectiveDate &&
    tzDataType.isString(pobjQxUsersV2EN.effectiveDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[有效日期(effectiveDate)]的值:[${pobjQxUsersV2EN.effectiveDate}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxUsersV2_CheckProperty4Update(pobjQxUsersV2EN: clsQxUsersV2EN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.createTime) == false &&
    GetStrLen(pobjQxUsersV2EN.createTime) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[建立时间(createTime)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.createTime}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.updateTime) == false &&
    GetStrLen(pobjQxUsersV2EN.updateTime) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改时间(updateTime)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.updateTime}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.name) == false && GetStrLen(pobjQxUsersV2EN.name) > 30) {
    throw new Error(
      `(errid:Watl000416)字段[姓名(name)]的长度不能超过30(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.name}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.userName) == false &&
    GetStrLen(pobjQxUsersV2EN.userName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户名(userName)]的长度不能超过30(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.userName}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.password) == false &&
    GetStrLen(pobjQxUsersV2EN.password) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[口令(password)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.password}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.psalt) == false && GetStrLen(pobjQxUsersV2EN.psalt) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[密码盐值(psalt)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.psalt}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.nickName) == false &&
    GetStrLen(pobjQxUsersV2EN.nickName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[呢称(nickName)]的长度不能超过100(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.nickName}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.headImg) == false && GetStrLen(pobjQxUsersV2EN.headImg) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[头像(headImg)]的长度不能超过100(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.headImg}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.email) == false && GetStrLen(pobjQxUsersV2EN.email) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[邮箱(email)]的长度不能超过100(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.email}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.phone) == false && GetStrLen(pobjQxUsersV2EN.phone) > 15) {
    throw new Error(
      `(errid:Watl000416)字段[电话号码(phone)]的长度不能超过15(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.phone}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.remark) == false && GetStrLen(pobjQxUsersV2EN.remark) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[备注(remark)]的长度不能超过1000(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.remark}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.openId) == false && GetStrLen(pobjQxUsersV2EN.openId) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[微信openid(openId)]的长度不能超过50(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.openId}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.updUser) == false && GetStrLen(pobjQxUsersV2EN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.updUser}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.identityId) == false &&
    GetStrLen(pobjQxUsersV2EN.identityId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[身份编号(identityId)]的长度不能超过2(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.identityId}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.stuTeacherId) == false &&
    GetStrLen(pobjQxUsersV2EN.stuTeacherId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学工号(stuTeacherId)]的长度不能超过20(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.stuTeacherId}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveBeginDate) == false &&
    GetStrLen(pobjQxUsersV2EN.effitiveBeginDate) > 14
  ) {
    throw new Error(
      `(errid:Watl000416)字段[有效开始日期(effitiveBeginDate)]的长度不能超过14(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.effitiveBeginDate}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveEndDate) == false &&
    GetStrLen(pobjQxUsersV2EN.effitiveEndDate) > 14
  ) {
    throw new Error(
      `(errid:Watl000416)字段[有效结束日期(effitiveEndDate)]的长度不能超过14(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.effitiveEndDate}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjQxUsersV2EN.userId) == false && GetStrLen(pobjQxUsersV2EN.userId) > 18) {
    throw new Error(
      `(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.userId}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effectiveDate) == false &&
    GetStrLen(pobjQxUsersV2EN.effectiveDate) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[有效日期(effectiveDate)]的长度不能超过8(In 用户V2(QxUsersV2))!值:${pobjQxUsersV2EN.effectiveDate}(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.createTime) == false &&
    undefined !== pobjQxUsersV2EN.createTime &&
    tzDataType.isString(pobjQxUsersV2EN.createTime) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[建立时间(createTime)]的值:[${pobjQxUsersV2EN.createTime}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.updateTime) == false &&
    undefined !== pobjQxUsersV2EN.updateTime &&
    tzDataType.isString(pobjQxUsersV2EN.updateTime) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改时间(updateTime)]的值:[${pobjQxUsersV2EN.updateTime}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.id &&
    undefined !== pobjQxUsersV2EN.id &&
    tzDataType.isNumber(pobjQxUsersV2EN.id) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[id(id)]的值:[${pobjQxUsersV2EN.id}], 非法,应该为数值型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.departmentIdInt &&
    undefined !== pobjQxUsersV2EN.departmentIdInt &&
    tzDataType.isNumber(pobjQxUsersV2EN.departmentIdInt) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[部门Id(departmentIdInt)]的值:[${pobjQxUsersV2EN.departmentIdInt}], 非法,应该为数值型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.name) == false &&
    undefined !== pobjQxUsersV2EN.name &&
    tzDataType.isString(pobjQxUsersV2EN.name) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[姓名(name)]的值:[${pobjQxUsersV2EN.name}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.userName) == false &&
    undefined !== pobjQxUsersV2EN.userName &&
    tzDataType.isString(pobjQxUsersV2EN.userName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户名(userName)]的值:[${pobjQxUsersV2EN.userName}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.password) == false &&
    undefined !== pobjQxUsersV2EN.password &&
    tzDataType.isString(pobjQxUsersV2EN.password) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[口令(password)]的值:[${pobjQxUsersV2EN.password}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.psalt) == false &&
    undefined !== pobjQxUsersV2EN.psalt &&
    tzDataType.isString(pobjQxUsersV2EN.psalt) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[密码盐值(psalt)]的值:[${pobjQxUsersV2EN.psalt}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.nickName) == false &&
    undefined !== pobjQxUsersV2EN.nickName &&
    tzDataType.isString(pobjQxUsersV2EN.nickName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[呢称(nickName)]的值:[${pobjQxUsersV2EN.nickName}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.headImg) == false &&
    undefined !== pobjQxUsersV2EN.headImg &&
    tzDataType.isString(pobjQxUsersV2EN.headImg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[头像(headImg)]的值:[${pobjQxUsersV2EN.headImg}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.email) == false &&
    undefined !== pobjQxUsersV2EN.email &&
    tzDataType.isString(pobjQxUsersV2EN.email) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[邮箱(email)]的值:[${pobjQxUsersV2EN.email}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.phone) == false &&
    undefined !== pobjQxUsersV2EN.phone &&
    tzDataType.isString(pobjQxUsersV2EN.phone) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[电话号码(phone)]的值:[${pobjQxUsersV2EN.phone}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.remark) == false &&
    undefined !== pobjQxUsersV2EN.remark &&
    tzDataType.isString(pobjQxUsersV2EN.remark) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备注(remark)]的值:[${pobjQxUsersV2EN.remark}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.status &&
    undefined !== pobjQxUsersV2EN.status &&
    tzDataType.isNumber(pobjQxUsersV2EN.status) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户状态Id(status)]的值:[${pobjQxUsersV2EN.status}], 非法,应该为数值型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.openId) == false &&
    undefined !== pobjQxUsersV2EN.openId &&
    tzDataType.isString(pobjQxUsersV2EN.openId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[微信openid(openId)]的值:[${pobjQxUsersV2EN.openId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.updUser) == false &&
    undefined !== pobjQxUsersV2EN.updUser &&
    tzDataType.isString(pobjQxUsersV2EN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxUsersV2EN.updUser}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjQxUsersV2EN.isArchive &&
    undefined !== pobjQxUsersV2EN.isArchive &&
    tzDataType.isBoolean(pobjQxUsersV2EN.isArchive) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否存档(isArchive)]的值:[${pobjQxUsersV2EN.isArchive}], 非法,应该为布尔型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.identityId) == false &&
    undefined !== pobjQxUsersV2EN.identityId &&
    tzDataType.isString(pobjQxUsersV2EN.identityId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[身份编号(identityId)]的值:[${pobjQxUsersV2EN.identityId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.stuTeacherId) == false &&
    undefined !== pobjQxUsersV2EN.stuTeacherId &&
    tzDataType.isString(pobjQxUsersV2EN.stuTeacherId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学工号(stuTeacherId)]的值:[${pobjQxUsersV2EN.stuTeacherId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveBeginDate) == false &&
    undefined !== pobjQxUsersV2EN.effitiveBeginDate &&
    tzDataType.isString(pobjQxUsersV2EN.effitiveBeginDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[有效开始日期(effitiveBeginDate)]的值:[${pobjQxUsersV2EN.effitiveBeginDate}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effitiveEndDate) == false &&
    undefined !== pobjQxUsersV2EN.effitiveEndDate &&
    tzDataType.isString(pobjQxUsersV2EN.effitiveEndDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[有效结束日期(effitiveEndDate)]的值:[${pobjQxUsersV2EN.effitiveEndDate}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.userId) == false &&
    undefined !== pobjQxUsersV2EN.userId &&
    tzDataType.isString(pobjQxUsersV2EN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUsersV2EN.userId}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjQxUsersV2EN.effectiveDate) == false &&
    undefined !== pobjQxUsersV2EN.effectiveDate &&
    tzDataType.isString(pobjQxUsersV2EN.effectiveDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[有效日期(effectiveDate)]的值:[${pobjQxUsersV2EN.effectiveDate}], 非法,应该为字符型(In 用户V2(QxUsersV2))!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjQxUsersV2EN.id ||
    (pobjQxUsersV2EN.id != null && pobjQxUsersV2EN.id.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[id]不能为空(In 用户V2)!(clsQxUsersV2BL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxUsersV2_GetJSONStrByObj(pobjQxUsersV2EN: clsQxUsersV2EN): string {
  pobjQxUsersV2EN.sfUpdFldSetStr = pobjQxUsersV2EN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxUsersV2EN);
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
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QxUsersV2_GetObjLstByJSONStr(strJSON: string): Array<clsQxUsersV2EN> {
  let arrQxUsersV2ObjLst = new Array<clsQxUsersV2EN>();
  if (strJSON === '') {
    return arrQxUsersV2ObjLst;
  }
  try {
    arrQxUsersV2ObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxUsersV2ObjLst;
  }
  return arrQxUsersV2ObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUsersV2ObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxUsersV2_GetObjLstByJSONObjLst(
  arrQxUsersV2ObjLstS: Array<clsQxUsersV2EN>,
): Array<clsQxUsersV2EN> {
  const arrQxUsersV2ObjLst = new Array<clsQxUsersV2EN>();
  for (const objInFor of arrQxUsersV2ObjLstS) {
    const obj1 = QxUsersV2_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxUsersV2ObjLst.push(obj1);
  }
  return arrQxUsersV2ObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-31
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxUsersV2_GetObjByJSONStr(strJSON: string): clsQxUsersV2EN {
  let pobjQxUsersV2EN = new clsQxUsersV2EN();
  if (strJSON === '') {
    return pobjQxUsersV2EN;
  }
  try {
    pobjQxUsersV2EN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxUsersV2EN;
  }
  return pobjQxUsersV2EN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxUsersV2_GetCombineCondition(objQxUsersV2Cond: clsQxUsersV2EN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_CreateTime,
    ) == true
  ) {
    const strComparisonOpCreateTime: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_CreateTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_CreateTime,
      objQxUsersV2Cond.createTime,
      strComparisonOpCreateTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_updateTime,
    ) == true
  ) {
    const strComparisonOpupdateTime: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_updateTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_updateTime,
      objQxUsersV2Cond.updateTime,
      strComparisonOpupdateTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_id,
    ) == true
  ) {
    const strComparisonOpid: string = objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_id];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxUsersV2EN.con_id,
      objQxUsersV2Cond.id,
      strComparisonOpid,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_DepartmentIdInt,
    ) == true
  ) {
    const strComparisonOpDepartmentIdInt: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_DepartmentIdInt];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxUsersV2EN.con_DepartmentIdInt,
      objQxUsersV2Cond.departmentIdInt,
      strComparisonOpDepartmentIdInt,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_name,
    ) == true
  ) {
    const strComparisonOpname: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_name];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_name,
      objQxUsersV2Cond.name,
      strComparisonOpname,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_UserName,
      objQxUsersV2Cond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_Password,
    ) == true
  ) {
    const strComparisonOpPassword: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_Password];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_Password,
      objQxUsersV2Cond.password,
      strComparisonOpPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_psalt,
    ) == true
  ) {
    const strComparisonOppsalt: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_psalt];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_psalt,
      objQxUsersV2Cond.psalt,
      strComparisonOppsalt,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_nickName,
    ) == true
  ) {
    const strComparisonOpnickName: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_nickName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_nickName,
      objQxUsersV2Cond.nickName,
      strComparisonOpnickName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_headImg,
    ) == true
  ) {
    const strComparisonOpheadImg: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_headImg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_headImg,
      objQxUsersV2Cond.headImg,
      strComparisonOpheadImg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_Email,
    ) == true
  ) {
    const strComparisonOpEmail: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_Email];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_Email,
      objQxUsersV2Cond.email,
      strComparisonOpEmail,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_phone,
    ) == true
  ) {
    const strComparisonOpphone: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_phone];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_phone,
      objQxUsersV2Cond.phone,
      strComparisonOpphone,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_remark,
    ) == true
  ) {
    const strComparisonOpremark: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_remark];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_remark,
      objQxUsersV2Cond.remark,
      strComparisonOpremark,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_status,
    ) == true
  ) {
    const strComparisonOpstatus: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_status];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxUsersV2EN.con_status,
      objQxUsersV2Cond.status,
      strComparisonOpstatus,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_OpenId,
    ) == true
  ) {
    const strComparisonOpOpenId: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_OpenId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_OpenId,
      objQxUsersV2Cond.openId,
      strComparisonOpOpenId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_UpdUser,
      objQxUsersV2Cond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_IsArchive,
    ) == true
  ) {
    if (objQxUsersV2Cond.isArchive == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxUsersV2EN.con_IsArchive);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxUsersV2EN.con_IsArchive);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_IdentityId,
    ) == true
  ) {
    const strComparisonOpIdentityId: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_IdentityId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_IdentityId,
      objQxUsersV2Cond.identityId,
      strComparisonOpIdentityId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_StuTeacherId,
    ) == true
  ) {
    const strComparisonOpStuTeacherId: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_StuTeacherId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_StuTeacherId,
      objQxUsersV2Cond.stuTeacherId,
      strComparisonOpStuTeacherId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_EffitiveBeginDate,
    ) == true
  ) {
    const strComparisonOpEffitiveBeginDate: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_EffitiveBeginDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_EffitiveBeginDate,
      objQxUsersV2Cond.effitiveBeginDate,
      strComparisonOpEffitiveBeginDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_EffitiveEndDate,
    ) == true
  ) {
    const strComparisonOpEffitiveEndDate: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_EffitiveEndDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_EffitiveEndDate,
      objQxUsersV2Cond.effitiveEndDate,
      strComparisonOpEffitiveEndDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_UserId,
      objQxUsersV2Cond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxUsersV2Cond.dicFldComparisonOp,
      clsQxUsersV2EN.con_EffectiveDate,
    ) == true
  ) {
    const strComparisonOpEffectiveDate: string =
      objQxUsersV2Cond.dicFldComparisonOp[clsQxUsersV2EN.con_EffectiveDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxUsersV2EN.con_EffectiveDate,
      objQxUsersV2Cond.effectiveDate,
      strComparisonOpEffectiveDate,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxUsersV2(用户V2),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strname: 姓名(要求唯一的字段)
 * @param strphone: 电话号码(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxUsersV2_GetUniCondStr(objQxUsersV2EN: clsQxUsersV2EN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and name = '{0}'", objQxUsersV2EN.name);
  strWhereCond += Format(" and phone = '{0}'", objQxUsersV2EN.phone);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxUsersV2(用户V2),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strname: 姓名(要求唯一的字段)
 * @param strphone: 电话号码(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxUsersV2_GetUniCondStr4Update(objQxUsersV2EN: clsQxUsersV2EN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and id <> '{0}'", objQxUsersV2EN.id);
  strWhereCond += Format(" and name = '{0}'", objQxUsersV2EN.name);
  strWhereCond += Format(" and phone = '{0}'", objQxUsersV2EN.phone);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUsersV2ENS:源对象
 * @param objQxUsersV2ENT:目标对象
 */
export function QxUsersV2_GetObjFromJsonObj(objQxUsersV2ENS: clsQxUsersV2EN): clsQxUsersV2EN {
  const objQxUsersV2ENT: clsQxUsersV2EN = new clsQxUsersV2EN();
  ObjectAssign(objQxUsersV2ENT, objQxUsersV2ENS);
  return objQxUsersV2ENT;
}
