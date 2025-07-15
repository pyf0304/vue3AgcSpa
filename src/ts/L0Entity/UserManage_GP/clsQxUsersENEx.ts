/**
 * 类名:clsQxUsersENEx
 * 表名:QxUsers(00140015)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 12:54:43
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 用户(QxUsers)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';

export class clsQxUsersENEx extends clsQxUsersEN {
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
      case clsQxUsersENEx.con_DepartmentName:
        return this.departmentName;
      case clsQxUsersENEx.con_DepartmentTypeId:
        return this.departmentTypeId;
      case clsQxUsersENEx.con_DepartmentTypeName:
        return this.departmentTypeName;
      case clsQxUsersENEx.con_DuUserName:
        return this.duUserName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"DepartmentName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentName(): string {
    return 'departmentName';
  } //部门名

  /**
   * 常量:"DepartmentTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentTypeId(): string {
    return 'departmentTypeId';
  } //部门类型ID

  /**
   * 常量:"DepartmentTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentTypeName(): string {
    return 'departmentTypeName';
  } //部门类型名

  /**
   * 常量:"DuUserName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DuUserName(): string {
    return 'duUserName';
  } //用户名

  public departmentName = ''; //部门名
  public departmentTypeId = ''; //部门类型ID
  public departmentTypeName = ''; //部门类型名
  public duUserName = ''; //用户名
}
