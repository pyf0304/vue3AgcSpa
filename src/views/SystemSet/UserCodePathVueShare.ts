/**
 * 类名:UserCodePathVueShare(界面:UserCodePathCRUD,00050130)
 * 表名:UserCodePath(00050204)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 21:12:31
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
import { clsUserCodePathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePathENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsUserCodePathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePathEN';

const ascOrDesc4SortFun = ref('Asc');
const sortUserCodePathBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortUserCodePathBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const UserId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const UserCodePrjMainPathId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refUserCodePath_Edit = ref();
const refUserCodePath_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refUserCodePath_Edit,
  refUserCodePath_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refUserCodePath_Edit,
  refUserCodePath_List,
};

export const showErrorMessage = ref(false);
export const dataListUserCodePath = ref<Array<clsUserCodePathENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const userCodePathCache: { [key: string]: clsUserCodePathENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const codeTypeId_q = ref('');
export const isTemplate_q = ref('0');
const qryVarSet = reactive({
  codeTypeId_q,
  isTemplate_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineUserCodePathCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And UserCodePath.{0} = '{1}'",
        clsUserCodePathEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (isTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePathEN.con_IsTemplate);
    } else if (isTemplate_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePathEN.con_IsTemplate);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineUserCodePathCondition)时出错!请联系管理员!{0}',
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
export const CombineUserCodePathConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objUserCodePathCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsUserCodePathEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objUserCodePathCond.SetCondFldValue(
        clsUserCodePathEN.con_CodeTypeId,
        codeTypeId_q.value,
        '=',
      );
    }
    if (isTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePathEN.con_IsTemplate);
      objUserCodePathCond.SetCondFldValue(clsUserCodePathEN.con_IsTemplate, true, '=');
    } else if (isTemplate_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePathEN.con_IsTemplate);
      objUserCodePathCond.SetCondFldValue(clsUserCodePathEN.con_IsTemplate, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineUserCodePathConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objUserCodePathCond.whereCond = strWhereCond;
  return objUserCodePathCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsUserCodePathENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListUserCodePath.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refUserCodePath_List.value != null) refUserCodePath_List.value.selectAllChecked = false;
};

export function UserCodePath_DeleteKeyIdCache(strPrjId: string, lngmId: number): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In UserCodePathVueShare.UserCodePath.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(UserCodePathVueShare.UserCodePath.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strPrjId}`;
    delete userCodePathCache[cacheKey];
    return;
  }
}
