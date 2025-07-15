/**
 * 类名:clsViewDgInfoEN
 * 表名:ViewDgInfo(00050012)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 18:20:29
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 视图Dg(ViewDgInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewDgInfoEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewDgInfo'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewDgID'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 27;
  public static AttributeName = [
    'viewDgID',
    'viewDgName',
    'viewId',
    'sqlDsId',
    'dgStyleId',
    'style',
    'runat',
    'fontSize',
    'fontName',
    'width',
    'height',
    'allowPaging',
    'pageSize',
    'autoGenerateColumns',
    'allowSorting',
    'isRadio',
    'isCheck',
    'isHaveUpdBtn',
    'isHaveDelBtn',
    'isHaveDetailBtn',
    'isJumpPage',
    'isInTab',
    'styleZindex',
    'styleLeft',
    'stylePosition',
    'styleTop',
    'sqlDsTypeId',
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
  private mstrViewDgID = ''; //界面DgId
  private mstrViewDgName = ''; //界面Dg名称
  private mstrViewId = ''; //界面Id
  private mstrSqlDsId = ''; //数据源表/视图Id
  private mstrDgStyleId = ''; //DG模式ID
  private mstrStyle = ''; //类型
  private mstrRunat = ''; //运行在
  private mstrFontSize = ''; //字号
  private mstrFontName = ''; //字体
  private mintWidth = 0; //宽
  private mintHeight = 0; //高度
  private mbolAllowPaging = false; //允许分页
  private mintPageSize = 0; //页大小
  private mbolAutoGenerateColumns = false; //自动生成列
  private mbolAllowSorting = false; //允许排序
  private mbolIsRadio = false; //是否单选框
  private mbolIsCheck = false; //是否复选框
  private mbolIsHaveUpdBtn = false; //是否有修改按钮
  private mbolIsHaveDelBtn = false; //是否有删除按钮
  private mbolIsHaveDetailBtn = false; //是否有详细按钮
  private mbolIsJumpPage = false; //是否跳页
  private mbolIsInTab = false; //是否生成DG在表中
  private mintStyleZindex = 0; //Style_Zindex
  private mintStyleLeft = 0; //Style_Left
  private mstrStylePosition = ''; //Style_Position
  private mintStyleTop = 0; //Style_Top
  private mstrSqlDsTypeId = ''; //数据源类型Id

  /**
   * 界面DgId(说明:;字段类型:varchar;字段长度:10;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewDgID(value: string) {
    if (value != undefined) {
      this.viewDgID = value;
      this.hmProperty['viewDgID'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面Dg名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewDgName(value: string) {
    if (value != undefined) {
      this.viewDgName = value;
      this.hmProperty['viewDgName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewId(value: string) {
    if (value != undefined) {
      this.viewId = value;
      this.hmProperty['viewId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源表/视图Id(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlDsId(value: string) {
    if (value != undefined) {
      this.sqlDsId = value;
      this.hmProperty['sqlDsId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DG模式ID(说明:;字段类型:varchar;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDgStyleId(value: string) {
    if (value != undefined) {
      this.dgStyleId = value;
      this.hmProperty['dgStyleId'] = true;
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
   * 允许分页(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAllowPaging(value: boolean) {
    if (value != undefined) {
      this.allowPaging = value;
      this.hmProperty['allowPaging'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 页大小(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPageSize(value: number) {
    if (value != undefined) {
      this.pageSize = value;
      this.hmProperty['pageSize'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 自动生成列(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAutoGenerateColumns(value: boolean) {
    if (value != undefined) {
      this.autoGenerateColumns = value;
      this.hmProperty['autoGenerateColumns'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 允许排序(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetAllowSorting(value: boolean) {
    if (value != undefined) {
      this.allowSorting = value;
      this.hmProperty['allowSorting'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否单选框(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsRadio(value: boolean) {
    if (value != undefined) {
      this.isRadio = value;
      this.hmProperty['isRadio'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否复选框(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsCheck(value: boolean) {
    if (value != undefined) {
      this.isCheck = value;
      this.hmProperty['isCheck'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有修改按钮(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveUpdBtn(value: boolean) {
    if (value != undefined) {
      this.isHaveUpdBtn = value;
      this.hmProperty['isHaveUpdBtn'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有删除按钮(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveDelBtn(value: boolean) {
    if (value != undefined) {
      this.isHaveDelBtn = value;
      this.hmProperty['isHaveDelBtn'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有详细按钮(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveDetailBtn(value: boolean) {
    if (value != undefined) {
      this.isHaveDetailBtn = value;
      this.hmProperty['isHaveDetailBtn'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否跳页(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsJumpPage(value: boolean) {
    if (value != undefined) {
      this.isJumpPage = value;
      this.hmProperty['isJumpPage'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否生成DG在表中(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsInTab(value: boolean) {
    if (value != undefined) {
      this.isInTab = value;
      this.hmProperty['isInTab'] = true;
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
   * 数据源类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.sqlDsTypeId = value;
      this.hmProperty['sqlDsTypeId'] = true;
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
      case clsViewDgInfoEN.con_ViewDgID:
        return this.viewDgID;
      case clsViewDgInfoEN.con_ViewDgName:
        return this.viewDgName;
      case clsViewDgInfoEN.con_ViewId:
        return this.viewId;
      case clsViewDgInfoEN.con_SqlDsId:
        return this.sqlDsId;
      case clsViewDgInfoEN.con_DgStyleId:
        return this.dgStyleId;
      case clsViewDgInfoEN.con_Style:
        return this.style;
      case clsViewDgInfoEN.con_Runat:
        return this.runat;
      case clsViewDgInfoEN.con_FontSize:
        return this.fontSize;
      case clsViewDgInfoEN.con_FontName:
        return this.fontName;
      case clsViewDgInfoEN.con_Width:
        return this.width;
      case clsViewDgInfoEN.con_Height:
        return this.height;
      case clsViewDgInfoEN.con_AllowPaging:
        return this.allowPaging;
      case clsViewDgInfoEN.con_PageSize:
        return this.pageSize;
      case clsViewDgInfoEN.con_AutoGenerateColumns:
        return this.autoGenerateColumns;
      case clsViewDgInfoEN.con_AllowSorting:
        return this.allowSorting;
      case clsViewDgInfoEN.con_IsRadio:
        return this.isRadio;
      case clsViewDgInfoEN.con_IsCheck:
        return this.isCheck;
      case clsViewDgInfoEN.con_IsHaveUpdBtn:
        return this.isHaveUpdBtn;
      case clsViewDgInfoEN.con_IsHaveDelBtn:
        return this.isHaveDelBtn;
      case clsViewDgInfoEN.con_IsHaveDetailBtn:
        return this.isHaveDetailBtn;
      case clsViewDgInfoEN.con_IsJumpPage:
        return this.isJumpPage;
      case clsViewDgInfoEN.con_IsInTab:
        return this.isInTab;
      case clsViewDgInfoEN.con_StyleZindex:
        return this.styleZindex;
      case clsViewDgInfoEN.con_StyleLeft:
        return this.styleLeft;
      case clsViewDgInfoEN.con_StylePosition:
        return this.stylePosition;
      case clsViewDgInfoEN.con_StyleTop:
        return this.styleTop;
      case clsViewDgInfoEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewDgInfo]中不存在!`;
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
      case clsViewDgInfoEN.con_ViewDgID:
        this.viewDgID = strValue;
        this.hmProperty['viewDgID'] = true;
        break;
      case clsViewDgInfoEN.con_ViewDgName:
        this.viewDgName = strValue;
        this.hmProperty['viewDgName'] = true;
        break;
      case clsViewDgInfoEN.con_ViewId:
        this.viewId = strValue;
        this.hmProperty['viewId'] = true;
        break;
      case clsViewDgInfoEN.con_SqlDsId:
        this.sqlDsId = strValue;
        this.hmProperty['sqlDsId'] = true;
        break;
      case clsViewDgInfoEN.con_DgStyleId:
        this.dgStyleId = strValue;
        this.hmProperty['dgStyleId'] = true;
        break;
      case clsViewDgInfoEN.con_Style:
        this.style = strValue;
        this.hmProperty['style'] = true;
        break;
      case clsViewDgInfoEN.con_Runat:
        this.runat = strValue;
        this.hmProperty['runat'] = true;
        break;
      case clsViewDgInfoEN.con_FontSize:
        this.fontSize = strValue;
        this.hmProperty['fontSize'] = true;
        break;
      case clsViewDgInfoEN.con_FontName:
        this.fontName = strValue;
        this.hmProperty['fontName'] = true;
        break;
      case clsViewDgInfoEN.con_Width:
        this.width = Number(strValue);
        this.hmProperty['width'] = true;
        break;
      case clsViewDgInfoEN.con_Height:
        this.height = Number(strValue);
        this.hmProperty['height'] = true;
        break;
      case clsViewDgInfoEN.con_AllowPaging:
        this.allowPaging = Boolean(strValue);
        this.hmProperty['allowPaging'] = true;
        break;
      case clsViewDgInfoEN.con_PageSize:
        this.pageSize = Number(strValue);
        this.hmProperty['pageSize'] = true;
        break;
      case clsViewDgInfoEN.con_AutoGenerateColumns:
        this.autoGenerateColumns = Boolean(strValue);
        this.hmProperty['autoGenerateColumns'] = true;
        break;
      case clsViewDgInfoEN.con_AllowSorting:
        this.allowSorting = Boolean(strValue);
        this.hmProperty['allowSorting'] = true;
        break;
      case clsViewDgInfoEN.con_IsRadio:
        this.isRadio = Boolean(strValue);
        this.hmProperty['isRadio'] = true;
        break;
      case clsViewDgInfoEN.con_IsCheck:
        this.isCheck = Boolean(strValue);
        this.hmProperty['isCheck'] = true;
        break;
      case clsViewDgInfoEN.con_IsHaveUpdBtn:
        this.isHaveUpdBtn = Boolean(strValue);
        this.hmProperty['isHaveUpdBtn'] = true;
        break;
      case clsViewDgInfoEN.con_IsHaveDelBtn:
        this.isHaveDelBtn = Boolean(strValue);
        this.hmProperty['isHaveDelBtn'] = true;
        break;
      case clsViewDgInfoEN.con_IsHaveDetailBtn:
        this.isHaveDetailBtn = Boolean(strValue);
        this.hmProperty['isHaveDetailBtn'] = true;
        break;
      case clsViewDgInfoEN.con_IsJumpPage:
        this.isJumpPage = Boolean(strValue);
        this.hmProperty['isJumpPage'] = true;
        break;
      case clsViewDgInfoEN.con_IsInTab:
        this.isInTab = Boolean(strValue);
        this.hmProperty['isInTab'] = true;
        break;
      case clsViewDgInfoEN.con_StyleZindex:
        this.styleZindex = Number(strValue);
        this.hmProperty['styleZindex'] = true;
        break;
      case clsViewDgInfoEN.con_StyleLeft:
        this.styleLeft = Number(strValue);
        this.hmProperty['styleLeft'] = true;
        break;
      case clsViewDgInfoEN.con_StylePosition:
        this.stylePosition = strValue;
        this.hmProperty['stylePosition'] = true;
        break;
      case clsViewDgInfoEN.con_StyleTop:
        this.styleTop = Number(strValue);
        this.hmProperty['styleTop'] = true;
        break;
      case clsViewDgInfoEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        this.hmProperty['sqlDsTypeId'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewDgInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public viewDgID = ''; //界面DgId
  public viewDgName = ''; //界面Dg名称
  public viewId = ''; //界面Id
  public sqlDsId = ''; //数据源表/视图Id
  public dgStyleId = ''; //DG模式ID
  public style = ''; //类型
  public runat = ''; //运行在
  public fontSize = ''; //字号
  public fontName = ''; //字体
  public width = 0; //宽
  public height = 0; //高度
  public allowPaging = false; //允许分页
  public pageSize = 0; //页大小
  public autoGenerateColumns = false; //自动生成列
  public allowSorting = false; //允许排序
  public isRadio = false; //是否单选框
  public isCheck = false; //是否复选框
  public isHaveUpdBtn = false; //是否有修改按钮
  public isHaveDelBtn = false; //是否有删除按钮
  public isHaveDetailBtn = false; //是否有详细按钮
  public isJumpPage = false; //是否跳页
  public isInTab = false; //是否生成DG在表中
  public styleZindex = 0; //Style_Zindex
  public styleLeft = 0; //Style_Left
  public stylePosition = ''; //Style_Position
  public styleTop = 0; //Style_Top
  public sqlDsTypeId = ''; //数据源类型Id

  /**
   * 常量:"ViewDgID"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewDgID(): string {
    return 'viewDgID';
  } //界面DgId

  /**
   * 常量:"ViewDgName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewDgName(): string {
    return 'viewDgName';
  } //界面Dg名称

  /**
   * 常量:"ViewId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewId(): string {
    return 'viewId';
  } //界面Id

  /**
   * 常量:"SqlDsId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlDsId(): string {
    return 'sqlDsId';
  } //数据源表/视图Id

  /**
   * 常量:"DgStyleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DgStyleId(): string {
    return 'dgStyleId';
  } //DG模式ID

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
   * 常量:"AllowPaging"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AllowPaging(): string {
    return 'allowPaging';
  } //允许分页

  /**
   * 常量:"PageSize"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PageSize(): string {
    return 'pageSize';
  } //页大小

  /**
   * 常量:"AutoGenerateColumns"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AutoGenerateColumns(): string {
    return 'autoGenerateColumns';
  } //自动生成列

  /**
   * 常量:"AllowSorting"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_AllowSorting(): string {
    return 'allowSorting';
  } //允许排序

  /**
   * 常量:"IsRadio"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsRadio(): string {
    return 'isRadio';
  } //是否单选框

  /**
   * 常量:"IsCheck"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsCheck(): string {
    return 'isCheck';
  } //是否复选框

  /**
   * 常量:"IsHaveUpdBtn"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveUpdBtn(): string {
    return 'isHaveUpdBtn';
  } //是否有修改按钮

  /**
   * 常量:"IsHaveDelBtn"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveDelBtn(): string {
    return 'isHaveDelBtn';
  } //是否有删除按钮

  /**
   * 常量:"IsHaveDetailBtn"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveDetailBtn(): string {
    return 'isHaveDetailBtn';
  } //是否有详细按钮

  /**
   * 常量:"IsJumpPage"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsJumpPage(): string {
    return 'isJumpPage';
  } //是否跳页

  /**
   * 常量:"IsInTab"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsInTab(): string {
    return 'isInTab';
  } //是否生成DG在表中

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
   * 常量:"SqlDsTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

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
