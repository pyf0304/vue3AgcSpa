/**
 * 类名:ApplicationTypeVueShare(界面:ApplicationTypeCRUD,00050315)
 * 表名:ApplicationType(00050127)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:20
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
import { clsApplicationTypeENEx } from '@/ts/L0Entity/GeneCode/clsApplicationTypeENEx';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortApplicationTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortApplicationTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refApplicationType_Edit = ref();
const refApplicationType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refApplicationType_Edit,
  refApplicationType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refApplicationType_Edit,
  refApplicationType_List,
};

export const showErrorMessage = ref(false);
export const dataListApplicationType = ref<Array<clsApplicationTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const applicationTypeCache: { [key: string]: clsApplicationTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const applicationTypeName_q = ref('');
export const applicationTypeSimName_q = ref('');
export const applicationTypeENName_q = ref('');
export const progLangTypeId_q = ref('');
const qryVarSet = reactive({
  applicationTypeName_q,
  applicationTypeSimName_q,
  applicationTypeENName_q,
  progLangTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineApplicationTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (applicationTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsApplicationTypeEN.con_ApplicationTypeName,
        applicationTypeName_q.value,
      );
    }
    if (applicationTypeSimName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        applicationTypeSimName_q.value,
      );
    }
    if (applicationTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsApplicationTypeEN.con_ApplicationTypeENName,
        applicationTypeENName_q.value,
      );
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And ApplicationType.{0} = '{1}'",
        clsApplicationTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineApplicationTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineApplicationTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objApplicationTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (applicationTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsApplicationTypeEN.con_ApplicationTypeName,
        applicationTypeName_q.value,
      );
      objApplicationTypeCond.SetCondFldValue(
        clsApplicationTypeEN.con_ApplicationTypeName,
        applicationTypeName_q.value,
        'like',
      );
    }
    if (applicationTypeSimName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        applicationTypeSimName_q.value,
      );
      objApplicationTypeCond.SetCondFldValue(
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        applicationTypeSimName_q.value,
        'like',
      );
    }
    if (applicationTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsApplicationTypeEN.con_ApplicationTypeENName,
        applicationTypeENName_q.value,
      );
      objApplicationTypeCond.SetCondFldValue(
        clsApplicationTypeEN.con_ApplicationTypeENName,
        applicationTypeENName_q.value,
        'like',
      );
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsApplicationTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
      objApplicationTypeCond.SetCondFldValue(
        clsApplicationTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineApplicationTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objApplicationTypeCond.whereCond = strWhereCond;
  return objApplicationTypeCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsApplicationTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListApplicationType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refApplicationType_List.value != null) refApplicationType_List.value.selectAllChecked = false;
};

export function ApplicationType_DeleteKeyIdCache(intApplicationTypeId: number): void {
  if (intApplicationTypeId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${intApplicationTypeId}`;
    delete applicationTypeCache[cacheKey];
    return;
  }
}
