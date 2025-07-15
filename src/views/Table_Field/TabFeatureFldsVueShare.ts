/**
 * 类名:TabFeatureFldsVueShare(界面:TabFeatureFldsCRUD,00050306)
 * 表名:TabFeatureFlds(00050455)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:12
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsTabFeatureFldsENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsENEx';
import { clsTabFeatureFldsEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureFldsEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortTabFeatureFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortTabFeatureFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refTabFeatureFlds_Edit = ref();
const refTabFeatureFlds_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTabFeatureFlds_Edit,
  refTabFeatureFlds_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTabFeatureFlds_Edit,
  refTabFeatureFlds_List,
};

export const showErrorMessage = ref(false);
export const dataListTabFeatureFlds = ref<Array<clsTabFeatureFldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const tabFeatureFldsCache: { [key: string]: clsTabFeatureFldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const fieldTypeId_q = ref('');
export const valueGivingModeId_q = ref('');
const qryVarSet = reactive({
  fieldTypeId_q,
  valueGivingModeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTabFeatureFldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFeatureFldsEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
    }
    if (valueGivingModeId_q.value != '' && valueGivingModeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFeatureFldsEN.con_ValueGivingModeId,
        valueGivingModeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineTabFeatureFldsCondition)时出错!请联系管理员!{0}',
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
export const CombineTabFeatureFldsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objTabFeatureFldsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFeatureFldsEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
      objTabFeatureFldsCond.SetCondFldValue(
        clsTabFeatureFldsEN.con_FieldTypeId,
        fieldTypeId_q.value,
        '=',
      );
    }
    if (valueGivingModeId_q.value != '' && valueGivingModeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsTabFeatureFldsEN.con_ValueGivingModeId,
        valueGivingModeId_q.value,
      );
      objTabFeatureFldsCond.SetCondFldValue(
        clsTabFeatureFldsEN.con_ValueGivingModeId,
        valueGivingModeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineTabFeatureFldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objTabFeatureFldsCond.whereCond = strWhereCond;
  return objTabFeatureFldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTabFeatureFldsConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objTabFeatureFldsCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTabFeatureFldsEN.con_FieldTypeId,
          fieldTypeId_q.value,
        );
        objTabFeatureFldsCond.SetCondFldValue(
          clsTabFeatureFldsEN.con_FieldTypeId,
          fieldTypeId_q.value,
          '=',
        );
      }
      if (valueGivingModeId_q.value != '' && valueGivingModeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTabFeatureFldsEN.con_ValueGivingModeId,
          valueGivingModeId_q.value,
        );
        objTabFeatureFldsCond.SetCondFldValue(
          clsTabFeatureFldsEN.con_ValueGivingModeId,
          valueGivingModeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineTabFeatureFldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objTabFeatureFldsCond.whereCond = strWhereCond;
    return objTabFeatureFldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsTabFeatureFldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListTabFeatureFlds.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refTabFeatureFlds_List.value != null) refTabFeatureFlds_List.value.selectAllChecked = false;
};

export function TabFeatureFlds_DeleteKeyIdCache(lngmId: number): void {
  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}`;
    delete tabFeatureFldsCache[cacheKey];
    return;
  }
}
