/**
 * 类名:CTCodeTypeGroupVueShare(界面:CTCodeTypeGroupCRUD,00050349)
 * 表名:CTCodeTypeGroup(00050648)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 12:00:44
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsCTCodeTypeGroupENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  CTCodeTypeGroupKey,
  clsCTCodeTypeGroupEN,
} from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortCTCodeTypeGroupBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCTCodeTypeGroupBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refCTCodeTypeGroup_Detail = ref();
const refCTCodeTypeGroup_DetailAi = ref();
const refCTCodeTypeGroup_Edit = ref();
const refCTCodeTypeGroup_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCTCodeTypeGroup_Detail,
  refCTCodeTypeGroup_DetailAi,
  refCTCodeTypeGroup_Edit,
  refCTCodeTypeGroup_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCTCodeTypeGroup_Detail,
  refCTCodeTypeGroup_DetailAi,
  refCTCodeTypeGroup_Edit,
  refCTCodeTypeGroup_List,
};

export const showErrorMessage = ref(false);
export const dataListCTCodeTypeGroup = ref<Array<clsCTCodeTypeGroupENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const cTCodeTypeGroupCache: { [key: string]: clsCTCodeTypeGroupENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const ctGroupId_q = ref('');
export const groupName_q = ref('');
export const groupENName_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  ctGroupId_q,
  groupName_q,
  groupENName_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0');
const featureVarSet = reactive({
  inUse_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCTCodeTypeGroupCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (ctGroupId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCTCodeTypeGroupEN.con_CtGroupId,
        ctGroupId_q.value,
      );
    }
    if (groupName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCTCodeTypeGroupEN.con_GroupName,
        groupName_q.value,
      );
    }
    if (groupENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCTCodeTypeGroupEN.con_GroupENName,
        groupENName_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCTCodeTypeGroupEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCTCodeTypeGroupEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCTCodeTypeGroupCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCTCodeTypeGroupConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCTCodeTypeGroupCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctGroupId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCTCodeTypeGroupEN.con_CtGroupId,
        ctGroupId_q.value,
      );
      objCTCodeTypeGroupCond.SetCondFldValue(
        clsCTCodeTypeGroupEN.con_CtGroupId,
        ctGroupId_q.value,
        'like',
      );
    }
    if (groupName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCTCodeTypeGroupEN.con_GroupName,
        groupName_q.value,
      );
      objCTCodeTypeGroupCond.SetCondFldValue(
        clsCTCodeTypeGroupEN.con_GroupName,
        groupName_q.value,
        'like',
      );
    }
    if (groupENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCTCodeTypeGroupEN.con_GroupENName,
        groupENName_q.value,
      );
      objCTCodeTypeGroupCond.SetCondFldValue(
        clsCTCodeTypeGroupEN.con_GroupENName,
        groupENName_q.value,
        'like',
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCTCodeTypeGroupEN.con_InUse);
      objCTCodeTypeGroupCond.SetCondFldValue(clsCTCodeTypeGroupEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCTCodeTypeGroupEN.con_InUse);
      objCTCodeTypeGroupCond.SetCondFldValue(clsCTCodeTypeGroupEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCTCodeTypeGroupConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCTCodeTypeGroupCond.whereCond = strWhereCond;
  return objCTCodeTypeGroupCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCTCodeTypeGroupConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objCTCodeTypeGroupCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (ctGroupId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCTCodeTypeGroupEN.con_CtGroupId,
          ctGroupId_q.value,
        );
        objCTCodeTypeGroupCond.SetCondFldValue(
          clsCTCodeTypeGroupEN.con_CtGroupId,
          ctGroupId_q.value,
          'like',
        );
      }
      if (groupName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCTCodeTypeGroupEN.con_GroupName,
          groupName_q.value,
        );
        objCTCodeTypeGroupCond.SetCondFldValue(
          clsCTCodeTypeGroupEN.con_GroupName,
          groupName_q.value,
          'like',
        );
      }
      if (groupENName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCTCodeTypeGroupEN.con_GroupENName,
          groupENName_q.value,
        );
        objCTCodeTypeGroupCond.SetCondFldValue(
          clsCTCodeTypeGroupEN.con_GroupENName,
          groupENName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineCTCodeTypeGroupConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objCTCodeTypeGroupCond.whereCond = strWhereCond;
    return objCTCodeTypeGroupCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCTCodeTypeGroupENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCTCodeTypeGroup.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refCTCodeTypeGroup_List.value != null) refCTCodeTypeGroup_List.value.selectAllChecked = false;
};

export function CTCodeTypeGroup_DeleteKeyIdCache(key: CTCodeTypeGroupKey): void;
export function CTCodeTypeGroup_DeleteKeyIdCache(key: CTCodeTypeGroupKey): void {
  if (IsNullOrEmpty(key.ctGroupId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${key.ctGroupId}`;
    delete cTCodeTypeGroupCache[cacheKey];
    return;
  }
}
