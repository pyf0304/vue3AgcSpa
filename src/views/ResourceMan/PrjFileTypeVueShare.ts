/**
 * 类名:PrjFileTypeVueShare(界面:PrjFileTypeCRUD,00050352)
 * 表名:PrjFileType(00050649)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 04:48:01
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:资源管理(ResourceMan)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPrjFileTypeENEx } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { PrjFileTypeKey, clsPrjFileTypeEN } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortPrjFileTypeBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortPrjFileTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refPrjFileType_Detail = ref();
const refPrjFileType_DetailAi = ref();
const refPrjFileType_Edit = ref();
const refPrjFileType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjFileType_Detail,
  refPrjFileType_DetailAi,
  refPrjFileType_Edit,
  refPrjFileType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refPrjFileType_Detail,
  refPrjFileType_DetailAi,
  refPrjFileType_Edit,
  refPrjFileType_List,
};

export const showErrorMessage = ref(false);
export const dataListPrjFileType = ref<Array<clsPrjFileTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const prjFileTypeCache: { [key: string]: clsPrjFileTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const prjFileTypeId_q = ref('');
export const prjFileTypeName_q = ref('');
const qryVarSet = reactive({
  prjFileTypeId_q,
  prjFileTypeName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjFileTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (prjFileTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjFileTypeEN.con_PrjFileTypeId,
        prjFileTypeId_q.value,
      );
    }
    if (prjFileTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjFileTypeEN.con_PrjFileTypeName,
        prjFileTypeName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombinePrjFileTypeCondition)时出错!请联系管理员!{0}',
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
export const CombinePrjFileTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objPrjFileTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (prjFileTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjFileTypeEN.con_PrjFileTypeId,
        prjFileTypeId_q.value,
      );
      objPrjFileTypeCond.SetCondFldValue(
        clsPrjFileTypeEN.con_PrjFileTypeId,
        prjFileTypeId_q.value,
        'like',
      );
    }
    if (prjFileTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsPrjFileTypeEN.con_PrjFileTypeName,
        prjFileTypeName_q.value,
      );
      objPrjFileTypeCond.SetCondFldValue(
        clsPrjFileTypeEN.con_PrjFileTypeName,
        prjFileTypeName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombinePrjFileTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objPrjFileTypeCond.whereCond = strWhereCond;
  return objPrjFileTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombinePrjFileTypeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objPrjFileTypeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (prjFileTypeId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjFileTypeEN.con_PrjFileTypeId,
          prjFileTypeId_q.value,
        );
        objPrjFileTypeCond.SetCondFldValue(
          clsPrjFileTypeEN.con_PrjFileTypeId,
          prjFileTypeId_q.value,
          'like',
        );
      }
      if (prjFileTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsPrjFileTypeEN.con_PrjFileTypeName,
          prjFileTypeName_q.value,
        );
        objPrjFileTypeCond.SetCondFldValue(
          clsPrjFileTypeEN.con_PrjFileTypeName,
          prjFileTypeName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombinePrjFileTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objPrjFileTypeCond.whereCond = strWhereCond;
    return objPrjFileTypeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsPrjFileTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListPrjFileType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refPrjFileType_List.value != null) refPrjFileType_List.value.selectAllChecked = false;
};

export function PrjFileType_DeleteKeyIdCache(key: PrjFileTypeKey): void;
export function PrjFileType_DeleteKeyIdCache(key: PrjFileTypeKey): void {
  if (IsNullOrEmpty(key.prjFileTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${key.prjFileTypeId}`;
    delete prjFileTypeCache[cacheKey];
    return;
  }
}
