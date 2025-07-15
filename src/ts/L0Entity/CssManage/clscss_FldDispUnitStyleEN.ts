/**
 * 类名:clscss_FldDispUnitStyleEN
 * 表名:css_FldDispUnitStyle(00050615)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:46
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 字段显示单元样式(css_FldDispUnitStyle)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clscss_FldDispUnitStyleEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '03'; //自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'css_FldDispUnitStyle'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FldDispUnitStyleId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 14;
  public static AttributeName = [
    'fldDispUnitStyleId',
    'fldDispUnitStyleName',
    'fldDispUnitStyleDesc',
    'styleIdContent',
    'styleIdTitle',
    'fldDispUnitStyleContent',
    'fldDispUnitFormat',
    'ctlTypeId',
    'orderNum',
    'deletedDate',
    'isDeleted',
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
  private mstrFldDispUnitStyleId = ''; //字段显示单元样式Id
  private mstrFldDispUnitStyleName = ''; //字段显示单元样式名称
  private mstrFldDispUnitStyleDesc = ''; //样式描述
  private mstrStyleIdContent = ''; //内容样式Id
  private mstrStyleIdTitle = ''; //标题样式Id
  private mstrFldDispUnitStyleContent = ''; //样式内容
  private mstrFldDispUnitFormat = ''; //字段显示单元格式
  private mstrCtlTypeId = ''; //控件类型号
  private mintOrderNum = 0; //序号
  private mstrDeletedDate = ''; //删除日期
  private mbolIsDeleted = false; //是否删除
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 字段显示单元样式Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldDispUnitStyleId(value: string) {
    if (value != undefined) {
      this.fldDispUnitStyleId = value;
      this.hmProperty['fldDispUnitStyleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段显示单元样式名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldDispUnitStyleName(value: string) {
    if (value != undefined) {
      this.fldDispUnitStyleName = value;
      this.hmProperty['fldDispUnitStyleName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 样式描述(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldDispUnitStyleDesc(value: string) {
    if (value != undefined) {
      this.fldDispUnitStyleDesc = value;
      this.hmProperty['fldDispUnitStyleDesc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 内容样式Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleIdContent(value: string) {
    if (value != undefined) {
      this.styleIdContent = value;
      this.hmProperty['styleIdContent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 标题样式Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleIdTitle(value: string) {
    if (value != undefined) {
      this.styleIdTitle = value;
      this.hmProperty['styleIdTitle'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 样式内容(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldDispUnitStyleContent(value: string) {
    if (value != undefined) {
      this.fldDispUnitStyleContent = value;
      this.hmProperty['fldDispUnitStyleContent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段显示单元格式(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldDispUnitFormat(value: string) {
    if (value != undefined) {
      this.fldDispUnitFormat = value;
      this.hmProperty['fldDispUnitFormat'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 控件类型号(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCtlTypeId(value: string) {
    if (value != undefined) {
      this.ctlTypeId = value;
      this.hmProperty['ctlTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 删除日期(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDeletedDate(value: string) {
    if (value != undefined) {
      this.deletedDate = value;
      this.hmProperty['deletedDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsDeleted(value: boolean) {
    if (value != undefined) {
      this.isDeleted = value;
      this.hmProperty['isDeleted'] = true;
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
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId:
        return this.fldDispUnitStyleId;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName:
        return this.fldDispUnitStyleName;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc:
        return this.fldDispUnitStyleDesc;
      case clscss_FldDispUnitStyleEN.con_StyleIdContent:
        return this.styleIdContent;
      case clscss_FldDispUnitStyleEN.con_StyleIdTitle:
        return this.styleIdTitle;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent:
        return this.fldDispUnitStyleContent;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitFormat:
        return this.fldDispUnitFormat;
      case clscss_FldDispUnitStyleEN.con_CtlTypeId:
        return this.ctlTypeId;
      case clscss_FldDispUnitStyleEN.con_OrderNum:
        return this.orderNum;
      case clscss_FldDispUnitStyleEN.con_DeletedDate:
        return this.deletedDate;
      case clscss_FldDispUnitStyleEN.con_IsDeleted:
        return this.isDeleted;
      case clscss_FldDispUnitStyleEN.con_UpdDate:
        return this.updDate;
      case clscss_FldDispUnitStyleEN.con_UpdUser:
        return this.updUser;
      case clscss_FldDispUnitStyleEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[css_FldDispUnitStyle]中不存在!`;
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
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId:
        this.fldDispUnitStyleId = strValue;
        this.hmProperty['fldDispUnitStyleId'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName:
        this.fldDispUnitStyleName = strValue;
        this.hmProperty['fldDispUnitStyleName'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc:
        this.fldDispUnitStyleDesc = strValue;
        this.hmProperty['fldDispUnitStyleDesc'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_StyleIdContent:
        this.styleIdContent = strValue;
        this.hmProperty['styleIdContent'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_StyleIdTitle:
        this.styleIdTitle = strValue;
        this.hmProperty['styleIdTitle'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent:
        this.fldDispUnitStyleContent = strValue;
        this.hmProperty['fldDispUnitStyleContent'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_FldDispUnitFormat:
        this.fldDispUnitFormat = strValue;
        this.hmProperty['fldDispUnitFormat'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_CtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_DeletedDate:
        this.deletedDate = strValue;
        this.hmProperty['deletedDate'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_IsDeleted:
        this.isDeleted = Boolean(strValue);
        this.hmProperty['isDeleted'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clscss_FldDispUnitStyleEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[css_FldDispUnitStyle]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fldDispUnitStyleId = ''; //字段显示单元样式Id
  public fldDispUnitStyleName = ''; //字段显示单元样式名称
  public fldDispUnitStyleDesc = ''; //样式描述
  public styleIdContent = ''; //内容样式Id
  public styleIdTitle = ''; //标题样式Id
  public fldDispUnitStyleContent = ''; //样式内容
  public fldDispUnitFormat = ''; //字段显示单元格式
  public ctlTypeId = ''; //控件类型号
  public orderNum = 0; //序号
  public deletedDate = ''; //删除日期
  public isDeleted = false; //是否删除
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"FldDispUnitStyleId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldDispUnitStyleId(): string {
    return 'fldDispUnitStyleId';
  } //字段显示单元样式Id

  /**
   * 常量:"FldDispUnitStyleName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldDispUnitStyleName(): string {
    return 'fldDispUnitStyleName';
  } //字段显示单元样式名称

  /**
   * 常量:"FldDispUnitStyleDesc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldDispUnitStyleDesc(): string {
    return 'fldDispUnitStyleDesc';
  } //样式描述

  /**
   * 常量:"StyleIdContent"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_StyleIdContent(): string {
    return 'styleIdContent';
  } //内容样式Id

  /**
   * 常量:"StyleIdTitle"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_StyleIdTitle(): string {
    return 'styleIdTitle';
  } //标题样式Id

  /**
   * 常量:"FldDispUnitStyleContent"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldDispUnitStyleContent(): string {
    return 'fldDispUnitStyleContent';
  } //样式内容

  /**
   * 常量:"FldDispUnitFormat"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldDispUnitFormat(): string {
    return 'fldDispUnitFormat';
  } //字段显示单元格式

  /**
   * 常量:"CtlTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"DeletedDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DeletedDate(): string {
    return 'deletedDate';
  } //删除日期

  /**
   * 常量:"IsDeleted"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsDeleted(): string {
    return 'isDeleted';
  } //是否删除

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
    //return propName in new clscss_FldDispUnitStyleEN();
    const instance = new clscss_FldDispUnitStyleEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
