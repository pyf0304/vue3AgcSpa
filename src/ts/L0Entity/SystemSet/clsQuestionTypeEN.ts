/**
 * 类名:clsQuestionTypeEN
 * 表名:QuestionType(01120008)
 * 版本:2023.03.10.1(服务器:WIN-SRV103-116)
 * 日期:2023/03/14 18:40:17
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 题目类型(QuestionType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQuestionTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QuestionType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'QuestionTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'questionTypeId',
    'questionTypeName',
    'questionTypeENName',
    'defaAnswerModeId',
    'defaAnswerTypeId',
    'orderNum',
    'isUse',
    'updDate',
    'updUser',
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
  private mstrQuestionTypeId = ''; //题目类型Id
  private mstrQuestionTypeName = ''; //题目类型名
  private mstrQuestionTypeENName = ''; //题目类型英文名
  private mstrDefaAnswerModeId = ''; //默认答案模式Id
  private mstrDefaAnswerTypeId = ''; //默认答案类型Id
  private mintOrderNum = 0; //序号
  private mbolIsUse = false; //是否使用
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * 题目类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQuestionTypeId(value: string) {
    if (value != undefined) {
      this.questionTypeId = value;
      this.hmProperty['questionTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 题目类型名(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQuestionTypeName(value: string) {
    if (value != undefined) {
      this.questionTypeName = value;
      this.hmProperty['questionTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 题目类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQuestionTypeENName(value: string) {
    if (value != undefined) {
      this.questionTypeENName = value;
      this.hmProperty['questionTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 默认答案模式Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaAnswerModeId(value: string) {
    if (value != undefined) {
      this.defaAnswerModeId = value;
      this.hmProperty['defaAnswerModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 默认答案类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaAnswerTypeId(value: string) {
    if (value != undefined) {
      this.defaAnswerTypeId = value;
      this.hmProperty['defaAnswerTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否使用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUse(value: boolean) {
    if (value != undefined) {
      this.isUse = value;
      this.hmProperty['isUse'] = true;
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
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
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
    // const strThisFuncName = 'GetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsQuestionTypeEN.conQuestionTypeId:
        return this.questionTypeId;
      case clsQuestionTypeEN.conQuestionTypeName:
        return this.questionTypeName;
      case clsQuestionTypeEN.conQuestionTypeENName:
        return this.questionTypeENName;
      case clsQuestionTypeEN.conDefaAnswerModeId:
        return this.defaAnswerModeId;
      case clsQuestionTypeEN.conDefaAnswerTypeId:
        return this.defaAnswerTypeId;
      case clsQuestionTypeEN.con_OrderNum:
        return this.orderNum;
      case clsQuestionTypeEN.conIsUse:
        return this.isUse;
      case clsQuestionTypeEN.conUpdDate:
        return this.updDate;
      case clsQuestionTypeEN.conUpdUser:
        return this.updUser;
      case clsQuestionTypeEN.conMemo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QuestionType]中不存在！`;
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
      case clsQuestionTypeEN.conQuestionTypeId:
        this.questionTypeId = strValue;
        this.hmProperty['questionTypeId'] = true;
        break;
      case clsQuestionTypeEN.conQuestionTypeName:
        this.questionTypeName = strValue;
        this.hmProperty['questionTypeName'] = true;
        break;
      case clsQuestionTypeEN.conQuestionTypeENName:
        this.questionTypeENName = strValue;
        this.hmProperty['questionTypeENName'] = true;
        break;
      case clsQuestionTypeEN.conDefaAnswerModeId:
        this.defaAnswerModeId = strValue;
        this.hmProperty['defaAnswerModeId'] = true;
        break;
      case clsQuestionTypeEN.conDefaAnswerTypeId:
        this.defaAnswerTypeId = strValue;
        this.hmProperty['defaAnswerTypeId'] = true;
        break;
      case clsQuestionTypeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsQuestionTypeEN.conIsUse:
        this.isUse = Boolean(strValue);
        this.hmProperty['isUse'] = true;
        break;
      case clsQuestionTypeEN.conUpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsQuestionTypeEN.conUpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsQuestionTypeEN.conMemo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[QuestionType]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public questionTypeId = ''; //题目类型Id
  public questionTypeName = ''; //题目类型名
  public questionTypeENName = ''; //题目类型英文名
  public defaAnswerModeId = ''; //默认答案模式Id
  public defaAnswerTypeId = ''; //默认答案类型Id
  public orderNum = 0; //序号
  public isUse = false; //是否使用
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 常量:"QuestionTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conQuestionTypeId(): string {
    return 'questionTypeId';
  } //题目类型Id

  /**
   * 常量:"QuestionTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conQuestionTypeName(): string {
    return 'questionTypeName';
  } //题目类型名

  /**
   * 常量:"QuestionTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conQuestionTypeENName(): string {
    return 'questionTypeENName';
  } //题目类型英文名

  /**
   * 常量:"DefaAnswerModeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDefaAnswerModeId(): string {
    return 'defaAnswerModeId';
  } //默认答案模式Id

  /**
   * 常量:"DefaAnswerTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDefaAnswerTypeId(): string {
    return 'defaAnswerTypeId';
  } //默认答案类型Id

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"IsUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsUse(): string {
    return 'isUse';
  } //是否使用

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdUser(): string {
    return 'updUser';
  } //修改人

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMemo(): string {
    return 'memo';
  } //备注

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    // const strThisFuncName = this.SetCondFldValue.name;
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumQuestionType {
  /**
   * 填空题
   **/
  static readonly FillInBlank_01 = '01';
  /**
   * 单选题
   **/
  static readonly SingleTopic_02 = '02';
  /**
   * 多选题
   **/
  static readonly MultipleChoice_03 = '03';
  /**
   * 开放题
   **/
  static readonly OpenQuestion_04 = '04';
  /**
   * 解答题
   **/
  static readonly AnswerQuestions_05 = '05';
  /**
   * 标题
   **/
  static readonly Title_06 = '06';
  /**
   * 说明性内容
   **/
  static readonly ExplanatoryContent_07 = '07';
  /**
   * 单选题(下拉框)
   **/
  static readonly SingleTopic_DropDownBox_08 = '08';
  /**
   * 操作题
   **/
  static readonly OperationQuestions_09 = '09';
  /**
   * 简答题
   **/
  static readonly ShortAnswer_10 = '10';
  /**
   * 判断题
   **/
  static readonly TrueorFalse_11 = '11';
  /**
   * 案例分析题
   **/
  static readonly CaseAnysisMultiChoice_12 = '12';
  /**
   * 录音分析题
   **/
  static readonly RecorderAndAnysis_13 = '13';
  /**
   * 知识结构图
   **/
  static readonly KnowledgeStructureDiagram_14 = '14';
  /**
   * 知识逻辑关系图
   **/
  static readonly KnowledgeLogicDiagram_15 = '15';
  /**
   * 连连看多选题
   **/
  static readonly LianliankanMultipleChoiceQuestions_17 = '17';
  /**
   * 概念题
   **/
  static readonly ConceptQuestion_18 = '18';
}
