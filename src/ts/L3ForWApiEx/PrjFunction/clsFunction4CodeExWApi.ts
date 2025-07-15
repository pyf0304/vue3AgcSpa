import axios from 'axios';
import { vPrjTab_SimEx_GetObjByTabIdCache } from '../Table_Field/clsvPrjTab_SimExWApi';
import { vPrjTabKeyFldV2Ex_KeyFldIds } from '../Table_Field/clsvPrjTabKeyFldV2ExWApi';

import { PrjTabFldEx_GetPrimaryKeyObjLstByTabIdCache } from '../Table_Field/clsPrjTabFldExWApi';

import { FunctionType_func } from '../../L3ForWApi/PrjFunction/clsFunctionTypeWApi';
import { clsFunctionTypeEN, enumFunctionType } from '../../L0Entity/PrjFunction/clsFunctionTypeEN';
import { FuncAccessMode_func } from '../../L3ForWApi/PrjFunction/clsFuncAccessModeWApi';
import { clsFuncAccessModeEN } from '../../L0Entity/PrjFunction/clsFuncAccessModeEN';
import { FunctionPurpose_func } from '../../L3ForWApi/PrjFunction/clsFunctionPurposeWApi';
import { clsFunctionPurposeEN } from '../../L0Entity/PrjFunction/clsFunctionPurposeEN';
import { ApplicationType_func } from '../../L3ForWApi/GeneCode/clsApplicationTypeWApi';
import {
  clsApplicationTypeEN,
  enumApplicationType,
} from '../../L0Entity/GeneCode/clsApplicationTypeEN';
import { vFunction4Code_Func4GcCount_func } from '../../L3ForWApi/PrjFunction/clsvFunction4Code_Func4GcCountWApi';
import { clsvFunction4Code_Func4GcCountEN } from '../../L0Entity/PrjFunction/clsvFunction4Code_Func4GcCountEN';
import { vFeatureFuncRela_FeatureCountByCode_func } from '../../L3ForWApi/PrjFunction/clsvFeatureFuncRela_FeatureCountByCodeWApi';
import { clsvFeatureFuncRela_FeatureCountByCodeEN } from '../../L0Entity/PrjFunction/clsvFeatureFuncRela_FeatureCountByCodeEN';
import { vFuncParaRela_ParaNum_func } from '../../L3ForWApi/PrjFunction/clsvFuncParaRela_ParaNumWApi';
import { clsvFuncParaRela_ParaNumEN } from '../../L0Entity/PrjFunction/clsvFuncParaRela_ParaNumEN';

import { clsFunction4CodeENEx } from '../../L0Entity/PrjFunction/clsFunction4CodeENEx.js';

import { GetSortExpressInfo } from '../../PubFun/clsCommFunc4Web.js';
import { Format, IsNullOrEmpty } from '../../PubFun/clsString.js';
import { stuPagerPara } from '../../PubFun/stuPagerPara.js';
import { clsFunction4CodeEN } from '../../L0Entity/PrjFunction/clsFunction4CodeEN.js';
import { Storage } from '@/utils/Storage';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

import {
  Function4Code_GetObjLstByPagerAsync,
  Function4Code_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsFunction4CodeWApi';
import { enumProgLangType } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { FuncParaRelaEx_GetObjListByFuncId4CodeCacheEx } from '@/ts/L3ForWApiEx/PrjFunction/clsFuncParaRelaExWApi';
import { FuncPara4CodeEx_GetParaTypeName } from '@/ts/L3ForWApiEx/PrjFunction/clsFuncPara4CodeExWApi';
// import { FuncPara4Code_GetObjByFuncParaId4CodeCache } from '@/ts/L3ForWApi/PrjFunction/clsFuncPara4CodeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { usefuncPara4CodeStore } from '@/store/modules/funcPara4Code';
import { vFieldTab_Sim_GetObjByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';

// import { enumProgLangType } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';

export const function4CodeEx_Controller = 'Function4CodeExApi';
export const function4CodeEx_ConstructorName = 'function4CodeEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objFunction4CodeENS">源对象</param>
/// <param name = "objFunction4CodeENT">目标对象</param>
export function Function4CodeEx_CopyToEx(
  objFunction4CodeENS: clsFunction4CodeEN,
): clsFunction4CodeENEx {
  const objFunction4CodeENT = new clsFunction4CodeENEx();
  try {
    ObjectAssign(objFunction4CodeENT, objFunction4CodeENS);
    return objFunction4CodeENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objFunction4CodeENT;
  }
}
export async function Function4CodeEx_AccessFuncName(
  strFuncName: string,
  strTabId: string,
  strCmPrjId: string,
): Promise<string> {
  const objvPrjTab_Sim = await vPrjTab_SimEx_GetObjByTabIdCache(
    strTabId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvPrjTab_Sim == null) return strFuncName;
  let strKeyId = '';
  const strKeyFldIds = await vPrjTabKeyFldV2Ex_KeyFldIds(strTabId, strCmPrjId);
  let strKeyFldId = '';
  if (strKeyFldIds.indexOf(',') > -1) {
    strKeyFldId = strKeyFldIds.split(',')[0];
  } else {
    strKeyFldId = strKeyFldIds;
  }
  // const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  if (IsNullOrEmpty(strKeyFldId) == true) {
    const arrPrjTabFld = await PrjTabFldEx_GetPrimaryKeyObjLstByTabIdCache(strTabId);
    if (arrPrjTabFld.length == 0) return strFuncName;
    strKeyId = arrPrjTabFld[0].fldId;
  } else {
    strKeyId = strKeyFldId;
  }
  if (IsNullOrEmpty(strKeyId) == true) return strFuncName;
  const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(
    strKeyId,
    clsPrivateSessionStorage.currSelPrjId,
  );
  if (objvFieldTab_Sim == null) return strFuncName;
  if (strFuncName.indexOf('[Key]') >= 0) {
    strFuncName = strFuncName.replace('[Key]', objvFieldTab_Sim.fldName);
    return strFuncName;
  }
  if (strFuncName.indexOf('[FldName]') >= 0) {
    strFuncName = strFuncName.replace('[FldName]', objvFieldTab_Sim.fldName);
    return strFuncName;
  }
  if (strFuncName.indexOf('[tabName]') >= 0) {
    strFuncName = strFuncName.replace('[tabName]', objvPrjTab_Sim.tabName);
    return strFuncName;
  }
  return strFuncName;
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
export function Function4CodeEx_FuncMapByFldName(
  strFldName: string,
  objFunction4CodeEx: clsFunction4CodeENEx,
) {
  const strThisFuncName = Function4CodeEx_FuncMapByFldName.name;
  // console.log(objFunction4CodeEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFunction4CodeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFunction4CodeENEx.con_FuncTypeName:
      return Function4CodeEx_FuncMapFuncTypeName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_FuncAccessModeName:
      return Function4CodeEx_FuncMapFuncAccessModeName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_FuncPurposeName:
      return Function4CodeEx_FuncMapFuncPurposeName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_ApplicationTypeSimName:
      return Function4CodeEx_FuncMapApplicationTypeSimName(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_Func4GCCount:
      return Function4CodeEx_FuncMapFunc4GCCount(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_FeatureCount:
      return Function4CodeEx_FuncMapFeatureCount(objFunction4CodeEx);
    case clsFunction4CodeENEx.con_ParaNum:
      return Function4CodeEx_FuncMapParaNum(objFunction4CodeEx);
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
 * @param objFunction4CodeS:源对象
 **/
export async function Function4CodeEx_FuncMapFuncTypeName(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4CodeEx_FuncMapFuncTypeName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.funcTypeName) == true) {
      const FunctionTypeFuncTypeId = objFunction4Code.funcTypeId;
      const FunctionTypeFuncTypeName = await FunctionType_func(
        clsFunctionTypeEN.con_FuncTypeId,
        clsFunctionTypeEN.con_FuncTypeName,
        FunctionTypeFuncTypeId,
      );
      objFunction4Code.funcTypeName = FunctionTypeFuncTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000419)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4CodeEx_FuncMapFuncAccessModeName(
  objFunction4Code: clsFunction4CodeENEx,
) {
  const strThisFuncName = Function4CodeEx_FuncMapFuncAccessModeName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.funcAccessModeName) == true) {
      const FuncAccessModeFuncAccessModeId = objFunction4Code.funcAccessModeId;
      const FuncAccessModeFuncAccessModeName = await FuncAccessMode_func(
        clsFuncAccessModeEN.con_FuncAccessModeId,
        clsFuncAccessModeEN.con_FuncAccessModeName,
        FuncAccessModeFuncAccessModeId,
      );
      objFunction4Code.funcAccessModeName = FuncAccessModeFuncAccessModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000420)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4CodeEx_FuncMapFuncPurposeName(
  objFunction4Code: clsFunction4CodeENEx,
) {
  const strThisFuncName = Function4CodeEx_FuncMapFuncPurposeName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.funcPurposeName) == true) {
      const FunctionPurposeFuncPurposeId = objFunction4Code.funcPurposeId;
      const FunctionPurposeFuncPurposeName = await FunctionPurpose_func(
        clsFunctionPurposeEN.con_FuncPurposeId,
        clsFunctionPurposeEN.con_FuncPurposeName,
        FunctionPurposeFuncPurposeId,
      );
      objFunction4Code.funcPurposeName = FunctionPurposeFuncPurposeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000421)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4CodeEx_FuncMapApplicationTypeSimName(
  objFunction4Code: clsFunction4CodeENEx,
) {
  const strThisFuncName = Function4CodeEx_FuncMapApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objFunction4Code.applicationTypeSimName) == true) {
      const ApplicationTypeApplicationTypeId = objFunction4Code.applicationTypeId;
      const ApplicationTypeApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationTypeApplicationTypeId.toString(),
      );
      objFunction4Code.applicationTypeSimName = ApplicationTypeApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000287)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4CodeEx_FuncMapFunc4GCCount(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4CodeEx_FuncMapFunc4GCCount.name;
  try {
    if (objFunction4Code.func4GCCount == 0) {
      const vFunction4CodeFunc4GcCountFuncId4Code = objFunction4Code.funcId4Code;
      const vFunction4CodeFunc4GcCountFunc4GCCount = await vFunction4Code_Func4GcCount_func(
        clsvFunction4Code_Func4GcCountEN.con_FuncId4Code,
        clsvFunction4Code_Func4GcCountEN.con_Func4GCCount,
        vFunction4CodeFunc4GcCountFuncId4Code,
      );
      objFunction4Code.func4GCCount = vFunction4CodeFunc4GcCountFunc4GCCount;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000422)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4CodeEx_FuncMapFeatureCount(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4CodeEx_FuncMapFeatureCount.name;
  try {
    if (objFunction4Code.featureCount == 0) {
      const vFeatureFuncRelaFeatureCountByCodeFuncId4Code = objFunction4Code.funcId4Code;
      const vFeatureFuncRelaFeatureCountByCodeFeatureCount =
        await vFeatureFuncRela_FeatureCountByCode_func(
          clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code,
          clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount,
          vFeatureFuncRelaFeatureCountByCodeFuncId4Code,
          objFunction4Code.applicationTypeId,
        );
      objFunction4Code.featureCount = vFeatureFuncRelaFeatureCountByCodeFeatureCount;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000423)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objFunction4CodeS:源对象
 **/
export async function Function4CodeEx_FuncMapParaNum(objFunction4Code: clsFunction4CodeENEx) {
  const strThisFuncName = Function4CodeEx_FuncMapParaNum.name;
  try {
    if (objFunction4Code.paraNum == 0) {
      const vFuncParaRelaParaNumFuncId4Code = objFunction4Code.funcId4Code;
      const vFuncParaRelaParaNumParaNum = await vFuncParaRela_ParaNum_func(
        clsvFuncParaRela_ParaNumEN.con_FuncId4Code,
        clsvFuncParaRela_ParaNumEN.con_ParaNum,
        vFuncParaRelaParaNumFuncId4Code,
      );
      objFunction4Code.paraNum = vFuncParaRelaParaNumParaNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000424)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function Function4CodeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunction4CodeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrFunction4CodeObjLst = await Function4Code_GetObjLstByPagerAsync(objPagerPara);
  const arrFunction4CodeExObjLst = arrFunction4CodeObjLst.map(Function4CodeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFunction4CodeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrFunction4CodeExObjLst) {
      await Function4CodeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrFunction4CodeExObjLst.length == 0) return arrFunction4CodeExObjLst;
  let arrFunction4CodeSel: Array<clsFunction4CodeENEx> = arrFunction4CodeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFunction4CodeSel = arrFunction4CodeSel.sort(
        Function4CodeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFunction4CodeSel = arrFunction4CodeSel.sort(objPagerPara.sortFun);
    }

    return arrFunction4CodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      function4CodeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunction4CodeENEx>();
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
export function Function4CodeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunction4CodeENEx.con_FuncTypeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.funcTypeName.localeCompare(b.funcTypeName);
        };
      case clsFunction4CodeENEx.con_FuncAccessModeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.funcAccessModeName.localeCompare(b.funcAccessModeName);
        };
      case clsFunction4CodeENEx.con_FuncPurposeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.funcPurposeName.localeCompare(b.funcPurposeName);
        };
      case clsFunction4CodeENEx.con_ApplicationTypeSimName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsFunction4CodeENEx.con_Func4GCCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.func4GCCount - b.func4GCCount;
        };
      case clsFunction4CodeENEx.con_FeatureCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.featureCount - b.featureCount;
        };
      case clsFunction4CodeENEx.con_ParaNum:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return a.paraNum - b.paraNum;
        };
      default:
        return Function4Code_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFunction4CodeENEx.con_FuncTypeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.funcTypeName.localeCompare(a.funcTypeName);
        };
      case clsFunction4CodeENEx.con_FuncAccessModeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.funcAccessModeName.localeCompare(a.funcAccessModeName);
        };
      case clsFunction4CodeENEx.con_FuncPurposeName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.funcPurposeName.localeCompare(a.funcPurposeName);
        };
      case clsFunction4CodeENEx.con_ApplicationTypeSimName:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsFunction4CodeENEx.con_Func4GCCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.func4GCCount - a.func4GCCount;
        };
      case clsFunction4CodeENEx.con_FeatureCount:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.featureCount - a.featureCount;
        };
      case clsFunction4CodeENEx.con_ParaNum:
        return (a: clsFunction4CodeENEx, b: clsFunction4CodeENEx) => {
          return b.paraNum - a.paraNum;
        };
      default:
        return Function4Code_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/// <summary>
/// 获取函数签名
/// </summary>
/// <param name = "objFunction4CodeEN">函数对象</param>
/// <returns>函数签名</returns>
export async function Function4CodeEx_GetFunctionSignature(
  objFunction4CodeEN: clsFunction4CodeEN,
  strProgLangTypeId = '',
) {
  const funcPara4CodeStore = usefuncPara4CodeStore();
  if (IsNullOrEmpty(strProgLangTypeId) == true) strProgLangTypeId = enumProgLangType.CSharp_01;
  let arrFuncParaRela = await FuncParaRelaEx_GetObjListByFuncId4CodeCacheEx(
    objFunction4CodeEN.funcId4Code,
  );
  let sbParaList = ''; //new StringBuilder();
  if (arrFuncParaRela != null) {
    arrFuncParaRela = arrFuncParaRela.sort((x) => x.orderNum);

    for (const objInFor of arrFuncParaRela) {
      try {
        const objFuncPara4Code = await funcPara4CodeStore.getObj(objInFor.funcParaId4Code);
        if (objFuncPara4Code == null) continue;
        if (objFuncPara4Code.dataTypeId == '') continue;
        let strParameterType = await FuncPara4CodeEx_GetParaTypeName(
          objFuncPara4Code,
          strProgLangTypeId,
        );
        switch (objFunction4CodeEN.applicationTypeId) {
          case enumApplicationType.WebApp_2:
          case enumApplicationType.PubApp4WinWeb_7:
            if (strParameterType == 'Int32') strParameterType = 'int';
            break;
        }

        if (objFuncPara4Code.isByRef == true) {
          sbParaList += Format('ref {0} {1}, ', strParameterType, objFuncPara4Code.paraName);
        } else {
          sbParaList += Format('{0} {1}, ', strParameterType, objFuncPara4Code.paraName);
        }
      } catch (objEx) {
        console.error(objEx);
        continue;
      }
    }
    if (sbParaList.length > 2) {
      // sbParaList.remove(sbParaList.length - 2, 2);
      sbParaList = sbParaList.substring(0, sbParaList.length - 2);
    }
  }
  let strFunctionSignature = Format(
    '{0}({1})',
    objFunction4CodeEN.funcName4Code,
    sbParaList.toString(),
  );
  if (objFunction4CodeEN.funcTypeId == enumFunctionType.GenericFunctions_14) {
    strFunctionSignature = Format(
      '{0}[T]({1})',
      objFunction4CodeEN.funcName4Code,
      sbParaList.toString(),
    );
  } else if (objFunction4CodeEN.funcTypeId == enumFunctionType.PureStaticFunction_12) {
    strFunctionSignature = Format(
      '{0}(this {1})',
      objFunction4CodeEN.funcName4Code,
      sbParaList.toString(),
    );
  }
  return strFunctionSignature;
}

/// <summary>
/// 获取函数签名
/// </summary>
/// <param name = "objFunction4CodeEN">函数对象</param>
/// <returns>函数签名</returns>
export async function GetFunctionSignatureSim(
  objFunction4CodeEN: clsFunction4CodeEN,
  strProgLangTypeId = '',
) {
  const funcPara4CodeStore = usefuncPara4CodeStore();
  //                    e.Row.Attributes.Add("onclick", "alert('onclick')");
  //e.Row.Attributes["class"] = "text-muted bg-info";
  //e.Row.CssClass = "text-muted bg-info";

  if (IsNullOrEmpty(strProgLangTypeId) == true) strProgLangTypeId = enumProgLangType.CSharp_01;
  let arrFuncParaRela = await FuncParaRelaEx_GetObjListByFuncId4CodeCacheEx(
    objFunction4CodeEN.funcId4Code,
  );
  let sbParaList = '';
  if (arrFuncParaRela != null) {
    arrFuncParaRela = arrFuncParaRela.sort((x) => x.orderNum);

    for (const objInFor of arrFuncParaRela) {
      const objFuncPara4Code = await funcPara4CodeStore.getObj(objInFor.funcParaId4Code);
      if (objFuncPara4Code == null) continue;
      //string strProgLangTypeId = objCodeType.ProgLangTypeId;
      let strParameterType = await FuncPara4CodeEx_GetParaTypeName(
        objFuncPara4Code,
        strProgLangTypeId,
      );
      switch (objFunction4CodeEN.applicationTypeId) {
        case enumApplicationType.WebApp_2:
        case enumApplicationType.PubApp4WinWeb_7:
          if (strParameterType == 'Int32') strParameterType = 'int';
          break;
      }
      if (objFuncPara4Code.isByRef == true) {
        sbParaList += Format('ref {0}, ', strParameterType, objFuncPara4Code.paraName);
      } else {
        sbParaList += Format('{0}, ', strParameterType, objFuncPara4Code.paraName);
      }
    }
    sbParaList = sbParaList.substring(0, sbParaList.length - 2);
  }
  let strFunctionSignature = Format(
    '{0}({1})',
    objFunction4CodeEN.funcName4Code,
    sbParaList.toString(),
  );
  if (objFunction4CodeEN.funcTypeId == enumFunctionType.GenericFunctions_14) {
    strFunctionSignature = Format(
      '{0}[T]({1})',
      objFunction4CodeEN.funcName4Code,
      sbParaList.toString(),
    );
  } else if (objFunction4CodeEN.funcTypeId == enumFunctionType.PureStaticFunction_12) {
    strFunctionSignature = Format(
      '{0}(this {1})',
      objFunction4CodeEN.funcName4Code,
      sbParaList.toString(),
    );
  }
  return strFunctionSignature;
}

/**
 * 生成函数代码4Class
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strClassName: 类名
 * @param strCodeTypeId: 代码类型Id
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function Function4CodeEx_GeneCode4Class(
  strClassName: string,
  strCodeTypeId: string,
  strPrjId: string,
): Promise<string> {
  const strThisFuncName = Function4CodeEx_GeneCode4Class.name;
  const strAction = 'GeneCode4Class';
  const strUrl = Function4CodeEx_GetWebApiUrl(function4CodeEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strClassName,
      strCodeTypeId,
      strPrjId,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        function4CodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        function4CodeEx_ConstructorName,
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function Function4CodeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 生成函数代码V2
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strWorkFlowId: 工作流Id
 * @param strFuncId4Code: 函数Id4Code
 * @param strCodeTypeId: 代码类型Id
 * @returns 获取的相应对象列表
 */
export async function Function4CodeEx_GeneCodeV2(
  strWorkFlowId: string,
  strFuncId4Code: string,
  strCodeTypeId: string,
): Promise<string> {
  const strThisFuncName = Function4CodeEx_GeneCodeV2.name;
  const strAction = 'GeneCodeV2';
  const strUrl = Function4CodeEx_GetWebApiUrl(function4CodeEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWorkFlowId,
      strFuncId4Code,
      strCodeTypeId,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        function4CodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        function4CodeEx_ConstructorName,
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
 * 计算函数签名
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strFuncId4Code: 函数Id4Code
 * @returns 获取的相应对象列表
 */
export async function Function4CodeEx_CalcFunctionSignature(
  strFuncId4Code: string,
): Promise<boolean> {
  const strThisFuncName = Function4CodeEx_CalcFunctionSignature.name;
  const strAction = 'CalcFunctionSignature';
  const strUrl = Function4CodeEx_GetWebApiUrl(function4CodeEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        function4CodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        function4CodeEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
