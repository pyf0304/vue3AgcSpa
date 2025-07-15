/**
 * 类名:vFunctionTemplateRela_SimVueShare(界面:vFunctionTemplateRela_SimCRUD,00050321)
 * 表名:vFunctionTemplateRela_Sim(00050604)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:41
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
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsvFunctionTemplateRela_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimENEx';
import { clsvFunctionTemplateRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortvFunctionTemplateRela_SimBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortvFunctionTemplateRela_SimBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refvFunctionTemplateRela_Sim_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refvFunctionTemplateRela_Sim_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refvFunctionTemplateRela_Sim_List,
};

export const showErrorMessage = ref(false);
export const dataListvFunctionTemplateRela_Sim = ref<Array<clsvFunctionTemplateRela_SimENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const vFunctionTemplateRela_SimCache: { [key: string]: clsvFunctionTemplateRela_SimENEx } =
  {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const functionTemplateId_q = ref('');
export const funcId4GC_q = ref('');
export const codeTypeId_q = ref('');
export const regionTypeId_q = ref('');
const qryVarSet = reactive({
  functionTemplateId_q,
  funcId4GC_q,
  codeTypeId_q,
  regionTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinevFunctionTemplateRela_SimCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (functionTemplateId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
      );
    }
    if (funcId4GC_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
        funcId4GC_q.value,
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsvFunctionTemplateRela_SimEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsvFunctionTemplateRela_SimEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinevFunctionTemplateRela_SimCondition)时出错!请联系管理员!{0}',
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
export const CombinevFunctionTemplateRela_SimConditionObj =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objvFunctionTemplateRela_SimCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (functionTemplateId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
          'like',
        );
      }
      if (funcId4GC_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
          funcId4GC_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
          funcId4GC_q.value,
          'like',
        );
      }
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvFunctionTemplateRela_SimEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
      if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvFunctionTemplateRela_SimEN.con_RegionTypeId,
          regionTypeId_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_RegionTypeId,
          regionTypeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件对象(CombinevFunctionTemplateRela_SimConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvFunctionTemplateRela_SimCond.whereCond = strWhereCond;
    return objvFunctionTemplateRela_SimCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinevFunctionTemplateRela_SimConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objvFunctionTemplateRela_SimCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (functionTemplateId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
          'like',
        );
      }
      if (funcId4GC_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
          funcId4GC_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
          funcId4GC_q.value,
          'like',
        );
      }
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvFunctionTemplateRela_SimEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
      if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvFunctionTemplateRela_SimEN.con_RegionTypeId,
          regionTypeId_q.value,
        );
        objvFunctionTemplateRela_SimCond.SetCondFldValue(
          clsvFunctionTemplateRela_SimEN.con_RegionTypeId,
          regionTypeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombinevFunctionTemplateRela_SimConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvFunctionTemplateRela_SimCond.whereCond = strWhereCond;
    return objvFunctionTemplateRela_SimCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsvFunctionTemplateRela_SimENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListvFunctionTemplateRela_Sim.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refvFunctionTemplateRela_Sim_List.value != null)
    refvFunctionTemplateRela_Sim_List.value.selectAllChecked = false;
};
