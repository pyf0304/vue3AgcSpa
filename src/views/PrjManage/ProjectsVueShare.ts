/**
 * 类名:ProjectsVueShare(界面:ProjectsCRUD,00050337)
 * 表名:Projects(00050002)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:40
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:工程管理(PrjManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsProjectsENEx } from '@/ts/L0Entity/PrjManage/clsProjectsENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';

const ascOrDesc4SortFun = ref('Asc');
const sortProjectsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortProjectsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refProjects_Detail = ref();
const refProjects_Edit = ref();
const refProjects_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refProjects_Detail,
  refProjects_Edit,
  refProjects_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refProjects_Detail,
  refProjects_Edit,
  refProjects_List,
};

export const showErrorMessage = ref(false);
export const dataListProjects = ref<Array<clsProjectsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const projectsCache: { [key: string]: clsProjectsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const prjId_q = ref('');
export const prjName_q = ref('');
export const useStateId_q = ref('');
const qryVarSet = reactive({
  prjId_q,
  prjName_q,
  useStateId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineProjectsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (prjId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsProjectsEN.con_PrjId, prjId_q.value);
    }
    if (prjName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsProjectsEN.con_PrjName, prjName_q.value);
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsProjectsEN.con_UseStateId, useStateId_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineProjectsCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineProjectsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objProjectsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (prjId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsProjectsEN.con_PrjId, prjId_q.value);
      objProjectsCond.SetCondFldValue(clsProjectsEN.con_PrjId, prjId_q.value, 'like');
    }
    if (prjName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsProjectsEN.con_PrjName, prjName_q.value);
      objProjectsCond.SetCondFldValue(clsProjectsEN.con_PrjName, prjName_q.value, 'like');
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsProjectsEN.con_UseStateId, useStateId_q.value);
      objProjectsCond.SetCondFldValue(clsProjectsEN.con_UseStateId, useStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineProjectsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objProjectsCond.whereCond = strWhereCond;
  return objProjectsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineProjectsConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objProjectsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (prjId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsProjectsEN.con_PrjId, prjId_q.value);
      objProjectsCond.SetCondFldValue(clsProjectsEN.con_PrjId, prjId_q.value, 'like');
    }
    if (prjName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsProjectsEN.con_PrjName, prjName_q.value);
      objProjectsCond.SetCondFldValue(clsProjectsEN.con_PrjName, prjName_q.value, 'like');
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsProjectsEN.con_UseStateId, useStateId_q.value);
      objProjectsCond.SetCondFldValue(clsProjectsEN.con_UseStateId, useStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineProjectsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objProjectsCond.whereCond = strWhereCond;
  return objProjectsCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsProjectsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListProjects.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refProjects_List.value != null) refProjects_List.value.selectAllChecked = false;
};

export function Projects_DeleteKeyIdCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strPrjId}`;
    delete projectsCache[cacheKey];
    return;
  }
}
