/**
 * 类名:FieldTabVueShare(界面:FieldTabCRUD,00050316)
 * 表名:FieldTab(00050021)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:31
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
import { clsFieldTabENEx } from '@/ts/L0Entity/Table_Field/clsFieldTabENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFieldTabBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFieldTabBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const UserId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFieldTab_Detail = ref();
const refFieldTab_Edit = ref();
const refFieldTab_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFieldTab_Detail,
  refFieldTab_Edit,
  refFieldTab_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFieldTab_Detail,
  refFieldTab_Edit,
  refFieldTab_List,
};

export const showErrorMessage = ref(false);
export const dataListFieldTab = ref<Array<clsFieldTabENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const fieldTabCache: { [key: string]: clsFieldTabENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const fldId_q = ref('');
export const fldName_q = ref('');
export const caption_q = ref('');
export const fieldTypeId_q = ref('');
export const dataTypeId_q = ref('');
export const fldStateId_q = ref('');
export const prjId_q = ref('');
const qryVarSet = reactive({
  fldId_q,
  fldName_q,
  caption_q,
  fieldTypeId_q,
  dataTypeId_q,
  fldStateId_q,
  prjId_q,
});
export { qryVarSet };

//功能区变量定义
export const homologousFldId_f = ref('');
const featureVarSet = reactive({
  homologousFldId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFieldTabCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (fldId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_FldId, fldId_q.value);
    }
    if (fldName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_FldName, fldName_q.value);
    }
    if (caption_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_Caption, caption_q.value);
    }
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And FieldTab.{0} = '{1}'",
        clsFieldTabEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
    }
    if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsFieldTabEN.con_DataTypeId, dataTypeId_q.value);
    }
    if (fldStateId_q.value != '' && fldStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsFieldTabEN.con_FldStateId, fldStateId_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFieldTabCondition)时出错!请联系管理员!{0}',
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
export const CombineFieldTabConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFieldTabCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (fldId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_FldId, fldId_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FldId, fldId_q.value, 'like');
    }
    if (fldName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_FldName, fldName_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FldName, fldName_q.value, 'like');
    }
    if (caption_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_Caption, caption_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_Caption, caption_q.value, 'like');
    }
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFieldTabEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FieldTypeId, fieldTypeId_q.value, '=');
    }
    if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsFieldTabEN.con_DataTypeId, dataTypeId_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_DataTypeId, dataTypeId_q.value, '=');
    }
    if (fldStateId_q.value != '' && fldStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsFieldTabEN.con_FldStateId, fldStateId_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FldStateId, fldStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFieldTabConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFieldTabCond.whereCond = strWhereCond;
  return objFieldTabCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFieldTabConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFieldTabCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_PrjId, PrjId_Session.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (fldId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_FldId, fldId_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FldId, fldId_q.value, 'like');
    }
    if (fldName_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_FldName, fldName_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FldName, fldName_q.value, 'like');
    }
    if (caption_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clsFieldTabEN.con_Caption, caption_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_Caption, caption_q.value, 'like');
    }
    if (fieldTypeId_q.value != '' && fieldTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFieldTabEN.con_FieldTypeId,
        fieldTypeId_q.value,
      );
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FieldTypeId, fieldTypeId_q.value, '=');
    }
    if (dataTypeId_q.value != '' && dataTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsFieldTabEN.con_DataTypeId, dataTypeId_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_DataTypeId, dataTypeId_q.value, '=');
    }
    if (fldStateId_q.value != '' && fldStateId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsFieldTabEN.con_FldStateId, fldStateId_q.value);
      objFieldTabCond.SetCondFldValue(clsFieldTabEN.con_FldStateId, fldStateId_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineFieldTabConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFieldTabCond.whereCond = strWhereCond;
  return objFieldTabCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFieldTabENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFieldTab.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFieldTab_List.value != null) refFieldTab_List.value.selectAllChecked = false;
};

export function FieldTab_DeleteKeyIdCache(strFldId: string): void {
  if (IsNullOrEmpty(strFldId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strFldId}`;
    delete fieldTabCache[cacheKey];
    return;
  }
}
