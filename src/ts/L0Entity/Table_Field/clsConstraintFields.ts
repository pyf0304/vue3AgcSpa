/**
 * 类名:clsConstraintFields
 * 表名:ConstraintFields(00050334)
 * 版本:2024.01.24.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/25 17:34:16
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
 * 约束字段(ConstraintFields)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsConstraintFields {
  public static _CurrTabName = 'ConstraintFields'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'mId',
    'prjConstraintId',
    'tabId',
    'fldId',
    'maxValue',
    'minValue',
    'sortTypeId',
    'inUse',
    'orderNum',
    'prjId',
    'updDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public mId = 0; //mId
  public prjConstraintId = ''; //约束表Id
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public maxValue = ''; //最大值
  public minValue = ''; //最小值
  public sortTypeId = ''; //排序类型Id
  public inUse = false; //是否在用
  public orderNum = 0; //序号
  public prjId = ''; //工程ID
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
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
      case clsConstraintFields.con_mId:
        return this.mId;
      case clsConstraintFields.con_PrjConstraintId:
        return this.prjConstraintId;
      case clsConstraintFields.con_TabId:
        return this.tabId;
      case clsConstraintFields.con_FldId:
        return this.fldId;
      case clsConstraintFields.con_MaxValue:
        return this.maxValue;
      case clsConstraintFields.con_MinValue:
        return this.minValue;
      case clsConstraintFields.con_SortTypeId:
        return this.sortTypeId;
      case clsConstraintFields.con_InUse:
        return this.inUse;
      case clsConstraintFields.con_OrderNum:
        return this.orderNum;
      case clsConstraintFields.con_PrjId:
        return this.prjId;
      case clsConstraintFields.con_UpdDate:
        return this.updDate;
      case clsConstraintFields.con_UpdUser:
        return this.updUser;
      case clsConstraintFields.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ConstraintFields]中不存在!`;
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
   * 常量:"PrjConstraintId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjConstraintId(): string {
    return 'prjConstraintId';
  } //约束表Id

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
   * 常量:"MaxValue"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_MaxValue(): string {
    return 'maxValue';
  } //最大值

  /**
   * 常量:"MinValue"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_MinValue(): string {
    return 'minValue';
  } //最小值

  /**
   * 常量:"SortTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_SortTypeId(): string {
    return 'sortTypeId';
  } //排序类型Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明
}
