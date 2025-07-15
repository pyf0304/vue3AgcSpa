/**
 * 类名:clsvDataNode_SimENEx
 * 表名:vDataNode_Sim(00050592)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/26 02:43:48
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * vDataNode_Sim(vDataNode_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvDataNode_SimEN } from '@/ts/L0Entity/AIModule/clsvDataNode_SimEN';

export class clsvDataNode_SimENEx extends clsvDataNode_SimEN {
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
      case clsvDataNode_SimENEx.con_CmPrjId:
        return this.cmPrjId;
      case clsvDataNode_SimENEx.con_FldName:
        return this.fldName;
      case clsvDataNode_SimENEx.con_KeyFldNameLst:
        return this.keyFldNameLst;
      case clsvDataNode_SimENEx.con_TabName:
        return this.tabName;
      case clsvDataNode_SimENEx.con_DataNodeTypeName:
        return this.dataNodeTypeName;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"KeyFldNameLst"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_KeyFldNameLst(): string {
    return 'keyFldNameLst';
  } //关键字段名列表

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"DataNodeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataNodeTypeName(): string {
    return 'dataNodeTypeName';
  } //数据结点类型名

  public cmPrjId = ''; //Cm工程Id
  public fldName = ''; //字段名
  public keyFldNameLst = ''; //关键字段名列表
  public tabName = ''; //表名
  public dataNodeTypeName = ''; //数据结点类型名
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsvDataNode_SimENEx();
    const instance = new clsvDataNode_SimENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
