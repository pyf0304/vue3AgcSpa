/**
 * 类名:clsAppCodeTypeRelaENEx
 * 表名:AppCodeTypeRela(00050418)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:45
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 应用程序代码类型关系(AppCodeTypeRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';

export class clsAppCodeTypeRelaENEx extends clsAppCodeTypeRelaEN {
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
      case clsAppCodeTypeRelaENEx.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsAppCodeTypeRelaENEx.con_CodeTypeSimName:
        return this.codeTypeSimName;
      case clsAppCodeTypeRelaENEx.con_CodeTypeName:
        return this.codeTypeName;
      case clsAppCodeTypeRelaENEx.con_DependsOn:
        return this.dependsOn;
      case clsAppCodeTypeRelaENEx.con_GroupName:
        return this.groupName;
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName:
        return this.progLangTypeSimName;
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeName:
        return this.progLangTypeName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"CodeTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeTypeSimName(): string {
    return 'codeTypeSimName';
  } //简称

  /**
   * 常量:"CodeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"DependsOn"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DependsOn(): string {
    return 'dependsOn';
  } //依赖于

  /**
   * 常量:"GroupName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_GroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"ProgLangTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ProgLangTypeSimName(): string {
    return 'progLangTypeSimName';
  } //编程语言类型简称

  /**
   * 常量:"ProgLangTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ProgLangTypeName(): string {
    return 'progLangTypeName';
  } //编程语言类型名

  public applicationTypeName = ''; //应用程序类型名称
  public codeTypeSimName = ''; //简称
  public codeTypeName = ''; //代码类型名
  public dependsOn = ''; //依赖于
  public groupName = ''; //组名
  public progLangTypeSimName = ''; //编程语言类型简称
  public progLangTypeName = ''; //编程语言类型名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsAppCodeTypeRelaENEx();
    const instance = new clsAppCodeTypeRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
