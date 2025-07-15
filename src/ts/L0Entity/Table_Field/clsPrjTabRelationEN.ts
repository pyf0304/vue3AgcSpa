/**
 * 类名:clsPrjTabRelationEN
 * 表名:PrjTabRelation(00050606)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:28
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 工程表关系(PrjTabRelation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPrjTabRelationEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PrjTabRelation'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PrjRelationId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 20;
  public static AttributeName = [
    'prjRelationId',
    'relationName',
    'tabId',
    'prjTabRelaTypeId',
    'dnPathId',
    'relationTabId',
    'fldId4TabId',
    'fldId4RelaTabId',
    'foreignKeyTabId',
    'foreignKeyFldId',
    'isCheckCurrData',
    'isCopyForceRela',
    'isUpdRelateFld',
    'isUpdMainTabDate',
    'isRefreshMainTabCache',
    'isDelRelateRec',
    'prjId',
    'memo',
    'primaryKeyTabId',
    'primaryKeyFldId',
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
  private mstrPrjRelationId = ''; //关系Id
  private mstrRelationName = ''; //关系名
  private mstrTabId = ''; //表ID
  private mstrPrjTabRelaTypeId = ''; //表关系类型Id
  private mstrDnPathId = ''; //DN路径Id
  private mstrRelationTabId = ''; //相关表Id
  private mstrFldId4TabId = ''; //当前表的关系字段Id
  private mstrFldId4RelaTabId = ''; //关系表的关系字段Id
  private mstrForeignKeyTabId = ''; //外键表ID
  private mstrForeignKeyFldId = ''; //外键字段Id
  private mbolIsCheckCurrData = false; //是否检查当前数据
  private mbolIsCopyForceRela = false; //IsCopyForceRela
  private mbolIsUpdRelateFld = false; //是否修改关系字段
  private mbolIsUpdMainTabDate = false; //是否修改主表日期
  private mbolIsRefreshMainTabCache = false; //是否刷新主表缓存
  private mbolIsDelRelateRec = false; //是否删除相关记录
  private mstrPrjId = ''; //工程Id
  private mstrMemo = ''; //说明
  private mstrPrimaryKeyTabId = ''; //PrimaryKeyTabId
  private mstrPrimaryKeyFldId = ''; //PrimaryKeyFldId

  /**
   * 关系Id(说明:;字段类型:varchar;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjRelationId(value: string) {
    if (value != undefined) {
      this.prjRelationId = value;
      this.hmProperty['prjRelationId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关系名(说明:;字段类型:varchar;字段长度:40;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelationName(value: string) {
    if (value != undefined) {
      this.relationName = value;
      this.hmProperty['relationName'] = true;
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
   * 表关系类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjTabRelaTypeId(value: string) {
    if (value != undefined) {
      this.prjTabRelaTypeId = value;
      this.hmProperty['prjTabRelaTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DN路径Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnPathId(value: string) {
    if (value != undefined) {
      this.dnPathId = value;
      this.hmProperty['dnPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 相关表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelationTabId(value: string) {
    if (value != undefined) {
      this.relationTabId = value;
      this.hmProperty['relationTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 当前表的关系字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldId4TabId(value: string) {
    if (value != undefined) {
      this.fldId4TabId = value;
      this.hmProperty['fldId4TabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关系表的关系字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldId4RelaTabId(value: string) {
    if (value != undefined) {
      this.fldId4RelaTabId = value;
      this.hmProperty['fldId4RelaTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 外键表ID(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetForeignKeyTabId(value: string) {
    if (value != undefined) {
      this.foreignKeyTabId = value;
      this.hmProperty['foreignKeyTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 外键字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetForeignKeyFldId(value: string) {
    if (value != undefined) {
      this.foreignKeyFldId = value;
      this.hmProperty['foreignKeyFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否检查当前数据(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsCheckCurrData(value: boolean) {
    if (value != undefined) {
      this.isCheckCurrData = value;
      this.hmProperty['isCheckCurrData'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsCopyForceRela(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsCopyForceRela(value: boolean) {
    if (value != undefined) {
      this.isCopyForceRela = value;
      this.hmProperty['isCopyForceRela'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否修改关系字段(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUpdRelateFld(value: boolean) {
    if (value != undefined) {
      this.isUpdRelateFld = value;
      this.hmProperty['isUpdRelateFld'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否修改主表日期(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUpdMainTabDate(value: boolean) {
    if (value != undefined) {
      this.isUpdMainTabDate = value;
      this.hmProperty['isUpdMainTabDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否刷新主表缓存(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsRefreshMainTabCache(value: boolean) {
    if (value != undefined) {
      this.isRefreshMainTabCache = value;
      this.hmProperty['isRefreshMainTabCache'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否删除相关记录(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDelRelateRec(value: boolean) {
    if (value != undefined) {
      this.isDelRelateRec = value;
      this.hmProperty['isDelRelateRec'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程Id(说明:;字段类型:char;字段长度:4;是否可空:False)
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
   * PrimaryKeyTabId(说明:;字段类型:varchar;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryKeyTabId(value: string) {
    if (value != undefined) {
      this.primaryKeyTabId = value;
      this.hmProperty['primaryKeyTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * PrimaryKeyFldId(说明:;字段类型:varchar;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryKeyFldId(value: string) {
    if (value != undefined) {
      this.primaryKeyFldId = value;
      this.hmProperty['primaryKeyFldId'] = true;
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
      case clsPrjTabRelationEN.con_PrjRelationId:
        return this.prjRelationId;
      case clsPrjTabRelationEN.con_RelationName:
        return this.relationName;
      case clsPrjTabRelationEN.con_TabId:
        return this.tabId;
      case clsPrjTabRelationEN.con_PrjTabRelaTypeId:
        return this.prjTabRelaTypeId;
      case clsPrjTabRelationEN.con_DnPathId:
        return this.dnPathId;
      case clsPrjTabRelationEN.con_RelationTabId:
        return this.relationTabId;
      case clsPrjTabRelationEN.con_FldId4TabId:
        return this.fldId4TabId;
      case clsPrjTabRelationEN.con_FldId4RelaTabId:
        return this.fldId4RelaTabId;
      case clsPrjTabRelationEN.con_ForeignKeyTabId:
        return this.foreignKeyTabId;
      case clsPrjTabRelationEN.con_ForeignKeyFldId:
        return this.foreignKeyFldId;
      case clsPrjTabRelationEN.con_IsCheckCurrData:
        return this.isCheckCurrData;
      case clsPrjTabRelationEN.con_IsCopyForceRela:
        return this.isCopyForceRela;
      case clsPrjTabRelationEN.con_IsUpdRelateFld:
        return this.isUpdRelateFld;
      case clsPrjTabRelationEN.con_IsUpdMainTabDate:
        return this.isUpdMainTabDate;
      case clsPrjTabRelationEN.con_IsRefreshMainTabCache:
        return this.isRefreshMainTabCache;
      case clsPrjTabRelationEN.con_IsDelRelateRec:
        return this.isDelRelateRec;
      case clsPrjTabRelationEN.con_PrjId:
        return this.prjId;
      case clsPrjTabRelationEN.con_Memo:
        return this.memo;
      case clsPrjTabRelationEN.con_PrimaryKeyTabId:
        return this.primaryKeyTabId;
      case clsPrjTabRelationEN.con_PrimaryKeyFldId:
        return this.primaryKeyFldId;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTabRelation]中不存在!`;
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
      case clsPrjTabRelationEN.con_PrjRelationId:
        this.prjRelationId = strValue;
        this.hmProperty['prjRelationId'] = true;
        break;
      case clsPrjTabRelationEN.con_RelationName:
        this.relationName = strValue;
        this.hmProperty['relationName'] = true;
        break;
      case clsPrjTabRelationEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsPrjTabRelationEN.con_PrjTabRelaTypeId:
        this.prjTabRelaTypeId = strValue;
        this.hmProperty['prjTabRelaTypeId'] = true;
        break;
      case clsPrjTabRelationEN.con_DnPathId:
        this.dnPathId = strValue;
        this.hmProperty['dnPathId'] = true;
        break;
      case clsPrjTabRelationEN.con_RelationTabId:
        this.relationTabId = strValue;
        this.hmProperty['relationTabId'] = true;
        break;
      case clsPrjTabRelationEN.con_FldId4TabId:
        this.fldId4TabId = strValue;
        this.hmProperty['fldId4TabId'] = true;
        break;
      case clsPrjTabRelationEN.con_FldId4RelaTabId:
        this.fldId4RelaTabId = strValue;
        this.hmProperty['fldId4RelaTabId'] = true;
        break;
      case clsPrjTabRelationEN.con_ForeignKeyTabId:
        this.foreignKeyTabId = strValue;
        this.hmProperty['foreignKeyTabId'] = true;
        break;
      case clsPrjTabRelationEN.con_ForeignKeyFldId:
        this.foreignKeyFldId = strValue;
        this.hmProperty['foreignKeyFldId'] = true;
        break;
      case clsPrjTabRelationEN.con_IsCheckCurrData:
        this.isCheckCurrData = Boolean(strValue);
        this.hmProperty['isCheckCurrData'] = true;
        break;
      case clsPrjTabRelationEN.con_IsCopyForceRela:
        this.isCopyForceRela = Boolean(strValue);
        this.hmProperty['isCopyForceRela'] = true;
        break;
      case clsPrjTabRelationEN.con_IsUpdRelateFld:
        this.isUpdRelateFld = Boolean(strValue);
        this.hmProperty['isUpdRelateFld'] = true;
        break;
      case clsPrjTabRelationEN.con_IsUpdMainTabDate:
        this.isUpdMainTabDate = Boolean(strValue);
        this.hmProperty['isUpdMainTabDate'] = true;
        break;
      case clsPrjTabRelationEN.con_IsRefreshMainTabCache:
        this.isRefreshMainTabCache = Boolean(strValue);
        this.hmProperty['isRefreshMainTabCache'] = true;
        break;
      case clsPrjTabRelationEN.con_IsDelRelateRec:
        this.isDelRelateRec = Boolean(strValue);
        this.hmProperty['isDelRelateRec'] = true;
        break;
      case clsPrjTabRelationEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsPrjTabRelationEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsPrjTabRelationEN.con_PrimaryKeyTabId:
        this.primaryKeyTabId = strValue;
        this.hmProperty['primaryKeyTabId'] = true;
        break;
      case clsPrjTabRelationEN.con_PrimaryKeyFldId:
        this.primaryKeyFldId = strValue;
        this.hmProperty['primaryKeyFldId'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTabRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public prjRelationId = ''; //关系Id
  public relationName = ''; //关系名
  public tabId = ''; //表ID
  public prjTabRelaTypeId = ''; //表关系类型Id
  public dnPathId = ''; //DN路径Id
  public relationTabId = ''; //相关表Id
  public fldId4TabId = ''; //当前表的关系字段Id
  public fldId4RelaTabId = ''; //关系表的关系字段Id
  public foreignKeyTabId = ''; //外键表ID
  public foreignKeyFldId = ''; //外键字段Id
  public isCheckCurrData = false; //是否检查当前数据
  public isCopyForceRela = false; //IsCopyForceRela
  public isUpdRelateFld = false; //是否修改关系字段
  public isUpdMainTabDate = false; //是否修改主表日期
  public isRefreshMainTabCache = false; //是否刷新主表缓存
  public isDelRelateRec = false; //是否删除相关记录
  public prjId = ''; //工程Id
  public memo = ''; //说明
  public primaryKeyTabId = ''; //PrimaryKeyTabId
  public primaryKeyFldId = ''; //PrimaryKeyFldId

  /**
   * 常量:"PrjRelationId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjRelationId(): string {
    return 'prjRelationId';
  } //关系Id

  /**
   * 常量:"RelationName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelationName(): string {
    return 'relationName';
  } //关系名

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"PrjTabRelaTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjTabRelaTypeId(): string {
    return 'prjTabRelaTypeId';
  } //表关系类型Id

  /**
   * 常量:"DnPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathId(): string {
    return 'dnPathId';
  } //DN路径Id

  /**
   * 常量:"RelationTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelationTabId(): string {
    return 'relationTabId';
  } //相关表Id

  /**
   * 常量:"FldId4TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId4TabId(): string {
    return 'fldId4TabId';
  } //当前表的关系字段Id

  /**
   * 常量:"FldId4RelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId4RelaTabId(): string {
    return 'fldId4RelaTabId';
  } //关系表的关系字段Id

  /**
   * 常量:"ForeignKeyTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ForeignKeyTabId(): string {
    return 'foreignKeyTabId';
  } //外键表ID

  /**
   * 常量:"ForeignKeyFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ForeignKeyFldId(): string {
    return 'foreignKeyFldId';
  } //外键字段Id

  /**
   * 常量:"IsCheckCurrData"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsCheckCurrData(): string {
    return 'isCheckCurrData';
  } //是否检查当前数据

  /**
   * 常量:"IsCopyForceRela"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsCopyForceRela(): string {
    return 'isCopyForceRela';
  } //IsCopyForceRela

  /**
   * 常量:"IsUpdRelateFld"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsUpdRelateFld(): string {
    return 'isUpdRelateFld';
  } //是否修改关系字段

  /**
   * 常量:"IsUpdMainTabDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsUpdMainTabDate(): string {
    return 'isUpdMainTabDate';
  } //是否修改主表日期

  /**
   * 常量:"IsRefreshMainTabCache"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsRefreshMainTabCache(): string {
    return 'isRefreshMainTabCache';
  } //是否刷新主表缓存

  /**
   * 常量:"IsDelRelateRec"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsDelRelateRec(): string {
    return 'isDelRelateRec';
  } //是否删除相关记录

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"PrimaryKeyTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryKeyTabId(): string {
    return 'primaryKeyTabId';
  } //PrimaryKeyTabId

  /**
   * 常量:"PrimaryKeyFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryKeyFldId(): string {
    return 'primaryKeyFldId';
  } //PrimaryKeyFldId

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
    //return propName in new clsPrjTabRelationEN();
    const instance = new clsPrjTabRelationEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
