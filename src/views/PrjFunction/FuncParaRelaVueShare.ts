/**
 * 类名:FuncParaRelaVueShare(界面:FuncParaRelaCRUD,00050335)
 * 表名:FuncParaRela(00050498)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/08 14:56:39
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
import { clsvFuncParaRelaENEx } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRelaENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsvFuncParaRelaEN } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRelaEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortvFuncParaRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortvFuncParaRelaBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const FuncId4Code_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const FuncPurposeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFuncParaRela_Edit = ref();
const refvFuncParaRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFuncParaRela_Edit,
  refvFuncParaRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFuncParaRela_Edit,
  refvFuncParaRela_List,
};

export const showErrorMessage = ref(false);
export const dataListvFuncParaRela = ref<Array<clsvFuncParaRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const vFuncParaRelaCache: { [key: string]: clsvFuncParaRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const funcParaId4Code_q = ref('');
export const prjId_q = ref('');
export const funcId4Code_q = ref('');
const qryVarSet = reactive({
  funcParaId4Code_q,
  prjId_q,
  funcId4Code_q,
});
export { qryVarSet };

//功能区变量定义
export const funcId4Code_f = ref('');
const featureVarSet = reactive({
  funcId4Code_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinevFuncParaRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (funcParaId4Code_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsvFuncParaRelaEN.con_FuncParaId4Code,
        funcParaId4Code_q.value,
      );
    }
    if (funcId4Code_q.value != '' && funcId4Code_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsvFuncParaRelaEN.con_FuncId4Code,
        funcId4Code_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFuncParaRelaCondition)时出错!请联系管理员!{0}',
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
export const CombinevFuncParaRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objvFuncParaRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objvFuncParaRelaCond.SetCondFldValue(clsvFuncParaRelaEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (funcParaId4Code_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsvFuncParaRelaEN.con_FuncParaId4Code,
        funcParaId4Code_q.value,
      );
      objvFuncParaRelaCond.SetCondFldValue(
        clsvFuncParaRelaEN.con_FuncParaId4Code,
        funcParaId4Code_q.value,
        'like',
      );
    }
    if (funcId4Code_q.value != '' && funcId4Code_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsvFuncParaRelaEN.con_FuncId4Code,
        funcId4Code_q.value,
      );
      objvFuncParaRelaCond.SetCondFldValue(
        clsvFuncParaRelaEN.con_FuncId4Code,
        funcId4Code_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFuncParaRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objvFuncParaRelaCond.whereCond = strWhereCond;
  return objvFuncParaRelaCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsvFuncParaRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListvFuncParaRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refvFuncParaRela_List.value != null) refvFuncParaRela_List.value.selectAllChecked = false;
};

export function FuncParaRela_DeleteKeyIdCache(lngmId: number): void {
  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}`;
    delete vFuncParaRelaCache[cacheKey];
    return;
  }
}
