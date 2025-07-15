/*-- -- -- -- -- -- -- -- -- -- --
类名:clsCommonDataNodeExWApi
表名:CommonDataNode(00050572)
生成代码版本:2021.02.03.1
生成日期:2021/02/07 01:39:38
生成者:pyf
生成服务器IP:103.116.76.183
工程名称:AGC
工程ID:0005
相关数据库:103.116.76.183,9433AGC_CS12
prjDataBaseId:0005
模块中文名:AI模块
模块英文名:AIModule
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 公共数据结点(CommonDataNode)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by pyf on 2021年02月07日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */
///// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
///// <reference path="../../../scripts/typings/q/q.d.ts" />
///// <reference path="../../../scripts/typings/handlebars/handlebars.d.ts" />

import { clsCommonDataNodeEN } from '@/ts/L0Entity/AIModule/clsCommonDataNodeEN';
import { clsCommonDataNodeENEx } from '@/ts/L0Entity/AIModule/clsCommonDataNodeENEx';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const commonDataNodeEx_Controller = 'CommonDataNodeExApi';
export const commonDataNodeEx_ConstructorName = 'commonDataNodeEx';

/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objCommonDataNodeENS">源对象</param>
/// <param name = "objCommonDataNodeENT">目标对象</param>
export function CommonDataNodeEx_CopyToEx(
  objCommonDataNodeENS: clsCommonDataNodeEN,
): clsCommonDataNodeENEx {
  const objCommonDataNodeENT = new clsCommonDataNodeENEx();
  try {
    ObjectAssign(objCommonDataNodeENT, objCommonDataNodeENS);
    return objCommonDataNodeENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objCommonDataNodeENT;
  }
}
