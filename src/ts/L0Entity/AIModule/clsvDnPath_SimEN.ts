/**
 * 类名:clsvDnPath_SimEN
 * 表名:vDnPath_Sim(00050603)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:47
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * vDnPath_Sim(vDnPath_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvDnPath_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vDnPath_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DnPathId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = [
    'dnPathId',
    'dnPathName',
    'inDataNodeId',
    'outDataNodeId',
    'dnPathNodeLst',
    'prjId',
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
      case clsvDnPath_SimEN.con_DnPathId:
        return this.dnPathId;
      case clsvDnPath_SimEN.con_DnPathName:
        return this.dnPathName;
      case clsvDnPath_SimEN.con_InDataNodeId:
        return this.inDataNodeId;
      case clsvDnPath_SimEN.con_OutDataNodeId:
        return this.outDataNodeId;
      case clsvDnPath_SimEN.con_DnPathNodeLst:
        return this.dnPathNodeLst;
      case clsvDnPath_SimEN.con_PrjId:
        return this.prjId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDnPath_Sim]中不存在!`;
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
      case clsvDnPath_SimEN.con_DnPathId:
        this.dnPathId = strValue;
        break;
      case clsvDnPath_SimEN.con_DnPathName:
        this.dnPathName = strValue;
        break;
      case clsvDnPath_SimEN.con_InDataNodeId:
        this.inDataNodeId = Number(strValue);
        break;
      case clsvDnPath_SimEN.con_OutDataNodeId:
        this.outDataNodeId = Number(strValue);
        break;
      case clsvDnPath_SimEN.con_DnPathNodeLst:
        this.dnPathNodeLst = strValue;
        break;
      case clsvDnPath_SimEN.con_PrjId:
        this.prjId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDnPath_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dnPathId = ''; //DN路径Id
  public dnPathName = ''; //DN路径名
  public inDataNodeId = 0; //In数据结点Id
  public outDataNodeId = 0; //Out数据结点Id
  public dnPathNodeLst = ''; //路径结点列表
  public prjId = ''; //工程Id

  /**
   * 常量:"DnPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathId(): string {
    return 'dnPathId';
  } //DN路径Id

  /**
   * 常量:"DnPathName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathName(): string {
    return 'dnPathName';
  } //DN路径名

  /**
   * 常量:"InDataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InDataNodeId(): string {
    return 'inDataNodeId';
  } //In数据结点Id

  /**
   * 常量:"OutDataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutDataNodeId(): string {
    return 'outDataNodeId';
  } //Out数据结点Id

  /**
   * 常量:"DnPathNodeLst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathNodeLst(): string {
    return 'dnPathNodeLst';
  } //路径结点列表

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

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
    //return propName in new clsvDnPath_SimEN();
    const instance = new clsvDnPath_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
