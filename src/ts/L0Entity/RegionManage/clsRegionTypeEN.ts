/**
 * 类名:clsRegionTypeEN
 * 表名:RegionType(00050081)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 14:35:09
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 区域类型(RegionType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsRegionTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'RegionType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'RegionTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'regionTypeId',
    'regionTypeName',
    'regionTypeENName',
    'regionTypeSimName',
    'defaWidth',
    'regionTypeOrderNum',
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
  private mstrRegionTypeId = ''; //区域类型Id
  private mstrRegionTypeName = ''; //区域类型名称
  private mstrRegionTypeENName = ''; //区域类型英文名
  private mstrRegionTypeSimName = ''; //区域类型简名
  private mintDefaWidth = 0; //缺省宽度
  private mintRegionTypeOrderNum = 0; //区域类型序号
  private mstrMemo = ''; //说明

  /**
   * 区域类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeId(value: string) {
    if (value != undefined) {
      this.regionTypeId = value;
      this.hmProperty['regionTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeName(value: string) {
    if (value != undefined) {
      this.regionTypeName = value;
      this.hmProperty['regionTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型英文名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeENName(value: string) {
    if (value != undefined) {
      this.regionTypeENName = value;
      this.hmProperty['regionTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型简名(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeSimName(value: string) {
    if (value != undefined) {
      this.regionTypeSimName = value;
      this.hmProperty['regionTypeSimName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缺省宽度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaWidth(value: number) {
    if (value != undefined) {
      this.defaWidth = value;
      this.hmProperty['defaWidth'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeOrderNum(value: number) {
    if (value != undefined) {
      this.regionTypeOrderNum = value;
      this.hmProperty['regionTypeOrderNum'] = true;
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
      case clsRegionTypeEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsRegionTypeEN.con_RegionTypeName:
        return this.regionTypeName;
      case clsRegionTypeEN.con_RegionTypeENName:
        return this.regionTypeENName;
      case clsRegionTypeEN.con_RegionTypeSimName:
        return this.regionTypeSimName;
      case clsRegionTypeEN.con_DefaWidth:
        return this.defaWidth;
      case clsRegionTypeEN.con_RegionTypeOrderNum:
        return this.regionTypeOrderNum;
      case clsRegionTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[RegionType]中不存在!`;
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
      case clsRegionTypeEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        this.hmProperty['regionTypeId'] = true;
        break;
      case clsRegionTypeEN.con_RegionTypeName:
        this.regionTypeName = strValue;
        this.hmProperty['regionTypeName'] = true;
        break;
      case clsRegionTypeEN.con_RegionTypeENName:
        this.regionTypeENName = strValue;
        this.hmProperty['regionTypeENName'] = true;
        break;
      case clsRegionTypeEN.con_RegionTypeSimName:
        this.regionTypeSimName = strValue;
        this.hmProperty['regionTypeSimName'] = true;
        break;
      case clsRegionTypeEN.con_DefaWidth:
        this.defaWidth = Number(strValue);
        this.hmProperty['defaWidth'] = true;
        break;
      case clsRegionTypeEN.con_RegionTypeOrderNum:
        this.regionTypeOrderNum = Number(strValue);
        this.hmProperty['regionTypeOrderNum'] = true;
        break;
      case clsRegionTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[RegionType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public regionTypeId = ''; //区域类型Id
  public regionTypeName = ''; //区域类型名称
  public regionTypeENName = ''; //区域类型英文名
  public regionTypeSimName = ''; //区域类型简名
  public defaWidth = 0; //缺省宽度
  public regionTypeOrderNum = 0; //区域类型序号
  public memo = ''; //说明

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"RegionTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeName(): string {
    return 'regionTypeName';
  } //区域类型名称

  /**
   * 常量:"RegionTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeENName(): string {
    return 'regionTypeENName';
  } //区域类型英文名

  /**
   * 常量:"RegionTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeSimName(): string {
    return 'regionTypeSimName';
  } //区域类型简名

  /**
   * 常量:"DefaWidth"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaWidth(): string {
    return 'defaWidth';
  } //缺省宽度

  /**
   * 常量:"RegionTypeOrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeOrderNum(): string {
    return 'regionTypeOrderNum';
  } //区域类型序号

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
    //return propName in new clsRegionTypeEN();
    const instance = new clsRegionTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumRegionType {
  /**
   * 未知区域
   **/
  static readonly Unknown_0000 = '0000';
  /**
   * 查询区域
   **/
  static readonly QueryRegion_0001 = '0001';
  /**
   * 列表区域
   **/
  static readonly ListRegion_0002 = '0002';
  /**
   * 编辑区域
   **/
  static readonly EditRegion_0003 = '0003';
  /**
   * 树形区域
   **/
  static readonly TreeViewRegion_0005 = '0005';
  /**
   * 详细信息区域
   **/
  static readonly DetailRegion_0006 = '0006';
  /**
   * Excel导出区域
   **/
  static readonly ExcelExportRegion_0007 = '0007';
  /**
   * 功能区域
   **/
  static readonly FeatureRegion_0008 = '0008';
}
