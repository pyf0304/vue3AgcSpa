
 /**
 * 类名:clsGC_CodeTypeRelationEN
 * 表名:GC_CodeTypeRelation(00050646)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/05 05:15:01
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * GC_代码类型关系(GC_CodeTypeRelation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

/**
 * GC_代码类型关系主键类型定义
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_KeyType)
 **/
export type GC_CodeTypeRelationKey = {
  relationId: number;
};
export class  clsGC_CodeTypeRelationEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = ""; //
public static readonly _PrimaryTypeId: string = "02"; //identity
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "GC_CodeTypeRelation"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "RelationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 7;
public static readonly _AttributeName = ["relationId", "parentCodeTypeId", "childCodeTypeId", "ctRelationTypeId", "description", "updDate", "updUser"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mlngRelationId = 0;    //关系Id
private mstrParentCodeTypeId = "";    //父代码类型Id
private mstrChildCodeTypeId = "";    //子代码类型Id
private mstrCtRelationTypeId = "";    //Ct关系类型Id
private mstrDescription = "";    //描述
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改者

/**
 * 关系Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRelationId (value: number)
{
if (value  != undefined)
{
 this.relationId = value;
    this.hmProperty["relationId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 父代码类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetParentCodeTypeId (value: string)
{
if (value  != undefined)
{
 this.parentCodeTypeId = value;
    this.hmProperty["parentCodeTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 子代码类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetChildCodeTypeId (value: string)
{
if (value  != undefined)
{
 this.childCodeTypeId = value;
    this.hmProperty["childCodeTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Ct关系类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCtRelationTypeId (value: string)
{
if (value  != undefined)
{
 this.ctRelationTypeId = value;
    this.hmProperty["ctRelationTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 描述(说明:;字段类型:varchar;字段长度:300;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDescription (value: string)
{
if (value  != undefined)
{
 this.description = value;
    this.hmProperty["description"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsGC_CodeTypeRelationEN.con_RelationId:
return this.relationId;
case clsGC_CodeTypeRelationEN.con_ParentCodeTypeId:
return this.parentCodeTypeId;
case clsGC_CodeTypeRelationEN.con_ChildCodeTypeId:
return this.childCodeTypeId;
case clsGC_CodeTypeRelationEN.con_CtRelationTypeId:
return this.ctRelationTypeId;
case clsGC_CodeTypeRelationEN.con_Description:
return this.description;
case clsGC_CodeTypeRelationEN.con_UpdDate:
return this.updDate;
case clsGC_CodeTypeRelationEN.con_UpdUser:
return this.updUser;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GC_CodeTypeRelation]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsGC_CodeTypeRelationEN.con_RelationId:
this.relationId = Number(strValue);
    this.hmProperty["relationId"] = true;
break;
case clsGC_CodeTypeRelationEN.con_ParentCodeTypeId:
this.parentCodeTypeId = strValue;
    this.hmProperty["parentCodeTypeId"] = true;
break;
case clsGC_CodeTypeRelationEN.con_ChildCodeTypeId:
this.childCodeTypeId = strValue;
    this.hmProperty["childCodeTypeId"] = true;
break;
case clsGC_CodeTypeRelationEN.con_CtRelationTypeId:
this.ctRelationTypeId = strValue;
    this.hmProperty["ctRelationTypeId"] = true;
break;
case clsGC_CodeTypeRelationEN.con_Description:
this.description = strValue;
    this.hmProperty["description"] = true;
break;
case clsGC_CodeTypeRelationEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsGC_CodeTypeRelationEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[GC_CodeTypeRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public relationId = 0;    //关系Id
public parentCodeTypeId = "";    //父代码类型Id
public childCodeTypeId = "";    //子代码类型Id
public ctRelationTypeId = "";    //Ct关系类型Id
public description = "";    //描述
public updDate = "";    //修改日期
public updUser = "";    //修改者


 /**
 * 常量:"RelationId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_RelationId = "relationId";    //关系Id

 /**
 * 常量:"ParentCodeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ParentCodeTypeId = "parentCodeTypeId";    //父代码类型Id

 /**
 * 常量:"ChildCodeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ChildCodeTypeId = "childCodeTypeId";    //子代码类型Id

 /**
 * 常量:"CtRelationTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CtRelationTypeId = "ctRelationTypeId";    //Ct关系类型Id

 /**
 * 常量:"Description"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Description = "description";    //描述

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate = "updDate";    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdUser = "updUser";    //修改者

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsGC_CodeTypeRelationEN();
const instance = new clsGC_CodeTypeRelationEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}