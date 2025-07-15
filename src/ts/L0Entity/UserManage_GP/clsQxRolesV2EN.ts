﻿/**
 * 类名:clsQxRolesV2EN
 * 表名:QxRolesV2(00140116)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 09:45:51
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 角色V2(QxRolesV2)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQxRolesV2EN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QxRolesV2'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'RId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'rId',
    'roleName',
    'roleENName',
    'roleIndex',
    'qxPrjId',
    'isInUse',
    'updDate',
    'updUserId',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mintRId = 0; //角色Id
  private mstrRoleName = ''; //角色名称
  private mstrRoleENName = ''; //角色英文名
  private mintRoleIndex = 0; //角色序号
  private mstrQxPrjId = ''; //项目Id
  private mbolIsInUse = false; //是否在使用
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //备注

  /**
   * 角色Id(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRId(value: number) {
    if (value != undefined) {
      this.rId = value;
      this.hmProperty['rId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 角色名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleName(value: string) {
    if (value != undefined) {
      this.roleName = value;
      this.hmProperty['roleName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 角色英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleENName(value: string) {
    if (value != undefined) {
      this.roleENName = value;
      this.hmProperty['roleENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 角色序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleIndex(value: number) {
    if (value != undefined) {
      this.roleIndex = value;
      this.hmProperty['roleIndex'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQxPrjId(value: string) {
    if (value != undefined) {
      this.qxPrjId = value;
      this.hmProperty['qxPrjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsInUse(value: boolean) {
    if (value != undefined) {
      this.isInUse = value;
      this.hmProperty['isInUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsQxRolesV2EN.con_RId:
        return this.rId;
      case clsQxRolesV2EN.con_RoleName:
        return this.roleName;
      case clsQxRolesV2EN.con_RoleENName:
        return this.roleENName;
      case clsQxRolesV2EN.con_RoleIndex:
        return this.roleIndex;
      case clsQxRolesV2EN.con_QxPrjId:
        return this.qxPrjId;
      case clsQxRolesV2EN.con_IsInUse:
        return this.isInUse;
      case clsQxRolesV2EN.con_UpdDate:
        return this.updDate;
      case clsQxRolesV2EN.con_UpdUserId:
        return this.updUserId;
      case clsQxRolesV2EN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxRolesV2]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsQxRolesV2EN.con_RId:
        this.rId = Number(strValue);
        this.hmProperty['rId'] = true;
        break;
      case clsQxRolesV2EN.con_RoleName:
        this.roleName = strValue;
        this.hmProperty['roleName'] = true;
        break;
      case clsQxRolesV2EN.con_RoleENName:
        this.roleENName = strValue;
        this.hmProperty['roleENName'] = true;
        break;
      case clsQxRolesV2EN.con_RoleIndex:
        this.roleIndex = Number(strValue);
        this.hmProperty['roleIndex'] = true;
        break;
      case clsQxRolesV2EN.con_QxPrjId:
        this.qxPrjId = strValue;
        this.hmProperty['qxPrjId'] = true;
        break;
      case clsQxRolesV2EN.con_IsInUse:
        this.isInUse = Boolean(strValue);
        this.hmProperty['isInUse'] = true;
        break;
      case clsQxRolesV2EN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsQxRolesV2EN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsQxRolesV2EN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxRolesV2]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public rId = 0; //角色Id
  public roleName = ''; //角色名称
  public roleENName = ''; //角色英文名
  public roleIndex = 0; //角色序号
  public qxPrjId = ''; //项目Id
  public isInUse = false; //是否在使用
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //备注

  /**
   * 常量:"RId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RId(): string {
    return 'rId';
  } //角色Id

  /**
   * 常量:"RoleName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RoleName(): string {
    return 'roleName';
  } //角色名称

  /**
   * 常量:"RoleENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RoleENName(): string {
    return 'roleENName';
  } //角色英文名

  /**
   * 常量:"RoleIndex"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RoleIndex(): string {
    return 'roleIndex';
  } //角色序号

  /**
   * 常量:"QxPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QxPrjId(): string {
    return 'qxPrjId';
  } //项目Id

  /**
   * 常量:"IsInUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsInUse(): string {
    return 'isInUse';
  } //是否在使用

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsQxRolesV2EN();
    const instance = new clsQxRolesV2EN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export enum enumQxRolesV2 {}
