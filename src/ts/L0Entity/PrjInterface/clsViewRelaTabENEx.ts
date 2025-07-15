/**
 * 类名:clsViewRelaTabENEx
 * 表名:ViewRelaTab(00050100)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:28:12
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
 * 界面相关表(ViewRelaTab)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsViewRelaTabEN } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabEN';

export class clsViewRelaTabENEx extends clsViewRelaTabEN {
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
      case clsViewRelaTabENEx.con_ViewName:
        return this.viewName;
      case clsViewRelaTabENEx.con_ViewCnName:
        return this.viewCnName;
      case clsViewRelaTabENEx.con_RegionName:
        return this.regionName;
      case clsViewRelaTabENEx.con_RegionTypeName:
        return this.regionTypeName;
      case clsViewRelaTabENEx.con_InOutTypeName:
        return this.inOutTypeName;
      case clsViewRelaTabENEx.con_ViewTabTypeName:
        return this.viewTabTypeName;
      case clsViewRelaTabENEx.con_TabName:
        return this.tabName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ViewName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewName(): string {
    return 'viewName';
  } //界面名称

  /**
   * 常量:"ViewCnName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewCnName(): string {
    return 'viewCnName';
  } //视图中文名

  /**
   * 常量:"RegionName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionName(): string {
    return 'regionName';
  } //区域名称

  /**
   * 常量:"RegionTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeName(): string {
    return 'regionTypeName';
  } //区域类型名称

  /**
   * 常量:"InOutTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InOutTypeName(): string {
    return 'inOutTypeName';
  } //INOUT类型名称

  /**
   * 常量:"ViewTabTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewTabTypeName(): string {
    return 'viewTabTypeName';
  } //ViewTabTypeName

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  public viewName = ''; //界面名称
  public viewCnName = ''; //视图中文名
  public regionName = ''; //区域名称
  public regionTypeName = ''; //区域类型名称
  public inOutTypeName = ''; //INOUT类型名称
  public viewTabTypeName = ''; //ViewTabTypeName
  public tabName = ''; //表名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewRelaTabENEx();
    const instance = new clsViewRelaTabENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
