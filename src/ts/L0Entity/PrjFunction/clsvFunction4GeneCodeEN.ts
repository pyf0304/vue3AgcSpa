/**
 * 类名:clsvFunction4GeneCodeEN
 * 表名:vFunction4GeneCode(00050315)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:11
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * v函数4GeneCode(vFunction4GeneCode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFunction4GeneCodeEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFunction4GeneCode'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncId4GC'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 42;
  public static AttributeName = [
    'funcId4GC',
    'funcName',
    'funcId4Code',
    'funcName4Code',
    'funcCHName4Code',
    'functionSignatureSim',
    'featureId',
    'featureName',
    'featureDescription',
    'featureTypeName',
    'progLangTypeId',
    'progLangTypeName',
    'sqlDsTypeId',
    'sqlDsTypeName',
    'funcGCTypeId',
    'funcGCTypeName',
    'funcGCTypeENName',
    'prjId',
    'returnTypeId',
    'funcTypeId',
    'funcTypeName',
    'isTemplate',
    'functionSignature',
    'funcCode',
    'userId',
    'orderNum',
    'inUse',
    'codeText',
    'updDate',
    'updUser',
    'memo',
    'parsedWords',
    'parsedWordsExcluded',
    'wordVector',
    'isFuncTemplate',
    'returnTypeName',
    'templateNum',
    'order4FeatureNum',
    'funcCodeTypeENName',
    'funcCodeTypeId',
    'funcCodeTypeName',
    'progLangTypeId4FuncCodeType',
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
      case clsvFunction4GeneCodeEN.con_FuncId4GC:
        return this.funcId4GC;
      case clsvFunction4GeneCodeEN.con_FuncName:
        return this.funcName;
      case clsvFunction4GeneCodeEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsvFunction4GeneCodeEN.con_FuncName4Code:
        return this.funcName4Code;
      case clsvFunction4GeneCodeEN.con_FuncCHName4Code:
        return this.funcCHName4Code;
      case clsvFunction4GeneCodeEN.con_FunctionSignatureSim:
        return this.functionSignatureSim;
      case clsvFunction4GeneCodeEN.con_FeatureId:
        return this.featureId;
      case clsvFunction4GeneCodeEN.con_FeatureName:
        return this.featureName;
      case clsvFunction4GeneCodeEN.con_FeatureDescription:
        return this.featureDescription;
      case clsvFunction4GeneCodeEN.con_FeatureTypeName:
        return this.featureTypeName;
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvFunction4GeneCodeEN.con_ProgLangTypeName:
        return this.progLangTypeName;
      case clsvFunction4GeneCodeEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvFunction4GeneCodeEN.con_SqlDsTypeName:
        return this.sqlDsTypeName;
      case clsvFunction4GeneCodeEN.con_FuncGCTypeId:
        return this.funcGCTypeId;
      case clsvFunction4GeneCodeEN.con_FuncGCTypeName:
        return this.funcGCTypeName;
      case clsvFunction4GeneCodeEN.con_FuncGCTypeENName:
        return this.funcGCTypeENName;
      case clsvFunction4GeneCodeEN.con_PrjId:
        return this.prjId;
      case clsvFunction4GeneCodeEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsvFunction4GeneCodeEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsvFunction4GeneCodeEN.con_FuncTypeName:
        return this.funcTypeName;
      case clsvFunction4GeneCodeEN.con_IsTemplate:
        return this.isTemplate;
      case clsvFunction4GeneCodeEN.con_FunctionSignature:
        return this.functionSignature;
      case clsvFunction4GeneCodeEN.con_FuncCode:
        return this.funcCode;
      case clsvFunction4GeneCodeEN.con_UserId:
        return this.userId;
      case clsvFunction4GeneCodeEN.con_OrderNum:
        return this.orderNum;
      case clsvFunction4GeneCodeEN.con_InUse:
        return this.inUse;
      case clsvFunction4GeneCodeEN.con_CodeText:
        return this.codeText;
      case clsvFunction4GeneCodeEN.con_UpdDate:
        return this.updDate;
      case clsvFunction4GeneCodeEN.con_UpdUser:
        return this.updUser;
      case clsvFunction4GeneCodeEN.con_Memo:
        return this.memo;
      case clsvFunction4GeneCodeEN.con_ParsedWords:
        return this.parsedWords;
      case clsvFunction4GeneCodeEN.con_ParsedWordsExcluded:
        return this.parsedWordsExcluded;
      case clsvFunction4GeneCodeEN.con_WordVector:
        return this.wordVector;
      case clsvFunction4GeneCodeEN.con_IsFuncTemplate:
        return this.isFuncTemplate;
      case clsvFunction4GeneCodeEN.con_ReturnTypeName:
        return this.returnTypeName;
      case clsvFunction4GeneCodeEN.con_TemplateNum:
        return this.templateNum;
      case clsvFunction4GeneCodeEN.con_Order4FeatureNum:
        return this.order4FeatureNum;
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeENName:
        return this.funcCodeTypeENName;
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeId:
        return this.funcCodeTypeId;
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeName:
        return this.funcCodeTypeName;
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType:
        return this.progLangTypeId4FuncCodeType;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4GeneCode]中不存在!`;
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
      case clsvFunction4GeneCodeEN.con_FuncId4GC:
        this.funcId4GC = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncName:
        this.funcName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncName4Code:
        this.funcName4Code = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncCHName4Code:
        this.funcCHName4Code = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FunctionSignatureSim:
        this.functionSignatureSim = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FeatureId:
        this.featureId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FeatureName:
        this.featureName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FeatureDescription:
        this.featureDescription = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FeatureTypeName:
        this.featureTypeName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_ProgLangTypeName:
        this.progLangTypeName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_SqlDsTypeName:
        this.sqlDsTypeName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncGCTypeId:
        this.funcGCTypeId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncGCTypeName:
        this.funcGCTypeName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncGCTypeENName:
        this.funcGCTypeENName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncTypeName:
        this.funcTypeName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        break;
      case clsvFunction4GeneCodeEN.con_FunctionSignature:
        this.functionSignature = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncCode:
        this.funcCode = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_UserId:
        this.userId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvFunction4GeneCodeEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvFunction4GeneCodeEN.con_CodeText:
        this.codeText = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_ParsedWords:
        this.parsedWords = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_ParsedWordsExcluded:
        this.parsedWordsExcluded = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_WordVector:
        this.wordVector = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_IsFuncTemplate:
        this.isFuncTemplate = Boolean(strValue);
        break;
      case clsvFunction4GeneCodeEN.con_ReturnTypeName:
        this.returnTypeName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_TemplateNum:
        this.templateNum = Number(strValue);
        break;
      case clsvFunction4GeneCodeEN.con_Order4FeatureNum:
        this.order4FeatureNum = Number(strValue);
        break;
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeENName:
        this.funcCodeTypeENName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeId:
        this.funcCodeTypeId = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_FuncCodeTypeName:
        this.funcCodeTypeName = strValue;
        break;
      case clsvFunction4GeneCodeEN.con_ProgLangTypeId4FuncCodeType:
        this.progLangTypeId4FuncCodeType = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4GeneCode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public funcName4Code = ''; //函数名4Code
  public funcCHName4Code = ''; //函数中文名4Code
  public functionSignatureSim = ''; //函数签名_Sim
  public featureId = ''; //功能Id
  public featureName = ''; //功能名称
  public featureDescription = ''; //功能说明
  public featureTypeName = ''; //功能类型名称
  public progLangTypeId = ''; //编程语言类型Id
  public progLangTypeName = ''; //编程语言类型名
  public sqlDsTypeId = ''; //数据源类型Id
  public sqlDsTypeName = ''; //Sql数据源名
  public funcGCTypeId = ''; //函数生成代码类型Id
  public funcGCTypeName = ''; //函数生成代码类型名
  public funcGCTypeENName = ''; //函数生成代码类型英文名
  public prjId = ''; //工程ID
  public returnTypeId = ''; //返回类型ID
  public funcTypeId = ''; //函数类型Id
  public funcTypeName = ''; //函数类型名
  public isTemplate = false; //是否模板
  public functionSignature = ''; //函数签名
  public funcCode = ''; //函数代码
  public userId = ''; //用户Id
  public orderNum = 0; //序号
  public inUse = false; //是否在用
  public codeText = ''; //代码文本
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public parsedWords = ''; //分析的词
  public parsedWordsExcluded = ''; //剔除后的词组
  public wordVector = ''; //词向量
  public isFuncTemplate = false; //是否函数模板
  public returnTypeName = ''; //返回类型名
  public templateNum = 0; //TemplateNum
  public order4FeatureNum = 0; //Order4FeatureNum
  public funcCodeTypeENName = ''; //FuncCodeTypeENName
  public funcCodeTypeId = ''; //函数代码类型Id
  public funcCodeTypeName = ''; //FuncCodeTypeName
  public progLangTypeId4FuncCodeType = ''; //ProgLangTypeId4FuncCodeType

  /**
   * 常量:"FuncId4GC"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncId4GC(): string {
    return 'funcId4GC';
  } //函数ID

  /**
   * 常量:"FuncName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"FuncId4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncId4Code(): string {
    return 'funcId4Code';
  } //函数Id4Code

  /**
   * 常量:"FuncName4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncName4Code(): string {
    return 'funcName4Code';
  } //函数名4Code

  /**
   * 常量:"FuncCHName4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncCHName4Code(): string {
    return 'funcCHName4Code';
  } //函数中文名4Code

  /**
   * 常量:"FunctionSignatureSim"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionSignatureSim(): string {
    return 'functionSignatureSim';
  } //函数签名_Sim

  /**
   * 常量:"FeatureId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"FeatureName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"FeatureDescription"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FeatureDescription(): string {
    return 'featureDescription';
  } //功能说明

  /**
   * 常量:"FeatureTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FeatureTypeName(): string {
    return 'featureTypeName';
  } //功能类型名称

  /**
   * 常量:"ProgLangTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"ProgLangTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ProgLangTypeName(): string {
    return 'progLangTypeName';
  } //编程语言类型名

  /**
   * 常量:"SqlDsTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"SqlDsTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlDsTypeName(): string {
    return 'sqlDsTypeName';
  } //Sql数据源名

  /**
   * 常量:"FuncGCTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncGCTypeId(): string {
    return 'funcGCTypeId';
  } //函数生成代码类型Id

  /**
   * 常量:"FuncGCTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncGCTypeName(): string {
    return 'funcGCTypeName';
  } //函数生成代码类型名

  /**
   * 常量:"FuncGCTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncGCTypeENName(): string {
    return 'funcGCTypeENName';
  } //函数生成代码类型英文名

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"ReturnTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnTypeId(): string {
    return 'returnTypeId';
  } //返回类型ID

  /**
   * 常量:"FuncTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id

  /**
   * 常量:"FuncTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncTypeName(): string {
    return 'funcTypeName';
  } //函数类型名

  /**
   * 常量:"IsTemplate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"FunctionSignature"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionSignature(): string {
    return 'functionSignature';
  } //函数签名

  /**
   * 常量:"FuncCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncCode(): string {
    return 'funcCode';
  } //函数代码

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"CodeText"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CodeText(): string {
    return 'codeText';
  } //代码文本

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"ParsedWords"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParsedWords(): string {
    return 'parsedWords';
  } //分析的词

  /**
   * 常量:"ParsedWordsExcluded"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParsedWordsExcluded(): string {
    return 'parsedWordsExcluded';
  } //剔除后的词组

  /**
   * 常量:"WordVector"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WordVector(): string {
    return 'wordVector';
  } //词向量

  /**
   * 常量:"IsFuncTemplate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsFuncTemplate(): string {
    return 'isFuncTemplate';
  } //是否函数模板

  /**
   * 常量:"ReturnTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnTypeName(): string {
    return 'returnTypeName';
  } //返回类型名

  /**
   * 常量:"TemplateNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TemplateNum(): string {
    return 'templateNum';
  } //TemplateNum

  /**
   * 常量:"Order4FeatureNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Order4FeatureNum(): string {
    return 'order4FeatureNum';
  } //Order4FeatureNum

  /**
   * 常量:"FuncCodeTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncCodeTypeENName(): string {
    return 'funcCodeTypeENName';
  } //FuncCodeTypeENName

  /**
   * 常量:"FuncCodeTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncCodeTypeId(): string {
    return 'funcCodeTypeId';
  } //函数代码类型Id

  /**
   * 常量:"FuncCodeTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncCodeTypeName(): string {
    return 'funcCodeTypeName';
  } //FuncCodeTypeName

  /**
   * 常量:"ProgLangTypeId4FuncCodeType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ProgLangTypeId4FuncCodeType(): string {
    return 'progLangTypeId4FuncCodeType';
  } //ProgLangTypeId4FuncCodeType

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
