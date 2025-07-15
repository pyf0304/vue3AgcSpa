/**
 * 类名:EditRegionFldsVueShare(界面:EditRegionFldsCRUD,00050248)
 * 表名:EditRegionFlds(00050116)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 03:40:36
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
import { clsEditRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';

const ascOrDesc4SortFun = ref('Asc');
const sortEditRegionFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortEditRegionFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refEditRegionFlds_Edit = ref();
const refEditRegionFlds_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refEditRegionFlds_Edit,
  refEditRegionFlds_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refEditRegionFlds_Edit,
  refEditRegionFlds_List,
};

export const showErrorMessage = ref(false);
export const dataListEditRegionFlds = ref<Array<clsEditRegionFldsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const editRegionFldsCache: { [key: string]: clsEditRegionFldsENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const regionId_q = ref('');
export const ctlTypeId_q = ref('');
const qryVarSet = reactive({
  regionId_q,
  ctlTypeId_q,
});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0');
export const regionId_f = ref('');
export const colSpan_f = ref(0);
export const width_f = ref(0);
export const isMultiRow_f = ref('0');
const featureVarSet = reactive({
  inUse_f,
  regionId_f,
  colSpan_f,
  width_f,
  isMultiRow_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineEditRegionFldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and RegionId ='{0}'", RegionId_Static.value);
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And EditRegionFlds.{0} = '{1}'",
        clsEditRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineEditRegionFldsCondition)时出错!请联系管理员!{0}',
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
export const CombineEditRegionFldsConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objEditRegionFldsCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objEditRegionFldsCond.SetCondFldValue(
    clsEditRegionFldsEN.con_RegionId,
    RegionId_Static.value,
    '=',
  );
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsEditRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objEditRegionFldsCond.SetCondFldValue(
        clsEditRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineEditRegionFldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objEditRegionFldsCond.whereCond = strWhereCond;
  return objEditRegionFldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineEditRegionFldsConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objEditRegionFldsCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objEditRegionFldsCond.SetCondFldValue(
      clsEditRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsEditRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
        );
        objEditRegionFldsCond.SetCondFldValue(
          clsEditRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineEditRegionFldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objEditRegionFldsCond.whereCond = strWhereCond;
    return objEditRegionFldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsEditRegionFldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListEditRegionFlds.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refEditRegionFlds_List.value != null) refEditRegionFlds_List.value.selectAllChecked = false;
};

export function EditRegionFlds_DeleteKeyIdCache(strRegionId: string, lngmId: number): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In EditRegionFldsVueShare.EditRegionFlds.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(EditRegionFldsVueShare.EditRegionFlds.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (lngmId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${lngmId}_${strRegionId}`;
    delete editRegionFldsCache[cacheKey];
    return;
  }
}
