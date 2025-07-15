/**
 * 类名:DetailRegionFldsVueShare(界面:DetailRegionFldsCRUD,00050293)
 * 表名:DetailRegionFlds(00050544)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/12 15:53:18
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
import { clsDetailRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsDetailRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsEN';

const ascOrDesc4SortFun = ref('Asc');
const sortDetailRegionFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDetailRegionFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refDetailRegionFlds_Detail = ref();
const refDetailRegionFlds_Edit = ref();
const refDetailRegionFlds_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDetailRegionFlds_Detail,
  refDetailRegionFlds_Edit,
  refDetailRegionFlds_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDetailRegionFlds_Detail,
  refDetailRegionFlds_Edit,
  refDetailRegionFlds_List,
};

export const showErrorMessage = ref(false);
export const dataListDetailRegionFlds = ref<Array<clsDetailRegionFldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const detailRegionFldsCache: { [key: string]: clsDetailRegionFldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const regionId_q = ref('');
export const ctlTypeId_q = ref('');
export const inUse_q = ref('0');
const qryVarSet = reactive({
  regionId_q,
  ctlTypeId_q,
  inUse_q,
});
export { qryVarSet };

//功能区变量定义
export const regionId_f = ref('');
export const colSpan_f = ref(0);
export const width_f = ref(0);
export const inUse_f = ref('0');
const featureVarSet = reactive({
  regionId_f,
  colSpan_f,
  width_f,
  inUse_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDetailRegionFldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and RegionId ='{0}'", RegionId_Static.value);
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And DetailRegionFlds.{0} = '{1}'",
        clsDetailRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDetailRegionFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDetailRegionFldsEN.con_InUse);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineDetailRegionFldsCondition)时出错!请联系管理员!{0}',
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
export const CombineDetailRegionFldsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDetailRegionFldsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDetailRegionFldsCond.SetCondFldValue(
    clsDetailRegionFldsEN.con_RegionId,
    RegionId_Static.value,
    '=',
  );
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDetailRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objDetailRegionFldsCond.SetCondFldValue(
        clsDetailRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
        '=',
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDetailRegionFldsEN.con_InUse);
      objDetailRegionFldsCond.SetCondFldValue(clsDetailRegionFldsEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsDetailRegionFldsEN.con_InUse);
      objDetailRegionFldsCond.SetCondFldValue(clsDetailRegionFldsEN.con_InUse, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineDetailRegionFldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDetailRegionFldsCond.whereCond = strWhereCond;
  return objDetailRegionFldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDetailRegionFldsConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objDetailRegionFldsCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objDetailRegionFldsCond.SetCondFldValue(
      clsDetailRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDetailRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
        );
        objDetailRegionFldsCond.SetCondFldValue(
          clsDetailRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
          '=',
        );
      }
      if (inUse_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsDetailRegionFldsEN.con_InUse);
        objDetailRegionFldsCond.SetCondFldValue(clsDetailRegionFldsEN.con_InUse, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsDetailRegionFldsEN.con_InUse);
        objDetailRegionFldsCond.SetCondFldValue(clsDetailRegionFldsEN.con_InUse, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineDetailRegionFldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objDetailRegionFldsCond.whereCond = strWhereCond;
    return objDetailRegionFldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsDetailRegionFldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListDetailRegionFlds.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refDetailRegionFlds_List.value != null)
    refDetailRegionFlds_List.value.selectAllChecked = false;
};

export function DetailRegionFlds_DeleteKeyIdCache(strRegionId: string, lngmId: number): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In DetailRegionFldsVueShare.DetailRegionFlds.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(DetailRegionFldsVueShare.DetailRegionFlds.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strRegionId}`;
    delete detailRegionFldsCache[cacheKey];
    return;
  }
}
