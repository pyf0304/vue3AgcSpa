/**
 * 类名:clsTabFeatureFlds
 * 表名:TabFeatureFlds(00050455)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/26 23:50:46
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 表功能字段(TabFeatureFlds)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsTabFeatureFlds {
  public static _CurrTabName = 'TabFeatureFlds'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 14;
  public static AttributeName = [
    'mId',
    'tabFeatureId',
    'fldId',
    'isCurrTab',
    'fieldTypeId',
    'funcName',
    'valueGivingModeId',
    'defaultValue',
    'prjId',
    'orderNum',
    'inUse',
    'updUser',
    'updDate',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public mId = 0; //mId
  public tabFeatureId = ''; //表功能Id
  public fldId = ''; //字段Id
  public isCurrTab = false; //是否当前表
  public fieldTypeId = ''; //字段类型Id
  public funcName = ''; //函数名
  public valueGivingModeId = ''; //给值方式Id
  public defaultValue = ''; //缺省值
  public prjId = ''; //工程ID
  public orderNum = 0; //序号
  public inUse = false; //是否在用
  public updUser = ''; //修改者
  public updDate = ''; //修改日期
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
      case clsTabFeatureFlds.con_mId:
        return this.mId;
      case clsTabFeatureFlds.con_TabFeatureId:
        return this.tabFeatureId;
      case clsTabFeatureFlds.con_FldId:
        return this.fldId;
      case clsTabFeatureFlds.con_IsCurrTab:
        return this.isCurrTab;
      case clsTabFeatureFlds.con_FieldTypeId:
        return this.fieldTypeId;
      case clsTabFeatureFlds.con_FuncName:
        return this.funcName;
      case clsTabFeatureFlds.con_ValueGivingModeId:
        return this.valueGivingModeId;
      case clsTabFeatureFlds.con_DefaultValue:
        return this.defaultValue;
      case clsTabFeatureFlds.con_PrjId:
        return this.prjId;
      case clsTabFeatureFlds.con_OrderNum:
        return this.orderNum;
      case clsTabFeatureFlds.con_InUse:
        return this.inUse;
      case clsTabFeatureFlds.con_UpdUser:
        return this.updUser;
      case clsTabFeatureFlds.con_UpdDate:
        return this.updDate;
      case clsTabFeatureFlds.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TabFeatureFlds]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"mId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"TabFeatureId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TabFeatureId(): string {
    return 'tabFeatureId';
  } //表功能Id

  /**
   * 常量:"FldId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"IsCurrTab"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsCurrTab(): string {
    return 'isCurrTab';
  } //是否当前表

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"FuncName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FuncName(): string {
    return 'funcName';
  } //函数名

  /**
   * 常量:"ValueGivingModeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ValueGivingModeId(): string {
    return 'valueGivingModeId';
  } //给值方式Id

  /**
   * 常量:"DefaultValue"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DefaultValue(): string {
    return 'defaultValue';
  } //缺省值

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"InUse"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明
}
