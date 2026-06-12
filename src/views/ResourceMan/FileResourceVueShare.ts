/**
 * 类名:FileResourceVueShare(界面:FileResourceCRUD,00050351)
 * 表名:FileResource(00050539)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 02:14:47
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
import { clsFileResourceENEx } from '@/ts/L0Entity/ResourceMan/clsFileResourceENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { FileResourceKey, clsFileResourceEN } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortFileResourceBy = ref('');

const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortFileResourceBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CmPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const PrjId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const ProgLangTypeId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refFileResource_Detail = ref();
const refFileResource_DetailAi = ref();
const refFileResource_Edit = ref();
const refFileResource_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFileResource_Detail,
  refFileResource_DetailAi,
  refFileResource_Edit,
  refFileResource_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refFileResource_Detail,
  refFileResource_DetailAi,
  refFileResource_Edit,
  refFileResource_List,
};

export const showErrorMessage = ref(false);
export const dataListFileResource = ref<Array<clsFileResourceENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const fileResourceCache: { [key: string]: clsFileResourceENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const codeTypeId_q = ref('');
export const prjFileTypeId_q = ref('');
export const fileDirName_q = ref('');
export const fileName_q = ref('');
export const extension_q = ref('');
export const tabId_q = ref('');
export const isBelongsCurrCMPrj_q = ref('0');
export const isGeneCode_q = ref('0');
export const isCanDel_q = ref('0');
export const inUse_q = ref('0');
export const isExistFile_q = ref('0');
export const prjId_q = ref('');
export const cmPrjId_q = ref('');
const qryVarSet = reactive({
  codeTypeId_q,
  prjFileTypeId_q,
  fileDirName_q,
  fileName_q,
  extension_q,
  tabId_q,
  isBelongsCurrCMPrj_q,
  isGeneCode_q,
  isCanDel_q,
  inUse_q,
  isExistFile_q,
  prjId_q,
  cmPrjId_q,
});
export { qryVarSet };

//功能区变量定义
export const prjFileTypeId_f = ref('');
const featureVarSet = reactive({
  prjFileTypeId_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFileResourceCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  strWhereCond += ` and ${clsFileResourceEN._CurrTabName}.PrjId ='${PrjId_Session.value}'`;
  strWhereCond += ` and ${clsFileResourceEN._CurrTabName}.CmPrjId ='${CmPrjId_Local.value}'`;
  try {
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And FileResource.{0} = '{1}'",
        clsFileResourceEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
    }
    if (prjFileTypeId_q.value != '' && prjFileTypeId_q.value != '0') {
      strWhereCond += Format(
        " And FileResource.{0} = '{1}'",
        clsFileResourceEN.con_PrjFileTypeId,
        prjFileTypeId_q.value,
      );
    }
    if (fileDirName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFileResourceEN.con_FileDirName,
        fileDirName_q.value,
      );
    }
    if (fileName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFileResourceEN.con_FileName,
        fileName_q.value,
      );
    }
    if (extension_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFileResourceEN.con_Extension,
        extension_q.value,
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(
        " And FileResource.{0} = '{1}'",
        clsFileResourceEN.con_TabId,
        tabId_q.value,
      );
    }
    if (isBelongsCurrCMPrj_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsBelongsCurrCMPrj);
    } else if (isBelongsCurrCMPrj_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsBelongsCurrCMPrj);
    }
    if (isGeneCode_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsGeneCode);
    } else if (isGeneCode_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsGeneCode);
    }
    if (isCanDel_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsCanDel);
    } else if (isCanDel_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsCanDel);
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_InUse);
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_InUse);
    }
    if (isExistFile_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsExistFile);
    } else if (isExistFile_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsExistFile);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineFileResourceCondition)时出错!请联系管理员!{0}',
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
export const CombineFileResourceConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objFileResourceCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_PrjId, PrjId_Session.value, '=');
  objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_CmPrjId, CmPrjId_Local.value, '=');
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFileResourceEN.con_CodeTypeId,
        codeTypeId_q.value,
      );
      objFileResourceCond.SetCondFldValue(
        clsFileResourceEN.con_CodeTypeId,
        codeTypeId_q.value,
        '=',
      );
    }
    if (prjFileTypeId_q.value != '' && prjFileTypeId_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsFileResourceEN.con_PrjFileTypeId,
        prjFileTypeId_q.value,
      );
      objFileResourceCond.SetCondFldValue(
        clsFileResourceEN.con_PrjFileTypeId,
        prjFileTypeId_q.value,
        '=',
      );
    }
    if (fileDirName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFileResourceEN.con_FileDirName,
        fileDirName_q.value,
      );
      objFileResourceCond.SetCondFldValue(
        clsFileResourceEN.con_FileDirName,
        fileDirName_q.value,
        'like',
      );
    }
    if (fileName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFileResourceEN.con_FileName,
        fileName_q.value,
      );
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_FileName, fileName_q.value, 'like');
    }
    if (extension_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsFileResourceEN.con_Extension,
        extension_q.value,
      );
      objFileResourceCond.SetCondFldValue(
        clsFileResourceEN.con_Extension,
        extension_q.value,
        'like',
      );
    }
    if (tabId_q.value != '' && tabId_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsFileResourceEN.con_TabId, tabId_q.value);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_TabId, tabId_q.value, '=');
    }
    if (isBelongsCurrCMPrj_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsBelongsCurrCMPrj);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsBelongsCurrCMPrj, true, '=');
    } else if (isBelongsCurrCMPrj_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsBelongsCurrCMPrj);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsBelongsCurrCMPrj, false, '=');
    }
    if (isGeneCode_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsGeneCode);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsGeneCode, true, '=');
    } else if (isGeneCode_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsGeneCode);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsGeneCode, false, '=');
    }
    if (isCanDel_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsCanDel);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsCanDel, true, '=');
    } else if (isCanDel_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsCanDel);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsCanDel, false, '=');
    }
    if (inUse_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_InUse);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_InUse, true, '=');
    } else if (inUse_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_InUse);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_InUse, false, '=');
    }
    if (isExistFile_q.value == 'true') {
      strWhereCond += Format(" And {0} = '1'", clsFileResourceEN.con_IsExistFile);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsExistFile, true, '=');
    } else if (isExistFile_q.value == 'false') {
      strWhereCond += Format(" And {0} = '0'", clsFileResourceEN.con_IsExistFile);
      objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_IsExistFile, false, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineFileResourceConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objFileResourceCond.whereCond = strWhereCond;
  return objFileResourceCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Share_method_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineFileResourceConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objFileResourceCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_PrjId, PrjId_Session.value, '=');
    objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_CmPrjId, CmPrjId_Local.value, '=');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (codeTypeId_q.value != '' && codeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFileResourceEN.con_CodeTypeId,
          codeTypeId_q.value,
        );
        objFileResourceCond.SetCondFldValue(
          clsFileResourceEN.con_CodeTypeId,
          codeTypeId_q.value,
          '=',
        );
      }
      if (prjFileTypeId_q.value != '' && prjFileTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFileResourceEN.con_PrjFileTypeId,
          prjFileTypeId_q.value,
        );
        objFileResourceCond.SetCondFldValue(
          clsFileResourceEN.con_PrjFileTypeId,
          prjFileTypeId_q.value,
          '=',
        );
      }
      if (fileDirName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFileResourceEN.con_FileDirName,
          fileDirName_q.value,
        );
        objFileResourceCond.SetCondFldValue(
          clsFileResourceEN.con_FileDirName,
          fileDirName_q.value,
          'like',
        );
      }
      if (fileName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFileResourceEN.con_FileName,
          fileName_q.value,
        );
        objFileResourceCond.SetCondFldValue(
          clsFileResourceEN.con_FileName,
          fileName_q.value,
          'like',
        );
      }
      if (extension_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFileResourceEN.con_Extension,
          extension_q.value,
        );
        objFileResourceCond.SetCondFldValue(
          clsFileResourceEN.con_Extension,
          extension_q.value,
          'like',
        );
      }
      if (tabId_q.value != '' && tabId_q.value != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsFileResourceEN.con_TabId, tabId_q.value);
        objFileResourceCond.SetCondFldValue(clsFileResourceEN.con_TabId, tabId_q.value, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineFileResourceConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFileResourceCond.whereCond = strWhereCond;
    return objFileResourceCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsFileResourceENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListFileResource.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refFileResource_List.value != null) refFileResource_List.value.selectAllChecked = false;
};

export function FileResource_DeleteKeyIdCache(key: FileResourceKey): void;
export function FileResource_DeleteKeyIdCache(key: FileResourceKey): void {
  if (key.fileResourceId != 0) {
    // 使用 delete 删除特定的键
    const cacheKey = `${key.fileResourceId}`;
    delete fileResourceCache[cacheKey];
    return;
  }
}
