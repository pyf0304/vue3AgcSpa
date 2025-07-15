/**
 * 类名:clsDnFuncMapEN
 * 表名:DnFuncMap(00050549)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:53:00
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 结点函数映射(DnFuncMap)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDnFuncMapEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat =
    "DnFuncMapId in (select DnFuncMapId from DnFuncMapCmPrjIdRela where CmPrjId='{0}')"; //条件格式串
  public static _CurrTabName = 'DnFuncMap'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DnFuncMapId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'dnFuncMapId',
    'inDataNodeId',
    'outDataNodeId',
    'associationMappingId',
    'funcMapModeId',
    'tabId',
    'dnFunctionId',
    'errMsg',
    'prjId',
    'usedTimes',
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
  private mstrDnFuncMapId = ''; //函数映射Id
  private mlngInDataNodeId = 0; //In数据结点Id
  private mlngOutDataNodeId = 0; //Out数据结点Id
  private mstrAssociationMappingId = ''; //关联关系映射Id
  private mstrFuncMapModeId = ''; //函数映射模式Id
  private mstrTabId = ''; //表ID
  private mstrDnFunctionId = ''; //DN函数Id
  private mstrErrMsg = ''; //错误信息
  private mstrPrjId = ''; //工程Id
  private mintUsedTimes = 0; //使用次数
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 函数映射Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnFuncMapId(value: string) {
    if (value != undefined) {
      this.dnFuncMapId = value;
      this.hmProperty['dnFuncMapId'] = true;
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
   * 错误信息(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrMsg(value: string) {
    if (value != undefined) {
      this.errMsg = value;
      this.hmProperty['errMsg'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程Id(说明:;字段类型:char;字段长度:4;是否可空:False)
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
   * 使用次数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUsedTimes(value: number) {
    if (value != undefined) {
      this.usedTimes = value;
      this.hmProperty['usedTimes'] = true;
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
      case clsDnFuncMapEN.con_DnFuncMapId:
        return this.dnFuncMapId;
      case clsDnFuncMapEN.con_InDataNodeId:
        return this.inDataNodeId;
      case clsDnFuncMapEN.con_OutDataNodeId:
        return this.outDataNodeId;
      case clsDnFuncMapEN.con_AssociationMappingId:
        return this.associationMappingId;
      case clsDnFuncMapEN.con_FuncMapModeId:
        return this.funcMapModeId;
      case clsDnFuncMapEN.con_TabId:
        return this.tabId;
      case clsDnFuncMapEN.con_DnFunctionId:
        return this.dnFunctionId;
      case clsDnFuncMapEN.con_ErrMsg:
        return this.errMsg;
      case clsDnFuncMapEN.con_PrjId:
        return this.prjId;
      case clsDnFuncMapEN.con_UsedTimes:
        return this.usedTimes;
      case clsDnFuncMapEN.con_UpdDate:
        return this.updDate;
      case clsDnFuncMapEN.con_UpdUser:
        return this.updUser;
      case clsDnFuncMapEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DnFuncMap]中不存在!`;
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
      case clsDnFuncMapEN.con_DnFuncMapId:
        this.dnFuncMapId = strValue;
        this.hmProperty['dnFuncMapId'] = true;
        break;
      case clsDnFuncMapEN.con_InDataNodeId:
        this.inDataNodeId = Number(strValue);
        this.hmProperty['inDataNodeId'] = true;
        break;
      case clsDnFuncMapEN.con_OutDataNodeId:
        this.outDataNodeId = Number(strValue);
        this.hmProperty['outDataNodeId'] = true;
        break;
      case clsDnFuncMapEN.con_AssociationMappingId:
        this.associationMappingId = strValue;
        this.hmProperty['associationMappingId'] = true;
        break;
      case clsDnFuncMapEN.con_FuncMapModeId:
        this.funcMapModeId = strValue;
        this.hmProperty['funcMapModeId'] = true;
        break;
      case clsDnFuncMapEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsDnFuncMapEN.con_DnFunctionId:
        this.dnFunctionId = strValue;
        this.hmProperty['dnFunctionId'] = true;
        break;
      case clsDnFuncMapEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsDnFuncMapEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsDnFuncMapEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        this.hmProperty['usedTimes'] = true;
        break;
      case clsDnFuncMapEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsDnFuncMapEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsDnFuncMapEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DnFuncMap]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dnFuncMapId = ''; //函数映射Id
  public inDataNodeId = 0; //In数据结点Id
  public outDataNodeId = 0; //Out数据结点Id
  public associationMappingId = ''; //关联关系映射Id
  public funcMapModeId = ''; //函数映射模式Id
  public tabId = ''; //表ID
  public dnFunctionId = ''; //DN函数Id
  public errMsg = ''; //错误信息
  public prjId = ''; //工程Id
  public usedTimes = 0; //使用次数
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"DnFuncMapId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnFuncMapId(): string {
    return 'dnFuncMapId';
  } //函数映射Id

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
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"UsedTimes"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UsedTimes(): string {
    return 'usedTimes';
  } //使用次数

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
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsDnFuncMapEN();
    const instance = new clsDnFuncMapEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
