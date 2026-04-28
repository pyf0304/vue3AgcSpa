/**
 * 类名:ViewRelaTabVueShare(界面:ViewRelaTabCRUD,00050243)
 * 表名:ViewRelaTab(00050100)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/29 02:06:25
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:界面管理(PrjInterface)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsViewRelaTabENEx } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabENEx';
import { clsViewRelaTabEN } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabEN';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

const ascOrDesc4SortFun = ref('Asc');
const sortViewRelaTabBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortViewRelaTabBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refViewRelaTab_Edit = ref();
const refvViewRelaTab_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewRelaTab_Edit,
  refvViewRelaTab_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewRelaTab_Edit,
  refvViewRelaTab_List,
};

export const showErrorMessage = ref(false);
export const dataListViewRelaTab = ref<Array<clsViewRelaTabENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const viewRelaTabCache: { [key: string]: clsViewRelaTabENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
const qryVarSet = reactive({});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewRelaTabCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const strViewId = clsPrivateSessionStorage.viewId_Main;
  if (IsNullOrEmpty(strViewId) == false) {
    strWhereCond += Format(" and {0}='{1}'", clsViewRelaTabEN.con_ViewId, strViewId);
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewRelaTabConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewRelaTabCond = new ConditionCollection();
  return objViewRelaTabCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewRelaTabConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objViewRelaTabCond = new ConditionCollection();
    return objViewRelaTabCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsViewRelaTabENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListViewRelaTab.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refvViewRelaTab_List.value != null) refvViewRelaTab_List.value.selectAllChecked = false;
};

export function ViewRelaTab_DeleteKeyIdCache(strPrjId: string, lngmId: number): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In ViewRelaTabVueShare.ViewRelaTab.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(ViewRelaTabVueShare.ViewRelaTab.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strPrjId}`;
    delete viewRelaTabCache[cacheKey];
    return;
  }
}
