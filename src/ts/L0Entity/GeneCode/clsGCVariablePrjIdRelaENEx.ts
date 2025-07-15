/**
 * 类名:clsGCVariablePrjIdRelaENEx
 * 表名:GCVariablePrjIdRela(00050617)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:51
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * GCVariablePrjIdRela(GCVariablePrjIdRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsGCVariablePrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCVariablePrjIdRelaEN';

export class clsGCVariablePrjIdRelaENEx extends clsGCVariablePrjIdRelaEN {
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
      case clsGCVariablePrjIdRelaENEx.con_PrjName:
        return this.prjName;
      case clsGCVariablePrjIdRelaENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsGCVariablePrjIdRelaENEx.con_CsType:
        return this.csType;
      case clsGCVariablePrjIdRelaENEx.con_VarName:
        return this.varName;
      case clsGCVariablePrjIdRelaENEx.con_VarTypeId:
        return this.varTypeId;
      case clsGCVariablePrjIdRelaENEx.con_TypeScriptType:
        return this.typeScriptType;
      case clsGCVariablePrjIdRelaENEx.con_DataTypeId:
        return this.dataTypeId;
      case clsGCVariablePrjIdRelaENEx.con_VarTypeName:
        return this.varTypeName;
      case clsGCVariablePrjIdRelaENEx.con_FldName:
        return this.fldName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"CsType"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CsType(): string {
    return 'csType';
  } //CS类型

  /**
   * 常量:"VarName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_VarName(): string {
    return 'varName';
  } //变量名

  /**
   * 常量:"VarTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_VarTypeId(): string {
    return 'varTypeId';
  } //变量类型Id

  /**
   * 常量:"TypeScriptType"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TypeScriptType(): string {
    return 'typeScriptType';
  } //TypeScript类型

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"VarTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_VarTypeName(): string {
    return 'varTypeName';
  } //变量类型名

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  public prjName = ''; //工程名称
  public dataTypeName = ''; //数据类型名称
  public csType = ''; //CS类型
  public varName = ''; //变量名
  public varTypeId = ''; //变量类型Id
  public typeScriptType = ''; //TypeScript类型
  public dataTypeId = ''; //数据类型Id
  public varTypeName = ''; //变量类型名
  public fldName = ''; //字段名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsGCVariablePrjIdRelaENEx();
    const instance = new clsGCVariablePrjIdRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
