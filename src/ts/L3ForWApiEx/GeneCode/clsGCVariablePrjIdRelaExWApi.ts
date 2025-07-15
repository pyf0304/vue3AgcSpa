/**
* 类名:clsGCVariablePrjIdRelaExWApi
* 表名:GCVariablePrjIdRela(00050617)
* 版本:2023.02.18.1(服务器:WIN-SRV103-116)
* 日期:2023/02/19 23:58:22
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
 * GCVariablePrjIdRela(GCVariablePrjIdRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年02月19日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  GCVariablePrjIdRela_GetObjLstAsync,
  GCVariablePrjIdRela_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariablePrjIdRelaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';
import { clsGCVariablePrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaENEx';
import { GCVariable_func, GCVariable_funcKey } from '@/ts/L3ForWApi/GeneCode/clsGCVariableWApi';
import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
import { Projects_func, Projects_funcKey } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import {
  DataTypeAbbr_func,
  DataTypeAbbr_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import {
  GCVariableType_func,
  GCVariableType_funcKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
export const gCVariablePrjIdRelaEx_Controller = 'GCVariablePrjIdRelaExApi';
export const gCVariablePrjIdRelaEx_ConstructorName = 'gCVariablePrjIdRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function GCVariablePrjIdRelaEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objGCVariablePrjIdRelaENS:源对象
 * @returns 目标对象=>clsGCVariablePrjIdRelaEN:objGCVariablePrjIdRelaENT
 **/
export function GCVariablePrjIdRelaEx_CopyToEx(
  objGCVariablePrjIdRelaENS: clsGCVariablePrjIdRelaEN,
): clsGCVariablePrjIdRelaENEx {
  const strThisFuncName = GCVariablePrjIdRelaEx_CopyToEx.name;
  const objGCVariablePrjIdRelaENT = new clsGCVariablePrjIdRelaENEx();
  try {
    ObjectAssign(objGCVariablePrjIdRelaENT, objGCVariablePrjIdRelaENS);
    return objGCVariablePrjIdRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCVariablePrjIdRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GCVariablePrjIdRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCVariablePrjIdRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrGCVariablePrjIdRelaObjLst = await GCVariablePrjIdRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrGCVariablePrjIdRelaExObjLst = arrGCVariablePrjIdRelaObjLst.map(
    GCVariablePrjIdRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCVariablePrjIdRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrGCVariablePrjIdRelaExObjLst) {
      await GCVariablePrjIdRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrGCVariablePrjIdRelaExObjLst.length == 0) return arrGCVariablePrjIdRelaExObjLst;
  let arrGCVariablePrjIdRela_Sel: Array<clsGCVariablePrjIdRelaENEx> =
    arrGCVariablePrjIdRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCVariablePrjIdRela_Sel = arrGCVariablePrjIdRela_Sel.sort(
        GCVariablePrjIdRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrGCVariablePrjIdRela_Sel = arrGCVariablePrjIdRela_Sel.sort(objPagerPara.sortFun);
    }

    return arrGCVariablePrjIdRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariablePrjIdRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_VarName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_VarName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varName) == true) {
      const GCVariable_VarId = objGCVariablePrjIdRela.varId;
      const GCVariable_VarName = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarName,
        GCVariable_VarId,
      );
      objGCVariablePrjIdRela.varName = GCVariable_VarName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000263)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_PrjName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.prjName) == true) {
      const Projects_PrjId = objGCVariablePrjIdRela.prjId;
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      );
      objGCVariablePrjIdRela.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_CsType(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_CsType.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.csType) == true) {
      const GCVariable_VarId = objGCVariablePrjIdRela.varId;
      const GCVariable_DataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariable_VarId,
      );
      const DataTypeAbbr_DataTypeId = GCVariable_DataTypeId;
      const DataTypeAbbr_CsType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_CsType,
        DataTypeAbbr_DataTypeId,
      );
      objGCVariablePrjIdRela.csType = DataTypeAbbr_CsType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000169)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_DataTypeName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_DataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.dataTypeName) == true) {
      const GCVariable_VarId = objGCVariablePrjIdRela.varId;
      const GCVariable_DataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariable_VarId,
      );
      const DataTypeAbbr_DataTypeId = GCVariable_DataTypeId;
      const DataTypeAbbr_DataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbr_DataTypeId,
      );
      objGCVariablePrjIdRela.dataTypeName = DataTypeAbbr_DataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000091)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_VarTypeId(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_VarTypeId.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varTypeId) == true) {
      const GCVariable_VarId = objGCVariablePrjIdRela.varId;
      const GCVariable_VarTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarTypeId,
        GCVariable_VarId,
      );
      objGCVariablePrjIdRela.varTypeId = GCVariable_VarTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000264)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_VarTypeName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_VarTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varTypeName) == true) {
      const GCVariable_VarId = objGCVariablePrjIdRela.varId;
      const GCVariable_VarTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_VarTypeId,
        GCVariable_VarId,
      );
      const GCVariableType_VarTypeId = GCVariable_VarTypeId;
      const GCVariableType_VarTypeName = await GCVariableType_func(
        clsGCVariableTypeEN.con_VarTypeId,
        clsGCVariableTypeEN.con_VarTypeName,
        GCVariableType_VarTypeId,
      );
      objGCVariablePrjIdRela.varTypeName = GCVariableType_VarTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000118)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_TypeScriptType(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_TypeScriptType.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.typeScriptType) == true) {
      const GCVariable_VarId = objGCVariablePrjIdRela.varId;
      const GCVariable_DataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariable_VarId,
      );
      const DataTypeAbbr_DataTypeId = GCVariable_DataTypeId;
      const DataTypeAbbr_TypeScriptType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_TypeScriptType,
        DataTypeAbbr_DataTypeId,
      );
      objGCVariablePrjIdRela.typeScriptType = DataTypeAbbr_TypeScriptType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000265)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMap_DataTypeId(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMap_DataTypeId.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.dataTypeId) == true) {
      const GCVariable_VarId = objGCVariablePrjIdRela.varId;
      const GCVariable_DataTypeId = await GCVariable_func(
        clsGCVariableEN.con_VarId,
        clsGCVariableEN.con_DataTypeId,
        GCVariable_VarId,
      );
      objGCVariablePrjIdRela.dataTypeId = GCVariable_DataTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000152)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-02-19
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCVariablePrjIdRelaEx_FuncMapByFldName(
  strFldName: string,
  objGCVariablePrjIdRelaEx: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsGCVariablePrjIdRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCVariablePrjIdRelaENEx.con_PrjName:
      return GCVariablePrjIdRelaEx_FuncMap_PrjName(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_DataTypeName:
      return GCVariablePrjIdRelaEx_FuncMap_DataTypeName(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_CsType:
      return GCVariablePrjIdRelaEx_FuncMap_CsType(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_VarName:
      return GCVariablePrjIdRelaEx_FuncMap_VarName(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_VarTypeId:
      return GCVariablePrjIdRelaEx_FuncMap_VarTypeId(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_TypeScriptType:
      return GCVariablePrjIdRelaEx_FuncMap_TypeScriptType(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_DataTypeId:
      return GCVariablePrjIdRelaEx_FuncMap_DataTypeId(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_VarTypeName:
      return GCVariablePrjIdRelaEx_FuncMap_VarTypeName(objGCVariablePrjIdRelaEx);
    case clsGCVariablePrjIdRelaENEx.con_FldName:
      return GCVariablePrjIdRelaEx_FuncMapFldName(objGCVariablePrjIdRelaEx);
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_VarName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_VarName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varName) == true) return [];
    const GCVariable_VarName = objGCVariablePrjIdRela.varName;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_VarName,
      GCVariable_VarName,

      enumComparisonOp.Like_03,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000263)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
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
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_PrjName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_PrjName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.prjName) == true) return [];
    const Projects_PrjName = objGCVariablePrjIdRela.prjName;
    const arrPrjId = await Projects_funcKey(
      clsProjectsEN.con_PrjName,
      Projects_PrjName,
      enumComparisonOp.Like_03,
    );
    return arrPrjId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
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
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_CsType(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_CsType.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.csType) == true) return [];
    const DataTypeAbbr_CsType = objGCVariablePrjIdRela.csType;
    const arrDataTypeId = await DataTypeAbbr_funcKey(
      clsDataTypeAbbrEN.con_CsType,
      DataTypeAbbr_CsType,
      enumComparisonOp.Like_03,
    );
    const strDataTypeIdLst = arrDataTypeId;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_DataTypeId,
      strDataTypeIdLst,
      enumComparisonOp.In_04,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000169)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
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
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_DataTypeName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_DataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.dataTypeName) == true) return [];
    const DataTypeAbbr_DataTypeName = objGCVariablePrjIdRela.dataTypeName;
    const arrDataTypeId = await DataTypeAbbr_funcKey(
      clsDataTypeAbbrEN.con_DataTypeName,
      DataTypeAbbr_DataTypeName,
      enumComparisonOp.Like_03,
    );
    const strDataTypeIdLst = arrDataTypeId;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_DataTypeId,
      strDataTypeIdLst,
      enumComparisonOp.In_04,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000091)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
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
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_VarTypeId(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_VarTypeId.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varTypeId) == true) return [];
    const GCVariable_VarTypeId = objGCVariablePrjIdRela.varTypeId;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_VarTypeId,
      GCVariable_VarTypeId,

      enumComparisonOp.Like_03,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000264)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
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
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_VarTypeName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_VarTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.varTypeName) == true) return [];
    const GCVariableType_VarTypeName = objGCVariablePrjIdRela.varTypeName;
    const arrVarTypeId = await GCVariableType_funcKey(
      clsGCVariableTypeEN.con_VarTypeName,
      GCVariableType_VarTypeName,
      enumComparisonOp.Like_03,
    );
    const strVarTypeIdLst = arrVarTypeId;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_VarTypeId,
      strVarTypeIdLst,

      enumComparisonOp.In_04,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000118)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
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
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_TypeScriptType(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_TypeScriptType.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.typeScriptType) == true) return [];
    const DataTypeAbbr_TypeScriptType = objGCVariablePrjIdRela.typeScriptType;
    const arrDataTypeId = await DataTypeAbbr_funcKey(
      clsDataTypeAbbrEN.con_TypeScriptType,
      DataTypeAbbr_TypeScriptType,
      enumComparisonOp.Like_03,
    );
    const strDataTypeIdLst = arrDataTypeId;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_DataTypeId,
      strDataTypeIdLst,

      enumComparisonOp.In_04,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000265)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
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
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapKey_DataTypeId(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapKey_DataTypeId.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.dataTypeId) == true) return [];
    const GCVariable_DataTypeId = objGCVariablePrjIdRela.dataTypeId;
    const arrVarId = await GCVariable_funcKey(
      clsGCVariableEN.con_DataTypeId,
      GCVariable_DataTypeId,

      enumComparisonOp.Like_03,
    );
    return arrVarId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000152)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 修改某工程下的FldId,与PrjId 不相符的
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function GCVariablePrjIdRelaEx_UpdFldIdByPrjId(
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = GCVariablePrjIdRelaEx_UpdFldIdByPrjId.name;
  const strAction = 'UpdFldIdByPrjId';
  const strUrl = GCVariablePrjIdRelaEx_GetWebApiUrl(gCVariablePrjIdRelaEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCVariablePrjIdRelaS:源对象
 **/
export async function GCVariablePrjIdRelaEx_FuncMapFldName(
  objGCVariablePrjIdRela: clsGCVariablePrjIdRelaENEx,
) {
  const strThisFuncName = GCVariablePrjIdRelaEx_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objGCVariablePrjIdRela.fldName) == true) {
      const vFieldTabSimFldId = objGCVariablePrjIdRela.fldId;
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objGCVariablePrjIdRela.prjId,
      );
      objGCVariablePrjIdRela.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000565)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariablePrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export function GCVariablePrjIdRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVariablePrjIdRelaENEx.con_PrjName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_CsType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.varName.localeCompare(b.varName);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.varTypeId.localeCompare(b.varTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.typeScriptType.localeCompare(b.typeScriptType);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_FldName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      default:
        return GCVariablePrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCVariablePrjIdRelaENEx.con_PrjName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_CsType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.varName.localeCompare(a.varName);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.varTypeId.localeCompare(a.varTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.typeScriptType.localeCompare(a.typeScriptType);
        };
      case clsGCVariablePrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsGCVariablePrjIdRelaENEx.con_VarTypeName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsGCVariablePrjIdRelaENEx.con_FldName:
        return (a: clsGCVariablePrjIdRelaENEx, b: clsGCVariablePrjIdRelaENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      default:
        return GCVariablePrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 修改某工程下的VarId的FldId,
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strVarId: 变量Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function GCVariablePrjIdRelaEx_UpdFldIdByVarId(
  strPrjId: string,
  strVarId: string,
  strOpUserId: string,
): Promise<string> {
  const strThisFuncName = GCVariablePrjIdRelaEx_UpdFldIdByVarId.name;
  const strAction = 'UpdFldIdByVarId';
  const strUrl = GCVariablePrjIdRelaEx_GetWebApiUrl(gCVariablePrjIdRelaEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strVarId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gCVariablePrjIdRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
