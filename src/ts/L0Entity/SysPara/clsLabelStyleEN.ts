/**
 * 类名:clsLabelStyleEN
 * 表名:LabelStyle(00050066)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 09:49:51
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 标签样式(LabelStyle)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsLabelStyleEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件，作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志，记录不能删除，仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'LabelStyle'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'LabelStyleId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 12;
  public static AttributeName = [
    'labelStyleId',
    'labelStyleName',
    'style',
    'runat',
    'fontSize',
    'fontName',
    'width',
    'height',
    'styleZindex',
    'styleLeft',
    'stylePosition',
    'styleTop',
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
  private mstrLabelStyleId = ''; //LabelStyleId
  private mstrLabelStyleName = ''; //LabelStyleName
  private mstrStyle = ''; //类型
  private mstrRunat = ''; //运行在
  private mstrFontSize = ''; //字号
  private mstrFontName = ''; //字体
  private mintWidth = 0; //宽
  private mintHeight = 0; //高度
  private mintStyleZindex = 0; //Style_Zindex
  private mintStyleLeft = 0; //Style_Left
  private mstrStylePosition = ''; //Style_Position
  private mintStyleTop = 0; //Style_Top

  /**
   * LabelStyleId(说明:;字段类型:varchar;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLabelStyleId(value: string) {
    if (value != undefined) {
      this.labelStyleId = value;
      this.hmProperty['labelStyleId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * LabelStyleName(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLabelStyleName(value: string) {
    if (value != undefined) {
      this.labelStyleName = value;
      this.hmProperty['labelStyleName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 类型(说明:;字段类型:varchar;字段长度:800;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyle(value: string) {
    if (value != undefined) {
      this.style = value;
      this.hmProperty['style'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 运行在(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRunat(value: string) {
    if (value != undefined) {
      this.runat = value;
      this.hmProperty['runat'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFontSize(value: string) {
    if (value != undefined) {
      this.fontSize = value;
      this.hmProperty['fontSize'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字体(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFontName(value: string) {
    if (value != undefined) {
      this.fontName = value;
      this.hmProperty['fontName'] = true;
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
   * Style_Zindex(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleZindex(value: number) {
    if (value != undefined) {
      this.styleZindex = value;
      this.hmProperty['styleZindex'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Style_Left(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleLeft(value: number) {
    if (value != undefined) {
      this.styleLeft = value;
      this.hmProperty['styleLeft'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Style_Position(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStylePosition(value: string) {
    if (value != undefined) {
      this.stylePosition = value;
      this.hmProperty['stylePosition'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Style_Top(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetStyleTop(value: number) {
    if (value != undefined) {
      this.styleTop = value;
      this.hmProperty['styleTop'] = true;
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
      case clsLabelStyleEN.con_LabelStyleId:
        return this.labelStyleId;
      case clsLabelStyleEN.con_LabelStyleName:
        return this.labelStyleName;
      case clsLabelStyleEN.con_Style:
        return this.style;
      case clsLabelStyleEN.con_Runat:
        return this.runat;
      case clsLabelStyleEN.con_FontSize:
        return this.fontSize;
      case clsLabelStyleEN.con_FontName:
        return this.fontName;
      case clsLabelStyleEN.con_Width:
        return this.width;
      case clsLabelStyleEN.con_Height:
        return this.height;
      case clsLabelStyleEN.con_StyleZindex:
        return this.styleZindex;
      case clsLabelStyleEN.con_StyleLeft:
        return this.styleLeft;
      case clsLabelStyleEN.con_StylePosition:
        return this.stylePosition;
      case clsLabelStyleEN.con_StyleTop:
        return this.styleTop;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[LabelStyle]中不存在！`;
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
      case clsLabelStyleEN.con_LabelStyleId:
        this.labelStyleId = strValue;
        this.hmProperty['labelStyleId'] = true;
        break;
      case clsLabelStyleEN.con_LabelStyleName:
        this.labelStyleName = strValue;
        this.hmProperty['labelStyleName'] = true;
        break;
      case clsLabelStyleEN.con_Style:
        this.style = strValue;
        this.hmProperty['style'] = true;
        break;
      case clsLabelStyleEN.con_Runat:
        this.runat = strValue;
        this.hmProperty['runat'] = true;
        break;
      case clsLabelStyleEN.con_FontSize:
        this.fontSize = strValue;
        this.hmProperty['fontSize'] = true;
        break;
      case clsLabelStyleEN.con_FontName:
        this.fontName = strValue;
        this.hmProperty['fontName'] = true;
        break;
      case clsLabelStyleEN.con_Width:
        this.width = Number(strValue);
        this.hmProperty['width'] = true;
        break;
      case clsLabelStyleEN.con_Height:
        this.height = Number(strValue);
        this.hmProperty['height'] = true;
        break;
      case clsLabelStyleEN.con_StyleZindex:
        this.styleZindex = Number(strValue);
        this.hmProperty['styleZindex'] = true;
        break;
      case clsLabelStyleEN.con_StyleLeft:
        this.styleLeft = Number(strValue);
        this.hmProperty['styleLeft'] = true;
        break;
      case clsLabelStyleEN.con_StylePosition:
        this.stylePosition = strValue;
        this.hmProperty['stylePosition'] = true;
        break;
      case clsLabelStyleEN.con_StyleTop:
        this.styleTop = Number(strValue);
        this.hmProperty['styleTop'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[LabelStyle]中不存在！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public labelStyleId = ''; //LabelStyleId
  public labelStyleName = ''; //LabelStyleName
  public style = ''; //类型
  public runat = ''; //运行在
  public fontSize = ''; //字号
  public fontName = ''; //字体
  public width = 0; //宽
  public height = 0; //高度
  public styleZindex = 0; //Style_Zindex
  public styleLeft = 0; //Style_Left
  public stylePosition = ''; //Style_Position
  public styleTop = 0; //Style_Top

  /**
   * 常量:"LabelStyleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LabelStyleId(): string {
    return 'labelStyleId';
  } //LabelStyleId

  /**
   * 常量:"LabelStyleName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LabelStyleName(): string {
    return 'labelStyleName';
  } //LabelStyleName

  /**
   * 常量:"Style"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Style(): string {
    return 'style';
  } //类型

  /**
   * 常量:"Runat"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Runat(): string {
    return 'runat';
  } //运行在

  /**
   * 常量:"FontSize"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FontSize(): string {
    return 'fontSize';
  } //字号

  /**
   * 常量:"FontName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FontName(): string {
    return 'fontName';
  } //字体

  /**
   * 常量:"Width"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Width(): string {
    return 'width';
  } //宽

  /**
   * 常量:"Height"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Height(): string {
    return 'height';
  } //高度

  /**
   * 常量:"StyleZindex"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StyleZindex(): string {
    return 'styleZindex';
  } //Style_Zindex

  /**
   * 常量:"StyleLeft"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StyleLeft(): string {
    return 'styleLeft';
  } //Style_Left

  /**
   * 常量:"StylePosition"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StylePosition(): string {
    return 'stylePosition';
  } //Style_Position

  /**
   * 常量:"StyleTop"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_StyleTop(): string {
    return 'styleTop';
  } //Style_Top

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
