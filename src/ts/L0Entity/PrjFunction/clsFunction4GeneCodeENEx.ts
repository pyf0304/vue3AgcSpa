/**
 * 类名:clsFunction4GeneCodeENEx
 * 表名:Function4GeneCode(00050311)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 23:51:53
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
 * 函数4GeneCode(Function4GeneCode)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFunction4GeneCodeEN } from '@/ts/L0Entity/PrjFunction/clsFunction4GeneCodeEN';

export class clsFunction4GeneCodeENEx extends clsFunction4GeneCodeEN {
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
      case clsFunction4GeneCodeENEx.con_CodeTypeName:
        return this.codeTypeName;
      case clsFunction4GeneCodeENEx.con_FuncName4Code:
        return this.funcName4Code;
      case clsFunction4GeneCodeENEx.con_FuncTypeName:
        return this.funcTypeName;
      case clsFunction4GeneCodeENEx.con_FuncGCTypeName:
        return this.funcGCTypeName;
      case clsFunction4GeneCodeENEx.con_ProgLangTypeName:
        return this.progLangTypeName;
      case clsFunction4GeneCodeENEx.con_SqlDsTypeName:
        return this.sqlDsTypeName;
      case clsFunction4GeneCodeENEx.con_ParentFeatureName:
        return this.parentFeatureName;
      case clsFunction4GeneCodeENEx.con_FeatureName:
        return this.featureName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CodeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"FuncName4Code"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncName4Code(): string {
    return 'funcName4Code';
  } //函数名4Code

  /**
   * 常量:"FuncTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncTypeName(): string {
    return 'funcTypeName';
  } //函数类型名

  /**
   * 常量:"FuncGCTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncGCTypeName(): string {
    return 'funcGCTypeName';
  } //函数生成代码类型名

  /**
   * 常量:"ProgLangTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ProgLangTypeName(): string {
    return 'progLangTypeName';
  } //编程语言类型名

  /**
   * 常量:"SqlDsTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_SqlDsTypeName(): string {
    return 'sqlDsTypeName';
  } //Sql数据源名

  /**
   * 常量:"ParentFeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ParentFeatureName(): string {
    return 'parentFeatureName';
  } //父功能名

  /**
   * 常量:"FeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  public codeTypeName = ''; //代码类型名
  public funcName4Code = ''; //函数名4Code
  public funcTypeName = ''; //函数类型名
  public funcGCTypeName = ''; //函数生成代码类型名
  public progLangTypeName = ''; //编程语言类型名
  public sqlDsTypeName = ''; //Sql数据源名
  public parentFeatureName = ''; //父功能名
  public featureName = ''; //功能名称
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFunction4GeneCodeENEx();
    const instance = new clsFunction4GeneCodeENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
