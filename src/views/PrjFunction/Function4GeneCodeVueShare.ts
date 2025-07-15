/**
 * 类名:Function4GeneCodeVueShare(界面:Function4GeneCodeCRUD,00050342)
 * 表名:Function4GeneCode(00050311)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/16 00:30:33
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsFunction4GeneCodeENEx } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';

const ascOrDesc4SortFun = ref('Asc');
const sortFunction4GeneCodeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFunction4GeneCodeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const UserId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const FeatureTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const FuncPurposeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFunction4GeneCode_Detail = ref();
const refFunction4GeneCode_Edit = ref();
const refFunction4GeneCode_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunction4GeneCode_Detail,
  refFunction4GeneCode_Edit,
  refFunction4GeneCode_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFunction4GeneCode_Detail,
  refFunction4GeneCode_Edit,
  refFunction4GeneCode_List,
};

export const showErrorMessage = ref(false);
export const dataListFunction4GeneCode = ref<Array<clsFunction4GeneCodeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const function4GeneCodeCache: { [key: string]: clsFunction4GeneCodeENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const funcId4GC_q = ref('');
export const funcName_q = ref('');
export const sqlDsTypeId_q = ref('');
export const funcCodeTypeId_q = ref('');
export const inUse_q = ref('0');
export const progLangTypeId_q = ref('');
export const funcTypeId_q = ref('');
export const isTemplate_q = ref('0');
export const isFuncTemplate_q = ref('0');
export const funcId4Code_q = ref('');
const qryVarSet = reactive({
  funcId4GC_q,
  funcName_q,
  sqlDsTypeId_q,
  funcCodeTypeId_q,
  inUse_q,
  progLangTypeId_q,
  funcTypeId_q,
  isTemplate_q,
  isFuncTemplate_q,
  funcId4Code_q,
});
export { qryVarSet };

//功能区变量定义
export const inUse_f = ref('0');
const featureVarSet = reactive({
  inUse_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunction4GeneCodeCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (funcId4GC_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4GeneCodeEN.con_FuncId4GC,
        funcId4GC_q.value,
      );
    }
    if (funcName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4GeneCodeEN.con_FuncName,
        funcName_q.value,
      );
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(
        " And Function4GeneCode.{0} = '{1}'",
        clsFunction4GeneCodeEN.con_SqlDsTypeId,
        sqlDsTypeId_q.value,
      );
    }
    if (funcCodeTypeId_q.value != '' && funcCodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And Function4GeneCode.{0} = '{1}'",
        clsFunction4GeneCodeEN.con_FuncCodeTypeId,
        funcCodeTypeId_q.value,
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_InUse);
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And Function4GeneCode.{0} = '{1}'",
        clsFunction4GeneCodeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
    }
    if (funcTypeId_q.value != '' && funcTypeId_q.value != '0') {
      strWhereCond += Format(
        " And Function4GeneCode.{0} = '{1}'",
        clsFunction4GeneCodeEN.con_FuncTypeId,
        funcTypeId_q.value,
      );
    }
    if (isTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_IsTemplate);
    } else if (isTemplate_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_IsTemplate);
    }
    if (isFuncTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_IsFuncTemplate);
    } else if (isFuncTemplate_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_IsFuncTemplate);
    }
    if (funcId4Code_q.value != '' && funcId4Code_q.value != '0') {
      strWhereCond += Format(
        " And Function4GeneCode.{0} = '{1}'",
        clsFunction4GeneCodeEN.con_FuncId4Code,
        funcId4Code_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFunction4GeneCodeCondition)时出错!请联系管理员!{0}',
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
export const CombineFunction4GeneCodeConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFunction4GeneCodeCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (funcId4GC_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4GeneCodeEN.con_FuncId4GC,
        funcId4GC_q.value,
      );
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_FuncId4GC,
        funcId4GC_q.value,
        'like',
      );
    }
    if (funcName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFunction4GeneCodeEN.con_FuncName,
        funcName_q.value,
      );
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_FuncName,
        funcName_q.value,
        'like',
      );
    }
    if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4GeneCodeEN.con_SqlDsTypeId,
        sqlDsTypeId_q.value,
      );
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_SqlDsTypeId,
        sqlDsTypeId_q.value,
        '=',
      );
    }
    if (funcCodeTypeId_q.value != '' && funcCodeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4GeneCodeEN.con_FuncCodeTypeId,
        funcCodeTypeId_q.value,
      );
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_FuncCodeTypeId,
        funcCodeTypeId_q.value,
        '=',
      );
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_InUse);
      objFunction4GeneCodeCond.SetCondFldValue(clsFunction4GeneCodeEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_InUse);
      objFunction4GeneCodeCond.SetCondFldValue(clsFunction4GeneCodeEN.con_InUse, false, '=');
    }
    if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4GeneCodeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
      );
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_ProgLangTypeId,
        progLangTypeId_q.value,
        '=',
      );
    }
    if (funcTypeId_q.value != '' && funcTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4GeneCodeEN.con_FuncTypeId,
        funcTypeId_q.value,
      );
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_FuncTypeId,
        funcTypeId_q.value,
        '=',
      );
    }
    if (isTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_IsTemplate);
      objFunction4GeneCodeCond.SetCondFldValue(clsFunction4GeneCodeEN.con_IsTemplate, true, '=');
    } else if (isTemplate_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_IsTemplate);
      objFunction4GeneCodeCond.SetCondFldValue(clsFunction4GeneCodeEN.con_IsTemplate, false, '=');
    }
    if (isFuncTemplate_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFunction4GeneCodeEN.con_IsFuncTemplate);
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_IsFuncTemplate,
        true,
        '=',
      );
    } else if (isFuncTemplate_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFunction4GeneCodeEN.con_IsFuncTemplate);
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_IsFuncTemplate,
        false,
        '=',
      );
    }
    if (funcId4Code_q.value != '' && funcId4Code_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFunction4GeneCodeEN.con_FuncId4Code,
        funcId4Code_q.value,
      );
      objFunction4GeneCodeCond.SetCondFldValue(
        clsFunction4GeneCodeEN.con_FuncId4Code,
        funcId4Code_q.value,
        '=',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFunction4GeneCodeConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFunction4GeneCodeCond.whereCond = strWhereCond;
  return objFunction4GeneCodeCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFunction4GeneCodeConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFunction4GeneCodeCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (funcId4GC_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunction4GeneCodeEN.con_FuncId4GC,
          funcId4GC_q.value,
        );
        objFunction4GeneCodeCond.SetCondFldValue(
          clsFunction4GeneCodeEN.con_FuncId4GC,
          funcId4GC_q.value,
          'like',
        );
      }
      if (funcName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFunction4GeneCodeEN.con_FuncName,
          funcName_q.value,
        );
        objFunction4GeneCodeCond.SetCondFldValue(
          clsFunction4GeneCodeEN.con_FuncName,
          funcName_q.value,
          'like',
        );
      }
      if (sqlDsTypeId_q.value != '' && sqlDsTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4GeneCodeEN.con_SqlDsTypeId,
          sqlDsTypeId_q.value,
        );
        objFunction4GeneCodeCond.SetCondFldValue(
          clsFunction4GeneCodeEN.con_SqlDsTypeId,
          sqlDsTypeId_q.value,
          '=',
        );
      }
      if (funcCodeTypeId_q.value != '' && funcCodeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4GeneCodeEN.con_FuncCodeTypeId,
          funcCodeTypeId_q.value,
        );
        objFunction4GeneCodeCond.SetCondFldValue(
          clsFunction4GeneCodeEN.con_FuncCodeTypeId,
          funcCodeTypeId_q.value,
          '=',
        );
      }
      if (progLangTypeId_q.value != '' && progLangTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4GeneCodeEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
        );
        objFunction4GeneCodeCond.SetCondFldValue(
          clsFunction4GeneCodeEN.con_ProgLangTypeId,
          progLangTypeId_q.value,
          '=',
        );
      }
      if (funcTypeId_q.value != '' && funcTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4GeneCodeEN.con_FuncTypeId,
          funcTypeId_q.value,
        );
        objFunction4GeneCodeCond.SetCondFldValue(
          clsFunction4GeneCodeEN.con_FuncTypeId,
          funcTypeId_q.value,
          '=',
        );
      }
      if (funcId4Code_q.value != '' && funcId4Code_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFunction4GeneCodeEN.con_FuncId4Code,
          funcId4Code_q.value,
        );
        objFunction4GeneCodeCond.SetCondFldValue(
          clsFunction4GeneCodeEN.con_FuncId4Code,
          funcId4Code_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFunction4GeneCodeConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFunction4GeneCodeCond.whereCond = strWhereCond;
    return objFunction4GeneCodeCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFunction4GeneCodeENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFunction4GeneCode.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFunction4GeneCode_List.value != null)
    refFunction4GeneCode_List.value.selectAllChecked = false;
};

export function Function4GeneCode_DeleteKeyIdCache(strFuncId4GC: string): void {
  if (IsNullOrEmpty(strFuncId4GC) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strFuncId4GC}`;
    delete function4GeneCodeCache[cacheKey];
    return;
  }
}
