/**
 * 类名:clsvSqlViewFldEN
 * 表名:vSqlViewFld(00050252)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:59
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:Sql视图管理(SqlViewMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vSql视图字段(vSqlViewFld)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvSqlViewFldEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vSqlViewFld'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 22;
  public static AttributeName = [
    'mId',
    'sqlViewId',
    'sqlViewName',
    'sqlViewCNName',
    'relaTabId',
    'tabId',
    'tabName',
    'tabCnName',
    'tabAliases',
    'tabRelationText',
    'fldId',
    'fldName',
    'fldCnName',
    'fldExpression',
    'fieldAliases',
    'filters',
    'orderNum',
    'prjId',
    'updDate',
    'updUserId',
    'memo',
    'relaTabId4SqlView',
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
      case clsvSqlViewFldEN.con_mId:
        return this.mId;
      case clsvSqlViewFldEN.con_SqlViewId:
        return this.sqlViewId;
      case clsvSqlViewFldEN.con_SqlViewName:
        return this.sqlViewName;
      case clsvSqlViewFldEN.con_SqlViewCNName:
        return this.sqlViewCNName;
      case clsvSqlViewFldEN.con_RelaTabId:
        return this.relaTabId;
      case clsvSqlViewFldEN.con_TabId:
        return this.tabId;
      case clsvSqlViewFldEN.con_TabName:
        return this.tabName;
      case clsvSqlViewFldEN.con_TabCnName:
        return this.tabCnName;
      case clsvSqlViewFldEN.con_TabAliases:
        return this.tabAliases;
      case clsvSqlViewFldEN.con_TabRelationText:
        return this.tabRelationText;
      case clsvSqlViewFldEN.con_FldId:
        return this.fldId;
      case clsvSqlViewFldEN.con_FldName:
        return this.fldName;
      case clsvSqlViewFldEN.con_FldCnName:
        return this.fldCnName;
      case clsvSqlViewFldEN.con_FldExpression:
        return this.fldExpression;
      case clsvSqlViewFldEN.con_FieldAliases:
        return this.fieldAliases;
      case clsvSqlViewFldEN.con_Filters:
        return this.filters;
      case clsvSqlViewFldEN.con_OrderNum:
        return this.orderNum;
      case clsvSqlViewFldEN.con_PrjId:
        return this.prjId;
      case clsvSqlViewFldEN.con_UpdDate:
        return this.updDate;
      case clsvSqlViewFldEN.con_UpdUserId:
        return this.updUserId;
      case clsvSqlViewFldEN.con_Memo:
        return this.memo;
      case clsvSqlViewFldEN.con_RelaTabId4SqlView:
        return this.relaTabId4SqlView;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vSqlViewFld]中不存在!`;
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
      case clsvSqlViewFldEN.con_mId:
        this.mId = Number(strValue);
        break;
      case clsvSqlViewFldEN.con_SqlViewId:
        this.sqlViewId = strValue;
        break;
      case clsvSqlViewFldEN.con_SqlViewName:
        this.sqlViewName = strValue;
        break;
      case clsvSqlViewFldEN.con_SqlViewCNName:
        this.sqlViewCNName = strValue;
        break;
      case clsvSqlViewFldEN.con_RelaTabId:
        this.relaTabId = strValue;
        break;
      case clsvSqlViewFldEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvSqlViewFldEN.con_TabName:
        this.tabName = strValue;
        break;
      case clsvSqlViewFldEN.con_TabCnName:
        this.tabCnName = strValue;
        break;
      case clsvSqlViewFldEN.con_TabAliases:
        this.tabAliases = strValue;
        break;
      case clsvSqlViewFldEN.con_TabRelationText:
        this.tabRelationText = strValue;
        break;
      case clsvSqlViewFldEN.con_FldId:
        this.fldId = strValue;
        break;
      case clsvSqlViewFldEN.con_FldName:
        this.fldName = strValue;
        break;
      case clsvSqlViewFldEN.con_FldCnName:
        this.fldCnName = strValue;
        break;
      case clsvSqlViewFldEN.con_FldExpression:
        this.fldExpression = strValue;
        break;
      case clsvSqlViewFldEN.con_FieldAliases:
        this.fieldAliases = strValue;
        break;
      case clsvSqlViewFldEN.con_Filters:
        this.filters = strValue;
        break;
      case clsvSqlViewFldEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvSqlViewFldEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvSqlViewFldEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvSqlViewFldEN.con_UpdUserId:
        this.updUserId = strValue;
        break;
      case clsvSqlViewFldEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvSqlViewFldEN.con_RelaTabId4SqlView:
        this.relaTabId4SqlView = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vSqlViewFld]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public sqlViewId = ''; //Sql视图Id
  public sqlViewName = ''; //数据视图名称
  public sqlViewCNName = ''; //Sql视图中文名
  public relaTabId = ''; //相关表Id
  public tabId = ''; //表ID
  public tabName = ''; //表名
  public tabCnName = ''; //表中文名
  public tabAliases = ''; //表别名
  public tabRelationText = ''; //表关系文本
  public fldId = ''; //字段Id
  public fldName = ''; //字段名
  public fldCnName = ''; //字段中文详名
  public fldExpression = ''; //字段表达式
  public fieldAliases = ''; //字段别名
  public filters = ''; //筛选器
  public orderNum = 0; //序号
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明
  public relaTabId4SqlView = ''; //RelaTabId4SqlView

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"SqlViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlViewId(): string {
    return 'sqlViewId';
  } //Sql视图Id

  /**
   * 常量:"SqlViewName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlViewName(): string {
    return 'sqlViewName';
  } //数据视图名称

  /**
   * 常量:"SqlViewCNName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlViewCNName(): string {
    return 'sqlViewCNName';
  } //Sql视图中文名

  /**
   * 常量:"RelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaTabId(): string {
    return 'relaTabId';
  } //相关表Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"TabCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabCnName(): string {
    return 'tabCnName';
  } //表中文名

  /**
   * 常量:"TabAliases"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabAliases(): string {
    return 'tabAliases';
  } //表别名

  /**
   * 常量:"TabRelationText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabRelationText(): string {
    return 'tabRelationText';
  } //表关系文本

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"FldCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldCnName(): string {
    return 'fldCnName';
  } //字段中文详名

  /**
   * 常量:"FldExpression"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldExpression(): string {
    return 'fldExpression';
  } //字段表达式

  /**
   * 常量:"FieldAliases"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldAliases(): string {
    return 'fieldAliases';
  } //字段别名

  /**
   * 常量:"Filters"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Filters(): string {
    return 'filters';
  } //筛选器

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

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
   * 常量:"UpdUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"RelaTabId4SqlView"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaTabId4SqlView(): string {
    return 'relaTabId4SqlView';
  } //RelaTabId4SqlView

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
