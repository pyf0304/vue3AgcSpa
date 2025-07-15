/*-- -- -- -- -- -- -- -- -- -- --
 类名:clsMethodModifierExWApi
 表名:MethodModifier(00050523)
 生成代码版本:2021.03.30.1
 生成日期:2021/04/02 23:19:42
 生成者:pyf
 生成服务器IP:103.116.76.183
 工程名称:AGC
 工程ID:0005
 相关数据库:103.116.76.183,9433AGC_CS12
 prjDataBaseId:0005
 模块中文名:函数管理
 模块英文名:PrjFunction
 框架-层名:WA_访问扩展层(WA_AccessEx)
 编程语言:TypeScript
 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
        2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 == == == == == == == == == == == == 
 */

/// <summary>
/// 函数修饰语(MethodModifier)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by pyf on 2021年04月02日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import { clsMethodModifierEN } from '@/ts/L0Entity/PrjFunction/clsMethodModifierEN';
import { clsMethodModifierENEx } from '@/ts/L0Entity/PrjFunction/clsMethodModifierENEx';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const methodModifierEx_Controller = 'MethodModifierExApi';
export const methodModifierEx_ConstructorName = 'methodModifierEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objMethodModifierENS">源对象</param>
/// <param name = "objMethodModifierENT">目标对象</param>
export function MethodModifierEx_CopyToEx(
  objMethodModifierENS: clsMethodModifierEN,
): clsMethodModifierENEx {
  const objMethodModifierENT = new clsMethodModifierENEx();
  try {
    ObjectAssign(objMethodModifierENT, objMethodModifierENS);
    return objMethodModifierENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objMethodModifierENT;
  }
}
