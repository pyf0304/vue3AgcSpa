/**
 * 类名:clscssStyleEN
 * 表名:css_Style(00050468)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:16:10
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * css_Style(cssStyle)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clscssStyleEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = true; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'cssStyle'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'StyleId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'styleId',
    'ctlTypeId',
    'styleName',
    'styleDesc',
    'styleContent',
    'isDeleted',
    'deletedDate',
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
  private mstrStyleId = ''; //样式ID
  private mstrCtlTypeId = ''; //控件类型号
  private mstrStyleName = ''; //样式名称
  private mstrStyleDesc = ''; //样式描述
  private mstrStyleContent = ''; //样式内容
  private mbol_IsDeleted = false; //是否删除
  private mstr_DeletedDate = ''; //删除日期
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUser = ''; //修改者
  private mstrMemo = ''; //说明

  /**
   * 样式ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleId(value: string) {
    if (value != undefined) {
      this.styleId = value;
      this.hmProperty['styleId'] = true;
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
   * 样式名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleName(value: string) {
    if (value != undefined) {
      this.styleName = value;
      this.hmProperty['styleName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 样式描述(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleDesc(value: string) {
    if (value != undefined) {
      this.styleDesc = value;
      this.hmProperty['styleDesc'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 样式内容(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleContent(value: string) {
    if (value != undefined) {
      this.styleContent = value;
      this.hmProperty['styleContent'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否删除(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Set_IsDeleted(value: boolean) {
    if (value != undefined) {
      this.isDeleted = value;
      this.hmProperty['isDeleted'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 删除日期(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public Set_DeletedDate(value: string) {
    if (value != undefined) {
      this.deletedDate = value;
      this.hmProperty['deletedDate'] = true;
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
      case clscssStyleEN.conStyleId:
        return this.styleId;
      case clscssStyleEN.conCtlTypeId:
        return this.ctlTypeId;
      case clscssStyleEN.conStyleName:
        return this.styleName;
      case clscssStyleEN.conStyleDesc:
        return this.styleDesc;
      case clscssStyleEN.conStyleContent:
        return this.styleContent;
      case clscssStyleEN.conIsDeleted:
        return this.isDeleted;
      case clscssStyleEN.conDeletedDate:
        return this.deletedDate;
      case clscssStyleEN.conUpdDate:
        return this.updDate;
      case clscssStyleEN.conUpdUser:
        return this.updUser;
      case clscssStyleEN.conMemo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[cssStyle]中不存在！`;
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
      case clscssStyleEN.conStyleId:
        this.styleId = strValue;
        this.hmProperty['styleId'] = true;
        break;
      case clscssStyleEN.conCtlTypeId:
        this.ctlTypeId = strValue;
        this.hmProperty['ctlTypeId'] = true;
        break;
      case clscssStyleEN.conStyleName:
        this.styleName = strValue;
        this.hmProperty['styleName'] = true;
        break;
      case clscssStyleEN.conStyleDesc:
        this.styleDesc = strValue;
        this.hmProperty['styleDesc'] = true;
        break;
      case clscssStyleEN.conStyleContent:
        this.styleContent = strValue;
        this.hmProperty['styleContent'] = true;
        break;
      case clscssStyleEN.conIsDeleted:
        this.isDeleted = Boolean(strValue);
        this.hmProperty['isDeleted'] = true;
        break;
      case clscssStyleEN.conDeletedDate:
        this.deletedDate = strValue;
        this.hmProperty['deletedDate'] = true;
        break;
      case clscssStyleEN.conUpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clscssStyleEN.conUpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clscssStyleEN.conMemo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[cssStyle]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public styleId = ''; //样式ID
  public ctlTypeId = ''; //控件类型号
  public styleName = ''; //样式名称
  public styleDesc = ''; //样式描述
  public styleContent = ''; //样式内容
  public isDeleted = false; //是否删除
  public deletedDate = ''; //删除日期
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"StyleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conStyleId(): string {
    return 'styleId';
  } //样式ID

  /**
   * 常量:"CtlTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conCtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /**
   * 常量:"StyleName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conStyleName(): string {
    return 'styleName';
  } //样式名称

  /**
   * 常量:"StyleDesc"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conStyleDesc(): string {
    return 'styleDesc';
  } //样式描述

  /**
   * 常量:"StyleContent"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conStyleContent(): string {
    return 'styleContent';
  } //样式内容

  /**
   * 常量:"IsDeleted"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conIsDeleted(): string {
    return 'isDeleted';
  } //是否删除

  /**
   * 常量:"DeletedDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conDeletedDate(): string {
    return 'deletedDate';
  } //删除日期

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conUpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get conMemo(): string {
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
