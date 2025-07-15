/**
 * 类名:CacheUseStateVueShare(界面:CacheUseStateCRUD,00050292)
 * 表名:CacheUseState(00050566)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 23:29:32
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsCacheUseStateENEx } from '@/ts/L0Entity/SystemSet/clsCacheUseStateENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';

const ascOrDesc4SortFun = ref('Asc');
const sortCacheUseStateBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCacheUseStateBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const UserId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IsVisible_Giving = ref(false); //6、定义下拉框条件给定值2

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refCacheUseState_Detail = ref();
const refCacheUseState_Edit = ref();
const refCacheUseState_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCacheUseState_Detail,
  refCacheUseState_Edit,
  refCacheUseState_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCacheUseState_Detail,
  refCacheUseState_Edit,
  refCacheUseState_List,
};

export const showErrorMessage = ref(false);
export const dataListCacheUseState = ref<Array<clsCacheUseStateENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const cacheUseStateCache: { [key: string]: clsCacheUseStateENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const cacheModeId_q = ref('');
export const cacheKey_q = ref('');
export const userId_q = ref('');
const qryVarSet = reactive({
  cacheModeId_q,
  cacheKey_q,
  userId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCacheUseStateCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (cacheModeId_q.value != '' && cacheModeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCacheUseStateEN.con_CacheModeId,
        cacheModeId_q.value,
      );
    }
    if (cacheKey_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCacheUseStateEN.con_CacheKey,
        cacheKey_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCacheUseStateCondition)时出错!请联系管理员!{0}',
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
export const CombineCacheUseStateConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCacheUseStateCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objCacheUseStateCond.SetCondFldValue(clsCacheUseStateEN.con_UserId, UserId_Local.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (cacheModeId_q.value != '' && cacheModeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCacheUseStateEN.con_CacheModeId,
        cacheModeId_q.value,
      );
      objCacheUseStateCond.SetCondFldValue(
        clsCacheUseStateEN.con_CacheModeId,
        cacheModeId_q.value,
        '=',
      );
    }
    if (cacheKey_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCacheUseStateEN.con_CacheKey,
        cacheKey_q.value,
      );
      objCacheUseStateCond.SetCondFldValue(
        clsCacheUseStateEN.con_CacheKey,
        cacheKey_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCacheUseStateConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCacheUseStateCond.whereCond = strWhereCond;
  return objCacheUseStateCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCacheUseStateConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objCacheUseStateCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objCacheUseStateCond.SetCondFldValue(clsCacheUseStateEN.con_UserId, UserId_Local.value, '=');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (cacheModeId_q.value != '' && cacheModeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCacheUseStateEN.con_CacheModeId,
          cacheModeId_q.value,
        );
        objCacheUseStateCond.SetCondFldValue(
          clsCacheUseStateEN.con_CacheModeId,
          cacheModeId_q.value,
          '=',
        );
      }
      if (cacheKey_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCacheUseStateEN.con_CacheKey,
          cacheKey_q.value,
        );
        objCacheUseStateCond.SetCondFldValue(
          clsCacheUseStateEN.con_CacheKey,
          cacheKey_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineCacheUseStateConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objCacheUseStateCond.whereCond = strWhereCond;
    return objCacheUseStateCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCacheUseStateENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCacheUseState.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refCacheUseState_List.value != null) refCacheUseState_List.value.selectAllChecked = false;
};

export function CacheUseState_DeleteKeyIdCache(strUserId: string, lngmId: number): void {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空!(In CacheUseStateVueShare.CacheUseState.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strUserId}`;
    delete cacheUseStateCache[cacheKey];
    return;
  }
}
