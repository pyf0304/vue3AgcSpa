/**
 * 类名:clsViewGroupFldsEN
 * 表名:ViewGroupFlds(00050136)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:56
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 界面组字段集合(ViewGroupFlds)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewGroupFldsEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewGroupFlds'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 15;
  public static AttributeName = [
    'mId',
    'ctlTypeId',
    'ddlItemsOptionId',
    'dsCondStr',
    'dsDataTextFieldId',
    'dsDataValueFieldId',
    'dsSqlStr',
    'dsTabId',
    'itemsString',
    'seqNum',
    'tabFldId',
    'updDate',
    'userId',
    'viewGroupId',
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
  private mstrCtlTypeId = ''; //控件类型号
  private mstrDdlItemsOptionId = ''; //下拉框列表选项ID
  private mstrDsCondStr = ''; //数据源条件串
  private mstrDsDataTextFieldId = ''; //数据源文本字段Id
  private mstrDsDataValueFieldId = ''; //数据源值字段Id
  private mstrDsSqlStr = ''; //数据源SQL串
  private mstrDsTabId = ''; //数据源表ID
  private mstrItemsString = ''; //列表项串
  private mintSeqNum = 0; //字段序号
  private mlngTabFldId = 0; //表字段ID
  private mstrUpdDate = ''; //修改日期
  private mstrUserId = ''; //用户Id
  private mstrViewGroupId = ''; //界面组ID
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
   * 数据源文本字段Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsDataTextFieldId(value: string) {
    if (value != undefined) {
      this.dsDataTextFieldId = value;
      this.hmProperty['dsDataTextFieldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源值字段Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDsDataValueFieldId(value: string) {
    if (value != undefined) {
      this.dsDataValueFieldId = value;
      this.hmProperty['dsDataValueFieldId'] = true;
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
   * 表字段ID(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabFldId(value: number) {
    if (value != undefined) {
      this.tabFldId = value;
      this.hmProperty['tabFldId'] = true;
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
   * 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面组ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewGroupId(value: string) {
    if (value != undefined) {
      this.viewGroupId = value;
      this.hmProperty['viewGroupId'] = true;
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
      case clsViewGroupFldsEN.con_mId:
        return this.mId;
      case clsViewGroupFldsEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clsViewGroupFldsEN.con_DdlItemsOptionId:
        return this.ddlItemsOptionId;
      case clsViewGroupFldsEN.con_DsCondStr:
        return this.dsCondStr;
      case clsViewGroupFldsEN.con_DsDataTextFieldId:
        return this.dsDataTextFieldId;
      case clsViewGroupFldsEN.con_DsDataValueFieldId:
        return this.dsDataValueFieldId;
      case clsViewGroupFldsEN.con_DsSqlStr:
        return this.dsSqlStr;
      case clsViewGroupFldsEN.con_DsTabId:
        return this.dsTabId;
      case clsViewGroupFldsEN.con_ItemsString:
        return this.itemsString;
      case clsViewGroupFldsEN.con_SeqNum:
        return this.seqNum;
      case clsViewGroupFldsEN.con_TabFldId:
        return this.tabFldId;
      case clsViewGroupFldsEN.con_UpdDate:
        return this.updDate;
      case clsViewGroupFldsEN.con_UserId:
        return this.userId;
      case clsViewGroupFldsEN.con_ViewGroupId:
        return this.viewGroupId;
      case clsViewGroupFldsEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewGroupFlds]中不存在!`;
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
      case clsViewGroupFldsEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsViewGroupFldsEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clsViewGroupFldsEN.con_DdlItemsOptionId:
        this.ddlItemsOptionId = strValue;
        this.hmProperty['ddlItemsOptionId'] = true;
        break;
      case clsViewGroupFldsEN.con_DsCondStr:
        this.dsCondStr = strValue;
        this.hmProperty['dsCondStr'] = true;
        break;
      case clsViewGroupFldsEN.con_DsDataTextFieldId:
        this.dsDataTextFieldId = strValue;
        this.hmProperty['dsDataTextFieldId'] = true;
        break;
      case clsViewGroupFldsEN.con_DsDataValueFieldId:
        this.dsDataValueFieldId = strValue;
        this.hmProperty['dsDataValueFieldId'] = true;
        break;
      case clsViewGroupFldsEN.con_DsSqlStr:
        this.dsSqlStr = strValue;
        this.hmProperty['dsSqlStr'] = true;
        break;
      case clsViewGroupFldsEN.con_DsTabId:
        this.dsTabId = strValue;
        this.hmProperty['dsTabId'] = true;
        break;
      case clsViewGroupFldsEN.con_ItemsString:
        this.itemsString = strValue;
        this.hmProperty['itemsString'] = true;
        break;
      case clsViewGroupFldsEN.con_SeqNum:
        this.seqNum = Number(strValue);
        this.hmProperty['seqNum'] = true;
        break;
      case clsViewGroupFldsEN.con_TabFldId:
        this.tabFldId = Number(strValue);
        this.hmProperty['tabFldId'] = true;
        break;
      case clsViewGroupFldsEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsViewGroupFldsEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsViewGroupFldsEN.con_ViewGroupId:
        this.viewGroupId = strValue;
        this.hmProperty['viewGroupId'] = true;
        break;
      case clsViewGroupFldsEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[ViewGroupFlds]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public ctlTypeId = ''; //控件类型号
  public ddlItemsOptionId = ''; //下拉框列表选项ID
  public dsCondStr = ''; //数据源条件串
  public dsDataTextFieldId = ''; //数据源文本字段Id
  public dsDataValueFieldId = ''; //数据源值字段Id
  public dsSqlStr = ''; //数据源SQL串
  public dsTabId = ''; //数据源表ID
  public itemsString = ''; //列表项串
  public seqNum = 0; //字段序号
  public tabFldId = 0; //表字段ID
  public updDate = ''; //修改日期
  public userId = ''; //用户Id
  public viewGroupId = ''; //界面组ID
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"CtlTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"DdlItemsOptionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DdlItemsOptionId(): string {
    return 'ddlItemsOptionId';
  } //下拉框列表选项ID

  /**
   * 常量:"DsCondStr"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DsCondStr(): string {
    return 'dsCondStr';
  } //数据源条件串

  /**
   * 常量:"DsDataTextFieldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DsDataTextFieldId(): string {
    return 'dsDataTextFieldId';
  } //数据源文本字段Id

  /**
   * 常量:"DsDataValueFieldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DsDataValueFieldId(): string {
    return 'dsDataValueFieldId';
  } //数据源值字段Id

  /**
   * 常量:"DsSqlStr"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DsSqlStr(): string {
    return 'dsSqlStr';
  } //数据源SQL串

  /**
   * 常量:"DsTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DsTabId(): string {
    return 'dsTabId';
  } //数据源表ID

  /**
   * 常量:"ItemsString"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ItemsString(): string {
    return 'itemsString';
  } //列表项串

  /**
   * 常量:"SeqNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SeqNum(): string {
    return 'seqNum';
  } //字段序号

  /**
   * 常量:"TabFldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabFldId(): string {
    return 'tabFldId';
  } //表字段ID

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"ViewGroupId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewGroupId(): string {
    return 'viewGroupId';
  } //界面组ID

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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
}
