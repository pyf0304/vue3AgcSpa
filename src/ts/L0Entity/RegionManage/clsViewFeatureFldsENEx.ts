/**
 * 类名:clsViewFeatureFldsENEx
 * 表名:ViewFeatureFlds(00050453)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:08
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
 * 界面功能字段(ViewFeatureFlds)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvFieldTab_SimENEx } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimENEx';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsViewFeatureFldsEN } from '@/ts/L0Entity/RegionManage/clsViewFeatureFldsEN';

export class clsViewFeatureFldsENEx extends clsViewFeatureFldsEN {
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
      case clsViewFeatureFldsENEx.con_ObjvFieldTab_SimENEx:
        return this.objvFieldTab_SimENEx;
      case clsViewFeatureFldsENEx.con_ObjCtlType:
        return this.objCtlType;
      case clsViewFeatureFldsENEx.con_FeatureName:
        return this.featureName;
      case clsViewFeatureFldsENEx.con_FldName:
        return this.fldName;
      case clsViewFeatureFldsENEx.con_FeatureId:
        return this.featureId;
      case clsViewFeatureFldsENEx.con_CsType:
        return this.csType;
      case clsViewFeatureFldsENEx.con_Caption:
        return this.caption;
      case clsViewFeatureFldsENEx.con_SeqNum:
        return this.seqNum;
      case clsViewFeatureFldsENEx.con_GroupName:
        return this.groupName;
      case clsViewFeatureFldsENEx.con_FieldTypeName:
        return this.fieldTypeName;
      case clsViewFeatureFldsENEx.con_RelaTabName:
        return this.relaTabName;
      case clsViewFeatureFldsENEx.con_RegionId:
        return this.regionId;
      case clsViewFeatureFldsENEx.con_DsTabName:
        return this.dsTabName;
      case clsViewFeatureFldsENEx.con_CmPrjId:
        return this.cmPrjId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ObjvFieldTab_SimENEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ObjvFieldTab_SimENEx(): string {
    return 'objvFieldTab_SimENEx';
  } //字段对象Ex

  /**
   * 常量:"ObjCtlType"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ObjCtlType(): string {
    return 'objCtlType';
  } //控件类型

  /**
   * 常量:"FeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"CsType"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CsType(): string {
    return 'csType';
  } //CS类型

  /**
   * 常量:"Caption"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_Caption(): string {
    return 'caption';
  } //标题

  /**
   * 常量:"SeqNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_SeqNum(): string {
    return 'seqNum';
  } //字段序号

  /**
   * 常量:"GroupName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_GroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"FieldTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FieldTypeName(): string {
    return 'fieldTypeName';
  } //字段类型名

  /**
   * 常量:"RelaTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RelaTabName(): string {
    return 'relaTabName';
  } //相关表名

  /**
   * 常量:"RegionId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionId(): string {
    return 'regionId';
  } //区域Id

  /**
   * 常量:"DsTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DsTabName(): string {
    return 'dsTabName';
  } //数据源表

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  public objvFieldTab_SimENEx = new clsvFieldTab_SimENEx(); //字段对象Ex
  public objCtlType = new clsCtlTypeEN(); //控件类型
  public featureName = ''; //功能名称
  public fldName = ''; //字段名
  public featureId = ''; //功能Id
  public csType = ''; //CS类型
  public caption = ''; //标题
  public seqNum = 0; //字段序号
  public groupName = ''; //组名
  public fieldTypeName = ''; //字段类型名
  public relaTabName = ''; //相关表名
  public regionId = ''; //区域Id
  public dsTabName = ''; //数据源表
  public cmPrjId = ''; //Cm工程Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewFeatureFldsENEx();
    const instance = new clsViewFeatureFldsENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
