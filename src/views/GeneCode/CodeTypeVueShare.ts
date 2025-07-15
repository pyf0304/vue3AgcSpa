/**
 * 类名:CodeTypeVueShare(界面:CodeTypeCRUD,00050271)
 * 表名:CodeType(00050203)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:50:50
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
import { clsCodeTypeENEx } from '@/ts/L0Entity/GeneCode/clsCodeTypeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortCodeTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCodeTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refCodeType_Edit = ref();
const refCodeType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCodeType_Edit,
  refCodeType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refCodeType_Edit,
  refCodeType_List,
};

export const showErrorMessage = ref(false);
export const dataListCodeType = ref<Array<clsCodeTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const codeTypeCache: { [key: string]: clsCodeTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const codeTypeId_q = ref('');
export const codeTypeName_q = ref('');
export const codeTypeENName_q = ref('');
export const frontOrBack_q = ref('');
export const groupName_q = ref('');
export const progLangTypeId_q = ref('');
export const regionTypeId_q = ref('');
export const sqlDsTypeId_q = ref('');
export const dependsOn_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  codeTypeId_q,
  codeTypeName_q,
  codeTypeENName_q,
  frontOrBack_q,
  groupName_q,
  progLangTypeId_q,
  regionTypeId_q,
  sqlDsTypeId_q,
  dependsOn_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
export const sqlDsTypeId_f = ref('');
export const inUse_f = ref('0');
export const groupName_f = ref('');
const featureVarSet = reactive({
  sqlDsTypeId_f,
  inUse_f,
  groupName_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCodeTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (codeTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (codeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeName,
        codeTypeName_q.value,
      );
    }
    if (codeTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeENName,
        codeTypeENName_q.value,
      );
    }
    if (frontOrBack_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_FrontOrBack,
        frontOrBack_q.value,
      );
    }
    if (groupName_q.value != '' && groupName_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCodeTypeEN.con_GroupName, groupName_q.value);
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(
        " And CodeType.{0} = '{1}'",
        clsCodeTypeEN.con_SqlDsTypeId,
        sqlDsTypeId_q.value,
      );
    }
    if (dependsOn_q.value != '' && dependsOn_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCodeTypeEN.con_DependsOn, dependsOn_q.value);
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCodeTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineCodeTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCodeTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (codeTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_CodeTypeId, codeTypeId_q.value, 'like');
    }
    if (codeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeName,
        codeTypeName_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_CodeTypeName, codeTypeName_q.value, 'like');
    }
    if (codeTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeENName,
        codeTypeENName_q.value,
      );
      objCodeTypeCond.SetCondFldValue(
        clsCodeTypeEN.con_CodeTypeENName,
        codeTypeENName_q.value,
        'like',
      );
    }
    if (frontOrBack_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_FrontOrBack,
        frontOrBack_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_FrontOrBack, frontOrBack_q.value, 'like');
    }
    if (groupName_q.value != '' && groupName_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCodeTypeEN.con_GroupName, groupName_q.value);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_GroupName, groupName_q.value, '=');
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(
        clsCodeTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
        '=',
      );
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_RegionTypeId, regionTypeId_q.value, '=');
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_SqlDsTypeId,
        sqlDsTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_SqlDsTypeId, sqlDsTypeId_q.value, '=');
    }
    if (dependsOn_q.value != '' && dependsOn_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCodeTypeEN.con_DependsOn, dependsOn_q.value);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_DependsOn, dependsOn_q.value, '=');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_InUse);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_InUse);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCodeTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCodeTypeCond.whereCond = strWhereCond;
  return objCodeTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCodeTypeConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objCodeTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (codeTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_CodeTypeId, codeTypeId_q.value, 'like');
    }
    if (codeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeName,
        codeTypeName_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_CodeTypeName, codeTypeName_q.value, 'like');
    }
    if (codeTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_CodeTypeENName,
        codeTypeENName_q.value,
      );
      objCodeTypeCond.SetCondFldValue(
        clsCodeTypeEN.con_CodeTypeENName,
        codeTypeENName_q.value,
        'like',
      );
    }
    if (frontOrBack_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCodeTypeEN.con_FrontOrBack,
        frontOrBack_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_FrontOrBack, frontOrBack_q.value, 'like');
    }
    if (groupName_q.value != '' && groupName_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCodeTypeEN.con_GroupName, groupName_q.value);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_GroupName, groupName_q.value, '=');
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(
        clsCodeTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
        '=',
      );
    }
    if (regionTypeId_q.value != '' && regionTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_RegionTypeId,
        regionTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_RegionTypeId, regionTypeId_q.value, '=');
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCodeTypeEN.con_SqlDsTypeId,
        sqlDsTypeId_q.value,
      );
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_SqlDsTypeId, sqlDsTypeId_q.value, '=');
    }
    if (dependsOn_q.value != '' && dependsOn_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsCodeTypeEN.con_DependsOn, dependsOn_q.value);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_DependsOn, dependsOn_q.value, '=');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsCodeTypeEN.con_InUse);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsCodeTypeEN.con_InUse);
      objCodeTypeCond.SetCondFldValue(clsCodeTypeEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineCodeTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCodeTypeCond.whereCond = strWhereCond;
  return objCodeTypeCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCodeTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCodeType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refCodeType_List.value != null) refCodeType_List.value.selectAllChecked = false;
};

export function CodeType_DeleteKeyIdCache(strCodeTypeId: string): void {
  if (IsNullOrEmpty(strCodeTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strCodeTypeId}`;
    delete codeTypeCache[cacheKey];
    return;
  }
}
