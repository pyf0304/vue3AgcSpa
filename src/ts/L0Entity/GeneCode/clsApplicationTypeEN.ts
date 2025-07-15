/**
 * 类名:clsApplicationTypeEN
 * 表名:ApplicationType(00050127)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:45
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 应用程序类型(ApplicationType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsApplicationTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static PrimaryTypeId = '02'; //identity
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ApplicationType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ApplicationTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'applicationTypeId',
    'applicationTypeName',
    'applicationTypeSimName',
    'applicationTypeENName',
    'progLangTypeId',
    'progLangTypeId2',
    'progLangTypeId3',
    'progLangTypeId4',
    'progLangTypeId5',
    'isVisible',
    'visitedNum',
    'orderNum',
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
  private mintApplicationTypeId = 0; //应用程序类型ID
  private mstrApplicationTypeName = ''; //应用程序类型名称
  private mstrApplicationTypeSimName = ''; //应用程序类型简称
  private mstrApplicationTypeENName = ''; //应用类型英文名
  private mstrProgLangTypeId = ''; //编程语言类型Id
  private mstrProgLangTypeId2 = ''; //编程语言类型Id2
  private mstrProgLangTypeId3 = ''; //编程语言类型Id3
  private mstrProgLangTypeId4 = ''; //编程语言类型Id4
  private mstrProgLangTypeId5 = ''; //编程语言类型Id5
  private mbolIsVisible = false; //是否显示
  private mintVisitedNum = 0; //访问数
  private mintOrderNum = 0; //序号
  private mstrMemo = ''; //说明

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
   * 应用程序类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeName(value: string) {
    if (value != undefined) {
      this.applicationTypeName = value;
      this.hmProperty['applicationTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 应用程序类型简称(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeSimName(value: string) {
    if (value != undefined) {
      this.applicationTypeSimName = value;
      this.hmProperty['applicationTypeSimName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 应用类型英文名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeENName(value: string) {
    if (value != undefined) {
      this.applicationTypeENName = value;
      this.hmProperty['applicationTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 编程语言类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId(value: string) {
    if (value != undefined) {
      this.progLangTypeId = value;
      this.hmProperty['progLangTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 编程语言类型Id2(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId2(value: string) {
    if (value != undefined) {
      this.progLangTypeId2 = value;
      this.hmProperty['progLangTypeId2'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 编程语言类型Id3(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId3(value: string) {
    if (value != undefined) {
      this.progLangTypeId3 = value;
      this.hmProperty['progLangTypeId3'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 编程语言类型Id4(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId4(value: string) {
    if (value != undefined) {
      this.progLangTypeId4 = value;
      this.hmProperty['progLangTypeId4'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 编程语言类型Id5(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetProgLangTypeId5(value: string) {
    if (value != undefined) {
      this.progLangTypeId5 = value;
      this.hmProperty['progLangTypeId5'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsVisible(value: boolean) {
    if (value != undefined) {
      this.isVisible = value;
      this.hmProperty['isVisible'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 访问数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetVisitedNum(value: number) {
    if (value != undefined) {
      this.visitedNum = value;
      this.hmProperty['visitedNum'] = true;
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
      case clsApplicationTypeEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsApplicationTypeEN.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsApplicationTypeEN.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsApplicationTypeEN.con_ApplicationTypeENName:
        return this.applicationTypeENName;
      case clsApplicationTypeEN.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsApplicationTypeEN.con_ProgLangTypeId2:
        return this.progLangTypeId2;
      case clsApplicationTypeEN.con_ProgLangTypeId3:
        return this.progLangTypeId3;
      case clsApplicationTypeEN.con_ProgLangTypeId4:
        return this.progLangTypeId4;
      case clsApplicationTypeEN.con_ProgLangTypeId5:
        return this.progLangTypeId5;
      case clsApplicationTypeEN.con_IsVisible:
        return this.isVisible;
      case clsApplicationTypeEN.con_VisitedNum:
        return this.visitedNum;
      case clsApplicationTypeEN.con_OrderNum:
        return this.orderNum;
      case clsApplicationTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ApplicationType]中不存在!`;
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
      case clsApplicationTypeEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsApplicationTypeEN.con_ApplicationTypeName:
        this.applicationTypeName = strValue;
        this.hmProperty['applicationTypeName'] = true;
        break;
      case clsApplicationTypeEN.con_ApplicationTypeSimName:
        this.applicationTypeSimName = strValue;
        this.hmProperty['applicationTypeSimName'] = true;
        break;
      case clsApplicationTypeEN.con_ApplicationTypeENName:
        this.applicationTypeENName = strValue;
        this.hmProperty['applicationTypeENName'] = true;
        break;
      case clsApplicationTypeEN.con_ProgLangTypeId:
        this.progLangTypeId = strValue;
        this.hmProperty['progLangTypeId'] = true;
        break;
      case clsApplicationTypeEN.con_ProgLangTypeId2:
        this.progLangTypeId2 = strValue;
        this.hmProperty['progLangTypeId2'] = true;
        break;
      case clsApplicationTypeEN.con_ProgLangTypeId3:
        this.progLangTypeId3 = strValue;
        this.hmProperty['progLangTypeId3'] = true;
        break;
      case clsApplicationTypeEN.con_ProgLangTypeId4:
        this.progLangTypeId4 = strValue;
        this.hmProperty['progLangTypeId4'] = true;
        break;
      case clsApplicationTypeEN.con_ProgLangTypeId5:
        this.progLangTypeId5 = strValue;
        this.hmProperty['progLangTypeId5'] = true;
        break;
      case clsApplicationTypeEN.con_IsVisible:
        this.isVisible = Boolean(strValue);
        this.hmProperty['isVisible'] = true;
        break;
      case clsApplicationTypeEN.con_VisitedNum:
        this.visitedNum = Number(strValue);
        this.hmProperty['visitedNum'] = true;
        break;
      case clsApplicationTypeEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsApplicationTypeEN.con_Memo:
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
        strMsg = `字段名:[${strFldName}]在表对象:[ApplicationType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public applicationTypeId = 0; //应用程序类型ID
  public applicationTypeName = ''; //应用程序类型名称
  public applicationTypeSimName = ''; //应用程序类型简称
  public applicationTypeENName = ''; //应用类型英文名
  public progLangTypeId = ''; //编程语言类型Id
  public progLangTypeId2 = ''; //编程语言类型Id2
  public progLangTypeId3 = ''; //编程语言类型Id3
  public progLangTypeId4 = ''; //编程语言类型Id4
  public progLangTypeId5 = ''; //编程语言类型Id5
  public isVisible = false; //是否显示
  public visitedNum = 0; //访问数
  public orderNum = 0; //序号
  public memo = ''; //说明

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"ApplicationTypeSimName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"ApplicationTypeENName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeENName(): string {
    return 'applicationTypeENName';
  } //应用类型英文名

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"ProgLangTypeId2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId2(): string {
    return 'progLangTypeId2';
  } //编程语言类型Id2

  /**
   * 常量:"ProgLangTypeId3"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId3(): string {
    return 'progLangTypeId3';
  } //编程语言类型Id3

  /**
   * 常量:"ProgLangTypeId4"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId4(): string {
    return 'progLangTypeId4';
  } //编程语言类型Id4

  /**
   * 常量:"ProgLangTypeId5"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId5(): string {
    return 'progLangTypeId5';
  } //编程语言类型Id5

  /**
   * 常量:"IsVisible"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

  /**
   * 常量:"VisitedNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_VisitedNum(): string {
    return 'visitedNum';
  } //访问数

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

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
    //return propName in new clsApplicationTypeEN();
    const instance = new clsApplicationTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export enum enumApplicationType {
  Unknown_0 = 0, //未知
  WinApp_1 = 1, //Win应用
  WebApp_2 = 2, //Web应用
  JavaWeb_3 = 3, //JavaWeb应用
  WebSite_4 = 4, //Web网站
  AndroidApp_5 = 5, //AndroidApp
  IOSApp_6 = 6, //IOSApp
  PubApp4WinWeb_7 = 7, //公共应用后台
  SilverLightApp_8 = 8, //SilverLight应用
  Unknown_9 = 9, //未知
  WebSrvAccess_10 = 10, //Web服务访问应用
  TableFldConst_11 = 11, //表字段常量
  WebApiAccess_12 = 12, //WebApi访问应用
  AspMvcApp_13 = 13, //AspMvc应用
  JavaWinApp_14 = 14, //JavaWin应用程序
  SwiftWinApp_15 = 15, //SwiftWin应用程序
  AspMvcApp_TS_16 = 16, //AspMvc应用-TS
  WebApp_JS_17 = 17, //Web应用-JS
  SpaAppInCore_TS_18 = 18, //Spa应用InCore-TS
  WebApi_19 = 19, //WebApi应用
  AspMvcAjaxApp_20 = 20, //AspMvcAjax应用
  AndroidApp_WA_21 = 21, //AndroidApp-WA
  IOSApp_WA_22 = 22, //IOSApp-WA
  PubClass_23 = 23, //公共类
  Neo4JApp_24 = 24, //Neo4J应用
  Neo4JApp4WinWeb_25 = 25, //Neo4J应用后台
  Neo4JWAAccess_26 = 26, //Neo4JWA访问应用
  SpaInCoreUT_27 = 27, //SpaInCoreUT
  WebApp_JS_RJ_28 = 28, //Web应用-JS-RJ
  PubClass_TS_29 = 29, //公共类-TS
  VueAppInCore_TS_30 = 30, //Vue应用InCore-TS
}
