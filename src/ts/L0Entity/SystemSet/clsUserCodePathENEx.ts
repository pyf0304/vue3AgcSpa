/**
 * 类名:clsUserCodePathENEx
 * 表名:UserCodePath(00050204)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:28:10
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 用户生成路径(UserCodePath)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsUserCodePathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePathEN';

export class clsUserCodePathENEx extends clsUserCodePathEN {
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
      case clsUserCodePathENEx.con_ProgLangTypeSimName:
        return this.progLangTypeSimName;
      case clsUserCodePathENEx.con_CmPrjName:
        return this.cmPrjName;
      case clsUserCodePathENEx.con_TabMainTypeName:
        return this.tabMainTypeName;
      case clsUserCodePathENEx.con_CodeTypeSimName:
        return this.codeTypeSimName;
      case clsUserCodePathENEx.con_GcPathName:
        return this.gcPathName;
      case clsUserCodePathENEx.con_UserId:
        return this.userId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ProgLangTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ProgLangTypeSimName(): string {
    return 'progLangTypeSimName';
  } //编程语言类型简称

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"TabMainTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabMainTypeName(): string {
    return 'tabMainTypeName';
  } //表主类型名

  /**
   * 常量:"CodeTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CodeTypeSimName(): string {
    return 'codeTypeSimName';
  } //简称

  /**
   * 常量:"GcPathName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_GcPathName(): string {
    return 'gcPathName';
  } //GC路径名

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  public progLangTypeSimName = ''; //编程语言类型简称
  public cmPrjName = ''; //CM工程名
  public tabMainTypeName = ''; //表主类型名
  public codeTypeSimName = ''; //简称
  public gcPathName = ''; //GC路径名
  public userId = ''; //用户Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsUserCodePathENEx();
    const instance = new clsUserCodePathENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
