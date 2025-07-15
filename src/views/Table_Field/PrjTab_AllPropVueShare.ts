/**
 * 类名:PrjTabVueShare(界面:PrjTabCRUD)
 * 表名:PrjTab(00050009)
 * 版本:2024.08.18.1(服务器:WIN-SRV103-116)
 * 日期:2024/08/21 15:10:19
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
export const refSpnTabName = ref();
const ascOrDesc4SortFun = ref('Asc');
const sortPrjTabBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjTabBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const tabId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refPrjTabU = ref();
const refPrjTabFldCRUD = ref();
const refPrjTabFldCRUD_Consistency = ref();
const refPrjConstraintCRUDInTab = ref();
const refTabFeatureCRUD_Edit = ref();
const refDnFuncMapCRUD_Edit = ref();
const refGeneTabCode = ref();
const refShowDnPathByTable = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refPrjTabU,
  refPrjTabFldCRUD,
  refPrjTabFldCRUD_Consistency,
  refPrjConstraintCRUDInTab,
  refTabFeatureCRUD_Edit,
  refDnFuncMapCRUD_Edit,
  refGeneTabCode,
  refShowDnPathByTable,
};

export const showErrorMessage = ref(false);
export const dataListPrjTab = ref<Array<clsPrjTabENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const tabName_q = ref('');
export const funcModuleAgcId_q = ref('');
export const tabStateId_q = ref('');
export const tabMainTypeId_q = ref('');
export const tabTypeId_q = ref('');
export const tabCnName_q = ref('');
export const sqlDsTypeId_q = ref('');
export const isUseCache_q = ref(true);
export const cacheModeId_q = ref('');
export const prjId_q = ref('');
export const isReleToSqlTab_q = ref(true);
const qryVarSet = reactive({
  tabName_q,
  funcModuleAgcId_q,
  tabStateId_q,
  tabMainTypeId_q,
  tabTypeId_q,
  tabCnName_q,
  sqlDsTypeId_q,
  isUseCache_q,
  cacheModeId_q,
  prjId_q,
  isReleToSqlTab_q,
});
export { qryVarSet };

//功能区变量定义
export const cacheModeId_f = ref('');
export const funcModuleAgcId_f = ref('');
export const tabStateId_f = ref('');
const featureVarSet = reactive({
  cacheModeId_f,
  funcModuleAgcId_f,
  tabStateId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (tabName_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsPrjTabEN.con_TabName, tabName_q.value);
    }
    if (funcModuleAgcId_q.value != '' && funcModuleAgcId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
      );
    }
    if (tabStateId_q.value != '' && tabStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_TabStateId, tabStateId_q.value);
    }
    if (tabMainTypeId_q.value != '' && tabMainTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabEN.con_TabMainTypeId,
        tabMainTypeId_q.value,
      );
    }
    if (tabTypeId_q.value != '' && tabTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_TabTypeId, tabTypeId_q.value);
    }
    if (tabCnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '% {1}%'",
        clsPrjTabEN.con_TabCnName,
        tabCnName_q.value,
      );
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_SqlDsTypeId, sqlDsTypeId_q.value);
    }
    if (isUseCache_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsUseCache);
    } else if (isUseCache_q.value == false) {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsUseCache);
    }
    if (cacheModeId_q.value != '' && cacheModeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_CacheModeId, cacheModeId_q.value);
    }
    if (isReleToSqlTab_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsReleToSqlTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsReleToSqlTab);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjTabCondition)时出错!请联系管理员!{0}',
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
export const CombinePrjTabConditionObj = async (): Promise<clsPrjTabEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objPrjTabCond = new clsPrjTabEN();
  objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (tabName_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsPrjTabEN.con_TabName, tabName_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabName, tabName_q.value, 'like');
    }
    if (funcModuleAgcId_q.value != '' && funcModuleAgcId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
      );
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_FuncModuleAgcId, funcModuleAgcId_q.value, '=');
    }
    if (tabStateId_q.value != '' && tabStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_TabStateId, tabStateId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabStateId, tabStateId_q.value, '=');
    }
    if (tabMainTypeId_q.value != '' && tabMainTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabEN.con_TabMainTypeId,
        tabMainTypeId_q.value,
      );
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabMainTypeId, tabMainTypeId_q.value, '=');
    }
    if (tabTypeId_q.value != '' && tabTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_TabTypeId, tabTypeId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabTypeId, tabTypeId_q.value, '=');
    }
    if (tabCnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '% {1}%'",
        clsPrjTabEN.con_TabCnName,
        tabCnName_q.value,
      );
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabCnName, tabCnName_q.value, 'like');
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_SqlDsTypeId, sqlDsTypeId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_SqlDsTypeId, sqlDsTypeId_q.value, '=');
    }
    if (isUseCache_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsUseCache);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsUseCache, true, '=');
    } else if (isUseCache_q.value == false) {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsUseCache);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsUseCache, false, '=');
    }
    if (cacheModeId_q.value != '' && cacheModeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_CacheModeId, cacheModeId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_CacheModeId, cacheModeId_q.value, '=');
    }
    if (isReleToSqlTab_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsReleToSqlTab);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsReleToSqlTab, true, '=');
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsReleToSqlTab);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsReleToSqlTab, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombinePrjTabConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjTabCond.whereCond = strWhereCond;
  return objPrjTabCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabConditionObj4ExportExcel = async (): Promise<clsPrjTabEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objPrjTabCond = new clsPrjTabENEx();
  objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (tabName_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsPrjTabEN.con_TabName, tabName_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabName, tabName_q.value, 'like');
    }
    if (funcModuleAgcId_q.value != '' && funcModuleAgcId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
      );
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_FuncModuleAgcId, funcModuleAgcId_q.value, '=');
    }
    if (tabStateId_q.value != '' && tabStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_TabStateId, tabStateId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabStateId, tabStateId_q.value, '=');
    }
    if (tabMainTypeId_q.value != '' && tabMainTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabEN.con_TabMainTypeId,
        tabMainTypeId_q.value,
      );
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabMainTypeId, tabMainTypeId_q.value, '=');
    }
    if (tabTypeId_q.value != '' && tabTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_TabTypeId, tabTypeId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabTypeId, tabTypeId_q.value, '=');
    }
    if (tabCnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '% {1}%'",
        clsPrjTabEN.con_TabCnName,
        tabCnName_q.value,
      );
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_TabCnName, tabCnName_q.value, 'like');
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_SqlDsTypeId, sqlDsTypeId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_SqlDsTypeId, sqlDsTypeId_q.value, '=');
    }
    if (isUseCache_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsUseCache);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsUseCache, true, '=');
    } else if (isUseCache_q.value == false) {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsUseCache);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsUseCache, false, '=');
    }
    if (cacheModeId_q.value != '' && cacheModeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabEN.con_CacheModeId, cacheModeId_q.value);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_CacheModeId, cacheModeId_q.value, '=');
    }
    if (isReleToSqlTab_q.value == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjTabEN.con_IsReleToSqlTab);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsReleToSqlTab, true, '=');
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjTabEN.con_IsReleToSqlTab);
      objPrjTabCond.SetCondFldValue(clsPrjTabEN.con_IsReleToSqlTab, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombinePrjTabConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjTabCond.whereCond = strWhereCond;
  return objPrjTabCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsPrjTabENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListPrjTab.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
