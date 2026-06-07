/**
 * 类名:clsGC_CodeTypeRelationExWApi
 * 表名:GC_CodeTypeRelation(00050646)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 06:04:48
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GC_代码类型关系(GC_CodeTypeRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2026年06月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsGC_CodeTypeRelationENEx } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationENEx';
import {
  GC_CodeTypeRelation_GetObjLstByPagerAsync,
  GC_CodeTypeRelation_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsGC_CodeTypeRelationWApi';
import {
  vCodeType_Sim_func,
  vCodeType_Sim_funcKey,
} from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import {
  CTRelationType_func,
  CTRelationType_funcKey,
} from '@/ts/L3ForWApi/GeneCode/clsCTRelationTypeWApi';
import { clsCTRelationTypeEN } from '@/ts/L0Entity/GeneCode/clsCTRelationTypeEN';
import { clsGC_CodeTypeRelationEN } from '@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gC_CodeTypeRelationEx_Controller = 'GC_CodeTypeRelationExApi';
export const gC_CodeTypeRelationEx_ConstructorName = 'gC_CodeTypeRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function GC_CodeTypeRelationEx_GetWebApiUrl(
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
 * @param objGC_CodeTypeRelationENS:源对象
 * @returns 目标对象=>clsGC_CodeTypeRelationEN:objGC_CodeTypeRelationENT
 **/
export function GC_CodeTypeRelationEx_CopyToEx(
  objGC_CodeTypeRelationENS: clsGC_CodeTypeRelationEN,
): clsGC_CodeTypeRelationENEx {
  const strThisFuncName = GC_CodeTypeRelationEx_CopyToEx.name;
  const objGC_CodeTypeRelationENT = new clsGC_CodeTypeRelationENEx();
  try {
    ObjectAssign(objGC_CodeTypeRelationENT, objGC_CodeTypeRelationENS);
    return objGC_CodeTypeRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGC_CodeTypeRelationENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GC_CodeTypeRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGC_CodeTypeRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrGC_CodeTypeRelationObjLst = await GC_CodeTypeRelation_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrGC_CodeTypeRelationExObjLst = arrGC_CodeTypeRelationObjLst.map(
    GC_CodeTypeRelationEx_CopyToEx,
  );
  if (arrGC_CodeTypeRelationExObjLst.length == 0) return arrGC_CodeTypeRelationExObjLst;
  let arrGC_CodeTypeRelationSel: Array<clsGC_CodeTypeRelationENEx> = arrGC_CodeTypeRelationExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGC_CodeTypeRelationSel = arrGC_CodeTypeRelationSel.sort(
        GC_CodeTypeRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGC_CodeTypeRelationSel = arrGC_CodeTypeRelationSel.sort(objPagerPara.sortFun);
    }
    const intPageSize =
      objPagerPara.pageSize > 0 ? objPagerPara.pageSize : arrGC_CodeTypeRelationSel.length;
    const intPageIndex = objPagerPara.pageIndex > 0 ? objPagerPara.pageIndex : 1;
    const intStartIndex = (intPageIndex - 1) * intPageSize;
    const intEndIndex = intStartIndex + intPageSize;
    return arrGC_CodeTypeRelationSel.slice(intStartIndex, intEndIndex);
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gC_CodeTypeRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGC_CodeTypeRelationENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapChildCodeTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapChildCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.childCodeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objGC_CodeTypeRelation.childCodeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objGC_CodeTypeRelation.childCodeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001529)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapArrowType(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapArrowType.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.arrowType) == true) {
      const CTRelationTypeCTRelationTypeId = objGC_CodeTypeRelation.ctRelationTypeId;
      const CTRelationTypeArrowType = await CTRelationType_func(
        clsCTRelationTypeEN.con_CtRelationTypeId,
        clsCTRelationTypeEN.con_ArrowType,
        CTRelationTypeCTRelationTypeId,
      );
      objGC_CodeTypeRelation.arrowType = CTRelationTypeArrowType;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001530)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapRelationTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapRelationTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.relationTypeName) == true) {
      const CTRelationTypeCTRelationTypeId = objGC_CodeTypeRelation.ctRelationTypeId;
      const CTRelationTypeRelationTypeName = await CTRelationType_func(
        clsCTRelationTypeEN.con_CtRelationTypeId,
        clsCTRelationTypeEN.con_RelationTypeName,
        CTRelationTypeCTRelationTypeId,
      );
      objGC_CodeTypeRelation.relationTypeName = CTRelationTypeRelationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001531)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapParentCodeTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapParentCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.parentCodeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objGC_CodeTypeRelation.parentCodeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objGC_CodeTypeRelation.parentCodeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001532)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GC_CodeTypeRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return a.childCodeTypeName.localeCompare(b.childCodeTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ArrowType:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.arrowType === null && b.arrowType === null) return 0;
          if (a.arrowType === null) return -1;
          if (b.arrowType === null) return 1;
          return a.arrowType.localeCompare(b.arrowType);
        };
      case clsGC_CodeTypeRelationENEx.con_RelationTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.relationTypeName === null && b.relationTypeName === null) return 0;
          if (a.relationTypeName === null) return -1;
          if (b.relationTypeName === null) return 1;
          return a.relationTypeName.localeCompare(b.relationTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return a.parentCodeTypeName.localeCompare(b.parentCodeTypeName);
        };
      default:
        return GC_CodeTypeRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return b.childCodeTypeName.localeCompare(a.childCodeTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ArrowType:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.arrowType === null && b.arrowType === null) return 0;
          if (a.arrowType === null) return 1;
          if (b.arrowType === null) return -1;
          return b.arrowType.localeCompare(a.arrowType);
        };
      case clsGC_CodeTypeRelationENEx.con_RelationTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          if (a.relationTypeName === null && b.relationTypeName === null) return 0;
          if (a.relationTypeName === null) return 1;
          if (b.relationTypeName === null) return -1;
          return b.relationTypeName.localeCompare(a.relationTypeName);
        };
      case clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName:
        return (a: clsGC_CodeTypeRelationENEx, b: clsGC_CodeTypeRelationENEx) => {
          return b.parentCodeTypeName.localeCompare(a.parentCodeTypeName);
        };
      default:
        return GC_CodeTypeRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GC_CodeTypeRelationEx_FuncMapByFldName(
  strFldName: string,
  objGC_CodeTypeRelationEx: clsGC_CodeTypeRelationENEx,
) {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGC_CodeTypeRelationEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName:
      return GC_CodeTypeRelationEx_FuncMapChildCodeTypeName(objGC_CodeTypeRelationEx);
    case clsGC_CodeTypeRelationENEx.con_ArrowType:
      return GC_CodeTypeRelationEx_FuncMapArrowType(objGC_CodeTypeRelationEx);
    case clsGC_CodeTypeRelationENEx.con_RelationTypeName:
      return GC_CodeTypeRelationEx_FuncMapRelationTypeName(objGC_CodeTypeRelationEx);
    case clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName:
      return GC_CodeTypeRelationEx_FuncMapParentCodeTypeName(objGC_CodeTypeRelationEx);
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
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapKeyChildCodeTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapKeyChildCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.childCodeTypeName) == true) return [];
    const vCodeTypeSimCodeTypeName = objGC_CodeTypeRelation.childCodeTypeName;
    const arrChildCodeTypeId = await vCodeType_Sim_funcKey(
      clsvCodeType_SimEN.con_CodeTypeName,
      vCodeTypeSimCodeTypeName,
      enumComparisonOp.Like_03,
    );
    return arrChildCodeTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001533)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
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
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapKeyArrowType(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapKeyArrowType.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.arrowType) == true) return [];
    const CTRelationTypeArrowType = objGC_CodeTypeRelation.arrowType;
    const arrCtRelationTypeId = await CTRelationType_funcKey(
      clsCTRelationTypeEN.con_ArrowType,
      CTRelationTypeArrowType,
      enumComparisonOp.Like_03,
    );
    return arrCtRelationTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
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
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapKeyRelationTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapKeyRelationTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.relationTypeName) == true) return [];
    const CTRelationTypeRelationTypeName = objGC_CodeTypeRelation.relationTypeName;
    const arrCtRelationTypeId = await CTRelationType_funcKey(
      clsCTRelationTypeEN.con_RelationTypeName,
      CTRelationTypeRelationTypeName,
      enumComparisonOp.Like_03,
    );
    return arrCtRelationTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
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
 * @param objGC_CodeTypeRelationS:源对象
 **/
export async function GC_CodeTypeRelationEx_FuncMapKeyParentCodeTypeName(
  objGC_CodeTypeRelation: clsGC_CodeTypeRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = GC_CodeTypeRelationEx_FuncMapKeyParentCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objGC_CodeTypeRelation.parentCodeTypeName) == true) return [];
    const vCodeTypeSimCodeTypeName = objGC_CodeTypeRelation.parentCodeTypeName;
    const arrParentCodeTypeId = await vCodeType_Sim_funcKey(
      clsvCodeType_SimEN.con_CodeTypeName,
      vCodeTypeSimCodeTypeName,
      enumComparisonOp.Like_03,
    );
    return arrParentCodeTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001536)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gC_CodeTypeRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
