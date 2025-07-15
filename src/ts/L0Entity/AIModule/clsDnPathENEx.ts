/**
 * 类名:clsDnPathENEx
 * 表名:DnPath(00050591)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:54
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
 * 数据结点路径(DnPath)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsDnPathEN } from '@/ts/L0Entity/AIModule/clsDnPathEN';

export class clsDnPathENEx extends clsDnPathEN {
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
      case clsDnPathENEx.con_CmPrjId:
        return this.cmPrjId;
      case clsDnPathENEx.con_InDataNodeName:
        return this.inDataNodeName;
      case clsDnPathENEx.con_InFldName:
        return this.inFldName;
      case clsDnPathENEx.con_InFldId:
        return this.inFldId;
      case clsDnPathENEx.con_OutDataNodeName:
        return this.outDataNodeName;
      case clsDnPathENEx.con_OutFldName:
        return this.outFldName;
      case clsDnPathENEx.con_DataNodeName:
        return this.dataNodeName;
      case clsDnPathENEx.con_AssociationMappingName:
        return this.associationMappingName;
      case clsDnPathENEx.con_TrClass:
        return this.trClass;
      case clsDnPathENEx.con_RefNum:
        return this.refNum;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  /**
   * 常量:"InDataNodeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InDataNodeName(): string {
    return 'inDataNodeName';
  } //In数据结点名

  /**
   * 常量:"InFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InFldName(): string {
    return 'inFldName';
  } //In字段名

  /**
   * 常量:"InFldId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InFldId(): string {
    return 'inFldId';
  } //In字段Id

  /**
   * 常量:"OutDataNodeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutDataNodeName(): string {
    return 'outDataNodeName';
  } //Out数据结点名

  /**
   * 常量:"OutFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutFldName(): string {
    return 'outFldName';
  } //Out字段名

  /**
   * 常量:"DataNodeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataNodeName(): string {
    return 'dataNodeName';
  } //数据结点名

  /**
   * 常量:"AssociationMappingName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_AssociationMappingName(): string {
    return 'associationMappingName';
  } //关联关系映射名

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TrClass(): string {
    return 'trClass';
  } //TrClass

  /**
   * 常量:"RefNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RefNum(): string {
    return 'refNum';
  } //引用数

  public cmPrjId = ''; //Cm工程Id
  public inDataNodeName = ''; //In数据结点名
  public inFldName = ''; //In字段名
  public inFldId = ''; //In字段Id
  public outDataNodeName = ''; //Out数据结点名
  public outFldName = ''; //Out字段名
  public dataNodeName = ''; //数据结点名
  public associationMappingName = ''; //关联关系映射名
  public trClass = ''; //TrClass
  public refNum = 0; //引用数
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsDnPathENEx();
    const instance = new clsDnPathENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
