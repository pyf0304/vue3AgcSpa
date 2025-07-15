/**
 * 类名:DnFuncMapVueShare(界面:DnFuncMapCRUD,00050283)
 * 表名:DnFuncMap(00050549)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/12 16:12:29
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
import { clsDnFuncMapENEx } from '@/ts/L0Entity/AIModule/clsDnFuncMapENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';

const ascOrDesc4SortFun = ref('Asc');
const sortDnFuncMapBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDnFuncMapBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refDnFuncMap_Detail = ref();
const refDnFuncMap_Edit = ref();
const refDnFuncMap_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDnFuncMap_Detail,
  refDnFuncMap_Edit,
  refDnFuncMap_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDnFuncMap_Detail,
  refDnFuncMap_Edit,
  refDnFuncMap_List,
};

export const showErrorMessage = ref(false);
export const dataListDnFuncMap = ref<Array<clsDnFuncMapENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const dnFuncMapCache: { [key: string]: clsDnFuncMapENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const inDataNodeId_q = ref(0);
export const outDataNodeId_q = ref(0);
export const associationMappingId_q = ref('');
export const funcMapModeId_q = ref('');
export const tabId_q = ref('');
export const prjId_q = ref('');
export const dnFunctionId_q = ref('');
const qryVarSet = reactive({
  inDataNodeId_q,
  outDataNodeId_q,
  associationMappingId_q,
  funcMapModeId_q,
  tabId_q,
  prjId_q,
  dnFunctionId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDnFuncMapCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (inDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_InDataNodeId,
        inDataNodeId_q.value,
      );
    }
    if (outDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_OutDataNodeId,
        outDataNodeId_q.value,
      );
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And DnFuncMap.{0} = '{1}'",
        clsDnFuncMapEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
    }
    if (funcMapModeId_q.value != '' && funcMapModeId_q.value != '0') {
      strWhereCond += Format(
        " And DnFuncMap.{0} = '{1}'",
        clsDnFuncMapEN.con_FuncMapModeId,
        funcMapModeId_q.value,
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDnFuncMapEN.con_TabId, tabId_q.value);
    }
    if (dnFunctionId_q.value != '' && dnFunctionId_q.value != '0') {
      strWhereCond += Format(
        " And DnFuncMap.{0} = '{1}'",
        clsDnFuncMapEN.con_DnFunctionId,
        dnFunctionId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineDnFuncMapCondition)时出错!请联系管理员!{0}',
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
export const CombineDnFuncMapConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDnFuncMapCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (inDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_InDataNodeId,
        inDataNodeId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_InDataNodeId, inDataNodeId_q.value, '=');
    }
    if (outDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_OutDataNodeId,
        outDataNodeId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(
        clsDnFuncMapEN.con_OutDataNodeId,
        outDataNodeId_q.value,
        '=',
      );
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(
        clsDnFuncMapEN.con_AssociationMappingId,
        associationMappingId_q.value,
        '=',
      );
    }
    if (funcMapModeId_q.value != '' && funcMapModeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_FuncMapModeId,
        funcMapModeId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(
        clsDnFuncMapEN.con_FuncMapModeId,
        funcMapModeId_q.value,
        '=',
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDnFuncMapEN.con_TabId, tabId_q.value);
      objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_TabId, tabId_q.value, '=');
    }
    if (dnFunctionId_q.value != '' && dnFunctionId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_DnFunctionId,
        dnFunctionId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_DnFunctionId, dnFunctionId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineDnFuncMapConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDnFuncMapCond.whereCond = strWhereCond;
  return objDnFuncMapCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDnFuncMapConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDnFuncMapCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (inDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_InDataNodeId,
        inDataNodeId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_InDataNodeId, inDataNodeId_q.value, '=');
    }
    if (outDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_OutDataNodeId,
        outDataNodeId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(
        clsDnFuncMapEN.con_OutDataNodeId,
        outDataNodeId_q.value,
        '=',
      );
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(
        clsDnFuncMapEN.con_AssociationMappingId,
        associationMappingId_q.value,
        '=',
      );
    }
    if (funcMapModeId_q.value != '' && funcMapModeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_FuncMapModeId,
        funcMapModeId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(
        clsDnFuncMapEN.con_FuncMapModeId,
        funcMapModeId_q.value,
        '=',
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsDnFuncMapEN.con_TabId, tabId_q.value);
      objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_TabId, tabId_q.value, '=');
    }
    if (dnFunctionId_q.value != '' && dnFunctionId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnFuncMapEN.con_DnFunctionId,
        dnFunctionId_q.value,
      );
      objDnFuncMapCond.SetCondFldValue(clsDnFuncMapEN.con_DnFunctionId, dnFunctionId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineDnFuncMapConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDnFuncMapCond.whereCond = strWhereCond;
  return objDnFuncMapCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsDnFuncMapENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListDnFuncMap.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refDnFuncMap_List.value != null) refDnFuncMap_List.value.selectAllChecked = false;
};

export function DnFuncMap_DeleteKeyIdCache(strDnFuncMapId: string): void {
  if (IsNullOrEmpty(strDnFuncMapId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strDnFuncMapId}`;
    delete dnFuncMapCache[cacheKey];
    return;
  }
}
