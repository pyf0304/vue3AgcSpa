/**
 * 类名:FunctionTemplateRelaVueShare(界面:FunctionTemplateRelaCRUD,00050327)
 * 表名:FunctionTemplateRela(00050313)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 02:03:54
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
import { clsFunctionTemplateRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFunctionTemplateRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFunctionTemplateRelaBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CodeTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const FunctionTemplateId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFunctionTemplateRela_Detail = ref();
const refFunctionTemplateRela_Edit = ref();
const refFunctionTemplateRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunctionTemplateRela_Detail,
  refFunctionTemplateRela_Edit,
  refFunctionTemplateRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunctionTemplateRela_Detail,
  refFunctionTemplateRela_Edit,
  refFunctionTemplateRela_List,
};

export const showErrorMessage = ref(false);
export const dataListFunctionTemplateRela = ref<Array<clsFunctionTemplateRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const functionTemplateRelaCache: { [key: string]: clsFunctionTemplateRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const functionTemplateId_q = ref('');
export const regionTypeId_q = ref('');
export const codeTypeId_q = ref('');
export const funcId4GC_q = ref('');
export const isGeneCode_q = ref('0');
const qryVarSet = reactive({
  functionTemplateId_q,
  regionTypeId_q,
  codeTypeId_q,
  funcId4GC_q,
  isGeneCode_q,
});
export { qryVarSet };

//功能区变量定义
export const functionTemplateId_f = ref('');
const featureVarSet = reactive({
  functionTemplateId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunctionTemplateRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (functionTemplateId_q.value != '' && functionTemplateId_q.value != '0') {
      strWhereCond += Format(
        " And FunctionTemplateRela.{0} = '{1}'",
        clsFunctionTemplateRelaEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
      );
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And FunctionTemplateRela.{0} = '{1}'",
        clsFunctionTemplateRelaEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And FunctionTemplateRela.{0} = '{1}'",
        clsFunctionTemplateRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (funcId4GC_q.value != '' && funcId4GC_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunctionTemplateRelaEN.con_FuncId4GC,
        funcId4GC_q.value,
      );
    }
    if (isGeneCode_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunctionTemplateRelaEN.con_IsGeneCode);
    } else if (isGeneCode_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunctionTemplateRelaEN.con_IsGeneCode);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFunctionTemplateRelaCondition)时出错!请联系管理员!{0}',
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
export const CombineFunctionTemplateRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFunctionTemplateRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (functionTemplateId_q.value != '' && functionTemplateId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunctionTemplateRelaEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
      );
      objFunctionTemplateRelaCond.SetCondFldValue(
        clsFunctionTemplateRelaEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
        '=',
      );
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunctionTemplateRelaEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
      objFunctionTemplateRelaCond.SetCondFldValue(
        clsFunctionTemplateRelaEN.con_RegionTypeId,
        regionTypeId_q.value,
        '=',
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunctionTemplateRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objFunctionTemplateRelaCond.SetCondFldValue(
        clsFunctionTemplateRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
        '=',
      );
    }
    if (funcId4GC_q.value != '' && funcId4GC_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunctionTemplateRelaEN.con_FuncId4GC,
        funcId4GC_q.value,
      );
      objFunctionTemplateRelaCond.SetCondFldValue(
        clsFunctionTemplateRelaEN.con_FuncId4GC,
        funcId4GC_q.value,
        '=',
      );
    }
    if (isGeneCode_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunctionTemplateRelaEN.con_IsGeneCode);
      objFunctionTemplateRelaCond.SetCondFldValue(
        clsFunctionTemplateRelaEN.con_IsGeneCode,
        true,
        '=',
      );
    } else if (isGeneCode_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunctionTemplateRelaEN.con_IsGeneCode);
      objFunctionTemplateRelaCond.SetCondFldValue(
        clsFunctionTemplateRelaEN.con_IsGeneCode,
        false,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFunctionTemplateRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFunctionTemplateRelaCond.whereCond = strWhereCond;
  return objFunctionTemplateRelaCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunctionTemplateRelaConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFunctionTemplateRelaCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (functionTemplateId_q.value != '' && functionTemplateId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
        );
        objFunctionTemplateRelaCond.SetCondFldValue(
          clsFunctionTemplateRelaEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
          '=',
        );
      }
      if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_RegionTypeId,
          regionTypeId_q.value,
        );
        objFunctionTemplateRelaCond.SetCondFldValue(
          clsFunctionTemplateRelaEN.con_RegionTypeId,
          regionTypeId_q.value,
          '=',
        );
      }
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objFunctionTemplateRelaCond.SetCondFldValue(
          clsFunctionTemplateRelaEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
      if (funcId4GC_q.value != '' && funcId4GC_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateRelaEN.con_FuncId4GC,
          funcId4GC_q.value,
        );
        objFunctionTemplateRelaCond.SetCondFldValue(
          clsFunctionTemplateRelaEN.con_FuncId4GC,
          funcId4GC_q.value,
          '=',
        );
      }
      if (isGeneCode_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsFunctionTemplateRelaEN.con_IsGeneCode);
        objFunctionTemplateRelaCond.SetCondFldValue(
          clsFunctionTemplateRelaEN.con_IsGeneCode,
          true,
          '=',
        );
      } else if (isGeneCode_q.value == 'false') {
        strWhereCond += Format(" And {0} = '0'", clsFunctionTemplateRelaEN.con_IsGeneCode);
        objFunctionTemplateRelaCond.SetCondFldValue(
          clsFunctionTemplateRelaEN.con_IsGeneCode,
          false,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFunctionTemplateRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFunctionTemplateRelaCond.whereCond = strWhereCond;
    return objFunctionTemplateRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFunctionTemplateRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFunctionTemplateRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFunctionTemplateRela_List.value != null)
    refFunctionTemplateRela_List.value.selectAllChecked = false;
};

export function FunctionTemplateRela_DeleteKeyIdCache(
  strFunctionTemplateId: string,
  lngmId: number,
): void {
  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In FunctionTemplateRelaVueShare.FunctionTemplateRela.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(FunctionTemplateRelaVueShare.FunctionTemplateRela.ReFreshCache)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strFunctionTemplateId}`;
    delete functionTemplateRelaCache[cacheKey];
    return;
  }
}
