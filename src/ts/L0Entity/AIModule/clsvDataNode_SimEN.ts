/**
 * 类名:clsvDataNode_SimEN
 * 表名:vDataNode_Sim(00050592)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/26 02:43:45
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
 * vDataNode_Sim(vDataNode_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvDataNode_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = "UsedTimes>0 and PrjId='{0}'"; //条件格式串
  public static _CurrTabName = 'vDataNode_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DataNodeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'dataNodeId',
    'dataNodeName',
    'tabId',
    'fldId',
    'keyFldLst',
    'dataNodeTypeId',
    'versionNo',
    'prjId',
    'posX',
    'posY',
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
      case clsvDataNode_SimEN.con_DataNodeId:
        return this.dataNodeId;
      case clsvDataNode_SimEN.con_DataNodeName:
        return this.dataNodeName;
      case clsvDataNode_SimEN.con_TabId:
        return this.tabId;
      case clsvDataNode_SimEN.con_FldId:
        return this.fldId;
      case clsvDataNode_SimEN.con_KeyFldLst:
        return this.keyFldLst;
      case clsvDataNode_SimEN.con_DataNodeTypeId:
        return this.dataNodeTypeId;
      case clsvDataNode_SimEN.con_VersionNo:
        return this.versionNo;
      case clsvDataNode_SimEN.con_PrjId:
        return this.prjId;
      case clsvDataNode_SimEN.con_PosX:
        return this.posX;
      case clsvDataNode_SimEN.con_PosY:
        return this.posY;
      case clsvDataNode_SimEN.con_UsedTimes:
        return this.usedTimes;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDataNode_Sim]中不存在!`;
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
      case clsvDataNode_SimEN.con_DataNodeId:
        this.dataNodeId = Number(strValue);
        break;
      case clsvDataNode_SimEN.con_DataNodeName:
        this.dataNodeName = strValue;
        break;
      case clsvDataNode_SimEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvDataNode_SimEN.con_FldId:
        this.fldId = strValue;
        break;
      case clsvDataNode_SimEN.con_KeyFldLst:
        this.keyFldLst = strValue;
        break;
      case clsvDataNode_SimEN.con_DataNodeTypeId:
        this.dataNodeTypeId = strValue;
        break;
      case clsvDataNode_SimEN.con_VersionNo:
        this.versionNo = Number(strValue);
        break;
      case clsvDataNode_SimEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvDataNode_SimEN.con_PosX:
        this.posX = Number(strValue);
        break;
      case clsvDataNode_SimEN.con_PosY:
        this.posY = Number(strValue);
        break;
      case clsvDataNode_SimEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDataNode_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dataNodeId = 0; //数据结点Id
  public dataNodeName = ''; //数据结点名
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public keyFldLst = ''; //关键字段Id列表
  public dataNodeTypeId = ''; //数据结点类型Id
  public versionNo = 0; //版本号
  public prjId = ''; //工程Id
  public posX = 0; //位置X
  public posY = 0; //位置Y
  public usedTimes = 0; //使用次数

  /**
   * 常量:"DataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataNodeId(): string {
    return 'dataNodeId';
  } //数据结点Id

  /**
   * 常量:"DataNodeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataNodeName(): string {
    return 'dataNodeName';
  } //数据结点名

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"KeyFldLst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyFldLst(): string {
    return 'keyFldLst';
  } //关键字段Id列表

  /**
   * 常量:"DataNodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataNodeTypeId(): string {
    return 'dataNodeTypeId';
  } //数据结点类型Id

  /**
   * 常量:"VersionNo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VersionNo(): string {
    return 'versionNo';
  } //版本号

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"PosX"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PosX(): string {
    return 'posX';
  } //位置X

  /**
   * 常量:"PosY"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PosY(): string {
    return 'posY';
  } //位置Y

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
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsvDataNode_SimEN();
    const instance = new clsvDataNode_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
