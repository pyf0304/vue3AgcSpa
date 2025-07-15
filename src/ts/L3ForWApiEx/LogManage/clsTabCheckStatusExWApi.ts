/*-- -- -- -- -- -- -- -- -- -- --
类名:clsTabCheckStatusExWApi
表名:TabCheckStatus(00050568)
生成代码版本:2020.06.27.1
生成日期:2020/06/27 23:13:53
生成者:
生成服务器IP:192.168.1.10
工程名称:AGC
工程ID:0005
相关数据库:tzar.tpddns.cn,19433AGC_CS12
prjDataBaseId:0213
模块中文名:日志管理
模块英文名:LogManage
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 表检查状态(TabCheckStatus)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年06月27日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import { clsTabCheckStatusEN } from '@/ts/L0Entity/LogManage/clsTabCheckStatusEN';
import { clsTabCheckStatusENEx } from '@/ts/L0Entity/LogManage/clsTabCheckStatusENEx';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
export const tabCheckStatusEx_Controller = 'TabCheckStatusExApi';
export const tabCheckStatusEx_ConstructorName = 'tabCheckStatusEx';
/// <summary>
/// 把同一个类的对象,复制到该类的扩展对象
/// (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
/// </summary>
/// <param name = "objTabCheckStatusENS">源对象</param>
/// <param name = "objTabCheckStatusENT">目标对象</param>
export function TabCheckStatusEx_CopyToEx(
  objTabCheckStatusENS: clsTabCheckStatusEN,
): clsTabCheckStatusENEx {
  const objTabCheckStatusENT = new clsTabCheckStatusENEx();
  try {
    ObjectAssign(objTabCheckStatusENT, objTabCheckStatusENS);
    return objTabCheckStatusENT;
  } catch (e: any) {
    const strMsg = Format('(errid:WiTsCs0011)Copy表对象数据出错,${e}.');
    console.error(strMsg);
    alert(strMsg);
    return objTabCheckStatusENT;
  }
}
