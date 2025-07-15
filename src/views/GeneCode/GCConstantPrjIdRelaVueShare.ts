/**
 * 类名:GCConstantPrjIdRelaVueShare(界面:GCConstantPrjIdRelaCRUD,00050344)
 * 表名:GCConstantPrjIdRela(00050641)
 * 版本:2025.06.21.1(服务器:PYF-AI)
 * 日期:2025/06/30 00:00:08
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
import { clsGCConstantPrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';

const ascOrDesc4SortFun = ref('Asc');
const sortGCConstantPrjIdRelaBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortGCConstantPrjIdRelaBy,
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
const refGCConstantPrjIdRela_Detail = ref();
const refGCConstantPrjIdRela_Edit = ref();
const refGCConstantPrjIdRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCConstantPrjIdRela_Detail,
  refGCConstantPrjIdRela_Edit,
  refGCConstantPrjIdRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCConstantPrjIdRela_Detail,
  refGCConstantPrjIdRela_Edit,
  refGCConstantPrjIdRela_List,
};

export const showErrorMessage = ref(false);
export const dataListGCConstantPrjIdRela = ref<Array<clsGCConstantPrjIdRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const gCConstantPrjIdRelaCache: { [key: string]: clsGCConstantPrjIdRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const prjId_q = ref('');
export const dataTypeId_q = ref('');
export const constName_q = ref('');
export const constId_q = ref('');
const qryVarSet = reactive({
  prjId_q,
  dataTypeId_q,
  constName_q,
  constId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCConstantPrjIdRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (prjId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCConstantPrjIdRelaEN.con_PrjId,
        prjId_q.value,
      );
    }
    if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
      strWhereCond += Format(
        " And  ConstId in (Select ConstId from GCDefaConstants where DataTypeId = '{0}')",
        dataTypeId_q.value,
      );
    }
    if (constName_q.value != '') {
      strWhereCond += Format(
        " And  ConstId in (Select ConstId from GCDefaConstants where ConstName like '%{0}%') ",
        constName_q.value,
      );
    }
    if (constId_q.value != '' && constId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsGCConstantPrjIdRelaEN.con_ConstId,
        constId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineGCConstantPrjIdRelaCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCConstantPrjIdRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGCConstantPrjIdRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (prjId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCConstantPrjIdRelaEN.con_PrjId,
        prjId_q.value,
      );
      objGCConstantPrjIdRelaCond.SetCondFldValue(
        clsGCConstantPrjIdRelaEN.con_PrjId,
        prjId_q.value,
        'like',
      );
    }
    if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsGCConstantPrjIdRelaENEx.con_DataTypeId,
        dataTypeId_q.value,
      );
      objGCConstantPrjIdRelaCond.SetCondFldValue(
        clsGCConstantPrjIdRelaENEx.con_DataTypeId,
        dataTypeId_q.value,
        '=',
      );
    }
    if (constName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCConstantPrjIdRelaENEx.con_ConstName,
        constName_q.value,
      );
      objGCConstantPrjIdRelaCond.SetCondFldValue(
        clsGCConstantPrjIdRelaENEx.con_ConstName,
        constName_q.value,
        'like',
      );
    }
    if (constId_q.value != '' && constId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsGCConstantPrjIdRelaEN.con_ConstId,
        constId_q.value,
      );
      objGCConstantPrjIdRelaCond.SetCondFldValue(
        clsGCConstantPrjIdRelaEN.con_ConstId,
        constId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineGCConstantPrjIdRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGCConstantPrjIdRelaCond.whereCond = strWhereCond;
  return objGCConstantPrjIdRelaCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCConstantPrjIdRelaConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objGCConstantPrjIdRelaCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (prjId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCConstantPrjIdRelaEN.con_PrjId,
          prjId_q.value,
        );
        objGCConstantPrjIdRelaCond.SetCondFldValue(
          clsGCConstantPrjIdRelaEN.con_PrjId,
          prjId_q.value,
          'like',
        );
      }
      if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsGCConstantPrjIdRelaENEx.con_DataTypeId,
          dataTypeId_q.value,
        );
        objGCConstantPrjIdRelaCond.SetCondFldValue(
          clsGCConstantPrjIdRelaENEx.con_DataTypeId,
          dataTypeId_q.value,
          '=',
        );
      }
      if (constName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCConstantPrjIdRelaENEx.con_ConstName,
          constName_q.value,
        );
        objGCConstantPrjIdRelaCond.SetCondFldValue(
          clsGCConstantPrjIdRelaENEx.con_ConstName,
          constName_q.value,
          'like',
        );
      }
      if (constId_q.value != '' && constId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsGCConstantPrjIdRelaEN.con_ConstId,
          constId_q.value,
        );
        objGCConstantPrjIdRelaCond.SetCondFldValue(
          clsGCConstantPrjIdRelaEN.con_ConstId,
          constId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineGCConstantPrjIdRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objGCConstantPrjIdRelaCond.whereCond = strWhereCond;
    return objGCConstantPrjIdRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsGCConstantPrjIdRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListGCConstantPrjIdRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refGCConstantPrjIdRela_List.value != null)
    refGCConstantPrjIdRela_List.value.selectAllChecked = false;
};

export function GCConstantPrjIdRela_DeleteKeyIdCache(strConstId: string, strPrjId: string): void {
  if (IsNullOrEmpty(strConstId) == false && IsNullOrEmpty(strPrjId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strConstId}_${strPrjId}`;
    delete gCConstantPrjIdRelaCache[cacheKey];
    return;
  }
}
