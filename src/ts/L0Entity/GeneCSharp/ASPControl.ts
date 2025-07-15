/*-- -- -- -- -- -- -- -- -- -- --
 类名:ASPControl
 表名:ASPControl(00050217)
 生成代码版本:2020.06.17.1
 生成日期:2020/06/17 18:12:43
 生成者:
 工程名称:AGC
 工程ID:0005
 相关数据库:tzar.tpddns.cn,19433AGC_CS12
 prjDataBaseId:0213
 模块中文名:生成C#代码
 模块英文名:GeneCSharp
 框架-层名:纯粹类(PureClass)
 编程语言:TypeScript
 == == == == == == == == == == == == 
 */
/// <summary>
/// ASP控件(ASPControl)
/// (AutoGCLib.PureClass4TypeScript:GeneCode)
/// </summary>
export class ASPControl {
  public static _CurrTabName = 'ASPControl'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'aspControlId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public mintAttributeCount = 55;
  public attributeName = [
    'aspControlId',
    'aspControlName',
    'ctrlId',
    'ctrlName',
    'ctlTypeId',
    'style',
    'height',
    'width',
    'text',
    'runat',
    'cssClass',
    'class',
    'IsHaveChildCtl',
    'orderNum',
    'mKey',
    'tools',
    'app',
    'android',
    'layout',
    'inputType',
    'ems',
    'popupTheme',
    'background',
    'layout_gravity',
    'srcCompat',
    'theme',
    'showIn',
    'layout_behavior',
    'con_Text',
    'layout_margin',
    'layout_marginTop',
    'tag',
    'layout_constraintTop_toTopOf',
    'layout_constraintTop_toBottomOf',
    'layout_constraintStart_toStartOf',
    'layout_constraintLeft_toLeftOf',
    'layout_constraintLeft_toRightOf',
    'scaleY',
    'scaleX',
    'layout_marginLeft',
    'mTextSize',
    'minHeight',
    'orientation',
    'scrollbars',
    'value',
    'type',
    'tabindex',
    'role',
    'aria_labelledby',
    'aria_hidden',
    'data_dismiss',
    'aria_label',
    'groupName',
    'onClick',
    'commandName',
  ];
  //以下是属性变量

  private mstrAspControlId = ''; //Asp控件Id
  private mstrAspControlName = ''; //Asp控件名
  private mstrCtrlId = ''; //控件Id
  private mstrCtrlName = ''; //控件Name
  private mstrCtlTypeId = ''; //控件类型号
  private mstrStyle = ''; //类型
  private mintHeight = 0; //高度
  private mintWidth = 0; //宽
  private mstrText = ''; //文本
  private mstrRunat = ''; //运行在
  private mstrCssClass = ''; //样式表
  private mstrClass = ''; //样式表类
  private mbolIsHaveChildCtl = false; //是否有子控件
  private mintOrderNum = 0; //序号
  private mstrmKey = ''; //关键字
  private mstrtools = ''; //tools
  private mstrapp = ''; //app
  private mstrandroid = ''; //android
  private mstrlayout = ''; //布局
  private mstrinputType = ''; //输入类型
  private mintems = 0; //字符宽度
  private mstrpopupTheme = ''; //弹出主题
  private mstrbackground = ''; //背景
  private mstrlayout_gravity = ''; //layout_gravity
  private mstrsrcCompat = ''; //srcCompat
  private mstrtheme = ''; //主题
  private mstrshowIn = ''; //显示在
  private mstrlayout_behavior = ''; //布局行为
  private mstrcontext = ''; //上下文
  private mstrlayout_margin = ''; //页边距
  private mintlayout_marginTop = 0; //顶空
  private mstrTag = ''; //tag
  private mstrlayout_constraintTop_toTopOf = ''; //约束顶相对于顶
  private mstrlayout_constraintTop_toBottomOf = ''; //约束顶相对于底
  private mstrlayout_constraintStart_toStartOf = ''; //约束开始相对于开始
  private mstrlayout_constraintLeft_toLeftOf = ''; //约束左相对于左
  private mstrlayout_constraintLeft_toRightOf = ''; //约束左相对于右
  private mstrscaleY = ''; //缩放Y
  private mstrscaleX = ''; //缩放X
  private mintlayout_marginLeft = 0; //左边空
  private mstrmTextSize = ''; //文本尺寸
  private mstrminHeight = ''; //最小高度
  private mstrorientation = ''; //方向
  private mstrscrollbars = ''; //滚动条
  private mstrValue = ''; //值
  private mstrtype = ''; //类型
  private mstrtabindex = ''; //tabindex
  private mstrrole = ''; //role
  private mstraria_labelledby = ''; //aria-labelledby
  private mstraria_hidden = ''; //aria-hidden
  private mstrdata_dismiss = ''; //data-dismiss
  private mstraria_label = ''; //aria-label
  private mstrGroupName = ''; //组名
  private mstrOnClick = ''; //单击事件
  private mstrCommandName = ''; //命令名

  /// <summary>
  /// Asp控件Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aspControlId() {
    return this.mstrAspControlId;
  }
  /// <summary>
  /// Asp控件Id(说明:;字段类型:char;字段长度:8;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aspControlId(value: string) {
    this.mstrAspControlId = value;
  }

  /// <summary>
  /// Asp控件名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aspControlName() {
    return this.mstrAspControlName;
  }
  /// <summary>
  /// Asp控件名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aspControlName(value: string) {
    this.mstrAspControlName = value;
  }

  /// <summary>
  /// 控件Id(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ctrlId() {
    return this.mstrCtrlId;
  }
  /// <summary>
  /// 控件Id(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ctrlId(value: string) {
    this.mstrCtrlId = value;
  }

  /// <summary>
  /// 控件Name(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ctrlName() {
    return this.mstrCtrlName;
  }
  /// <summary>
  /// 控件Name(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ctrlName(value: string) {
    this.mstrCtrlName = value;
  }

  /// <summary>
  /// 控件类型号(说明:;字段类型:char;字段长度:2;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ctlTypeId() {
    return this.mstrCtlTypeId;
  }
  /// <summary>
  /// 控件类型号(说明:;字段类型:char;字段长度:2;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ctlTypeId(value: string) {
    this.mstrCtlTypeId = value;
  }

  /// <summary>
  /// 类型(说明:;字段类型:varchar;字段长度:800;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get style() {
    return this.mstrStyle;
  }
  /// <summary>
  /// 类型(说明:;字段类型:varchar;字段长度:800;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set style(value: string) {
    this.mstrStyle = value;
  }

  /// <summary>
  /// 高度(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get height() {
    return this.mintHeight;
  }
  /// <summary>
  /// 高度(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set height(value: number) {
    this.mintHeight = value;
  }

  /// <summary>
  /// 宽(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get width() {
    return this.mintWidth;
  }
  /// <summary>
  /// 宽(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set width(value: number) {
    this.mintWidth = value;
  }

  /// <summary>
  /// 文本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get text() {
    return this.mstrText;
  }
  /// <summary>
  /// 文本(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set text(value: string) {
    this.mstrText = value;
  }

  /// <summary>
  /// 运行在(说明:;字段类型:varchar;字段长度:30;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get runat() {
    return this.mstrRunat;
  }
  /// <summary>
  /// 运行在(说明:;字段类型:varchar;字段长度:30;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set runat(value: string) {
    this.mstrRunat = value;
  }

  /// <summary>
  /// 样式表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get cssClass() {
    return this.mstrCssClass;
  }
  /// <summary>
  /// 样式表(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set cssClass(value: string) {
    this.mstrCssClass = value;
  }

  /// <summary>
  /// 样式表类(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get class() {
    return this.mstrClass;
  }
  /// <summary>
  /// 样式表类(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set class(value: string) {
    this.mstrClass = value;
  }

  /// <summary>
  /// 是否有子控件(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get IsHaveChildCtl() {
    return this.mbolIsHaveChildCtl;
  }
  /// <summary>
  /// 是否有子控件(说明:;字段类型:bit;字段长度:1;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set IsHaveChildCtl(value: boolean) {
    this.mbolIsHaveChildCtl = value;
  }

  /// <summary>
  /// 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get orderNum() {
    return this.mintOrderNum;
  }
  /// <summary>
  /// 序号(说明:;字段类型:int;字段长度:4;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set orderNum(value: number) {
    this.mintOrderNum = value;
  }

  /// <summary>
  /// 关键字(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get mKey() {
    return this.mstrmKey;
  }
  /// <summary>
  /// 关键字(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set mKey(value: string) {
    this.mstrmKey = value;
  }

  /// <summary>
  /// tools(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get tools() {
    return this.mstrtools;
  }
  /// <summary>
  /// tools(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set tools(value: string) {
    this.mstrtools = value;
  }

  /// <summary>
  /// app(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get app() {
    return this.mstrapp;
  }
  /// <summary>
  /// app(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set app(value: string) {
    this.mstrapp = value;
  }

  /// <summary>
  /// android(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get android() {
    return this.mstrandroid;
  }
  /// <summary>
  /// android(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set android(value: string) {
    this.mstrandroid = value;
  }

  /// <summary>
  /// 布局(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout() {
    return this.mstrlayout;
  }
  /// <summary>
  /// 布局(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout(value: string) {
    this.mstrlayout = value;
  }

  /// <summary>
  /// 输入类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get inputType() {
    return this.mstrinputType;
  }
  /// <summary>
  /// 输入类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set inputType(value: string) {
    this.mstrinputType = value;
  }

  /// <summary>
  /// 字符宽度(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get ems() {
    return this.mintems;
  }
  /// <summary>
  /// 字符宽度(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set ems(value: number) {
    this.mintems = value;
  }

  /// <summary>
  /// 弹出主题(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get popupTheme() {
    return this.mstrpopupTheme;
  }
  /// <summary>
  /// 弹出主题(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set popupTheme(value: string) {
    this.mstrpopupTheme = value;
  }

  /// <summary>
  /// 背景(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get background() {
    return this.mstrbackground;
  }
  /// <summary>
  /// 背景(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set background(value: string) {
    this.mstrbackground = value;
  }

  /// <summary>
  /// layout_gravity(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_gravity() {
    return this.mstrlayout_gravity;
  }
  /// <summary>
  /// layout_gravity(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_gravity(value: string) {
    this.mstrlayout_gravity = value;
  }

  /// <summary>
  /// srcCompat(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get srcCompat() {
    return this.mstrsrcCompat;
  }
  /// <summary>
  /// srcCompat(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set srcCompat(value: string) {
    this.mstrsrcCompat = value;
  }

  /// <summary>
  /// 主题(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get theme() {
    return this.mstrtheme;
  }
  /// <summary>
  /// 主题(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set theme(value: string) {
    this.mstrtheme = value;
  }

  /// <summary>
  /// 显示在(说明:;字段类型:varchar;字段长度:300;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get showIn() {
    return this.mstrshowIn;
  }
  /// <summary>
  /// 显示在(说明:;字段类型:varchar;字段长度:300;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set showIn(value: string) {
    this.mstrshowIn = value;
  }

  /// <summary>
  /// 布局行为(说明:;字段类型:varchar;字段长度:300;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_behavior() {
    return this.mstrlayout_behavior;
  }
  /// <summary>
  /// 布局行为(说明:;字段类型:varchar;字段长度:300;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_behavior(value: string) {
    this.mstrlayout_behavior = value;
  }

  /// <summary>
  /// 上下文(说明:;字段类型:varchar;字段长度:300;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get con_Text() {
    return this.mstrcontext;
  }
  /// <summary>
  /// 上下文(说明:;字段类型:varchar;字段长度:300;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set con_Text(value: string) {
    this.mstrcontext = value;
  }

  /// <summary>
  /// 页边距(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_margin() {
    return this.mstrlayout_margin;
  }
  /// <summary>
  /// 页边距(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_margin(value: string) {
    this.mstrlayout_margin = value;
  }

  /// <summary>
  /// 顶空(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_marginTop() {
    return this.mintlayout_marginTop;
  }
  /// <summary>
  /// 顶空(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_marginTop(value: number) {
    this.mintlayout_marginTop = value;
  }

  /// <summary>
  /// tag(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get tag() {
    return this.mstrTag;
  }
  /// <summary>
  /// tag(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set tag(value: string) {
    this.mstrTag = value;
  }

  /// <summary>
  /// 约束顶相对于顶(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_constraintTop_toTopOf() {
    return this.mstrlayout_constraintTop_toTopOf;
  }
  /// <summary>
  /// 约束顶相对于顶(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_constraintTop_toTopOf(value: string) {
    this.mstrlayout_constraintTop_toTopOf = value;
  }

  /// <summary>
  /// 约束顶相对于底(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_constraintTop_toBottomOf() {
    return this.mstrlayout_constraintTop_toBottomOf;
  }
  /// <summary>
  /// 约束顶相对于底(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_constraintTop_toBottomOf(value: string) {
    this.mstrlayout_constraintTop_toBottomOf = value;
  }

  /// <summary>
  /// 约束开始相对于开始(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_constraintStart_toStartOf() {
    return this.mstrlayout_constraintStart_toStartOf;
  }
  /// <summary>
  /// 约束开始相对于开始(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_constraintStart_toStartOf(value: string) {
    this.mstrlayout_constraintStart_toStartOf = value;
  }

  /// <summary>
  /// 约束左相对于左(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_constraintLeft_toLeftOf() {
    return this.mstrlayout_constraintLeft_toLeftOf;
  }
  /// <summary>
  /// 约束左相对于左(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_constraintLeft_toLeftOf(value: string) {
    this.mstrlayout_constraintLeft_toLeftOf = value;
  }

  /// <summary>
  /// 约束左相对于右(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_constraintLeft_toRightOf() {
    return this.mstrlayout_constraintLeft_toRightOf;
  }
  /// <summary>
  /// 约束左相对于右(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_constraintLeft_toRightOf(value: string) {
    this.mstrlayout_constraintLeft_toRightOf = value;
  }

  /// <summary>
  /// 缩放Y(说明:;字段类型:varchar;字段长度:10;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get scaleY() {
    return this.mstrscaleY;
  }
  /// <summary>
  /// 缩放Y(说明:;字段类型:varchar;字段长度:10;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set scaleY(value: string) {
    this.mstrscaleY = value;
  }

  /// <summary>
  /// 缩放X(说明:;字段类型:varchar;字段长度:10;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get scaleX() {
    return this.mstrscaleX;
  }
  /// <summary>
  /// 缩放X(说明:;字段类型:varchar;字段长度:10;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set scaleX(value: string) {
    this.mstrscaleX = value;
  }

  /// <summary>
  /// 左边空(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get layout_marginLeft() {
    return this.mintlayout_marginLeft;
  }
  /// <summary>
  /// 左边空(说明:;字段类型:int;字段长度:4;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set layout_marginLeft(value: number) {
    this.mintlayout_marginLeft = value;
  }

  /// <summary>
  /// 文本尺寸(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get mTextSize() {
    return this.mstrmTextSize;
  }
  /// <summary>
  /// 文本尺寸(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set mTextSize(value: string) {
    this.mstrmTextSize = value;
  }

  /// <summary>
  /// 最小高度(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get minHeight() {
    return this.mstrminHeight;
  }
  /// <summary>
  /// 最小高度(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set minHeight(value: string) {
    this.mstrminHeight = value;
  }

  /// <summary>
  /// 方向(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get orientation() {
    return this.mstrorientation;
  }
  /// <summary>
  /// 方向(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set orientation(value: string) {
    this.mstrorientation = value;
  }

  /// <summary>
  /// 滚动条(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get scrollbars() {
    return this.mstrscrollbars;
  }
  /// <summary>
  /// 滚动条(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set scrollbars(value: string) {
    this.mstrscrollbars = value;
  }

  /// <summary>
  /// 值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get value() {
    return this.mstrValue;
  }
  /// <summary>
  /// 值(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set value(value: string) {
    this.mstrValue = value;
  }

  /// <summary>
  /// 类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get type() {
    return this.mstrtype;
  }
  /// <summary>
  /// 类型(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set type(value: string) {
    this.mstrtype = value;
  }

  /// <summary>
  /// tabindex(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get tabindex() {
    return this.mstrtabindex;
  }
  /// <summary>
  /// tabindex(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set tabindex(value: string) {
    this.mstrtabindex = value;
  }

  /// <summary>
  /// role(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get role() {
    return this.mstrrole;
  }
  /// <summary>
  /// role(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set role(value: string) {
    this.mstrrole = value;
  }

  /// <summary>
  /// aria-labelledby(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aria_labelledby() {
    return this.mstraria_labelledby;
  }
  /// <summary>
  /// aria-labelledby(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aria_labelledby(value: string) {
    this.mstraria_labelledby = value;
  }

  /// <summary>
  /// aria-hidden(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aria_hidden() {
    return this.mstraria_hidden;
  }
  /// <summary>
  /// aria-hidden(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aria_hidden(value: string) {
    this.mstraria_hidden = value;
  }

  /// <summary>
  /// data-dismiss(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get data_dismiss() {
    return this.mstrdata_dismiss;
  }
  /// <summary>
  /// data-dismiss(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set data_dismiss(value: string) {
    this.mstrdata_dismiss = value;
  }

  /// <summary>
  /// aria-label(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get aria_label() {
    return this.mstraria_label;
  }
  /// <summary>
  /// aria-label(说明:;字段类型:varchar;字段长度:50;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set aria_label(value: string) {
    this.mstraria_label = value;
  }

  /// <summary>
  /// 组名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get groupName() {
    return this.mstrGroupName;
  }
  /// <summary>
  /// 组名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set groupName(value: string) {
    this.mstrGroupName = value;
  }

  /// <summary>
  /// 单击事件(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get onClick() {
    return this.mstrOnClick;
  }
  /// <summary>
  /// 单击事件(说明:;字段类型:varchar;字段长度:50;是否可空:False)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set onClick(value: string) {
    this.mstrOnClick = value;
  }

  /// <summary>
  /// 命令名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public get commandName() {
    return this.mstrCommandName;
  }
  /// <summary>
  /// 命令名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
  /// (AutoGCLib.PureClass4TypeScript:Gen_PC_ClsProperty)
  /// </summary>
  public set commandName(value: string) {
    this.mstrCommandName = value;
  }

  /// <summary>
  /// 常量:"aspControlId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspControlId(): string {
    return 'aspControlId';
  } //Asp控件Id

  /// <summary>
  /// 常量:"aspControlName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conAspControlName(): string {
    return 'aspControlName';
  } //Asp控件名

  /// <summary>
  /// 常量:"ctrlId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conCtrlId(): string {
    return 'ctrlId';
  } //控件Id

  /// <summary>
  /// 常量:"ctrlName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conCtrlName(): string {
    return 'ctrlName';
  } //控件Name

  /// <summary>
  /// 常量:"ctlTypeId"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conCtlTypeId(): string {
    return 'ctlTypeId';
  } //控件类型号

  /// <summary>
  /// 常量:"style"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conStyle(): string {
    return 'style';
  } //类型

  /// <summary>
  /// 常量:"height"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conHeight(): string {
    return 'height';
  } //高度

  /// <summary>
  /// 常量:"width"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conWidth(): string {
    return 'width';
  } //宽

  /// <summary>
  /// 常量:"text"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Text(): string {
    return 'text';
  } //文本

  /// <summary>
  /// 常量:"runat"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conRunat(): string {
    return 'runat';
  } //运行在

  /// <summary>
  /// 常量:"cssClass"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conCssClass(): string {
    return 'cssClass';
  } //样式表

  /// <summary>
  /// 常量:"class"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conClass(): string {
    return 'class';
  } //样式表类

  /// <summary>
  /// 常量:"IsHaveChildCtl"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conIsHaveChildCtl(): string {
    return 'IsHaveChildCtl';
  } //是否有子控件

  /// <summary>
  /// 常量:"orderNum"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /// <summary>
  /// 常量:"mKey"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conmKey(): string {
    return 'mKey';
  } //关键字

  /// <summary>
  /// 常量:"tools"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get contools(): string {
    return 'tools';
  } //tools

  /// <summary>
  /// 常量:"app"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conapp(): string {
    return 'app';
  } //app

  /// <summary>
  /// 常量:"android"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conandroid(): string {
    return 'android';
  } //android

  /// <summary>
  /// 常量:"layout"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout(): string {
    return 'layout';
  } //布局

  /// <summary>
  /// 常量:"inputType"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get coninputType(): string {
    return 'inputType';
  } //输入类型

  /// <summary>
  /// 常量:"ems"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conems(): string {
    return 'ems';
  } //字符宽度

  /// <summary>
  /// 常量:"popupTheme"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conpopupTheme(): string {
    return 'popupTheme';
  } //弹出主题

  /// <summary>
  /// 常量:"background"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conbackground(): string {
    return 'background';
  } //背景

  /// <summary>
  /// 常量:"layout_gravity"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_gravity(): string {
    return 'layout_gravity';
  } //layout_gravity

  /// <summary>
  /// 常量:"srcCompat"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get consrcCompat(): string {
    return 'srcCompat';
  } //srcCompat

  /// <summary>
  /// 常量:"theme"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get contheme(): string {
    return 'theme';
  } //主题

  /// <summary>
  /// 常量:"showIn"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conshowIn(): string {
    return 'showIn';
  } //显示在

  /// <summary>
  /// 常量:"layout_behavior"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_behavior(): string {
    return 'layout_behavior';
  } //布局行为

  /// <summary>
  /// 常量:"con_Text"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get concontext(): string {
    return 'con_Text';
  } //上下文

  /// <summary>
  /// 常量:"layout_margin"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_margin(): string {
    return 'layout_margin';
  } //页边距

  /// <summary>
  /// 常量:"layout_marginTop"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_marginTop(): string {
    return 'layout_marginTop';
  } //顶空

  /// <summary>
  /// 常量:"tag"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conTag(): string {
    return 'tag';
  } //tag

  /// <summary>
  /// 常量:"layout_constraintTop_toTopOf"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_constraintTop_toTopOf(): string {
    return 'layout_constraintTop_toTopOf';
  } //约束顶相对于顶

  /// <summary>
  /// 常量:"layout_constraintTop_toBottomOf"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_constraintTop_toBottomOf(): string {
    return 'layout_constraintTop_toBottomOf';
  } //约束顶相对于底

  /// <summary>
  /// 常量:"layout_constraintStart_toStartOf"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_constraintStart_toStartOf(): string {
    return 'layout_constraintStart_toStartOf';
  } //约束开始相对于开始

  /// <summary>
  /// 常量:"layout_constraintLeft_toLeftOf"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_constraintLeft_toLeftOf(): string {
    return 'layout_constraintLeft_toLeftOf';
  } //约束左相对于左

  /// <summary>
  /// 常量:"layout_constraintLeft_toRightOf"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_constraintLeft_toRightOf(): string {
    return 'layout_constraintLeft_toRightOf';
  } //约束左相对于右

  /// <summary>
  /// 常量:"scaleY"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conscaleY(): string {
    return 'scaleY';
  } //缩放Y

  /// <summary>
  /// 常量:"scaleX"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conscaleX(): string {
    return 'scaleX';
  } //缩放X

  /// <summary>
  /// 常量:"layout_marginLeft"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conlayout_marginLeft(): string {
    return 'layout_marginLeft';
  } //左边空

  /// <summary>
  /// 常量:"mTextSize"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conmTextSize(): string {
    return 'mTextSize';
  } //文本尺寸

  /// <summary>
  /// 常量:"minHeight"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conminHeight(): string {
    return 'minHeight';
  } //最小高度

  /// <summary>
  /// 常量:"orientation"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conorientation(): string {
    return 'orientation';
  } //方向

  /// <summary>
  /// 常量:"scrollbars"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conscrollbars(): string {
    return 'scrollbars';
  } //滚动条

  /// <summary>
  /// 常量:"value"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get con_Value(): string {
    return 'value';
  } //值

  /// <summary>
  /// 常量:"type"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get contype(): string {
    return 'type';
  } //类型

  /// <summary>
  /// 常量:"tabindex"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get contabindex(): string {
    return 'tabindex';
  } //tabindex

  /// <summary>
  /// 常量:"role"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conrole(): string {
    return 'role';
  } //role

  /// <summary>
  /// 常量:"aria_labelledby"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conaria_labelledby(): string {
    return 'aria_labelledby';
  } //aria-labelledby

  /// <summary>
  /// 常量:"aria_hidden"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conaria_hidden(): string {
    return 'aria_hidden';
  } //aria-hidden

  /// <summary>
  /// 常量:"data_dismiss"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get condata_dismiss(): string {
    return 'data_dismiss';
  } //data-dismiss

  /// <summary>
  /// 常量:"aria_label"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conaria_label(): string {
    return 'aria_label';
  } //aria-label

  /// <summary>
  /// 常量:"groupName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conGroupName(): string {
    return 'groupName';
  } //组名

  /// <summary>
  /// 常量:"onClick"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conOnClick(): string {
    return 'onClick';
  } //单击事件

  /// <summary>
  /// 常量:"commandName"
  /// (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
  /// </summary>
  public static get conCommandName(): string {
    return 'commandName';
  } //命令名
}
