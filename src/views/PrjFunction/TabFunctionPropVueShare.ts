/**
 * 类名:TabFunctionPropVueShare(界面:TabFunctionPropCRUD,00050265)
 * 表名:TabFunctionProp(00050522)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 19:33:15
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
import { clsTabFunctionPropENEx } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsTabFunctionPropEN } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropEN';

const ascOrDesc4SortFun = ref('Asc');
const sortTabFunctionPropBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortTabFunctionPropBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const CodeTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refTabFunctionProp_Edit = ref();
const refTabFunctionProp_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTabFunctionProp_Edit,
  refTabFunctionProp_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTabFunctionProp_Edit,
  refTabFunctionProp_List,
};

export const showErrorMessage = ref(false);
export const dataListTabFunctionProp = ref<Array<clsTabFunctionPropENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const tabFunctionPropCache: { [key: string]: clsTabFunctionPropENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const functionTemplateId_q = ref('');
export const codeTypeId_q = ref('');
export const tabId_q = ref('');
export const funcId4GC_q = ref('');
export const methodModifierId_q = ref('');
export const prjId_q = ref('');
export const progLangTypeId_q = ref('');
const qryVarSet = reactive({
  functionTemplateId_q,
  codeTypeId_q,
  tabId_q,
  funcId4GC_q,
  methodModifierId_q,
  prjId_q,
  progLangTypeId_q,
});
export { qryVarSet };

//功能区变量定义
export const methodModifierId_f = ref('');
const featureVarSet = reactive({
  methodModifierId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTabFunctionPropCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and TabId ='{0}'", TabId_Static.value);
  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (functionTemplateId_q.value != '' && functionTemplateId_q.value != '0') {
      strWhereCond += Format(
        " And TabFunctionProp.{0} = '{1}'",
        clsTabFunctionPropEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And TabFunctionProp.{0} = '{1}'",
        clsTabFunctionPropEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (funcId4GC_q.value != '' && funcId4GC_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFunctionPropEN.con_FuncId4GC,
        funcId4GC_q.value,
      );
    }
    if (methodModifierId_q.value != '' && methodModifierId_q.value != '0') {
      strWhereCond += Format(
        " And TabFunctionProp.{0} = '{1}'",
        clsTabFunctionPropEN.con_MethodModifierId,
        methodModifierId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineTabFunctionPropCondition)时出错!请联系管理员!{0}',
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
export const CombineTabFunctionPropConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objTabFunctionPropCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objTabFunctionPropCond.SetCondFldValue(clsTabFunctionPropEN.con_TabId, TabId_Static.value, '=');
  objTabFunctionPropCond.SetCondFldValue(clsTabFunctionPropEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (functionTemplateId_q.value != '' && functionTemplateId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFunctionPropEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
      );
      objTabFunctionPropCond.SetCondFldValue(
        clsTabFunctionPropEN.con_FunctionTemplateId,
        functionTemplateId_q.value,
        '=',
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFunctionPropEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objTabFunctionPropCond.SetCondFldValue(
        clsTabFunctionPropEN.con_CodeTypeId,
        codeTypeId_q.value,
        '=',
      );
    }
    if (funcId4GC_q.value != '' && funcId4GC_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFunctionPropEN.con_FuncId4GC,
        funcId4GC_q.value,
      );
      objTabFunctionPropCond.SetCondFldValue(
        clsTabFunctionPropEN.con_FuncId4GC,
        funcId4GC_q.value,
        '=',
      );
    }
    if (methodModifierId_q.value != '' && methodModifierId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFunctionPropEN.con_MethodModifierId,
        methodModifierId_q.value,
      );
      objTabFunctionPropCond.SetCondFldValue(
        clsTabFunctionPropEN.con_MethodModifierId,
        methodModifierId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineTabFunctionPropConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objTabFunctionPropCond.whereCond = strWhereCond;
  return objTabFunctionPropCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTabFunctionPropConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objTabFunctionPropCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objTabFunctionPropCond.SetCondFldValue(clsTabFunctionPropEN.con_TabId, TabId_Static.value, '=');
    objTabFunctionPropCond.SetCondFldValue(
      clsTabFunctionPropEN.con_PrjId,
      PrjId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (functionTemplateId_q.value != '' && functionTemplateId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTabFunctionPropEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
        );
        objTabFunctionPropCond.SetCondFldValue(
          clsTabFunctionPropEN.con_FunctionTemplateId,
          functionTemplateId_q.value,
          '=',
        );
      }
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTabFunctionPropEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objTabFunctionPropCond.SetCondFldValue(
          clsTabFunctionPropEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
      if (funcId4GC_q.value != '' && funcId4GC_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTabFunctionPropEN.con_FuncId4GC,
          funcId4GC_q.value,
        );
        objTabFunctionPropCond.SetCondFldValue(
          clsTabFunctionPropEN.con_FuncId4GC,
          funcId4GC_q.value,
          '=',
        );
      }
      if (methodModifierId_q.value != '' && methodModifierId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTabFunctionPropEN.con_MethodModifierId,
          methodModifierId_q.value,
        );
        objTabFunctionPropCond.SetCondFldValue(
          clsTabFunctionPropEN.con_MethodModifierId,
          methodModifierId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineTabFunctionPropConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objTabFunctionPropCond.whereCond = strWhereCond;
    return objTabFunctionPropCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsTabFunctionPropENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListTabFunctionProp.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refTabFunctionProp_List.value != null) refTabFunctionProp_List.value.selectAllChecked = false;
};

export function TabFunctionProp_DeleteKeyIdCache(strTabId: string, lngmId: number): void {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In TabFunctionPropVueShare.TabFunctionProp.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(TabFunctionPropVueShare.TabFunctionProp.ReFreshCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strTabId}`;
    delete tabFunctionPropCache[cacheKey];
    return;
  }
}
