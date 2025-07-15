/**
 * 类名:clsvWebSrvFunctionsEN
 * 表名:vWebSrvFunctions(00050343)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:33
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vWebSrv函数(vWebSrvFunctions)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvWebSrvFunctionsEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vWebSrvFunctions'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'WebSrvFunctionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 32;
  public static AttributeName = [
    'webSrvFunctionId',
    'webSrvClassId',
    'nameSpace',
    'webSrvUrl',
    'funcModuleAgcId',
    'prjId',
    'functionName',
    'getCustomAttributes',
    'functionSignature',
    'funcTypeId',
    'funcTypeName',
    'returnType',
    'returnTypeFullName',
    'isKnownType',
    'returnTypeId',
    'dataTypeName',
    'dataTypeAbbr',
    'netSysType',
    'csType',
    'javaType',
    'javaObjType',
    'swiftType',
    'isNeedQuote',
    'isAsyncFunc',
    'sourceFunction',
    'isGeneCode',
    'returnValueDescription',
    'funcParaLst',
    'updDate',
    'updUser',
    'memo',
    'clsName',
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
      case clsvWebSrvFunctionsEN.con_WebSrvFunctionId:
        return this.webSrvFunctionId;
      case clsvWebSrvFunctionsEN.con_WebSrvClassId:
        return this.webSrvClassId;
      case clsvWebSrvFunctionsEN.con_NameSpace:
        return this.nameSpace;
      case clsvWebSrvFunctionsEN.con_WebSrvUrl:
        return this.webSrvUrl;
      case clsvWebSrvFunctionsEN.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsvWebSrvFunctionsEN.con_PrjId:
        return this.prjId;
      case clsvWebSrvFunctionsEN.con_FunctionName:
        return this.functionName;
      case clsvWebSrvFunctionsEN.con_GetCustomAttributes:
        return this.getCustomAttributes;
      case clsvWebSrvFunctionsEN.con_FunctionSignature:
        return this.functionSignature;
      case clsvWebSrvFunctionsEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsvWebSrvFunctionsEN.con_FuncTypeName:
        return this.funcTypeName;
      case clsvWebSrvFunctionsEN.con_ReturnType:
        return this.returnType;
      case clsvWebSrvFunctionsEN.con_ReturnTypeFullName:
        return this.returnTypeFullName;
      case clsvWebSrvFunctionsEN.con_IsKnownType:
        return this.isKnownType;
      case clsvWebSrvFunctionsEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsvWebSrvFunctionsEN.con_DataTypeName:
        return this.dataTypeName;
      case clsvWebSrvFunctionsEN.con_DataTypeAbbr:
        return this.dataTypeAbbr;
      case clsvWebSrvFunctionsEN.con_NetSysType:
        return this.netSysType;
      case clsvWebSrvFunctionsEN.con_CsType:
        return this.csType;
      case clsvWebSrvFunctionsEN.con_JavaType:
        return this.javaType;
      case clsvWebSrvFunctionsEN.con_JavaObjType:
        return this.javaObjType;
      case clsvWebSrvFunctionsEN.con_SwiftType:
        return this.swiftType;
      case clsvWebSrvFunctionsEN.con_IsNeedQuote:
        return this.isNeedQuote;
      case clsvWebSrvFunctionsEN.con_IsAsyncFunc:
        return this.isAsyncFunc;
      case clsvWebSrvFunctionsEN.con_SourceFunction:
        return this.sourceFunction;
      case clsvWebSrvFunctionsEN.con_IsGeneCode:
        return this.isGeneCode;
      case clsvWebSrvFunctionsEN.con_ReturnValueDescription:
        return this.returnValueDescription;
      case clsvWebSrvFunctionsEN.con_FuncParaLst:
        return this.funcParaLst;
      case clsvWebSrvFunctionsEN.con_UpdDate:
        return this.updDate;
      case clsvWebSrvFunctionsEN.con_UpdUser:
        return this.updUser;
      case clsvWebSrvFunctionsEN.con_Memo:
        return this.memo;
      case clsvWebSrvFunctionsEN.con_ClsName:
        return this.clsName;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vWebSrvFunctions]中不存在!`;
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
      case clsvWebSrvFunctionsEN.con_WebSrvFunctionId:
        this.webSrvFunctionId = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_WebSrvClassId:
        this.webSrvClassId = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_NameSpace:
        this.nameSpace = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_WebSrvUrl:
        this.webSrvUrl = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_FunctionName:
        this.functionName = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_GetCustomAttributes:
        this.getCustomAttributes = Number(strValue);
        break;
      case clsvWebSrvFunctionsEN.con_FunctionSignature:
        this.functionSignature = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_FuncTypeName:
        this.funcTypeName = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_ReturnType:
        this.returnType = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_ReturnTypeFullName:
        this.returnTypeFullName = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_IsKnownType:
        this.isKnownType = Boolean(strValue);
        break;
      case clsvWebSrvFunctionsEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_DataTypeName:
        this.dataTypeName = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_DataTypeAbbr:
        this.dataTypeAbbr = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_NetSysType:
        this.netSysType = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_CsType:
        this.csType = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_JavaType:
        this.javaType = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_JavaObjType:
        this.javaObjType = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_SwiftType:
        this.swiftType = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_IsNeedQuote:
        this.isNeedQuote = Boolean(strValue);
        break;
      case clsvWebSrvFunctionsEN.con_IsAsyncFunc:
        this.isAsyncFunc = Boolean(strValue);
        break;
      case clsvWebSrvFunctionsEN.con_SourceFunction:
        this.sourceFunction = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_IsGeneCode:
        this.isGeneCode = Boolean(strValue);
        break;
      case clsvWebSrvFunctionsEN.con_ReturnValueDescription:
        this.returnValueDescription = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_FuncParaLst:
        this.funcParaLst = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvWebSrvFunctionsEN.con_ClsName:
        this.clsName = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vWebSrvFunctions]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public webSrvFunctionId = ''; //函数Id
  public webSrvClassId = ''; //类Id
  public nameSpace = ''; //域名
  public webSrvUrl = ''; //WebSrv地址
  public funcModuleAgcId = ''; //功能模块Id
  public prjId = ''; //工程ID
  public functionName = ''; //功能名称
  public getCustomAttributes = 0; //GetCustomAttributes
  public functionSignature = ''; //函数签名
  public funcTypeId = ''; //函数类型Id
  public funcTypeName = ''; //函数类型名
  public returnType = ''; //返回类型
  public returnTypeFullName = ''; //返回类型全名
  public isKnownType = false; //是否已知类型
  public returnTypeId = ''; //返回类型ID
  public dataTypeName = ''; //数据类型名称
  public dataTypeAbbr = ''; //数据类型缩写
  public netSysType = ''; //NET系统类型
  public csType = ''; //CS类型
  public javaType = ''; //JAVA类型
  public javaObjType = ''; //JAVA对象类型
  public swiftType = ''; //SwiftType
  public isNeedQuote = false; //是否需要引号
  public isAsyncFunc = false; //是否异步函数
  public sourceFunction = ''; //来源函数
  public isGeneCode = false; //是否生成代码
  public returnValueDescription = ''; //返回值说明
  public funcParaLst = ''; //函数参数列表
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public clsName = ''; //类名

  /**
   * 常量:"WebSrvFunctionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WebSrvFunctionId(): string {
    return 'webSrvFunctionId';
  } //函数Id

  /**
   * 常量:"WebSrvClassId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WebSrvClassId(): string {
    return 'webSrvClassId';
  } //类Id

  /**
   * 常量:"NameSpace"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NameSpace(): string {
    return 'nameSpace';
  } //域名

  /**
   * 常量:"WebSrvUrl"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WebSrvUrl(): string {
    return 'webSrvUrl';
  } //WebSrv地址

  /**
   * 常量:"FuncModuleAgcId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"FunctionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionName(): string {
    return 'functionName';
  } //功能名称

  /**
   * 常量:"GetCustomAttributes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GetCustomAttributes(): string {
    return 'getCustomAttributes';
  } //GetCustomAttributes

  /**
   * 常量:"FunctionSignature"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionSignature(): string {
    return 'functionSignature';
  } //函数签名

  /**
   * 常量:"FuncTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id

  /**
   * 常量:"FuncTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncTypeName(): string {
    return 'funcTypeName';
  } //函数类型名

  /**
   * 常量:"ReturnType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnType(): string {
    return 'returnType';
  } //返回类型

  /**
   * 常量:"ReturnTypeFullName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnTypeFullName(): string {
    return 'returnTypeFullName';
  } //返回类型全名

  /**
   * 常量:"IsKnownType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsKnownType(): string {
    return 'isKnownType';
  } //是否已知类型

  /**
   * 常量:"ReturnTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnTypeId(): string {
    return 'returnTypeId';
  } //返回类型ID

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"DataTypeAbbr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeAbbr(): string {
    return 'dataTypeAbbr';
  } //数据类型缩写

  /**
   * 常量:"NetSysType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NetSysType(): string {
    return 'netSysType';
  } //NET系统类型

  /**
   * 常量:"CsType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CsType(): string {
    return 'csType';
  } //CS类型

  /**
   * 常量:"JavaType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_JavaType(): string {
    return 'javaType';
  } //JAVA类型

  /**
   * 常量:"JavaObjType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_JavaObjType(): string {
    return 'javaObjType';
  } //JAVA对象类型

  /**
   * 常量:"SwiftType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SwiftType(): string {
    return 'swiftType';
  } //SwiftType

  /**
   * 常量:"IsNeedQuote"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedQuote(): string {
    return 'isNeedQuote';
  } //是否需要引号

  /**
   * 常量:"IsAsyncFunc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsAsyncFunc(): string {
    return 'isAsyncFunc';
  } //是否异步函数

  /**
   * 常量:"SourceFunction"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SourceFunction(): string {
    return 'sourceFunction';
  } //来源函数

  /**
   * 常量:"IsGeneCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsGeneCode(): string {
    return 'isGeneCode';
  } //是否生成代码

  /**
   * 常量:"ReturnValueDescription"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnValueDescription(): string {
    return 'returnValueDescription';
  } //返回值说明

  /**
   * 常量:"FuncParaLst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncParaLst(): string {
    return 'funcParaLst';
  } //函数参数列表

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
   * 常量:"ClsName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClsName(): string {
    return 'clsName';
  } //类名

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
