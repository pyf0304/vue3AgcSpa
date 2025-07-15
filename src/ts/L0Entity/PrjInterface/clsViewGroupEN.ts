/**
 * 类名:clsViewGroupEN
 * 表名:ViewGroup(00050134)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:39
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 界面组(ViewGroup)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewGroupEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewGroup'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewGroupId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'viewGroupId',
    'viewGroupName',
    'inSqlDsTypeId',
    'inRelaTabId',
    'outSqlDsTypeId',
    'outRelaTabId',
    'prjDomain',
    'actionPath',
    'prjId',
    'userId',
    'updDate',
    'memo',
    'tableNameForProg',
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
  private mstrViewGroupId = ''; //界面组ID
  private mstrViewGroupName = ''; //界面组名称
  private mstrInSqlDsTypeId = ''; //输入数据源类型
  private mstrInRelaTabId = ''; //输入数据源表ID
  private mstrOutSqlDsTypeId = ''; //输出数据源类型
  private mstrOutRelaTabId = ''; //输出数据源表ID
  private mstrPrjDomain = ''; //域/包名
  private mstrActionPath = ''; //Action路径
  private mstrPrjId = ''; //工程ID
  private mstrUserId = ''; //用户Id
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明
  private mstrTableNameForProg = ''; //编程用表名

  /**
   * 界面组ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewGroupId(value: string) {
    if (value != undefined) {
      this.viewGroupId = value;
      this.hmProperty['viewGroupId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面组名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewGroupName(value: string) {
    if (value != undefined) {
      this.viewGroupName = value;
      this.hmProperty['viewGroupName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输入数据源类型(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.inSqlDsTypeId = value;
      this.hmProperty['inSqlDsTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输入数据源表ID(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInRelaTabId(value: string) {
    if (value != undefined) {
      this.inRelaTabId = value;
      this.hmProperty['inRelaTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输出数据源类型(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOutSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.outSqlDsTypeId = value;
      this.hmProperty['outSqlDsTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输出数据源表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOutRelaTabId(value: string) {
    if (value != undefined) {
      this.outRelaTabId = value;
      this.hmProperty['outRelaTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 域/包名(说明:;字段类型:varchar;字段长度:128;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjDomain(value: string) {
    if (value != undefined) {
      this.prjDomain = value;
      this.hmProperty['prjDomain'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Action路径(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetActionPath(value: string) {
    if (value != undefined) {
      this.actionPath = value;
      this.hmProperty['actionPath'] = true;
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
   * 编程用表名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTableNameForProg(value: string) {
    if (value != undefined) {
      this.tableNameForProg = value;
      this.hmProperty['tableNameForProg'] = true;
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
      case clsViewGroupEN.con_ViewGroupId:
        return this.viewGroupId;
      case clsViewGroupEN.con_ViewGroupName:
        return this.viewGroupName;
      case clsViewGroupEN.con_InSqlDsTypeId:
        return this.inSqlDsTypeId;
      case clsViewGroupEN.con_InRelaTabId:
        return this.inRelaTabId;
      case clsViewGroupEN.con_OutSqlDsTypeId:
        return this.outSqlDsTypeId;
      case clsViewGroupEN.con_OutRelaTabId:
        return this.outRelaTabId;
      case clsViewGroupEN.con_PrjDomain:
        return this.prjDomain;
      case clsViewGroupEN.con_ActionPath:
        return this.actionPath;
      case clsViewGroupEN.con_PrjId:
        return this.prjId;
      case clsViewGroupEN.con_UserId:
        return this.userId;
      case clsViewGroupEN.con_UpdDate:
        return this.updDate;
      case clsViewGroupEN.con_Memo:
        return this.memo;
      case clsViewGroupEN.con_TableNameForProg:
        return this.tableNameForProg;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewGroup]中不存在!`;
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
      case clsViewGroupEN.con_ViewGroupId:
        this.viewGroupId = strValue;
        this.hmProperty['viewGroupId'] = true;
        break;
      case clsViewGroupEN.con_ViewGroupName:
        this.viewGroupName = strValue;
        this.hmProperty['viewGroupName'] = true;
        break;
      case clsViewGroupEN.con_InSqlDsTypeId:
        this.inSqlDsTypeId = strValue;
        this.hmProperty['inSqlDsTypeId'] = true;
        break;
      case clsViewGroupEN.con_InRelaTabId:
        this.inRelaTabId = strValue;
        this.hmProperty['inRelaTabId'] = true;
        break;
      case clsViewGroupEN.con_OutSqlDsTypeId:
        this.outSqlDsTypeId = strValue;
        this.hmProperty['outSqlDsTypeId'] = true;
        break;
      case clsViewGroupEN.con_OutRelaTabId:
        this.outRelaTabId = strValue;
        this.hmProperty['outRelaTabId'] = true;
        break;
      case clsViewGroupEN.con_PrjDomain:
        this.prjDomain = strValue;
        this.hmProperty['prjDomain'] = true;
        break;
      case clsViewGroupEN.con_ActionPath:
        this.actionPath = strValue;
        this.hmProperty['actionPath'] = true;
        break;
      case clsViewGroupEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsViewGroupEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsViewGroupEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsViewGroupEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsViewGroupEN.con_TableNameForProg:
        this.tableNameForProg = strValue;
        this.hmProperty['tableNameForProg'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewGroup]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public viewGroupId = ''; //界面组ID
  public viewGroupName = ''; //界面组名称
  public inSqlDsTypeId = ''; //输入数据源类型
  public inRelaTabId = ''; //输入数据源表ID
  public outSqlDsTypeId = ''; //输出数据源类型
  public outRelaTabId = ''; //输出数据源表ID
  public prjDomain = ''; //域/包名
  public actionPath = ''; //Action路径
  public prjId = ''; //工程ID
  public userId = ''; //用户Id
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public tableNameForProg = ''; //编程用表名

  /**
   * 常量:"ViewGroupId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewGroupId(): string {
    return 'viewGroupId';
  } //界面组ID

  /**
   * 常量:"ViewGroupName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewGroupName(): string {
    return 'viewGroupName';
  } //界面组名称

  /**
   * 常量:"InSqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InSqlDsTypeId(): string {
    return 'inSqlDsTypeId';
  } //输入数据源类型

  /**
   * 常量:"InRelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InRelaTabId(): string {
    return 'inRelaTabId';
  } //输入数据源表ID

  /**
   * 常量:"OutSqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutSqlDsTypeId(): string {
    return 'outSqlDsTypeId';
  } //输出数据源类型

  /**
   * 常量:"OutRelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutRelaTabId(): string {
    return 'outRelaTabId';
  } //输出数据源表ID

  /**
   * 常量:"PrjDomain"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjDomain(): string {
    return 'prjDomain';
  } //域/包名

  /**
   * 常量:"ActionPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ActionPath(): string {
    return 'actionPath';
  } //Action路径

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"TableNameForProg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TableNameForProg(): string {
    return 'tableNameForProg';
  } //编程用表名

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
