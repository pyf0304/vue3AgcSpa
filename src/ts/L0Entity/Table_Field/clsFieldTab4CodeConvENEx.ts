/**
 * 类名:clsFieldTab4CodeConvENEx
 * 表名:FieldTab4CodeConv(00050593)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:33
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 字段4代码转换(FieldTab4CodeConv)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';

export class clsFieldTab4CodeConvENEx extends clsFieldTab4CodeConvEN {
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
      case clsFieldTab4CodeConvENEx.con_FldName:
        return this.fldName;
      case clsFieldTab4CodeConvENEx.con_CodeTabName:
        return this.codeTabName;
      case clsFieldTab4CodeConvENEx.con_CodeFldName:
        return this.codeFldName;
      case clsFieldTab4CodeConvENEx.con_CodeNameFldName:
        return this.codeNameFldName;
      case clsFieldTab4CodeConvENEx.con_TabName:
        return this.tabName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"CodeTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeTabName(): string {
    return 'codeTabName';
  } //表名

  /**
   * 常量:"CodeFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeFldName(): string {
    return 'codeFldName';
  } //代码字段名

  /**
   * 常量:"CodeNameFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeNameFldName(): string {
    return 'codeNameFldName';
  } //代码名称字段名

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  public fldName = ''; //字段名
  public codeTabName = ''; //表名
  public codeFldName = ''; //代码字段名
  public codeNameFldName = ''; //代码名称字段名
  public tabName = ''; //表名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFieldTab4CodeConvENEx();
    const instance = new clsFieldTab4CodeConvENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
