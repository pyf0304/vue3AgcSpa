/**
 * 部门V2(QxDepartmentInfoV2)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxDepartmentInfoV2_GetObjLstCache,
  QxDepartmentInfoV2_GetObjLstAsync,
  QxDepartmentInfoV2_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoV2WApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxDepartmentInfoV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoV2EN';
import { clsQxDepartmentInfoV2ENEx } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoV2ENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const qxDepartmentInfoV2ExController = 'QxDepartmentInfoV2ExApi';
export const qxDepartmentInfoV2ExConstructorName = 'qxDepartmentInfoV2Ex';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxDepartmentInfoV2ExGetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxDepartmentInfoV2ENS:源对象
 * @returns 目标对象=>clsQxDepartmentInfoV2EN:objQxDepartmentInfoV2ENT
 **/
export function QxDepartmentInfoV2ExCopyToEx(
  objQxDepartmentInfoV2ENS: clsQxDepartmentInfoV2EN,
): clsQxDepartmentInfoV2ENEx {
  const strThisFuncName = QxDepartmentInfoV2ExCopyToEx.name;
  const objQxDepartmentInfoV2ENT = new clsQxDepartmentInfoV2ENEx();
  try {
    ObjectAssign(objQxDepartmentInfoV2ENT, objQxDepartmentInfoV2ENS);
    return objQxDepartmentInfoV2ENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxDepartmentInfoV2ExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxDepartmentInfoV2ENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxDepartmentInfoV2_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxDepartmentInfoV2ENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrQxDepartmentInfoV2ObjLst = await QxDepartmentInfoV2_GetObjLstCache();
  const arrQxDepartmentInfoV2ExObjLst = arrQxDepartmentInfoV2ObjLst.map(
    QxDepartmentInfoV2ExCopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxDepartmentInfoV2EN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxDepartmentInfoV2ExObjLst) {
      await QxDepartmentInfoV2Ex_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxDepartmentInfoV2ExObjLst.length == 0) return arrQxDepartmentInfoV2ExObjLst;
  let arrQxDepartmentInfoV2Sel: Array<clsQxDepartmentInfoV2ENEx> = arrQxDepartmentInfoV2ExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxDepartmentInfoV2Cond = new clsQxDepartmentInfoV2ENEx();
  ObjectAssign(objQxDepartmentInfoV2Cond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxDepartmentInfoV2WApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxDepartmentInfoV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrQxDepartmentInfoV2Sel.length == 0) return arrQxDepartmentInfoV2Sel;

    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.sort(
        QxDepartmentInfoV2Ex_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.sort(objPagerPara.sortFun);
    }

    return arrQxDepartmentInfoV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxDepartmentInfoV2ExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxDepartmentInfoV2ENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxDepartmentInfoV2_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxDepartmentInfoV2ENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxDepartmentInfoV2ObjLst = await QxDepartmentInfoV2_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrQxDepartmentInfoV2ExObjLst = arrQxDepartmentInfoV2ObjLst.map(
    QxDepartmentInfoV2ExCopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxDepartmentInfoV2EN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxDepartmentInfoV2ExObjLst) {
      await QxDepartmentInfoV2Ex_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxDepartmentInfoV2ExObjLst.length == 0) return arrQxDepartmentInfoV2ExObjLst;
  let arrQxDepartmentInfoV2Sel: Array<clsQxDepartmentInfoV2ENEx> = arrQxDepartmentInfoV2ExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.sort(
        QxDepartmentInfoV2Ex_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxDepartmentInfoV2Sel = arrQxDepartmentInfoV2Sel.sort(objPagerPara.sortFun);
    }

    return arrQxDepartmentInfoV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxDepartmentInfoV2ExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxDepartmentInfoV2ENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxDepartmentInfoV2Ex_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxDepartmentInfoV2_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxDepartmentInfoV2_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxDepartmentInfoV2Ex_FuncMapByFldName(
  strFldName: string,
  objQxDepartmentInfoV2Ex: clsQxDepartmentInfoV2ENEx,
) {
  const strThisFuncName = QxDepartmentInfoV2Ex_FuncMapByFldName.name;
  console.log(objQxDepartmentInfoV2Ex);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQxDepartmentInfoV2EN.AttributeName;
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
