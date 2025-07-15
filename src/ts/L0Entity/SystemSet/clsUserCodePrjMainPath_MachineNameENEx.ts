/**
 * 类名:clsUserCodePrjMainPath_MachineNameENEx
 * 表名:UserCodePrjMainPath_MachineName(00050614)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/04 18:07:32
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsUserCodePrjMainPath_MachineNameEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPath_MachineNameEN';

export class clsUserCodePrjMainPath_MachineNameENEx extends clsUserCodePrjMainPath_MachineNameEN {
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
      case clsUserCodePrjMainPath_MachineNameENEx.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsUserCodePrjMainPath_MachineNameENEx.con_CmPrjName:
        return this.cmPrjName;
      case clsUserCodePrjMainPath_MachineNameENEx.con_GcPathName:
        return this.gcPathName;
      case clsUserCodePrjMainPath_MachineNameENEx.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsUserCodePrjMainPath_MachineNameENEx.con_IsExistCodePath:
        return this.isExistCodePath;
      case clsUserCodePrjMainPath_MachineNameENEx.con_IsExistCodePathBackup:
        return this.isExistCodePathBackup;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ApplicationTypeSimName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"GcPathName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_GcPathName(): string {
    return 'gcPathName';
  } //GC路径名

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"IsExistCodePath"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsExistCodePath(): string {
    return 'isExistCodePath';
  } //是否存在代码路径

  /**
   * 常量:"IsExistCodePathBackup"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsExistCodePathBackup(): string {
    return 'isExistCodePathBackup';
  } //是否存在备份路径

  public applicationTypeSimName = ''; //应用程序类型简称
  public cmPrjName = ''; //CM工程名
  public gcPathName = ''; //GC路径名
  public applicationTypeName = ''; //应用程序类型名称
  public isExistCodePath = false; //是否存在代码路径
  public isExistCodePathBackup = false; //是否存在备份路径
}
