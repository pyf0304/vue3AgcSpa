/**
 * 类名:FeatureRegionFlds_SimVueShare(界面:FeatureRegionFlds_Sim,00050294)
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/12 15:35:40
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFeatureRegionFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFeatureRegionFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFeatureRegionFlds_Detail = ref();
const refFeatureRegionFlds_Edit_SetValue = ref();
const refvFeatureRegionFlds_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFeatureRegionFlds_Detail,
  refFeatureRegionFlds_Edit_SetValue,
  refvFeatureRegionFlds_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFeatureRegionFlds_Detail,
  refFeatureRegionFlds_Edit_SetValue,
  refvFeatureRegionFlds_List,
};

export const showErrorMessage = ref(false);
export const dataListFeatureRegionFlds = ref<Array<clsFeatureRegionFldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const featureRegionFldsCache: { [key: string]: clsFeatureRegionFldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const buttonName_q = ref('');
export const text_q = ref('');
export const ctlTypeId_q = ref('');
export const featureName_q = ref('');
export const viewImplId_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  buttonName_q,
  text_q,
  ctlTypeId_q,
  featureName_q,
  viewImplId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0');
export const groupName_f = ref('');
export const regionId_f = ref('');
export const tabFeatureId_f = ref('');
const featureVarSet = reactive({
  inUse_f,
  groupName_f,
  regionId_f,
  tabFeatureId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFeatureRegionFldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (buttonName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFeatureRegionFldsEN.con_ButtonName,
        buttonName_q.value,
      );
    }
    if (text_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFeatureRegionFldsEN.con_Text,
        text_q.value,
      );
    }
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFeatureRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
    if (featureName_q.value != '') {
      strWhereCond += Format(
        " And  FeatureId in (Select FeatureId from PrjFeature where FeatureName like '%{0}%') ",
        featureName_q.value,
      );
    }
    if (viewImplId_q.value != '' && viewImplId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFeatureRegionFldsEN.con_ViewImplId,
        viewImplId_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFeatureRegionFldsEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFeatureRegionFldsEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFeatureRegionFldsCondition)时出错!请联系管理员!{0}',
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
export const CombineFeatureRegionFldsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFeatureRegionFldsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (buttonName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFeatureRegionFldsEN.con_ButtonName,
        buttonName_q.value,
      );
      objFeatureRegionFldsCond.SetCondFldValue(
        clsFeatureRegionFldsEN.con_ButtonName,
        buttonName_q.value,
        'like',
      );
    }
    if (text_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFeatureRegionFldsEN.con_Text,
        text_q.value,
      );
      objFeatureRegionFldsCond.SetCondFldValue(
        clsFeatureRegionFldsEN.con_Text,
        text_q.value,
        'like',
      );
    }
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFeatureRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objFeatureRegionFldsCond.SetCondFldValue(
        clsFeatureRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
        '=',
      );
    }
    if (featureName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFeatureRegionFldsENEx.con_FeatureName,
        featureName_q.value,
      );
      objFeatureRegionFldsCond.SetCondFldValue(
        clsFeatureRegionFldsENEx.con_FeatureName,
        featureName_q.value,
        'like',
      );
    }
    if (viewImplId_q.value != '' && viewImplId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFeatureRegionFldsEN.con_ViewImplId,
        viewImplId_q.value,
      );
      objFeatureRegionFldsCond.SetCondFldValue(
        clsFeatureRegionFldsEN.con_ViewImplId,
        viewImplId_q.value,
        '=',
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFeatureRegionFldsEN.con_InUse);
      objFeatureRegionFldsCond.SetCondFldValue(clsFeatureRegionFldsEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFeatureRegionFldsEN.con_InUse);
      objFeatureRegionFldsCond.SetCondFldValue(clsFeatureRegionFldsEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFeatureRegionFldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFeatureRegionFldsCond.whereCond = strWhereCond;
  return objFeatureRegionFldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFeatureRegionFldsConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFeatureRegionFldsCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (buttonName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFeatureRegionFldsEN.con_ButtonName,
          buttonName_q.value,
        );
        objFeatureRegionFldsCond.SetCondFldValue(
          clsFeatureRegionFldsEN.con_ButtonName,
          buttonName_q.value,
          'like',
        );
      }
      if (text_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFeatureRegionFldsEN.con_Text,
          text_q.value,
        );
        objFeatureRegionFldsCond.SetCondFldValue(
          clsFeatureRegionFldsEN.con_Text,
          text_q.value,
          'like',
        );
      }
      if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFeatureRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
        );
        objFeatureRegionFldsCond.SetCondFldValue(
          clsFeatureRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
          '=',
        );
      }
      if (featureName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFeatureRegionFldsENEx.con_FeatureName,
          featureName_q.value,
        );
        objFeatureRegionFldsCond.SetCondFldValue(
          clsFeatureRegionFldsENEx.con_FeatureName,
          featureName_q.value,
          'like',
        );
      }
      if (viewImplId_q.value != '' && viewImplId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFeatureRegionFldsEN.con_ViewImplId,
          viewImplId_q.value,
        );
        objFeatureRegionFldsCond.SetCondFldValue(
          clsFeatureRegionFldsEN.con_ViewImplId,
          viewImplId_q.value,
          '=',
        );
      }
      if (inUse_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsFeatureRegionFldsEN.con_InUse);
        objFeatureRegionFldsCond.SetCondFldValue(clsFeatureRegionFldsEN.con_InUse, true, '=');
      } else if (inUse_q.value == 'false') {
        strWhereCond += Format(" And {0} = '0'", clsFeatureRegionFldsEN.con_InUse);
        objFeatureRegionFldsCond.SetCondFldValue(clsFeatureRegionFldsEN.con_InUse, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFeatureRegionFldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFeatureRegionFldsCond.whereCond = strWhereCond;
    return objFeatureRegionFldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFeatureRegionFldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFeatureRegionFlds.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refvFeatureRegionFlds_List.value != null)
    refvFeatureRegionFlds_List.value.selectAllChecked = false;
};

export function FeatureRegionFlds_DeleteKeyIdCache(
  strRegionId: string,
  strViewFeatureId: string,
): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In FeatureRegionFlds_SimVueShare.FeatureRegionFlds.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(FeatureRegionFlds_SimVueShare.FeatureRegionFlds.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strViewFeatureId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strViewFeatureId}_${strRegionId}`;
    delete featureRegionFldsCache[cacheKey];
    return;
  }
}
