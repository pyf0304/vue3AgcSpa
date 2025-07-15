/**
 * 类名:Function4CodeVueShare(界面:Function4CodeCRUD,00050333)
 * 表名:Function4Code(00050386)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 19:23:20
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
import { clsFunction4CodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFunction4CodeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFunction4CodeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFunction4Code_Detail = ref();
const refFunction4Code_Edit = ref();
const refFunction4Code_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunction4Code_Detail,
  refFunction4Code_Edit,
  refFunction4Code_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunction4Code_Detail,
  refFunction4Code_Edit,
  refFunction4Code_List,
};

export const showErrorMessage = ref(false);
export const dataListFunction4Code = ref<Array<clsFunction4CodeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const function4CodeCache: { [key: string]: clsFunction4CodeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const funcId4Code_q = ref('');
export const funcPurposeId_q = ref('');
export const applicationTypeId_q = ref(0);
export const funcTypeId_q = ref('');
export const codeTypeId_q = ref('');
export const returnTypeId_q = ref('');
export const funcName4Code_q = ref('');
const qryVarSet = reactive({
  funcId4Code_q,
  funcPurposeId_q,
  applicationTypeId_q,
  funcTypeId_q,
  codeTypeId_q,
  returnTypeId_q,
  funcName4Code_q,
});
export { qryVarSet };

//功能区变量定义
export const funcAccessModeId_f = ref('');
const featureVarSet = reactive({
  funcAccessModeId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunction4CodeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (funcId4Code_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4CodeEN.con_FuncId4Code,
        funcId4Code_q.value,
      );
    }
    if (funcPurposeId_q.value != '' && funcPurposeId_q.value != '0') {
      strWhereCond += Format(
        " And Function4Code.{0} = '{1}'",
        clsFunction4CodeEN.con_FuncPurposeId,
        funcPurposeId_q.value,
      );
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And Function4Code.{0} = {1}',
        clsFunction4CodeEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
    }
    if (funcTypeId_q.value != '' && funcTypeId_q.value != '0') {
      strWhereCond += Format(
        " And Function4Code.{0} = '{1}'",
        clsFunction4CodeEN.con_FuncTypeId,
        funcTypeId_q.value,
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4CodeEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (returnTypeId_q.value != '' && returnTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4CodeEN.con_ReturnTypeId,
        returnTypeId_q.value,
      );
    }
    if (funcName4Code_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4CodeEN.con_FuncName4Code,
        funcName4Code_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFunction4CodeCondition)时出错!请联系管理员!{0}',
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
export const CombineFunction4CodeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFunction4CodeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (funcId4Code_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4CodeEN.con_FuncId4Code,
        funcId4Code_q.value,
      );
      objFunction4CodeCond.SetCondFldValue(
        clsFunction4CodeEN.con_FuncId4Code,
        funcId4Code_q.value,
        'like',
      );
    }
    if (funcPurposeId_q.value != '' && funcPurposeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4CodeEN.con_FuncPurposeId,
        funcPurposeId_q.value,
      );
      objFunction4CodeCond.SetCondFldValue(
        clsFunction4CodeEN.con_FuncPurposeId,
        funcPurposeId_q.value,
        '=',
      );
    }
    if (applicationTypeId_q.value != 0) {
      strWhereCond += Format(
        ' And {0} = {1}',
        clsFunction4CodeEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
      );
      objFunction4CodeCond.SetCondFldValue(
        clsFunction4CodeEN.con_ApplicationTypeId,
        applicationTypeId_q.value,
        '=',
      );
    }
    if (funcTypeId_q.value != '' && funcTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4CodeEN.con_FuncTypeId,
        funcTypeId_q.value,
      );
      objFunction4CodeCond.SetCondFldValue(
        clsFunction4CodeEN.con_FuncTypeId,
        funcTypeId_q.value,
        '=',
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4CodeEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objFunction4CodeCond.SetCondFldValue(
        clsFunction4CodeEN.con_CodeTypeId,
        codeTypeId_q.value,
        '=',
      );
    }
    if (returnTypeId_q.value != '' && returnTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4CodeEN.con_ReturnTypeId,
        returnTypeId_q.value,
      );
      objFunction4CodeCond.SetCondFldValue(
        clsFunction4CodeEN.con_ReturnTypeId,
        returnTypeId_q.value,
        '=',
      );
    }
    if (funcName4Code_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4CodeEN.con_FuncName4Code,
        funcName4Code_q.value,
      );
      objFunction4CodeCond.SetCondFldValue(
        clsFunction4CodeEN.con_FuncName4Code,
        funcName4Code_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFunction4CodeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFunction4CodeCond.whereCond = strWhereCond;
  return objFunction4CodeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunction4CodeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFunction4CodeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (funcId4Code_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunction4CodeEN.con_FuncId4Code,
          funcId4Code_q.value,
        );
        objFunction4CodeCond.SetCondFldValue(
          clsFunction4CodeEN.con_FuncId4Code,
          funcId4Code_q.value,
          'like',
        );
      }
      if (funcPurposeId_q.value != '' && funcPurposeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4CodeEN.con_FuncPurposeId,
          funcPurposeId_q.value,
        );
        objFunction4CodeCond.SetCondFldValue(
          clsFunction4CodeEN.con_FuncPurposeId,
          funcPurposeId_q.value,
          '=',
        );
      }
      if (applicationTypeId_q.value != 0) {
        strWhereCond += Format(
          ' And {0} = {1}',
          clsFunction4CodeEN.con_ApplicationTypeId,
          applicationTypeId_q.value,
        );
        objFunction4CodeCond.SetCondFldValue(
          clsFunction4CodeEN.con_ApplicationTypeId,
          applicationTypeId_q.value,
          '=',
        );
      }
      if (funcTypeId_q.value != '' && funcTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4CodeEN.con_FuncTypeId,
          funcTypeId_q.value,
        );
        objFunction4CodeCond.SetCondFldValue(
          clsFunction4CodeEN.con_FuncTypeId,
          funcTypeId_q.value,
          '=',
        );
      }
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4CodeEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objFunction4CodeCond.SetCondFldValue(
          clsFunction4CodeEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
      if (returnTypeId_q.value != '' && returnTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4CodeEN.con_ReturnTypeId,
          returnTypeId_q.value,
        );
        objFunction4CodeCond.SetCondFldValue(
          clsFunction4CodeEN.con_ReturnTypeId,
          returnTypeId_q.value,
          '=',
        );
      }
      if (funcName4Code_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunction4CodeEN.con_FuncName4Code,
          funcName4Code_q.value,
        );
        objFunction4CodeCond.SetCondFldValue(
          clsFunction4CodeEN.con_FuncName4Code,
          funcName4Code_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFunction4CodeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFunction4CodeCond.whereCond = strWhereCond;
    return objFunction4CodeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFunction4CodeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFunction4Code.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFunction4Code_List.value != null) refFunction4Code_List.value.selectAllChecked = false;
};

export function Function4Code_DeleteKeyIdCache(strFuncId4Code: string): void {
  if (IsNullOrEmpty(strFuncId4Code) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strFuncId4Code}`;
    delete function4CodeCache[cacheKey];
    return;
  }
}
