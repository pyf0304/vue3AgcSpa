/**
 * 类名:clsCmProjectPrjTabExWApi
 * 表名:CmProjectPrjTab(00050530)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM项目工程表关系(CmProjectPrjTab)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年04月17日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsCmProjectPrjTabENEx } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabENEx';
import {
  CmProjectPrjTab_GetObjLstByPagerAsync,
  CmProjectPrjTab_SortFunByKey,
} from '@/ts/L3ForWApi/CodeMan/clsCmProjectPrjTabWApi';
import { CMProject_func, CMProject_funcKey } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { Projects_func, Projects_funcKey } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { clsCmProjectPrjTabEN } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cmProjectPrjTabEx_Controller = 'CmProjectPrjTabExApi';
export const cmProjectPrjTabEx_ConstructorName = 'cmProjectPrjTabEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CmProjectPrjTabEx_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCmProjectPrjTabENS:源对象
 * @returns 目标对象=>clsCmProjectPrjTabEN:objCmProjectPrjTabENT
 **/
export function CmProjectPrjTabEx_CopyToEx(
  objCmProjectPrjTabENS: clsCmProjectPrjTabEN,
): clsCmProjectPrjTabENEx {
  const strThisFuncName = CmProjectPrjTabEx_CopyToEx.name;
  const objCmProjectPrjTabENT = new clsCmProjectPrjTabENEx();
  try {
    ObjectAssign(objCmProjectPrjTabENT, objCmProjectPrjTabENS);
    return objCmProjectPrjTabENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCmProjectPrjTabENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CmProjectPrjTabEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCmProjectPrjTabENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCmProjectPrjTabObjLst = await CmProjectPrjTab_GetObjLstByPagerAsync(objPagerPara);
  const arrCmProjectPrjTabExObjLst = arrCmProjectPrjTabObjLst.map(CmProjectPrjTabEx_CopyToEx);
  if (arrCmProjectPrjTabExObjLst.length == 0) return arrCmProjectPrjTabExObjLst;
  let arrCmProjectPrjTabSel: Array<clsCmProjectPrjTabENEx> = arrCmProjectPrjTabExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCmProjectPrjTabSel = arrCmProjectPrjTabSel.sort(
        CmProjectPrjTabEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCmProjectPrjTabSel = arrCmProjectPrjTabSel.sort(objPagerPara.sortFun);
    }
    return arrCmProjectPrjTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCmProjectPrjTabENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMapCmPrjName(
  objCmProjectPrjTab: clsCmProjectPrjTabENEx,
) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapCmPrjName.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.cmPrjName) == true) {
      const CMProjectCmPrjId = objCmProjectPrjTab.cmPrjId;
      const CMProjectCmPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        CMProjectCmPrjId,
      );
      objCmProjectPrjTab.cmPrjName = CMProjectCmPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001115)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMapPrjName(objCmProjectPrjTab: clsCmProjectPrjTabENEx) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.prjName) == true) {
      const ProjectsPrjId = objCmProjectPrjTab.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objCmProjectPrjTab.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001068)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMapPrjId(objCmProjectPrjTab: clsCmProjectPrjTabENEx) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapPrjId.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.prjId) == true) {
      const CMProjectCmPrjId = objCmProjectPrjTab.cmPrjId;
      const CMProjectPrjId = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_PrjId,
        CMProjectCmPrjId,
      );
      objCmProjectPrjTab.prjId = CMProjectPrjId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001116)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-17
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CmProjectPrjTabEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCmProjectPrjTabENEx.con_TabName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsCmProjectPrjTabENEx.con_CmPrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return -1;
          if (b.cmPrjName === null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjId:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        return CmProjectPrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCmProjectPrjTabENEx.con_TabName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsCmProjectPrjTabENEx.con_CmPrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return 1;
          if (b.cmPrjName === null) return -1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjName:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsCmProjectPrjTabENEx.con_PrjId:
        return (a: clsCmProjectPrjTabENEx, b: clsCmProjectPrjTabENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        return CmProjectPrjTab_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-04-17
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CmProjectPrjTabEx_FuncMapByFldName(
  strFldName: string,
  objCmProjectPrjTabEx: clsCmProjectPrjTabENEx,
) {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCmProjectPrjTabEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCmProjectPrjTabENEx.con_CmPrjName:
      return CmProjectPrjTabEx_FuncMapCmPrjName(objCmProjectPrjTabEx);
    case clsCmProjectPrjTabENEx.con_PrjName:
      return CmProjectPrjTabEx_FuncMapPrjName(objCmProjectPrjTabEx);
    case clsCmProjectPrjTabENEx.con_PrjId:
      return CmProjectPrjTabEx_FuncMapPrjId(objCmProjectPrjTabEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMapKeyCmPrjName(
  objCmProjectPrjTab: clsCmProjectPrjTabENEx,
): Promise<Array<string>> {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapKeyCmPrjName.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.cmPrjName) == true) return [];
    const CMProjectCmPrjName = objCmProjectPrjTab.cmPrjName;
    const arrCmPrjId = await CMProject_funcKey(
      clsCMProjectEN.con_CmPrjName,
      CMProjectCmPrjName,
      enumComparisonOp.Like_03,
    );
    return arrCmPrjId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001117)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMapKeyPrjName(
  objCmProjectPrjTab: clsCmProjectPrjTabENEx,
): Promise<Array<string>> {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapKeyPrjName.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.prjName) == true) return [];
    const ProjectsPrjName = objCmProjectPrjTab.prjName;
    const arrPrjId = await Projects_funcKey(
      clsProjectsEN.con_PrjName,
      ProjectsPrjName,
      enumComparisonOp.Like_03,
    );
    return arrPrjId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001076)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCmProjectPrjTabS:源对象
 **/
export async function CmProjectPrjTabEx_FuncMapKeyPrjId(
  objCmProjectPrjTab: clsCmProjectPrjTabENEx,
): Promise<Array<string>> {
  const strThisFuncName = CmProjectPrjTabEx_FuncMapKeyPrjId.name;
  try {
    if (IsNullOrEmpty(objCmProjectPrjTab.prjId) == true) return [];
    const CMProjectPrjId = objCmProjectPrjTab.prjId;
    const arrCmPrjId = await CMProject_funcKey(
      clsCMProjectEN.con_PrjId,
      CMProjectPrjId,
      enumComparisonOp.Like_03,
    );
    return arrCmPrjId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001118)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cmProjectPrjTabEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
