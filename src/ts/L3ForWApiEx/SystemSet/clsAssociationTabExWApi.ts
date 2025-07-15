﻿/**
 * 关联(AssociationTab)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clsAssociationTabENEx } from '@/ts/L0Entity/SystemSet/clsAssociationTabENEx';
import {
  AssociationTab_GetObjLstByPagerAsync,
  AssociationTab_SortFunByKey,
} from '@/ts/L3ForWApi/SystemSet/clsAssociationTabWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsAssociationTabEN } from '@/ts/L0Entity/SystemSet/clsAssociationTabEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const associationTabExController = 'AssociationTabExApi';
export const associationTabExConstructorName = 'associationTabEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function AssociationTabExGetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objAssociationTabENS:源对象
 * @returns 目标对象=>clsAssociationTabEN:objAssociationTabENT
 **/
export function AssociationTabExCopyToEx(
  objAssociationTabENS: clsAssociationTabEN,
): clsAssociationTabENEx {
  const strThisFuncName = AssociationTabExCopyToEx.name;
  const objAssociationTabENT = new clsAssociationTabENEx();
  try {
    ObjectAssign(objAssociationTabENT, objAssociationTabENS);
    return objAssociationTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      associationTabExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objAssociationTabENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function AssociationTab_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAssociationTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrAssociationTabObjLst = await AssociationTab_GetObjLstByPagerAsync(objPagerPara);
  const arrAssociationTabExObjLst = arrAssociationTabObjLst.map(AssociationTabExCopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsAssociationTabEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrAssociationTabExObjLst) {
      await AssociationTabEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrAssociationTabExObjLst.length == 0) return arrAssociationTabExObjLst;
  let arrAssociationTabSel: Array<clsAssociationTabENEx> = arrAssociationTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAssociationTabSel = arrAssociationTabSel.sort(
        AssociationTabEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrAssociationTabSel = arrAssociationTabSel.sort(objPagerPara.sortFun);
    }

    return arrAssociationTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      associationTabExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAssociationTabENEx>();
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
export function AssociationTabEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return AssociationTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return AssociationTab_SortFunByKey(strKey, AscOrDesc);
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
export function AssociationTabEx_FuncMapByFldName(
  strFldName: string,
  objAssociationTabEx: clsAssociationTabENEx,
) {
  const strThisFuncName = AssociationTabEx_FuncMapByFldName.name;
  console.log(objAssociationTabEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsAssociationTabEN.AttributeName;
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
