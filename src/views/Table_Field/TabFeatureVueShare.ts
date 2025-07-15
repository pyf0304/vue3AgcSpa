/**
 * 类名:TabFeatureVueShare(界面:TabFeatureCRUD,00050225)
 * 表名:TabFeature(00050463)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 06:26:38
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
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';

const ascOrDesc4SortFun = ref('Asc');
const sortTabFeatureBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortTabFeatureBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const FeatureTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refTabFeature_Edit = ref();
const refTabFeature_Lst = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTabFeature_Edit,
  refTabFeature_Lst,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTabFeature_Edit,
  refTabFeature_Lst,
};

export const showErrorMessage = ref(false);
export const dataListTabFeature = ref<Array<clsTabFeatureENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const tabFeatureCache: { [key: string]: clsTabFeatureENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const tabFeatureId_q = ref('');
export const tabFeatureName_q = ref('');
export const tabId_q = ref('');
export const featureId_q = ref('');
export const isExtendedClass_q = ref('0');
const qryVarSet = reactive({
  tabFeatureId_q,
  tabFeatureName_q,
  tabId_q,
  featureId_q,
  isExtendedClass_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTabFeatureCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (tabFeatureId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTabFeatureEN.con_TabFeatureId,
        tabFeatureId_q.value,
      );
    }
    if (tabFeatureName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTabFeatureEN.con_TabFeatureName,
        tabFeatureName_q.value,
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(
        " And TabFeature.{0} = '{1}'",
        clsTabFeatureEN.con_TabId,
        tabId_q.value,
      );
    }
    if (featureId_q.value != '' && featureId_q.value != '0') {
      strWhereCond += Format(
        " And TabFeature.{0} = '{1}'",
        clsTabFeatureEN.con_FeatureId,
        featureId_q.value,
      );
    }
    if (isExtendedClass_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsExtendedClass);
    } else if (isExtendedClass_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsExtendedClass);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineTabFeatureCondition)时出错!请联系管理员!{0}',
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
export const CombineTabFeatureConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objTabFeatureCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (tabFeatureId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTabFeatureEN.con_TabFeatureId,
        tabFeatureId_q.value,
      );
      objTabFeatureCond.SetCondFldValue(
        clsTabFeatureEN.con_TabFeatureId,
        tabFeatureId_q.value,
        'like',
      );
    }
    if (tabFeatureName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTabFeatureEN.con_TabFeatureName,
        tabFeatureName_q.value,
      );
      objTabFeatureCond.SetCondFldValue(
        clsTabFeatureEN.con_TabFeatureName,
        tabFeatureName_q.value,
        'like',
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsTabFeatureEN.con_TabId, tabId_q.value);
      objTabFeatureCond.SetCondFldValue(clsTabFeatureEN.con_TabId, tabId_q.value, '=');
    }
    if (featureId_q.value != '' && featureId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsTabFeatureEN.con_FeatureId, featureId_q.value);
      objTabFeatureCond.SetCondFldValue(clsTabFeatureEN.con_FeatureId, featureId_q.value, '=');
    }
    if (isExtendedClass_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsExtendedClass);
      objTabFeatureCond.SetCondFldValue(clsTabFeatureEN.con_IsExtendedClass, true, '=');
    } else if (isExtendedClass_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsExtendedClass);
      objTabFeatureCond.SetCondFldValue(clsTabFeatureEN.con_IsExtendedClass, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineTabFeatureConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objTabFeatureCond.whereCond = strWhereCond;
  return objTabFeatureCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTabFeatureConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objTabFeatureCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (tabFeatureId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTabFeatureEN.con_TabFeatureId,
        tabFeatureId_q.value,
      );
      objTabFeatureCond.SetCondFldValue(
        clsTabFeatureEN.con_TabFeatureId,
        tabFeatureId_q.value,
        'like',
      );
    }
    if (tabFeatureName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTabFeatureEN.con_TabFeatureName,
        tabFeatureName_q.value,
      );
      objTabFeatureCond.SetCondFldValue(
        clsTabFeatureEN.con_TabFeatureName,
        tabFeatureName_q.value,
        'like',
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsTabFeatureEN.con_TabId, tabId_q.value);
      objTabFeatureCond.SetCondFldValue(clsTabFeatureEN.con_TabId, tabId_q.value, '=');
    }
    if (featureId_q.value != '' && featureId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsTabFeatureEN.con_FeatureId, featureId_q.value);
      objTabFeatureCond.SetCondFldValue(clsTabFeatureEN.con_FeatureId, featureId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineTabFeatureConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objTabFeatureCond.whereCond = strWhereCond;
  return objTabFeatureCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsTabFeatureENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListTabFeature.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refTabFeature_Lst.value != null) refTabFeature_Lst.value.selectAllChecked = false;
};

export function TabFeature_DeleteKeyIdCache(strPrjId: string, strTabFeatureId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In TabFeatureVueShare.TabFeature.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(TabFeatureVueShare.TabFeature.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strTabFeatureId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strTabFeatureId}_${strPrjId}`;
    delete tabFeatureCache[cacheKey];
    return;
  }
}
