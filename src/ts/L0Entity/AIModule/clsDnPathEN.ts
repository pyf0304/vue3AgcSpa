/**
 * 类名:clsDnPathEN
 * 表名:DnPath(00050591)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:52
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
 * 数据结点路径(DnPath)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDnPathEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat =
    "DnPathId in (select DnPathId from DnPathCmPrjIdRela where CmPrjId='{0}')"; //条件格式串
  public static _CurrTabName = 'DnPath'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DnPathId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 16;
  public static AttributeName = [
    'dnPathId',
    'dnPathName',
    'inDataNodeId',
    'outDataNodeId',
    'dnPathNodeLst',
    'dnPathNodeLstV2',
    'associationMappingId',
    'isHasErr',
    'edgeNum',
    'errMsg',
    'inUse',
    'isExistPath',
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
  private mstrDnPathId = ''; //DN路径Id
  private mstrDnPathName = ''; //DN路径名
  private mlngInDataNodeId = 0; //In数据结点Id
  private mlngOutDataNodeId = 0; //Out数据结点Id
  private mstrDnPathNodeLst = ''; //路径结点列表
  private mstrDnPathNodeLstV2 = ''; //路径结点列表V2
  private mstrAssociationMappingId = ''; //关联关系映射Id
  private mbolIsHasErr = false; //是否有错
  private mintEdgeNum = 0; //边数
  private mstrErrMsg = ''; //错误信息
  private mbolInUse = false; //是否在用
  private mbolIsExistPath = false; //是否存在路径
  private mstrPrjId = ''; //工程Id
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * DN路径Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnPathId(value: string) {
    if (value != undefined) {
      this.dnPathId = value;
      this.hmProperty['dnPathId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DN路径名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnPathName(value: string) {
    if (value != undefined) {
      this.dnPathName = value;
      this.hmProperty['dnPathName'] = true;
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
   * 路径结点列表(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnPathNodeLst(value: string) {
    if (value != undefined) {
      this.dnPathNodeLst = value;
      this.hmProperty['dnPathNodeLst'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 路径结点列表V2(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDnPathNodeLstV2(value: string) {
    if (value != undefined) {
      this.dnPathNodeLstV2 = value;
      this.hmProperty['dnPathNodeLstV2'] = true;
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
   * 是否有错(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHasErr(value: boolean) {
    if (value != undefined) {
      this.isHasErr = value;
      this.hmProperty['isHasErr'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 边数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEdgeNum(value: number) {
    if (value != undefined) {
      this.edgeNum = value;
      this.hmProperty['edgeNum'] = true;
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
   * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInUse(value: boolean) {
    if (value != undefined) {
      this.inUse = value;
      this.hmProperty['inUse'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否存在路径(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsExistPath(value: boolean) {
    if (value != undefined) {
      this.isExistPath = value;
      this.hmProperty['isExistPath'] = true;
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
      case clsDnPathEN.con_DnPathId:
        return this.dnPathId;
      case clsDnPathEN.con_DnPathName:
        return this.dnPathName;
      case clsDnPathEN.con_InDataNodeId:
        return this.inDataNodeId;
      case clsDnPathEN.con_OutDataNodeId:
        return this.outDataNodeId;
      case clsDnPathEN.con_DnPathNodeLst:
        return this.dnPathNodeLst;
      case clsDnPathEN.con_DnPathNodeLstV2:
        return this.dnPathNodeLstV2;
      case clsDnPathEN.con_AssociationMappingId:
        return this.associationMappingId;
      case clsDnPathEN.con_IsHasErr:
        return this.isHasErr;
      case clsDnPathEN.con_EdgeNum:
        return this.edgeNum;
      case clsDnPathEN.con_ErrMsg:
        return this.errMsg;
      case clsDnPathEN.con_InUse:
        return this.inUse;
      case clsDnPathEN.con_IsExistPath:
        return this.isExistPath;
      case clsDnPathEN.con_PrjId:
        return this.prjId;
      case clsDnPathEN.con_UpdDate:
        return this.updDate;
      case clsDnPathEN.con_UpdUser:
        return this.updUser;
      case clsDnPathEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DnPath]中不存在!`;
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
      case clsDnPathEN.con_DnPathId:
        this.dnPathId = strValue;
        this.hmProperty['dnPathId'] = true;
        break;
      case clsDnPathEN.con_DnPathName:
        this.dnPathName = strValue;
        this.hmProperty['dnPathName'] = true;
        break;
      case clsDnPathEN.con_InDataNodeId:
        this.inDataNodeId = Number(strValue);
        this.hmProperty['inDataNodeId'] = true;
        break;
      case clsDnPathEN.con_OutDataNodeId:
        this.outDataNodeId = Number(strValue);
        this.hmProperty['outDataNodeId'] = true;
        break;
      case clsDnPathEN.con_DnPathNodeLst:
        this.dnPathNodeLst = strValue;
        this.hmProperty['dnPathNodeLst'] = true;
        break;
      case clsDnPathEN.con_DnPathNodeLstV2:
        this.dnPathNodeLstV2 = strValue;
        this.hmProperty['dnPathNodeLstV2'] = true;
        break;
      case clsDnPathEN.con_AssociationMappingId:
        this.associationMappingId = strValue;
        this.hmProperty['associationMappingId'] = true;
        break;
      case clsDnPathEN.con_IsHasErr:
        this.isHasErr = Boolean(strValue);
        this.hmProperty['isHasErr'] = true;
        break;
      case clsDnPathEN.con_EdgeNum:
        this.edgeNum = Number(strValue);
        this.hmProperty['edgeNum'] = true;
        break;
      case clsDnPathEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsDnPathEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsDnPathEN.con_IsExistPath:
        this.isExistPath = Boolean(strValue);
        this.hmProperty['isExistPath'] = true;
        break;
      case clsDnPathEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsDnPathEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsDnPathEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsDnPathEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DnPath]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dnPathId = ''; //DN路径Id
  public dnPathName = ''; //DN路径名
  public inDataNodeId = 0; //In数据结点Id
  public outDataNodeId = 0; //Out数据结点Id
  public dnPathNodeLst = ''; //路径结点列表
  public dnPathNodeLstV2 = ''; //路径结点列表V2
  public associationMappingId = ''; //关联关系映射Id
  public isHasErr = false; //是否有错
  public edgeNum = 0; //边数
  public errMsg = ''; //错误信息
  public inUse = false; //是否在用
  public isExistPath = false; //是否存在路径
  public prjId = ''; //工程Id
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"DnPathId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathId(): string {
    return 'dnPathId';
  } //DN路径Id

  /**
   * 常量:"DnPathName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathName(): string {
    return 'dnPathName';
  } //DN路径名

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
   * 常量:"DnPathNodeLst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathNodeLst(): string {
    return 'dnPathNodeLst';
  } //路径结点列表

  /**
   * 常量:"DnPathNodeLstV2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DnPathNodeLstV2(): string {
    return 'dnPathNodeLstV2';
  } //路径结点列表V2

  /**
   * 常量:"AssociationMappingId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AssociationMappingId(): string {
    return 'associationMappingId';
  } //关联关系映射Id

  /**
   * 常量:"IsHasErr"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsHasErr(): string {
    return 'isHasErr';
  } //是否有错

  /**
   * 常量:"EdgeNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EdgeNum(): string {
    return 'edgeNum';
  } //边数

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"InUse"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"IsExistPath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsExistPath(): string {
    return 'isExistPath';
  } //是否存在路径

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

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
    //return propName in new clsDnPathEN();
    const instance = new clsDnPathEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
