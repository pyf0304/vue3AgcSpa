import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { enumUseState } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { Projects_GetObjLstCache } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { BindDdl_ObjLstInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

export const projectsEx_Controller = 'ProjectsExApi';
export const projectsEx_ConstructorName = 'projectsEx';
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function ProjectsEx_BindDdl_PrjIdInDivExCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
) {
  // const strThisFuncName = 'BindDdl_PrjIdInDivCache';

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_PrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjIdInDivCache");
  let arrObjLst_Sel = await Projects_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.useStateId == enumUseState.InUse_0001);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.prjName.localeCompare(y.prjName));
  if (arrObjLst_Sel == null) return;
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsProjectsEN.con_PrjId,
    clsProjectsEN.con_PrjName,
    '工程',
  );
}
