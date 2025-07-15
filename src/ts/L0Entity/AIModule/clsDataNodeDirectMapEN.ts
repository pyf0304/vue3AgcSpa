/**
 * 类名:clsDataNodeDirectMapEN
 * 表名:DataNodeDirectMap(00050570)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 00:07:01
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 数据结点直接映射(DataNodeDirectMap)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDataNodeDirectMapEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'DataNodeDirectMap'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 11;
  public static AttributeName = [
    'mId',
    'inDataNodeId',
    'outDataNodeId',
    'associationMappingId',
    'funcMapModeId',
    'tabId',
    'dnFunctionId',
    'prjId',
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
  private mlngmId = 0; //mId
  private mlngInDataNodeId = 0; //In数据结点Id
  private mlngOutDataNodeId = 0; //Out数据结点Id
  private mstrAssociationMappingId = ''; //关联关系映射Id
  private mstrFuncMapModeId = ''; //函数映射模式Id
  private mstrTabId = ''; //表ID
  private mstrDnFunctionId = ''; //DN函数Id
  private mstrPrjId = ''; //工程ID
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
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
   * In数据结点Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInDataNodeId(value: number) {
    if (value != undefined) {
      this.inDataNodeId = value;
      this.hmProperty['inDataNodeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Out数据结点Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOutDataNodeId(value: number) {
    if (value != undefined) {
      this.outDataNodeId = value;
      this.hmProperty['outDataNodeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关联关系映射Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAssociationMappingId(value: string) {
    if (value != undefined) {
      this.associationMappingId = value;
      this.hmProperty['associationMappingId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 函数映射模式Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncMapModeId(value: string) {
    if (value != undefined) {
      this.funcMapModeId = value;
      this.hmProperty['funcMapModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabId(value: string) {
    if (value != undefined) {
      this.tabId = value;
      this.hmProperty['tabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DN函数Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnFunctionId(value: string) {
    if (value != undefined) {
      this.dnFunctionId = value;
      this.hmProperty['dnFunctionId'] = true;
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
      case clsDataNodeDirectMapEN.con_mId:
        return this.mId;
      case clsDataNodeDirectMapEN.con_InDataNodeId:
        return this.inDataNodeId;
      case clsDataNodeDirectMapEN.con_OutDataNodeId:
        return this.outDataNodeId;
      case clsDataNodeDirectMapEN.con_AssociationMappingId:
        return this.associationMappingId;
      case clsDataNodeDirectMapEN.con_FuncMapModeId:
        return this.funcMapModeId;
      case clsDataNodeDirectMapEN.con_TabId:
        return this.tabId;
      case clsDataNodeDirectMapEN.con_DnFunctionId:
        return this.dnFunctionId;
      case clsDataNodeDirectMapEN.con_PrjId:
        return this.prjId;
      case clsDataNodeDirectMapEN.con_UpdDate:
        return this.updDate;
      case clsDataNodeDirectMapEN.con_UpdUser:
        return this.updUser;
      case clsDataNodeDirectMapEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DataNodeDirectMap]中不存在!`;
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
      case clsDataNodeDirectMapEN.con_mId:
        this.mId = Number(strValue);
        this.hmProperty['mId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_InDataNodeId:
        this.inDataNodeId = Number(strValue);
        this.hmProperty['inDataNodeId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_OutDataNodeId:
        this.outDataNodeId = Number(strValue);
        this.hmProperty['outDataNodeId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_AssociationMappingId:
        this.associationMappingId = strValue;
        this.hmProperty['associationMappingId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_FuncMapModeId:
        this.funcMapModeId = strValue;
        this.hmProperty['funcMapModeId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_DnFunctionId:
        this.dnFunctionId = strValue;
        this.hmProperty['dnFunctionId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsDataNodeDirectMapEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsDataNodeDirectMapEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsDataNodeDirectMapEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DataNodeDirectMap]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public inDataNodeId = 0; //In数据结点Id
  public outDataNodeId = 0; //Out数据结点Id
  public associationMappingId = ''; //关联关系映射Id
  public funcMapModeId = ''; //函数映射模式Id
  public tabId = ''; //表ID
  public dnFunctionId = ''; //DN函数Id
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"InDataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InDataNodeId(): string {
    return 'inDataNodeId';
  } //In数据结点Id

  /**
   * 常量:"OutDataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutDataNodeId(): string {
    return 'outDataNodeId';
  } //Out数据结点Id

  /**
   * 常量:"AssociationMappingId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AssociationMappingId(): string {
    return 'associationMappingId';
  } //关联关系映射Id

  /**
   * 常量:"FuncMapModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncMapModeId(): string {
    return 'funcMapModeId';
  } //函数映射模式Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"DnFunctionId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnFunctionId(): string {
    return 'dnFunctionId';
  } //DN函数Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

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
}
