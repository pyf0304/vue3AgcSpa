/**
 * 类名:clsTabFieldRelaEN
 * 表名:TabFieldRela(00050266)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:59
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:数据同步(DataSynch)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 表字段关系(TabFieldRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsTabFieldRelaEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'TabFieldRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdFieldTabRela'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 35;
  public static AttributeName = [
    'idFieldTabRela',
    'fldId',
    'tabId',
    'sqlFldName',
    'excelFieldName',
    'defaultValue',
    'isNeedTrans',
    'transWayId',
    'transTabName',
    'transInFldName',
    'transOutFldName',
    'isTabPrimary',
    'isTabForeignKey',
    'primaryTypeId',
    'isIdentity',
    'isTabUnique',
    'isTabNullable',
    'fieldTypeId',
    'isNeedCheckPriForeignKey',
    'primaryKeyTabName',
    'primaryKeyFieldName',
    'transMissingValue',
    'transNullValue',
    'prjId',
    'isVisible',
    'sequenceNumber',
    'memo',
    'fieldTypeIdS',
    'fldLengthS',
    'foreignKeyTabId',
    'hashIndex',
    'isUseHash',
    'prefix',
    'prefixFldId',
    'vFieldCnName',
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
  private mlngIdFieldTabRela = 0; //字段表关系流水号
  private mstrFldId = ''; //字段Id
  private mstrTabId = ''; //表ID
  private mstrSqlFldName = ''; //Sql字段名称
  private mstrExcelFieldName = ''; //Excel字段名称
  private mstrDefaultValue = ''; //缺省值
  private mbolIsNeedTrans = false; //是否需要转换
  private mstrTransWayId = ''; //转换方式ID
  private mstrTransTabName = ''; //转换表名
  private mstrTransInFldName = ''; //转换IN字段名
  private mstrTransOutFldName = ''; //转换Out字段名
  private mbolIsTabPrimary = false; //是否作为表中主键
  private mbolIsTabForeignKey = false; //是否表外键
  private mstrPrimaryTypeId = ''; //主键类型ID
  private mbolIsIdentity = false; //是否Identity
  private mbolIsTabUnique = false; //是否表中唯一
  private mbolIsTabNullable = false; //是否表中可空
  private mstrFieldTypeId = ''; //字段类型Id
  private mbolIsNeedCheckPriForeignKey = false; //是否检查主外键
  private mstrPrimaryKeyTabName = ''; //主键表
  private mstrPrimaryKeyFieldName = ''; //主键字段名
  private mstrTransMissingValue = ''; //转换失败值
  private mstrTransNullValue = ''; //转换空值
  private mstrPrjId = ''; //工程ID
  private mbolIsVisible = false; //是否显示
  private mintSequenceNumber = 0; //顺序号
  private mstrMemo = ''; //说明
  private mstrFieldTypeIdS = ''; //FieldTypeId_S
  private mintFldLengthS = 0; //FldLength_S
  private mstrForeignKeyTabId = ''; //外键表ID
  private mintHashIndex = 0; //HASH表序号
  private mbolIsUseHash = false; //是否用HASH表
  private mstrPrefix = ''; //前缀
  private mstrPrefixFldId = ''; //前缀字段Id
  private mstrvFieldCnName = ''; //视图字段中文名称

  /**
   * 字段表关系流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdFieldTabRela(value: number) {
    if (value != undefined) {
      this.idFieldTabRela = value;
      this.hmProperty['idFieldTabRela'] = true;
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
   * Sql字段名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlFldName(value: string) {
    if (value != undefined) {
      this.sqlFldName = value;
      this.hmProperty['sqlFldName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Excel字段名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetExcelFieldName(value: string) {
    if (value != undefined) {
      this.excelFieldName = value;
      this.hmProperty['excelFieldName'] = true;
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
   * 是否需要转换(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedTrans(value: boolean) {
    if (value != undefined) {
      this.isNeedTrans = value;
      this.hmProperty['isNeedTrans'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 转换方式ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTransWayId(value: string) {
    if (value != undefined) {
      this.transWayId = value;
      this.hmProperty['transWayId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 转换表名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTransTabName(value: string) {
    if (value != undefined) {
      this.transTabName = value;
      this.hmProperty['transTabName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 转换IN字段名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTransInFldName(value: string) {
    if (value != undefined) {
      this.transInFldName = value;
      this.hmProperty['transInFldName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 转换Out字段名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTransOutFldName(value: string) {
    if (value != undefined) {
      this.transOutFldName = value;
      this.hmProperty['transOutFldName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否作为表中主键(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTabPrimary(value: boolean) {
    if (value != undefined) {
      this.isTabPrimary = value;
      this.hmProperty['isTabPrimary'] = true;
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
   * 是否Identity(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsIdentity(value: boolean) {
    if (value != undefined) {
      this.isIdentity = value;
      this.hmProperty['isIdentity'] = true;
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
   * 是否检查主外键(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedCheckPriForeignKey(value: boolean) {
    if (value != undefined) {
      this.isNeedCheckPriForeignKey = value;
      this.hmProperty['isNeedCheckPriForeignKey'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主键表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryKeyTabName(value: string) {
    if (value != undefined) {
      this.primaryKeyTabName = value;
      this.hmProperty['primaryKeyTabName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主键字段名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrimaryKeyFieldName(value: string) {
    if (value != undefined) {
      this.primaryKeyFieldName = value;
      this.hmProperty['primaryKeyFieldName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 转换失败值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTransMissingValue(value: string) {
    if (value != undefined) {
      this.transMissingValue = value;
      this.hmProperty['transMissingValue'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 转换空值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTransNullValue(value: string) {
    if (value != undefined) {
      this.transNullValue = value;
      this.hmProperty['transNullValue'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程ID(说明:;字段类型:char;字段长度:4;是否可空:False)
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
   * FieldTypeId_S(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFieldTypeIdS(value: string) {
    if (value != undefined) {
      this.fieldTypeIdS = value;
      this.hmProperty['fieldTypeIdS'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * FldLength_S(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldLengthS(value: number) {
    if (value != undefined) {
      this.fldLengthS = value;
      this.hmProperty['fldLengthS'] = true;
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
   * HASH表序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHashIndex(value: number) {
    if (value != undefined) {
      this.hashIndex = value;
      this.hmProperty['hashIndex'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否用HASH表(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUseHash(value: boolean) {
    if (value != undefined) {
      this.isUseHash = value;
      this.hmProperty['isUseHash'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 前缀(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrefix(value: string) {
    if (value != undefined) {
      this.prefix = value;
      this.hmProperty['prefix'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 前缀字段Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrefixFldId(value: string) {
    if (value != undefined) {
      this.prefixFldId = value;
      this.hmProperty['prefixFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 视图字段中文名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetvFieldCnName(value: string) {
    if (value != undefined) {
      this.vFieldCnName = value;
      this.hmProperty['vFieldCnName'] = true;
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
      case clsTabFieldRelaEN.con_IdFieldTabRela:
        return this.idFieldTabRela;
      case clsTabFieldRelaEN.con_FldId:
        return this.fldId;
      case clsTabFieldRelaEN.con_TabId:
        return this.tabId;
      case clsTabFieldRelaEN.con_SqlFldName:
        return this.sqlFldName;
      case clsTabFieldRelaEN.con_ExcelFieldName:
        return this.excelFieldName;
      case clsTabFieldRelaEN.con_DefaultValue:
        return this.defaultValue;
      case clsTabFieldRelaEN.con_IsNeedTrans:
        return this.isNeedTrans;
      case clsTabFieldRelaEN.con_TransWayId:
        return this.transWayId;
      case clsTabFieldRelaEN.con_TransTabName:
        return this.transTabName;
      case clsTabFieldRelaEN.con_TransInFldName:
        return this.transInFldName;
      case clsTabFieldRelaEN.con_TransOutFldName:
        return this.transOutFldName;
      case clsTabFieldRelaEN.con_IsTabPrimary:
        return this.isTabPrimary;
      case clsTabFieldRelaEN.con_IsTabForeignKey:
        return this.isTabForeignKey;
      case clsTabFieldRelaEN.con_PrimaryTypeId:
        return this.primaryTypeId;
      case clsTabFieldRelaEN.con_IsIdentity:
        return this.isIdentity;
      case clsTabFieldRelaEN.con_IsTabUnique:
        return this.isTabUnique;
      case clsTabFieldRelaEN.con_IsTabNullable:
        return this.isTabNullable;
      case clsTabFieldRelaEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey:
        return this.isNeedCheckPriForeignKey;
      case clsTabFieldRelaEN.con_PrimaryKeyTabName:
        return this.primaryKeyTabName;
      case clsTabFieldRelaEN.con_PrimaryKeyFieldName:
        return this.primaryKeyFieldName;
      case clsTabFieldRelaEN.con_TransMissingValue:
        return this.transMissingValue;
      case clsTabFieldRelaEN.con_TransNullValue:
        return this.transNullValue;
      case clsTabFieldRelaEN.con_PrjId:
        return this.prjId;
      case clsTabFieldRelaEN.con_IsVisible:
        return this.isVisible;
      case clsTabFieldRelaEN.con_SequenceNumber:
        return this.sequenceNumber;
      case clsTabFieldRelaEN.con_Memo:
        return this.memo;
      case clsTabFieldRelaEN.con_FieldTypeIdS:
        return this.fieldTypeIdS;
      case clsTabFieldRelaEN.con_FldLengthS:
        return this.fldLengthS;
      case clsTabFieldRelaEN.con_ForeignKeyTabId:
        return this.foreignKeyTabId;
      case clsTabFieldRelaEN.con_HashIndex:
        return this.hashIndex;
      case clsTabFieldRelaEN.con_IsUseHash:
        return this.isUseHash;
      case clsTabFieldRelaEN.con_Prefix:
        return this.prefix;
      case clsTabFieldRelaEN.con_PrefixFldId:
        return this.prefixFldId;
      case clsTabFieldRelaEN.con_vFieldCnName:
        return this.vFieldCnName;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TabFieldRela]中不存在!`;
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
      case clsTabFieldRelaEN.con_IdFieldTabRela:
        this.idFieldTabRela = Number(strValue);
        this.hmProperty['idFieldTabRela'] = true;
        break;
      case clsTabFieldRelaEN.con_FldId:
        this.fldId = strValue;
        this.hmProperty['fldId'] = true;
        break;
      case clsTabFieldRelaEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsTabFieldRelaEN.con_SqlFldName:
        this.sqlFldName = strValue;
        this.hmProperty['sqlFldName'] = true;
        break;
      case clsTabFieldRelaEN.con_ExcelFieldName:
        this.excelFieldName = strValue;
        this.hmProperty['excelFieldName'] = true;
        break;
      case clsTabFieldRelaEN.con_DefaultValue:
        this.defaultValue = strValue;
        this.hmProperty['defaultValue'] = true;
        break;
      case clsTabFieldRelaEN.con_IsNeedTrans:
        this.isNeedTrans = Boolean(strValue);
        this.hmProperty['isNeedTrans'] = true;
        break;
      case clsTabFieldRelaEN.con_TransWayId:
        this.transWayId = strValue;
        this.hmProperty['transWayId'] = true;
        break;
      case clsTabFieldRelaEN.con_TransTabName:
        this.transTabName = strValue;
        this.hmProperty['transTabName'] = true;
        break;
      case clsTabFieldRelaEN.con_TransInFldName:
        this.transInFldName = strValue;
        this.hmProperty['transInFldName'] = true;
        break;
      case clsTabFieldRelaEN.con_TransOutFldName:
        this.transOutFldName = strValue;
        this.hmProperty['transOutFldName'] = true;
        break;
      case clsTabFieldRelaEN.con_IsTabPrimary:
        this.isTabPrimary = Boolean(strValue);
        this.hmProperty['isTabPrimary'] = true;
        break;
      case clsTabFieldRelaEN.con_IsTabForeignKey:
        this.isTabForeignKey = Boolean(strValue);
        this.hmProperty['isTabForeignKey'] = true;
        break;
      case clsTabFieldRelaEN.con_PrimaryTypeId:
        this.primaryTypeId = strValue;
        this.hmProperty['primaryTypeId'] = true;
        break;
      case clsTabFieldRelaEN.con_IsIdentity:
        this.isIdentity = Boolean(strValue);
        this.hmProperty['isIdentity'] = true;
        break;
      case clsTabFieldRelaEN.con_IsTabUnique:
        this.isTabUnique = Boolean(strValue);
        this.hmProperty['isTabUnique'] = true;
        break;
      case clsTabFieldRelaEN.con_IsTabNullable:
        this.isTabNullable = Boolean(strValue);
        this.hmProperty['isTabNullable'] = true;
        break;
      case clsTabFieldRelaEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        this.hmProperty['fieldTypeId'] = true;
        break;
      case clsTabFieldRelaEN.con_IsNeedCheckPriForeignKey:
        this.isNeedCheckPriForeignKey = Boolean(strValue);
        this.hmProperty['isNeedCheckPriForeignKey'] = true;
        break;
      case clsTabFieldRelaEN.con_PrimaryKeyTabName:
        this.primaryKeyTabName = strValue;
        this.hmProperty['primaryKeyTabName'] = true;
        break;
      case clsTabFieldRelaEN.con_PrimaryKeyFieldName:
        this.primaryKeyFieldName = strValue;
        this.hmProperty['primaryKeyFieldName'] = true;
        break;
      case clsTabFieldRelaEN.con_TransMissingValue:
        this.transMissingValue = strValue;
        this.hmProperty['transMissingValue'] = true;
        break;
      case clsTabFieldRelaEN.con_TransNullValue:
        this.transNullValue = strValue;
        this.hmProperty['transNullValue'] = true;
        break;
      case clsTabFieldRelaEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsTabFieldRelaEN.con_IsVisible:
        this.isVisible = Boolean(strValue);
        this.hmProperty['isVisible'] = true;
        break;
      case clsTabFieldRelaEN.con_SequenceNumber:
        this.sequenceNumber = Number(strValue);
        this.hmProperty['sequenceNumber'] = true;
        break;
      case clsTabFieldRelaEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsTabFieldRelaEN.con_FieldTypeIdS:
        this.fieldTypeIdS = strValue;
        this.hmProperty['fieldTypeIdS'] = true;
        break;
      case clsTabFieldRelaEN.con_FldLengthS:
        this.fldLengthS = Number(strValue);
        this.hmProperty['fldLengthS'] = true;
        break;
      case clsTabFieldRelaEN.con_ForeignKeyTabId:
        this.foreignKeyTabId = strValue;
        this.hmProperty['foreignKeyTabId'] = true;
        break;
      case clsTabFieldRelaEN.con_HashIndex:
        this.hashIndex = Number(strValue);
        this.hmProperty['hashIndex'] = true;
        break;
      case clsTabFieldRelaEN.con_IsUseHash:
        this.isUseHash = Boolean(strValue);
        this.hmProperty['isUseHash'] = true;
        break;
      case clsTabFieldRelaEN.con_Prefix:
        this.prefix = strValue;
        this.hmProperty['prefix'] = true;
        break;
      case clsTabFieldRelaEN.con_PrefixFldId:
        this.prefixFldId = strValue;
        this.hmProperty['prefixFldId'] = true;
        break;
      case clsTabFieldRelaEN.con_vFieldCnName:
        this.vFieldCnName = strValue;
        this.hmProperty['vFieldCnName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TabFieldRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public idFieldTabRela = 0; //字段表关系流水号
  public fldId = ''; //字段Id
  public tabId = ''; //表ID
  public sqlFldName = ''; //Sql字段名称
  public excelFieldName = ''; //Excel字段名称
  public defaultValue = ''; //缺省值
  public isNeedTrans = false; //是否需要转换
  public transWayId = ''; //转换方式ID
  public transTabName = ''; //转换表名
  public transInFldName = ''; //转换IN字段名
  public transOutFldName = ''; //转换Out字段名
  public isTabPrimary = false; //是否作为表中主键
  public isTabForeignKey = false; //是否表外键
  public primaryTypeId = ''; //主键类型ID
  public isIdentity = false; //是否Identity
  public isTabUnique = false; //是否表中唯一
  public isTabNullable = false; //是否表中可空
  public fieldTypeId = ''; //字段类型Id
  public isNeedCheckPriForeignKey = false; //是否检查主外键
  public primaryKeyTabName = ''; //主键表
  public primaryKeyFieldName = ''; //主键字段名
  public transMissingValue = ''; //转换失败值
  public transNullValue = ''; //转换空值
  public prjId = ''; //工程ID
  public isVisible = false; //是否显示
  public sequenceNumber = 0; //顺序号
  public memo = ''; //说明
  public fieldTypeIdS = ''; //FieldTypeId_S
  public fldLengthS = 0; //FldLength_S
  public foreignKeyTabId = ''; //外键表ID
  public hashIndex = 0; //HASH表序号
  public isUseHash = false; //是否用HASH表
  public prefix = ''; //前缀
  public prefixFldId = ''; //前缀字段Id
  public vFieldCnName = ''; //视图字段中文名称

  /**
   * 常量:"IdFieldTabRela"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdFieldTabRela(): string {
    return 'idFieldTabRela';
  } //字段表关系流水号

  /**
   * 常量:"FldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"TabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"SqlFldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlFldName(): string {
    return 'sqlFldName';
  } //Sql字段名称

  /**
   * 常量:"ExcelFieldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ExcelFieldName(): string {
    return 'excelFieldName';
  } //Excel字段名称

  /**
   * 常量:"DefaultValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DefaultValue(): string {
    return 'defaultValue';
  } //缺省值

  /**
   * 常量:"IsNeedTrans"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNeedTrans(): string {
    return 'isNeedTrans';
  } //是否需要转换

  /**
   * 常量:"TransWayId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TransWayId(): string {
    return 'transWayId';
  } //转换方式ID

  /**
   * 常量:"TransTabName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TransTabName(): string {
    return 'transTabName';
  } //转换表名

  /**
   * 常量:"TransInFldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TransInFldName(): string {
    return 'transInFldName';
  } //转换IN字段名

  /**
   * 常量:"TransOutFldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TransOutFldName(): string {
    return 'transOutFldName';
  } //转换Out字段名

  /**
   * 常量:"IsTabPrimary"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTabPrimary(): string {
    return 'isTabPrimary';
  } //是否作为表中主键

  /**
   * 常量:"IsTabForeignKey"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTabForeignKey(): string {
    return 'isTabForeignKey';
  } //是否表外键

  /**
   * 常量:"PrimaryTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrimaryTypeId(): string {
    return 'primaryTypeId';
  } //主键类型ID

  /**
   * 常量:"IsIdentity"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsIdentity(): string {
    return 'isIdentity';
  } //是否Identity

  /**
   * 常量:"IsTabUnique"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTabUnique(): string {
    return 'isTabUnique';
  } //是否表中唯一

  /**
   * 常量:"IsTabNullable"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTabNullable(): string {
    return 'isTabNullable';
  } //是否表中可空

  /**
   * 常量:"FieldTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"IsNeedCheckPriForeignKey"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNeedCheckPriForeignKey(): string {
    return 'isNeedCheckPriForeignKey';
  } //是否检查主外键

  /**
   * 常量:"PrimaryKeyTabName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrimaryKeyTabName(): string {
    return 'primaryKeyTabName';
  } //主键表

  /**
   * 常量:"PrimaryKeyFieldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrimaryKeyFieldName(): string {
    return 'primaryKeyFieldName';
  } //主键字段名

  /**
   * 常量:"TransMissingValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TransMissingValue(): string {
    return 'transMissingValue';
  } //转换失败值

  /**
   * 常量:"TransNullValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TransNullValue(): string {
    return 'transNullValue';
  } //转换空值

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"IsVisible"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

  /**
   * 常量:"SequenceNumber"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SequenceNumber(): string {
    return 'sequenceNumber';
  } //顺序号

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"FieldTypeIdS"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FieldTypeIdS(): string {
    return 'fieldTypeIdS';
  } //FieldTypeId_S

  /**
   * 常量:"FldLengthS"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldLengthS(): string {
    return 'fldLengthS';
  } //FldLength_S

  /**
   * 常量:"ForeignKeyTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ForeignKeyTabId(): string {
    return 'foreignKeyTabId';
  } //外键表ID

  /**
   * 常量:"HashIndex"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_HashIndex(): string {
    return 'hashIndex';
  } //HASH表序号

  /**
   * 常量:"IsUseHash"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsUseHash(): string {
    return 'isUseHash';
  } //是否用HASH表

  /**
   * 常量:"Prefix"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Prefix(): string {
    return 'prefix';
  } //前缀

  /**
   * 常量:"PrefixFldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrefixFldId(): string {
    return 'prefixFldId';
  } //前缀字段Id

  /**
   * 常量:"vFieldCnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_vFieldCnName(): string {
    return 'vFieldCnName';
  } //视图字段中文名称

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
