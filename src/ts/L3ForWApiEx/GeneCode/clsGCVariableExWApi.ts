import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
import { clsGCVariableENEx } from '@/ts/L0Entity/GeneCode/clsGCVariableENEx';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import {
  GCVariablePrjIdRela_GetObjByKeyLstCache,
  GCVariablePrjIdRela_GetObjLstCache,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';

import {
  GCVariableType_func,
  GCVariableType_GetNameByVarTypeIdCache,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import {
  GCVariable_GetObjLstAsync,
  GCVariable_GetObjLstCache,
  GCVariable_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLstInDivObj, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const gCVariableEx_Controller = 'GCVariableExApi';
export const gCVariableEx_ConstructorName = 'gCVariableEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objGCVariableENS:源对象
 * @returns 目标对象=>clsGCVariableEN:objGCVariableENT
 **/
export function GCVariableEx_CopyToEx(objGCVariableENS: clsGCVariableEN): clsGCVariableENEx {
  let strThisFuncName = '';
  try {
    strThisFuncName = GCVariableEx_CopyToEx.name;
  } catch (e) {}

  const objGCVariableENT = new clsGCVariableENEx();
  try {
    ObjectAssign(objGCVariableENT, objGCVariableENS);
    return objGCVariableENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000066)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCVariableENT;
  }
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function GCVariableEx_BindDdl_VarIdByVarTypeIdInDivCache1(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strVarTypeId: string,
) {
  // const strThisFuncName = 'BindDdl_VarIdByVarTypeIdInDivCache';

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在！(In BindDdl_VarIdByVarTypeIdInDivCache)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容

  let arrObjLst_Sel: Array<clsGCVariableEN> = await GCVariable_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.varTypeId == strVarTypeId);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.varName.localeCompare(y.varName));
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsGCVariableEN.con_VarId,
    clsGCVariableEN.con_VarName,
    '变量表',
  );
}
/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function GCVariableEx_BindDdl_VarIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  // const strThisFuncName = 'BindDdl_VarIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_VarIdByVarTypeIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId == '9991') {
    const strMsg = Format('参数:[strPrjId]不能为[9991]！(In BindDdl_VarIdByVarTypeIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在！(In BindDdl_VarIdByVarTypeIdInDivCache)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容

  let arrObjLst_Sel: Array<clsGCVariableEN> = await GCVariable_GetObjLstCache();

  const arrGCVariablePrjIdRela = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  const arrVarId_PrjId = arrGCVariablePrjIdRela.map((x) => x.varId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrVarId_PrjId.indexOf(x.varId) > -1);

  let arrObjExLst_Sel = arrObjLst_Sel.map(GCVariableEx_CopyToEx);
  for (const objInFor of arrObjExLst_Sel) {
    const strGCVariableTypeName = await GCVariableType_GetNameByVarTypeIdCache(objInFor.varTypeId);
    if (IsNullOrEmpty(strGCVariableTypeName) == true) continue;
    objInFor.varNameEx = Format('{0}-{1}', strGCVariableTypeName, objInFor.varName);
  }

  //arrObjLst_Sel = arrObjLst_Sel.filter(x => x.varTypeId == strVarTypeId);
  arrObjExLst_Sel = arrObjExLst_Sel.sort(GCVariableEx_SortFun_ByVarNameEx);
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjExLst_Sel,
    clsGCVariableEN.con_VarId,
    'varNameEx',
    '变量表',
  );
}

export async function GCVariableEx_GetArrGCVariableByPrjIdCache(strPrjId: string) {
  // const strThisFuncName = 'BindDdl_VarIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_VarIdByVarTypeIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId == '9991') {
    const strMsg = Format('参数:[strPrjId]不能为[9991]！(In BindDdl_VarIdByVarTypeIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容

  let arrObjLst_Sel: Array<clsGCVariableEN> = await GCVariable_GetObjLstCache();

  const arrGCVariablePrjIdRela = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  const arrVarId_PrjId = arrGCVariablePrjIdRela.map((x) => x.varId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrVarId_PrjId.indexOf(x.varId) > -1);

  let arrObjExLst_Sel = arrObjLst_Sel.map(GCVariableEx_CopyToEx);
  for (const objInFor of arrObjExLst_Sel) {
    const strGCVariableTypeName = await GCVariableType_GetNameByVarTypeIdCache(objInFor.varTypeId);
    if (IsNullOrEmpty(strGCVariableTypeName) == true) continue;
    objInFor.varNameEx = Format('{0}-{1}', strGCVariableTypeName, objInFor.varName);
  }

  //arrObjLst_Sel = arrObjLst_Sel.filter(x => x.varTypeId == strVarTypeId);
  arrObjExLst_Sel = arrObjExLst_Sel.sort(GCVariableEx_SortFun_ByVarNameEx);
  const arrGCVariable = new Array<clsGCVariableEN>();
  const obj0 = new clsGCVariableEN();
  obj0.varId = '0';
  obj0.varName = '选变量...';
  arrGCVariable.push(obj0);
  arrObjExLst_Sel.forEach((x) => arrGCVariable.push(x));
  return arrGCVariable;
}

export function GCVariableEx_SortFun_ByVarNameEx(
  a: clsGCVariableENEx,
  b: clsGCVariableENEx,
): number {
  // let strThisFuncName = '';
  // try {
  //   strThisFuncName = GCVariableEx_SortFun_ByVarNameEx.name;
  // } catch (e) {}

  return a.varNameEx.localeCompare(b.varNameEx);
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
export function GCVariableEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVariableENEx.con_VarTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsGCVariableENEx.con_VarNameEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.varNameEx.localeCompare(b.varNameEx);
        };
      case clsGCVariableENEx.con_VarExpressionEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.varExpressionEx.localeCompare(b.varExpressionEx);
        };
      case clsGCVariableENEx.con_PrjName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCVariableENEx.con_DataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCVariableENEx.con_DuFilePath:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.duFilePath.localeCompare(b.duFilePath);
        };
      case clsGCVariableENEx.con_DuClassName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.duClassName.localeCompare(b.duClassName);
        };
      case clsGCVariableENEx.con_DuDataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.duDataTypeName.localeCompare(b.duDataTypeName);
        };
      case clsGCVariableENEx.con_PrjId:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };

      case clsGCVariableENEx.con_PrjIdBak:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.prjIdBak.localeCompare(b.prjIdBak);
        };
      default:
        return GCVariable_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCVariableENEx.con_VarTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsGCVariableENEx.con_VarNameEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.varNameEx.localeCompare(a.varNameEx);
        };
      case clsGCVariableENEx.con_VarExpressionEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.varExpressionEx.localeCompare(a.varExpressionEx);
        };
      case clsGCVariableENEx.con_PrjName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCVariableENEx.con_DataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCVariableENEx.con_DuFilePath:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.duFilePath.localeCompare(a.duFilePath);
        };
      case clsGCVariableENEx.con_DuClassName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.duClassName.localeCompare(a.duClassName);
        };
      case clsGCVariableENEx.con_DuDataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.duDataTypeName.localeCompare(a.duDataTypeName);
        };
      case clsGCVariableENEx.con_PrjId:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };

      case clsGCVariableENEx.con_PrjIdBak:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.prjIdBak.localeCompare(a.prjIdBak);
        };
      default:
        return GCVariable_SortFunByKey(strKey, AscOrDesc);
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
export function GCVariableEx_FuncMapByFldName(
  strFldName: string,
  objGCVariableEx: clsGCVariableENEx,
) {
  const strThisFuncName = GCVariableEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsGCVariableEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCVariableENEx.con_VarTypeName:
      return GCVariableEx_FuncMap_VarTypeName(objGCVariableEx);
    case clsGCVariableENEx.con_PrjName:
      return GCVariableEx_FuncMap_PrjName(objGCVariableEx);
    case clsGCVariableENEx.con_DataTypeName:
      return GCVariableEx_FuncMap_DataTypeName(objGCVariableEx);
    case clsGCVariableENEx.con_VarExpressionEx:
      return GCVariableEx_FuncMap_VarExpressionEx(objGCVariableEx);
    case clsGCVariableENEx.con_DuFilePath:
      return GCVariableEx_FuncMap_DuFilePath(objGCVariableEx);
    case clsGCVariableENEx.con_DuClassName:
      return GCVariableEx_FuncMap_DuClassName(objGCVariableEx);
    case clsGCVariableENEx.con_VarNameEx:
      return GCVariableEx_FuncMap_VarNameEx(objGCVariableEx);

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
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_VarTypeName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_VarTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.varTypeName) == true) {
      const GCVariableType_VarTypeId = objGCVariable.varTypeId;
      const GCVariableType_VarTypeName = await GCVariableType_func(
        clsGCVariableTypeEN.con_VarTypeId,
        clsGCVariableTypeEN.con_VarTypeName,
        GCVariableType_VarTypeId,
      );
      objGCVariable.varTypeName = GCVariableType_VarTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000118)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_PrjName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.prjName) == true) {
      //const Projects_PrjId = objGCVariable.prjId;
      //const Projects_PrjName = await Projects_func(clsProjectsEN.con_PrjId, clsProjectsEN.con_PrjName, Projects_PrjId);
      //objGCVariable.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_DataTypeName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_DataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.dataTypeName) == true) {
      const DataTypeAbbr_DataTypeId = objGCVariable.dataTypeId;
      const DataTypeAbbr_DataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbr_DataTypeId,
      );
      objGCVariable.dataTypeName = DataTypeAbbr_DataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000091)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)VarExpressionEx
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_VarExpressionEx(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_DataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.varExpressionEx) == true) {
      const spnRoot = document.createElement('span');
      spnRoot.className = 'text-info';
      spnRoot.title = '扩展变量表达式信息';
      const spnVarExpression = document.createElement('span');
      spnVarExpression.className = 'link-info text-info font-weight-bold';
      spnVarExpression.title = Format('字段名:{0}', objGCVariable.varExpression);
      spnVarExpression.innerHTML = objGCVariable.varExpression;
      spnRoot.appendChild(spnVarExpression);

      const vFieldTab_Sim_ClassName = objGCVariable.clsName;

      if (IsNullOrEmpty(objGCVariable.clsName) == false) {
        const spnClassName0 = document.createElement('span');
        spnClassName0.className = 'text-primary  font-weight-bold';
        spnClassName0.title = '类名';
        spnClassName0.innerHTML = '类名:';

        const spnClassName1 = document.createElement('span');
        spnClassName1.className = 'text-secondary  font-weight-bold';
        spnClassName1.title = vFieldTab_Sim_ClassName;
        spnClassName1.innerHTML = vFieldTab_Sim_ClassName;

        const spnClassName = GetSpan_Empty('');
        spnClassName.appendChild(spnClassName0);
        spnClassName.appendChild(spnClassName1);
        const objBr = document.createElement('br');
        spnRoot.appendChild(objBr);
        spnRoot.appendChild(spnClassName);
      }

      const vFieldTab_Sim_FilePath = objGCVariable.filePath;

      if (IsNullOrEmpty(vFieldTab_Sim_FilePath) == false) {
        const spnHomologousVarExpression0 = document.createElement('span');
        spnHomologousVarExpression0.className = 'text-primary  font-weight-bold';
        spnHomologousVarExpression0.title = '引用文件路径';
        spnHomologousVarExpression0.innerHTML = '路径:';

        const spnHomologousVarExpression1 = document.createElement('span');
        spnHomologousVarExpression1.className = 'text-secondary  font-weight-bold';
        spnHomologousVarExpression1.title = vFieldTab_Sim_FilePath;
        spnHomologousVarExpression1.innerHTML = vFieldTab_Sim_FilePath;

        const spnHomologousVarExpression = GetSpan_Empty('');
        spnHomologousVarExpression.appendChild(spnHomologousVarExpression0);
        spnHomologousVarExpression.appendChild(spnHomologousVarExpression1);
        const objBr1 = document.createElement('br');
        spnRoot.appendChild(objBr1);
        spnRoot.appendChild(spnHomologousVarExpression);
      }
      objGCVariable.varExpressionEx = spnRoot.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000091)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_DuClassName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_DuClassName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.duClassName) == true) {
      if (IsNullOrEmpty(objGCVariable.clsName) == true)
        await GCVariableEx_FuncMap_DataTypeName(objGCVariable);
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '类名';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleIdContent, strContent);
      spnStyle_Content.innerHTML = objGCVariable.clsName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objGCVariable.duClassName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000256)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_DuFilePath(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_DuFilePath.name;
  try {
    if (IsNullOrEmpty(objGCVariable.duFilePath) == true) {
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '文件路径';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleIdContent, strContent);
      spnStyle_Content.innerHTML = objGCVariable.filePath;
      spnCurr.innerHTML = Format(
        '{0}<br/>{1}',
        spnStyle_Title.outerHTML,
        spnStyle_Content.outerHTML,
      );
      objGCVariable.duFilePath = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000257)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_DU_DataTypeName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_DU_DataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.duDataTypeName) == true) {
      if (IsNullOrEmpty(objGCVariable.dataTypeName) == true) {
        await GCVariableEx_FuncMap_DataTypeName(objGCVariable);
      }
      const spnCurr = GetSpan_Empty('text-info col-form-label-sm');
      const spnStyle_Title = GetSpan_Empty('text-danger font-weight-bold'); //;
      spnStyle_Title.innerHTML = '数据类型名称';
      const spnStyle_Content = GetSpan_Empty('text-muted'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleIdContent, strContent);
      spnStyle_Content.innerHTML = objGCVariable.dataTypeName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objGCVariable.duDataTypeName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000258)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strPrjId:工程ID
 */
export async function GCVariableEx_BindDdl_VarIdInDivExCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  // const strThisFuncName = 'BindDdl_VarIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_VarIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_VarIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_VarIdInDivCache");
  let arrObjLst_Sel = await GCVariable_GetObjLstCache();
  if (arrObjLst_Sel == null) return;

  const arrGCVariablePrjIdRela = await GCVariablePrjIdRela_GetObjLstCache(strPrjId);
  const arrVarId_PrjId = arrGCVariablePrjIdRela.map((x) => x.varId);
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => arrVarId_PrjId.indexOf(x.varId) > -1);

  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsGCVariableEN.con_VarId,
    clsGCVariableEN.con_VarName,
    'GC变量',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function GCVariableEx_BindDdl_VarIdExcludeCurrPrjIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  // const strThisFuncName = 'BindDdl_VarIdInDivCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_VarIdInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format('缓存分类变量:[strPrjId]的长度:[{0}]不正确！', strPrjId.length);
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_VarIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_VarIdInDivCache");
  const strCondition = Format(
    " VarId not in (Select VarId From 	GCVariablePrjIdRela where PrjId='{0}')",
    strPrjId,
  );
  const arrObjLst_Sel = await GCVariable_GetObjLstAsync(strCondition);
  if (arrObjLst_Sel == null) return;
  let arrObjExLst_Sel = arrObjLst_Sel.map(GCVariableEx_CopyToEx);
  for (const objInFor of arrObjExLst_Sel) {
    await GCVariableEx_FuncMap_VarNameEx(objInFor);
  }
  arrObjExLst_Sel = arrObjExLst_Sel.sort(GCVariable_SortFun_ByVarTypeAndVarName);

  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjExLst_Sel,
    clsGCVariableEN.con_VarId,
    clsGCVariableENEx.con_VarNameEx,
    'GC变量',
  );
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariableEx_FuncMap_VarNameEx(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariableEx_FuncMap_VarNameEx.name;
  try {
    if (IsNullOrEmpty(objGCVariable.varNameEx) == true) {
      if (IsNullOrEmpty(objGCVariable.varTypeName) == true) {
        const GCVariableType_VarTypeId = objGCVariable.varTypeId;
        const GCVariableType_VarTypeName = await GCVariableType_func(
          clsGCVariableTypeEN.con_VarTypeId,
          clsGCVariableTypeEN.con_VarTypeName,
          GCVariableType_VarTypeId,
        );
        objGCVariable.varTypeName = GCVariableType_VarTypeName;
      }
      const objGCVariablePrjIdRela = await GCVariablePrjIdRela_GetObjByKeyLstCache(
        objGCVariable.varId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (objGCVariablePrjIdRela == null) {
        objGCVariable.varNameEx = Format(
          '{1}-{0}',
          objGCVariable.varTypeName,
          objGCVariable.varName,
        );
      } else {
        objGCVariable.varNameEx = Format(
          '{1}-{0}<br/>{2}',
          objGCVariable.varTypeName,
          objGCVariable.varName,
          `<span class='text-primary'>本工程</span>`,
        );
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000118)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export function GCVariable_SortFun_ByVarTypeAndVarName(
  a: clsGCVariableENEx,
  b: clsGCVariableENEx,
): number {
  // const strThisFuncName = 'SortFunDefa_2Fld';
  if (a.varTypeName == b.varTypeName) return a.varName.localeCompare(b.varName);
  else return a.varTypeName.localeCompare(b.varTypeName);
}

export function GCVariable_SortFun_ByVarName(a: clsGCVariableENEx, b: clsGCVariableENEx): number {
  // const strThisFuncName = 'SortFunDefa_2Fld';
  return a.varName.localeCompare(b.varName);
}
