﻿/**
 * 类名:clsAppPageTypeEN
 * 表名:AppPageType(00050382)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:25
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * App页面类型(AppPageType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsAppPageTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'AppPageType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'AppPageTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = [
    'appPageTypeId',
    'appPageTypeName',
    'appPageTypeENName',
    'updDate',
    'updUser',
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
  private mstrAppPageTypeId = ''; //App页面类型Id
  private mstrAppPageTypeName = ''; //App页面类型名
  private mstrAppPageTypeENName = ''; //App页面类型英文名
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * App页面类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAppPageTypeId(value: string) {
    if (value != undefined) {
      this.appPageTypeId = value;
      this.hmProperty['appPageTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * App页面类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAppPageTypeName(value: string) {
    if (value != undefined) {
      this.appPageTypeName = value;
      this.hmProperty['appPageTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * App页面类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAppPageTypeENName(value: string) {
    if (value != undefined) {
      this.appPageTypeENName = value;
      this.hmProperty['appPageTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
   * 修改者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
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
      case clsAppPageTypeEN.con_AppPageTypeId:
        return this.appPageTypeId;
      case clsAppPageTypeEN.con_AppPageTypeName:
        return this.appPageTypeName;
      case clsAppPageTypeEN.con_AppPageTypeENName:
        return this.appPageTypeENName;
      case clsAppPageTypeEN.con_UpdDate:
        return this.updDate;
      case clsAppPageTypeEN.con_UpdUser:
        return this.updUser;
      case clsAppPageTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[AppPageType]中不存在!`;
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
      case clsAppPageTypeEN.con_AppPageTypeId:
        this.appPageTypeId = strValue;
        this.hmProperty['appPageTypeId'] = true;
        break;
      case clsAppPageTypeEN.con_AppPageTypeName:
        this.appPageTypeName = strValue;
        this.hmProperty['appPageTypeName'] = true;
        break;
      case clsAppPageTypeEN.con_AppPageTypeENName:
        this.appPageTypeENName = strValue;
        this.hmProperty['appPageTypeENName'] = true;
        break;
      case clsAppPageTypeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsAppPageTypeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsAppPageTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[AppPageType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public appPageTypeId = ''; //App页面类型Id
  public appPageTypeName = ''; //App页面类型名
  public appPageTypeENName = ''; //App页面类型英文名
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"AppPageTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AppPageTypeId(): string {
    return 'appPageTypeId';
  } //App页面类型Id

  /**
   * 常量:"AppPageTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AppPageTypeName(): string {
    return 'appPageTypeName';
  } //App页面类型名

  /**
   * 常量:"AppPageTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AppPageTypeENName(): string {
    return 'appPageTypeENName';
  } //App页面类型英文名

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

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
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumAppPageType {
  /**
   * 多Tabs页面
   **/
  static readonly TabsPage_0001 = '0001';
  /**
   * 滚动页面
   **/
  static readonly ScrollView_0002 = '0002';
  /**
   * 线性布局
   **/
  static readonly LinearLayout_0003 = '0003';
}
