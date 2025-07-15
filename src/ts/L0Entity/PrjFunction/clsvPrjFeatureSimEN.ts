/**
 * 类名:clsvPrjFeatureSimEN
 * 表名:vPrjFeatureSim(00050637)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:50
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * vPrjFeatureSim(vPrjFeatureSim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvPrjFeatureSimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vPrjFeatureSim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FeatureId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'featureId',
    'featureName',
    'featureTypeId',
    'regionTypeId',
    'inUse',
    'parentFeatureName',
    'parentFeatureId',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvPrjFeatureSimEN.con_FeatureId:
        return this.featureId;
      case clsvPrjFeatureSimEN.con_FeatureName:
        return this.featureName;
      case clsvPrjFeatureSimEN.con_FeatureTypeId:
        return this.featureTypeId;
      case clsvPrjFeatureSimEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsvPrjFeatureSimEN.con_InUse:
        return this.inUse;
      case clsvPrjFeatureSimEN.con_ParentFeatureName:
        return this.parentFeatureName;
      case clsvPrjFeatureSimEN.con_ParentFeatureId:
        return this.parentFeatureId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjFeatureSim]中不存在!`;
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
      case clsvPrjFeatureSimEN.con_FeatureId:
        this.featureId = strValue;
        break;
      case clsvPrjFeatureSimEN.con_FeatureName:
        this.featureName = strValue;
        break;
      case clsvPrjFeatureSimEN.con_FeatureTypeId:
        this.featureTypeId = strValue;
        break;
      case clsvPrjFeatureSimEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        break;
      case clsvPrjFeatureSimEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvPrjFeatureSimEN.con_ParentFeatureName:
        this.parentFeatureName = strValue;
        break;
      case clsvPrjFeatureSimEN.con_ParentFeatureId:
        this.parentFeatureId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjFeatureSim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public featureId = ''; //功能Id
  public featureName = ''; //功能名称
  public featureTypeId = ''; //功能类型Id
  public regionTypeId = ''; //区域类型Id
  public inUse = false; //是否在用
  public parentFeatureName = ''; //父功能名
  public parentFeatureId = ''; //父功能Id

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"FeatureName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"FeatureTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureTypeId(): string {
    return 'featureTypeId';
  } //功能类型Id

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"ParentFeatureName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParentFeatureName(): string {
    return 'parentFeatureName';
  } //父功能名

  /**
   * 常量:"ParentFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParentFeatureId(): string {
    return 'parentFeatureId';
  } //父功能Id

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
    //return propName in new clsvPrjFeatureSimEN();
    const instance = new clsvPrjFeatureSimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
