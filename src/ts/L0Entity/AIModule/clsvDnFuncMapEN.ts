/**
 * 类名:clsvDnFuncMapEN
 * 表名:vDnFuncMap(00050554)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 00:08:35
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
 * v结点函数映射(vDnFuncMap)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvDnFuncMapEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vDnFuncMap'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DnFuncMapId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 15;
  public static AttributeName = [
    'dnFuncMapId',
    'inDataNodeId',
    'outDataNodeId',
    'associationMappingId',
    'associationMappingName',
    'funcMapModeId',
    'funcMapModeName',
    'tabId',
    'dnFunctionId',
    'prjId',
    'updDate',
    'updUser',
    'memo',
    'inDataNodeName',
    'outDataNodeName',
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
      case clsvDnFuncMapEN.con_DnFuncMapId:
        return this.dnFuncMapId;
      case clsvDnFuncMapEN.con_InDataNodeId:
        return this.inDataNodeId;
      case clsvDnFuncMapEN.con_OutDataNodeId:
        return this.outDataNodeId;
      case clsvDnFuncMapEN.con_AssociationMappingId:
        return this.associationMappingId;
      case clsvDnFuncMapEN.con_AssociationMappingName:
        return this.associationMappingName;
      case clsvDnFuncMapEN.con_FuncMapModeId:
        return this.funcMapModeId;
      case clsvDnFuncMapEN.con_FuncMapModeName:
        return this.funcMapModeName;
      case clsvDnFuncMapEN.con_TabId:
        return this.tabId;
      case clsvDnFuncMapEN.con_DnFunctionId:
        return this.dnFunctionId;
      case clsvDnFuncMapEN.con_PrjId:
        return this.prjId;
      case clsvDnFuncMapEN.con_UpdDate:
        return this.updDate;
      case clsvDnFuncMapEN.con_UpdUser:
        return this.updUser;
      case clsvDnFuncMapEN.con_Memo:
        return this.memo;
      case clsvDnFuncMapEN.con_InDataNodeName:
        return this.inDataNodeName;
      case clsvDnFuncMapEN.con_OutDataNodeName:
        return this.outDataNodeName;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDnFuncMap]中不存在!`;
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
      case clsvDnFuncMapEN.con_DnFuncMapId:
        this.dnFuncMapId = strValue;
        break;
      case clsvDnFuncMapEN.con_InDataNodeId:
        this.inDataNodeId = Number(strValue);
        break;
      case clsvDnFuncMapEN.con_OutDataNodeId:
        this.outDataNodeId = Number(strValue);
        break;
      case clsvDnFuncMapEN.con_AssociationMappingId:
        this.associationMappingId = strValue;
        break;
      case clsvDnFuncMapEN.con_AssociationMappingName:
        this.associationMappingName = strValue;
        break;
      case clsvDnFuncMapEN.con_FuncMapModeId:
        this.funcMapModeId = strValue;
        break;
      case clsvDnFuncMapEN.con_FuncMapModeName:
        this.funcMapModeName = strValue;
        break;
      case clsvDnFuncMapEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvDnFuncMapEN.con_DnFunctionId:
        this.dnFunctionId = strValue;
        break;
      case clsvDnFuncMapEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvDnFuncMapEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvDnFuncMapEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvDnFuncMapEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvDnFuncMapEN.con_InDataNodeName:
        this.inDataNodeName = strValue;
        break;
      case clsvDnFuncMapEN.con_OutDataNodeName:
        this.outDataNodeName = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDnFuncMap]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public associationMappingName = ''; //关联关系映射名
  public funcMapModeId = ''; //函数映射模式Id
  public funcMapModeName = ''; //函数映射模式名
  public tabId = ''; //表ID
  public dnFunctionId = ''; //DN函数Id
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public inDataNodeName = ''; //In数据结点名
  public outDataNodeName = ''; //Out数据结点名

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
   * 常量:"AssociationMappingName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AssociationMappingName(): string {
    return 'associationMappingName';
  } //关联关系映射名

  /**
   * 常量:"FuncMapModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncMapModeId(): string {
    return 'funcMapModeId';
  } //函数映射模式Id

  /**
   * 常量:"FuncMapModeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncMapModeName(): string {
    return 'funcMapModeName';
  } //函数映射模式名

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
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"InDataNodeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InDataNodeName(): string {
    return 'inDataNodeName';
  } //In数据结点名

  /**
   * 常量:"OutDataNodeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutDataNodeName(): string {
    return 'outDataNodeName';
  } //Out数据结点名

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
