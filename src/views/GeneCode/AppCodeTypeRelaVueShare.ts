/**
 * 类名:AppCodeTypeRelaVueShare(界面:AppCodeTypeRelaCRUD,00050305)
 * 表名:AppCodeTypeRela(00050418)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:50:53
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortAppCodeTypeRelaBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortAppCodeTypeRelaBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refAppCodeTypeRela_Detail = ref();
const refAppCodeTypeRela_Edit = ref();
const refAppCodeTypeRela_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refAppCodeTypeRela_Detail,
  refAppCodeTypeRela_Edit,
  refAppCodeTypeRela_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refAppCodeTypeRela_Detail,
  refAppCodeTypeRela_Edit,
  refAppCodeTypeRela_List,
};

export const showErrorMessage = ref(false);
export const dataListAppCodeTypeRela = ref<Array<clsAppCodeTypeRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const appCodeTypeRelaCache: { [key: string]: clsAppCodeTypeRelaENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const codeTypeId_q = ref('');
export const tabMainTypeId_q = ref('');
export const isVisible_q = ref('0');
export const isInGroupGeneCode_q = ref('0');
const qryVarSet = reactive({
  codeTypeId_q,
  tabMainTypeId_q,
  isVisible_q,
  isInGroupGeneCode_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineAppCodeTypeRelaCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsAppCodeTypeRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (tabMainTypeId_q.value != '' && tabMainTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsAppCodeTypeRelaEN.con_TabMainTypeId,
        tabMainTypeId_q.value,
      );
    }
    if (isVisible_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsVisible);
    }
    if (isInGroupGeneCode_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineAppCodeTypeRelaCondition)时出错!请联系管理员!{0}',
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
export const CombineAppCodeTypeRelaConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objAppCodeTypeRelaCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsAppCodeTypeRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objAppCodeTypeRelaCond.SetCondFldValue(
        clsAppCodeTypeRelaEN.con_CodeTypeId,
        codeTypeId_q.value,
        '=',
      );
    }
    if (tabMainTypeId_q.value != '' && tabMainTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsAppCodeTypeRelaEN.con_TabMainTypeId,
        tabMainTypeId_q.value,
      );
      objAppCodeTypeRelaCond.SetCondFldValue(
        clsAppCodeTypeRelaEN.con_TabMainTypeId,
        tabMainTypeId_q.value,
        '=',
      );
    }
    if (isVisible_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsVisible);
      objAppCodeTypeRelaCond.SetCondFldValue(clsAppCodeTypeRelaEN.con_IsVisible, true, '=');
    } else {
      strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsVisible);
      objAppCodeTypeRelaCond.SetCondFldValue(clsAppCodeTypeRelaEN.con_IsVisible, false, '=');
    }
    if (isInGroupGeneCode_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
      objAppCodeTypeRelaCond.SetCondFldValue(clsAppCodeTypeRelaEN.con_IsInGroupGeneCode, true, '=');
    } else {
      strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
      objAppCodeTypeRelaCond.SetCondFldValue(
        clsAppCodeTypeRelaEN.con_IsInGroupGeneCode,
        false,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineAppCodeTypeRelaConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objAppCodeTypeRelaCond.whereCond = strWhereCond;
  return objAppCodeTypeRelaCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineAppCodeTypeRelaConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objAppCodeTypeRelaCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsAppCodeTypeRelaEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objAppCodeTypeRelaCond.SetCondFldValue(
          clsAppCodeTypeRelaEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
      if (tabMainTypeId_q.value != '' && tabMainTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsAppCodeTypeRelaEN.con_TabMainTypeId,
          tabMainTypeId_q.value,
        );
        objAppCodeTypeRelaCond.SetCondFldValue(
          clsAppCodeTypeRelaEN.con_TabMainTypeId,
          tabMainTypeId_q.value,
          '=',
        );
      }
      if (isVisible_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsVisible);
        objAppCodeTypeRelaCond.SetCondFldValue(clsAppCodeTypeRelaEN.con_IsVisible, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsVisible);
        objAppCodeTypeRelaCond.SetCondFldValue(clsAppCodeTypeRelaEN.con_IsVisible, false, '=');
      }
      if (isInGroupGeneCode_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
        objAppCodeTypeRelaCond.SetCondFldValue(
          clsAppCodeTypeRelaEN.con_IsInGroupGeneCode,
          true,
          '=',
        );
      } else {
        strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
        objAppCodeTypeRelaCond.SetCondFldValue(
          clsAppCodeTypeRelaEN.con_IsInGroupGeneCode,
          false,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineAppCodeTypeRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objAppCodeTypeRelaCond.whereCond = strWhereCond;
    return objAppCodeTypeRelaCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsAppCodeTypeRelaENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListAppCodeTypeRela.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refAppCodeTypeRela_List.value != null) refAppCodeTypeRela_List.value.selectAllChecked = false;
};

export function AppCodeTypeRela_DeleteKeyIdCache(lngmId: number): void {
  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}`;
    delete appCodeTypeRelaCache[cacheKey];
    return;
  }
}
