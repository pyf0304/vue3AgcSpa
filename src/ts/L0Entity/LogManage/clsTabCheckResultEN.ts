/**
 * 类名:clsTabCheckResultEN
 * 表名:TabCheckResult(00050188)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 14:20:45
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:日志管理(LogManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 表检查结果(TabCheckResult)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsTabCheckResultEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'TabCheckResult'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'mId',
    'prjId',
    'prjDataBaseId',
    'tabId',
    'fldId',
    'errorLevelId',
    'errorMsg',
    'tabCheckErrorTypeId',
    'checkDate',
    'checkUser',
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
  private mlngmId = 0; //mId
  private mstrPrjId = ''; //工程ID
  private mstrPrjDataBaseId = ''; //项目数据库Id
  private mstrTabId = ''; //表ID
  private mstrFldId = ''; //字段Id
  private mintErrorLevelId = 0; //错误等级Id
  private mstrErrorMsg = ''; //错误信息
  private mstrTabCheckErrorTypeId = ''; //表检查错误类型Id
  private mstrCheckDate = ''; //检查日期
  private mstrCheckUser = ''; //检查人
  private mstrMemo = ''; //说明

  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetmId(value: number) {
    if (value != undefined) {
      this.mId = value;
      this.hmProperty['mId'] = true;
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
   * 项目数据库Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjDataBaseId(value: string) {
    if (value != undefined) {
      this.prjDataBaseId = value;
      this.hmProperty['prjDataBaseId'] = true;
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
   * 字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldId(value: string) {
    if (value != undefined) {
      this.fldId = value;
      this.hmProperty['fldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误等级Id(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrorLevelId(value: number) {
    if (value != undefined) {
      this.errorLevelId = value;
      this.hmProperty['errorLevelId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误信息(说明:;字段类型:varchar;字段长度:5000;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrorMsg(value: string) {
    if (value != undefined) {
      this.errorMsg = value;
      this.hmProperty['errorMsg'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表检查错误类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabCheckErrorTypeId(value: string) {
    if (value != undefined) {
      this.tabCheckErrorTypeId = value;
      this.hmProperty['tabCheckErrorTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 检查日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCheckDate(value: string) {
    if (value != undefined) {
      this.checkDate = value;
      this.hmProperty['checkDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 检查人(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCheckUser(value: string) {
    if (value != undefined) {
      this.checkUser = value;
      this.hmProperty['checkUser'] = true;
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
      case clsTabCheckResultEN.con_mId:
        return this.mId;
      case clsTabCheckResultEN.con_PrjId:
        return this.prjId;
      case clsTabCheckResultEN.con_PrjDataBaseId:
        return this.prjDataBaseId;
      case clsTabCheckResultEN.con_TabId:
        return this.tabId;
      case clsTabCheckResultEN.con_FldId:
        return this.fldId;
      case clsTabCheckResultEN.con_ErrorLevelId:
        return this.errorLevelId;
      case clsTabCheckResultEN.con_ErrorMsg:
        return this.errorMsg;
      case clsTabCheckResultEN.con_TabCheckErrorTypeId:
        return this.tabCheckErrorTypeId;
      case clsTabCheckResultEN.con_CheckDate:
        return this.checkDate;
      case clsTabCheckResultEN.con_CheckUser:
        return this.checkUser;
      case clsTabCheckResultEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TabCheckResult]中不存在!`;
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
      case clsTabCheckResultEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsTabCheckResultEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsTabCheckResultEN.con_PrjDataBaseId:
        this.prjDataBaseId = strValue;
        this.hmProperty['prjDataBaseId'] = true;
        break;
      case clsTabCheckResultEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsTabCheckResultEN.con_FldId:
        this.fldId = strValue;
        this.hmProperty['fldId'] = true;
        break;
      case clsTabCheckResultEN.con_ErrorLevelId:
        this.errorLevelId = Number(strValue);
        this.hmProperty['errorLevelId'] = true;
        break;
      case clsTabCheckResultEN.con_ErrorMsg:
        this.errorMsg = strValue;
        this.hmProperty['errorMsg'] = true;
        break;
      case clsTabCheckResultEN.con_TabCheckErrorTypeId:
        this.tabCheckErrorTypeId = strValue;
        this.hmProperty['tabCheckErrorTypeId'] = true;
        break;
      case clsTabCheckResultEN.con_CheckDate:
        this.checkDate = strValue;
        this.hmProperty['checkDate'] = true;
        break;
      case clsTabCheckResultEN.con_CheckUser:
        this.checkUser = strValue;
        this.hmProperty['checkUser'] = true;
        break;
      case clsTabCheckResultEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[TabCheckResult]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public prjId = ''; //工程ID
  public prjDataBaseId = ''; //项目数据库Id
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public errorLevelId = 0; //错误等级Id
  public errorMsg = ''; //错误信息
  public tabCheckErrorTypeId = ''; //表检查错误类型Id
  public checkDate = ''; //检查日期
  public checkUser = ''; //检查人
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"PrjDataBaseId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjDataBaseId(): string {
    return 'prjDataBaseId';
  } //项目数据库Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"ErrorLevelId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrorLevelId(): string {
    return 'errorLevelId';
  } //错误等级Id

  /**
   * 常量:"ErrorMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrorMsg(): string {
    return 'errorMsg';
  } //错误信息

  /**
   * 常量:"TabCheckErrorTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabCheckErrorTypeId(): string {
    return 'tabCheckErrorTypeId';
  } //表检查错误类型Id

  /**
   * 常量:"CheckDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CheckDate(): string {
    return 'checkDate';
  } //检查日期

  /**
   * 常量:"CheckUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CheckUser(): string {
    return 'checkUser';
  } //检查人

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
