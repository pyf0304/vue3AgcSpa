/**
 * 类名:ViewMasterVueShare(界面:ViewMasterCRUD,00050286)
 * 表名:ViewMaster(00050557)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:09
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:界面管理(PrjInterface)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsViewMasterENEx } from '@/ts/L0Entity/PrjInterface/clsViewMasterENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewMasterEN } from '@/ts/L0Entity/PrjInterface/clsViewMasterEN';

const ascOrDesc4SortFun = ref('Asc');
const sortViewMasterBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortViewMasterBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refViewMaster_Detail = ref();
const refViewMaster_Edit = ref();
const refvViewMaster_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewMaster_Detail,
  refViewMaster_Edit,
  refvViewMaster_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewMaster_Detail,
  refViewMaster_Edit,
  refvViewMaster_List,
};

export const showErrorMessage = ref(false);
export const dataListViewMaster = ref<Array<clsViewMasterENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const viewMasterCache: { [key: string]: clsViewMasterENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const viewMasterId_q = ref('');
export const viewMasterName_q = ref('');
export const viewMasterPath_q = ref('');
export const applicationTypeId_q = ref(0);
export const prjId_q = ref('');
const qryVarSet = reactive({
  viewMasterId_q,
  viewMasterName_q,
  viewMasterPath_q,
  applicationTypeId_q,
  prjId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewMasterCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (viewMasterId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterId,
        viewMasterId_q.value,
      );
    }
    if (viewMasterName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterName,
        viewMasterName_q.value,
      );
    }
    if (viewMasterPath_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterPath,
        viewMasterPath_q.value,
      );
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And ViewMaster.{0} = {1}',
        clsViewMasterEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineViewMasterCondition)时出错!请联系管理员!{0}',
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
export const CombineViewMasterConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewMasterCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objViewMasterCond.SetCondFldValue(clsViewMasterEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (viewMasterId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterId,
        viewMasterId_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ViewMasterId,
        viewMasterId_q.value,
        'like',
      );
    }
    if (viewMasterName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterName,
        viewMasterName_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ViewMasterName,
        viewMasterName_q.value,
        'like',
      );
    }
    if (viewMasterPath_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterPath,
        viewMasterPath_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ViewMasterPath,
        viewMasterPath_q.value,
        'like',
      );
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And {0} = {1}',
        clsViewMasterEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineViewMasterConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objViewMasterCond.whereCond = strWhereCond;
  return objViewMasterCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewMasterConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewMasterCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objViewMasterCond.SetCondFldValue(clsViewMasterEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (viewMasterId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterId,
        viewMasterId_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ViewMasterId,
        viewMasterId_q.value,
        'like',
      );
    }
    if (viewMasterName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterName,
        viewMasterName_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ViewMasterName,
        viewMasterName_q.value,
        'like',
      );
    }
    if (viewMasterPath_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewMasterEN.con_ViewMasterPath,
        viewMasterPath_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ViewMasterPath,
        viewMasterPath_q.value,
        'like',
      );
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And {0} = {1}',
        clsViewMasterEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
      objViewMasterCond.SetCondFldValue(
        clsViewMasterEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineViewMasterConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objViewMasterCond.whereCond = strWhereCond;
  return objViewMasterCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsViewMasterENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListViewMaster.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refvViewMaster_List.value != null) refvViewMaster_List.value.selectAllChecked = false;
};

export function ViewMaster_DeleteKeyIdCache(strPrjId: string, strViewMasterId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In ViewMasterVueShare.ViewMaster.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(ViewMasterVueShare.ViewMaster.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strViewMasterId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strViewMasterId}_${strPrjId}`;
    delete viewMasterCache[cacheKey];
    return;
  }
}
