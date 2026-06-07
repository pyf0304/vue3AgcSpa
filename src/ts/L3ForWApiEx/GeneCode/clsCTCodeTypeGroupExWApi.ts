/**
 * 类名:clsCTCodeTypeGroupExWApi
 * 表名:CTCodeTypeGroup(00050648)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 03:40:34
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
 * CTCodeTypeGroup(CTCodeTypeGroup)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2026年06月06日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  CTCodeTypeGroup_GetObjLstCache,
  CTCodeTypeGroup_GetObjLstByPagerAsync,
  CTCodeTypeGroup_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { cTCodeTypeGroupCache, isFuncMapCache } from '@/views/GeneCode/CTCodeTypeGroupVueShare';
import { clsCTCodeTypeGroupENEx } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupENEx';
import {
  ApplicationType_func,
  ApplicationType_funcKey,
} from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { clsCTCodeTypeGroupEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const cTCodeTypeGroupEx_Controller = 'CTCodeTypeGroupExApi';
export const cTCodeTypeGroupEx_ConstructorName = 'cTCodeTypeGroupEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CTCodeTypeGroupEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objCTCodeTypeGroupENS:源对象
 * @returns 目标对象=>clsCTCodeTypeGroupEN:objCTCodeTypeGroupENT
 **/
export function CTCodeTypeGroupEx_CopyToEx(
  objCTCodeTypeGroupENS: clsCTCodeTypeGroupEN,
): clsCTCodeTypeGroupENEx {
  const strThisFuncName = CTCodeTypeGroupEx_CopyToEx.name;
  const objCTCodeTypeGroupENT = new clsCTCodeTypeGroupENEx();
  try {
    ObjectAssign(objCTCodeTypeGroupENT, objCTCodeTypeGroupENS);
    return objCTCodeTypeGroupENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroupEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCTCodeTypeGroupENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CTCodeTypeGroupEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCTCodeTypeGroupENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrCTCodeTypeGroupObjLst = await CTCodeTypeGroup_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsCTCodeTypeGroupENEx>();
  const arrCTCodeTypeGroupExObjLst = arrCTCodeTypeGroupObjLst.map((obj) => {
    const cacheKey = `${obj.ctGroupId}`;
    if (cTCodeTypeGroupCache[cacheKey]) {
      const oldObj = cTCodeTypeGroupCache[cacheKey];
      return oldObj;
    } else {
      const newObj = CTCodeTypeGroupEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      cTCodeTypeGroupCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await CTCodeTypeGroupEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCTCodeTypeGroupEN._AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrCTCodeTypeGroupExObjLst) {
      await CTCodeTypeGroupEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.ctGroupId}`;
      cTCodeTypeGroupCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrCTCodeTypeGroupExObjLst.length == 0) return arrCTCodeTypeGroupExObjLst;
  let arrCTCodeTypeGroupSel: Array<clsCTCodeTypeGroupENEx> = arrCTCodeTypeGroupExObjLst;
  const objCTCodeTypeGroupCond = objPagerPara.conditionCollection;
  if (objCTCodeTypeGroupCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrCTCodeTypeGroupExObjLst;
  }
  try {
    for (const objCondition of objCTCodeTypeGroupCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCTCodeTypeGroupSel.length == 0) return arrCTCodeTypeGroupSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(
        CTCodeTypeGroupEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(objPagerPara.sortFun);
    }
    arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.slice(intStart, intEnd);
    return arrCTCodeTypeGroupSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cTCodeTypeGroupEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCTCodeTypeGroupENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CTCodeTypeGroupEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCTCodeTypeGroupENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCTCodeTypeGroupObjLst = await CTCodeTypeGroup_GetObjLstByPagerAsync(objPagerPara);
  const arrCTCodeTypeGroupExObjLst = arrCTCodeTypeGroupObjLst.map(CTCodeTypeGroupEx_CopyToEx);
  if (arrCTCodeTypeGroupExObjLst.length == 0) return arrCTCodeTypeGroupExObjLst;
  let arrCTCodeTypeGroupSel: Array<clsCTCodeTypeGroupENEx> = arrCTCodeTypeGroupExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(
        CTCodeTypeGroupEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCTCodeTypeGroupSel = arrCTCodeTypeGroupSel.sort(objPagerPara.sortFun);
    }
    const intPageSize =
      objPagerPara.pageSize > 0 ? objPagerPara.pageSize : arrCTCodeTypeGroupSel.length;
    const intPageIndex = objPagerPara.pageIndex > 0 ? objPagerPara.pageIndex : 1;
    const intStartIndex = (intPageIndex - 1) * intPageSize;
    const intEndIndex = intStartIndex + intPageSize;
    return arrCTCodeTypeGroupSel.slice(intStartIndex, intEndIndex);
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cTCodeTypeGroupEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCTCodeTypeGroupENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCTCodeTypeGroupS:源对象
 **/
export async function CTCodeTypeGroupEx_FuncMapApplicationTypeName(
  objCTCodeTypeGroup: clsCTCodeTypeGroupENEx,
) {
  const strThisFuncName = CTCodeTypeGroupEx_FuncMapApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCTCodeTypeGroup.applicationTypeName) == true) {
      const ApplicationTypeApplicationTypeId = objCTCodeTypeGroup.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationTypeApplicationTypeId,
      );
      objCTCodeTypeGroup.applicationTypeName = ApplicationTypeApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001197)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroupEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CTCodeTypeGroupEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCTCodeTypeGroupENEx.con_ApplicationTypeName:
        return (a: clsCTCodeTypeGroupENEx, b: clsCTCodeTypeGroupENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      default:
        return CTCodeTypeGroup_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCTCodeTypeGroupENEx.con_ApplicationTypeName:
        return (a: clsCTCodeTypeGroupENEx, b: clsCTCodeTypeGroupENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      default:
        return CTCodeTypeGroup_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CTCodeTypeGroupEx_FuncMapByFldName(
  strFldName: string,
  objCTCodeTypeGroupEx: clsCTCodeTypeGroupENEx,
) {
  const strThisFuncName = CTCodeTypeGroupEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCTCodeTypeGroupEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCTCodeTypeGroupENEx.con_ApplicationTypeName:
      return CTCodeTypeGroupEx_FuncMapApplicationTypeName(objCTCodeTypeGroupEx);
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
 * @param objCTCodeTypeGroupS:源对象
 **/
export async function CTCodeTypeGroupEx_FuncMapKeyApplicationTypeName(
  objCTCodeTypeGroup: clsCTCodeTypeGroupENEx,
): Promise<Array<number>> {
  const strThisFuncName = CTCodeTypeGroupEx_FuncMapKeyApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCTCodeTypeGroup.applicationTypeName) == true) return [];
    const ApplicationTypeApplicationTypeName = objCTCodeTypeGroup.applicationTypeName;
    const arrApplicationTypeId = await ApplicationType_funcKey(
      clsApplicationTypeEN.con_ApplicationTypeName,
      ApplicationTypeApplicationTypeName,
      enumComparisonOp.Like_03,
    );
    return arrApplicationTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001199)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cTCodeTypeGroupEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
