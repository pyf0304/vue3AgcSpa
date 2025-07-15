/**
 * 类名:clsViewRegionENEx
 * 表名:ViewRegion(00050099)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 00:41:28
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
 * 界面区域(ViewRegion)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';

export class clsViewRegionENEx extends clsViewRegionEN {
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
      case clsViewRegionENEx.con_RegionTypeSimName:
        return this.regionTypeSimName;
      case clsViewRegionENEx.con_ContainerTypeName:
        return this.containerTypeName;
      case clsViewRegionENEx.con_PageDispModeName:
        return this.pageDispModeName;
      case clsViewRegionENEx.con_InOutTypeName:
        return this.inOutTypeName;
      case clsViewRegionENEx.con_TabName:
        return this.tabName;
      case clsViewRegionENEx.con_RegionTypeOrderNum:
        return this.regionTypeOrderNum;
      case clsViewRegionENEx.con_RegionTypeName:
        return this.regionTypeName;
      case clsViewRegionENEx.con_FldCountInUse:
        return this.fldCountInUse;
      case clsViewRegionENEx.con_ReferNum:
        return this.referNum;
      case clsViewRegionENEx.con_CmPrjName:
        return this.cmPrjName;
      case clsViewRegionENEx.con_CmPrjId:
        return this.cmPrjId;
      case clsViewRegionENEx.con_PrjIdRefer:
        return this.prjIdRefer;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

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
   * 常量:"InOutTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InOutTypeName(): string {
    return 'inOutTypeName';
  } //INOUT类型名称

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"RegionTypeOrderNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeOrderNum(): string {
    return 'regionTypeOrderNum';
  } //区域类型序号

  /**
   * 常量:"RegionTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_RegionTypeName(): string {
    return 'regionTypeName';
  } //区域类型名称

  /**
   * 常量:"FldCountInUse"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldCountInUse(): string {
    return 'fldCountInUse';
  } //可使用字段数

  /**
   * 常量:"ReferNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ReferNum(): string {
    return 'referNum';
  } //引用数

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  /**
   * 常量:"PrjIdRefer"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjIdRefer(): string {
    return 'prjIdRefer';
  } //PrjIdRefer

  public regionTypeSimName = ''; //区域类型简名
  public containerTypeName = ''; //容器类型名
  public pageDispModeName = ''; //页面显示模式名称
  public inOutTypeName = ''; //INOUT类型名称
  public tabName = ''; //表名
  public regionTypeOrderNum = 0; //区域类型序号
  public regionTypeName = ''; //区域类型名称
  public fldCountInUse = 0; //可使用字段数
  public referNum = 0; //引用数
  public cmPrjName = ''; //CM工程名
  public cmPrjId = ''; //Cm工程Id
  public prjIdRefer = ''; //PrjIdRefer
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewRegionENEx();
    const instance = new clsViewRegionENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
