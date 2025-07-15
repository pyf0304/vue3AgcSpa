/**
 * 类名:ViewFeatureFldsVueShare(界面:ViewFeatureFldsCRUD,00050314)
 * 表名:ViewFeatureFlds(00050453)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:51:13
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsViewFeatureFldsENEx } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';

const ascOrDesc4SortFun = ref('Asc');
const sortViewFeatureFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortViewFeatureFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const ViewFeatureId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refViewFeatureFlds_Edit = ref();
const refViewFeatureFlds_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewFeatureFlds_Edit,
  refViewFeatureFlds_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refViewFeatureFlds_Edit,
  refViewFeatureFlds_List,
};

export const showErrorMessage = ref(false);
export const dataListViewFeatureFlds = ref<Array<clsViewFeatureFldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const viewFeatureFldsCache: { [key: string]: clsViewFeatureFldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const funcName_q = ref('');
export const ctlTypeId_q = ref('');
const qryVarSet = reactive({
  funcName_q,
  ctlTypeId_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewFeatureFldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (funcName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewFeatureFldsEN.con_FuncName,
        funcName_q.value,
      );
    }
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsViewFeatureFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineViewFeatureFldsCondition)时出错!请联系管理员!{0}',
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
export const CombineViewFeatureFldsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objViewFeatureFldsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (funcName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsViewFeatureFldsEN.con_FuncName,
        funcName_q.value,
      );
      objViewFeatureFldsCond.SetCondFldValue(
        clsViewFeatureFldsEN.con_FuncName,
        funcName_q.value,
        'like',
      );
    }
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsViewFeatureFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objViewFeatureFldsCond.SetCondFldValue(
        clsViewFeatureFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineViewFeatureFldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objViewFeatureFldsCond.whereCond = strWhereCond;
  return objViewFeatureFldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineViewFeatureFldsConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objViewFeatureFldsCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (funcName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsViewFeatureFldsEN.con_FuncName,
          funcName_q.value,
        );
        objViewFeatureFldsCond.SetCondFldValue(
          clsViewFeatureFldsEN.con_FuncName,
          funcName_q.value,
          'like',
        );
      }
      if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsViewFeatureFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
        );
        objViewFeatureFldsCond.SetCondFldValue(
          clsViewFeatureFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineViewFeatureFldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objViewFeatureFldsCond.whereCond = strWhereCond;
    return objViewFeatureFldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsViewFeatureFldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListViewFeatureFlds.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refViewFeatureFlds_List.value != null) refViewFeatureFlds_List.value.selectAllChecked = false;
};

export function ViewFeatureFlds_DeleteKeyIdCache(strViewFeatureId: string, lngmId: number): void {
  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In ViewFeatureFldsVueShare.ViewFeatureFlds.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(ViewFeatureFldsVueShare.ViewFeatureFlds.ReFreshCache)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strViewFeatureId}`;
    delete viewFeatureFldsCache[cacheKey];
    return;
  }
}
