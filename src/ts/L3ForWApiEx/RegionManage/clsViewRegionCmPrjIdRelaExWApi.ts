/**
 * 界面区域CmPrjId关系(ViewRegionCmPrjIdRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年03月01日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsViewRegionCmPrjIdRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionCmPrjIdRelaENEx';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ViewRegionCmPrjIdRela_GetObjLstAsync,
  ViewRegionCmPrjIdRela_SortFunByKey,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionCmPrjIdRelaWApi';
import { clsViewRegionCmPrjIdRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionCmPrjIdRelaEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const viewRegionCmPrjIdRelaEx_Controller = 'ViewRegionCmPrjIdRelaExApi';
export const viewRegionCmPrjIdRelaEx_ConstructorName = 'viewRegionCmPrjIdRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ViewRegionCmPrjIdRelaEx_GetWebApiUrl(
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
 * @param objViewRegionCmPrjIdRelaENS:源对象
 * @returns 目标对象=>clsViewRegionCmPrjIdRelaEN:objViewRegionCmPrjIdRelaENT
 **/
export function ViewRegionCmPrjIdRelaEx_CopyToEx(
  objViewRegionCmPrjIdRelaENS: clsViewRegionCmPrjIdRelaEN,
): clsViewRegionCmPrjIdRelaENEx {
  const strThisFuncName = ViewRegionCmPrjIdRelaEx_CopyToEx.name;
  const objViewRegionCmPrjIdRelaENT = new clsViewRegionCmPrjIdRelaENEx();
  try {
    ObjectAssign(objViewRegionCmPrjIdRelaENT, objViewRegionCmPrjIdRelaENS);
    return objViewRegionCmPrjIdRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegionCmPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewRegionCmPrjIdRelaENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewRegionCmPrjIdRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRegionCmPrjIdRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrViewRegionCmPrjIdRelaObjLst = await ViewRegionCmPrjIdRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrViewRegionCmPrjIdRelaExObjLst = arrViewRegionCmPrjIdRelaObjLst.map(
    ViewRegionCmPrjIdRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewRegionCmPrjIdRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrViewRegionCmPrjIdRelaExObjLst) {
      await ViewRegionCmPrjIdRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrViewRegionCmPrjIdRelaExObjLst.length == 0) return arrViewRegionCmPrjIdRelaExObjLst;
  let arrViewRegionCmPrjIdRela_Sel: Array<clsViewRegionCmPrjIdRelaENEx> =
    arrViewRegionCmPrjIdRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewRegionCmPrjIdRela_Sel = arrViewRegionCmPrjIdRela_Sel.sort(
        ViewRegionCmPrjIdRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrViewRegionCmPrjIdRela_Sel = arrViewRegionCmPrjIdRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrViewRegionCmPrjIdRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegionCmPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionCmPrjIdRelaENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-03-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewRegionCmPrjIdRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ViewRegionCmPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ViewRegionCmPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-03-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewRegionCmPrjIdRelaEx_FuncMapByFldName(
  strFldName: string,
  objViewRegionCmPrjIdRelaEx: clsViewRegionCmPrjIdRelaENEx,
) {
  const strThisFuncName = ViewRegionCmPrjIdRelaEx_FuncMapByFldName.name;
  console.log(objViewRegionCmPrjIdRelaEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsViewRegionCmPrjIdRelaEN.AttributeName;
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
