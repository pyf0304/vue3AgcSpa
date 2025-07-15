/**
 * 类名:clsCMRequirementEN
 * 表名:CMRequirement(00050075)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:49:36
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
 * 项目需求(CMRequirement)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCMRequirementEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CMRequirement'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ReqId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 19;
  public static AttributeName = [
    'reqId',
    'requirementName',
    'requirementTypeId',
    'reqContent',
    'upReqId',
    'isFinished',
    'cmPrjId',
    'funcModuleAgcId',
    'prjId',
    'updUser',
    'updDate',
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
  private mstrReqId = ''; //需求Id
  private mstrRequirementName = ''; //需求名称
  private mstrRequirementTypeId = ''; //需求类型Id
  private mstrReqContent = ''; //需求内容
  private mstrUpReqId = ''; //上级需求Id
  private mbolIsFinished = false; //是否完成
  private mstrCmPrjId = ''; //CM工程Id
  private mstrFuncModuleAgcId = ''; //功能模块Id
  private mstrPrjId = ''; //工程ID
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明
  private mbolIsSynchToServer = false; //是否同步到Server
  private mstrSynchToServerDate = ''; //同步到Server日期
  private mstrSynchToServerUser = ''; //同步到Server用户
  private mbolIsSynchToClient = false; //是否同步到Client
  private mstrSynchToClientDate = ''; //同步到Client库日期
  private mstrSynchToClientUser = ''; //同步到Client库用户
  private mstrSynSource = ''; //同步来源

  /**
   * 需求Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReqId(value: string) {
    if (value != undefined) {
      this.reqId = value;
      this.hmProperty['reqId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 需求名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRequirementName(value: string) {
    if (value != undefined) {
      this.requirementName = value;
      this.hmProperty['requirementName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 需求类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRequirementTypeId(value: string) {
    if (value != undefined) {
      this.requirementTypeId = value;
      this.hmProperty['requirementTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 需求内容(说明:;字段类型:varchar;字段长度:4000;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReqContent(value: string) {
    if (value != undefined) {
      this.reqContent = value;
      this.hmProperty['reqContent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 上级需求Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpReqId(value: string) {
    if (value != undefined) {
      this.upReqId = value;
      this.hmProperty['upReqId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否完成(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsFinished(value: boolean) {
    if (value != undefined) {
      this.isFinished = value;
      this.hmProperty['isFinished'] = true;
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
   * 功能模块Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncModuleAgcId(value: string) {
    if (value != undefined) {
      this.funcModuleAgcId = value;
      this.hmProperty['funcModuleAgcId'] = true;
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
      case clsCMRequirementEN.con_ReqId:
        return this.reqId;
      case clsCMRequirementEN.con_RequirementName:
        return this.requirementName;
      case clsCMRequirementEN.con_RequirementTypeId:
        return this.requirementTypeId;
      case clsCMRequirementEN.con_ReqContent:
        return this.reqContent;
      case clsCMRequirementEN.con_UpReqId:
        return this.upReqId;
      case clsCMRequirementEN.con_IsFinished:
        return this.isFinished;
      case clsCMRequirementEN.con_CmPrjId:
        return this.cmPrjId;
      case clsCMRequirementEN.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsCMRequirementEN.con_PrjId:
        return this.prjId;
      case clsCMRequirementEN.con_UpdUser:
        return this.updUser;
      case clsCMRequirementEN.con_UpdDate:
        return this.updDate;
      case clsCMRequirementEN.con_Memo:
        return this.memo;
      case clsCMRequirementEN.con_IsSynchToServer:
        return this.isSynchToServer;
      case clsCMRequirementEN.con_SynchToServerDate:
        return this.synchToServerDate;
      case clsCMRequirementEN.con_SynchToServerUser:
        return this.synchToServerUser;
      case clsCMRequirementEN.con_IsSynchToClient:
        return this.isSynchToClient;
      case clsCMRequirementEN.con_SynchToClientDate:
        return this.synchToClientDate;
      case clsCMRequirementEN.con_SynchToClientUser:
        return this.synchToClientUser;
      case clsCMRequirementEN.con_SynSource:
        return this.synSource;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMRequirement]中不存在!`;
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
      case clsCMRequirementEN.con_ReqId:
        this.reqId = strValue;
        this.hmProperty['reqId'] = true;
        break;
      case clsCMRequirementEN.con_RequirementName:
        this.requirementName = strValue;
        this.hmProperty['requirementName'] = true;
        break;
      case clsCMRequirementEN.con_RequirementTypeId:
        this.requirementTypeId = strValue;
        this.hmProperty['requirementTypeId'] = true;
        break;
      case clsCMRequirementEN.con_ReqContent:
        this.reqContent = strValue;
        this.hmProperty['reqContent'] = true;
        break;
      case clsCMRequirementEN.con_UpReqId:
        this.upReqId = strValue;
        this.hmProperty['upReqId'] = true;
        break;
      case clsCMRequirementEN.con_IsFinished:
        this.isFinished = Boolean(strValue);
        this.hmProperty['isFinished'] = true;
        break;
      case clsCMRequirementEN.con_CmPrjId:
        this.cmPrjId = strValue;
        this.hmProperty['cmPrjId'] = true;
        break;
      case clsCMRequirementEN.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;
        this.hmProperty['funcModuleAgcId'] = true;
        break;
      case clsCMRequirementEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsCMRequirementEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCMRequirementEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCMRequirementEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsCMRequirementEN.con_IsSynchToServer:
        this.isSynchToServer = Boolean(strValue);
        this.hmProperty['isSynchToServer'] = true;
        break;
      case clsCMRequirementEN.con_SynchToServerDate:
        this.synchToServerDate = strValue;
        this.hmProperty['synchToServerDate'] = true;
        break;
      case clsCMRequirementEN.con_SynchToServerUser:
        this.synchToServerUser = strValue;
        this.hmProperty['synchToServerUser'] = true;
        break;
      case clsCMRequirementEN.con_IsSynchToClient:
        this.isSynchToClient = Boolean(strValue);
        this.hmProperty['isSynchToClient'] = true;
        break;
      case clsCMRequirementEN.con_SynchToClientDate:
        this.synchToClientDate = strValue;
        this.hmProperty['synchToClientDate'] = true;
        break;
      case clsCMRequirementEN.con_SynchToClientUser:
        this.synchToClientUser = strValue;
        this.hmProperty['synchToClientUser'] = true;
        break;
      case clsCMRequirementEN.con_SynSource:
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
        strMsg = `字段名:[${strFldName}]在表对象:[CMRequirement]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public reqId = ''; //需求Id
  public requirementName = ''; //需求名称
  public requirementTypeId = ''; //需求类型Id
  public reqContent = ''; //需求内容
  public upReqId = ''; //上级需求Id
  public isFinished = false; //是否完成
  public cmPrjId = ''; //CM工程Id
  public funcModuleAgcId = ''; //功能模块Id
  public prjId = ''; //工程ID
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public isSynchToServer = false; //是否同步到Server
  public synchToServerDate = ''; //同步到Server日期
  public synchToServerUser = ''; //同步到Server用户
  public isSynchToClient = false; //是否同步到Client
  public synchToClientDate = ''; //同步到Client库日期
  public synchToClientUser = ''; //同步到Client库用户
  public synSource = ''; //同步来源

  /**
   * 常量:"ReqId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReqId(): string {
    return 'reqId';
  } //需求Id

  /**
   * 常量:"RequirementName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RequirementName(): string {
    return 'requirementName';
  } //需求名称

  /**
   * 常量:"RequirementTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RequirementTypeId(): string {
    return 'requirementTypeId';
  } //需求类型Id

  /**
   * 常量:"ReqContent"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReqContent(): string {
    return 'reqContent';
  } //需求内容

  /**
   * 常量:"UpReqId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpReqId(): string {
    return 'upReqId';
  } //上级需求Id

  /**
   * 常量:"IsFinished"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsFinished(): string {
    return 'isFinished';
  } //是否完成

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

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
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"IsSynchToServer"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsSynchToServer(): string {
    return 'isSynchToServer';
  } //是否同步到Server

  /**
   * 常量:"SynchToServerDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SynchToServerDate(): string {
    return 'synchToServerDate';
  } //同步到Server日期

  /**
   * 常量:"SynchToServerUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SynchToServerUser(): string {
    return 'synchToServerUser';
  } //同步到Server用户

  /**
   * 常量:"IsSynchToClient"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsSynchToClient(): string {
    return 'isSynchToClient';
  } //是否同步到Client

  /**
   * 常量:"SynchToClientDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SynchToClientDate(): string {
    return 'synchToClientDate';
  } //同步到Client库日期

  /**
   * 常量:"SynchToClientUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SynchToClientUser(): string {
    return 'synchToClientUser';
  } //同步到Client库用户

  /**
   * 常量:"SynSource"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
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
