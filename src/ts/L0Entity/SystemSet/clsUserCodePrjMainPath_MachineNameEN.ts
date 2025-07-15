/**
 * 类名:clsUserCodePrjMainPath_MachineNameEN
 * 表名:UserCodePrjMainPath_MachineName(00050614)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/04 18:07:30
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
 * 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserCodePrjMainPath_MachineNameEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '07'; //复合主键
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserCodePrjMainPath_MachineName'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserCodePrjMainPathId,MachineName'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'userCodePrjMainPathId',
    'machineName',
    'codePath',
    'gcPathId',
    'codePathBackup',
    'logPath',
    'includeXmlPath',
    'prjId',
    'updDate',
    'updUserId',
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
  private mstrUserCodePrjMainPathId = ''; //生成主目录Id
  private mstrMachineName = ''; //机器名
  private mstrCodePath = ''; //代码路径
  private mstrGcPathId = ''; //GC路径Id
  private mstrCodePathBackup = ''; //备份代码路径
  private mstrLogPath = ''; //日志路径
  private mstrIncludeXmlPath = ''; //包含表Xml路径
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * 生成主目录Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserCodePrjMainPathId(value: string) {
    if (value != undefined) {
      this.userCodePrjMainPathId = value;
      this.hmProperty['userCodePrjMainPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 机器名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMachineName(value: string) {
    if (value != undefined) {
      this.machineName = value;
      this.hmProperty['machineName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 代码路径(说明:;字段类型:varchar;字段长度:200;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodePath(value: string) {
    if (value != undefined) {
      this.codePath = value;
      this.hmProperty['codePath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * GC路径Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGcPathId(value: string) {
    if (value != undefined) {
      this.gcPathId = value;
      this.hmProperty['gcPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备份代码路径(说明:;字段类型:varchar;字段长度:200;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCodePathBackup(value: string) {
    if (value != undefined) {
      this.codePathBackup = value;
      this.hmProperty['codePathBackup'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 日志路径(说明:;字段类型:varchar;字段长度:150;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLogPath(value: string) {
    if (value != undefined) {
      this.logPath = value;
      this.hmProperty['logPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 包含表Xml路径(说明:;字段类型:varchar;字段长度:150;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIncludeXmlPath(value: string) {
    if (value != undefined) {
      this.includeXmlPath = value;
      this.hmProperty['includeXmlPath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程ID(说明:;字段类型:char;字段长度:4;是否可空:False)
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
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
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
      case clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId:
        return this.userCodePrjMainPathId;
      case clsUserCodePrjMainPath_MachineNameEN.con_MachineName:
        return this.machineName;
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePath:
        return this.codePath;
      case clsUserCodePrjMainPath_MachineNameEN.con_GcPathId:
        return this.gcPathId;
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup:
        return this.codePathBackup;
      case clsUserCodePrjMainPath_MachineNameEN.con_LogPath:
        return this.logPath;
      case clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath:
        return this.includeXmlPath;
      case clsUserCodePrjMainPath_MachineNameEN.con_PrjId:
        return this.prjId;
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdDate:
        return this.updDate;
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId:
        return this.updUserId;
      case clsUserCodePrjMainPath_MachineNameEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePrjMainPath_MachineName]中不存在!`;
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
      case clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId:
        this.userCodePrjMainPathId = strValue;
        this.hmProperty['userCodePrjMainPathId'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_MachineName:
        this.machineName = strValue;
        this.hmProperty['machineName'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePath:
        this.codePath = strValue;
        this.hmProperty['codePath'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_GcPathId:
        this.gcPathId = strValue;
        this.hmProperty['gcPathId'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup:
        this.codePathBackup = strValue;
        this.hmProperty['codePathBackup'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_LogPath:
        this.logPath = strValue;
        this.hmProperty['logPath'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath:
        this.includeXmlPath = strValue;
        this.hmProperty['includeXmlPath'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsUserCodePrjMainPath_MachineNameEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePrjMainPath_MachineName]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public userCodePrjMainPathId = ''; //生成主目录Id
  public machineName = ''; //机器名
  public codePath = ''; //代码路径
  public gcPathId = ''; //GC路径Id
  public codePathBackup = ''; //备份代码路径
  public logPath = ''; //日志路径
  public includeXmlPath = ''; //包含表Xml路径
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"UserCodePrjMainPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserCodePrjMainPathId(): string {
    return 'userCodePrjMainPathId';
  } //生成主目录Id

  /**
   * 常量:"MachineName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MachineName(): string {
    return 'machineName';
  } //机器名

  /**
   * 常量:"CodePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodePath(): string {
    return 'codePath';
  } //代码路径

  /**
   * 常量:"GcPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GcPathId(): string {
    return 'gcPathId';
  } //GC路径Id

  /**
   * 常量:"CodePathBackup"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CodePathBackup(): string {
    return 'codePathBackup';
  } //备份代码路径

  /**
   * 常量:"LogPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_LogPath(): string {
    return 'logPath';
  } //日志路径

  /**
   * 常量:"IncludeXmlPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IncludeXmlPath(): string {
    return 'includeXmlPath';
  } //包含表Xml路径

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
