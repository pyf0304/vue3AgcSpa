/**
 * 类名:clsUserCodePrjMainPathEN
 * 表名:UserCodePrjMainPath(00050338)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:48:40
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 用户生成项目主路径(UserCodePrjMainPath)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserCodePrjMainPathEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserCodePrjMainPath'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserCodePrjMainPathId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 12;
  public static AttributeName = [
    'userCodePrjMainPathId',
    'cMProjectAppRelaId',
    'prjId',
    'progLangTypeId',
    'userId',
    'isUsePrjMainPath',
    'includeXmlPath',
    'isTemplate',
    'inUse',
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
  private mstrUserCodePrjMainPathId = ''; //生成主目录Id
  private mlngCMProjectAppRelaId = 0; //Cm工程应用关系Id
  private mstrPrjId = ''; //工程Id
  private mstrProgLangTypeId = ''; //编程语言类型Id
  private mstrUserId = ''; //用户Id
  private mbolIsUsePrjMainPath = false; //是否使用主路径
  private mstrIncludeXmlPath = ''; //包含表Xml路径
  private mbolIsTemplate = false; //是否模板
  private mbolInUse = false; //是否在用
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * 生成主目录Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserCodePrjMainPathId(value: string) {
    if (value != undefined) {
      this.userCodePrjMainPathId = value;
      this.hmProperty['userCodePrjMainPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Cm工程应用关系Id(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCMProjectAppRelaId(value: number) {
    if (value != undefined) {
      this.cMProjectAppRelaId = value;
      this.hmProperty['cMProjectAppRelaId'] = true;
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
   * 编程语言类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId(value: string) {
    if (value != undefined) {
      this.progLangTypeId = value;
      this.hmProperty['progLangTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否使用主路径(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUsePrjMainPath(value: boolean) {
    if (value != undefined) {
      this.isUsePrjMainPath = value;
      this.hmProperty['isUsePrjMainPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 包含表Xml路径(说明:;字段类型:varchar;字段长度:150;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIncludeXmlPath(value: string) {
    if (value != undefined) {
      this.includeXmlPath = value;
      this.hmProperty['includeXmlPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否模板(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTemplate(value: boolean) {
    if (value != undefined) {
      this.isTemplate = value;
      this.hmProperty['isTemplate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInUse(value: boolean) {
    if (value != undefined) {
      this.inUse = value;
      this.hmProperty['inUse'] = true;
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
      case clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        return this.userCodePrjMainPathId;
      case clsUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        return this.cMProjectAppRelaId;
      case clsUserCodePrjMainPathEN.con_PrjId:
        return this.prjId;
      case clsUserCodePrjMainPathEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsUserCodePrjMainPathEN.con_UserId:
        return this.userId;
      case clsUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        return this.isUsePrjMainPath;
      case clsUserCodePrjMainPathEN.con_IncludeXmlPath:
        return this.includeXmlPath;
      case clsUserCodePrjMainPathEN.con_IsTemplate:
        return this.isTemplate;
      case clsUserCodePrjMainPathEN.con_InUse:
        return this.inUse;
      case clsUserCodePrjMainPathEN.con_UpdDate:
        return this.updDate;
      case clsUserCodePrjMainPathEN.con_UpdUserId:
        return this.updUserId;
      case clsUserCodePrjMainPathEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePrjMainPath]中不存在!`;
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
      case clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        this.userCodePrjMainPathId = strValue;
        this.hmProperty['userCodePrjMainPathId'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        this.cMProjectAppRelaId = Number(strValue);
        this.hmProperty['cMProjectAppRelaId'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        this.hmProperty['progLangTypeId'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        this.isUsePrjMainPath = Boolean(strValue);
        this.hmProperty['isUsePrjMainPath'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_IncludeXmlPath:
        this.includeXmlPath = strValue;
        this.hmProperty['includeXmlPath'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        this.hmProperty['isTemplate'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsUserCodePrjMainPathEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePrjMainPath]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public userCodePrjMainPathId = ''; //生成主目录Id
  public cMProjectAppRelaId = 0; //Cm工程应用关系Id
  public prjId = ''; //工程Id
  public progLangTypeId = ''; //编程语言类型Id
  public userId = ''; //用户Id
  public isUsePrjMainPath = false; //是否使用主路径
  public includeXmlPath = ''; //包含表Xml路径
  public isTemplate = false; //是否模板
  public inUse = false; //是否在用
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"UserCodePrjMainPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserCodePrjMainPathId(): string {
    return 'userCodePrjMainPathId';
  } //生成主目录Id

  /**
   * 常量:"CMProjectAppRelaId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CMProjectAppRelaId(): string {
    return 'cMProjectAppRelaId';
  } //Cm工程应用关系Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"IsUsePrjMainPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsUsePrjMainPath(): string {
    return 'isUsePrjMainPath';
  } //是否使用主路径

  /**
   * 常量:"IncludeXmlPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IncludeXmlPath(): string {
    return 'includeXmlPath';
  } //包含表Xml路径

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

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
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsUserCodePrjMainPathEN();
    const instance = new clsUserCodePrjMainPathEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
