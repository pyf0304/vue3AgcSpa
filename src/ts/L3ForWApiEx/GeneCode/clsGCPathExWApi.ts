/**
 * 类名:clsGCPathExWApi
 * 表名:GCPath(00050595)
 * 生成代码版本:2021.09.26.1
 * 生成日期:2021/09/26 04:20:35
 * 生成者:pyf
 * 生成服务器IP:103.116.76.183
 * 工程名称:AGC
 * 工程ID:0005
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * prjDataBaseId:0005
 * 模块中文名:生成代码
 * 模块英文名:GeneCode
 * 框架-层名:WA_访问扩展层(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
 *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GC路径(GCPath)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2021年09月26日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsGCPathEN } from '@/ts/L0Entity/GeneCode/clsGCPathEN';
import { clsGCPathENEx } from '@/ts/L0Entity/GeneCode/clsGCPathENEx';
import { Format } from '@/ts/PubFun/clsString';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

export const gCPathEx_Controller = 'GCPathExApi';
export const gCPathEx_ConstructorName = 'gCPathEx';

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objGCPathENS:源对象
 * @returns 目标对象=>clsGCPathEN:objGCPathENT
 **/
export function GCPathEx_CopyToEx(objGCPathENS: clsGCPathEN): clsGCPathENEx {
  const objGCPathENT = new clsGCPathENEx();
  try {
    ObjectAssign(objGCPathENT, objGCPathENS);
    return objGCPathENT;
  } catch (e) {
    const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,{0}.', e);
    console.error(strMsg);
    alert(strMsg);
    return objGCPathENT;
  }
}
