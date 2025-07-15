/**
 * 类名:clsWebSrvFunctionsEN
 * 表名:WebSrvFunctions(00050342)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:17
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
 * WebSrv函数(WebSrvFunctions)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsWebSrvFunctionsEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'WebSrvFunctions'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'WebSrvFunctionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 19;
  public static AttributeName = [
    'webSrvFunctionId',
    'webSrvClassId',
    'functionName',
    'getCustomAttributes',
    'functionSignature',
    'funcTypeId',
    'returnType',
    'returnTypeFullName',
    'isKnownType',
    'returnTypeId',
    'isAsyncFunc',
    'sourceFunction',
    'isGeneCode',
    'returnValueDescription',
    'funcParaLst',
    'isSysFunction',
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
  private mstrWebSrvFunctionId = ''; //函数Id
  private mstrWebSrvClassId = ''; //类Id
  private mstrFunctionName = ''; //功能名称
  private mintGetCustomAttributes = 0; //GetCustomAttributes
  private mstrFunctionSignature = ''; //函数签名
  private mstrFuncTypeId = ''; //函数类型Id
  private mstrReturnType = ''; //返回类型
  private mstrReturnTypeFullName = ''; //返回类型全名
  private mbolIsKnownType = false; //是否已知类型
  private mstrReturnTypeId = ''; //返回类型ID
  private mbolIsAsyncFunc = false; //是否异步函数
  private mstrSourceFunction = ''; //来源函数
  private mbolIsGeneCode = false; //是否生成代码
  private mstrReturnValueDescription = ''; //返回值说明
  private mstrFuncParaLst = ''; //函数参数列表
  private mbolIsSysFunction = false; //是否系统函数
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 函数Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWebSrvFunctionId(value: string) {
    if (value != undefined) {
      this.webSrvFunctionId = value;
      this.hmProperty['webSrvFunctionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 类Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWebSrvClassId(value: string) {
    if (value != undefined) {
      this.webSrvClassId = value;
      this.hmProperty['webSrvClassId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能名称(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFunctionName(value: string) {
    if (value != undefined) {
      this.functionName = value;
      this.hmProperty['functionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * GetCustomAttributes(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGetCustomAttributes(value: number) {
    if (value != undefined) {
      this.getCustomAttributes = value;
      this.hmProperty['getCustomAttributes'] = true;
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
   * 返回类型(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReturnType(value: string) {
    if (value != undefined) {
      this.returnType = value;
      this.hmProperty['returnType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 返回类型全名(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReturnTypeFullName(value: string) {
    if (value != undefined) {
      this.returnTypeFullName = value;
      this.hmProperty['returnTypeFullName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否已知类型(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsKnownType(value: boolean) {
    if (value != undefined) {
      this.isKnownType = value;
      this.hmProperty['isKnownType'] = true;
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
   * 是否异步函数(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsAsyncFunc(value: boolean) {
    if (value != undefined) {
      this.isAsyncFunc = value;
      this.hmProperty['isAsyncFunc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 来源函数(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSourceFunction(value: string) {
    if (value != undefined) {
      this.sourceFunction = value;
      this.hmProperty['sourceFunction'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否生成代码(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsGeneCode(value: boolean) {
    if (value != undefined) {
      this.isGeneCode = value;
      this.hmProperty['isGeneCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 返回值说明(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReturnValueDescription(value: string) {
    if (value != undefined) {
      this.returnValueDescription = value;
      this.hmProperty['returnValueDescription'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数参数列表(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncParaLst(value: string) {
    if (value != undefined) {
      this.funcParaLst = value;
      this.hmProperty['funcParaLst'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否系统函数(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSysFunction(value: boolean) {
    if (value != undefined) {
      this.isSysFunction = value;
      this.hmProperty['isSysFunction'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsWebSrvFunctionsEN.con_WebSrvFunctionId:
        return this.webSrvFunctionId;
      case clsWebSrvFunctionsEN.con_WebSrvClassId:
        return this.webSrvClassId;
      case clsWebSrvFunctionsEN.con_FunctionName:
        return this.functionName;
      case clsWebSrvFunctionsEN.con_GetCustomAttributes:
        return this.getCustomAttributes;
      case clsWebSrvFunctionsEN.con_FunctionSignature:
        return this.functionSignature;
      case clsWebSrvFunctionsEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsWebSrvFunctionsEN.con_ReturnType:
        return this.returnType;
      case clsWebSrvFunctionsEN.con_ReturnTypeFullName:
        return this.returnTypeFullName;
      case clsWebSrvFunctionsEN.con_IsKnownType:
        return this.isKnownType;
      case clsWebSrvFunctionsEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsWebSrvFunctionsEN.con_IsAsyncFunc:
        return this.isAsyncFunc;
      case clsWebSrvFunctionsEN.con_SourceFunction:
        return this.sourceFunction;
      case clsWebSrvFunctionsEN.con_IsGeneCode:
        return this.isGeneCode;
      case clsWebSrvFunctionsEN.con_ReturnValueDescription:
        return this.returnValueDescription;
      case clsWebSrvFunctionsEN.con_FuncParaLst:
        return this.funcParaLst;
      case clsWebSrvFunctionsEN.con_IsSysFunction:
        return this.isSysFunction;
      case clsWebSrvFunctionsEN.con_UpdDate:
        return this.updDate;
      case clsWebSrvFunctionsEN.con_UpdUser:
        return this.updUser;
      case clsWebSrvFunctionsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[WebSrvFunctions]中不存在!`;
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
      case clsWebSrvFunctionsEN.con_WebSrvFunctionId:
        this.webSrvFunctionId = strValue;
        this.hmProperty['webSrvFunctionId'] = true;
        break;
      case clsWebSrvFunctionsEN.con_WebSrvClassId:
        this.webSrvClassId = strValue;
        this.hmProperty['webSrvClassId'] = true;
        break;
      case clsWebSrvFunctionsEN.con_FunctionName:
        this.functionName = strValue;
        this.hmProperty['functionName'] = true;
        break;
      case clsWebSrvFunctionsEN.con_GetCustomAttributes:
        this.getCustomAttributes = Number(strValue);
        this.hmProperty['getCustomAttributes'] = true;
        break;
      case clsWebSrvFunctionsEN.con_FunctionSignature:
        this.functionSignature = strValue;
        this.hmProperty['functionSignature'] = true;
        break;
      case clsWebSrvFunctionsEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        this.hmProperty['funcTypeId'] = true;
        break;
      case clsWebSrvFunctionsEN.con_ReturnType:
        this.returnType = strValue;
        this.hmProperty['returnType'] = true;
        break;
      case clsWebSrvFunctionsEN.con_ReturnTypeFullName:
        this.returnTypeFullName = strValue;
        this.hmProperty['returnTypeFullName'] = true;
        break;
      case clsWebSrvFunctionsEN.con_IsKnownType:
        this.isKnownType = Boolean(strValue);
        this.hmProperty['isKnownType'] = true;
        break;
      case clsWebSrvFunctionsEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        this.hmProperty['returnTypeId'] = true;
        break;
      case clsWebSrvFunctionsEN.con_IsAsyncFunc:
        this.isAsyncFunc = Boolean(strValue);
        this.hmProperty['isAsyncFunc'] = true;
        break;
      case clsWebSrvFunctionsEN.con_SourceFunction:
        this.sourceFunction = strValue;
        this.hmProperty['sourceFunction'] = true;
        break;
      case clsWebSrvFunctionsEN.con_IsGeneCode:
        this.isGeneCode = Boolean(strValue);
        this.hmProperty['isGeneCode'] = true;
        break;
      case clsWebSrvFunctionsEN.con_ReturnValueDescription:
        this.returnValueDescription = strValue;
        this.hmProperty['returnValueDescription'] = true;
        break;
      case clsWebSrvFunctionsEN.con_FuncParaLst:
        this.funcParaLst = strValue;
        this.hmProperty['funcParaLst'] = true;
        break;
      case clsWebSrvFunctionsEN.con_IsSysFunction:
        this.isSysFunction = Boolean(strValue);
        this.hmProperty['isSysFunction'] = true;
        break;
      case clsWebSrvFunctionsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsWebSrvFunctionsEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsWebSrvFunctionsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[WebSrvFunctions]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public functionName = ''; //功能名称
  public getCustomAttributes = 0; //GetCustomAttributes
  public functionSignature = ''; //函数签名
  public funcTypeId = ''; //函数类型Id
  public returnType = ''; //返回类型
  public returnTypeFullName = ''; //返回类型全名
  public isKnownType = false; //是否已知类型
  public returnTypeId = ''; //返回类型ID
  public isAsyncFunc = false; //是否异步函数
  public sourceFunction = ''; //来源函数
  public isGeneCode = false; //是否生成代码
  public returnValueDescription = ''; //返回值说明
  public funcParaLst = ''; //函数参数列表
  public isSysFunction = false; //是否系统函数
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"WebSrvFunctionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WebSrvFunctionId(): string {
    return 'webSrvFunctionId';
  } //函数Id

  /**
   * 常量:"WebSrvClassId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WebSrvClassId(): string {
    return 'webSrvClassId';
  } //类Id

  /**
   * 常量:"FunctionName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionName(): string {
    return 'functionName';
  } //功能名称

  /**
   * 常量:"GetCustomAttributes"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GetCustomAttributes(): string {
    return 'getCustomAttributes';
  } //GetCustomAttributes

  /**
   * 常量:"FunctionSignature"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionSignature(): string {
    return 'functionSignature';
  } //函数签名

  /**
   * 常量:"FuncTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id

  /**
   * 常量:"ReturnType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnType(): string {
    return 'returnType';
  } //返回类型

  /**
   * 常量:"ReturnTypeFullName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnTypeFullName(): string {
    return 'returnTypeFullName';
  } //返回类型全名

  /**
   * 常量:"IsKnownType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsKnownType(): string {
    return 'isKnownType';
  } //是否已知类型

  /**
   * 常量:"ReturnTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnTypeId(): string {
    return 'returnTypeId';
  } //返回类型ID

  /**
   * 常量:"IsAsyncFunc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsAsyncFunc(): string {
    return 'isAsyncFunc';
  } //是否异步函数

  /**
   * 常量:"SourceFunction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SourceFunction(): string {
    return 'sourceFunction';
  } //来源函数

  /**
   * 常量:"IsGeneCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsGeneCode(): string {
    return 'isGeneCode';
  } //是否生成代码

  /**
   * 常量:"ReturnValueDescription"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnValueDescription(): string {
    return 'returnValueDescription';
  } //返回值说明

  /**
   * 常量:"FuncParaLst"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncParaLst(): string {
    return 'funcParaLst';
  } //函数参数列表

  /**
   * 常量:"IsSysFunction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSysFunction(): string {
    return 'isSysFunction';
  } //是否系统函数

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
