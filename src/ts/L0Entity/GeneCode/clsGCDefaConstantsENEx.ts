/**
 * 类名:clsGCDefaConstantsENEx
 * 表名:GCDefaConstants(00050640)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 15:25:28
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * GC常量(GCDefaConstants)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';

export class clsGCDefaConstantsENEx extends clsGCDefaConstantsEN {
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
      case clsGCDefaConstantsENEx.con_ConstNameEx:
        return this.constNameEx;
      case clsGCDefaConstantsENEx.con_ConstExpressionEx:
        return this.constExpressionEx;
      case clsGCDefaConstantsENEx.con_PrjName:
        return this.prjName;
      case clsGCDefaConstantsENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsGCDefaConstantsENEx.con_DuFilePath:
        return this.duFilePath;
      case clsGCDefaConstantsENEx.con_DuClassName:
        return this.duClassName;
      case clsGCDefaConstantsENEx.con_DuDataTypeName:
        return this.duDataTypeName;
      case clsGCDefaConstantsENEx.con_PrjId:
        return this.prjId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ConstNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ConstNameEx = 'constNameEx'; //常量名Ex

  /**
   * 常量:"ConstExpressionEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ConstExpressionEx = 'constExpressionEx'; //常量表达式Ex

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrjName = 'prjName'; //工程名称

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DataTypeName = 'dataTypeName'; //数据类型名称

  /**
   * 常量:"DuFilePath"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DuFilePath = 'duFilePath'; //文件路径

  /**
   * 常量:"DuClassName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DuClassName = 'duClassName'; //类名

  /**
   * 常量:"DuDataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DuDataTypeName = 'duDataTypeName'; //数据类型名称

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrjId = 'prjId'; //工程Id

  public constNameEx = ''; //常量名Ex
  public constExpressionEx = ''; //常量表达式Ex
  public prjName = ''; //工程名称
  public dataTypeName = ''; //数据类型名称
  public duFilePath = ''; //文件路径
  public duClassName = ''; //类名
  public duDataTypeName = ''; //数据类型名称
  public prjId = ''; //工程Id

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsGCDefaConstantsENEx();
    const instance = new clsGCDefaConstantsENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
