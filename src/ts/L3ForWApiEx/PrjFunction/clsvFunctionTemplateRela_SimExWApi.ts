import { clsvFunctionTemplateRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimEN';
import { clsvFunctionTemplateRela_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimENEx';
import {
  vFunctionTemplateRela_Sim_GetObjLstAsync,
  vFunctionTemplateRela_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFunctionTemplateRela_SimEx_Controller = 'vFunctionTemplateRela_SimExApi';
export const vFunctionTemplateRela_SimEx_ConstructorName = 'vFunctionTemplateRela_SimEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvFunctionTemplateRela_SimENS:源对象
 * @returns 目标对象=>clsvFunctionTemplateRela_SimEN:objvFunctionTemplateRela_SimENT
 **/
export function vFunctionTemplateRela_SimEx_CopyToEx(
  objvFunctionTemplateRela_SimENS: clsvFunctionTemplateRela_SimEN,
): clsvFunctionTemplateRela_SimENEx {
  const strThisFuncName = vFunctionTemplateRela_SimEx_CopyToEx.name;
  const objvFunctionTemplateRela_SimENT = new clsvFunctionTemplateRela_SimENEx();
  try {
    ObjectAssign(objvFunctionTemplateRela_SimENT, objvFunctionTemplateRela_SimENS);
    return objvFunctionTemplateRela_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRela_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvFunctionTemplateRela_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vFunctionTemplateRela_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunctionTemplateRela_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvFunctionTemplateRela_SimObjLst = await vFunctionTemplateRela_Sim_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrvFunctionTemplateRela_SimExObjLst = arrvFunctionTemplateRela_SimObjLst.map(
    vFunctionTemplateRela_SimEx_CopyToEx,
  );

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvFunctionTemplateRela_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvFunctionTemplateRela_SimExObjLst) {
      await vFunctionTemplateRela_SimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvFunctionTemplateRela_SimExObjLst.length == 0) return arrvFunctionTemplateRela_SimExObjLst;
  let arrvFunctionTemplateRela_Sim_Sel: Array<clsvFunctionTemplateRela_SimENEx> =
    arrvFunctionTemplateRela_SimExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFunctionTemplateRela_Sim_Sel = arrvFunctionTemplateRela_Sim_Sel.sort(
        vFunctionTemplateRela_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvFunctionTemplateRela_Sim_Sel = arrvFunctionTemplateRela_Sim_Sel.sort(
        objPagerPara.sortFun,
      );
    }

    return arrvFunctionTemplateRela_Sim_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFunctionTemplateRela_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunctionTemplateRela_SimENEx>();
}

/**
 * 通过函数映射把对象列表转换为扩展对象列表.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByFuncMap)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vFunctionTemplateRela_SimEx_GetObjExLstByFuncMap(
  arrvFunctionTemplateRela_SimObjLst: Array<clsvFunctionTemplateRela_SimEN>,
): Promise<Array<clsvFunctionTemplateRela_SimENEx>> {
  // const strThisFuncName = 'GetObjExLstByFuncMap';
  const arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx> = [];
  for (const objInFor of arrvFunctionTemplateRela_SimObjLst) {
    const objEx = vFunctionTemplateRela_SimEx_CopyToEx(objInFor);
    arrvFunctionTemplateRela_SimExObjLst.push(objEx);
  }
  for (const objInFor of arrvFunctionTemplateRela_SimExObjLst) {
    await vFunctionTemplateRela_SimEx_FuncMapByFldName(
      clsvFunctionTemplateRela_SimENEx.con_FuncName,
      objInFor,
    );
  }
  return arrvFunctionTemplateRela_SimExObjLst;
}

///**
//* 把一个扩展类的部分属性进行函数转换
//* (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
//* @param objvFunctionTemplateRela_SimS:源对象
//**/
//export async function vFunctionTemplateRela_SimEx_FuncMap(objvFunctionTemplateRela_Sim: clsvFunctionTemplateRela_SimENEx) {
//    const strThisFuncName = vFunctionTemplateRela_SimEx_FuncMap.name;
//    try {
//        {
//            const vFunction4GeneCode_Sim_FuncId4GC = objvFunctionTemplateRela_Sim.funcId4GC;
//            const vFunction4GeneCode_Sim_FuncId4Code = await vFunction4GeneCode_SimEx_func(clsvFunction4GeneCode_SimEN.con_FuncId4GC, clsvFunction4GeneCode_SimEN.con_FuncId4Code, vFunction4GeneCode_Sim_FuncId4GC, objvFunctionTemplateRela_Sim.fun);
//            const vFunction4GeneCode_Sim_ProgLangTypeId = await vFunction4GeneCode_SimEx_func(clsvFunction4GeneCode_SimEN.con_FuncId4Code, clsvFunction4GeneCode_SimEN.con_ProgLangTypeId, vFunction4GeneCode_Sim_FuncId4Code);
//            objvFunctionTemplateRela_Sim.progLangTypeId = vFunction4GeneCode_Sim_ProgLangTypeId;
//        }
//        {
//            const vFunction4GeneCode_Sim_FuncId4GC = objvFunctionTemplateRela_Sim.funcId4GC;
//            const vFunction4GeneCode_Sim_FuncId4Code = await vFunction4GeneCode_SimEx_func(clsvFunction4GeneCode_SimEN.con_FuncId4GC, clsvFunction4GeneCode_SimEN.con_FuncId4Code, vFunction4GeneCode_Sim_FuncId4GC, objvFunctionTemplateRela_Sim.codeTypeId);
//            const vFunction4Code_Sim_FuncId4Code = vFunction4GeneCode_Sim_FuncId4Code;
//            const vFunction4Code_Sim_FuncTypeId = await vFunction4Code_SimStore.getName(clsvFunction4Code_SimEN.con_FuncId4Code, clsvFunction4Code_SimEN.con_FuncTypeId, vFunction4Code_Sim_FuncId4Code);
//            objvFunctionTemplateRela_Sim.funcTypeId = vFunction4Code_Sim_FuncTypeId;
//        }
//        {
//            const vFunction4GeneCode_Sim_FuncId4GC = objvFunctionTemplateRela_Sim.funcId4GC;
//            const vFunction4GeneCode_Sim_SqlDsTypeId = await vFunction4GeneCode_SimEx_func(clsvFunction4GeneCode_SimEN.con_FuncId4GC, clsvFunction4GeneCode_SimEN.con_SqlDsTypeId, vFunction4GeneCode_Sim_FuncId4GC, objvFunctionTemplateRela_Sim.codeTypeId);
//            objvFunctionTemplateRela_Sim.sqlDsTypeId = vFunction4GeneCode_Sim_SqlDsTypeId;
//        }
//        {
//            const vFunction4GeneCode_Sim_FuncId4GC = objvFunctionTemplateRela_Sim.funcId4GC;
//            const vFunction4GeneCode_Sim_FuncName = await vFunction4GeneCode_SimEx_func(clsvFunction4GeneCode_SimEN.con_FuncId4GC, clsvFunction4GeneCode_SimEN.con_FuncName, vFunction4GeneCode_Sim_FuncId4GC, objvFunctionTemplateRela_Sim.codeTypeId);
//            objvFunctionTemplateRela_Sim.funcName = vFunction4GeneCode_Sim_FuncName;
//        }
//    }
//    catch (e) {
//        const strMsg = Format("(errid:Watl000072)函数映射表对象数据出错,{0}.(in {1}.{2})", e, vFunctionTemplateRela_SimEx_ConstructorName, strThisFuncName);
//        console.error(strMsg);
//        alert(strMsg);
//    }
//}
/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRela_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_SqlDsTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return a.funcName.localeCompare(b.funcName);
        };
      default:
        return vFunctionTemplateRela_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_SqlDsTypeId:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      case clsvFunctionTemplateRela_SimENEx.con_FuncName:
        return (a: clsvFunctionTemplateRela_SimENEx, b: clsvFunctionTemplateRela_SimENEx) => {
          return b.funcName.localeCompare(a.funcName);
        };
      default:
        return vFunctionTemplateRela_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vFunctionTemplateRela_SimEx_FuncMapByFldName(
  strFldName: string,
  objvFunctionTemplateRela_SimEx: clsvFunctionTemplateRela_SimENEx,
) {
  console.log(objvFunctionTemplateRela_SimEx);
  const strThisFuncName = vFunctionTemplateRela_SimEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvFunctionTemplateRela_SimEN.AttributeName;
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
