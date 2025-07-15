/**
 * 类名:UserCodePrjMainPathVueShare(界面:UserCodePrjMainPathCRUD,00050309)
 * 表名:UserCodePrjMainPath(00050338)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:01
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
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsUserCodePrjMainPathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsUserCodePrjMainPathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathEN';

const ascOrDesc4SortFun = ref('Asc');
const sortUserCodePrjMainPathBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortUserCodePrjMainPathBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const UserId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refUserCodePrjMainPath_Edit = ref();
const refUserCodePrjMainPath_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refUserCodePrjMainPath_Edit,
  refUserCodePrjMainPath_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refUserCodePrjMainPath_Edit,
  refUserCodePrjMainPath_List,
};

export const showErrorMessage = ref(false);
export const dataListUserCodePrjMainPath = ref<Array<clsUserCodePrjMainPathENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const userCodePrjMainPathCache: { [key: string]: clsUserCodePrjMainPathENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const prjId_q = ref('');
export const progLangTypeId_q = ref('');
export const isTemplate_q = ref('0');
const qryVarSet = reactive({
  prjId_q,
  progLangTypeId_q,
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
export const CombineUserCodePrjMainPathCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsUserCodePrjMainPathEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
    }
    if (isTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePrjMainPathEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePrjMainPathEN.con_IsTemplate);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineUserCodePrjMainPathCondition)时出错!请联系管理员!{0}',
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
export const CombineUserCodePrjMainPathConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objUserCodePrjMainPathCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objUserCodePrjMainPathCond.SetCondFldValue(
    clsUserCodePrjMainPathEN.con_PrjId,
    PrjId_Session.value,
    '=',
  );
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsUserCodePrjMainPathEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
      objUserCodePrjMainPathCond.SetCondFldValue(
        clsUserCodePrjMainPathEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
        '=',
      );
    }
    if (isTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePrjMainPathEN.con_IsTemplate);
      objUserCodePrjMainPathCond.SetCondFldValue(
        clsUserCodePrjMainPathEN.con_IsTemplate,
        true,
        '=',
      );
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePrjMainPathEN.con_IsTemplate);
      objUserCodePrjMainPathCond.SetCondFldValue(
        clsUserCodePrjMainPathEN.con_IsTemplate,
        false,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineUserCodePrjMainPathConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objUserCodePrjMainPathCond.whereCond = strWhereCond;
  return objUserCodePrjMainPathCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineUserCodePrjMainPathConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objUserCodePrjMainPathCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objUserCodePrjMainPathCond.SetCondFldValue(
      clsUserCodePrjMainPathEN.con_PrjId,
      PrjId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsUserCodePrjMainPathEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
        );
        objUserCodePrjMainPathCond.SetCondFldValue(
          clsUserCodePrjMainPathEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
          '=',
        );
      }
      if (isTemplate_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsUserCodePrjMainPathEN.con_IsTemplate);
        objUserCodePrjMainPathCond.SetCondFldValue(
          clsUserCodePrjMainPathEN.con_IsTemplate,
          true,
          '=',
        );
      } else {
        strWhereCond += Format(" And {0} = '0'", clsUserCodePrjMainPathEN.con_IsTemplate);
        objUserCodePrjMainPathCond.SetCondFldValue(
          clsUserCodePrjMainPathEN.con_IsTemplate,
          false,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineUserCodePrjMainPathConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objUserCodePrjMainPathCond.whereCond = strWhereCond;
    return objUserCodePrjMainPathCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsUserCodePrjMainPathENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListUserCodePrjMainPath.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refUserCodePrjMainPath_List.value != null)
    refUserCodePrjMainPath_List.value.selectAllChecked = false;
};

export function UserCodePrjMainPath_DeleteKeyIdCache(
  strPrjId: string,
  strUserCodePrjMainPathId: string,
): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In UserCodePrjMainPathVueShare.UserCodePrjMainPath.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(UserCodePrjMainPathVueShare.UserCodePrjMainPath.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strUserCodePrjMainPathId}_${strPrjId}`;
    delete userCodePrjMainPathCache[cacheKey];
    return;
  }
}
