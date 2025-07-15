/**
 * 类名:QryRegionFldsVueShare(界面:QryRegionFldsCRUD,00050244)
 * 表名:QryRegionFlds(00050115)
 * 版本:2024.09.16.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/16 09:52:55
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';
import { clsQryRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortQryRegionFldsBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortQryRegionFldsBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const RegionId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const TabId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit_PubCombo = ref();
const refDivDetail = ref();
const refPubCombo_Edit = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit_PubCombo,
  refDivDetail,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit_PubCombo,
  refDivDetail,
  refPubCombo_Edit,
};

export const showErrorMessage = ref(false);
export const dataListQryRegionFlds = ref<Array<clsQryRegionFldsENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const labelCaption_q = ref('');
export const ctlTypeId_q = ref('');
export const regionId_q = ref('');
const qryVarSet = reactive({
  labelCaption_q,
  ctlTypeId_q,
  regionId_q,
});
export { qryVarSet };

//功能区变量定义
export const colSpan_f = ref(0);
export const inUse_f = ref(true);
export const width_f = ref(0);
export const regionId_f = ref('');
const featureVarSet = reactive({
  colSpan_f,
  inUse_f,
  width_f,
  regionId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQryRegionFldsCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += Format(" and RegionId ='{0}'", RegionId_Static.value);
  try {
    if (labelCaption_q.value != '') {
      strWhereCond += Format(
        " And {0} like '% {1}%'",
        clsQryRegionFldsEN.con_LabelCaption,
        labelCaption_q.value,
      );
    }
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQryRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineQryRegionFldsCondition)时出错!请联系管理员!{0}',
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
export const CombineQryRegionFldsConditionObj = async (): Promise<clsQryRegionFldsEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objQryRegionFldsCond = new clsQryRegionFldsEN();
  objQryRegionFldsCond.SetCondFldValue(clsQryRegionFldsEN.con_RegionId, RegionId_Static.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (labelCaption_q.value != '') {
      strWhereCond += Format(
        " And {0} like '% {1}%'",
        clsQryRegionFldsEN.con_LabelCaption,
        labelCaption_q.value,
      );
      objQryRegionFldsCond.SetCondFldValue(
        clsQryRegionFldsEN.con_LabelCaption,
        labelCaption_q.value,
        'like',
      );
    }
    if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsQryRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
      );
      objQryRegionFldsCond.SetCondFldValue(
        clsQryRegionFldsEN.con_CtlTypeId,
        ctlTypeId_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineQryRegionFldsConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objQryRegionFldsCond.whereCond = strWhereCond;
  return objQryRegionFldsCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineQryRegionFldsConditionObj4ExportExcel =
  async (): Promise<clsQryRegionFldsEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objQryRegionFldsCond = new clsQryRegionFldsENEx();
    objQryRegionFldsCond.SetCondFldValue(
      clsQryRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (labelCaption_q.value != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsQryRegionFldsEN.con_LabelCaption,
          labelCaption_q.value,
        );
        objQryRegionFldsCond.SetCondFldValue(
          clsQryRegionFldsEN.con_LabelCaption,
          labelCaption_q.value,
          'like',
        );
      }
      if (ctlTypeId_q.value != '' && ctlTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsQryRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
        );
        objQryRegionFldsCond.SetCondFldValue(
          clsQryRegionFldsEN.con_CtlTypeId,
          ctlTypeId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineQryRegionFldsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objQryRegionFldsCond.whereCond = strWhereCond;
    return objQryRegionFldsCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsQryRegionFldsENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListQryRegionFlds.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};
