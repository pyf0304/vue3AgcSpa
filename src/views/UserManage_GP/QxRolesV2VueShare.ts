/**
 * 类名:QxRolesV2VueShare(界面:QxRolesV2CRUD,00140037)
 * 表名:QxRolesV2(00140116)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 10:36:32
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQxRolesV2ENEx } from '@/ts/L0Entity/UserManage_GP/clsQxRolesV2ENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsQxRolesV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesV2EN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortQxRolesV2By = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQxRolesV2By,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refQxRolesV2_Edit = ref();
const refQxRolesV2_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxRolesV2_Edit,
  refQxRolesV2_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxRolesV2_Edit,
  refQxRolesV2_List,
};

export const showErrorMessage = ref(false);
export const dataListQxRolesV2 = ref<Array<clsQxRolesV2ENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const qxRolesV2Cache: { [key: string]: clsQxRolesV2ENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const roleName_q = ref('');
export const qxPrjId_q = ref('');
const qryVarSet = reactive({
  roleName_q,
  qxPrjId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxRolesV2Condition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (roleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxRolesV2EN.con_RoleName,
        roleName_q.value,
      );
    }
    if (qxPrjId_q.value != '' && qxPrjId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsQxRolesV2EN.con_QxPrjId, qxPrjId_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQxRolesV2Condition)时出错!请联系管理员!{0}',
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
export const CombineQxRolesV2ConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxRolesV2Cond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (roleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxRolesV2EN.con_RoleName,
        roleName_q.value,
      );
      objQxRolesV2Cond.SetCondFldValue(clsQxRolesV2EN.con_RoleName, roleName_q.value, 'like');
    }
    if (qxPrjId_q.value != '' && qxPrjId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsQxRolesV2EN.con_QxPrjId, qxPrjId_q.value);
      objQxRolesV2Cond.SetCondFldValue(clsQxRolesV2EN.con_QxPrjId, qxPrjId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQxRolesV2ConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxRolesV2Cond.whereCond = strWhereCond;
  return objQxRolesV2Cond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxRolesV2ConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxRolesV2Cond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (roleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxRolesV2EN.con_RoleName,
        roleName_q.value,
      );
      objQxRolesV2Cond.SetCondFldValue(clsQxRolesV2EN.con_RoleName, roleName_q.value, 'like');
    }
    if (qxPrjId_q.value != '' && qxPrjId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsQxRolesV2EN.con_QxPrjId, qxPrjId_q.value);
      objQxRolesV2Cond.SetCondFldValue(clsQxRolesV2EN.con_QxPrjId, qxPrjId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineQxRolesV2ConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxRolesV2Cond.whereCond = strWhereCond;
  return objQxRolesV2Cond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQxRolesV2ENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQxRolesV2.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refQxRolesV2_List.value != null) refQxRolesV2_List.value.selectAllChecked = false;
};

export function QxRolesV2_DeleteKeyIdCache(intRId: number): void {
  if (intRId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${intRId}`;
    delete qxRolesV2Cache[cacheKey];
    return;
  }
}
