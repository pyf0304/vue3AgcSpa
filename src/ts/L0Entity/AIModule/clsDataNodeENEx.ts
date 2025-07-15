/**
 * 类名:clsDataNodeENEx
 * 表名:DataNode(00050547)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:59
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
 * 数据结点(DataNode)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsDataNodeEN } from '@/ts/L0Entity/AIModule/clsDataNodeEN';

export class clsDataNodeENEx extends clsDataNodeEN {
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
      case clsDataNodeENEx.con_TabName:
        return this.tabName;
      case clsDataNodeENEx.con_FldName:
        return this.fldName;
      case clsDataNodeENEx.con_DataNodeTypeName:
        return this.dataNodeTypeName;
      case clsDataNodeENEx.con_CmPrjName:
        return this.cmPrjName;
      case clsDataNodeENEx.con_InDegree:
        return this.inDegree;
      case clsDataNodeENEx.con_OutDegree:
        return this.outDegree;
      case clsDataNodeENEx.con_CmPrjId:
        return this.cmPrjId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"DataNodeTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataNodeTypeName(): string {
    return 'dataNodeTypeName';
  } //数据结点类型名

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"InDegree"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_InDegree(): string {
    return 'inDegree';
  } //入度

  /**
   * 常量:"OutDegree"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_OutDegree(): string {
    return 'outDegree';
  } //出度

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  public tabName = ''; //表名
  public fldName = ''; //字段名
  public dataNodeTypeName = ''; //数据结点类型名
  public cmPrjName = ''; //CM工程名
  public inDegree = 0; //入度
  public outDegree = 0; //出度
  public cmPrjId = ''; //Cm工程Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsDataNodeENEx();
    const instance = new clsDataNodeENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
