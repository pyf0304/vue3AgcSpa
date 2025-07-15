/**
 * 类名:clsSqlViewRelaTabEN
 * 表名:SqlViewRelaTab(00050247)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:56
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:Sql视图管理(SqlViewMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * Sql视图相关表(SqlViewRelaTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsSqlViewRelaTabEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'SqlViewRelaTab'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'RelaTabId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 15;
  public static AttributeName = [
    'relaTabId',
    'sqlViewId',
    'tabId',
    'tabAliases',
    'relaFldId',
    'otherFldId',
    'otherTabId',
    'svRelaTabTypeId',
    'tabRelationTypeId',
    'tabRelationText',
    'orderNum',
    'prjId',
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
  private mstrRelaTabId = ''; //相关表Id
  private mstrSqlViewId = ''; //Sql视图Id
  private mstrTabId = ''; //表ID
  private mstrTabAliases = ''; //表别名
  private mstrRelaFldId = ''; //关系字段
  private mstrOtherFldId = ''; //其他表字段
  private mstrOtherTabId = ''; //其他表Id
  private mstrSvRelaTabTypeId = ''; //Sql视图相关表类型Id
  private mstrTabRelationTypeId = ''; //表关系类型Id
  private mstrTabRelationText = ''; //表关系文本
  private mintOrderNum = 0; //序号
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * 相关表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelaTabId(value: string) {
    if (value != undefined) {
      this.relaTabId = value;
      this.hmProperty['relaTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql视图Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlViewId(value: string) {
    if (value != undefined) {
      this.sqlViewId = value;
      this.hmProperty['sqlViewId'] = true;
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
   * 表别名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabAliases(value: string) {
    if (value != undefined) {
      this.tabAliases = value;
      this.hmProperty['tabAliases'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关系字段(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelaFldId(value: string) {
    if (value != undefined) {
      this.relaFldId = value;
      this.hmProperty['relaFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 其他表字段(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOtherFldId(value: string) {
    if (value != undefined) {
      this.otherFldId = value;
      this.hmProperty['otherFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 其他表Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOtherTabId(value: string) {
    if (value != undefined) {
      this.otherTabId = value;
      this.hmProperty['otherTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql视图相关表类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSvRelaTabTypeId(value: string) {
    if (value != undefined) {
      this.svRelaTabTypeId = value;
      this.hmProperty['svRelaTabTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表关系类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabRelationTypeId(value: string) {
    if (value != undefined) {
      this.tabRelationTypeId = value;
      this.hmProperty['tabRelationTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表关系文本(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabRelationText(value: string) {
    if (value != undefined) {
      this.tabRelationText = value;
      this.hmProperty['tabRelationText'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
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
      case clsSqlViewRelaTabEN.con_RelaTabId:
        return this.relaTabId;
      case clsSqlViewRelaTabEN.con_SqlViewId:
        return this.sqlViewId;
      case clsSqlViewRelaTabEN.con_TabId:
        return this.tabId;
      case clsSqlViewRelaTabEN.con_TabAliases:
        return this.tabAliases;
      case clsSqlViewRelaTabEN.con_RelaFldId:
        return this.relaFldId;
      case clsSqlViewRelaTabEN.con_OtherFldId:
        return this.otherFldId;
      case clsSqlViewRelaTabEN.con_OtherTabId:
        return this.otherTabId;
      case clsSqlViewRelaTabEN.con_SvRelaTabTypeId:
        return this.svRelaTabTypeId;
      case clsSqlViewRelaTabEN.con_TabRelationTypeId:
        return this.tabRelationTypeId;
      case clsSqlViewRelaTabEN.con_TabRelationText:
        return this.tabRelationText;
      case clsSqlViewRelaTabEN.con_OrderNum:
        return this.orderNum;
      case clsSqlViewRelaTabEN.con_PrjId:
        return this.prjId;
      case clsSqlViewRelaTabEN.con_UpdDate:
        return this.updDate;
      case clsSqlViewRelaTabEN.con_UpdUserId:
        return this.updUserId;
      case clsSqlViewRelaTabEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SqlViewRelaTab]中不存在!`;
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
      case clsSqlViewRelaTabEN.con_RelaTabId:
        this.relaTabId = strValue;
        this.hmProperty['relaTabId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_SqlViewId:
        this.sqlViewId = strValue;
        this.hmProperty['sqlViewId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_TabAliases:
        this.tabAliases = strValue;
        this.hmProperty['tabAliases'] = true;
        break;
      case clsSqlViewRelaTabEN.con_RelaFldId:
        this.relaFldId = strValue;
        this.hmProperty['relaFldId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_OtherFldId:
        this.otherFldId = strValue;
        this.hmProperty['otherFldId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_OtherTabId:
        this.otherTabId = strValue;
        this.hmProperty['otherTabId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_SvRelaTabTypeId:
        this.svRelaTabTypeId = strValue;
        this.hmProperty['svRelaTabTypeId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_TabRelationTypeId:
        this.tabRelationTypeId = strValue;
        this.hmProperty['tabRelationTypeId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_TabRelationText:
        this.tabRelationText = strValue;
        this.hmProperty['tabRelationText'] = true;
        break;
      case clsSqlViewRelaTabEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsSqlViewRelaTabEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsSqlViewRelaTabEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsSqlViewRelaTabEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[SqlViewRelaTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public relaTabId = ''; //相关表Id
  public sqlViewId = ''; //Sql视图Id
  public tabId = ''; //表ID
  public tabAliases = ''; //表别名
  public relaFldId = ''; //关系字段
  public otherFldId = ''; //其他表字段
  public otherTabId = ''; //其他表Id
  public svRelaTabTypeId = ''; //Sql视图相关表类型Id
  public tabRelationTypeId = ''; //表关系类型Id
  public tabRelationText = ''; //表关系文本
  public orderNum = 0; //序号
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"RelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaTabId(): string {
    return 'relaTabId';
  } //相关表Id

  /**
   * 常量:"SqlViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlViewId(): string {
    return 'sqlViewId';
  } //Sql视图Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"TabAliases"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabAliases(): string {
    return 'tabAliases';
  } //表别名

  /**
   * 常量:"RelaFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaFldId(): string {
    return 'relaFldId';
  } //关系字段

  /**
   * 常量:"OtherFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OtherFldId(): string {
    return 'otherFldId';
  } //其他表字段

  /**
   * 常量:"OtherTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OtherTabId(): string {
    return 'otherTabId';
  } //其他表Id

  /**
   * 常量:"SvRelaTabTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SvRelaTabTypeId(): string {
    return 'svRelaTabTypeId';
  } //Sql视图相关表类型Id

  /**
   * 常量:"TabRelationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabRelationTypeId(): string {
    return 'tabRelationTypeId';
  } //表关系类型Id

  /**
   * 常量:"TabRelationText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabRelationText(): string {
    return 'tabRelationText';
  } //表关系文本

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

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
