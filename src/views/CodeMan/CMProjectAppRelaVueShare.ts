/**
 * 类名:CMProjectAppRelaVueShare(界面:CMProjectAppRelaCRUD,00050340)
 * 表名:CMProjectAppRela(00050600)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 06:54:47
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:代码管理(CodeMan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsCMProjectAppRelaENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';

const ascOrDesc4SortFun = ref('Asc');
const sortCMProjectAppRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCMProjectAppRelaBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const CmPrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refCMProjectAppRela_Detail = ref();
const refCMProjectAppRela_Edit = ref();
const refCMProjectAppRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCMProjectAppRela_Detail,
  refCMProjectAppRela_Edit,
  refCMProjectAppRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCMProjectAppRela_Detail,
  refCMProjectAppRela_Edit,
  refCMProjectAppRela_List,
};

export const showErrorMessage = ref(false);
export const dataListCMProjectAppRela = ref<Array<clsCMProjectAppRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const cMProjectAppRelaCache: { [key: string]: clsCMProjectAppRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const cmPrjId_q = ref('');
export const prjId_q = ref('');
const qryVarSet = reactive({
  cmPrjId_q,
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
export const CombineCMProjectAppRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (cmPrjId_q.value != '' && cmPrjId_q.value != '0') {
      strWhereCond += Format(
        " And CMProjectAppRela.{0} = '{1}'",
        clsCMProjectAppRelaEN.con_CmPrjId,
        cmPrjId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCMProjectAppRelaCondition)时出错!请联系管理员!{0}',
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
export const CombineCMProjectAppRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCMProjectAppRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objCMProjectAppRelaCond.SetCondFldValue(
    clsCMProjectAppRelaEN.con_PrjId,
    PrjId_Session.value,
    '=',
  );
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (cmPrjId_q.value != '' && cmPrjId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCMProjectAppRelaEN.con_CmPrjId,
        cmPrjId_q.value,
      );
      objCMProjectAppRelaCond.SetCondFldValue(
        clsCMProjectAppRelaEN.con_CmPrjId,
        cmPrjId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCMProjectAppRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCMProjectAppRelaCond.whereCond = strWhereCond;
  return objCMProjectAppRelaCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCMProjectAppRelaConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objCMProjectAppRelaCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objCMProjectAppRelaCond.SetCondFldValue(
      clsCMProjectAppRelaEN.con_PrjId,
      PrjId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (cmPrjId_q.value != '' && cmPrjId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCMProjectAppRelaEN.con_CmPrjId,
          cmPrjId_q.value,
        );
        objCMProjectAppRelaCond.SetCondFldValue(
          clsCMProjectAppRelaEN.con_CmPrjId,
          cmPrjId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineCMProjectAppRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objCMProjectAppRelaCond.whereCond = strWhereCond;
    return objCMProjectAppRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCMProjectAppRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCMProjectAppRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refCMProjectAppRela_List.value != null)
    refCMProjectAppRela_List.value.selectAllChecked = false;
};

export function CMProjectAppRela_DeleteKeyIdCache(
  strPrjId: string,
  lngCMProjectAppRelaId: number,
): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In CMProjectAppRelaVueShare.CMProjectAppRela.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(CMProjectAppRelaVueShare.CMProjectAppRela.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngCMProjectAppRelaId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngCMProjectAppRelaId}_${strPrjId}`;
    delete cMProjectAppRelaCache[cacheKey];
    return;
  }
}
