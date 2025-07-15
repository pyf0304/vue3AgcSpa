/**
 * 类名:clscssFldDispUnitStyleENEx
 * 表名:css_FldDispUnitStyle(00050615)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:16:05
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 字段显示单元样式(cssFldDispUnitStyle)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscssFldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscssFldDispUnitStyleEN';

export class clscssFldDispUnitStyleENEx extends clscssFldDispUnitStyleEN {
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
      case clscssFldDispUnitStyleENEx.conCtlTypeName:
        return this.ctlTypeName;
      case clscssFldDispUnitStyleENEx.conStyleNameContent:
        return this.styleNameContent;
      case clscssFldDispUnitStyleENEx.conStyleNameTitle:
        return this.styleNameTitle;
      case clscssFldDispUnitStyleENEx.conFldDispUnitFormatDisp:
        return this.fldDispUnitFormatDisp;
      case clscssFldDispUnitStyleENEx.conDUFldDispUnitStyleName:
        return this.dUFldDispUnitStyleName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CtlTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCtlTypeName(): string {
    return 'ctlTypeName';
  } //控件类型名

  /**
   * 常量:"StyleNameContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conStyleNameContent(): string {
    return 'styleNameContent';
  } //内容样式名

  /**
   * 常量:"StyleNameTitle"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conStyleNameTitle(): string {
    return 'styleNameTitle';
  } //标题样式名

  /**
   * 常量:"FldDispUnitFormatDisp"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFldDispUnitFormatDisp(): string {
    return 'fldDispUnitFormatDisp';
  } //字段显示单元格式-显示

  /**
   * 常量:"DUFldDispUnitStyleName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDUFldDispUnitStyleName(): string {
    return 'dUFldDispUnitStyleName';
  } //字段显示单元样式名称

  public ctlTypeName = ''; //控件类型名
  public styleNameContent = ''; //内容样式名
  public styleNameTitle = ''; //标题样式名
  public fldDispUnitFormatDisp = ''; //字段显示单元格式-显示
  public dUFldDispUnitStyleName = ''; //字段显示单元样式名称
}
