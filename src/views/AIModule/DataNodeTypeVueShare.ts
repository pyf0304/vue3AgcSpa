/**
 * 类名:DataNodeTypeVueShare(界面:DataNodeTypeCRUD,00050284)
 * 表名:DataNodeType(00050548)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:50:51
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:AI模块(AIModule)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsDataNodeTypeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeTypeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsDataNodeTypeEN } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortDataNodeTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDataNodeTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refDataNodeType_Detail = ref();
const refDataNodeType_Edit = ref();
const refDataNodeType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDataNodeType_Detail,
  refDataNodeType_Edit,
  refDataNodeType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDataNodeType_Detail,
  refDataNodeType_Edit,
  refDataNodeType_List,
};

export const showErrorMessage = ref(false);
export const dataListDataNodeType = ref<Array<clsDataNodeTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const dataNodeTypeCache: { [key: string]: clsDataNodeTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const dataNodeTypeId_q = ref('');
export const dataNodeTypeName_q = ref('');
const qryVarSet = reactive({
  dataNodeTypeId_q,
  dataNodeTypeName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDataNodeTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (dataNodeTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDataNodeTypeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
      );
    }
    if (dataNodeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDataNodeTypeEN.con_DataNodeTypeName,
        dataNodeTypeName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineDataNodeTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineDataNodeTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDataNodeTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (dataNodeTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDataNodeTypeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
      );
      objDataNodeTypeCond.SetCondFldValue(
        clsDataNodeTypeEN.con_DataNodeTypeId,
        dataNodeTypeId_q.value,
        'like',
      );
    }
    if (dataNodeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsDataNodeTypeEN.con_DataNodeTypeName,
        dataNodeTypeName_q.value,
      );
      objDataNodeTypeCond.SetCondFldValue(
        clsDataNodeTypeEN.con_DataNodeTypeName,
        dataNodeTypeName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineDataNodeTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDataNodeTypeCond.whereCond = strWhereCond;
  return objDataNodeTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDataNodeTypeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objDataNodeTypeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (dataNodeTypeId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsDataNodeTypeEN.con_DataNodeTypeId,
          dataNodeTypeId_q.value,
        );
        objDataNodeTypeCond.SetCondFldValue(
          clsDataNodeTypeEN.con_DataNodeTypeId,
          dataNodeTypeId_q.value,
          'like',
        );
      }
      if (dataNodeTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsDataNodeTypeEN.con_DataNodeTypeName,
          dataNodeTypeName_q.value,
        );
        objDataNodeTypeCond.SetCondFldValue(
          clsDataNodeTypeEN.con_DataNodeTypeName,
          dataNodeTypeName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineDataNodeTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objDataNodeTypeCond.whereCond = strWhereCond;
    return objDataNodeTypeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsDataNodeTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListDataNodeType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refDataNodeType_List.value != null) refDataNodeType_List.value.selectAllChecked = false;
};

export function DataNodeType_DeleteKeyIdCache(strDataNodeTypeId: string): void {
  if (IsNullOrEmpty(strDataNodeTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strDataNodeTypeId}`;
    delete dataNodeTypeCache[cacheKey];
    return;
  }
}
