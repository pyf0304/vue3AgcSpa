/**
 * 类名:clsQxProjectsEN
 * 表名:QxProjects(00140006)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 00:28:09
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 工程(QxProjects)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsQxProjectsEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'QxProjects'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'QxPrjId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'qxPrjId',
    'prjName',
    'prjDomain',
    'isDefaultPrj',
    'qxPrjDataBaseId',
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
  private mstrQxPrjId = ''; //项目Id
  private mstrPrjName = ''; //工程名
  private mstrPrjDomain = ''; //工程域名
  private mbolIsDefaultPrj = false; //是否默认工程
  private mstrQxPrjDataBaseId = ''; //项目数据库Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改用户
  private mstrMemo = ''; //备注

  /**
   * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQxPrjId(value: string) {
    if (value != undefined) {
      this.qxPrjId = value;
      this.hmProperty['qxPrjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjName(value: string) {
    if (value != undefined) {
      this.prjName = value;
      this.hmProperty['prjName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程域名(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjDomain(value: string) {
    if (value != undefined) {
      this.prjDomain = value;
      this.hmProperty['prjDomain'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否默认工程(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDefaultPrj(value: boolean) {
    if (value != undefined) {
      this.isDefaultPrj = value;
      this.hmProperty['isDefaultPrj'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 项目数据库Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQxPrjDataBaseId(value: string) {
    if (value != undefined) {
      this.qxPrjDataBaseId = value;
      this.hmProperty['qxPrjDataBaseId'] = true;
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
      case clsQxProjectsEN.con_QxPrjId:
        return this.qxPrjId;
      case clsQxProjectsEN.con_PrjName:
        return this.prjName;
      case clsQxProjectsEN.con_PrjDomain:
        return this.prjDomain;
      case clsQxProjectsEN.con_IsDefaultPrj:
        return this.isDefaultPrj;
      case clsQxProjectsEN.con_QxPrjDataBaseId:
        return this.qxPrjDataBaseId;
      case clsQxProjectsEN.con_UpdDate:
        return this.updDate;
      case clsQxProjectsEN.con_UpdUser:
        return this.updUser;
      case clsQxProjectsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[QxProjects]中不存在！`;
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
      case clsQxProjectsEN.con_QxPrjId:
        this.qxPrjId = strValue;
        this.hmProperty['qxPrjId'] = true;
        break;
      case clsQxProjectsEN.con_PrjName:
        this.prjName = strValue;
        this.hmProperty['prjName'] = true;
        break;
      case clsQxProjectsEN.con_PrjDomain:
        this.prjDomain = strValue;
        this.hmProperty['prjDomain'] = true;
        break;
      case clsQxProjectsEN.con_IsDefaultPrj:
        this.isDefaultPrj = Boolean(strValue);
        this.hmProperty['isDefaultPrj'] = true;
        break;
      case clsQxProjectsEN.con_QxPrjDataBaseId:
        this.qxPrjDataBaseId = strValue;
        this.hmProperty['qxPrjDataBaseId'] = true;
        break;
      case clsQxProjectsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsQxProjectsEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsQxProjectsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[QxProjects]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public qxPrjId = ''; //项目Id
  public prjName = ''; //工程名
  public prjDomain = ''; //工程域名
  public isDefaultPrj = false; //是否默认工程
  public qxPrjDataBaseId = ''; //项目数据库Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改用户
  public memo = ''; //备注

  /**
   * 常量:"QxPrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_QxPrjId(): string {
    return 'qxPrjId';
  } //项目Id

  /**
   * 常量:"PrjName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名

  /**
   * 常量:"PrjDomain"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjDomain(): string {
    return 'prjDomain';
  } //工程域名

  /**
   * 常量:"IsDefaultPrj"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsDefaultPrj(): string {
    return 'isDefaultPrj';
  } //是否默认工程

  /**
   * 常量:"QxPrjDataBaseId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_QxPrjDataBaseId(): string {
    return 'qxPrjDataBaseId';
  } //项目数据库Id

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
