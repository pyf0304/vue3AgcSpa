/**
 * 类名:clsFunction4CodeEN
 * 表名:Function4Code(00050386)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:25
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
 * 函数4Code(Function4Code)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsFunction4CodeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'Function4Code'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncId4Code'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 31;
  public static AttributeName = [
    'funcId4Code',
    'funcName4Code',
    'funcCHName4Code',
    'prevFuncId',
    'rootFuncId',
    'applicationTypeId',
    'funcGCTypeId',
    'functionSignature',
    'functionSignatureSim',
    'returnType',
    'clsName',
    'returnTypeFullName',
    'returnTypeId',
    'returnTypeNameCustom',
    'codeTypeId',
    'funcAccessModeId',
    'tabName',
    'tabId',
    'funcPurposeId',
    'funcTypeId',
    'getCustomAttributes',
    'sourceFunction',
    'isAsyncFunc',
    'isSysFunction',
    'orderNum',
    'prjId',
    'isTemplate',
    'updDate',
    'updUser',
    'memo',
    'usedTimes',
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
  private mstrFuncId4Code = ''; //函数Id4Code
  private mstrFuncName4Code = ''; //函数名4Code
  private mstrFuncCHName4Code = ''; //函数中文名4Code
  private mstrPrevFuncId = ''; //前函数Id
  private mstrRootFuncId = ''; //根函数Id
  private mintApplicationTypeId = 0; //应用程序类型ID
  private mstrFuncGCTypeId = ''; //函数生成代码类型Id
  private mstrFunctionSignature = ''; //函数签名
  private mstrFunctionSignatureSim = ''; //函数签名_Sim
  private mstrReturnType = ''; //返回类型
  private mstrClsName = ''; //类名
  private mstrReturnTypeFullName = ''; //返回类型全名
  private mstrReturnTypeId = ''; //返回类型ID
  private mstrReturnTypeNameCustom = ''; //定制返回类型名
  private mstrCodeTypeId = ''; //代码类型Id
  private mstrFuncAccessModeId = ''; //函数操作模式Id
  private mstrTabName = ''; //表名
  private mstrTabId = ''; //表ID
  private mstrFuncPurposeId = ''; //函数用途Id
  private mstrFuncTypeId = ''; //函数类型Id
  private mintGetCustomAttributes = 0; //GetCustomAttributes
  private mstrSourceFunction = ''; //来源函数
  private mbolIsAsyncFunc = false; //是否异步函数
  private mbolIsSysFunction = false; //是否系统函数
  private mintOrderNum = 0; //序号
  private mstrPrjId = ''; //工程Id
  private mbolIsTemplate = false; //是否模板
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明
  private mintUsedTimes = 0; //使用次数

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
   * 函数名4Code(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncName4Code(value: string) {
    if (value != undefined) {
      this.funcName4Code = value;
      this.hmProperty['funcName4Code'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数中文名4Code(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncCHName4Code(value: string) {
    if (value != undefined) {
      this.funcCHName4Code = value;
      this.hmProperty['funcCHName4Code'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 前函数Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrevFuncId(value: string) {
    if (value != undefined) {
      this.prevFuncId = value;
      this.hmProperty['prevFuncId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根函数Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRootFuncId(value: string) {
    if (value != undefined) {
      this.rootFuncId = value;
      this.hmProperty['rootFuncId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 应用程序类型ID(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeId(value: number) {
    if (value != undefined) {
      this.applicationTypeId = value;
      this.hmProperty['applicationTypeId'] = true;
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
   * 函数签名_Sim(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFunctionSignatureSim(value: string) {
    if (value != undefined) {
      this.functionSignatureSim = value;
      this.hmProperty['functionSignatureSim'] = true;
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
   * 类名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClsName(value: string) {
    if (value != undefined) {
      this.clsName = value;
      this.hmProperty['clsName'] = true;
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
   * 定制返回类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReturnTypeNameCustom(value: string) {
    if (value != undefined) {
      this.returnTypeNameCustom = value;
      this.hmProperty['returnTypeNameCustom'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 代码类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodeTypeId(value: string) {
    if (value != undefined) {
      this.codeTypeId = value;
      this.hmProperty['codeTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数操作模式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncAccessModeId(value: string) {
    if (value != undefined) {
      this.funcAccessModeId = value;
      this.hmProperty['funcAccessModeId'] = true;
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
   * 函数用途Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncPurposeId(value: string) {
    if (value != undefined) {
      this.funcPurposeId = value;
      this.hmProperty['funcPurposeId'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsFunction4CodeEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsFunction4CodeEN.con_FuncName4Code:
        return this.funcName4Code;
      case clsFunction4CodeEN.con_FuncCHName4Code:
        return this.funcCHName4Code;
      case clsFunction4CodeEN.con_PrevFuncId:
        return this.prevFuncId;
      case clsFunction4CodeEN.con_RootFuncId:
        return this.rootFuncId;
      case clsFunction4CodeEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsFunction4CodeEN.con_FuncGCTypeId:
        return this.funcGCTypeId;
      case clsFunction4CodeEN.con_FunctionSignature:
        return this.functionSignature;
      case clsFunction4CodeEN.con_FunctionSignatureSim:
        return this.functionSignatureSim;
      case clsFunction4CodeEN.con_ReturnType:
        return this.returnType;
      case clsFunction4CodeEN.con_ClsName:
        return this.clsName;
      case clsFunction4CodeEN.con_ReturnTypeFullName:
        return this.returnTypeFullName;
      case clsFunction4CodeEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsFunction4CodeEN.con_ReturnTypeNameCustom:
        return this.returnTypeNameCustom;
      case clsFunction4CodeEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsFunction4CodeEN.con_FuncAccessModeId:
        return this.funcAccessModeId;
      case clsFunction4CodeEN.con_TabName:
        return this.tabName;
      case clsFunction4CodeEN.con_TabId:
        return this.tabId;
      case clsFunction4CodeEN.con_FuncPurposeId:
        return this.funcPurposeId;
      case clsFunction4CodeEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsFunction4CodeEN.con_GetCustomAttributes:
        return this.getCustomAttributes;
      case clsFunction4CodeEN.con_SourceFunction:
        return this.sourceFunction;
      case clsFunction4CodeEN.con_IsAsyncFunc:
        return this.isAsyncFunc;
      case clsFunction4CodeEN.con_IsSysFunction:
        return this.isSysFunction;
      case clsFunction4CodeEN.con_OrderNum:
        return this.orderNum;
      case clsFunction4CodeEN.con_PrjId:
        return this.prjId;
      case clsFunction4CodeEN.con_IsTemplate:
        return this.isTemplate;
      case clsFunction4CodeEN.con_UpdDate:
        return this.updDate;
      case clsFunction4CodeEN.con_UpdUser:
        return this.updUser;
      case clsFunction4CodeEN.con_Memo:
        return this.memo;
      case clsFunction4CodeEN.con_UsedTimes:
        return this.usedTimes;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Function4Code]中不存在!`;
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
      case clsFunction4CodeEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        this.hmProperty['funcId4Code'] = true;
        break;
      case clsFunction4CodeEN.con_FuncName4Code:
        this.funcName4Code = strValue;
        this.hmProperty['funcName4Code'] = true;
        break;
      case clsFunction4CodeEN.con_FuncCHName4Code:
        this.funcCHName4Code = strValue;
        this.hmProperty['funcCHName4Code'] = true;
        break;
      case clsFunction4CodeEN.con_PrevFuncId:
        this.prevFuncId = strValue;
        this.hmProperty['prevFuncId'] = true;
        break;
      case clsFunction4CodeEN.con_RootFuncId:
        this.rootFuncId = strValue;
        this.hmProperty['rootFuncId'] = true;
        break;
      case clsFunction4CodeEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsFunction4CodeEN.con_FuncGCTypeId:
        this.funcGCTypeId = strValue;
        this.hmProperty['funcGCTypeId'] = true;
        break;
      case clsFunction4CodeEN.con_FunctionSignature:
        this.functionSignature = strValue;
        this.hmProperty['functionSignature'] = true;
        break;
      case clsFunction4CodeEN.con_FunctionSignatureSim:
        this.functionSignatureSim = strValue;
        this.hmProperty['functionSignatureSim'] = true;
        break;
      case clsFunction4CodeEN.con_ReturnType:
        this.returnType = strValue;
        this.hmProperty['returnType'] = true;
        break;
      case clsFunction4CodeEN.con_ClsName:
        this.clsName = strValue;
        this.hmProperty['clsName'] = true;
        break;
      case clsFunction4CodeEN.con_ReturnTypeFullName:
        this.returnTypeFullName = strValue;
        this.hmProperty['returnTypeFullName'] = true;
        break;
      case clsFunction4CodeEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        this.hmProperty['returnTypeId'] = true;
        break;
      case clsFunction4CodeEN.con_ReturnTypeNameCustom:
        this.returnTypeNameCustom = strValue;
        this.hmProperty['returnTypeNameCustom'] = true;
        break;
      case clsFunction4CodeEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        this.hmProperty['codeTypeId'] = true;
        break;
      case clsFunction4CodeEN.con_FuncAccessModeId:
        this.funcAccessModeId = strValue;
        this.hmProperty['funcAccessModeId'] = true;
        break;
      case clsFunction4CodeEN.con_TabName:
        this.tabName = strValue;
        this.hmProperty['tabName'] = true;
        break;
      case clsFunction4CodeEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsFunction4CodeEN.con_FuncPurposeId:
        this.funcPurposeId = strValue;
        this.hmProperty['funcPurposeId'] = true;
        break;
      case clsFunction4CodeEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        this.hmProperty['funcTypeId'] = true;
        break;
      case clsFunction4CodeEN.con_GetCustomAttributes:
        this.getCustomAttributes = Number(strValue);
        this.hmProperty['getCustomAttributes'] = true;
        break;
      case clsFunction4CodeEN.con_SourceFunction:
        this.sourceFunction = strValue;
        this.hmProperty['sourceFunction'] = true;
        break;
      case clsFunction4CodeEN.con_IsAsyncFunc:
        this.isAsyncFunc = Boolean(strValue);
        this.hmProperty['isAsyncFunc'] = true;
        break;
      case clsFunction4CodeEN.con_IsSysFunction:
        this.isSysFunction = Boolean(strValue);
        this.hmProperty['isSysFunction'] = true;
        break;
      case clsFunction4CodeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsFunction4CodeEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsFunction4CodeEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        this.hmProperty['isTemplate'] = true;
        break;
      case clsFunction4CodeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsFunction4CodeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsFunction4CodeEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsFunction4CodeEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        this.hmProperty['usedTimes'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Function4Code]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public funcId4Code = ''; //函数Id4Code
  public funcName4Code = ''; //函数名4Code
  public funcCHName4Code = ''; //函数中文名4Code
  public prevFuncId = ''; //前函数Id
  public rootFuncId = ''; //根函数Id
  public applicationTypeId = 0; //应用程序类型ID
  public funcGCTypeId = ''; //函数生成代码类型Id
  public functionSignature = ''; //函数签名
  public functionSignatureSim = ''; //函数签名_Sim
  public returnType = ''; //返回类型
  public clsName = ''; //类名
  public returnTypeFullName = ''; //返回类型全名
  public returnTypeId = ''; //返回类型ID
  public returnTypeNameCustom = ''; //定制返回类型名
  public codeTypeId = ''; //代码类型Id
  public funcAccessModeId = ''; //函数操作模式Id
  public tabName = ''; //表名
  public tabId = ''; //表ID
  public funcPurposeId = ''; //函数用途Id
  public funcTypeId = ''; //函数类型Id
  public getCustomAttributes = 0; //GetCustomAttributes
  public sourceFunction = ''; //来源函数
  public isAsyncFunc = false; //是否异步函数
  public isSysFunction = false; //是否系统函数
  public orderNum = 0; //序号
  public prjId = ''; //工程Id
  public isTemplate = false; //是否模板
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public usedTimes = 0; //使用次数

  /**
   * 常量:"FuncId4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncId4Code(): string {
    return 'funcId4Code';
  } //函数Id4Code

  /**
   * 常量:"FuncName4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncName4Code(): string {
    return 'funcName4Code';
  } //函数名4Code

  /**
   * 常量:"FuncCHName4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncCHName4Code(): string {
    return 'funcCHName4Code';
  } //函数中文名4Code

  /**
   * 常量:"PrevFuncId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrevFuncId(): string {
    return 'prevFuncId';
  } //前函数Id

  /**
   * 常量:"RootFuncId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RootFuncId(): string {
    return 'rootFuncId';
  } //根函数Id

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"FuncGCTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncGCTypeId(): string {
    return 'funcGCTypeId';
  } //函数生成代码类型Id

  /**
   * 常量:"FunctionSignature"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionSignature(): string {
    return 'functionSignature';
  } //函数签名

  /**
   * 常量:"FunctionSignatureSim"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionSignatureSim(): string {
    return 'functionSignatureSim';
  } //函数签名_Sim

  /**
   * 常量:"ReturnType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnType(): string {
    return 'returnType';
  } //返回类型

  /**
   * 常量:"ClsName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClsName(): string {
    return 'clsName';
  } //类名

  /**
   * 常量:"ReturnTypeFullName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnTypeFullName(): string {
    return 'returnTypeFullName';
  } //返回类型全名

  /**
   * 常量:"ReturnTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnTypeId(): string {
    return 'returnTypeId';
  } //返回类型ID

  /**
   * 常量:"ReturnTypeNameCustom"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnTypeNameCustom(): string {
    return 'returnTypeNameCustom';
  } //定制返回类型名

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"FuncAccessModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncAccessModeId(): string {
    return 'funcAccessModeId';
  } //函数操作模式Id

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FuncPurposeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncPurposeId(): string {
    return 'funcPurposeId';
  } //函数用途Id

  /**
   * 常量:"FuncTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id

  /**
   * 常量:"GetCustomAttributes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GetCustomAttributes(): string {
    return 'getCustomAttributes';
  } //GetCustomAttributes

  /**
   * 常量:"SourceFunction"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SourceFunction(): string {
    return 'sourceFunction';
  } //来源函数

  /**
   * 常量:"IsAsyncFunc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsAsyncFunc(): string {
    return 'isAsyncFunc';
  } //是否异步函数

  /**
   * 常量:"IsSysFunction"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsSysFunction(): string {
    return 'isSysFunction';
  } //是否系统函数

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
  } //工程Id

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

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
   * 常量:"UsedTimes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UsedTimes(): string {
    return 'usedTimes';
  } //使用次数

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
    //return propName in new clsFunction4CodeEN();
    const instance = new clsFunction4CodeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
