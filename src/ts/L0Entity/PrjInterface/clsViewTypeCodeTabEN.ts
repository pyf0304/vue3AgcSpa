/**
 * 类名:clsViewTypeCodeTabEN
 * 表名:ViewTypeCodeTab(00050104)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/01 15:53:35
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 界面类型码(ViewTypeCodeTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewTypeCodeTabEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewTypeCodeTab'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewTypeCode'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 23;
  public static AttributeName = [
    'viewTypeCode',
    'viewTypeName',
    'viewTypeENName',
    'isWinApp',
    'isMobileApp',
    'isWebApp',
    'viewFunction',
    'optProcess',
    'viewDetail',
    'applicationTypeId',
    'isHaveAdd',
    'isHaveUpdate',
    'isHaveDel',
    'isHaveQuery',
    'isHaveExcelExport',
    'isHaveSetExportExcel',
    'isHaveDetail',
    'isHaveExeAdd',
    'isHaveExeUpdate',
    'isHaveMainView',
    'isHaveSubView',
    'orderNum',
    'isUsed',
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
  private mintViewTypeCode = 0; //界面类型码
  private mstrViewTypeName = ''; //界面类型名称
  private mstrViewTypeENName = ''; //ViewTypeENName
  private mbolIsWinApp = false; //IsWinApp
  private mbolIsMobileApp = false; //是否移动终端应用
  private mbolIsWebApp = false; //IsWebApp
  private mstrViewFunction = ''; //界面功能
  private mstrOptProcess = ''; //操作流程
  private mstrViewDetail = ''; //界面说明
  private mintApplicationTypeId = 0; //应用程序类型ID
  private mbolIsHaveAdd = false; //是否有添加
  private mbolIsHaveUpdate = false; //是否有修改
  private mbolIsHaveDel = false; //是否有删除
  private mbolIsHaveQuery = false; //是否有查询
  private mbolIsHaveExcelExport = false; //是否EXCEL导出
  private mbolIsHaveSetExportExcel = false; //是否有设置EXCEL导出
  private mbolIsHaveDetail = false; //是否有详细
  private mbolIsHaveExeAdd = false; //是否有调用添加
  private mbolIsHaveExeUpdate = false; //是否有调用修改
  private mbolIsHaveMainView = false; //是否有主界面
  private mbolIsHaveSubView = false; //是否有子界面
  private mintOrderNum = 0; //序号
  private mbolIsUsed = false; //IsUsed

  /**
   * 界面类型码(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewTypeCode(value: number) {
    if (value != undefined) {
      this.viewTypeCode = value;
      this.hmProperty['viewTypeCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面类型名称(说明:;字段类型:varchar;字段长度:40;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewTypeName(value: string) {
    if (value != undefined) {
      this.viewTypeName = value;
      this.hmProperty['viewTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * ViewTypeENName(说明:;字段类型:varchar;字段长度:40;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewTypeENName(value: string) {
    if (value != undefined) {
      this.viewTypeENName = value;
      this.hmProperty['viewTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsWinApp(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsWinApp(value: boolean) {
    if (value != undefined) {
      this.isWinApp = value;
      this.hmProperty['isWinApp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否移动终端应用(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsMobileApp(value: boolean) {
    if (value != undefined) {
      this.isMobileApp = value;
      this.hmProperty['isMobileApp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsWebApp(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsWebApp(value: boolean) {
    if (value != undefined) {
      this.isWebApp = value;
      this.hmProperty['isWebApp'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面功能(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewFunction(value: string) {
    if (value != undefined) {
      this.viewFunction = value;
      this.hmProperty['viewFunction'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 操作流程(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOptProcess(value: string) {
    if (value != undefined) {
      this.optProcess = value;
      this.hmProperty['optProcess'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewDetail(value: string) {
    if (value != undefined) {
      this.viewDetail = value;
      this.hmProperty['viewDetail'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 应用程序类型ID(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeId(value: number) {
    if (value != undefined) {
      this.applicationTypeId = value;
      this.hmProperty['applicationTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有添加(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveAdd(value: boolean) {
    if (value != undefined) {
      this.isHaveAdd = value;
      this.hmProperty['isHaveAdd'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有修改(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveUpdate(value: boolean) {
    if (value != undefined) {
      this.isHaveUpdate = value;
      this.hmProperty['isHaveUpdate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有删除(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveDel(value: boolean) {
    if (value != undefined) {
      this.isHaveDel = value;
      this.hmProperty['isHaveDel'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有查询(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveQuery(value: boolean) {
    if (value != undefined) {
      this.isHaveQuery = value;
      this.hmProperty['isHaveQuery'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否EXCEL导出(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveExcelExport(value: boolean) {
    if (value != undefined) {
      this.isHaveExcelExport = value;
      this.hmProperty['isHaveExcelExport'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有设置EXCEL导出(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveSetExportExcel(value: boolean) {
    if (value != undefined) {
      this.isHaveSetExportExcel = value;
      this.hmProperty['isHaveSetExportExcel'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有详细(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveDetail(value: boolean) {
    if (value != undefined) {
      this.isHaveDetail = value;
      this.hmProperty['isHaveDetail'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有调用添加(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveExeAdd(value: boolean) {
    if (value != undefined) {
      this.isHaveExeAdd = value;
      this.hmProperty['isHaveExeAdd'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有调用修改(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveExeUpdate(value: boolean) {
    if (value != undefined) {
      this.isHaveExeUpdate = value;
      this.hmProperty['isHaveExeUpdate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有主界面(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveMainView(value: boolean) {
    if (value != undefined) {
      this.isHaveMainView = value;
      this.hmProperty['isHaveMainView'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否有子界面(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsHaveSubView(value: boolean) {
    if (value != undefined) {
      this.isHaveSubView = value;
      this.hmProperty['isHaveSubView'] = true;
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
   * IsUsed(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUsed(value: boolean) {
    if (value != undefined) {
      this.isUsed = value;
      this.hmProperty['isUsed'] = true;
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
      case clsViewTypeCodeTabEN.con_ViewTypeCode:
        return this.viewTypeCode;
      case clsViewTypeCodeTabEN.con_ViewTypeName:
        return this.viewTypeName;
      case clsViewTypeCodeTabEN.con_ViewTypeENName:
        return this.viewTypeENName;
      case clsViewTypeCodeTabEN.con_IsWinApp:
        return this.isWinApp;
      case clsViewTypeCodeTabEN.con_IsMobileApp:
        return this.isMobileApp;
      case clsViewTypeCodeTabEN.con_IsWebApp:
        return this.isWebApp;
      case clsViewTypeCodeTabEN.con_ViewFunction:
        return this.viewFunction;
      case clsViewTypeCodeTabEN.con_OptProcess:
        return this.optProcess;
      case clsViewTypeCodeTabEN.con_ViewDetail:
        return this.viewDetail;
      case clsViewTypeCodeTabEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsViewTypeCodeTabEN.con_IsHaveAdd:
        return this.isHaveAdd;
      case clsViewTypeCodeTabEN.con_IsHaveUpdate:
        return this.isHaveUpdate;
      case clsViewTypeCodeTabEN.con_IsHaveDel:
        return this.isHaveDel;
      case clsViewTypeCodeTabEN.con_IsHaveQuery:
        return this.isHaveQuery;
      case clsViewTypeCodeTabEN.con_IsHaveExcelExport:
        return this.isHaveExcelExport;
      case clsViewTypeCodeTabEN.con_IsHaveSetExportExcel:
        return this.isHaveSetExportExcel;
      case clsViewTypeCodeTabEN.con_IsHaveDetail:
        return this.isHaveDetail;
      case clsViewTypeCodeTabEN.con_IsHaveExeAdd:
        return this.isHaveExeAdd;
      case clsViewTypeCodeTabEN.con_IsHaveExeUpdate:
        return this.isHaveExeUpdate;
      case clsViewTypeCodeTabEN.con_IsHaveMainView:
        return this.isHaveMainView;
      case clsViewTypeCodeTabEN.con_IsHaveSubView:
        return this.isHaveSubView;
      case clsViewTypeCodeTabEN.con_OrderNum:
        return this.orderNum;
      case clsViewTypeCodeTabEN.con_IsUsed:
        return this.isUsed;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewTypeCodeTab]中不存在!`;
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
      case clsViewTypeCodeTabEN.con_ViewTypeCode:
        this.viewTypeCode = Number(strValue);
        this.hmProperty['viewTypeCode'] = true;
        break;
      case clsViewTypeCodeTabEN.con_ViewTypeName:
        this.viewTypeName = strValue;
        this.hmProperty['viewTypeName'] = true;
        break;
      case clsViewTypeCodeTabEN.con_ViewTypeENName:
        this.viewTypeENName = strValue;
        this.hmProperty['viewTypeENName'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsWinApp:
        this.isWinApp = Boolean(strValue);
        this.hmProperty['isWinApp'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsMobileApp:
        this.isMobileApp = Boolean(strValue);
        this.hmProperty['isMobileApp'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsWebApp:
        this.isWebApp = Boolean(strValue);
        this.hmProperty['isWebApp'] = true;
        break;
      case clsViewTypeCodeTabEN.con_ViewFunction:
        this.viewFunction = strValue;
        this.hmProperty['viewFunction'] = true;
        break;
      case clsViewTypeCodeTabEN.con_OptProcess:
        this.optProcess = strValue;
        this.hmProperty['optProcess'] = true;
        break;
      case clsViewTypeCodeTabEN.con_ViewDetail:
        this.viewDetail = strValue;
        this.hmProperty['viewDetail'] = true;
        break;
      case clsViewTypeCodeTabEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveAdd:
        this.isHaveAdd = Boolean(strValue);
        this.hmProperty['isHaveAdd'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveUpdate:
        this.isHaveUpdate = Boolean(strValue);
        this.hmProperty['isHaveUpdate'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveDel:
        this.isHaveDel = Boolean(strValue);
        this.hmProperty['isHaveDel'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveQuery:
        this.isHaveQuery = Boolean(strValue);
        this.hmProperty['isHaveQuery'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveExcelExport:
        this.isHaveExcelExport = Boolean(strValue);
        this.hmProperty['isHaveExcelExport'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveSetExportExcel:
        this.isHaveSetExportExcel = Boolean(strValue);
        this.hmProperty['isHaveSetExportExcel'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveDetail:
        this.isHaveDetail = Boolean(strValue);
        this.hmProperty['isHaveDetail'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveExeAdd:
        this.isHaveExeAdd = Boolean(strValue);
        this.hmProperty['isHaveExeAdd'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveExeUpdate:
        this.isHaveExeUpdate = Boolean(strValue);
        this.hmProperty['isHaveExeUpdate'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveMainView:
        this.isHaveMainView = Boolean(strValue);
        this.hmProperty['isHaveMainView'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsHaveSubView:
        this.isHaveSubView = Boolean(strValue);
        this.hmProperty['isHaveSubView'] = true;
        break;
      case clsViewTypeCodeTabEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsViewTypeCodeTabEN.con_IsUsed:
        this.isUsed = Boolean(strValue);
        this.hmProperty['isUsed'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewTypeCodeTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public viewTypeCode = 0; //界面类型码
  public viewTypeName = ''; //界面类型名称
  public viewTypeENName = ''; //ViewTypeENName
  public isWinApp = false; //IsWinApp
  public isMobileApp = false; //是否移动终端应用
  public isWebApp = false; //IsWebApp
  public viewFunction = ''; //界面功能
  public optProcess = ''; //操作流程
  public viewDetail = ''; //界面说明
  public applicationTypeId = 0; //应用程序类型ID
  public isHaveAdd = false; //是否有添加
  public isHaveUpdate = false; //是否有修改
  public isHaveDel = false; //是否有删除
  public isHaveQuery = false; //是否有查询
  public isHaveExcelExport = false; //是否EXCEL导出
  public isHaveSetExportExcel = false; //是否有设置EXCEL导出
  public isHaveDetail = false; //是否有详细
  public isHaveExeAdd = false; //是否有调用添加
  public isHaveExeUpdate = false; //是否有调用修改
  public isHaveMainView = false; //是否有主界面
  public isHaveSubView = false; //是否有子界面
  public orderNum = 0; //序号
  public isUsed = false; //IsUsed

  /**
   * 常量:"ViewTypeCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewTypeCode(): string {
    return 'viewTypeCode';
  } //界面类型码

  /**
   * 常量:"ViewTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewTypeName(): string {
    return 'viewTypeName';
  } //界面类型名称

  /**
   * 常量:"ViewTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewTypeENName(): string {
    return 'viewTypeENName';
  } //ViewTypeENName

  /**
   * 常量:"IsWinApp"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsWinApp(): string {
    return 'isWinApp';
  } //IsWinApp

  /**
   * 常量:"IsMobileApp"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsMobileApp(): string {
    return 'isMobileApp';
  } //是否移动终端应用

  /**
   * 常量:"IsWebApp"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsWebApp(): string {
    return 'isWebApp';
  } //IsWebApp

  /**
   * 常量:"ViewFunction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewFunction(): string {
    return 'viewFunction';
  } //界面功能

  /**
   * 常量:"OptProcess"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OptProcess(): string {
    return 'optProcess';
  } //操作流程

  /**
   * 常量:"ViewDetail"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewDetail(): string {
    return 'viewDetail';
  } //界面说明

  /**
   * 常量:"ApplicationTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"IsHaveAdd"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveAdd(): string {
    return 'isHaveAdd';
  } //是否有添加

  /**
   * 常量:"IsHaveUpdate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveUpdate(): string {
    return 'isHaveUpdate';
  } //是否有修改

  /**
   * 常量:"IsHaveDel"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveDel(): string {
    return 'isHaveDel';
  } //是否有删除

  /**
   * 常量:"IsHaveQuery"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveQuery(): string {
    return 'isHaveQuery';
  } //是否有查询

  /**
   * 常量:"IsHaveExcelExport"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveExcelExport(): string {
    return 'isHaveExcelExport';
  } //是否EXCEL导出

  /**
   * 常量:"IsHaveSetExportExcel"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveSetExportExcel(): string {
    return 'isHaveSetExportExcel';
  } //是否有设置EXCEL导出

  /**
   * 常量:"IsHaveDetail"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveDetail(): string {
    return 'isHaveDetail';
  } //是否有详细

  /**
   * 常量:"IsHaveExeAdd"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveExeAdd(): string {
    return 'isHaveExeAdd';
  } //是否有调用添加

  /**
   * 常量:"IsHaveExeUpdate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveExeUpdate(): string {
    return 'isHaveExeUpdate';
  } //是否有调用修改

  /**
   * 常量:"IsHaveMainView"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveMainView(): string {
    return 'isHaveMainView';
  } //是否有主界面

  /**
   * 常量:"IsHaveSubView"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsHaveSubView(): string {
    return 'isHaveSubView';
  } //是否有子界面

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"IsUsed"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsUsed(): string {
    return 'isUsed';
  } //IsUsed

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
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export enum enumViewTypeCodeTab {
  Table_Insert_1 = 1, //单表插入
  Table_Update_2 = 2, //单表修改
  Table_Query_3 = 3, //单表查询
  Table_QUDI_4 = 4, //单表的QUDI
  Table_QI_5 = 5, //单表的查询插入
  Table_QU_6 = 6, //单表的查询修改
  Table_QD_7 = 7, //单表的查询删除
  Table_UI_9 = 9, //单表插入修改
  Table_QD_InvokeUI_ListView_11 = 11, //单表组合界面_ListView
  Table_List_14 = 14, //列表界面
  Table_Detail_17 = 17, //详细信息界面
  Table_QUD_18 = 18, //界面查询修改删除
  Table_QD_InvokeUI_GridView_20 = 20, //单表组合界面_GridView
  Table_QUDI4Android_21 = 21, //单表的QUDI4Android
  Table_CRUD4Mvc_22 = 22, //单表的CRUD4Mvc
  Table_CRUD4ISO_23 = 23, //单表的CRUD4ISO
  Table_CRUD4Spa_24 = 24, //单表的CRUD4Spa
  Table_CRUD4MvcAjax_25 = 25, //单表的CRUD4MvcAjax
  Table_CRUD4Mvc_TS_26 = 26, //单表的CRUD4Mvc_TS
  Table_CRUD4Node_27 = 27, //单表的CRUD4Node
  Table_CRUD4Relation_28 = 28, //单表的CRUD4Relation
  Table_CRUD4JsRj_29 = 29, //单表的CRUD4JsRj
  Table_CRUD4Spa_UT_30 = 30, //单表的CRUD4Spa_UT
  Table_CRUD4Vue_31 = 31, //单表的CRUD4Vue
}
