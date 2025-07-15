/**
 * 类名:clsPrjFeatureEN
 * 表名:PrjFeature(00050322)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:55
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 功能(PrjFeature)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPrjFeatureEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PrjFeature'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FeatureId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 22;
  public static AttributeName = [
    'featureId',
    'featureName',
    'featureENName',
    'keyWords',
    'defaButtonName',
    'defaButtonName4Mvc',
    'regionTypeId',
    'groupName',
    'featureDescription',
    'inOutTypeId',
    'isNeedField',
    'isNeedTabFeature',
    'parentFeatureId',
    'parentFeatureName',
    'functionGroupId',
    'featureTypeId',
    'createUserId',
    'inUse',
    'orderNum',
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
  private mstrFeatureId = ''; //功能Id
  private mstrFeatureName = ''; //功能名称
  private mstrFeatureENName = ''; //功能英文名
  private mstrKeyWords = ''; //关键字
  private mstrDefaButtonName = ''; //默认按钮名
  private mstrDefaButtonName4Mvc = ''; //默认按钮名4Mvc
  private mstrRegionTypeId = ''; //区域类型Id
  private mstrGroupName = ''; //组名
  private mstrFeatureDescription = ''; //功能说明
  private mstrInOutTypeId = ''; //INOUT类型ID
  private mbolIsNeedField = false; //是否需要字段
  private mbolIsNeedTabFeature = false; //是否需要表功能
  private mstrParentFeatureId = ''; //父功能Id
  private mstrParentFeatureName = ''; //父功能名
  private mstrFunctionGroupId = ''; //函数组Id
  private mstrFeatureTypeId = ''; //功能类型Id
  private mstrCreateUserId = ''; //建立用户Id
  private mbolInUse = false; //是否在用
  private mintOrderNum = 0; //序号
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 功能Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFeatureId(value: string) {
    if (value != undefined) {
      this.featureId = value;
      this.hmProperty['featureId'] = true;
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
   * 默认按钮名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaButtonName(value: string) {
    if (value != undefined) {
      this.defaButtonName = value;
      this.hmProperty['defaButtonName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 默认按钮名4Mvc(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaButtonName4Mvc(value: string) {
    if (value != undefined) {
      this.defaButtonName4Mvc = value;
      this.hmProperty['defaButtonName4Mvc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionTypeId(value: string) {
    if (value != undefined) {
      this.regionTypeId = value;
      this.hmProperty['regionTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 组名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGroupName(value: string) {
    if (value != undefined) {
      this.groupName = value;
      this.hmProperty['groupName'] = true;
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
   * INOUT类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInOutTypeId(value: string) {
    if (value != undefined) {
      this.inOutTypeId = value;
      this.hmProperty['inOutTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要字段(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedField(value: boolean) {
    if (value != undefined) {
      this.isNeedField = value;
      this.hmProperty['isNeedField'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要表功能(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedTabFeature(value: boolean) {
    if (value != undefined) {
      this.isNeedTabFeature = value;
      this.hmProperty['isNeedTabFeature'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 父功能Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParentFeatureId(value: string) {
    if (value != undefined) {
      this.parentFeatureId = value;
      this.hmProperty['parentFeatureId'] = true;
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
   * 函数组Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFunctionGroupId(value: string) {
    if (value != undefined) {
      this.functionGroupId = value;
      this.hmProperty['functionGroupId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFeatureTypeId(value: string) {
    if (value != undefined) {
      this.featureTypeId = value;
      this.hmProperty['featureTypeId'] = true;
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
      case clsPrjFeatureEN.con_FeatureId:
        return this.featureId;
      case clsPrjFeatureEN.con_FeatureName:
        return this.featureName;
      case clsPrjFeatureEN.con_FeatureENName:
        return this.featureENName;
      case clsPrjFeatureEN.con_KeyWords:
        return this.keyWords;
      case clsPrjFeatureEN.con_DefaButtonName:
        return this.defaButtonName;
      case clsPrjFeatureEN.con_DefaButtonName4Mvc:
        return this.defaButtonName4Mvc;
      case clsPrjFeatureEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsPrjFeatureEN.con_GroupName:
        return this.groupName;
      case clsPrjFeatureEN.con_FeatureDescription:
        return this.featureDescription;
      case clsPrjFeatureEN.con_InOutTypeId:
        return this.inOutTypeId;
      case clsPrjFeatureEN.con_IsNeedField:
        return this.isNeedField;
      case clsPrjFeatureEN.con_IsNeedTabFeature:
        return this.isNeedTabFeature;
      case clsPrjFeatureEN.con_ParentFeatureId:
        return this.parentFeatureId;
      case clsPrjFeatureEN.con_ParentFeatureName:
        return this.parentFeatureName;
      case clsPrjFeatureEN.con_FunctionGroupId:
        return this.functionGroupId;
      case clsPrjFeatureEN.con_FeatureTypeId:
        return this.featureTypeId;
      case clsPrjFeatureEN.con_CreateUserId:
        return this.createUserId;
      case clsPrjFeatureEN.con_InUse:
        return this.inUse;
      case clsPrjFeatureEN.con_OrderNum:
        return this.orderNum;
      case clsPrjFeatureEN.con_UpdDate:
        return this.updDate;
      case clsPrjFeatureEN.con_UpdUser:
        return this.updUser;
      case clsPrjFeatureEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjFeature]中不存在!`;
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
      case clsPrjFeatureEN.con_FeatureId:
        this.featureId = strValue;
        this.hmProperty['featureId'] = true;
        break;
      case clsPrjFeatureEN.con_FeatureName:
        this.featureName = strValue;
        this.hmProperty['featureName'] = true;
        break;
      case clsPrjFeatureEN.con_FeatureENName:
        this.featureENName = strValue;
        this.hmProperty['featureENName'] = true;
        break;
      case clsPrjFeatureEN.con_KeyWords:
        this.keyWords = strValue;
        this.hmProperty['keyWords'] = true;
        break;
      case clsPrjFeatureEN.con_DefaButtonName:
        this.defaButtonName = strValue;
        this.hmProperty['defaButtonName'] = true;
        break;
      case clsPrjFeatureEN.con_DefaButtonName4Mvc:
        this.defaButtonName4Mvc = strValue;
        this.hmProperty['defaButtonName4Mvc'] = true;
        break;
      case clsPrjFeatureEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        this.hmProperty['regionTypeId'] = true;
        break;
      case clsPrjFeatureEN.con_GroupName:
        this.groupName = strValue;
        this.hmProperty['groupName'] = true;
        break;
      case clsPrjFeatureEN.con_FeatureDescription:
        this.featureDescription = strValue;
        this.hmProperty['featureDescription'] = true;
        break;
      case clsPrjFeatureEN.con_InOutTypeId:
        this.inOutTypeId = strValue;
        this.hmProperty['inOutTypeId'] = true;
        break;
      case clsPrjFeatureEN.con_IsNeedField:
        this.isNeedField = Boolean(strValue);
        this.hmProperty['isNeedField'] = true;
        break;
      case clsPrjFeatureEN.con_IsNeedTabFeature:
        this.isNeedTabFeature = Boolean(strValue);
        this.hmProperty['isNeedTabFeature'] = true;
        break;
      case clsPrjFeatureEN.con_ParentFeatureId:
        this.parentFeatureId = strValue;
        this.hmProperty['parentFeatureId'] = true;
        break;
      case clsPrjFeatureEN.con_ParentFeatureName:
        this.parentFeatureName = strValue;
        this.hmProperty['parentFeatureName'] = true;
        break;
      case clsPrjFeatureEN.con_FunctionGroupId:
        this.functionGroupId = strValue;
        this.hmProperty['functionGroupId'] = true;
        break;
      case clsPrjFeatureEN.con_FeatureTypeId:
        this.featureTypeId = strValue;
        this.hmProperty['featureTypeId'] = true;
        break;
      case clsPrjFeatureEN.con_CreateUserId:
        this.createUserId = strValue;
        this.hmProperty['createUserId'] = true;
        break;
      case clsPrjFeatureEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsPrjFeatureEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsPrjFeatureEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsPrjFeatureEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsPrjFeatureEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[PrjFeature]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public featureId = ''; //功能Id
  public featureName = ''; //功能名称
  public featureENName = ''; //功能英文名
  public keyWords = ''; //关键字
  public defaButtonName = ''; //默认按钮名
  public defaButtonName4Mvc = ''; //默认按钮名4Mvc
  public regionTypeId = ''; //区域类型Id
  public groupName = ''; //组名
  public featureDescription = ''; //功能说明
  public inOutTypeId = ''; //INOUT类型ID
  public isNeedField = false; //是否需要字段
  public isNeedTabFeature = false; //是否需要表功能
  public parentFeatureId = ''; //父功能Id
  public parentFeatureName = ''; //父功能名
  public functionGroupId = ''; //函数组Id
  public featureTypeId = ''; //功能类型Id
  public createUserId = ''; //建立用户Id
  public inUse = false; //是否在用
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
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
   * 常量:"DefaButtonName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaButtonName(): string {
    return 'defaButtonName';
  } //默认按钮名

  /**
   * 常量:"DefaButtonName4Mvc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaButtonName4Mvc(): string {
    return 'defaButtonName4Mvc';
  } //默认按钮名4Mvc

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"GroupName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"FeatureDescription"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureDescription(): string {
    return 'featureDescription';
  } //功能说明

  /**
   * 常量:"InOutTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InOutTypeId(): string {
    return 'inOutTypeId';
  } //INOUT类型ID

  /**
   * 常量:"IsNeedField"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedField(): string {
    return 'isNeedField';
  } //是否需要字段

  /**
   * 常量:"IsNeedTabFeature"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedTabFeature(): string {
    return 'isNeedTabFeature';
  } //是否需要表功能

  /**
   * 常量:"ParentFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParentFeatureId(): string {
    return 'parentFeatureId';
  } //父功能Id

  /**
   * 常量:"ParentFeatureName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParentFeatureName(): string {
    return 'parentFeatureName';
  } //父功能名

  /**
   * 常量:"FunctionGroupId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FunctionGroupId(): string {
    return 'functionGroupId';
  } //函数组Id

  /**
   * 常量:"FeatureTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureTypeId(): string {
    return 'featureTypeId';
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
    //return propName in new clsPrjFeatureEN();
    const instance = new clsPrjFeatureEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumPrjFeature {
  /**
   * 添加
   **/
  static readonly AddNewRecord_0136 = '0136';
  /**
   * 修改
   **/
  static readonly UpdateRecord_0137 = '0137';
  /**
   * 删除
   **/
  static readonly DelRecord_0138 = '0138';
  /**
   * 查询
   **/
  static readonly Query_0139 = '0139';
  /**
   * 复制记录
   **/
  static readonly CopyRecord_0141 = '0141';
  /**
   * 调整次序
   **/
  static readonly AdjustOrderNum_0142 = '0142';
  /**
   * 导出Excel
   **/
  static readonly ExportToFile_0143 = '0143';
  /**
   * 设置导出字段
   **/
  static readonly SetExportExcel4User_0144 = '0144';
  /**
   * 设置字段值
   **/
  static readonly SetFieldValue_0148 = '0148';
  /**
   * 绑定下拉框
   **/
  static readonly BindDdl_0152 = '0152';
  /**
   * 标志删除
   **/
  static readonly DelRecordBySign_0157 = '0157';
  /**
   * 恢复删除
   **/
  static readonly UnDelRecordBySign_0158 = '0158';
  /**
   * 移顶00
   **/
  static readonly GoTop_0159 = '0159';
  /**
   * 上移00
   **/
  static readonly UpMove_0160 = '0160';
  /**
   * 下移00
   **/
  static readonly DownMove_0161 = '0161';
  /**
   * 移底00
   **/
  static readonly GoButton_0162 = '0162';
  /**
   * 重序00
   **/
  static readonly ReOrder_0163 = '0163';
  /**
   * 添加-弹出层
   **/
  static readonly AddRecord_Popup_0164 = '0164';
  /**
   * 修改-弹出层
   **/
  static readonly UpdateRecord_Popup_0165 = '0165';
  /**
   * 批量修改
   **/
  static readonly BatchUpdateRecord_0166 = '0166';
  /**
   * 调整记录次序
   **/
  static readonly Tab_AdjustOrderNum_0167 = '0167';
  /**
   * 根据标志删除
   **/
  static readonly Tab_DelRecordBySign_0168 = '0168';
  /**
   * 恢复删除
   **/
  static readonly Tab_UnDelRecordBySign_0169 = '0169';
  /**
   * 设置字段值
   **/
  static readonly Tab_SetFieldValue_0170 = '0170';
  /**
   * XML相关操作
   **/
  static readonly Tab_XMLRelaOP_0171 = '0171';
  /**
   * 表相关事务操作
   **/
  static readonly Tab_TransEvent_0172 = '0172';
  /**
   * 绑定下拉框
   **/
  static readonly Tab_BindDdl_0173 = '0173';
  /**
   * 修改Gv
   **/
  static readonly UpdateRecord_Gv_0174 = '0174';
  /**
   * 删除Gv
   **/
  static readonly DelRecord_Gv_0175 = '0175';
  /**
   * 详细信息_Gv
   **/
  static readonly DetailRecord_Gv_0181 = '0181';
  /**
   * 选择记录_Gv
   **/
  static readonly SelectRecord_Gv_0182 = '0182';
  /**
   * 添加-关键字自增
   **/
  static readonly AddNewRecordWithMaxId_0183 = '0183';
  /**
   * 删除
   **/
  static readonly DelRecord_0184 = '0184';
  /**
   * 查询
   **/
  static readonly Query_0186 = '0186';
  /**
   * 根据标志删除
   **/
  static readonly Tab_DelRecordBySign_0190 = '0190';
  /**
   * XML相关操作
   **/
  static readonly Tab_XMLRelaOP_0192 = '0192';
  /**
   * 事务操作
   **/
  static readonly Tab_TransEvent_0193 = '0193';
  /**
   * 导出Excel
   **/
  static readonly ExportToFile_0196 = '0196';
  /**
   * 添加
   **/
  static readonly AddNewRecord_0197 = '0197';
  /**
   * 复制记录
   **/
  static readonly CopyRecord_0198 = '0198';
  /**
   * 修改
   **/
  static readonly UpdateRecord_0199 = '0199';
  /**
   * 设置字段值
   **/
  static readonly Tab_SetFieldValue_0210 = '0210';
  /**
   * 获取字段值
   **/
  static readonly Tab_SetFieldValue_0212 = '0212';
  /**
   * Json相关操作
   **/
  static readonly Tab_XMLRelaOP_0218 = '0218';
  /**
   * 条件串
   **/
  static readonly Tab_XMLRelaOP_0219 = '0219';
  /**
   * 数据同步
   **/
  static readonly Tab_XMLRelaOP_0220 = '0220';
  /**
   * 绑定下拉框
   **/
  static readonly Tab_BindDdl_0221 = '0221';
  /**
   * 调整记录次序
   **/
  static readonly AdjustOrderNum_0224 = '0224';
  /**
   * 排序函数
   **/
  static readonly AdjustOrderNum_0225 = '0225';
  /**
   * 绑定列表
   **/
  static readonly Tab_BindList_0232 = '0232';
  /**
   * 编辑
   **/
  static readonly EditRecord_0236 = '0236';
  /**
   * 区域代码生成
   **/
  static readonly Tab_XMLRelaOP_0238 = '0238';
  /**
   * 详细信息
   **/
  static readonly DetailRecord_0239 = '0239';
  /**
   * 自定义功能
   **/
  static readonly DefaultFeature_0240 = '0240';
  /**
   * 重序00
   **/
  static readonly Tab_ReOrder_1187 = '1187';
  /**
   * 移底00
   **/
  static readonly Tab_GoButton_1188 = '1188';
  /**
   * 下移00
   **/
  static readonly Tab_DownMove_1189 = '1189';
  /**
   * 移顶00
   **/
  static readonly Tab_GoTop_1194 = '1194';
  /**
   * 上移00
   **/
  static readonly Tab_UpMove_1195 = '1195';
  /**
   * 调整记录次序
   **/
  static readonly AdjustOrderNum_1196 = '1196';
}
