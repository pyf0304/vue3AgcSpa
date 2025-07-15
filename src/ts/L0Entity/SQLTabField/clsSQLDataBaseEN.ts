/**
 * 类名:clsSQLDataBaseEN
 * 表名:SQL_DataBase(00050172)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:14:35
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:SQL表字段管理(SQLTabField)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * SQL数据库(SQLDataBase)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsSQLDataBaseEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'SQLDataBase'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DataBaseName'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'server',
    'userId',
    'password',
    'userIdForMaster',
    'passwordForMaster',
    'prjId',
    'databaseOwner',
    'dataBaseName',
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
  private mstrServer = ''; //服务器
  private mstrUserId = ''; //用户Id
  private mstrPassword = ''; //口令
  private mstrUserIdForMaster = ''; //用户ID4Master
  private mstrPasswordForMaster = ''; //口令4Master
  private mstrPrjId = ''; //工程ID
  private mstrDatabaseOwner = ''; //数据库拥有者
  private mstrDataBaseName = ''; //数据库名

  /**
   * 服务器(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetServer(value: string) {
    if (value != undefined) {
      this.server = value;
      this.hmProperty['server'] = true;
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
   * 口令(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPassword(value: string) {
    if (value != undefined) {
      this.password = value;
      this.hmProperty['password'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户ID4Master(说明:;字段类型:varchar;字段长度:18;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserIdForMaster(value: string) {
    if (value != undefined) {
      this.userIdForMaster = value;
      this.hmProperty['userIdForMaster'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 口令4Master(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPasswordForMaster(value: string) {
    if (value != undefined) {
      this.passwordForMaster = value;
      this.hmProperty['passwordForMaster'] = true;
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
   * 数据库拥有者(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDatabaseOwner(value: string) {
    if (value != undefined) {
      this.databaseOwner = value;
      this.hmProperty['databaseOwner'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据库名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataBaseName(value: string) {
    if (value != undefined) {
      this.dataBaseName = value;
      this.hmProperty['dataBaseName'] = true;
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
      case clsSQLDataBaseEN.conServer:
        return this.server;
      case clsSQLDataBaseEN.conUserId:
        return this.userId;
      case clsSQLDataBaseEN.conPassword:
        return this.password;
      case clsSQLDataBaseEN.conUserIdForMaster:
        return this.userIdForMaster;
      case clsSQLDataBaseEN.conPasswordForMaster:
        return this.passwordForMaster;
      case clsSQLDataBaseEN.conPrjId:
        return this.prjId;
      case clsSQLDataBaseEN.conDatabaseOwner:
        return this.databaseOwner;
      case clsSQLDataBaseEN.conDataBaseName:
        return this.dataBaseName;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SQLDataBase]中不存在！`;
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
      case clsSQLDataBaseEN.conServer:
        this.server = strValue;
        this.hmProperty['server'] = true;
        break;
      case clsSQLDataBaseEN.conUserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsSQLDataBaseEN.conPassword:
        this.password = strValue;
        this.hmProperty['password'] = true;
        break;
      case clsSQLDataBaseEN.conUserIdForMaster:
        this.userIdForMaster = strValue;
        this.hmProperty['userIdForMaster'] = true;
        break;
      case clsSQLDataBaseEN.conPasswordForMaster:
        this.passwordForMaster = strValue;
        this.hmProperty['passwordForMaster'] = true;
        break;
      case clsSQLDataBaseEN.conPrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsSQLDataBaseEN.conDatabaseOwner:
        this.databaseOwner = strValue;
        this.hmProperty['databaseOwner'] = true;
        break;
      case clsSQLDataBaseEN.conDataBaseName:
        this.dataBaseName = strValue;
        this.hmProperty['dataBaseName'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[SQLDataBase]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public server = ''; //服务器
  public userId = ''; //用户Id
  public password = ''; //口令
  public userIdForMaster = ''; //用户ID4Master
  public passwordForMaster = ''; //口令4Master
  public prjId = ''; //工程ID
  public databaseOwner = ''; //数据库拥有者
  public dataBaseName = ''; //数据库名

  /**
   * 常量:"Server"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conServer(): string {
    return 'server';
  } //服务器

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"Password"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPassword(): string {
    return 'password';
  } //口令

  /**
   * 常量:"UserIdForMaster"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUserIdForMaster(): string {
    return 'userIdForMaster';
  } //用户ID4Master

  /**
   * 常量:"PasswordForMaster"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPasswordForMaster(): string {
    return 'passwordForMaster';
  } //口令4Master

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conPrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"DatabaseOwner"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDatabaseOwner(): string {
    return 'databaseOwner';
  } //数据库拥有者

  /**
   * 常量:"DataBaseName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDataBaseName(): string {
    return 'dataBaseName';
  } //数据库名

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
