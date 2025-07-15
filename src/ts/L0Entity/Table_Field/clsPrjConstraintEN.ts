/**
 * 类名:clsPrjConstraintEN
 * 表名:PrjConstraint(00050331)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 00:55:17
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 约束(PrjConstraint)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPrjConstraintEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PrjConstraint'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PrjConstraintId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 14;
  public static AttributeName = [
    'prjConstraintId',
    'constraintName',
    'prjId',
    'tabId',
    'constraintTypeId',
    'constraintDescription',
    'createUserId',
    'isNullable',
    'checkDate',
    'errMsg',
    'inUse',
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
  private mstrPrjConstraintId = ''; //约束表Id
  private mstrConstraintName = ''; //约束名
  private mstrPrjId = ''; //工程Id
  private mstrTabId = ''; //表ID
  private mstrConstraintTypeId = ''; //约束类型Id
  private mstrConstraintDescription = ''; //约束说明
  private mstrCreateUserId = ''; //建立用户Id
  private mbolIsNullable = false; //是否可空
  private mstrCheckDate = ''; //检查日期
  private mstrErrMsg = ''; //错误信息
  private mbolInUse = false; //是否在用
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 约束表Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjConstraintId(value: string) {
    if (value != undefined) {
      this.prjConstraintId = value;
      this.hmProperty['prjConstraintId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 约束名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetConstraintName(value: string) {
    if (value != undefined) {
      this.constraintName = value;
      this.hmProperty['constraintName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程Id(说明:;字段类型:char;字段长度:4;是否可空:False)
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
   * 约束类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetConstraintTypeId(value: string) {
    if (value != undefined) {
      this.constraintTypeId = value;
      this.hmProperty['constraintTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 约束说明(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetConstraintDescription(value: string) {
    if (value != undefined) {
      this.constraintDescription = value;
      this.hmProperty['constraintDescription'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 建立用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreateUserId(value: string) {
    if (value != undefined) {
      this.createUserId = value;
      this.hmProperty['createUserId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否可空(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNullable(value: boolean) {
    if (value != undefined) {
      this.isNullable = value;
      this.hmProperty['isNullable'] = true;
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
   * 错误信息(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrMsg(value: string) {
    if (value != undefined) {
      this.errMsg = value;
      this.hmProperty['errMsg'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInUse(value: boolean) {
    if (value != undefined) {
      this.inUse = value;
      this.hmProperty['inUse'] = true;
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
      case clsPrjConstraintEN.con_PrjConstraintId:
        return this.prjConstraintId;
      case clsPrjConstraintEN.con_ConstraintName:
        return this.constraintName;
      case clsPrjConstraintEN.con_PrjId:
        return this.prjId;
      case clsPrjConstraintEN.con_TabId:
        return this.tabId;
      case clsPrjConstraintEN.con_ConstraintTypeId:
        return this.constraintTypeId;
      case clsPrjConstraintEN.con_ConstraintDescription:
        return this.constraintDescription;
      case clsPrjConstraintEN.con_CreateUserId:
        return this.createUserId;
      case clsPrjConstraintEN.con_IsNullable:
        return this.isNullable;
      case clsPrjConstraintEN.con_CheckDate:
        return this.checkDate;
      case clsPrjConstraintEN.con_ErrMsg:
        return this.errMsg;
      case clsPrjConstraintEN.con_InUse:
        return this.inUse;
      case clsPrjConstraintEN.con_UpdDate:
        return this.updDate;
      case clsPrjConstraintEN.con_UpdUser:
        return this.updUser;
      case clsPrjConstraintEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjConstraint]中不存在!`;
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
      case clsPrjConstraintEN.con_PrjConstraintId:
        this.prjConstraintId = strValue;
        this.hmProperty['prjConstraintId'] = true;
        break;
      case clsPrjConstraintEN.con_ConstraintName:
        this.constraintName = strValue;
        this.hmProperty['constraintName'] = true;
        break;
      case clsPrjConstraintEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsPrjConstraintEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsPrjConstraintEN.con_ConstraintTypeId:
        this.constraintTypeId = strValue;
        this.hmProperty['constraintTypeId'] = true;
        break;
      case clsPrjConstraintEN.con_ConstraintDescription:
        this.constraintDescription = strValue;
        this.hmProperty['constraintDescription'] = true;
        break;
      case clsPrjConstraintEN.con_CreateUserId:
        this.createUserId = strValue;
        this.hmProperty['createUserId'] = true;
        break;
      case clsPrjConstraintEN.con_IsNullable:
        this.isNullable = Boolean(strValue);
        this.hmProperty['isNullable'] = true;
        break;
      case clsPrjConstraintEN.con_CheckDate:
        this.checkDate = strValue;
        this.hmProperty['checkDate'] = true;
        break;
      case clsPrjConstraintEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsPrjConstraintEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsPrjConstraintEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsPrjConstraintEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsPrjConstraintEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[PrjConstraint]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public prjConstraintId = ''; //约束表Id
  public constraintName = ''; //约束名
  public prjId = ''; //工程Id
  public tabId = ''; //表ID
  public constraintTypeId = ''; //约束类型Id
  public constraintDescription = ''; //约束说明
  public createUserId = ''; //建立用户Id
  public isNullable = false; //是否可空
  public checkDate = ''; //检查日期
  public errMsg = ''; //错误信息
  public inUse = false; //是否在用
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"PrjConstraintId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjConstraintId(): string {
    return 'prjConstraintId';
  } //约束表Id

  /**
   * 常量:"ConstraintName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ConstraintName(): string {
    return 'constraintName';
  } //约束名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"ConstraintTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ConstraintTypeId(): string {
    return 'constraintTypeId';
  } //约束类型Id

  /**
   * 常量:"ConstraintDescription"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ConstraintDescription(): string {
    return 'constraintDescription';
  } //约束说明

  /**
   * 常量:"CreateUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CreateUserId(): string {
    return 'createUserId';
  } //建立用户Id

  /**
   * 常量:"IsNullable"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNullable(): string {
    return 'isNullable';
  } //是否可空

  /**
   * 常量:"CheckDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CheckDate(): string {
    return 'checkDate';
  } //检查日期

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

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
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

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
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsPrjConstraintEN();
    const instance = new clsPrjConstraintEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
