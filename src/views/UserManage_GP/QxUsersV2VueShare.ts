/**
 * 类名:QxUsersV2VueShare(界面:QxUsersV2CRUD,00140038)
 * 表名:QxUsersV2(00140110)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 10:35:13
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
import { clsQxUsersV2ENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersV2ENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsQxUsersV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersV2EN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortQxUsersV2By = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQxUsersV2By,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refQxUsersV2_Detail = ref();
const refQxUsersV2_Edit = ref();
const refQxUsersV2_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxUsersV2_Detail,
  refQxUsersV2_Edit,
  refQxUsersV2_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refQxUsersV2_Detail,
  refQxUsersV2_Edit,
  refQxUsersV2_List,
};

export const showErrorMessage = ref(false);
export const dataListQxUsersV2 = ref<Array<clsQxUsersV2ENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const qxUsersV2Cache: { [key: string]: clsQxUsersV2ENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const name_q = ref('');
export const userName_q = ref('');
export const nickName_q = ref('');
export const email_q = ref('');
export const phone_q = ref('');
const qryVarSet = reactive({
  name_q,
  userName_q,
  nickName_q,
  email_q,
  phone_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUsersV2Condition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (name_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_name, name_q.value);
    }
    if (userName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUsersV2EN.con_UserName,
        userName_q.value,
      );
    }
    if (nickName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUsersV2EN.con_nickName,
        nickName_q.value,
      );
    }
    if (email_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_Email, email_q.value);
    }
    if (phone_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_phone, phone_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQxUsersV2Condition)时出错!请联系管理员!{0}',
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
export const CombineQxUsersV2ConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxUsersV2Cond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (name_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_name, name_q.value);
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_name, name_q.value, 'like');
    }
    if (userName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUsersV2EN.con_UserName,
        userName_q.value,
      );
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_UserName, userName_q.value, 'like');
    }
    if (nickName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUsersV2EN.con_nickName,
        nickName_q.value,
      );
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_nickName, nickName_q.value, 'like');
    }
    if (email_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_Email, email_q.value);
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_Email, email_q.value, 'like');
    }
    if (phone_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_phone, phone_q.value);
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_phone, phone_q.value, 'like');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQxUsersV2ConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxUsersV2Cond.whereCond = strWhereCond;
  return objQxUsersV2Cond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUsersV2ConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxUsersV2Cond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (name_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_name, name_q.value);
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_name, name_q.value, 'like');
    }
    if (userName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUsersV2EN.con_UserName,
        userName_q.value,
      );
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_UserName, userName_q.value, 'like');
    }
    if (nickName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsQxUsersV2EN.con_nickName,
        nickName_q.value,
      );
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_nickName, nickName_q.value, 'like');
    }
    if (email_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_Email, email_q.value);
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_Email, email_q.value, 'like');
    }
    if (phone_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsQxUsersV2EN.con_phone, phone_q.value);
      objQxUsersV2Cond.SetCondFldValue(clsQxUsersV2EN.con_phone, phone_q.value, 'like');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineQxUsersV2ConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxUsersV2Cond.whereCond = strWhereCond;
  return objQxUsersV2Cond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQxUsersV2ENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQxUsersV2.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refQxUsersV2_List.value != null) refQxUsersV2_List.value.selectAllChecked = false;
};

export function QxUsersV2_DeleteKeyIdCache(intid: number): void {
  if (intid != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${intid}`;
    delete qxUsersV2Cache[cacheKey];
    return;
  }
}
