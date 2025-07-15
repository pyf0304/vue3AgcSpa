/**
 * 类名:GCContainerTypeVueShare(界面:GCContainerTypeCRUD,00050291)
 * 表名:GCContainerType(00050563)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/06 15:50:52
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
import { clsGCContainerTypeENEx } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeENEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortGCContainerTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortGCContainerTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refGCContainerType_Detail = ref();
const refGCContainerType_Edit = ref();
const refGCContainerType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCContainerType_Detail,
  refGCContainerType_Edit,
  refGCContainerType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refGCContainerType_Detail,
  refGCContainerType_Edit,
  refGCContainerType_List,
};

export const showErrorMessage = ref(false);
export const dataListGCContainerType = ref<Array<clsGCContainerTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const gCContainerTypeCache: { [key: string]: clsGCContainerTypeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const containerTypeId_q = ref('');
export const containerTypeName_q = ref('');
export const containerTypeENName_q = ref('');
const qryVarSet = reactive({
  containerTypeId_q,
  containerTypeName_q,
  containerTypeENName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCContainerTypeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (containerTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCContainerTypeEN.con_ContainerTypeId,
        containerTypeId_q.value,
      );
    }
    if (containerTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCContainerTypeEN.con_ContainerTypeName,
        containerTypeName_q.value,
      );
    }
    if (containerTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCContainerTypeEN.con_ContainerTypeENName,
        containerTypeENName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineGCContainerTypeCondition)时出错!请联系管理员!{0}',
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
export const CombineGCContainerTypeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objGCContainerTypeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (containerTypeId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCContainerTypeEN.con_ContainerTypeId,
        containerTypeId_q.value,
      );
      objGCContainerTypeCond.SetCondFldValue(
        clsGCContainerTypeEN.con_ContainerTypeId,
        containerTypeId_q.value,
        'like',
      );
    }
    if (containerTypeName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCContainerTypeEN.con_ContainerTypeName,
        containerTypeName_q.value,
      );
      objGCContainerTypeCond.SetCondFldValue(
        clsGCContainerTypeEN.con_ContainerTypeName,
        containerTypeName_q.value,
        'like',
      );
    }
    if (containerTypeENName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsGCContainerTypeEN.con_ContainerTypeENName,
        containerTypeENName_q.value,
      );
      objGCContainerTypeCond.SetCondFldValue(
        clsGCContainerTypeEN.con_ContainerTypeENName,
        containerTypeENName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineGCContainerTypeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objGCContainerTypeCond.whereCond = strWhereCond;
  return objGCContainerTypeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineGCContainerTypeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objGCContainerTypeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (containerTypeId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCContainerTypeEN.con_ContainerTypeId,
          containerTypeId_q.value,
        );
        objGCContainerTypeCond.SetCondFldValue(
          clsGCContainerTypeEN.con_ContainerTypeId,
          containerTypeId_q.value,
          'like',
        );
      }
      if (containerTypeName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCContainerTypeEN.con_ContainerTypeName,
          containerTypeName_q.value,
        );
        objGCContainerTypeCond.SetCondFldValue(
          clsGCContainerTypeEN.con_ContainerTypeName,
          containerTypeName_q.value,
          'like',
        );
      }
      if (containerTypeENName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsGCContainerTypeEN.con_ContainerTypeENName,
          containerTypeENName_q.value,
        );
        objGCContainerTypeCond.SetCondFldValue(
          clsGCContainerTypeEN.con_ContainerTypeENName,
          containerTypeENName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineGCContainerTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objGCContainerTypeCond.whereCond = strWhereCond;
    return objGCContainerTypeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsGCContainerTypeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListGCContainerType.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refGCContainerType_List.value != null) refGCContainerType_List.value.selectAllChecked = false;
};

export function GCContainerType_DeleteKeyIdCache(strContainerTypeId: string): void {
  if (IsNullOrEmpty(strContainerTypeId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strContainerTypeId}`;
    delete gCContainerTypeCache[cacheKey];
    return;
  }
}
