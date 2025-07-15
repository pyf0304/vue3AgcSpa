/**
 * 类名:clsvDataNodeSimENEx
 * 表名:vDataNode_Sim(00050592)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:22:18
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * vDataNode_Sim(vDataNodeSim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvDataNodeSimEN } from '@/ts/L0Entity/AIModule/clsvDataNodeSimEN';

export class clsvDataNodeSimENEx extends clsvDataNodeSimEN {
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
      case clsvDataNodeSimENEx.conCmPrjId:
        return this.cmPrjId;
      case clsvDataNodeSimENEx.conFldName:
        return this.fldName;
      case clsvDataNodeSimENEx.conKeyFldNameLst:
        return this.keyFldNameLst;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CmPrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  /**
   * 常量:"FldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"KeyFldNameLst"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conKeyFldNameLst(): string {
    return 'keyFldNameLst';
  } //关键字段名列表

  public cmPrjId = ''; //CM工程Id
  public fldName = ''; //字段名
  public keyFldNameLst = ''; //关键字段名列表
}
