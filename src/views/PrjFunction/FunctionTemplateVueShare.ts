/**
 * 类名:FunctionTemplateVueShare(界面:FunctionTemplateCRUD,00050347)
 * 表名:FunctionTemplate(00050312)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/28 23:46:45
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsFunctionTemplateENEx } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFunctionTemplateBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFunctionTemplateBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFunctionTemplate_Detail = ref();
const refFunctionTemplate_Edit = ref();
const refFunctionTemplate_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunctionTemplate_Detail,
  refFunctionTemplate_Edit,
  refFunctionTemplate_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunctionTemplate_Detail,
  refFunctionTemplate_Edit,
  refFunctionTemplate_List,
};

export const showErrorMessage = ref(false);
export const dataListFunctionTemplate = ref<Array<clsFunctionTemplateENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const functionTemplateCache: { [key: string]: clsFunctionTemplateENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const functionTemplateId_q = ref('');
export const functionTemplateName_q = ref('');
export const functionTemplateENName_q = ref('');
export const progLangTypeId_q = ref('');
export const createUserId_q = ref('');
const qryVarSet = reactive({
  functionTemplateId_q,
  functionTemplateName_q,
  functionTemplateENName_q,
  progLangTypeId_q,
  createUserId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunctionTemplateCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (functionTemplateId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
      );
    }
    if (functionTemplateName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_FunctionTemplateName,
        functionTemplateName_q.value,
      );
    }
    if (functionTemplateENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_FunctionTemplateENName,
        functionTemplateENName_q.value,
      );
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And FunctionTemplate.{0} = '{1}'",
        clsFunctionTemplateEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
    }
    if (createUserId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_CreateUserId,
        createUserId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFunctionTemplateCondition)时出错!请联系管理员!{0}',
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
export const CombineFunctionTemplateConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFunctionTemplateCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (functionTemplateId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
      );
      objFunctionTemplateCond.SetCondFldValue(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
        'like',
      );
    }
    if (functionTemplateName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_FunctionTemplateName,
        functionTemplateName_q.value,
      );
      objFunctionTemplateCond.SetCondFldValue(
        clsFunctionTemplateEN.con_FunctionTemplateName,
        functionTemplateName_q.value,
        'like',
      );
    }
    if (functionTemplateENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_FunctionTemplateENName,
        functionTemplateENName_q.value,
      );
      objFunctionTemplateCond.SetCondFldValue(
        clsFunctionTemplateEN.con_FunctionTemplateENName,
        functionTemplateENName_q.value,
        'like',
      );
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunctionTemplateEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
      objFunctionTemplateCond.SetCondFldValue(
        clsFunctionTemplateEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
        '=',
      );
    }
    if (createUserId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunctionTemplateEN.con_CreateUserId,
        createUserId_q.value,
      );
      objFunctionTemplateCond.SetCondFldValue(
        clsFunctionTemplateEN.con_CreateUserId,
        createUserId_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFunctionTemplateConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFunctionTemplateCond.whereCond = strWhereCond;
  return objFunctionTemplateCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunctionTemplateConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFunctionTemplateCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (functionTemplateId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunctionTemplateEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
        );
        objFunctionTemplateCond.SetCondFldValue(
          clsFunctionTemplateEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
          'like',
        );
      }
      if (functionTemplateName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunctionTemplateEN.con_FunctionTemplateName,
          functionTemplateName_q.value,
        );
        objFunctionTemplateCond.SetCondFldValue(
          clsFunctionTemplateEN.con_FunctionTemplateName,
          functionTemplateName_q.value,
          'like',
        );
      }
      if (functionTemplateENName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunctionTemplateEN.con_FunctionTemplateENName,
          functionTemplateENName_q.value,
        );
        objFunctionTemplateCond.SetCondFldValue(
          clsFunctionTemplateEN.con_FunctionTemplateENName,
          functionTemplateENName_q.value,
          'like',
        );
      }
      if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunctionTemplateEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
        );
        objFunctionTemplateCond.SetCondFldValue(
          clsFunctionTemplateEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
          '=',
        );
      }
      if (createUserId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunctionTemplateEN.con_CreateUserId,
          createUserId_q.value,
        );
        objFunctionTemplateCond.SetCondFldValue(
          clsFunctionTemplateEN.con_CreateUserId,
          createUserId_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFunctionTemplateConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFunctionTemplateCond.whereCond = strWhereCond;
    return objFunctionTemplateCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFunctionTemplateENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFunctionTemplate.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFunctionTemplate_List.value != null)
    refFunctionTemplate_List.value.selectAllChecked = false;
};

export function FunctionTemplate_DeleteKeyIdCache(strFunctionTemplateId: string): void {
  if (IsNullOrEmpty(strFunctionTemplateId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strFunctionTemplateId}`;
    delete functionTemplateCache[cacheKey];
    return;
  }
}
