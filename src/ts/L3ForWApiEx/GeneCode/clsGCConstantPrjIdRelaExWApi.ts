/**
 * 类名:clsGCConstantPrjIdRelaExWApi
 * 表名:GCConstantPrjIdRela(00050641)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/20 07:12:53
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GC常量工程关系(GCConstantPrjIdRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年06月20日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsGCConstantPrjIdRelaENEx } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaENEx';
import {
  GCConstantPrjIdRela_GetObjLstByPagerAsync,
  GCConstantPrjIdRela_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCConstantPrjIdRelaWApi';
import { Projects_func, Projects_funcKey } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import {
  GCDefaConstants_func,
  GCDefaConstants_funcKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCDefaConstantsWApi';
import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
import {
  DataTypeAbbr_func,
  DataTypeAbbr_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { extractSortExpressAndDirection } from '@/ts/PubFun/clsPubFun';

export const gCConstantPrjIdRelaEx_Controller = 'GCConstantPrjIdRelaExApi';
export const gCConstantPrjIdRelaEx_ConstructorName = 'gCConstantPrjIdRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function GCConstantPrjIdRelaEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objGCConstantPrjIdRelaENS:源对象
 * @returns 目标对象=>clsGCConstantPrjIdRelaEN:objGCConstantPrjIdRelaENT
 **/
export function GCConstantPrjIdRelaEx_CopyToEx(
  objGCConstantPrjIdRelaENS: clsGCConstantPrjIdRelaEN,
): clsGCConstantPrjIdRelaENEx {
  const strThisFuncName = GCConstantPrjIdRelaEx_CopyToEx.name;
  const objGCConstantPrjIdRelaENT = new clsGCConstantPrjIdRelaENEx();
  try {
    ObjectAssign(objGCConstantPrjIdRelaENT, objGCConstantPrjIdRelaENS);
    return objGCConstantPrjIdRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCConstantPrjIdRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GCConstantPrjIdRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCConstantPrjIdRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrGCConstantPrjIdRelaObjLst = await GCConstantPrjIdRela_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrGCConstantPrjIdRelaExObjLst = arrGCConstantPrjIdRelaObjLst.map(
    GCConstantPrjIdRelaEx_CopyToEx,
  );
  if (arrGCConstantPrjIdRelaExObjLst.length == 0) return arrGCConstantPrjIdRelaExObjLst;
  let arrGCConstantPrjIdRelaSel: Array<clsGCConstantPrjIdRelaENEx> = arrGCConstantPrjIdRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const result = extractSortExpressAndDirection(objPagerPara.orderBy);
      // result.strSortExpress === 'constName';
      // result.strSortDirection === 'asc';
      // const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      // let strSortType = 'asc';
      // const strSortFld = sstrSplit[0];
      // if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCConstantPrjIdRelaSel = arrGCConstantPrjIdRelaSel.sort(
        GCConstantPrjIdRelaEx_SortFunByKey(result.strSortExpress, result.strSortDirection),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCConstantPrjIdRelaSel = arrGCConstantPrjIdRelaSel.sort(objPagerPara.sortFun);
    }
    return arrGCConstantPrjIdRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCConstantPrjIdRelaENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapPrjName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.prjName) == true) {
      const ProjectsPrjId = objGCConstantPrjIdRela.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objGCConstantPrjIdRela.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001068)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapDataTypeName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dataTypeName) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      const DataTypeAbbrDataTypeId = GCDefaConstantsDataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objGCConstantPrjIdRela.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001125)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapCsType(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapCsType.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.csType) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      const DataTypeAbbrDataTypeId = GCDefaConstantsDataTypeId;
      const DataTypeAbbrCsType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_CsType,
        DataTypeAbbrDataTypeId,
      );
      objGCConstantPrjIdRela.csType = DataTypeAbbrCsType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001140)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapDataTypeId(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapDataTypeId.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dataTypeId) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      objGCConstantPrjIdRela.dataTypeId = GCDefaConstantsDataTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001127)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapTypeScriptType(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapTypeScriptType.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.typeScriptType) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsDataTypeId = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_DataTypeId,
        GCDefaConstantsConstId,
      );
      const DataTypeAbbrDataTypeId = GCDefaConstantsDataTypeId;
      const DataTypeAbbrTypeScriptType = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_TypeScriptType,
        DataTypeAbbrDataTypeId,
      );
      objGCConstantPrjIdRela.typeScriptType = DataTypeAbbrTypeScriptType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001143)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapConstName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapConstName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.constName) == true) {
      const GCDefaConstantsConstId = objGCConstantPrjIdRela.constId;
      const GCDefaConstantsConstName = await GCDefaConstants_func(
        clsGCDefaConstantsEN.con_ConstId,
        clsGCDefaConstantsEN.con_ConstName,
        GCDefaConstantsConstId,
      );
      objGCConstantPrjIdRela.constName = GCDefaConstantsConstName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001520)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapDateTimeSim(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objGCConstantPrjIdRela.updDate);
      objGCConstantPrjIdRela.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001033)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCConstantPrjIdRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCConstantPrjIdRelaENEx.con_PrjName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCConstantPrjIdRelaENEx.con_CsType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return a.csType.localeCompare(b.csType);
        };
      case clsGCConstantPrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.typeScriptType === null && b.typeScriptType === null) return 0;
          if (a.typeScriptType === null) return -1;
          if (b.typeScriptType === null) return 1;
          return a.typeScriptType.localeCompare(b.typeScriptType);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsGCConstantPrjIdRelaENEx.con_ConstName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.constName === null && b.constName === null) return 0;
          if (a.constName === null) return -1;
          if (b.constName === null) return 1;
          return a.constName.localeCompare(b.constName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DateTimeSim:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return -1;
          if (b.dateTimeSim === null) return 1;
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return GCConstantPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCConstantPrjIdRelaENEx.con_PrjName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCConstantPrjIdRelaENEx.con_CsType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return b.csType.localeCompare(a.csType);
        };
      case clsGCConstantPrjIdRelaENEx.con_TypeScriptType:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.typeScriptType === null && b.typeScriptType === null) return 0;
          if (a.typeScriptType === null) return 1;
          if (b.typeScriptType === null) return -1;
          return b.typeScriptType.localeCompare(a.typeScriptType);
        };
      case clsGCConstantPrjIdRelaENEx.con_DataTypeId:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsGCConstantPrjIdRelaENEx.con_ConstName:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.constName === null && b.constName === null) return 0;
          if (a.constName === null) return 1;
          if (b.constName === null) return -1;
          return b.constName.localeCompare(a.constName);
        };
      case clsGCConstantPrjIdRelaENEx.con_DateTimeSim:
        return (a: clsGCConstantPrjIdRelaENEx, b: clsGCConstantPrjIdRelaENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return 1;
          if (b.dateTimeSim === null) return -1;
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return GCConstantPrjIdRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-20
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCConstantPrjIdRelaEx_FuncMapByFldName(
  strFldName: string,
  objGCConstantPrjIdRelaEx: clsGCConstantPrjIdRelaENEx,
) {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCConstantPrjIdRelaEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCConstantPrjIdRelaENEx.con_PrjName:
      return GCConstantPrjIdRelaEx_FuncMapPrjName(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_DataTypeName:
      return GCConstantPrjIdRelaEx_FuncMapDataTypeName(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_CsType:
      return GCConstantPrjIdRelaEx_FuncMapCsType(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_TypeScriptType:
      return GCConstantPrjIdRelaEx_FuncMapTypeScriptType(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_DataTypeId:
      return GCConstantPrjIdRelaEx_FuncMapDataTypeId(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_ConstName:
      return GCConstantPrjIdRelaEx_FuncMapConstName(objGCConstantPrjIdRelaEx);
    case clsGCConstantPrjIdRelaENEx.con_DateTimeSim:
      return GCConstantPrjIdRelaEx_FuncMapDateTimeSim(objGCConstantPrjIdRelaEx);
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
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapKeyPrjName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapKeyPrjName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.prjName) == true) return [];
    const ProjectsPrjName = objGCConstantPrjIdRela.prjName;
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
      gCConstantPrjIdRelaEx_ConstructorName,
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
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapKeyDataTypeName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapKeyDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dataTypeName) == true) return [];
    const DataTypeAbbrDataTypeName = objGCConstantPrjIdRela.dataTypeName;
    const arrDataTypeId = await DataTypeAbbr_funcKey(
      clsDataTypeAbbrEN.con_DataTypeName,
      DataTypeAbbrDataTypeName,
      enumComparisonOp.Like_03,
    );
    const strDataTypeIdLst = arrDataTypeId;
    const arrConstId = await GCDefaConstants_funcKey(
      clsGCDefaConstantsEN.con_DataTypeId,
      strDataTypeIdLst,
      enumComparisonOp.In_04,
    );
    return arrConstId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001134)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
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
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapKeyCsType(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapKeyCsType.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.csType) == true) return [];
    const DataTypeAbbrCsType = objGCConstantPrjIdRela.csType;
    const arrDataTypeId = await DataTypeAbbr_funcKey(
      clsDataTypeAbbrEN.con_CsType,
      DataTypeAbbrCsType,
      enumComparisonOp.Like_03,
    );
    const strDataTypeIdLst = arrDataTypeId;
    const arrConstId = await GCDefaConstants_funcKey(
      clsGCDefaConstantsEN.con_DataTypeId,
      strDataTypeIdLst,
      enumComparisonOp.In_04,
    );
    return arrConstId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001145)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
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
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapKeyDataTypeId(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapKeyDataTypeId.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dataTypeId) == true) return [];
    const GCDefaConstantsDataTypeId = objGCConstantPrjIdRela.dataTypeId;
    const arrConstId = await GCDefaConstants_funcKey(
      clsGCDefaConstantsEN.con_DataTypeId,
      GCDefaConstantsDataTypeId,
      enumComparisonOp.Like_03,
    );
    return arrConstId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001136)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
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
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapKeyTypeScriptType(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapKeyTypeScriptType.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.typeScriptType) == true) return [];
    const DataTypeAbbrTypeScriptType = objGCConstantPrjIdRela.typeScriptType;
    const arrDataTypeId = await DataTypeAbbr_funcKey(
      clsDataTypeAbbrEN.con_TypeScriptType,
      DataTypeAbbrTypeScriptType,
      enumComparisonOp.Like_03,
    );
    const strDataTypeIdLst = arrDataTypeId;
    const arrConstId = await GCDefaConstants_funcKey(
      clsGCDefaConstantsEN.con_DataTypeId,
      strDataTypeIdLst,
      enumComparisonOp.In_04,
    );
    return arrConstId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001148)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
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
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapKeyConstName(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapKeyConstName.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.constName) == true) return [];
    const GCDefaConstantsConstName = objGCConstantPrjIdRela.constName;
    const arrConstId = await GCDefaConstants_funcKey(
      clsGCDefaConstantsEN.con_ConstName,
      GCDefaConstantsConstName,
      enumComparisonOp.Like_03,
    );
    return arrConstId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001521)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
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
 * @param objGCConstantPrjIdRelaS:源对象
 **/
export async function GCConstantPrjIdRelaEx_FuncMapKeyDateTimeSim(
  objGCConstantPrjIdRela: clsGCConstantPrjIdRelaENEx,
): Promise<string> {
  const strThisFuncName = GCConstantPrjIdRelaEx_FuncMapKeyDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objGCConstantPrjIdRela.dateTimeSim) == true) return '';
    const GCConstantPrjIdRelaUpdDate = clsDateTime.GetDateTime_Sim(
      objGCConstantPrjIdRela.dateTimeSim,
    );
    return GCConstantPrjIdRelaUpdDate;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001041)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCConstantPrjIdRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
