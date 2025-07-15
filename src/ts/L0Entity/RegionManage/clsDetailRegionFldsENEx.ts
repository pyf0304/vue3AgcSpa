/**
 * 类名:clsDetailRegionFldsENEx
 * 表名:DetailRegionFlds(00050544)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:59:05
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 详细区域字段(DetailRegionFlds)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsDetailRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsDetailRegionFldsEN';

export class clsDetailRegionFldsENEx extends clsDetailRegionFldsEN {
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
      case clsDetailRegionFldsENEx.con_TabName:
        return this.tabName;
      case clsDetailRegionFldsENEx.con_FldName:
        return this.fldName;
      case clsDetailRegionFldsENEx.con_CtlTypeName:
        return this.ctlTypeName;
      case clsDetailRegionFldsENEx.con_InOutTypeName:
        return this.inOutTypeName;
      case clsDetailRegionFldsENEx.con_CtlCnName:
        return this.ctlCnName;
      case clsDetailRegionFldsENEx.con_ViewIds:
        return this.viewIds;
      case clsDetailRegionFldsENEx.con_CtlTypeAbbr:
        return this.ctlTypeAbbr;
      case clsDetailRegionFldsENEx.con_FldNameV2:
        return this.fldNameV2;
      case clsDetailRegionFldsENEx.con_TrClass:
        return this.trClass;
      case clsDetailRegionFldsENEx.con_TdClass:
        return this.tdClass;
      case clsDetailRegionFldsENEx.con_TabId:
        return this.tabId;
      case clsDetailRegionFldsENEx.con_OutFldName:
        return this.outFldName;
      case clsDetailRegionFldsENEx.con_DnPathIdEx:
        return this.dnPathIdEx;
      case clsDetailRegionFldsENEx.con_DnPathId:
        return this.dnPathId;
      case clsDetailRegionFldsENEx.con_IsUseFunc:
        return this.isUseFunc;
      case clsDetailRegionFldsENEx.con_DataPropertyName:
        return this.dataPropertyName;
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
   * 常量:"FldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"CtlTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtlTypeName(): string {
    return 'ctlTypeName';
  } //控件类型名

  /**
   * 常量:"InOutTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InOutTypeName(): string {
    return 'inOutTypeName';
  } //INOUT类型名称

  /**
   * 常量:"CtlCnName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtlCnName(): string {
    return 'ctlCnName';
  } //控件类型中文名

  /**
   * 常量:"ViewIds"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewIds(): string {
    return 'viewIds';
  } //界面Ids

  /**
   * 常量:"CtlTypeAbbr"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtlTypeAbbr(): string {
    return 'ctlTypeAbbr';
  } //控件类型缩写

  /**
   * 常量:"FldNameV2"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldNameV2(): string {
    return 'fldNameV2';
  } //字段名

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TrClass(): string {
    return 'trClass';
  } //TrClass

  /**
   * 常量:"TdClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TdClass(): string {
    return 'tdClass';
  } //TdClass

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"OutFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutFldName(): string {
    return 'outFldName';
  } //Out字段名

  /**
   * 常量:"DnPathIdEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DnPathIdEx(): string {
    return 'dnPathIdEx';
  } //DN路径IdEx

  /**
   * 常量:"DnPathId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DnPathId(): string {
    return 'dnPathId';
  } //DN路径Id

  /**
   * 常量:"IsUseFunc"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsUseFunc(): string {
    return 'isUseFunc';
  } //使用函数映射

  /**
   * 常量:"DataPropertyName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataPropertyName(): string {
    return 'dataPropertyName';
  } //数据属性名

  public tabName = ''; //表名
  public fldName = ''; //字段名
  public ctlTypeName = ''; //控件类型名
  public inOutTypeName = ''; //INOUT类型名称
  public ctlCnName = ''; //控件类型中文名
  public viewIds = ''; //界面Ids
  public ctlTypeAbbr = ''; //控件类型缩写
  public fldNameV2 = ''; //字段名
  public trClass = ''; //TrClass
  public tdClass = ''; //TdClass
  public tabId = ''; //表ID
  public outFldName = ''; //Out字段名
  public dnPathIdEx = ''; //DN路径IdEx
  public dnPathId = ''; //DN路径Id
  public isUseFunc = false; //使用函数映射
  public dataPropertyName = ''; //数据属性名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsDetailRegionFldsENEx();
    const instance = new clsDetailRegionFldsENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
