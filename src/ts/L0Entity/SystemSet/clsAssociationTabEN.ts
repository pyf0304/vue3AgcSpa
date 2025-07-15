﻿/**
 * 类名:clsAssociationTabEN
 * 表名:AssociationTab(00050276)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:13
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 关联(AssociationTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsAssociationTabEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'AssociationTab'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'mId',
    'prjId',
    'tabId',
    'associationTabId',
    'associationPrjId',
    'associationTypeId',
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
  private mlngmId = 0; //mId
  private mstrPrjId = ''; //工程ID
  private mstrTabId = ''; //表ID
  private mstrAssociationTabId = ''; //关联表Id
  private mstrAssociationPrjId = ''; //关联项目Id
  private mstrAssociationTypeId = ''; //关联类型Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetmId(value: number) {
    if (value != undefined) {
      this.mId = value;
      this.hmProperty['mId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjId(value: string) {
    if (value != undefined) {
      this.prjId = value;
      this.hmProperty['prjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabId(value: string) {
    if (value != undefined) {
      this.tabId = value;
      this.hmProperty['tabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关联表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAssociationTabId(value: string) {
    if (value != undefined) {
      this.associationTabId = value;
      this.hmProperty['associationTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关联项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAssociationPrjId(value: string) {
    if (value != undefined) {
      this.associationPrjId = value;
      this.hmProperty['associationPrjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关联类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAssociationTypeId(value: string) {
    if (value != undefined) {
      this.associationTypeId = value;
      this.hmProperty['associationTypeId'] = true;
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
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
      case clsAssociationTabEN.con_mId:
        return this.mId;
      case clsAssociationTabEN.con_PrjId:
        return this.prjId;
      case clsAssociationTabEN.con_TabId:
        return this.tabId;
      case clsAssociationTabEN.con_AssociationTabId:
        return this.associationTabId;
      case clsAssociationTabEN.con_AssociationPrjId:
        return this.associationPrjId;
      case clsAssociationTabEN.con_AssociationTypeId:
        return this.associationTypeId;
      case clsAssociationTabEN.con_UpdDate:
        return this.updDate;
      case clsAssociationTabEN.con_UpdUserId:
        return this.updUserId;
      case clsAssociationTabEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[AssociationTab]中不存在!`;
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
      case clsAssociationTabEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsAssociationTabEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsAssociationTabEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsAssociationTabEN.con_AssociationTabId:
        this.associationTabId = strValue;
        this.hmProperty['associationTabId'] = true;
        break;
      case clsAssociationTabEN.con_AssociationPrjId:
        this.associationPrjId = strValue;
        this.hmProperty['associationPrjId'] = true;
        break;
      case clsAssociationTabEN.con_AssociationTypeId:
        this.associationTypeId = strValue;
        this.hmProperty['associationTypeId'] = true;
        break;
      case clsAssociationTabEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsAssociationTabEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsAssociationTabEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[AssociationTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public prjId = ''; //工程ID
  public tabId = ''; //表ID
  public associationTabId = ''; //关联表Id
  public associationPrjId = ''; //关联项目Id
  public associationTypeId = ''; //关联类型Id
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"TabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"AssociationTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AssociationTabId(): string {
    return 'associationTabId';
  } //关联表Id

  /**
   * 常量:"AssociationPrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AssociationPrjId(): string {
    return 'associationPrjId';
  } //关联项目Id

  /**
   * 常量:"AssociationTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AssociationTypeId(): string {
    return 'associationTypeId';
  } //关联类型Id

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

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
