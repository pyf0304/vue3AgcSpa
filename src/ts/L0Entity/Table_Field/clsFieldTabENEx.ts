/**
 * 类名:clsFieldTabENEx
 * 表名:FieldTab(00050021)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:47:06
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
 * 工程字段(FieldTab)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';

export class clsFieldTabENEx extends clsFieldTabEN {
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
      case clsFieldTabENEx.con_FieldTypeName:
        return this.fieldTypeName;
      case clsFieldTabENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsFieldTabENEx.con_ObjDataTypeAbbr:
        return this.objDataTypeAbbr;
      case clsFieldTabENEx.con_ConvFldName:
        return this.convFldName;
      case clsFieldTabENEx.con_FldNameEx:
        return this.fldNameEx;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FieldTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FieldTypeName(): string {
    return 'fieldTypeName';
  } //字段类型名

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"ObjDataTypeAbbr"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ObjDataTypeAbbr(): string {
    return 'objDataTypeAbbr';
  } //数据类型对象

  /**
   * 常量:"ConvFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ConvFldName(): string {
    return 'convFldName';
  } //转换字段名

  /**
   * 常量:"FldNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldNameEx(): string {
    return 'fldNameEx';
  } //字段名Ex

  public fieldTypeName = ''; //字段类型名
  public dataTypeName = ''; //数据类型名称
  public objDataTypeAbbr = new clsDataTypeAbbrEN(); //数据类型对象
  public convFldName = ''; //转换字段名
  public fldNameEx = ''; //字段名Ex
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFieldTabENEx();
    const instance = new clsFieldTabENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
