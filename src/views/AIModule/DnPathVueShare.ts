/**
 * 类名:DnPathVueShare(界面:DnPathCRUD,00050312)
 * 表名:DnPath(00050591)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 05:08:43
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
import { clsDnPathENEx } from '@/ts/L0Entity/AIModule/clsDnPathENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsDnPathEN } from '@/ts/L0Entity/AIModule/clsDnPathEN';

const ascOrDesc4SortFun = ref('Asc');
const sortDnPathBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDnPathBy,
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
const refDnPath_Detail = ref();
const refDnPath_Edit = ref();
const refDnPath_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDnPath_Detail,
  refDnPath_Edit,
  refDnPath_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDnPath_Detail,
  refDnPath_Edit,
  refDnPath_List,
};

export const showErrorMessage = ref(false);
export const dataListDnPath = ref<Array<clsDnPathENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const dnPathCache: { [key: string]: clsDnPathENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const dnPathName_q = ref('');
export const inDataNodeId_q = ref(0);
export const outDataNodeId_q = ref(0);
export const associationMappingId_q = ref('');
export const prjId_q = ref('');
export const isHasErr_q = ref('0');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  dnPathName_q,
  inDataNodeId_q,
  outDataNodeId_q,
  associationMappingId_q,
  prjId_q,
  isHasErr_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDnPathCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (dnPathName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnPathEN.con_DnPathName,
        dnPathName_q.value,
      );
    }
    if (inDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_InDataNodeId,
        inDataNodeId_q.value,
      );
    }
    if (outDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_OutDataNodeId,
        outDataNodeId_q.value,
      );
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
    }
    if (isHasErr_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_IsHasErr);
    } else if (isHasErr_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_IsHasErr);
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineDnPathCondition)时出错!请联系管理员!{0}',
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
export const CombineDnPathConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDnPathCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDnPathCond.SetCondFldValue(clsDnPathEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (dnPathName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnPathEN.con_DnPathName,
        dnPathName_q.value,
      );
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_DnPathName, dnPathName_q.value, 'like');
    }
    if (inDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_InDataNodeId,
        inDataNodeId_q.value,
      );
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_InDataNodeId, inDataNodeId_q.value, '=');
    }
    if (outDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_OutDataNodeId,
        outDataNodeId_q.value,
      );
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_OutDataNodeId, outDataNodeId_q.value, '=');
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
      objDnPathCond.SetCondFldValue(
        clsDnPathEN.con_AssociationMappingId,
        associationMappingId_q.value,
        '=',
      );
    }
    if (isHasErr_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_IsHasErr);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_IsHasErr, true, '=');
    } else if (isHasErr_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_IsHasErr);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_IsHasErr, false, '=');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_InUse);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_InUse);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineDnPathConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDnPathCond.whereCond = strWhereCond;
  return objDnPathCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDnPathConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDnPathCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDnPathCond.SetCondFldValue(clsDnPathEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (dnPathName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDnPathEN.con_DnPathName,
        dnPathName_q.value,
      );
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_DnPathName, dnPathName_q.value, 'like');
    }
    if (inDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_InDataNodeId,
        inDataNodeId_q.value,
      );
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_InDataNodeId, inDataNodeId_q.value, '=');
    }
    if (outDataNodeId_q.value != 0) {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_OutDataNodeId,
        outDataNodeId_q.value,
      );
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_OutDataNodeId, outDataNodeId_q.value, '=');
    }
    if (associationMappingId_q.value != '' && associationMappingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDnPathEN.con_AssociationMappingId,
        associationMappingId_q.value,
      );
      objDnPathCond.SetCondFldValue(
        clsDnPathEN.con_AssociationMappingId,
        associationMappingId_q.value,
        '=',
      );
    }
    if (isHasErr_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_IsHasErr);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_IsHasErr, true, '=');
    } else if (isHasErr_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_IsHasErr);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_IsHasErr, false, '=');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDnPathEN.con_InUse);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsDnPathEN.con_InUse);
      objDnPathCond.SetCondFldValue(clsDnPathEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineDnPathConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDnPathCond.whereCond = strWhereCond;
  return objDnPathCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsDnPathENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListDnPath.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refDnPath_List.value != null) refDnPath_List.value.selectAllChecked = false;
};

export function DnPath_DeleteKeyIdCache(strDnPathId: string): void {
  if (IsNullOrEmpty(strDnPathId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strDnPathId}`;
    delete dnPathCache[cacheKey];
    return;
  }
}
