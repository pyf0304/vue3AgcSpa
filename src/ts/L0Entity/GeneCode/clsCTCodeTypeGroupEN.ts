
 /**
 * 类名:clsCTCodeTypeGroupEN
 * 表名:CTCodeTypeGroup(00050648)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/06 03:37:55
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
 * CTCodeTypeGroup(CTCodeTypeGroup)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

/**
 * CTCodeTypeGroup主键类型定义
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_KeyType)
 **/
export type CTCodeTypeGroupKey = {
  ctGroupId: string;
};
export class  clsCTCodeTypeGroupEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "04"; //sessionStorage
public static readonly _PrimaryTypeId: string = "03"; //自增
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "CTCodeTypeGroup"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "CtGroupId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 9;
public static readonly _AttributeName = ["ctGroupId", "applicationTypeId", "groupName", "groupENName", "description", "orderNum", "inUse", "updDate", "updUser"];
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
private mstrCtGroupId = "";    //Ct组Id
private mintApplicationTypeId = 0;    //应用程序类型ID
private mstrGroupName = "";    //组名
private mstrGroupENName = "";    //组英文名
private mstrDescription = "";    //描述
private mintOrderNum = 0;    //序号
private mbolInUse = false;    //是否在用
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改者

/**
 * Ct组Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCtGroupId (value: string)
{
if (value  != undefined)
{
 this.ctGroupId = value;
    this.hmProperty["ctGroupId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 应用程序类型ID(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetApplicationTypeId (value: number)
{
if (value  != undefined)
{
 this.applicationTypeId = value;
    this.hmProperty["applicationTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 组名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGroupName (value: string)
{
if (value  != undefined)
{
 this.groupName = value;
    this.hmProperty["groupName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 组英文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGroupENName (value: string)
{
if (value  != undefined)
{
 this.groupENName = value;
    this.hmProperty["groupENName"] = true;
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
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetInUse (value: boolean)
{
if (value  != undefined)
{
 this.inUse = value;
    this.hmProperty["inUse"] = true;
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
case clsCTCodeTypeGroupEN.con_CtGroupId:
return this.ctGroupId;
case clsCTCodeTypeGroupEN.con_ApplicationTypeId:
return this.applicationTypeId;
case clsCTCodeTypeGroupEN.con_GroupName:
return this.groupName;
case clsCTCodeTypeGroupEN.con_GroupENName:
return this.groupENName;
case clsCTCodeTypeGroupEN.con_Description:
return this.description;
case clsCTCodeTypeGroupEN.con_OrderNum:
return this.orderNum;
case clsCTCodeTypeGroupEN.con_InUse:
return this.inUse;
case clsCTCodeTypeGroupEN.con_UpdDate:
return this.updDate;
case clsCTCodeTypeGroupEN.con_UpdUser:
return this.updUser;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CTCodeTypeGroup]中不存在!`;
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
case clsCTCodeTypeGroupEN.con_CtGroupId:
this.ctGroupId = strValue;
    this.hmProperty["ctGroupId"] = true;
break;
case clsCTCodeTypeGroupEN.con_ApplicationTypeId:
this.applicationTypeId = Number(strValue);
    this.hmProperty["applicationTypeId"] = true;
break;
case clsCTCodeTypeGroupEN.con_GroupName:
this.groupName = strValue;
    this.hmProperty["groupName"] = true;
break;
case clsCTCodeTypeGroupEN.con_GroupENName:
this.groupENName = strValue;
    this.hmProperty["groupENName"] = true;
break;
case clsCTCodeTypeGroupEN.con_Description:
this.description = strValue;
    this.hmProperty["description"] = true;
break;
case clsCTCodeTypeGroupEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsCTCodeTypeGroupEN.con_InUse:
this.inUse = Boolean(strValue);
    this.hmProperty["inUse"] = true;
break;
case clsCTCodeTypeGroupEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsCTCodeTypeGroupEN.con_UpdUser:
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
strMsg = `字段名:[${strFldName}]在表对象:[CTCodeTypeGroup]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public ctGroupId = "";    //Ct组Id
public applicationTypeId = 0;    //应用程序类型ID
public groupName = "";    //组名
public groupENName = "";    //组英文名
public description = "";    //描述
public orderNum = 0;    //序号
public inUse = false;    //是否在用
public updDate = "";    //修改日期
public updUser = "";    //修改者


 /**
 * 常量:"CtGroupId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_CtGroupId = "ctGroupId";    //Ct组Id

 /**
 * 常量:"ApplicationTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_ApplicationTypeId = "applicationTypeId";    //应用程序类型ID

 /**
 * 常量:"GroupName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_GroupName = "groupName";    //组名

 /**
 * 常量:"GroupENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_GroupENName = "groupENName";    //组英文名

 /**
 * 常量:"Description"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Description = "description";    //描述

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_OrderNum = "orderNum";    //序号

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_InUse = "inUse";    //是否在用

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
//return propName in new clsCTCodeTypeGroupEN();
const instance = new clsCTCodeTypeGroupEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}