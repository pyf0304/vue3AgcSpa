import { clsViewTypeCodeTabEN } from '@/ts/L0Entity/PrjInterface/clsViewTypeCodeTabEN';
import { ViewTypeCodeTab_GetObjLstCache } from '@/ts/L3ForWApi/PrjInterface/clsViewTypeCodeTabWApi';
import { BindDdl_ObjLstInDivObj } from '@/ts/PubFun/clsCommFunc4Web';

export const viewTypeCodeTabEx_Controller = 'ViewTypeCodeTabExApi';
export const viewTypeCodeTabEx_ConstructorName = 'viewTypeCodeTabEx';
/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function ViewTypeCodeTabEx_BindDdl_ViewTypeCodeInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  intApplicationTypeId: number,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_ViewTypeCodeInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel: Array<clsViewTypeCodeTabEN> = await ViewTypeCodeTab_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.applicationTypeId == intApplicationTypeId);
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsViewTypeCodeTabEN.con_ViewTypeCode,
    clsViewTypeCodeTabEN.con_ViewTypeName,
    '界面类型码',
  );
}

/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function ViewTypeCodeTabEx_GetObjLstByApplicationTypeIdCache(
  intApplicationTypeId: number,
) {
  let arrObjLst_Sel: Array<clsViewTypeCodeTabEN> = await ViewTypeCodeTab_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.applicationTypeId == intApplicationTypeId);
  return arrObjLst_Sel;
}
