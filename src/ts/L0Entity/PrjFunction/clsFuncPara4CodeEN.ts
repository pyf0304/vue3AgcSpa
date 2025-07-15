/**
 * 类名:clsFuncPara4CodeEN
 * 表名:FuncPara4Code(00050384)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:28
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 函数参数4Code(FuncPara4Code)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsFuncPara4CodeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'FuncPara4Code'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncParaId4Code'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'funcParaId4Code',
    'paraName',
    'paraCnName',
    'dataTypeId',
    'parameterType',
    'parameterTypeFullName',
    'isByRef',
    'prjId',
    'isTemplate',
    'funcPurposeId',
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
  private mstrFuncParaId4Code = ''; //函数参数Id
  private mstrParaName = ''; //参数名
  private mstrParaCnName = ''; //参数中文名
  private mstrDataTypeId = ''; //数据类型Id
  private mstrParameterType = ''; //参数类型
  private mstrParameterTypeFullName = ''; //参数类型全名
  private mbolIsByRef = false; //是否引用型参数
  private mstrPrjId = ''; //工程Id
  private mbolIsTemplate = false; //是否模板
  private mstrFuncPurposeId = ''; //函数用途Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 函数参数Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncParaId4Code(value: string) {
    if (value != undefined) {
      this.funcParaId4Code = value;
      this.hmProperty['funcParaId4Code'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 参数名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParaName(value: string) {
    if (value != undefined) {
      this.paraName = value;
      this.hmProperty['paraName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 参数中文名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParaCnName(value: string) {
    if (value != undefined) {
      this.paraCnName = value;
      this.hmProperty['paraCnName'] = true;
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
   * 参数类型(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParameterType(value: string) {
    if (value != undefined) {
      this.parameterType = value;
      this.hmProperty['parameterType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 参数类型全名(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParameterTypeFullName(value: string) {
    if (value != undefined) {
      this.parameterTypeFullName = value;
      this.hmProperty['parameterTypeFullName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否引用型参数(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsByRef(value: boolean) {
    if (value != undefined) {
      this.isByRef = value;
      this.hmProperty['isByRef'] = true;
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
   * 是否模板(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsTemplate(value: boolean) {
    if (value != undefined) {
      this.isTemplate = value;
      this.hmProperty['isTemplate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数用途Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncPurposeId(value: string) {
    if (value != undefined) {
      this.funcPurposeId = value;
      this.hmProperty['funcPurposeId'] = true;
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
      case clsFuncPara4CodeEN.con_FuncParaId4Code:
        return this.funcParaId4Code;
      case clsFuncPara4CodeEN.con_ParaName:
        return this.paraName;
      case clsFuncPara4CodeEN.con_ParaCnName:
        return this.paraCnName;
      case clsFuncPara4CodeEN.con_DataTypeId:
        return this.dataTypeId;
      case clsFuncPara4CodeEN.con_ParameterType:
        return this.parameterType;
      case clsFuncPara4CodeEN.con_ParameterTypeFullName:
        return this.parameterTypeFullName;
      case clsFuncPara4CodeEN.con_IsByRef:
        return this.isByRef;
      case clsFuncPara4CodeEN.con_PrjId:
        return this.prjId;
      case clsFuncPara4CodeEN.con_IsTemplate:
        return this.isTemplate;
      case clsFuncPara4CodeEN.con_FuncPurposeId:
        return this.funcPurposeId;
      case clsFuncPara4CodeEN.con_UpdDate:
        return this.updDate;
      case clsFuncPara4CodeEN.con_UpdUser:
        return this.updUser;
      case clsFuncPara4CodeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FuncPara4Code]中不存在!`;
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
      case clsFuncPara4CodeEN.con_FuncParaId4Code:
        this.funcParaId4Code = strValue;
        this.hmProperty['funcParaId4Code'] = true;
        break;
      case clsFuncPara4CodeEN.con_ParaName:
        this.paraName = strValue;
        this.hmProperty['paraName'] = true;
        break;
      case clsFuncPara4CodeEN.con_ParaCnName:
        this.paraCnName = strValue;
        this.hmProperty['paraCnName'] = true;
        break;
      case clsFuncPara4CodeEN.con_DataTypeId:
        this.dataTypeId = strValue;
        this.hmProperty['dataTypeId'] = true;
        break;
      case clsFuncPara4CodeEN.con_ParameterType:
        this.parameterType = strValue;
        this.hmProperty['parameterType'] = true;
        break;
      case clsFuncPara4CodeEN.con_ParameterTypeFullName:
        this.parameterTypeFullName = strValue;
        this.hmProperty['parameterTypeFullName'] = true;
        break;
      case clsFuncPara4CodeEN.con_IsByRef:
        this.isByRef = Boolean(strValue);
        this.hmProperty['isByRef'] = true;
        break;
      case clsFuncPara4CodeEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsFuncPara4CodeEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        this.hmProperty['isTemplate'] = true;
        break;
      case clsFuncPara4CodeEN.con_FuncPurposeId:
        this.funcPurposeId = strValue;
        this.hmProperty['funcPurposeId'] = true;
        break;
      case clsFuncPara4CodeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsFuncPara4CodeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsFuncPara4CodeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[FuncPara4Code]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public funcParaId4Code = ''; //函数参数Id
  public paraName = ''; //参数名
  public paraCnName = ''; //参数中文名
  public dataTypeId = ''; //数据类型Id
  public parameterType = ''; //参数类型
  public parameterTypeFullName = ''; //参数类型全名
  public isByRef = false; //是否引用型参数
  public prjId = ''; //工程Id
  public isTemplate = false; //是否模板
  public funcPurposeId = ''; //函数用途Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"FuncParaId4Code"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncParaId4Code(): string {
    return 'funcParaId4Code';
  } //函数参数Id

  /**
   * 常量:"ParaName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParaName(): string {
    return 'paraName';
  } //参数名

  /**
   * 常量:"ParaCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParaCnName(): string {
    return 'paraCnName';
  } //参数中文名

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"ParameterType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParameterType(): string {
    return 'parameterType';
  } //参数类型

  /**
   * 常量:"ParameterTypeFullName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParameterTypeFullName(): string {
    return 'parameterTypeFullName';
  } //参数类型全名

  /**
   * 常量:"IsByRef"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsByRef(): string {
    return 'isByRef';
  } //是否引用型参数

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"FuncPurposeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncPurposeId(): string {
    return 'funcPurposeId';
  } //函数用途Id

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
    //return propName in new clsFuncPara4CodeEN();
    const instance = new clsFuncPara4CodeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
