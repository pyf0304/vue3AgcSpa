/**
 * 类名:clsFunction4GeneCodeEN
 * 表名:Function4GeneCode(00050311)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 23:51:49
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 函数4GeneCode(Function4GeneCode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsFunction4GeneCodeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'Function4GeneCode'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncId4GC'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 29;
  public static AttributeName = [
    'funcId4GC',
    'funcName',
    'funcId4Code',
    'funcName4GC',
    'funcCHName4GC',
    'featureId',
    'progLangTypeId',
    'funcCodeTypeId',
    'sqlDsTypeId',
    'funcGCTypeId',
    'prjId',
    'returnTypeId',
    'funcTypeId',
    'isTemplate',
    'functionSignature',
    'funcCode',
    'userId',
    'orderNum',
    'inUse',
    'primaryTypeIds',
    'codeText',
    'usedTimes',
    'updDate',
    'updUser',
    'memo',
    'parsedWords',
    'parsedWordsExcluded',
    'wordVector',
    'isFuncTemplate',
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
  private mstrFuncId4GC = ''; //函数ID
  private mstrFuncName = ''; //函数名
  private mstrFuncId4Code = ''; //函数Id4Code
  private mstrFuncName4GC = ''; //函数名4生成代码
  private mstrFuncCHName4GC = ''; //函数中文名4生成代码
  private mstrFeatureId = ''; //功能Id
  private mstrProgLangTypeId = ''; //编程语言类型Id
  private mstrFuncCodeTypeId = ''; //函数代码类型Id
  private mstrSqlDsTypeId = ''; //数据源类型Id
  private mstrFuncGCTypeId = ''; //函数生成代码类型Id
  private mstrPrjId = ''; //工程Id
  private mstrReturnTypeId = ''; //返回类型ID
  private mstrFuncTypeId = ''; //函数类型Id
  private mbolIsTemplate = false; //是否模板
  private mstrFunctionSignature = ''; //函数签名
  private mstrFuncCode = ''; //函数代码
  private mstrUserId = ''; //用户Id
  private mintOrderNum = 0; //序号
  private mbolInUse = false; //是否在用
  private mstrPrimaryTypeIds = ''; //主键类型s
  private mstrCodeText = ''; //代码文本
  private mintUsedTimes = 0; //使用次数
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明
  private mstrParsedWords = ''; //分析的词
  private mstrParsedWordsExcluded = ''; //剔除后的词组
  private mstrWordVector = ''; //词向量
  private mbolIsFuncTemplate = false; //是否函数模板

  /**
   * 函数ID(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncId4GC(value: string) {
    if (value != undefined) {
      this.funcId4GC = value;
      this.hmProperty['funcId4GC'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncName(value: string) {
    if (value != undefined) {
      this.funcName = value;
      this.hmProperty['funcName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数Id4Code(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncId4Code(value: string) {
    if (value != undefined) {
      this.funcId4Code = value;
      this.hmProperty['funcId4Code'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数名4生成代码(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncName4GC(value: string) {
    if (value != undefined) {
      this.funcName4GC = value;
      this.hmProperty['funcName4GC'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数中文名4生成代码(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncCHName4GC(value: string) {
    if (value != undefined) {
      this.funcCHName4GC = value;
      this.hmProperty['funcCHName4GC'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFeatureId(value: string) {
    if (value != undefined) {
      this.featureId = value;
      this.hmProperty['featureId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 编程语言类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId(value: string) {
    if (value != undefined) {
      this.progLangTypeId = value;
      this.hmProperty['progLangTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数代码类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncCodeTypeId(value: string) {
    if (value != undefined) {
      this.funcCodeTypeId = value;
      this.hmProperty['funcCodeTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.sqlDsTypeId = value;
      this.hmProperty['sqlDsTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数生成代码类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncGCTypeId(value: string) {
    if (value != undefined) {
      this.funcGCTypeId = value;
      this.hmProperty['funcGCTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程Id(说明:;字段类型:char;字段长度:4;是否可空:False)
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
   * 返回类型ID(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReturnTypeId(value: string) {
    if (value != undefined) {
      this.returnTypeId = value;
      this.hmProperty['returnTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncTypeId(value: string) {
    if (value != undefined) {
      this.funcTypeId = value;
      this.hmProperty['funcTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否模板(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTemplate(value: boolean) {
    if (value != undefined) {
      this.isTemplate = value;
      this.hmProperty['isTemplate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数签名(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFunctionSignature(value: string) {
    if (value != undefined) {
      this.functionSignature = value;
      this.hmProperty['functionSignature'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数代码(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncCode(value: string) {
    if (value != undefined) {
      this.funcCode = value;
      this.hmProperty['funcCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
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
   * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInUse(value: boolean) {
    if (value != undefined) {
      this.inUse = value;
      this.hmProperty['inUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主键类型s(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryTypeIds(value: string) {
    if (value != undefined) {
      this.primaryTypeIds = value;
      this.hmProperty['primaryTypeIds'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 代码文本(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodeText(value: string) {
    if (value != undefined) {
      this.codeText = value;
      this.hmProperty['codeText'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 使用次数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUsedTimes(value: number) {
    if (value != undefined) {
      this.usedTimes = value;
      this.hmProperty['usedTimes'] = true;
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
   * 修改者(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
   * 分析的词(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParsedWords(value: string) {
    if (value != undefined) {
      this.parsedWords = value;
      this.hmProperty['parsedWords'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 剔除后的词组(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParsedWordsExcluded(value: string) {
    if (value != undefined) {
      this.parsedWordsExcluded = value;
      this.hmProperty['parsedWordsExcluded'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 词向量(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWordVector(value: string) {
    if (value != undefined) {
      this.wordVector = value;
      this.hmProperty['wordVector'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否函数模板(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsFuncTemplate(value: boolean) {
    if (value != undefined) {
      this.isFuncTemplate = value;
      this.hmProperty['isFuncTemplate'] = true;
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
      case clsFunction4GeneCodeEN.con_FuncId4GC:
        return this.funcId4GC;
      case clsFunction4GeneCodeEN.con_FuncName:
        return this.funcName;
      case clsFunction4GeneCodeEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsFunction4GeneCodeEN.con_FuncName4GC:
        return this.funcName4GC;
      case clsFunction4GeneCodeEN.con_FuncCHName4GC:
        return this.funcCHName4GC;
      case clsFunction4GeneCodeEN.con_FeatureId:
        return this.featureId;
      case clsFunction4GeneCodeEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsFunction4GeneCodeEN.con_FuncCodeTypeId:
        return this.funcCodeTypeId;
      case clsFunction4GeneCodeEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsFunction4GeneCodeEN.con_FuncGCTypeId:
        return this.funcGCTypeId;
      case clsFunction4GeneCodeEN.con_PrjId:
        return this.prjId;
      case clsFunction4GeneCodeEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsFunction4GeneCodeEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsFunction4GeneCodeEN.con_IsTemplate:
        return this.isTemplate;
      case clsFunction4GeneCodeEN.con_FunctionSignature:
        return this.functionSignature;
      case clsFunction4GeneCodeEN.con_FuncCode:
        return this.funcCode;
      case clsFunction4GeneCodeEN.con_UserId:
        return this.userId;
      case clsFunction4GeneCodeEN.con_OrderNum:
        return this.orderNum;
      case clsFunction4GeneCodeEN.con_InUse:
        return this.inUse;
      case clsFunction4GeneCodeEN.con_PrimaryTypeIds:
        return this.primaryTypeIds;
      case clsFunction4GeneCodeEN.con_CodeText:
        return this.codeText;
      case clsFunction4GeneCodeEN.con_UsedTimes:
        return this.usedTimes;
      case clsFunction4GeneCodeEN.con_UpdDate:
        return this.updDate;
      case clsFunction4GeneCodeEN.con_UpdUser:
        return this.updUser;
      case clsFunction4GeneCodeEN.con_Memo:
        return this.memo;
      case clsFunction4GeneCodeEN.con_ParsedWords:
        return this.parsedWords;
      case clsFunction4GeneCodeEN.con_ParsedWordsExcluded:
        return this.parsedWordsExcluded;
      case clsFunction4GeneCodeEN.con_WordVector:
        return this.wordVector;
      case clsFunction4GeneCodeEN.con_IsFuncTemplate:
        return this.isFuncTemplate;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Function4GeneCode]中不存在!`;
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
      case clsFunction4GeneCodeEN.con_FuncId4GC:
        this.funcId4GC = strValue;
        this.hmProperty['funcId4GC'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncName:
        this.funcName = strValue;
        this.hmProperty['funcName'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        this.hmProperty['funcId4Code'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncName4GC:
        this.funcName4GC = strValue;
        this.hmProperty['funcName4GC'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncCHName4GC:
        this.funcCHName4GC = strValue;
        this.hmProperty['funcCHName4GC'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FeatureId:
        this.featureId = strValue;
        this.hmProperty['featureId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        this.hmProperty['progLangTypeId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncCodeTypeId:
        this.funcCodeTypeId = strValue;
        this.hmProperty['funcCodeTypeId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        this.hmProperty['sqlDsTypeId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncGCTypeId:
        this.funcGCTypeId = strValue;
        this.hmProperty['funcGCTypeId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        this.hmProperty['returnTypeId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        this.hmProperty['funcTypeId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        this.hmProperty['isTemplate'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FunctionSignature:
        this.functionSignature = strValue;
        this.hmProperty['functionSignature'] = true;
        break;
      case clsFunction4GeneCodeEN.con_FuncCode:
        this.funcCode = strValue;
        this.hmProperty['funcCode'] = true;
        break;
      case clsFunction4GeneCodeEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsFunction4GeneCodeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsFunction4GeneCodeEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsFunction4GeneCodeEN.con_PrimaryTypeIds:
        this.primaryTypeIds = strValue;
        this.hmProperty['primaryTypeIds'] = true;
        break;
      case clsFunction4GeneCodeEN.con_CodeText:
        this.codeText = strValue;
        this.hmProperty['codeText'] = true;
        break;
      case clsFunction4GeneCodeEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        this.hmProperty['usedTimes'] = true;
        break;
      case clsFunction4GeneCodeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsFunction4GeneCodeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsFunction4GeneCodeEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsFunction4GeneCodeEN.con_ParsedWords:
        this.parsedWords = strValue;
        this.hmProperty['parsedWords'] = true;
        break;
      case clsFunction4GeneCodeEN.con_ParsedWordsExcluded:
        this.parsedWordsExcluded = strValue;
        this.hmProperty['parsedWordsExcluded'] = true;
        break;
      case clsFunction4GeneCodeEN.con_WordVector:
        this.wordVector = strValue;
        this.hmProperty['wordVector'] = true;
        break;
      case clsFunction4GeneCodeEN.con_IsFuncTemplate:
        this.isFuncTemplate = Boolean(strValue);
        this.hmProperty['isFuncTemplate'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Function4GeneCode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public funcId4GC = ''; //函数ID
  public funcName = ''; //函数名
  public funcId4Code = ''; //函数Id4Code
  public funcName4GC = ''; //函数名4生成代码
  public funcCHName4GC = ''; //函数中文名4生成代码
  public featureId = ''; //功能Id
  public progLangTypeId = ''; //编程语言类型Id
  public funcCodeTypeId = ''; //函数代码类型Id
  public sqlDsTypeId = ''; //数据源类型Id
  public funcGCTypeId = ''; //函数生成代码类型Id
  public prjId = ''; //工程Id
  public returnTypeId = ''; //返回类型ID
  public funcTypeId = ''; //函数类型Id
  public isTemplate = false; //是否模板
  public functionSignature = ''; //函数签名
  public funcCode = ''; //函数代码
  public userId = ''; //用户Id
  public orderNum = 0; //序号
  public inUse = false; //是否在用
  public primaryTypeIds = ''; //主键类型s
  public codeText = ''; //代码文本
  public usedTimes = 0; //使用次数
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public parsedWords = ''; //分析的词
  public parsedWordsExcluded = ''; //剔除后的词组
  public wordVector = ''; //词向量
  public isFuncTemplate = false; //是否函数模板

  /**
   * 常量:"FuncId4GC"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncId4GC(): string {
    return 'funcId4GC';
  } //函数ID

  /**
   * 常量:"FuncName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"FuncId4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncId4Code(): string {
    return 'funcId4Code';
  } //函数Id4Code

  /**
   * 常量:"FuncName4GC"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncName4GC(): string {
    return 'funcName4GC';
  } //函数名4生成代码

  /**
   * 常量:"FuncCHName4GC"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncCHName4GC(): string {
    return 'funcCHName4GC';
  } //函数中文名4生成代码

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"FuncCodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncCodeTypeId(): string {
    return 'funcCodeTypeId';
  } //函数代码类型Id

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"FuncGCTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncGCTypeId(): string {
    return 'funcGCTypeId';
  } //函数生成代码类型Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"ReturnTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnTypeId(): string {
    return 'returnTypeId';
  } //返回类型ID

  /**
   * 常量:"FuncTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"FunctionSignature"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionSignature(): string {
    return 'functionSignature';
  } //函数签名

  /**
   * 常量:"FuncCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncCode(): string {
    return 'funcCode';
  } //函数代码

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"PrimaryTypeIds"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryTypeIds(): string {
    return 'primaryTypeIds';
  } //主键类型s

  /**
   * 常量:"CodeText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeText(): string {
    return 'codeText';
  } //代码文本

  /**
   * 常量:"UsedTimes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UsedTimes(): string {
    return 'usedTimes';
  } //使用次数

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
   * 常量:"ParsedWords"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParsedWords(): string {
    return 'parsedWords';
  } //分析的词

  /**
   * 常量:"ParsedWordsExcluded"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParsedWordsExcluded(): string {
    return 'parsedWordsExcluded';
  } //剔除后的词组

  /**
   * 常量:"WordVector"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WordVector(): string {
    return 'wordVector';
  } //词向量

  /**
   * 常量:"IsFuncTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsFuncTemplate(): string {
    return 'isFuncTemplate';
  } //是否函数模板

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
    //return propName in new clsFunction4GeneCodeEN();
    const instance = new clsFunction4GeneCodeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
