
 /**
 * 类名:clsCTCodeTypeGroupENEx
 * 表名:CTCodeTypeGroup(00050648)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 03:38:03
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * CTCodeTypeGroup(CTCodeTypeGroup)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCTCodeTypeGroupEN } from "@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupEN";

export class  clsCTCodeTypeGroupENEx extends clsCTCodeTypeGroupEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsCTCodeTypeGroupENEx.con_ApplicationTypeName:
return this.applicationTypeName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"ApplicationTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_ApplicationTypeName = "applicationTypeName";    //应用程序类型名称

public applicationTypeName = "";    //应用程序类型名称

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsCTCodeTypeGroupENEx();
const instance = new clsCTCodeTypeGroupENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}