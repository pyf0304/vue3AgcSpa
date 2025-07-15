/**
 * 类名:clsvCodeType_SimExWApi
 * 表名:vCodeType_Sim(00050623)
 * 版本:2023.03.02.1(服务器:WIN-SRV103-116)
 * 日期:2023/03/03 15:40:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vCodeType_Sim(vCodeType_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年03月03日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { vPrjTab_SimEx_GetObjByTabIdCache } from '../Table_Field/clsvPrjTab_SimExWApi';
import {
  BindDdl_CboObjectInDiv,
  BindDdl_CboObjectInDivObj,
  BindDdl_ObjLstInDivObj_V,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  vCodeType_Sim_GetObjByCodeTypeIdCache,
  vCodeType_Sim_GetObjLstByPagerAsync,
  vCodeType_Sim_GetObjLstCache,
  vCodeType_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { clsvCodeType_SimENEx } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimENEx';

import { clsCboObject } from '@/ts/PubFun/clsCboObject';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const vCodeType_SimEx_Controller = 'vCodeType_SimExApi';
export const vCodeType_SimEx_ConstructorName = 'vCodeType_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vCodeType_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * @param objvCodeType_SimENS:源对象
 * @returns 目标对象=>clsvCodeType_SimEN:objvCodeType_SimENT
 **/
export function vCodeType_SimEx_CopyToEx(
  objvCodeType_SimENS: clsvCodeType_SimEN,
): clsvCodeType_SimENEx {
  const strThisFuncName = vCodeType_SimEx_CopyToEx.name;
  const objvCodeType_SimENT = new clsvCodeType_SimENEx();
  try {
    ObjectAssign(objvCodeType_SimENT, objvCodeType_SimENS);
    return objvCodeType_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vCodeType_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvCodeType_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vCodeType_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvCodeType_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvCodeType_SimObjLst = await vCodeType_Sim_GetObjLstByPagerAsync(objPagerPara);
  const arrvCodeType_SimExObjLst = arrvCodeType_SimObjLst.map(vCodeType_SimEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvCodeType_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvCodeType_SimExObjLst) {
      await vCodeType_SimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvCodeType_SimExObjLst.length == 0) return arrvCodeType_SimExObjLst;
  let arrvCodeType_Sim_Sel: Array<clsvCodeType_SimENEx> = arrvCodeType_SimExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvCodeType_Sim_Sel = arrvCodeType_Sim_Sel.sort(
        vCodeType_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvCodeType_Sim_Sel = arrvCodeType_Sim_Sel.sort(objPagerPara.sortFun);
    }

    return arrvCodeType_Sim_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vCodeType_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvCodeType_SimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-03-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCodeType_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vCodeType_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vCodeType_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-03-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vCodeType_SimEx_FuncMapByFldName(
  strFldName: string,
  objvCodeType_SimEx: clsvCodeType_SimENEx,
) {
  const strThisFuncName = vCodeType_SimEx_FuncMapByFldName.name;
  console.log(objvCodeType_SimEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvCodeType_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

export async function vCodeType_SimEx_BindDdl_DependsOnCache(
  strDivName: string,
  strDdlName: string,
  strProgLangTypeId = '',
) {
  let arrCodeType = await vCodeType_Sim_GetObjLstCache();
  arrCodeType = arrCodeType.filter((x) => x.inUse == true && x.progLangTypeId == strProgLangTypeId);
  const arrDependsOn = arrCodeType.map((x) => x.dependsOn);
  const arrDependsOn_Split = new Array<string>();
  for (const x of arrDependsOn) {
    const sstrGroupName = x.split(',');
    for (const strInFor of sstrGroupName) {
      if (IsNullOrEmpty(strInFor) == true) continue;
      if (arrDependsOn_Split.indexOf(strInFor) == -1) arrDependsOn_Split.push(strInFor);
    }
  }
  const arrCboObject = arrDependsOn_Split.sort().map((x) => new clsCboObject(x, x));
  BindDdl_CboObjectInDiv(
    strDivName,
    strDdlName,
    arrCboObject,
    clsCboObject.con_Value,
    clsCboObject.con_Text,
    '代码类型依赖',
  );
}

export async function vCodeType_SimEx_BindDdl_GroupNameByDependsOnCache(
  strDivName: string,
  strDdlName: string,
  strDependsOn: string,
  strProgLangTypeId = '',
) {
  //为数据源于表的下拉框设置内容
  let arrCodeType = await vCodeType_Sim_GetObjLstCache();
  arrCodeType = arrCodeType.filter((x) => x.inUse == true && x.dependsOn == strDependsOn);

  if (IsNullOrEmpty(strProgLangTypeId) == false) {
    arrCodeType = arrCodeType.filter((x) => x.progLangTypeId == strProgLangTypeId);
  }
  const arrGroupName = arrCodeType.map((x) => x.groupName);
  const arrGroupName_Split = new Array<string>();
  for (const x of arrGroupName) {
    const sstrGroupName = x.split(',');
    for (const strInFor of sstrGroupName) {
      if (IsNullOrEmpty(strInFor) == true) continue;
      if (arrGroupName_Split.indexOf(strInFor) == -1) arrGroupName_Split.push(strInFor);
    }
  }

  const arrCboObject = arrGroupName_Split.sort().map((x) => new clsCboObject(x, x));
  BindDdl_CboObjectInDiv(
    strDivName,
    strDdlName,
    arrCboObject,
    clsCboObject.con_Value,
    clsCboObject.con_Text,
    '组名',
  );
}

export async function vCodeType_SimEx_BindDdl_GroupNameCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
) {
  let arrCodeType = await vCodeType_Sim_GetObjLstCache();
  arrCodeType = arrCodeType.filter((x) => x.inUse == true);
  const arrGroupName = arrCodeType.map((x) => x.groupName);
  const arrGroupName_Split = new Array<string>();
  for (const x of arrGroupName) {
    const sstrGroupName = x.split(',');
    for (const strInFor of sstrGroupName) {
      if (IsNullOrEmpty(strInFor) == true) continue;
      if (arrGroupName_Split.indexOf(strInFor) == -1) arrGroupName_Split.push(strInFor);
    }
  }
  const arrCboObject = arrGroupName_Split.sort().map((x) => new clsCboObject(x, x));
  BindDdl_CboObjectInDivObj(
    strDivName,
    strDdlName,
    arrCboObject,
    clsCboObject.con_Value,
    clsCboObject.con_Text,
    '组名',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param strProgLangTypeId:编程语言类型Id
 */
export async function vCodeType_SimEx_BindDdl_CodeTypeIdByProgLangTypeIdInDivCache(
  strDivName: HTMLDivElement,
  strDdlName: string,
  strProgLangTypeId: string,
) {
  // const strThisFuncName = 'CodeTypeEx_BindDdl_CodeTypeIdByProgLangTypeIdInDivCache';

  if (IsNullOrEmpty(strProgLangTypeId) == true) {
    const strMsg = Format(
      '参数:[strProgLangTypeId]不能为空！(In BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strProgLangTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strProgLangTypeId]的长度:[{0}]不正确！',
      strProgLangTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在！(In BindDdl_CodeTypeIdByProgLangTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CodeTypeIdByProgLangTypeIdInDivCache");
  let arrObjLst_Sel = await vCodeType_Sim_GetObjLstCache();
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel
    .filter((x) => x.progLangTypeId == strProgLangTypeId && x.inUse == true)
    .sort(vCodeType_SimEx_SortFunByKey(clsvCodeType_SimEN.con_CodeTypeName, 'Asc'));
  BindDdl_ObjLstInDivObj_V(
    strDivName,
    strDdlName,
    arrObjLst_Sel,
    clsvCodeType_SimEN.con_CodeTypeId,
    clsvCodeType_SimEN.con_CodeTypeName,
    '代码类型',
  );
}

export async function vCodeType_SimEx_Function4GeneCodeEx_(
  strCodeTypeId: string,
  strProgLangTypeId: string,
  strTabId: string,
  strPrjId: string,
): Promise<string> {
  let strClassName = '';
  const objPrjTabEN = await vPrjTab_SimEx_GetObjByTabIdCache(strTabId, strPrjId);
  if (objPrjTabEN == null) {
    const strMsg = Format(
      '在项目表:(PrjTab)中，tabId=[{0}](cmPrjId={1})的记录不存在！',
      strTabId,
      strPrjId,
    );
    console.error(strMsg);
    throw Error(strMsg);
  }
  const objCodeTypeEN = await vCodeType_Sim_GetObjByCodeTypeIdCache(strCodeTypeId);
  if (objCodeTypeEN == null) {
    const strMsg = Format('代码类型Id:[{0}]，没有相应的类型，请检查！', strCodeTypeId);
    console.error(strMsg);
    alert(strMsg);
    return '';
  }
  if (IsNullOrEmpty(objCodeTypeEN.classNameFormat) == true) {
    const strMsg = Format('codeTypeId:{0}在没有相应的类名格式！', strCodeTypeId);
    console.error(strMsg);
    throw Error(strMsg);
  }
  strClassName = Format(objCodeTypeEN.classNameFormat, objPrjTabEN.tabName);
  return strClassName;
}
