/**
 * 类名:clsQryRegionFldsENEx
 * 表名:QryRegionFlds(00050115)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:58:57
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
 * 查询区域字段(QryRegionFlds)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQryRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsQryRegionFldsEN';

export class clsQryRegionFldsENEx extends clsQryRegionFldsEN {
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
      case clsQryRegionFldsENEx.con_TabName:
        return this.tabName;
      case clsQryRegionFldsENEx.con_FldName:
        return this.fldName;
      case clsQryRegionFldsENEx.con_CtlTypeName:
        return this.ctlTypeName;
      case clsQryRegionFldsENEx.con_Event:
        return this.event;
      case clsQryRegionFldsENEx.con_FldNameV2:
        return this.fldNameV2;
      case clsQryRegionFldsENEx.con_TrClass:
        return this.trClass;
      case clsQryRegionFldsENEx.con_TdClass:
        return this.tdClass;
      case clsQryRegionFldsENEx.con_OutFldName:
        return this.outFldName;
      case clsQryRegionFldsENEx.con_TabId:
        return this.tabId;
      case clsQryRegionFldsENEx.con_DnPathIdEx:
        return this.dnPathIdEx;
      case clsQryRegionFldsENEx.con_DnPathId:
        return this.dnPathId;
      case clsQryRegionFldsENEx.con_IsUseFunc:
        return this.isUseFunc;
      case clsQryRegionFldsENEx.con_DataPropertyName:
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
   * 常量:"Event"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_Event(): string {
    return 'event';
  } //事件

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
   * 常量:"OutFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutFldName(): string {
    return 'outFldName';
  } //Out字段名

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

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
  public event = ''; //事件
  public fldNameV2 = ''; //字段名
  public trClass = ''; //TrClass
  public tdClass = ''; //TdClass
  public outFldName = ''; //Out字段名
  public tabId = ''; //表ID
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
    //return propName in new clsQryRegionFldsENEx();
    const instance = new clsQryRegionFldsENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
