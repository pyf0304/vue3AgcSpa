
 /**
 * 类名:clsPrjFileTypeEN
 * 表名:PrjFileType(00050649)
 * 版本:2026.05.30(服务器:WIN-SRV103-116)
 * 日期:2026/06/13 06:18:31
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 工程文件类型(PrjFileType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

/**
 * 工程文件类型主键类型定义
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_KeyType)
 **/
export type PrjFileTypeKey = {
  prjFileTypeId: string;
};
export class  clsPrjFileTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static _CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static readonly _CacheModeId: string = "03"; //localStorage
public static readonly _PrimaryTypeId: string = "03"; //自增
public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static readonly _WhereFormat = ""; //条件格式串
public static readonly _CurrTabName: string = "PrjFileType"; //当前表名,与该类相关的表名
public static readonly _KeyFldName: string = "PrjFileTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static readonly _AttributeCount = 8;
public static readonly _AttributeName = ["prjFileTypeId", "prjFileTypeName", "prjFileTypeENName", "inUse", "orderNum", "updDate", "updUserId", "memo"];
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
private mstrPrjFileTypeId = "";    //项目文件类型Id
private mstrPrjFileTypeName = "";    //工程文件类型名
private mstrPrjFileTypeENName = "";    //工程文件类型英文名
private mbolInUse = false;    //是否在用
private mintOrderNum = 0;    //序号
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //说明

/**
 * 项目文件类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrjFileTypeId (value: string)
{
if (value  != undefined)
{
 this.prjFileTypeId = value;
    this.hmProperty["prjFileTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 工程文件类型名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrjFileTypeName (value: string)
{
if (value  != undefined)
{
 this.prjFileTypeName = value;
    this.hmProperty["prjFileTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 工程文件类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPrjFileTypeENName (value: string)
{
if (value  != undefined)
{
 this.prjFileTypeENName = value;
    this.hmProperty["prjFileTypeENName"] = true;
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
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
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
case clsPrjFileTypeEN.con_PrjFileTypeId:
return this.prjFileTypeId;
case clsPrjFileTypeEN.con_PrjFileTypeName:
return this.prjFileTypeName;
case clsPrjFileTypeEN.con_PrjFileTypeENName:
return this.prjFileTypeENName;
case clsPrjFileTypeEN.con_InUse:
return this.inUse;
case clsPrjFileTypeEN.con_OrderNum:
return this.orderNum;
case clsPrjFileTypeEN.con_UpdDate:
return this.updDate;
case clsPrjFileTypeEN.con_UpdUserId:
return this.updUserId;
case clsPrjFileTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[PrjFileType]中不存在!`;
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
case clsPrjFileTypeEN.con_PrjFileTypeId:
this.prjFileTypeId = strValue;
    this.hmProperty["prjFileTypeId"] = true;
break;
case clsPrjFileTypeEN.con_PrjFileTypeName:
this.prjFileTypeName = strValue;
    this.hmProperty["prjFileTypeName"] = true;
break;
case clsPrjFileTypeEN.con_PrjFileTypeENName:
this.prjFileTypeENName = strValue;
    this.hmProperty["prjFileTypeENName"] = true;
break;
case clsPrjFileTypeEN.con_InUse:
this.inUse = Boolean(strValue);
    this.hmProperty["inUse"] = true;
break;
case clsPrjFileTypeEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clsPrjFileTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsPrjFileTypeEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsPrjFileTypeEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[PrjFileType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public prjFileTypeId = "";    //项目文件类型Id
public prjFileTypeName = "";    //工程文件类型名
public prjFileTypeENName = "";    //工程文件类型英文名
public inUse = false;    //是否在用
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //说明


 /**
 * 常量:"PrjFileTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrjFileTypeId = "prjFileTypeId";    //项目文件类型Id

 /**
 * 常量:"PrjFileTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrjFileTypeName = "prjFileTypeName";    //工程文件类型名

 /**
 * 常量:"PrjFileTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_PrjFileTypeENName = "prjFileTypeENName";    //工程文件类型英文名

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_InUse = "inUse";    //是否在用

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_OrderNum = "orderNum";    //序号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdDate = "updDate";    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_UpdUserId = "updUserId";    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static readonly con_Memo = "memo";    //说明

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
//return propName in new clsPrjFileTypeEN();
const instance = new clsPrjFileTypeEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumPrjFileType
{
 /**
 * 系统文件
 **/
static readonly SysFile_01 = "01";
 /**
 * 生成代码文件
 **/
static readonly GcFile_02 = "02";
 /**
 * 系统设置文件
 **/
static readonly SysSetFile_05 = "05";
}