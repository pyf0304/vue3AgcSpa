/**
 * 类名:CtlTypeVueShare(界面:CtlTypeCRUD,00050296)
 * 表名:CtlType(00050058)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:29
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
import { clsCtlTypeENEx } from '@/ts/L0Entity/PrjInterface/clsCtlTypeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortCtlTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCtlTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refCtlType_Edit = ref();
const refCtlType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCtlType_Edit,
  refCtlType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCtlType_Edit,
  refCtlType_List,
};

export const showErrorMessage = ref(false);
export const dataListCtlType = ref<Array<clsCtlTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const ctlTypeCache: { [key: string]: clsCtlTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const ctlTypeId_q = ref('');
export const ctlTypeName_q = ref('');
export const ctlTypeENName_q = ref('');
export const ctlCnName_q = ref('');
export const inUse_q = ref('0');
export const isVisible_q = ref('0');
const qryVarSet = reactive({
  ctlTypeId_q,
  ctlTypeName_q,
  ctlTypeENName_q,
  ctlCnName_q,
  inUse_q,
  isVisible_q,
});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0');
export const isVisible_f = ref('0');
const featureVarSet = reactive({
  inUse_f,
  isVisible_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCtlTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (ctlTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
    if (ctlTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeName,
        ctlTypeName_q.value,
      );
    }
    if (ctlTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeENName,
        ctlTypeENName_q.value,
      );
    }
    if (ctlCnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlCnName,
        ctlCnName_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_InUse);
    }
    if (isVisible_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_IsVisible);
    } else if (isVisible_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_IsVisible);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCtlTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineCtlTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCtlTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctlTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlTypeId, ctlTypeId_q.value, 'like');
    }
    if (ctlTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeName,
        ctlTypeName_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlTypeName, ctlTypeName_q.value, 'like');
    }
    if (ctlTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeENName,
        ctlTypeENName_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlTypeENName, ctlTypeENName_q.value, 'like');
    }
    if (ctlCnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlCnName,
        ctlCnName_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlCnName, ctlCnName_q.value, 'like');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_InUse);
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_InUse);
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_InUse, false, '=');
    }
    if (isVisible_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_IsVisible);
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_IsVisible, true, '=');
    } else if (isVisible_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_IsVisible);
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_IsVisible, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCtlTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCtlTypeCond.whereCond = strWhereCond;
  return objCtlTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCtlTypeConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCtlTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctlTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlTypeId, ctlTypeId_q.value, 'like');
    }
    if (ctlTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeName,
        ctlTypeName_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlTypeName, ctlTypeName_q.value, 'like');
    }
    if (ctlTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlTypeENName,
        ctlTypeENName_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlTypeENName, ctlTypeENName_q.value, 'like');
    }
    if (ctlCnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCtlTypeEN.con_CtlCnName,
        ctlCnName_q.value,
      );
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_CtlCnName, ctlCnName_q.value, 'like');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_InUse);
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_InUse);
      objCtlTypeCond.SetCondFldValue(clsCtlTypeEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineCtlTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCtlTypeCond.whereCond = strWhereCond;
  return objCtlTypeCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCtlTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCtlType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refCtlType_List.value != null) refCtlType_List.value.selectAllChecked = false;
};

export function CtlType_DeleteKeyIdCache(strCtlTypeId: string): void {
  if (IsNullOrEmpty(strCtlTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strCtlTypeId}`;
    delete ctlTypeCache[cacheKey];
    return;
  }
}
