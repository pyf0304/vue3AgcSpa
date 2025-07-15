/**
 * 类名:clsvPrjTab_Sim
 * 表名:vPrjTab_Sim(00050597)
 * 版本:2024.10.22.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/28 16:02:04
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * v工程表_Sim(vPrjTab_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsvPrjTab_Sim {
  public static _CurrTabName = 'vPrjTab_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TabId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 12;
  public static AttributeName = [
    'tabId',
    'tabName',
    'sqlDsTypeId',
    'funcModuleAgcId',
    'tabTypeId',
    'cacheModeId',
    'tabStateId',
    'prjId',
    'dataBaseName',
    'updDate',
    'fldNum',
    'isShare',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public tabId = ''; //表ID
  public tabName = ''; //表名
  public sqlDsTypeId = ''; //数据源类型Id
  public funcModuleAgcId = ''; //功能模块Id
  public tabTypeId = ''; //表类型Id
  public cacheModeId = ''; //缓存方式Id
  public tabStateId = ''; //表状态ID
  public prjId = ''; //工程ID
  public dataBaseName = ''; //数据库名
  public updDate = ''; //修改日期
  public fldNum = 0; //字段数
  public isShare = false; //是否共享

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvPrjTab_Sim.con_TabId:
        return this.tabId;
      case clsvPrjTab_Sim.con_TabName:
        return this.tabName;
      case clsvPrjTab_Sim.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvPrjTab_Sim.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsvPrjTab_Sim.con_TabTypeId:
        return this.tabTypeId;
      case clsvPrjTab_Sim.con_CacheModeId:
        return this.cacheModeId;
      case clsvPrjTab_Sim.con_TabStateId:
        return this.tabStateId;
      case clsvPrjTab_Sim.con_PrjId:
        return this.prjId;
      case clsvPrjTab_Sim.con_DataBaseName:
        return this.dataBaseName;
      case clsvPrjTab_Sim.con_UpdDate:
        return this.updDate;
      case clsvPrjTab_Sim.con_FldNum:
        return this.fldNum;
      case clsvPrjTab_Sim.con_IsShare:
        return this.isShare;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjTab_Sim]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"TabId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"TabName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"FuncModuleAgcId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"TabTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabTypeId(): string {
    return 'tabTypeId';
  } //表类型Id

  /**
   * 常量:"CacheModeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CacheModeId(): string {
    return 'cacheModeId';
  } //缓存方式Id

  /**
   * 常量:"TabStateId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabStateId(): string {
    return 'tabStateId';
  } //表状态ID

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"DataBaseName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DataBaseName(): string {
    return 'dataBaseName';
  } //数据库名

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"FldNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FldNum(): string {
    return 'fldNum';
  } //字段数

  /**
   * 常量:"IsShare"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsShare(): string {
    return 'isShare';
  } //是否共享
}
