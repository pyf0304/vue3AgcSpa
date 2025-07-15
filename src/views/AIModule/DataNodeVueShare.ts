/**
 * 类名:DataNodeVueShare(界面:DataNodeCRUD,00050282)
 * 表名:DataNode(00050547)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/12 16:01:20
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:AI模块(AIModule)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsDataNodeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortDataNodeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDataNodeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refDataNode_Detail = ref();
const refDataNode_Edit = ref();
const refDataNode_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDataNode_Detail,
  refDataNode_Edit,
  refDataNode_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDataNode_Detail,
  refDataNode_Edit,
  refDataNode_List,
};

export const showErrorMessage = ref(false);
export const dataListDataNode = ref<Array<clsDataNodeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const dataNodeCache: { [key: string]: clsDataNodeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const dataNodeId_q = ref(0);
export const dataNodeName_q = ref('');
export const tabId_q = ref('');
export const fldId_q = ref('');
export const prjId_q = ref('');
export const dataNodeTypeId_q = ref('');
const qryVarSet = reactive({
  dataNodeId_q,
  dataNodeName_q,
  tabId_q,
  fldId_q,
  prjId_q,
  dataNodeTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDataNodeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (dataNodeId_q.value != 0) {
      strWhereCond += Format(' And {0} = {1}', clsDataNodeEN.con_DataNodeId, dataNodeId_q.value);
    }
    if (dataNodeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDataNodeEN.con_DataNodeName,
        dataNodeName_q.value,
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDataNodeEN.con_TabId, tabId_q.value);
    }
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(" And DataNode.{0} = '{1}'", clsDataNodeEN.con_FldId, fldId_q.value);
    }
    if (dataNodeTypeId_q.value != '' && dataNodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And DataNode.{0} = '{1}'",
        clsDataNodeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineDataNodeCondition)时出错!请联系管理员!{0}',
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
export const CombineDataNodeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDataNodeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (dataNodeId_q.value != 0) {
      strWhereCond += Format(' And {0} = {1}', clsDataNodeEN.con_DataNodeId, dataNodeId_q.value);
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_DataNodeId, dataNodeId_q.value, '=');
    }
    if (dataNodeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDataNodeEN.con_DataNodeName,
        dataNodeName_q.value,
      );
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_DataNodeName, dataNodeName_q.value, 'like');
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDataNodeEN.con_TabId, tabId_q.value);
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_TabId, tabId_q.value, '=');
    }
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDataNodeEN.con_FldId, fldId_q.value);
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_FldId, fldId_q.value, '=');
    }
    if (dataNodeTypeId_q.value != '' && dataNodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDataNodeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
      );
      objDataNodeCond.SetCondFldValue(
        clsDataNodeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineDataNodeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDataNodeCond.whereCond = strWhereCond;
  return objDataNodeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDataNodeConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDataNodeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (dataNodeId_q.value != 0) {
      strWhereCond += Format(' And {0} = {1}', clsDataNodeEN.con_DataNodeId, dataNodeId_q.value);
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_DataNodeId, dataNodeId_q.value, '=');
    }
    if (dataNodeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDataNodeEN.con_DataNodeName,
        dataNodeName_q.value,
      );
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_DataNodeName, dataNodeName_q.value, 'like');
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDataNodeEN.con_TabId, tabId_q.value);
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_TabId, tabId_q.value, '=');
    }
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDataNodeEN.con_FldId, fldId_q.value);
      objDataNodeCond.SetCondFldValue(clsDataNodeEN.con_FldId, fldId_q.value, '=');
    }
    if (dataNodeTypeId_q.value != '' && dataNodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDataNodeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
      );
      objDataNodeCond.SetCondFldValue(
        clsDataNodeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineDataNodeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDataNodeCond.whereCond = strWhereCond;
  return objDataNodeCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsDataNodeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListDataNode.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refDataNode_List.value != null) refDataNode_List.value.selectAllChecked = false;
};

export function DataNode_DeleteKeyIdCache(lngDataNodeId: number): void {
  if (lngDataNodeId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngDataNodeId}`;
    delete dataNodeCache[cacheKey];
    return;
  }
}
