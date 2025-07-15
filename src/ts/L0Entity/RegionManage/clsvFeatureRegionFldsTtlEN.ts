/**
 * 类名:clsvFeatureRegionFldsTtlEN
 * 表名:vFeatureRegionFlds_Ttl(00050474)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:20:19
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
 * v功能区域字段_Ttl(vFeatureRegionFldsTtl)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFeatureRegionFldsTtlEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFeatureRegionFldsTtl'; //当前表名,与该类相关的表名
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
      case clsvFeatureRegionFldsTtlEN.con_ViewFeatureId:
        return this.viewFeatureId;
      case clsvFeatureRegionFldsTtlEN.con_RegionId:
        return this.regionId;
      case clsvFeatureRegionFldsTtlEN.conRegionName:
        return this.regionName;
      case clsvFeatureRegionFldsTtlEN.conRegionTypeId:
        return this.regionTypeId;
      case clsvFeatureRegionFldsTtlEN.conRegionTypeName:
        return this.regionTypeName;
      case clsvFeatureRegionFldsTtlEN.con_FeatureId:
        return this.featureId;
      case clsvFeatureRegionFldsTtlEN.con_FeatureName:
        return this.featureName;
      case clsvFeatureRegionFldsTtlEN.conKeyWords:
        return this.keyWords;
      case clsvFeatureRegionFldsTtlEN.con_TabFeatureId:
        return this.tabFeatureId;
      case clsvFeatureRegionFldsTtlEN.conTabFeatureName:
        return this.tabFeatureName;
      case clsvFeatureRegionFldsTtlEN.conCheckTabFeature:
        return this.checkTabFeature;
      case clsvFeatureRegionFldsTtlEN.conFeatureDescription:
        return this.featureDescription;
      case clsvFeatureRegionFldsTtlEN.conButtonName:
        return this.buttonName;
      case clsvFeatureRegionFldsTtlEN.conButtonName4Mvc:
        return this.buttonName4Mvc;
      case clsvFeatureRegionFldsTtlEN.conEventFuncName:
        return this.eventFuncName;
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeId:
        return this.valueGivingModeId;
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeName:
        return this.valueGivingModeName;
      case clsvFeatureRegionFldsTtlEN.con_FuncName:
        return this.funcName;
      case clsvFeatureRegionFldsTtlEN.conDefaultValue:
        return this.defaultValue;
      case clsvFeatureRegionFldsTtlEN.con_Text:
        return this.text;
      case clsvFeatureRegionFldsTtlEN.conGroupName:
        return this.groupName;
      case clsvFeatureRegionFldsTtlEN.conReleTabId:
        return this.releTabId;
      case clsvFeatureRegionFldsTtlEN.conReleFldId:
        return this.releFldId;
      case clsvFeatureRegionFldsTtlEN.conFieldTypeId:
        return this.fieldTypeId;
      case clsvFeatureRegionFldsTtlEN.conFieldTypeName:
        return this.fieldTypeName;
      case clsvFeatureRegionFldsTtlEN.conViewImplId:
        return this.viewImplId;
      case clsvFeatureRegionFldsTtlEN.conViewImplName:
        return this.viewImplName;
      case clsvFeatureRegionFldsTtlEN.conCtlTypeId:
        return this.ctlTypeId;
      case clsvFeatureRegionFldsTtlEN.conCtlTypeName:
        return this.ctlTypeName;
      case clsvFeatureRegionFldsTtlEN.conCtlCnName:
        return this.ctlCnName;
      case clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr:
        return this.ctlTypeAbbr;
      case clsvFeatureRegionFldsTtlEN.conHeight:
        return this.height;
      case clsvFeatureRegionFldsTtlEN.conWidth:
        return this.width;
      case clsvFeatureRegionFldsTtlEN.conSeqNum:
        return this.seqNum;
      case clsvFeatureRegionFldsTtlEN.conCssClass:
        return this.cssClass;
      case clsvFeatureRegionFldsTtlEN.conImageUrl:
        return this.imageUrl;
      case clsvFeatureRegionFldsTtlEN.conInUse:
        return this.inUse;
      case clsvFeatureRegionFldsTtlEN.conUpdUser:
        return this.updUser;
      case clsvFeatureRegionFldsTtlEN.conUpdDate:
        return this.updDate;
      case clsvFeatureRegionFldsTtlEN.conMemo:
        return this.memo;
      case clsvFeatureRegionFldsTtlEN.conFldNum:
        return this.fldNum;
      case clsvFeatureRegionFldsTtlEN.conRelaFldName:
        return this.relaFldName;
      case clsvFeatureRegionFldsTtlEN.conRelaTabName:
        return this.relaTabName;
      case clsvFeatureRegionFldsTtlEN.conPrjId:
        return this.prjId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFeatureRegionFldsTtl]中不存在！`;
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
      case clsvFeatureRegionFldsTtlEN.con_ViewFeatureId:
        this.viewFeatureId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.con_RegionId:
        this.regionId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conRegionName:
        this.regionName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conRegionTypeId:
        this.regionTypeId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conRegionTypeName:
        this.regionTypeName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.con_FeatureId:
        this.featureId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.con_FeatureName:
        this.featureName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conKeyWords:
        this.keyWords = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.con_TabFeatureId:
        this.tabFeatureId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conTabFeatureName:
        this.tabFeatureName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conCheckTabFeature:
        this.checkTabFeature = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conFeatureDescription:
        this.featureDescription = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conButtonName:
        this.buttonName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conButtonName4Mvc:
        this.buttonName4Mvc = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conEventFuncName:
        this.eventFuncName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeId:
        this.valueGivingModeId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeName:
        this.valueGivingModeName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.con_FuncName:
        this.funcName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conDefaultValue:
        this.defaultValue = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.con_Text:
        this.text = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conGroupName:
        this.groupName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conReleTabId:
        this.releTabId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conReleFldId:
        this.releFldId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conFieldTypeId:
        this.fieldTypeId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conFieldTypeName:
        this.fieldTypeName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conViewImplId:
        this.viewImplId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conViewImplName:
        this.viewImplName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conCtlTypeId:
        this.ctlTypeId = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conCtlTypeName:
        this.ctlTypeName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conCtlCnName:
        this.ctlCnName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr:
        this.ctlTypeAbbr = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conHeight:
        this.height = Number(strValue);
        break;
      case clsvFeatureRegionFldsTtlEN.conWidth:
        this.width = Number(strValue);
        break;
      case clsvFeatureRegionFldsTtlEN.conSeqNum:
        this.seqNum = Number(strValue);
        break;
      case clsvFeatureRegionFldsTtlEN.conCssClass:
        this.cssClass = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conImageUrl:
        this.imageUrl = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conInUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvFeatureRegionFldsTtlEN.conUpdUser:
        this.updUser = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conUpdDate:
        this.updDate = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conMemo:
        this.memo = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conFldNum:
        this.fldNum = Number(strValue);
        break;
      case clsvFeatureRegionFldsTtlEN.conRelaFldName:
        this.relaFldName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conRelaTabName:
        this.relaTabName = strValue;
        break;
      case clsvFeatureRegionFldsTtlEN.conPrjId:
        this.prjId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFeatureRegionFldsTtl]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
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
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewFeatureId(): string {
    return 'viewFeatureId';
  } //界面功能Id

  /**
   * 常量:"RegionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RegionId(): string {
    return 'regionId';
  } //区域Id

  /**
   * 常量:"RegionName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conRegionName(): string {
    return 'regionName';
  } //区域名称

  /**
   * 常量:"RegionTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conRegionTypeId(): string {
    return 'regionTypeId';
  } //区域类型Id

  /**
   * 常量:"RegionTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conRegionTypeName(): string {
    return 'regionTypeName';
  } //区域类型名称

  /**
   * 常量:"FeatureId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"FeatureName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FeatureName(): string {
    return 'featureName';
  } //功能名称

  /**
   * 常量:"KeyWords"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conKeyWords(): string {
    return 'keyWords';
  } //关键字

  /**
   * 常量:"TabFeatureId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabFeatureId(): string {
    return 'tabFeatureId';
  } //表功能Id

  /**
   * 常量:"TabFeatureName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conTabFeatureName(): string {
    return 'tabFeatureName';
  } //表功能名

  /**
   * 常量:"CheckTabFeature"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCheckTabFeature(): string {
    return 'checkTabFeature';
  } //检查表功能

  /**
   * 常量:"FeatureDescription"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFeatureDescription(): string {
    return 'featureDescription';
  } //功能说明

  /**
   * 常量:"ButtonName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conButtonName(): string {
    return 'buttonName';
  } //按钮名称

  /**
   * 常量:"ButtonName4Mvc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conButtonName4Mvc(): string {
    return 'buttonName4Mvc';
  } //按钮名称4Mvc

  /**
   * 常量:"EventFuncName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conEventFuncName(): string {
    return 'eventFuncName';
  } //事件函数名

  /**
   * 常量:"ValueGivingModeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conValueGivingModeId(): string {
    return 'valueGivingModeId';
  } //给值方式Id

  /**
   * 常量:"ValueGivingModeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conValueGivingModeName(): string {
    return 'valueGivingModeName';
  } //给值方式名

  /**
   * 常量:"FuncName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"DefaultValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDefaultValue(): string {
    return 'defaultValue';
  } //缺省值

  /**
   * 常量:"Text"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Text(): string {
    return 'text';
  } //文本

  /**
   * 常量:"GroupName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conGroupName(): string {
    return 'groupName';
  } //组名

  /**
   * 常量:"ReleTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conReleTabId(): string {
    return 'releTabId';
  } //相关表Id

  /**
   * 常量:"ReleFldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conReleFldId(): string {
    return 'releFldId';
  } //相关字段Id

  /**
   * 常量:"FieldTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"FieldTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFieldTypeName(): string {
    return 'fieldTypeName';
  } //字段类型名

  /**
   * 常量:"ViewImplId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conViewImplId(): string {
    return 'viewImplId';
  } //界面实现Id

  /**
   * 常量:"ViewImplName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conViewImplName(): string {
    return 'viewImplName';
  } //界面实现名

  /**
   * 常量:"CtlTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"CtlTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCtlTypeName(): string {
    return 'ctlTypeName';
  } //控件类型名

  /**
   * 常量:"CtlCnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCtlCnName(): string {
    return 'ctlCnName';
  } //控件类型中文名

  /**
   * 常量:"CtlTypeAbbr"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCtlTypeAbbr(): string {
    return 'ctlTypeAbbr';
  } //控件类型缩写

  /**
   * 常量:"Height"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conHeight(): string {
    return 'height';
  } //高度

  /**
   * 常量:"Width"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conWidth(): string {
    return 'width';
  } //宽

  /**
   * 常量:"SeqNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conSeqNum(): string {
    return 'seqNum';
  } //字段序号

  /**
   * 常量:"CssClass"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCssClass(): string {
    return 'cssClass';
  } //样式表

  /**
   * 常量:"ImageUrl"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conImageUrl(): string {
    return 'imageUrl';
  } //图片资源

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conInUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMemo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"FldNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conFldNum(): string {
    return 'fldNum';
  } //字段数

  /**
   * 常量:"RelaFldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conRelaFldName(): string {
    return 'relaFldName';
  } //关系字段名

  /**
   * 常量:"RelaTabName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conRelaTabName(): string {
    return 'relaTabName';
  } //相关表名

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPrjId(): string {
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
