import {
  vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx,
  vFunction4GeneCode_SimEx_SortFunByKey,
} from './clsvFunction4GeneCode_SimExWApi';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import { clsFunction4GeneCodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { BindDdl_ObjLstInDivObj_V, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import {
  Function4GeneCode_GetObjLstByPagerAsync,
  Function4GeneCode_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsFunction4GeneCodeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vFunction4GeneCode_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4GeneCode_SimWApi';
import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';
import { FunctionTemplateRelaEx_GetFuncId4GCLstByFunctionTemplateIdAndCodeTypeIdCache } from '@/ts/L3ForWApiEx/PrjFunction/clsFunctionTemplateRelaExWApi';
import { vPrjFeatureSim_func } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi.js';
import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN.js';
import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN.js';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi.js';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { vFunction4Code_Sim_func } from '@/ts/L3ForWApi/PrjFunction/clsvFunction4Code_SimWApi';
import { clsvFunction4Code_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimEN';
import { clsFunctionTypeEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTypeEN';
import { FunctionType_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTypeWApi';
import { FuncGCType_func } from '@/ts/L3ForWApi/PrjFunction/clsFuncGCTypeWApi';
import { clsFuncGCTypeEN } from '@/ts/L0Entity/PrjFunction/clsFuncGCTypeEN';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
export const function4GeneCodeEx_Controller = 'Function4GeneCodeExApi';
export const function4GeneCodeEx_ConstructorName = 'function4GeneCodeEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFunction4GeneCodeENS">源对象</param>
/// <param name = "objFunction4GeneCodeENT">目标对象</param>
export function Function4GeneCodeEx_CopyToEx(
  objFunction4GeneCodeENS: clsFunction4GeneCodeEN,
): clsFunction4GeneCodeENEx {
  const objFunction4GeneCodeENT = new clsFunction4GeneCodeENEx();
  try {
    ObjectAssign(objFunction4GeneCodeENT, objFunction4GeneCodeENS);
    return objFunction4GeneCodeENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFunction4GeneCodeENT;
  }
}

export async function Function4GeneCodeEx_GetObjLstByFunctionTemplateIdCache(
  strCodeTypeId: string,
  strFunctionTemplateId: string,
  strSqlDsTypeId: string,
) {
  const strWhere0 = `${clsFunctionTemplateRelaEN.con_FuncCodeTypeId}='${strCodeTypeId}' and ${clsFunctionTemplateRelaEN.con_FunctionTemplateId}='${strFunctionTemplateId}' `;
  const strWhere1 = `${clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId} in (select ${clsFunctionTemplateRelaEN.con_CodeTypeId} from ${clsFunctionTemplateRelaEN._CurrTabName} where ${strWhere0})`;

  const arrFunction4GeneCodeObjList = await vFunction4GeneCode_Sim_GetObjLstAsync(strWhere1);

  const arrFuncId4Gc =
    await FunctionTemplateRelaEx_GetFuncId4GCLstByFunctionTemplateIdAndCodeTypeIdCache(
      strFunctionTemplateId,
      strCodeTypeId,
    );
  for (const strFuncId4Gc of arrFuncId4Gc) {
    if (arrFunction4GeneCodeObjList.find((x) => x.funcId4GC == strFuncId4Gc) == null) {
      await vFunction4GeneCode_SimEx_GetObjByFuncId4GCCacheEx(strFuncId4Gc);
    }
  }
  const arrSqlDsTypeIdLst = ['00', strSqlDsTypeId];

  const arrFunction4GeneCodeObjList_Sel = arrFunction4GeneCodeObjList.filter(
    (x) => arrFuncId4Gc.indexOf(x.funcId4GC) > -1 && arrSqlDsTypeIdLst.indexOf(x.sqlDsTypeId) > -1,
  );

  return arrFunction4GeneCodeObjList_Sel;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-01-19
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function Function4GeneCodeEx_SortFunByFuncName(
  a: clsFunction4GeneCodeEN,
  b: clsFunction4GeneCodeEN,
): number {
  // const strThisFuncName = 'SortFunDefa';
  return a.funcName.localeCompare(b.funcName);
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strCodeTypeId:代码类型Id
 */
export async function Function4GeneCodeEx_BindDdl_FuncId4GCByCodeTypeIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strCodeTypeId: string,
) {
  // const strThisFuncName = 'Function4GeneCodeEx_BindDdl_FuncId4GCByCodeTypeIdInDivCache';

  if (IsNullOrEmpty(strCodeTypeId) == true) {
    const strMsg = Format('参数:[strCodeTypeId]不能为空！(In BindDdl_FuncId4GCByCodeTypeIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeTypeId.length != 4) {
    const strMsg = Format('缓存分类变量:[strCodeTypeId]的长度:[{0}]不正确！', strCodeTypeId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在！(In BindDdl_FuncId4GCByCodeTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncId4GCByCodeTypeIdInDivCache");
  const strWhereCond = `${clsvFunction4GeneCode_SimEN.con_FuncCodeTypeId}='${strCodeTypeId}'`;
  let arrObjLst_Sel = await vFunction4GeneCode_Sim_GetObjLstAsync(strWhereCond);
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.sort(
    vFunction4GeneCode_SimEx_SortFunByKey(clsvFunction4GeneCode_SimEN.con_FuncName, 'Asc'),
  );
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsFunction4GeneCodeEN.con_FuncId4GC,
    clsFunction4GeneCodeEN.con_FuncName,
    '函数4GeneCode',
  );
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function Function4GeneCodeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunction4GeneCodeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFunction4GeneCodeObjLst = await Function4GeneCode_GetObjLstByPagerAsync(objPagerPara);
  const arrFunction4GeneCodeExObjLst = arrFunction4GeneCodeObjLst.map(Function4GeneCodeEx_CopyToEx);
  if (arrFunction4GeneCodeExObjLst.length == 0) return arrFunction4GeneCodeExObjLst;
  let arrFunction4GeneCodeSel: Array<clsFunction4GeneCodeENEx> = arrFunction4GeneCodeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFunction4GeneCodeSel = arrFunction4GeneCodeSel.sort(
        Function4GeneCodeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFunction4GeneCodeSel = arrFunction4GeneCodeSel.sort(objPagerPara.sortFun);
    }
    return arrFunction4GeneCodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunction4GeneCodeENEx>();
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
export function Function4GeneCodeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunction4GeneCodeENEx.con_CodeTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncName4Code:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsFunction4GeneCodeENEx.con_FuncTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncGCTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.funcGCTypeName === null && b.funcGCTypeName === null) return 0;
          if (a.funcGCTypeName === null) return -1;
          if (b.funcGCTypeName === null) return 1;
          return a.funcGCTypeName.localeCompare(b.funcGCTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ProgLangTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsFunction4GeneCodeENEx.con_SqlDsTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ParentFeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.parentFeatureName === null && b.parentFeatureName === null) return 0;
          if (a.parentFeatureName === null) return -1;
          if (b.parentFeatureName === null) return 1;
          return a.parentFeatureName.localeCompare(b.parentFeatureName);
        };
      case clsFunction4GeneCodeENEx.con_FeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      default:
        return Function4GeneCode_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFunction4GeneCodeENEx.con_CodeTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncName4Code:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsFunction4GeneCodeENEx.con_FuncTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsFunction4GeneCodeENEx.con_FuncGCTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.funcGCTypeName === null && b.funcGCTypeName === null) return 0;
          if (a.funcGCTypeName === null) return 1;
          if (b.funcGCTypeName === null) return -1;
          return b.funcGCTypeName.localeCompare(a.funcGCTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ProgLangTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsFunction4GeneCodeENEx.con_SqlDsTypeName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsFunction4GeneCodeENEx.con_ParentFeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          if (a.parentFeatureName === null && b.parentFeatureName === null) return 0;
          if (a.parentFeatureName === null) return 1;
          if (b.parentFeatureName === null) return -1;
          return b.parentFeatureName.localeCompare(a.parentFeatureName);
        };
      case clsFunction4GeneCodeENEx.con_FeatureName:
        return (a: clsFunction4GeneCodeENEx, b: clsFunction4GeneCodeENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      default:
        return Function4GeneCode_SortFunByKey(strKey, AscOrDesc);
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
export function Function4GeneCodeEx_FuncMapByFldName(
  strFldName: string,
  objFunction4GeneCodeEx: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFunction4GeneCodeEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFunction4GeneCodeENEx.con_CodeTypeName:
      return Function4GeneCodeEx_FuncMapCodeTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FuncName4Code:
      return Function4GeneCodeEx_FuncMapFuncName4Code(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FuncTypeName:
      return Function4GeneCodeEx_FuncMapFuncTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FuncGCTypeName:
      return Function4GeneCodeEx_FuncMapFuncGCTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_ProgLangTypeName:
      return Function4GeneCodeEx_FuncMapProgLangTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_SqlDsTypeName:
      return Function4GeneCodeEx_FuncMapSqlDsTypeName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_ParentFeatureName:
      return Function4GeneCodeEx_FuncMapParentFeatureName(objFunction4GeneCodeEx);
    case clsFunction4GeneCodeENEx.con_FeatureName:
      return Function4GeneCodeEx_FuncMapFeatureName(objFunction4GeneCodeEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapCodeTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.codeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objFunction4GeneCode.funcCodeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objFunction4GeneCode.codeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001228)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapFuncName4Code(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapFuncName4Code.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.funcName4Code) == true) {
      const vFunction4CodeSimFuncId4Code = objFunction4GeneCode.funcId4Code;
      const vFunction4CodeSimFuncName4Code = await vFunction4Code_Sim_func(
        clsvFunction4Code_SimEN.con_FuncId4Code,
        clsvFunction4Code_SimEN.con_FuncName4Code,
        vFunction4CodeSimFuncId4Code,
      );
      objFunction4GeneCode.funcName4Code = vFunction4CodeSimFuncName4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001252)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapFuncTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapFuncTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.funcTypeName) == true) {
      const FunctionTypeFuncTypeId = objFunction4GeneCode.funcTypeId;
      const FunctionTypeFuncTypeName = await FunctionType_func(
        clsFunctionTypeEN.con_FuncTypeId,
        clsFunctionTypeEN.con_FuncTypeName,
        FunctionTypeFuncTypeId,
      );
      objFunction4GeneCode.funcTypeName = FunctionTypeFuncTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001240)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapFuncGCTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapFuncGCTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.funcGCTypeName) == true) {
      const FuncGCTypeFuncGCTypeId = objFunction4GeneCode.funcGCTypeId;
      const FuncGCTypeFuncGCTypeName = await FuncGCType_func(
        clsFuncGCTypeEN.con_FuncGCTypeId,
        clsFuncGCTypeEN.con_FuncGCTypeName,
        FuncGCTypeFuncGCTypeId,
      );
      objFunction4GeneCode.funcGCTypeName = FuncGCTypeFuncGCTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001518)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapProgLangTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.progLangTypeName) == true) {
      const ProgLangTypeProgLangTypeId = objFunction4GeneCode.progLangTypeId;
      const ProgLangTypeProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangTypeProgLangTypeId,
      );
      objFunction4GeneCode.progLangTypeName = ProgLangTypeProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001231)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapSqlDsTypeName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapSqlDsTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.sqlDsTypeName) == true) {
      const SQLDSTypeSqlDsTypeId = objFunction4GeneCode.sqlDsTypeId;
      const SQLDSTypeSqlDsTypeName = await SQLDSType_func(
        clsSQLDSTypeEN.con_SqlDsTypeId,
        clsSQLDSTypeEN.con_SqlDsTypeName,
        SQLDSTypeSqlDsTypeId,
      );
      objFunction4GeneCode.sqlDsTypeName = SQLDSTypeSqlDsTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001149)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapParentFeatureName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapParentFeatureName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.parentFeatureName) == true) {
      const vPrjFeatureSimFeatureId = objFunction4GeneCode.featureId;
      const vPrjFeatureSimParentFeatureName = await vPrjFeatureSim_func(
        clsvPrjFeatureSimEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_ParentFeatureName,
        vPrjFeatureSimFeatureId,
      );
      objFunction4GeneCode.parentFeatureName = vPrjFeatureSimParentFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001178)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4GeneCodeS:源对象
 **/
export async function Function4GeneCodeEx_FuncMapFeatureName(
  objFunction4GeneCode: clsFunction4GeneCodeENEx,
) {
  const strThisFuncName = Function4GeneCodeEx_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objFunction4GeneCode.featureName) == true) {
      const vPrjFeatureSimFeatureId = objFunction4GeneCode.featureId;
      const vPrjFeatureSimFeatureName = await vPrjFeatureSim_func(
        clsvPrjFeatureSimEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_FeatureName,
        vPrjFeatureSimFeatureId,
      );
      objFunction4GeneCode.featureName = vPrjFeatureSimFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001177)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4GeneCodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
