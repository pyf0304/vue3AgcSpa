/**
 * 类名:clsTabFeatureENEx
 * 表名:TabFeature(00050463)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 23:45:18
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
 * 表功能(TabFeature)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';

export class clsTabFeatureENEx extends clsTabFeatureEN {
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
      case clsTabFeatureENEx.con_TabName:
        return this.tabName;
      case clsTabFeatureENEx.con_FeatureName:
        return this.featureName;
      case clsTabFeatureENEx.con_ParentFeatureName:
        return this.parentFeatureName;
      case clsTabFeatureENEx.con_FuncModuleNameSim:
        return this.funcModuleNameSim;
      case clsTabFeatureENEx.con_PrjName:
        return this.prjName;
      case clsTabFeatureENEx.con_ParentFeatureId:
        return this.parentFeatureId;
      case clsTabFeatureENEx.con_FuncNameJsEx:
        return this.funcNameJsEx;
      case clsTabFeatureENEx.con_FuncNameCsEx:
        return this.funcNameCsEx;
      case clsTabFeatureENEx.con_FldNames:
        return this.fldNames;
      case clsTabFeatureENEx.con_FuncNames:
        return this.funcNames;
      case clsTabFeatureENEx.con_TrClass:
        return this.trClass;
      case clsTabFeatureENEx.con_CmPrjId:
        return this.cmPrjId;
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
   * 常量:"FeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"ParentFeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ParentFeatureName(): string {
    return 'parentFeatureName';
  } //父功能名

  /**
   * 常量:"FuncModuleNameSim"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncModuleNameSim(): string {
    return 'funcModuleNameSim';
  } //功能模块简称

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"ParentFeatureId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ParentFeatureId(): string {
    return 'parentFeatureId';
  } //父功能Id

  /**
   * 常量:"FuncNameJsEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncNameJsEx(): string {
    return 'funcNameJsEx';
  } //FuncName_JsEx

  /**
   * 常量:"FuncNameCsEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncNameCsEx(): string {
    return 'funcNameCsEx';
  } //FuncName_CsEx

  /**
   * 常量:"FldNames"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldNames(): string {
    return 'fldNames';
  } //字段名

  /**
   * 常量:"FuncNames"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncNames(): string {
    return 'funcNames';
  } //函数s

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TrClass(): string {
    return 'trClass';
  } //TrClass

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  public tabName = ''; //表名
  public featureName = ''; //功能名称
  public parentFeatureName = ''; //父功能名
  public funcModuleNameSim = ''; //功能模块简称
  public prjName = ''; //工程名称
  public parentFeatureId = ''; //父功能Id
  public funcNameJsEx = ''; //FuncName_JsEx
  public funcNameCsEx = ''; //FuncName_CsEx
  public fldNames = ''; //字段名
  public funcNames = ''; //函数s
  public trClass = ''; //TrClass
  public cmPrjId = ''; //Cm工程Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsTabFeatureENEx();
    const instance = new clsTabFeatureENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
