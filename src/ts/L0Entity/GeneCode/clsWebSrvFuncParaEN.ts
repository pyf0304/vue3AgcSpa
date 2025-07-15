/**
 * 类名:clsWebSrvFuncParaEN
 * 表名:WebSrvFuncPara(00050347)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:36
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
 * WebSrv函数参数(WebSrvFuncPara)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsWebSrvFuncParaEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'WebSrvFuncPara'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'WebSrvFuncParaId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 12;
  public static AttributeName = [
    'webSrvFuncParaId',
    'webSrvFunctionId',
    'dataTypeId',
    'parameterType',
    'parameterTypeFullName',
    'isByRef',
    'paraName',
    'paraCnName',
    'isKnownType',
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
  private mstrWebSrvFuncParaId = ''; //函数参数Id
  private mstrWebSrvFunctionId = ''; //函数Id
  private mstrDataTypeId = ''; //数据类型Id
  private mstrParameterType = ''; //参数类型
  private mstrParameterTypeFullName = ''; //参数类型全名
  private mbolIsByRef = false; //是否引用型参数
  private mstrParaName = ''; //参数名
  private mstrParaCnName = ''; //参数中文名
  private mbolIsKnownType = false; //是否已知类型
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 函数参数Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWebSrvFuncParaId(value: string) {
    if (value != undefined) {
      this.webSrvFuncParaId = value;
      this.hmProperty['webSrvFuncParaId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWebSrvFunctionId(value: string) {
    if (value != undefined) {
      this.webSrvFunctionId = value;
      this.hmProperty['webSrvFunctionId'] = true;
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
   * 是否已知类型(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsKnownType(value: boolean) {
    if (value != undefined) {
      this.isKnownType = value;
      this.hmProperty['isKnownType'] = true;
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
      case clsWebSrvFuncParaEN.con_WebSrvFuncParaId:
        return this.webSrvFuncParaId;
      case clsWebSrvFuncParaEN.con_WebSrvFunctionId:
        return this.webSrvFunctionId;
      case clsWebSrvFuncParaEN.con_DataTypeId:
        return this.dataTypeId;
      case clsWebSrvFuncParaEN.con_ParameterType:
        return this.parameterType;
      case clsWebSrvFuncParaEN.con_ParameterTypeFullName:
        return this.parameterTypeFullName;
      case clsWebSrvFuncParaEN.con_IsByRef:
        return this.isByRef;
      case clsWebSrvFuncParaEN.con_ParaName:
        return this.paraName;
      case clsWebSrvFuncParaEN.con_ParaCnName:
        return this.paraCnName;
      case clsWebSrvFuncParaEN.con_IsKnownType:
        return this.isKnownType;
      case clsWebSrvFuncParaEN.con_UpdDate:
        return this.updDate;
      case clsWebSrvFuncParaEN.con_UpdUser:
        return this.updUser;
      case clsWebSrvFuncParaEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[WebSrvFuncPara]中不存在!`;
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
      case clsWebSrvFuncParaEN.con_WebSrvFuncParaId:
        this.webSrvFuncParaId = strValue;
        this.hmProperty['webSrvFuncParaId'] = true;
        break;
      case clsWebSrvFuncParaEN.con_WebSrvFunctionId:
        this.webSrvFunctionId = strValue;
        this.hmProperty['webSrvFunctionId'] = true;
        break;
      case clsWebSrvFuncParaEN.con_DataTypeId:
        this.dataTypeId = strValue;
        this.hmProperty['dataTypeId'] = true;
        break;
      case clsWebSrvFuncParaEN.con_ParameterType:
        this.parameterType = strValue;
        this.hmProperty['parameterType'] = true;
        break;
      case clsWebSrvFuncParaEN.con_ParameterTypeFullName:
        this.parameterTypeFullName = strValue;
        this.hmProperty['parameterTypeFullName'] = true;
        break;
      case clsWebSrvFuncParaEN.con_IsByRef:
        this.isByRef = Boolean(strValue);
        this.hmProperty['isByRef'] = true;
        break;
      case clsWebSrvFuncParaEN.con_ParaName:
        this.paraName = strValue;
        this.hmProperty['paraName'] = true;
        break;
      case clsWebSrvFuncParaEN.con_ParaCnName:
        this.paraCnName = strValue;
        this.hmProperty['paraCnName'] = true;
        break;
      case clsWebSrvFuncParaEN.con_IsKnownType:
        this.isKnownType = Boolean(strValue);
        this.hmProperty['isKnownType'] = true;
        break;
      case clsWebSrvFuncParaEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsWebSrvFuncParaEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsWebSrvFuncParaEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[WebSrvFuncPara]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public webSrvFuncParaId = ''; //函数参数Id
  public webSrvFunctionId = ''; //函数Id
  public dataTypeId = ''; //数据类型Id
  public parameterType = ''; //参数类型
  public parameterTypeFullName = ''; //参数类型全名
  public isByRef = false; //是否引用型参数
  public paraName = ''; //参数名
  public paraCnName = ''; //参数中文名
  public isKnownType = false; //是否已知类型
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"WebSrvFuncParaId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WebSrvFuncParaId(): string {
    return 'webSrvFuncParaId';
  } //函数参数Id

  /**
   * 常量:"WebSrvFunctionId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_WebSrvFunctionId(): string {
    return 'webSrvFunctionId';
  } //函数Id

  /**
   * 常量:"DataTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

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
   * 常量:"IsKnownType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsKnownType(): string {
    return 'isKnownType';
  } //是否已知类型

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
