/**
 * 类名:PrjDataBaseVueShare(界面:PrjDataBaseCRUD,00050346)
 * 表名:PrjDataBase(00050176)
 * 版本:2026.04.19(服务器:PYF-AI)
 * 日期:2026/04/19 19:44:17
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:工程管理(PrjManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPrjDataBaseENEx } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';

const ascOrDesc4SortFun = ref('Asc');
const sortPrjDataBaseBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjDataBaseBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refPrjDataBase_Detail = ref();
const refPrjDataBase_Edit = ref();
const refPrjDataBase_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjDataBase_Detail,
  refPrjDataBase_Edit,
  refPrjDataBase_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjDataBase_Detail,
  refPrjDataBase_Edit,
  refPrjDataBase_List,
};

export const showErrorMessage = ref(false);
export const dataListPrjDataBase = ref<Array<clsPrjDataBaseENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const prjDataBaseCache: { [key: string]: clsPrjDataBaseENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const databaseOwner_q = ref('');
export const dataBaseTypeId_q = ref('');
export const dataBaseUserId_q = ref('');
export const ipAddress_q = ref('');
export const useStateId_q = ref('');
const qryVarSet = reactive({
  databaseOwner_q,
  dataBaseTypeId_q,
  dataBaseUserId_q,
  ipAddress_q,
  useStateId_q,
});
export { qryVarSet };

//功能区变量定义
export const useStateId_f = ref('');
const featureVarSet = reactive({
  useStateId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjDataBaseCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (databaseOwner_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjDataBaseEN.con_DatabaseOwner,
        databaseOwner_q.value,
      );
    }
    if (dataBaseTypeId_q.value != '' && dataBaseTypeId_q.value != '0') {
      strWhereCond += Format(
        " And PrjDataBase.{0} = '{1}'",
        clsPrjDataBaseEN.con_DataBaseTypeId,
        dataBaseTypeId_q.value,
      );
    }
    if (dataBaseUserId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjDataBaseEN.con_DataBaseUserId,
        dataBaseUserId_q.value,
      );
    }
    if (ipAddress_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjDataBaseEN.con_IpAddress,
        ipAddress_q.value,
      );
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(
        " And PrjDataBase.{0} = '{1}'",
        clsPrjDataBaseEN.con_UseStateId,
        useStateId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjDataBaseCondition)时出错!请联系管理员!{0}',
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
export const CombinePrjDataBaseConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objPrjDataBaseCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (databaseOwner_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjDataBaseEN.con_DatabaseOwner,
        databaseOwner_q.value,
      );
      objPrjDataBaseCond.SetCondFldValue(
        clsPrjDataBaseEN.con_DatabaseOwner,
        databaseOwner_q.value,
        'like',
      );
    }
    if (dataBaseTypeId_q.value != '' && dataBaseTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjDataBaseEN.con_DataBaseTypeId,
        dataBaseTypeId_q.value,
      );
      objPrjDataBaseCond.SetCondFldValue(
        clsPrjDataBaseEN.con_DataBaseTypeId,
        dataBaseTypeId_q.value,
        '=',
      );
    }
    if (dataBaseUserId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjDataBaseEN.con_DataBaseUserId,
        dataBaseUserId_q.value,
      );
      objPrjDataBaseCond.SetCondFldValue(
        clsPrjDataBaseEN.con_DataBaseUserId,
        dataBaseUserId_q.value,
        'like',
      );
    }
    if (ipAddress_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjDataBaseEN.con_IpAddress,
        ipAddress_q.value,
      );
      objPrjDataBaseCond.SetCondFldValue(clsPrjDataBaseEN.con_IpAddress, ipAddress_q.value, 'like');
    }
    if (useStateId_q.value != '' && useStateId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjDataBaseEN.con_UseStateId,
        useStateId_q.value,
      );
      objPrjDataBaseCond.SetCondFldValue(clsPrjDataBaseEN.con_UseStateId, useStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombinePrjDataBaseConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjDataBaseCond.whereCond = strWhereCond;
  return objPrjDataBaseCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjDataBaseConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objPrjDataBaseCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (databaseOwner_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjDataBaseEN.con_DatabaseOwner,
          databaseOwner_q.value,
        );
        objPrjDataBaseCond.SetCondFldValue(
          clsPrjDataBaseEN.con_DatabaseOwner,
          databaseOwner_q.value,
          'like',
        );
      }
      if (dataBaseTypeId_q.value != '' && dataBaseTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjDataBaseEN.con_DataBaseTypeId,
          dataBaseTypeId_q.value,
        );
        objPrjDataBaseCond.SetCondFldValue(
          clsPrjDataBaseEN.con_DataBaseTypeId,
          dataBaseTypeId_q.value,
          '=',
        );
      }
      if (dataBaseUserId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjDataBaseEN.con_DataBaseUserId,
          dataBaseUserId_q.value,
        );
        objPrjDataBaseCond.SetCondFldValue(
          clsPrjDataBaseEN.con_DataBaseUserId,
          dataBaseUserId_q.value,
          'like',
        );
      }
      if (ipAddress_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjDataBaseEN.con_IpAddress,
          ipAddress_q.value,
        );
        objPrjDataBaseCond.SetCondFldValue(
          clsPrjDataBaseEN.con_IpAddress,
          ipAddress_q.value,
          'like',
        );
      }
      if (useStateId_q.value != '' && useStateId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjDataBaseEN.con_UseStateId,
          useStateId_q.value,
        );
        objPrjDataBaseCond.SetCondFldValue(
          clsPrjDataBaseEN.con_UseStateId,
          useStateId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombinePrjDataBaseConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objPrjDataBaseCond.whereCond = strWhereCond;
    return objPrjDataBaseCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsPrjDataBaseENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListPrjDataBase.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refPrjDataBase_List.value != null) refPrjDataBase_List.value.selectAllChecked = false;
};

export function PrjDataBase_DeleteKeyIdCache(strPrjDataBaseId: string): void {
  if (IsNullOrEmpty(strPrjDataBaseId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strPrjDataBaseId}`;
    delete prjDataBaseCache[cacheKey];
    return;
  }
}
