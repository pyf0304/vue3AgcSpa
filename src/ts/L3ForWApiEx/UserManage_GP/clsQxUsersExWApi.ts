/**
 * 用户(QxUsers)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxUsers_GetObjLstCache,
  QxUsers_SortFunByKey,
  QxUsers_GetObjLstByPagerAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { clsQxUsersENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersENEx';
import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoEN';
import { clsQxDepartmentTypeEN } from '@/ts/L0Entity/SysPara/clsQxDepartmentTypeEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  QxDepartmentInfo_func,
  QxDepartmentInfo_funcKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoWApi';
import {
  QxDepartmentType_func,
  QxDepartmentType_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsQxDepartmentTypeWApi';
import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
export const qxUsersExController = 'QxUsersExApi';
export const qxUsersExConstructorName = 'qxUsersEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxUsersExGetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxUsersENS:源对象
 * @returns 目标对象=>clsQxUsersEN:objQxUsersENT
 **/
export function QxUsersExCopyToEx(objQxUsersENS: clsQxUsersEN): clsQxUsersENEx {
  const strThisFuncName = QxUsersExCopyToEx.name;
  const objQxUsersENT = new clsQxUsersENEx();
  try {
    ObjectAssign(objQxUsersENT, objQxUsersENS);
    return objQxUsersENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUsersENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUsers_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUsersENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrQxUsersObjLst = await QxUsers_GetObjLstCache();
  const arrQxUsersExObjLst = arrQxUsersObjLst.map(QxUsersExCopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxUsersEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxUsersExObjLst) {
      await QxUsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUsersExObjLst.length == 0) return arrQxUsersExObjLst;
  let arrQxUsersSel: Array<clsQxUsersENEx> = arrQxUsersExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxUsersCond = new clsQxUsersENEx();
  ObjectAssign(objQxUsersCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxUsersWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxUsersSel = arrQxUsersSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxUsersSel = arrQxUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxUsersSel.length == 0) return arrQxUsersSel;

    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUsersSel = arrQxUsersSel.sort(QxUsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxUsersSel = arrQxUsersSel.sort(objPagerPara.sortFun);
    }

    return arrQxUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUsersENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUsers_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUsersENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxUsersObjLst = await QxUsers_GetObjLstByPagerAsync(objPagerPara);
  const arrQxUsersExObjLst = arrQxUsersObjLst.map(QxUsersExCopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxUsersEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxUsersExObjLst) {
      await QxUsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUsersExObjLst.length == 0) return arrQxUsersExObjLst;
  let arrQxUsersSel: Array<clsQxUsersENEx> = arrQxUsersExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUsersSel = arrQxUsersSel.sort(QxUsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxUsersSel = arrQxUsersSel.sort(objPagerPara.sortFun);
    }

    return arrQxUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUsersENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersExFuncMapDepartmentName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersExFuncMapDepartmentName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentName) == true) {
      const QxDepartmentInfoDepartmentId = objQxUsers.departmentId;
      const QxDepartmentInfoDepartmentName = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentName,
        QxDepartmentInfoDepartmentId,
      );
      objQxUsers.departmentName = QxDepartmentInfoDepartmentName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000399)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersExFuncMapDepartmentTypeName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersExFuncMapDepartmentTypeName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeName) == true) {
      const QxDepartmentInfoDepartmentId = objQxUsers.departmentId;
      const QxDepartmentInfoDepartmentTypeId = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentTypeId,
        QxDepartmentInfoDepartmentId,
      );
      const QxDepartmentTypeDepartmentTypeId = QxDepartmentInfoDepartmentTypeId;
      const QxDepartmentTypeDepartmentTypeName = await QxDepartmentType_func(
        clsQxDepartmentTypeEN.con_DepartmentTypeId,
        clsQxDepartmentTypeEN.con_DepartmentTypeName,
        QxDepartmentTypeDepartmentTypeId,
      );
      objQxUsers.departmentTypeName = QxDepartmentTypeDepartmentTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000400)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersExFuncMapDepartmentTypeId(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersExFuncMapDepartmentTypeId.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeId) == true) {
      const QxDepartmentInfoDepartmentId = objQxUsers.departmentId;
      const QxDepartmentInfoDepartmentTypeId = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentTypeId,
        QxDepartmentInfoDepartmentId,
      );
      objQxUsers.departmentTypeId = QxDepartmentInfoDepartmentTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000401)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersExFuncMapDuUserName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersExFuncMapDuUserName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.duUserName) == true) {
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '用户名';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      spnStyle_Content.innerHTML = objQxUsers.userName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objQxUsers.duUserName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000402)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
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
export function QxUsersEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxUsersENEx.con_DepartmentName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.departmentName.localeCompare(b.departmentName);
        };
      case clsQxUsersENEx.con_DepartmentTypeId:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.departmentTypeId.localeCompare(b.departmentTypeId);
        };
      case clsQxUsersENEx.con_DepartmentTypeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.departmentTypeName.localeCompare(b.departmentTypeName);
        };
      case clsQxUsersENEx.con_DuUserName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.duUserName.localeCompare(b.duUserName);
        };
      default:
        return QxUsers_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxUsersENEx.con_DepartmentName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.departmentName.localeCompare(a.departmentName);
        };
      case clsQxUsersENEx.con_DepartmentTypeId:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.departmentTypeId.localeCompare(a.departmentTypeId);
        };
      case clsQxUsersENEx.con_DepartmentTypeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.departmentTypeName.localeCompare(a.departmentTypeName);
        };
      case clsQxUsersENEx.con_DuUserName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.duUserName.localeCompare(a.duUserName);
        };
      default:
        return QxUsers_SortFunByKey(strKey, AscOrDesc);
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
export function QxUsersEx_FuncMapByFldName(strFldName: string, objQxUsersEx: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapByFldName.name;
  console.log(objQxUsersEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsQxUsersEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxUsersENEx.con_DepartmentName:
      return QxUsersExFuncMapDepartmentName(objQxUsersEx);
    case clsQxUsersENEx.con_DepartmentTypeId:
      return QxUsersExFuncMapDepartmentTypeId(objQxUsersEx);
    case clsQxUsersENEx.con_DepartmentTypeName:
      return QxUsersExFuncMapDepartmentTypeName(objQxUsersEx);
    case clsQxUsersENEx.con_DuUserName:
      return QxUsersExFuncMapDuUserName(objQxUsersEx);
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersExFuncMapKeyDepartmentName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersExFuncMapKeyDepartmentName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentName) == true) return [];
    const QxDepartmentInfoDepartmentName = objQxUsers.departmentName;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentName,
      QxDepartmentInfoDepartmentName,
      enumComparisonOp.Like_03,
    );
    return arrDepartmentId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000399)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersExFuncMapKeyDepartmentTypeName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersExFuncMapKeyDepartmentTypeName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeName) == true) return [];
    const QxDepartmentTypeDepartmentTypeName = objQxUsers.departmentTypeName;
    const arrDepartmentTypeId = await QxDepartmentType_funcKey(
      clsQxDepartmentTypeEN.con_DepartmentTypeName,
      QxDepartmentTypeDepartmentTypeName,
      enumComparisonOp.Like_03,
    );
    const strDepartmentTypeIdLst = arrDepartmentTypeId;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentTypeId,
      strDepartmentTypeIdLst,
      enumComparisonOp.In_04,
    );
    return arrDepartmentId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000400)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersExFuncMapKeyDepartmentTypeId(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersExFuncMapKeyDepartmentTypeId.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeId) == true) return [];
    const QxDepartmentInfoDepartmentTypeId = objQxUsers.departmentTypeId;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentTypeId,
      QxDepartmentInfoDepartmentTypeId,
      enumComparisonOp.Like_03,
    );
    return arrDepartmentId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000401)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersExConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
