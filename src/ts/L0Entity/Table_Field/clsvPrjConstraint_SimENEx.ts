/**
 * 类名:clsvPrjConstraint_SimENEx
 * 表名:vPrjConstraint_Sim(00050638)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:52
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * vPrjConstraint_Sim(vPrjConstraint_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvPrjConstraint_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjConstraint_SimEN';

export class clsvPrjConstraint_SimENEx extends clsvPrjConstraint_SimEN {
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
      case clsvPrjConstraint_SimENEx.con_ConstraintTypeName:
        return this.constraintTypeName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ConstraintTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ConstraintTypeName(): string {
    return 'constraintTypeName';
  } //约束类型名

  public constraintTypeName = ''; //约束类型名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsvPrjConstraint_SimENEx();
    const instance = new clsvPrjConstraint_SimENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
