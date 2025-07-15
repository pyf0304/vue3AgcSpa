/**
 * 类名:clsGCVariableENEx
 * 表名:GCVariable(00050559)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/18 00:20:53
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
 * GC变量(GCVariable)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';

export class clsGCVariableENEx extends clsGCVariableEN {
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
      case clsGCVariableENEx.con_VarTypeName:
        return this.varTypeName;
      case clsGCVariableENEx.con_VarNameEx:
        return this.varNameEx;
      case clsGCVariableENEx.con_VarExpressionEx:
        return this.varExpressionEx;
      case clsGCVariableENEx.con_PrjName:
        return this.prjName;
      case clsGCVariableENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsGCVariableENEx.con_DuFilePath:
        return this.duFilePath;
      case clsGCVariableENEx.con_DuClassName:
        return this.duClassName;
      case clsGCVariableENEx.con_DuDataTypeName:
        return this.duDataTypeName;
      case clsGCVariableENEx.con_PrjId:
        return this.prjId;
      case clsGCVariableENEx.con_PrjIdBak:
        return this.prjIdBak;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"VarTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_VarTypeName(): string {
    return 'varTypeName';
  } //变量类型名

  /**
   * 常量:"VarNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_VarNameEx(): string {
    return 'varNameEx';
  } //变量名Ex

  /**
   * 常量:"VarExpressionEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_VarExpressionEx(): string {
    return 'varExpressionEx';
  } //变量表达式Ex

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"DuFilePath"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DuFilePath(): string {
    return 'duFilePath';
  } //文件路径

  /**
   * 常量:"DuClassName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DuClassName(): string {
    return 'duClassName';
  } //类名

  /**
   * 常量:"DuDataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DuDataTypeName(): string {
    return 'duDataTypeName';
  } //数据类型名称

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"PrjIdBak"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjIdBak(): string {
    return 'prjIdBak';
  } //工程ID

  public varTypeName = ''; //变量类型名
  public varNameEx = ''; //变量名Ex
  public varExpressionEx = ''; //变量表达式Ex
  public prjName = ''; //工程名称
  public dataTypeName = ''; //数据类型名称
  public duFilePath = ''; //文件路径
  public duClassName = ''; //类名
  public duDataTypeName = ''; //数据类型名称
  public prjId = ''; //工程Id
  public prjIdBak = ''; //工程ID
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsGCVariableENEx();
    const instance = new clsGCVariableENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
