/**
 * 类名:clsPrjTabFldEN
 * 表名:PrjTabFld(00050019)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:27:57
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
 * 工程表字段(PrjTabFld)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPrjTabFldEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PrjTabFld'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 27;
  public static AttributeName = [
    'mId',
    'tabId',
    'fldId',
    'prjId',
    'fieldTypeId',
    'isTabNullable',
    'isTabUnique',
    'isTabForeignKey',
    'isSortFld',
    'isGeneProp',
    'isForExtendClass',
    'ctlTypeIdDu',
    'fldDispUnitStyleId',
    'inFldId',
    'dnPathId',
    'keyId4Test',
    'displayFormat',
    'isParentObj',
    'primaryTypeId',
    'foreignKeyTabId',
    'fldOpTypeId',
    'sequenceNumber',
    'memoInTab',
    'errMsg',
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
  private mlngmId = 0; //mId
  private mstrTabId = ''; //表ID
  private mstrFldId = ''; //字段Id
  private mstrPrjId = ''; //工程Id
  private mstrFieldTypeId = ''; //字段类型Id
  private mbolIsTabNullable = false; //是否表中可空
  private mbolIsTabUnique = false; //是否表中唯一
  private mbolIsTabForeignKey = false; //是否表外键
  private mbolIsSortFld = false; //是否排序字段
  private mbolIsGeneProp = false; //是否生成属性
  private mbolIsForExtendClass = false; //用于扩展类
  private mstrCtlTypeIdDu = ''; //控件类型Id_du
  private mstrFldDispUnitStyleId = ''; //字段显示单元样式Id
  private mstrInFldId = ''; //In字段Id
  private mstrDnPathId = ''; //DN路径Id
  private mstrKeyId4Test = ''; //测试关键字Id
  private mstrDisplayFormat = ''; //显示格式
  private mbolIsParentObj = false; //是否父对象
  private mstrPrimaryTypeId = ''; //主键类型ID
  private mstrForeignKeyTabId = ''; //外键表ID
  private mstrFldOpTypeId = ''; //字段操作类型Id
  private mintSequenceNumber = 0; //顺序号
  private mstrMemoInTab = ''; //表中说明
  private mstrErrMsg = ''; //错误信息
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
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
   * 是否表中可空(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTabNullable(value: boolean) {
    if (value != undefined) {
      this.isTabNullable = value;
      this.hmProperty['isTabNullable'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否表中唯一(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTabUnique(value: boolean) {
    if (value != undefined) {
      this.isTabUnique = value;
      this.hmProperty['isTabUnique'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否表外键(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTabForeignKey(value: boolean) {
    if (value != undefined) {
      this.isTabForeignKey = value;
      this.hmProperty['isTabForeignKey'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否排序字段(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsSortFld(value: boolean) {
    if (value != undefined) {
      this.isSortFld = value;
      this.hmProperty['isSortFld'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否生成属性(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsGeneProp(value: boolean) {
    if (value != undefined) {
      this.isGeneProp = value;
      this.hmProperty['isGeneProp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用于扩展类(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsForExtendClass(value: boolean) {
    if (value != undefined) {
      this.isForExtendClass = value;
      this.hmProperty['isForExtendClass'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 控件类型Id_du(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlTypeIdDu(value: string) {
    if (value != undefined) {
      this.ctlTypeIdDu = value;
      this.hmProperty['ctlTypeIdDu'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段显示单元样式Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldDispUnitStyleId(value: string) {
    if (value != undefined) {
      this.fldDispUnitStyleId = value;
      this.hmProperty['fldDispUnitStyleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * In字段Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInFldId(value: string) {
    if (value != undefined) {
      this.inFldId = value;
      this.hmProperty['inFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DN路径Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnPathId(value: string) {
    if (value != undefined) {
      this.dnPathId = value;
      this.hmProperty['dnPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 测试关键字Id(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyId4Test(value: string) {
    if (value != undefined) {
      this.keyId4Test = value;
      this.hmProperty['keyId4Test'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 显示格式(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDisplayFormat(value: string) {
    if (value != undefined) {
      this.displayFormat = value;
      this.hmProperty['displayFormat'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否父对象(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsParentObj(value: boolean) {
    if (value != undefined) {
      this.isParentObj = value;
      this.hmProperty['isParentObj'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主键类型ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryTypeId(value: string) {
    if (value != undefined) {
      this.primaryTypeId = value;
      this.hmProperty['primaryTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 外键表ID(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetForeignKeyTabId(value: string) {
    if (value != undefined) {
      this.foreignKeyTabId = value;
      this.hmProperty['foreignKeyTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段操作类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldOpTypeId(value: string) {
    if (value != undefined) {
      this.fldOpTypeId = value;
      this.hmProperty['fldOpTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 顺序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSequenceNumber(value: number) {
    if (value != undefined) {
      this.sequenceNumber = value;
      this.hmProperty['sequenceNumber'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表中说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemoInTab(value: string) {
    if (value != undefined) {
      this.memoInTab = value;
      this.hmProperty['memoInTab'] = true;
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
      case clsPrjTabFldEN.con_mId:
        return this.mId;
      case clsPrjTabFldEN.con_TabId:
        return this.tabId;
      case clsPrjTabFldEN.con_FldId:
        return this.fldId;
      case clsPrjTabFldEN.con_PrjId:
        return this.prjId;
      case clsPrjTabFldEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsPrjTabFldEN.con_IsTabNullable:
        return this.isTabNullable;
      case clsPrjTabFldEN.con_IsTabUnique:
        return this.isTabUnique;
      case clsPrjTabFldEN.con_IsTabForeignKey:
        return this.isTabForeignKey;
      case clsPrjTabFldEN.con_IsSortFld:
        return this.isSortFld;
      case clsPrjTabFldEN.con_IsGeneProp:
        return this.isGeneProp;
      case clsPrjTabFldEN.con_IsForExtendClass:
        return this.isForExtendClass;
      case clsPrjTabFldEN.con_CtlTypeIdDu:
        return this.ctlTypeIdDu;
      case clsPrjTabFldEN.con_FldDispUnitStyleId:
        return this.fldDispUnitStyleId;
      case clsPrjTabFldEN.con_InFldId:
        return this.inFldId;
      case clsPrjTabFldEN.con_DnPathId:
        return this.dnPathId;
      case clsPrjTabFldEN.con_KeyId4Test:
        return this.keyId4Test;
      case clsPrjTabFldEN.con_DisplayFormat:
        return this.displayFormat;
      case clsPrjTabFldEN.con_IsParentObj:
        return this.isParentObj;
      case clsPrjTabFldEN.con_PrimaryTypeId:
        return this.primaryTypeId;
      case clsPrjTabFldEN.con_ForeignKeyTabId:
        return this.foreignKeyTabId;
      case clsPrjTabFldEN.con_FldOpTypeId:
        return this.fldOpTypeId;
      case clsPrjTabFldEN.con_SequenceNumber:
        return this.sequenceNumber;
      case clsPrjTabFldEN.con_MemoInTab:
        return this.memoInTab;
      case clsPrjTabFldEN.con_ErrMsg:
        return this.errMsg;
      case clsPrjTabFldEN.con_UpdDate:
        return this.updDate;
      case clsPrjTabFldEN.con_UpdUser:
        return this.updUser;
      case clsPrjTabFldEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTabFld]中不存在!`;
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
      case clsPrjTabFldEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsPrjTabFldEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsPrjTabFldEN.con_FldId:
        this.fldId = strValue;
        this.hmProperty['fldId'] = true;
        break;
      case clsPrjTabFldEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsPrjTabFldEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        this.hmProperty['fieldTypeId'] = true;
        break;
      case clsPrjTabFldEN.con_IsTabNullable:
        this.isTabNullable = Boolean(strValue);
        this.hmProperty['isTabNullable'] = true;
        break;
      case clsPrjTabFldEN.con_IsTabUnique:
        this.isTabUnique = Boolean(strValue);
        this.hmProperty['isTabUnique'] = true;
        break;
      case clsPrjTabFldEN.con_IsTabForeignKey:
        this.isTabForeignKey = Boolean(strValue);
        this.hmProperty['isTabForeignKey'] = true;
        break;
      case clsPrjTabFldEN.con_IsSortFld:
        this.isSortFld = Boolean(strValue);
        this.hmProperty['isSortFld'] = true;
        break;
      case clsPrjTabFldEN.con_IsGeneProp:
        this.isGeneProp = Boolean(strValue);
        this.hmProperty['isGeneProp'] = true;
        break;
      case clsPrjTabFldEN.con_IsForExtendClass:
        this.isForExtendClass = Boolean(strValue);
        this.hmProperty['isForExtendClass'] = true;
        break;
      case clsPrjTabFldEN.con_CtlTypeIdDu:
        this.ctlTypeIdDu = strValue;
        this.hmProperty['ctlTypeIdDu'] = true;
        break;
      case clsPrjTabFldEN.con_FldDispUnitStyleId:
        this.fldDispUnitStyleId = strValue;
        this.hmProperty['fldDispUnitStyleId'] = true;
        break;
      case clsPrjTabFldEN.con_InFldId:
        this.inFldId = strValue;
        this.hmProperty['inFldId'] = true;
        break;
      case clsPrjTabFldEN.con_DnPathId:
        this.dnPathId = strValue;
        this.hmProperty['dnPathId'] = true;
        break;
      case clsPrjTabFldEN.con_KeyId4Test:
        this.keyId4Test = strValue;
        this.hmProperty['keyId4Test'] = true;
        break;
      case clsPrjTabFldEN.con_DisplayFormat:
        this.displayFormat = strValue;
        this.hmProperty['displayFormat'] = true;
        break;
      case clsPrjTabFldEN.con_IsParentObj:
        this.isParentObj = Boolean(strValue);
        this.hmProperty['isParentObj'] = true;
        break;
      case clsPrjTabFldEN.con_PrimaryTypeId:
        this.primaryTypeId = strValue;
        this.hmProperty['primaryTypeId'] = true;
        break;
      case clsPrjTabFldEN.con_ForeignKeyTabId:
        this.foreignKeyTabId = strValue;
        this.hmProperty['foreignKeyTabId'] = true;
        break;
      case clsPrjTabFldEN.con_FldOpTypeId:
        this.fldOpTypeId = strValue;
        this.hmProperty['fldOpTypeId'] = true;
        break;
      case clsPrjTabFldEN.con_SequenceNumber:
        this.sequenceNumber = Number(strValue);
        this.hmProperty['sequenceNumber'] = true;
        break;
      case clsPrjTabFldEN.con_MemoInTab:
        this.memoInTab = strValue;
        this.hmProperty['memoInTab'] = true;
        break;
      case clsPrjTabFldEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsPrjTabFldEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsPrjTabFldEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsPrjTabFldEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTabFld]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public prjId = ''; //工程Id
  public fieldTypeId = ''; //字段类型Id
  public isTabNullable = false; //是否表中可空
  public isTabUnique = false; //是否表中唯一
  public isTabForeignKey = false; //是否表外键
  public isSortFld = false; //是否排序字段
  public isGeneProp = false; //是否生成属性
  public isForExtendClass = false; //用于扩展类
  public ctlTypeIdDu = ''; //控件类型Id_du
  public fldDispUnitStyleId = ''; //字段显示单元样式Id
  public inFldId = ''; //In字段Id
  public dnPathId = ''; //DN路径Id
  public keyId4Test = ''; //测试关键字Id
  public displayFormat = ''; //显示格式
  public isParentObj = false; //是否父对象
  public primaryTypeId = ''; //主键类型ID
  public foreignKeyTabId = ''; //外键表ID
  public fldOpTypeId = ''; //字段操作类型Id
  public sequenceNumber = 0; //顺序号
  public memoInTab = ''; //表中说明
  public errMsg = ''; //错误信息
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"IsTabNullable"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTabNullable(): string {
    return 'isTabNullable';
  } //是否表中可空

  /**
   * 常量:"IsTabUnique"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTabUnique(): string {
    return 'isTabUnique';
  } //是否表中唯一

  /**
   * 常量:"IsTabForeignKey"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTabForeignKey(): string {
    return 'isTabForeignKey';
  } //是否表外键

  /**
   * 常量:"IsSortFld"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsSortFld(): string {
    return 'isSortFld';
  } //是否排序字段

  /**
   * 常量:"IsGeneProp"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsGeneProp(): string {
    return 'isGeneProp';
  } //是否生成属性

  /**
   * 常量:"IsForExtendClass"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsForExtendClass(): string {
    return 'isForExtendClass';
  } //用于扩展类

  /**
   * 常量:"CtlTypeIdDu"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeIdDu(): string {
    return 'ctlTypeIdDu';
  } //控件类型Id_du

  /**
   * 常量:"FldDispUnitStyleId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldDispUnitStyleId(): string {
    return 'fldDispUnitStyleId';
  } //字段显示单元样式Id

  /**
   * 常量:"InFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InFldId(): string {
    return 'inFldId';
  } //In字段Id

  /**
   * 常量:"DnPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathId(): string {
    return 'dnPathId';
  } //DN路径Id

  /**
   * 常量:"KeyId4Test"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyId4Test(): string {
    return 'keyId4Test';
  } //测试关键字Id

  /**
   * 常量:"DisplayFormat"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DisplayFormat(): string {
    return 'displayFormat';
  } //显示格式

  /**
   * 常量:"IsParentObj"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsParentObj(): string {
    return 'isParentObj';
  } //是否父对象

  /**
   * 常量:"PrimaryTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryTypeId(): string {
    return 'primaryTypeId';
  } //主键类型ID

  /**
   * 常量:"ForeignKeyTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ForeignKeyTabId(): string {
    return 'foreignKeyTabId';
  } //外键表ID

  /**
   * 常量:"FldOpTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldOpTypeId(): string {
    return 'fldOpTypeId';
  } //字段操作类型Id

  /**
   * 常量:"SequenceNumber"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SequenceNumber(): string {
    return 'sequenceNumber';
  } //顺序号

  /**
   * 常量:"MemoInTab"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MemoInTab(): string {
    return 'memoInTab';
  } //表中说明

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

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
    //return propName in new clsPrjTabFldEN();
    const instance = new clsPrjTabFldEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
