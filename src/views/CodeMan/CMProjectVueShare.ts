/**
 * 类名:CMProjectVueShare(界面:CMProjectCRUD,00050318)
 * 表名:CMProject(00050512)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:02
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:代码管理(CodeMan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsCMProjectENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';

const ascOrDesc4SortFun = ref('Asc');
const sortCMProjectBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCMProjectBy,
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
const refCMProject_Detail = ref();
const refCMProject_Edit = ref();
const refCMProject_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCMProject_Detail,
  refCMProject_Edit,
  refCMProject_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCMProject_Detail,
  refCMProject_Edit,
  refCMProject_List,
};

export const showErrorMessage = ref(false);
export const dataListCMProject = ref<Array<clsCMProjectENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const cMProjectCache: { [key: string]: clsCMProjectENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const cmPrjId_q = ref('');
export const cmPrjName_q = ref('');
export const prjId_q = ref('');
export const useStateId_q = ref('');
const qryVarSet = reactive({
  cmPrjId_q,
  cmPrjName_q,
  prjId_q,
  useStateId_q,
});
export { qryVarSet };

//功能区变量定义
export const applicationTypeId_f = ref(0);
const featureVarSet = reactive({
  applicationTypeId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCMProjectCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (cmPrjId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsCMProjectEN.con_CmPrjId, cmPrjId_q.value);
    }
    if (cmPrjName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCMProjectEN.con_CmPrjName,
        cmPrjName_q.value,
      );
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCMProjectEN.con_UseStateId, useStateId_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCMProjectCondition)时出错!请联系管理员!{0}',
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
export const CombineCMProjectConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCMProjectCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (cmPrjId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsCMProjectEN.con_CmPrjId, cmPrjId_q.value);
      objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_CmPrjId, cmPrjId_q.value, 'like');
    }
    if (cmPrjName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCMProjectEN.con_CmPrjName,
        cmPrjName_q.value,
      );
      objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_CmPrjName, cmPrjName_q.value, 'like');
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCMProjectEN.con_UseStateId, useStateId_q.value);
      objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_UseStateId, useStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCMProjectConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCMProjectCond.whereCond = strWhereCond;
  return objCMProjectCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCMProjectConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCMProjectCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (cmPrjId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsCMProjectEN.con_CmPrjId, cmPrjId_q.value);
      objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_CmPrjId, cmPrjId_q.value, 'like');
    }
    if (cmPrjName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCMProjectEN.con_CmPrjName,
        cmPrjName_q.value,
      );
      objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_CmPrjName, cmPrjName_q.value, 'like');
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCMProjectEN.con_UseStateId, useStateId_q.value);
      objCMProjectCond.SetCondFldValue(clsCMProjectEN.con_UseStateId, useStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineCMProjectConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCMProjectCond.whereCond = strWhereCond;
  return objCMProjectCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCMProjectENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCMProject.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refCMProject_List.value != null) refCMProject_List.value.selectAllChecked = false;
};

export function CMProject_DeleteKeyIdCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strCmPrjId}`;
    delete cMProjectCache[cacheKey];
    return;
  }
}
