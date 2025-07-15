/**
 * 类名:clsCMProjectAppRelaENEx
 * 表名:CMProjectAppRela(00050600)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:28:07
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * CM项目应用关系(CMProjectAppRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';

export class clsCMProjectAppRelaENEx extends clsCMProjectAppRelaEN {
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
      case clsCMProjectAppRelaENEx.con_CmPrjName:
        return this.cmPrjName;
      case clsCMProjectAppRelaENEx.con_CmPrjAppName:
        return this.cmPrjAppName;
      case clsCMProjectAppRelaENEx.con_ApplicationTypeName:
        return this.applicationTypeName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"CmPrjAppName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjAppName(): string {
    return 'cmPrjAppName';
  } //CM工程应用名

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  public cmPrjName = ''; //CM工程名
  public cmPrjAppName = ''; //CM工程应用名
  public applicationTypeName = ''; //应用程序类型名称
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCMProjectAppRelaENEx();
    const instance = new clsCMProjectAppRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
