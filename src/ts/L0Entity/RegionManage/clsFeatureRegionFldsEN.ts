/**
 * 类名:clsFeatureRegionFldsEN
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:59:06
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 功能区域字段(FeatureRegionFlds)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsFeatureRegionFldsEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'FeatureRegionFlds'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewFeatureId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 32;
  public static AttributeName = [
    'viewFeatureId',
    'regionId',
    'featureId',
    'tabFeatureId',
    'checkTabFeature',
    'featureDescription',
    'buttonName',
    'buttonName4Mvc',
    'commandName',
    'valueGivingModeId',
    'funcName',
    'defaultValue',
    'keyIdGetModeId',
    'text',
    'groupName',
    'releTabId',
    'releFldId',
    'eventFuncName',
    'fieldTypeId',
    'viewImplId',
    'ctlTypeId',
    'height',
    'width',
    'seqNum',
    'cssClass',
    'imageUrl',
    'inUse',
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
  private mstrViewFeatureId = ''; //界面功能Id
  private mstrRegionId = ''; //区域Id
  private mstrFeatureId = ''; //功能Id
  private mstrTabFeatureId = ''; //表功能Id
  private mstrCheckTabFeature = ''; //检查表功能
  private mstrFeatureDescription = ''; //功能说明
  private mstrButtonName = ''; //按钮名称
  private mstrButtonName4Mvc = ''; //按钮名称4Mvc
  private mstrCommandName = ''; //命令名
  private mstrValueGivingModeId = ''; //给值方式Id
  private mstrFuncName = ''; //函数名
  private mstrDefaultValue = ''; //缺省值
  private mstrKeyIdGetModeId = ''; //GC关键字获取方式Id
  private mstrText = ''; //文本
  private mstrGroupName = ''; //组名
  private mstrReleTabId = ''; //相关表Id
  private mstrReleFldId = ''; //相关字段Id
  private mstrEventFuncName = ''; //事件函数名
  private mstrFieldTypeId = ''; //字段类型Id
  private mstrViewImplId = ''; //界面实现Id
  private mstrCtlTypeId = ''; //控件类型号
  private mintHeight = 0; //高度
  private mintWidth = 0; //宽
  private mintSeqNum = 0; //字段序号
  private mstrCssClass = ''; //样式表
  private mstrImageUrl = ''; //图片资源
  private mbolInUse = false; //是否在用
  private mstrErrMsg = ''; //错误信息
  private mstrPrjId = ''; //工程Id
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明

  /**
   * 界面功能Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewFeatureId(value: string) {
    if (value != undefined) {
      this.viewFeatureId = value;
      this.hmProperty['viewFeatureId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 区域Id(说明:;字段类型:char;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionId(value: string) {
    if (value != undefined) {
      this.regionId = value;
      this.hmProperty['regionId'] = true;
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
   * 检查表功能(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCheckTabFeature(value: string) {
    if (value != undefined) {
      this.checkTabFeature = value;
      this.hmProperty['checkTabFeature'] = true;
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
   * 按钮名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetButtonName(value: string) {
    if (value != undefined) {
      this.buttonName = value;
      this.hmProperty['buttonName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 按钮名称4Mvc(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetButtonName4Mvc(value: string) {
    if (value != undefined) {
      this.buttonName4Mvc = value;
      this.hmProperty['buttonName4Mvc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 命令名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCommandName(value: string) {
    if (value != undefined) {
      this.commandName = value;
      this.hmProperty['commandName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 给值方式Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetValueGivingModeId(value: string) {
    if (value != undefined) {
      this.valueGivingModeId = value;
      this.hmProperty['valueGivingModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncName(value: string) {
    if (value != undefined) {
      this.funcName = value;
      this.hmProperty['funcName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缺省值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaultValue(value: string) {
    if (value != undefined) {
      this.defaultValue = value;
      this.hmProperty['defaultValue'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * GC关键字获取方式Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyIdGetModeId(value: string) {
    if (value != undefined) {
      this.keyIdGetModeId = value;
      this.hmProperty['keyIdGetModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetText(value: string) {
    if (value != undefined) {
      this.text = value;
      this.hmProperty['text'] = true;
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
   * 相关表Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReleTabId(value: string) {
    if (value != undefined) {
      this.releTabId = value;
      this.hmProperty['releTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 相关字段Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetReleFldId(value: string) {
    if (value != undefined) {
      this.releFldId = value;
      this.hmProperty['releFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 事件函数名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEventFuncName(value: string) {
    if (value != undefined) {
      this.eventFuncName = value;
      this.hmProperty['eventFuncName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFieldTypeId(value: string) {
    if (value != undefined) {
      this.fieldTypeId = value;
      this.hmProperty['fieldTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面实现Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewImplId(value: string) {
    if (value != undefined) {
      this.viewImplId = value;
      this.hmProperty['viewImplId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 控件类型号(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlTypeId(value: string) {
    if (value != undefined) {
      this.ctlTypeId = value;
      this.hmProperty['ctlTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 高度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHeight(value: number) {
    if (value != undefined) {
      this.height = value;
      this.hmProperty['height'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 宽(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWidth(value: number) {
    if (value != undefined) {
      this.width = value;
      this.hmProperty['width'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSeqNum(value: number) {
    if (value != undefined) {
      this.seqNum = value;
      this.hmProperty['seqNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 样式表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCssClass(value: string) {
    if (value != undefined) {
      this.cssClass = value;
      this.hmProperty['cssClass'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 图片资源(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetImageUrl(value: string) {
    if (value != undefined) {
      this.imageUrl = value;
      this.hmProperty['imageUrl'] = true;
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
      case clsFeatureRegionFldsEN.con_ViewFeatureId:
        return this.viewFeatureId;
      case clsFeatureRegionFldsEN.con_RegionId:
        return this.regionId;
      case clsFeatureRegionFldsEN.con_FeatureId:
        return this.featureId;
      case clsFeatureRegionFldsEN.con_TabFeatureId:
        return this.tabFeatureId;
      case clsFeatureRegionFldsEN.con_CheckTabFeature:
        return this.checkTabFeature;
      case clsFeatureRegionFldsEN.con_FeatureDescription:
        return this.featureDescription;
      case clsFeatureRegionFldsEN.con_ButtonName:
        return this.buttonName;
      case clsFeatureRegionFldsEN.con_ButtonName4Mvc:
        return this.buttonName4Mvc;
      case clsFeatureRegionFldsEN.con_CommandName:
        return this.commandName;
      case clsFeatureRegionFldsEN.con_ValueGivingModeId:
        return this.valueGivingModeId;
      case clsFeatureRegionFldsEN.con_FuncName:
        return this.funcName;
      case clsFeatureRegionFldsEN.con_DefaultValue:
        return this.defaultValue;
      case clsFeatureRegionFldsEN.con_KeyIdGetModeId:
        return this.keyIdGetModeId;
      case clsFeatureRegionFldsEN.con_Text:
        return this.text;
      case clsFeatureRegionFldsEN.con_GroupName:
        return this.groupName;
      case clsFeatureRegionFldsEN.con_ReleTabId:
        return this.releTabId;
      case clsFeatureRegionFldsEN.con_ReleFldId:
        return this.releFldId;
      case clsFeatureRegionFldsEN.con_EventFuncName:
        return this.eventFuncName;
      case clsFeatureRegionFldsEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsFeatureRegionFldsEN.con_ViewImplId:
        return this.viewImplId;
      case clsFeatureRegionFldsEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clsFeatureRegionFldsEN.con_Height:
        return this.height;
      case clsFeatureRegionFldsEN.con_Width:
        return this.width;
      case clsFeatureRegionFldsEN.con_SeqNum:
        return this.seqNum;
      case clsFeatureRegionFldsEN.con_CssClass:
        return this.cssClass;
      case clsFeatureRegionFldsEN.con_ImageUrl:
        return this.imageUrl;
      case clsFeatureRegionFldsEN.con_InUse:
        return this.inUse;
      case clsFeatureRegionFldsEN.con_ErrMsg:
        return this.errMsg;
      case clsFeatureRegionFldsEN.con_PrjId:
        return this.prjId;
      case clsFeatureRegionFldsEN.con_UpdUser:
        return this.updUser;
      case clsFeatureRegionFldsEN.con_UpdDate:
        return this.updDate;
      case clsFeatureRegionFldsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FeatureRegionFlds]中不存在!`;
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
      case clsFeatureRegionFldsEN.con_ViewFeatureId:
        this.viewFeatureId = strValue;
        this.hmProperty['viewFeatureId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_RegionId:
        this.regionId = strValue;
        this.hmProperty['regionId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_FeatureId:
        this.featureId = strValue;
        this.hmProperty['featureId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_TabFeatureId:
        this.tabFeatureId = strValue;
        this.hmProperty['tabFeatureId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_CheckTabFeature:
        this.checkTabFeature = strValue;
        this.hmProperty['checkTabFeature'] = true;
        break;
      case clsFeatureRegionFldsEN.con_FeatureDescription:
        this.featureDescription = strValue;
        this.hmProperty['featureDescription'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ButtonName:
        this.buttonName = strValue;
        this.hmProperty['buttonName'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ButtonName4Mvc:
        this.buttonName4Mvc = strValue;
        this.hmProperty['buttonName4Mvc'] = true;
        break;
      case clsFeatureRegionFldsEN.con_CommandName:
        this.commandName = strValue;
        this.hmProperty['commandName'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ValueGivingModeId:
        this.valueGivingModeId = strValue;
        this.hmProperty['valueGivingModeId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_FuncName:
        this.funcName = strValue;
        this.hmProperty['funcName'] = true;
        break;
      case clsFeatureRegionFldsEN.con_DefaultValue:
        this.defaultValue = strValue;
        this.hmProperty['defaultValue'] = true;
        break;
      case clsFeatureRegionFldsEN.con_KeyIdGetModeId:
        this.keyIdGetModeId = strValue;
        this.hmProperty['keyIdGetModeId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_Text:
        this.text = strValue;
        this.hmProperty['text'] = true;
        break;
      case clsFeatureRegionFldsEN.con_GroupName:
        this.groupName = strValue;
        this.hmProperty['groupName'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ReleTabId:
        this.releTabId = strValue;
        this.hmProperty['releTabId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ReleFldId:
        this.releFldId = strValue;
        this.hmProperty['releFldId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_EventFuncName:
        this.eventFuncName = strValue;
        this.hmProperty['eventFuncName'] = true;
        break;
      case clsFeatureRegionFldsEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        this.hmProperty['fieldTypeId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ViewImplId:
        this.viewImplId = strValue;
        this.hmProperty['viewImplId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_Height:
        this.height = Number(strValue);
        this.hmProperty['height'] = true;
        break;
      case clsFeatureRegionFldsEN.con_Width:
        this.width = Number(strValue);
        this.hmProperty['width'] = true;
        break;
      case clsFeatureRegionFldsEN.con_SeqNum:
        this.seqNum = Number(strValue);
        this.hmProperty['seqNum'] = true;
        break;
      case clsFeatureRegionFldsEN.con_CssClass:
        this.cssClass = strValue;
        this.hmProperty['cssClass'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ImageUrl:
        this.imageUrl = strValue;
        this.hmProperty['imageUrl'] = true;
        break;
      case clsFeatureRegionFldsEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsFeatureRegionFldsEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsFeatureRegionFldsEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsFeatureRegionFldsEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsFeatureRegionFldsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsFeatureRegionFldsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[FeatureRegionFlds]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public featureId = ''; //功能Id
  public tabFeatureId = ''; //表功能Id
  public checkTabFeature = ''; //检查表功能
  public featureDescription = ''; //功能说明
  public buttonName = ''; //按钮名称
  public buttonName4Mvc = ''; //按钮名称4Mvc
  public commandName = ''; //命令名
  public valueGivingModeId = ''; //给值方式Id
  public funcName = ''; //函数名
  public defaultValue = ''; //缺省值
  public keyIdGetModeId = ''; //GC关键字获取方式Id
  public text = ''; //文本
  public groupName = ''; //组名
  public releTabId = ''; //相关表Id
  public releFldId = ''; //相关字段Id
  public eventFuncName = ''; //事件函数名
  public fieldTypeId = ''; //字段类型Id
  public viewImplId = ''; //界面实现Id
  public ctlTypeId = ''; //控件类型号
  public height = 0; //高度
  public width = 0; //宽
  public seqNum = 0; //字段序号
  public cssClass = ''; //样式表
  public imageUrl = ''; //图片资源
  public inUse = false; //是否在用
  public errMsg = ''; //错误信息
  public prjId = ''; //工程Id
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明

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
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FeatureId(): string {
    return 'featureId';
  } //功能Id

  /**
   * 常量:"TabFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabFeatureId(): string {
    return 'tabFeatureId';
  } //表功能Id

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
   * 常量:"CommandName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CommandName(): string {
    return 'commandName';
  } //命令名

  /**
   * 常量:"ValueGivingModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ValueGivingModeId(): string {
    return 'valueGivingModeId';
  } //给值方式Id

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
   * 常量:"KeyIdGetModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyIdGetModeId(): string {
    return 'keyIdGetModeId';
  } //GC关键字获取方式Id

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
   * 常量:"EventFuncName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EventFuncName(): string {
    return 'eventFuncName';
  } //事件函数名

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"ViewImplId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewImplId(): string {
    return 'viewImplId';
  } //界面实现Id

  /**
   * 常量:"CtlTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

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
    //return propName in new clsFeatureRegionFldsEN();
    const instance = new clsFeatureRegionFldsEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
