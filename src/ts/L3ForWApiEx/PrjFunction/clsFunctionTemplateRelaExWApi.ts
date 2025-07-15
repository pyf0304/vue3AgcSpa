import { usevFunction4Code_SimStore } from '@/store/modules/vFunction4Code_Sim';
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';

import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';

import {
  FunctionTemplateRela_GetObjLstAsync,
  FunctionTemplateRela_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateRelaWApi';
import { FunctionTemplate_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';

import { vFunctionTemplateRela_Sim_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
import { RegionType_func } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { vFunction4GeneCode_SimEx_func } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const functionTemplateRelaEx_Controller = 'FunctionTemplateRelaExApi';
export const functionTemplateRelaEx_ConstructorName = 'functionTemplateRelaEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFunctionTemplateRelaENS">源对象</param>
/// <param name = "objFunctionTemplateRelaENT">目标对象</param>
export function FunctionTemplateRelaEx_CopyToEx(
  objFunctionTemplateRelaENS: clsFunctionTemplateRelaEN,
): clsFunctionTemplateRelaENEx {
  const objFunctionTemplateRelaENT = new clsFunctionTemplateRelaENEx();
  try {
    ObjectAssign(objFunctionTemplateRelaENT, objFunctionTemplateRelaENS);
    return objFunctionTemplateRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFunctionTemplateRelaENT;
  }
}

/// <summary>
/// 根据关键字列表获取相关对象列表, 从缓存中获取.
/// </summary>
/// <param name = "strFunctionTemplateId">函数模板Id</param>
/// <returns>对象列表</returns>
export async function FunctionTemplateRelaEx_GetObjLstByFunctionTemplateIdCache(
  strFunctionTemplateId: string,
) {
  try {
    const arrFunctionTemplateRelaObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
      strFunctionTemplateId,
    );
    const arrFunctionTemplateRela_Sel = arrFunctionTemplateRelaObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId,
    );
    return arrFunctionTemplateRela_Sel;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据函数模板Id:[${strFunctionTemplateId}]获取对象列表不成功!`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionTemplateRelaEN>();
}
/// <summary>
/// 根据关键字列表获取相关对象列表, 从缓存中获取.
/// </summary>
/// <param name = "strFunctionTemplateId">函数模板Id</param>
/// <returns>对象列表</returns>
export async function FunctionTemplateRelaEx_GetFuncId4GCLstByFunctionTemplateIdCache(
  strFunctionTemplateId: string,
) {
  try {
    const arrFunctionTemplateRelaObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
      strFunctionTemplateId,
    );
    const arrFunctionTemplateRela_Sel = arrFunctionTemplateRelaObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId,
    );
    return arrFunctionTemplateRela_Sel.map((x) => x.funcId4GC);
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据函数模板Id:[${strFunctionTemplateId}]获取函数Id列表不成功!`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
}
/// <summary>
/// 根据关键字列表获取相关对象列表, 从缓存中获取.
/// </summary>
/// <param name = "strFunctionTemplateId">函数模板Id</param>
/// <returns>对象列表</returns>
export async function FunctionTemplateRelaEx_GetFuncId4GCLstByFunctionTemplateIdAndCodeTypeIdCache(
  strFunctionTemplateId: string,
  strCodeTypeId: string,
): Promise<Array<string>> {
  try {
    const arrFunctionTemplateRelaObjLstCache = await vFunctionTemplateRela_Sim_GetObjLstCache(
      strFunctionTemplateId,
    );

    const arrFunctionTemplateRela_Sel = arrFunctionTemplateRelaObjLstCache.filter(
      (x) => x.codeTypeId == strCodeTypeId,
    );
    return arrFunctionTemplateRela_Sel.map((x) => x.funcId4GC);
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据函数模板Id:[${strFunctionTemplateId}]获取函数Id列表不成功!`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function FunctionTemplateRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunctionTemplateRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFunctionTemplateRelaObjLst = await FunctionTemplateRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrFunctionTemplateRelaExObjLst = arrFunctionTemplateRelaObjLst.map(
    FunctionTemplateRelaEx_CopyToEx,
  );

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFunctionTemplateRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFunctionTemplateRelaExObjLst) {
      await FunctionTemplateRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrFunctionTemplateRelaExObjLst.length == 0) return arrFunctionTemplateRelaExObjLst;
  let arrFunctionTemplateRela_Sel: Array<clsFunctionTemplateRelaENEx> =
    arrFunctionTemplateRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFunctionTemplateRela_Sel = arrFunctionTemplateRela_Sel.sort(
        FunctionTemplateRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrFunctionTemplateRela_Sel = arrFunctionTemplateRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrFunctionTemplateRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionTemplateRelaENEx>();
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
export function FunctionTemplateRelaEx_FuncMapByFldName(
  strFldName: string,
  objFunctionTemplateRelaEx: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsFunctionTemplateRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFunctionTemplateRelaENEx.con_FunctionTemplateName:
      return FunctionTemplateRelaEx_FuncMap_FunctionTemplateName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_RegionTypeName:
      return FunctionTemplateRelaEx_FuncMap_RegionTypeName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_FuncName:
      return FunctionTemplateRelaEx_FuncMap_FuncName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_FuncName4Code:
      return FunctionTemplateRelaEx_FuncMap_FuncName4Code(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName:
      return FunctionTemplateRelaEx_FuncMap_ProgLangTypeSimName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_CodeTypeSimName:
      return FunctionTemplateRelaEx_FuncMap_CodeTypeSimName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_CodeTypeName:
      return FunctionTemplateRelaEx_FuncMap_CodeTypeName(objFunctionTemplateRelaEx);
    case clsFunctionTemplateRelaENEx.con_FuncCodeTypeName:
      return FunctionTemplateRelaEx_FuncMap_FuncCodeTypeName(objFunctionTemplateRelaEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_FunctionTemplateName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_FunctionTemplateName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.functionTemplateName) == true) {
      const FunctionTemplate_FunctionTemplateId = objFunctionTemplateRela.functionTemplateId;
      const FunctionTemplate_FunctionTemplateName = await FunctionTemplate_func(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        clsFunctionTemplateEN.con_FunctionTemplateName,
        FunctionTemplate_FunctionTemplateId,
      );
      objFunctionTemplateRela.functionTemplateName = FunctionTemplate_FunctionTemplateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000105)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_RegionTypeName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_RegionTypeName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.regionTypeName) == true) {
      const RegionType_RegionTypeId = objFunctionTemplateRela.regionTypeId;
      const RegionType_RegionTypeName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeName,
        RegionType_RegionTypeId,
      );
      objFunctionTemplateRela.regionTypeName = RegionType_RegionTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000124)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_FuncName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_FuncName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.funcName) == true) {
      if (IsNullOrEmpty(objFunctionTemplateRela.codeTypeId)) return;
      const vFunction4GeneCode_Sim_FuncId4GC = objFunctionTemplateRela.funcId4GC;
      const vFunction4GeneCode_Sim_FuncName = await vFunction4GeneCode_SimEx_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncName,
        vFunction4GeneCode_Sim_FuncId4GC,
      );
      objFunctionTemplateRela.funcName = vFunction4GeneCode_Sim_FuncName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000172)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_FuncName4Code(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_FuncName4Code.name;
  const vFunction4Code_SimStore = usevFunction4Code_SimStore();
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.funcName4Code) == true) {
      if (IsNullOrEmpty(objFunctionTemplateRela.funcCodeTypeId))
        FunctionTemplateRelaEx_FuncMapByFldName(
          clsFunctionTemplateRelaENEx.con_FuncCodeTypeId,
          objFunctionTemplateRela,
        );
      const vFunction4GeneCode_Sim_FuncId4GC = objFunctionTemplateRela.funcId4GC;
      const vFunction4GeneCode_Sim_FuncId4Code = await vFunction4GeneCode_SimEx_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        vFunction4GeneCode_Sim_FuncId4GC,
      );
      const vFunction4Code_Sim_FuncName4Code = await vFunction4Code_SimStore.getName(
        vFunction4GeneCode_Sim_FuncId4Code,
      );
      objFunctionTemplateRela.funcName4Code = vFunction4Code_Sim_FuncName4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000108)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FunctionTemplateRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunctionTemplateRelaENEx.con_FunctionTemplateName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      case clsFunctionTemplateRelaENEx.con_RegionTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.funcName.localeCompare(b.funcName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName4Code:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      default:
        return FunctionTemplateRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFunctionTemplateRelaENEx.con_FunctionTemplateName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      case clsFunctionTemplateRelaENEx.con_RegionTypeName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.funcName.localeCompare(a.funcName);
        };
      case clsFunctionTemplateRelaENEx.con_FuncName4Code:
        return (a: clsFunctionTemplateRelaENEx, b: clsFunctionTemplateRelaENEx) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      default:
        return FunctionTemplateRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_ProgLangTypeSimName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_ProgLangTypeSimName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.progLangTypeSimName) == true) {
      const CodeType_CodeTypeId = objFunctionTemplateRela.codeTypeId;
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      );
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId;
      const ProgLangType_ProgLangTypeSimName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeSimName,
        ProgLangType_ProgLangTypeId,
      );
      objFunctionTemplateRela.progLangTypeSimName = ProgLangType_ProgLangTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000112)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_CodeTypeSimName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_CodeTypeSimName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.codeTypeSimName) == true) {
      const CodeType_CodeTypeId = objFunctionTemplateRela.codeTypeId;
      const CodeType_CodeTypeSimName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeSimName,
        CodeType_CodeTypeId,
      );
      objFunctionTemplateRela.codeTypeSimName = CodeType_CodeTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000114)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_FuncCodeTypeId(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_FuncCodeTypeId.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.funcCodeTypeId) == true) {
      const vFunction4GeneCode_Sim_FuncId4GC = objFunctionTemplateRela.funcId4GC;
      const vFunction4GeneCode_Sim_FuncId4Code = await vFunction4GeneCode_SimEx_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        vFunction4GeneCode_Sim_FuncId4GC,
      );
      const vFunction4GeneCode_Sim_FuncCodeTypeId = await vFunction4GeneCode_SimEx_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId,
        vFunction4GeneCode_Sim_FuncId4Code,
      );
      objFunctionTemplateRela.funcCodeTypeId = vFunction4GeneCode_Sim_FuncCodeTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000174)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_FuncCodeTypeName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_FuncCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.funcCodeTypeName) == true) {
      const CodeType_CodeTypeId = objFunctionTemplateRela.funcCodeTypeId;
      const CodeType_CodeTypeName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeName,
        CodeType_CodeTypeId,
      );
      objFunctionTemplateRela.funcCodeTypeName = CodeType_CodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000173)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunctionTemplateRelaS:源对象
 **/
export async function FunctionTemplateRelaEx_FuncMap_CodeTypeName(
  objFunctionTemplateRela: clsFunctionTemplateRelaENEx,
) {
  const strThisFuncName = FunctionTemplateRelaEx_FuncMap_CodeTypeName.name;
  try {
    if (IsNullOrEmpty(objFunctionTemplateRela.codeTypeName) == true) {
      const CodeType_CodeTypeId = objFunctionTemplateRela.codeTypeId;
      const CodeType_CodeTypeName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeName,
        CodeType_CodeTypeId,
      );
      objFunctionTemplateRela.codeTypeName = CodeType_CodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000106)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      functionTemplateRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function FunctionTemplateRelaEx_GetObjLstByTemplateIdAndCodeTypeId(
  strFunctionTemplateId: string,
  strCodeTypeId: string,
): Promise<Array<clsFunctionTemplateRelaENEx>> {
  const strCondition = Format(
    "{0}='{1}' And {2}='{3}' order by {4}",
    clsFunctionTemplateRelaEN.con_FunctionTemplateId,
    strFunctionTemplateId,
    clsFunctionTemplateRelaEN.con_CodeTypeId,
    strCodeTypeId,
    clsFunctionTemplateRelaEN.con_OrderNum,
  );
  const arrFunctionTemplateRelaObjLst = await FunctionTemplateRela_GetObjLstAsync(strCondition);
  const arrFunctionTemplateRelaObjExLst = arrFunctionTemplateRelaObjLst.map(
    FunctionTemplateRelaEx_CopyToEx,
  );
  return arrFunctionTemplateRelaObjExLst;
}
