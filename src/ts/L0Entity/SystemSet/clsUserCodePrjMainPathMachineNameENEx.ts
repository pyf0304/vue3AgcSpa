/**
 * 类名:clsUserCodePrjMainPathMachineNameENEx
 * 表名:UserCodePrjMainPath_MachineName(00050614)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:20:07
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 用户生成项目主路径_PC(UserCodePrjMainPathMachineName)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsUserCodePrjMainPathMachineNameEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathMachineNameEN';

export class clsUserCodePrjMainPathMachineNameENEx extends clsUserCodePrjMainPathMachineNameEN {
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
      case clsUserCodePrjMainPathMachineNameENEx.conApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsUserCodePrjMainPathMachineNameENEx.conCmPrjName:
        return this.cmPrjName;
      case clsUserCodePrjMainPathMachineNameENEx.conGcPathName:
        return this.gcPathName;
      case clsUserCodePrjMainPathMachineNameENEx.conApplicationTypeName:
        return this.applicationTypeName;
      case clsUserCodePrjMainPathMachineNameENEx.conIsExistCodePath:
        return this.isExistCodePath;
      case clsUserCodePrjMainPathMachineNameENEx.conIsExistCodePathBackup:
        return this.isExistCodePathBackup;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ApplicationTypeSimName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"CmPrjName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"GcPathName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conGcPathName(): string {
    return 'gcPathName';
  } //GC路径名

  /**
   * 常量:"ApplicationTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"IsExistCodePath"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsExistCodePath(): string {
    return 'isExistCodePath';
  } //是否存在代码路径

  /**
   * 常量:"IsExistCodePathBackup"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsExistCodePathBackup(): string {
    return 'isExistCodePathBackup';
  } //是否存在备份路径

  public applicationTypeSimName = ''; //应用程序类型简称
  public cmPrjName = ''; //CM工程名
  public gcPathName = ''; //GC路径名
  public applicationTypeName = ''; //应用程序类型名称
  public isExistCodePath = false; //是否存在代码路径
  public isExistCodePathBackup = false; //是否存在备份路径
}
