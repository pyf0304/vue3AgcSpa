/**
 * 类名:clsSqlViewEN
 * 表名:SqlView(00050245)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:52
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
 * Sql视图(SqlView)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsSqlViewEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'SqlView'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'SqlViewId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 20;
  public static AttributeName = [
    'sqlViewId',
    'sqlViewText',
    'sqlViewText4Gene',
    'textResouce',
    'textResourceTypeId',
    'relaTabId',
    'analysisDate',
    'geneCodeDate',
    'createDate',
    'topPercent',
    'distinctFlag',
    'whereCondition',
    'groupBy',
    'havingStr',
    'orderBy',
    'errMsg',
    'prjId',
    'updDate',
    'updUserId',
    'memo',
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
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrSqlViewId = ''; //Sql视图Id
  private mstrSqlViewText = ''; //Sql视图文本内容
  private mstrSqlViewText4Gene = ''; //Sql视图文本4生成
  private mstrTextResouce = ''; //文本来源
  private mstrTextResourceTypeId = ''; //文本来源类型Id
  private mstrRelaTabId = ''; //相关表Id
  private mstrAnalysisDate = ''; //分析日期
  private mstrGeneCodeDate = ''; //生成代码日期
  private mstrCreateDate = ''; //建立日期
  private mstrTopPercent = ''; //顶百分比
  private mstrDistinctFlag = ''; //Distinct标志
  private mstrWhereCondition = ''; //条件串
  private mstrGroupBy = ''; //分组
  private mstrHavingStr = ''; //分组过滤
  private mstrOrderBy = ''; //排序
  private mstrErrMsg = ''; //错误信息
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * Sql视图Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlViewId(value: string) {
    if (value != undefined) {
      this.sqlViewId = value;
      this.hmProperty['sqlViewId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql视图文本内容(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlViewText(value: string) {
    if (value != undefined) {
      this.sqlViewText = value;
      this.hmProperty['sqlViewText'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql视图文本4生成(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlViewText4Gene(value: string) {
    if (value != undefined) {
      this.sqlViewText4Gene = value;
      this.hmProperty['sqlViewText4Gene'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文本来源(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTextResouce(value: string) {
    if (value != undefined) {
      this.textResouce = value;
      this.hmProperty['textResouce'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文本来源类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTextResourceTypeId(value: string) {
    if (value != undefined) {
      this.textResourceTypeId = value;
      this.hmProperty['textResourceTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 相关表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelaTabId(value: string) {
    if (value != undefined) {
      this.relaTabId = value;
      this.hmProperty['relaTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 分析日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAnalysisDate(value: string) {
    if (value != undefined) {
      this.analysisDate = value;
      this.hmProperty['analysisDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 生成代码日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGeneCodeDate(value: string) {
    if (value != undefined) {
      this.geneCodeDate = value;
      this.hmProperty['geneCodeDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 建立日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreateDate(value: string) {
    if (value != undefined) {
      this.createDate = value;
      this.hmProperty['createDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 顶百分比(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTopPercent(value: string) {
    if (value != undefined) {
      this.topPercent = value;
      this.hmProperty['topPercent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Distinct标志(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDistinctFlag(value: string) {
    if (value != undefined) {
      this.distinctFlag = value;
      this.hmProperty['distinctFlag'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 条件串(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWhereCondition(value: string) {
    if (value != undefined) {
      this.whereCondition = value;
      this.hmProperty['whereCondition'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 分组(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGroupBy(value: string) {
    if (value != undefined) {
      this.groupBy = value;
      this.hmProperty['groupBy'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 分组过滤(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHavingStr(value: string) {
    if (value != undefined) {
      this.havingStr = value;
      this.hmProperty['havingStr'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 排序(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderBy(value: string) {
    if (value != undefined) {
      this.orderBy = value;
      this.hmProperty['orderBy'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误信息(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrMsg(value: string) {
    if (value != undefined) {
      this.errMsg = value;
      this.hmProperty['errMsg'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程ID(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjId(value: string) {
    if (value != undefined) {
      this.prjId = value;
      this.hmProperty['prjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
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
      case clsSqlViewEN.con_SqlViewId:
        return this.sqlViewId;
      case clsSqlViewEN.con_SqlViewText:
        return this.sqlViewText;
      case clsSqlViewEN.con_SqlViewText4Gene:
        return this.sqlViewText4Gene;
      case clsSqlViewEN.con_TextResouce:
        return this.textResouce;
      case clsSqlViewEN.con_TextResourceTypeId:
        return this.textResourceTypeId;
      case clsSqlViewEN.con_RelaTabId:
        return this.relaTabId;
      case clsSqlViewEN.con_AnalysisDate:
        return this.analysisDate;
      case clsSqlViewEN.con_GeneCodeDate:
        return this.geneCodeDate;
      case clsSqlViewEN.con_CreateDate:
        return this.createDate;
      case clsSqlViewEN.con_TopPercent:
        return this.topPercent;
      case clsSqlViewEN.con_DistinctFlag:
        return this.distinctFlag;
      case clsSqlViewEN.con_WhereCondition:
        return this.whereCondition;
      case clsSqlViewEN.con_GroupBy:
        return this.groupBy;
      case clsSqlViewEN.con_HavingStr:
        return this.havingStr;
      case clsSqlViewEN.con_OrderBy:
        return this.orderBy;
      case clsSqlViewEN.con_ErrMsg:
        return this.errMsg;
      case clsSqlViewEN.con_PrjId:
        return this.prjId;
      case clsSqlViewEN.con_UpdDate:
        return this.updDate;
      case clsSqlViewEN.con_UpdUserId:
        return this.updUserId;
      case clsSqlViewEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SqlView]中不存在!`;
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
      case clsSqlViewEN.con_SqlViewId:
        this.sqlViewId = strValue;
        this.hmProperty['sqlViewId'] = true;
        break;
      case clsSqlViewEN.con_SqlViewText:
        this.sqlViewText = strValue;
        this.hmProperty['sqlViewText'] = true;
        break;
      case clsSqlViewEN.con_SqlViewText4Gene:
        this.sqlViewText4Gene = strValue;
        this.hmProperty['sqlViewText4Gene'] = true;
        break;
      case clsSqlViewEN.con_TextResouce:
        this.textResouce = strValue;
        this.hmProperty['textResouce'] = true;
        break;
      case clsSqlViewEN.con_TextResourceTypeId:
        this.textResourceTypeId = strValue;
        this.hmProperty['textResourceTypeId'] = true;
        break;
      case clsSqlViewEN.con_RelaTabId:
        this.relaTabId = strValue;
        this.hmProperty['relaTabId'] = true;
        break;
      case clsSqlViewEN.con_AnalysisDate:
        this.analysisDate = strValue;
        this.hmProperty['analysisDate'] = true;
        break;
      case clsSqlViewEN.con_GeneCodeDate:
        this.geneCodeDate = strValue;
        this.hmProperty['geneCodeDate'] = true;
        break;
      case clsSqlViewEN.con_CreateDate:
        this.createDate = strValue;
        this.hmProperty['createDate'] = true;
        break;
      case clsSqlViewEN.con_TopPercent:
        this.topPercent = strValue;
        this.hmProperty['topPercent'] = true;
        break;
      case clsSqlViewEN.con_DistinctFlag:
        this.distinctFlag = strValue;
        this.hmProperty['distinctFlag'] = true;
        break;
      case clsSqlViewEN.con_WhereCondition:
        this.whereCondition = strValue;
        this.hmProperty['whereCondition'] = true;
        break;
      case clsSqlViewEN.con_GroupBy:
        this.groupBy = strValue;
        this.hmProperty['groupBy'] = true;
        break;
      case clsSqlViewEN.con_HavingStr:
        this.havingStr = strValue;
        this.hmProperty['havingStr'] = true;
        break;
      case clsSqlViewEN.con_OrderBy:
        this.orderBy = strValue;
        this.hmProperty['orderBy'] = true;
        break;
      case clsSqlViewEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsSqlViewEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsSqlViewEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsSqlViewEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsSqlViewEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SqlView]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public sqlViewId = ''; //Sql视图Id
  public sqlViewText = ''; //Sql视图文本内容
  public sqlViewText4Gene = ''; //Sql视图文本4生成
  public textResouce = ''; //文本来源
  public textResourceTypeId = ''; //文本来源类型Id
  public relaTabId = ''; //相关表Id
  public analysisDate = ''; //分析日期
  public geneCodeDate = ''; //生成代码日期
  public createDate = ''; //建立日期
  public topPercent = ''; //顶百分比
  public distinctFlag = ''; //Distinct标志
  public whereCondition = ''; //条件串
  public groupBy = ''; //分组
  public havingStr = ''; //分组过滤
  public orderBy = ''; //排序
  public errMsg = ''; //错误信息
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"SqlViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlViewId(): string {
    return 'sqlViewId';
  } //Sql视图Id

  /**
   * 常量:"SqlViewText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlViewText(): string {
    return 'sqlViewText';
  } //Sql视图文本内容

  /**
   * 常量:"SqlViewText4Gene"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlViewText4Gene(): string {
    return 'sqlViewText4Gene';
  } //Sql视图文本4生成

  /**
   * 常量:"TextResouce"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TextResouce(): string {
    return 'textResouce';
  } //文本来源

  /**
   * 常量:"TextResourceTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TextResourceTypeId(): string {
    return 'textResourceTypeId';
  } //文本来源类型Id

  /**
   * 常量:"RelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaTabId(): string {
    return 'relaTabId';
  } //相关表Id

  /**
   * 常量:"AnalysisDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AnalysisDate(): string {
    return 'analysisDate';
  } //分析日期

  /**
   * 常量:"GeneCodeDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GeneCodeDate(): string {
    return 'geneCodeDate';
  } //生成代码日期

  /**
   * 常量:"CreateDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CreateDate(): string {
    return 'createDate';
  } //建立日期

  /**
   * 常量:"TopPercent"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TopPercent(): string {
    return 'topPercent';
  } //顶百分比

  /**
   * 常量:"DistinctFlag"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DistinctFlag(): string {
    return 'distinctFlag';
  } //Distinct标志

  /**
   * 常量:"WhereCondition"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WhereCondition(): string {
    return 'whereCondition';
  } //条件串

  /**
   * 常量:"GroupBy"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GroupBy(): string {
    return 'groupBy';
  } //分组

  /**
   * 常量:"HavingStr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_HavingStr(): string {
    return 'havingStr';
  } //分组过滤

  /**
   * 常量:"OrderBy"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderBy(): string {
    return 'orderBy';
  } //排序

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

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
