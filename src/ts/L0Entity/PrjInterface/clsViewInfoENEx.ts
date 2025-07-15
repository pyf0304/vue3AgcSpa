/**
 * 类名:clsViewInfoENEx
 * 表名:ViewInfo(00050006)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:50:33
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 界面(ViewInfo)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';

export class clsViewInfoENEx extends clsViewInfoEN {
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
      case clsViewInfoENEx.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsViewInfoENEx.con_FuncModuleName:
        return this.funcModuleName;
      case clsViewInfoENEx.con_MainTabName:
        return this.mainTabName;
      case clsViewInfoENEx.con_MainTabNameEx:
        return this.mainTabNameEx;
      case clsViewInfoENEx.con_DetailTabNameEx:
        return this.detailTabNameEx;
      case clsViewInfoENEx.con_DetailTabName:
        return this.detailTabName;
      case clsViewInfoENEx.con_ViewNameEx:
        return this.viewNameEx;
      case clsViewInfoENEx.con_InRelaTabName:
        return this.inRelaTabName;
      case clsViewInfoENEx.con_OutRelaTabName:
        return this.outRelaTabName;
      case clsViewInfoENEx.con_TabName:
        return this.tabName;
      case clsViewInfoENEx.con_TrClass:
        return this.trClass;
      case clsViewInfoENEx.con_ViewCnNameEx:
        return this.viewCnNameEx;
      case clsViewInfoENEx.con_CmPrjNames:
        return this.cmPrjNames;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ApplicationTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"FuncModuleName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncModuleName(): string {
    return 'funcModuleName';
  } //功能模块名称

  /**
   * 常量:"MainTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_MainTabName(): string {
    return 'mainTabName';
  } //主表

  /**
   * 常量:"MainTabNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_MainTabNameEx(): string {
    return 'mainTabNameEx';
  } //主表表名Ex

  /**
   * 常量:"DetailTabNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DetailTabNameEx(): string {
    return 'detailTabNameEx';
  } //详细表名Ex

  /**
   * 常量:"DetailTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DetailTabName(): string {
    return 'detailTabName';
  } //详细表

  /**
   * 常量:"ViewNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewNameEx(): string {
    return 'viewNameEx';
  } //界面名称Ex

  /**
   * 常量:"InRelaTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InRelaTabName(): string {
    return 'inRelaTabName';
  } //In表名

  /**
   * 常量:"OutRelaTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutRelaTabName(): string {
    return 'outRelaTabName';
  } //Out表名

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TrClass(): string {
    return 'trClass';
  } //TrClass

  /**
   * 常量:"ViewCnNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewCnNameEx(): string {
    return 'viewCnNameEx';
  } //视图中文名

  /**
   * 常量:"CmPrjNames"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjNames(): string {
    return 'cmPrjNames';
  } //Cm工程名s

  public applicationTypeSimName = ''; //应用程序类型简称
  public funcModuleName = ''; //功能模块名称
  public mainTabName = ''; //主表
  public mainTabNameEx = ''; //主表表名Ex
  public detailTabNameEx = ''; //详细表名Ex
  public detailTabName = ''; //详细表
  public viewNameEx = ''; //界面名称Ex
  public inRelaTabName = ''; //In表名
  public outRelaTabName = ''; //Out表名
  public tabName = ''; //表名
  public trClass = ''; //TrClass
  public viewCnNameEx = ''; //视图中文名
  public cmPrjNames = ''; //Cm工程名s
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewInfoENEx();
    const instance = new clsViewInfoENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
