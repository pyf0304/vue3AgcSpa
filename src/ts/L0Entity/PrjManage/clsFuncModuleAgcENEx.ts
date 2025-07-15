/**
 * 类名:clsFuncModuleAgcENEx
 * 表名:FuncModule_Agc(00050015)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:21:25
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 模块(FuncModuleAgc)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFuncModuleAgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModuleAgcEN';

export class clsFuncModuleAgcENEx extends clsFuncModuleAgcEN {
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
      case clsFuncModuleAgcENEx.conUseStateName:
        return this.useStateName;
      case clsFuncModuleAgcENEx.conViewNum:
        return this.viewNum;
      case clsFuncModuleAgcENEx.conTabNum:
        return this.tabNum;
      case clsFuncModuleAgcENEx.conPrjName:
        return this.prjName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"UseStateName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUseStateName(): string {
    return 'useStateName';
  } //使用状态名称

  /**
   * 常量:"ViewNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conViewNum(): string {
    return 'viewNum';
  } //界面数

  /**
   * 常量:"TabNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTabNum(): string {
    return 'tabNum';
  } //表数

  /**
   * 常量:"PrjName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPrjName(): string {
    return 'prjName';
  } //工程名称

  public useStateName = ''; //使用状态名称
  public viewNum = 0; //界面数
  public tabNum = 0; //表数
  public prjName = ''; //工程名称
}
