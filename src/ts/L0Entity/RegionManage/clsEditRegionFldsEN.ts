/**
 * 类名:clsEditRegionFldsEN
 * 表名:EditRegionFlds(00050116)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:58:57
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
 * 编辑区域字段(EditRegionFlds)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsEditRegionFldsEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'EditRegionFlds'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 32;
  public static AttributeName = [
    'mId',
    'regionId',
    'fldId',
    'labelCaption',
    'ctlTypeId',
    'callTabFeatureId',
    'varId',
    'defaultValue',
    'ddlItemsOptionId',
    'dsTabId',
    'tabFeatureId4Ddl',
    'fldIdCond1',
    'varIdCond1',
    'fldIdCond2',
    'varIdCond2',
    'dsCondStr',
    'dsSqlStr',
    'itemsString',
    'colSpan',
    'colIndex',
    'width',
    'isMultiRow',
    'seqNum',
    'inOutTypeId',
    'clickEvent',
    'changeEvent',
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
  private mlngmId = 0; //mId
  private mstrRegionId = ''; //区域Id
  private mstrFldId = ''; //字段Id
  private mstrLabelCaption = ''; //标签标题
  private mstrCtlTypeId = ''; //控件类型号
  private mstrCallTabFeatureId = ''; //调用表功能Id
  private mstrVarId = ''; //变量Id
  private mstrDefaultValue = ''; //缺省值
  private mstrDdlItemsOptionId = ''; //下拉框列表选项ID
  private mstrDsTabId = ''; //数据源表ID
  private mstrTabFeatureId4Ddl = ''; //下拉框表功能Id
  private mstrFldIdCond1 = ''; //字段Id_条件1
  private mstrVarIdCond1 = ''; //变量Id_条件1
  private mstrFldIdCond2 = ''; //字段Id_条件2
  private mstrVarIdCond2 = ''; //数据源字段_条件1
  private mstrDsCondStr = ''; //数据源条件串
  private mstrDsSqlStr = ''; //数据源SQL串
  private mstrItemsString = ''; //列表项串
  private mintColSpan = 0; //跨列数
  private mintColIndex = 0; //列序号
  private mintWidth = 0; //宽
  private mbolIsMultiRow = false; //是否多行
  private mintSeqNum = 0; //字段序号
  private mstrInOutTypeId = ''; //INOUT类型ID
  private mstrClickEvent = ''; //Click事件
  private mstrChangeEvent = ''; //Change事件
  private mbolInUse = false; //是否在用
  private mstrErrMsg = ''; //错误信息
  private mstrPrjId = ''; //工程Id
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
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
   * 字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldId(value: string) {
    if (value != undefined) {
      this.fldId = value;
      this.hmProperty['fldId'] = true;
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
   * 调用表功能Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCallTabFeatureId(value: string) {
    if (value != undefined) {
      this.callTabFeatureId = value;
      this.hmProperty['callTabFeatureId'] = true;
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
   * 跨列数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetColSpan(value: number) {
    if (value != undefined) {
      this.colSpan = value;
      this.hmProperty['colSpan'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 列序号(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetColIndex(value: number) {
    if (value != undefined) {
      this.colIndex = value;
      this.hmProperty['colIndex'] = true;
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
   * 是否多行(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsMultiRow(value: boolean) {
    if (value != undefined) {
      this.isMultiRow = value;
      this.hmProperty['isMultiRow'] = true;
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
   * Click事件(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetClickEvent(value: string) {
    if (value != undefined) {
      this.clickEvent = value;
      this.hmProperty['clickEvent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Change事件(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetChangeEvent(value: string) {
    if (value != undefined) {
      this.changeEvent = value;
      this.hmProperty['changeEvent'] = true;
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
      case clsEditRegionFldsEN.con_mId:
        return this.mId;
      case clsEditRegionFldsEN.con_RegionId:
        return this.regionId;
      case clsEditRegionFldsEN.con_FldId:
        return this.fldId;
      case clsEditRegionFldsEN.con_LabelCaption:
        return this.labelCaption;
      case clsEditRegionFldsEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clsEditRegionFldsEN.con_CallTabFeatureId:
        return this.callTabFeatureId;
      case clsEditRegionFldsEN.con_VarId:
        return this.varId;
      case clsEditRegionFldsEN.con_DefaultValue:
        return this.defaultValue;
      case clsEditRegionFldsEN.con_DdlItemsOptionId:
        return this.ddlItemsOptionId;
      case clsEditRegionFldsEN.con_DsTabId:
        return this.dsTabId;
      case clsEditRegionFldsEN.con_TabFeatureId4Ddl:
        return this.tabFeatureId4Ddl;
      case clsEditRegionFldsEN.con_FldIdCond1:
        return this.fldIdCond1;
      case clsEditRegionFldsEN.con_VarIdCond1:
        return this.varIdCond1;
      case clsEditRegionFldsEN.con_FldIdCond2:
        return this.fldIdCond2;
      case clsEditRegionFldsEN.con_VarIdCond2:
        return this.varIdCond2;
      case clsEditRegionFldsEN.con_DsCondStr:
        return this.dsCondStr;
      case clsEditRegionFldsEN.con_DsSqlStr:
        return this.dsSqlStr;
      case clsEditRegionFldsEN.con_ItemsString:
        return this.itemsString;
      case clsEditRegionFldsEN.con_ColSpan:
        return this.colSpan;
      case clsEditRegionFldsEN.con_ColIndex:
        return this.colIndex;
      case clsEditRegionFldsEN.con_Width:
        return this.width;
      case clsEditRegionFldsEN.con_IsMultiRow:
        return this.isMultiRow;
      case clsEditRegionFldsEN.con_SeqNum:
        return this.seqNum;
      case clsEditRegionFldsEN.con_InOutTypeId:
        return this.inOutTypeId;
      case clsEditRegionFldsEN.con_ClickEvent:
        return this.clickEvent;
      case clsEditRegionFldsEN.con_ChangeEvent:
        return this.changeEvent;
      case clsEditRegionFldsEN.con_InUse:
        return this.inUse;
      case clsEditRegionFldsEN.con_ErrMsg:
        return this.errMsg;
      case clsEditRegionFldsEN.con_PrjId:
        return this.prjId;
      case clsEditRegionFldsEN.con_UpdUser:
        return this.updUser;
      case clsEditRegionFldsEN.con_UpdDate:
        return this.updDate;
      case clsEditRegionFldsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[EditRegionFlds]中不存在!`;
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
      case clsEditRegionFldsEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsEditRegionFldsEN.con_RegionId:
        this.regionId = strValue;
        this.hmProperty['regionId'] = true;
        break;
      case clsEditRegionFldsEN.con_FldId:
        this.fldId = strValue;
        this.hmProperty['fldId'] = true;
        break;
      case clsEditRegionFldsEN.con_LabelCaption:
        this.labelCaption = strValue;
        this.hmProperty['labelCaption'] = true;
        break;
      case clsEditRegionFldsEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clsEditRegionFldsEN.con_CallTabFeatureId:
        this.callTabFeatureId = strValue;
        this.hmProperty['callTabFeatureId'] = true;
        break;
      case clsEditRegionFldsEN.con_VarId:
        this.varId = strValue;
        this.hmProperty['varId'] = true;
        break;
      case clsEditRegionFldsEN.con_DefaultValue:
        this.defaultValue = strValue;
        this.hmProperty['defaultValue'] = true;
        break;
      case clsEditRegionFldsEN.con_DdlItemsOptionId:
        this.ddlItemsOptionId = strValue;
        this.hmProperty['ddlItemsOptionId'] = true;
        break;
      case clsEditRegionFldsEN.con_DsTabId:
        this.dsTabId = strValue;
        this.hmProperty['dsTabId'] = true;
        break;
      case clsEditRegionFldsEN.con_TabFeatureId4Ddl:
        this.tabFeatureId4Ddl = strValue;
        this.hmProperty['tabFeatureId4Ddl'] = true;
        break;
      case clsEditRegionFldsEN.con_FldIdCond1:
        this.fldIdCond1 = strValue;
        this.hmProperty['fldIdCond1'] = true;
        break;
      case clsEditRegionFldsEN.con_VarIdCond1:
        this.varIdCond1 = strValue;
        this.hmProperty['varIdCond1'] = true;
        break;
      case clsEditRegionFldsEN.con_FldIdCond2:
        this.fldIdCond2 = strValue;
        this.hmProperty['fldIdCond2'] = true;
        break;
      case clsEditRegionFldsEN.con_VarIdCond2:
        this.varIdCond2 = strValue;
        this.hmProperty['varIdCond2'] = true;
        break;
      case clsEditRegionFldsEN.con_DsCondStr:
        this.dsCondStr = strValue;
        this.hmProperty['dsCondStr'] = true;
        break;
      case clsEditRegionFldsEN.con_DsSqlStr:
        this.dsSqlStr = strValue;
        this.hmProperty['dsSqlStr'] = true;
        break;
      case clsEditRegionFldsEN.con_ItemsString:
        this.itemsString = strValue;
        this.hmProperty['itemsString'] = true;
        break;
      case clsEditRegionFldsEN.con_ColSpan:
        this.colSpan = Number(strValue);
        this.hmProperty['colSpan'] = true;
        break;
      case clsEditRegionFldsEN.con_ColIndex:
        this.colIndex = Number(strValue);
        this.hmProperty['colIndex'] = true;
        break;
      case clsEditRegionFldsEN.con_Width:
        this.width = Number(strValue);
        this.hmProperty['width'] = true;
        break;
      case clsEditRegionFldsEN.con_IsMultiRow:
        this.isMultiRow = Boolean(strValue);
        this.hmProperty['isMultiRow'] = true;
        break;
      case clsEditRegionFldsEN.con_SeqNum:
        this.seqNum = Number(strValue);
        this.hmProperty['seqNum'] = true;
        break;
      case clsEditRegionFldsEN.con_InOutTypeId:
        this.inOutTypeId = strValue;
        this.hmProperty['inOutTypeId'] = true;
        break;
      case clsEditRegionFldsEN.con_ClickEvent:
        this.clickEvent = strValue;
        this.hmProperty['clickEvent'] = true;
        break;
      case clsEditRegionFldsEN.con_ChangeEvent:
        this.changeEvent = strValue;
        this.hmProperty['changeEvent'] = true;
        break;
      case clsEditRegionFldsEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsEditRegionFldsEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsEditRegionFldsEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsEditRegionFldsEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsEditRegionFldsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsEditRegionFldsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[EditRegionFlds]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public regionId = ''; //区域Id
  public fldId = ''; //字段Id
  public labelCaption = ''; //标签标题
  public ctlTypeId = ''; //控件类型号
  public callTabFeatureId = ''; //调用表功能Id
  public varId = ''; //变量Id
  public defaultValue = ''; //缺省值
  public ddlItemsOptionId = ''; //下拉框列表选项ID
  public dsTabId = ''; //数据源表ID
  public tabFeatureId4Ddl = ''; //下拉框表功能Id
  public fldIdCond1 = ''; //字段Id_条件1
  public varIdCond1 = ''; //变量Id_条件1
  public fldIdCond2 = ''; //字段Id_条件2
  public varIdCond2 = ''; //数据源字段_条件1
  public dsCondStr = ''; //数据源条件串
  public dsSqlStr = ''; //数据源SQL串
  public itemsString = ''; //列表项串
  public colSpan = 0; //跨列数
  public colIndex = 0; //列序号
  public width = 0; //宽
  public isMultiRow = false; //是否多行
  public seqNum = 0; //字段序号
  public inOutTypeId = ''; //INOUT类型ID
  public clickEvent = ''; //Click事件
  public changeEvent = ''; //Change事件
  public inUse = false; //是否在用
  public errMsg = ''; //错误信息
  public prjId = ''; //工程Id
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"RegionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionId(): string {
    return 'regionId';
  } //区域Id

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

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
   * 常量:"CallTabFeatureId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CallTabFeatureId(): string {
    return 'callTabFeatureId';
  } //调用表功能Id

  /**
   * 常量:"VarId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarId(): string {
    return 'varId';
  } //变量Id

  /**
   * 常量:"DefaultValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaultValue(): string {
    return 'defaultValue';
  } //缺省值

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
   * 常量:"TabFeatureId4Ddl"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabFeatureId4Ddl(): string {
    return 'tabFeatureId4Ddl';
  } //下拉框表功能Id

  /**
   * 常量:"FldIdCond1"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldIdCond1(): string {
    return 'fldIdCond1';
  } //字段Id_条件1

  /**
   * 常量:"VarIdCond1"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarIdCond1(): string {
    return 'varIdCond1';
  } //变量Id_条件1

  /**
   * 常量:"FldIdCond2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldIdCond2(): string {
    return 'fldIdCond2';
  } //字段Id_条件2

  /**
   * 常量:"VarIdCond2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VarIdCond2(): string {
    return 'varIdCond2';
  } //数据源字段_条件1

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
   * 常量:"ColSpan"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ColSpan(): string {
    return 'colSpan';
  } //跨列数

  /**
   * 常量:"ColIndex"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ColIndex(): string {
    return 'colIndex';
  } //列序号

  /**
   * 常量:"Width"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Width(): string {
    return 'width';
  } //宽

  /**
   * 常量:"IsMultiRow"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsMultiRow(): string {
    return 'isMultiRow';
  } //是否多行

  /**
   * 常量:"SeqNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SeqNum(): string {
    return 'seqNum';
  } //字段序号

  /**
   * 常量:"InOutTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InOutTypeId(): string {
    return 'inOutTypeId';
  } //INOUT类型ID

  /**
   * 常量:"ClickEvent"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ClickEvent(): string {
    return 'clickEvent';
  } //Click事件

  /**
   * 常量:"ChangeEvent"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ChangeEvent(): string {
    return 'changeEvent';
  } //Change事件

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
    //return propName in new clsEditRegionFldsEN();
    const instance = new clsEditRegionFldsEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
