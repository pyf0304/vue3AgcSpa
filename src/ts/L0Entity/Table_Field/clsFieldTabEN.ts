/**
 * 类名:clsFieldTabEN
 * 表名:FieldTab(00050021)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:47:04
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
 * 工程字段(FieldTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsFieldTabEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '06'; //前缀自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'FieldTab'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 27;
  public static AttributeName = [
    'fldId',
    'fldName',
    'fldCnName',
    'caption',
    'fieldTypeId',
    'dataTypeId',
    'fldLength',
    'fldPrecision',
    'fldInfo',
    'isNull',
    'isPrimaryKey',
    'isIdentity',
    'isChecked',
    'isArchive',
    'isOnlyOne',
    'maxValue',
    'minValue',
    'defaultValue',
    'fldStateId',
    'homologousFldId',
    'tabNum',
    'inUse',
    'prjId',
    'updDate',
    'updUser',
    'memo',
    'isNeedTransCode',
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
  private mstrFldId = ''; //字段Id
  private mstrFldName = ''; //字段名
  private mstrFldCnName = ''; //字段中文详名
  private mstrCaption = ''; //标题
  private mstrFieldTypeId = ''; //字段类型Id
  private mstrDataTypeId = ''; //数据类型Id
  private mintFldLength = 0; //字段长度
  private mintFldPrecision = 0; //精确度
  private mstrFldInfo = ''; //字段信息
  private mbolIsNull = false; //是否可空
  private mbolIsPrimaryKey = false; //是否主键
  private mbolIsIdentity = false; //是否Identity
  private mbolIsChecked = false; //是否核实
  private mbolIsArchive = false; //是否存档
  private mbolIsOnlyOne = false; //是否唯一
  private mstrMaxValue = ''; //最大值
  private mstrMinValue = ''; //最小值
  private mstrDefaultValue = ''; //缺省值
  private mstrFldStateId = ''; //字段状态Id
  private mstrHomologousFldId = ''; //同源字段Id
  private mintTabNum = 0; //表数
  private mbolInUse = false; //是否在用
  private mstrPrjId = ''; //工程Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明
  private mbolIsNeedTransCode = false; //是否需要转换代码

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
   * 字段名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldName(value: string) {
    if (value != undefined) {
      this.fldName = value;
      this.hmProperty['fldName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段中文详名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldCnName(value: string) {
    if (value != undefined) {
      this.fldCnName = value;
      this.hmProperty['fldCnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 标题(说明:;字段类型:varchar;字段长度:200;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCaption(value: string) {
    if (value != undefined) {
      this.caption = value;
      this.hmProperty['caption'] = true;
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
   * 数据类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataTypeId(value: string) {
    if (value != undefined) {
      this.dataTypeId = value;
      this.hmProperty['dataTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段长度(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldLength(value: number) {
    if (value != undefined) {
      this.fldLength = value;
      this.hmProperty['fldLength'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 精确度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldPrecision(value: number) {
    if (value != undefined) {
      this.fldPrecision = value;
      this.hmProperty['fldPrecision'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段信息(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldInfo(value: string) {
    if (value != undefined) {
      this.fldInfo = value;
      this.hmProperty['fldInfo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否可空(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNull(value: boolean) {
    if (value != undefined) {
      this.isNull = value;
      this.hmProperty['isNull'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否主键(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsPrimaryKey(value: boolean) {
    if (value != undefined) {
      this.isPrimaryKey = value;
      this.hmProperty['isPrimaryKey'] = true;
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
   * 是否核实(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsChecked(value: boolean) {
    if (value != undefined) {
      this.isChecked = value;
      this.hmProperty['isChecked'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否存档(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsArchive(value: boolean) {
    if (value != undefined) {
      this.isArchive = value;
      this.hmProperty['isArchive'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否唯一(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsOnlyOne(value: boolean) {
    if (value != undefined) {
      this.isOnlyOne = value;
      this.hmProperty['isOnlyOne'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 最大值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMaxValue(value: string) {
    if (value != undefined) {
      this.maxValue = value;
      this.hmProperty['maxValue'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 最小值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMinValue(value: string) {
    if (value != undefined) {
      this.minValue = value;
      this.hmProperty['minValue'] = true;
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
   * 字段状态Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldStateId(value: string) {
    if (value != undefined) {
      this.fldStateId = value;
      this.hmProperty['fldStateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 同源字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHomologousFldId(value: string) {
    if (value != undefined) {
      this.homologousFldId = value;
      this.hmProperty['homologousFldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabNum(value: number) {
    if (value != undefined) {
      this.tabNum = value;
      this.hmProperty['tabNum'] = true;
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
   * 是否需要转换代码(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedTransCode(value: boolean) {
    if (value != undefined) {
      this.isNeedTransCode = value;
      this.hmProperty['isNeedTransCode'] = true;
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
      case clsFieldTabEN.con_FldId:
        return this.fldId;
      case clsFieldTabEN.con_FldName:
        return this.fldName;
      case clsFieldTabEN.con_FldCnName:
        return this.fldCnName;
      case clsFieldTabEN.con_Caption:
        return this.caption;
      case clsFieldTabEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsFieldTabEN.con_DataTypeId:
        return this.dataTypeId;
      case clsFieldTabEN.con_FldLength:
        return this.fldLength;
      case clsFieldTabEN.con_FldPrecision:
        return this.fldPrecision;
      case clsFieldTabEN.con_FldInfo:
        return this.fldInfo;
      case clsFieldTabEN.con_IsNull:
        return this.isNull;
      case clsFieldTabEN.con_IsPrimaryKey:
        return this.isPrimaryKey;
      case clsFieldTabEN.con_IsIdentity:
        return this.isIdentity;
      case clsFieldTabEN.con_IsChecked:
        return this.isChecked;
      case clsFieldTabEN.con_IsArchive:
        return this.isArchive;
      case clsFieldTabEN.con_IsOnlyOne:
        return this.isOnlyOne;
      case clsFieldTabEN.con_MaxValue:
        return this.maxValue;
      case clsFieldTabEN.con_MinValue:
        return this.minValue;
      case clsFieldTabEN.con_DefaultValue:
        return this.defaultValue;
      case clsFieldTabEN.con_FldStateId:
        return this.fldStateId;
      case clsFieldTabEN.con_HomologousFldId:
        return this.homologousFldId;
      case clsFieldTabEN.con_TabNum:
        return this.tabNum;
      case clsFieldTabEN.con_InUse:
        return this.inUse;
      case clsFieldTabEN.con_PrjId:
        return this.prjId;
      case clsFieldTabEN.con_UpdDate:
        return this.updDate;
      case clsFieldTabEN.con_UpdUser:
        return this.updUser;
      case clsFieldTabEN.con_Memo:
        return this.memo;
      case clsFieldTabEN.con_IsNeedTransCode:
        return this.isNeedTransCode;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FieldTab]中不存在!`;
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
      case clsFieldTabEN.con_FldId:
        this.fldId = strValue;
        this.hmProperty['fldId'] = true;
        break;
      case clsFieldTabEN.con_FldName:
        this.fldName = strValue;
        this.hmProperty['fldName'] = true;
        break;
      case clsFieldTabEN.con_FldCnName:
        this.fldCnName = strValue;
        this.hmProperty['fldCnName'] = true;
        break;
      case clsFieldTabEN.con_Caption:
        this.caption = strValue;
        this.hmProperty['caption'] = true;
        break;
      case clsFieldTabEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        this.hmProperty['fieldTypeId'] = true;
        break;
      case clsFieldTabEN.con_DataTypeId:
        this.dataTypeId = strValue;
        this.hmProperty['dataTypeId'] = true;
        break;
      case clsFieldTabEN.con_FldLength:
        this.fldLength = Number(strValue);
        this.hmProperty['fldLength'] = true;
        break;
      case clsFieldTabEN.con_FldPrecision:
        this.fldPrecision = Number(strValue);
        this.hmProperty['fldPrecision'] = true;
        break;
      case clsFieldTabEN.con_FldInfo:
        this.fldInfo = strValue;
        this.hmProperty['fldInfo'] = true;
        break;
      case clsFieldTabEN.con_IsNull:
        this.isNull = Boolean(strValue);
        this.hmProperty['isNull'] = true;
        break;
      case clsFieldTabEN.con_IsPrimaryKey:
        this.isPrimaryKey = Boolean(strValue);
        this.hmProperty['isPrimaryKey'] = true;
        break;
      case clsFieldTabEN.con_IsIdentity:
        this.isIdentity = Boolean(strValue);
        this.hmProperty['isIdentity'] = true;
        break;
      case clsFieldTabEN.con_IsChecked:
        this.isChecked = Boolean(strValue);
        this.hmProperty['isChecked'] = true;
        break;
      case clsFieldTabEN.con_IsArchive:
        this.isArchive = Boolean(strValue);
        this.hmProperty['isArchive'] = true;
        break;
      case clsFieldTabEN.con_IsOnlyOne:
        this.isOnlyOne = Boolean(strValue);
        this.hmProperty['isOnlyOne'] = true;
        break;
      case clsFieldTabEN.con_MaxValue:
        this.maxValue = strValue;
        this.hmProperty['maxValue'] = true;
        break;
      case clsFieldTabEN.con_MinValue:
        this.minValue = strValue;
        this.hmProperty['minValue'] = true;
        break;
      case clsFieldTabEN.con_DefaultValue:
        this.defaultValue = strValue;
        this.hmProperty['defaultValue'] = true;
        break;
      case clsFieldTabEN.con_FldStateId:
        this.fldStateId = strValue;
        this.hmProperty['fldStateId'] = true;
        break;
      case clsFieldTabEN.con_HomologousFldId:
        this.homologousFldId = strValue;
        this.hmProperty['homologousFldId'] = true;
        break;
      case clsFieldTabEN.con_TabNum:
        this.tabNum = Number(strValue);
        this.hmProperty['tabNum'] = true;
        break;
      case clsFieldTabEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsFieldTabEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsFieldTabEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsFieldTabEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsFieldTabEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsFieldTabEN.con_IsNeedTransCode:
        this.isNeedTransCode = Boolean(strValue);
        this.hmProperty['isNeedTransCode'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FieldTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fldId = ''; //字段Id
  public fldName = ''; //字段名
  public fldCnName = ''; //字段中文详名
  public caption = ''; //标题
  public fieldTypeId = ''; //字段类型Id
  public dataTypeId = ''; //数据类型Id
  public fldLength = 0; //字段长度
  public fldPrecision = 0; //精确度
  public fldInfo = ''; //字段信息
  public isNull = false; //是否可空
  public isPrimaryKey = false; //是否主键
  public isIdentity = false; //是否Identity
  public isChecked = false; //是否核实
  public isArchive = false; //是否存档
  public isOnlyOne = false; //是否唯一
  public maxValue = ''; //最大值
  public minValue = ''; //最小值
  public defaultValue = ''; //缺省值
  public fldStateId = ''; //字段状态Id
  public homologousFldId = ''; //同源字段Id
  public tabNum = 0; //表数
  public inUse = false; //是否在用
  public prjId = ''; //工程Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明
  public isNeedTransCode = false; //是否需要转换代码

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"FldCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldCnName(): string {
    return 'fldCnName';
  } //字段中文详名

  /**
   * 常量:"Caption"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Caption(): string {
    return 'caption';
  } //标题

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"FldLength"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldLength(): string {
    return 'fldLength';
  } //字段长度

  /**
   * 常量:"FldPrecision"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldPrecision(): string {
    return 'fldPrecision';
  } //精确度

  /**
   * 常量:"FldInfo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldInfo(): string {
    return 'fldInfo';
  } //字段信息

  /**
   * 常量:"IsNull"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNull(): string {
    return 'isNull';
  } //是否可空

  /**
   * 常量:"IsPrimaryKey"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsPrimaryKey(): string {
    return 'isPrimaryKey';
  } //是否主键

  /**
   * 常量:"IsIdentity"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsIdentity(): string {
    return 'isIdentity';
  } //是否Identity

  /**
   * 常量:"IsChecked"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsChecked(): string {
    return 'isChecked';
  } //是否核实

  /**
   * 常量:"IsArchive"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsArchive(): string {
    return 'isArchive';
  } //是否存档

  /**
   * 常量:"IsOnlyOne"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsOnlyOne(): string {
    return 'isOnlyOne';
  } //是否唯一

  /**
   * 常量:"MaxValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MaxValue(): string {
    return 'maxValue';
  } //最大值

  /**
   * 常量:"MinValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MinValue(): string {
    return 'minValue';
  } //最小值

  /**
   * 常量:"DefaultValue"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaultValue(): string {
    return 'defaultValue';
  } //缺省值

  /**
   * 常量:"FldStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldStateId(): string {
    return 'fldStateId';
  } //字段状态Id

  /**
   * 常量:"HomologousFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_HomologousFldId(): string {
    return 'homologousFldId';
  } //同源字段Id

  /**
   * 常量:"TabNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabNum(): string {
    return 'tabNum';
  } //表数

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

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
   * 常量:"IsNeedTransCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedTransCode(): string {
    return 'isNeedTransCode';
  } //是否需要转换代码

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
    //return propName in new clsFieldTabEN();
    const instance = new clsFieldTabEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
