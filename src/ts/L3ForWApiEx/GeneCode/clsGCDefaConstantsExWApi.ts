/**
 * 类名:clsGCDefaConstantsExWApi
 * 表名:GCDefaConstants(00050640)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/18 00:30:52
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
 * GC常量(GCDefaConstants)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年06月18日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  GCDefaConstants_GetObjLstCache,
  GCDefaConstants_GetObjLstByPagerAsync,
  GCDefaConstants_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsGCDefaConstantsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { gCDefaConstantsCache, isFuncMapCache } from '@/views/GeneCode/GCDefaConstantsVueShare';
import { clsGCDefaConstantsENEx } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsENEx';
import {
  DataTypeAbbr_func,
  DataTypeAbbr_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const gCDefaConstantsEx_Controller = 'GCDefaConstantsExApi';
export const gCDefaConstantsEx_ConstructorName = 'gCDefaConstantsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function GCDefaConstantsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objGCDefaConstantsENS:源对象
 * @returns 目标对象=>clsGCDefaConstantsEN:objGCDefaConstantsENT
 **/
export function GCDefaConstantsEx_CopyToEx(
  objGCDefaConstantsENS: clsGCDefaConstantsEN,
): clsGCDefaConstantsENEx {
  const strThisFuncName = GCDefaConstantsEx_CopyToEx.name;
  const objGCDefaConstantsENT = new clsGCDefaConstantsENEx();
  try {
    ObjectAssign(objGCDefaConstantsENT, objGCDefaConstantsENS);
    return objGCDefaConstantsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCDefaConstantsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCDefaConstantsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GCDefaConstantsEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCDefaConstantsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrGCDefaConstantsObjLst = await GCDefaConstants_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsGCDefaConstantsENEx>();
  const arrGCDefaConstantsExObjLst = arrGCDefaConstantsObjLst.map((obj) => {
    const cacheKey = `${obj.constId}`;
    if (gCDefaConstantsCache[cacheKey]) {
      const oldObj = gCDefaConstantsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = GCDefaConstantsEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      gCDefaConstantsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await GCDefaConstantsEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCDefaConstantsEN._AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrGCDefaConstantsExObjLst) {
      await GCDefaConstantsEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.constId}`;
      gCDefaConstantsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrGCDefaConstantsExObjLst.length == 0) return arrGCDefaConstantsExObjLst;
  let arrGCDefaConstantsSel: Array<clsGCDefaConstantsENEx> = arrGCDefaConstantsExObjLst;
  const objGCDefaConstantsCond = objPagerPara.conditionCollection;
  if (objGCDefaConstantsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrGCDefaConstantsExObjLst;
  }
  try {
    for (const objCondition of objGCDefaConstantsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCDefaConstantsSel.length == 0) return arrGCDefaConstantsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(
        GCDefaConstantsEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(objPagerPara.sortFun);
    }
    arrGCDefaConstantsSel = arrGCDefaConstantsSel.slice(intStart, intEnd);
    return arrGCDefaConstantsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCDefaConstantsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCDefaConstantsENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GCDefaConstantsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCDefaConstantsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrGCDefaConstantsObjLst = await GCDefaConstants_GetObjLstByPagerAsync(objPagerPara);
  const arrGCDefaConstantsExObjLst = arrGCDefaConstantsObjLst.map(GCDefaConstantsEx_CopyToEx);
  if (arrGCDefaConstantsExObjLst.length == 0) return arrGCDefaConstantsExObjLst;
  let arrGCDefaConstantsSel: Array<clsGCDefaConstantsENEx> = arrGCDefaConstantsExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(
        GCDefaConstantsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(objPagerPara.sortFun);
    }
    return arrGCDefaConstantsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCDefaConstantsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCDefaConstantsENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objGCDefaConstantsS:源对象
 **/
export async function GCDefaConstantsEx_FuncMapDataTypeName(
  objGCDefaConstants: clsGCDefaConstantsENEx,
) {
  const strThisFuncName = GCDefaConstantsEx_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCDefaConstants.dataTypeName) == true) {
      const DataTypeAbbrDataTypeId = objGCDefaConstants.dataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objGCDefaConstants.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001125)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCDefaConstantsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCDefaConstantsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCDefaConstantsENEx.con_ConstNameEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constNameEx === null && b.constNameEx === null) return 0;
          if (a.constNameEx === null) return -1;
          if (b.constNameEx === null) return 1;
          return a.constNameEx.localeCompare(b.constNameEx);
        };
      case clsGCDefaConstantsENEx.con_ConstExpressionEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constExpressionEx === null && b.constExpressionEx === null) return 0;
          if (a.constExpressionEx === null) return -1;
          if (b.constExpressionEx === null) return 1;
          return a.constExpressionEx.localeCompare(b.constExpressionEx);
        };
      case clsGCDefaConstantsENEx.con_PrjName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCDefaConstantsENEx.con_DataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCDefaConstantsENEx.con_DuFilePath:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.duFilePath.localeCompare(b.duFilePath);
        };
      case clsGCDefaConstantsENEx.con_DuClassName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.duClassName.localeCompare(b.duClassName);
        };
      case clsGCDefaConstantsENEx.con_DuDataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.duDataTypeName === null && b.duDataTypeName === null) return 0;
          if (a.duDataTypeName === null) return -1;
          if (b.duDataTypeName === null) return 1;
          return a.duDataTypeName.localeCompare(b.duDataTypeName);
        };
      case clsGCDefaConstantsENEx.con_PrjId:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        return GCDefaConstants_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCDefaConstantsENEx.con_ConstNameEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constNameEx === null && b.constNameEx === null) return 0;
          if (a.constNameEx === null) return 1;
          if (b.constNameEx === null) return -1;
          return b.constNameEx.localeCompare(a.constNameEx);
        };
      case clsGCDefaConstantsENEx.con_ConstExpressionEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constExpressionEx === null && b.constExpressionEx === null) return 0;
          if (a.constExpressionEx === null) return 1;
          if (b.constExpressionEx === null) return -1;
          return b.constExpressionEx.localeCompare(a.constExpressionEx);
        };
      case clsGCDefaConstantsENEx.con_PrjName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCDefaConstantsENEx.con_DataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCDefaConstantsENEx.con_DuFilePath:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.duFilePath.localeCompare(a.duFilePath);
        };
      case clsGCDefaConstantsENEx.con_DuClassName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.duClassName.localeCompare(a.duClassName);
        };
      case clsGCDefaConstantsENEx.con_DuDataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.duDataTypeName === null && b.duDataTypeName === null) return 0;
          if (a.duDataTypeName === null) return 1;
          if (b.duDataTypeName === null) return -1;
          return b.duDataTypeName.localeCompare(a.duDataTypeName);
        };
      case clsGCDefaConstantsENEx.con_PrjId:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        return GCDefaConstants_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCDefaConstantsEx_FuncMapByFldName(
  strFldName: string,
  objGCDefaConstantsEx: clsGCDefaConstantsENEx,
) {
  const strThisFuncName = GCDefaConstantsEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCDefaConstantsEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCDefaConstantsENEx.con_DataTypeName:
      return GCDefaConstantsEx_FuncMapDataTypeName(objGCDefaConstantsEx);
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
 * @param objGCDefaConstantsS:源对象
 **/
export async function GCDefaConstantsEx_FuncMapKeyDataTypeName(
  objGCDefaConstants: clsGCDefaConstantsENEx,
): Promise<Array<string>> {
  const strThisFuncName = GCDefaConstantsEx_FuncMapKeyDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCDefaConstants.dataTypeName) == true) return [];
    const DataTypeAbbrDataTypeName = objGCDefaConstants.dataTypeName;
    const arrDataTypeId = await DataTypeAbbr_funcKey(
      clsDataTypeAbbrEN.con_DataTypeName,
      DataTypeAbbrDataTypeName,
      enumComparisonOp.Like_03,
    );
    return arrDataTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001134)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCDefaConstantsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
