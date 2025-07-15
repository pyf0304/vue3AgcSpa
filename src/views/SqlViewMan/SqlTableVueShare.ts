/**
 * 类名:SqlTableVueShare(界面:SqlTableCRUD,00050332)
 * 表名:SqlTable(00050624)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:04
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:Sql视图管理(SqlViewMan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsSqlTableENEx } from '@/ts/L0Entity/SqlViewMan/clsSqlTableENEx';
import { clsSqlTableEN } from '@/ts/L0Entity/SqlViewMan/clsSqlTableEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortSqlTableBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortSqlTableBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refSqlTable_List_2 = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refSqlTable_List_2,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refSqlTable_List_2,
};

export const showErrorMessage = ref(false);
export const dataListSqlTable = ref<Array<clsSqlTableENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const sqlTableCache: { [key: string]: clsSqlTableENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const sqlTableId_q = ref('');
export const tableName_q = ref('');
export const xtype_q = ref('');
export const crDate_q = ref('');
export const updUserId_q = ref('');
const qryVarSet = reactive({
  sqlTableId_q,
  tableName_q,
  xtype_q,
  crDate_q,
  updUserId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineSqlTableCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (sqlTableId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_SqlTableId,
        sqlTableId_q.value,
      );
    }
    if (tableName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_TableName,
        tableName_q.value,
      );
    }
    if (xtype_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_xtype, xtype_q.value);
    }
    if (crDate_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_crDate, crDate_q.value);
    }
    if (updUserId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_UpdUserId,
        updUserId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineSqlTableCondition)时出错!请联系管理员!{0}',
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
export const CombineSqlTableConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objSqlTableCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (sqlTableId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_SqlTableId,
        sqlTableId_q.value,
      );
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_SqlTableId, sqlTableId_q.value, 'like');
    }
    if (tableName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_TableName,
        tableName_q.value,
      );
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_TableName, tableName_q.value, 'like');
    }
    if (xtype_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_xtype, xtype_q.value);
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_xtype, xtype_q.value, 'like');
    }
    if (crDate_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_crDate, crDate_q.value);
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_crDate, crDate_q.value, 'like');
    }
    if (updUserId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_UpdUserId,
        updUserId_q.value,
      );
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_UpdUserId, updUserId_q.value, 'like');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineSqlTableConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objSqlTableCond.whereCond = strWhereCond;
  return objSqlTableCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineSqlTableConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objSqlTableCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (sqlTableId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_SqlTableId,
        sqlTableId_q.value,
      );
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_SqlTableId, sqlTableId_q.value, 'like');
    }
    if (tableName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_TableName,
        tableName_q.value,
      );
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_TableName, tableName_q.value, 'like');
    }
    if (xtype_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_xtype, xtype_q.value);
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_xtype, xtype_q.value, 'like');
    }
    if (crDate_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_crDate, crDate_q.value);
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_crDate, crDate_q.value, 'like');
    }
    if (updUserId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsSqlTableEN.con_UpdUserId,
        updUserId_q.value,
      );
      objSqlTableCond.SetCondFldValue(clsSqlTableEN.con_UpdUserId, updUserId_q.value, 'like');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineSqlTableConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objSqlTableCond.whereCond = strWhereCond;
  return objSqlTableCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsSqlTableENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListSqlTable.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refSqlTable_List_2.value != null) refSqlTable_List_2.value.selectAllChecked = false;
};
