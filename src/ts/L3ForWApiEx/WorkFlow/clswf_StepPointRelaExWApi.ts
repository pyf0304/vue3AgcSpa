﻿/**
 * 类名:clswf_StepPointRelaExWApi
 * 表名:wf_StepPointRela(00050486)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/29 17:25:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工作流管理(WorkFlow)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工作流与结点关系(wf_StepPointRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年07月29日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign, GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { clswf_StepPointRelaENEx } from '@/ts/L0Entity/WorkFlow/clswf_StepPointRelaENEx';
import {
  wf_StepPointRela_GetObjLstAsync,
  wf_StepPointRela_GetObjLstByPagerAsync,
  wf_StepPointRela_SortFunByKey,
} from '@/ts/L3ForWApi/WorkFlow/clswf_StepPointRelaWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clswf_StepPointRelaEN } from '@/ts/L0Entity/WorkFlow/clswf_StepPointRelaEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const wf_StepPointRelaExController = 'wf_StepPointRelaExApi';
export const wf_StepPointRelaEx_ConstructorName = 'wf_StepPointRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function wf_StepPointRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objwf_StepPointRelaENS:源对象
 * @returns 目标对象=>clswf_StepPointRelaEN:objwf_StepPointRelaENT
 **/
export function wf_StepPointRelaEx_CopyToEx(
  objwf_StepPointRelaENS: clswf_StepPointRelaEN,
): clswf_StepPointRelaENEx {
  const strThisFuncName = wf_StepPointRelaEx_CopyToEx.name;
  const objwf_StepPointRelaENT = new clswf_StepPointRelaENEx();
  try {
    ObjectAssign(objwf_StepPointRelaENT, objwf_StepPointRelaENS);
    return objwf_StepPointRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      wf_StepPointRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objwf_StepPointRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function wf_StepPointRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clswf_StepPointRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrwf_StepPointRelaObjLst = await wf_StepPointRela_GetObjLstByPagerAsync(objPagerPara);
  const arrwf_StepPointRelaExObjLst = arrwf_StepPointRelaObjLst.map(wf_StepPointRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clswf_StepPointRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrwf_StepPointRelaExObjLst) {
      await wf_StepPointRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrwf_StepPointRelaExObjLst.length == 0) return arrwf_StepPointRelaExObjLst;
  let arrwf_StepPointRelaSel: Array<clswf_StepPointRelaENEx> = arrwf_StepPointRelaExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrwf_StepPointRelaSel = arrwf_StepPointRelaSel.sort(
        wf_StepPointRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrwf_StepPointRelaSel = arrwf_StepPointRelaSel.sort(objPagerPara.sortFun);
    }

    return arrwf_StepPointRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      wf_StepPointRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clswf_StepPointRelaENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function wf_StepPointRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return wf_StepPointRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return wf_StepPointRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-07-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function wf_StepPointRelaEx_FuncMapByFldName(
  strFldName: string,
  objwf_StepPointRelaEx: clswf_StepPointRelaENEx,
) {
  const strThisFuncName = wf_StepPointRelaEx_FuncMapByFldName.name;
  console.log(objwf_StepPointRelaEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clswf_StepPointRelaEN.AttributeName;
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

/// <summary>
/// 根据工作流Id获取的对象列表, 从缓存的对象列表中获取.没有就返回null.
/// </summary>
/// <param name = "strWorkFlowId">工作流Id</param>
/// <returns>根据工作流Id获取的对象列表</returns>
export async function wf_StepPointRelaEx_GetObjLstByWorkFlowIdCache(
  strWorkFlowId: string,
): Promise<Array<clswf_StepPointRelaEN>> {
  //初始化列表缓存
  const arrObjLstCache = await wf_StepPointRela_GetObjLstAsync('1=1');
  const arrwf_StepPointRelaObjLst_Sel = arrObjLstCache.filter((x) => x.workFlowId == strWorkFlowId);
  return arrwf_StepPointRelaObjLst_Sel;
}
