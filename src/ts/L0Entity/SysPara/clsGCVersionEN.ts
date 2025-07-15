/**
 * 类名:clsGCVersionEN
 * 表名:GCVersion(00050500)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:51
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 生成代码版本(GCVersion)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsGCVersionEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'GCVersion'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'GcVersionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'gcVersionId',
    'gcVersionDescription',
    'versionNumber',
    'versionCode',
    'publishDate',
    'versionState',
    'versionUrl',
    'prjId',
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
  private mstrGcVersionId = ''; //生成代码版本Id
  private mstrGcVersionDescription = ''; //版本说明
  private mstrVersionNumber = ''; //版本号
  private mstrVersionCode = ''; //版本代码
  private mstrPublishDate = ''; //发布日期
  private mbolVersionState = false; //版本状态
  private mstrVersionUrl = ''; //版本文件
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 生成代码版本Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGcVersionId(value: string) {
    if (value != undefined) {
      this.gcVersionId = value;
      this.hmProperty['gcVersionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 版本说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGcVersionDescription(value: string) {
    if (value != undefined) {
      this.gcVersionDescription = value;
      this.hmProperty['gcVersionDescription'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 版本号(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVersionNumber(value: string) {
    if (value != undefined) {
      this.versionNumber = value;
      this.hmProperty['versionNumber'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 版本代码(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVersionCode(value: string) {
    if (value != undefined) {
      this.versionCode = value;
      this.hmProperty['versionCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 发布日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPublishDate(value: string) {
    if (value != undefined) {
      this.publishDate = value;
      this.hmProperty['publishDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 版本状态(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVersionState(value: boolean) {
    if (value != undefined) {
      this.versionState = value;
      this.hmProperty['versionState'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 版本文件(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVersionUrl(value: string) {
    if (value != undefined) {
      this.versionUrl = value;
      this.hmProperty['versionUrl'] = true;
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
      case clsGCVersionEN.con_GcVersionId:
        return this.gcVersionId;
      case clsGCVersionEN.con_GcVersionDescription:
        return this.gcVersionDescription;
      case clsGCVersionEN.con_VersionNumber:
        return this.versionNumber;
      case clsGCVersionEN.con_VersionCode:
        return this.versionCode;
      case clsGCVersionEN.con_PublishDate:
        return this.publishDate;
      case clsGCVersionEN.con_VersionState:
        return this.versionState;
      case clsGCVersionEN.con_VersionUrl:
        return this.versionUrl;
      case clsGCVersionEN.con_PrjId:
        return this.prjId;
      case clsGCVersionEN.con_UpdDate:
        return this.updDate;
      case clsGCVersionEN.con_UpdUser:
        return this.updUser;
      case clsGCVersionEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[GCVersion]中不存在!`;
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
      case clsGCVersionEN.con_GcVersionId:
        this.gcVersionId = strValue;
        this.hmProperty['gcVersionId'] = true;
        break;
      case clsGCVersionEN.con_GcVersionDescription:
        this.gcVersionDescription = strValue;
        this.hmProperty['gcVersionDescription'] = true;
        break;
      case clsGCVersionEN.con_VersionNumber:
        this.versionNumber = strValue;
        this.hmProperty['versionNumber'] = true;
        break;
      case clsGCVersionEN.con_VersionCode:
        this.versionCode = strValue;
        this.hmProperty['versionCode'] = true;
        break;
      case clsGCVersionEN.con_PublishDate:
        this.publishDate = strValue;
        this.hmProperty['publishDate'] = true;
        break;
      case clsGCVersionEN.con_VersionState:
        this.versionState = Boolean(strValue);
        this.hmProperty['versionState'] = true;
        break;
      case clsGCVersionEN.con_VersionUrl:
        this.versionUrl = strValue;
        this.hmProperty['versionUrl'] = true;
        break;
      case clsGCVersionEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsGCVersionEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsGCVersionEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsGCVersionEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[GCVersion]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public gcVersionId = ''; //生成代码版本Id
  public gcVersionDescription = ''; //版本说明
  public versionNumber = ''; //版本号
  public versionCode = ''; //版本代码
  public publishDate = ''; //发布日期
  public versionState = false; //版本状态
  public versionUrl = ''; //版本文件
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"GcVersionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GcVersionId(): string {
    return 'gcVersionId';
  } //生成代码版本Id

  /**
   * 常量:"GcVersionDescription"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GcVersionDescription(): string {
    return 'gcVersionDescription';
  } //版本说明

  /**
   * 常量:"VersionNumber"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VersionNumber(): string {
    return 'versionNumber';
  } //版本号

  /**
   * 常量:"VersionCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VersionCode(): string {
    return 'versionCode';
  } //版本代码

  /**
   * 常量:"PublishDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PublishDate(): string {
    return 'publishDate';
  } //发布日期

  /**
   * 常量:"VersionState"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VersionState(): string {
    return 'versionState';
  } //版本状态

  /**
   * 常量:"VersionUrl"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VersionUrl(): string {
    return 'versionUrl';
  } //版本文件

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

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
