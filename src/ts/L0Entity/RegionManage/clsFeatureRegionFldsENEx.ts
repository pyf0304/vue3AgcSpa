/**
 * 类名:clsFeatureRegionFldsENEx
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:59:09
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
 * 功能区域字段(FeatureRegionFlds)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';

export class clsFeatureRegionFldsENEx extends clsFeatureRegionFldsEN {
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
      case clsFeatureRegionFldsENEx.con_FeatureName:
        return this.featureName;
      case clsFeatureRegionFldsENEx.con_TabName:
        return this.tabName;
      case clsFeatureRegionFldsENEx.con_RegionTypeName:
        return this.regionTypeName;
      case clsFeatureRegionFldsENEx.con_CtlCnName:
        return this.ctlCnName;
      case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
        return this.ctlTypeAbbr;
      case clsFeatureRegionFldsENEx.con_ViewImplName:
        return this.viewImplName;
      case clsFeatureRegionFldsENEx.con_CtlTypeName:
        return this.ctlTypeName;
      case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
        return this.valueGivingModeName;
      case clsFeatureRegionFldsENEx.con_TabFeatureName:
        return this.tabFeatureName;
      case clsFeatureRegionFldsENEx.con_RelaFldName:
        return this.relaFldName;
      case clsFeatureRegionFldsENEx.con_CtrlId:
        return this.ctrlId;
      case clsFeatureRegionFldsENEx.con_RegionTypeId:
        return this.regionTypeId;
      case clsFeatureRegionFldsENEx.con_TrClass:
        return this.trClass;
      case clsFeatureRegionFldsENEx.con_RegionName:
        return this.regionName;
      case clsFeatureRegionFldsENEx.con_TabNameEx:
        return this.tabNameEx;
      case clsFeatureRegionFldsENEx.con_CommandNameEx:
        return this.commandNameEx;
      case clsFeatureRegionFldsENEx.con_TdClass:
        return this.tdClass;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"RegionTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeName(): string {
    return 'regionTypeName';
  } //区域类型名称

  /**
   * 常量:"CtlCnName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtlCnName(): string {
    return 'ctlCnName';
  } //控件类型中文名

  /**
   * 常量:"CtlTypeAbbr"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtlTypeAbbr(): string {
    return 'ctlTypeAbbr';
  } //控件类型缩写

  /**
   * 常量:"ViewImplName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewImplName(): string {
    return 'viewImplName';
  } //界面实现名

  /**
   * 常量:"CtlTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtlTypeName(): string {
    return 'ctlTypeName';
  } //控件类型名

  /**
   * 常量:"ValueGivingModeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ValueGivingModeName(): string {
    return 'valueGivingModeName';
  } //给值方式名

  /**
   * 常量:"TabFeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabFeatureName(): string {
    return 'tabFeatureName';
  } //表功能名

  /**
   * 常量:"RelaFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RelaFldName(): string {
    return 'relaFldName';
  } //关系字段名

  /**
   * 常量:"CtrlId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtrlId(): string {
    return 'ctrlId';
  } //控件Id

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TrClass(): string {
    return 'trClass';
  } //TrClass

  /**
   * 常量:"RegionName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionName(): string {
    return 'regionName';
  } //区域名称

  /**
   * 常量:"TabNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabNameEx(): string {
    return 'tabNameEx';
  } //Cm工程名s

  /**
   * 常量:"CommandNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CommandNameEx(): string {
    return 'commandNameEx';
  } //命令名Ex

  /**
   * 常量:"TdClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TdClass(): string {
    return 'tdClass';
  } //TdClass

  public featureName = ''; //功能名称
  public tabName = ''; //表名
  public regionTypeName = ''; //区域类型名称
  public ctlCnName = ''; //控件类型中文名
  public ctlTypeAbbr = ''; //控件类型缩写
  public viewImplName = ''; //界面实现名
  public ctlTypeName = ''; //控件类型名
  public valueGivingModeName = ''; //给值方式名
  public tabFeatureName = ''; //表功能名
  public relaFldName = ''; //关系字段名
  public ctrlId = ''; //控件Id
  public regionTypeId = ''; //区域类型Id
  public trClass = ''; //TrClass
  public regionName = ''; //区域名称
  public tabNameEx = ''; //Cm工程名s
  public commandNameEx = ''; //命令名Ex
  public tdClass = ''; //TdClass
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFeatureRegionFldsENEx();
    const instance = new clsFeatureRegionFldsENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
