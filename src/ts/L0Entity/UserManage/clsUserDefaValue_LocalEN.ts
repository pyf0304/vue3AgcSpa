/**
 * 类名:clsUserDefaValue_LocalEN
 * 表名:UserDefaValue_Local(00050089)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:17
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 用户缺省值(UserDefaValue_Local)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserDefaValue_LocalEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserDefaValue_Local'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'mId',
    'defaValNameId',
    'userId',
    'userDefaValue',
    'prjId',
    'updDate',
    'updUserId',
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
  private mlngmId = 0; //mId
  private mstrDefaValNameId = ''; //DefaValNameId
  private mstrUserId = ''; //用户Id
  private mstrUserDefaValue = ''; //UserDefaValue
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明

  /**
   * mId(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetmId(value: number) {
    if (value != undefined) {
      this.mId = value;
      this.hmProperty['mId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DefaValNameId(说明:;字段类型:varchar;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaValNameId(value: string) {
    if (value != undefined) {
      this.defaValNameId = value;
      this.hmProperty['defaValNameId'] = true;
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
   * UserDefaValue(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserDefaValue(value: string) {
    if (value != undefined) {
      this.userDefaValue = value;
      this.hmProperty['userDefaValue'] = true;
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
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
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
      case clsUserDefaValue_LocalEN.con_mId:
        return this.mId;
      case clsUserDefaValue_LocalEN.con_DefaValNameId:
        return this.defaValNameId;
      case clsUserDefaValue_LocalEN.con_UserId:
        return this.userId;
      case clsUserDefaValue_LocalEN.con_UserDefaValue:
        return this.userDefaValue;
      case clsUserDefaValue_LocalEN.con_PrjId:
        return this.prjId;
      case clsUserDefaValue_LocalEN.con_UpdDate:
        return this.updDate;
      case clsUserDefaValue_LocalEN.con_UpdUserId:
        return this.updUserId;
      case clsUserDefaValue_LocalEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserDefaValue_Local]中不存在!`;
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
      case clsUserDefaValue_LocalEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsUserDefaValue_LocalEN.con_DefaValNameId:
        this.defaValNameId = strValue;
        this.hmProperty['defaValNameId'] = true;
        break;
      case clsUserDefaValue_LocalEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsUserDefaValue_LocalEN.con_UserDefaValue:
        this.userDefaValue = strValue;
        this.hmProperty['userDefaValue'] = true;
        break;
      case clsUserDefaValue_LocalEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsUserDefaValue_LocalEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsUserDefaValue_LocalEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsUserDefaValue_LocalEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[UserDefaValue_Local]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public defaValNameId = ''; //DefaValNameId
  public userId = ''; //用户Id
  public userDefaValue = ''; //UserDefaValue
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"DefaValNameId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DefaValNameId(): string {
    return 'defaValNameId';
  } //DefaValNameId

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"UserDefaValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserDefaValue(): string {
    return 'userDefaValue';
  } //UserDefaValue

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
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

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
