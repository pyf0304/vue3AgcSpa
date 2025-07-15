/**
 * 类名:PrjConstraintVueShare(界面:PrjConstraintCRUD,00050172)
 * 表名:PrjConstraint(00050331)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 04:27:16
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
import { clsPrjConstraintENEx } from '@/ts/L0Entity/Table_Field/clsPrjConstraintENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';

const ascOrDesc4SortFun = ref('Asc');
const sortPrjConstraintBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjConstraintBy,
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
const refPrjConstraint_Edit = ref();
const refPrjConstraint_Lst = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjConstraint_Edit,
  refPrjConstraint_Lst,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjConstraint_Edit,
  refPrjConstraint_Lst,
};

export const showErrorMessage = ref(false);
export const dataListPrjConstraint = ref<Array<clsPrjConstraintENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const prjConstraintCache: { [key: string]: clsPrjConstraintENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const constraintName_q = ref('');
export const constraintTypeId_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  constraintName_q,
  constraintTypeId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjConstraintCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (constraintName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjConstraintEN.con_ConstraintName,
        constraintName_q.value,
      );
    }
    if (constraintTypeId_q.value != '' && constraintTypeId_q.value != '0') {
      strWhereCond += Format(
        " And PrjConstraint.{0} = '{1}'",
        clsPrjConstraintEN.con_ConstraintTypeId,
        constraintTypeId_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsPrjConstraintEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsPrjConstraintEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjConstraintCondition)时出错!请联系管理员!{0}',
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
export const CombinePrjConstraintConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objPrjConstraintCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (constraintName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjConstraintEN.con_ConstraintName,
        constraintName_q.value,
      );
      objPrjConstraintCond.SetCondFldValue(
        clsPrjConstraintEN.con_ConstraintName,
        constraintName_q.value,
        'like',
      );
    }
    if (constraintTypeId_q.value != '' && constraintTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsPrjConstraintEN.con_ConstraintTypeId,
        constraintTypeId_q.value,
      );
      objPrjConstraintCond.SetCondFldValue(
        clsPrjConstraintEN.con_ConstraintTypeId,
        constraintTypeId_q.value,
        '=',
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsPrjConstraintEN.con_InUse);
      objPrjConstraintCond.SetCondFldValue(clsPrjConstraintEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsPrjConstraintEN.con_InUse);
      objPrjConstraintCond.SetCondFldValue(clsPrjConstraintEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombinePrjConstraintConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjConstraintCond.whereCond = strWhereCond;
  return objPrjConstraintCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjConstraintConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objPrjConstraintCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (constraintName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjConstraintEN.con_ConstraintName,
          constraintName_q.value,
        );
        objPrjConstraintCond.SetCondFldValue(
          clsPrjConstraintEN.con_ConstraintName,
          constraintName_q.value,
          'like',
        );
      }
      if (constraintTypeId_q.value != '' && constraintTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsPrjConstraintEN.con_ConstraintTypeId,
          constraintTypeId_q.value,
        );
        objPrjConstraintCond.SetCondFldValue(
          clsPrjConstraintEN.con_ConstraintTypeId,
          constraintTypeId_q.value,
          '=',
        );
      }
      if (inUse_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsPrjConstraintEN.con_InUse);
        objPrjConstraintCond.SetCondFldValue(clsPrjConstraintEN.con_InUse, true, '=');
      } else if (inUse_q.value == 'false') {
        strWhereCond += Format(" And {0} = '0'", clsPrjConstraintEN.con_InUse);
        objPrjConstraintCond.SetCondFldValue(clsPrjConstraintEN.con_InUse, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombinePrjConstraintConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objPrjConstraintCond.whereCond = strWhereCond;
    return objPrjConstraintCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsPrjConstraintENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListPrjConstraint.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refPrjConstraint_Lst.value != null) refPrjConstraint_Lst.value.selectAllChecked = false;
};

export function PrjConstraint_DeleteKeyIdCache(strPrjConstraintId: string): void {
  if (IsNullOrEmpty(strPrjConstraintId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strPrjConstraintId}`;
    delete prjConstraintCache[cacheKey];
    return;
  }
}
