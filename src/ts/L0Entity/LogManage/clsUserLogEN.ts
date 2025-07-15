/**
 * 类名:clsUserLogEN
 * 表名:UserLog(00050130)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:34
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
 * 用户日志(UserLog)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserLogEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserLog'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 12;
  public static AttributeName = [
    'mId',
    'userId',
    'loginTime',
    'loginDate',
    'userIp',
    'objectTable',
    'usedValue',
    'updDate',
    'memo',
    'isDeleted',
    'orderNum',
    'deletedDate',
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
  private mstrUserId = ''; //用户Id
  private mstrLoginTime = ''; //登陆时间
  private mstrLoginDate = ''; //登陆日期
  private mstrUserIp = ''; //用户IP
  private mstrObjectTable = ''; //对象表
  private mstrUsedValue = ''; //使用值
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明
  private mbolIsDeleted = false; //是否删除
  private mintOrderNum = 0; //序号
  private mstrDeletedDate = ''; //删除日期

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
   * 对象表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetObjectTable(value: string) {
    if (value != undefined) {
      this.objectTable = value;
      this.hmProperty['objectTable'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 使用值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUsedValue(value: string) {
    if (value != undefined) {
      this.usedValue = value;
      this.hmProperty['usedValue'] = true;
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
   * 是否删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDeleted(value: boolean) {
    if (value != undefined) {
      this.isDeleted = value;
      this.hmProperty['isDeleted'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 删除日期(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDeletedDate(value: string) {
    if (value != undefined) {
      this.deletedDate = value;
      this.hmProperty['deletedDate'] = true;
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
      case clsUserLogEN.con_mId:
        return this.mId;
      case clsUserLogEN.con_UserId:
        return this.userId;
      case clsUserLogEN.con_LoginTime:
        return this.loginTime;
      case clsUserLogEN.con_LoginDate:
        return this.loginDate;
      case clsUserLogEN.con_UserIp:
        return this.userIp;
      case clsUserLogEN.con_ObjectTable:
        return this.objectTable;
      case clsUserLogEN.con_UsedValue:
        return this.usedValue;
      case clsUserLogEN.con_UpdDate:
        return this.updDate;
      case clsUserLogEN.con_Memo:
        return this.memo;
      case clsUserLogEN.con_IsDeleted:
        return this.isDeleted;
      case clsUserLogEN.con_OrderNum:
        return this.orderNum;
      case clsUserLogEN.con_DeletedDate:
        return this.deletedDate;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserLog]中不存在!`;
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
      case clsUserLogEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsUserLogEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsUserLogEN.con_LoginTime:
        this.loginTime = strValue;
        this.hmProperty['loginTime'] = true;
        break;
      case clsUserLogEN.con_LoginDate:
        this.loginDate = strValue;
        this.hmProperty['loginDate'] = true;
        break;
      case clsUserLogEN.con_UserIp:
        this.userIp = strValue;
        this.hmProperty['userIp'] = true;
        break;
      case clsUserLogEN.con_ObjectTable:
        this.objectTable = strValue;
        this.hmProperty['objectTable'] = true;
        break;
      case clsUserLogEN.con_UsedValue:
        this.usedValue = strValue;
        this.hmProperty['usedValue'] = true;
        break;
      case clsUserLogEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUserLogEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsUserLogEN.con_IsDeleted:
        this.isDeleted = Boolean(strValue);
        this.hmProperty['isDeleted'] = true;
        break;
      case clsUserLogEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsUserLogEN.con_DeletedDate:
        this.deletedDate = strValue;
        this.hmProperty['deletedDate'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserLog]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public userId = ''; //用户Id
  public loginTime = ''; //登陆时间
  public loginDate = ''; //登陆日期
  public userIp = ''; //用户IP
  public objectTable = ''; //对象表
  public usedValue = ''; //使用值
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public isDeleted = false; //是否删除
  public orderNum = 0; //序号
  public deletedDate = ''; //删除日期

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

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
   * 常量:"UserIp"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserIp(): string {
    return 'userIp';
  } //用户IP

  /**
   * 常量:"ObjectTable"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ObjectTable(): string {
    return 'objectTable';
  } //对象表

  /**
   * 常量:"UsedValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UsedValue(): string {
    return 'usedValue';
  } //使用值

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"IsDeleted"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsDeleted(): string {
    return 'isDeleted';
  } //是否删除

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"DeletedDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DeletedDate(): string {
    return 'deletedDate';
  } //删除日期

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
