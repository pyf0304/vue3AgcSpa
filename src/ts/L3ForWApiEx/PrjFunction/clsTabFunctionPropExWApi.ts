import axios from 'axios';
import { vPrjTab_SimEx_func } from '../Table_Field/clsvPrjTab_SimExWApi';
import { FunctionTemplateRelaEx_GetObjLstByTemplateIdAndCodeTypeId } from './clsFunctionTemplateRelaExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { clsMethodModifierEN } from '@/ts/L0Entity/PrjFunction/clsMethodModifierEN';
import { clsTabFunctionPropEN } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropEN';
import { clsTabFunctionPropENEx } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropENEx';

import { clsvFunction4GeneCode_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4GeneCode_SimEN';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';

import { FunctionTemplate_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { MethodModifier_func } from '@/ts/L3ForWApi/PrjFunction/clsMethodModifierWApi';
import {
  TabFunctionProp_GetObjLstCache,
  TabFunctionProp_SortFunByKey,
} from '@/ts/L3ForWApi/PrjFunction/clsTabFunctionPropWApi';

import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { usevFunction4Code_SimStore } from '@/store/modules/vFunction4Code_Sim';
import { vFunction4GeneCode_SimEx_func } from '@/ts/L3ForWApiEx/PrjFunction/clsvFunction4GeneCode_SimExWApi';

export const tabFunctionPropEx_Controller = 'TabFunctionPropExApi';
export const tabFunctionPropEx_ConstructorName = 'tabFunctionPropEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objTabFunctionPropENS">源对象</param>
/// <param name = "objTabFunctionPropENT">目标对象</param>
export function TabFunctionPropEx_CopyToEx(
  objTabFunctionPropENS: clsTabFunctionPropEN,
): clsTabFunctionPropENEx {
  const objTabFunctionPropENT = new clsTabFunctionPropENEx();
  try {
    ObjectAssign(objTabFunctionPropENT, objTabFunctionPropENS);
    return objTabFunctionPropENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objTabFunctionPropENT;
  }
}

/// <summary>
/// 扩展删除函数属性
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "lngMid">lngMid</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>获取的相应对象列表</returns>
export async function TabFunctionPropEx_DelRecordEx(
  lngMid: number,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = TabFunctionPropEx_DelRecordEx.name;

  const strAction = 'DelRecordEx';
  const strUrl = GetWebApiUrl(tabFunctionPropEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('lngMid', lngMid);
  // mapParam.add('strPrjId', strPrjId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngMid,
      strPrjId,
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
        tabFunctionPropEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        tabFunctionPropEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export function TabFunctionPropEx_SortFunByFuncName(
  a: clsTabFunctionPropENEx,
  b: clsTabFunctionPropENEx,
): number {
  return a.funcName.localeCompare(b.funcName);
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
export function TabFunctionPropEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFunctionPropENEx.con_TabName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsTabFunctionPropENEx.con_FunctionTemplateName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeENName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.codeTypeENName.localeCompare(b.codeTypeENName);
        };
      case clsTabFunctionPropENEx.con_FuncName4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsTabFunctionPropENEx.con_ProgLangTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsTabFunctionPropENEx.con_MethodModifierName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.methodModifierName.localeCompare(b.methodModifierName);
        };
      case clsTabFunctionPropENEx.con_FuncId4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsTabFunctionPropENEx.con_FuncName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return a.funcName.localeCompare(b.funcName);
        };
      default:
        return TabFunctionProp_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsTabFunctionPropENEx.con_TabName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsTabFunctionPropENEx.con_FunctionTemplateName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsTabFunctionPropENEx.con_CodeTypeENName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.codeTypeENName.localeCompare(a.codeTypeENName);
        };
      case clsTabFunctionPropENEx.con_FuncName4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsTabFunctionPropENEx.con_ProgLangTypeName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsTabFunctionPropENEx.con_MethodModifierName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.methodModifierName.localeCompare(a.methodModifierName);
        };
      case clsTabFunctionPropENEx.con_FuncId4Code:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsTabFunctionPropENEx.con_FuncName:
        return (a: clsTabFunctionPropENEx, b: clsTabFunctionPropENEx) => {
          return b.funcName.localeCompare(a.funcName);
        };
      default:
        return TabFunctionProp_SortFunByKey(strKey, AscOrDesc);
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
export function TabFunctionPropEx_FuncMapByFldName(
  strFldName: string,
  objTabFunctionPropEx: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsTabFunctionPropEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsTabFunctionPropENEx.con_FuncName:
      return TabFunctionPropEx_FuncMap_FuncName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_TabName:
      return TabFunctionPropEx_FuncMap_TabName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_FunctionTemplateName:
      return TabFunctionPropEx_FuncMap_FunctionTemplateName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_CodeTypeName:
      return TabFunctionPropEx_FuncMap_CodeTypeName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_CodeTypeENName:
      return TabFunctionPropEx_FuncMap_CodeTypeENName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_FuncName4Code:
      return TabFunctionPropEx_FuncMap_FuncName4Code(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_ProgLangTypeName:
      return TabFunctionPropEx_FuncMap_ProgLangTypeName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_MethodModifierName:
      return TabFunctionPropEx_FuncMap_MethodModifierName(objTabFunctionPropEx);
    case clsTabFunctionPropENEx.con_FuncId4Code:
      return TabFunctionPropEx_FuncMap_FuncId4Code(objTabFunctionPropEx);
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
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_TabName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.tabName) == true) {
      const vPrjTab_Sim_TabId = objTabFunctionProp.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objTabFunctionProp.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_FunctionTemplateName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_FunctionTemplateName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.functionTemplateName) == true) {
      const FunctionTemplate_FunctionTemplateId = objTabFunctionProp.functionTemplateId;
      const FunctionTemplate_FunctionTemplateName = await FunctionTemplate_func(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        clsFunctionTemplateEN.con_FunctionTemplateName,
        FunctionTemplate_FunctionTemplateId,
      );
      objTabFunctionProp.functionTemplateName = FunctionTemplate_FunctionTemplateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000105)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_CodeTypeName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_CodeTypeName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.codeTypeName) == true) {
      const CodeType_CodeTypeId = objTabFunctionProp.codeTypeId;
      const CodeType_CodeTypeName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeName,
        CodeType_CodeTypeId,
      );
      objTabFunctionProp.codeTypeName = CodeType_CodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000106)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_CodeTypeENName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_CodeTypeENName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.codeTypeENName) == true) {
      const CodeType_CodeTypeId = objTabFunctionProp.codeTypeId;
      const CodeType_CodeTypeENName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeENName,
        CodeType_CodeTypeId,
      );
      objTabFunctionProp.codeTypeENName = CodeType_CodeTypeENName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000107)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_FuncName4Code(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_FuncName4Code.name;
  const vFunction4Code_SimStore = usevFunction4Code_SimStore();
  try {
    if (IsNullOrEmpty(objTabFunctionProp.funcName4Code) == true) {
      const vFunction4GeneCode_Sim_FuncId4GC = objTabFunctionProp.funcId4GC;
      const vFunction4GeneCode_Sim_FuncId4Code = await vFunction4GeneCode_SimEx_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        vFunction4GeneCode_Sim_FuncId4GC,
      );
      const vFunction4Code_Sim_FuncName4Code = await vFunction4Code_SimStore.getName(
        vFunction4GeneCode_Sim_FuncId4Code,
      );
      objTabFunctionProp.funcName4Code = vFunction4Code_Sim_FuncName4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000108)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_ProgLangTypeName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_ProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.progLangTypeName) == true) {
      const CodeType_CodeTypeId = objTabFunctionProp.codeTypeId;
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      );
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId;
      const ProgLangType_ProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangType_ProgLangTypeId,
      );
      objTabFunctionProp.progLangTypeName = ProgLangType_ProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000109)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_MethodModifierName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_MethodModifierName.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.methodModifierName) == true) {
      const MethodModifier_MethodModifierId = objTabFunctionProp.methodModifierId;
      const MethodModifier_MethodModifierName = await MethodModifier_func(
        clsMethodModifierEN.con_MethodModifierId,
        clsMethodModifierEN.con_MethodModifierName,
        MethodModifier_MethodModifierId,
      );
      objTabFunctionProp.methodModifierName = MethodModifier_MethodModifierName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000110)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objTabFunctionPropS:源对象
 **/
export async function TabFunctionPropEx_FuncMap_FuncId4Code(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_FuncId4Code.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.funcId4Code) == true) {
      const vFunction4GeneCode_Sim_FuncId4GC = objTabFunctionProp.funcId4GC;
      const vFunction4GeneCode_Sim_FuncId4Code = await vFunction4GeneCode_SimEx_func(
        clsvFunction4GeneCode_SimEN.con_FuncId4GC,
        clsvFunction4GeneCode_SimEN.con_FuncId4Code,
        vFunction4GeneCode_Sim_FuncId4GC,
      );
      objTabFunctionProp.funcId4Code = vFunction4GeneCode_Sim_FuncId4Code;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000111)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function TabFunctionPropEx_FuncMap_FuncName(
  objTabFunctionProp: clsTabFunctionPropENEx,
) {
  const strThisFuncName = TabFunctionPropEx_FuncMap_FuncId4Code.name;
  try {
    if (IsNullOrEmpty(objTabFunctionProp.funcName) == true) {
      const Function4GeneCode_FuncId4GC = objTabFunctionProp.funcId4GC;

      const Function4GeneCode_FuncName = await vFunction4GeneCode_SimEx_func(
        clsFunction4GeneCodeEN.con_FuncId4GC,
        clsFunction4GeneCodeEN.con_FuncName,
        Function4GeneCode_FuncId4GC,
      );
      objTabFunctionProp.funcName = Function4GeneCode_FuncName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000111)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/// <summary>
/// 把同一个类的对象,复制到另一个对象
/// (AutoGCLib.BusinessLogicEx4CSharp:Gen_4BLEx_Static_CopyToEx)
/// </summary>
/// <param name = "objvTabFunctionPropENS">源对象</param>
/// <returns>目标对象=>clsvTabFunctionPropEN:objvTabFunctionPropENT</returns>
export function TabFunctionPropEx_GetObjByFunctionTempRela(
  objvFunctionTemplateRelaENS: clsFunctionTemplateRelaENEx,
): clsTabFunctionPropENEx {
  const strThisFuncName = TabFunctionPropEx_GetObjByFunctionTempRela.name;
  try {
    const objvTabFunctionPropENT = new clsTabFunctionPropENEx();
    objvTabFunctionPropENT.mId = objvFunctionTemplateRelaENS.mId; //mId
    //objvTabFunctionPropENT.TabId = objvFunctionTemplateRelaENS.TabId; //表ID
    //objvTabFunctionPropENT.TabName = objvFunctionTemplateRelaENS.TabName; //表名
    //objvTabFunctionPropENT.TabCnName = objvFunctionTemplateRelaENS.TabCnName; //表中文名
    objvTabFunctionPropENT.functionTemplateId = objvFunctionTemplateRelaENS.functionTemplateId; //函数模板Id
    objvTabFunctionPropENT.functionTemplateName = objvFunctionTemplateRelaENS.functionTemplateName; //函数模板名
    objvTabFunctionPropENT.codeTypeId = objvFunctionTemplateRelaENS.codeTypeId; //代码类型Id
    objvTabFunctionPropENT.codeTypeName = objvFunctionTemplateRelaENS.codeTypeName; //代码类型名
    //objvTabFunctionPropENT.codeTypeENName = objvFunctionTemplateRelaENS.codeTypeENName; //代码类型英文名
    objvTabFunctionPropENT.funcId4GC = objvFunctionTemplateRelaENS.funcId4GC; //函数ID
    objvTabFunctionPropENT.funcName = objvFunctionTemplateRelaENS.funcName; //函数名
    //objvTabFunctionPropENT.funcId4Code = objvFunctionTemplateRelaENS.funcId4Code; //函数Id4Code
    objvTabFunctionPropENT.funcName4Code = objvFunctionTemplateRelaENS.funcName4Code; //函数名4Code
    //objvTabFunctionPropENT.FuncCHName4Code = objvFunctionTemplateRelaENS.FuncCHName4Code; //函数中文名4Code
    //objvTabFunctionPropENT.ProgLangTypeId = objvFunctionTemplateRelaENS.ProgLangTypeId; //编程语言类型Id
    //objvTabFunctionPropENT.progLangTypeName = objvFunctionTemplateRelaENS.progLangTypeName; //编程语言类型名
    //objvTabFunctionPropENT.MethodModifierId = objvFunctionTemplateRelaENS.MethodModifierId; //函数修饰语Id
    //objvTabFunctionPropENT.MethodModifierName = objvFunctionTemplateRelaENS.MethodModifierName; //函数修饰语名称
    //objvTabFunctionPropENT.IsForAllTemplate = objvFunctionTemplateRelaENS.IsForAllTemplate; //是否针对所有模板
    objvTabFunctionPropENT.updDate = objvFunctionTemplateRelaENS.updDate; //修改日期
    objvTabFunctionPropENT.updUser = objvFunctionTemplateRelaENS.updUser; //修改者
    objvTabFunctionPropENT.memo = objvFunctionTemplateRelaENS.memo; //说明
    //objvTabFunctionPropENT.Order4Func = objvFunctionTemplateRelaENS.Order4Func; //Order4函数

    return objvTabFunctionPropENT;
  } catch (objException) {
    const strMsg = Format(
      'Copy表对象数据出错,{0}.({1}.{2})',
      objException,
      tabFunctionPropEx_ConstructorName,
      strThisFuncName,
    );
    throw strMsg;
  }
}
export async function TabFunctionPropEx_GetObjLstByFunctionTempIdAndTabId(
  strTabId: string,
  strFunctionTemplateId: string,
  strCodeTypeId: string,
): Promise<Array<clsTabFunctionPropENEx>> {
  // const strThisFuncName = TabFunctionPropEx_GetObjLstByFunctionTempIdAndTabId.name;

  const arrvFunctionTemplateRela = await FunctionTemplateRelaEx_GetObjLstByTemplateIdAndCodeTypeId(
    strFunctionTemplateId,
    strCodeTypeId,
  );
  const arrTabFunctionPropEx = arrvFunctionTemplateRela.map(
    TabFunctionPropEx_GetObjByFunctionTempRela,
  );
  // const strSortTabFunctionPropBy = '';
  const arrvTabFunctionProp_p = await TabFunctionProp_GetObjLstCache(strTabId);
  for (const objInFor of arrvTabFunctionProp_p) {
    const obj = arrTabFunctionPropEx.find(
      (y) =>
        y.functionTemplateId == objInFor.functionTemplateId && y.funcId4GC == objInFor.funcId4GC,
    );
    if (obj == null) continue;
    if (obj != null) {
      obj.tabId = objInFor.tabId;
      //obj.tabName = objInFor.tabName;
      obj.methodModifierId = objInFor.methodModifierId;
      //obj.methodModifierName = objInFor.methodModifierName;
    }
  }
  //const sstrExpress = strSortTabFunctionPropBy.split(" ");
  //if (sstrExpress[1].toLowerCase() == "desc") {
  //    arrTabFunctionPropEx = arrTabFunctionPropEx.sort((x, y) => y.GetFldValue(sstrExpress[0]).co(x.GetFldValue(sstrExpress[0]));
  //}
  //else {
  //    arrTabFunctionPropEx = arrTabFunctionPropEx.sort((x, y) => x.GetFldValue(sstrExpress[0]).co(y.GetFldValue(sstrExpress[0]));
  //}
  return arrTabFunctionPropEx;
}
