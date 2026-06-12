
 /**
 * 类名:clsFileResourceENEx
 * 表名:FileResource(00050539)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 02:14:42
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 文件资源(FileResource)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFileResourceEN } from "@/ts/L0Entity/ResourceMan/clsFileResourceEN";

export class  clsFileResourceENEx extends clsFileResourceEN
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
case clsFileResourceENEx.con_CodeTypeSimName:
return this.codeTypeSimName;
case clsFileResourceENEx.con_TabName:
return this.tabName;
case clsFileResourceENEx.con_PrjFileTypeName:
return this.prjFileTypeName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CodeTypeSimName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_CodeTypeSimName = "codeTypeSimName";    //简称

 /**
 * 常量:"TabName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_TabName = "tabName";    //表名

 /**
 * 常量:"PrjFileTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static readonly con_PrjFileTypeName = "prjFileTypeName";    //工程文件类型名

public codeTypeSimName = "";    //简称
public tabName = "";    //表名
public prjFileTypeName = "";    //工程文件类型名

/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsFileResourceENEx();
const instance = new clsFileResourceENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}