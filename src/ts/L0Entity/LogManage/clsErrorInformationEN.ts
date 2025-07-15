/**
 * 类名:clsErrorInformationEN
 * 表名:ErrorInformation(00050185)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:30
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
 * 错误(ErrorInformation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsErrorInformationEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ErrorInformation'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ErrorID'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = [
    'errorID',
    'pageName',
    'functionName',
    'errorInformation',
    'userId',
    'createTime',
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
  private mlngErrorID = 0; //错误流水号
  private mstrPageName = ''; //页面名称
  private mstrFunctionName = ''; //功能名称
  private mstrErrorInformation = ''; //错误信息
  private mstrUserId = ''; //用户Id
  private mdteCreateTime = new Date(); //创建时间

  /**
   * 错误流水号(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrorID(value: number) {
    if (value != undefined) {
      this.errorID = value;
      this.hmProperty['errorID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 页面名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPageName(value: string) {
    if (value != undefined) {
      this.pageName = value;
      this.hmProperty['pageName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能名称(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFunctionName(value: string) {
    if (value != undefined) {
      this.functionName = value;
      this.hmProperty['functionName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误信息(说明:;字段类型:varchar;字段长度:5000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrorInformation(value: string) {
    if (value != undefined) {
      this.errorInformation = value;
      this.hmProperty['errorInformation'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 创建时间(说明:;字段类型:datetime;字段长度:16;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCreateTime(value: Date) {
    if (value != undefined) {
      this.createTime = value;
      this.hmProperty['createTime'] = true;
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
      case clsErrorInformationEN.con_ErrorID:
        return this.errorID;
      case clsErrorInformationEN.con_PageName:
        return this.pageName;
      case clsErrorInformationEN.con_FunctionName:
        return this.functionName;
      case clsErrorInformationEN.con_ErrorInformation:
        return this.errorInformation;
      case clsErrorInformationEN.con_UserId:
        return this.userId;
      case clsErrorInformationEN.con_CreateTime:
        return this.createTime;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ErrorInformation]中不存在!`;
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
      case clsErrorInformationEN.con_ErrorID:
        this.errorID = Number(strValue);
        this.hmProperty['errorID'] = true;
        break;
      case clsErrorInformationEN.con_PageName:
        this.pageName = strValue;
        this.hmProperty['pageName'] = true;
        break;
      case clsErrorInformationEN.con_FunctionName:
        this.functionName = strValue;
        this.hmProperty['functionName'] = true;
        break;
      case clsErrorInformationEN.con_ErrorInformation:
        this.errorInformation = strValue;
        this.hmProperty['errorInformation'] = true;
        break;
      case clsErrorInformationEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsErrorInformationEN.con_CreateTime:
        this.createTime = new Date(Date.parse(strValue));
        this.hmProperty['createTime'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ErrorInformation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public errorID = 0; //错误流水号
  public pageName = ''; //页面名称
  public functionName = ''; //功能名称
  public errorInformation = ''; //错误信息
  public userId = ''; //用户Id
  public createTime = new Date(); //创建时间

  /**
   * 常量:"ErrorID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrorID(): string {
    return 'errorID';
  } //错误流水号

  /**
   * 常量:"PageName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PageName(): string {
    return 'pageName';
  } //页面名称

  /**
   * 常量:"FunctionName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FunctionName(): string {
    return 'functionName';
  } //功能名称

  /**
   * 常量:"ErrorInformation"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrorInformation(): string {
    return 'errorInformation';
  } //错误信息

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"CreateTime"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CreateTime(): string {
    return 'createTime';
  } //创建时间

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
