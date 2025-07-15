/**
 * 类名:QxUsersVueShare(界面:QxUserCRUD,00140033)
 * 表名:QxUsers(00140015)
 * 版本:2024.09.08.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/11 15:25:22
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { clsQxUsersENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersENEx';
// import { QxUsersEx_FuncMapKeyDepartmentTypeId } from '@/ts/L3ForWApiEx/UserManage_GP/clsQxUsersExWApi';

const ascOrDesc4SortFun = ref('Asc');
const sortQxUsersBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQxUsersBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refQxUsers_Detail = ref();
const refQxUsers_Edit = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refQxUsers_Detail,
  refQxUsers_Edit,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refQxUsers_Detail,
  refQxUsers_Edit,
};

export const showErrorMessage = ref(false);
export const dataListQxUsers = ref<Array<clsQxUsersENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const userId_q = ref('');
export const userName_q = ref('');
export const departmentId_q = ref('');
export const departmentTypeId_q = ref('');
const qryVarSet = reactive({
  userId_q,
  userName_q,
  departmentId_q,
  departmentTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUsersCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (userId_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsQxUsersEN.con_UserId, userId_q.value);
    }
    if (userName_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsQxUsersEN.con_UserName, userName_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQxUsersCondition)时出错!请联系管理员!{0}',
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
export const CombineQxUsersConditionObj = async (): Promise<clsQxUsersEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objQxUsersCond = new clsQxUsersEN();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (userId_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsQxUsersEN.con_UserId, userId_q.value);
      objQxUsersCond.SetCondFldValue(clsQxUsersEN.con_UserId, userId_q.value, 'like');
    }
    if (userName_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsQxUsersEN.con_UserName, userName_q.value);
      objQxUsersCond.SetCondFldValue(clsQxUsersEN.con_UserName, userName_q.value, 'like');
    }

    //处理针对扩展字段:[DepartmentId]的查询
    const arrDepartmentId = await GetCondition_DepartmentIdLst_In();
    if (arrDepartmentId.length > 0) {
      strWhereCond += Format(
        ' And {0} in ({1})',
        clsQxUsersEN.con_DepartmentId,
        arrDepartmentId.join(','),
      );
      objQxUsersCond.SetCondFldValue(
        clsQxUsersEN.con_DepartmentId,
        arrDepartmentId.join(','),
        'in',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQxUsersConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxUsersCond.whereCond = strWhereCond;
  return objQxUsersCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQxUsersConditionObj4ExportExcel = async (): Promise<clsQxUsersEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objQxUsersCond = new clsQxUsersENEx();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (userId_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsQxUsersEN.con_UserId, userId_q.value);
      objQxUsersCond.SetCondFldValue(clsQxUsersEN.con_UserId, userId_q.value, 'like');
    }
    if (userName_q.value != '') {
      strWhereCond += Format(" And {0} like '% {1}%'", clsQxUsersEN.con_UserName, userName_q.value);
      objQxUsersCond.SetCondFldValue(clsQxUsersEN.con_UserName, userName_q.value, 'like');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineQxUsersConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQxUsersCond.whereCond = strWhereCond;
  return objQxUsersCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
export async function GetCondition_DepartmentIdLst_In(): Promise<Array<string>> {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objQxUsersCond = new clsQxUsersENEx();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  const arrDepartmentIdInclude: Array<string> = [];
  try {
    if (departmentTypeId_q.value != '' && departmentTypeId_q.value != '0') {
      objQxUsersCond.SetCondFldValue(
        clsQxUsersENEx.con_DepartmentTypeId,
        departmentTypeId_q.value,
        '=',
      );

      // const arrDepartmentId_DepartmentTypeId = await QxUsersEx_FuncMapKeyDepartmentTypeId(
      //   objQxUsersCond,
      // );
      // if (arrDepartmentIdInclude.length == 0) {
      //   arrDepartmentIdInclude = arrDepartmentId_DepartmentTypeId.map((x) => x.toString());
      // } else {
      //   arrDepartmentIdInclude = intersectSets(
      //     arrDepartmentIdInclude,
      //     arrDepartmentId_DepartmentTypeId.map((x) => x.toString()),
      //   );
      // }
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return arrDepartmentIdInclude;
}

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQxUsersENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQxUsers.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
