/**
 * 类名:clsLog4GeneTabCodeEN
 * 表名:Log4GeneTabCode(00050279)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:53
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
 * 生成表代码日志(Log4GeneTabCode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsLog4GeneTabCodeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'Log4GeneTabCode'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'mId',
    'userId',
    'tabId',
    'prjId',
    'gcPathId',
    'geneCodeDate',
    'isNeedGene',
    'versionGeneCode',
    'applicationTypeId',
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
  private mstrUserId = ''; //用户Id
  private mstrTabId = ''; //表ID
  private mstrPrjId = ''; //工程ID
  private mstrGcPathId = ''; //GC路径Id
  private mstrGeneCodeDate = ''; //生成代码日期
  private mbolIsNeedGene = false; //是否需要生成
  private mstrVersionGeneCode = ''; //生成代码版本
  private mintApplicationTypeId = 0; //应用程序类型ID
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
   * GC路径Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGcPathId(value: string) {
    if (value != undefined) {
      this.gcPathId = value;
      this.hmProperty['gcPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 生成代码日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGeneCodeDate(value: string) {
    if (value != undefined) {
      this.geneCodeDate = value;
      this.hmProperty['geneCodeDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要生成(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedGene(value: boolean) {
    if (value != undefined) {
      this.isNeedGene = value;
      this.hmProperty['isNeedGene'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 生成代码版本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVersionGeneCode(value: string) {
    if (value != undefined) {
      this.versionGeneCode = value;
      this.hmProperty['versionGeneCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 应用程序类型ID(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeId(value: number) {
    if (value != undefined) {
      this.applicationTypeId = value;
      this.hmProperty['applicationTypeId'] = true;
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
      case clsLog4GeneTabCodeEN.con_mId:
        return this.mId;
      case clsLog4GeneTabCodeEN.con_UserId:
        return this.userId;
      case clsLog4GeneTabCodeEN.con_TabId:
        return this.tabId;
      case clsLog4GeneTabCodeEN.con_PrjId:
        return this.prjId;
      case clsLog4GeneTabCodeEN.con_GcPathId:
        return this.gcPathId;
      case clsLog4GeneTabCodeEN.con_GeneCodeDate:
        return this.geneCodeDate;
      case clsLog4GeneTabCodeEN.con_IsNeedGene:
        return this.isNeedGene;
      case clsLog4GeneTabCodeEN.con_VersionGeneCode:
        return this.versionGeneCode;
      case clsLog4GeneTabCodeEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsLog4GeneTabCodeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Log4GeneTabCode]中不存在!`;
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
      case clsLog4GeneTabCodeEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_GcPathId:
        this.gcPathId = strValue;
        this.hmProperty['gcPathId'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_GeneCodeDate:
        this.geneCodeDate = strValue;
        this.hmProperty['geneCodeDate'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_IsNeedGene:
        this.isNeedGene = Boolean(strValue);
        this.hmProperty['isNeedGene'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_VersionGeneCode:
        this.versionGeneCode = strValue;
        this.hmProperty['versionGeneCode'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsLog4GeneTabCodeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[Log4GeneTabCode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public tabId = ''; //表ID
  public prjId = ''; //工程ID
  public gcPathId = ''; //GC路径Id
  public geneCodeDate = ''; //生成代码日期
  public isNeedGene = false; //是否需要生成
  public versionGeneCode = ''; //生成代码版本
  public applicationTypeId = 0; //应用程序类型ID
  public memo = ''; //说明

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
   * 常量:"TabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"GcPathId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GcPathId(): string {
    return 'gcPathId';
  } //GC路径Id

  /**
   * 常量:"GeneCodeDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GeneCodeDate(): string {
    return 'geneCodeDate';
  } //生成代码日期

  /**
   * 常量:"IsNeedGene"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNeedGene(): string {
    return 'isNeedGene';
  } //是否需要生成

  /**
   * 常量:"VersionGeneCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VersionGeneCode(): string {
    return 'versionGeneCode';
  } //生成代码版本

  /**
   * 常量:"ApplicationTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

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
