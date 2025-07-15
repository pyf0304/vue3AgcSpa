/**
 * 类名:clsUserPrjGrantENEx
 * 表名:UserPrjGrant(00050092)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:02
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:权限管理(AuthorityManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * UserPrjGrant(UserPrjGrant)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsUserPrjGrantEN } from '@/ts/L0Entity/AuthorityManage/clsUserPrjGrantEN';

export class clsUserPrjGrantENEx extends clsUserPrjGrantEN {
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
      case clsUserPrjGrantENEx.con_UserName:
        return this.userName;
      case clsUserPrjGrantENEx.con_PrjName:
        return this.prjName;
      case clsUserPrjGrantENEx.con_RoleName:
        return this.roleName;
      case clsUserPrjGrantENEx.con_OptDateSim:
        return this.optDateSim;
      case clsUserPrjGrantENEx.con_LastVisitedDateSim:
        return this.lastVisitedDateSim;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"UserName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"PrjName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"RoleName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RoleName(): string {
    return 'roleName';
  } //角色名称

  /**
   * 常量:"OptDateSim"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OptDateSim(): string {
    return 'optDateSim';
  } //简化日期

  /**
   * 常量:"LastVisitedDateSim"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LastVisitedDateSim(): string {
    return 'lastVisitedDateSim';
  } //最后访问时间

  public userName = ''; //用户名
  public prjName = ''; //工程名称
  public roleName = ''; //角色名称
  public optDateSim = ''; //简化日期
  public lastVisitedDateSim = ''; //最后访问时间
}
