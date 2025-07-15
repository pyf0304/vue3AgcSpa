/**
 * 类名:clsQxUsersV2EN
 * 表名:QxUsersV2(00140110)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/31 10:33:20
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 用户V2(QxUsersV2)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQxUsersV2EN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QxUsersV2'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'id'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 23;
  public static AttributeName = [
    'createTime',
    'updateTime',
    'id',
    'departmentIdInt',
    'name',
    'userName',
    'password',
    'psalt',
    'nickName',
    'headImg',
    'email',
    'phone',
    'remark',
    'status',
    'openId',
    'updUser',
    'isArchive',
    'identityId',
    'stuTeacherId',
    'effitiveBeginDate',
    'effitiveEndDate',
    'userId',
    'effectiveDate',
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
  private mstrCreateTime = ''; //建立时间
  private mstrupdateTime = ''; //修改时间
  private mintid = 0; //id
  private mintDepartmentIdInt = 0; //部门Id
  private mstrname = ''; //姓名
  private mstrUserName = ''; //用户名
  private mstrPassword = ''; //口令
  private mstrpsalt = ''; //密码盐值
  private mstrnickName = ''; //呢称
  private mstrheadImg = ''; //头像
  private mstrEmail = ''; //邮箱
  private mstrphone = ''; //电话号码
  private mstrremark = ''; //备注
  private mintstatus = 0; //用户状态Id
  private mstrOpenId = ''; //微信openid
  private mstrUpdUser = ''; //修改用户
  private mbolIsArchive = false; //是否存档
  private mstrIdentityId = ''; //身份编号
  private mstrStuTeacherId = ''; //学工号
  private mstrEffitiveBeginDate = ''; //有效开始日期
  private mstrEffitiveEndDate = ''; //有效结束日期
  private mstrUserId = ''; //用户ID
  private mstrEffectiveDate = ''; //有效日期

  /**
   * 建立时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreateTime(value: string) {
    if (value != undefined) {
      this.createTime = value;
      this.hmProperty['createTime'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetupdateTime(value: string) {
    if (value != undefined) {
      this.updateTime = value;
      this.hmProperty['updateTime'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * id(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setid(value: number) {
    if (value != undefined) {
      this.id = value;
      this.hmProperty['id'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 部门Id(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepartmentIdInt(value: number) {
    if (value != undefined) {
      this.departmentIdInt = value;
      this.hmProperty['departmentIdInt'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 姓名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setname(value: string) {
    if (value != undefined) {
      this.name = value;
      this.hmProperty['name'] = true;
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
   * 密码盐值(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setpsalt(value: string) {
    if (value != undefined) {
      this.psalt = value;
      this.hmProperty['psalt'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 呢称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetnickName(value: string) {
    if (value != undefined) {
      this.nickName = value;
      this.hmProperty['nickName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 头像(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetheadImg(value: string) {
    if (value != undefined) {
      this.headImg = value;
      this.hmProperty['headImg'] = true;
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
  public Setphone(value: string) {
    if (value != undefined) {
      this.phone = value;
      this.hmProperty['phone'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setremark(value: string) {
    if (value != undefined) {
      this.remark = value;
      this.hmProperty['remark'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户状态Id(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Setstatus(value: number) {
    if (value != undefined) {
      this.status = value;
      this.hmProperty['status'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 微信openid(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOpenId(value: string) {
    if (value != undefined) {
      this.openId = value;
      this.hmProperty['openId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
   * 身份编号(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdentityId(value: string) {
    if (value != undefined) {
      this.identityId = value;
      this.hmProperty['identityId'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsQxUsersV2EN.con_CreateTime:
        return this.createTime;
      case clsQxUsersV2EN.con_updateTime:
        return this.updateTime;
      case clsQxUsersV2EN.con_id:
        return this.id;
      case clsQxUsersV2EN.con_DepartmentIdInt:
        return this.departmentIdInt;
      case clsQxUsersV2EN.con_name:
        return this.name;
      case clsQxUsersV2EN.con_UserName:
        return this.userName;
      case clsQxUsersV2EN.con_Password:
        return this.password;
      case clsQxUsersV2EN.con_psalt:
        return this.psalt;
      case clsQxUsersV2EN.con_nickName:
        return this.nickName;
      case clsQxUsersV2EN.con_headImg:
        return this.headImg;
      case clsQxUsersV2EN.con_Email:
        return this.email;
      case clsQxUsersV2EN.con_phone:
        return this.phone;
      case clsQxUsersV2EN.con_remark:
        return this.remark;
      case clsQxUsersV2EN.con_status:
        return this.status;
      case clsQxUsersV2EN.con_OpenId:
        return this.openId;
      case clsQxUsersV2EN.con_UpdUser:
        return this.updUser;
      case clsQxUsersV2EN.con_IsArchive:
        return this.isArchive;
      case clsQxUsersV2EN.con_IdentityId:
        return this.identityId;
      case clsQxUsersV2EN.con_StuTeacherId:
        return this.stuTeacherId;
      case clsQxUsersV2EN.con_EffitiveBeginDate:
        return this.effitiveBeginDate;
      case clsQxUsersV2EN.con_EffitiveEndDate:
        return this.effitiveEndDate;
      case clsQxUsersV2EN.con_UserId:
        return this.userId;
      case clsQxUsersV2EN.con_EffectiveDate:
        return this.effectiveDate;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxUsersV2]中不存在!`;
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
      case clsQxUsersV2EN.con_CreateTime:
        this.createTime = strValue;
        this.hmProperty['createTime'] = true;
        break;
      case clsQxUsersV2EN.con_updateTime:
        this.updateTime = strValue;
        this.hmProperty['updateTime'] = true;
        break;
      case clsQxUsersV2EN.con_id:
        this.id = Number(strValue);
        this.hmProperty['id'] = true;
        break;
      case clsQxUsersV2EN.con_DepartmentIdInt:
        this.departmentIdInt = Number(strValue);
        this.hmProperty['departmentIdInt'] = true;
        break;
      case clsQxUsersV2EN.con_name:
        this.name = strValue;
        this.hmProperty['name'] = true;
        break;
      case clsQxUsersV2EN.con_UserName:
        this.userName = strValue;
        this.hmProperty['userName'] = true;
        break;
      case clsQxUsersV2EN.con_Password:
        this.password = strValue;
        this.hmProperty['password'] = true;
        break;
      case clsQxUsersV2EN.con_psalt:
        this.psalt = strValue;
        this.hmProperty['psalt'] = true;
        break;
      case clsQxUsersV2EN.con_nickName:
        this.nickName = strValue;
        this.hmProperty['nickName'] = true;
        break;
      case clsQxUsersV2EN.con_headImg:
        this.headImg = strValue;
        this.hmProperty['headImg'] = true;
        break;
      case clsQxUsersV2EN.con_Email:
        this.email = strValue;
        this.hmProperty['email'] = true;
        break;
      case clsQxUsersV2EN.con_phone:
        this.phone = strValue;
        this.hmProperty['phone'] = true;
        break;
      case clsQxUsersV2EN.con_remark:
        this.remark = strValue;
        this.hmProperty['remark'] = true;
        break;
      case clsQxUsersV2EN.con_status:
        this.status = Number(strValue);
        this.hmProperty['status'] = true;
        break;
      case clsQxUsersV2EN.con_OpenId:
        this.openId = strValue;
        this.hmProperty['openId'] = true;
        break;
      case clsQxUsersV2EN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsQxUsersV2EN.con_IsArchive:
        this.isArchive = Boolean(strValue);
        this.hmProperty['isArchive'] = true;
        break;
      case clsQxUsersV2EN.con_IdentityId:
        this.identityId = strValue;
        this.hmProperty['identityId'] = true;
        break;
      case clsQxUsersV2EN.con_StuTeacherId:
        this.stuTeacherId = strValue;
        this.hmProperty['stuTeacherId'] = true;
        break;
      case clsQxUsersV2EN.con_EffitiveBeginDate:
        this.effitiveBeginDate = strValue;
        this.hmProperty['effitiveBeginDate'] = true;
        break;
      case clsQxUsersV2EN.con_EffitiveEndDate:
        this.effitiveEndDate = strValue;
        this.hmProperty['effitiveEndDate'] = true;
        break;
      case clsQxUsersV2EN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsQxUsersV2EN.con_EffectiveDate:
        this.effectiveDate = strValue;
        this.hmProperty['effectiveDate'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxUsersV2]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public createTime = ''; //建立时间
  public updateTime = ''; //修改时间
  public id = 0; //id
  public departmentIdInt = 0; //部门Id
  public name = ''; //姓名
  public userName = ''; //用户名
  public password = ''; //口令
  public psalt = ''; //密码盐值
  public nickName = ''; //呢称
  public headImg = ''; //头像
  public email = ''; //邮箱
  public phone = ''; //电话号码
  public remark = ''; //备注
  public status = 0; //用户状态Id
  public openId = ''; //微信openid
  public updUser = ''; //修改用户
  public isArchive = false; //是否存档
  public identityId = ''; //身份编号
  public stuTeacherId = ''; //学工号
  public effitiveBeginDate = ''; //有效开始日期
  public effitiveEndDate = ''; //有效结束日期
  public userId = ''; //用户ID
  public effectiveDate = ''; //有效日期

  /**
   * 常量:"CreateTime"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CreateTime(): string {
    return 'createTime';
  } //建立时间

  /**
   * 常量:"updateTime"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_updateTime(): string {
    return 'updateTime';
  } //修改时间

  /**
   * 常量:"id"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_id(): string {
    return 'id';
  } //id

  /**
   * 常量:"DepartmentIdInt"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DepartmentIdInt(): string {
    return 'departmentIdInt';
  } //部门Id

  /**
   * 常量:"name"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_name(): string {
    return 'name';
  } //姓名

  /**
   * 常量:"UserName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"Password"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Password(): string {
    return 'password';
  } //口令

  /**
   * 常量:"psalt"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_psalt(): string {
    return 'psalt';
  } //密码盐值

  /**
   * 常量:"nickName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_nickName(): string {
    return 'nickName';
  } //呢称

  /**
   * 常量:"headImg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_headImg(): string {
    return 'headImg';
  } //头像

  /**
   * 常量:"Email"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Email(): string {
    return 'email';
  } //邮箱

  /**
   * 常量:"phone"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_phone(): string {
    return 'phone';
  } //电话号码

  /**
   * 常量:"remark"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_remark(): string {
    return 'remark';
  } //备注

  /**
   * 常量:"status"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_status(): string {
    return 'status';
  } //用户状态Id

  /**
   * 常量:"OpenId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OpenId(): string {
    return 'openId';
  } //微信openid

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改用户

  /**
   * 常量:"IsArchive"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsArchive(): string {
    return 'isArchive';
  } //是否存档

  /**
   * 常量:"IdentityId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdentityId(): string {
    return 'identityId';
  } //身份编号

  /**
   * 常量:"StuTeacherId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_StuTeacherId(): string {
    return 'stuTeacherId';
  } //学工号

  /**
   * 常量:"EffitiveBeginDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EffitiveBeginDate(): string {
    return 'effitiveBeginDate';
  } //有效开始日期

  /**
   * 常量:"EffitiveEndDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EffitiveEndDate(): string {
    return 'effitiveEndDate';
  } //有效结束日期

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户ID

  /**
   * 常量:"EffectiveDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EffectiveDate(): string {
    return 'effectiveDate';
  } //有效日期

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
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsQxUsersV2EN();
    const instance = new clsQxUsersV2EN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
