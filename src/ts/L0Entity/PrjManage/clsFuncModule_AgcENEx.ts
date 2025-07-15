/**
 * 类名:clsFuncModule_AgcENEx
 * 表名:FuncModule_Agc(00050015)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:40
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 模块(FuncModule_Agc)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';

export class clsFuncModule_AgcENEx extends clsFuncModule_AgcEN {
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
      case clsFuncModule_AgcENEx.con_UseStateName:
        return this.useStateName;
      case clsFuncModule_AgcENEx.con_ViewNum:
        return this.viewNum;
      case clsFuncModule_AgcENEx.con_TabNum:
        return this.tabNum;
      case clsFuncModule_AgcENEx.con_PrjName:
        return this.prjName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"UseStateName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_UseStateName(): string {
    return 'useStateName';
  } //使用状态名称

  /**
   * 常量:"ViewNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ViewNum(): string {
    return 'viewNum';
  } //界面数

  /**
   * 常量:"TabNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabNum(): string {
    return 'tabNum';
  } //表数

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  public useStateName = ''; //使用状态名称
  public viewNum = 0; //界面数
  public tabNum = 0; //表数
  public prjName = ''; //工程名称
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFuncModule_AgcENEx();
    const instance = new clsFuncModule_AgcENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
