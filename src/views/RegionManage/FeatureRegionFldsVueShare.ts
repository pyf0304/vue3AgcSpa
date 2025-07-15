/**
 * 类名:FeatureRegionFldsVueShare(界面:FeatureRegionFldsCRUD,00050127)
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2025.05.11.1(服务器:PYF-AI)
 * 日期:2025/05/12 14:58:19
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
export const FeatureTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId4Region_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFeatureRegionFlds_Detail = ref();
const refFeatureRegionFlds_Edit = ref();
const refFeatureRegionFlds_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFeatureRegionFlds_Detail,
  refFeatureRegionFlds_Edit,
  refFeatureRegionFlds_List,
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
  refFeatureRegionFlds_Edit,
  refFeatureRegionFlds_List,
};

export const showErrorMessage = ref(false);
export const dataListFeatureRegionFlds = ref<Array<clsFeatureRegionFldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const featureRegionFldsCache: { [key: string]: clsFeatureRegionFldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const ctlTypeId_q = ref('');
export const viewImplId_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  ctlTypeId_q,
  viewImplId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
export const regionId_f = ref('');
export const inUse_f = ref('0');
export const groupName_f = ref('');
export const tabFeatureId_f = ref('');
const featureVarSet = reactive({
  regionId_f,
  inUse_f,
  groupName_f,
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
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFeatureRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
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
  if (refFeatureRegionFlds_List.value != null)
    refFeatureRegionFlds_List.value.selectAllChecked = false;
};

export function FeatureRegionFlds_DeleteKeyIdCache(
  strRegionId: string,
  strViewFeatureId: string,
): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In FeatureRegionFldsVueShare.FeatureRegionFlds.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(FeatureRegionFldsVueShare.FeatureRegionFlds.ReFreshCache)',
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
