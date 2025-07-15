/**
 * 类名:clsvUserDefaPrjDataBaseEN
 * 表名:vUserDefaPrjDataBase(00050275)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:18
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * v用户默认数据库(vUserDefaPrjDataBase)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvUserDefaPrjDataBaseEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vUserDefaPrjDataBase'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'mId',
    'prjId',
    'prjName',
    'userId',
    'userName',
    'prjDataBaseId',
    'prjDataBaseName',
    'dataBaseName',
    'ipAddress',
    'dataBaseUserId',
    'updUserId',
    'updDate',
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
      case clsvUserDefaPrjDataBaseEN.con_mId:
        return this.mId;
      case clsvUserDefaPrjDataBaseEN.con_PrjId:
        return this.prjId;
      case clsvUserDefaPrjDataBaseEN.con_PrjName:
        return this.prjName;
      case clsvUserDefaPrjDataBaseEN.con_UserId:
        return this.userId;
      case clsvUserDefaPrjDataBaseEN.con_UserName:
        return this.userName;
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId:
        return this.prjDataBaseId;
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName:
        return this.prjDataBaseName;
      case clsvUserDefaPrjDataBaseEN.con_DataBaseName:
        return this.dataBaseName;
      case clsvUserDefaPrjDataBaseEN.con_IpAddress:
        return this.ipAddress;
      case clsvUserDefaPrjDataBaseEN.con_DataBaseUserId:
        return this.dataBaseUserId;
      case clsvUserDefaPrjDataBaseEN.con_UpdUserId:
        return this.updUserId;
      case clsvUserDefaPrjDataBaseEN.con_UpdDate:
        return this.updDate;
      case clsvUserDefaPrjDataBaseEN.con_Memo:
        return this.memo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vUserDefaPrjDataBase]中不存在!`;
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
      case clsvUserDefaPrjDataBaseEN.con_mId:
        this.mId = Number(strValue);
        break;
      case clsvUserDefaPrjDataBaseEN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_PrjName:
        this.prjName = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_UserId:
        this.userId = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_UserName:
        this.userName = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseId:
        this.prjDataBaseId = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_PrjDataBaseName:
        this.prjDataBaseName = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_DataBaseName:
        this.dataBaseName = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_IpAddress:
        this.ipAddress = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_DataBaseUserId:
        this.dataBaseUserId = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_UpdUserId:
        this.updUserId = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_UpdDate:
        this.updDate = strValue;
        break;
      case clsvUserDefaPrjDataBaseEN.con_Memo:
        this.memo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vUserDefaPrjDataBase]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public prjId = ''; //工程ID
  public prjName = ''; //工程名称
  public userId = ''; //用户Id
  public userName = ''; //用户名
  public prjDataBaseId = ''; //项目数据库Id
  public prjDataBaseName = ''; //项目数据库名
  public dataBaseName = ''; //数据库名
  public ipAddress = ''; //服务器
  public dataBaseUserId = ''; //数据库的用户ID
  public updUserId = ''; //修改用户Id
  public updDate = ''; //修改日期
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"PrjName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjName(): string {
    return 'prjName';
  } //工程名称

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"UserName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"PrjDataBaseId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjDataBaseId(): string {
    return 'prjDataBaseId';
  } //项目数据库Id

  /**
   * 常量:"PrjDataBaseName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjDataBaseName(): string {
    return 'prjDataBaseName';
  } //项目数据库名

  /**
   * 常量:"DataBaseName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataBaseName(): string {
    return 'dataBaseName';
  } //数据库名

  /**
   * 常量:"IpAddress"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IpAddress(): string {
    return 'ipAddress';
  } //服务器

  /**
   * 常量:"DataBaseUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataBaseUserId(): string {
    return 'dataBaseUserId';
  } //数据库的用户ID

  /**
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

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
