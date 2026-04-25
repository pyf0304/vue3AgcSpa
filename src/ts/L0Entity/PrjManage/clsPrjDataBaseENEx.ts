/**
 * 类名:clsPrjDataBaseENEx
 * 表名:PrjDataBase(00050176)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/19 19:12:45
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 数据库对象(PrjDataBase)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';

export class clsPrjDataBaseENEx extends clsPrjDataBaseEN {
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
      case clsPrjDataBaseENEx.con_DataBaseTypeName:
        return this.dataBaseTypeName;
      case clsPrjDataBaseENEx.con_UseStateName:
        return this.useStateName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"DataBaseTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DataBaseTypeName = 'dataBaseTypeName'; //数据库类型名

  /**
   * 常量:"UseStateName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_UseStateName = 'useStateName'; //使用状态名称

  public dataBaseTypeName = ''; //数据库类型名
  public useStateName = ''; //使用状态名称

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsPrjDataBaseENEx();
    const instance = new clsPrjDataBaseENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
