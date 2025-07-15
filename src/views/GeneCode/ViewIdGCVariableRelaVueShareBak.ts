import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';
import { clsViewIdGCVariableRelaENEx } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortViewIdGCVariableRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortViewIdGCVariableRelaBy,
});
export { viewVarSet };

export const ViewIdStatic = ref(''); //5、处理添加、修改记录时PutData所用的界面静态变量, 用于在界面编辑函数中信息交互

export const showErrorMessage = ref(false);
export const dataListViewIdGCVariableRela = ref<Array<clsViewIdGCVariableRelaENEx>>([]);
export const emptyRecNumInfo = ref('');

export const varId_q = ref('');
export const viewId_q = ref('');
const qryVarSet = reactive({
  varId_q,
  viewId_q,
});
export { qryVarSet };

export const retrievalMethodId_f = ref('');
const featureVarSet = reactive({
  retrievalMethodId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewIdGCVariableRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and ViewId ='{0}'", ViewIdStatic.value);
  try {
    if (varId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '% {1}%'",
        clsViewIdGCVariableRelaEN.con_VarId,
        varId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineViewIdGCVariableRelaCondition)时出错!请联系管理员!{0}',
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
export const CombineViewIdGCVariableRelaConditionObj =
  async (): Promise<clsViewIdGCVariableRelaEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objViewIdGCVariableRelaCond = new clsViewIdGCVariableRelaEN();
    objViewIdGCVariableRelaCond.SetCondFldValue(
      clsViewIdGCVariableRelaEN.con_ViewId,
      ViewIdStatic,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (varId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsViewIdGCVariableRelaEN.con_VarId,
          varId_q.value,
        );
        objViewIdGCVariableRelaCond.SetCondFldValue(
          clsViewIdGCVariableRelaEN.con_VarId,
          varId_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件对象(CombineViewIdGCVariableRelaConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objViewIdGCVariableRelaCond.whereCond = strWhereCond;
    return objViewIdGCVariableRelaCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewIdGCVariableRelaConditionObj4ExportExcel =
  async (): Promise<clsViewIdGCVariableRelaEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objViewIdGCVariableRelaCond = new clsViewIdGCVariableRelaENEx();
    objViewIdGCVariableRelaCond.SetCondFldValue(
      clsViewIdGCVariableRelaEN.con_ViewId,
      ViewIdStatic,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (varId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsViewIdGCVariableRelaEN.con_VarId,
          varId_q.value,
        );
        objViewIdGCVariableRelaCond.SetCondFldValue(
          clsViewIdGCVariableRelaEN.con_VarId,
          varId_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineViewIdGCVariableRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objViewIdGCVariableRelaCond.whereCond = strWhereCond;
    return objViewIdGCVariableRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsViewIdGCVariableRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListViewIdGCVariableRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
