/**
 * 类名:clsCmProjectPrjTabENEx
 * 表名:CmProjectPrjTab(00050530)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:31
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
 * CM项目工程表关系(CmProjectPrjTab)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCmProjectPrjTabEN } from '@/ts/L0Entity/CodeMan/clsCmProjectPrjTabEN';

export class clsCmProjectPrjTabENEx extends clsCmProjectPrjTabEN {
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
      case clsCmProjectPrjTabENEx.con_TabName:
        return this.tabName;
      case clsCmProjectPrjTabENEx.con_CmPrjName:
        return this.cmPrjName;
      case clsCmProjectPrjTabENEx.con_PrjName:
        return this.prjName;
      case clsCmProjectPrjTabENEx.con_PrjId:
        return this.prjId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  public tabName = ''; //表名
  public cmPrjName = ''; //CM工程名
  public prjName = ''; //工程名称
  public prjId = ''; //工程Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsCmProjectPrjTabENEx();
    const instance = new clsCmProjectPrjTabENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
