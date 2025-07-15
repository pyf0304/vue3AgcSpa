/**
 * 类名:clsTabFeatureEN
 * 表名:TabFeature(00050463)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 23:45:17
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
 * 表功能(TabFeature)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsTabFeatureEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '06'; //前缀自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'TabFeature'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TabFeatureId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 23;
  public static AttributeName = [
    'tabFeatureId',
    'tabFeatureName',
    'tabId',
    'featureId',
    'funcNameCs',
    'isExtendedClass',
    'funcNameJs',
    'getDdlDataFuncName4Ex',
    'isForCSharp',
    'isForTypeScript',
    'isForDiv',
    'isNeedGC',
    'useTimes',
    'orderNum',
    'isNullable',
    'inUse',
    'checkDate',
    'toolTipText',
    'errMsg',
    'prjId',
    'updUser',
    'updDate',
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
  private mstrTabFeatureId = ''; //表功能Id
  private mstrTabFeatureName = ''; //表功能名
  private mstrTabId = ''; //表ID
  private mstrFeatureId = ''; //功能Id
  private mstrFuncNameCs = ''; //Cs函数名
  private mbolIsExtendedClass = false; //是否在扩展类
  private mstrFuncNameJs = ''; //Js函数名
  private mstrGetDdlDataFuncName4Ex = ''; //获取Ddl函数名
  private mbolIsForCSharp = false; //是否ForCSharp
  private mbolIsForTypeScript = false; //是否ForTypeScript
  private mbolIsForDiv = false; //是否针对Div内控件
  private mbolIsNeedGC = false; //是否需要生成代码
  private mintUseTimes = 0; //使用次数
  private mintOrderNum = 0; //序号
  private mbolIsNullable = false; //是否可空
  private mbolInUse = false; //是否在用
  private mstrCheckDate = ''; //检查日期
  private mstrToolTipText = ''; //提示文字
  private mstrErrMsg = ''; //错误信息
  private mstrPrjId = ''; //工程Id
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明

  /**
   * 表功能Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabFeatureId(value: string) {
    if (value != undefined) {
      this.tabFeatureId = value;
      this.hmProperty['tabFeatureId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表功能名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabFeatureName(value: string) {
    if (value != undefined) {
      this.tabFeatureName = value;
      this.hmProperty['tabFeatureName'] = true;
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
   * Cs函数名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncNameCs(value: string) {
    if (value != undefined) {
      this.funcNameCs = value;
      this.hmProperty['funcNameCs'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否在扩展类(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsExtendedClass(value: boolean) {
    if (value != undefined) {
      this.isExtendedClass = value;
      this.hmProperty['isExtendedClass'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Js函数名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncNameJs(value: string) {
    if (value != undefined) {
      this.funcNameJs = value;
      this.hmProperty['funcNameJs'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 获取Ddl函数名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGetDdlDataFuncName4Ex(value: string) {
    if (value != undefined) {
      this.getDdlDataFuncName4Ex = value;
      this.hmProperty['getDdlDataFuncName4Ex'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否ForCSharp(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsForCSharp(value: boolean) {
    if (value != undefined) {
      this.isForCSharp = value;
      this.hmProperty['isForCSharp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否ForTypeScript(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsForTypeScript(value: boolean) {
    if (value != undefined) {
      this.isForTypeScript = value;
      this.hmProperty['isForTypeScript'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否针对Div内控件(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsForDiv(value: boolean) {
    if (value != undefined) {
      this.isForDiv = value;
      this.hmProperty['isForDiv'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要生成代码(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedGC(value: boolean) {
    if (value != undefined) {
      this.isNeedGC = value;
      this.hmProperty['isNeedGC'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 使用次数(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUseTimes(value: number) {
    if (value != undefined) {
      this.useTimes = value;
      this.hmProperty['useTimes'] = true;
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
   * 提示文字(说明:;字段类型:varchar;字段长度:150;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetToolTipText(value: string) {
    if (value != undefined) {
      this.toolTipText = value;
      this.hmProperty['toolTipText'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsTabFeatureEN.con_TabFeatureId:
        return this.tabFeatureId;
      case clsTabFeatureEN.con_TabFeatureName:
        return this.tabFeatureName;
      case clsTabFeatureEN.con_TabId:
        return this.tabId;
      case clsTabFeatureEN.con_FeatureId:
        return this.featureId;
      case clsTabFeatureEN.con_FuncNameCs:
        return this.funcNameCs;
      case clsTabFeatureEN.con_IsExtendedClass:
        return this.isExtendedClass;
      case clsTabFeatureEN.con_FuncNameJs:
        return this.funcNameJs;
      case clsTabFeatureEN.con_GetDdlDataFuncName4Ex:
        return this.getDdlDataFuncName4Ex;
      case clsTabFeatureEN.con_IsForCSharp:
        return this.isForCSharp;
      case clsTabFeatureEN.con_IsForTypeScript:
        return this.isForTypeScript;
      case clsTabFeatureEN.con_IsForDiv:
        return this.isForDiv;
      case clsTabFeatureEN.con_IsNeedGC:
        return this.isNeedGC;
      case clsTabFeatureEN.con_UseTimes:
        return this.useTimes;
      case clsTabFeatureEN.con_OrderNum:
        return this.orderNum;
      case clsTabFeatureEN.con_IsNullable:
        return this.isNullable;
      case clsTabFeatureEN.con_InUse:
        return this.inUse;
      case clsTabFeatureEN.con_CheckDate:
        return this.checkDate;
      case clsTabFeatureEN.con_ToolTipText:
        return this.toolTipText;
      case clsTabFeatureEN.con_ErrMsg:
        return this.errMsg;
      case clsTabFeatureEN.con_PrjId:
        return this.prjId;
      case clsTabFeatureEN.con_UpdUser:
        return this.updUser;
      case clsTabFeatureEN.con_UpdDate:
        return this.updDate;
      case clsTabFeatureEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TabFeature]中不存在!`;
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
      case clsTabFeatureEN.con_TabFeatureId:
        this.tabFeatureId = strValue;
        this.hmProperty['tabFeatureId'] = true;
        break;
      case clsTabFeatureEN.con_TabFeatureName:
        this.tabFeatureName = strValue;
        this.hmProperty['tabFeatureName'] = true;
        break;
      case clsTabFeatureEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsTabFeatureEN.con_FeatureId:
        this.featureId = strValue;
        this.hmProperty['featureId'] = true;
        break;
      case clsTabFeatureEN.con_FuncNameCs:
        this.funcNameCs = strValue;
        this.hmProperty['funcNameCs'] = true;
        break;
      case clsTabFeatureEN.con_IsExtendedClass:
        this.isExtendedClass = Boolean(strValue);
        this.hmProperty['isExtendedClass'] = true;
        break;
      case clsTabFeatureEN.con_FuncNameJs:
        this.funcNameJs = strValue;
        this.hmProperty['funcNameJs'] = true;
        break;
      case clsTabFeatureEN.con_GetDdlDataFuncName4Ex:
        this.getDdlDataFuncName4Ex = strValue;
        this.hmProperty['getDdlDataFuncName4Ex'] = true;
        break;
      case clsTabFeatureEN.con_IsForCSharp:
        this.isForCSharp = Boolean(strValue);
        this.hmProperty['isForCSharp'] = true;
        break;
      case clsTabFeatureEN.con_IsForTypeScript:
        this.isForTypeScript = Boolean(strValue);
        this.hmProperty['isForTypeScript'] = true;
        break;
      case clsTabFeatureEN.con_IsForDiv:
        this.isForDiv = Boolean(strValue);
        this.hmProperty['isForDiv'] = true;
        break;
      case clsTabFeatureEN.con_IsNeedGC:
        this.isNeedGC = Boolean(strValue);
        this.hmProperty['isNeedGC'] = true;
        break;
      case clsTabFeatureEN.con_UseTimes:
        this.useTimes = Number(strValue);
        this.hmProperty['useTimes'] = true;
        break;
      case clsTabFeatureEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsTabFeatureEN.con_IsNullable:
        this.isNullable = Boolean(strValue);
        this.hmProperty['isNullable'] = true;
        break;
      case clsTabFeatureEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsTabFeatureEN.con_CheckDate:
        this.checkDate = strValue;
        this.hmProperty['checkDate'] = true;
        break;
      case clsTabFeatureEN.con_ToolTipText:
        this.toolTipText = strValue;
        this.hmProperty['toolTipText'] = true;
        break;
      case clsTabFeatureEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsTabFeatureEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsTabFeatureEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsTabFeatureEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsTabFeatureEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[TabFeature]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public tabFeatureId = ''; //表功能Id
  public tabFeatureName = ''; //表功能名
  public tabId = ''; //表ID
  public featureId = ''; //功能Id
  public funcNameCs = ''; //Cs函数名
  public isExtendedClass = false; //是否在扩展类
  public funcNameJs = ''; //Js函数名
  public getDdlDataFuncName4Ex = ''; //获取Ddl函数名
  public isForCSharp = false; //是否ForCSharp
  public isForTypeScript = false; //是否ForTypeScript
  public isForDiv = false; //是否针对Div内控件
  public isNeedGC = false; //是否需要生成代码
  public useTimes = 0; //使用次数
  public orderNum = 0; //序号
  public isNullable = false; //是否可空
  public inUse = false; //是否在用
  public checkDate = ''; //检查日期
  public toolTipText = ''; //提示文字
  public errMsg = ''; //错误信息
  public prjId = ''; //工程Id
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明

  /**
   * 常量:"TabFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabFeatureId(): string {
    return 'tabFeatureId';
  } //表功能Id

  /**
   * 常量:"TabFeatureName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabFeatureName(): string {
    return 'tabFeatureName';
  } //表功能名

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"FuncNameCs"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncNameCs(): string {
    return 'funcNameCs';
  } //Cs函数名

  /**
   * 常量:"IsExtendedClass"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExtendedClass(): string {
    return 'isExtendedClass';
  } //是否在扩展类

  /**
   * 常量:"FuncNameJs"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncNameJs(): string {
    return 'funcNameJs';
  } //Js函数名

  /**
   * 常量:"GetDdlDataFuncName4Ex"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GetDdlDataFuncName4Ex(): string {
    return 'getDdlDataFuncName4Ex';
  } //获取Ddl函数名

  /**
   * 常量:"IsForCSharp"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsForCSharp(): string {
    return 'isForCSharp';
  } //是否ForCSharp

  /**
   * 常量:"IsForTypeScript"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsForTypeScript(): string {
    return 'isForTypeScript';
  } //是否ForTypeScript

  /**
   * 常量:"IsForDiv"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsForDiv(): string {
    return 'isForDiv';
  } //是否针对Div内控件

  /**
   * 常量:"IsNeedGC"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedGC(): string {
    return 'isNeedGC';
  } //是否需要生成代码

  /**
   * 常量:"UseTimes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UseTimes(): string {
    return 'useTimes';
  } //使用次数

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"IsNullable"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNullable(): string {
    return 'isNullable';
  } //是否可空

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"CheckDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CheckDate(): string {
    return 'checkDate';
  } //检查日期

  /**
   * 常量:"ToolTipText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ToolTipText(): string {
    return 'toolTipText';
  } //提示文字

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

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
    //return propName in new clsTabFeatureEN();
    const instance = new clsTabFeatureEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
