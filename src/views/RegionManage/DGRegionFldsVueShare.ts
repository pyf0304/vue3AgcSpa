/**
 * 类名:DGRegionFldsVueShare(界面:DGRegionFldsCRUD,00050249)
 * 表名:DGRegionFlds(00050113)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 03:08:09
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
import { clsDGRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsDGRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDGRegionFldsEN';

const ascOrDesc4SortFun = ref('Asc');
const sortDGRegionFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortDGRegionFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refDGRegionFlds_Edit = ref();
const refDGRegionFlds_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDGRegionFlds_Edit,
  refDGRegionFlds_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refDGRegionFlds_Edit,
  refDGRegionFlds_List,
};

export const showErrorMessage = ref(false);
export const dataListDGRegionFlds = ref<Array<clsDGRegionFldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const dGRegionFldsCache: { [key: string]: clsDGRegionFldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const ctlTypeId_q = ref('');
export const isDefaultSort_q = ref('0');
export const regionId_q = ref('');
const qryVarSet = reactive({
  ctlTypeId_q,
  isDefaultSort_q,
  regionId_q,
});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0');
export const regionId_f = ref('');
const featureVarSet = reactive({
  inUse_f,
  regionId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDGRegionFldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and RegionId ='{0}'", RegionId_Static.value);
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And DGRegionFlds.{0} = '{1}'",
        clsDGRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
    if (isDefaultSort_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsDefaultSort);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsDefaultSort);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineDGRegionFldsCondition)时出错!请联系管理员!{0}',
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
export const CombineDGRegionFldsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objDGRegionFldsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objDGRegionFldsCond.SetCondFldValue(clsDGRegionFldsEN.con_RegionId, RegionId_Static.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsDGRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objDGRegionFldsCond.SetCondFldValue(clsDGRegionFldsEN.con_CtlTypeId, ctlTypeId_q.value, '=');
    }
    if (isDefaultSort_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsDefaultSort);
      objDGRegionFldsCond.SetCondFldValue(clsDGRegionFldsEN.con_IsDefaultSort, true, '=');
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsDefaultSort);
      objDGRegionFldsCond.SetCondFldValue(clsDGRegionFldsEN.con_IsDefaultSort, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineDGRegionFldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objDGRegionFldsCond.whereCond = strWhereCond;
  return objDGRegionFldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineDGRegionFldsConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objDGRegionFldsCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objDGRegionFldsCond.SetCondFldValue(clsDGRegionFldsEN.con_RegionId, RegionId_Static.value, '=');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsDGRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
        );
        objDGRegionFldsCond.SetCondFldValue(
          clsDGRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
          '=',
        );
      }
      if (isDefaultSort_q.value == 'true') {
        strWhereCond += Format(" And {0} = '1'", clsDGRegionFldsEN.con_IsDefaultSort);
        objDGRegionFldsCond.SetCondFldValue(clsDGRegionFldsEN.con_IsDefaultSort, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsDGRegionFldsEN.con_IsDefaultSort);
        objDGRegionFldsCond.SetCondFldValue(clsDGRegionFldsEN.con_IsDefaultSort, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineDGRegionFldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objDGRegionFldsCond.whereCond = strWhereCond;
    return objDGRegionFldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsDGRegionFldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListDGRegionFlds.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refDGRegionFlds_List.value != null) refDGRegionFlds_List.value.selectAllChecked = false;
};

export function DGRegionFlds_DeleteKeyIdCache(strRegionId: string, lngmId: number): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In DGRegionFldsVueShare.DGRegionFlds.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(DGRegionFldsVueShare.DGRegionFlds.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strRegionId}`;
    delete dGRegionFldsCache[cacheKey];
    return;
  }
}
