/**
 * 类名:clsvFunctionTemplateRelaSimENEx
 * 表名:vFunctionTemplateRela_Sim(00050604)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:22:31
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * v函数模板关系_Sim(vFunctionTemplateRelaSim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvFunctionTemplateRelaSimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRelaSimEN';

export class clsvFunctionTemplateRelaSimENEx extends clsvFunctionTemplateRelaSimEN {
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
      case clsvFunctionTemplateRelaSimENEx.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvFunctionTemplateRelaSimENEx.conProgLangTypeName:
        return this.progLangTypeName;
      case clsvFunctionTemplateRelaSimENEx.conFuncTypeId:
        return this.funcTypeId;
      case clsvFunctionTemplateRelaSimENEx.conFuncTypeName:
        return this.funcTypeName;
      case clsvFunctionTemplateRelaSimENEx.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvFunctionTemplateRelaSimENEx.conSqlDsTypeName:
        return this.sqlDsTypeName;
      case clsvFunctionTemplateRelaSimENEx.con_FuncName:
        return this.funcName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"ProgLangTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"ProgLangTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conProgLangTypeName(): string {
    return 'progLangTypeName';
  } //编程语言类型名

  /**
   * 常量:"FuncTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id

  /**
   * 常量:"FuncTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFuncTypeName(): string {
    return 'funcTypeName';
  } //函数类型名

  /**
   * 常量:"SqlDsTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"SqlDsTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conSqlDsTypeName(): string {
    return 'sqlDsTypeName';
  } //Sql数据源名

  /**
   * 常量:"FuncName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  public progLangTypeId = ''; //编程语言类型Id
  public progLangTypeName = ''; //编程语言类型名
  public funcTypeId = ''; //函数类型Id
  public funcTypeName = ''; //函数类型名
  public sqlDsTypeId = ''; //数据源类型Id
  public sqlDsTypeName = ''; //Sql数据源名
  public funcName = ''; //函数名
}
