/**
 * 类名:clsUserCodePrjMainPathMachineNameEN
 * 表名:UserCodePrjMainPath_MachineName(00050614)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:20:06
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 用户生成项目主路径_PC(UserCodePrjMainPathMachineName)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserCodePrjMainPathMachineNameEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserCodePrjMainPathMachineName'; //当前表名,与该类相关的表名
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
    'cmPrjId',
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
  private mstrCmPrjId = ''; //CM工程Id
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
   * CM工程Id(说明:;字段类型:char;字段长度:6;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmPrjId(value: string) {
    if (value != undefined) {
      this.cmPrjId = value;
      this.hmProperty['cmPrjId'] = true;
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
      case clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId:
        return this.userCodePrjMainPathId;
      case clsUserCodePrjMainPathMachineNameEN.conMachineName:
        return this.machineName;
      case clsUserCodePrjMainPathMachineNameEN.conCodePath:
        return this.codePath;
      case clsUserCodePrjMainPathMachineNameEN.conGcPathId:
        return this.gcPathId;
      case clsUserCodePrjMainPathMachineNameEN.conCodePathBackup:
        return this.codePathBackup;
      case clsUserCodePrjMainPathMachineNameEN.conLogPath:
        return this.logPath;
      case clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath:
        return this.includeXmlPath;
      case clsUserCodePrjMainPathMachineNameEN.conCmPrjId:
        return this.cmPrjId;
      case clsUserCodePrjMainPathMachineNameEN.conUpdDate:
        return this.updDate;
      case clsUserCodePrjMainPathMachineNameEN.conUpdUserId:
        return this.updUserId;
      case clsUserCodePrjMainPathMachineNameEN.conMemo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePrjMainPathMachineName]中不存在！`;
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
      case clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId:
        this.userCodePrjMainPathId = strValue;
        this.hmProperty['userCodePrjMainPathId'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conMachineName:
        this.machineName = strValue;
        this.hmProperty['machineName'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conCodePath:
        this.codePath = strValue;
        this.hmProperty['codePath'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conGcPathId:
        this.gcPathId = strValue;
        this.hmProperty['gcPathId'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conCodePathBackup:
        this.codePathBackup = strValue;
        this.hmProperty['codePathBackup'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conLogPath:
        this.logPath = strValue;
        this.hmProperty['logPath'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath:
        this.includeXmlPath = strValue;
        this.hmProperty['includeXmlPath'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conCmPrjId:
        this.cmPrjId = strValue;
        this.hmProperty['cmPrjId'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conUpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conUpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsUserCodePrjMainPathMachineNameEN.conMemo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[UserCodePrjMainPathMachineName]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
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
  public cmPrjId = ''; //CM工程Id
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"UserCodePrjMainPathId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUserCodePrjMainPathId(): string {
    return 'userCodePrjMainPathId';
  } //生成主目录Id

  /**
   * 常量:"MachineName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMachineName(): string {
    return 'machineName';
  } //机器名

  /**
   * 常量:"CodePath"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCodePath(): string {
    return 'codePath';
  } //代码路径

  /**
   * 常量:"GcPathId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conGcPathId(): string {
    return 'gcPathId';
  } //GC路径Id

  /**
   * 常量:"CodePathBackup"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCodePathBackup(): string {
    return 'codePathBackup';
  } //备份代码路径

  /**
   * 常量:"LogPath"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conLogPath(): string {
    return 'logPath';
  } //日志路径

  /**
   * 常量:"IncludeXmlPath"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIncludeXmlPath(): string {
    return 'includeXmlPath';
  } //包含表Xml路径

  /**
   * 常量:"CmPrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMemo(): string {
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
