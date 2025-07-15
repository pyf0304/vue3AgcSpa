/**
 * 类名:clsApplicationType
 * 表名:ApplicationType(00050127)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/05 08:47:52
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * 应用程序类型(ApplicationType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsApplicationType {
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
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsApplicationType.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsApplicationType.con_ApplicationTypeName:
        return this.applicationTypeName;
      case clsApplicationType.con_ApplicationTypeSimName:
        return this.applicationTypeSimName;
      case clsApplicationType.con_ApplicationTypeENName:
        return this.applicationTypeENName;
      case clsApplicationType.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsApplicationType.con_ProgLangTypeId2:
        return this.progLangTypeId2;
      case clsApplicationType.con_ProgLangTypeId3:
        return this.progLangTypeId3;
      case clsApplicationType.con_ProgLangTypeId4:
        return this.progLangTypeId4;
      case clsApplicationType.con_ProgLangTypeId5:
        return this.progLangTypeId5;
      case clsApplicationType.con_IsVisible:
        return this.isVisible;
      case clsApplicationType.con_VisitedNum:
        return this.visitedNum;
      case clsApplicationType.con_OrderNum:
        return this.orderNum;
      case clsApplicationType.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ApplicationType]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"ApplicationTypeName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ApplicationTypeName(): string {
    return 'applicationTypeName';
  } //应用程序类型名称

  /**
   * 常量:"ApplicationTypeSimName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ApplicationTypeSimName(): string {
    return 'applicationTypeSimName';
  } //应用程序类型简称

  /**
   * 常量:"ApplicationTypeENName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ApplicationTypeENName(): string {
    return 'applicationTypeENName';
  } //应用类型英文名

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId(): string {
    return 'progLangTypeId';
  } //编程语言类型Id

  /**
   * 常量:"ProgLangTypeId2"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId2(): string {
    return 'progLangTypeId2';
  } //编程语言类型Id2

  /**
   * 常量:"ProgLangTypeId3"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId3(): string {
    return 'progLangTypeId3';
  } //编程语言类型Id3

  /**
   * 常量:"ProgLangTypeId4"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId4(): string {
    return 'progLangTypeId4';
  } //编程语言类型Id4

  /**
   * 常量:"ProgLangTypeId5"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ProgLangTypeId5(): string {
    return 'progLangTypeId5';
  } //编程语言类型Id5

  /**
   * 常量:"IsVisible"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsVisible(): string {
    return 'isVisible';
  } //是否显示

  /**
   * 常量:"VisitedNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_VisitedNum(): string {
    return 'visitedNum';
  } //访问数

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
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
