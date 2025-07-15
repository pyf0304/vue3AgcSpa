/**
 * 类名:clsvFuncParaRelaEN
 * 表名:vFuncParaRela(00050499)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/30 22:19:26
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vFuncParaRela(vFuncParaRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFuncParaRelaEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFuncParaRela'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 27;
  public static AttributeName = [
    'mId',
    'funcParaId4Code',
    'paraName',
    'paraCnName',
    'dataTypeId',
    'dataTypeName',
    'dataCnName',
    'csType',
    'javaType',
    'javaObjType',
    'swiftType',
    'isNeedQuote',
    'oraDbType',
    'mySqlType',
    'parameterType',
    'parameterTypeFullName',
    'isByRef',
    'prjId',
    'funcId4Code',
    'funcName4Code',
    'functionSignature',
    'isAsyncFunc',
    'isSysFunction',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvFuncParaRelaEN.con_mId:
        return this.mId;
      case clsvFuncParaRelaEN.con_FuncParaId4Code:
        return this.funcParaId4Code;
      case clsvFuncParaRelaEN.con_ParaName:
        return this.paraName;
      case clsvFuncParaRelaEN.con_ParaCnName:
        return this.paraCnName;
      case clsvFuncParaRelaEN.con_DataTypeId:
        return this.dataTypeId;
      case clsvFuncParaRelaEN.con_DataTypeName:
        return this.dataTypeName;
      case clsvFuncParaRelaEN.con_DataCnName:
        return this.dataCnName;
      case clsvFuncParaRelaEN.con_CsType:
        return this.csType;
      case clsvFuncParaRelaEN.con_JavaType:
        return this.javaType;
      case clsvFuncParaRelaEN.con_JavaObjType:
        return this.javaObjType;
      case clsvFuncParaRelaEN.con_SwiftType:
        return this.swiftType;
      case clsvFuncParaRelaEN.con_IsNeedQuote:
        return this.isNeedQuote;
      case clsvFuncParaRelaEN.con_OraDbType:
        return this.oraDbType;
      case clsvFuncParaRelaEN.con_MySqlType:
        return this.mySqlType;
      case clsvFuncParaRelaEN.con_ParameterType:
        return this.parameterType;
      case clsvFuncParaRelaEN.con_ParameterTypeFullName:
        return this.parameterTypeFullName;
      case clsvFuncParaRelaEN.con_IsByRef:
        return this.isByRef;
      case clsvFuncParaRelaEN.con_PrjId:
        return this.prjId;
      case clsvFuncParaRelaEN.con_FuncId4Code:
        return this.funcId4Code;
      case clsvFuncParaRelaEN.con_FuncName4Code:
        return this.funcName4Code;
      case clsvFuncParaRelaEN.con_FunctionSignature:
        return this.functionSignature;
      case clsvFuncParaRelaEN.con_IsAsyncFunc:
        return this.isAsyncFunc;
      case clsvFuncParaRelaEN.con_IsSysFunction:
        return this.isSysFunction;
      case clsvFuncParaRelaEN.con_OrderNum:
        return this.orderNum;
      case clsvFuncParaRelaEN.con_UpdDate:
        return this.updDate;
      case clsvFuncParaRelaEN.con_UpdUser:
        return this.updUser;
      case clsvFuncParaRelaEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFuncParaRela]中不存在!`;
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
      case clsvFuncParaRelaEN.con_mId:
        this.mId = Number(strValue);
        break;
      case clsvFuncParaRelaEN.con_FuncParaId4Code:
        this.funcParaId4Code = strValue;
        break;
      case clsvFuncParaRelaEN.con_ParaName:
        this.paraName = strValue;
        break;
      case clsvFuncParaRelaEN.con_ParaCnName:
        this.paraCnName = strValue;
        break;
      case clsvFuncParaRelaEN.con_DataTypeId:
        this.dataTypeId = strValue;
        break;
      case clsvFuncParaRelaEN.con_DataTypeName:
        this.dataTypeName = strValue;
        break;
      case clsvFuncParaRelaEN.con_DataCnName:
        this.dataCnName = strValue;
        break;
      case clsvFuncParaRelaEN.con_CsType:
        this.csType = strValue;
        break;
      case clsvFuncParaRelaEN.con_JavaType:
        this.javaType = strValue;
        break;
      case clsvFuncParaRelaEN.con_JavaObjType:
        this.javaObjType = strValue;
        break;
      case clsvFuncParaRelaEN.con_SwiftType:
        this.swiftType = strValue;
        break;
      case clsvFuncParaRelaEN.con_IsNeedQuote:
        this.isNeedQuote = Boolean(strValue);
        break;
      case clsvFuncParaRelaEN.con_OraDbType:
        this.oraDbType = strValue;
        break;
      case clsvFuncParaRelaEN.con_MySqlType:
        this.mySqlType = strValue;
        break;
      case clsvFuncParaRelaEN.con_ParameterType:
        this.parameterType = strValue;
        break;
      case clsvFuncParaRelaEN.con_ParameterTypeFullName:
        this.parameterTypeFullName = strValue;
        break;
      case clsvFuncParaRelaEN.con_IsByRef:
        this.isByRef = Boolean(strValue);
        break;
      case clsvFuncParaRelaEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvFuncParaRelaEN.con_FuncId4Code:
        this.funcId4Code = strValue;
        break;
      case clsvFuncParaRelaEN.con_FuncName4Code:
        this.funcName4Code = strValue;
        break;
      case clsvFuncParaRelaEN.con_FunctionSignature:
        this.functionSignature = strValue;
        break;
      case clsvFuncParaRelaEN.con_IsAsyncFunc:
        this.isAsyncFunc = Boolean(strValue);
        break;
      case clsvFuncParaRelaEN.con_IsSysFunction:
        this.isSysFunction = Boolean(strValue);
        break;
      case clsvFuncParaRelaEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvFuncParaRelaEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvFuncParaRelaEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvFuncParaRelaEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFuncParaRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public funcParaId4Code = ''; //函数参数Id
  public paraName = ''; //参数名
  public paraCnName = ''; //参数中文名
  public dataTypeId = ''; //数据类型Id
  public dataTypeName = ''; //数据类型名称
  public dataCnName = ''; //数据类型中文名称
  public csType = ''; //CS类型
  public javaType = ''; //JAVA类型
  public javaObjType = ''; //JAVA对象类型
  public swiftType = ''; //SwiftType
  public isNeedQuote = false; //是否需要引号
  public oraDbType = ''; //Ora数据类型
  public mySqlType = ''; //MySqlType
  public parameterType = ''; //参数类型
  public parameterTypeFullName = ''; //参数类型全名
  public isByRef = false; //是否引用型参数
  public prjId = ''; //工程ID
  public funcId4Code = ''; //函数Id4Code
  public funcName4Code = ''; //函数名4Code
  public functionSignature = ''; //函数签名
  public isAsyncFunc = false; //是否异步函数
  public isSysFunction = false; //是否系统函数
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"FuncParaId4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncParaId4Code(): string {
    return 'funcParaId4Code';
  } //函数参数Id

  /**
   * 常量:"ParaName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParaName(): string {
    return 'paraName';
  } //参数名

  /**
   * 常量:"ParaCnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParaCnName(): string {
    return 'paraCnName';
  } //参数中文名

  /**
   * 常量:"DataTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"DataTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"DataCnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataCnName(): string {
    return 'dataCnName';
  } //数据类型中文名称

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
   * 常量:"MySqlType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MySqlType(): string {
    return 'mySqlType';
  } //MySqlType

  /**
   * 常量:"ParameterType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParameterType(): string {
    return 'parameterType';
  } //参数类型

  /**
   * 常量:"ParameterTypeFullName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ParameterTypeFullName(): string {
    return 'parameterTypeFullName';
  } //参数类型全名

  /**
   * 常量:"IsByRef"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsByRef(): string {
    return 'isByRef';
  } //是否引用型参数

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"FuncId4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncId4Code(): string {
    return 'funcId4Code';
  } //函数Id4Code

  /**
   * 常量:"FuncName4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncName4Code(): string {
    return 'funcName4Code';
  } //函数名4Code

  /**
   * 常量:"FunctionSignature"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionSignature(): string {
    return 'functionSignature';
  } //函数签名

  /**
   * 常量:"IsAsyncFunc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsAsyncFunc(): string {
    return 'isAsyncFunc';
  } //是否异步函数

  /**
   * 常量:"IsSysFunction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSysFunction(): string {
    return 'isSysFunction';
  } //是否系统函数

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

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
