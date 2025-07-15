/**
 * 类名:clsFuncPara4CodeENEx
 * 表名:FuncPara4Code(00050384)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:30
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 函数参数4Code(FuncPara4Code)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFuncPara4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeEN';

export class clsFuncPara4CodeENEx extends clsFuncPara4CodeEN {
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
      case clsFuncPara4CodeENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsFuncPara4CodeENEx.con_FuncPurposeName:
        return this.funcPurposeName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"FuncPurposeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncPurposeName(): string {
    return 'funcPurposeName';
  } //函数用途名

  public dataTypeName = ''; //数据类型名称
  public funcPurposeName = ''; //函数用途名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFuncPara4CodeENEx();
    const instance = new clsFuncPara4CodeENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
