/**
 * 类名:clsvDataNodeSimEN
 * 表名:vDataNode_Sim(00050592)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:22:15
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vDataNode_Sim(vDataNodeSim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvDataNodeSimEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志

  public static _CurrTabName = 'vDataNodeSim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DataNodeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'dataNodeId',
    'dataNodeName',
    'tabId',
    'fldId',
    'keyFldLst',
    'dataNodeTypeId',
    'versionNo',
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
      case clsvDataNodeSimEN.conDataNodeId:
        return this.dataNodeId;
      case clsvDataNodeSimEN.conDataNodeName:
        return this.dataNodeName;
      case clsvDataNodeSimEN.con_TabId:
        return this.tabId;
      case clsvDataNodeSimEN.con_FldId:
        return this.fldId;
      case clsvDataNodeSimEN.conKeyFldLst:
        return this.keyFldLst;
      case clsvDataNodeSimEN.conDataNodeTypeId:
        return this.dataNodeTypeId;
      case clsvDataNodeSimEN.conVersionNo:
        return this.versionNo;
      case clsvDataNodeSimEN.conPrjId:
        return this.prjId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDataNodeSim]中不存在！`;
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
      case clsvDataNodeSimEN.conDataNodeId:
        this.dataNodeId = strValue;
        break;
      case clsvDataNodeSimEN.conDataNodeName:
        this.dataNodeName = strValue;
        break;
      case clsvDataNodeSimEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvDataNodeSimEN.con_FldId:
        this.fldId = strValue;
        break;
      case clsvDataNodeSimEN.conKeyFldLst:
        this.keyFldLst = strValue;
        break;
      case clsvDataNodeSimEN.conDataNodeTypeId:
        this.dataNodeTypeId = strValue;
        break;
      case clsvDataNodeSimEN.conVersionNo:
        this.versionNo = Number(strValue);
        break;
      case clsvDataNodeSimEN.conPrjId:
        this.prjId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDataNodeSim]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dataNodeId = ''; //数据结点Id
  public dataNodeName = ''; //数据结点名
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public keyFldLst = ''; //关键字段Id列表
  public dataNodeTypeId = ''; //数据结点类型Id
  public versionNo = 0; //版本号
  public prjId = ''; //工程ID

  /**
   * 常量:"DataNodeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDataNodeId(): string {
    return 'dataNodeId';
  } //数据结点Id

  /**
   * 常量:"DataNodeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDataNodeName(): string {
    return 'dataNodeName';
  } //数据结点名

  /**
   * 常量:"TabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"KeyFldLst"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conKeyFldLst(): string {
    return 'keyFldLst';
  } //关键字段Id列表

  /**
   * 常量:"DataNodeTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDataNodeTypeId(): string {
    return 'dataNodeTypeId';
  } //数据结点类型Id

  /**
   * 常量:"VersionNo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conVersionNo(): string {
    return 'versionNo';
  } //版本号

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPrjId(): string {
    return 'prjId';
  } //工程ID

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
