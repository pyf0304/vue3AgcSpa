/**
 * 用户V2(QxUsersV2)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxUsersV2ENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersV2ENEx';
import {
  QxUsersV2_GetObjLstByPagerAsync,
  QxUsersV2_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersV2WApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxUsersV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersV2EN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const qxUsersV2ExController = 'QxUsersV2ExApi';
export const qxUsersV2ExConstructorName = 'qxUsersV2Ex';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxUsersV2ExGetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxUsersV2ENS:源对象
 * @returns 目标对象=>clsQxUsersV2EN:objQxUsersV2ENT
 **/
export function QxUsersV2ExCopyToEx(objQxUsersV2ENS: clsQxUsersV2EN): clsQxUsersV2ENEx {
  const strThisFuncName = QxUsersV2ExCopyToEx.name;
  const objQxUsersV2ENT = new clsQxUsersV2ENEx();
  try {
    ObjectAssign(objQxUsersV2ENT, objQxUsersV2ENS);
    return objQxUsersV2ENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersV2ExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUsersV2ENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUsersV2Ex_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUsersV2ENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxUsersV2ObjLst = await QxUsersV2_GetObjLstByPagerAsync(objPagerPara);
  const arrQxUsersV2ExObjLst = arrQxUsersV2ObjLst.map(QxUsersV2ExCopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxUsersV2EN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxUsersV2ExObjLst) {
      await QxUsersV2Ex_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUsersV2ExObjLst.length == 0) return arrQxUsersV2ExObjLst;
  let arrQxUsersV2Sel: Array<clsQxUsersV2ENEx> = arrQxUsersV2ExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUsersV2Sel = arrQxUsersV2Sel.sort(QxUsersV2Ex_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxUsersV2Sel = arrQxUsersV2Sel.sort(objPagerPara.sortFun);
    }

    return arrQxUsersV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUsersV2ExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUsersV2ENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsersV2Ex_SortFunByKey(strKey: string, AscOrDesc: string) {
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
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxUsersV2Ex_FuncMapByFldName(strFldName: string, objQxUsersV2Ex: clsQxUsersV2ENEx) {
  const strThisFuncName = QxUsersV2Ex_FuncMapByFldName.name;
  console.log(objQxUsersV2Ex);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQxUsersV2EN.AttributeName;
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
