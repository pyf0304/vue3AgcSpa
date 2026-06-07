
 /**
 * 类名:clsGC_CodeTypeRelationENEx
 * 表名:GC_CodeTypeRelation(00050646)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 03:32:16
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
 * GC_代码类型关系(GC_CodeTypeRelation)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsGC_CodeTypeRelationEN } from "@/ts/L0Entity/GeneCode/clsGC_CodeTypeRelationEN";

export class  clsGC_CodeTypeRelationENEx extends clsGC_CodeTypeRelationEN
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
case clsGC_CodeTypeRelationENEx.con_ChildCodeTypeName:
return this.childCodeTypeName;
case clsGC_CodeTypeRelationENEx.con_ArrowType:
return this.arrowType;
case clsGC_CodeTypeRelationENEx.con_RelationTypeName:
return this.relationTypeName;
case clsGC_CodeTypeRelationENEx.con_ParentCodeTypeName:
return this.parentCodeTypeName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"ChildCodeTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_ChildCodeTypeName = "childCodeTypeName";    //子代码类型名

 /**
 * 常量:"ArrowType"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_ArrowType = "arrowType";    //箭头类型

 /**
 * 常量:"RelationTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_RelationTypeName = "relationTypeName";    //关系类型名

 /**
 * 常量:"ParentCodeTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_ParentCodeTypeName = "parentCodeTypeName";    //父代码类型名

public childCodeTypeName = "";    //子代码类型名
public arrowType = "";    //箭头类型
public relationTypeName = "";    //关系类型名
public parentCodeTypeName = "";    //父代码类型名

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsGC_CodeTypeRelationENEx();
const instance = new clsGC_CodeTypeRelationENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}