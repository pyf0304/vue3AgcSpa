/**
 * 类名:clsCtlTypeEN
 * 表名:CtlType(00050058)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:20
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 控件类型缩写(CtlType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCtlTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CtlType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'CtlTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'ctlTypeId',
    'ctlTypeName',
    'ctlTypeENName',
    'ctlCnName',
    'ctlTypeAbbr',
    'htmlCtrlTypeName',
    'isForApple',
    'inUse',
    'isVisible',
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
  private mstrCtlTypeId = ''; //控件类型号
  private mstrCtlTypeName = ''; //控件类型名
  private mstrCtlTypeENName = ''; //控件类型英文名
  private mstrCtlCnName = ''; //控件类型中文名
  private mstrCtlTypeAbbr = ''; //控件类型缩写
  private mstrHtmlCtrlTypeName = ''; //HtmlCtrlTypeName
  private mbolIsForApple = false; //IsForApple
  private mbolInUse = false; //是否在用
  private mbolIsVisible = false; //是否显示
  private mintOrderNum = 0; //序号
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

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
   * 控件类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlTypeName(value: string) {
    if (value != undefined) {
      this.ctlTypeName = value;
      this.hmProperty['ctlTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 控件类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlTypeENName(value: string) {
    if (value != undefined) {
      this.ctlTypeENName = value;
      this.hmProperty['ctlTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 控件类型中文名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlCnName(value: string) {
    if (value != undefined) {
      this.ctlCnName = value;
      this.hmProperty['ctlCnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 控件类型缩写(说明:;字段类型:varchar;字段长度:5;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlTypeAbbr(value: string) {
    if (value != undefined) {
      this.ctlTypeAbbr = value;
      this.hmProperty['ctlTypeAbbr'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * HtmlCtrlTypeName(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHtmlCtrlTypeName(value: string) {
    if (value != undefined) {
      this.htmlCtrlTypeName = value;
      this.hmProperty['htmlCtrlTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsForApple(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsForApple(value: boolean) {
    if (value != undefined) {
      this.isForApple = value;
      this.hmProperty['isForApple'] = true;
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
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsVisible(value: boolean) {
    if (value != undefined) {
      this.isVisible = value;
      this.hmProperty['isVisible'] = true;
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
      case clsCtlTypeEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clsCtlTypeEN.con_CtlTypeName:
        return this.ctlTypeName;
      case clsCtlTypeEN.con_CtlTypeENName:
        return this.ctlTypeENName;
      case clsCtlTypeEN.con_CtlCnName:
        return this.ctlCnName;
      case clsCtlTypeEN.con_CtlTypeAbbr:
        return this.ctlTypeAbbr;
      case clsCtlTypeEN.con_HtmlCtrlTypeName:
        return this.htmlCtrlTypeName;
      case clsCtlTypeEN.con_IsForApple:
        return this.isForApple;
      case clsCtlTypeEN.con_InUse:
        return this.inUse;
      case clsCtlTypeEN.con_IsVisible:
        return this.isVisible;
      case clsCtlTypeEN.con_OrderNum:
        return this.orderNum;
      case clsCtlTypeEN.con_UpdDate:
        return this.updDate;
      case clsCtlTypeEN.con_UpdUser:
        return this.updUser;
      case clsCtlTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CtlType]中不存在!`;
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
      case clsCtlTypeEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clsCtlTypeEN.con_CtlTypeName:
        this.ctlTypeName = strValue;
        this.hmProperty['ctlTypeName'] = true;
        break;
      case clsCtlTypeEN.con_CtlTypeENName:
        this.ctlTypeENName = strValue;
        this.hmProperty['ctlTypeENName'] = true;
        break;
      case clsCtlTypeEN.con_CtlCnName:
        this.ctlCnName = strValue;
        this.hmProperty['ctlCnName'] = true;
        break;
      case clsCtlTypeEN.con_CtlTypeAbbr:
        this.ctlTypeAbbr = strValue;
        this.hmProperty['ctlTypeAbbr'] = true;
        break;
      case clsCtlTypeEN.con_HtmlCtrlTypeName:
        this.htmlCtrlTypeName = strValue;
        this.hmProperty['htmlCtrlTypeName'] = true;
        break;
      case clsCtlTypeEN.con_IsForApple:
        this.isForApple = Boolean(strValue);
        this.hmProperty['isForApple'] = true;
        break;
      case clsCtlTypeEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsCtlTypeEN.con_IsVisible:
        this.isVisible = Boolean(strValue);
        this.hmProperty['isVisible'] = true;
        break;
      case clsCtlTypeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsCtlTypeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCtlTypeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCtlTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[CtlType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public ctlTypeId = ''; //控件类型号
  public ctlTypeName = ''; //控件类型名
  public ctlTypeENName = ''; //控件类型英文名
  public ctlCnName = ''; //控件类型中文名
  public ctlTypeAbbr = ''; //控件类型缩写
  public htmlCtrlTypeName = ''; //HtmlCtrlTypeName
  public isForApple = false; //IsForApple
  public inUse = false; //是否在用
  public isVisible = false; //是否显示
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

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
   * 常量:"CtlTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeENName(): string {
    return 'ctlTypeENName';
  } //控件类型英文名

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
   * 常量:"HtmlCtrlTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_HtmlCtrlTypeName(): string {
    return 'htmlCtrlTypeName';
  } //HtmlCtrlTypeName

  /**
   * 常量:"IsForApple"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsForApple(): string {
    return 'isForApple';
  } //IsForApple

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"IsVisible"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

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
    //return propName in new clsCtlTypeEN();
    const instance = new clsCtlTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumCtlType {
  /**
   * None
   **/
  static readonly None_00 = '00';
  /**
   * Button
   **/
  static readonly Button_01 = '01';
  /**
   * CheckBox
   **/
  static readonly CheckBox_02 = '02';
  /**
   * CheckBoxList
   **/
  static readonly CheckBoxList_03 = '03';
  /**
   * DataGrid
   **/
  static readonly DataGrid_04 = '04';
  /**
   * DataList
   **/
  static readonly DataList_05 = '05';
  /**
   * DropDownList
   **/
  static readonly DropDownList_06 = '06';
  /**
   * HyperLink
   **/
  static readonly HyperLink_07 = '07';
  /**
   * Image
   **/
  static readonly Image_08 = '08';
  /**
   * ImageButton
   **/
  static readonly ImageButton_09 = '09';
  /**
   * Label
   **/
  static readonly Label_10 = '10';
  /**
   * LinkButton
   **/
  static readonly LinkButton_11 = '11';
  /**
   * ListBox
   **/
  static readonly ListBox_12 = '12';
  /**
   * Panel
   **/
  static readonly Panel_13 = '13';
  /**
   * RadioButton
   **/
  static readonly RadioButton_14 = '14';
  /**
   * RadioButtonList
   **/
  static readonly RadioButtonList_15 = '15';
  /**
   * TextBox
   **/
  static readonly TextBox_16 = '16';
  /**
   * RadioButton_Bool
   **/
  static readonly RadioButton_Bool_17 = '17';
  /**
   * DropDownList_Bool
   **/
  static readonly DropDownList_Bool_18 = '18';
  /**
   * GridView
   **/
  static readonly GridView_19 = '19';
  /**
   * ISOstoryBoard
   **/
  static readonly ISOstoryBoard_20 = '20';
  /**
   * ISOscene
   **/
  static readonly ISOscene_21 = '21';
  /**
   * ISOviewController
   **/
  static readonly ISOviewController_22 = '22';
  /**
   * ISOviewControllerLayoutGuide
   **/
  static readonly ISOviewControllerLayoutGuide_23 = '23';
  /**
   * ISOview
   **/
  static readonly ISOview_24 = '24';
  /**
   * ISOStackView
   **/
  static readonly ISOStackView_25 = '25';
  /**
   * ISOButton
   **/
  static readonly ISOButton_26 = '26';
  /**
   * ISOtextField
   **/
  static readonly ISOtextField_27 = '27';
  /**
   * ISOlabel
   **/
  static readonly ISOlabel_28 = '28';
  /**
   * ISOnavigationBar
   **/
  static readonly ISOnavigationBar_29 = '29';
  /**
   * ISONavigationItem
   **/
  static readonly ISONavigationItem_30 = '30';
  /**
   * ISOBarButtonItem
   **/
  static readonly ISOBarButtonItem_31 = '31';
  /**
   * ISOOutlet
   **/
  static readonly ISOOutlet_32 = '32';
  /**
   * ISOAction
   **/
  static readonly ISOAction_33 = '33';
  /**
   * ISOAutoresizingMask
   **/
  static readonly ISOAutoresizingMask_34 = '34';
  /**
   * GivenValue
   **/
  static readonly GivenValue_35 = '35';
  /**
   * DefaultValue
   **/
  static readonly DefaultValue_36 = '36';
  /**
   * ViewVariable
   **/
  static readonly ViewVariable_38 = '38';
  /**
   * DisplayName
   **/
  static readonly DisplayName_39 = '39';
  /**
   * TextArea
   **/
  static readonly TextArea_41 = '41';
  /**
   * Table
   **/
  static readonly Table_42 = '42';
  /**
   * span
   **/
  static readonly span_43 = '43';
  /**
   * TableHeader
   **/
  static readonly TableHeader_44 = '44';
  /**
   * TablePager
   **/
  static readonly TablePager_45 = '45';
  /**
   * Icon
   **/
  static readonly Icon_46 = '46';
}
