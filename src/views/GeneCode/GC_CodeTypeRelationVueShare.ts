/**
 * 类名:GC_CodeTypeRelationVueShare(界面:GC_CodeTypeRelationCRUD,00050348)
 * 表名:GC_CodeTypeRelation(00050646)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 05:29:26
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsGC_CodeTypeRelationENEx } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  GC_CodeTypeRelationKey,
  clsGC_CodeTypeRelationEN,
} from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortGC_CodeTypeRelationBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortGC_CodeTypeRelationBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refGC_CodeTypeRelation_Detail = ref();
const refGC_CodeTypeRelation_DetailAi = ref();
const refGC_CodeTypeRelation_Edit = ref();
const refGC_CodeTypeRelation_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGC_CodeTypeRelation_Detail,
  refGC_CodeTypeRelation_DetailAi,
  refGC_CodeTypeRelation_Edit,
  refGC_CodeTypeRelation_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGC_CodeTypeRelation_Detail,
  refGC_CodeTypeRelation_DetailAi,
  refGC_CodeTypeRelation_Edit,
  refGC_CodeTypeRelation_List,
};

export const showErrorMessage = ref(false);
export const dataListGC_CodeTypeRelation = ref<Array<clsGC_CodeTypeRelationENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const gC_CodeTypeRelationCache: { [key: string]: clsGC_CodeTypeRelationENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const parentCodeTypeId_q = ref('');
export const childCodeTypeId_q = ref('');
export const ctRelationTypeId_q = ref('');
export const childCodeTypeName_q = ref('');
const qryVarSet = reactive({
  parentCodeTypeId_q,
  childCodeTypeId_q,
  ctRelationTypeId_q,
  childCodeTypeName_q,
});
export { qryVarSet };

//功能区变量定义
export const childCodeTypeId_f = ref('');
export const ctRelationTypeId_f = ref('');
const featureVarSet = reactive({
  childCodeTypeId_f,
  ctRelationTypeId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGC_CodeTypeRelationCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (parentCodeTypeId_q.value != '' && parentCodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsGC_CodeTypeRelationEN.con_ParentCodeTypeId,
        parentCodeTypeId_q.value,
      );
    }
    if (childCodeTypeId_q.value != '' && childCodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And GC_CodeTypeRelation.{0} = '{1}'",
        clsGC_CodeTypeRelationEN.con_ChildCodeTypeId,
        childCodeTypeId_q.value,
      );
    }
    if (ctRelationTypeId_q.value != '' && ctRelationTypeId_q.value != '0') {
      strWhereCond += Format(
        " And GC_CodeTypeRelation.{0} = '{1}'",
        clsGC_CodeTypeRelationEN.con_CtRelationTypeId,
        ctRelationTypeId_q.value,
      );
    }
    if (childCodeTypeName_q.value != '') {
      strWhereCond += Format(
        " And  CodeTypeId in (Select CodeTypeId from vCodeType_Sim where CodeTypeName like '%{0}%') ",
        childCodeTypeName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineGC_CodeTypeRelationCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGC_CodeTypeRelationConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGC_CodeTypeRelationCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (parentCodeTypeId_q.value != '' && parentCodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsGC_CodeTypeRelationEN.con_ParentCodeTypeId,
        parentCodeTypeId_q.value,
      );
      objGC_CodeTypeRelationCond.SetCondFldValue(
        clsGC_CodeTypeRelationEN.con_ParentCodeTypeId,
        parentCodeTypeId_q.value,
        '=',
      );
    }
    if (childCodeTypeId_q.value != '' && childCodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsGC_CodeTypeRelationEN.con_ChildCodeTypeId,
        childCodeTypeId_q.value,
      );
      objGC_CodeTypeRelationCond.SetCondFldValue(
        clsGC_CodeTypeRelationEN.con_ChildCodeTypeId,
        childCodeTypeId_q.value,
        '=',
      );
    }
    if (ctRelationTypeId_q.value != '' && ctRelationTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsGC_CodeTypeRelationEN.con_CtRelationTypeId,
        ctRelationTypeId_q.value,
      );
      objGC_CodeTypeRelationCond.SetCondFldValue(
        clsGC_CodeTypeRelationEN.con_CtRelationTypeId,
        ctRelationTypeId_q.value,
        '=',
      );
    }
    if (childCodeTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName,
        childCodeTypeName_q.value,
      );
      objGC_CodeTypeRelationCond.SetCondFldValue(
        clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName,
        childCodeTypeName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineGC_CodeTypeRelationConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGC_CodeTypeRelationCond.whereCond = strWhereCond;
  return objGC_CodeTypeRelationCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGC_CodeTypeRelationConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objGC_CodeTypeRelationCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (parentCodeTypeId_q.value != '' && parentCodeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsGC_CodeTypeRelationEN.con_ParentCodeTypeId,
          parentCodeTypeId_q.value,
        );
        objGC_CodeTypeRelationCond.SetCondFldValue(
          clsGC_CodeTypeRelationEN.con_ParentCodeTypeId,
          parentCodeTypeId_q.value,
          '=',
        );
      }
      if (childCodeTypeId_q.value != '' && childCodeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsGC_CodeTypeRelationEN.con_ChildCodeTypeId,
          childCodeTypeId_q.value,
        );
        objGC_CodeTypeRelationCond.SetCondFldValue(
          clsGC_CodeTypeRelationEN.con_ChildCodeTypeId,
          childCodeTypeId_q.value,
          '=',
        );
      }
      if (ctRelationTypeId_q.value != '' && ctRelationTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsGC_CodeTypeRelationEN.con_CtRelationTypeId,
          ctRelationTypeId_q.value,
        );
        objGC_CodeTypeRelationCond.SetCondFldValue(
          clsGC_CodeTypeRelationEN.con_CtRelationTypeId,
          ctRelationTypeId_q.value,
          '=',
        );
      }
      if (childCodeTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName,
          childCodeTypeName_q.value,
        );
        objGC_CodeTypeRelationCond.SetCondFldValue(
          clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName,
          childCodeTypeName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineGC_CodeTypeRelationConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objGC_CodeTypeRelationCond.whereCond = strWhereCond;
    return objGC_CodeTypeRelationCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsGC_CodeTypeRelationENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListGC_CodeTypeRelation.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refGC_CodeTypeRelation_List.value != null)
    refGC_CodeTypeRelation_List.value.selectAllChecked = false;
};

export function GC_CodeTypeRelation_DeleteKeyIdCache(key: GC_CodeTypeRelationKey): void {
  if (key.relationId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${key.relationId}`;
    delete gC_CodeTypeRelationCache[cacheKey];
    return;
  }
}
