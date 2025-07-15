/**
 * 类名:clsvFunctionTemplateRelaSimEN
 * 表名:vFunctionTemplateRela_Sim(00050604)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:22:30
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * v函数模板关系_Sim(vFunctionTemplateRelaSim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFunctionTemplateRelaSimEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFunctionTemplateRelaSim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FunctionTemplateId,FuncId4GC'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 5;
  public static AttributeName = [
    'functionTemplateId',
    'funcId4GC',
    'codeTypeId',
    'regionTypeId',
    'isGeneCode',
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
      case clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId:
        return this.functionTemplateId;
      case clsvFunctionTemplateRelaSimEN.conFuncId4GC:
        return this.funcId4GC;
      case clsvFunctionTemplateRelaSimEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsvFunctionTemplateRelaSimEN.conRegionTypeId:
        return this.regionTypeId;
      case clsvFunctionTemplateRelaSimEN.conIsGeneCode:
        return this.isGeneCode;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunctionTemplateRelaSim]中不存在！`;
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
      case clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId:
        this.functionTemplateId = strValue;
        break;
      case clsvFunctionTemplateRelaSimEN.conFuncId4GC:
        this.funcId4GC = strValue;
        break;
      case clsvFunctionTemplateRelaSimEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaSimEN.conRegionTypeId:
        this.regionTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaSimEN.conIsGeneCode:
        this.isGeneCode = Boolean(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunctionTemplateRelaSim]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public functionTemplateId = ''; //函数模板Id
  public funcId4GC = ''; //函数ID
  public codeTypeId = ''; //代码类型Id
  public regionTypeId = ''; //区域类型Id
  public isGeneCode = false; //是否生成代码

  /**
   * 常量:"FunctionTemplateId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionTemplateId(): string {
    return 'functionTemplateId';
  } //函数模板Id

  /**
   * 常量:"FuncId4GC"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFuncId4GC(): string {
    return 'funcId4GC';
  } //函数ID

  /**
   * 常量:"CodeTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"RegionTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conRegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"IsGeneCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsGeneCode(): string {
    return 'isGeneCode';
  } //是否生成代码

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
