/**
 * 类名:clsPrjFileTypeExWApi
 * 表名:PrjFileType(00050649)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 04:45:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程文件类型(PrjFileType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2026年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import {
  PrjFileType_GetObjLstCache,
  PrjFileType_GetObjLstByPagerAsync,
  PrjFileType_SortFunByKey,
} from '@/ts/L3ForWApi/ResourceMan/clsPrjFileTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { prjFileTypeCache, isFuncMapCache } from '@/views/ResourceMan/PrjFileTypeVueShare';
import { clsPrjFileTypeENEx } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeENEx';
import { clsPrjFileTypeEN } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const prjFileTypeEx_Controller = 'PrjFileTypeExApi';
export const prjFileTypeEx_ConstructorName = 'prjFileTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PrjFileTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objPrjFileTypeENS:源对象
 * @returns 目标对象=>clsPrjFileTypeEN:objPrjFileTypeENT
 **/
export function PrjFileTypeEx_CopyToEx(objPrjFileTypeENS: clsPrjFileTypeEN): clsPrjFileTypeENEx {
  const strThisFuncName = PrjFileTypeEx_CopyToEx.name;
  const objPrjFileTypeENT = new clsPrjFileTypeENEx();
  try {
    ObjectAssign(objPrjFileTypeENT, objPrjFileTypeENS);
    return objPrjFileTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjFileTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjFileTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjFileTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjFileTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrPrjFileTypeObjLst = await PrjFileType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsPrjFileTypeENEx>();
  const arrPrjFileTypeExObjLst = arrPrjFileTypeObjLst.map((obj) => {
    const cacheKey = `${obj.prjFileTypeId}`;
    if (prjFileTypeCache[cacheKey]) {
      const oldObj = prjFileTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = PrjFileTypeEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      prjFileTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await PrjFileTypeEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjFileTypeEN._AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrPrjFileTypeExObjLst) {
      await PrjFileTypeEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.prjFileTypeId}`;
      prjFileTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrPrjFileTypeExObjLst.length == 0) return arrPrjFileTypeExObjLst;
  let arrPrjFileTypeSel: Array<clsPrjFileTypeENEx> = arrPrjFileTypeExObjLst;
  const objPrjFileTypeCond = objPagerPara.conditionCollection;
  if (objPrjFileTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrPrjFileTypeExObjLst;
  }
  try {
    for (const objCondition of objPrjFileTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjFileTypeSel.length == 0) return arrPrjFileTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(
        PrjFileTypeEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrjFileTypeSel = arrPrjFileTypeSel.slice(intStart, intEnd);
    return arrPrjFileTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjFileTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFileTypeENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjFileTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjFileTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPrjFileTypeObjLst = await PrjFileType_GetObjLstByPagerAsync(objPagerPara);
  const arrPrjFileTypeExObjLst = arrPrjFileTypeObjLst.map(PrjFileTypeEx_CopyToEx);
  if (arrPrjFileTypeExObjLst.length == 0) return arrPrjFileTypeExObjLst;
  let arrPrjFileTypeSel: Array<clsPrjFileTypeENEx> = arrPrjFileTypeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(
        PrjFileTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(objPagerPara.sortFun);
    }
    const intPageSize =
      objPagerPara.pageSize > 0 ? objPagerPara.pageSize : arrPrjFileTypeSel.length;
    const intPageIndex = objPagerPara.pageIndex > 0 ? objPagerPara.pageIndex : 1;
    const intStartIndex = (intPageIndex - 1) * intPageSize;
    const intEndIndex = intStartIndex + intPageSize;
    return arrPrjFileTypeSel.slice(intStartIndex, intEndIndex);
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjFileTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFileTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFileTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PrjFileType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PrjFileType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjFileTypeEx_FuncMapByFldName(
  strFldName: string,
  objPrjFileTypeEx: clsPrjFileTypeENEx,
) {
  const strThisFuncName = PrjFileTypeEx_FuncMapByFldName.name;
  console.log(objPrjFileTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjFileTypeEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}
