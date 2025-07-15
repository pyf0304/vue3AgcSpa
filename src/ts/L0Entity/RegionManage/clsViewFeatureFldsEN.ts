/**
 * 类名:clsViewFeatureFldsEN
 * 表名:ViewFeatureFlds(00050453)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:06
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
 * 界面功能字段(ViewFeatureFlds)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewFeatureFldsEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewFeatureFlds'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 29;
  public static AttributeName = [
    'mId',
    'viewFeatureId',
    'fieldTypeId',
    'releFldId',
    'funcName',
    'labelCaption',
    'ctlTypeId',
    'varId',
    'ctrlId',
    'defaultValue',
    'orderNum',
    'cssClass',
    'ddlItemsOptionId',
    'dsTabId',
    'fldIdCond2',
    'fldIdCond1',
    'varIdCond2',
    'varIdCond1',
    'tabFeatureId4Ddl',
    'viewImplId',
    'text',
    'dsCondStr',
    'dsSqlStr',
    'itemsString',
    'prjId',
    'updUser',
    'updDate',
    'inUse',
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
  private mstrViewFeatureId = ''; //界面功能Id
  private mstrFieldTypeId = ''; //字段类型Id
  private mstrReleFldId = ''; //相关字段Id
  private mstrFuncName = ''; //函数名
  private mstrLabelCaption = ''; //标签标题
  private mstrCtlTypeId = ''; //控件类型号
  private mstrVarId = ''; //变量Id
  private mstrCtrlId = ''; //控件Id
  private mstrDefaultValue = ''; //缺省值
  private mintOrderNum = 0; //序号
  private mstrCssClass = ''; //样式表
  private mstrDdlItemsOptionId = ''; //下拉框列表选项ID
  private mstrDsTabId = ''; //数据源表ID
  private mstrFldIdCond2 = ''; //字段Id_条件2
  private mstrFldIdCond1 = ''; //字段Id_条件1
  private mstrVarIdCond2 = ''; //数据源字段_条件1
  private mstrVarIdCond1 = ''; //变量Id_条件1
  private mstrTabFeatureId4Ddl = ''; //下拉框表功能Id
  private mstrViewImplId = ''; //界面实现Id
  private mstrText = ''; //文本
  private mstrDsCondStr = ''; //数据源条件串
  private mstrDsSqlStr = ''; //数据源SQL串
  private mstrItemsString = ''; //列表项串
  private mstrPrjId = ''; //工程Id
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mbolInUse = false; //是否在用
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
   * 标签标题(说明:;字段类型:varchar;字段长度:150;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLabelCaption(value: string) {
    if (value != undefined) {
      this.labelCaption = value;
      this.hmProperty['labelCaption'] = true;
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
   * 变量Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarId(value: string) {
    if (value != undefined) {
      this.varId = value;
      this.hmProperty['varId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 控件Id(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtrlId(value: string) {
    if (value != undefined) {
      this.ctrlId = value;
      this.hmProperty['ctrlId'] = true;
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
   * 下拉框列表选项ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDdlItemsOptionId(value: string) {
    if (value != undefined) {
      this.ddlItemsOptionId = value;
      this.hmProperty['ddlItemsOptionId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsTabId(value: string) {
    if (value != undefined) {
      this.dsTabId = value;
      this.hmProperty['dsTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段Id_条件2(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldIdCond2(value: string) {
    if (value != undefined) {
      this.fldIdCond2 = value;
      this.hmProperty['fldIdCond2'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段Id_条件1(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldIdCond1(value: string) {
    if (value != undefined) {
      this.fldIdCond1 = value;
      this.hmProperty['fldIdCond1'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源字段_条件1(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarIdCond2(value: string) {
    if (value != undefined) {
      this.varIdCond2 = value;
      this.hmProperty['varIdCond2'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 变量Id_条件1(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVarIdCond1(value: string) {
    if (value != undefined) {
      this.varIdCond1 = value;
      this.hmProperty['varIdCond1'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 下拉框表功能Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabFeatureId4Ddl(value: string) {
    if (value != undefined) {
      this.tabFeatureId4Ddl = value;
      this.hmProperty['tabFeatureId4Ddl'] = true;
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
   * 数据源条件串(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsCondStr(value: string) {
    if (value != undefined) {
      this.dsCondStr = value;
      this.hmProperty['dsCondStr'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源SQL串(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsSqlStr(value: string) {
    if (value != undefined) {
      this.dsSqlStr = value;
      this.hmProperty['dsSqlStr'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 列表项串(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetItemsString(value: string) {
    if (value != undefined) {
      this.itemsString = value;
      this.hmProperty['itemsString'] = true;
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
      case clsViewFeatureFldsEN.con_mId:
        return this.mId;
      case clsViewFeatureFldsEN.con_ViewFeatureId:
        return this.viewFeatureId;
      case clsViewFeatureFldsEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsViewFeatureFldsEN.con_ReleFldId:
        return this.releFldId;
      case clsViewFeatureFldsEN.con_FuncName:
        return this.funcName;
      case clsViewFeatureFldsEN.con_LabelCaption:
        return this.labelCaption;
      case clsViewFeatureFldsEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clsViewFeatureFldsEN.con_VarId:
        return this.varId;
      case clsViewFeatureFldsEN.con_CtrlId:
        return this.ctrlId;
      case clsViewFeatureFldsEN.con_DefaultValue:
        return this.defaultValue;
      case clsViewFeatureFldsEN.con_OrderNum:
        return this.orderNum;
      case clsViewFeatureFldsEN.con_CssClass:
        return this.cssClass;
      case clsViewFeatureFldsEN.con_DdlItemsOptionId:
        return this.ddlItemsOptionId;
      case clsViewFeatureFldsEN.con_DsTabId:
        return this.dsTabId;
      case clsViewFeatureFldsEN.con_FldIdCond2:
        return this.fldIdCond2;
      case clsViewFeatureFldsEN.con_FldIdCond1:
        return this.fldIdCond1;
      case clsViewFeatureFldsEN.con_VarIdCond2:
        return this.varIdCond2;
      case clsViewFeatureFldsEN.con_VarIdCond1:
        return this.varIdCond1;
      case clsViewFeatureFldsEN.con_TabFeatureId4Ddl:
        return this.tabFeatureId4Ddl;
      case clsViewFeatureFldsEN.con_ViewImplId:
        return this.viewImplId;
      case clsViewFeatureFldsEN.con_Text:
        return this.text;
      case clsViewFeatureFldsEN.con_DsCondStr:
        return this.dsCondStr;
      case clsViewFeatureFldsEN.con_DsSqlStr:
        return this.dsSqlStr;
      case clsViewFeatureFldsEN.con_ItemsString:
        return this.itemsString;
      case clsViewFeatureFldsEN.con_PrjId:
        return this.prjId;
      case clsViewFeatureFldsEN.con_UpdUser:
        return this.updUser;
      case clsViewFeatureFldsEN.con_UpdDate:
        return this.updDate;
      case clsViewFeatureFldsEN.con_InUse:
        return this.inUse;
      case clsViewFeatureFldsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewFeatureFlds]中不存在!`;
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
      case clsViewFeatureFldsEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsViewFeatureFldsEN.con_ViewFeatureId:
        this.viewFeatureId = strValue;
        this.hmProperty['viewFeatureId'] = true;
        break;
      case clsViewFeatureFldsEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        this.hmProperty['fieldTypeId'] = true;
        break;
      case clsViewFeatureFldsEN.con_ReleFldId:
        this.releFldId = strValue;
        this.hmProperty['releFldId'] = true;
        break;
      case clsViewFeatureFldsEN.con_FuncName:
        this.funcName = strValue;
        this.hmProperty['funcName'] = true;
        break;
      case clsViewFeatureFldsEN.con_LabelCaption:
        this.labelCaption = strValue;
        this.hmProperty['labelCaption'] = true;
        break;
      case clsViewFeatureFldsEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clsViewFeatureFldsEN.con_VarId:
        this.varId = strValue;
        this.hmProperty['varId'] = true;
        break;
      case clsViewFeatureFldsEN.con_CtrlId:
        this.ctrlId = strValue;
        this.hmProperty['ctrlId'] = true;
        break;
      case clsViewFeatureFldsEN.con_DefaultValue:
        this.defaultValue = strValue;
        this.hmProperty['defaultValue'] = true;
        break;
      case clsViewFeatureFldsEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsViewFeatureFldsEN.con_CssClass:
        this.cssClass = strValue;
        this.hmProperty['cssClass'] = true;
        break;
      case clsViewFeatureFldsEN.con_DdlItemsOptionId:
        this.ddlItemsOptionId = strValue;
        this.hmProperty['ddlItemsOptionId'] = true;
        break;
      case clsViewFeatureFldsEN.con_DsTabId:
        this.dsTabId = strValue;
        this.hmProperty['dsTabId'] = true;
        break;
      case clsViewFeatureFldsEN.con_FldIdCond2:
        this.fldIdCond2 = strValue;
        this.hmProperty['fldIdCond2'] = true;
        break;
      case clsViewFeatureFldsEN.con_FldIdCond1:
        this.fldIdCond1 = strValue;
        this.hmProperty['fldIdCond1'] = true;
        break;
      case clsViewFeatureFldsEN.con_VarIdCond2:
        this.varIdCond2 = strValue;
        this.hmProperty['varIdCond2'] = true;
        break;
      case clsViewFeatureFldsEN.con_VarIdCond1:
        this.varIdCond1 = strValue;
        this.hmProperty['varIdCond1'] = true;
        break;
      case clsViewFeatureFldsEN.con_TabFeatureId4Ddl:
        this.tabFeatureId4Ddl = strValue;
        this.hmProperty['tabFeatureId4Ddl'] = true;
        break;
      case clsViewFeatureFldsEN.con_ViewImplId:
        this.viewImplId = strValue;
        this.hmProperty['viewImplId'] = true;
        break;
      case clsViewFeatureFldsEN.con_Text:
        this.text = strValue;
        this.hmProperty['text'] = true;
        break;
      case clsViewFeatureFldsEN.con_DsCondStr:
        this.dsCondStr = strValue;
        this.hmProperty['dsCondStr'] = true;
        break;
      case clsViewFeatureFldsEN.con_DsSqlStr:
        this.dsSqlStr = strValue;
        this.hmProperty['dsSqlStr'] = true;
        break;
      case clsViewFeatureFldsEN.con_ItemsString:
        this.itemsString = strValue;
        this.hmProperty['itemsString'] = true;
        break;
      case clsViewFeatureFldsEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsViewFeatureFldsEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsViewFeatureFldsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsViewFeatureFldsEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsViewFeatureFldsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[ViewFeatureFlds]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public viewFeatureId = ''; //界面功能Id
  public fieldTypeId = ''; //字段类型Id
  public releFldId = ''; //相关字段Id
  public funcName = ''; //函数名
  public labelCaption = ''; //标签标题
  public ctlTypeId = ''; //控件类型号
  public varId = ''; //变量Id
  public ctrlId = ''; //控件Id
  public defaultValue = ''; //缺省值
  public orderNum = 0; //序号
  public cssClass = ''; //样式表
  public ddlItemsOptionId = ''; //下拉框列表选项ID
  public dsTabId = ''; //数据源表ID
  public fldIdCond2 = ''; //字段Id_条件2
  public fldIdCond1 = ''; //字段Id_条件1
  public varIdCond2 = ''; //数据源字段_条件1
  public varIdCond1 = ''; //变量Id_条件1
  public tabFeatureId4Ddl = ''; //下拉框表功能Id
  public viewImplId = ''; //界面实现Id
  public text = ''; //文本
  public dsCondStr = ''; //数据源条件串
  public dsSqlStr = ''; //数据源SQL串
  public itemsString = ''; //列表项串
  public prjId = ''; //工程Id
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public inUse = false; //是否在用
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"ViewFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewFeatureId(): string {
    return 'viewFeatureId';
  } //界面功能Id

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"ReleFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReleFldId(): string {
    return 'releFldId';
  } //相关字段Id

  /**
   * 常量:"FuncName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"LabelCaption"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_LabelCaption(): string {
    return 'labelCaption';
  } //标签标题

  /**
   * 常量:"CtlTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"VarId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarId(): string {
    return 'varId';
  } //变量Id

  /**
   * 常量:"CtrlId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtrlId(): string {
    return 'ctrlId';
  } //控件Id

  /**
   * 常量:"DefaultValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaultValue(): string {
    return 'defaultValue';
  } //缺省值

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"CssClass"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CssClass(): string {
    return 'cssClass';
  } //样式表

  /**
   * 常量:"DdlItemsOptionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DdlItemsOptionId(): string {
    return 'ddlItemsOptionId';
  } //下拉框列表选项ID

  /**
   * 常量:"DsTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DsTabId(): string {
    return 'dsTabId';
  } //数据源表ID

  /**
   * 常量:"FldIdCond2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldIdCond2(): string {
    return 'fldIdCond2';
  } //字段Id_条件2

  /**
   * 常量:"FldIdCond1"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldIdCond1(): string {
    return 'fldIdCond1';
  } //字段Id_条件1

  /**
   * 常量:"VarIdCond2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarIdCond2(): string {
    return 'varIdCond2';
  } //数据源字段_条件1

  /**
   * 常量:"VarIdCond1"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarIdCond1(): string {
    return 'varIdCond1';
  } //变量Id_条件1

  /**
   * 常量:"TabFeatureId4Ddl"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabFeatureId4Ddl(): string {
    return 'tabFeatureId4Ddl';
  } //下拉框表功能Id

  /**
   * 常量:"ViewImplId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewImplId(): string {
    return 'viewImplId';
  } //界面实现Id

  /**
   * 常量:"Text"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Text(): string {
    return 'text';
  } //文本

  /**
   * 常量:"DsCondStr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DsCondStr(): string {
    return 'dsCondStr';
  } //数据源条件串

  /**
   * 常量:"DsSqlStr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DsSqlStr(): string {
    return 'dsSqlStr';
  } //数据源SQL串

  /**
   * 常量:"ItemsString"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ItemsString(): string {
    return 'itemsString';
  } //列表项串

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
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

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
    //return propName in new clsViewFeatureFldsEN();
    const instance = new clsViewFeatureFldsEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
