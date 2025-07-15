/**
 * 类名:ViewRegion_UVueShare(界面:ViewRegion_U,00050290)
 * 表名:ViewRegion(00050099)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/25 17:30:02
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
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';

const ascOrDesc4SortFun = ref('Asc');
const sortViewRegionBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortViewRegionBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refViewRegion_Detail_Sim = ref();
const refViewRegion_Edit_Sim = ref();
const refViewRegion_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewRegion_Detail_Sim,
  refViewRegion_Edit_Sim,
  refViewRegion_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewRegion_Detail_Sim,
  refViewRegion_Edit_Sim,
  refViewRegion_List,
};

export const showErrorMessage = ref(false);
export const dataListViewRegion = ref<Array<clsViewRegionENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const viewRegionCache: { [key: string]: clsViewRegionENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const regionName_q = ref('');
export const regionTypeId_q = ref('');
export const fileName_q = ref('');
export const prjId_q = ref('');
const qryVarSet = reactive({
  regionName_q,
  regionTypeId_q,
  fileName_q,
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
export const CombineViewRegionCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (regionName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewRegionEN.con_RegionName,
        regionName_q.value,
      );
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And ViewRegion.{0} = '{1}'",
        clsViewRegionEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
    }
    if (fileName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewRegionEN.con_FileName,
        fileName_q.value,
      );
    }
    if (prjId_q.value != '' && prjId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsViewRegionEN.con_PrjId, prjId_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineViewRegionCondition)时出错!请联系管理员!{0}',
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
export const CombineViewRegionConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewRegionCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (regionName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewRegionEN.con_RegionName,
        regionName_q.value,
      );
      objViewRegionCond.SetCondFldValue(clsViewRegionEN.con_RegionName, regionName_q.value, 'like');
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsViewRegionEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
      objViewRegionCond.SetCondFldValue(
        clsViewRegionEN.con_RegionTypeId,
        regionTypeId_q.value,
        '=',
      );
    }
    if (fileName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewRegionEN.con_FileName,
        fileName_q.value,
      );
      objViewRegionCond.SetCondFldValue(clsViewRegionEN.con_FileName, fileName_q.value, 'like');
    }
    if (prjId_q.value != '' && prjId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsViewRegionEN.con_PrjId, prjId_q.value);
      objViewRegionCond.SetCondFldValue(clsViewRegionEN.con_PrjId, prjId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineViewRegionConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objViewRegionCond.whereCond = strWhereCond;
  return objViewRegionCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsViewRegionENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListViewRegion.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refViewRegion_List.value != null) refViewRegion_List.value.selectAllChecked = false;
};

export function ViewRegion_DeleteKeyIdCache(strPrjId: string, strRegionId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In ViewRegion_UVueShare.ViewRegion.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(ViewRegion_UVueShare.ViewRegion.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strRegionId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strRegionId}_${strPrjId}`;
    delete viewRegionCache[cacheKey];
    return;
  }
}
