import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import {
  AppCodeTypeRela_GetObjLstByPagerAsync,
  AppCodeTypeRela_GetObjLstCache,
  AppCodeTypeRela_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsAppCodeTypeRelaWApi';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const appCodeTypeRelaEx_Controller = 'AppCodeTypeRelaExApi';
export const appCodeTypeRelaEx_ConstructorName = 'appCodeTypeRelaEx';

export async function AppCodeTypeRelaEx_GetObjExLstByApplicationTypeIdExCache(
  intApplicationTypeId: number,
): Promise<Array<clsAppCodeTypeRelaEN>> {
  //初始化列表缓存
  const arrAppCodeTypeRelaObjExLstCache = await AppCodeTypeRela_GetObjLstCache();
  const arrAppCodeTypeRelaObjLst_Sel1 = arrAppCodeTypeRelaObjExLstCache.filter(
    (x) => x.applicationTypeId == intApplicationTypeId,
  );
  return arrAppCodeTypeRelaObjLst_Sel1;
}
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objAppCodeTypeRelaENS">源对象</param>
/// <param name = "objAppCodeTypeRelaENT">目标对象</param>
export function AppCodeTypeRelaEx_CopyToEx(
  objAppCodeTypeRelaENS: clsAppCodeTypeRelaEN,
): clsAppCodeTypeRelaENEx {
  const objAppCodeTypeRelaENT = new clsAppCodeTypeRelaENEx();
  try {
    ObjectAssign(objAppCodeTypeRelaENT, objAppCodeTypeRelaENS);
    return objAppCodeTypeRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objAppCodeTypeRelaENT;
  }
}
export function AppCodeTypeRelaEx_SortFunByGroupNameAndOrderNum(
  a: clsAppCodeTypeRelaENEx,
  b: clsAppCodeTypeRelaENEx,
): number {
  if (a.groupName == b.groupName) return a.orderNum - b.orderNum;
  else return a.groupName.localeCompare(b.groupName);
}

export function AppCodeTypeRelaEx_SortFunByOrderNum(
  a: clsAppCodeTypeRelaEN,
  b: clsAppCodeTypeRelaEN,
): number {
  return a.orderNum - b.orderNum;
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
export function AppCodeTypeRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsAppCodeTypeRelaENEx.con_ApplicationTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_DependsOn:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.dependsOn.localeCompare(b.dependsOn);
        };
      case clsAppCodeTypeRelaENEx.con_GroupName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.groupName.localeCompare(b.groupName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      default:
        return AppCodeTypeRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsAppCodeTypeRelaENEx.con_ApplicationTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_DependsOn:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.dependsOn.localeCompare(a.dependsOn);
        };
      case clsAppCodeTypeRelaENEx.con_GroupName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.groupName.localeCompare(a.groupName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      default:
        return AppCodeTypeRela_SortFunByKey(strKey, AscOrDesc);
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
export function AppCodeTypeRelaEx_FuncMapByFldName(
  strFldName: string,
  objAppCodeTypeRelaEx: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsAppCodeTypeRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsAppCodeTypeRelaENEx.con_ApplicationTypeName:
      return AppCodeTypeRelaEx_FuncMap_ApplicationTypeName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_CodeTypeSimName:
      return AppCodeTypeRelaEx_FuncMap_CodeTypeSimName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_CodeTypeName:
      return AppCodeTypeRelaEx_FuncMap_CodeTypeName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_DependsOn:
      return AppCodeTypeRelaEx_FuncMap_DependsOn(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_GroupName:
      return AppCodeTypeRelaEx_FuncMap_GroupName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName:
      return AppCodeTypeRelaEx_FuncMap_ProgLangTypeSimName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_ProgLangTypeName:
      return AppCodeTypeRelaEx_FuncMap_ProgLangTypeName(objAppCodeTypeRelaEx);
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
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRelaEx_FuncMap_ApplicationTypeName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMap_ApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.applicationTypeName) == true) {
      const ApplicationType_ApplicationTypeId = objAppCodeTypeRela.applicationTypeId;
      const ApplicationType_ApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationType_ApplicationTypeId.toString(),
      );
      objAppCodeTypeRela.applicationTypeName = ApplicationType_ApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000100)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRelaEx_FuncMap_CodeTypeSimName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMap_CodeTypeSimName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.codeTypeSimName) == true) {
      const CodeType_CodeTypeId = objAppCodeTypeRela.codeTypeId;
      const CodeType_CodeTypeSimName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeSimName,
        CodeType_CodeTypeId,
      );
      objAppCodeTypeRela.codeTypeSimName = CodeType_CodeTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000114)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRelaEx_FuncMap_CodeTypeName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMap_CodeTypeName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.codeTypeName) == true) {
      const CodeType_CodeTypeId = objAppCodeTypeRela.codeTypeId;
      const CodeType_CodeTypeName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_CodeTypeName,
        CodeType_CodeTypeId,
      );
      objAppCodeTypeRela.codeTypeName = CodeType_CodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000106)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRelaEx_FuncMap_DependsOn(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMap_DependsOn.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.dependsOn) == true) {
      const CodeType_CodeTypeId = objAppCodeTypeRela.codeTypeId;
      const CodeType_DependsOn = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_DependsOn,
        CodeType_CodeTypeId,
      );
      objAppCodeTypeRela.dependsOn = CodeType_DependsOn;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000116)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRelaEx_FuncMap_GroupName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMap_GroupName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.groupName) == true) {
      const AppCodeTypeRela_CodeTypeId = objAppCodeTypeRela.codeTypeId;
      const CodeType_GroupName = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_GroupName,
        AppCodeTypeRela_CodeTypeId,
      );
      objAppCodeTypeRela.groupName = CodeType_GroupName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000117)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRelaEx_FuncMap_ProgLangTypeSimName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMap_ProgLangTypeSimName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.progLangTypeSimName) == true) {
      const CodeType_CodeTypeId = objAppCodeTypeRela.codeTypeId;
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      );
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId;
      const ProgLangType_ProgLangTypeSimName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeSimName,
        ProgLangType_ProgLangTypeId,
      );
      objAppCodeTypeRela.progLangTypeSimName = ProgLangType_ProgLangTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000112)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRelaEx_FuncMap_ProgLangTypeName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRelaEx_FuncMap_ProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.progLangTypeName) == true) {
      const CodeType_CodeTypeId = objAppCodeTypeRela.codeTypeId;
      const CodeType_ProgLangTypeId = await vCodeType_Sim_func(
        clsCodeTypeEN.con_CodeTypeId,
        clsCodeTypeEN.con_ProgLangTypeId,
        CodeType_CodeTypeId,
      );
      const ProgLangType_ProgLangTypeId = CodeType_ProgLangTypeId;
      const ProgLangType_ProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangType_ProgLangTypeId,
      );
      objAppCodeTypeRela.progLangTypeName = ProgLangType_ProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000109)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function AppCodeTypeRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAppCodeTypeRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrAppCodeTypeRelaObjLst = await AppCodeTypeRela_GetObjLstByPagerAsync(objPagerPara);
  const arrAppCodeTypeRelaExObjLst = arrAppCodeTypeRelaObjLst.map(AppCodeTypeRelaEx_CopyToEx);

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsAppCodeTypeRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrAppCodeTypeRelaExObjLst) {
      await AppCodeTypeRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrAppCodeTypeRelaExObjLst.length == 0) return arrAppCodeTypeRelaExObjLst;
  let arrAppCodeTypeRela_Sel: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAppCodeTypeRela_Sel = arrAppCodeTypeRela_Sel.sort(
        AppCodeTypeRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrAppCodeTypeRela_Sel = arrAppCodeTypeRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrAppCodeTypeRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      appCodeTypeRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAppCodeTypeRelaENEx>();
}
