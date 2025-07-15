import axios from 'axios';
import { vPrjTab_SimEx_func } from './clsvPrjTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { clsConstraintTypeEN } from '@/ts/L0Entity/Table_Field/clsConstraintTypeEN';
import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';
import { clsPrjConstraintENEx } from '@/ts/L0Entity/Table_Field/clsPrjConstraintENEx';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { ConstraintType_func } from '@/ts/L3ForWApi/Table_Field/clsConstraintTypeWApi';
import {
  PrjConstraint_GetObjLstByPagerAsync,
  PrjConstraint_SortFunByKey,
} from '@/ts/L3ForWApi/Table_Field/clsPrjConstraintWApi';
import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { BindTab, ObjectAssign, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetBr_Empty,
  GetDivObjInDivObj,
  GetDiv_Empty,
  GetSpan_Empty,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPager } from '@/ts/PubFun/clsPager';
import { clsOperateList } from '@/ts/PubFun/clsOperateList';
import { stuPager } from '@/ts/PubFun/stuPager';
import { useConstraintFieldsStore } from '@/store/modules/constraintFields';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
// import { Dictionary } from '@/ts/PubFun/tzDictionary';

export const prjConstraintEx_Controller = 'PrjConstraintExApi';
export const prjConstraintEx_ConstructorName = 'prjConstraintEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objPrjConstraintENS">源对象</param>
/// <param name = "objPrjConstraintENT">目标对象</param>
export function PrjConstraintEx_CopyToEx(
  objPrjConstraintENS: clsPrjConstraintEN,
): clsPrjConstraintENEx {
  const objPrjConstraintENT = new clsPrjConstraintENEx();
  try {
    ObjectAssign(objPrjConstraintENT, objPrjConstraintENS);
    return objPrjConstraintENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objPrjConstraintENT;
  }
}

/// <summary>
/// 扩展删除表约束
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strPrjConstraintId">表约束Id</param>
/// <param name = "strPrjId">工程Id</param>
/// <returns>获取的相应对象列表</returns>
export async function PrjConstraintEx_DelRecordEx(
  strPrjConstraintId: string,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = PrjConstraintEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = GetWebApiUrl(prjConstraintEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  // mapParam.add('strPrjConstraintId', strPrjConstraintId);
  // mapParam.add('strPrjId', strPrjId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjConstraintId,
      strPrjId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        prjConstraintEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjConstraintEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 排序函数。根据关键字字段的值进行比较
/// 作者:pyf
/// 日期:20210322172440
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
/// </summary>
/// <param name = "a">比较的第1个对象</param>
/// <param name = "b">比较的第1个对象</param>
/// <returns>返回两个对象比较的结果</returns>
export function PrjConstraintEx_SortFunByConstraintName(
  a: clsPrjConstraintEN,
  b: clsPrjConstraintEN,
): number {
  return a.constraintName.localeCompare(b.constraintName);
}

// export async function PrjConstraintEx_GetObjLstByTabIdCache(strPrjId: string, strTabId: string) {
//   const arrPrjConstraint = await PrjConstraint_GetObjLstCache(strPrjId);
//   const arrPrjConstraint_TabId = arrPrjConstraint.filter((x) => x.tabId == strTabId);
//   return arrPrjConstraint_TabId;
// }

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjConstraintEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjConstraintENEx.con_TabName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsPrjConstraintENEx.con_ConstraintTypeName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.constraintTypeName.localeCompare(b.constraintTypeName);
        };
      case clsPrjConstraintENEx.con_PrjName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      default:
        return PrjConstraint_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjConstraintENEx.con_TabName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsPrjConstraintENEx.con_ConstraintTypeName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.constraintTypeName.localeCompare(a.constraintTypeName);
        };
      case clsPrjConstraintENEx.con_PrjName:
        return (a: clsPrjConstraintENEx, b: clsPrjConstraintENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      default:
        return PrjConstraint_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjConstraintEx_FuncMapByFldName(
  strFldName: string,
  objPrjConstraintEx: clsPrjConstraintENEx,
) {
  const strThisFuncName = PrjConstraintEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPrjConstraintEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjConstraintENEx.con_TabName:
      return PrjConstraintEx_FuncMap_TabName(objPrjConstraintEx);
    case clsPrjConstraintENEx.con_ConstraintTypeName:
      return PrjConstraintEx_FuncMap_ConstraintTypeName(objPrjConstraintEx);
    case clsPrjConstraintENEx.con_PrjName:
      return PrjConstraintEx_FuncMap_PrjName(objPrjConstraintEx);
    case clsPrjConstraintENEx.con_FldNames:
      return PrjConstraintEx_FuncMapFldNames(objPrjConstraintEx);
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjConstraintS:源对象
 **/
export async function PrjConstraintEx_FuncMap_TabName(objPrjConstraint: clsPrjConstraintENEx) {
  const strThisFuncName = PrjConstraintEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objPrjConstraint.tabName) == true) {
      const vPrjTab_Sim_TabId = objPrjConstraint.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objPrjConstraint.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjConstraintEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjConstraintS:源对象
 **/
export async function PrjConstraintEx_FuncMap_ConstraintTypeName(
  objPrjConstraint: clsPrjConstraintENEx,
) {
  const strThisFuncName = PrjConstraintEx_FuncMap_ConstraintTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjConstraint.constraintTypeName) == true) {
      const ConstraintType_ConstraintTypeId = objPrjConstraint.constraintTypeId;
      const ConstraintType_ConstraintTypeName = await ConstraintType_func(
        clsConstraintTypeEN.con_ConstraintTypeId,
        clsConstraintTypeEN.con_ConstraintTypeName,
        ConstraintType_ConstraintTypeId,
      );
      objPrjConstraint.constraintTypeName = ConstraintType_ConstraintTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000095)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjConstraintEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objPrjConstraintS:源对象
 **/
export async function PrjConstraintEx_FuncMap_PrjName(objPrjConstraint: clsPrjConstraintENEx) {
  const strThisFuncName = PrjConstraintEx_FuncMap_PrjName.name;
  try {
    if (IsNullOrEmpty(objPrjConstraint.prjName) == true) {
      const Projects_PrjId = objPrjConstraint.prjId;
      const Projects_PrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        Projects_PrjId,
      );
      objPrjConstraint.prjName = Projects_PrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000086)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjConstraintEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/** 显示PrjConstraint对象的所有属性值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrPrjConstraintObjLst:需要绑定的对象列表
 **/
export async function PrjConstraintEx_BindTab_PrjConstraint(
  divContainer: HTMLDivElement,
  arrPrjConstraintObjLst: Array<clsPrjConstraintEN>,
  objOperateList: clsOperateList,
  myStuPaper: stuPager,
) {
  if (divContainer == null) {
    alert(Format('{0}不存在!', divContainer));
    return;
  }
  const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
  const arrDataColumn: Array<clsDataColumn> = [
    {
      fldName: '',
      sortBy: '',
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '',
      text: '',
      tdClass: 'text-left',
      columnType: 'CheckBox',
      orderNum: 1,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_PrjConstraintId,
      sortBy: clsPrjConstraintEN.con_PrjConstraintId,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '约束表Id',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 2,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_ConstraintName,
      sortBy: clsPrjConstraintEN.con_ConstraintName,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '约束表名称',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 3,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintENEx.con_TabName,
      sortBy: 'tabName',
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '表名',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 4,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintENEx.con_ConstraintTypeName,
      sortBy: 'constraintTypeName',
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '约束类型名',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 5,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_CreateUserId,
      sortBy: clsPrjConstraintEN.con_CreateUserId,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '建立用户Id',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 6,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_InUse,
      sortBy: clsPrjConstraintEN.con_InUse,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '是否在用',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 7,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_UpdDate,
      sortBy: clsPrjConstraintEN.con_UpdDate,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '修改日期',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 8,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_UpdUser,
      sortBy: clsPrjConstraintEN.con_UpdUser,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '修改者',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 9,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_Memo,
      sortBy: clsPrjConstraintEN.con_Memo,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '说明',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 10,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
  ];
  await BindTab(
    divDataLst,
    arrPrjConstraintObjLst,
    arrDataColumn,
    clsPrjConstraintEN.con_PrjConstraintId,
    objOperateList,
  );
  const objPager = new clsPager(objOperateList);
  if (objPager.IsInit(divContainer, myStuPaper.divName4Pager) == false)
    objPager.InitShow(divContainer, myStuPaper.divName4Pager);
  objPager.recCount = myStuPaper.recCount;
  objPager.pageSize = myStuPaper.pageSize;
  objPager.ShowPagerV2(divContainer, objOperateList, myStuPaper.divName4Pager);
}

/** 显示PrjConstraint对象的所有属性值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrPrjConstraintExObjLst:需要绑定的对象列表
 **/
export async function PrjConstraintEx_BindTab_PrjConstraint4Func(
  divContainer: HTMLDivElement,
  arrPrjConstraintExObjLst: Array<clsPrjConstraintENEx>,
  objOperateList: clsOperateList,
  myStuPaper: stuPager,
) {
  const strThisFuncName = PrjConstraintEx_BindTab_PrjConstraint4Func.name;
  if (divContainer == null) {
    alert(Format('{0}不存在!', divContainer));
    return;
  }
  const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
  const arrDataColumn: Array<clsDataColumn> = [
    {
      fldName: '',
      sortBy: '',
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '',
      text: '',
      tdClass: 'text-left',
      columnType: 'CheckBox',
      orderNum: 1,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_PrjConstraintId,
      sortBy: clsPrjConstraintEN.con_PrjConstraintId,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '约束表Id',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 2,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_ConstraintName,
      sortBy: clsPrjConstraintEN.con_ConstraintName,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '约束表名称',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 3,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintENEx.con_FldNames,
      sortBy: clsPrjConstraintENEx.con_FldNames,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '相关字段',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 3,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintENEx.con_TabName,
      sortBy: 'tabName',
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '表名',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 4,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintENEx.con_ConstraintTypeName,
      sortBy: 'constraintTypeName',
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '约束类型名',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 5,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_CreateUserId,
      sortBy: clsPrjConstraintEN.con_CreateUserId,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '建立用户Id',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 6,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_InUse,
      sortBy: clsPrjConstraintEN.con_InUse,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '是否在用',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 7,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_UpdDate,
      sortBy: clsPrjConstraintEN.con_UpdDate,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '修改日期',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 8,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_UpdUser,
      sortBy: clsPrjConstraintEN.con_UpdUser,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '修改者',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 9,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
    {
      fldName: clsPrjConstraintEN.con_Memo,
      sortBy: clsPrjConstraintEN.con_Memo,
      sortFun: SortFun,
      getDataSource: '',
      colHeader: '说明',
      text: '',
      tdClass: 'text-left',
      columnType: 'Label',
      orderNum: 10,
      funcName: (strKey: string, strText: string) => {
        console.log(strKey, strText);
        return new HTMLElement();
      },
    },
  ];
  try {
    await PrjConstraintEx_ExtendFldFuncMap(arrPrjConstraintExObjLst, arrDataColumn);
  } catch (e) {
    const strMsg = Format(
      '扩展字段值的映射出错,{0}.(in {1}.{2})',
      e,
      prjConstraintEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
  await BindTab(
    divDataLst,
    arrPrjConstraintExObjLst,
    arrDataColumn,
    clsPrjConstraintEN.con_PrjConstraintId,
    objOperateList,
  );
  const objPager = new clsPager(objOperateList);
  if (objPager.IsInit(divContainer, myStuPaper.divName4Pager) == false)
    objPager.InitShow(divContainer, myStuPaper.divName4Pager);
  objPager.recCount = myStuPaper.recCount;
  objPager.pageSize = myStuPaper.pageSize;
  objPager.ShowPagerV2(divContainer, objOperateList, myStuPaper.divName4Pager);
}

/** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrPrjConstraintExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
export async function PrjConstraintEx_ExtendFldFuncMap(
  arrPrjConstraintExObjLst: Array<clsPrjConstraintENEx>,
  arrDataColumn: Array<clsDataColumn>,
) {
  const arrFldName = clsPrjConstraintEN.AttributeName;
  for (const objDataColumn of arrDataColumn) {
    if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
    if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
    for (const objInFor of arrPrjConstraintExObjLst) {
      await PrjConstraintEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
    }
  }
}

export async function PrjConstraintEx_FuncMapFldNames(objPrjConstraint: clsPrjConstraintENEx) {
  const strThisFuncName = PrjConstraintEx_FuncMapFldNames.name;
  const constraintFieldsStore = useConstraintFieldsStore();
  try {
    if (IsNullOrEmpty(objPrjConstraint.fldNames) == true) {
      const PrjConstraintMenuId = objPrjConstraint.prjConstraintId;
      const arrFldNames = await constraintFieldsStore.getFldNameLstByPrjConstraintId(
        PrjConstraintMenuId,
      );
      const divFldNames = GetDiv_Empty('');
      for (const strFldName of arrFldNames) {
        if (strFldName == '') continue;
        const spnFld = GetSpan_Empty('text-secondary');
        spnFld.innerHTML = strFldName;
        const brEmpty = GetBr_Empty();
        divFldNames.appendChild(spnFld);
        divFldNames.appendChild(brEmpty);
      }
      objPrjConstraint.fldNames = divFldNames.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000486)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjConstraintEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function PrjConstraintEx_GetNormalConstraintName(
  strPrjConstraintId: string,
): Promise<string> {
  const strThisFuncName = PrjConstraintEx_GetNormalConstraintName.name;
  const constraintFieldsStore = useConstraintFieldsStore();
  try {
    let arrFldNames = await constraintFieldsStore.getFldNameLstByPrjConstraintId(
      strPrjConstraintId,
    );
    arrFldNames = arrFldNames.sort();
    const strPrjConstraintName = arrFldNames.join('_');
    return strPrjConstraintName;
  } catch (e) {
    const strMsg = Format(
      '计算标准约束名出错,{0}.(in {1}.{2})',
      e,
      prjConstraintEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return '';
  }
}

/**
 * 检查约束字段
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjConstraintId: 表约束Id
 * @param strPrjId: 工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function PrjConstraintEx_CheckConstraintFld(
  strPrjConstraintId: string,
  strPrjId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = PrjConstraintEx_CheckConstraintFld.name;
  const strAction = 'CheckConstraintFld';
  const strUrl = GetWebApiUrl(prjConstraintEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjConstraintId,
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        prjConstraintEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        prjConstraintEx_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjConstraintEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjConstraintENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPrjConstraintObjLst = await PrjConstraint_GetObjLstByPagerAsync(objPagerPara);
  const arrPrjConstraintExObjLst = arrPrjConstraintObjLst.map(PrjConstraintEx_CopyToEx);
  if (arrPrjConstraintExObjLst.length == 0) return arrPrjConstraintExObjLst;
  let arrPrjConstraintSel: Array<clsPrjConstraintENEx> = arrPrjConstraintExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjConstraintSel = arrPrjConstraintSel.sort(
        PrjConstraintEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjConstraintSel = arrPrjConstraintSel.sort(objPagerPara.sortFun);
    }
    return arrPrjConstraintSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjConstraintEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjConstraintENEx>();
}
