/**
 * 类名:clsvUserCodePrjMainPathEN
 * 表名:vUserCodePrjMainPath(00050339)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/04 18:07:33
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * v用户生成项目主路径(vUserCodePrjMainPath)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvUserCodePrjMainPathEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vUserCodePrjMainPath'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserCodePrjMainPathId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 26;
  public static AttributeName = [
    'applicationTypeENName',
    'userCodePrjMainPathId',
    'cMProjectAppRelaId',
    'prjId',
    'prjName',
    'progLangTypeId',
    'userId',
    'userName',
    'departmentId',
    'departmentName',
    'userStateId',
    'userStateName',
    'isUsePrjMainPath',
    'includeXmlPath',
    'isTemplate',
    'inUse',
    'updDate',
    'updUserId',
    'memo',
    'applicationTypeSimName',
    'cmPrjName',
    'applicationTypeName',
    'applicationTypeId',
    'cmPrjId',
    'appOrderNum',
    'appIsVisible',
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
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeENName:
        return this.applicationTypeENName;
      case clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        return this.userCodePrjMainPathId;
      case clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        return this.cMProjectAppRelaId;
      case clsvUserCodePrjMainPathEN.con_PrjId:
        return this.prjId;
      case clsvUserCodePrjMainPathEN.con_PrjName:
        return this.prjName;
      case clsvUserCodePrjMainPathEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvUserCodePrjMainPathEN.con_UserId:
        return this.userId;
      case clsvUserCodePrjMainPathEN.con_UserName:
        return this.userName;
      case clsvUserCodePrjMainPathEN.con_DepartmentId:
        return this.departmentId;
      case clsvUserCodePrjMainPathEN.con_DepartmentName:
        return this.departmentName;
      case clsvUserCodePrjMainPathEN.con_UserStateId:
        return this.userStateId;
      case clsvUserCodePrjMainPathEN.con_UserStateName:
        return this.userStateName;
      case clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        return this.isUsePrjMainPath;
      case clsvUserCodePrjMainPathEN.con_IncludeXmlPath:
        return this.includeXmlPath;
      case clsvUserCodePrjMainPathEN.con_IsTemplate:
        return this.isTemplate;
      case clsvUserCodePrjMainPathEN.con_InUse:
        return this.inUse;
      case clsvUserCodePrjMainPathEN.con_UpdDate:
        return this.updDate;
      case clsvUserCodePrjMainPathEN.con_UpdUserId:
        return this.updUserId;
      case clsvUserCodePrjMainPathEN.con_Memo:
        return this.memo;
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsvUserCodePrjMainPathEN.con_CmPrjName:
        return this.cmPrjName;
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsvUserCodePrjMainPathEN.con_CmPrjId:
        return this.cmPrjId;
      case clsvUserCodePrjMainPathEN.con_AppOrderNum:
        return this.appOrderNum;
      case clsvUserCodePrjMainPathEN.con_AppIsVisible:
        return this.appIsVisible;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vUserCodePrjMainPath]中不存在!`;
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
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeENName:
        this.applicationTypeENName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        this.userCodePrjMainPathId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        this.cMProjectAppRelaId = Number(strValue);
        break;
      case clsvUserCodePrjMainPathEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_PrjName:
        this.prjName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_UserId:
        this.userId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_UserName:
        this.userName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_DepartmentId:
        this.departmentId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_DepartmentName:
        this.departmentName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_UserStateId:
        this.userStateId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_UserStateName:
        this.userStateName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        this.isUsePrjMainPath = Boolean(strValue);
        break;
      case clsvUserCodePrjMainPathEN.con_IncludeXmlPath:
        this.includeXmlPath = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        break;
      case clsvUserCodePrjMainPathEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvUserCodePrjMainPathEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_UpdUserId:
        this.updUserId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName:
        this.applicationTypeSimName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_CmPrjName:
        this.cmPrjName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeName:
        this.applicationTypeName = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        break;
      case clsvUserCodePrjMainPathEN.con_CmPrjId:
        this.cmPrjId = strValue;
        break;
      case clsvUserCodePrjMainPathEN.con_AppOrderNum:
        this.appOrderNum = Number(strValue);
        break;
      case clsvUserCodePrjMainPathEN.con_AppIsVisible:
        this.appIsVisible = Boolean(strValue);
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vUserCodePrjMainPath]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public applicationTypeENName = ''; //应用类型英文名
  public userCodePrjMainPathId = ''; //生成主目录Id
  public cMProjectAppRelaId = 0; //Cm工程应用关系Id
  public prjId = ''; //工程ID
  public prjName = ''; //工程名称
  public progLangTypeId = ''; //编程语言类型Id
  public userId = ''; //用户Id
  public userName = ''; //用户名
  public departmentId = ''; //部门ID
  public departmentName = ''; //部门名称
  public userStateId = ''; //用户状态号
  public userStateName = ''; //用户状态名
  public isUsePrjMainPath = false; //是否使用主路径
  public includeXmlPath = ''; //包含表Xml路径
  public isTemplate = false; //是否模板
  public inUse = false; //是否在用
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明
  public applicationTypeSimName = ''; //应用程序类型简称
  public cmPrjName = ''; //CM工程名
  public applicationTypeName = ''; //应用程序类型名称
  public applicationTypeId = 0; //应用程序类型ID
  public cmPrjId = ''; //CM工程Id
  public appOrderNum = 0; //AppOrderNum
  public appIsVisible = false; //AppIsVisible

  /**
   * 常量:"ApplicationTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeENName(): string {
    return 'applicationTypeENName';
  } //应用类型英文名

  /**
   * 常量:"UserCodePrjMainPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserCodePrjMainPathId(): string {
    return 'userCodePrjMainPathId';
  } //生成主目录Id

  /**
   * 常量:"CMProjectAppRelaId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CMProjectAppRelaId(): string {
    return 'cMProjectAppRelaId';
  } //Cm工程应用关系Id

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
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"UserName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"DepartmentId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DepartmentId(): string {
    return 'departmentId';
  } //部门ID

  /**
   * 常量:"DepartmentName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DepartmentName(): string {
    return 'departmentName';
  } //部门名称

  /**
   * 常量:"UserStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserStateId(): string {
    return 'userStateId';
  } //用户状态号

  /**
   * 常量:"UserStateName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserStateName(): string {
    return 'userStateName';
  } //用户状态名

  /**
   * 常量:"IsUsePrjMainPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsUsePrjMainPath(): string {
    return 'isUsePrjMainPath';
  } //是否使用主路径

  /**
   * 常量:"IncludeXmlPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IncludeXmlPath(): string {
    return 'includeXmlPath';
  } //包含表Xml路径

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

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
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  /**
   * 常量:"AppOrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AppOrderNum(): string {
    return 'appOrderNum';
  } //AppOrderNum

  /**
   * 常量:"AppIsVisible"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AppIsVisible(): string {
    return 'appIsVisible';
  } //AppIsVisible

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
