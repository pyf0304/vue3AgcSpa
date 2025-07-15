/**
 * 类名:clsGCConstantPrjIdRelaENEx
 * 表名:GCConstantPrjIdRela(00050641)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 09:37:36
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
 * GC常量工程关系(GCConstantPrjIdRela)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsGCConstantPrjIdRelaEN } from '@/ts/L0Entity/GeneCode/clsGCConstantPrjIdRelaEN';

export class clsGCConstantPrjIdRelaENEx extends clsGCConstantPrjIdRelaEN {
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
      case clsGCConstantPrjIdRelaENEx.con_PrjName:
        return this.prjName;
      case clsGCConstantPrjIdRelaENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsGCConstantPrjIdRelaENEx.con_CsType:
        return this.csType;
      case clsGCConstantPrjIdRelaENEx.con_TypeScriptType:
        return this.typeScriptType;
      case clsGCConstantPrjIdRelaENEx.con_DataTypeId:
        return this.dataTypeId;
      case clsGCConstantPrjIdRelaENEx.con_ConstName:
        return this.constName;
      case clsGCConstantPrjIdRelaENEx.con_DateTimeSim:
        return this.dateTimeSim;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

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
   * 常量:"CsType"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_CsType = 'csType'; //CS类型

  /**
   * 常量:"TypeScriptType"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TypeScriptType = 'typeScriptType'; //TypeScript类型

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DataTypeId = 'dataTypeId'; //数据类型Id

  /**
   * 常量:"ConstName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_ConstName = 'constName'; //常量名

  /**
   * 常量:"DateTimeSim"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DateTimeSim = 'dateTimeSim'; //简化日期时间

  public prjName = ''; //工程名称
  public dataTypeName = ''; //数据类型名称
  public csType = ''; //CS类型
  public typeScriptType = ''; //TypeScript类型
  public dataTypeId = ''; //数据类型Id
  public constName = ''; //常量名
  public dateTimeSim = ''; //简化日期时间

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsGCConstantPrjIdRelaENEx();
    const instance = new clsGCConstantPrjIdRelaENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
