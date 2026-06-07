/**
 * 类名:CTCodeTypeGroupRelaVueShare(界面:CTCodeTypeGroupRelaCRUD,00050350)
 * 表名:CTCodeTypeGroupRela(00050647)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 13:32:21
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
import { clsCTCodeTypeGroupRelaENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  CTCodeTypeGroupRelaKey,
  clsCTCodeTypeGroupRelaEN,
} from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortCTCodeTypeGroupRelaBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCTCodeTypeGroupRelaBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const ApplicationTypeId_Static = ref(0); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refCTCodeTypeGroupRela_Detail = ref();
const refCTCodeTypeGroupRela_DetailAi = ref();
const refCTCodeTypeGroupRela_Edit = ref();
const refCTCodeTypeGroupRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCTCodeTypeGroupRela_Detail,
  refCTCodeTypeGroupRela_DetailAi,
  refCTCodeTypeGroupRela_Edit,
  refCTCodeTypeGroupRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCTCodeTypeGroupRela_Detail,
  refCTCodeTypeGroupRela_DetailAi,
  refCTCodeTypeGroupRela_Edit,
  refCTCodeTypeGroupRela_List,
};

export const showErrorMessage = ref(false);
export const dataListCTCodeTypeGroupRela = ref<Array<clsCTCodeTypeGroupRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const cTCodeTypeGroupRelaCache: { [key: string]: clsCTCodeTypeGroupRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const ctGroupId_q = ref('');
export const codeTypeId_q = ref('');
const qryVarSet = reactive({
  ctGroupId_q,
  codeTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCTCodeTypeGroupRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (ctGroupId_q.value != '' && ctGroupId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCTCodeTypeGroupRelaEN.con_CtGroupId,
        ctGroupId_q.value,
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCTCodeTypeGroupRelaCondition)时出错!请联系管理员!{0}',
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
export const CombineCTCodeTypeGroupRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCTCodeTypeGroupRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctGroupId_q.value != '' && ctGroupId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCTCodeTypeGroupRelaEN.con_CtGroupId,
        ctGroupId_q.value,
      );
      objCTCodeTypeGroupRelaCond.SetCondFldValue(
        clsCTCodeTypeGroupRelaEN.con_CtGroupId,
        ctGroupId_q.value,
        '=',
      );
    }
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objCTCodeTypeGroupRelaCond.SetCondFldValue(
        clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCTCodeTypeGroupRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCTCodeTypeGroupRelaCond.whereCond = strWhereCond;
  return objCTCodeTypeGroupRelaCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCTCodeTypeGroupRelaConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objCTCodeTypeGroupRelaCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (ctGroupId_q.value != '' && ctGroupId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCTCodeTypeGroupRelaEN.con_CtGroupId,
          ctGroupId_q.value,
        );
        objCTCodeTypeGroupRelaCond.SetCondFldValue(
          clsCTCodeTypeGroupRelaEN.con_CtGroupId,
          ctGroupId_q.value,
          '=',
        );
      }
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objCTCodeTypeGroupRelaCond.SetCondFldValue(
          clsCTCodeTypeGroupRelaEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineCTCodeTypeGroupRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objCTCodeTypeGroupRelaCond.whereCond = strWhereCond;
    return objCTCodeTypeGroupRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCTCodeTypeGroupRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCTCodeTypeGroupRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refCTCodeTypeGroupRela_List.value != null)
    refCTCodeTypeGroupRela_List.value.selectAllChecked = false;
};

export function CTCodeTypeGroupRela_DeleteKeyIdCache(key: CTCodeTypeGroupRelaKey): void;
export function CTCodeTypeGroupRela_DeleteKeyIdCache(key: CTCodeTypeGroupRelaKey): void {
  if (IsNullOrEmpty(key.ctGroupId) == false && IsNullOrEmpty(key.codeTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${key.ctGroupId}_${key.codeTypeId}`;
    delete cTCodeTypeGroupRelaCache[cacheKey];
    return;
  }
}
