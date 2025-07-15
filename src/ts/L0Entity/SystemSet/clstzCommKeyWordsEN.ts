/**
 * 类名:clstzCommKeyWordsEN
 * 表名:tz_CommKeyWords(00050330)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:17:49
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
 * tz_通用关键字(tzCommKeyWords)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clstzCommKeyWordsEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'tzCommKeyWords'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'KeyId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'keyId',
    'keyword',
    'tableName',
    'tableKey',
    'updUser',
    'updDate',
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
  private mstrKeyId = ''; //关键字Id
  private mstrKeyword = ''; //关键字
  private mstrTableName = ''; //表名
  private mstrTableKey = ''; //数据表关键字值
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明

  /**
   * 关键字Id(说明:;字段类型:varchar;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyId(value: string) {
    if (value != undefined) {
      this.keyId = value;
      this.hmProperty['keyId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关键字(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyword(value: string) {
    if (value != undefined) {
      this.keyword = value;
      this.hmProperty['keyword'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTableName(value: string) {
    if (value != undefined) {
      this.tableName = value;
      this.hmProperty['tableName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据表关键字值(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTableKey(value: string) {
    if (value != undefined) {
      this.tableKey = value;
      this.hmProperty['tableKey'] = true;
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
      case clstzCommKeyWordsEN.conKeyId:
        return this.keyId;
      case clstzCommKeyWordsEN.conKeyword:
        return this.keyword;
      case clstzCommKeyWordsEN.conTableName:
        return this.tableName;
      case clstzCommKeyWordsEN.conTableKey:
        return this.tableKey;
      case clstzCommKeyWordsEN.conUpdUser:
        return this.updUser;
      case clstzCommKeyWordsEN.conUpdDate:
        return this.updDate;
      case clstzCommKeyWordsEN.conMemo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[tzCommKeyWords]中不存在！`;
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
      case clstzCommKeyWordsEN.conKeyId:
        this.keyId = strValue;
        this.hmProperty['keyId'] = true;
        break;
      case clstzCommKeyWordsEN.conKeyword:
        this.keyword = strValue;
        this.hmProperty['keyword'] = true;
        break;
      case clstzCommKeyWordsEN.conTableName:
        this.tableName = strValue;
        this.hmProperty['tableName'] = true;
        break;
      case clstzCommKeyWordsEN.conTableKey:
        this.tableKey = strValue;
        this.hmProperty['tableKey'] = true;
        break;
      case clstzCommKeyWordsEN.conUpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clstzCommKeyWordsEN.conUpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clstzCommKeyWordsEN.conMemo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[tzCommKeyWords]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public keyId = ''; //关键字Id
  public keyword = ''; //关键字
  public tableName = ''; //表名
  public tableKey = ''; //数据表关键字值
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明

  /**
   * 常量:"KeyId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conKeyId(): string {
    return 'keyId';
  } //关键字Id

  /**
   * 常量:"Keyword"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conKeyword(): string {
    return 'keyword';
  } //关键字

  /**
   * 常量:"TableName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTableName(): string {
    return 'tableName';
  } //表名

  /**
   * 常量:"TableKey"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTableKey(): string {
    return 'tableKey';
  } //数据表关键字值

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMemo(): string {
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
