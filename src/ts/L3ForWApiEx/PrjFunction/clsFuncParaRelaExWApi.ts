/**
 * 类名:clsFuncParaRelaExWApi
 * 表名:FuncParaRela(00050498)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/28 23:38:18
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * FuncParaRela(FuncParaRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年07月28日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { FuncParaRela_SortFunByKey } from '@/ts/L3ForWApi/PrjFunction/clsFuncParaRelaWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsFuncParaRelaEN } from '@/ts/L0Entity/PrjFunction/clsFuncParaRelaEN';
import { clsFuncParaRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFuncParaRelaENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsvFuncParaRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFuncParaRela_SimEN';
import { vFuncParaRela_Sim_GetObjLstCache } from '@/ts/L3ForWApi/PrjFunction/clsvFuncParaRela_SimWApi';
export const funcParaRelaExController = 'FuncParaRelaExApi';
export const funcParaRelaEx_ConstructorName = 'funcParaRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function FuncParaRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objFuncParaRelaENS:源对象
 * @returns 目标对象=>clsFuncParaRelaEN:objFuncParaRelaENT
 **/
export function FuncParaRelaEx_CopyToEx(
  objFuncParaRelaENS: clsFuncParaRelaEN,
): clsFuncParaRelaENEx {
  const strThisFuncName = FuncParaRelaEx_CopyToEx.name;
  const objFuncParaRelaENT = new clsFuncParaRelaENEx();
  try {
    ObjectAssign(objFuncParaRelaENT, objFuncParaRelaENS);
    return objFuncParaRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcParaRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncParaRelaENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-28
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncParaRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return FuncParaRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return FuncParaRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-07-28
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function FuncParaRelaEx_FuncMapByFldName(
  strFldName: string,
  objFuncParaRelaEx: clsFuncParaRelaENEx,
) {
  const strThisFuncName = FuncParaRelaEx_FuncMapByFldName.name;
  console.log(objFuncParaRelaEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFuncParaRelaEN.AttributeName;
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
/// 根据函数Id4Code获取相关参数对象列表, 从缓存的对象列表中获取.没有就返回null.
/// (AutoGCLib.AutoGC6Cs_Business:Gen_4BL_GetObjByKeyCache)
/// </summary>
/// <param name = "strFuncId4Code">函数Id4Code</param>
/// <returns>根据函数Id4Code获取相关参数对象列表</returns>
export async function FuncParaRelaEx_GetObjListByFuncId4CodeCacheEx(
  strFuncId4Code: string,
): Promise<Array<clsvFuncParaRela_SimEN> | null> {
  if (IsNullOrEmpty(strFuncId4Code) == true) return null;
  //初始化列表缓存
  const arrObjLstCache = await vFuncParaRela_Sim_GetObjLstCache();
  const arrFuncParaRelaObjLst_Sel = arrObjLstCache.filter((x) => x.funcId4Code == strFuncId4Code);
  return arrFuncParaRelaObjLst_Sel;
}
