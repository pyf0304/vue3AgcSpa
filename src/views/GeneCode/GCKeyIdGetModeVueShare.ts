/**
 * 类名:GCKeyIdGetModeVueShare(界面:GCKeyIdGetModeCRUD,00050289)
 * 表名:GCKeyIdGetMode(00050562)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:50:59
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
import { clsGCKeyIdGetModeENEx } from '@/ts/L0Entity/GeneCode/clsGCKeyIdGetModeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGCKeyIdGetModeEN } from '@/ts/L0Entity/GeneCode/clsGCKeyIdGetModeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortGCKeyIdGetModeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortGCKeyIdGetModeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refGCKeyIdGetMode_Detail = ref();
const refGCKeyIdGetMode_Edit = ref();
const refGCKeyIdGetMode_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCKeyIdGetMode_Detail,
  refGCKeyIdGetMode_Edit,
  refGCKeyIdGetMode_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCKeyIdGetMode_Detail,
  refGCKeyIdGetMode_Edit,
  refGCKeyIdGetMode_List,
};

export const showErrorMessage = ref(false);
export const dataListGCKeyIdGetMode = ref<Array<clsGCKeyIdGetModeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const gCKeyIdGetModeCache: { [key: string]: clsGCKeyIdGetModeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const keyIdGetModeId_q = ref('');
export const keyIdGetModeName_q = ref('');
export const keyIdGetModeENName_q = ref('');
const qryVarSet = reactive({
  keyIdGetModeId_q,
  keyIdGetModeName_q,
  keyIdGetModeENName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCKeyIdGetModeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (keyIdGetModeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
        keyIdGetModeId_q.value,
      );
    }
    if (keyIdGetModeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
        keyIdGetModeName_q.value,
      );
    }
    if (keyIdGetModeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCKeyIdGetModeEN.con_KeyIdGetModeENName,
        keyIdGetModeENName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineGCKeyIdGetModeCondition)时出错!请联系管理员!{0}',
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
export const CombineGCKeyIdGetModeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGCKeyIdGetModeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (keyIdGetModeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
        keyIdGetModeId_q.value,
      );
      objGCKeyIdGetModeCond.SetCondFldValue(
        clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
        keyIdGetModeId_q.value,
        'like',
      );
    }
    if (keyIdGetModeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
        keyIdGetModeName_q.value,
      );
      objGCKeyIdGetModeCond.SetCondFldValue(
        clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
        keyIdGetModeName_q.value,
        'like',
      );
    }
    if (keyIdGetModeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCKeyIdGetModeEN.con_KeyIdGetModeENName,
        keyIdGetModeENName_q.value,
      );
      objGCKeyIdGetModeCond.SetCondFldValue(
        clsGCKeyIdGetModeEN.con_KeyIdGetModeENName,
        keyIdGetModeENName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineGCKeyIdGetModeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGCKeyIdGetModeCond.whereCond = strWhereCond;
  return objGCKeyIdGetModeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCKeyIdGetModeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objGCKeyIdGetModeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (keyIdGetModeId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
          keyIdGetModeId_q.value,
        );
        objGCKeyIdGetModeCond.SetCondFldValue(
          clsGCKeyIdGetModeEN.con_KeyIdGetModeId,
          keyIdGetModeId_q.value,
          'like',
        );
      }
      if (keyIdGetModeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
          keyIdGetModeName_q.value,
        );
        objGCKeyIdGetModeCond.SetCondFldValue(
          clsGCKeyIdGetModeEN.con_KeyIdGetModeName,
          keyIdGetModeName_q.value,
          'like',
        );
      }
      if (keyIdGetModeENName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCKeyIdGetModeEN.con_KeyIdGetModeENName,
          keyIdGetModeENName_q.value,
        );
        objGCKeyIdGetModeCond.SetCondFldValue(
          clsGCKeyIdGetModeEN.con_KeyIdGetModeENName,
          keyIdGetModeENName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineGCKeyIdGetModeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objGCKeyIdGetModeCond.whereCond = strWhereCond;
    return objGCKeyIdGetModeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsGCKeyIdGetModeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListGCKeyIdGetMode.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refGCKeyIdGetMode_List.value != null) refGCKeyIdGetMode_List.value.selectAllChecked = false;
};

export function GCKeyIdGetMode_DeleteKeyIdCache(strKeyIdGetModeId: string): void {
  if (IsNullOrEmpty(strKeyIdGetModeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strKeyIdGetModeId}`;
    delete gCKeyIdGetModeCache[cacheKey];
    return;
  }
}
