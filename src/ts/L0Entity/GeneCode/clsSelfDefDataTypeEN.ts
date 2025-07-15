/**
 * 类名:clsSelfDefDataTypeEN
 * 表名:SelfDefDataType(00050350)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:57
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 自定义数据类型(SelfDefDataType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsSelfDefDataTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'SelfDefDataType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'SdDataTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 22;
  public static AttributeName = [
    'sdDataTypeId',
    'dataTypeName',
    'isObject',
    'defaVarName',
    'dataCnName',
    'dataTypeAbbr',
    'vbNetType',
    'csType',
    'javaType',
    'javaObjType',
    'swiftType',
    'isNeedQuote',
    'oraDbType',
    'isReturnType',
    'sqlParaType',
    'mySqlType',
    'defaFldLength',
    'defaFldPrecision',
    'prjId',
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
  private mstrSdDataTypeId = ''; //自定义数据类型Id
  private mstrDataTypeName = ''; //数据类型名称
  private mbolIsObject = false; //是否对象
  private mstrDefaVarName = ''; //默认变量名
  private mstrDataCnName = ''; //数据类型中文名称
  private mstrDataTypeAbbr = ''; //数据类型缩写
  private mstrVbNetType = ''; //VBNET类型
  private mstrCsType = ''; //CS类型
  private mstrJavaType = ''; //JAVA类型
  private mstrJavaObjType = ''; //JAVA对象类型
  private mstrSwiftType = ''; //SwiftType
  private mbolIsNeedQuote = false; //是否需要引号
  private mstrOraDbType = ''; //Ora数据类型
  private mbolIsReturnType = false; //是否可作返回类型
  private mstrSqlParaType = ''; //SQL参数类型
  private mstrMySqlType = ''; //MySqlType
  private mintDefaFldLength = 0; //默认长度
  private mintDefaFldPrecision = 0; //默认小数位数
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 自定义数据类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSdDataTypeId(value: string) {
    if (value != undefined) {
      this.sdDataTypeId = value;
      this.hmProperty['sdDataTypeId'] = true;
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
   * 是否对象(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsObject(value: boolean) {
    if (value != undefined) {
      this.isObject = value;
      this.hmProperty['isObject'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 默认变量名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaVarName(value: string) {
    if (value != undefined) {
      this.defaVarName = value;
      this.hmProperty['defaVarName'] = true;
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
      case clsSelfDefDataTypeEN.con_SdDataTypeId:
        return this.sdDataTypeId;
      case clsSelfDefDataTypeEN.con_DataTypeName:
        return this.dataTypeName;
      case clsSelfDefDataTypeEN.con_IsObject:
        return this.isObject;
      case clsSelfDefDataTypeEN.con_DefaVarName:
        return this.defaVarName;
      case clsSelfDefDataTypeEN.con_DataCnName:
        return this.dataCnName;
      case clsSelfDefDataTypeEN.con_DataTypeAbbr:
        return this.dataTypeAbbr;
      case clsSelfDefDataTypeEN.con_VbNetType:
        return this.vbNetType;
      case clsSelfDefDataTypeEN.con_CsType:
        return this.csType;
      case clsSelfDefDataTypeEN.con_JavaType:
        return this.javaType;
      case clsSelfDefDataTypeEN.con_JavaObjType:
        return this.javaObjType;
      case clsSelfDefDataTypeEN.con_SwiftType:
        return this.swiftType;
      case clsSelfDefDataTypeEN.con_IsNeedQuote:
        return this.isNeedQuote;
      case clsSelfDefDataTypeEN.con_OraDbType:
        return this.oraDbType;
      case clsSelfDefDataTypeEN.con_IsReturnType:
        return this.isReturnType;
      case clsSelfDefDataTypeEN.con_SqlParaType:
        return this.sqlParaType;
      case clsSelfDefDataTypeEN.con_MySqlType:
        return this.mySqlType;
      case clsSelfDefDataTypeEN.con_DefaFldLength:
        return this.defaFldLength;
      case clsSelfDefDataTypeEN.con_DefaFldPrecision:
        return this.defaFldPrecision;
      case clsSelfDefDataTypeEN.con_PrjId:
        return this.prjId;
      case clsSelfDefDataTypeEN.con_UpdDate:
        return this.updDate;
      case clsSelfDefDataTypeEN.con_UpdUser:
        return this.updUser;
      case clsSelfDefDataTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SelfDefDataType]中不存在!`;
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
      case clsSelfDefDataTypeEN.con_SdDataTypeId:
        this.sdDataTypeId = strValue;
        this.hmProperty['sdDataTypeId'] = true;
        break;
      case clsSelfDefDataTypeEN.con_DataTypeName:
        this.dataTypeName = strValue;
        this.hmProperty['dataTypeName'] = true;
        break;
      case clsSelfDefDataTypeEN.con_IsObject:
        this.isObject = Boolean(strValue);
        this.hmProperty['isObject'] = true;
        break;
      case clsSelfDefDataTypeEN.con_DefaVarName:
        this.defaVarName = strValue;
        this.hmProperty['defaVarName'] = true;
        break;
      case clsSelfDefDataTypeEN.con_DataCnName:
        this.dataCnName = strValue;
        this.hmProperty['dataCnName'] = true;
        break;
      case clsSelfDefDataTypeEN.con_DataTypeAbbr:
        this.dataTypeAbbr = strValue;
        this.hmProperty['dataTypeAbbr'] = true;
        break;
      case clsSelfDefDataTypeEN.con_VbNetType:
        this.vbNetType = strValue;
        this.hmProperty['vbNetType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_CsType:
        this.csType = strValue;
        this.hmProperty['csType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_JavaType:
        this.javaType = strValue;
        this.hmProperty['javaType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_JavaObjType:
        this.javaObjType = strValue;
        this.hmProperty['javaObjType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_SwiftType:
        this.swiftType = strValue;
        this.hmProperty['swiftType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_IsNeedQuote:
        this.isNeedQuote = Boolean(strValue);
        this.hmProperty['isNeedQuote'] = true;
        break;
      case clsSelfDefDataTypeEN.con_OraDbType:
        this.oraDbType = strValue;
        this.hmProperty['oraDbType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_IsReturnType:
        this.isReturnType = Boolean(strValue);
        this.hmProperty['isReturnType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_SqlParaType:
        this.sqlParaType = strValue;
        this.hmProperty['sqlParaType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_MySqlType:
        this.mySqlType = strValue;
        this.hmProperty['mySqlType'] = true;
        break;
      case clsSelfDefDataTypeEN.con_DefaFldLength:
        this.defaFldLength = Number(strValue);
        this.hmProperty['defaFldLength'] = true;
        break;
      case clsSelfDefDataTypeEN.con_DefaFldPrecision:
        this.defaFldPrecision = Number(strValue);
        this.hmProperty['defaFldPrecision'] = true;
        break;
      case clsSelfDefDataTypeEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsSelfDefDataTypeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsSelfDefDataTypeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsSelfDefDataTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[SelfDefDataType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public sdDataTypeId = ''; //自定义数据类型Id
  public dataTypeName = ''; //数据类型名称
  public isObject = false; //是否对象
  public defaVarName = ''; //默认变量名
  public dataCnName = ''; //数据类型中文名称
  public dataTypeAbbr = ''; //数据类型缩写
  public vbNetType = ''; //VBNET类型
  public csType = ''; //CS类型
  public javaType = ''; //JAVA类型
  public javaObjType = ''; //JAVA对象类型
  public swiftType = ''; //SwiftType
  public isNeedQuote = false; //是否需要引号
  public oraDbType = ''; //Ora数据类型
  public isReturnType = false; //是否可作返回类型
  public sqlParaType = ''; //SQL参数类型
  public mySqlType = ''; //MySqlType
  public defaFldLength = 0; //默认长度
  public defaFldPrecision = 0; //默认小数位数
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"SdDataTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SdDataTypeId(): string {
    return 'sdDataTypeId';
  } //自定义数据类型Id

  /**
   * 常量:"DataTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"IsObject"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsObject(): string {
    return 'isObject';
  } //是否对象

  /**
   * 常量:"DefaVarName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DefaVarName(): string {
    return 'defaVarName';
  } //默认变量名

  /**
   * 常量:"DataCnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataCnName(): string {
    return 'dataCnName';
  } //数据类型中文名称

  /**
   * 常量:"DataTypeAbbr"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTypeAbbr(): string {
    return 'dataTypeAbbr';
  } //数据类型缩写

  /**
   * 常量:"VbNetType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VbNetType(): string {
    return 'vbNetType';
  } //VBNET类型

  /**
   * 常量:"CsType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CsType(): string {
    return 'csType';
  } //CS类型

  /**
   * 常量:"JavaType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_JavaType(): string {
    return 'javaType';
  } //JAVA类型

  /**
   * 常量:"JavaObjType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_JavaObjType(): string {
    return 'javaObjType';
  } //JAVA对象类型

  /**
   * 常量:"SwiftType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SwiftType(): string {
    return 'swiftType';
  } //SwiftType

  /**
   * 常量:"IsNeedQuote"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNeedQuote(): string {
    return 'isNeedQuote';
  } //是否需要引号

  /**
   * 常量:"OraDbType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OraDbType(): string {
    return 'oraDbType';
  } //Ora数据类型

  /**
   * 常量:"IsReturnType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsReturnType(): string {
    return 'isReturnType';
  } //是否可作返回类型

  /**
   * 常量:"SqlParaType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlParaType(): string {
    return 'sqlParaType';
  } //SQL参数类型

  /**
   * 常量:"MySqlType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MySqlType(): string {
    return 'mySqlType';
  } //MySqlType

  /**
   * 常量:"DefaFldLength"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DefaFldLength(): string {
    return 'defaFldLength';
  } //默认长度

  /**
   * 常量:"DefaFldPrecision"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DefaFldPrecision(): string {
    return 'defaFldPrecision';
  } //默认小数位数

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

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
