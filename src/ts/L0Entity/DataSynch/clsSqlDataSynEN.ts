/**
 * 类名:clsSqlDataSynEN
 * 表名:SqlDataSyn(00050269)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:55
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:数据同步(DataSynch)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * Sql数据同步(SqlDataSyn)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsSqlDataSynEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'SqlDataSyn'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TabId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 21;
  public static AttributeName = [
    'tabId',
    'tabName',
    'tabCnName',
    'tabEnName',
    'sqlData',
    'sqlCommandTypeId',
    'sqlCommandText',
    'sqlDataRecNum',
    'targetTabCondition',
    'targetTabRecNum',
    'dataSynDate',
    'primaryTypeId',
    'recExclusiveWayId',
    'textResouce',
    'textResourceTypeId',
    'analysisDate',
    'prjId',
    'errMsg',
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
  private mstrTabId = ''; //表ID
  private mstrTabName = ''; //表名
  private mstrTabCnName = ''; //表中文名
  private mstrTabEnName = ''; //表英文详细名
  private mstrSqlData = ''; //Sql表数据
  private mstrSqlCommandTypeId = ''; //Sql命令类型Id
  private mstrSqlCommandText = ''; //Sql命令内容
  private mintSqlDataRecNum = 0; //Sql数据记录数
  private mstrTargetTabCondition = ''; //目标表有效记录条件
  private mintTargetTabRecNum = 0; //目标表记录数
  private mstrDataSynDate = ''; //数据同步日期
  private mstrPrimaryTypeId = ''; //主键类型ID
  private mstrRecExclusiveWayId = ''; //记录排他方式Id
  private mstrTextResouce = ''; //文本来源
  private mstrTextResourceTypeId = ''; //文本来源类型Id
  private mstrAnalysisDate = ''; //分析日期
  private mstrPrjId = ''; //工程ID
  private mstrErrMsg = ''; //错误信息
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabId(value: string) {
    if (value != undefined) {
      this.tabId = value;
      this.hmProperty['tabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabName(value: string) {
    if (value != undefined) {
      this.tabName = value;
      this.hmProperty['tabName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表中文名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabCnName(value: string) {
    if (value != undefined) {
      this.tabCnName = value;
      this.hmProperty['tabCnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表英文详细名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabEnName(value: string) {
    if (value != undefined) {
      this.tabEnName = value;
      this.hmProperty['tabEnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql表数据(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlData(value: string) {
    if (value != undefined) {
      this.sqlData = value;
      this.hmProperty['sqlData'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql命令类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlCommandTypeId(value: string) {
    if (value != undefined) {
      this.sqlCommandTypeId = value;
      this.hmProperty['sqlCommandTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql命令内容(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlCommandText(value: string) {
    if (value != undefined) {
      this.sqlCommandText = value;
      this.hmProperty['sqlCommandText'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Sql数据记录数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlDataRecNum(value: number) {
    if (value != undefined) {
      this.sqlDataRecNum = value;
      this.hmProperty['sqlDataRecNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 目标表有效记录条件(说明:;字段类型:varchar;字段长度:300;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTargetTabCondition(value: string) {
    if (value != undefined) {
      this.targetTabCondition = value;
      this.hmProperty['targetTabCondition'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 目标表记录数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTargetTabRecNum(value: number) {
    if (value != undefined) {
      this.targetTabRecNum = value;
      this.hmProperty['targetTabRecNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据同步日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataSynDate(value: string) {
    if (value != undefined) {
      this.dataSynDate = value;
      this.hmProperty['dataSynDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主键类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryTypeId(value: string) {
    if (value != undefined) {
      this.primaryTypeId = value;
      this.hmProperty['primaryTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 记录排他方式Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRecExclusiveWayId(value: string) {
    if (value != undefined) {
      this.recExclusiveWayId = value;
      this.hmProperty['recExclusiveWayId'] = true;
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
      case clsSqlDataSynEN.con_TabId:
        return this.tabId;
      case clsSqlDataSynEN.con_TabName:
        return this.tabName;
      case clsSqlDataSynEN.con_TabCnName:
        return this.tabCnName;
      case clsSqlDataSynEN.con_TabEnName:
        return this.tabEnName;
      case clsSqlDataSynEN.con_SqlData:
        return this.sqlData;
      case clsSqlDataSynEN.con_SqlCommandTypeId:
        return this.sqlCommandTypeId;
      case clsSqlDataSynEN.con_SqlCommandText:
        return this.sqlCommandText;
      case clsSqlDataSynEN.con_SqlDataRecNum:
        return this.sqlDataRecNum;
      case clsSqlDataSynEN.con_TargetTabCondition:
        return this.targetTabCondition;
      case clsSqlDataSynEN.con_TargetTabRecNum:
        return this.targetTabRecNum;
      case clsSqlDataSynEN.con_DataSynDate:
        return this.dataSynDate;
      case clsSqlDataSynEN.con_PrimaryTypeId:
        return this.primaryTypeId;
      case clsSqlDataSynEN.con_RecExclusiveWayId:
        return this.recExclusiveWayId;
      case clsSqlDataSynEN.con_TextResouce:
        return this.textResouce;
      case clsSqlDataSynEN.con_TextResourceTypeId:
        return this.textResourceTypeId;
      case clsSqlDataSynEN.con_AnalysisDate:
        return this.analysisDate;
      case clsSqlDataSynEN.con_PrjId:
        return this.prjId;
      case clsSqlDataSynEN.con_ErrMsg:
        return this.errMsg;
      case clsSqlDataSynEN.con_UpdDate:
        return this.updDate;
      case clsSqlDataSynEN.con_UpdUserId:
        return this.updUserId;
      case clsSqlDataSynEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SqlDataSyn]中不存在!`;
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
      case clsSqlDataSynEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsSqlDataSynEN.con_TabName:
        this.tabName = strValue;
        this.hmProperty['tabName'] = true;
        break;
      case clsSqlDataSynEN.con_TabCnName:
        this.tabCnName = strValue;
        this.hmProperty['tabCnName'] = true;
        break;
      case clsSqlDataSynEN.con_TabEnName:
        this.tabEnName = strValue;
        this.hmProperty['tabEnName'] = true;
        break;
      case clsSqlDataSynEN.con_SqlData:
        this.sqlData = strValue;
        this.hmProperty['sqlData'] = true;
        break;
      case clsSqlDataSynEN.con_SqlCommandTypeId:
        this.sqlCommandTypeId = strValue;
        this.hmProperty['sqlCommandTypeId'] = true;
        break;
      case clsSqlDataSynEN.con_SqlCommandText:
        this.sqlCommandText = strValue;
        this.hmProperty['sqlCommandText'] = true;
        break;
      case clsSqlDataSynEN.con_SqlDataRecNum:
        this.sqlDataRecNum = Number(strValue);
        this.hmProperty['sqlDataRecNum'] = true;
        break;
      case clsSqlDataSynEN.con_TargetTabCondition:
        this.targetTabCondition = strValue;
        this.hmProperty['targetTabCondition'] = true;
        break;
      case clsSqlDataSynEN.con_TargetTabRecNum:
        this.targetTabRecNum = Number(strValue);
        this.hmProperty['targetTabRecNum'] = true;
        break;
      case clsSqlDataSynEN.con_DataSynDate:
        this.dataSynDate = strValue;
        this.hmProperty['dataSynDate'] = true;
        break;
      case clsSqlDataSynEN.con_PrimaryTypeId:
        this.primaryTypeId = strValue;
        this.hmProperty['primaryTypeId'] = true;
        break;
      case clsSqlDataSynEN.con_RecExclusiveWayId:
        this.recExclusiveWayId = strValue;
        this.hmProperty['recExclusiveWayId'] = true;
        break;
      case clsSqlDataSynEN.con_TextResouce:
        this.textResouce = strValue;
        this.hmProperty['textResouce'] = true;
        break;
      case clsSqlDataSynEN.con_TextResourceTypeId:
        this.textResourceTypeId = strValue;
        this.hmProperty['textResourceTypeId'] = true;
        break;
      case clsSqlDataSynEN.con_AnalysisDate:
        this.analysisDate = strValue;
        this.hmProperty['analysisDate'] = true;
        break;
      case clsSqlDataSynEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsSqlDataSynEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsSqlDataSynEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsSqlDataSynEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsSqlDataSynEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[SqlDataSyn]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public tabId = ''; //表ID
  public tabName = ''; //表名
  public tabCnName = ''; //表中文名
  public tabEnName = ''; //表英文详细名
  public sqlData = ''; //Sql表数据
  public sqlCommandTypeId = ''; //Sql命令类型Id
  public sqlCommandText = ''; //Sql命令内容
  public sqlDataRecNum = 0; //Sql数据记录数
  public targetTabCondition = ''; //目标表有效记录条件
  public targetTabRecNum = 0; //目标表记录数
  public dataSynDate = ''; //数据同步日期
  public primaryTypeId = ''; //主键类型ID
  public recExclusiveWayId = ''; //记录排他方式Id
  public textResouce = ''; //文本来源
  public textResourceTypeId = ''; //文本来源类型Id
  public analysisDate = ''; //分析日期
  public prjId = ''; //工程ID
  public errMsg = ''; //错误信息
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"TabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"TabName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"TabCnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabCnName(): string {
    return 'tabCnName';
  } //表中文名

  /**
   * 常量:"TabEnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabEnName(): string {
    return 'tabEnName';
  } //表英文详细名

  /**
   * 常量:"SqlData"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlData(): string {
    return 'sqlData';
  } //Sql表数据

  /**
   * 常量:"SqlCommandTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlCommandTypeId(): string {
    return 'sqlCommandTypeId';
  } //Sql命令类型Id

  /**
   * 常量:"SqlCommandText"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlCommandText(): string {
    return 'sqlCommandText';
  } //Sql命令内容

  /**
   * 常量:"SqlDataRecNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlDataRecNum(): string {
    return 'sqlDataRecNum';
  } //Sql数据记录数

  /**
   * 常量:"TargetTabCondition"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TargetTabCondition(): string {
    return 'targetTabCondition';
  } //目标表有效记录条件

  /**
   * 常量:"TargetTabRecNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TargetTabRecNum(): string {
    return 'targetTabRecNum';
  } //目标表记录数

  /**
   * 常量:"DataSynDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataSynDate(): string {
    return 'dataSynDate';
  } //数据同步日期

  /**
   * 常量:"PrimaryTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrimaryTypeId(): string {
    return 'primaryTypeId';
  } //主键类型ID

  /**
   * 常量:"RecExclusiveWayId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RecExclusiveWayId(): string {
    return 'recExclusiveWayId';
  } //记录排他方式Id

  /**
   * 常量:"TextResouce"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TextResouce(): string {
    return 'textResouce';
  } //文本来源

  /**
   * 常量:"TextResourceTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TextResourceTypeId(): string {
    return 'textResourceTypeId';
  } //文本来源类型Id

  /**
   * 常量:"AnalysisDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AnalysisDate(): string {
    return 'analysisDate';
  } //分析日期

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"ErrMsg"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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
