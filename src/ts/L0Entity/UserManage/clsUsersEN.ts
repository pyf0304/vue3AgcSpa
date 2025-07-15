/**
 * 类名:clsUsersEN
 * 表名:Users(00050001)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:42:05
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 用于用户管理(Users)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUsersEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'Users'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 22;
  public static AttributeName = [
    'userId',
    'userName',
    'departmentId',
    'userStateId',
    'roleId',
    'qxdj',
    'effectiveDate',
    'effitiveBeginDate',
    'effitiveEndDate',
    'password',
    'identityID',
    'email',
    'isGpUser',
    'registerPassword',
    'isRegister',
    'registerDate',
    'isAudit',
    'auditUser',
    'auditDate',
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
  private mstrUserId = ''; //用户Id
  private mstrUserName = ''; //用户名
  private mstrDepartmentId = ''; //部门ID
  private mstrUserStateId = ''; //用户状态号
  private mstrRoleId = ''; //角色ID
  private mintqxdj = 0; //权限等级
  private mstrEffectiveDate = ''; //有效日期
  private mstrEffitiveBeginDate = ''; //有效开始日期
  private mstrEffitiveEndDate = ''; //有效结束日期
  private mstrPassword = ''; //口令
  private mstrIdentityID = ''; //身份编号
  private mstrEmail = ''; //电子邮箱
  private mbolIsGpUser = false; //是否平台用户
  private mstrRegisterPassword = ''; //注册密码
  private mbolIsRegister = false; //是否注册
  private mstrRegisterDate = ''; //注册日期
  private mbolIsAudit = false; //是否审核
  private mstrAuditUser = ''; //审核人
  private mstrAuditDate = ''; //审核日期
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

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
   * 部门ID(说明:;字段类型:varchar;字段长度:6;是否可空:True)
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
   * 用户状态号(说明:;字段类型:char;字段长度:2;是否可空:True)
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
   * 角色ID(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleId(value: string) {
    if (value != undefined) {
      this.roleId = value;
      this.hmProperty['roleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 权限等级(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setqxdj(value: number) {
    if (value != undefined) {
      this.qxdj = value;
      this.hmProperty['qxdj'] = true;
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
   * 电子邮箱(说明:;字段类型:varchar;字段长度:50;是否可空:True)
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
   * 是否平台用户(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsGpUser(value: boolean) {
    if (value != undefined) {
      this.isGpUser = value;
      this.hmProperty['isGpUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 注册密码(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegisterPassword(value: string) {
    if (value != undefined) {
      this.registerPassword = value;
      this.hmProperty['registerPassword'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否注册(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsRegister(value: boolean) {
    if (value != undefined) {
      this.isRegister = value;
      this.hmProperty['isRegister'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 注册日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegisterDate(value: string) {
    if (value != undefined) {
      this.registerDate = value;
      this.hmProperty['registerDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否审核(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsAudit(value: boolean) {
    if (value != undefined) {
      this.isAudit = value;
      this.hmProperty['isAudit'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 审核人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAuditUser(value: string) {
    if (value != undefined) {
      this.auditUser = value;
      this.hmProperty['auditUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 审核日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAuditDate(value: string) {
    if (value != undefined) {
      this.auditDate = value;
      this.hmProperty['auditDate'] = true;
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
      case clsUsersEN.con_UserId:
        return this.userId;
      case clsUsersEN.con_UserName:
        return this.userName;
      case clsUsersEN.con_DepartmentId:
        return this.departmentId;
      case clsUsersEN.con_UserStateId:
        return this.userStateId;
      case clsUsersEN.con_RoleId:
        return this.roleId;
      case clsUsersEN.con_qxdj:
        return this.qxdj;
      case clsUsersEN.con_EffectiveDate:
        return this.effectiveDate;
      case clsUsersEN.con_EffitiveBeginDate:
        return this.effitiveBeginDate;
      case clsUsersEN.con_EffitiveEndDate:
        return this.effitiveEndDate;
      case clsUsersEN.con_Password:
        return this.password;
      case clsUsersEN.con_IdentityID:
        return this.identityID;
      case clsUsersEN.con_Email:
        return this.email;
      case clsUsersEN.con_IsGpUser:
        return this.isGpUser;
      case clsUsersEN.con_RegisterPassword:
        return this.registerPassword;
      case clsUsersEN.con_IsRegister:
        return this.isRegister;
      case clsUsersEN.con_RegisterDate:
        return this.registerDate;
      case clsUsersEN.con_IsAudit:
        return this.isAudit;
      case clsUsersEN.con_AuditUser:
        return this.auditUser;
      case clsUsersEN.con_AuditDate:
        return this.auditDate;
      case clsUsersEN.con_UpdDate:
        return this.updDate;
      case clsUsersEN.con_UpdUser:
        return this.updUser;
      case clsUsersEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Users]中不存在!`;
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
      case clsUsersEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsUsersEN.con_UserName:
        this.userName = strValue;
        this.hmProperty['userName'] = true;
        break;
      case clsUsersEN.con_DepartmentId:
        this.departmentId = strValue;
        this.hmProperty['departmentId'] = true;
        break;
      case clsUsersEN.con_UserStateId:
        this.userStateId = strValue;
        this.hmProperty['userStateId'] = true;
        break;
      case clsUsersEN.con_RoleId:
        this.roleId = strValue;
        this.hmProperty['roleId'] = true;
        break;
      case clsUsersEN.con_qxdj:
        this.qxdj = Number(strValue);
        this.hmProperty['qxdj'] = true;
        break;
      case clsUsersEN.con_EffectiveDate:
        this.effectiveDate = strValue;
        this.hmProperty['effectiveDate'] = true;
        break;
      case clsUsersEN.con_EffitiveBeginDate:
        this.effitiveBeginDate = strValue;
        this.hmProperty['effitiveBeginDate'] = true;
        break;
      case clsUsersEN.con_EffitiveEndDate:
        this.effitiveEndDate = strValue;
        this.hmProperty['effitiveEndDate'] = true;
        break;
      case clsUsersEN.con_Password:
        this.password = strValue;
        this.hmProperty['password'] = true;
        break;
      case clsUsersEN.con_IdentityID:
        this.identityID = strValue;
        this.hmProperty['identityID'] = true;
        break;
      case clsUsersEN.con_Email:
        this.email = strValue;
        this.hmProperty['email'] = true;
        break;
      case clsUsersEN.con_IsGpUser:
        this.isGpUser = Boolean(strValue);
        this.hmProperty['isGpUser'] = true;
        break;
      case clsUsersEN.con_RegisterPassword:
        this.registerPassword = strValue;
        this.hmProperty['registerPassword'] = true;
        break;
      case clsUsersEN.con_IsRegister:
        this.isRegister = Boolean(strValue);
        this.hmProperty['isRegister'] = true;
        break;
      case clsUsersEN.con_RegisterDate:
        this.registerDate = strValue;
        this.hmProperty['registerDate'] = true;
        break;
      case clsUsersEN.con_IsAudit:
        this.isAudit = Boolean(strValue);
        this.hmProperty['isAudit'] = true;
        break;
      case clsUsersEN.con_AuditUser:
        this.auditUser = strValue;
        this.hmProperty['auditUser'] = true;
        break;
      case clsUsersEN.con_AuditDate:
        this.auditDate = strValue;
        this.hmProperty['auditDate'] = true;
        break;
      case clsUsersEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUsersEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsUsersEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[Users]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public userId = ''; //用户Id
  public userName = ''; //用户名
  public departmentId = ''; //部门ID
  public userStateId = ''; //用户状态号
  public roleId = ''; //角色ID
  public qxdj = 0; //权限等级
  public effectiveDate = ''; //有效日期
  public effitiveBeginDate = ''; //有效开始日期
  public effitiveEndDate = ''; //有效结束日期
  public password = ''; //口令
  public identityID = ''; //身份编号
  public email = ''; //电子邮箱
  public isGpUser = false; //是否平台用户
  public registerPassword = ''; //注册密码
  public isRegister = false; //是否注册
  public registerDate = ''; //注册日期
  public isAudit = false; //是否审核
  public auditUser = ''; //审核人
  public auditDate = ''; //审核日期
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

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
  } //部门ID

  /**
   * 常量:"UserStateId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserStateId(): string {
    return 'userStateId';
  } //用户状态号

  /**
   * 常量:"RoleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RoleId(): string {
    return 'roleId';
  } //角色ID

  /**
   * 常量:"qxdj"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_qxdj(): string {
    return 'qxdj';
  } //权限等级

  /**
   * 常量:"EffectiveDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_EffectiveDate(): string {
    return 'effectiveDate';
  } //有效日期

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
   * 常量:"Password"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Password(): string {
    return 'password';
  } //口令

  /**
   * 常量:"IdentityID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdentityID(): string {
    return 'identityID';
  } //身份编号

  /**
   * 常量:"Email"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Email(): string {
    return 'email';
  } //电子邮箱

  /**
   * 常量:"IsGpUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsGpUser(): string {
    return 'isGpUser';
  } //是否平台用户

  /**
   * 常量:"RegisterPassword"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RegisterPassword(): string {
    return 'registerPassword';
  } //注册密码

  /**
   * 常量:"IsRegister"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsRegister(): string {
    return 'isRegister';
  } //是否注册

  /**
   * 常量:"RegisterDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RegisterDate(): string {
    return 'registerDate';
  } //注册日期

  /**
   * 常量:"IsAudit"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsAudit(): string {
    return 'isAudit';
  } //是否审核

  /**
   * 常量:"AuditUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AuditUser(): string {
    return 'auditUser';
  } //审核人

  /**
   * 常量:"AuditDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AuditDate(): string {
    return 'auditDate';
  } //审核日期

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
  } //修改者

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
