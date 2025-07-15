/**
 * 类名:clsvFunction4CodeEN
 * 表名:vFunction4Code(00050387)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:37
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
 * v函数4Code(vFunction4Code)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFunction4CodeEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFunction4Code'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncId4Code'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 39;
  public static AttributeName = [
    'funcId4Code',
    'funcName4Code',
    'funcCHName4Code',
    'prevFuncId',
    'rootFuncId',
    'applicationTypeId',
    'applicationTypeName',
    'funcGCTypeId',
    'funcGCTypeName',
    'funcGCTypeENName',
    'functionSignature',
    'functionSignatureSim',
    'returnType',
    'returnTypeId',
    'returnTypeNameCustom',
    'codeTypeId',
    'codeTypeName',
    'progLangTypeId',
    'funcAccessModeId',
    'funcAccessModeName',
    'tabName',
    'tabId',
    'funcPurposeId',
    'funcPurposeName',
    'funcTypeId',
    'funcTypeName',
    'isAsyncFunc',
    'isSysFunction',
    'orderNum',
    'prjId',
    'updDate',
    'updUser',
    'memo',
    'returnTypeName',
    'tabName2',
    'func4GCCount',
    'paraNum',
    'featureCount',
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
      case clsvFunction4CodeEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsvFunction4CodeEN.con_FuncName4Code:
        return this.funcName4Code;
      case clsvFunction4CodeEN.con_FuncCHName4Code:
        return this.funcCHName4Code;
      case clsvFunction4CodeEN.con_PrevFuncId:
        return this.prevFuncId;
      case clsvFunction4CodeEN.con_RootFuncId:
        return this.rootFuncId;
      case clsvFunction4CodeEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsvFunction4CodeEN.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsvFunction4CodeEN.con_FuncGCTypeId:
        return this.funcGCTypeId;
      case clsvFunction4CodeEN.con_FuncGCTypeName:
        return this.funcGCTypeName;
      case clsvFunction4CodeEN.con_FuncGCTypeENName:
        return this.funcGCTypeENName;
      case clsvFunction4CodeEN.con_FunctionSignature:
        return this.functionSignature;
      case clsvFunction4CodeEN.con_FunctionSignatureSim:
        return this.functionSignatureSim;
      case clsvFunction4CodeEN.con_ReturnType:
        return this.returnType;
      case clsvFunction4CodeEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsvFunction4CodeEN.con_ReturnTypeNameCustom:
        return this.returnTypeNameCustom;
      case clsvFunction4CodeEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsvFunction4CodeEN.con_CodeTypeName:
        return this.codeTypeName;
      case clsvFunction4CodeEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvFunction4CodeEN.con_FuncAccessModeId:
        return this.funcAccessModeId;
      case clsvFunction4CodeEN.con_FuncAccessModeName:
        return this.funcAccessModeName;
      case clsvFunction4CodeEN.con_TabName:
        return this.tabName;
      case clsvFunction4CodeEN.con_TabId:
        return this.tabId;
      case clsvFunction4CodeEN.con_FuncPurposeId:
        return this.funcPurposeId;
      case clsvFunction4CodeEN.con_FuncPurposeName:
        return this.funcPurposeName;
      case clsvFunction4CodeEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsvFunction4CodeEN.con_FuncTypeName:
        return this.funcTypeName;
      case clsvFunction4CodeEN.con_IsAsyncFunc:
        return this.isAsyncFunc;
      case clsvFunction4CodeEN.con_IsSysFunction:
        return this.isSysFunction;
      case clsvFunction4CodeEN.con_OrderNum:
        return this.orderNum;
      case clsvFunction4CodeEN.con_PrjId:
        return this.prjId;
      case clsvFunction4CodeEN.con_UpdDate:
        return this.updDate;
      case clsvFunction4CodeEN.con_UpdUser:
        return this.updUser;
      case clsvFunction4CodeEN.con_Memo:
        return this.memo;
      case clsvFunction4CodeEN.con_ReturnTypeName:
        return this.returnTypeName;
      case clsvFunction4CodeEN.con_TabName2:
        return this.tabName2;
      case clsvFunction4CodeEN.con_Func4GCCount:
        return this.func4GCCount;
      case clsvFunction4CodeEN.con_ParaNum:
        return this.paraNum;
      case clsvFunction4CodeEN.con_FeatureCount:
        return this.featureCount;
      case clsvFunction4CodeEN.con_ClsName:
        return this.clsName;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4Code]中不存在!`;
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
      case clsvFunction4CodeEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncName4Code:
        this.funcName4Code = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncCHName4Code:
        this.funcCHName4Code = strValue;
        break;
      case clsvFunction4CodeEN.con_PrevFuncId:
        this.prevFuncId = strValue;
        break;
      case clsvFunction4CodeEN.con_RootFuncId:
        this.rootFuncId = strValue;
        break;
      case clsvFunction4CodeEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        break;
      case clsvFunction4CodeEN.con_ApplicationTypeName:
        this.applicationTypeName = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncGCTypeId:
        this.funcGCTypeId = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncGCTypeName:
        this.funcGCTypeName = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncGCTypeENName:
        this.funcGCTypeENName = strValue;
        break;
      case clsvFunction4CodeEN.con_FunctionSignature:
        this.functionSignature = strValue;
        break;
      case clsvFunction4CodeEN.con_FunctionSignatureSim:
        this.functionSignatureSim = strValue;
        break;
      case clsvFunction4CodeEN.con_ReturnType:
        this.returnType = strValue;
        break;
      case clsvFunction4CodeEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        break;
      case clsvFunction4CodeEN.con_ReturnTypeNameCustom:
        this.returnTypeNameCustom = strValue;
        break;
      case clsvFunction4CodeEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        break;
      case clsvFunction4CodeEN.con_CodeTypeName:
        this.codeTypeName = strValue;
        break;
      case clsvFunction4CodeEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncAccessModeId:
        this.funcAccessModeId = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncAccessModeName:
        this.funcAccessModeName = strValue;
        break;
      case clsvFunction4CodeEN.con_TabName:
        this.tabName = strValue;
        break;
      case clsvFunction4CodeEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncPurposeId:
        this.funcPurposeId = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncPurposeName:
        this.funcPurposeName = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        break;
      case clsvFunction4CodeEN.con_FuncTypeName:
        this.funcTypeName = strValue;
        break;
      case clsvFunction4CodeEN.con_IsAsyncFunc:
        this.isAsyncFunc = Boolean(strValue);
        break;
      case clsvFunction4CodeEN.con_IsSysFunction:
        this.isSysFunction = Boolean(strValue);
        break;
      case clsvFunction4CodeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvFunction4CodeEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvFunction4CodeEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvFunction4CodeEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvFunction4CodeEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvFunction4CodeEN.con_ReturnTypeName:
        this.returnTypeName = strValue;
        break;
      case clsvFunction4CodeEN.con_TabName2:
        this.tabName2 = strValue;
        break;
      case clsvFunction4CodeEN.con_Func4GCCount:
        this.func4GCCount = Number(strValue);
        break;
      case clsvFunction4CodeEN.con_ParaNum:
        this.paraNum = Number(strValue);
        break;
      case clsvFunction4CodeEN.con_FeatureCount:
        this.featureCount = Number(strValue);
        break;
      case clsvFunction4CodeEN.con_ClsName:
        this.clsName = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4Code]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public applicationTypeName = ''; //应用程序类型名称
  public funcGCTypeId = ''; //函数生成代码类型Id
  public funcGCTypeName = ''; //函数生成代码类型名
  public funcGCTypeENName = ''; //函数生成代码类型英文名
  public functionSignature = ''; //函数签名
  public functionSignatureSim = ''; //函数签名_Sim
  public returnType = ''; //返回类型
  public returnTypeId = ''; //返回类型ID
  public returnTypeNameCustom = ''; //定制返回类型名
  public codeTypeId = ''; //代码类型Id
  public codeTypeName = ''; //代码类型名
  public progLangTypeId = ''; //编程语言类型Id
  public funcAccessModeId = ''; //函数操作模式Id
  public funcAccessModeName = ''; //函数操作模式名
  public tabName = ''; //表名
  public tabId = ''; //表ID
  public funcPurposeId = ''; //函数用途Id
  public funcPurposeName = ''; //函数用途名
  public funcTypeId = ''; //函数类型Id
  public funcTypeName = ''; //函数类型名
  public isAsyncFunc = false; //是否异步函数
  public isSysFunction = false; //是否系统函数
  public orderNum = 0; //序号
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public returnTypeName = ''; //返回类型名
  public tabName2 = ''; //TabName2
  public func4GCCount = 0; //函数4GC数
  public paraNum = 0; //参数个数
  public featureCount = 0; //功能数
  public clsName = ''; //类名

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
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"FuncGCTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncGCTypeId(): string {
    return 'funcGCTypeId';
  } //函数生成代码类型Id

  /**
   * 常量:"FuncGCTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncGCTypeName(): string {
    return 'funcGCTypeName';
  } //函数生成代码类型名

  /**
   * 常量:"FuncGCTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncGCTypeENName(): string {
    return 'funcGCTypeENName';
  } //函数生成代码类型英文名

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
   * 常量:"CodeTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"FuncAccessModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncAccessModeId(): string {
    return 'funcAccessModeId';
  } //函数操作模式Id

  /**
   * 常量:"FuncAccessModeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncAccessModeName(): string {
    return 'funcAccessModeName';
  } //函数操作模式名

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
   * 常量:"FuncPurposeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncPurposeName(): string {
    return 'funcPurposeName';
  } //函数用途名

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
  } //工程ID

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
   * 常量:"ReturnTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnTypeName(): string {
    return 'returnTypeName';
  } //返回类型名

  /**
   * 常量:"TabName2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabName2(): string {
    return 'tabName2';
  } //TabName2

  /**
   * 常量:"Func4GCCount"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Func4GCCount(): string {
    return 'func4GCCount';
  } //函数4GC数

  /**
   * 常量:"ParaNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParaNum(): string {
    return 'paraNum';
  } //参数个数

  /**
   * 常量:"FeatureCount"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureCount(): string {
    return 'featureCount';
  } //功能数

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
