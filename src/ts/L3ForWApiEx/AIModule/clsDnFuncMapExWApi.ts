import axios from 'axios';
import { vPrjTab_SimEx_func } from '../Table_Field/clsvPrjTab_SimExWApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';
import { clsDnFuncMapENEx } from '@/ts/L0Entity/AIModule/clsDnFuncMapENEx';
import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
import { clsFuncMapModeEN } from '@/ts/L0Entity/AIModule/clsFuncMapModeEN';

import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { AssociationMapping_func } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import {
  DnFuncMap_GetObjLstByJSONObjLst,
  DnFuncMap_GetObjLstByPagerAsync,
  DnFuncMap_SortFunByKey,
} from '@/ts/L3ForWApi/AIModule/clsDnFuncMapWApi';
import { DataNode_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/AIModule/clsDataNodeWApi';
import { DnFunction_func } from '@/ts/L3ForWApi/AIModule/clsDnFunctionWApi';
import { FuncMapMode_func } from '@/ts/L3ForWApi/AIModule/clsFuncMapModeWApi';

import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { vDnFuncMap_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/AIModule/clsvDnFuncMap_SimWApi';
import { clsvDnFuncMap_SimEN } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_SimEN';
import { clsvDnFuncMap_Sim } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_Sim';

import { usevDataNode_SimStore } from '@/store/modules/vDataNode_Sim';
import { usevDnFuncMap_SimStore } from '@/store/modules/vDnFuncMap_Sim';
import { vDnFuncMap_SimEx_GetObjByInOutDataNodeIdCacheEx } from '@/ts/L3ForWApiEx/AIModule/clsvDnFuncMap_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

export const dnFuncMapEx_Controller = 'DnFuncMapExApi';
export const dnFuncMapEx_ConstructorName = 'dnFuncMapEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objDnFuncMapENS:源对象
 * @returns 目标对象=>clsDnFuncMapEN:objDnFuncMapENT
 */
export function DnFuncMapEx_CopyToEx(objDnFuncMapENS: clsDnFuncMapEN): clsDnFuncMapENEx {
  const objDnFuncMapENT = new clsDnFuncMapENEx();
  try {
    ObjectAssign(objDnFuncMapENT, objDnFuncMapENS);
    return objDnFuncMapENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objDnFuncMapENT;
  }
}
/**
 * 根据Out结点获取所有的关系
 * @param strDataNodeId Out结点Id
 * @param strCmPrjId:CM工程Id
 */
export async function DnFuncMapEx_GetObjLstByDataNodeId_In(
  strDataNodeId: number,
  strPrjId: string,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strWhere = `${clsvDnFuncMap_SimEN.con_PrjId}='${strPrjId}'`;
  const arrDnFuncMap = await vDnFuncMap_Sim_GetObjLstAsync(strWhere);
  const arrDnFuncMap_Sel = arrDnFuncMap.filter((x) => x.inDataNodeId == strDataNodeId);
  return arrDnFuncMap_Sel;
}
/**
 * 根据In结点获取所有的关系
 * @param strDataNodeId:In结点Id
 * @param strCmPrjId:CM工程Id
 */
export async function DnFuncMapEx_GetObjLstByDataNodeId_Out(strDataNodeId: number) {
  const vDnFuncMap_SimStore = usevDnFuncMap_SimStore();
  const arrDnFuncMap_Sel = await vDnFuncMap_SimStore.getObjLstByOut(strDataNodeId);
  // const strWhere = `${clsvDnFuncMap_SimEN.con_PrjId}='${strPrjId}'`;
  // const arrDnFuncMap = await vDnFuncMap_Sim_GetObjLstAsync(strWhere);
  // const arrDnFuncMap_Sel = arrDnFuncMap.filter((x) => x.outDataNodeId == strDataNodeId);
  return arrDnFuncMap_Sel;
}

/**
 * 获取环的结点列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @returns 获取的相应对象列表
 */
export async function DnFuncMapEx_GetRingNodeLst(
  strPrjId: string,
): Promise<Array<clsDataNodeEN> | null> {
  const strThisFuncName = DnFuncMapEx_GetRingNodeLst.name;
  const strAction = 'GetRingNodeLst';
  const strUrl = GetWebApiUrl(dnFuncMapEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dnFuncMapEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataNode_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnFuncMapEx_ConstructorName,
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
 * 获取环的边列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @returns 获取的相应对象列表
 */
export async function DnFuncMapEx_GetRingEdgeLst(strPrjId: string): Promise<Array<string>> {
  const strThisFuncName = DnFuncMapEx_GetRingEdgeLst.name;
  const strAction = 'GetRingEdgeLst';
  const strUrl = GetWebApiUrl(dnFuncMapEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnStrLst = data.returnStrLst.split(',');
      //console.log("returnStrLst", returnStrLst);
      return returnStrLst;
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
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnFuncMapEx_ConstructorName,
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
/// 根据输入，输出结点获取相关路径, 从缓存的对象列表中获取.没有就返回null.
/// </summary>
/// <param name = "strInDataNodeId">In结点</param>
/// <param name = "strOutDataNodeId">Out结点</param>
/// <param name = "strCmPrjId">缓存的分类字段</param>
/// <returns>根据关键字获取的对象</returns>
export async function DnFuncMapEx_GetObjByInOutDataNodeIdCacheEx(
  strInDataNodeId: number,
  strOutDataNodeId: number,
): Promise<clsvDnFuncMap_Sim | null> {
  //获取缓存中的对象列表
  // const strThisFuncName = 'GetObjByInOutDataNodeIdCacheEx';

  const objDnFuncMap = await vDnFuncMap_SimEx_GetObjByInOutDataNodeIdCacheEx(
    strInDataNodeId,
    strOutDataNodeId,
    clsPrivateSessionStorage.currSelPrjId,
  );

  return objDnFuncMap;
}
/**
 * 根据输入，输出结点获取相关路径列表, 从缓存的对象列表中获取.没有就返回null.
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strStartNodeId: 开始结点
 * @param strEndNodeId: 末端结点Id
 * @param strCmPrjId: CM工程Id
 * @returns 获取的相应对象列表
 */
export async function DnFuncMapEx_GetGraphPath(
  strStartNodeId: number,
  strEndNodeId: number,
  strPrjId: string,
): Promise<Array<clsDnFuncMapEN>> {
  const strThisFuncName = DnFuncMapEx_GetGraphPath.name;
  const strAction = 'GetGraphPath';
  const strUrl = GetWebApiUrl(dnFuncMapEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strStartNodeId,
      strEndNodeId,
      strPrjId,
    },
  };

  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dnFuncMapEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnFuncMapEx_ConstructorName,
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
* 排序函数。根据表对象中随机两个字段的值进行比较
* 作者:pyf
* 日期:20210705230650

* @param  a:比较的第1个对象
* @param  b:比较的第1个对象
* @returns 返回两个对象比较的结果
*/
export function DnFuncMapEx_SortFunByInDataNodeName(
  a: clsDnFuncMapENEx,
  b: clsDnFuncMapENEx,
): number {
  return a.inDataNodeName.localeCompare(b.inDataNodeName);
}

/**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export function DnFuncMapEx_GetRecCountByCondNoCacheAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondNoCacheAsync';
  const strAction = 'GetRecCountByCondNoCache';
  const strUrl = GetWebApiUrl(dnFuncMapEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  //console.log('GetRecCountByCondAsync:strData:');
  //console.log(strData);
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data: any) {
        if (data.errorId == 0) {
          resolve(data.returnInt);
        } else {
          console.error(data.errorMsg);
          reject(data.errorMsg);
        }
      },
      error(result: any) {
        console.error(result);
        console.error(JSON.stringify(result));
        if (result.statusText == 'error') {
          const strInfo = Format(
            '网络错误！访问地址:{0}不成功！(in {1}.{2})',
            strUrl,
            dnFuncMapEx_ConstructorName,
            strThisFuncName,
          );
          reject(strInfo);
        } else {
          reject(result.statusText);
        }
      },
    });
  });
}
/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DnFuncMapEx_GetObjLstByPagerNoCacheAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDnFuncMapEN>> {
  const strThisFuncName = 'GetObjLstByPagerNoCacheAsync';
  const strAction = 'GetObjLstByPagerNoCache';
  const strUrl = GetWebApiUrl(dnFuncMapEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dnFuncMapEx_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFuncMap_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnFuncMapEx_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */

/**
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrDnFuncMapId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DnFuncMapEx_DelDnFuncMapsExAsync(
  arrDnFuncMapId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDnFuncMapsExAsync';
  const strAction = 'DelDnFuncMapsEx';
  const strUrl = GetWebApiUrl(dnFuncMapEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnFuncMapId, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnFuncMapEx_ConstructorName,
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DnFuncMapEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnFuncMapENEx.con_InDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.inDataNodeName.localeCompare(b.inDataNodeName);
        };
      case clsDnFuncMapENEx.con_OutDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.outDataNodeName.localeCompare(b.outDataNodeName);
        };
      case clsDnFuncMapENEx.con_AssociationMappingName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      case clsDnFuncMapENEx.con_FuncMapModeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.funcMapModeName.localeCompare(b.funcMapModeName);
        };
      case clsDnFuncMapENEx.con_TabName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsDnFuncMapENEx.con_DnFunctionName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return a.dnFunctionName.localeCompare(b.dnFunctionName);
        };
      default:
        return DnFuncMap_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDnFuncMapENEx.con_InDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.inDataNodeName.localeCompare(a.inDataNodeName);
        };
      case clsDnFuncMapENEx.con_OutDataNodeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.outDataNodeName.localeCompare(a.outDataNodeName);
        };
      case clsDnFuncMapENEx.con_AssociationMappingName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      case clsDnFuncMapENEx.con_FuncMapModeName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.funcMapModeName.localeCompare(a.funcMapModeName);
        };
      case clsDnFuncMapENEx.con_TabName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsDnFuncMapENEx.con_DnFunctionName:
        return (a: clsDnFuncMapENEx, b: clsDnFuncMapENEx) => {
          return b.dnFunctionName.localeCompare(a.dnFunctionName);
        };
      default:
        return DnFuncMap_SortFunByKey(strKey, AscOrDesc);
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
export function DnFuncMapEx_FuncMapByFldName(strFldName: string, objDnFuncMapEx: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMapEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsDnFuncMapEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDnFuncMapENEx.con_InDataNodeName:
      return DnFuncMapEx_FuncMap_InDataNodeName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_OutDataNodeName:
      return DnFuncMapEx_FuncMap_OutDataNodeName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_AssociationMappingName:
      return DnFuncMapEx_FuncMap_AssociationMappingName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_FuncMapModeName:
      return DnFuncMapEx_FuncMap_FuncMapModeName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_TabName:
      return DnFuncMapEx_FuncMap_TabName(objDnFuncMapEx);
    case clsDnFuncMapENEx.con_DnFunctionName:
      return DnFuncMapEx_FuncMap_DnFunctionName(objDnFuncMapEx);
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
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMapEx_FuncMap_InDataNodeName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMapEx_FuncMap_InDataNodeName.name;
  try {
    const vDataNode_SimStore = usevDataNode_SimStore();
    if (IsNullOrEmpty(objDnFuncMap.inDataNodeName) == true) {
      const vDataNode_SimDataNodeId = objDnFuncMap.inDataNodeId;
      const vDataNode_SimDataNodeName = await vDataNode_SimStore.getName(vDataNode_SimDataNodeId);
      objDnFuncMap.inDataNodeName = vDataNode_SimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000136)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMapEx_FuncMap_OutDataNodeName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMapEx_FuncMap_OutDataNodeName.name;
  const vDataNode_SimStore = usevDataNode_SimStore();
  try {
    if (IsNullOrEmpty(objDnFuncMap.outDataNodeName) == true) {
      const vDataNode_SimDataNodeId = objDnFuncMap.outDataNodeId;
      const vDataNode_SimDataNodeName = await vDataNode_SimStore.getName(vDataNode_SimDataNodeId);
      objDnFuncMap.outDataNodeName = vDataNode_SimDataNodeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000137)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMapEx_FuncMap_AssociationMappingName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMapEx_FuncMap_AssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.associationMappingName) == true) {
      const AssociationMapping_AssociationMappingId = objDnFuncMap.associationMappingId;
      const AssociationMapping_AssociationMappingName = await AssociationMapping_func(
        clsAssociationMappingEN.con_AssociationMappingId,
        clsAssociationMappingEN.con_AssociationMappingName,
        AssociationMapping_AssociationMappingId,
      );
      objDnFuncMap.associationMappingName = AssociationMapping_AssociationMappingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000138)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMapEx_FuncMap_FuncMapModeName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMapEx_FuncMap_FuncMapModeName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.funcMapModeName) == true) {
      const FuncMapMode_FuncMapModeId = objDnFuncMap.funcMapModeId;
      const FuncMapMode_FuncMapModeName = await FuncMapMode_func(
        clsFuncMapModeEN.con_FuncMapModeId,
        clsFuncMapModeEN.con_FuncMapModeName,
        FuncMapMode_FuncMapModeId,
      );
      objDnFuncMap.funcMapModeName = FuncMapMode_FuncMapModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000139)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMapEx_FuncMap_TabName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMapEx_FuncMap_TabName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.tabName) == true) {
      const vPrjTab_Sim_TabId = objDnFuncMap.tabId;
      const vPrjTab_Sim_TabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTab_Sim_TabId,
      );
      objDnFuncMap.tabName = vPrjTab_Sim_TabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000094)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objDnFuncMapS:源对象
 **/
export async function DnFuncMapEx_FuncMap_DnFunctionName(objDnFuncMap: clsDnFuncMapENEx) {
  const strThisFuncName = DnFuncMapEx_FuncMap_DnFunctionName.name;
  try {
    if (IsNullOrEmpty(objDnFuncMap.dnFunctionName) == true) {
      const DnFunction_DnFunctionId = objDnFuncMap.dnFunctionId;
      const DnFunction_DnFunctionName = await DnFunction_func(
        clsDnFunctionEN.con_DnFunctionId,
        clsDnFunctionEN.con_DnFunctionName,
        DnFunction_DnFunctionId,
        objDnFuncMap.prjId,
      );
      objDnFuncMap.dnFunctionName = DnFunction_DnFunctionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000140)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFuncMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 检查结点关系，如果有结点关系的相关表为空，或者相关表的缓存模式不正确就抛错.
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strCmPrjId: CM工程Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function DnFuncMapEx_CheckDnFuncMapByPrjId(
  strPrjId: string,
  strOpUserId: string,
): Promise<number> {
  const strThisFuncName = DnFuncMapEx_CheckDnFuncMapByPrjId.name;
  const strAction = 'CheckDnFuncMapByPrjId';
  const strUrl = DnFuncMapEx_GetWebApiUrl(dnFuncMapEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strOpUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnFuncMapEx_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function DnFuncMapEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function DnFuncMapEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDnFuncMapENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrDnFuncMapObjLst = await DnFuncMap_GetObjLstByPagerAsync(objPagerPara);
  const arrDnFuncMapExObjLst = arrDnFuncMapObjLst.map(DnFuncMapEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDnFuncMapEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrDnFuncMapExObjLst) {
      await DnFuncMapEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrDnFuncMapExObjLst.length == 0) return arrDnFuncMapExObjLst;
  let arrDnFuncMapSel: Array<clsDnFuncMapENEx> = arrDnFuncMapExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDnFuncMapSel = arrDnFuncMapSel.sort(DnFuncMapEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDnFuncMapSel = arrDnFuncMapSel.sort(objPagerPara.sortFun);
    }

    return arrDnFuncMapSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dnFuncMapEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDnFuncMapENEx>();
}

/**
 * 扩展删除在删除的同时，删除引用的路径
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strDnFuncMapId: 结点映射Id
 * @param strPrjId: 工程Id
 * @returns 获取的相应对象列表
 */
export async function DnFuncMapEx_DelRecordEx(
  strDnFuncMapId: string,
  strPrjId: string,
): Promise<boolean> {
  const strThisFuncName = DnFuncMapEx_DelRecordEx.name;
  const strAction = 'DelRecordEx';
  const strUrl = DnFuncMapEx_GetWebApiUrl(dnFuncMapEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFuncMapId,
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
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        dnFuncMapEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
