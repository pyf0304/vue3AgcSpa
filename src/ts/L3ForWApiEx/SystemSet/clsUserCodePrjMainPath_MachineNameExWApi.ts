/**
 * 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年12月13日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  UserCodePrjMainPath_MachineName_SortFunByKey,
  UserCodePrjMainPath_MachineName_GetObjLstByPagerAsync,
} from '@/ts/L3ForWApi/SystemSet/clsUserCodePrjMainPath_MachineNameWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsUserCodePrjMainPath_MachineNameEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPath_MachineNameEN';
import { clsUserCodePrjMainPath_MachineNameENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPath_MachineNameENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const userCodePrjMainPath_MachineNameEx_Controller = 'UserCodePrjMainPath_MachineNameExApi';
export const userCodePrjMainPath_MachineNameEx_ConstructorName =
  'userCodePrjMainPath_MachineNameEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserCodePrjMainPath_MachineNameEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objUserCodePrjMainPath_MachineNameENS:源对象
 * @returns 目标对象=>clsUserCodePrjMainPath_MachineNameEN:objUserCodePrjMainPath_MachineNameENT
 **/
export function UserCodePrjMainPath_MachineNameEx_CopyToEx(
  objUserCodePrjMainPath_MachineNameENS: clsUserCodePrjMainPath_MachineNameEN,
): clsUserCodePrjMainPath_MachineNameENEx {
  const strThisFuncName = UserCodePrjMainPath_MachineNameEx_CopyToEx.name;
  const objUserCodePrjMainPath_MachineNameENT = new clsUserCodePrjMainPath_MachineNameENEx();
  try {
    ObjectAssign(objUserCodePrjMainPath_MachineNameENT, objUserCodePrjMainPath_MachineNameENS);
    return objUserCodePrjMainPath_MachineNameENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_MachineNameEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserCodePrjMainPath_MachineNameENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UserCodePrjMainPath_MachineNameEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserCodePrjMainPath_MachineNameENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUserCodePrjMainPath_MachineNameObjLst =
    await UserCodePrjMainPath_MachineName_GetObjLstByPagerAsync(objPagerPara);
  const arrUserCodePrjMainPath_MachineNameExObjLst = arrUserCodePrjMainPath_MachineNameObjLst.map(
    UserCodePrjMainPath_MachineNameEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUserCodePrjMainPath_MachineNameEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrUserCodePrjMainPath_MachineNameExObjLst) {
      await UserCodePrjMainPath_MachineNameEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUserCodePrjMainPath_MachineNameExObjLst.length == 0)
    return arrUserCodePrjMainPath_MachineNameExObjLst;
  let arrUserCodePrjMainPath_MachineName_Sel: Array<clsUserCodePrjMainPath_MachineNameENEx> =
    arrUserCodePrjMainPath_MachineNameExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserCodePrjMainPath_MachineName_Sel = arrUserCodePrjMainPath_MachineName_Sel.sort(
        UserCodePrjMainPath_MachineNameEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrUserCodePrjMainPath_MachineName_Sel = arrUserCodePrjMainPath_MachineName_Sel.sort(
        objPagerPara.sortFun,
      );
    }

    return arrUserCodePrjMainPath_MachineName_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userCodePrjMainPath_MachineNameEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPath_MachineNameENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-12-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserCodePrjMainPath_MachineNameEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePrjMainPath_MachineNameENEx.con_ApplicationTypeSimName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_CmPrjName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_GcPathName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return a.gcPathName.localeCompare(b.gcPathName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_ApplicationTypeName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_IsExistCodePath:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          console.log(b);
          if (a.isExistCodePath == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_IsExistCodePathBackup:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          console.log(b);
          if (a.isExistCodePathBackup == true) return 1;
          else return -1;
        };
      default:
        return UserCodePrjMainPath_MachineName_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUserCodePrjMainPath_MachineNameENEx.con_ApplicationTypeSimName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_CmPrjName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_GcPathName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return b.gcPathName.localeCompare(a.gcPathName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_ApplicationTypeName:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_IsExistCodePath:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          if (b.isExistCodePath == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPath_MachineNameENEx.con_IsExistCodePathBackup:
        return (
          a: clsUserCodePrjMainPath_MachineNameENEx,
          b: clsUserCodePrjMainPath_MachineNameENEx,
        ) => {
          if (b.isExistCodePathBackup == true) return 1;
          else return -1;
        };
      default:
        return UserCodePrjMainPath_MachineName_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-12-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UserCodePrjMainPath_MachineNameEx_FuncMapByFldName(
  strFldName: string,
  objUserCodePrjMainPath_MachineNameEx: clsUserCodePrjMainPath_MachineNameENEx,
) {
  const strThisFuncName = UserCodePrjMainPath_MachineNameEx_FuncMapByFldName.name;
  console.log(objUserCodePrjMainPath_MachineNameEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsUserCodePrjMainPath_MachineNameEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
