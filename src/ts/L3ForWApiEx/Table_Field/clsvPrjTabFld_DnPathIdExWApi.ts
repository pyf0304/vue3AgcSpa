/**
 * v表字段_DnPathId(vPrjTabFld_DnPathId)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年02月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import {
  vPrjTabFld_DnPathId_GetObjLstAsync,
  vPrjTabFld_DnPathId_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsvPrjTabFld_DnPathIdWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvPrjTabFld_DnPathIdEN } from '@/ts/L0Entity/Table_Field/clsvPrjTabFld_DnPathIdEN';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPrjTabFld_DnPathIdENEx } from '@/ts/L0Entity/Table_Field/clsvPrjTabFld_DnPathIdENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vPrjTabFld_DnPathIdEx_Controller = 'vPrjTabFld_DnPathIdExApi';
export const vPrjTabFld_DnPathIdEx_ConstructorName = 'vPrjTabFld_DnPathIdEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPrjTabFld_DnPathIdEx_GetWebApiUrl(
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
 * @param objvPrjTabFld_DnPathIdENS:源对象
 * @returns 目标对象=>clsvPrjTabFld_DnPathIdEN:objvPrjTabFld_DnPathIdENT
 **/
export function vPrjTabFld_DnPathIdEx_CopyToEx(
  objvPrjTabFld_DnPathIdENS: clsvPrjTabFld_DnPathIdEN,
): clsvPrjTabFld_DnPathIdENEx {
  const strThisFuncName = vPrjTabFld_DnPathIdEx_CopyToEx.name;
  const objvPrjTabFld_DnPathIdENT = new clsvPrjTabFld_DnPathIdENEx();
  try {
    ObjectAssign(objvPrjTabFld_DnPathIdENT, objvPrjTabFld_DnPathIdENS);
    return objvPrjTabFld_DnPathIdENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPrjTabFld_DnPathIdEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPrjTabFld_DnPathIdENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPrjTabFld_DnPathIdEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjTabFld_DnPathIdENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPrjTabFld_DnPathIdObjLst = await vPrjTabFld_DnPathId_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrvPrjTabFld_DnPathIdExObjLst = arrvPrjTabFld_DnPathIdObjLst.map(
    vPrjTabFld_DnPathIdEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvPrjTabFld_DnPathIdEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvPrjTabFld_DnPathIdExObjLst) {
      await vPrjTabFld_DnPathIdEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPrjTabFld_DnPathIdExObjLst.length == 0) return arrvPrjTabFld_DnPathIdExObjLst;
  let arrvPrjTabFld_DnPathId_Sel: Array<clsvPrjTabFld_DnPathIdENEx> =
    arrvPrjTabFld_DnPathIdExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjTabFld_DnPathId_Sel = arrvPrjTabFld_DnPathId_Sel.sort(
        vPrjTabFld_DnPathIdEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPrjTabFld_DnPathId_Sel = arrvPrjTabFld_DnPathId_Sel.sort(objPagerPara.sortFun);
    }

    return arrvPrjTabFld_DnPathId_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjTabFld_DnPathIdEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabFld_DnPathIdENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-02-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vPrjTabFld_DnPathIdEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPrjTabFld_DnPathId_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPrjTabFld_DnPathId_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-02-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vPrjTabFld_DnPathIdEx_FuncMapByFldName(
  strFldName: string,
  objvPrjTabFld_DnPathIdEx: clsvPrjTabFld_DnPathIdENEx,
) {
  const strThisFuncName = vPrjTabFld_DnPathIdEx_FuncMapByFldName.name;
  console.log(objvPrjTabFld_DnPathIdEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvPrjTabFld_DnPathIdEN.AttributeName;
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
