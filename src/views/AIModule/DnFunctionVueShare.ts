/**
 * 类名:DnFunctionVueShare(界面:DnFunctionCRUD,00050281)
 * 表名:DnFunction(00050552)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:28
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
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsDnFunctionENEx } from '@/ts/L0Entity/AIModule/clsDnFunctionENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';

const ascOrDesc4SortFun = ref('Asc');
const sortDnFunctionBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDnFunctionBy,
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
const refDnFunction_Detail = ref();
const refDnFunction_Edit = ref();
const refDnFunction_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDnFunction_Detail,
  refDnFunction_Edit,
  refDnFunction_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDnFunction_Detail,
  refDnFunction_Edit,
  refDnFunction_List,
};

export const showErrorMessage = ref(false);
export const dataListDnFunction = ref<Array<clsDnFunctionENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const dnFunctionCache: { [key: string]: clsDnFunctionENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const dnFunctionId_q = ref('');
export const dnFunctionName_q = ref('');
export const associationMappingId_q = ref('');
export const prjId_q = ref('');
const qryVarSet = reactive({
  dnFunctionId_q,
  dnFunctionName_q,
  associationMappingId_q,
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
export const CombineDnFunctionCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (dnFunctionId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnFunctionEN.con_DnFunctionId,
        dnFunctionId_q.value,
      );
    }
    if (dnFunctionName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnFunctionEN.con_DnFunctionName,
        dnFunctionName_q.value,
      );
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFunctionEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineDnFunctionCondition)时出错!请联系管理员!{0}',
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
export const CombineDnFunctionConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDnFunctionCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDnFunctionCond.SetCondFldValue(clsDnFunctionEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (dnFunctionId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnFunctionEN.con_DnFunctionId,
        dnFunctionId_q.value,
      );
      objDnFunctionCond.SetCondFldValue(
        clsDnFunctionEN.con_DnFunctionId,
        dnFunctionId_q.value,
        'like',
      );
    }
    if (dnFunctionName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnFunctionEN.con_DnFunctionName,
        dnFunctionName_q.value,
      );
      objDnFunctionCond.SetCondFldValue(
        clsDnFunctionEN.con_DnFunctionName,
        dnFunctionName_q.value,
        'like',
      );
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFunctionEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
      objDnFunctionCond.SetCondFldValue(
        clsDnFunctionEN.con_AssociationMappingId,
        associationMappingId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineDnFunctionConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDnFunctionCond.whereCond = strWhereCond;
  return objDnFunctionCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDnFunctionConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDnFunctionCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDnFunctionCond.SetCondFldValue(clsDnFunctionEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (dnFunctionId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnFunctionEN.con_DnFunctionId,
        dnFunctionId_q.value,
      );
      objDnFunctionCond.SetCondFldValue(
        clsDnFunctionEN.con_DnFunctionId,
        dnFunctionId_q.value,
        'like',
      );
    }
    if (dnFunctionName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnFunctionEN.con_DnFunctionName,
        dnFunctionName_q.value,
      );
      objDnFunctionCond.SetCondFldValue(
        clsDnFunctionEN.con_DnFunctionName,
        dnFunctionName_q.value,
        'like',
      );
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFunctionEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
      objDnFunctionCond.SetCondFldValue(
        clsDnFunctionEN.con_AssociationMappingId,
        associationMappingId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineDnFunctionConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDnFunctionCond.whereCond = strWhereCond;
  return objDnFunctionCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsDnFunctionENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListDnFunction.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refDnFunction_List.value != null) refDnFunction_List.value.selectAllChecked = false;
};

export function DnFunction_DeleteKeyIdCache(strPrjId: string, strDnFunctionId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In DnFunctionVueShare.DnFunction.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(DnFunctionVueShare.DnFunction.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strDnFunctionId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strDnFunctionId}_${strPrjId}`;
    delete dnFunctionCache[cacheKey];
    return;
  }
}
