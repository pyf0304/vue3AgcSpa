/**
 * 类名:clsvDnFuncMap_SimENEx
 * 表名:vDnFuncMap_Sim(00050625)
 * 版本:2024.10.22.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/26 10:03:59
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * v结点函数映射_Sim(vDnFuncMap_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvDnFuncMap_SimEN } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_SimEN';

export class clsvDnFuncMap_SimENEx extends clsvDnFuncMap_SimEN {
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
      case clsvDnFuncMap_SimENEx.con_InDataNodeName:
        return this.inDataNodeName;
      case clsvDnFuncMap_SimENEx.con_DnFunctionName:
        return this.dnFunctionName;
      case clsvDnFuncMap_SimENEx.con_OutDataNodeName:
        return this.outDataNodeName;
      case clsvDnFuncMap_SimENEx.con_TabName:
        return this.tabName;
      case clsvDnFuncMap_SimENEx.con_FuncMapModeName:
        return this.funcMapModeName;
      case clsvDnFuncMap_SimENEx.con_AssociationMappingName:
        return this.associationMappingName;
      case clsvDnFuncMap_SimENEx.con_TrClass:
        return this.trClass;
      case clsvDnFuncMap_SimENEx.con_MapDescription:
        return this.mapDescription;
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
   * 常量:"DnFunctionName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DnFunctionName(): string {
    return 'dnFunctionName';
  } //DN函数

  /**
   * 常量:"OutDataNodeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutDataNodeName(): string {
    return 'outDataNodeName';
  } //Out数据结点名

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"FuncMapModeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncMapModeName(): string {
    return 'funcMapModeName';
  } //函数映射模式名

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
   * 常量:"MapDescription"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_MapDescription(): string {
    return 'mapDescription';
  } //映射说明

  public inDataNodeName = ''; //In数据结点名
  public dnFunctionName = ''; //DN函数
  public outDataNodeName = ''; //Out数据结点名
  public tabName = ''; //表名
  public funcMapModeName = ''; //函数映射模式名
  public associationMappingName = ''; //关联关系映射名
  public trClass = ''; //TrClass
  public mapDescription = ''; //映射说明
}
