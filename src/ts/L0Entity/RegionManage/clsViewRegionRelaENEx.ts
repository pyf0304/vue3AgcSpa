/**
 * 类名:clsViewRegionRelaENEx
 * 表名:ViewRegionRela(00050573)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 17:08:10
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
 * 界面区域关系(ViewRegionRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';

export class clsViewRegionRelaENEx extends clsViewRegionRelaEN {
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
      case clsViewRegionRelaENEx.con_RegionTypeOrderNum:
        return this.regionTypeOrderNum;
      case clsViewRegionRelaENEx.con_RegionName:
        return this.regionName;
      case clsViewRegionRelaENEx.con_RegionTypeSimName:
        return this.regionTypeSimName;
      case clsViewRegionRelaENEx.con_ContainerTypeName:
        return this.containerTypeName;
      case clsViewRegionRelaENEx.con_PageDispModeName:
        return this.pageDispModeName;
      case clsViewRegionRelaENEx.con_FldNum:
        return this.fldNum;
      case clsViewRegionRelaENEx.con_ViewName:
        return this.viewName;
      case clsViewRegionRelaENEx.con_RegionTabName:
        return this.regionTabName;
      case clsViewRegionRelaENEx.con_ClsName:
        return this.clsName;
      case clsViewRegionRelaENEx.con_FileName:
        return this.fileName;
      case clsViewRegionRelaENEx.con_RegionTypeId:
        return this.regionTypeId;
      case clsViewRegionRelaENEx.con_CmPrjId:
        return this.cmPrjId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"RegionTypeOrderNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeOrderNum(): string {
    return 'regionTypeOrderNum';
  } //区域类型序号

  /**
   * 常量:"RegionName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionName(): string {
    return 'regionName';
  } //区域名称

  /**
   * 常量:"RegionTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeSimName(): string {
    return 'regionTypeSimName';
  } //区域类型简名

  /**
   * 常量:"ContainerTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ContainerTypeName(): string {
    return 'containerTypeName';
  } //容器类型名

  /**
   * 常量:"PageDispModeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PageDispModeName(): string {
    return 'pageDispModeName';
  } //页面显示模式名称

  /**
   * 常量:"FldNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldNum(): string {
    return 'fldNum';
  } //字段数

  /**
   * 常量:"ViewName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewName(): string {
    return 'viewName';
  } //界面名称

  /**
   * 常量:"RegionTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTabName(): string {
    return 'regionTabName';
  } //表名

  /**
   * 常量:"ClsName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ClsName(): string {
    return 'clsName';
  } //类名

  /**
   * 常量:"FileName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FileName(): string {
    return 'fileName';
  } //文件名

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  public regionTypeOrderNum = 0; //区域类型序号
  public regionName = ''; //区域名称
  public regionTypeSimName = ''; //区域类型简名
  public containerTypeName = ''; //容器类型名
  public pageDispModeName = ''; //页面显示模式名称
  public fldNum = 0; //字段数
  public viewName = ''; //界面名称
  public regionTabName = ''; //表名
  public clsName = ''; //类名
  public fileName = ''; //文件名
  public regionTypeId = ''; //区域类型Id
  public cmPrjId = ''; //Cm工程Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewRegionRelaENEx();
    const instance = new clsViewRegionRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
