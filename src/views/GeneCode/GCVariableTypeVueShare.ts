/**
 * 类名:GCVariableTypeVueShare(界面:GCVariableTypeCRUD,00050287)
 * 表名:GCVariableType(00050560)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:16
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
import { clsGCVariableTypeENEx } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortGCVariableTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortGCVariableTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refGCVariableType_Detail = ref();
const refGCVariableType_Edit = ref();
const refGCVariableType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCVariableType_Detail,
  refGCVariableType_Edit,
  refGCVariableType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCVariableType_Detail,
  refGCVariableType_Edit,
  refGCVariableType_List,
};

export const showErrorMessage = ref(false);
export const dataListGCVariableType = ref<Array<clsGCVariableTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const gCVariableTypeCache: { [key: string]: clsGCVariableTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const varTypeId_q = ref('');
export const varTypeName_q = ref('');
export const varTypeENName_q = ref('');
const qryVarSet = reactive({
  varTypeId_q,
  varTypeName_q,
  varTypeENName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCVariableTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (varTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCVariableTypeEN.con_VarTypeId,
        varTypeId_q.value,
      );
    }
    if (varTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCVariableTypeEN.con_VarTypeName,
        varTypeName_q.value,
      );
    }
    if (varTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCVariableTypeEN.con_VarTypeENName,
        varTypeENName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineGCVariableTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineGCVariableTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGCVariableTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (varTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCVariableTypeEN.con_VarTypeId,
        varTypeId_q.value,
      );
      objGCVariableTypeCond.SetCondFldValue(
        clsGCVariableTypeEN.con_VarTypeId,
        varTypeId_q.value,
        'like',
      );
    }
    if (varTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCVariableTypeEN.con_VarTypeName,
        varTypeName_q.value,
      );
      objGCVariableTypeCond.SetCondFldValue(
        clsGCVariableTypeEN.con_VarTypeName,
        varTypeName_q.value,
        'like',
      );
    }
    if (varTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCVariableTypeEN.con_VarTypeENName,
        varTypeENName_q.value,
      );
      objGCVariableTypeCond.SetCondFldValue(
        clsGCVariableTypeEN.con_VarTypeENName,
        varTypeENName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineGCVariableTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGCVariableTypeCond.whereCond = strWhereCond;
  return objGCVariableTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCVariableTypeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objGCVariableTypeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (varTypeId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCVariableTypeEN.con_VarTypeId,
          varTypeId_q.value,
        );
        objGCVariableTypeCond.SetCondFldValue(
          clsGCVariableTypeEN.con_VarTypeId,
          varTypeId_q.value,
          'like',
        );
      }
      if (varTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCVariableTypeEN.con_VarTypeName,
          varTypeName_q.value,
        );
        objGCVariableTypeCond.SetCondFldValue(
          clsGCVariableTypeEN.con_VarTypeName,
          varTypeName_q.value,
          'like',
        );
      }
      if (varTypeENName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCVariableTypeEN.con_VarTypeENName,
          varTypeENName_q.value,
        );
        objGCVariableTypeCond.SetCondFldValue(
          clsGCVariableTypeEN.con_VarTypeENName,
          varTypeENName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineGCVariableTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objGCVariableTypeCond.whereCond = strWhereCond;
    return objGCVariableTypeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsGCVariableTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListGCVariableType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refGCVariableType_List.value != null) refGCVariableType_List.value.selectAllChecked = false;
};

export function GCVariableType_DeleteKeyIdCache(strVarTypeId: string): void {
  if (IsNullOrEmpty(strVarTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strVarTypeId}`;
    delete gCVariableTypeCache[cacheKey];
    return;
  }
}
