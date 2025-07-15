/**
 * 类名:clsvCmProjectPrjTab_SimExWApi
 * 表名:vCmProjectPrjTab_Sim(00050639)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/06 08:25:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vCmProjectPrjTab_Sim(vCmProjectPrjTab_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年02月06日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vCmProjectPrjTab_Sim_GetObjLstCache,
  vCmProjectPrjTab_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/CodeMan/clsvCmProjectPrjTab_SimWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvCmProjectPrjTab_SimEN } from '@/ts/L0Entity/CodeMan/clsvCmProjectPrjTab_SimEN';
import { clsvCmProjectPrjTab_SimENEx } from '@/ts/L0Entity/CodeMan/clsvCmProjectPrjTab_SimENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsvPrjConstraint_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjConstraint_SimEN';
import { CMProjectEx_GetPrjIdByCmPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';

export const vCmProjectPrjTab_SimExController = 'vCmProjectPrjTab_SimExApi';
export const vCmProjectPrjTab_SimEx_ConstructorName = 'vCmProjectPrjTab_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vCmProjectPrjTab_SimEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objvCmProjectPrjTab_SimENS:源对象
 * @returns 目标对象=>clsvCmProjectPrjTab_SimEN:objvCmProjectPrjTab_SimENT
 **/
export function vCmProjectPrjTab_SimEx_CopyToEx(
  objvCmProjectPrjTab_SimENS: clsvCmProjectPrjTab_SimEN,
): clsvCmProjectPrjTab_SimENEx {
  const strThisFuncName = vCmProjectPrjTab_SimEx_CopyToEx.name;
  const objvCmProjectPrjTab_SimENT = new clsvCmProjectPrjTab_SimENEx();
  try {
    ObjectAssign(objvCmProjectPrjTab_SimENT, objvCmProjectPrjTab_SimENS);
    return objvCmProjectPrjTab_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vCmProjectPrjTab_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvCmProjectPrjTab_SimENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCmProjectPrjTab_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vCmProjectPrjTab_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vCmProjectPrjTab_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-02-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vCmProjectPrjTab_SimEx_FuncMapByFldName(
  strFldName: string,
  objvCmProjectPrjTab_SimEx: clsvCmProjectPrjTab_SimENEx,
) {
  const strThisFuncName = vCmProjectPrjTab_SimEx_FuncMapByFldName.name;
  console.log(objvCmProjectPrjTab_SimEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvCmProjectPrjTab_SimEN._AttributeName;
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
/// 根据CM工程Id获取相关表Id列表
/// </summary>
/// <param name="strCmPrjId"></param>
/// <returns>相关表Id列表</returns>
export async function vCmProjectPrjTab_SimEx_GetTabIdLstByCmPrjIdCache(
  strCmPrjId: string,
): Promise<Array<string>> {
  const strPrjId = await CMProjectEx_GetPrjIdByCmPrjIdCache(strCmPrjId);
  let arrObjLst = await vCmProjectPrjTab_Sim_GetObjLstCache(strPrjId);
  arrObjLst = arrObjLst.filter((x) => x.cmPrjId == strCmPrjId);
  return arrObjLst.map((x) => x.tabId);
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
export function vPrjConstraint_SimEx_SortFunByConstraintName(
  a: clsvPrjConstraint_SimEN,
  b: clsvPrjConstraint_SimEN,
): number {
  return a.constraintName.localeCompare(b.constraintName);
}
