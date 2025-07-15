/**
 * 类名:css_StyleVueShare(界面:css_StyleCRUD,00050330)
 * 表名:css_Style(00050468)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 14:21:01
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:样式表管理(CssManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clscss_StyleENEx } from '@/ts/L0Entity/CssManage/clscss_StyleENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';

const ascOrDesc4SortFun = ref('Asc');
const sortcss_StyleBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortcss_StyleBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const IsVisible_Giving = ref(false); //6、定义下拉框条件给定值2

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refcss_Style_Detail = ref();
const refcss_Style_Edit = ref();
const refcss_Style_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refcss_Style_Detail,
  refcss_Style_Edit,
  refcss_Style_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refcss_Style_Detail,
  refcss_Style_Edit,
  refcss_Style_List,
};

export const showErrorMessage = ref(false);
export const dataListcss_Style = ref<Array<clscss_StyleENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const css_StyleCache: { [key: string]: clscss_StyleENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const ctlTypeId_q = ref('');
export const styleId_q = ref('');
export const styleName_q = ref('');
const qryVarSet = reactive({
  ctlTypeId_q,
  styleId_q,
  styleName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecss_StyleCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and {0}='0'", clscss_StyleEN.con_IsDeleted);
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And css_Style.{0} = '{1}'",
        clscss_StyleEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
    if (styleId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clscss_StyleEN.con_StyleId, styleId_q.value);
    }
    if (styleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clscss_StyleEN.con_StyleName,
        styleName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(Combinecss_StyleCondition)时出错!请联系管理员!{0}',
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
export const Combinecss_StyleConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objcss_StyleCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and {0}='0'", clscss_StyleEN.con_IsDeleted);
  objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_IsDeleted, false, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clscss_StyleEN.con_CtlTypeId, ctlTypeId_q.value);
      objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_CtlTypeId, ctlTypeId_q.value, '=');
    }
    if (styleId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clscss_StyleEN.con_StyleId, styleId_q.value);
      objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_StyleId, styleId_q.value, 'like');
    }
    if (styleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clscss_StyleEN.con_StyleName,
        styleName_q.value,
      );
      objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_StyleName, styleName_q.value, 'like');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(Combinecss_StyleConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objcss_StyleCond.whereCond = strWhereCond;
  return objcss_StyleCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecss_StyleConditionObj4ExportExcel = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objcss_StyleCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and {0}='0'", clscss_StyleEN.con_IsDeleted);
  objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_IsDeleted, false, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clscss_StyleEN.con_CtlTypeId, ctlTypeId_q.value);
      objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_CtlTypeId, ctlTypeId_q.value, '=');
    }
    if (styleId_q.value != '') {
      strWhereCond += Format(" And {0} like '%{1}%'", clscss_StyleEN.con_StyleId, styleId_q.value);
      objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_StyleId, styleId_q.value, 'like');
    }
    if (styleName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clscss_StyleEN.con_StyleName,
        styleName_q.value,
      );
      objcss_StyleCond.SetCondFldValue(clscss_StyleEN.con_StyleName, styleName_q.value, 'like');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(Combinecss_StyleConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objcss_StyleCond.whereCond = strWhereCond;
  return objcss_StyleCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clscss_StyleENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListcss_Style.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refcss_Style_List.value != null) refcss_Style_List.value.selectAllChecked = false;
};

export function css_Style_DeleteKeyIdCache(strStyleId: string): void {
  if (IsNullOrEmpty(strStyleId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strStyleId}`;
    delete css_StyleCache[cacheKey];
    return;
  }
}
