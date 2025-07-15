/**
 * 类名:clscss_StyleENEx
 * 表名:css_Style(00050468)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:51
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
 * css_Style(css_Style)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';

export class clscss_StyleENEx extends clscss_StyleEN {
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
      case clscss_StyleENEx.con_CtlTypeName:
        return this.ctlTypeName;
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

  public ctlTypeName = ''; //控件类型名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clscss_StyleENEx();
    const instance = new clscss_StyleENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
