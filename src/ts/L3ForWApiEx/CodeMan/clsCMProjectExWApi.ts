import { useApplicationTypeStore } from '@/store/modules/ApplicationType';

import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { clsCMProjectENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectENEx';
import {
  clsApplicationTypeEN,
  enumApplicationType,
} from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { clsUseStateEN, enumUseState } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { clsVueCtrlDesignSysEN } from '@/ts/L0Entity/SysPara/clsVueCtrlDesignSysEN';

import {
  CMProject_AddNewRecordWithMaxIdAsync,
  CMProject_CheckPropertyNew,
  CMProject_GetObjByCmPrjIdCache,
  CMProject_GetObjLstCache,
  CMProject_GetUniCondStr,
  CMProject_IsExistRecordAsync,
  CMProject_ReFreshCache,
  CMProject_SortFunByKey,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { FunctionTemplate_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { UseState_func } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import { VueCtrlDesignSys_func } from '@/ts/L3ForWApi/SysPara/clsVueCtrlDesignSysWApi';
import { CMProjectAppRelaEx_GetAppTypeIdLstByCmPrjId_Cache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectAppRelaExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLstInDivObj, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export const cMProjectEx_Controller = 'CMProjectExApi';
export const cMProjectEx_ConstructorName = 'cMProjectEx';

export async function CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId: string): Promise<string> {
  const objCMProjectEN = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
  if (objCMProjectEN == null) return '';
  return objCMProjectEN.prjId;
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrCmPrjId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function CMProjectEx_GetObjLstByPrjIdCache(strPrjId: string) {
  try {
    const arrCMProjectObjLstCache: Array<clsCMProjectEN> = await CMProject_GetObjLstCache();
    const arrCMProject_Sel: Array<clsCMProjectEN> = arrCMProjectObjLstCache.filter(
      (x) => x.prjId == strPrjId,
    );

    return arrCMProject_Sel;
  } catch (e: any) {
    const strMsg = `错误:[${e}]. \n根据工程Id:[${strPrjId}]缓存对象列表中获取子集对象不成功!`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
}
/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strPrjId:工程ID
 */
export async function CMProjectEx_BindDdl_CmPrjIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In BindDdl_CmPrjIdInDivCache)');
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！(In BindDdl_CmPrjIdInDivCache)`;
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  let arrObjLst_Sel: Array<clsCMProjectEN> = await CMProject_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.prjId == strPrjId);
  arrObjLst_Sel = arrObjLst_Sel.sort(CMProjectEx_SortFunByCmPrjName);
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsCMProjectEN.con_CmPrjId,
    clsCMProjectEN.con_CmPrjName,
    'CM项目',
  );
}
/**
 * 排序函数。根据【CM工程名】的值进行比较
 * 作者:pyf
 * 日期:20210703114923
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMProjectEx_SortFunByCmPrjName(a: clsCMProjectEN, b: clsCMProjectEN): number {
  return a.cmPrjName.localeCompare(b.cmPrjName);
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCMProjectENS:源对象
 * @returns 目标对象=>clsCMProjectEN:objCMProjectENT
 **/
export function CMProjectEx_CopyToEx(objCMProjectENS: clsCMProjectEN): clsCMProjectENEx {
  const strThisFuncName = CMProjectEx_CopyToEx.name;
  const objCMProjectENT = new clsCMProjectENEx();
  try {
    ObjectAssign(objCMProjectENT, objCMProjectENS);
    return objCMProjectENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCMProjectENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMProjectEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMProjectENEx.con_PrjName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsCMProjectENEx.con_ApplicationTypeSimName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsCMProjectENEx.con_UseStateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.useStateName.localeCompare(b.useStateName);
        };
      case clsCMProjectENEx.con_ApplicationTypeName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsCMProjectENEx.con_ApplicationTypeNameLst:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.applicationTypeNameLst.localeCompare(b.applicationTypeNameLst);
        };
      case clsCMProjectENEx.con_FunctionTemplateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      default:
        return CMProject_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCMProjectENEx.con_PrjName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsCMProjectENEx.con_ApplicationTypeSimName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsCMProjectENEx.con_UseStateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.useStateName.localeCompare(a.useStateName);
        };
      case clsCMProjectENEx.con_ApplicationTypeName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsCMProjectENEx.con_ApplicationTypeNameLst:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.applicationTypeNameLst.localeCompare(a.applicationTypeNameLst);
        };
      case clsCMProjectENEx.con_FunctionTemplateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      default:
        return CMProject_SortFunByKey(strKey, AscOrDesc);
    }
  }
}
/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CMProjectEx_FuncMapByFldName(strFldName: string, objCMProjectEx: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsCMProjectEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCMProjectENEx.con_ApplicationTypeNameLst:
      return CMProjectEx_FuncMap_ApplicationTypeNameLst(objCMProjectEx);
    case clsCMProjectENEx.con_PrjName:
      return CMProjectEx_FuncMap_PrjName(objCMProjectEx);
    case clsCMProjectENEx.con_ApplicationTypeSimName:
      return CMProjectEx_FuncMap_ApplicationTypeSimName(objCMProjectEx);
    case clsCMProjectENEx.con_UseStateName:
      return CMProjectEx_FuncMap_UseStateName(objCMProjectEx);
    case clsCMProjectENEx.con_ApplicationTypeName:
      return CMProjectEx_FuncMap_ApplicationTypeName(objCMProjectEx);
    case clsCMProjectENEx.con_FunctionTemplateName:
      return CMProjectEx_FuncMap_FunctionTemplateName(objCMProjectEx);
    case clsCMProjectENEx.con_VueDesignSysName:
      return CMProjectEx_FuncMap_VueDesignSysName(objCMProjectEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMap_PrjName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objCMProject.prjName) == true) {
      const Projects_PrjId = objCMProject.prjId;
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      );
      objCMProject.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMap_ApplicationTypeSimName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMap_ApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objCMProject.applicationTypeSimName) == true) {
      const ApplicationType_ApplicationTypeId = objCMProject.applicationTypeId;
      const ApplicationType_ApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objCMProject.applicationTypeSimName = ApplicationType_ApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000074)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMap_UseStateName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMap_UseStateName.name;
  try {
    if (IsNullOrEmpty(objCMProject.useStateName) == true) {
      const UseState_UseStateId = objCMProject.useStateId;
      const UseState_UseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseState_UseStateId,
      );
      objCMProject.useStateName = UseState_UseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000134)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMap_ApplicationTypeName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMap_ApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCMProject.applicationTypeName) == true) {
      const ApplicationType_ApplicationTypeId = objCMProject.applicationTypeId;
      const ApplicationType_ApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objCMProject.applicationTypeName = ApplicationType_ApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000100)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function CMProjectEx_FuncMap_ApplicationTypeNameLst(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMap_ApplicationTypeNameLst.name;
  const applicationTypeStore = useApplicationTypeStore();
  try {
    if (IsNullOrEmpty(objCMProject.applicationTypeNameLst) == true) {
      let arrAppTypeIdLst = await CMProjectAppRelaEx_GetAppTypeIdLstByCmPrjId_Cache(
        objCMProject.cmPrjId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (arrAppTypeIdLst.length == 0) {
        objCMProject.applicationTypeNameLst = '';
        arrAppTypeIdLst = new Array<number>();
      } else {
        let strCmPrjNames = '';
        let i = 1;
        for (const intApplicationTypeId of arrAppTypeIdLst) {
          const ApplicationType_ApplicationTypeSimName =
            await applicationTypeStore.getApplicationTypeSimNameByApplicationTypeId(
              intApplicationTypeId,
            );

          if (IsNullOrEmpty(ApplicationType_ApplicationTypeSimName) == true) continue;
          if (i == 1) {
            strCmPrjNames += Format(
              "<span style='white-space: nowrap'>{0}. {1}</span>",
              i,
              ApplicationType_ApplicationTypeSimName,
            );
            i++;
          } else {
            strCmPrjNames += Format(
              "<br/><span style='white-space: nowrap'>{0}. {1}</span>",
              i,
              ApplicationType_ApplicationTypeSimName,
            );
            i++;
          }
        }
        objCMProject.applicationTypeNameLst = strCmPrjNames;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMap_FunctionTemplateName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMap_FunctionTemplateName.name;
  try {
    if (IsNullOrEmpty(objCMProject.functionTemplateName) == true) {
      const FunctionTemplate_FunctionTemplateId = objCMProject.functionTemplateId;
      const FunctionTemplate_FunctionTemplateName = await FunctionTemplate_func(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        clsFunctionTemplateEN.con_FunctionTemplateName,
        FunctionTemplate_FunctionTemplateId,
      );
      objCMProject.functionTemplateName = FunctionTemplate_FunctionTemplateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000105)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
 **/
export async function CMProjectEx_CheckUniCond4Add(
  objCMProjectEN: clsCMProjectEN,
): Promise<boolean> {
  // const strThisFuncName = CMProjectEx_CheckUniCond4Add.name;
  const strUniquenessCondition = CMProject_GetUniCondStr(objCMProjectEN);
  const bolIsExistCondition = await CMProject_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在！',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

export async function CMProjectEx_AddDefaCmProject(
  strPrjId: string,
  strPrjName: string,
  strUserId: string,
) {
  const strThisFuncName = CMProjectEx_AddDefaCmProject.name;

  // const returnBool = false;
  // const returnKeyId = '';
  // const strInfo = '';
  // const strMsg = '';
  //这是一个单表的插入的代码,由于逻辑层太简单,
  //就把逻辑层合并到控制层,

  const objCMProjectEN = new clsCMProjectEN();
  try {
    //objCMProjectEN.SetCmPrjId(this.cmPrjId);// CM工程Id
    const strCmPrjName = Format('{0}前端', strPrjName);
    objCMProjectEN.SetCmPrjName(strCmPrjName); // CM工程名
    objCMProjectEN.SetPrjId(strPrjId); // 工程ID
    objCMProjectEN.SetApplicationTypeId(enumApplicationType.SpaAppInCore_TS_18); // 应用类型
    objCMProjectEN.SetFunctionTemplateId('0007'); // 函数模板
    objCMProjectEN.SetIsFstLcase(true); // 是否首字母小写
    objCMProjectEN.SetProjectFileName(''); // 工程文件名
    objCMProjectEN.SetUseStateId(enumUseState.InUse_0001); // 使用状态
    objCMProjectEN.SetIsRefresh4RelaView(false); // 是否刷新相关视图
    objCMProjectEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    objCMProjectEN.SetUpdUserId(strUserId); // 修改用户Id
    objCMProjectEN.SetMemo('默认创建第一个Cm工程'); // 说明
  } catch (e) {
    const strMsg = Format(
      '从界面获取数据不成功,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg; //一定要有一个返回值，否则会出错！
  }
  try {
    CMProject_CheckPropertyNew(objCMProjectEN);
  } catch (e) {
    const strMsg = Format(
      '检查数据不成功,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg; //一定要有一个返回值，否则会出错！
  }
  try {
    //检查唯一性条件
    const bolIsExist = await CMProjectEx_CheckUniCond4Add(objCMProjectEN);
    if (bolIsExist == false) {
      return '';
    }
    const responseKeyId = await CMProject_AddNewRecordWithMaxIdAsync(objCMProjectEN);
    const returnKeyId: string = responseKeyId;
    if (IsNullOrEmpty(returnKeyId) == false) {
      CMProject_ReFreshCache();
      const strInfo = Format('添加默认Cm工程成功!');

      //显示信息框
      alert(strInfo);
    } else {
      const strInfo = Format('添加默认Cm工程不成功!');
      //显示信息框
      alert(strInfo);
    }
    return responseKeyId; //一定要有一个返回值，否则会出错！
  } catch (e) {
    const strMsg = Format(
      '添加记录不成功,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMapPrjName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objCMProject.prjName) == true) {
      const ProjectsPrjId = objCMProject.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objCMProject.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000286)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMapApplicationTypeSimName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMapApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objCMProject.applicationTypeSimName) == true) {
      const ApplicationTypeApplicationTypeId = objCMProject.applicationTypeId;
      const ApplicationTypeApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationTypeApplicationTypeId.toString(),
      );
      objCMProject.applicationTypeSimName = ApplicationTypeApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000287)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMapUseStateName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMapUseStateName.name;
  try {
    if (IsNullOrEmpty(objCMProject.useStateName) == true) {
      const UseStateUseStateId = objCMProject.useStateId;
      const UseStateUseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseStateUseStateId,
      );
      objCMProject.useStateName = UseStateUseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000288)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMapApplicationTypeName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMapApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCMProject.applicationTypeName) == true) {
      const ApplicationTypeApplicationTypeId = objCMProject.applicationTypeId;
      const ApplicationTypeApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationTypeApplicationTypeId.toString(),
      );
      objCMProject.applicationTypeName = ApplicationTypeApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000289)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMapFunctionTemplateName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMapFunctionTemplateName.name;
  try {
    if (IsNullOrEmpty(objCMProject.functionTemplateName) == true) {
      const FunctionTemplateFunctionTemplateId = objCMProject.functionTemplateId;
      const FunctionTemplateFunctionTemplateName = await FunctionTemplate_func(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        clsFunctionTemplateEN.con_FunctionTemplateName,
        FunctionTemplateFunctionTemplateId,
      );
      objCMProject.functionTemplateName = FunctionTemplateFunctionTemplateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000290)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProjectEx_FuncMap_VueDesignSysName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProjectEx_FuncMap_VueDesignSysName.name;
  try {
    if (IsNullOrEmpty(objCMProject.vueDesignSysName) == true) {
      const VueCtrlDesignSysVueDesignSysId = objCMProject.vueDesignSysId;
      const VueCtrlDesignSysVueDesignSysName = await VueCtrlDesignSys_func(
        clsVueCtrlDesignSysEN.con_VueDesignSysId,
        clsVueCtrlDesignSysEN.con_VueDesignSysName,
        VueCtrlDesignSysVueDesignSysId,
      );
      objCMProject.vueDesignSysName = VueCtrlDesignSysVueDesignSysName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000530)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
