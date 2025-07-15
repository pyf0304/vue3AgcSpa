/**
 * 类名:clsDataNodeEN
 * 表名:DataNode(00050547)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:57
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
 * 数据结点(DataNode)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsDataNodeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '05'; //未知
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat =
    "datanodeid in (select DataNodeId from DataNodeCmPrjIdRela where CmPrjId='{0}')"; //条件格式串
  public static _CurrTabName = 'DataNode'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DataNodeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 19;
  public static AttributeName = [
    'dataNodeId',
    'dataNodeName',
    'tabId',
    'fldId',
    'keyFldLst',
    'versionNo',
    'dataNodeTypeId',
    'depth',
    'prevDataNodeId',
    'nextDataNodeId',
    'subGraphName',
    'errMsg',
    'prjId',
    'posX',
    'posY',
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
  private mlngDataNodeId = 0; //数据结点Id
  private mstrDataNodeName = ''; //数据结点名
  private mstrTabId = ''; //表ID
  private mstrFldId = ''; //字段Id
  private mstrKeyFldLst = ''; //关键字段Id列表
  private mintVersionNo = 0; //版本号
  private mstrDataNodeTypeId = ''; //数据结点类型Id
  private mintDepth = 0; //深度
  private mlngPrevDataNodeId = 0; //前置数据结点Id
  private mlngNextDataNodeId = 0; //后继数据结点Id
  private mstrSubGraphName = ''; //子图名
  private mstrErrMsg = ''; //错误信息
  private mstrPrjId = ''; //工程Id
  private mdblPosX = 0; //位置X
  private mdblPosY = 0; //位置Y
  private mintUsedTimes = 0; //使用次数
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 数据结点Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataNodeId(value: number) {
    if (value != undefined) {
      this.dataNodeId = value;
      this.hmProperty['dataNodeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据结点名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataNodeName(value: string) {
    if (value != undefined) {
      this.dataNodeName = value;
      this.hmProperty['dataNodeName'] = true;
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
   * 字段Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldId(value: string) {
    if (value != undefined) {
      this.fldId = value;
      this.hmProperty['fldId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关键字段Id列表(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyFldLst(value: string) {
    if (value != undefined) {
      this.keyFldLst = value;
      this.hmProperty['keyFldLst'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 版本号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVersionNo(value: number) {
    if (value != undefined) {
      this.versionNo = value;
      this.hmProperty['versionNo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据结点类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataNodeTypeId(value: string) {
    if (value != undefined) {
      this.dataNodeTypeId = value;
      this.hmProperty['dataNodeTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 深度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDepth(value: number) {
    if (value != undefined) {
      this.depth = value;
      this.hmProperty['depth'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 前置数据结点Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrevDataNodeId(value: number) {
    if (value != undefined) {
      this.prevDataNodeId = value;
      this.hmProperty['prevDataNodeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 后继数据结点Id(说明:;字段类型:bigint;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetNextDataNodeId(value: number) {
    if (value != undefined) {
      this.nextDataNodeId = value;
      this.hmProperty['nextDataNodeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 子图名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSubGraphName(value: string) {
    if (value != undefined) {
      this.subGraphName = value;
      this.hmProperty['subGraphName'] = true;
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
   * 位置X(说明:;字段类型:decimal;字段长度:7;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosX(value: number) {
    if (value != undefined) {
      this.posX = value;
      this.hmProperty['posX'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 位置Y(说明:;字段类型:decimal;字段长度:7;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPosY(value: number) {
    if (value != undefined) {
      this.posY = value;
      this.hmProperty['posY'] = true;
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
      case clsDataNodeEN.con_DataNodeId:
        return this.dataNodeId;
      case clsDataNodeEN.con_DataNodeName:
        return this.dataNodeName;
      case clsDataNodeEN.con_TabId:
        return this.tabId;
      case clsDataNodeEN.con_FldId:
        return this.fldId;
      case clsDataNodeEN.con_KeyFldLst:
        return this.keyFldLst;
      case clsDataNodeEN.con_VersionNo:
        return this.versionNo;
      case clsDataNodeEN.con_DataNodeTypeId:
        return this.dataNodeTypeId;
      case clsDataNodeEN.con_Depth:
        return this.depth;
      case clsDataNodeEN.con_PrevDataNodeId:
        return this.prevDataNodeId;
      case clsDataNodeEN.con_NextDataNodeId:
        return this.nextDataNodeId;
      case clsDataNodeEN.con_SubGraphName:
        return this.subGraphName;
      case clsDataNodeEN.con_ErrMsg:
        return this.errMsg;
      case clsDataNodeEN.con_PrjId:
        return this.prjId;
      case clsDataNodeEN.con_PosX:
        return this.posX;
      case clsDataNodeEN.con_PosY:
        return this.posY;
      case clsDataNodeEN.con_UsedTimes:
        return this.usedTimes;
      case clsDataNodeEN.con_UpdDate:
        return this.updDate;
      case clsDataNodeEN.con_UpdUser:
        return this.updUser;
      case clsDataNodeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[DataNode]中不存在!`;
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
      case clsDataNodeEN.con_DataNodeId:
        this.dataNodeId = Number(strValue);
        this.hmProperty['dataNodeId'] = true;
        break;
      case clsDataNodeEN.con_DataNodeName:
        this.dataNodeName = strValue;
        this.hmProperty['dataNodeName'] = true;
        break;
      case clsDataNodeEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsDataNodeEN.con_FldId:
        this.fldId = strValue;
        this.hmProperty['fldId'] = true;
        break;
      case clsDataNodeEN.con_KeyFldLst:
        this.keyFldLst = strValue;
        this.hmProperty['keyFldLst'] = true;
        break;
      case clsDataNodeEN.con_VersionNo:
        this.versionNo = Number(strValue);
        this.hmProperty['versionNo'] = true;
        break;
      case clsDataNodeEN.con_DataNodeTypeId:
        this.dataNodeTypeId = strValue;
        this.hmProperty['dataNodeTypeId'] = true;
        break;
      case clsDataNodeEN.con_Depth:
        this.depth = Number(strValue);
        this.hmProperty['depth'] = true;
        break;
      case clsDataNodeEN.con_PrevDataNodeId:
        this.prevDataNodeId = Number(strValue);
        this.hmProperty['prevDataNodeId'] = true;
        break;
      case clsDataNodeEN.con_NextDataNodeId:
        this.nextDataNodeId = Number(strValue);
        this.hmProperty['nextDataNodeId'] = true;
        break;
      case clsDataNodeEN.con_SubGraphName:
        this.subGraphName = strValue;
        this.hmProperty['subGraphName'] = true;
        break;
      case clsDataNodeEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsDataNodeEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsDataNodeEN.con_PosX:
        this.posX = Number(strValue);
        this.hmProperty['posX'] = true;
        break;
      case clsDataNodeEN.con_PosY:
        this.posY = Number(strValue);
        this.hmProperty['posY'] = true;
        break;
      case clsDataNodeEN.con_UsedTimes:
        this.usedTimes = Number(strValue);
        this.hmProperty['usedTimes'] = true;
        break;
      case clsDataNodeEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsDataNodeEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsDataNodeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[DataNode]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public dataNodeId = 0; //数据结点Id
  public dataNodeName = ''; //数据结点名
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public keyFldLst = ''; //关键字段Id列表
  public versionNo = 0; //版本号
  public dataNodeTypeId = ''; //数据结点类型Id
  public depth = 0; //深度
  public prevDataNodeId = 0; //前置数据结点Id
  public nextDataNodeId = 0; //后继数据结点Id
  public subGraphName = ''; //子图名
  public errMsg = ''; //错误信息
  public prjId = ''; //工程Id
  public posX = 0; //位置X
  public posY = 0; //位置Y
  public usedTimes = 0; //使用次数
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"DataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataNodeId(): string {
    return 'dataNodeId';
  } //数据结点Id

  /**
   * 常量:"DataNodeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataNodeName(): string {
    return 'dataNodeName';
  } //数据结点名

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"KeyFldLst"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyFldLst(): string {
    return 'keyFldLst';
  } //关键字段Id列表

  /**
   * 常量:"VersionNo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VersionNo(): string {
    return 'versionNo';
  } //版本号

  /**
   * 常量:"DataNodeTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataNodeTypeId(): string {
    return 'dataNodeTypeId';
  } //数据结点类型Id

  /**
   * 常量:"Depth"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Depth(): string {
    return 'depth';
  } //深度

  /**
   * 常量:"PrevDataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrevDataNodeId(): string {
    return 'prevDataNodeId';
  } //前置数据结点Id

  /**
   * 常量:"NextDataNodeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_NextDataNodeId(): string {
    return 'nextDataNodeId';
  } //后继数据结点Id

  /**
   * 常量:"SubGraphName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SubGraphName(): string {
    return 'subGraphName';
  } //子图名

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
   * 常量:"PosX"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PosX(): string {
    return 'posX';
  } //位置X

  /**
   * 常量:"PosY"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PosY(): string {
    return 'posY';
  } //位置Y

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
    //return propName in new clsDataNodeEN();
    const instance = new clsDataNodeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
