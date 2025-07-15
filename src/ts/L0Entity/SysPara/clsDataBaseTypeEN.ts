/**
 * 类名:clsDataBaseTypeEN
 * 表名:DataBaseType(00050159)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:52
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
 * 数据库类型(DataBaseType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDataBaseTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'DataBaseType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DataBaseTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 5;
  public static AttributeName = [
    'dataBaseTypeId',
    'dataBaseTypeName',
    'dataBaseTypeENName',
    'dataBaseTypeSimName',
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
  private mstrDataBaseTypeId = ''; //数据库类型ID
  private mstrDataBaseTypeName = ''; //数据库类型名
  private mstrDataBaseTypeENName = ''; //数据库类型英文名
  private mstrDataBaseTypeSimName = ''; //数据库类型简名
  private mstrMemo = ''; //说明

  /**
   * 数据库类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataBaseTypeId(value: string) {
    if (value != undefined) {
      this.dataBaseTypeId = value;
      this.hmProperty['dataBaseTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据库类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataBaseTypeName(value: string) {
    if (value != undefined) {
      this.dataBaseTypeName = value;
      this.hmProperty['dataBaseTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据库类型英文名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataBaseTypeENName(value: string) {
    if (value != undefined) {
      this.dataBaseTypeENName = value;
      this.hmProperty['dataBaseTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据库类型简名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataBaseTypeSimName(value: string) {
    if (value != undefined) {
      this.dataBaseTypeSimName = value;
      this.hmProperty['dataBaseTypeSimName'] = true;
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
      case clsDataBaseTypeEN.con_DataBaseTypeId:
        return this.dataBaseTypeId;
      case clsDataBaseTypeEN.con_DataBaseTypeName:
        return this.dataBaseTypeName;
      case clsDataBaseTypeEN.con_DataBaseTypeENName:
        return this.dataBaseTypeENName;
      case clsDataBaseTypeEN.con_DataBaseTypeSimName:
        return this.dataBaseTypeSimName;
      case clsDataBaseTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DataBaseType]中不存在!`;
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
      case clsDataBaseTypeEN.con_DataBaseTypeId:
        this.dataBaseTypeId = strValue;
        this.hmProperty['dataBaseTypeId'] = true;
        break;
      case clsDataBaseTypeEN.con_DataBaseTypeName:
        this.dataBaseTypeName = strValue;
        this.hmProperty['dataBaseTypeName'] = true;
        break;
      case clsDataBaseTypeEN.con_DataBaseTypeENName:
        this.dataBaseTypeENName = strValue;
        this.hmProperty['dataBaseTypeENName'] = true;
        break;
      case clsDataBaseTypeEN.con_DataBaseTypeSimName:
        this.dataBaseTypeSimName = strValue;
        this.hmProperty['dataBaseTypeSimName'] = true;
        break;
      case clsDataBaseTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DataBaseType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dataBaseTypeId = ''; //数据库类型ID
  public dataBaseTypeName = ''; //数据库类型名
  public dataBaseTypeENName = ''; //数据库类型英文名
  public dataBaseTypeSimName = ''; //数据库类型简名
  public memo = ''; //说明

  /**
   * 常量:"DataBaseTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataBaseTypeId(): string {
    return 'dataBaseTypeId';
  } //数据库类型ID

  /**
   * 常量:"DataBaseTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataBaseTypeName(): string {
    return 'dataBaseTypeName';
  } //数据库类型名

  /**
   * 常量:"DataBaseTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataBaseTypeENName(): string {
    return 'dataBaseTypeENName';
  } //数据库类型英文名

  /**
   * 常量:"DataBaseTypeSimName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataBaseTypeSimName(): string {
    return 'dataBaseTypeSimName';
  } //数据库类型简名

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
export class enumDataBaseType {
  /**
   * 未知
   **/
  static readonly Unknown_00 = '00';
  /**
   * MS Sql Sever2000
   **/
  static readonly MsSql2000_01 = '01';
  /**
   * MS Sql Server2005
   **/
  static readonly MsSql2005_02 = '02';
  /**
   * Oracle10
   **/
  static readonly Oracle_03 = '03';
  /**
   * My Sql
   **/
  static readonly MySql_04 = '04';
}
