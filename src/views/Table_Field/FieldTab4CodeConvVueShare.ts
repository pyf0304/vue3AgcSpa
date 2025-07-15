/**
 * 类名:FieldTab4CodeConvVueShare(界面:FieldTab4CodeConvCRUD,00050326)
 * 表名:FieldTab4CodeConv(00050593)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 21:05:08
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
import { clsFieldTab4CodeConvENEx } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFieldTab4CodeConvBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFieldTab4CodeConvBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFieldTab4CodeConv_Detail = ref();
const refFieldTab4CodeConv_Edit = ref();
const refFieldTab4CodeConv_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFieldTab4CodeConv_Detail,
  refFieldTab4CodeConv_Edit,
  refFieldTab4CodeConv_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFieldTab4CodeConv_Detail,
  refFieldTab4CodeConv_Edit,
  refFieldTab4CodeConv_List,
};

export const showErrorMessage = ref(false);
export const dataListFieldTab4CodeConv = ref<Array<clsFieldTab4CodeConvENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const fieldTab4CodeConvCache: { [key: string]: clsFieldTab4CodeConvENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const fldId_q = ref('');
export const prjId_q = ref('');
export const codeTabId_q = ref('');
const qryVarSet = reactive({
  fldId_q,
  prjId_q,
  codeTabId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFieldTab4CodeConvCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and PrjId ='{0}'", PrjId_Session.value);
  try {
    if (fldId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFieldTab4CodeConvEN.con_FldId,
        fldId_q.value,
      );
    }
    if (codeTabId_q.value != '' && codeTabId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFieldTab4CodeConvEN.con_CodeTabId,
        codeTabId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFieldTab4CodeConvCondition)时出错!请联系管理员!{0}',
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
export const CombineFieldTab4CodeConvConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFieldTab4CodeConvCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objFieldTab4CodeConvCond.SetCondFldValue(
    clsFieldTab4CodeConvEN.con_PrjId,
    PrjId_Session.value,
    '=',
  );
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (fldId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFieldTab4CodeConvEN.con_FldId,
        fldId_q.value,
      );
      objFieldTab4CodeConvCond.SetCondFldValue(
        clsFieldTab4CodeConvEN.con_FldId,
        fldId_q.value,
        'like',
      );
    }
    if (codeTabId_q.value != '' && codeTabId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFieldTab4CodeConvEN.con_CodeTabId,
        codeTabId_q.value,
      );
      objFieldTab4CodeConvCond.SetCondFldValue(
        clsFieldTab4CodeConvEN.con_CodeTabId,
        codeTabId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFieldTab4CodeConvConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFieldTab4CodeConvCond.whereCond = strWhereCond;
  return objFieldTab4CodeConvCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFieldTab4CodeConvConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFieldTab4CodeConvCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objFieldTab4CodeConvCond.SetCondFldValue(
      clsFieldTab4CodeConvEN.con_PrjId,
      PrjId_Session.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (fldId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFieldTab4CodeConvEN.con_FldId,
          fldId_q.value,
        );
        objFieldTab4CodeConvCond.SetCondFldValue(
          clsFieldTab4CodeConvEN.con_FldId,
          fldId_q.value,
          'like',
        );
      }
      if (codeTabId_q.value != '' && codeTabId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFieldTab4CodeConvEN.con_CodeTabId,
          codeTabId_q.value,
        );
        objFieldTab4CodeConvCond.SetCondFldValue(
          clsFieldTab4CodeConvEN.con_CodeTabId,
          codeTabId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFieldTab4CodeConvConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFieldTab4CodeConvCond.whereCond = strWhereCond;
    return objFieldTab4CodeConvCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFieldTab4CodeConvENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFieldTab4CodeConv.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFieldTab4CodeConv_List.value != null)
    refFieldTab4CodeConv_List.value.selectAllChecked = false;
};

export function FieldTab4CodeConv_DeleteKeyIdCache(strPrjId: string, strFldId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In FieldTab4CodeConvVueShare.FieldTab4CodeConv.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(FieldTab4CodeConvVueShare.FieldTab4CodeConv.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFldId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strFldId}_${strPrjId}`;
    delete fieldTab4CodeConvCache[cacheKey];
    return;
  }
}
