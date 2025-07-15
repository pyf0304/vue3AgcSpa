/**
 * 类名:clsProjectsExWApi
 * 表名:Projects(00050002)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/01 15:56:49
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程(Projects)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import {
  ObjectAssign,
  GetSortExpressInfo,
  BindDdl_ObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  Projects_GetObjLstCache,
  Projects_SortFunByKey,
  Projects_GetObjLstByPagerAsync,
} from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { clsProjectsENEx } from '@/ts/L0Entity/PrjManage/clsProjectsENEx';
import { UseState_func, UseState_funcKey } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import { clsUseStateEN, enumUseState } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const projectsExController = 'ProjectsExApi';
export const projectsEx_ConstructorName = 'projectsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ProjectsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objProjectsENS:源对象
 * @returns 目标对象=>clsProjectsEN:objProjectsENT
 **/
export function ProjectsEx_CopyToEx(objProjectsENS: clsProjectsEN): clsProjectsENEx {
  const strThisFuncName = ProjectsEx_CopyToEx.name;
  const objProjectsENT = new clsProjectsENEx();
  try {
    ObjectAssign(objProjectsENT, objProjectsENS);
    return objProjectsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      projectsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objProjectsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ProjectsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsProjectsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrProjectsObjLst = await Projects_GetObjLstByPagerAsync(objPagerPara);
  const arrProjectsExObjLst = arrProjectsObjLst.map(ProjectsEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsProjectsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrProjectsExObjLst) {
      await ProjectsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrProjectsExObjLst.length == 0) return arrProjectsExObjLst;
  let arrProjectsSel: Array<clsProjectsENEx> = arrProjectsExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrProjectsSel = arrProjectsSel.sort(ProjectsEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrProjectsSel = arrProjectsSel.sort(objPagerPara.sortFun);
    }

    return arrProjectsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      projectsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProjectsENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objProjectsS:源对象
 **/
export async function ProjectsEx_FuncMapDateTimeSim(objProjects: clsProjectsENEx) {
  const strThisFuncName = ProjectsEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objProjects.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objProjects.updDate);
      objProjects.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      projectsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objProjectsS:源对象
 **/
export async function ProjectsEx_FuncMapUseStateName(objProjects: clsProjectsENEx) {
  const strThisFuncName = ProjectsEx_FuncMapUseStateName.name;
  try {
    if (IsNullOrEmpty(objProjects.useStateName) == true) {
      const UseStateUseStateId = objProjects.useStateId;
      const UseStateUseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseStateUseStateId,
      );
      objProjects.useStateName = UseStateUseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000288)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      projectsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ProjectsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsProjectsENEx.con_DateTimeSim:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsProjectsENEx.con_UseStateName:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          return a.useStateName.localeCompare(b.useStateName);
        };
      default:
        return Projects_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsProjectsENEx.con_DateTimeSim:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsProjectsENEx.con_UseStateName:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          return b.useStateName.localeCompare(a.useStateName);
        };
      default:
        return Projects_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ProjectsEx_FuncMapByFldName(strFldName: string, objProjectsEx: clsProjectsENEx) {
  const strThisFuncName = ProjectsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsProjectsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsProjectsENEx.con_DateTimeSim:
      return ProjectsEx_FuncMapDateTimeSim(objProjectsEx);
    case clsProjectsENEx.con_UseStateName:
      return ProjectsEx_FuncMapUseStateName(objProjectsEx);
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
 * @param objProjectsS:源对象
 **/
export async function ProjectsEx_FuncMapKeyUseStateName(
  objProjects: clsProjectsENEx,
): Promise<Array<string>> {
  const strThisFuncName = ProjectsEx_FuncMapKeyUseStateName.name;
  try {
    if (IsNullOrEmpty(objProjects.useStateName) == true) return [];
    const UseStateUseStateName = objProjects.useStateName;
    const arrUseStateId = await UseState_funcKey(
      clsUseStateEN.con_UseStateName,
      UseStateUseStateName,
      enumComparisonOp.Like_03,
    );
    return arrUseStateId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000288)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      projectsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function ProjectsEx_BindDdl_PrjIdInDivExCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
) {
  // const strThisFuncName = 'BindDdl_PrjIdInDivCache';

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_PrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjIdInDivCache");
  let arrObjLst_Sel = await Projects_GetObjLstCache();
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.useStateId == enumUseState.InUse_0001);
  arrObjLst_Sel = arrObjLst_Sel.sort((x, y) => x.prjName.localeCompare(y.prjName));
  if (arrObjLst_Sel == null) return;
  BindDdl_ObjLstInDivObj(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsProjectsEN.con_PrjId,
    clsProjectsEN.con_PrjName,
    '工程',
  );
}
