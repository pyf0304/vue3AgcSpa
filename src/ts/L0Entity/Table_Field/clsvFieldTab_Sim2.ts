export class clsvFieldTab_Sim2 {
  public static _CurrTabName = 'vFieldTab_Sim2'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 6;
  public static AttributeName = [
    'fldId',
    'fldName',
    'caption',
    'dataTypeId',
    'homologousFldId',
    'prjId',
    'fldLength',
    'fldPrecision',
  ];
  //以下是属性变量
  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fldId = ''; //字段Id
  public fldName = ''; //字段名
  public caption = ''; //标题
  public dataTypeId = ''; //数据类型Id
  public homologousFldId = ''; //同源字段Id
  public prjId = ''; //工程ID
  public fldLength = 0; //字段长度
  public fldPrecision = 0; //精确度
  /**
   * 常量:"FldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"FldName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"Caption"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Caption(): string {
    return 'caption';
  } //标题

  /**
   * 常量:"DataTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"HomologousFldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_HomologousFldId(): string {
    return 'homologousFldId';
  } //同源字段Id

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID
}
