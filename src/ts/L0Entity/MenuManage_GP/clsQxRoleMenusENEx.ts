/**
 * 类名:clsQxRoleMenusENEx
 * 表名:QxRoleMenus(00140007)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 00:23:35
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 角色菜单(QxRoleMenus)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';

export class clsQxRoleMenusENEx extends clsQxRoleMenusEN {
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
      case clsQxRoleMenusENEx.con_MenuName:
        return this.menuName;
      case clsQxRoleMenusENEx.con_RoleName:
        return this.roleName;
      case clsQxRoleMenusENEx.con_MenuSetName:
        return this.menuSetName;
      case clsQxRoleMenusENEx.con_MenuSetId:
        return this.menuSetId;
      case clsQxRoleMenusENEx.con_OrderNum:
        return this.orderNum;
      case clsQxRoleMenusENEx.con_InUse:
        return this.inUse;
      case clsQxRoleMenusENEx.con_IsLeafNode:
        return this.isLeafNode;
      case clsQxRoleMenusENEx.con_PageDispModeId:
        return this.pageDispModeId;
      case clsQxRoleMenusENEx.con_UpMenuId:
        return this.upMenuId;
      case clsQxRoleMenusENEx.con_LinkFile:
        return this.linkFile;
      case clsQxRoleMenusENEx.con_PrjName:
        return this.prjName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"MenuName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuName(): string {
    return 'menuName';
  } //菜单名

  /**
   * 常量:"RoleName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RoleName(): string {
    return 'roleName';
  } //角色名称

  /**
   * 常量:"MenuSetName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuSetName(): string {
    return 'menuSetName';
  } //菜单集名称

  /**
   * 常量:"MenuSetId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MenuSetId(): string {
    return 'menuSetId';
  } //菜单集Id

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //排序号

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"IsLeafNode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsLeafNode(): string {
    return 'isLeafNode';
  } //是否叶子

  /**
   * 常量:"PageDispModeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PageDispModeId(): string {
    return 'pageDispModeId';
  } //页面显示模式Id

  /**
   * 常量:"UpMenuId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpMenuId(): string {
    return 'upMenuId';
  } //上级菜单Id

  /**
   * 常量:"LinkFile"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LinkFile(): string {
    return 'linkFile';
  } //链接文件

  /**
   * 常量:"PrjName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名

  public menuName = ''; //菜单名
  public roleName = ''; //角色名称
  public menuSetName = ''; //菜单集名称
  public menuSetId = ''; //菜单集Id
  public orderNum = 0; //排序号
  public inUse = false; //是否在用
  public isLeafNode = false; //是否叶子
  public pageDispModeId = ''; //页面显示模式Id
  public upMenuId = ''; //上级菜单Id
  public linkFile = ''; //链接文件
  public prjName = ''; //工程名
}
