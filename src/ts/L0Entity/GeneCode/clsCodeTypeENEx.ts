/**
 * 类名:clsCodeTypeENEx
 * 表名:CodeType(00050203)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:41
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
 * 代码类型(CodeType)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCodeTypeEN } from '@/ts/L0Entity/GeneCode/clsCodeTypeEN';

export class clsCodeTypeENEx extends clsCodeTypeEN {
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
      case clsCodeTypeENEx.con_ClassNameFormatEx:
        return this.classNameFormatEx;
      case clsCodeTypeENEx.con_SqlDsTypeName:
        return this.sqlDsTypeName;
      case clsCodeTypeENEx.con_FuncCount:
        return this.funcCount;
      case clsCodeTypeENEx.con_AppCount:
        return this.appCount;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ClassNameFormatEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ClassNameFormatEx(): string {
    return 'classNameFormatEx';
  } //类名格式

  /**
   * 常量:"SqlDsTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_SqlDsTypeName(): string {
    return 'sqlDsTypeName';
  } //Sql数据源名

  /**
   * 常量:"FuncCount"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncCount(): string {
    return 'funcCount';
  } //函数数目

  /**
   * 常量:"AppCount"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_AppCount(): string {
    return 'appCount';
  } //应用数

  public classNameFormatEx = ''; //类名格式
  public sqlDsTypeName = ''; //Sql数据源名
  public funcCount = 0; //函数数目
  public appCount = 0; //应用数
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCodeTypeENEx();
    const instance = new clsCodeTypeENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
