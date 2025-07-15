/**
 * 类名:clsFileResourceWApi
 * 表名:FileResource(00050539)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:49
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 文件资源(FileResource)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsFileResourceEN } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const fileResource_Controller = 'FileResourceApi';
export const fileResource_ConstructorName = 'fileResource';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngFileResourceID:关键字
 * @returns 对象
 **/
export async function FileResource_GetObjByFileResourceIDAsync(
  lngFileResourceID: number,
): Promise<clsFileResourceEN | null> {
  const strThisFuncName = 'GetObjByFileResourceIDAsync';

  if (lngFileResourceID == 0) {
    const strMsg = Format(
      '参数:[lngFileResourceID]不能为空!(In clsFileResourceWApi.GetObjByFileResourceIDAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFileResourceID';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngFileResourceID,
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
      const objFileResource = FileResource_GetObjFromJsonObj(returnObj);
      return objFileResource;
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByFileResourceIDCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[GetObjByFileResourceIDlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache
//该表没有使用Cache,不需要生成[GetNameByFileResourceIDCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
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
export function FileResource_SortFunDefa(a: clsFileResourceEN, b: clsFileResourceEN): number {
  return a.fileResourceID - b.fileResourceID;
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
export function FileResource_SortFunDefa2Fld(a: clsFileResourceEN, b: clsFileResourceEN): number {
  if (a.fileDirName == b.fileDirName) return a.fileName.localeCompare(b.fileName);
  else return a.fileDirName.localeCompare(b.fileDirName);
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
export function FileResource_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFileResourceEN.con_FileResourceID:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return a.fileResourceID - b.fileResourceID;
        };
      case clsFileResourceEN.con_FileDirName:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return a.fileDirName.localeCompare(b.fileDirName);
        };
      case clsFileResourceEN.con_FileName:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return a.fileName.localeCompare(b.fileName);
        };
      case clsFileResourceEN.con_Extension:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.extension == null) return -1;
          if (b.extension == null) return 1;
          return a.extension.localeCompare(b.extension);
        };
      case clsFileResourceEN.con_TabId:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.tabId == null) return -1;
          if (b.tabId == null) return 1;
          return a.tabId.localeCompare(b.tabId);
        };
      case clsFileResourceEN.con_IsBelongsCurrCMPrj:
        return (a: clsFileResourceEN) => {
          if (a.isBelongsCurrCMPrj == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_IsGeneCode:
        return (a: clsFileResourceEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_IsCanDel:
        return (a: clsFileResourceEN) => {
          if (a.isCanDel == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_FileLength:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return a.fileLength - b.fileLength;
        };
      case clsFileResourceEN.con_FileType:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.fileType == null) return -1;
          if (b.fileType == null) return 1;
          return a.fileType.localeCompare(b.fileType);
        };
      case clsFileResourceEN.con_CreationTime:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.creationTime == null) return -1;
          if (b.creationTime == null) return 1;
          return a.creationTime.localeCompare(b.creationTime);
        };
      case clsFileResourceEN.con_LastWriteTime:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.lastWriteTime == null) return -1;
          if (b.lastWriteTime == null) return 1;
          return a.lastWriteTime.localeCompare(b.lastWriteTime);
        };
      case clsFileResourceEN.con_CheckDateTime:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.checkDateTime == null) return -1;
          if (b.checkDateTime == null) return 1;
          return a.checkDateTime.localeCompare(b.checkDateTime);
        };
      case clsFileResourceEN.con_InUse:
        return (a: clsFileResourceEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_IsExistFile:
        return (a: clsFileResourceEN) => {
          if (a.isExistFile == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_PrjId:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFileResourceEN.con_CmPrjId:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsFileResourceEN.con_IpAddress:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.ipAddress == null) return -1;
          if (b.ipAddress == null) return 1;
          return a.ipAddress.localeCompare(b.ipAddress);
        };
      case clsFileResourceEN.con_IdFtpResource:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.idFtpResource == null) return -1;
          if (b.idFtpResource == null) return 1;
          return a.idFtpResource.localeCompare(b.idFtpResource);
        };
      case clsFileResourceEN.con_UpdDate:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFileResourceEN.con_UpdUser:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFileResourceEN.con_Memo:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FileResource]中不存在!(in ${fileResource_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFileResourceEN.con_FileResourceID:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return b.fileResourceID - a.fileResourceID;
        };
      case clsFileResourceEN.con_FileDirName:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return b.fileDirName.localeCompare(a.fileDirName);
        };
      case clsFileResourceEN.con_FileName:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return b.fileName.localeCompare(a.fileName);
        };
      case clsFileResourceEN.con_Extension:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.extension == null) return -1;
          if (a.extension == null) return 1;
          return b.extension.localeCompare(a.extension);
        };
      case clsFileResourceEN.con_TabId:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.tabId == null) return -1;
          if (a.tabId == null) return 1;
          return b.tabId.localeCompare(a.tabId);
        };
      case clsFileResourceEN.con_IsBelongsCurrCMPrj:
        return (b: clsFileResourceEN) => {
          if (b.isBelongsCurrCMPrj == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_IsGeneCode:
        return (b: clsFileResourceEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_IsCanDel:
        return (b: clsFileResourceEN) => {
          if (b.isCanDel == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_FileLength:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return b.fileLength - a.fileLength;
        };
      case clsFileResourceEN.con_FileType:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.fileType == null) return -1;
          if (a.fileType == null) return 1;
          return b.fileType.localeCompare(a.fileType);
        };
      case clsFileResourceEN.con_CreationTime:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.creationTime == null) return -1;
          if (a.creationTime == null) return 1;
          return b.creationTime.localeCompare(a.creationTime);
        };
      case clsFileResourceEN.con_LastWriteTime:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.lastWriteTime == null) return -1;
          if (a.lastWriteTime == null) return 1;
          return b.lastWriteTime.localeCompare(a.lastWriteTime);
        };
      case clsFileResourceEN.con_CheckDateTime:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.checkDateTime == null) return -1;
          if (a.checkDateTime == null) return 1;
          return b.checkDateTime.localeCompare(a.checkDateTime);
        };
      case clsFileResourceEN.con_InUse:
        return (b: clsFileResourceEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_IsExistFile:
        return (b: clsFileResourceEN) => {
          if (b.isExistFile == true) return 1;
          else return -1;
        };
      case clsFileResourceEN.con_PrjId:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFileResourceEN.con_CmPrjId:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsFileResourceEN.con_IpAddress:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.ipAddress == null) return -1;
          if (a.ipAddress == null) return 1;
          return b.ipAddress.localeCompare(a.ipAddress);
        };
      case clsFileResourceEN.con_IdFtpResource:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.idFtpResource == null) return -1;
          if (a.idFtpResource == null) return 1;
          return b.idFtpResource.localeCompare(a.idFtpResource);
        };
      case clsFileResourceEN.con_UpdDate:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFileResourceEN.con_UpdUser:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFileResourceEN.con_Memo:
        return (a: clsFileResourceEN, b: clsFileResourceEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FileResource]中不存在!(in ${fileResource_ConstructorName}.${strThisFuncName})`;
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
export async function FileResource_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFileResourceEN.con_FileResourceID:
      return (obj: clsFileResourceEN) => {
        return obj.fileResourceID === value;
      };
    case clsFileResourceEN.con_FileDirName:
      return (obj: clsFileResourceEN) => {
        return obj.fileDirName === value;
      };
    case clsFileResourceEN.con_FileName:
      return (obj: clsFileResourceEN) => {
        return obj.fileName === value;
      };
    case clsFileResourceEN.con_Extension:
      return (obj: clsFileResourceEN) => {
        return obj.extension === value;
      };
    case clsFileResourceEN.con_TabId:
      return (obj: clsFileResourceEN) => {
        return obj.tabId === value;
      };
    case clsFileResourceEN.con_IsBelongsCurrCMPrj:
      return (obj: clsFileResourceEN) => {
        return obj.isBelongsCurrCMPrj === value;
      };
    case clsFileResourceEN.con_IsGeneCode:
      return (obj: clsFileResourceEN) => {
        return obj.isGeneCode === value;
      };
    case clsFileResourceEN.con_IsCanDel:
      return (obj: clsFileResourceEN) => {
        return obj.isCanDel === value;
      };
    case clsFileResourceEN.con_FileLength:
      return (obj: clsFileResourceEN) => {
        return obj.fileLength === value;
      };
    case clsFileResourceEN.con_FileType:
      return (obj: clsFileResourceEN) => {
        return obj.fileType === value;
      };
    case clsFileResourceEN.con_CreationTime:
      return (obj: clsFileResourceEN) => {
        return obj.creationTime === value;
      };
    case clsFileResourceEN.con_LastWriteTime:
      return (obj: clsFileResourceEN) => {
        return obj.lastWriteTime === value;
      };
    case clsFileResourceEN.con_CheckDateTime:
      return (obj: clsFileResourceEN) => {
        return obj.checkDateTime === value;
      };
    case clsFileResourceEN.con_InUse:
      return (obj: clsFileResourceEN) => {
        return obj.inUse === value;
      };
    case clsFileResourceEN.con_IsExistFile:
      return (obj: clsFileResourceEN) => {
        return obj.isExistFile === value;
      };
    case clsFileResourceEN.con_PrjId:
      return (obj: clsFileResourceEN) => {
        return obj.prjId === value;
      };
    case clsFileResourceEN.con_CmPrjId:
      return (obj: clsFileResourceEN) => {
        return obj.cmPrjId === value;
      };
    case clsFileResourceEN.con_IpAddress:
      return (obj: clsFileResourceEN) => {
        return obj.ipAddress === value;
      };
    case clsFileResourceEN.con_IdFtpResource:
      return (obj: clsFileResourceEN) => {
        return obj.idFtpResource === value;
      };
    case clsFileResourceEN.con_UpdDate:
      return (obj: clsFileResourceEN) => {
        return obj.updDate === value;
      };
    case clsFileResourceEN.con_UpdUser:
      return (obj: clsFileResourceEN) => {
        return obj.updUser === value;
      };
    case clsFileResourceEN.con_Memo:
      return (obj: clsFileResourceEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FileResource]中不存在!(in ${fileResource_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[FileResource__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FileResource_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFileResourceEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
      const objFileResource = FileResource_GetObjFromJsonObj(returnObj);
      return objFileResource;
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFileResourceEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
          fileResource_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResource_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param arrFileResourceID:关键字列表
 * @returns 对象列表
 **/
export async function FileResource_GetObjLstByFileResourceIDLstAsync(
  arrFileResourceID: Array<string>,
): Promise<Array<clsFileResourceEN>> {
  const strThisFuncName = 'GetObjLstByFileResourceIDLstAsync';
  const strAction = 'GetObjLstByFileResourceIDLst';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFileResourceID, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          fileResource_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResource_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByFileResourceIDLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function FileResource_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFileResourceEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
          fileResource_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResource_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFileResourceEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
          fileResource_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResource_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFileResourceEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFileResourceEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
          fileResource_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FileResource_GetObjLstByJSONObjLst(returnObjLst);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param lngFileResourceID:关键字
 * @returns 获取删除的结果
 **/
export async function FileResource_DelRecordAsync(lngFileResourceID: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(fileResource_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngFileResourceID);

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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param arrFileResourceID:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FileResource_DelFileResourcesAsync(
  arrFileResourceID: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFileResourcesAsync';
  const strAction = 'DelFileResources';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFileResourceID, config);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_DelFileResourcesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFileResourcesByCondAsync';
  const strAction = 'DelFileResourcesByCond';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param objFileResourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FileResource_AddNewRecordAsync(
  objFileResourceEN: clsFileResourceEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFileResourceEN);
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResourceEN, config);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param objFileResourceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FileResource_AddNewRecordWithReturnKeyAsync(
  objFileResourceEN: clsFileResourceEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResourceEN, config);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param objFileResourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FileResource_UpdateRecordAsync(
  objFileResourceEN: clsFileResourceEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFileResourceEN.sfUpdFldSetStr === undefined ||
    objFileResourceEN.sfUpdFldSetStr === null ||
    objFileResourceEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFileResourceEN.fileResourceID,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResourceEN, config);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param objFileResourceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FileResource_UpdateWithConditionAsync(
  objFileResourceEN: clsFileResourceEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFileResourceEN.sfUpdFldSetStr === undefined ||
    objFileResourceEN.sfUpdFldSetStr === null ||
    objFileResourceEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFileResourceEN.fileResourceID,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);
  objFileResourceEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFileResourceEN, config);
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
 * @param lngFileResourceID:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FileResource_IsExistAsync(lngFileResourceID: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngFileResourceID,
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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export async function FileResource_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fileResource_Controller, strAction);

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
        fileResource_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fileResource_ConstructorName,
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
export function FileResource_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FileResource_CheckPropertyNew(pobjFileResourceEN: clsFileResourceEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFileResourceEN.fileDirName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件目录名]不能为空(In 文件资源)!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjFileResourceEN.fileName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件名]不能为空(In 文件资源)!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.prjId) === true ||
    pobjFileResourceEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 文件资源)!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.cmPrjId) === true ||
    pobjFileResourceEN.cmPrjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[CM工程Id]不能为空(In 文件资源)!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileDirName) == false &&
    GetStrLen(pobjFileResourceEN.fileDirName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文件目录名(fileDirName)]的长度不能超过200(In 文件资源(FileResource))!值:$(pobjFileResourceEN.fileDirName)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileName) == false &&
    GetStrLen(pobjFileResourceEN.fileName) > 150
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文件名(fileName)]的长度不能超过150(In 文件资源(FileResource))!值:$(pobjFileResourceEN.fileName)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.extension) == false &&
    GetStrLen(pobjFileResourceEN.extension) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[扩展名(extension)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.extension)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjFileResourceEN.tabId) == false && GetStrLen(pobjFileResourceEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 文件资源(FileResource))!值:$(pobjFileResourceEN.tabId)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileType) == false &&
    GetStrLen(pobjFileResourceEN.fileType) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文件类型(fileType)]的长度不能超过30(In 文件资源(FileResource))!值:$(pobjFileResourceEN.fileType)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.creationTime) == false &&
    GetStrLen(pobjFileResourceEN.creationTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立时间(creationTime)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.creationTime)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.lastWriteTime) == false &&
    GetStrLen(pobjFileResourceEN.lastWriteTime) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(lastWriteTime)]的长度不能超过30(In 文件资源(FileResource))!值:$(pobjFileResourceEN.lastWriteTime)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.checkDateTime) == false &&
    GetStrLen(pobjFileResourceEN.checkDateTime) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[CheckDateTime(checkDateTime)]的长度不能超过30(In 文件资源(FileResource))!值:$(pobjFileResourceEN.checkDateTime)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjFileResourceEN.prjId) == false && GetStrLen(pobjFileResourceEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 文件资源(FileResource))!值:$(pobjFileResourceEN.prjId)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.cmPrjId) == false &&
    GetStrLen(pobjFileResourceEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 文件资源(FileResource))!值:$(pobjFileResourceEN.cmPrjId)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.ipAddress) == false &&
    GetStrLen(pobjFileResourceEN.ipAddress) > 25
  ) {
    throw new Error(
      '(errid:Watl000413)字段[服务器(ipAddress)]的长度不能超过25(In 文件资源(FileResource))!值:$(pobjFileResourceEN.ipAddress)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.idFtpResource) == false &&
    GetStrLen(pobjFileResourceEN.idFtpResource) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[FTP资源流水号(idFtpResource)]的长度不能超过8(In 文件资源(FileResource))!值:$(pobjFileResourceEN.idFtpResource)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updDate) == false &&
    GetStrLen(pobjFileResourceEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.updDate)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updUser) == false &&
    GetStrLen(pobjFileResourceEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.updUser)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.memo) == false &&
    GetStrLen(pobjFileResourceEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 文件资源(FileResource))!值:$(pobjFileResourceEN.memo)(clsFileResourceBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFileResourceEN.fileResourceID &&
    undefined !== pobjFileResourceEN.fileResourceID &&
    tzDataType.isNumber(pobjFileResourceEN.fileResourceID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[FileResourceID(fileResourceID)]的值:[$(pobjFileResourceEN.fileResourceID)], 非法,应该为数值型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileDirName) == false &&
    undefined !== pobjFileResourceEN.fileDirName &&
    tzDataType.isString(pobjFileResourceEN.fileDirName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件目录名(fileDirName)]的值:[$(pobjFileResourceEN.fileDirName)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileName) == false &&
    undefined !== pobjFileResourceEN.fileName &&
    tzDataType.isString(pobjFileResourceEN.fileName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件名(fileName)]的值:[$(pobjFileResourceEN.fileName)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.extension) == false &&
    undefined !== pobjFileResourceEN.extension &&
    tzDataType.isString(pobjFileResourceEN.extension) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[扩展名(extension)]的值:[$(pobjFileResourceEN.extension)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.tabId) == false &&
    undefined !== pobjFileResourceEN.tabId &&
    tzDataType.isString(pobjFileResourceEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjFileResourceEN.tabId)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFileResourceEN.isBelongsCurrCMPrj &&
    undefined !== pobjFileResourceEN.isBelongsCurrCMPrj &&
    tzDataType.isBoolean(pobjFileResourceEN.isBelongsCurrCMPrj) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否属于当前项目(isBelongsCurrCMPrj)]的值:[$(pobjFileResourceEN.isBelongsCurrCMPrj)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFileResourceEN.isGeneCode &&
    undefined !== pobjFileResourceEN.isGeneCode &&
    tzDataType.isBoolean(pobjFileResourceEN.isGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否生成代码(isGeneCode)]的值:[$(pobjFileResourceEN.isGeneCode)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFileResourceEN.isCanDel &&
    undefined !== pobjFileResourceEN.isCanDel &&
    tzDataType.isBoolean(pobjFileResourceEN.isCanDel) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否可删除(isCanDel)]的值:[$(pobjFileResourceEN.isCanDel)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFileResourceEN.fileLength &&
    undefined !== pobjFileResourceEN.fileLength &&
    tzDataType.isNumber(pobjFileResourceEN.fileLength) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件长度(fileLength)]的值:[$(pobjFileResourceEN.fileLength)], 非法,应该为数值型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileType) == false &&
    undefined !== pobjFileResourceEN.fileType &&
    tzDataType.isString(pobjFileResourceEN.fileType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件类型(fileType)]的值:[$(pobjFileResourceEN.fileType)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.creationTime) == false &&
    undefined !== pobjFileResourceEN.creationTime &&
    tzDataType.isString(pobjFileResourceEN.creationTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立时间(creationTime)]的值:[$(pobjFileResourceEN.creationTime)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.lastWriteTime) == false &&
    undefined !== pobjFileResourceEN.lastWriteTime &&
    tzDataType.isString(pobjFileResourceEN.lastWriteTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(lastWriteTime)]的值:[$(pobjFileResourceEN.lastWriteTime)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.checkDateTime) == false &&
    undefined !== pobjFileResourceEN.checkDateTime &&
    tzDataType.isString(pobjFileResourceEN.checkDateTime) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CheckDateTime(checkDateTime)]的值:[$(pobjFileResourceEN.checkDateTime)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFileResourceEN.inUse &&
    undefined !== pobjFileResourceEN.inUse &&
    tzDataType.isBoolean(pobjFileResourceEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjFileResourceEN.inUse)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFileResourceEN.isExistFile &&
    undefined !== pobjFileResourceEN.isExistFile &&
    tzDataType.isBoolean(pobjFileResourceEN.isExistFile) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否存在文件(isExistFile)]的值:[$(pobjFileResourceEN.isExistFile)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.prjId) == false &&
    undefined !== pobjFileResourceEN.prjId &&
    tzDataType.isString(pobjFileResourceEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjFileResourceEN.prjId)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.cmPrjId) == false &&
    undefined !== pobjFileResourceEN.cmPrjId &&
    tzDataType.isString(pobjFileResourceEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[$(pobjFileResourceEN.cmPrjId)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.ipAddress) == false &&
    undefined !== pobjFileResourceEN.ipAddress &&
    tzDataType.isString(pobjFileResourceEN.ipAddress) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[服务器(ipAddress)]的值:[$(pobjFileResourceEN.ipAddress)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.idFtpResource) == false &&
    undefined !== pobjFileResourceEN.idFtpResource &&
    tzDataType.isString(pobjFileResourceEN.idFtpResource) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[FTP资源流水号(idFtpResource)]的值:[$(pobjFileResourceEN.idFtpResource)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updDate) == false &&
    undefined !== pobjFileResourceEN.updDate &&
    tzDataType.isString(pobjFileResourceEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFileResourceEN.updDate)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updUser) == false &&
    undefined !== pobjFileResourceEN.updUser &&
    tzDataType.isString(pobjFileResourceEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjFileResourceEN.updUser)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.memo) == false &&
    undefined !== pobjFileResourceEN.memo &&
    tzDataType.isString(pobjFileResourceEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjFileResourceEN.memo)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FileResource_CheckProperty4Update(pobjFileResourceEN: clsFileResourceEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileDirName) == false &&
    GetStrLen(pobjFileResourceEN.fileDirName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文件目录名(fileDirName)]的长度不能超过200(In 文件资源(FileResource))!值:$(pobjFileResourceEN.fileDirName)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileName) == false &&
    GetStrLen(pobjFileResourceEN.fileName) > 150
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文件名(fileName)]的长度不能超过150(In 文件资源(FileResource))!值:$(pobjFileResourceEN.fileName)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.extension) == false &&
    GetStrLen(pobjFileResourceEN.extension) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[扩展名(extension)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.extension)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjFileResourceEN.tabId) == false && GetStrLen(pobjFileResourceEN.tabId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 文件资源(FileResource))!值:$(pobjFileResourceEN.tabId)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileType) == false &&
    GetStrLen(pobjFileResourceEN.fileType) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文件类型(fileType)]的长度不能超过30(In 文件资源(FileResource))!值:$(pobjFileResourceEN.fileType)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.creationTime) == false &&
    GetStrLen(pobjFileResourceEN.creationTime) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立时间(creationTime)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.creationTime)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.lastWriteTime) == false &&
    GetStrLen(pobjFileResourceEN.lastWriteTime) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(lastWriteTime)]的长度不能超过30(In 文件资源(FileResource))!值:$(pobjFileResourceEN.lastWriteTime)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.checkDateTime) == false &&
    GetStrLen(pobjFileResourceEN.checkDateTime) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[CheckDateTime(checkDateTime)]的长度不能超过30(In 文件资源(FileResource))!值:$(pobjFileResourceEN.checkDateTime)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjFileResourceEN.prjId) == false && GetStrLen(pobjFileResourceEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 文件资源(FileResource))!值:$(pobjFileResourceEN.prjId)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.cmPrjId) == false &&
    GetStrLen(pobjFileResourceEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 文件资源(FileResource))!值:$(pobjFileResourceEN.cmPrjId)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.ipAddress) == false &&
    GetStrLen(pobjFileResourceEN.ipAddress) > 25
  ) {
    throw new Error(
      '(errid:Watl000416)字段[服务器(ipAddress)]的长度不能超过25(In 文件资源(FileResource))!值:$(pobjFileResourceEN.ipAddress)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.idFtpResource) == false &&
    GetStrLen(pobjFileResourceEN.idFtpResource) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[FTP资源流水号(idFtpResource)]的长度不能超过8(In 文件资源(FileResource))!值:$(pobjFileResourceEN.idFtpResource)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updDate) == false &&
    GetStrLen(pobjFileResourceEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.updDate)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updUser) == false &&
    GetStrLen(pobjFileResourceEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 文件资源(FileResource))!值:$(pobjFileResourceEN.updUser)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.memo) == false &&
    GetStrLen(pobjFileResourceEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 文件资源(FileResource))!值:$(pobjFileResourceEN.memo)(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFileResourceEN.fileResourceID &&
    undefined !== pobjFileResourceEN.fileResourceID &&
    tzDataType.isNumber(pobjFileResourceEN.fileResourceID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[FileResourceID(fileResourceID)]的值:[$(pobjFileResourceEN.fileResourceID)], 非法,应该为数值型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileDirName) == false &&
    undefined !== pobjFileResourceEN.fileDirName &&
    tzDataType.isString(pobjFileResourceEN.fileDirName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件目录名(fileDirName)]的值:[$(pobjFileResourceEN.fileDirName)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileName) == false &&
    undefined !== pobjFileResourceEN.fileName &&
    tzDataType.isString(pobjFileResourceEN.fileName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件名(fileName)]的值:[$(pobjFileResourceEN.fileName)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.extension) == false &&
    undefined !== pobjFileResourceEN.extension &&
    tzDataType.isString(pobjFileResourceEN.extension) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[扩展名(extension)]的值:[$(pobjFileResourceEN.extension)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.tabId) == false &&
    undefined !== pobjFileResourceEN.tabId &&
    tzDataType.isString(pobjFileResourceEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjFileResourceEN.tabId)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFileResourceEN.isBelongsCurrCMPrj &&
    undefined !== pobjFileResourceEN.isBelongsCurrCMPrj &&
    tzDataType.isBoolean(pobjFileResourceEN.isBelongsCurrCMPrj) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否属于当前项目(isBelongsCurrCMPrj)]的值:[$(pobjFileResourceEN.isBelongsCurrCMPrj)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFileResourceEN.isGeneCode &&
    undefined !== pobjFileResourceEN.isGeneCode &&
    tzDataType.isBoolean(pobjFileResourceEN.isGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否生成代码(isGeneCode)]的值:[$(pobjFileResourceEN.isGeneCode)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFileResourceEN.isCanDel &&
    undefined !== pobjFileResourceEN.isCanDel &&
    tzDataType.isBoolean(pobjFileResourceEN.isCanDel) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否可删除(isCanDel)]的值:[$(pobjFileResourceEN.isCanDel)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFileResourceEN.fileLength &&
    undefined !== pobjFileResourceEN.fileLength &&
    tzDataType.isNumber(pobjFileResourceEN.fileLength) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件长度(fileLength)]的值:[$(pobjFileResourceEN.fileLength)], 非法,应该为数值型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.fileType) == false &&
    undefined !== pobjFileResourceEN.fileType &&
    tzDataType.isString(pobjFileResourceEN.fileType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件类型(fileType)]的值:[$(pobjFileResourceEN.fileType)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.creationTime) == false &&
    undefined !== pobjFileResourceEN.creationTime &&
    tzDataType.isString(pobjFileResourceEN.creationTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立时间(creationTime)]的值:[$(pobjFileResourceEN.creationTime)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.lastWriteTime) == false &&
    undefined !== pobjFileResourceEN.lastWriteTime &&
    tzDataType.isString(pobjFileResourceEN.lastWriteTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(lastWriteTime)]的值:[$(pobjFileResourceEN.lastWriteTime)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.checkDateTime) == false &&
    undefined !== pobjFileResourceEN.checkDateTime &&
    tzDataType.isString(pobjFileResourceEN.checkDateTime) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CheckDateTime(checkDateTime)]的值:[$(pobjFileResourceEN.checkDateTime)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFileResourceEN.inUse &&
    undefined !== pobjFileResourceEN.inUse &&
    tzDataType.isBoolean(pobjFileResourceEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjFileResourceEN.inUse)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFileResourceEN.isExistFile &&
    undefined !== pobjFileResourceEN.isExistFile &&
    tzDataType.isBoolean(pobjFileResourceEN.isExistFile) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否存在文件(isExistFile)]的值:[$(pobjFileResourceEN.isExistFile)], 非法,应该为布尔型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.prjId) == false &&
    undefined !== pobjFileResourceEN.prjId &&
    tzDataType.isString(pobjFileResourceEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjFileResourceEN.prjId)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.cmPrjId) == false &&
    undefined !== pobjFileResourceEN.cmPrjId &&
    tzDataType.isString(pobjFileResourceEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[$(pobjFileResourceEN.cmPrjId)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.ipAddress) == false &&
    undefined !== pobjFileResourceEN.ipAddress &&
    tzDataType.isString(pobjFileResourceEN.ipAddress) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[服务器(ipAddress)]的值:[$(pobjFileResourceEN.ipAddress)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.idFtpResource) == false &&
    undefined !== pobjFileResourceEN.idFtpResource &&
    tzDataType.isString(pobjFileResourceEN.idFtpResource) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[FTP资源流水号(idFtpResource)]的值:[$(pobjFileResourceEN.idFtpResource)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updDate) == false &&
    undefined !== pobjFileResourceEN.updDate &&
    tzDataType.isString(pobjFileResourceEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFileResourceEN.updDate)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.updUser) == false &&
    undefined !== pobjFileResourceEN.updUser &&
    tzDataType.isString(pobjFileResourceEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjFileResourceEN.updUser)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFileResourceEN.memo) == false &&
    undefined !== pobjFileResourceEN.memo &&
    tzDataType.isString(pobjFileResourceEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjFileResourceEN.memo)], 非法,应该为字符型(In 文件资源(FileResource))!(clsFileResourceBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFileResourceEN.fileResourceID ||
    (pobjFileResourceEN.fileResourceID != null &&
      pobjFileResourceEN.fileResourceID.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[FileResourceID]不能为空(In 文件资源)!(clsFileResourceBL:CheckProperty4Update)',
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
export function FileResource_GetJSONStrByObj(pobjFileResourceEN: clsFileResourceEN): string {
  pobjFileResourceEN.sfUpdFldSetStr = pobjFileResourceEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFileResourceEN);
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
export function FileResource_GetObjLstByJSONStr(strJSON: string): Array<clsFileResourceEN> {
  let arrFileResourceObjLst = new Array<clsFileResourceEN>();
  if (strJSON === '') {
    return arrFileResourceObjLst;
  }
  try {
    arrFileResourceObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFileResourceObjLst;
  }
  return arrFileResourceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFileResourceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FileResource_GetObjLstByJSONObjLst(
  arrFileResourceObjLstS: Array<clsFileResourceEN>,
): Array<clsFileResourceEN> {
  const arrFileResourceObjLst = new Array<clsFileResourceEN>();
  for (const objInFor of arrFileResourceObjLstS) {
    const obj1 = FileResource_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFileResourceObjLst.push(obj1);
  }
  return arrFileResourceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FileResource_GetObjByJSONStr(strJSON: string): clsFileResourceEN {
  let pobjFileResourceEN = new clsFileResourceEN();
  if (strJSON === '') {
    return pobjFileResourceEN;
  }
  try {
    pobjFileResourceEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFileResourceEN;
  }
  return pobjFileResourceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FileResource_GetCombineCondition(objFileResourceCond: clsFileResourceEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_FileResourceID,
    ) == true
  ) {
    const strComparisonOpFileResourceID: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_FileResourceID];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFileResourceEN.con_FileResourceID,
      objFileResourceCond.fileResourceID,
      strComparisonOpFileResourceID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_FileDirName,
    ) == true
  ) {
    const strComparisonOpFileDirName: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_FileDirName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_FileDirName,
      objFileResourceCond.fileDirName,
      strComparisonOpFileDirName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_FileName,
    ) == true
  ) {
    const strComparisonOpFileName: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_FileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_FileName,
      objFileResourceCond.fileName,
      strComparisonOpFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_Extension,
    ) == true
  ) {
    const strComparisonOpExtension: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_Extension];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_Extension,
      objFileResourceCond.extension,
      strComparisonOpExtension,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_TabId,
      objFileResourceCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_IsBelongsCurrCMPrj,
    ) == true
  ) {
    if (objFileResourceCond.isBelongsCurrCMPrj == true) {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsBelongsCurrCMPrj);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsBelongsCurrCMPrj);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_IsGeneCode,
    ) == true
  ) {
    if (objFileResourceCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_IsCanDel,
    ) == true
  ) {
    if (objFileResourceCond.isCanDel == true) {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsCanDel);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsCanDel);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_FileLength,
    ) == true
  ) {
    const strComparisonOpFileLength: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_FileLength];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFileResourceEN.con_FileLength,
      objFileResourceCond.fileLength,
      strComparisonOpFileLength,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_FileType,
    ) == true
  ) {
    const strComparisonOpFileType: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_FileType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_FileType,
      objFileResourceCond.fileType,
      strComparisonOpFileType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_CreationTime,
    ) == true
  ) {
    const strComparisonOpCreationTime: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_CreationTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_CreationTime,
      objFileResourceCond.creationTime,
      strComparisonOpCreationTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_LastWriteTime,
    ) == true
  ) {
    const strComparisonOpLastWriteTime: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_LastWriteTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_LastWriteTime,
      objFileResourceCond.lastWriteTime,
      strComparisonOpLastWriteTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_CheckDateTime,
    ) == true
  ) {
    const strComparisonOpCheckDateTime: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_CheckDateTime];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_CheckDateTime,
      objFileResourceCond.checkDateTime,
      strComparisonOpCheckDateTime,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_InUse,
    ) == true
  ) {
    if (objFileResourceCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_IsExistFile,
    ) == true
  ) {
    if (objFileResourceCond.isExistFile == true) {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsExistFile);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsExistFile);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_PrjId,
      objFileResourceCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_CmPrjId,
      objFileResourceCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_IpAddress,
    ) == true
  ) {
    const strComparisonOpIpAddress: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_IpAddress];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_IpAddress,
      objFileResourceCond.ipAddress,
      strComparisonOpIpAddress,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_IdFtpResource,
    ) == true
  ) {
    const strComparisonOpIdFtpResource: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_IdFtpResource];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_IdFtpResource,
      objFileResourceCond.idFtpResource,
      strComparisonOpIdFtpResource,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_UpdDate,
      objFileResourceCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_UpdUser,
      objFileResourceCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFileResourceCond.dicFldComparisonOp,
      clsFileResourceEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFileResourceCond.dicFldComparisonOp[clsFileResourceEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFileResourceEN.con_Memo,
      objFileResourceCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FileResource(文件资源),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strCmPrjId: CM工程Id(要求唯一的字段)
 * @param strFileDirName: 文件目录名(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FileResource_GetUniCondStr(objFileResourceEN: clsFileResourceEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objFileResourceEN.prjId);
  strWhereCond += Format(" and CmPrjId = '{0}'", objFileResourceEN.cmPrjId);
  strWhereCond += Format(" and FileDirName = '{0}'", objFileResourceEN.fileDirName);
  strWhereCond += Format(" and FileName = '{0}'", objFileResourceEN.fileName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FileResource(文件资源),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strCmPrjId: CM工程Id(要求唯一的字段)
 * @param strFileDirName: 文件目录名(要求唯一的字段)
 * @param strFileName: 文件名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FileResource_GetUniCondStr4Update(objFileResourceEN: clsFileResourceEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FileResourceID <> '{0}'", objFileResourceEN.fileResourceID);
  strWhereCond += Format(" and PrjId = '{0}'", objFileResourceEN.prjId);
  strWhereCond += Format(" and CmPrjId = '{0}'", objFileResourceEN.cmPrjId);
  strWhereCond += Format(" and FileDirName = '{0}'", objFileResourceEN.fileDirName);
  strWhereCond += Format(" and FileName = '{0}'", objFileResourceEN.fileName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFileResourceENS:源对象
 * @param objFileResourceENT:目标对象
 */
export function FileResource_GetObjFromJsonObj(
  objFileResourceENS: clsFileResourceEN,
): clsFileResourceEN {
  const objFileResourceENT: clsFileResourceEN = new clsFileResourceEN();
  ObjectAssign(objFileResourceENT, objFileResourceENS);
  return objFileResourceENT;
}
