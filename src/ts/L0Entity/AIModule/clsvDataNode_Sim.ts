/**
 * 类名:clsvDataNode_Sim
 * 表名:vDataNode_Sim(00050592)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/17 01:53:06
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
 * vDataNode_Sim(vDataNode_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsvDataNode_Sim {
  public static _CurrTabName = 'vDataNode_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'DataNodeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'dataNodeId',
    'dataNodeName',
    'tabId',
    'fldId',
    'keyFldLst',
    'dataNodeTypeId',
    'versionNo',
    'prjId',
    'usedTimes',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public dataNodeId = 0; //数据结点Id
  public dataNodeName = ''; //数据结点名
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public keyFldLst = ''; //关键字段Id列表
  public dataNodeTypeId = ''; //数据结点类型Id
  public versionNo = 0; //版本号
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
      case clsvDataNode_Sim.con_DataNodeId:
        return this.dataNodeId;
      case clsvDataNode_Sim.con_DataNodeName:
        return this.dataNodeName;
      case clsvDataNode_Sim.con_TabId:
        return this.tabId;
      case clsvDataNode_Sim.con_FldId:
        return this.fldId;
      case clsvDataNode_Sim.con_KeyFldLst:
        return this.keyFldLst;
      case clsvDataNode_Sim.con_DataNodeTypeId:
        return this.dataNodeTypeId;
      case clsvDataNode_Sim.con_VersionNo:
        return this.versionNo;
      case clsvDataNode_Sim.con_PrjId:
        return this.prjId;
      case clsvDataNode_Sim.con_UsedTimes:
        return this.usedTimes;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vDataNode_Sim]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"DataNodeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DataNodeId(): string {
    return 'dataNodeId';
  } //数据结点Id

  /**
   * 常量:"DataNodeName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DataNodeName(): string {
    return 'dataNodeName';
  } //数据结点名

  /**
   * 常量:"TabId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"KeyFldLst"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_KeyFldLst(): string {
    return 'keyFldLst';
  } //关键字段Id列表

  /**
   * 常量:"DataNodeTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DataNodeTypeId(): string {
    return 'dataNodeTypeId';
  } //数据结点类型Id

  /**
   * 常量:"VersionNo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_VersionNo(): string {
    return 'versionNo';
  } //版本号

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
