/**
 * 类名:clsButtonTabEN
 * 表名:ButtonTab(00050427)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:28
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 按钮(ButtonTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsButtonTabEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ButtonTab'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ButtonId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'buttonId',
    'buttonName',
    'text',
    'commandName',
    'height',
    'width',
    'cssClass',
    'imageUrl',
    'inUse',
    'orderNum',
    'updUser',
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
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrButtonId = ''; //按钮Id
  private mstrButtonName = ''; //按钮名称
  private mstrText = ''; //文本
  private mstrCommandName = ''; //命令名
  private mintHeight = 0; //高度
  private mintWidth = 0; //宽
  private mstrCssClass = ''; //样式表
  private mstrImageUrl = ''; //图片资源
  private mbolInUse = false; //是否在用
  private mintOrderNum = 0; //序号
  private mstrUpdUser = ''; //修改者
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明

  /**
   * 按钮Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetButtonId(value: string) {
    if (value != undefined) {
      this.buttonId = value;
      this.hmProperty['buttonId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 按钮名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetButtonName(value: string) {
    if (value != undefined) {
      this.buttonName = value;
      this.hmProperty['buttonName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetText(value: string) {
    if (value != undefined) {
      this.text = value;
      this.hmProperty['text'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 命令名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCommandName(value: string) {
    if (value != undefined) {
      this.commandName = value;
      this.hmProperty['commandName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 高度(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHeight(value: number) {
    if (value != undefined) {
      this.height = value;
      this.hmProperty['height'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 宽(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWidth(value: number) {
    if (value != undefined) {
      this.width = value;
      this.hmProperty['width'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 样式表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCssClass(value: string) {
    if (value != undefined) {
      this.cssClass = value;
      this.hmProperty['cssClass'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 图片资源(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetImageUrl(value: string) {
    if (value != undefined) {
      this.imageUrl = value;
      this.hmProperty['imageUrl'] = true;
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsButtonTabEN.con_ButtonId:
        return this.buttonId;
      case clsButtonTabEN.con_ButtonName:
        return this.buttonName;
      case clsButtonTabEN.con_Text:
        return this.text;
      case clsButtonTabEN.con_CommandName:
        return this.commandName;
      case clsButtonTabEN.con_Height:
        return this.height;
      case clsButtonTabEN.con_Width:
        return this.width;
      case clsButtonTabEN.con_CssClass:
        return this.cssClass;
      case clsButtonTabEN.con_ImageUrl:
        return this.imageUrl;
      case clsButtonTabEN.con_InUse:
        return this.inUse;
      case clsButtonTabEN.con_OrderNum:
        return this.orderNum;
      case clsButtonTabEN.con_UpdUser:
        return this.updUser;
      case clsButtonTabEN.con_UpdDate:
        return this.updDate;
      case clsButtonTabEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ButtonTab]中不存在!`;
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
      case clsButtonTabEN.con_ButtonId:
        this.buttonId = strValue;
        this.hmProperty['buttonId'] = true;
        break;
      case clsButtonTabEN.con_ButtonName:
        this.buttonName = strValue;
        this.hmProperty['buttonName'] = true;
        break;
      case clsButtonTabEN.con_Text:
        this.text = strValue;
        this.hmProperty['text'] = true;
        break;
      case clsButtonTabEN.con_CommandName:
        this.commandName = strValue;
        this.hmProperty['commandName'] = true;
        break;
      case clsButtonTabEN.con_Height:
        this.height = Number(strValue);
        this.hmProperty['height'] = true;
        break;
      case clsButtonTabEN.con_Width:
        this.width = Number(strValue);
        this.hmProperty['width'] = true;
        break;
      case clsButtonTabEN.con_CssClass:
        this.cssClass = strValue;
        this.hmProperty['cssClass'] = true;
        break;
      case clsButtonTabEN.con_ImageUrl:
        this.imageUrl = strValue;
        this.hmProperty['imageUrl'] = true;
        break;
      case clsButtonTabEN.con_InUse:
        this.inUse = Boolean(strValue);
        this.hmProperty['inUse'] = true;
        break;
      case clsButtonTabEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsButtonTabEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsButtonTabEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsButtonTabEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[ButtonTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public buttonId = ''; //按钮Id
  public buttonName = ''; //按钮名称
  public text = ''; //文本
  public commandName = ''; //命令名
  public height = 0; //高度
  public width = 0; //宽
  public cssClass = ''; //样式表
  public imageUrl = ''; //图片资源
  public inUse = false; //是否在用
  public orderNum = 0; //序号
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
  public memo = ''; //说明

  /**
   * 常量:"ButtonId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ButtonId(): string {
    return 'buttonId';
  } //按钮Id

  /**
   * 常量:"ButtonName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ButtonName(): string {
    return 'buttonName';
  } //按钮名称

  /**
   * 常量:"Text"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Text(): string {
    return 'text';
  } //文本

  /**
   * 常量:"CommandName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CommandName(): string {
    return 'commandName';
  } //命令名

  /**
   * 常量:"Height"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Height(): string {
    return 'height';
  } //高度

  /**
   * 常量:"Width"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Width(): string {
    return 'width';
  } //宽

  /**
   * 常量:"CssClass"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CssClass(): string {
    return 'cssClass';
  } //样式表

  /**
   * 常量:"ImageUrl"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ImageUrl(): string {
    return 'imageUrl';
  } //图片资源

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

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
