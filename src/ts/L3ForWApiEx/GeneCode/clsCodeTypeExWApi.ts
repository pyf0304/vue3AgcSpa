import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';
import { clsCodeTypeENEx } from '@/ts/L0Entity/GeneCode/clsCodeTypeENEx';
import { clsSQLDSTypeEN } from '@/ts/L0Entity/PrjInterface/clsSQLDSTypeEN';
import {
  CodeType_GetObjLstByPagerAsync,
  CodeType_SortFunByKey,
} from '@/ts/L3ForWApi/GeneCode/clsCodeTypeWApi';
import { SQLDSType_func } from '@/ts/L3ForWApi/PrjInterface/clsSQLDSTypeWApi';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const codeTypeEx_Controller = 'CodeTypeExApi';
export const codeTypeEx_ConstructorName = 'codeTypeEx';

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CodeTypeEx_FuncMapByFldName(strFldName: string, objCodeTypeEx: clsCodeTypeENEx) {
  const strThisFuncName = CodeTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsCodeTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCodeTypeENEx.con_SqlDsTypeName:
      return CodeTypeEx_FuncMap_SqlDsTypeName(objCodeTypeEx);
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCodeTypeENS:源对象
 * @returns 目标对象=>clsCodeTypeEN:objCodeTypeENT
 **/
export function CodeTypeEx_CopyToEx(objCodeTypeENS: clsCodeTypeEN): clsCodeTypeENEx {
  const strThisFuncName = CodeTypeEx_CopyToEx.name;
  const objCodeTypeENT = new clsCodeTypeENEx();
  try {
    ObjectAssign(objCodeTypeENT, objCodeTypeENS);
    return objCodeTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      codeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCodeTypeENT;
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
export function CodeTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCodeTypeENEx.con_ClassNameFormatEx:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return a.classNameFormatEx.localeCompare(b.classNameFormatEx);
        };
      case clsCodeTypeENEx.con_SqlDsTypeName:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return a.sqlDsTypeName.localeCompare(b.sqlDsTypeName);
        };
      case clsCodeTypeENEx.con_FuncCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return a.funcCount - b.funcCount;
        };
      case clsCodeTypeENEx.con_AppCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return a.appCount - b.appCount;
        };
      default:
        return CodeType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCodeTypeENEx.con_ClassNameFormatEx:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return b.classNameFormatEx.localeCompare(a.classNameFormatEx);
        };
      case clsCodeTypeENEx.con_SqlDsTypeName:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return b.sqlDsTypeName.localeCompare(a.sqlDsTypeName);
        };
      case clsCodeTypeENEx.con_FuncCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return b.funcCount - a.funcCount;
        };
      case clsCodeTypeENEx.con_AppCount:
        return (a: clsCodeTypeENEx, b: clsCodeTypeENEx) => {
          return b.appCount - a.appCount;
        };
      default:
        return CodeType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCodeTypeS:源对象
 **/
export async function CodeTypeEx_FuncMap_SqlDsTypeName(objCodeType: clsCodeTypeENEx) {
  const strThisFuncName = CodeTypeEx_FuncMap_SqlDsTypeName.name;
  try {
    if (IsNullOrEmpty(objCodeType.sqlDsTypeName) == true) {
      const SQLDSType_SQLDSTypeId = objCodeType.sqlDsTypeId;
      const SQLDSType_SqlDsTypeName = await SQLDSType_func(
        clsSQLDSTypeEN.con_SqlDsTypeId,
        clsSQLDSTypeEN.con_SqlDsTypeName,
        SQLDSType_SQLDSTypeId,
      );
      objCodeType.sqlDsTypeName = SQLDSType_SqlDsTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000080)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      codeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CodeTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCodeTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCodeTypeObjLst = await CodeType_GetObjLstByPagerAsync(objPagerPara);
  const arrCodeTypeExObjLst = arrCodeTypeObjLst.map(CodeTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCodeTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCodeTypeExObjLst) {
      await CodeTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCodeTypeExObjLst.length == 0) return arrCodeTypeExObjLst;
  let arrCodeType_Sel: Array<clsCodeTypeENEx> = arrCodeTypeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCodeType_Sel = arrCodeType_Sel.sort(CodeTypeEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrCodeType_Sel = arrCodeType_Sel.sort(objPagerPara.sortFun);
    }

    return arrCodeType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      codeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCodeTypeENEx>();
}
