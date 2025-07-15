export class clsPrjTabFld {
  public static _CurrTabName = 'PrjTabFld'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 27;
  public static AttributeName = [
    'mId',
    'tabId',
    'fldId',
    'prjId',
    'fieldTypeId',
    'isTabNullable',
    'isTabUnique',
    'isTabForeignKey',
    'isSortFld',
    'isGeneProp',
    'isForExtendClass',
    'ctlTypeIdDu',
    'fldDispUnitStyleId',
    'inFldId',
    'dnPathId',
    'keyId4Test',
    'displayFormat',
    'isParentObj',
    'primaryTypeId',
    'foreignKeyTabId',
    'fldOpTypeId',
    'sequenceNumber',
    'memoInTab',
    'errMsg',
    'updDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public prjId = ''; //工程ID
  public fieldTypeId = ''; //字段类型Id
  public isTabNullable = false; //是否表中可空
  public isTabUnique = false; //是否表中唯一
  public isTabForeignKey = false; //是否表外键
  public isSortFld = false; //是否排序字段
  public isGeneProp = false; //是否生成属性
  public isForExtendClass = false; //用于扩展类
  public ctlTypeIdDu = ''; //控件类型Id_du
  public fldDispUnitStyleId = ''; //字段显示单元样式Id
  public inFldId = ''; //In字段Id
  public dnPathId = ''; //DN路径Id
  public keyId4Test = ''; //测试关键字Id
  public displayFormat = ''; //显示格式
  public isParentObj = false; //是否父对象
  public primaryTypeId = ''; //主键类型ID
  public foreignKeyTabId = ''; //外键表ID
  public fldOpTypeId = ''; //字段操作类型Id
  public sequenceNumber = 0; //顺序号
  public memoInTab = ''; //表中说明
  public errMsg = ''; //错误信息
  public updDate = ''; //修改日期
  public updUser = ''; //修改者
  public memo = ''; //说明

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"TabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"FieldTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"IsTabNullable"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTabNullable(): string {
    return 'isTabNullable';
  } //是否表中可空

  /**
   * 常量:"IsTabUnique"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTabUnique(): string {
    return 'isTabUnique';
  } //是否表中唯一

  /**
   * 常量:"IsTabForeignKey"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsTabForeignKey(): string {
    return 'isTabForeignKey';
  } //是否表外键

  /**
   * 常量:"IsSortFld"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsSortFld(): string {
    return 'isSortFld';
  } //是否排序字段

  /**
   * 常量:"IsGeneProp"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsGeneProp(): string {
    return 'isGeneProp';
  } //是否生成属性

  /**
   * 常量:"IsForExtendClass"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsForExtendClass(): string {
    return 'isForExtendClass';
  } //用于扩展类

  /**
   * 常量:"CtlTypeIdDu"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_CtlTypeIdDu(): string {
    return 'ctlTypeIdDu';
  } //控件类型Id_du

  /**
   * 常量:"FldDispUnitStyleId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldDispUnitStyleId(): string {
    return 'fldDispUnitStyleId';
  } //字段显示单元样式Id

  /**
   * 常量:"InFldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InFldId(): string {
    return 'inFldId';
  } //In字段Id

  /**
   * 常量:"DnPathId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DnPathId(): string {
    return 'dnPathId';
  } //DN路径Id

  /**
   * 常量:"KeyId4Test"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_KeyId4Test(): string {
    return 'keyId4Test';
  } //测试关键字Id

  /**
   * 常量:"DisplayFormat"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DisplayFormat(): string {
    return 'displayFormat';
  } //显示格式

  /**
   * 常量:"IsParentObj"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsParentObj(): string {
    return 'isParentObj';
  } //是否父对象

  /**
   * 常量:"PrimaryTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrimaryTypeId(): string {
    return 'primaryTypeId';
  } //主键类型ID

  /**
   * 常量:"ForeignKeyTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ForeignKeyTabId(): string {
    return 'foreignKeyTabId';
  } //外键表ID

  /**
   * 常量:"FldOpTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldOpTypeId(): string {
    return 'fldOpTypeId';
  } //字段操作类型Id

  /**
   * 常量:"SequenceNumber"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SequenceNumber(): string {
    return 'sequenceNumber';
  } //顺序号

  /**
   * 常量:"MemoInTab"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MemoInTab(): string {
    return 'memoInTab';
  } //表中说明

  /**
   * 常量:"ErrMsg"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改者

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明
}
