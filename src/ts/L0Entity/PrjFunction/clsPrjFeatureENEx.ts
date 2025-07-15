/**
 * 类名:clsPrjFeatureENEx
 * 表名:PrjFeature(00050322)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:57
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
 * 功能(PrjFeature)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsFeatureButtonRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaENEx';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';

export class clsPrjFeatureENEx extends clsPrjFeatureEN {
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
      case clsPrjFeatureENEx.con_ButtonSet:
        return this.buttonSet;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ButtonSet"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ButtonSet(): string {
    return 'buttonSet';
  } //按钮集合

  public buttonSet = new Array<clsFeatureButtonRelaENEx>(); //按钮集合
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsPrjFeatureENEx();
    const instance = new clsPrjFeatureENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
