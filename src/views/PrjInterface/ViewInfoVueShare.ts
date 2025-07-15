/**
 * 类名:ViewInfoVueShare(界面:ViewInfoCRUD,00050234)
 * 表名:ViewInfo(00050006)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:14
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
import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';

const ascOrDesc4SortFun = ref('Asc');
const sortViewInfoBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortViewInfoBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const UserId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const ApplicationTypeId_Static = ref(0); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refViewInfo_Detail = ref();
const refViewInfo_Edit = ref();
const refvViewInfo_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewInfo_Detail,
  refViewInfo_Edit,
  refvViewInfo_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewInfo_Detail,
  refViewInfo_Edit,
  refvViewInfo_List,
};

export const showErrorMessage = ref(false);
export const dataListViewInfo = ref<Array<clsViewInfoENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const viewInfoCache: { [key: string]: clsViewInfoENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const viewId_q = ref('');
export const viewName_q = ref('');
export const applicationTypeId_q = ref(0);
export const funcModuleAgcId_q = ref('');
export const mainTabId_q = ref('');
const qryVarSet = reactive({
  viewId_q,
  viewName_q,
  applicationTypeId_q,
  funcModuleAgcId_q,
  mainTabId_q,
});
export { qryVarSet };

//功能区变量定义
export const applicationTypeId_f = ref(0);
export const cmPrjId_f = ref('');
const featureVarSet = reactive({
  applicationTypeId_f,
  cmPrjId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewInfoCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (viewId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsViewInfoEN.con_ViewId, viewId_q.value);
    }
    if (viewName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsViewInfoEN.con_ViewName, viewName_q.value);
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And ViewInfo.{0} = {1}',
        clsViewInfoEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
    }
    if (funcModuleAgcId_q.value != '' && funcModuleAgcId_q.value != '0') {
      strWhereCond += Format(
        " And ViewInfo.{0} = '{1}'",
        clsViewInfoEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
      );
    }
    if (mainTabId_q.value != '' && mainTabId_q.value != '0') {
      strWhereCond += Format(
        " And ViewInfo.{0} = '{1}'",
        clsViewInfoEN.con_MainTabId,
        mainTabId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineViewInfoCondition)时出错!请联系管理员!{0}',
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
export const CombineViewInfoConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewInfoCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (viewId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsViewInfoEN.con_ViewId, viewId_q.value);
      objViewInfoCond.SetCondFldValue(clsViewInfoEN.con_ViewId, viewId_q.value, 'like');
    }
    if (viewName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsViewInfoEN.con_ViewName, viewName_q.value);
      objViewInfoCond.SetCondFldValue(clsViewInfoEN.con_ViewName, viewName_q.value, 'like');
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And {0} = {1}',
        clsViewInfoEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
      objViewInfoCond.SetCondFldValue(
        clsViewInfoEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
        '=',
      );
    }
    if (funcModuleAgcId_q.value != '' && funcModuleAgcId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsViewInfoEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
      );
      objViewInfoCond.SetCondFldValue(
        clsViewInfoEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
        '=',
      );
    }
    if (mainTabId_q.value != '' && mainTabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsViewInfoEN.con_MainTabId, mainTabId_q.value);
      objViewInfoCond.SetCondFldValue(clsViewInfoEN.con_MainTabId, mainTabId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineViewInfoConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objViewInfoCond.whereCond = strWhereCond;
  return objViewInfoCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewInfoConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewInfoCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (viewId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsViewInfoEN.con_ViewId, viewId_q.value);
      objViewInfoCond.SetCondFldValue(clsViewInfoEN.con_ViewId, viewId_q.value, 'like');
    }
    if (viewName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsViewInfoEN.con_ViewName, viewName_q.value);
      objViewInfoCond.SetCondFldValue(clsViewInfoEN.con_ViewName, viewName_q.value, 'like');
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And {0} = {1}',
        clsViewInfoEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
      objViewInfoCond.SetCondFldValue(
        clsViewInfoEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
        '=',
      );
    }
    if (funcModuleAgcId_q.value != '' && funcModuleAgcId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsViewInfoEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
      );
      objViewInfoCond.SetCondFldValue(
        clsViewInfoEN.con_FuncModuleAgcId,
        funcModuleAgcId_q.value,
        '=',
      );
    }
    if (mainTabId_q.value != '' && mainTabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsViewInfoEN.con_MainTabId, mainTabId_q.value);
      objViewInfoCond.SetCondFldValue(clsViewInfoEN.con_MainTabId, mainTabId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineViewInfoConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objViewInfoCond.whereCond = strWhereCond;
  return objViewInfoCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsViewInfoENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListViewInfo.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refvViewInfo_List.value != null) refvViewInfo_List.value.selectAllChecked = false;
};

export function ViewInfo_DeleteKeyIdCache(strPrjId: string, strViewId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In ViewInfoVueShare.ViewInfo.ReFreshCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(ViewInfoVueShare.ViewInfo.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strViewId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strViewId}_${strPrjId}`;
    delete viewInfoCache[cacheKey];
    return;
  }
}
