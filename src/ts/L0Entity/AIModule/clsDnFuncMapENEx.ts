/**
 * 类名:clsDnFuncMapENEx
 * 表名:DnFuncMap(00050549)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:53:01
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 结点函数映射(DnFuncMap)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsDnFuncMapEN } from '@/ts/L0Entity/AIModule/clsDnFuncMapEN';

export class clsDnFuncMapENEx extends clsDnFuncMapEN {
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
      case clsDnFuncMapENEx.con_InDataNodeName:
        return this.inDataNodeName;
      case clsDnFuncMapENEx.con_OutDataNodeName:
        return this.outDataNodeName;
      case clsDnFuncMapENEx.con_AssociationMappingName:
        return this.associationMappingName;
      case clsDnFuncMapENEx.con_FuncMapModeName:
        return this.funcMapModeName;
      case clsDnFuncMapENEx.con_TabName:
        return this.tabName;
      case clsDnFuncMapENEx.con_MapDescription:
        return this.mapDescription;
      case clsDnFuncMapENEx.con_DnFunctionName:
        return this.dnFunctionName;
      case clsDnFuncMapENEx.con_TrClass:
        return this.trClass;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"InDataNodeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InDataNodeName(): string {
    return 'inDataNodeName';
  } //In数据结点名

  /**
   * 常量:"OutDataNodeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutDataNodeName(): string {
    return 'outDataNodeName';
  } //Out数据结点名

  /**
   * 常量:"AssociationMappingName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_AssociationMappingName(): string {
    return 'associationMappingName';
  } //关联关系映射名

  /**
   * 常量:"FuncMapModeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncMapModeName(): string {
    return 'funcMapModeName';
  } //函数映射模式名

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"MapDescription"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_MapDescription(): string {
    return 'mapDescription';
  } //映射说明

  /**
   * 常量:"DnFunctionName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DnFunctionName(): string {
    return 'dnFunctionName';
  } //DN函数

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TrClass(): string {
    return 'trClass';
  } //TrClass

  public inDataNodeName = ''; //In数据结点名
  public outDataNodeName = ''; //Out数据结点名
  public associationMappingName = ''; //关联关系映射名
  public funcMapModeName = ''; //函数映射模式名
  public tabName = ''; //表名
  public mapDescription = ''; //映射说明
  public dnFunctionName = ''; //DN函数
  public trClass = ''; //TrClass
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsDnFuncMapENEx();
    const instance = new clsDnFuncMapENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
