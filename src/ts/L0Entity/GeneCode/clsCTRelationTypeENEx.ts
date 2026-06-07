
 /**
 * 类名:clsCTRelationTypeENEx
 * 表名:CTRelationType(00050645)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 03:26:07
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
 * CT关系类型(CTRelationType)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCTRelationTypeEN } from "@/ts/L0Entity/GeneCode/clsCTRelationTypeEN";

export class  clsCTRelationTypeENEx extends clsCTRelationTypeEN
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
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsCTRelationTypeENEx();
const instance = new clsCTRelationTypeENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}