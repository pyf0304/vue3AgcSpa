/**
 * 类名:clsProjectsEN
 * 表名:Projects(00050002)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:17
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 工程(Projects)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsProjectsEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'Projects'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PrjId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'prjId',
    'prjName',
    'prjDomain',
    'tableSpace',
    'getWebApiFunc',
    'isRelaDataBase',
    'useStateId',
    'userId',
    'updDate',
    'memo',
    'javaPackageName',
    'isSupportMvc',
    'isoPrjName',
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
  private mstrPrjId = ''; //工程Id
  private mstrPrjName = ''; //工程名称
  private mstrPrjDomain = ''; //域/包名
  private mstrTableSpace = ''; //表空间
  private mstrGetWebApiFunc = ''; //获取WebApiUrl函数
  private mbolIsRelaDataBase = false; //是否关联数据库
  private mstrUseStateId = ''; //使用状态Id
  private mstrUserId = ''; //用户Id
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明
  private mstrJavaPackageName = ''; //Java包名
  private mbolIsSupportMvc = false; //是否支持Mvc
  private mstrIsoPrjName = ''; //ISO工程名

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
   * 工程名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
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
   * 域/包名(说明:;字段类型:varchar;字段长度:128;是否可空:True)
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
   * 表空间(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTableSpace(value: string) {
    if (value != undefined) {
      this.tableSpace = value;
      this.hmProperty['tableSpace'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 获取WebApiUrl函数(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGetWebApiFunc(value: string) {
    if (value != undefined) {
      this.getWebApiFunc = value;
      this.hmProperty['getWebApiFunc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否关联数据库(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsRelaDataBase(value: boolean) {
    if (value != undefined) {
      this.isRelaDataBase = value;
      this.hmProperty['isRelaDataBase'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 使用状态Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUseStateId(value: string) {
    if (value != undefined) {
      this.useStateId = value;
      this.hmProperty['useStateId'] = true;
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
   * Java包名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetJavaPackageName(value: string) {
    if (value != undefined) {
      this.javaPackageName = value;
      this.hmProperty['javaPackageName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否支持Mvc(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSupportMvc(value: boolean) {
    if (value != undefined) {
      this.isSupportMvc = value;
      this.hmProperty['isSupportMvc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * ISO工程名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsoPrjName(value: string) {
    if (value != undefined) {
      this.isoPrjName = value;
      this.hmProperty['isoPrjName'] = true;
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
      case clsProjectsEN.con_PrjId:
        return this.prjId;
      case clsProjectsEN.con_PrjName:
        return this.prjName;
      case clsProjectsEN.con_PrjDomain:
        return this.prjDomain;
      case clsProjectsEN.con_TableSpace:
        return this.tableSpace;
      case clsProjectsEN.con_GetWebApiFunc:
        return this.getWebApiFunc;
      case clsProjectsEN.con_IsRelaDataBase:
        return this.isRelaDataBase;
      case clsProjectsEN.con_UseStateId:
        return this.useStateId;
      case clsProjectsEN.con_UserId:
        return this.userId;
      case clsProjectsEN.con_UpdDate:
        return this.updDate;
      case clsProjectsEN.con_Memo:
        return this.memo;
      case clsProjectsEN.con_JavaPackageName:
        return this.javaPackageName;
      case clsProjectsEN.con_IsSupportMvc:
        return this.isSupportMvc;
      case clsProjectsEN.con_IsoPrjName:
        return this.isoPrjName;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Projects]中不存在!`;
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
      case clsProjectsEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsProjectsEN.con_PrjName:
        this.prjName = strValue;
        this.hmProperty['prjName'] = true;
        break;
      case clsProjectsEN.con_PrjDomain:
        this.prjDomain = strValue;
        this.hmProperty['prjDomain'] = true;
        break;
      case clsProjectsEN.con_TableSpace:
        this.tableSpace = strValue;
        this.hmProperty['tableSpace'] = true;
        break;
      case clsProjectsEN.con_GetWebApiFunc:
        this.getWebApiFunc = strValue;
        this.hmProperty['getWebApiFunc'] = true;
        break;
      case clsProjectsEN.con_IsRelaDataBase:
        this.isRelaDataBase = Boolean(strValue);
        this.hmProperty['isRelaDataBase'] = true;
        break;
      case clsProjectsEN.con_UseStateId:
        this.useStateId = strValue;
        this.hmProperty['useStateId'] = true;
        break;
      case clsProjectsEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsProjectsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsProjectsEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsProjectsEN.con_JavaPackageName:
        this.javaPackageName = strValue;
        this.hmProperty['javaPackageName'] = true;
        break;
      case clsProjectsEN.con_IsSupportMvc:
        this.isSupportMvc = Boolean(strValue);
        this.hmProperty['isSupportMvc'] = true;
        break;
      case clsProjectsEN.con_IsoPrjName:
        this.isoPrjName = strValue;
        this.hmProperty['isoPrjName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Projects]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public prjId = ''; //工程Id
  public prjName = ''; //工程名称
  public prjDomain = ''; //域/包名
  public tableSpace = ''; //表空间
  public getWebApiFunc = ''; //获取WebApiUrl函数
  public isRelaDataBase = false; //是否关联数据库
  public useStateId = ''; //使用状态Id
  public userId = ''; //用户Id
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public javaPackageName = ''; //Java包名
  public isSupportMvc = false; //是否支持Mvc
  public isoPrjName = ''; //ISO工程名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"PrjDomain"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjDomain(): string {
    return 'prjDomain';
  } //域/包名

  /**
   * 常量:"TableSpace"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TableSpace(): string {
    return 'tableSpace';
  } //表空间

  /**
   * 常量:"GetWebApiFunc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GetWebApiFunc(): string {
    return 'getWebApiFunc';
  } //获取WebApiUrl函数

  /**
   * 常量:"IsRelaDataBase"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsRelaDataBase(): string {
    return 'isRelaDataBase';
  } //是否关联数据库

  /**
   * 常量:"UseStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UseStateId(): string {
    return 'useStateId';
  } //使用状态Id

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

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
   * 常量:"JavaPackageName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_JavaPackageName(): string {
    return 'javaPackageName';
  } //Java包名

  /**
   * 常量:"IsSupportMvc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsSupportMvc(): string {
    return 'isSupportMvc';
  } //是否支持Mvc

  /**
   * 常量:"IsoPrjName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsoPrjName(): string {
    return 'isoPrjName';
  } //ISO工程名

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
    //return propName in new clsProjectsEN();
    const instance = new clsProjectsEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
