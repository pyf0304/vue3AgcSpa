/**
 * 类名:clscss_FldDispUnitStyleENEx
 * 表名:css_FldDispUnitStyle(00050615)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:48
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 字段显示单元样式(css_FldDispUnitStyle)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';

export class clscss_FldDispUnitStyleENEx extends clscss_FldDispUnitStyleEN {
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
      case clscss_FldDispUnitStyleENEx.con_CtlTypeName:
        return this.ctlTypeName;
      case clscss_FldDispUnitStyleENEx.con_StyleNameContent:
        return this.styleNameContent;
      case clscss_FldDispUnitStyleENEx.con_StyleNameTitle:
        return this.styleNameTitle;
      case clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp:
        return this.fldDispUnitFormatDisp;
      case clscss_FldDispUnitStyleENEx.con_DuFldDispUnitStyleName:
        return this.duFldDispUnitStyleName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CtlTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CtlTypeName(): string {
    return 'ctlTypeName';
  } //控件类型名

  /**
   * 常量:"StyleNameContent"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_StyleNameContent(): string {
    return 'styleNameContent';
  } //内容样式名

  /**
   * 常量:"StyleNameTitle"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_StyleNameTitle(): string {
    return 'styleNameTitle';
  } //标题样式名

  /**
   * 常量:"FldDispUnitFormatDisp"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldDispUnitFormatDisp(): string {
    return 'fldDispUnitFormatDisp';
  } //字段显示单元格式-显示

  /**
   * 常量:"DuFldDispUnitStyleName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DuFldDispUnitStyleName(): string {
    return 'duFldDispUnitStyleName';
  } //字段显示单元样式名称

  public ctlTypeName = ''; //控件类型名
  public styleNameContent = ''; //内容样式名
  public styleNameTitle = ''; //标题样式名
  public fldDispUnitFormatDisp = ''; //字段显示单元格式-显示
  public duFldDispUnitStyleName = ''; //字段显示单元样式名称
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clscss_FldDispUnitStyleENEx();
    const instance = new clscss_FldDispUnitStyleENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
