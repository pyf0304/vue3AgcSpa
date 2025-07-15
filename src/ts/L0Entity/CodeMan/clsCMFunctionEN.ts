/**
 * 类名:clsCMFunctionEN
 * 表名:CMFunction(00050502)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:19
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * CM函数(CMFunction)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCMFunctionEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CMFunction'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CmFunctionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 30;
  public static AttributeName = [
    'cmFunctionId',
    'cmClassId',
    'functionName',
    'funcContent',
    'keyWords',
    'funcParaLst',
    'funcComments',
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
    'isSysFunction',
    'getCustomAttributes',
    'classNameLst',
    'updDate',
    'updUser',
    'memo',
    'isSynchToServer',
    'synchToServerDate',
    'synchToServerUser',
    'isSynchToClient',
    'synchToClientDate',
    'synchToClientUser',
    'synSource',
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
  private mstrCmFunctionId = ''; //函数Id
  private mstrCmClassId = ''; //类Id
  private mstrFunctionName = ''; //功能名称
  private mstrFuncContent = ''; //函数内容
  private mstrKeyWords = ''; //关键字
  private mstrFuncParaLst = ''; //函数参数列表
  private mstrFuncComments = ''; //函数注释
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
  private mbolIsSysFunction = false; //是否系统函数
  private mintGetCustomAttributes = 0; //GetCustomAttributes
  private mstrClassNameLst = ''; //类名列表
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明
  private mbolIsSynchToServer = false; //是否同步到Server
  private mstrSynchToServerDate = ''; //同步到Server日期
  private mstrSynchToServerUser = ''; //同步到Server用户
  private mbolIsSynchToClient = false; //是否同步到Client
  private mstrSynchToClientDate = ''; //同步到Client库日期
  private mstrSynchToClientUser = ''; //同步到Client库用户
  private mstrSynSource = ''; //同步来源

  /**
   * 函数Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmFunctionId(value: string) {
    if (value != undefined) {
      this.cmFunctionId = value;
      this.hmProperty['cmFunctionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 类Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmClassId(value: string) {
    if (value != undefined) {
      this.cmClassId = value;
      this.hmProperty['cmClassId'] = true;
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
   * 函数内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncContent(value: string) {
    if (value != undefined) {
      this.funcContent = value;
      this.hmProperty['funcContent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关键字(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyWords(value: string) {
    if (value != undefined) {
      this.keyWords = value;
      this.hmProperty['keyWords'] = true;
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
   * 函数注释(说明:;字段类型:text;字段长度:5000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncComments(value: string) {
    if (value != undefined) {
      this.funcComments = value;
      this.hmProperty['funcComments'] = true;
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
   * 类名列表(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClassNameLst(value: string) {
    if (value != undefined) {
      this.classNameLst = value;
      this.hmProperty['classNameLst'] = true;
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
   * 是否同步到Server(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSynchToServer(value: boolean) {
    if (value != undefined) {
      this.isSynchToServer = value;
      this.hmProperty['isSynchToServer'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 同步到Server日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSynchToServerDate(value: string) {
    if (value != undefined) {
      this.synchToServerDate = value;
      this.hmProperty['synchToServerDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 同步到Server用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSynchToServerUser(value: string) {
    if (value != undefined) {
      this.synchToServerUser = value;
      this.hmProperty['synchToServerUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否同步到Client(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSynchToClient(value: boolean) {
    if (value != undefined) {
      this.isSynchToClient = value;
      this.hmProperty['isSynchToClient'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 同步到Client库日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSynchToClientDate(value: string) {
    if (value != undefined) {
      this.synchToClientDate = value;
      this.hmProperty['synchToClientDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 同步到Client库用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSynchToClientUser(value: string) {
    if (value != undefined) {
      this.synchToClientUser = value;
      this.hmProperty['synchToClientUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 同步来源(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSynSource(value: string) {
    if (value != undefined) {
      this.synSource = value;
      this.hmProperty['synSource'] = true;
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
      case clsCMFunctionEN.con_CmFunctionId:
        return this.cmFunctionId;
      case clsCMFunctionEN.con_CmClassId:
        return this.cmClassId;
      case clsCMFunctionEN.con_FunctionName:
        return this.functionName;
      case clsCMFunctionEN.con_FuncContent:
        return this.funcContent;
      case clsCMFunctionEN.con_KeyWords:
        return this.keyWords;
      case clsCMFunctionEN.con_FuncParaLst:
        return this.funcParaLst;
      case clsCMFunctionEN.con_FuncComments:
        return this.funcComments;
      case clsCMFunctionEN.con_FunctionSignature:
        return this.functionSignature;
      case clsCMFunctionEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsCMFunctionEN.con_ReturnType:
        return this.returnType;
      case clsCMFunctionEN.con_ReturnTypeFullName:
        return this.returnTypeFullName;
      case clsCMFunctionEN.con_IsKnownType:
        return this.isKnownType;
      case clsCMFunctionEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsCMFunctionEN.con_IsAsyncFunc:
        return this.isAsyncFunc;
      case clsCMFunctionEN.con_SourceFunction:
        return this.sourceFunction;
      case clsCMFunctionEN.con_IsGeneCode:
        return this.isGeneCode;
      case clsCMFunctionEN.con_ReturnValueDescription:
        return this.returnValueDescription;
      case clsCMFunctionEN.con_IsSysFunction:
        return this.isSysFunction;
      case clsCMFunctionEN.con_GetCustomAttributes:
        return this.getCustomAttributes;
      case clsCMFunctionEN.con_ClassNameLst:
        return this.classNameLst;
      case clsCMFunctionEN.con_UpdDate:
        return this.updDate;
      case clsCMFunctionEN.con_UpdUser:
        return this.updUser;
      case clsCMFunctionEN.con_Memo:
        return this.memo;
      case clsCMFunctionEN.con_IsSynchToServer:
        return this.isSynchToServer;
      case clsCMFunctionEN.con_SynchToServerDate:
        return this.synchToServerDate;
      case clsCMFunctionEN.con_SynchToServerUser:
        return this.synchToServerUser;
      case clsCMFunctionEN.con_IsSynchToClient:
        return this.isSynchToClient;
      case clsCMFunctionEN.con_SynchToClientDate:
        return this.synchToClientDate;
      case clsCMFunctionEN.con_SynchToClientUser:
        return this.synchToClientUser;
      case clsCMFunctionEN.con_SynSource:
        return this.synSource;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMFunction]中不存在!`;
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
      case clsCMFunctionEN.con_CmFunctionId:
        this.cmFunctionId = strValue;
        this.hmProperty['cmFunctionId'] = true;
        break;
      case clsCMFunctionEN.con_CmClassId:
        this.cmClassId = strValue;
        this.hmProperty['cmClassId'] = true;
        break;
      case clsCMFunctionEN.con_FunctionName:
        this.functionName = strValue;
        this.hmProperty['functionName'] = true;
        break;
      case clsCMFunctionEN.con_FuncContent:
        this.funcContent = strValue;
        this.hmProperty['funcContent'] = true;
        break;
      case clsCMFunctionEN.con_KeyWords:
        this.keyWords = strValue;
        this.hmProperty['keyWords'] = true;
        break;
      case clsCMFunctionEN.con_FuncParaLst:
        this.funcParaLst = strValue;
        this.hmProperty['funcParaLst'] = true;
        break;
      case clsCMFunctionEN.con_FuncComments:
        this.funcComments = strValue;
        this.hmProperty['funcComments'] = true;
        break;
      case clsCMFunctionEN.con_FunctionSignature:
        this.functionSignature = strValue;
        this.hmProperty['functionSignature'] = true;
        break;
      case clsCMFunctionEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        this.hmProperty['funcTypeId'] = true;
        break;
      case clsCMFunctionEN.con_ReturnType:
        this.returnType = strValue;
        this.hmProperty['returnType'] = true;
        break;
      case clsCMFunctionEN.con_ReturnTypeFullName:
        this.returnTypeFullName = strValue;
        this.hmProperty['returnTypeFullName'] = true;
        break;
      case clsCMFunctionEN.con_IsKnownType:
        this.isKnownType = Boolean(strValue);
        this.hmProperty['isKnownType'] = true;
        break;
      case clsCMFunctionEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        this.hmProperty['returnTypeId'] = true;
        break;
      case clsCMFunctionEN.con_IsAsyncFunc:
        this.isAsyncFunc = Boolean(strValue);
        this.hmProperty['isAsyncFunc'] = true;
        break;
      case clsCMFunctionEN.con_SourceFunction:
        this.sourceFunction = strValue;
        this.hmProperty['sourceFunction'] = true;
        break;
      case clsCMFunctionEN.con_IsGeneCode:
        this.isGeneCode = Boolean(strValue);
        this.hmProperty['isGeneCode'] = true;
        break;
      case clsCMFunctionEN.con_ReturnValueDescription:
        this.returnValueDescription = strValue;
        this.hmProperty['returnValueDescription'] = true;
        break;
      case clsCMFunctionEN.con_IsSysFunction:
        this.isSysFunction = Boolean(strValue);
        this.hmProperty['isSysFunction'] = true;
        break;
      case clsCMFunctionEN.con_GetCustomAttributes:
        this.getCustomAttributes = Number(strValue);
        this.hmProperty['getCustomAttributes'] = true;
        break;
      case clsCMFunctionEN.con_ClassNameLst:
        this.classNameLst = strValue;
        this.hmProperty['classNameLst'] = true;
        break;
      case clsCMFunctionEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCMFunctionEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCMFunctionEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsCMFunctionEN.con_IsSynchToServer:
        this.isSynchToServer = Boolean(strValue);
        this.hmProperty['isSynchToServer'] = true;
        break;
      case clsCMFunctionEN.con_SynchToServerDate:
        this.synchToServerDate = strValue;
        this.hmProperty['synchToServerDate'] = true;
        break;
      case clsCMFunctionEN.con_SynchToServerUser:
        this.synchToServerUser = strValue;
        this.hmProperty['synchToServerUser'] = true;
        break;
      case clsCMFunctionEN.con_IsSynchToClient:
        this.isSynchToClient = Boolean(strValue);
        this.hmProperty['isSynchToClient'] = true;
        break;
      case clsCMFunctionEN.con_SynchToClientDate:
        this.synchToClientDate = strValue;
        this.hmProperty['synchToClientDate'] = true;
        break;
      case clsCMFunctionEN.con_SynchToClientUser:
        this.synchToClientUser = strValue;
        this.hmProperty['synchToClientUser'] = true;
        break;
      case clsCMFunctionEN.con_SynSource:
        this.synSource = strValue;
        this.hmProperty['synSource'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMFunction]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public cmFunctionId = ''; //函数Id
  public cmClassId = ''; //类Id
  public functionName = ''; //功能名称
  public funcContent = ''; //函数内容
  public keyWords = ''; //关键字
  public funcParaLst = ''; //函数参数列表
  public funcComments = ''; //函数注释
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
  public isSysFunction = false; //是否系统函数
  public getCustomAttributes = 0; //GetCustomAttributes
  public classNameLst = ''; //类名列表
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public isSynchToServer = false; //是否同步到Server
  public synchToServerDate = ''; //同步到Server日期
  public synchToServerUser = ''; //同步到Server用户
  public isSynchToClient = false; //是否同步到Client
  public synchToClientDate = ''; //同步到Client库日期
  public synchToClientUser = ''; //同步到Client库用户
  public synSource = ''; //同步来源

  /**
   * 常量:"CmFunctionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CmFunctionId(): string {
    return 'cmFunctionId';
  } //函数Id

  /**
   * 常量:"CmClassId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CmClassId(): string {
    return 'cmClassId';
  } //类Id

  /**
   * 常量:"FunctionName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionName(): string {
    return 'functionName';
  } //功能名称

  /**
   * 常量:"FuncContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncContent(): string {
    return 'funcContent';
  } //函数内容

  /**
   * 常量:"KeyWords"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_KeyWords(): string {
    return 'keyWords';
  } //关键字

  /**
   * 常量:"FuncParaLst"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncParaLst(): string {
    return 'funcParaLst';
  } //函数参数列表

  /**
   * 常量:"FuncComments"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncComments(): string {
    return 'funcComments';
  } //函数注释

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
   * 常量:"IsSysFunction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSysFunction(): string {
    return 'isSysFunction';
  } //是否系统函数

  /**
   * 常量:"GetCustomAttributes"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GetCustomAttributes(): string {
    return 'getCustomAttributes';
  } //GetCustomAttributes

  /**
   * 常量:"ClassNameLst"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ClassNameLst(): string {
    return 'classNameLst';
  } //类名列表

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
   * 常量:"IsSynchToServer"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSynchToServer(): string {
    return 'isSynchToServer';
  } //是否同步到Server

  /**
   * 常量:"SynchToServerDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SynchToServerDate(): string {
    return 'synchToServerDate';
  } //同步到Server日期

  /**
   * 常量:"SynchToServerUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SynchToServerUser(): string {
    return 'synchToServerUser';
  } //同步到Server用户

  /**
   * 常量:"IsSynchToClient"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSynchToClient(): string {
    return 'isSynchToClient';
  } //是否同步到Client

  /**
   * 常量:"SynchToClientDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SynchToClientDate(): string {
    return 'synchToClientDate';
  } //同步到Client库日期

  /**
   * 常量:"SynchToClientUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SynchToClientUser(): string {
    return 'synchToClientUser';
  } //同步到Client库用户

  /**
   * 常量:"SynSource"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SynSource(): string {
    return 'synSource';
  } //同步来源

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
