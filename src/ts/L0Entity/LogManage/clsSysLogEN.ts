/**
 * 类名:clsSysLogEN
 * 表名:SysLog(00050129)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:57
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
 * 系统日志(SysLog)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsSysLogEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'SysLog'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'mId',
    'loginTime',
    'loginDate',
    'tableName',
    'tableKey',
    'userIp',
    'opTypeId',
    'opContent',
    'opDate',
    'opTime',
    'prjId',
    'userId',
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
  private mstrLoginTime = ''; //登陆时间
  private mstrLoginDate = ''; //登陆日期
  private mstrTableName = ''; //表名
  private mstrTableKey = ''; //数据表关键字值
  private mstrUserIp = ''; //用户IP
  private mstrOpTypeId = ''; //操作类型Id
  private mstrOpContent = ''; //操作内容
  private mstrOpDate = ''; //操作日期
  private mstrOpTime = ''; //操作时间
  private mstrPrjId = ''; //工程ID
  private mstrUserId = ''; //用户Id
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
   * 登陆时间(说明:;字段类型:varchar;字段长度:6;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLoginTime(value: string) {
    if (value != undefined) {
      this.loginTime = value;
      this.hmProperty['loginTime'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 登陆日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLoginDate(value: string) {
    if (value != undefined) {
      this.loginDate = value;
      this.hmProperty['loginDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTableName(value: string) {
    if (value != undefined) {
      this.tableName = value;
      this.hmProperty['tableName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据表关键字值(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTableKey(value: string) {
    if (value != undefined) {
      this.tableKey = value;
      this.hmProperty['tableKey'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户IP(说明:;字段类型:varchar;字段长度:40;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserIp(value: string) {
    if (value != undefined) {
      this.userIp = value;
      this.hmProperty['userIp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOpTypeId(value: string) {
    if (value != undefined) {
      this.opTypeId = value;
      this.hmProperty['opTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作内容(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOpContent(value: string) {
    if (value != undefined) {
      this.opContent = value;
      this.hmProperty['opContent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOpDate(value: string) {
    if (value != undefined) {
      this.opDate = value;
      this.hmProperty['opDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作时间(说明:;字段类型:varchar;字段长度:6;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOpTime(value: string) {
    if (value != undefined) {
      this.opTime = value;
      this.hmProperty['opTime'] = true;
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
   * 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
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
      case clsSysLogEN.con_mId:
        return this.mId;
      case clsSysLogEN.con_LoginTime:
        return this.loginTime;
      case clsSysLogEN.con_LoginDate:
        return this.loginDate;
      case clsSysLogEN.con_TableName:
        return this.tableName;
      case clsSysLogEN.con_TableKey:
        return this.tableKey;
      case clsSysLogEN.con_UserIp:
        return this.userIp;
      case clsSysLogEN.con_OpTypeId:
        return this.opTypeId;
      case clsSysLogEN.con_OpContent:
        return this.opContent;
      case clsSysLogEN.con_OpDate:
        return this.opDate;
      case clsSysLogEN.con_OpTime:
        return this.opTime;
      case clsSysLogEN.con_PrjId:
        return this.prjId;
      case clsSysLogEN.con_UserId:
        return this.userId;
      case clsSysLogEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SysLog]中不存在!`;
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
      case clsSysLogEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsSysLogEN.con_LoginTime:
        this.loginTime = strValue;
        this.hmProperty['loginTime'] = true;
        break;
      case clsSysLogEN.con_LoginDate:
        this.loginDate = strValue;
        this.hmProperty['loginDate'] = true;
        break;
      case clsSysLogEN.con_TableName:
        this.tableName = strValue;
        this.hmProperty['tableName'] = true;
        break;
      case clsSysLogEN.con_TableKey:
        this.tableKey = strValue;
        this.hmProperty['tableKey'] = true;
        break;
      case clsSysLogEN.con_UserIp:
        this.userIp = strValue;
        this.hmProperty['userIp'] = true;
        break;
      case clsSysLogEN.con_OpTypeId:
        this.opTypeId = strValue;
        this.hmProperty['opTypeId'] = true;
        break;
      case clsSysLogEN.con_OpContent:
        this.opContent = strValue;
        this.hmProperty['opContent'] = true;
        break;
      case clsSysLogEN.con_OpDate:
        this.opDate = strValue;
        this.hmProperty['opDate'] = true;
        break;
      case clsSysLogEN.con_OpTime:
        this.opTime = strValue;
        this.hmProperty['opTime'] = true;
        break;
      case clsSysLogEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsSysLogEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsSysLogEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[SysLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public loginTime = ''; //登陆时间
  public loginDate = ''; //登陆日期
  public tableName = ''; //表名
  public tableKey = ''; //数据表关键字值
  public userIp = ''; //用户IP
  public opTypeId = ''; //操作类型Id
  public opContent = ''; //操作内容
  public opDate = ''; //操作日期
  public opTime = ''; //操作时间
  public prjId = ''; //工程ID
  public userId = ''; //用户Id
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"LoginTime"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LoginTime(): string {
    return 'loginTime';
  } //登陆时间

  /**
   * 常量:"LoginDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LoginDate(): string {
    return 'loginDate';
  } //登陆日期

  /**
   * 常量:"TableName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TableName(): string {
    return 'tableName';
  } //表名

  /**
   * 常量:"TableKey"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TableKey(): string {
    return 'tableKey';
  } //数据表关键字值

  /**
   * 常量:"UserIp"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserIp(): string {
    return 'userIp';
  } //用户IP

  /**
   * 常量:"OpTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OpTypeId(): string {
    return 'opTypeId';
  } //操作类型Id

  /**
   * 常量:"OpContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OpContent(): string {
    return 'opContent';
  } //操作内容

  /**
   * 常量:"OpDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OpDate(): string {
    return 'opDate';
  } //操作日期

  /**
   * 常量:"OpTime"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OpTime(): string {
    return 'opTime';
  } //操作时间

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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
