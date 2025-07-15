/**
 * 类名:GCVariablePrjIdRelaVueShare(界面:GCVariablePrjIdRelaCRUD,00050331)
 * 表名:GCVariablePrjIdRela(00050617)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:34
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
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsGCVariablePrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';

const ascOrDesc4SortFun = ref('Asc');
const sortGCVariablePrjIdRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortGCVariablePrjIdRelaBy,
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
const refGCVariablePrjIdRela_Edit = ref();
const refGCVariablePrjIdRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCVariablePrjIdRela_Edit,
  refGCVariablePrjIdRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCVariablePrjIdRela_Edit,
  refGCVariablePrjIdRela_List,
};

export const showErrorMessage = ref(false);
export const dataListGCVariablePrjIdRela = ref<Array<clsGCVariablePrjIdRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const gCVariablePrjIdRelaCache: { [key: string]: clsGCVariablePrjIdRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const varId_q = ref('');
export const prjId_q = ref('');
const qryVarSet = reactive({
  varId_q,
  prjId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCVariablePrjIdRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (varId_q.value != '' && varId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsGCVariablePrjIdRelaEN.con_VarId, varId_q.value);
    }
    if (prjId_q.value != '' && prjId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsGCVariablePrjIdRelaEN.con_PrjId, prjId_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineGCVariablePrjIdRelaCondition)时出错!请联系管理员!{0}',
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
export const CombineGCVariablePrjIdRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGCVariablePrjIdRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (varId_q.value != '' && varId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsGCVariablePrjIdRelaEN.con_VarId, varId_q.value);
      objGCVariablePrjIdRelaCond.SetCondFldValue(
        clsGCVariablePrjIdRelaEN.con_VarId,
        varId_q.value,
        '=',
      );
    }
    if (prjId_q.value != '' && prjId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsGCVariablePrjIdRelaEN.con_PrjId, prjId_q.value);
      objGCVariablePrjIdRelaCond.SetCondFldValue(
        clsGCVariablePrjIdRelaEN.con_PrjId,
        prjId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineGCVariablePrjIdRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGCVariablePrjIdRelaCond.whereCond = strWhereCond;
  return objGCVariablePrjIdRelaCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCVariablePrjIdRelaConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objGCVariablePrjIdRelaCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (varId_q.value != '' && varId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsGCVariablePrjIdRelaEN.con_VarId,
          varId_q.value,
        );
        objGCVariablePrjIdRelaCond.SetCondFldValue(
          clsGCVariablePrjIdRelaEN.con_VarId,
          varId_q.value,
          '=',
        );
      }
      if (prjId_q.value != '' && prjId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsGCVariablePrjIdRelaEN.con_PrjId,
          prjId_q.value,
        );
        objGCVariablePrjIdRelaCond.SetCondFldValue(
          clsGCVariablePrjIdRelaEN.con_PrjId,
          prjId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineGCVariablePrjIdRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objGCVariablePrjIdRelaCond.whereCond = strWhereCond;
    return objGCVariablePrjIdRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsGCVariablePrjIdRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListGCVariablePrjIdRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refGCVariablePrjIdRela_List.value != null)
    refGCVariablePrjIdRela_List.value.selectAllChecked = false;
};

export function GCVariablePrjIdRela_DeleteKeyIdCache(strPrjId: string, strVarId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In GCVariablePrjIdRelaVueShare.GCVariablePrjIdRela.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(GCVariablePrjIdRelaVueShare.GCVariablePrjIdRela.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strVarId) == false && IsNullOrEmpty(strPrjId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strVarId}_${strPrjId}_${strPrjId}`;
    delete gCVariablePrjIdRelaCache[cacheKey];
    return;
  }
}
