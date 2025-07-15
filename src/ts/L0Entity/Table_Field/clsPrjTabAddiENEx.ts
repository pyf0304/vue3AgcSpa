/**
 * 类名:clsPrjTabAddiENEx
 * 表名:PrjTabAddi(00050635)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:27:57
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
 * 工程表附加信息(PrjTabAddi)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPrjTabAddiEN } from '@/ts/L0Entity/Table_Field/clsPrjTabAddiEN';

export class clsPrjTabAddiENEx extends clsPrjTabAddiEN {
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
      case clsPrjTabAddiENEx.con_FuncModuleName:
        return this.funcModuleName;
      case clsPrjTabAddiENEx.con_CmPrjId:
        return this.cmPrjId;
      case clsPrjTabAddiENEx.con_PrjId:
        return this.prjId;
      case clsPrjTabAddiENEx.con_TabName:
        return this.tabName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FuncModuleName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FuncModuleName(): string {
    return 'funcModuleName';
  } //功能模块名称

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  public funcModuleName = ''; //功能模块名称
  public cmPrjId = ''; //Cm工程Id
  public prjId = ''; //工程Id
  public tabName = ''; //表名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsPrjTabAddiENEx();
    const instance = new clsPrjTabAddiENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
