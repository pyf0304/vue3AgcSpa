/**
 * 类名:clsvCMFunctionEN
 * 表名:vCMFunction(00050507)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 16:56:38
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
 * vCM函数(vCMFunction)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvCMFunctionEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vCMFunction'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CmFunctionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 29;
  public static AttributeName = [
    'cmFunctionId',
    'cmClassId',
    'applicationTypeId',
    'progLangTypeId',
    'progLangTypeName',
    'progLangTypeSimName',
    'nameSpace',
    'projectPath',
    'filePath',
    'fileName',
    'codeTypeId',
    'userId',
    'prjId',
    'prjName',
    'functionName',
    'funcContent',
    'keyWords',
    'funcParaLst',
    'funcComments',
    'functionSignature',
    'returnType',
    'isKnownType',
    'returnTypeId',
    'classNameLst',
    'updDate',
    'updUser',
    'memo',
    'paraNum',
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
      case clsvCMFunctionEN.con_CmFunctionId:
        return this.cmFunctionId;
      case clsvCMFunctionEN.con_CmClassId:
        return this.cmClassId;
      case clsvCMFunctionEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsvCMFunctionEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvCMFunctionEN.con_ProgLangTypeName:
        return this.progLangTypeName;
      case clsvCMFunctionEN.con_ProgLangTypeSimName:
        return this.progLangTypeSimName;
      case clsvCMFunctionEN.con_NameSpace:
        return this.nameSpace;
      case clsvCMFunctionEN.con_ProjectPath:
        return this.projectPath;
      case clsvCMFunctionEN.con_FilePath:
        return this.filePath;
      case clsvCMFunctionEN.con_FileName:
        return this.fileName;
      case clsvCMFunctionEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsvCMFunctionEN.con_UserId:
        return this.userId;
      case clsvCMFunctionEN.con_PrjId:
        return this.prjId;
      case clsvCMFunctionEN.con_PrjName:
        return this.prjName;
      case clsvCMFunctionEN.con_FunctionName:
        return this.functionName;
      case clsvCMFunctionEN.con_FuncContent:
        return this.funcContent;
      case clsvCMFunctionEN.con_KeyWords:
        return this.keyWords;
      case clsvCMFunctionEN.con_FuncParaLst:
        return this.funcParaLst;
      case clsvCMFunctionEN.con_FuncComments:
        return this.funcComments;
      case clsvCMFunctionEN.con_FunctionSignature:
        return this.functionSignature;
      case clsvCMFunctionEN.con_ReturnType:
        return this.returnType;
      case clsvCMFunctionEN.con_IsKnownType:
        return this.isKnownType;
      case clsvCMFunctionEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsvCMFunctionEN.con_ClassNameLst:
        return this.classNameLst;
      case clsvCMFunctionEN.con_UpdDate:
        return this.updDate;
      case clsvCMFunctionEN.con_UpdUser:
        return this.updUser;
      case clsvCMFunctionEN.con_Memo:
        return this.memo;
      case clsvCMFunctionEN.con_ParaNum:
        return this.paraNum;
      case clsvCMFunctionEN.con_ClsName:
        return this.clsName;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCMFunction]中不存在!`;
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
      case clsvCMFunctionEN.con_CmFunctionId:
        this.cmFunctionId = strValue;
        break;
      case clsvCMFunctionEN.con_CmClassId:
        this.cmClassId = strValue;
        break;
      case clsvCMFunctionEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        break;
      case clsvCMFunctionEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvCMFunctionEN.con_ProgLangTypeName:
        this.progLangTypeName = strValue;
        break;
      case clsvCMFunctionEN.con_ProgLangTypeSimName:
        this.progLangTypeSimName = strValue;
        break;
      case clsvCMFunctionEN.con_NameSpace:
        this.nameSpace = strValue;
        break;
      case clsvCMFunctionEN.con_ProjectPath:
        this.projectPath = strValue;
        break;
      case clsvCMFunctionEN.con_FilePath:
        this.filePath = strValue;
        break;
      case clsvCMFunctionEN.con_FileName:
        this.fileName = strValue;
        break;
      case clsvCMFunctionEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        break;
      case clsvCMFunctionEN.con_UserId:
        this.userId = strValue;
        break;
      case clsvCMFunctionEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvCMFunctionEN.con_PrjName:
        this.prjName = strValue;
        break;
      case clsvCMFunctionEN.con_FunctionName:
        this.functionName = strValue;
        break;
      case clsvCMFunctionEN.con_FuncContent:
        this.funcContent = strValue;
        break;
      case clsvCMFunctionEN.con_KeyWords:
        this.keyWords = strValue;
        break;
      case clsvCMFunctionEN.con_FuncParaLst:
        this.funcParaLst = strValue;
        break;
      case clsvCMFunctionEN.con_FuncComments:
        this.funcComments = strValue;
        break;
      case clsvCMFunctionEN.con_FunctionSignature:
        this.functionSignature = strValue;
        break;
      case clsvCMFunctionEN.con_ReturnType:
        this.returnType = strValue;
        break;
      case clsvCMFunctionEN.con_IsKnownType:
        this.isKnownType = Boolean(strValue);
        break;
      case clsvCMFunctionEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        break;
      case clsvCMFunctionEN.con_ClassNameLst:
        this.classNameLst = strValue;
        break;
      case clsvCMFunctionEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvCMFunctionEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvCMFunctionEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvCMFunctionEN.con_ParaNum:
        this.paraNum = Number(strValue);
        break;
      case clsvCMFunctionEN.con_ClsName:
        this.clsName = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vCMFunction]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public applicationTypeId = 0; //应用程序类型ID
  public progLangTypeId = ''; //编程语言类型Id
  public progLangTypeName = ''; //编程语言类型名
  public progLangTypeSimName = ''; //编程语言类型简称
  public nameSpace = ''; //域名
  public projectPath = ''; //工程路径
  public filePath = ''; //文件路径
  public fileName = ''; //文件名
  public codeTypeId = ''; //代码类型Id
  public userId = ''; //用户Id
  public prjId = ''; //工程ID
  public prjName = ''; //工程名称
  public functionName = ''; //功能名称
  public funcContent = ''; //函数内容
  public keyWords = ''; //关键字
  public funcParaLst = ''; //函数参数列表
  public funcComments = ''; //函数注释
  public functionSignature = ''; //函数签名
  public returnType = ''; //返回类型
  public isKnownType = false; //是否已知类型
  public returnTypeId = ''; //返回类型ID
  public classNameLst = ''; //类名列表
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public paraNum = 0; //参数个数
  public clsName = ''; //类名

  /**
   * 常量:"CmFunctionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmFunctionId(): string {
    return 'cmFunctionId';
  } //函数Id

  /**
   * 常量:"CmClassId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmClassId(): string {
    return 'cmClassId';
  } //类Id

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"ProgLangTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeName(): string {
    return 'progLangTypeName';
  } //编程语言类型名

  /**
   * 常量:"ProgLangTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeSimName(): string {
    return 'progLangTypeSimName';
  } //编程语言类型简称

  /**
   * 常量:"NameSpace"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NameSpace(): string {
    return 'nameSpace';
  } //域名

  /**
   * 常量:"ProjectPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProjectPath(): string {
    return 'projectPath';
  } //工程路径

  /**
   * 常量:"FilePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FilePath(): string {
    return 'filePath';
  } //文件路径

  /**
   * 常量:"FileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FileName(): string {
    return 'fileName';
  } //文件名

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"FunctionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionName(): string {
    return 'functionName';
  } //功能名称

  /**
   * 常量:"FuncContent"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncContent(): string {
    return 'funcContent';
  } //函数内容

  /**
   * 常量:"KeyWords"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyWords(): string {
    return 'keyWords';
  } //关键字

  /**
   * 常量:"FuncParaLst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncParaLst(): string {
    return 'funcParaLst';
  } //函数参数列表

  /**
   * 常量:"FuncComments"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncComments(): string {
    return 'funcComments';
  } //函数注释

  /**
   * 常量:"FunctionSignature"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionSignature(): string {
    return 'functionSignature';
  } //函数签名

  /**
   * 常量:"ReturnType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReturnType(): string {
    return 'returnType';
  } //返回类型

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
   * 常量:"ClassNameLst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClassNameLst(): string {
    return 'classNameLst';
  } //类名列表

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
   * 常量:"ParaNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParaNum(): string {
    return 'paraNum';
  } //参数个数

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
