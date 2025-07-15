/**
 * 类名:clsTabFunctionPropENEx
 * 表名:TabFunctionProp(00050522)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:50:36
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
 * 表函数属性(TabFunctionProp)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsTabFunctionPropEN } from '@/ts/L0Entity/PrjFunction/clsTabFunctionPropEN';

export class clsTabFunctionPropENEx extends clsTabFunctionPropEN {
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
      case clsTabFunctionPropENEx.con_TabName:
        return this.tabName;
      case clsTabFunctionPropENEx.con_FunctionTemplateName:
        return this.functionTemplateName;
      case clsTabFunctionPropENEx.con_CodeTypeName:
        return this.codeTypeName;
      case clsTabFunctionPropENEx.con_CodeTypeENName:
        return this.codeTypeENName;
      case clsTabFunctionPropENEx.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsTabFunctionPropENEx.con_ProgLangTypeName:
        return this.progLangTypeName;
      case clsTabFunctionPropENEx.con_MethodModifierName:
        return this.methodModifierName;
      case clsTabFunctionPropENEx.con_FuncName:
        return this.funcName;
      case clsTabFunctionPropENEx.con_FuncId4Code:
        return this.funcId4Code;
      case clsTabFunctionPropENEx.con_FuncName4Code:
        return this.funcName4Code;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"FunctionTemplateName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FunctionTemplateName(): string {
    return 'functionTemplateName';
  } //函数模板名

  /**
   * 常量:"CodeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"CodeTypeENName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeTypeENName(): string {
    return 'codeTypeENName';
  } //代码类型英文名

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"ProgLangTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ProgLangTypeName(): string {
    return 'progLangTypeName';
  } //编程语言类型名

  /**
   * 常量:"MethodModifierName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_MethodModifierName(): string {
    return 'methodModifierName';
  } //函数修饰语名称

  /**
   * 常量:"FuncName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"FuncId4Code"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncId4Code(): string {
    return 'funcId4Code';
  } //函数Id4Code

  /**
   * 常量:"FuncName4Code"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncName4Code(): string {
    return 'funcName4Code';
  } //函数名4Code

  public tabName = ''; //表名
  public functionTemplateName = ''; //函数模板名
  public codeTypeName = ''; //代码类型名
  public codeTypeENName = ''; //代码类型英文名
  public progLangTypeId = ''; //编程语言类型Id
  public progLangTypeName = ''; //编程语言类型名
  public methodModifierName = ''; //函数修饰语名称
  public funcName = ''; //函数名
  public funcId4Code = ''; //函数Id4Code
  public funcName4Code = ''; //函数名4Code
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsTabFunctionPropENEx();
    const instance = new clsTabFunctionPropENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
