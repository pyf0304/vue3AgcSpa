/**
 * 类名:clsDGRegionFldsEN
 * 表名:DGRegionFlds(00050113)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:59:01
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
 * DG区域字段(DGRegionFlds)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDGRegionFldsEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'DGRegionFlds'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 21;
  public static AttributeName = [
    'mId',
    'regionId',
    'fldId',
    'outFldId',
    'sortExpression',
    'seqNum',
    'headerText',
    'toolTipText',
    'ctlTypeId',
    'dgFuncTypeId',
    'isNeedSort',
    'isDefaultSort',
    'isTransToChkBox',
    'isVisible',
    'isFuncFld',
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
  private mstrOutFldId = ''; //OutFldId
  private mstrSortExpression = ''; //排序表达式
  private mintSeqNum = 0; //字段序号
  private mstrHeaderText = ''; //列头
  private mstrToolTipText = ''; //提示文字
  private mstrCtlTypeId = ''; //控件类型号
  private mstrDgFuncTypeId = ''; //Dg功能类型Id
  private mbolIsNeedSort = false; //是否需要排序
  private mbolIsDefaultSort = false; //是否默认排序
  private mbolIsTransToChkBox = false; //是否转换成CheckBox
  private mbolIsVisible = false; //是否显示
  private mbolIsFuncFld = false; //是否功能字段
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
   * OutFldId(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOutFldId(value: string) {
    if (value != undefined) {
      this.outFldId = value;
      this.hmProperty['outFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 排序表达式(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSortExpression(value: string) {
    if (value != undefined) {
      this.sortExpression = value;
      this.hmProperty['sortExpression'] = true;
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
   * 列头(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHeaderText(value: string) {
    if (value != undefined) {
      this.headerText = value;
      this.hmProperty['headerText'] = true;
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
   * Dg功能类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDgFuncTypeId(value: string) {
    if (value != undefined) {
      this.dgFuncTypeId = value;
      this.hmProperty['dgFuncTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要排序(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedSort(value: boolean) {
    if (value != undefined) {
      this.isNeedSort = value;
      this.hmProperty['isNeedSort'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否默认排序(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDefaultSort(value: boolean) {
    if (value != undefined) {
      this.isDefaultSort = value;
      this.hmProperty['isDefaultSort'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否转换成CheckBox(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTransToChkBox(value: boolean) {
    if (value != undefined) {
      this.isTransToChkBox = value;
      this.hmProperty['isTransToChkBox'] = true;
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
   * 是否功能字段(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsFuncFld(value: boolean) {
    if (value != undefined) {
      this.isFuncFld = value;
      this.hmProperty['isFuncFld'] = true;
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
      case clsDGRegionFldsEN.con_mId:
        return this.mId;
      case clsDGRegionFldsEN.con_RegionId:
        return this.regionId;
      case clsDGRegionFldsEN.con_FldId:
        return this.fldId;
      case clsDGRegionFldsEN.con_OutFldId:
        return this.outFldId;
      case clsDGRegionFldsEN.con_SortExpression:
        return this.sortExpression;
      case clsDGRegionFldsEN.con_SeqNum:
        return this.seqNum;
      case clsDGRegionFldsEN.con_HeaderText:
        return this.headerText;
      case clsDGRegionFldsEN.con_ToolTipText:
        return this.toolTipText;
      case clsDGRegionFldsEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clsDGRegionFldsEN.con_DgFuncTypeId:
        return this.dgFuncTypeId;
      case clsDGRegionFldsEN.con_IsNeedSort:
        return this.isNeedSort;
      case clsDGRegionFldsEN.con_IsDefaultSort:
        return this.isDefaultSort;
      case clsDGRegionFldsEN.con_IsTransToChkBox:
        return this.isTransToChkBox;
      case clsDGRegionFldsEN.con_IsVisible:
        return this.isVisible;
      case clsDGRegionFldsEN.con_IsFuncFld:
        return this.isFuncFld;
      case clsDGRegionFldsEN.con_InUse:
        return this.inUse;
      case clsDGRegionFldsEN.con_ErrMsg:
        return this.errMsg;
      case clsDGRegionFldsEN.con_PrjId:
        return this.prjId;
      case clsDGRegionFldsEN.con_UpdUser:
        return this.updUser;
      case clsDGRegionFldsEN.con_UpdDate:
        return this.updDate;
      case clsDGRegionFldsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DGRegionFlds]中不存在!`;
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
      case clsDGRegionFldsEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsDGRegionFldsEN.con_RegionId:
        this.regionId = strValue;
        this.hmProperty['regionId'] = true;
        break;
      case clsDGRegionFldsEN.con_FldId:
        this.fldId = strValue;
        this.hmProperty['fldId'] = true;
        break;
      case clsDGRegionFldsEN.con_OutFldId:
        this.outFldId = strValue;
        this.hmProperty['outFldId'] = true;
        break;
      case clsDGRegionFldsEN.con_SortExpression:
        this.sortExpression = strValue;
        this.hmProperty['sortExpression'] = true;
        break;
      case clsDGRegionFldsEN.con_SeqNum:
        this.seqNum = Number(strValue);
        this.hmProperty['seqNum'] = true;
        break;
      case clsDGRegionFldsEN.con_HeaderText:
        this.headerText = strValue;
        this.hmProperty['headerText'] = true;
        break;
      case clsDGRegionFldsEN.con_ToolTipText:
        this.toolTipText = strValue;
        this.hmProperty['toolTipText'] = true;
        break;
      case clsDGRegionFldsEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clsDGRegionFldsEN.con_DgFuncTypeId:
        this.dgFuncTypeId = strValue;
        this.hmProperty['dgFuncTypeId'] = true;
        break;
      case clsDGRegionFldsEN.con_IsNeedSort:
        this.isNeedSort = Boolean(strValue);
        this.hmProperty['isNeedSort'] = true;
        break;
      case clsDGRegionFldsEN.con_IsDefaultSort:
        this.isDefaultSort = Boolean(strValue);
        this.hmProperty['isDefaultSort'] = true;
        break;
      case clsDGRegionFldsEN.con_IsTransToChkBox:
        this.isTransToChkBox = Boolean(strValue);
        this.hmProperty['isTransToChkBox'] = true;
        break;
      case clsDGRegionFldsEN.con_IsVisible:
        this.isVisible = Boolean(strValue);
        this.hmProperty['isVisible'] = true;
        break;
      case clsDGRegionFldsEN.con_IsFuncFld:
        this.isFuncFld = Boolean(strValue);
        this.hmProperty['isFuncFld'] = true;
        break;
      case clsDGRegionFldsEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsDGRegionFldsEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsDGRegionFldsEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsDGRegionFldsEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsDGRegionFldsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsDGRegionFldsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DGRegionFlds]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
  public outFldId = ''; //OutFldId
  public sortExpression = ''; //排序表达式
  public seqNum = 0; //字段序号
  public headerText = ''; //列头
  public toolTipText = ''; //提示文字
  public ctlTypeId = ''; //控件类型号
  public dgFuncTypeId = ''; //Dg功能类型Id
  public isNeedSort = false; //是否需要排序
  public isDefaultSort = false; //是否默认排序
  public isTransToChkBox = false; //是否转换成CheckBox
  public isVisible = false; //是否显示
  public isFuncFld = false; //是否功能字段
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
   * 常量:"OutFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutFldId(): string {
    return 'outFldId';
  } //OutFldId

  /**
   * 常量:"SortExpression"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SortExpression(): string {
    return 'sortExpression';
  } //排序表达式

  /**
   * 常量:"SeqNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SeqNum(): string {
    return 'seqNum';
  } //字段序号

  /**
   * 常量:"HeaderText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_HeaderText(): string {
    return 'headerText';
  } //列头

  /**
   * 常量:"ToolTipText"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ToolTipText(): string {
    return 'toolTipText';
  } //提示文字

  /**
   * 常量:"CtlTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"DgFuncTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DgFuncTypeId(): string {
    return 'dgFuncTypeId';
  } //Dg功能类型Id

  /**
   * 常量:"IsNeedSort"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedSort(): string {
    return 'isNeedSort';
  } //是否需要排序

  /**
   * 常量:"IsDefaultSort"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsDefaultSort(): string {
    return 'isDefaultSort';
  } //是否默认排序

  /**
   * 常量:"IsTransToChkBox"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTransToChkBox(): string {
    return 'isTransToChkBox';
  } //是否转换成CheckBox

  /**
   * 常量:"IsVisible"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

  /**
   * 常量:"IsFuncFld"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsFuncFld(): string {
    return 'isFuncFld';
  } //是否功能字段

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
    //return propName in new clsDGRegionFldsEN();
    const instance = new clsDGRegionFldsEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
