/**
 * 类名:clsvDnFuncMap_SimEN
 * 表名:vDnFuncMap_Sim(00050625)
 * 版本:2024.10.22.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/26 10:03:57
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * v结点函数映射_Sim(vDnFuncMap_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvDnFuncMap_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vDnFuncMap_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DnFuncMapId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'dnFuncMapId',
    'inDataNodeId',
    'outDataNodeId',
    'associationMappingId',
    'funcMapModeId',
    'tabId',
    'dnFunctionId',
    'prjId',
    'usedTimes',
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
      case clsvDnFuncMap_SimEN.con_DnFuncMapId:
        return this.dnFuncMapId;
      case clsvDnFuncMap_SimEN.con_InDataNodeId:
        return this.inDataNodeId;
      case clsvDnFuncMap_SimEN.con_OutDataNodeId:
        return this.outDataNodeId;
      case clsvDnFuncMap_SimEN.con_AssociationMappingId:
        return this.associationMappingId;
      case clsvDnFuncMap_SimEN.con_FuncMapModeId:
        return this.funcMapModeId;
      case clsvDnFuncMap_SimEN.con_TabId:
        return this.tabId;
      case clsvDnFuncMap_SimEN.con_DnFunctionId:
        return this.dnFunctionId;
      case clsvDnFuncMap_SimEN.con_PrjId:
        return this.prjId;
      case clsvDnFuncMap_SimEN.con_UsedTimes:
        return this.usedTimes;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDnFuncMap_Sim]中不存在!`;
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
      case clsvDnFuncMap_SimEN.con_DnFuncMapId:
        this.dnFuncMapId = strValue;
        break;
      case clsvDnFuncMap_SimEN.con_InDataNodeId:
        this.inDataNodeId = Number(strValue);
        break;
      case clsvDnFuncMap_SimEN.con_OutDataNodeId:
        this.outDataNodeId = Number(strValue);
        break;
      case clsvDnFuncMap_SimEN.con_AssociationMappingId:
        this.associationMappingId = strValue;
        break;
      case clsvDnFuncMap_SimEN.con_FuncMapModeId:
        this.funcMapModeId = strValue;
        break;
      case clsvDnFuncMap_SimEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvDnFuncMap_SimEN.con_DnFunctionId:
        this.dnFunctionId = strValue;
        break;
      case clsvDnFuncMap_SimEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvDnFuncMap_SimEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDnFuncMap_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dnFuncMapId = ''; //函数映射Id
  public inDataNodeId = 0; //In数据结点Id
  public outDataNodeId = 0; //Out数据结点Id
  public associationMappingId = ''; //关联关系映射Id
  public funcMapModeId = ''; //函数映射模式Id
  public tabId = ''; //表ID
  public dnFunctionId = ''; //DN函数Id
  public prjId = ''; //工程ID
  public usedTimes = 0; //使用次数

  /**
   * 常量:"DnFuncMapId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnFuncMapId(): string {
    return 'dnFuncMapId';
  } //函数映射Id

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
   * 常量:"AssociationMappingId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AssociationMappingId(): string {
    return 'associationMappingId';
  } //关联关系映射Id

  /**
   * 常量:"FuncMapModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncMapModeId(): string {
    return 'funcMapModeId';
  } //函数映射模式Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"DnFunctionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnFunctionId(): string {
    return 'dnFunctionId';
  } //DN函数Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UsedTimes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UsedTimes(): string {
    return 'usedTimes';
  } //使用次数

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
