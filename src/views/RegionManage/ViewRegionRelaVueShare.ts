/**
 * 类名:ViewRegionRelaVueShare(界面:ViewRegionRelaCRUD,00050322)
 * 表名:ViewRegionRela(00050573)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/08 17:10:53
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsViewRegionRelaENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';

const ascOrDesc4SortFun = ref('Asc');
const sortViewRegionRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortViewRegionRelaBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const ViewId_Main_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refViewRegionRela_Detail = ref();
const refViewRegionRela_Edit = ref();
const refViewRegionRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewRegionRela_Detail,
  refViewRegionRela_Edit,
  refViewRegionRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewRegionRela_Detail,
  refViewRegionRela_Edit,
  refViewRegionRela_List,
};

export const showErrorMessage = ref(false);
export const dataListViewRegionRela = ref<Array<clsViewRegionRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const viewRegionRelaCache: { [key: string]: clsViewRegionRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const viewId_q = ref('');
export const regionId_q = ref('');
export const prjId_q = ref('');
const qryVarSet = reactive({
  viewId_q,
  regionId_q,
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
export const CombineViewRegionRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (viewId_q.value != '' && viewId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsViewRegionRelaEN.con_ViewId, viewId_q.value);
    }
    if (regionId_q.value != '' && regionId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsViewRegionRelaEN.con_RegionId,
        regionId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineViewRegionRelaCondition)时出错!请联系管理员!{0}',
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
export const CombineViewRegionRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewRegionRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objViewRegionRelaCond.SetCondFldValue(clsViewRegionRelaEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (viewId_q.value != '' && viewId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsViewRegionRelaEN.con_ViewId, viewId_q.value);
      objViewRegionRelaCond.SetCondFldValue(clsViewRegionRelaEN.con_ViewId, viewId_q.value, '=');
    }
    if (regionId_q.value != '' && regionId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsViewRegionRelaEN.con_RegionId,
        regionId_q.value,
      );
      objViewRegionRelaCond.SetCondFldValue(
        clsViewRegionRelaEN.con_RegionId,
        regionId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineViewRegionRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objViewRegionRelaCond.whereCond = strWhereCond;
  return objViewRegionRelaCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewRegionRelaConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objViewRegionRelaCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objViewRegionRelaCond.SetCondFldValue(clsViewRegionRelaEN.con_PrjId, PrjId_Session.value, '=');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (viewId_q.value != '' && viewId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsViewRegionRelaEN.con_ViewId, viewId_q.value);
        objViewRegionRelaCond.SetCondFldValue(clsViewRegionRelaEN.con_ViewId, viewId_q.value, '=');
      }
      if (regionId_q.value != '' && regionId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsViewRegionRelaEN.con_RegionId,
          regionId_q.value,
        );
        objViewRegionRelaCond.SetCondFldValue(
          clsViewRegionRelaEN.con_RegionId,
          regionId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineViewRegionRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objViewRegionRelaCond.whereCond = strWhereCond;
    return objViewRegionRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsViewRegionRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListViewRegionRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refViewRegionRela_List.value != null) refViewRegionRela_List.value.selectAllChecked = false;
};

export function ViewRegionRela_DeleteKeyIdCache(strCmPrjId: string, lngmId: number): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In ViewRegionRelaVueShare.ViewRegionRela.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(ViewRegionRelaVueShare.ViewRegionRela.ReFreshCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strCmPrjId}`;
    delete viewRegionRelaCache[cacheKey];
    return;
  }
}
