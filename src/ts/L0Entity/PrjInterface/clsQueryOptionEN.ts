/**
 * 类名:clsQueryOptionEN
 * 表名:QueryOption(00050080)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/01 23:48:34
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 查询选项(QueryOption)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQueryOptionEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QueryOption'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'QueryOptionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = ['queryOptionId', 'queryOptionName', 'queryOptionENName', 'memo'];
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
  private mstrQueryOptionId = ''; //查询方式Id
  private mstrQueryOptionName = ''; //查询方式名称
  private mstrQueryOptionENName = ''; //查询方式英文名
  private mstrMemo = ''; //说明

  /**
   * 查询方式Id(说明:;字段类型:varchar;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQueryOptionId(value: string) {
    if (value != undefined) {
      this.queryOptionId = value;
      this.hmProperty['queryOptionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 查询方式名称(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQueryOptionName(value: string) {
    if (value != undefined) {
      this.queryOptionName = value;
      this.hmProperty['queryOptionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 查询方式英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQueryOptionENName(value: string) {
    if (value != undefined) {
      this.queryOptionENName = value;
      this.hmProperty['queryOptionENName'] = true;
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
      case clsQueryOptionEN.con_QueryOptionId:
        return this.queryOptionId;
      case clsQueryOptionEN.con_QueryOptionName:
        return this.queryOptionName;
      case clsQueryOptionEN.con_QueryOptionENName:
        return this.queryOptionENName;
      case clsQueryOptionEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QueryOption]中不存在!`;
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
      case clsQueryOptionEN.con_QueryOptionId:
        this.queryOptionId = strValue;
        this.hmProperty['queryOptionId'] = true;
        break;
      case clsQueryOptionEN.con_QueryOptionName:
        this.queryOptionName = strValue;
        this.hmProperty['queryOptionName'] = true;
        break;
      case clsQueryOptionEN.con_QueryOptionENName:
        this.queryOptionENName = strValue;
        this.hmProperty['queryOptionENName'] = true;
        break;
      case clsQueryOptionEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[QueryOption]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public queryOptionId = ''; //查询方式Id
  public queryOptionName = ''; //查询方式名称
  public queryOptionENName = ''; //查询方式英文名
  public memo = ''; //说明

  /**
   * 常量:"QueryOptionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QueryOptionId(): string {
    return 'queryOptionId';
  } //查询方式Id

  /**
   * 常量:"QueryOptionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QueryOptionName(): string {
    return 'queryOptionName';
  } //查询方式名称

  /**
   * 常量:"QueryOptionENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QueryOptionENName(): string {
    return 'queryOptionENName';
  } //查询方式英文名

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
    //return propName in new clsQueryOptionEN();
    const instance = new clsQueryOptionEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumQueryOption {
  /**
   * 未定
   **/
  static readonly Known_00 = '00';
  /**
   * 相等查询
   **/
  static readonly EqualQuery_01 = '01';
  /**
   * 模糊查询
   **/
  static readonly FuzzyQuery_02 = '02';
  /**
   * 范围查询
   **/
  static readonly RangeQuery_03 = '03';
  /**
   * 非查询字段
   **/
  static readonly NonQueryField_04 = '04';
}
