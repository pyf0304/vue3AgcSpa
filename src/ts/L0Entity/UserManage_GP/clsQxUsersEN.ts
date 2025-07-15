/**
 * 类名:clsQxUsersEN
 * 表名:QxUsers(00140015)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 12:54:39
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 用户(QxUsers)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQxUsersEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QxUsers'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 20;
  public static AttributeName = [
    'userId',
    'userName',
    'departmentId',
    'userStateId',
    'effectiveDate',
    'password',
    'idCollege',
    'effitiveBeginDate',
    'effitiveEndDate',
    'stuTeacherId',
    'identityID',
    'isArchive',
    'openid',
    'email',
    'phoneNumber',
    'isSynch',
    'synchDate',
    'updDate',
    'updUser',
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
  private mstrUserId = ''; //用户ID
  private mstrUserName = ''; //用户名
  private mstrDepartmentId = ''; //部门Id
  private mstrUserStateId = ''; //用户状态Id
  private mstrEffectiveDate = ''; //有效日期
  private mstrPassword = ''; //口令
  private mstrIdCollege = ''; //学院流水号
  private mstrEffitiveBeginDate = ''; //有效开始日期
  private mstrEffitiveEndDate = ''; //有效结束日期
  private mstrStuTeacherId = ''; //学工号
  private mstrIdentityID = ''; //身份编号
  private mbolIsArchive = false; //是否存档
  private mstropenid = ''; //微信openid
  private mstrEmail = ''; //邮箱
  private mstrPhoneNumber = ''; //电话号码
  private mbolIsSynch = false; //是否同步
  private mstrSynchDate = ''; //同步日期
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改用户
  private mstrMemo = ''; //备注

  /**
   * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:False)
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
   * 用户名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserName(value: string) {
    if (value != undefined) {
      this.userName = value;
      this.hmProperty['userName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 部门Id(说明:;字段类型:varchar;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepartmentId(value: string) {
    if (value != undefined) {
      this.departmentId = value;
      this.hmProperty['departmentId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserStateId(value: string) {
    if (value != undefined) {
      this.userStateId = value;
      this.hmProperty['userStateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 有效日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEffectiveDate(value: string) {
    if (value != undefined) {
      this.effectiveDate = value;
      this.hmProperty['effectiveDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 口令(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPassword(value: string) {
    if (value != undefined) {
      this.password = value;
      this.hmProperty['password'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdCollege(value: string) {
    if (value != undefined) {
      this.idCollege = value;
      this.hmProperty['idCollege'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 有效开始日期(说明:;字段类型:varchar;字段长度:14;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEffitiveBeginDate(value: string) {
    if (value != undefined) {
      this.effitiveBeginDate = value;
      this.hmProperty['effitiveBeginDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 有效结束日期(说明:;字段类型:varchar;字段长度:14;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEffitiveEndDate(value: string) {
    if (value != undefined) {
      this.effitiveEndDate = value;
      this.hmProperty['effitiveEndDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学工号(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStuTeacherId(value: string) {
    if (value != undefined) {
      this.stuTeacherId = value;
      this.hmProperty['stuTeacherId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 身份编号(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdentityID(value: string) {
    if (value != undefined) {
      this.identityID = value;
      this.hmProperty['identityID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否存档(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsArchive(value: boolean) {
    if (value != undefined) {
      this.isArchive = value;
      this.hmProperty['isArchive'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 微信openid(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setopenid(value: string) {
    if (value != undefined) {
      this.openid = value;
      this.hmProperty['openid'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 邮箱(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEmail(value: string) {
    if (value != undefined) {
      this.email = value;
      this.hmProperty['email'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 电话号码(说明:;字段类型:varchar;字段长度:15;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPhoneNumber(value: string) {
    if (value != undefined) {
      this.phoneNumber = value;
      this.hmProperty['phoneNumber'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否同步(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSynch(value: boolean) {
    if (value != undefined) {
      this.isSynch = value;
      this.hmProperty['isSynch'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 同步日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSynchDate(value: string) {
    if (value != undefined) {
      this.synchDate = value;
      this.hmProperty['synchDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
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
   * 修改用户(说明:;字段类型:varchar;字段长度:18;是否可空:True)
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
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
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
      case clsQxUsersEN.con_UserId:
        return this.userId;
      case clsQxUsersEN.con_UserName:
        return this.userName;
      case clsQxUsersEN.con_DepartmentId:
        return this.departmentId;
      case clsQxUsersEN.con_UserStateId:
        return this.userStateId;
      case clsQxUsersEN.con_EffectiveDate:
        return this.effectiveDate;
      case clsQxUsersEN.con_Password:
        return this.password;
      case clsQxUsersEN.con_IdCollege:
        return this.idCollege;
      case clsQxUsersEN.con_EffitiveBeginDate:
        return this.effitiveBeginDate;
      case clsQxUsersEN.con_EffitiveEndDate:
        return this.effitiveEndDate;
      case clsQxUsersEN.con_StuTeacherId:
        return this.stuTeacherId;
      case clsQxUsersEN.con_IdentityID:
        return this.identityID;
      case clsQxUsersEN.con_IsArchive:
        return this.isArchive;
      case clsQxUsersEN.con_openid:
        return this.openid;
      case clsQxUsersEN.con_Email:
        return this.email;
      case clsQxUsersEN.con_PhoneNumber:
        return this.phoneNumber;
      case clsQxUsersEN.con_IsSynch:
        return this.isSynch;
      case clsQxUsersEN.con_SynchDate:
        return this.synchDate;
      case clsQxUsersEN.con_UpdDate:
        return this.updDate;
      case clsQxUsersEN.con_UpdUser:
        return this.updUser;
      case clsQxUsersEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxUsers]中不存在！`;
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
      case clsQxUsersEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsQxUsersEN.con_UserName:
        this.userName = strValue;
        this.hmProperty['userName'] = true;
        break;
      case clsQxUsersEN.con_DepartmentId:
        this.departmentId = strValue;
        this.hmProperty['departmentId'] = true;
        break;
      case clsQxUsersEN.con_UserStateId:
        this.userStateId = strValue;
        this.hmProperty['userStateId'] = true;
        break;
      case clsQxUsersEN.con_EffectiveDate:
        this.effectiveDate = strValue;
        this.hmProperty['effectiveDate'] = true;
        break;
      case clsQxUsersEN.con_Password:
        this.password = strValue;
        this.hmProperty['password'] = true;
        break;
      case clsQxUsersEN.con_IdCollege:
        this.idCollege = strValue;
        this.hmProperty['idCollege'] = true;
        break;
      case clsQxUsersEN.con_EffitiveBeginDate:
        this.effitiveBeginDate = strValue;
        this.hmProperty['effitiveBeginDate'] = true;
        break;
      case clsQxUsersEN.con_EffitiveEndDate:
        this.effitiveEndDate = strValue;
        this.hmProperty['effitiveEndDate'] = true;
        break;
      case clsQxUsersEN.con_StuTeacherId:
        this.stuTeacherId = strValue;
        this.hmProperty['stuTeacherId'] = true;
        break;
      case clsQxUsersEN.con_IdentityID:
        this.identityID = strValue;
        this.hmProperty['identityID'] = true;
        break;
      case clsQxUsersEN.con_IsArchive:
        this.isArchive = Boolean(strValue);
        this.hmProperty['isArchive'] = true;
        break;
      case clsQxUsersEN.con_openid:
        this.openid = strValue;
        this.hmProperty['openid'] = true;
        break;
      case clsQxUsersEN.con_Email:
        this.email = strValue;
        this.hmProperty['email'] = true;
        break;
      case clsQxUsersEN.con_PhoneNumber:
        this.phoneNumber = strValue;
        this.hmProperty['phoneNumber'] = true;
        break;
      case clsQxUsersEN.con_IsSynch:
        this.isSynch = Boolean(strValue);
        this.hmProperty['isSynch'] = true;
        break;
      case clsQxUsersEN.con_SynchDate:
        this.synchDate = strValue;
        this.hmProperty['synchDate'] = true;
        break;
      case clsQxUsersEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsQxUsersEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsQxUsersEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[QxUsers]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public userId = ''; //用户ID
  public userName = ''; //用户名
  public departmentId = ''; //部门Id
  public userStateId = ''; //用户状态Id
  public effectiveDate = ''; //有效日期
  public password = ''; //口令
  public idCollege = ''; //学院流水号
  public effitiveBeginDate = ''; //有效开始日期
  public effitiveEndDate = ''; //有效结束日期
  public stuTeacherId = ''; //学工号
  public identityID = ''; //身份编号
  public isArchive = false; //是否存档
  public openid = ''; //微信openid
  public email = ''; //邮箱
  public phoneNumber = ''; //电话号码
  public isSynch = false; //是否同步
  public synchDate = ''; //同步日期
  public updDate = ''; //修改日期
  public updUser = ''; //修改用户
  public memo = ''; //备注

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户ID

  /**
   * 常量:"UserName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"DepartmentId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DepartmentId(): string {
    return 'departmentId';
  } //部门Id

  /**
   * 常量:"UserStateId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserStateId(): string {
    return 'userStateId';
  } //用户状态Id

  /**
   * 常量:"EffectiveDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EffectiveDate(): string {
    return 'effectiveDate';
  } //有效日期

  /**
   * 常量:"Password"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Password(): string {
    return 'password';
  } //口令

  /**
   * 常量:"IdCollege"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdCollege(): string {
    return 'idCollege';
  } //学院流水号

  /**
   * 常量:"EffitiveBeginDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EffitiveBeginDate(): string {
    return 'effitiveBeginDate';
  } //有效开始日期

  /**
   * 常量:"EffitiveEndDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EffitiveEndDate(): string {
    return 'effitiveEndDate';
  } //有效结束日期

  /**
   * 常量:"StuTeacherId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StuTeacherId(): string {
    return 'stuTeacherId';
  } //学工号

  /**
   * 常量:"IdentityID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdentityID(): string {
    return 'identityID';
  } //身份编号

  /**
   * 常量:"IsArchive"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsArchive(): string {
    return 'isArchive';
  } //是否存档

  /**
   * 常量:"openid"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_openid(): string {
    return 'openid';
  } //微信openid

  /**
   * 常量:"Email"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Email(): string {
    return 'email';
  } //邮箱

  /**
   * 常量:"PhoneNumber"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PhoneNumber(): string {
    return 'phoneNumber';
  } //电话号码

  /**
   * 常量:"IsSynch"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSynch(): string {
    return 'isSynch';
  } //是否同步

  /**
   * 常量:"SynchDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SynchDate(): string {
    return 'synchDate';
  } //同步日期

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改用户

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

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
