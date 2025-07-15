/**
 * 类名:clsCMProjectENEx
 * 表名:CMProject(00050512)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:57
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
 * CM项目(CMProject)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';

export class clsCMProjectENEx extends clsCMProjectEN {
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
      case clsCMProjectENEx.con_PrjName:
        return this.prjName;
      case clsCMProjectENEx.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsCMProjectENEx.con_UseStateName:
        return this.useStateName;
      case clsCMProjectENEx.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsCMProjectENEx.con_ApplicationTypeNameLst:
        return this.applicationTypeNameLst;
      case clsCMProjectENEx.con_FunctionTemplateName:
        return this.functionTemplateName;
      case clsCMProjectENEx.con_VueDesignSysName:
        return this.vueDesignSysName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"ApplicationTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"UseStateName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_UseStateName(): string {
    return 'useStateName';
  } //使用状态名称

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"ApplicationTypeNameLst"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeNameLst(): string {
    return 'applicationTypeNameLst';
  } //应用类型名列表

  /**
   * 常量:"FunctionTemplateName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FunctionTemplateName(): string {
    return 'functionTemplateName';
  } //函数模板名

  /**
   * 常量:"VueDesignSysName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_VueDesignSysName(): string {
    return 'vueDesignSysName';
  } //Vue控件设计体系名称

  public prjName = ''; //工程名称
  public applicationTypeSimName = ''; //应用程序类型简称
  public useStateName = ''; //使用状态名称
  public applicationTypeName = ''; //应用程序类型名称
  public applicationTypeNameLst = ''; //应用类型名列表
  public functionTemplateName = ''; //函数模板名
  public vueDesignSysName = ''; //Vue控件设计体系名称
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCMProjectENEx();
    const instance = new clsCMProjectENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
