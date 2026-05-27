/**
 * 类名:clsFunctionTemplateRelaENEx
 * 表名:FunctionTemplateRela(00050313)
 * 版本:2026.04.19(服务器:PYF-AI)
 * 日期:2026/05/26 15:54:11
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 函数与模板关系(FunctionTemplateRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFunctionTemplateRelaEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateRelaEN';

export class clsFunctionTemplateRelaENEx extends clsFunctionTemplateRelaEN {
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
      case clsFunctionTemplateRelaENEx.con_FunctionTemplateName:
        return this.functionTemplateName;
      case clsFunctionTemplateRelaENEx.con_RegionTypeName:
        return this.regionTypeName;
      case clsFunctionTemplateRelaENEx.con_FuncName:
        return this.funcName;
      case clsFunctionTemplateRelaENEx.con_FuncName4Code:
        return this.funcName4Code;
      case clsFunctionTemplateRelaENEx.con_ProgLangTypeSimName:
        return this.progLangTypeSimName;
      case clsFunctionTemplateRelaENEx.con_CodeTypeSimName:
        return this.codeTypeSimName;
      case clsFunctionTemplateRelaENEx.con_CodeTypeName:
        return this.codeTypeName;
      case clsFunctionTemplateRelaENEx.con_FuncCodeTypeName:
        return this.funcCodeTypeName;
      case clsFunctionTemplateRelaENEx.con_DateTimeSim:
        return this.dateTimeSim;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FunctionTemplateName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FunctionTemplateName = 'functionTemplateName'; //函数模板名

  /**
   * 常量:"RegionTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_RegionTypeName = 'regionTypeName'; //区域类型名称

  /**
   * 常量:"FuncName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FuncName = 'funcName'; //函数名

  /**
   * 常量:"FuncName4Code"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FuncName4Code = 'funcName4Code'; //函数名4Code

  /**
   * 常量:"ProgLangTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ProgLangTypeSimName = 'progLangTypeSimName'; //编程语言类型简称

  /**
   * 常量:"CodeTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_CodeTypeSimName = 'codeTypeSimName'; //简称

  /**
   * 常量:"CodeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_CodeTypeName = 'codeTypeName'; //代码类型名

  /**
   * 常量:"FuncCodeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FuncCodeTypeName = 'funcCodeTypeName'; //FuncCodeTypeName

  /**
   * 常量:"DateTimeSim"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DateTimeSim = 'dateTimeSim'; //简化日期时间

  public functionTemplateName = ''; //函数模板名
  public regionTypeName = ''; //区域类型名称
  public funcName = ''; //函数名
  public funcName4Code = ''; //函数名4Code
  public progLangTypeSimName = ''; //编程语言类型简称
  public codeTypeSimName = ''; //简称
  public codeTypeName = ''; //代码类型名
  public funcCodeTypeName = ''; //FuncCodeTypeName
  public dateTimeSim = ''; //简化日期时间

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFunctionTemplateRelaENEx();
    const instance = new clsFunctionTemplateRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
