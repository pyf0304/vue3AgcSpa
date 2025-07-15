/**
 * 类名:FuncPara4CodeVueShare(界面:FuncPara4CodeCRUD,00050336)
 * 表名:FuncPara4Code(00050384)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 18:59:11
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsFuncPara4CodeENEx } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFuncPara4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFuncPara4CodeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFuncPara4CodeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const FuncPurposeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFuncPara4Code_Edit = ref();
const refFuncPara4Code_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFuncPara4Code_Edit,
  refFuncPara4Code_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFuncPara4Code_Edit,
  refFuncPara4Code_List,
};

export const showErrorMessage = ref(false);
export const dataListFuncPara4Code = ref<Array<clsFuncPara4CodeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const funcPara4CodeCache: { [key: string]: clsFuncPara4CodeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const paraName_q = ref('');
export const dataTypeId_q = ref('');
export const funcPurposeId_q = ref('');
const qryVarSet = reactive({
  paraName_q,
  dataTypeId_q,
  funcPurposeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFuncPara4CodeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (paraName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFuncPara4CodeEN.con_ParaName,
        paraName_q.value,
      );
    }
    if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
      strWhereCond += Format(
        " And FuncPara4Code.{0} = '{1}'",
        clsFuncPara4CodeEN.con_DataTypeId,
        dataTypeId_q.value,
      );
    }
    if (funcPurposeId_q.value != '' && funcPurposeId_q.value != '0') {
      strWhereCond += Format(
        " And FuncPara4Code.{0} = '{1}'",
        clsFuncPara4CodeEN.con_FuncPurposeId,
        funcPurposeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFuncPara4CodeCondition)时出错!请联系管理员!{0}',
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
export const CombineFuncPara4CodeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFuncPara4CodeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (paraName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFuncPara4CodeEN.con_ParaName,
        paraName_q.value,
      );
      objFuncPara4CodeCond.SetCondFldValue(
        clsFuncPara4CodeEN.con_ParaName,
        paraName_q.value,
        'like',
      );
    }
    if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFuncPara4CodeEN.con_DataTypeId,
        dataTypeId_q.value,
      );
      objFuncPara4CodeCond.SetCondFldValue(
        clsFuncPara4CodeEN.con_DataTypeId,
        dataTypeId_q.value,
        '=',
      );
    }
    if (funcPurposeId_q.value != '' && funcPurposeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFuncPara4CodeEN.con_FuncPurposeId,
        funcPurposeId_q.value,
      );
      objFuncPara4CodeCond.SetCondFldValue(
        clsFuncPara4CodeEN.con_FuncPurposeId,
        funcPurposeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFuncPara4CodeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFuncPara4CodeCond.whereCond = strWhereCond;
  return objFuncPara4CodeCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFuncPara4CodeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFuncPara4Code.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFuncPara4Code_List.value != null) refFuncPara4Code_List.value.selectAllChecked = false;
};

export function FuncPara4Code_DeleteKeyIdCache(
  strFuncPurposeId: string,
  strFuncParaId4Code: string,
): void {
  if (IsNullOrEmpty(strFuncPurposeId) == true) {
    const strMsg = Format(
      '参数:[strFuncPurposeId]不能为空!(In FuncPara4CodeVueShare.FuncPara4Code.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncPurposeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncPurposeId]的长度:[{0}]不正确!(FuncPara4CodeVueShare.FuncPara4Code.ReFreshCache)',
      strFuncPurposeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncParaId4Code) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strFuncParaId4Code}_${strFuncPurposeId}`;
    delete funcPara4CodeCache[cacheKey];
    return;
  }
}
