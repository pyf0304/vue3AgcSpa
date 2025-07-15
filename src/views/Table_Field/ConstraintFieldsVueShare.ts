/**
 * 类名:ConstraintFieldsVueShare(界面:ConstraintFieldsCRUD,00050338)
 * 表名:ConstraintFields(00050334)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/09 18:30:38
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
import { clsConstraintFieldsENEx } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsConstraintFieldsEN } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsEN';

const ascOrDesc4SortFun = ref('Asc');
const sortConstraintFieldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortConstraintFieldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refConstraintFields_Detail = ref();
const refConstraintFields_Edit = ref();
const refConstraintFields_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refConstraintFields_Detail,
  refConstraintFields_Edit,
  refConstraintFields_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refConstraintFields_Detail,
  refConstraintFields_Edit,
  refConstraintFields_List,
};

export const showErrorMessage = ref(false);
export const dataListConstraintFields = ref<Array<clsConstraintFieldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const constraintFieldsCache: { [key: string]: clsConstraintFieldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const prjConstraintId_q = ref('');
export const tabId_q = ref('');
export const fldId_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  prjConstraintId_q,
  tabId_q,
  fldId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0');
const featureVarSet = reactive({
  inUse_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineConstraintFieldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (prjConstraintId_q.value != '' && prjConstraintId_q.value != '0') {
      strWhereCond += Format(
        " And ConstraintFields.{0} = '{1}'",
        clsConstraintFieldsEN.con_PrjConstraintId,
        prjConstraintId_q.value,
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(
        " And ConstraintFields.{0} = '{1}'",
        clsConstraintFieldsEN.con_TabId,
        tabId_q.value,
      );
    }
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(
        " And ConstraintFields.{0} = '{1}'",
        clsConstraintFieldsEN.con_FldId,
        fldId_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsConstraintFieldsEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsConstraintFieldsEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineConstraintFieldsCondition)时出错!请联系管理员!{0}',
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
export const CombineConstraintFieldsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objConstraintFieldsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (prjConstraintId_q.value != '' && prjConstraintId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsConstraintFieldsEN.con_PrjConstraintId,
        prjConstraintId_q.value,
      );
      objConstraintFieldsCond.SetCondFldValue(
        clsConstraintFieldsEN.con_PrjConstraintId,
        prjConstraintId_q.value,
        '=',
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsConstraintFieldsEN.con_TabId, tabId_q.value);
      objConstraintFieldsCond.SetCondFldValue(clsConstraintFieldsEN.con_TabId, tabId_q.value, '=');
    }
    if (fldId_q.value != '' && fldId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsConstraintFieldsEN.con_FldId, fldId_q.value);
      objConstraintFieldsCond.SetCondFldValue(clsConstraintFieldsEN.con_FldId, fldId_q.value, '=');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsConstraintFieldsEN.con_InUse);
      objConstraintFieldsCond.SetCondFldValue(clsConstraintFieldsEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsConstraintFieldsEN.con_InUse);
      objConstraintFieldsCond.SetCondFldValue(clsConstraintFieldsEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineConstraintFieldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objConstraintFieldsCond.whereCond = strWhereCond;
  return objConstraintFieldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineConstraintFieldsConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objConstraintFieldsCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (prjConstraintId_q.value != '' && prjConstraintId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsConstraintFieldsEN.con_PrjConstraintId,
          prjConstraintId_q.value,
        );
        objConstraintFieldsCond.SetCondFldValue(
          clsConstraintFieldsEN.con_PrjConstraintId,
          prjConstraintId_q.value,
          '=',
        );
      }
      if (tabId_q.value != '' && tabId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsConstraintFieldsEN.con_TabId, tabId_q.value);
        objConstraintFieldsCond.SetCondFldValue(
          clsConstraintFieldsEN.con_TabId,
          tabId_q.value,
          '=',
        );
      }
      if (fldId_q.value != '' && fldId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsConstraintFieldsEN.con_FldId, fldId_q.value);
        objConstraintFieldsCond.SetCondFldValue(
          clsConstraintFieldsEN.con_FldId,
          fldId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineConstraintFieldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objConstraintFieldsCond.whereCond = strWhereCond;
    return objConstraintFieldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsConstraintFieldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListConstraintFields.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refConstraintFields_List.value != null)
    refConstraintFields_List.value.selectAllChecked = false;
};

export function ConstraintFields_DeleteKeyIdCache(strPrjId: string, lngmId: number): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In ConstraintFieldsVueShare.ConstraintFields.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(ConstraintFieldsVueShare.ConstraintFields.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strPrjId}`;
    delete constraintFieldsCache[cacheKey];
    return;
  }
}
