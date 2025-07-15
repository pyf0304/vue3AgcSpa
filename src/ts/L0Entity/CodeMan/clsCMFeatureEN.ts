/**
 * 类名:clsCMFeatureEN
 * 表名:CMFeature(00050517)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:05
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * CM功能(CMFeature)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCMFeatureEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CMFeature'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CmFeatureId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 17;
  public static AttributeName = [
    'cmFeatureId',
    'featureName',
    'featureENName',
    'keyWords',
    'featureDescription',
    'cmParentFeatureId',
    'parentFeatureName',
    'cmFeatureTypeId',
    'createUserId',
    'inUse',
    'orderNum',
    'funcModuleAgcId',
    'cmPrjId',
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
  private mstrCmFeatureId = ''; //功能Id
  private mstrFeatureName = ''; //功能名称
  private mstrFeatureENName = ''; //功能英文名
  private mstrKeyWords = ''; //关键字
  private mstrFeatureDescription = ''; //功能说明
  private mstrCmParentFeatureId = ''; //父功能Id
  private mstrParentFeatureName = ''; //父功能名
  private mstrCmFeatureTypeId = ''; //功能类型Id
  private mstrCreateUserId = ''; //建立用户Id
  private mbolInUse = false; //是否在用
  private mintOrderNum = 0; //序号
  private mstrFuncModuleAgcId = ''; //功能模块Id
  private mstrCmPrjId = ''; //CM工程Id
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 功能Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmFeatureId(value: string) {
    if (value != undefined) {
      this.cmFeatureId = value;
      this.hmProperty['cmFeatureId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFeatureName(value: string) {
    if (value != undefined) {
      this.featureName = value;
      this.hmProperty['featureName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能英文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFeatureENName(value: string) {
    if (value != undefined) {
      this.featureENName = value;
      this.hmProperty['featureENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关键字(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyWords(value: string) {
    if (value != undefined) {
      this.keyWords = value;
      this.hmProperty['keyWords'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能说明(说明:;字段类型:varchar;字段长度:4000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFeatureDescription(value: string) {
    if (value != undefined) {
      this.featureDescription = value;
      this.hmProperty['featureDescription'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 父功能Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmParentFeatureId(value: string) {
    if (value != undefined) {
      this.cmParentFeatureId = value;
      this.hmProperty['cmParentFeatureId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 父功能名(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParentFeatureName(value: string) {
    if (value != undefined) {
      this.parentFeatureName = value;
      this.hmProperty['parentFeatureName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmFeatureTypeId(value: string) {
    if (value != undefined) {
      this.cmFeatureTypeId = value;
      this.hmProperty['cmFeatureTypeId'] = true;
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
   * 功能模块Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncModuleAgcId(value: string) {
    if (value != undefined) {
      this.funcModuleAgcId = value;
      this.hmProperty['funcModuleAgcId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * CM工程Id(说明:;字段类型:char;字段长度:6;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCmPrjId(value: string) {
    if (value != undefined) {
      this.cmPrjId = value;
      this.hmProperty['cmPrjId'] = true;
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
      case clsCMFeatureEN.con_CmFeatureId:
        return this.cmFeatureId;
      case clsCMFeatureEN.con_FeatureName:
        return this.featureName;
      case clsCMFeatureEN.con_FeatureENName:
        return this.featureENName;
      case clsCMFeatureEN.con_KeyWords:
        return this.keyWords;
      case clsCMFeatureEN.con_FeatureDescription:
        return this.featureDescription;
      case clsCMFeatureEN.con_CmParentFeatureId:
        return this.cmParentFeatureId;
      case clsCMFeatureEN.con_ParentFeatureName:
        return this.parentFeatureName;
      case clsCMFeatureEN.con_CmFeatureTypeId:
        return this.cmFeatureTypeId;
      case clsCMFeatureEN.con_CreateUserId:
        return this.createUserId;
      case clsCMFeatureEN.con_InUse:
        return this.inUse;
      case clsCMFeatureEN.con_OrderNum:
        return this.orderNum;
      case clsCMFeatureEN.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsCMFeatureEN.con_CmPrjId:
        return this.cmPrjId;
      case clsCMFeatureEN.con_PrjId:
        return this.prjId;
      case clsCMFeatureEN.con_UpdDate:
        return this.updDate;
      case clsCMFeatureEN.con_UpdUser:
        return this.updUser;
      case clsCMFeatureEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMFeature]中不存在!`;
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
      case clsCMFeatureEN.con_CmFeatureId:
        this.cmFeatureId = strValue;
        this.hmProperty['cmFeatureId'] = true;
        break;
      case clsCMFeatureEN.con_FeatureName:
        this.featureName = strValue;
        this.hmProperty['featureName'] = true;
        break;
      case clsCMFeatureEN.con_FeatureENName:
        this.featureENName = strValue;
        this.hmProperty['featureENName'] = true;
        break;
      case clsCMFeatureEN.con_KeyWords:
        this.keyWords = strValue;
        this.hmProperty['keyWords'] = true;
        break;
      case clsCMFeatureEN.con_FeatureDescription:
        this.featureDescription = strValue;
        this.hmProperty['featureDescription'] = true;
        break;
      case clsCMFeatureEN.con_CmParentFeatureId:
        this.cmParentFeatureId = strValue;
        this.hmProperty['cmParentFeatureId'] = true;
        break;
      case clsCMFeatureEN.con_ParentFeatureName:
        this.parentFeatureName = strValue;
        this.hmProperty['parentFeatureName'] = true;
        break;
      case clsCMFeatureEN.con_CmFeatureTypeId:
        this.cmFeatureTypeId = strValue;
        this.hmProperty['cmFeatureTypeId'] = true;
        break;
      case clsCMFeatureEN.con_CreateUserId:
        this.createUserId = strValue;
        this.hmProperty['createUserId'] = true;
        break;
      case clsCMFeatureEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsCMFeatureEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsCMFeatureEN.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;
        this.hmProperty['funcModuleAgcId'] = true;
        break;
      case clsCMFeatureEN.con_CmPrjId:
        this.cmPrjId = strValue;
        this.hmProperty['cmPrjId'] = true;
        break;
      case clsCMFeatureEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsCMFeatureEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCMFeatureEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCMFeatureEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[CMFeature]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public cmFeatureId = ''; //功能Id
  public featureName = ''; //功能名称
  public featureENName = ''; //功能英文名
  public keyWords = ''; //关键字
  public featureDescription = ''; //功能说明
  public cmParentFeatureId = ''; //父功能Id
  public parentFeatureName = ''; //父功能名
  public cmFeatureTypeId = ''; //功能类型Id
  public createUserId = ''; //建立用户Id
  public inUse = false; //是否在用
  public orderNum = 0; //序号
  public funcModuleAgcId = ''; //功能模块Id
  public cmPrjId = ''; //CM工程Id
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"CmFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmFeatureId(): string {
    return 'cmFeatureId';
  } //功能Id

  /**
   * 常量:"FeatureName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"FeatureENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureENName(): string {
    return 'featureENName';
  } //功能英文名

  /**
   * 常量:"KeyWords"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyWords(): string {
    return 'keyWords';
  } //关键字

  /**
   * 常量:"FeatureDescription"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureDescription(): string {
    return 'featureDescription';
  } //功能说明

  /**
   * 常量:"CmParentFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmParentFeatureId(): string {
    return 'cmParentFeatureId';
  } //父功能Id

  /**
   * 常量:"ParentFeatureName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParentFeatureName(): string {
    return 'parentFeatureName';
  } //父功能名

  /**
   * 常量:"CmFeatureTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmFeatureTypeId(): string {
    return 'cmFeatureTypeId';
  } //功能类型Id

  /**
   * 常量:"CreateUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CreateUserId(): string {
    return 'createUserId';
  } //建立用户Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"FuncModuleAgcId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //CM工程Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

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
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumCMFeature {}
