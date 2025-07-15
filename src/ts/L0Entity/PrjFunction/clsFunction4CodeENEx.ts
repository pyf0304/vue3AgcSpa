/**
 * 类名:clsFunction4CodeENEx
 * 表名:Function4Code(00050386)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:27
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 函数4Code(Function4Code)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFunction4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4CodeEN';

export class clsFunction4CodeENEx extends clsFunction4CodeEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      case clsFunction4CodeENEx.con_FuncTypeName:
        return this.funcTypeName;
      case clsFunction4CodeENEx.con_FuncAccessModeName:
        return this.funcAccessModeName;
      case clsFunction4CodeENEx.con_FuncPurposeName:
        return this.funcPurposeName;
      case clsFunction4CodeENEx.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsFunction4CodeENEx.con_Func4GCCount:
        return this.func4GCCount;
      case clsFunction4CodeENEx.con_FeatureCount:
        return this.featureCount;
      case clsFunction4CodeENEx.con_ParaNum:
        return this.paraNum;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FuncTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncTypeName(): string {
    return 'funcTypeName';
  } //函数类型名

  /**
   * 常量:"FuncAccessModeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncAccessModeName(): string {
    return 'funcAccessModeName';
  } //函数操作模式名

  /**
   * 常量:"FuncPurposeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncPurposeName(): string {
    return 'funcPurposeName';
  } //函数用途名

  /**
   * 常量:"ApplicationTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"Func4GCCount"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_Func4GCCount(): string {
    return 'func4GCCount';
  } //函数4GC数

  /**
   * 常量:"FeatureCount"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureCount(): string {
    return 'featureCount';
  } //功能数

  /**
   * 常量:"ParaNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ParaNum(): string {
    return 'paraNum';
  } //参数个数

  public funcTypeName = ''; //函数类型名
  public funcAccessModeName = ''; //函数操作模式名
  public funcPurposeName = ''; //函数用途名
  public applicationTypeSimName = ''; //应用程序类型简称
  public func4GCCount = 0; //函数4GC数
  public featureCount = 0; //功能数
  public paraNum = 0; //参数个数
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFunction4CodeENEx();
    const instance = new clsFunction4CodeENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
