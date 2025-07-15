/**
 * 类名:clsDataTypeAbbrEN
 * 表名:DataTypeAbbr(00050023)
 * 版本:2025.04.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/17 00:37:40
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 数据类型(DataTypeAbbr)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDataTypeAbbrEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'DataTypeAbbr'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DataTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 20;
  public static AttributeName = [
    'dataTypeId',
    'dataTypeName',
    'dataTypeENName',
    'dataCnName',
    'dataTypeAbbr',
    'netSysType',
    'vbNetType',
    'csType',
    'javaType',
    'typeScriptType',
    'javaObjType',
    'swiftType',
    'isNeedQuote',
    'oraDbType',
    'isReturnType',
    'sqlParaType',
    'mySqlType',
    'defaFldLength',
    'defaFldPrecision',
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
  private mstrDataTypeId = ''; //数据类型Id
  private mstrDataTypeName = ''; //数据类型名称
  private mstrDataTypeENName = ''; //DataTypeENName
  private mstrDataCnName = ''; //数据类型中文名称
  private mstrDataTypeAbbr = ''; //数据类型缩写
  private mstrNetSysType = ''; //NET系统类型
  private mstrVbNetType = ''; //VBNET类型
  private mstrCsType = ''; //CS类型
  private mstrJavaType = ''; //JAVA类型
  private mstrTypeScriptType = ''; //TypeScript类型
  private mstrJavaObjType = ''; //JAVA对象类型
  private mstrSwiftType = ''; //SwiftType
  private mbolIsNeedQuote = false; //是否需要引号
  private mstrOraDbType = ''; //Ora数据类型
  private mbolIsReturnType = false; //是否可作返回类型
  private mstrSqlParaType = ''; //SQL参数类型
  private mstrMySqlType = ''; //MySqlType
  private mintDefaFldLength = 0; //默认长度
  private mintDefaFldPrecision = 0; //默认小数位数
  private mstrMemo = ''; //说明

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
   * 数据类型名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataTypeName(value: string) {
    if (value != undefined) {
      this.dataTypeName = value;
      this.hmProperty['dataTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DataTypeENName(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataTypeENName(value: string) {
    if (value != undefined) {
      this.dataTypeENName = value;
      this.hmProperty['dataTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据类型中文名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataCnName(value: string) {
    if (value != undefined) {
      this.dataCnName = value;
      this.hmProperty['dataCnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据类型缩写(说明:;字段类型:varchar;字段长度:5;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataTypeAbbr(value: string) {
    if (value != undefined) {
      this.dataTypeAbbr = value;
      this.hmProperty['dataTypeAbbr'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * NET系统类型(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetNetSysType(value: string) {
    if (value != undefined) {
      this.netSysType = value;
      this.hmProperty['netSysType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * VBNET类型(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVbNetType(value: string) {
    if (value != undefined) {
      this.vbNetType = value;
      this.hmProperty['vbNetType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * CS类型(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCsType(value: string) {
    if (value != undefined) {
      this.csType = value;
      this.hmProperty['csType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * JAVA类型(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetJavaType(value: string) {
    if (value != undefined) {
      this.javaType = value;
      this.hmProperty['javaType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * TypeScript类型(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTypeScriptType(value: string) {
    if (value != undefined) {
      this.typeScriptType = value;
      this.hmProperty['typeScriptType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * JAVA对象类型(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetJavaObjType(value: string) {
    if (value != undefined) {
      this.javaObjType = value;
      this.hmProperty['javaObjType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * SwiftType(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSwiftType(value: string) {
    if (value != undefined) {
      this.swiftType = value;
      this.hmProperty['swiftType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要引号(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedQuote(value: boolean) {
    if (value != undefined) {
      this.isNeedQuote = value;
      this.hmProperty['isNeedQuote'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Ora数据类型(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOraDbType(value: string) {
    if (value != undefined) {
      this.oraDbType = value;
      this.hmProperty['oraDbType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否可作返回类型(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsReturnType(value: boolean) {
    if (value != undefined) {
      this.isReturnType = value;
      this.hmProperty['isReturnType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * SQL参数类型(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlParaType(value: string) {
    if (value != undefined) {
      this.sqlParaType = value;
      this.hmProperty['sqlParaType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * MySqlType(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMySqlType(value: string) {
    if (value != undefined) {
      this.mySqlType = value;
      this.hmProperty['mySqlType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 默认长度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaFldLength(value: number) {
    if (value != undefined) {
      this.defaFldLength = value;
      this.hmProperty['defaFldLength'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 默认小数位数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaFldPrecision(value: number) {
    if (value != undefined) {
      this.defaFldPrecision = value;
      this.hmProperty['defaFldPrecision'] = true;
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
      case clsDataTypeAbbrEN.con_DataTypeId:
        return this.dataTypeId;
      case clsDataTypeAbbrEN.con_DataTypeName:
        return this.dataTypeName;
      case clsDataTypeAbbrEN.con_DataTypeENName:
        return this.dataTypeENName;
      case clsDataTypeAbbrEN.con_DataCnName:
        return this.dataCnName;
      case clsDataTypeAbbrEN.con_DataTypeAbbr:
        return this.dataTypeAbbr;
      case clsDataTypeAbbrEN.con_NetSysType:
        return this.netSysType;
      case clsDataTypeAbbrEN.con_VbNetType:
        return this.vbNetType;
      case clsDataTypeAbbrEN.con_CsType:
        return this.csType;
      case clsDataTypeAbbrEN.con_JavaType:
        return this.javaType;
      case clsDataTypeAbbrEN.con_TypeScriptType:
        return this.typeScriptType;
      case clsDataTypeAbbrEN.con_JavaObjType:
        return this.javaObjType;
      case clsDataTypeAbbrEN.con_SwiftType:
        return this.swiftType;
      case clsDataTypeAbbrEN.con_IsNeedQuote:
        return this.isNeedQuote;
      case clsDataTypeAbbrEN.con_OraDbType:
        return this.oraDbType;
      case clsDataTypeAbbrEN.con_IsReturnType:
        return this.isReturnType;
      case clsDataTypeAbbrEN.con_SqlParaType:
        return this.sqlParaType;
      case clsDataTypeAbbrEN.con_MySqlType:
        return this.mySqlType;
      case clsDataTypeAbbrEN.con_DefaFldLength:
        return this.defaFldLength;
      case clsDataTypeAbbrEN.con_DefaFldPrecision:
        return this.defaFldPrecision;
      case clsDataTypeAbbrEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DataTypeAbbr]中不存在!`;
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
      case clsDataTypeAbbrEN.con_DataTypeId:
        this.dataTypeId = strValue;
        this.hmProperty['dataTypeId'] = true;
        break;
      case clsDataTypeAbbrEN.con_DataTypeName:
        this.dataTypeName = strValue;
        this.hmProperty['dataTypeName'] = true;
        break;
      case clsDataTypeAbbrEN.con_DataTypeENName:
        this.dataTypeENName = strValue;
        this.hmProperty['dataTypeENName'] = true;
        break;
      case clsDataTypeAbbrEN.con_DataCnName:
        this.dataCnName = strValue;
        this.hmProperty['dataCnName'] = true;
        break;
      case clsDataTypeAbbrEN.con_DataTypeAbbr:
        this.dataTypeAbbr = strValue;
        this.hmProperty['dataTypeAbbr'] = true;
        break;
      case clsDataTypeAbbrEN.con_NetSysType:
        this.netSysType = strValue;
        this.hmProperty['netSysType'] = true;
        break;
      case clsDataTypeAbbrEN.con_VbNetType:
        this.vbNetType = strValue;
        this.hmProperty['vbNetType'] = true;
        break;
      case clsDataTypeAbbrEN.con_CsType:
        this.csType = strValue;
        this.hmProperty['csType'] = true;
        break;
      case clsDataTypeAbbrEN.con_JavaType:
        this.javaType = strValue;
        this.hmProperty['javaType'] = true;
        break;
      case clsDataTypeAbbrEN.con_TypeScriptType:
        this.typeScriptType = strValue;
        this.hmProperty['typeScriptType'] = true;
        break;
      case clsDataTypeAbbrEN.con_JavaObjType:
        this.javaObjType = strValue;
        this.hmProperty['javaObjType'] = true;
        break;
      case clsDataTypeAbbrEN.con_SwiftType:
        this.swiftType = strValue;
        this.hmProperty['swiftType'] = true;
        break;
      case clsDataTypeAbbrEN.con_IsNeedQuote:
        this.isNeedQuote = Boolean(strValue);
        this.hmProperty['isNeedQuote'] = true;
        break;
      case clsDataTypeAbbrEN.con_OraDbType:
        this.oraDbType = strValue;
        this.hmProperty['oraDbType'] = true;
        break;
      case clsDataTypeAbbrEN.con_IsReturnType:
        this.isReturnType = Boolean(strValue);
        this.hmProperty['isReturnType'] = true;
        break;
      case clsDataTypeAbbrEN.con_SqlParaType:
        this.sqlParaType = strValue;
        this.hmProperty['sqlParaType'] = true;
        break;
      case clsDataTypeAbbrEN.con_MySqlType:
        this.mySqlType = strValue;
        this.hmProperty['mySqlType'] = true;
        break;
      case clsDataTypeAbbrEN.con_DefaFldLength:
        this.defaFldLength = Number(strValue);
        this.hmProperty['defaFldLength'] = true;
        break;
      case clsDataTypeAbbrEN.con_DefaFldPrecision:
        this.defaFldPrecision = Number(strValue);
        this.hmProperty['defaFldPrecision'] = true;
        break;
      case clsDataTypeAbbrEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DataTypeAbbr]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dataTypeId = ''; //数据类型Id
  public dataTypeName = ''; //数据类型名称
  public dataTypeENName = ''; //DataTypeENName
  public dataCnName = ''; //数据类型中文名称
  public dataTypeAbbr = ''; //数据类型缩写
  public netSysType = ''; //NET系统类型
  public vbNetType = ''; //VBNET类型
  public csType = ''; //CS类型
  public javaType = ''; //JAVA类型
  public typeScriptType = ''; //TypeScript类型
  public javaObjType = ''; //JAVA对象类型
  public swiftType = ''; //SwiftType
  public isNeedQuote = false; //是否需要引号
  public oraDbType = ''; //Ora数据类型
  public isReturnType = false; //是否可作返回类型
  public sqlParaType = ''; //SQL参数类型
  public mySqlType = ''; //MySqlType
  public defaFldLength = 0; //默认长度
  public defaFldPrecision = 0; //默认小数位数
  public memo = ''; //说明

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"DataTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeENName(): string {
    return 'dataTypeENName';
  } //DataTypeENName

  /**
   * 常量:"DataCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataCnName(): string {
    return 'dataCnName';
  } //数据类型中文名称

  /**
   * 常量:"DataTypeAbbr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeAbbr(): string {
    return 'dataTypeAbbr';
  } //数据类型缩写

  /**
   * 常量:"NetSysType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NetSysType(): string {
    return 'netSysType';
  } //NET系统类型

  /**
   * 常量:"VbNetType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VbNetType(): string {
    return 'vbNetType';
  } //VBNET类型

  /**
   * 常量:"CsType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CsType(): string {
    return 'csType';
  } //CS类型

  /**
   * 常量:"JavaType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_JavaType(): string {
    return 'javaType';
  } //JAVA类型

  /**
   * 常量:"TypeScriptType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TypeScriptType(): string {
    return 'typeScriptType';
  } //TypeScript类型

  /**
   * 常量:"JavaObjType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_JavaObjType(): string {
    return 'javaObjType';
  } //JAVA对象类型

  /**
   * 常量:"SwiftType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SwiftType(): string {
    return 'swiftType';
  } //SwiftType

  /**
   * 常量:"IsNeedQuote"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedQuote(): string {
    return 'isNeedQuote';
  } //是否需要引号

  /**
   * 常量:"OraDbType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OraDbType(): string {
    return 'oraDbType';
  } //Ora数据类型

  /**
   * 常量:"IsReturnType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsReturnType(): string {
    return 'isReturnType';
  } //是否可作返回类型

  /**
   * 常量:"SqlParaType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlParaType(): string {
    return 'sqlParaType';
  } //SQL参数类型

  /**
   * 常量:"MySqlType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MySqlType(): string {
    return 'mySqlType';
  } //MySqlType

  /**
   * 常量:"DefaFldLength"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaFldLength(): string {
    return 'defaFldLength';
  } //默认长度

  /**
   * 常量:"DefaFldPrecision"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaFldPrecision(): string {
    return 'defaFldPrecision';
  } //默认小数位数

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
    //return propName in new clsDataTypeAbbrEN();
    const instance = new clsDataTypeAbbrEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumDataTypeAbbr {
  /**
   * bigint
   **/
  static readonly bigint_01 = '01';
  /**
   * binary
   **/
  static readonly binary_02 = '02';
  /**
   * bit
   **/
  static readonly bit_03 = '03';
  /**
   * char
   **/
  static readonly char_04 = '04';
  /**
   * datetime
   **/
  static readonly datetime_05 = '05';
  /**
   * decimal
   **/
  static readonly decimal_06 = '06';
  /**
   * float
   **/
  static readonly float_07 = '07';
  /**
   * image
   **/
  static readonly image_08 = '08';
  /**
   * int
   **/
  static readonly int_09 = '09';
  /**
   * int identity
   **/
  static readonly intidentity_10 = '10';
  /**
   * money
   **/
  static readonly money_11 = '11';
  /**
   * nchar
   **/
  static readonly nchar_12 = '12';
  /**
   * ntext
   **/
  static readonly ntext_13 = '13';
  /**
   * numeric
   **/
  static readonly numeric_14 = '14';
  /**
   * nvarchar
   **/
  static readonly nvarchar_15 = '15';
  /**
   * real
   **/
  static readonly real_16 = '16';
  /**
   * smalldatetime
   **/
  static readonly smalldatetime_17 = '17';
  /**
   * smallint
   **/
  static readonly smallint_18 = '18';
  /**
   * smallmoney
   **/
  static readonly smallmoney_19 = '19';
  /**
   * text
   **/
  static readonly text_20 = '20';
  /**
   * timestamp
   **/
  static readonly timestamp_21 = '21';
  /**
   * tinyint
   **/
  static readonly tinyint_22 = '22';
  /**
   * uniqueidentifier
   **/
  static readonly uniqueidentifier_23 = '23';
  /**
   * varbinary
   **/
  static readonly varbinary_24 = '24';
  /**
   * varchar
   **/
  static readonly varchar_25 = '25';
  /**
   * bigint identity
   **/
  static readonly bigintidentity_26 = '26';
  /**
   * void
   **/
  static readonly void_27 = '27';
  /**
   * System.Data.DataSet
   **/
  static readonly System_Data_DataSet_28 = '28';
  /**
   * Object
   **/
  static readonly Object_29 = '29';
  /**
   * ObjectLst
   **/
  static readonly ObjectLst_30 = '30';
  /**
   * Array
   **/
  static readonly Array_31 = '31';
  /**
   * T
   **/
  static readonly T_32 = '32';
  /**
   * Var4Key
   **/
  static readonly Var4Key_33 = '33';
  /**
   * Var4Field
   **/
  static readonly Var4Field_34 = '34';
}
