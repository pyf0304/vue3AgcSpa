/**
 * 类名:clsErrorLevelEN
 * 表名:ErrorLevel(00050189)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:02
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:日志管理(LogManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 错误等级(ErrorLevel)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsErrorLevelEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ErrorLevel'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ErrorLevelId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = ['errorLevelId', 'errorLevelName', 'errorLevelENName', 'memo'];
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
  private mintErrorLevelId = 0; //错误等级Id
  private mstrErrorLevelName = ''; //错误等级名
  private mstrErrorLevelENName = ''; //错误等级名
  private mstrMemo = ''; //说明

  /**
   * 错误等级Id(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrorLevelId(value: number) {
    if (value != undefined) {
      this.errorLevelId = value;
      this.hmProperty['errorLevelId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误等级名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrorLevelName(value: string) {
    if (value != undefined) {
      this.errorLevelName = value;
      this.hmProperty['errorLevelName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误等级名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrorLevelENName(value: string) {
    if (value != undefined) {
      this.errorLevelENName = value;
      this.hmProperty['errorLevelENName'] = true;
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
      case clsErrorLevelEN.con_ErrorLevelId:
        return this.errorLevelId;
      case clsErrorLevelEN.con_ErrorLevelName:
        return this.errorLevelName;
      case clsErrorLevelEN.con_ErrorLevelENName:
        return this.errorLevelENName;
      case clsErrorLevelEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ErrorLevel]中不存在!`;
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
      case clsErrorLevelEN.con_ErrorLevelId:
        this.errorLevelId = Number(strValue);
        this.hmProperty['errorLevelId'] = true;
        break;
      case clsErrorLevelEN.con_ErrorLevelName:
        this.errorLevelName = strValue;
        this.hmProperty['errorLevelName'] = true;
        break;
      case clsErrorLevelEN.con_ErrorLevelENName:
        this.errorLevelENName = strValue;
        this.hmProperty['errorLevelENName'] = true;
        break;
      case clsErrorLevelEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[ErrorLevel]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public errorLevelId = 0; //错误等级Id
  public errorLevelName = ''; //错误等级名
  public errorLevelENName = ''; //错误等级名
  public memo = ''; //说明

  /**
   * 常量:"ErrorLevelId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrorLevelId(): string {
    return 'errorLevelId';
  } //错误等级Id

  /**
   * 常量:"ErrorLevelName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrorLevelName(): string {
    return 'errorLevelName';
  } //错误等级名

  /**
   * 常量:"ErrorLevelENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrorLevelENName(): string {
    return 'errorLevelENName';
  } //错误等级名

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
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export enum enumErrorLevel {
  NoError_0 = 0, //无错误
  MinorError_1 = 1, //轻微错误
  GeneralError_2 = 2, //一般错误
  MoreSeriousError_3 = 3, //较严重错误
  SeriousError_4 = 4, //严重错误
}
