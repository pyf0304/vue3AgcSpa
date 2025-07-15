/**
 * 类名:GCVariableVueShare(界面:GCVariableCRUD,00050288)
 * 表名:GCVariable(00050559)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:29
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsGCVariableENEx } from '@/ts/L0Entity/GeneCode/clsGCVariableENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';

const ascOrDesc4SortFun = ref('Asc');
const sortGCVariableBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortGCVariableBy,
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
const refGCVariable_Detail = ref();
const refGCVariable_Edit = ref();
const refGCVariable_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCVariable_Detail,
  refGCVariable_Edit,
  refGCVariable_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCVariable_Detail,
  refGCVariable_Edit,
  refGCVariable_List,
};

export const showErrorMessage = ref(false);
export const dataListGCVariable = ref<Array<clsGCVariableENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const gCVariableCache: { [key: string]: clsGCVariableENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const varId_q = ref('');
export const varName_q = ref('');
export const varTypeId_q = ref('');
const qryVarSet = reactive({
  varId_q,
  varName_q,
  varTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCVariableCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (varId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsGCVariableEN.con_VarId, varId_q.value);
    }
    if (varName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsGCVariableEN.con_VarName, varName_q.value);
    }
    if (varTypeId_q.value != '' && varTypeId_q.value != '0') {
      strWhereCond += Format(
        " And GCVariable.{0} = '{1}'",
        clsGCVariableEN.con_VarTypeId,
        varTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineGCVariableCondition)时出错!请联系管理员!{0}',
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
export const CombineGCVariableConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGCVariableCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (varId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsGCVariableEN.con_VarId, varId_q.value);
      objGCVariableCond.SetCondFldValue(clsGCVariableEN.con_VarId, varId_q.value, 'like');
    }
    if (varName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsGCVariableEN.con_VarName, varName_q.value);
      objGCVariableCond.SetCondFldValue(clsGCVariableEN.con_VarName, varName_q.value, 'like');
    }
    if (varTypeId_q.value != '' && varTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsGCVariableEN.con_VarTypeId, varTypeId_q.value);
      objGCVariableCond.SetCondFldValue(clsGCVariableEN.con_VarTypeId, varTypeId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineGCVariableConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGCVariableCond.whereCond = strWhereCond;
  return objGCVariableCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCVariableConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGCVariableCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (varId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsGCVariableEN.con_VarId, varId_q.value);
      objGCVariableCond.SetCondFldValue(clsGCVariableEN.con_VarId, varId_q.value, 'like');
    }
    if (varName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsGCVariableEN.con_VarName, varName_q.value);
      objGCVariableCond.SetCondFldValue(clsGCVariableEN.con_VarName, varName_q.value, 'like');
    }
    if (varTypeId_q.value != '' && varTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsGCVariableEN.con_VarTypeId, varTypeId_q.value);
      objGCVariableCond.SetCondFldValue(clsGCVariableEN.con_VarTypeId, varTypeId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineGCVariableConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGCVariableCond.whereCond = strWhereCond;
  return objGCVariableCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsGCVariableENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListGCVariable.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refGCVariable_List.value != null) refGCVariable_List.value.selectAllChecked = false;
};

export function GCVariable_DeleteKeyIdCache(strVarId: string): void {
  if (IsNullOrEmpty(strVarId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strVarId}`;
    delete gCVariableCache[cacheKey];
    return;
  }
}
