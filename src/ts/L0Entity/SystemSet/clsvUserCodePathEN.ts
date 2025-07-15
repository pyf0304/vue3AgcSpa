/**
 * 类名:clsvUserCodePathEN
 * 表名:vUserCodePath(00050205)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/15 11:50:15
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * v用户生成路径(vUserCodePath)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvUserCodePathEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vUserCodePath'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 38;
  public static AttributeName = [
    'mId',
    'cMProjectAppRelaId',
    'codeTypeId',
    'progLangTypeId',
    'progLangTypeName',
    'cmPrjId',
    'applicationTypeName',
    'applicationTypeENName',
    'prjFileStateName',
    'appOrderNum',
    'newCodePath',
    'newCodePathBackup',
    'codeTypeName',
    'codeTypeENName',
    'orderNum',
    'applicationTypeId',
    'tabMainTypeId',
    'isGeneCode',
    'projectFileName',
    'projectPath',
    'prjFileStateId',
    'codePath',
    'codePathBackup',
    'suffixPath',
    'isTemplate',
    'isExistCodePath',
    'isExistCodePathBackup',
    'prjId',
    'updDate',
    'updUserId',
    'memo',
    'progLangTypeSimName',
    'applicationTypeSimName',
    'cmPrjName',
    'tabMainTypeName',
    'codeTypeSimName',
    'isExistCodePathP',
    'isExistCodePathBackupP',
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
      case clsvUserCodePathEN.con_mId:
        return this.mId;
      case clsvUserCodePathEN.con_CMProjectAppRelaId:
        return this.cMProjectAppRelaId;
      case clsvUserCodePathEN.con_CodeTypeId:
        return this.codeTypeId;
      case clsvUserCodePathEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvUserCodePathEN.con_ProgLangTypeName:
        return this.progLangTypeName;
      case clsvUserCodePathEN.con_CmPrjId:
        return this.cmPrjId;
      case clsvUserCodePathEN.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsvUserCodePathEN.con_ApplicationTypeENName:
        return this.applicationTypeENName;
      case clsvUserCodePathEN.con_PrjFileStateName:
        return this.prjFileStateName;
      case clsvUserCodePathEN.con_AppOrderNum:
        return this.appOrderNum;
      case clsvUserCodePathEN.con_NewCodePath:
        return this.newCodePath;
      case clsvUserCodePathEN.con_NewCodePathBackup:
        return this.newCodePathBackup;
      case clsvUserCodePathEN.con_CodeTypeName:
        return this.codeTypeName;
      case clsvUserCodePathEN.con_CodeTypeENName:
        return this.codeTypeENName;
      case clsvUserCodePathEN.con_OrderNum:
        return this.orderNum;
      case clsvUserCodePathEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsvUserCodePathEN.con_TabMainTypeId:
        return this.tabMainTypeId;
      case clsvUserCodePathEN.con_IsGeneCode:
        return this.isGeneCode;
      case clsvUserCodePathEN.con_ProjectFileName:
        return this.projectFileName;
      case clsvUserCodePathEN.con_ProjectPath:
        return this.projectPath;
      case clsvUserCodePathEN.con_PrjFileStateId:
        return this.prjFileStateId;
      case clsvUserCodePathEN.con_CodePath:
        return this.codePath;
      case clsvUserCodePathEN.con_CodePathBackup:
        return this.codePathBackup;
      case clsvUserCodePathEN.con_SuffixPath:
        return this.suffixPath;
      case clsvUserCodePathEN.con_IsTemplate:
        return this.isTemplate;
      case clsvUserCodePathEN.con_IsExistCodePath:
        return this.isExistCodePath;
      case clsvUserCodePathEN.con_IsExistCodePathBackup:
        return this.isExistCodePathBackup;
      case clsvUserCodePathEN.con_PrjId:
        return this.prjId;
      case clsvUserCodePathEN.con_UpdDate:
        return this.updDate;
      case clsvUserCodePathEN.con_UpdUserId:
        return this.updUserId;
      case clsvUserCodePathEN.con_Memo:
        return this.memo;
      case clsvUserCodePathEN.con_ProgLangTypeSimName:
        return this.progLangTypeSimName;
      case clsvUserCodePathEN.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsvUserCodePathEN.con_CmPrjName:
        return this.cmPrjName;
      case clsvUserCodePathEN.con_TabMainTypeName:
        return this.tabMainTypeName;
      case clsvUserCodePathEN.con_CodeTypeSimName:
        return this.codeTypeSimName;
      case clsvUserCodePathEN.con_IsExistCodePathP:
        return this.isExistCodePathP;
      case clsvUserCodePathEN.con_IsExistCodePathBackupP:
        return this.isExistCodePathBackupP;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vUserCodePath]中不存在!`;
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
      case clsvUserCodePathEN.con_mId:
        this.mId = Number(strValue);
        break;
      case clsvUserCodePathEN.con_CMProjectAppRelaId:
        this.cMProjectAppRelaId = Number(strValue);
        break;
      case clsvUserCodePathEN.con_CodeTypeId:
        this.codeTypeId = strValue;
        break;
      case clsvUserCodePathEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvUserCodePathEN.con_ProgLangTypeName:
        this.progLangTypeName = strValue;
        break;
      case clsvUserCodePathEN.con_CmPrjId:
        this.cmPrjId = strValue;
        break;
      case clsvUserCodePathEN.con_ApplicationTypeName:
        this.applicationTypeName = strValue;
        break;
      case clsvUserCodePathEN.con_ApplicationTypeENName:
        this.applicationTypeENName = strValue;
        break;
      case clsvUserCodePathEN.con_PrjFileStateName:
        this.prjFileStateName = strValue;
        break;
      case clsvUserCodePathEN.con_AppOrderNum:
        this.appOrderNum = Number(strValue);
        break;
      case clsvUserCodePathEN.con_NewCodePath:
        this.newCodePath = strValue;
        break;
      case clsvUserCodePathEN.con_NewCodePathBackup:
        this.newCodePathBackup = strValue;
        break;
      case clsvUserCodePathEN.con_CodeTypeName:
        this.codeTypeName = strValue;
        break;
      case clsvUserCodePathEN.con_CodeTypeENName:
        this.codeTypeENName = strValue;
        break;
      case clsvUserCodePathEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvUserCodePathEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        break;
      case clsvUserCodePathEN.con_TabMainTypeId:
        this.tabMainTypeId = strValue;
        break;
      case clsvUserCodePathEN.con_IsGeneCode:
        this.isGeneCode = Boolean(strValue);
        break;
      case clsvUserCodePathEN.con_ProjectFileName:
        this.projectFileName = strValue;
        break;
      case clsvUserCodePathEN.con_ProjectPath:
        this.projectPath = strValue;
        break;
      case clsvUserCodePathEN.con_PrjFileStateId:
        this.prjFileStateId = strValue;
        break;
      case clsvUserCodePathEN.con_CodePath:
        this.codePath = strValue;
        break;
      case clsvUserCodePathEN.con_CodePathBackup:
        this.codePathBackup = strValue;
        break;
      case clsvUserCodePathEN.con_SuffixPath:
        this.suffixPath = strValue;
        break;
      case clsvUserCodePathEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        break;
      case clsvUserCodePathEN.con_IsExistCodePath:
        this.isExistCodePath = Boolean(strValue);
        break;
      case clsvUserCodePathEN.con_IsExistCodePathBackup:
        this.isExistCodePathBackup = Boolean(strValue);
        break;
      case clsvUserCodePathEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvUserCodePathEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvUserCodePathEN.con_UpdUserId:
        this.updUserId = strValue;
        break;
      case clsvUserCodePathEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvUserCodePathEN.con_ProgLangTypeSimName:
        this.progLangTypeSimName = strValue;
        break;
      case clsvUserCodePathEN.con_ApplicationTypeSimName:
        this.applicationTypeSimName = strValue;
        break;
      case clsvUserCodePathEN.con_CmPrjName:
        this.cmPrjName = strValue;
        break;
      case clsvUserCodePathEN.con_TabMainTypeName:
        this.tabMainTypeName = strValue;
        break;
      case clsvUserCodePathEN.con_CodeTypeSimName:
        this.codeTypeSimName = strValue;
        break;
      case clsvUserCodePathEN.con_IsExistCodePathP:
        this.isExistCodePathP = Boolean(strValue);
        break;
      case clsvUserCodePathEN.con_IsExistCodePathBackupP:
        this.isExistCodePathBackupP = Boolean(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vUserCodePath]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public cMProjectAppRelaId = 0; //Cm工程应用关系Id
  public codeTypeId = ''; //代码类型Id
  public progLangTypeId = ''; //编程语言类型Id
  public progLangTypeName = ''; //编程语言类型名
  public cmPrjId = ''; //CM工程Id
  public applicationTypeName = ''; //应用程序类型名称
  public applicationTypeENName = ''; //应用类型英文名
  public prjFileStateName = ''; //工程文件状态名
  public appOrderNum = 0; //AppOrderNum
  public newCodePath = ''; //NewCodePath
  public newCodePathBackup = ''; //新备份目录
  public codeTypeName = ''; //代码类型名
  public codeTypeENName = ''; //代码类型英文名
  public orderNum = 0; //序号
  public applicationTypeId = 0; //应用程序类型ID
  public tabMainTypeId = ''; //表主类型Id
  public isGeneCode = false; //是否生成代码
  public projectFileName = ''; //工程文件名
  public projectPath = ''; //工程路径
  public prjFileStateId = ''; //工程文件状态Id
  public codePath = ''; //代码路径
  public codePathBackup = ''; //备份代码路径
  public suffixPath = ''; //后缀路径
  public isTemplate = false; //是否模板
  public isExistCodePath = false; //是否存在代码路径
  public isExistCodePathBackup = false; //是否存在备份路径
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明
  public progLangTypeSimName = ''; //编程语言类型简称
  public applicationTypeSimName = ''; //应用程序类型简称
  public cmPrjName = ''; //CM工程名
  public tabMainTypeName = ''; //表主类型名
  public codeTypeSimName = ''; //简称
  public isExistCodePathP = false; //是否存在代码目录P
  public isExistCodePathBackupP = false; //是否存在备份目录P

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"CMProjectAppRelaId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CMProjectAppRelaId(): string {
    return 'cMProjectAppRelaId';
  } //Cm工程应用关系Id

  /**
   * 常量:"CodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeId(): string {
    return 'codeTypeId';
  } //代码类型Id

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
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"ApplicationTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeENName(): string {
    return 'applicationTypeENName';
  } //应用类型英文名

  /**
   * 常量:"PrjFileStateName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjFileStateName(): string {
    return 'prjFileStateName';
  } //工程文件状态名

  /**
   * 常量:"AppOrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AppOrderNum(): string {
    return 'appOrderNum';
  } //AppOrderNum

  /**
   * 常量:"NewCodePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NewCodePath(): string {
    return 'newCodePath';
  } //NewCodePath

  /**
   * 常量:"NewCodePathBackup"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NewCodePathBackup(): string {
    return 'newCodePathBackup';
  } //新备份目录

  /**
   * 常量:"CodeTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeName(): string {
    return 'codeTypeName';
  } //代码类型名

  /**
   * 常量:"CodeTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeENName(): string {
    return 'codeTypeENName';
  } //代码类型英文名

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"TabMainTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabMainTypeId(): string {
    return 'tabMainTypeId';
  } //表主类型Id

  /**
   * 常量:"IsGeneCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsGeneCode(): string {
    return 'isGeneCode';
  } //是否生成代码

  /**
   * 常量:"ProjectFileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProjectFileName(): string {
    return 'projectFileName';
  } //工程文件名

  /**
   * 常量:"ProjectPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProjectPath(): string {
    return 'projectPath';
  } //工程路径

  /**
   * 常量:"PrjFileStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjFileStateId(): string {
    return 'prjFileStateId';
  } //工程文件状态Id

  /**
   * 常量:"CodePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodePath(): string {
    return 'codePath';
  } //代码路径

  /**
   * 常量:"CodePathBackup"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodePathBackup(): string {
    return 'codePathBackup';
  } //备份代码路径

  /**
   * 常量:"SuffixPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SuffixPath(): string {
    return 'suffixPath';
  } //后缀路径

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"IsExistCodePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExistCodePath(): string {
    return 'isExistCodePath';
  } //是否存在代码路径

  /**
   * 常量:"IsExistCodePathBackup"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExistCodePathBackup(): string {
    return 'isExistCodePathBackup';
  } //是否存在备份路径

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
   * 常量:"UpdUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"ProgLangTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeSimName(): string {
    return 'progLangTypeSimName';
  } //编程语言类型简称

  /**
   * 常量:"ApplicationTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"CmPrjName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjName(): string {
    return 'cmPrjName';
  } //CM工程名

  /**
   * 常量:"TabMainTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabMainTypeName(): string {
    return 'tabMainTypeName';
  } //表主类型名

  /**
   * 常量:"CodeTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodeTypeSimName(): string {
    return 'codeTypeSimName';
  } //简称

  /**
   * 常量:"IsExistCodePathP"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExistCodePathP(): string {
    return 'isExistCodePathP';
  } //是否存在代码目录P

  /**
   * 常量:"IsExistCodePathBackupP"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExistCodePathBackupP(): string {
    return 'isExistCodePathBackupP';
  } //是否存在备份目录P

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
