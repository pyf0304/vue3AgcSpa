/**
 * 类名:FuncModule_AgcVueShare(界面:FuncModule_AgcCRUD,00050320)
 * 表名:FuncModule_Agc(00050015)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:50:55
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:工程管理(PrjManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsFuncModule_AgcENEx } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFuncModule_AgcBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFuncModule_AgcBy,
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
const refFuncModule_Agc_Detail = ref();
const refFuncModule_Agc_Edit = ref();
const refFuncModule_Agc_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFuncModule_Agc_Detail,
  refFuncModule_Agc_Edit,
  refFuncModule_Agc_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFuncModule_Agc_Detail,
  refFuncModule_Agc_Edit,
  refFuncModule_Agc_List,
};

export const showErrorMessage = ref(false);
export const dataListFuncModule_Agc = ref<Array<clsFuncModule_AgcENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const funcModule_AgcCache: { [key: string]: clsFuncModule_AgcENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const funcModuleName_q = ref('');
export const funcModuleEnName_q = ref('');
export const prjId_q = ref('');
export const useStateId_q = ref('');
const qryVarSet = reactive({
  funcModuleName_q,
  funcModuleEnName_q,
  prjId_q,
  useStateId_q,
});
export { qryVarSet };

//功能区变量定义
export const useStateId_f = ref('');
const featureVarSet = reactive({
  useStateId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFuncModule_AgcCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (funcModuleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFuncModule_AgcEN.con_FuncModuleName,
        funcModuleName_q.value,
      );
    }
    if (funcModuleEnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFuncModule_AgcEN.con_FuncModuleEnName,
        funcModuleEnName_q.value,
      );
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(
        " And FuncModule_Agc.{0} = '{1}'",
        clsFuncModule_AgcEN.con_UseStateId,
        useStateId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFuncModule_AgcCondition)时出错!请联系管理员!{0}',
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
export const CombineFuncModule_AgcConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFuncModule_AgcCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objFuncModule_AgcCond.SetCondFldValue(clsFuncModule_AgcEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (funcModuleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFuncModule_AgcEN.con_FuncModuleName,
        funcModuleName_q.value,
      );
      objFuncModule_AgcCond.SetCondFldValue(
        clsFuncModule_AgcEN.con_FuncModuleName,
        funcModuleName_q.value,
        'like',
      );
    }
    if (funcModuleEnName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFuncModule_AgcEN.con_FuncModuleEnName,
        funcModuleEnName_q.value,
      );
      objFuncModule_AgcCond.SetCondFldValue(
        clsFuncModule_AgcEN.con_FuncModuleEnName,
        funcModuleEnName_q.value,
        'like',
      );
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFuncModule_AgcEN.con_UseStateId,
        useStateId_q.value,
      );
      objFuncModule_AgcCond.SetCondFldValue(
        clsFuncModule_AgcEN.con_UseStateId,
        useStateId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFuncModule_AgcConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFuncModule_AgcCond.whereCond = strWhereCond;
  return objFuncModule_AgcCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFuncModule_AgcConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFuncModule_AgcCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objFuncModule_AgcCond.SetCondFldValue(clsFuncModule_AgcEN.con_PrjId, PrjId_Session.value, '=');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (funcModuleName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFuncModule_AgcEN.con_FuncModuleName,
          funcModuleName_q.value,
        );
        objFuncModule_AgcCond.SetCondFldValue(
          clsFuncModule_AgcEN.con_FuncModuleName,
          funcModuleName_q.value,
          'like',
        );
      }
      if (funcModuleEnName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFuncModule_AgcEN.con_FuncModuleEnName,
          funcModuleEnName_q.value,
        );
        objFuncModule_AgcCond.SetCondFldValue(
          clsFuncModule_AgcEN.con_FuncModuleEnName,
          funcModuleEnName_q.value,
          'like',
        );
      }
      if (useStateId_q.value != '' && useStateId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFuncModule_AgcEN.con_UseStateId,
          useStateId_q.value,
        );
        objFuncModule_AgcCond.SetCondFldValue(
          clsFuncModule_AgcEN.con_UseStateId,
          useStateId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFuncModule_AgcConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFuncModule_AgcCond.whereCond = strWhereCond;
    return objFuncModule_AgcCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFuncModule_AgcENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFuncModule_Agc.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFuncModule_Agc_List.value != null) refFuncModule_Agc_List.value.selectAllChecked = false;
};

export function FuncModule_Agc_DeleteKeyIdCache(
  strPrjId: string,
  strFuncModuleAgcId: string,
): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In FuncModule_AgcVueShare.FuncModule_Agc.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(FuncModule_AgcVueShare.FuncModule_Agc.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncModuleAgcId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strFuncModuleAgcId}_${strPrjId}`;
    delete funcModule_AgcCache[cacheKey];
    return;
  }
}
