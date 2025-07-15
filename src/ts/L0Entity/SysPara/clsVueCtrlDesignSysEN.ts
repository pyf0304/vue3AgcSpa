/**
 * 类名:clsVueCtrlDesignSysEN
 * 表名:VueCtrlDesignSys(00050633)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/26 15:55:44
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * Vue控件设计体系(VueCtrlDesignSys)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsVueCtrlDesignSysEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'VueCtrlDesignSys'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'VueDesignSysId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = [
    'vueDesignSysId',
    'vueDesignSysName',
    'vueDesignSysEnName',
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
  private mstrVueDesignSysId = ''; //Vue控件设计体系Id
  private mstrVueDesignSysName = ''; //Vue控件设计体系名称
  private mstrVueDesignSysEnName = ''; //Vue控件设计体系英文名
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * Vue控件设计体系Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVueDesignSysId(value: string) {
    if (value != undefined) {
      this.vueDesignSysId = value;
      this.hmProperty['vueDesignSysId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Vue控件设计体系名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVueDesignSysName(value: string) {
    if (value != undefined) {
      this.vueDesignSysName = value;
      this.hmProperty['vueDesignSysName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Vue控件设计体系英文名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVueDesignSysEnName(value: string) {
    if (value != undefined) {
      this.vueDesignSysEnName = value;
      this.hmProperty['vueDesignSysEnName'] = true;
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
      case clsVueCtrlDesignSysEN.con_VueDesignSysId:
        return this.vueDesignSysId;
      case clsVueCtrlDesignSysEN.con_VueDesignSysName:
        return this.vueDesignSysName;
      case clsVueCtrlDesignSysEN.con_VueDesignSysEnName:
        return this.vueDesignSysEnName;
      case clsVueCtrlDesignSysEN.con_UpdDate:
        return this.updDate;
      case clsVueCtrlDesignSysEN.con_UpdUser:
        return this.updUser;
      case clsVueCtrlDesignSysEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[VueCtrlDesignSys]中不存在!`;
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
      case clsVueCtrlDesignSysEN.con_VueDesignSysId:
        this.vueDesignSysId = strValue;
        this.hmProperty['vueDesignSysId'] = true;
        break;
      case clsVueCtrlDesignSysEN.con_VueDesignSysName:
        this.vueDesignSysName = strValue;
        this.hmProperty['vueDesignSysName'] = true;
        break;
      case clsVueCtrlDesignSysEN.con_VueDesignSysEnName:
        this.vueDesignSysEnName = strValue;
        this.hmProperty['vueDesignSysEnName'] = true;
        break;
      case clsVueCtrlDesignSysEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsVueCtrlDesignSysEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsVueCtrlDesignSysEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[VueCtrlDesignSys]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public vueDesignSysId = ''; //Vue控件设计体系Id
  public vueDesignSysName = ''; //Vue控件设计体系名称
  public vueDesignSysEnName = ''; //Vue控件设计体系英文名
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"VueDesignSysId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VueDesignSysId(): string {
    return 'vueDesignSysId';
  } //Vue控件设计体系Id

  /**
   * 常量:"VueDesignSysName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VueDesignSysName(): string {
    return 'vueDesignSysName';
  } //Vue控件设计体系名称

  /**
   * 常量:"VueDesignSysEnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VueDesignSysEnName(): string {
    return 'vueDesignSysEnName';
  } //Vue控件设计体系英文名

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
    //return propName in new clsVueCtrlDesignSysEN();
    const instance = new clsVueCtrlDesignSysEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumVueCtrlDesignSys {
  /**
   * 未知
   **/
  static readonly Unknown_00 = '00';
  /**
   * 基于 Ant Design 设计体系
   **/
  static readonly AntDesignVue_01 = '01';
  /**
   * 基于 Element UI 设计体系
   **/
  static readonly ElementPlus_02 = '02';
}
