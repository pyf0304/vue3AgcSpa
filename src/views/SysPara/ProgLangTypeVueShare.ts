/**
 * 类名:ProgLangTypeVueShare(界面:ProgLangTypeCRUD,00050157)
 * 表名:ProgLangType(00050303)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:50:48
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:系统参数(SysPara)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsProgLangTypeENEx } from '@/ts/L0Entity/SysPara/clsProgLangTypeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortProgLangTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortProgLangTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refProgLangType_Edit = ref();
const refwucvProgLangType_Lst = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refProgLangType_Edit,
  refwucvProgLangType_Lst,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refProgLangType_Edit,
  refwucvProgLangType_Lst,
};

export const showErrorMessage = ref(false);
export const dataListProgLangType = ref<Array<clsProgLangTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const progLangTypeCache: { [key: string]: clsProgLangTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const progLangTypeId_q = ref('');
export const progLangTypeName_q = ref('');
export const charEncodingId_q = ref('');
const qryVarSet = reactive({
  progLangTypeId_q,
  progLangTypeName_q,
  charEncodingId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineProgLangTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (progLangTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsProgLangTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
    }
    if (progLangTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsProgLangTypeEN.con_ProgLangTypeName,
        progLangTypeName_q.value,
      );
    }
    if (charEncodingId_q.value != '' && charEncodingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsProgLangTypeEN.con_CharEncodingId,
        charEncodingId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineProgLangTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineProgLangTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objProgLangTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (progLangTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsProgLangTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
      objProgLangTypeCond.SetCondFldValue(
        clsProgLangTypeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
        'like',
      );
    }
    if (progLangTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsProgLangTypeEN.con_ProgLangTypeName,
        progLangTypeName_q.value,
      );
      objProgLangTypeCond.SetCondFldValue(
        clsProgLangTypeEN.con_ProgLangTypeName,
        progLangTypeName_q.value,
        'like',
      );
    }
    if (charEncodingId_q.value != '' && charEncodingId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsProgLangTypeEN.con_CharEncodingId,
        charEncodingId_q.value,
      );
      objProgLangTypeCond.SetCondFldValue(
        clsProgLangTypeEN.con_CharEncodingId,
        charEncodingId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineProgLangTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objProgLangTypeCond.whereCond = strWhereCond;
  return objProgLangTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineProgLangTypeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objProgLangTypeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (progLangTypeId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsProgLangTypeEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
        );
        objProgLangTypeCond.SetCondFldValue(
          clsProgLangTypeEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
          'like',
        );
      }
      if (progLangTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsProgLangTypeEN.con_ProgLangTypeName,
          progLangTypeName_q.value,
        );
        objProgLangTypeCond.SetCondFldValue(
          clsProgLangTypeEN.con_ProgLangTypeName,
          progLangTypeName_q.value,
          'like',
        );
      }
      if (charEncodingId_q.value != '' && charEncodingId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsProgLangTypeEN.con_CharEncodingId,
          charEncodingId_q.value,
        );
        objProgLangTypeCond.SetCondFldValue(
          clsProgLangTypeEN.con_CharEncodingId,
          charEncodingId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineProgLangTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objProgLangTypeCond.whereCond = strWhereCond;
    return objProgLangTypeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsProgLangTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListProgLangType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refwucvProgLangType_Lst.value != null) refwucvProgLangType_Lst.value.selectAllChecked = false;
};

export function ProgLangType_DeleteKeyIdCache(strProgLangTypeId: string): void {
  if (IsNullOrEmpty(strProgLangTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strProgLangTypeId}`;
    delete progLangTypeCache[cacheKey];
    return;
  }
}
