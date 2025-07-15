/**
* 类名:clsDataNodeTypeExWApi
* 表名:DataNodeType(00050548)
* 生成代码版本:2022.03.24.1
* 生成日期:2022/03/30 02:27:22
* 生成者:pyf
* 生成服务器IP:103.116.76.183
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)
* 相关数据库:103.116.76.183,9433AGC_CS12
* PrjDataBaseId:0005
模块中文名:AI模块(AIModule)
* 框架-层名:WA_访问扩展层(WA_AccessEx)
* 编程语言:TypeScript
* 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
  *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
**/

/**
 * 数据结点类型(DataNodeType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年03月30日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  DataNodeType_GetObjLstByPagerAsync,
  DataNodeType_SortFunByKey,
} from '@/ts/L3ForWApi/AIModule/clsDataNodeTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDataNodeTypeEN, enumDataNodeType } from '@/ts/L0Entity/AIModule/clsDataNodeTypeEN';
import { clsDataNodeTypeENEx } from '@/ts/L0Entity/AIModule/clsDataNodeTypeENEx';

import { enumFieldType } from '@/ts/L0Entity/Table_Field/clsFieldTypeEN';
import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrjTabFld } from '@/ts/L0Entity/Table_Field/clsPrjTabFld';
export const dataNodeTypeEx_Controller = 'DataNodeTypeExApi';
export const dataNodeTypeEx_ConstructorName = 'dataNodeTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function DataNodeTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objDataNodeTypeENS:源对象
 * @returns 目标对象=>clsDataNodeTypeEN:objDataNodeTypeENT
 **/
export function DataNodeTypeEx_CopyToEx(
  objDataNodeTypeENS: clsDataNodeTypeEN,
): clsDataNodeTypeENEx {
  const strThisFuncName = DataNodeTypeEx_CopyToEx.name;
  const objDataNodeTypeENT = new clsDataNodeTypeENEx();
  try {
    ObjectAssign(objDataNodeTypeENT, objDataNodeTypeENS);
    return objDataNodeTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dataNodeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDataNodeTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function DataNodeTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataNodeTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrDataNodeTypeExObjLst = await DataNodeType_GetObjLstByPagerAsync(objPagerPara);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDataNodeTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrDataNodeTypeExObjLst) {
      await DataNodeTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrDataNodeTypeExObjLst.length == 0) return arrDataNodeTypeExObjLst;
  let arrDataNodeType_Sel: Array<clsDataNodeTypeENEx> = arrDataNodeTypeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDataNodeType_Sel = arrDataNodeType_Sel.sort(
        DataNodeTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrDataNodeType_Sel = arrDataNodeType_Sel.sort(objPagerPara.sortFun);
    }

    return arrDataNodeType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dataNodeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataNodeTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-03-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DataNodeTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return DataNodeType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return DataNodeType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-03-30
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function DataNodeTypeEx_FuncMapByFldName(
  strFldName: string,
  objDataNodeTypeEx: clsDataNodeTypeENEx,
) {
  const strThisFuncName = DataNodeTypeEx_FuncMapByFldName.name;
  console.log(objDataNodeTypeEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsDataNodeTypeEN.AttributeName;
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

export function DataNodeTypeEx_GetDefaDataNodeTypeByPrjTabFld(objPrjTabFld: clsPrjTabFld) {
  // const strThisFuncName = DataNodeTypeEx_GetDefaDataNodeTypeByPrjTabFld.name;
  if (objPrjTabFld == null) return enumDataNodeType.GeneralCode_03;
  //如果是本表中字段，不需要映射
  switch (objPrjTabFld.fieldTypeId) {
    case enumFieldType.KeyField_02:
      return enumDataNodeType.Keyword_01;
    case enumFieldType.NameField_03:
      return enumDataNodeType.NameNode_02;
    default:
      if (objPrjTabFld.isTabForeignKey == true) return enumDataNodeType.ForeignKeyNode_04;
      return enumDataNodeType.GeneralCode_03;
  }
}

export function DataNodeTypeEx_GetSpanByDataNodeType(strDataNodeTypeId: string): HTMLSpanElement {
  // const strThisFuncName = DataNodeTypeEx_GetSpanByDataNodeType.name;
  const spnDataNodeType = GetSpan_Empty('text-danger');
  //如果是本表中字段，不需要映射
  switch (strDataNodeTypeId) {
    case enumDataNodeType.Keyword_01:
      spnDataNodeType.innerText = 'K:';
      break;
    case enumDataNodeType.NameNode_02:
      spnDataNodeType.innerText = 'N:';
      break;
    case enumDataNodeType.ForeignKeyNode_04:
      spnDataNodeType.innerText = 'F:';
      break;
    case enumDataNodeType.Unknown_05:
      spnDataNodeType.innerText = '';
      break;
    default:
      spnDataNodeType.innerText = 'G:';
      break;
  }
  return spnDataNodeType;
}
