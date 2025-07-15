/**
 * 类名:clsDDLItemsOptionEN
 * 表名:DDLItemsOption(00050059)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 03:38:12
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
 * 下拉框列表选项(DDLItemsOption)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDDLItemsOptionEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'DDLItemsOption'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DdlItemsOptionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = [
    'ddlItemsOptionId',
    'ddlItemsOptionName',
    'ddlItemsOptionENName',
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
  private mstrDdlItemsOptionId = ''; //下拉框列表选项ID
  private mstrDdlItemsOptionName = ''; //下拉选项名
  private mstrDdlItemsOptionENName = ''; //下拉框列表选项英文名
  private mstrMemo = ''; //说明

  /**
   * 下拉框列表选项ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDdlItemsOptionId(value: string) {
    if (value != undefined) {
      this.ddlItemsOptionId = value;
      this.hmProperty['ddlItemsOptionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 下拉选项名(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDdlItemsOptionName(value: string) {
    if (value != undefined) {
      this.ddlItemsOptionName = value;
      this.hmProperty['ddlItemsOptionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 下拉框列表选项英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDdlItemsOptionENName(value: string) {
    if (value != undefined) {
      this.ddlItemsOptionENName = value;
      this.hmProperty['ddlItemsOptionENName'] = true;
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
      case clsDDLItemsOptionEN.con_DdlItemsOptionId:
        return this.ddlItemsOptionId;
      case clsDDLItemsOptionEN.con_DdlItemsOptionName:
        return this.ddlItemsOptionName;
      case clsDDLItemsOptionEN.con_DdlItemsOptionENName:
        return this.ddlItemsOptionENName;
      case clsDDLItemsOptionEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DDLItemsOption]中不存在!`;
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
      case clsDDLItemsOptionEN.con_DdlItemsOptionId:
        this.ddlItemsOptionId = strValue;
        this.hmProperty['ddlItemsOptionId'] = true;
        break;
      case clsDDLItemsOptionEN.con_DdlItemsOptionName:
        this.ddlItemsOptionName = strValue;
        this.hmProperty['ddlItemsOptionName'] = true;
        break;
      case clsDDLItemsOptionEN.con_DdlItemsOptionENName:
        this.ddlItemsOptionENName = strValue;
        this.hmProperty['ddlItemsOptionENName'] = true;
        break;
      case clsDDLItemsOptionEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DDLItemsOption]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public ddlItemsOptionId = ''; //下拉框列表选项ID
  public ddlItemsOptionName = ''; //下拉选项名
  public ddlItemsOptionENName = ''; //下拉框列表选项英文名
  public memo = ''; //说明

  /**
   * 常量:"DdlItemsOptionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DdlItemsOptionId(): string {
    return 'ddlItemsOptionId';
  } //下拉框列表选项ID

  /**
   * 常量:"DdlItemsOptionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DdlItemsOptionName(): string {
    return 'ddlItemsOptionName';
  } //下拉选项名

  /**
   * 常量:"DdlItemsOptionENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DdlItemsOptionENName(): string {
    return 'ddlItemsOptionENName';
  } //下拉框列表选项英文名

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
    //return propName in new clsDDLItemsOptionEN();
    const instance = new clsDDLItemsOptionEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumDDLItemsOption {
  /**
   * 未定
   **/
  static readonly Unknown_00 = '00';
  /**
   * 列表项串
   **/
  static readonly ListItemString_01 = '01';
  /**
   * 数据源表
   **/
  static readonly DataSourceTable_02 = '02';
  /**
   * SQL串
   **/
  static readonly SQLString_03 = '03';
  /**
   * 真假列表
   **/
  static readonly TrueAndFalseList_04 = '04';
}
