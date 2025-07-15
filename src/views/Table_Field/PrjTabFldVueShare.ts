/**
 * 类名:PrjTabFldVueShare(界面:PrjTabFldCRUD,00050302)
 * 表名:PrjTabFld(00050019)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 04:54:51
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
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';

const ascOrDesc4SortFun = ref('Asc');
const sortPrjTabFldBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjTabFldBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const CtlTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const IsVisible_Giving = ref(false); //6、定义下拉框条件给定值2

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refPrjTabFld_Edit = ref();
const refPrjTabFld_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTabFld_Edit,
  refPrjTabFld_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjTabFld_Edit,
  refPrjTabFld_List,
};

export const showErrorMessage = ref(false);
export const dataListPrjTabFld = ref<Array<clsPrjTabFldENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const prjTabFldCache: { [key: string]: clsPrjTabFldENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const tabId_q = ref('');
export const fldId_q = ref('');
export const fieldTypeId_q = ref('');
export const fldOpTypeId_q = ref('');
const qryVarSet = reactive({
  tabId_q,
  fldId_q,
  fieldTypeId_q,
  fldOpTypeId_q,
});
export { qryVarSet };

//功能区变量定义
export const updDate_f = ref('');
export const updUser_f = ref('');
export const fieldTypeId_f = ref('');
export const sequenceNumber_f = ref(0);
export const tabId_f = ref('');
export const isForExtendClass_f = ref('0');
const featureVarSet = reactive({
  updDate_f,
  updUser_f,
  fieldTypeId_f,
  sequenceNumber_f,
  tabId_f,
  isForExtendClass_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabFldCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and TabId ='{0}'", TabId_Static.value);
  try {
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabFldEN.con_FldId, fldId_q.value);
    }
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And PrjTabFld.{0} = '{1}'",
        clsPrjTabFldEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
    }
    if (fldOpTypeId_q.value != '' && fldOpTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabFldEN.con_FldOpTypeId,
        fldOpTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjTabFldCondition)时出错!请联系管理员!{0}',
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
export const CombinePrjTabFldConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objPrjTabFldCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_TabId, TabId_Static.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabFldEN.con_FldId, fldId_q.value);
      objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_FldId, fldId_q.value, '=');
    }
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabFldEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
      objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_FieldTypeId, fieldTypeId_q.value, '=');
    }
    if (fldOpTypeId_q.value != '' && fldOpTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabFldEN.con_FldOpTypeId,
        fldOpTypeId_q.value,
      );
      objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_FldOpTypeId, fldOpTypeId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombinePrjTabFldConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjTabFldCond.whereCond = strWhereCond;
  return objPrjTabFldCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjTabFldConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objPrjTabFldCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_TabId, TabId_Static.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsPrjTabFldEN.con_FldId, fldId_q.value);
      objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_FldId, fldId_q.value, '=');
    }
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabFldEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
      objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_FieldTypeId, fieldTypeId_q.value, '=');
    }
    if (fldOpTypeId_q.value != '' && fldOpTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjTabFldEN.con_FldOpTypeId,
        fldOpTypeId_q.value,
      );
      objPrjTabFldCond.SetCondFldValue(clsPrjTabFldEN.con_FldOpTypeId, fldOpTypeId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombinePrjTabFldConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjTabFldCond.whereCond = strWhereCond;
  return objPrjTabFldCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsPrjTabFldENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListPrjTabFld.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refPrjTabFld_List.value != null) refPrjTabFld_List.value.selectAllChecked = false;
};

export function PrjTabFld_DeleteKeyIdCache(strTabId: string, lngmId: number): void {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In PrjTabFldVueShare.PrjTabFld.ReFreshCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(PrjTabFldVueShare.PrjTabFld.ReFreshCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strTabId}`;
    delete prjTabFldCache[cacheKey];
    return;
  }
}
