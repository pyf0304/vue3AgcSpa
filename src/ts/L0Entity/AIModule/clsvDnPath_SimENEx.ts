/**
 * 类名:clsvDnPath_SimENEx
 * 表名:vDnPath_Sim(00050603)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:48
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * vDnPath_Sim(vDnPath_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvDnPath_SimEN } from '@/ts/L0Entity/AIModule/clsvDnPath_SimEN';

export class clsvDnPath_SimENEx extends clsvDnPath_SimEN {
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
      case clsvDnPath_SimENEx.con_OutTabName:
        return this.outTabName;
      case clsvDnPath_SimENEx.con_OutFldId:
        return this.outFldId;
      case clsvDnPath_SimENEx.con_OutFldName:
        return this.outFldName;
      case clsvDnPath_SimENEx.con_InFldName:
        return this.inFldName;
      case clsvDnPath_SimENEx.con_InTabId:
        return this.inTabId;
      case clsvDnPath_SimENEx.con_InFldId:
        return this.inFldId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"OutTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutTabName(): string {
    return 'outTabName';
  } //OUT表

  /**
   * 常量:"OutFldId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutFldId(): string {
    return 'outFldId';
  } //OutFldId

  /**
   * 常量:"OutFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutFldName(): string {
    return 'outFldName';
  } //Out字段名

  /**
   * 常量:"InFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InFldName(): string {
    return 'inFldName';
  } //In字段名

  /**
   * 常量:"InTabId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InTabId(): string {
    return 'inTabId';
  } //In表Id

  /**
   * 常量:"InFldId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InFldId(): string {
    return 'inFldId';
  } //In字段Id

  public outTabName = ''; //OUT表
  public outFldId = ''; //OutFldId
  public outFldName = ''; //Out字段名
  public inFldName = ''; //In字段名
  public inTabId = ''; //In表Id
  public inFldId = ''; //In字段Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsvDnPath_SimENEx();
    const instance = new clsvDnPath_SimENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
