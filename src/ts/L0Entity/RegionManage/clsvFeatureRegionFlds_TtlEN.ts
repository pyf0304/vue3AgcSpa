/**
 * 类名:clsvFeatureRegionFlds_TtlEN
 * 表名:vFeatureRegionFlds_Ttl(00050474)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:32
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * v功能区域字段_Ttl(vFeatureRegionFlds_Ttl)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFeatureRegionFlds_TtlEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFeatureRegionFlds_Ttl'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewFeatureId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 44;
  public static AttributeName = [
    'viewFeatureId',
    'regionId',
    'regionName',
    'regionTypeId',
    'regionTypeName',
    'featureId',
    'featureName',
    'keyWords',
    'tabFeatureId',
    'tabFeatureName',
    'checkTabFeature',
    'featureDescription',
    'buttonName',
    'buttonName4Mvc',
    'eventFuncName',
    'valueGivingModeId',
    'valueGivingModeName',
    'funcName',
    'defaultValue',
    'text',
    'groupName',
    'releTabId',
    'releFldId',
    'fieldTypeId',
    'fieldTypeName',
    'viewImplId',
    'viewImplName',
    'ctlTypeId',
    'ctlTypeName',
    'ctlCnName',
    'ctlTypeAbbr',
    'height',
    'width',
    'seqNum',
    'cssClass',
    'imageUrl',
    'inUse',
    'updUser',
    'updDate',
    'memo',
    'fldNum',
    'relaFldName',
    'relaTabName',
    'prjId',
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
      case clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId:
        return this.viewFeatureId;
      case clsvFeatureRegionFlds_TtlEN.con_RegionId:
        return this.regionId;
      case clsvFeatureRegionFlds_TtlEN.con_RegionName:
        return this.regionName;
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeId:
        return this.regionTypeId;
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeName:
        return this.regionTypeName;
      case clsvFeatureRegionFlds_TtlEN.con_FeatureId:
        return this.featureId;
      case clsvFeatureRegionFlds_TtlEN.con_FeatureName:
        return this.featureName;
      case clsvFeatureRegionFlds_TtlEN.con_KeyWords:
        return this.keyWords;
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureId:
        return this.tabFeatureId;
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureName:
        return this.tabFeatureName;
      case clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature:
        return this.checkTabFeature;
      case clsvFeatureRegionFlds_TtlEN.con_FeatureDescription:
        return this.featureDescription;
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName:
        return this.buttonName;
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc:
        return this.buttonName4Mvc;
      case clsvFeatureRegionFlds_TtlEN.con_EventFuncName:
        return this.eventFuncName;
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId:
        return this.valueGivingModeId;
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName:
        return this.valueGivingModeName;
      case clsvFeatureRegionFlds_TtlEN.con_FuncName:
        return this.funcName;
      case clsvFeatureRegionFlds_TtlEN.con_DefaultValue:
        return this.defaultValue;
      case clsvFeatureRegionFlds_TtlEN.con_Text:
        return this.text;
      case clsvFeatureRegionFlds_TtlEN.con_GroupName:
        return this.groupName;
      case clsvFeatureRegionFlds_TtlEN.con_ReleTabId:
        return this.releTabId;
      case clsvFeatureRegionFlds_TtlEN.con_ReleFldId:
        return this.releFldId;
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeName:
        return this.fieldTypeName;
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplId:
        return this.viewImplId;
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplName:
        return this.viewImplName;
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeName:
        return this.ctlTypeName;
      case clsvFeatureRegionFlds_TtlEN.con_CtlCnName:
        return this.ctlCnName;
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr:
        return this.ctlTypeAbbr;
      case clsvFeatureRegionFlds_TtlEN.con_Height:
        return this.height;
      case clsvFeatureRegionFlds_TtlEN.con_Width:
        return this.width;
      case clsvFeatureRegionFlds_TtlEN.con_SeqNum:
        return this.seqNum;
      case clsvFeatureRegionFlds_TtlEN.con_CssClass:
        return this.cssClass;
      case clsvFeatureRegionFlds_TtlEN.con_ImageUrl:
        return this.imageUrl;
      case clsvFeatureRegionFlds_TtlEN.con_InUse:
        return this.inUse;
      case clsvFeatureRegionFlds_TtlEN.con_UpdUser:
        return this.updUser;
      case clsvFeatureRegionFlds_TtlEN.con_UpdDate:
        return this.updDate;
      case clsvFeatureRegionFlds_TtlEN.con_Memo:
        return this.memo;
      case clsvFeatureRegionFlds_TtlEN.con_FldNum:
        return this.fldNum;
      case clsvFeatureRegionFlds_TtlEN.con_RelaFldName:
        return this.relaFldName;
      case clsvFeatureRegionFlds_TtlEN.con_RelaTabName:
        return this.relaTabName;
      case clsvFeatureRegionFlds_TtlEN.con_PrjId:
        return this.prjId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFeatureRegionFlds_Ttl]中不存在!`;
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
      case clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId:
        this.viewFeatureId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_RegionId:
        this.regionId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_RegionName:
        this.regionName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeId:
        this.regionTypeId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeName:
        this.regionTypeName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_FeatureId:
        this.featureId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_FeatureName:
        this.featureName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_KeyWords:
        this.keyWords = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureId:
        this.tabFeatureId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureName:
        this.tabFeatureName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature:
        this.checkTabFeature = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_FeatureDescription:
        this.featureDescription = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName:
        this.buttonName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc:
        this.buttonName4Mvc = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_EventFuncName:
        this.eventFuncName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId:
        this.valueGivingModeId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName:
        this.valueGivingModeName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_FuncName:
        this.funcName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_DefaultValue:
        this.defaultValue = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_Text:
        this.text = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_GroupName:
        this.groupName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ReleTabId:
        this.releTabId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ReleFldId:
        this.releFldId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeName:
        this.fieldTypeName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplId:
        this.viewImplId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplName:
        this.viewImplName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeName:
        this.ctlTypeName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_CtlCnName:
        this.ctlCnName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr:
        this.ctlTypeAbbr = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_Height:
        this.height = Number(strValue);
        break;
      case clsvFeatureRegionFlds_TtlEN.con_Width:
        this.width = Number(strValue);
        break;
      case clsvFeatureRegionFlds_TtlEN.con_SeqNum:
        this.seqNum = Number(strValue);
        break;
      case clsvFeatureRegionFlds_TtlEN.con_CssClass:
        this.cssClass = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_ImageUrl:
        this.imageUrl = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvFeatureRegionFlds_TtlEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_FldNum:
        this.fldNum = Number(strValue);
        break;
      case clsvFeatureRegionFlds_TtlEN.con_RelaFldName:
        this.relaFldName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_RelaTabName:
        this.relaTabName = strValue;
        break;
      case clsvFeatureRegionFlds_TtlEN.con_PrjId:
        this.prjId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFeatureRegionFlds_Ttl]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public viewFeatureId = ''; //界面功能Id
  public regionId = ''; //区域Id
  public regionName = ''; //区域名称
  public regionTypeId = ''; //区域类型Id
  public regionTypeName = ''; //区域类型名称
  public featureId = ''; //功能Id
  public featureName = ''; //功能名称
  public keyWords = ''; //关键字
  public tabFeatureId = ''; //表功能Id
  public tabFeatureName = ''; //表功能名
  public checkTabFeature = ''; //检查表功能
  public featureDescription = ''; //功能说明
  public buttonName = ''; //按钮名称
  public buttonName4Mvc = ''; //按钮名称4Mvc
  public eventFuncName = ''; //事件函数名
  public valueGivingModeId = ''; //给值方式Id
  public valueGivingModeName = ''; //给值方式名
  public funcName = ''; //函数名
  public defaultValue = ''; //缺省值
  public text = ''; //文本
  public groupName = ''; //组名
  public releTabId = ''; //相关表Id
  public releFldId = ''; //相关字段Id
  public fieldTypeId = ''; //字段类型Id
  public fieldTypeName = ''; //字段类型名
  public viewImplId = ''; //界面实现Id
  public viewImplName = ''; //界面实现名
  public ctlTypeId = ''; //控件类型号
  public ctlTypeName = ''; //控件类型名
  public ctlCnName = ''; //控件类型中文名
  public ctlTypeAbbr = ''; //控件类型缩写
  public height = 0; //高度
  public width = 0; //宽
  public seqNum = 0; //字段序号
  public cssClass = ''; //样式表
  public imageUrl = ''; //图片资源
  public inUse = false; //是否在用
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public fldNum = 0; //字段数
  public relaFldName = ''; //关系字段名
  public relaTabName = ''; //相关表名
  public prjId = ''; //工程ID

  /**
   * 常量:"ViewFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewFeatureId(): string {
    return 'viewFeatureId';
  } //界面功能Id

  /**
   * 常量:"RegionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionId(): string {
    return 'regionId';
  } //区域Id

  /**
   * 常量:"RegionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionName(): string {
    return 'regionName';
  } //区域名称

  /**
   * 常量:"RegionTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"RegionTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionTypeName(): string {
    return 'regionTypeName';
  } //区域类型名称

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
   * 常量:"KeyWords"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyWords(): string {
    return 'keyWords';
  } //关键字

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
   * 常量:"CheckTabFeature"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CheckTabFeature(): string {
    return 'checkTabFeature';
  } //检查表功能

  /**
   * 常量:"FeatureDescription"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureDescription(): string {
    return 'featureDescription';
  } //功能说明

  /**
   * 常量:"ButtonName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ButtonName(): string {
    return 'buttonName';
  } //按钮名称

  /**
   * 常量:"ButtonName4Mvc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ButtonName4Mvc(): string {
    return 'buttonName4Mvc';
  } //按钮名称4Mvc

  /**
   * 常量:"EventFuncName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EventFuncName(): string {
    return 'eventFuncName';
  } //事件函数名

  /**
   * 常量:"ValueGivingModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ValueGivingModeId(): string {
    return 'valueGivingModeId';
  } //给值方式Id

  /**
   * 常量:"ValueGivingModeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ValueGivingModeName(): string {
    return 'valueGivingModeName';
  } //给值方式名

  /**
   * 常量:"FuncName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"DefaultValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaultValue(): string {
    return 'defaultValue';
  } //缺省值

  /**
   * 常量:"Text"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Text(): string {
    return 'text';
  } //文本

  /**
   * 常量:"GroupName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"ReleTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReleTabId(): string {
    return 'releTabId';
  } //相关表Id

  /**
   * 常量:"ReleFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReleFldId(): string {
    return 'releFldId';
  } //相关字段Id

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"FieldTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeName(): string {
    return 'fieldTypeName';
  } //字段类型名

  /**
   * 常量:"ViewImplId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewImplId(): string {
    return 'viewImplId';
  } //界面实现Id

  /**
   * 常量:"ViewImplName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewImplName(): string {
    return 'viewImplName';
  } //界面实现名

  /**
   * 常量:"CtlTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"CtlTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeName(): string {
    return 'ctlTypeName';
  } //控件类型名

  /**
   * 常量:"CtlCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlCnName(): string {
    return 'ctlCnName';
  } //控件类型中文名

  /**
   * 常量:"CtlTypeAbbr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeAbbr(): string {
    return 'ctlTypeAbbr';
  } //控件类型缩写

  /**
   * 常量:"Height"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Height(): string {
    return 'height';
  } //高度

  /**
   * 常量:"Width"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Width(): string {
    return 'width';
  } //宽

  /**
   * 常量:"SeqNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SeqNum(): string {
    return 'seqNum';
  } //字段序号

  /**
   * 常量:"CssClass"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CssClass(): string {
    return 'cssClass';
  } //样式表

  /**
   * 常量:"ImageUrl"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ImageUrl(): string {
    return 'imageUrl';
  } //图片资源

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
   * 常量:"FldNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldNum(): string {
    return 'fldNum';
  } //字段数

  /**
   * 常量:"RelaFldName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaFldName(): string {
    return 'relaFldName';
  } //关系字段名

  /**
   * 常量:"RelaTabName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaTabName(): string {
    return 'relaTabName';
  } //相关表名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

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
