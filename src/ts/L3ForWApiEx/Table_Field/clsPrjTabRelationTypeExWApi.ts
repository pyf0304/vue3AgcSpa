/**
 * 工程表关系类型(PrjTabRelationType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年03月29日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//
import { clsPrjTabRelationTypeEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeEN';
import { clsPrjTabRelationTypeENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeENEx';
import {
  PrjTabRelationType_GetObjLstAsync,
  PrjTabRelationType_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabRelationTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const prjTabRelationTypeEx_Controller = 'PrjTabRelationTypeExApi';
export const prjTabRelationTypeEx_ConstructorName = 'prjTabRelationTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PrjTabRelationTypeEx_GetWebApiUrl(
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
 * @param objPrjTabRelationTypeENS:源对象
 * @returns 目标对象=>clsPrjTabRelationTypeEN:objPrjTabRelationTypeENT
 **/
export function PrjTabRelationTypeEx_CopyToEx(
  objPrjTabRelationTypeENS: clsPrjTabRelationTypeEN,
): clsPrjTabRelationTypeENEx {
  const strThisFuncName = PrjTabRelationTypeEx_CopyToEx.name;
  const objPrjTabRelationTypeENT = new clsPrjTabRelationTypeENEx();
  try {
    ObjectAssign(objPrjTabRelationTypeENT, objPrjTabRelationTypeENS);
    return objPrjTabRelationTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabRelationTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjTabRelationTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabRelationTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPrjTabRelationTypeExObjLst = await PrjTabRelationType_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabRelationTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrPrjTabRelationTypeExObjLst) {
      await PrjTabRelationTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPrjTabRelationTypeExObjLst.length == 0) return arrPrjTabRelationTypeExObjLst;
  let arrPrjTabRelationType_Sel: Array<clsPrjTabRelationTypeENEx> = arrPrjTabRelationTypeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabRelationType_Sel = arrPrjTabRelationType_Sel.sort(
        PrjTabRelationTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPrjTabRelationType_Sel = arrPrjTabRelationType_Sel.sort(objPagerPara.sortFun);
    }

    return arrPrjTabRelationType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabRelationTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-03-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelationTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PrjTabRelationType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PrjTabRelationType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-03-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjTabRelationTypeEx_FuncMapByFldName(
  strFldName: string,
  objPrjTabRelationTypeEx: clsPrjTabRelationTypeENEx,
) {
  const strThisFuncName = PrjTabRelationTypeEx_FuncMapByFldName.name;
  console.log(objPrjTabRelationTypeEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPrjTabRelationTypeEN.AttributeName;
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
