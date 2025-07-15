/**
 * 类名:clsFeatureButtonRelaENEx
 * 表名:FeatureButtonRela(00050426)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:35
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 功能按钮关系(FeatureButtonRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFeatureButtonRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaEN';

export class clsFeatureButtonRelaENEx extends clsFeatureButtonRelaEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      case clsFeatureButtonRelaENEx.con_OrderNum:
        return this.orderNum;
      case clsFeatureButtonRelaENEx.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsFeatureButtonRelaENEx.con_ApplicationTypeENName:
        return this.applicationTypeENName;
      case clsFeatureButtonRelaENEx.con_FeatureName:
        return this.featureName;
      case clsFeatureButtonRelaENEx.con_FeatureTypeName:
        return this.featureTypeName;
      case clsFeatureButtonRelaENEx.con_ButtonName:
        return this.buttonName;
      case clsFeatureButtonRelaENEx.con_Text:
        return this.text;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"ApplicationTypeENName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ApplicationTypeENName(): string {
    return 'applicationTypeENName';
  } //应用类型英文名

  /**
   * 常量:"FeatureName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"FeatureTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FeatureTypeName(): string {
    return 'featureTypeName';
  } //功能类型名称

  /**
   * 常量:"ButtonName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ButtonName(): string {
    return 'buttonName';
  } //按钮名称

  /**
   * 常量:"Text"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_Text(): string {
    return 'text';
  } //文本

  public orderNum = 0; //序号
  public applicationTypeName = ''; //应用程序类型名称
  public applicationTypeENName = ''; //应用类型英文名
  public featureName = ''; //功能名称
  public featureTypeName = ''; //功能类型名称
  public buttonName = ''; //按钮名称
  public text = ''; //文本
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsFeatureButtonRelaENEx();
    const instance = new clsFeatureButtonRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
