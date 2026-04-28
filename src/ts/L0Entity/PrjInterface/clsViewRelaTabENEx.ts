/**
 * 类名:clsViewRelaTabENEx
 * 表名:ViewRelaTab(00050100)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/29 02:07:17
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
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
      case clsViewRelaTabENEx.con_CmPrjId:
        return this.cmPrjId;
      case clsViewRelaTabENEx.con_DateTimeSim:
        return this.dateTimeSim;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ViewName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ViewName = 'viewName'; //界面名称

  /**
   * 常量:"ViewCnName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ViewCnName = 'viewCnName'; //视图中文名

  /**
   * 常量:"RegionName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_RegionName = 'regionName'; //区域名称

  /**
   * 常量:"RegionTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_RegionTypeName = 'regionTypeName'; //区域类型名称

  /**
   * 常量:"InOutTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_InOutTypeName = 'inOutTypeName'; //INOUT类型名称

  /**
   * 常量:"ViewTabTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ViewTabTypeName = 'viewTabTypeName'; //界面表类型名

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TabName = 'tabName'; //表名

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_CmPrjId = 'cmPrjId'; //Cm工程Id

  /**
   * 常量:"DateTimeSim"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DateTimeSim = 'dateTimeSim'; //简化日期时间

  public viewName = ''; //界面名称
  public viewCnName = ''; //视图中文名
  public regionName = ''; //区域名称
  public regionTypeName = ''; //区域类型名称
  public inOutTypeName = ''; //INOUT类型名称
  public viewTabTypeName = ''; //界面表类型名
  public tabName = ''; //表名
  public cmPrjId = ''; //Cm工程Id
  public dateTimeSim = ''; //简化日期时间

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
