/**
 * 类名:PrjTabRelationVueShare(界面:PrjTabRelationCRUD,00050325)
 * 表名:PrjTabRelation(00050606)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 23:26:51
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPrjTabRelationENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPrjTabRelationEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationEN';

const ascOrDesc4SortFun = ref('Asc');
const sortPrjTabRelationBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjTabRelationBy,
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
const refPrjTabRelation_Detail = ref();
const refPrjTabRelation_Edit = ref();
const refPrjTabRelation_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTabRelation_Detail,
  refPrjTabRelation_Edit,
  refPrjTabRelation_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTabRelation_Detail,
  refPrjTabRelation_Edit,
  refPrjTabRelation_List,
};

export const showErrorMessage = ref(false);
export const dataListPrjTabRelation = ref<Array<clsPrjTabRelationENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const prjTabRelationCache: { [key: string]: clsPrjTabRelationENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const prjRelationId_q = ref('');
export const relationName_q = ref('');
export const tabId_q = ref('');
export const prjTabRelaTypeId_q = ref('');
export const relationTabId_q = ref('');
const qryVarSet = reactive({
  prjRelationId_q,
  relationName_q,
  tabId_q,
  prjTabRelaTypeId_q,
  relationTabId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabRelationCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (prjRelationId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationEN.con_PrjRelationId,
        prjRelationId_q.value,
      );
    }
    if (relationName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationEN.con_RelationName,
        relationName_q.value,
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(
        " And PrjTabRelation.{0} = '{1}'",
        clsPrjTabRelationEN.con_TabId,
        tabId_q.value,
      );
    }
    if (prjTabRelaTypeId_q.value != '' && prjTabRelaTypeId_q.value != '0') {
      strWhereCond += Format(
        " And PrjTabRelation.{0} = '{1}'",
        clsPrjTabRelationEN.con_PrjTabRelaTypeId,
        prjTabRelaTypeId_q.value,
      );
    }
    if (relationTabId_q.value != '' && relationTabId_q.value != '0') {
      strWhereCond += Format(
        " And PrjTabRelation.{0} = '{1}'",
        clsPrjTabRelationEN.con_RelationTabId,
        relationTabId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjTabRelationCondition)时出错!请联系管理员!{0}',
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
export const CombinePrjTabRelationConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objPrjTabRelationCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (prjRelationId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationEN.con_PrjRelationId,
        prjRelationId_q.value,
      );
      objPrjTabRelationCond.SetCondFldValue(
        clsPrjTabRelationEN.con_PrjRelationId,
        prjRelationId_q.value,
        'like',
      );
    }
    if (relationName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationEN.con_RelationName,
        relationName_q.value,
      );
      objPrjTabRelationCond.SetCondFldValue(
        clsPrjTabRelationEN.con_RelationName,
        relationName_q.value,
        'like',
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabRelationEN.con_TabId, tabId_q.value);
      objPrjTabRelationCond.SetCondFldValue(clsPrjTabRelationEN.con_TabId, tabId_q.value, '=');
    }
    if (prjTabRelaTypeId_q.value != '' && prjTabRelaTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabRelationEN.con_PrjTabRelaTypeId,
        prjTabRelaTypeId_q.value,
      );
      objPrjTabRelationCond.SetCondFldValue(
        clsPrjTabRelationEN.con_PrjTabRelaTypeId,
        prjTabRelaTypeId_q.value,
        '=',
      );
    }
    if (relationTabId_q.value != '' && relationTabId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabRelationEN.con_RelationTabId,
        relationTabId_q.value,
      );
      objPrjTabRelationCond.SetCondFldValue(
        clsPrjTabRelationEN.con_RelationTabId,
        relationTabId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombinePrjTabRelationConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjTabRelationCond.whereCond = strWhereCond;
  return objPrjTabRelationCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabRelationConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objPrjTabRelationCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (prjRelationId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjTabRelationEN.con_PrjRelationId,
          prjRelationId_q.value,
        );
        objPrjTabRelationCond.SetCondFldValue(
          clsPrjTabRelationEN.con_PrjRelationId,
          prjRelationId_q.value,
          'like',
        );
      }
      if (relationName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjTabRelationEN.con_RelationName,
          relationName_q.value,
        );
        objPrjTabRelationCond.SetCondFldValue(
          clsPrjTabRelationEN.con_RelationName,
          relationName_q.value,
          'like',
        );
      }
      if (tabId_q.value != '' && tabId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsPrjTabRelationEN.con_TabId, tabId_q.value);
        objPrjTabRelationCond.SetCondFldValue(clsPrjTabRelationEN.con_TabId, tabId_q.value, '=');
      }
      if (prjTabRelaTypeId_q.value != '' && prjTabRelaTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_PrjTabRelaTypeId,
          prjTabRelaTypeId_q.value,
        );
        objPrjTabRelationCond.SetCondFldValue(
          clsPrjTabRelationEN.con_PrjTabRelaTypeId,
          prjTabRelaTypeId_q.value,
          '=',
        );
      }
      if (relationTabId_q.value != '' && relationTabId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjTabRelationEN.con_RelationTabId,
          relationTabId_q.value,
        );
        objPrjTabRelationCond.SetCondFldValue(
          clsPrjTabRelationEN.con_RelationTabId,
          relationTabId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombinePrjTabRelationConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objPrjTabRelationCond.whereCond = strWhereCond;
    return objPrjTabRelationCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsPrjTabRelationENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListPrjTabRelation.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refPrjTabRelation_List.value != null) refPrjTabRelation_List.value.selectAllChecked = false;
};

export function PrjTabRelation_DeleteKeyIdCache(strPrjId: string, strPrjRelationId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In PrjTabRelationVueShare.PrjTabRelation.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(PrjTabRelationVueShare.PrjTabRelation.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjRelationId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strPrjRelationId}_${strPrjId}`;
    delete prjTabRelationCache[cacheKey];
    return;
  }
}
