/**
 * 类名:clsvFunctionTemplateRelaEN
 * 表名:vFunctionTemplateRela(00050317)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:12
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
 * v函数与模板关系(vFunctionTemplateRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFunctionTemplateRelaEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFunctionTemplateRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 30;
  public static AttributeName = [
    'mId',
    'functionTemplateId',
    'functionTemplateName',
    'createUserId',
    'codeTypeId',
    'codeTypeName',
    'codeTypeENName',
    'regionTypeId',
    'regionTypeName',
    'funcId4GC',
    'funcName',
    'funcId4Code',
    'funcName4Code',
    'funcCHName4Code',
    'progLangTypeId',
    'progLangTypeName',
    'sqlDsTypeId',
    'sqlDsTypeName',
    'returnTypeId',
    'funcTypeId',
    'funcTypeName',
    'isTemplate',
    'functionSignature',
    'returnTypeName',
    'isGeneCode',
    'orderNum',
    'updDate',
    'updUser',
    'memo',
    'order4FuncNum',
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
      case clsvFunctionTemplateRelaEN.con_mId:
        return this.mId;
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateId:
        return this.functionTemplateId;
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateName:
        return this.functionTemplateName;
      case clsvFunctionTemplateRelaEN.con_CreateUserId:
        return this.createUserId;
      case clsvFunctionTemplateRelaEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsvFunctionTemplateRelaEN.con_CodeTypeName:
        return this.codeTypeName;
      case clsvFunctionTemplateRelaEN.con_CodeTypeENName:
        return this.codeTypeENName;
      case clsvFunctionTemplateRelaEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsvFunctionTemplateRelaEN.con_RegionTypeName:
        return this.regionTypeName;
      case clsvFunctionTemplateRelaEN.con_FuncId4GC:
        return this.funcId4GC;
      case clsvFunctionTemplateRelaEN.con_FuncName:
        return this.funcName;
      case clsvFunctionTemplateRelaEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsvFunctionTemplateRelaEN.con_FuncName4Code:
        return this.funcName4Code;
      case clsvFunctionTemplateRelaEN.con_FuncCHName4Code:
        return this.funcCHName4Code;
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeName:
        return this.progLangTypeName;
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeName:
        return this.sqlDsTypeName;
      case clsvFunctionTemplateRelaEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsvFunctionTemplateRelaEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsvFunctionTemplateRelaEN.con_FuncTypeName:
        return this.funcTypeName;
      case clsvFunctionTemplateRelaEN.con_IsTemplate:
        return this.isTemplate;
      case clsvFunctionTemplateRelaEN.con_FunctionSignature:
        return this.functionSignature;
      case clsvFunctionTemplateRelaEN.con_ReturnTypeName:
        return this.returnTypeName;
      case clsvFunctionTemplateRelaEN.con_IsGeneCode:
        return this.isGeneCode;
      case clsvFunctionTemplateRelaEN.con_OrderNum:
        return this.orderNum;
      case clsvFunctionTemplateRelaEN.con_UpdDate:
        return this.updDate;
      case clsvFunctionTemplateRelaEN.con_UpdUser:
        return this.updUser;
      case clsvFunctionTemplateRelaEN.con_Memo:
        return this.memo;
      case clsvFunctionTemplateRelaEN.con_Order4FuncNum:
        return this.order4FuncNum;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunctionTemplateRela]中不存在!`;
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
      case clsvFunctionTemplateRelaEN.con_mId:
        this.mId = Number(strValue);
        break;
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateId:
        this.functionTemplateId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FunctionTemplateName:
        this.functionTemplateName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_CreateUserId:
        this.createUserId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_CodeTypeName:
        this.codeTypeName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_CodeTypeENName:
        this.codeTypeENName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_RegionTypeName:
        this.regionTypeName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FuncId4GC:
        this.funcId4GC = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FuncName:
        this.funcName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FuncName4Code:
        this.funcName4Code = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FuncCHName4Code:
        this.funcCHName4Code = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_ProgLangTypeName:
        this.progLangTypeName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_SqlDsTypeName:
        this.sqlDsTypeName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_FuncTypeName:
        this.funcTypeName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        break;
      case clsvFunctionTemplateRelaEN.con_FunctionSignature:
        this.functionSignature = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_ReturnTypeName:
        this.returnTypeName = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_IsGeneCode:
        this.isGeneCode = Boolean(strValue);
        break;
      case clsvFunctionTemplateRelaEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvFunctionTemplateRelaEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvFunctionTemplateRelaEN.con_Order4FuncNum:
        this.order4FuncNum = Number(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunctionTemplateRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public functionTemplateId = ''; //函数模板Id
  public functionTemplateName = ''; //函数模板名
  public createUserId = ''; //建立用户Id
  public codeTypeId = ''; //代码类型Id
  public codeTypeName = ''; //代码类型名
  public codeTypeENName = ''; //代码类型英文名
  public regionTypeId = ''; //区域类型Id
  public regionTypeName = ''; //区域类型名称
  public funcId4GC = ''; //函数ID
  public funcName = ''; //函数名
  public funcId4Code = ''; //函数Id4Code
  public funcName4Code = ''; //函数名4Code
  public funcCHName4Code = ''; //函数中文名4Code
  public progLangTypeId = ''; //编程语言类型Id
  public progLangTypeName = ''; //编程语言类型名
  public sqlDsTypeId = ''; //数据源类型Id
  public sqlDsTypeName = ''; //Sql数据源名
  public returnTypeId = ''; //返回类型ID
  public funcTypeId = ''; //函数类型Id
  public funcTypeName = ''; //函数类型名
  public isTemplate = false; //是否模板
  public functionSignature = ''; //函数签名
  public returnTypeName = ''; //返回类型名
  public isGeneCode = false; //是否生成代码
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public order4FuncNum = 0; //Order4FuncNum

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"FunctionTemplateId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionTemplateId(): string {
    return 'functionTemplateId';
  } //函数模板Id

  /**
   * 常量:"FunctionTemplateName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionTemplateName(): string {
    return 'functionTemplateName';
  } //函数模板名

  /**
   * 常量:"CreateUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CreateUserId(): string {
    return 'createUserId';
  } //建立用户Id

  /**
   * 常量:"CodeTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"CodeTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"CodeTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CodeTypeENName(): string {
    return 'codeTypeENName';
  } //代码类型英文名

  /**
   * 常量:"RegionTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"RegionTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RegionTypeName(): string {
    return 'regionTypeName';
  } //区域类型名称

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
   * 常量:"ReturnTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnTypeName(): string {
    return 'returnTypeName';
  } //返回类型名

  /**
   * 常量:"IsGeneCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsGeneCode(): string {
    return 'isGeneCode';
  } //是否生成代码

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

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
   * 常量:"Order4FuncNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Order4FuncNum(): string {
    return 'order4FuncNum';
  } //Order4FuncNum

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
