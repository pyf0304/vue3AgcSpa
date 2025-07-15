/**
 * 类名:PrjTabRelationTypeVueShare(界面:PrjTabRelationTypeCRUD,00050324)
 * 表名:PrjTabRelationType(00050607)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:32
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
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsPrjTabRelationTypeENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPrjTabRelationTypeEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortPrjTabRelationTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjTabRelationTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refPrjTabRelationType_Detail = ref();
const refPrjTabRelationType_Edit = ref();
const refPrjTabRelationType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTabRelationType_Detail,
  refPrjTabRelationType_Edit,
  refPrjTabRelationType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTabRelationType_Detail,
  refPrjTabRelationType_Edit,
  refPrjTabRelationType_List,
};

export const showErrorMessage = ref(false);
export const dataListPrjTabRelationType = ref<Array<clsPrjTabRelationTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const prjTabRelationTypeCache: { [key: string]: clsPrjTabRelationTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const prjTabRelaTypeId_q = ref('');
export const tabRelationTypeName_q = ref('');
const qryVarSet = reactive({
  prjTabRelaTypeId_q,
  tabRelationTypeName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabRelationTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (prjTabRelaTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
        prjTabRelaTypeId_q.value,
      );
    }
    if (tabRelationTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationTypeEN.con_TabRelationTypeName,
        tabRelationTypeName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjTabRelationTypeCondition)时出错!请联系管理员!{0}',
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
export const CombinePrjTabRelationTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objPrjTabRelationTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (prjTabRelaTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
        prjTabRelaTypeId_q.value,
      );
      objPrjTabRelationTypeCond.SetCondFldValue(
        clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
        prjTabRelaTypeId_q.value,
        'like',
      );
    }
    if (tabRelationTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjTabRelationTypeEN.con_TabRelationTypeName,
        tabRelationTypeName_q.value,
      );
      objPrjTabRelationTypeCond.SetCondFldValue(
        clsPrjTabRelationTypeEN.con_TabRelationTypeName,
        tabRelationTypeName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombinePrjTabRelationTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjTabRelationTypeCond.whereCond = strWhereCond;
  return objPrjTabRelationTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabRelationTypeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objPrjTabRelationTypeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (prjTabRelaTypeId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
          prjTabRelaTypeId_q.value,
        );
        objPrjTabRelationTypeCond.SetCondFldValue(
          clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
          prjTabRelaTypeId_q.value,
          'like',
        );
      }
      if (tabRelationTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjTabRelationTypeEN.con_TabRelationTypeName,
          tabRelationTypeName_q.value,
        );
        objPrjTabRelationTypeCond.SetCondFldValue(
          clsPrjTabRelationTypeEN.con_TabRelationTypeName,
          tabRelationTypeName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombinePrjTabRelationTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objPrjTabRelationTypeCond.whereCond = strWhereCond;
    return objPrjTabRelationTypeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsPrjTabRelationTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListPrjTabRelationType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refPrjTabRelationType_List.value != null)
    refPrjTabRelationType_List.value.selectAllChecked = false;
};

export function PrjTabRelationType_DeleteKeyIdCache(strPrjTabRelaTypeId: string): void {
  if (IsNullOrEmpty(strPrjTabRelaTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strPrjTabRelaTypeId}`;
    delete prjTabRelationTypeCache[cacheKey];
    return;
  }
}
