/**
 * 类名:clsUserPrjGrantEN
 * 表名:UserPrjGrant(00050092)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:01
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:权限管理(AuthorityManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * UserPrjGrant(UserPrjGrant)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsUserPrjGrantEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'UserPrjGrant'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'mId',
    'userId',
    'prjId',
    'roleId',
    'visitedNum',
    'lastVisitedDate',
    'optId',
    'optDate',
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
  private mstrUserId = ''; //用户Id
  private mstrPrjId = ''; //工程ID
  private mstrRoleId = ''; //角色ID
  private mintVisitedNum = 0; //访问数
  private mstrLastVisitedDate = ''; //最后访问时间
  private mstrOptId = ''; //操作者Id
  private mstrOptDate = ''; //操作日期
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
   * 角色ID(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRoleId(value: string) {
    if (value != undefined) {
      this.roleId = value;
      this.hmProperty['roleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 访问数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVisitedNum(value: number) {
    if (value != undefined) {
      this.visitedNum = value;
      this.hmProperty['visitedNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 最后访问时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLastVisitedDate(value: string) {
    if (value != undefined) {
      this.lastVisitedDate = value;
      this.hmProperty['lastVisitedDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作者Id(说明:;字段类型:varchar;字段长度:18;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOptId(value: string) {
    if (value != undefined) {
      this.optId = value;
      this.hmProperty['optId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOptDate(value: string) {
    if (value != undefined) {
      this.optDate = value;
      this.hmProperty['optDate'] = true;
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
      case clsUserPrjGrantEN.con_mId:
        return this.mId;
      case clsUserPrjGrantEN.con_UserId:
        return this.userId;
      case clsUserPrjGrantEN.con_PrjId:
        return this.prjId;
      case clsUserPrjGrantEN.con_RoleId:
        return this.roleId;
      case clsUserPrjGrantEN.con_VisitedNum:
        return this.visitedNum;
      case clsUserPrjGrantEN.con_LastVisitedDate:
        return this.lastVisitedDate;
      case clsUserPrjGrantEN.con_OptId:
        return this.optId;
      case clsUserPrjGrantEN.con_OptDate:
        return this.optDate;
      case clsUserPrjGrantEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[UserPrjGrant]中不存在!`;
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
      case clsUserPrjGrantEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsUserPrjGrantEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsUserPrjGrantEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsUserPrjGrantEN.con_RoleId:
        this.roleId = strValue;
        this.hmProperty['roleId'] = true;
        break;
      case clsUserPrjGrantEN.con_VisitedNum:
        this.visitedNum = Number(strValue);
        this.hmProperty['visitedNum'] = true;
        break;
      case clsUserPrjGrantEN.con_LastVisitedDate:
        this.lastVisitedDate = strValue;
        this.hmProperty['lastVisitedDate'] = true;
        break;
      case clsUserPrjGrantEN.con_OptId:
        this.optId = strValue;
        this.hmProperty['optId'] = true;
        break;
      case clsUserPrjGrantEN.con_OptDate:
        this.optDate = strValue;
        this.hmProperty['optDate'] = true;
        break;
      case clsUserPrjGrantEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[UserPrjGrant]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public userId = ''; //用户Id
  public prjId = ''; //工程ID
  public roleId = ''; //角色ID
  public visitedNum = 0; //访问数
  public lastVisitedDate = ''; //最后访问时间
  public optId = ''; //操作者Id
  public optDate = ''; //操作日期
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"RoleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RoleId(): string {
    return 'roleId';
  } //角色ID

  /**
   * 常量:"VisitedNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_VisitedNum(): string {
    return 'visitedNum';
  } //访问数

  /**
   * 常量:"LastVisitedDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LastVisitedDate(): string {
    return 'lastVisitedDate';
  } //最后访问时间

  /**
   * 常量:"OptId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OptId(): string {
    return 'optId';
  } //操作者Id

  /**
   * 常量:"OptDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OptDate(): string {
    return 'optDate';
  } //操作日期

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
