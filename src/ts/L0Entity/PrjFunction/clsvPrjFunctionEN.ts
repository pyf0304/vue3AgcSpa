/**
 * 类名:clsvPrjFunctionEN
 * 表名:vPrjFunction(00050259)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:06
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
 * v工程函数(vPrjFunction)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvPrjFunctionEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vPrjFunction'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 15;
  public static AttributeName = [
    'funcId',
    'funcName',
    'prjId',
    'returnTypeId',
    'dataTypeName',
    'dataCnName',
    'csType',
    'funcTypeId',
    'funcTypeName',
    'isTemplate',
    'funcCode',
    'userId',
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
      case clsvPrjFunctionEN.con_FuncId:
        return this.funcId;
      case clsvPrjFunctionEN.con_FuncName:
        return this.funcName;
      case clsvPrjFunctionEN.con_PrjId:
        return this.prjId;
      case clsvPrjFunctionEN.con_ReturnTypeId:
        return this.returnTypeId;
      case clsvPrjFunctionEN.con_DataTypeName:
        return this.dataTypeName;
      case clsvPrjFunctionEN.con_DataCnName:
        return this.dataCnName;
      case clsvPrjFunctionEN.con_CsType:
        return this.csType;
      case clsvPrjFunctionEN.con_FuncTypeId:
        return this.funcTypeId;
      case clsvPrjFunctionEN.con_FuncTypeName:
        return this.funcTypeName;
      case clsvPrjFunctionEN.con_IsTemplate:
        return this.isTemplate;
      case clsvPrjFunctionEN.con_FuncCode:
        return this.funcCode;
      case clsvPrjFunctionEN.con_UserId:
        return this.userId;
      case clsvPrjFunctionEN.con_UpdDate:
        return this.updDate;
      case clsvPrjFunctionEN.con_UpdUser:
        return this.updUser;
      case clsvPrjFunctionEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjFunction]中不存在!`;
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
      case clsvPrjFunctionEN.con_FuncId:
        this.funcId = strValue;
        break;
      case clsvPrjFunctionEN.con_FuncName:
        this.funcName = strValue;
        break;
      case clsvPrjFunctionEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvPrjFunctionEN.con_ReturnTypeId:
        this.returnTypeId = strValue;
        break;
      case clsvPrjFunctionEN.con_DataTypeName:
        this.dataTypeName = strValue;
        break;
      case clsvPrjFunctionEN.con_DataCnName:
        this.dataCnName = strValue;
        break;
      case clsvPrjFunctionEN.con_CsType:
        this.csType = strValue;
        break;
      case clsvPrjFunctionEN.con_FuncTypeId:
        this.funcTypeId = strValue;
        break;
      case clsvPrjFunctionEN.con_FuncTypeName:
        this.funcTypeName = strValue;
        break;
      case clsvPrjFunctionEN.con_IsTemplate:
        this.isTemplate = Boolean(strValue);
        break;
      case clsvPrjFunctionEN.con_FuncCode:
        this.funcCode = strValue;
        break;
      case clsvPrjFunctionEN.con_UserId:
        this.userId = strValue;
        break;
      case clsvPrjFunctionEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvPrjFunctionEN.con_UpdUser:
        this.updUser = strValue;
        break;
      case clsvPrjFunctionEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjFunction]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public funcId = ''; //函数ID
  public funcName = ''; //函数名
  public prjId = ''; //工程ID
  public returnTypeId = ''; //返回类型ID
  public dataTypeName = ''; //数据类型名称
  public dataCnName = ''; //数据类型中文名称
  public csType = ''; //CS类型
  public funcTypeId = ''; //函数类型Id
  public funcTypeName = ''; //函数类型名
  public isTemplate = false; //是否模板
  public funcCode = ''; //函数代码
  public userId = ''; //用户Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"FuncId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncId(): string {
    return 'funcId';
  } //函数ID

  /**
   * 常量:"FuncName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"ReturnTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ReturnTypeId(): string {
    return 'returnTypeId';
  } //返回类型ID

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
   * 常量:"FuncTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id

  /**
   * 常量:"FuncTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncTypeName(): string {
    return 'funcTypeName';
  } //函数类型名

  /**
   * 常量:"IsTemplate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"FuncCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncCode(): string {
    return 'funcCode';
  } //函数代码

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

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
