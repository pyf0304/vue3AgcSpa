/**
 * 类名:clsvTabFeature_SimEN
 * 表名:vTabFeature_Sim(00050613)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:59:47
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
 * v表功能_Sim(vTabFeature_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvTabFeature_SimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vTabFeature_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TabFeatureId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 19;
  public static AttributeName = [
    'tabFeatureId',
    'tabFeatureName',
    'tabId',
    'orderNum',
    'inUse',
    'updUser',
    'updDate',
    'memo',
    'featureId',
    'funcNameCs',
    'getDdlDataFuncName4Ex',
    'cmPrjId',
    'funcNameJs',
    'isForDiv',
    'isForCSharp',
    'isForTypeScript',
    'isExtendedClass',
    'isNeedGC',
    'toolTipText',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvTabFeature_SimEN.con_TabFeatureId:
        return this.tabFeatureId;
      case clsvTabFeature_SimEN.con_TabFeatureName:
        return this.tabFeatureName;
      case clsvTabFeature_SimEN.con_TabId:
        return this.tabId;
      case clsvTabFeature_SimEN.con_OrderNum:
        return this.orderNum;
      case clsvTabFeature_SimEN.con_InUse:
        return this.inUse;
      case clsvTabFeature_SimEN.con_UpdUser:
        return this.updUser;
      case clsvTabFeature_SimEN.con_UpdDate:
        return this.updDate;
      case clsvTabFeature_SimEN.con_Memo:
        return this.memo;
      case clsvTabFeature_SimEN.con_FeatureId:
        return this.featureId;
      case clsvTabFeature_SimEN.con_FuncNameCs:
        return this.funcNameCs;
      case clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex:
        return this.getDdlDataFuncName4Ex;
      case clsvTabFeature_SimEN.con_CmPrjId:
        return this.cmPrjId;
      case clsvTabFeature_SimEN.con_FuncNameJs:
        return this.funcNameJs;
      case clsvTabFeature_SimEN.con_IsForDiv:
        return this.isForDiv;
      case clsvTabFeature_SimEN.con_IsForCSharp:
        return this.isForCSharp;
      case clsvTabFeature_SimEN.con_IsForTypeScript:
        return this.isForTypeScript;
      case clsvTabFeature_SimEN.con_IsExtendedClass:
        return this.isExtendedClass;
      case clsvTabFeature_SimEN.con_IsNeedGC:
        return this.isNeedGC;
      case clsvTabFeature_SimEN.con_ToolTipText:
        return this.toolTipText;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTabFeature_Sim]中不存在!`;
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
      case clsvTabFeature_SimEN.con_TabFeatureId:
        this.tabFeatureId = strValue;
        break;
      case clsvTabFeature_SimEN.con_TabFeatureName:
        this.tabFeatureName = strValue;
        break;
      case clsvTabFeature_SimEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvTabFeature_SimEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvTabFeature_SimEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvTabFeature_SimEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvTabFeature_SimEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvTabFeature_SimEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvTabFeature_SimEN.con_FeatureId:
        this.featureId = strValue;
        break;
      case clsvTabFeature_SimEN.con_FuncNameCs:
        this.funcNameCs = strValue;
        break;
      case clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex:
        this.getDdlDataFuncName4Ex = strValue;
        break;
      case clsvTabFeature_SimEN.con_CmPrjId:
        this.cmPrjId = strValue;
        break;
      case clsvTabFeature_SimEN.con_FuncNameJs:
        this.funcNameJs = strValue;
        break;
      case clsvTabFeature_SimEN.con_IsForDiv:
        this.isForDiv = Boolean(strValue);
        break;
      case clsvTabFeature_SimEN.con_IsForCSharp:
        this.isForCSharp = Boolean(strValue);
        break;
      case clsvTabFeature_SimEN.con_IsForTypeScript:
        this.isForTypeScript = Boolean(strValue);
        break;
      case clsvTabFeature_SimEN.con_IsExtendedClass:
        this.isExtendedClass = Boolean(strValue);
        break;
      case clsvTabFeature_SimEN.con_IsNeedGC:
        this.isNeedGC = Boolean(strValue);
        break;
      case clsvTabFeature_SimEN.con_ToolTipText:
        this.toolTipText = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTabFeature_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public orderNum = 0; //序号
  public inUse = false; //是否在用
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public featureId = ''; //功能Id
  public funcNameCs = ''; //Cs函数名
  public getDdlDataFuncName4Ex = ''; //获取Ddl函数名
  public cmPrjId = ''; //Cm工程Id
  public funcNameJs = ''; //Js函数名
  public isForDiv = false; //是否针对Div内控件
  public isForCSharp = false; //是否ForCSharp
  public isForTypeScript = false; //是否ForTypeScript
  public isExtendedClass = false; //是否在扩展类
  public isNeedGC = false; //是否需要生成代码
  public toolTipText = ''; //提示文字

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
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

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
   * 常量:"GetDdlDataFuncName4Ex"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GetDdlDataFuncName4Ex(): string {
    return 'getDdlDataFuncName4Ex';
  } //获取Ddl函数名

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  /**
   * 常量:"FuncNameJs"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncNameJs(): string {
    return 'funcNameJs';
  } //Js函数名

  /**
   * 常量:"IsForDiv"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsForDiv(): string {
    return 'isForDiv';
  } //是否针对Div内控件

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
   * 常量:"IsExtendedClass"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExtendedClass(): string {
    return 'isExtendedClass';
  } //是否在扩展类

  /**
   * 常量:"IsNeedGC"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedGC(): string {
    return 'isNeedGC';
  } //是否需要生成代码

  /**
   * 常量:"ToolTipText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ToolTipText(): string {
    return 'toolTipText';
  } //提示文字

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
    //return propName in new clsvTabFeature_SimEN();
    const instance = new clsvTabFeature_SimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
