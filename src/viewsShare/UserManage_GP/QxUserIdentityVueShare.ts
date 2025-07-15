/**
 * 类名:QxUserIdentityVueShare(界面:QxUserIdentityCRUD,00140039)
 * 表名:QxUserIdentity(00140042)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 09:37:00
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsQxUserIdentityENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';

const ascOrDesc4SortFun = ref('Asc');
const sortQxUserIdentityBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQxUserIdentityBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refQxUserIdentity_Detail = ref();
const refQxUserIdentity_Edit = ref();
const refQxUserIdentity_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxUserIdentity_Detail,
  refQxUserIdentity_Edit,
  refQxUserIdentity_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxUserIdentity_Detail,
  refQxUserIdentity_Edit,
  refQxUserIdentity_List,
};

export const showErrorMessage = ref(false);
export const dataListQxUserIdentity = ref<Array<clsQxUserIdentityENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const qxUserIdentityCache: { [key: string]: clsQxUserIdentityENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const identityId_q = ref('');
export const identityDesc_q = ref('');
const qryVarSet = reactive({
  identityId_q,
  identityDesc_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUserIdentityCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (identityId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUserIdentityEN.con_IdentityId,
        identityId_q.value,
      );
    }
    if (identityDesc_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUserIdentityEN.con_IdentityDesc,
        identityDesc_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQxUserIdentityCondition)时出错!请联系管理员!{0}',
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
export const CombineQxUserIdentityConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxUserIdentityCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (identityId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUserIdentityEN.con_IdentityId,
        identityId_q.value,
      );
      objQxUserIdentityCond.SetCondFldValue(
        clsQxUserIdentityEN.con_IdentityId,
        identityId_q.value,
        'like',
      );
    }
    if (identityDesc_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUserIdentityEN.con_IdentityDesc,
        identityDesc_q.value,
      );
      objQxUserIdentityCond.SetCondFldValue(
        clsQxUserIdentityEN.con_IdentityDesc,
        identityDesc_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQxUserIdentityConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxUserIdentityCond.whereCond = strWhereCond;
  return objQxUserIdentityCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUserIdentityConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objQxUserIdentityCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (identityId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxUserIdentityEN.con_IdentityId,
          identityId_q.value,
        );
        objQxUserIdentityCond.SetCondFldValue(
          clsQxUserIdentityEN.con_IdentityId,
          identityId_q.value,
          'like',
        );
      }
      if (identityDesc_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsQxUserIdentityEN.con_IdentityDesc,
          identityDesc_q.value,
        );
        objQxUserIdentityCond.SetCondFldValue(
          clsQxUserIdentityEN.con_IdentityDesc,
          identityDesc_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineQxUserIdentityConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objQxUserIdentityCond.whereCond = strWhereCond;
    return objQxUserIdentityCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQxUserIdentityENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQxUserIdentity.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refQxUserIdentity_List.value != null) refQxUserIdentity_List.value.selectAllChecked = false;
};

export function QxUserIdentity_DeleteKeyIdCache(strIdentityId: string): void {
  if (IsNullOrEmpty(strIdentityId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strIdentityId}`;
    delete qxUserIdentityCache[cacheKey];
    return;
  }
}
