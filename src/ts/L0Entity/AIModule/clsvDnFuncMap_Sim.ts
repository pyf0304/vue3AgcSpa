/**
 * 类名:clsvDnFuncMap_Sim
 * 表名:vDnFuncMap_Sim(00050625)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 01:54:54
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * v结点函数映射_Sim(vDnFuncMap_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsvDnFuncMap_Sim {
  public static _CurrTabName = 'vDnFuncMap_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DnFuncMapId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'dnFuncMapId',
    'inDataNodeId',
    'outDataNodeId',
    'associationMappingId',
    'funcMapModeId',
    'tabId',
    'dnFunctionId',
    'prjId',
    'usedTimes',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public dnFuncMapId = ''; //函数映射Id
  public inDataNodeId = 0; //In数据结点Id
  public outDataNodeId = 0; //Out数据结点Id
  public associationMappingId = ''; //关联关系映射Id
  public funcMapModeId = ''; //函数映射模式Id
  public tabId = ''; //表ID
  public dnFunctionId = ''; //DN函数Id
  public prjId = ''; //工程ID
  public usedTimes = 0; //使用次数

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvDnFuncMap_Sim.con_DnFuncMapId:
        return this.dnFuncMapId;
      case clsvDnFuncMap_Sim.con_InDataNodeId:
        return this.inDataNodeId;
      case clsvDnFuncMap_Sim.con_OutDataNodeId:
        return this.outDataNodeId;
      case clsvDnFuncMap_Sim.con_AssociationMappingId:
        return this.associationMappingId;
      case clsvDnFuncMap_Sim.con_FuncMapModeId:
        return this.funcMapModeId;
      case clsvDnFuncMap_Sim.con_TabId:
        return this.tabId;
      case clsvDnFuncMap_Sim.con_DnFunctionId:
        return this.dnFunctionId;
      case clsvDnFuncMap_Sim.con_PrjId:
        return this.prjId;
      case clsvDnFuncMap_Sim.con_UsedTimes:
        return this.usedTimes;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDnFuncMap_Sim]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"DnFuncMapId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DnFuncMapId(): string {
    return 'dnFuncMapId';
  } //函数映射Id

  /**
   * 常量:"InDataNodeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_InDataNodeId(): string {
    return 'inDataNodeId';
  } //In数据结点Id

  /**
   * 常量:"OutDataNodeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_OutDataNodeId(): string {
    return 'outDataNodeId';
  } //Out数据结点Id

  /**
   * 常量:"AssociationMappingId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_AssociationMappingId(): string {
    return 'associationMappingId';
  } //关联关系映射Id

  /**
   * 常量:"FuncMapModeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FuncMapModeId(): string {
    return 'funcMapModeId';
  } //函数映射模式Id

  /**
   * 常量:"TabId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"DnFunctionId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DnFunctionId(): string {
    return 'dnFunctionId';
  } //DN函数Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UsedTimes"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UsedTimes(): string {
    return 'usedTimes';
  } //使用次数
}
