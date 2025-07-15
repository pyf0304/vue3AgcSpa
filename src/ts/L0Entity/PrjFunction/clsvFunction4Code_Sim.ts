export class clsvFunction4Code_Sim {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static _CurrTabName = 'vFunction4Code_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncId4Code'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'funcId4Code',
    'funcName4Code',
    'funcCHName4Code',
    'funcGCTypeId',
    'applicationTypeId',
    'funcPurposeId',
    'funcTypeId',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public funcId4Code = ''; //函数Id4Code
  public funcName4Code = ''; //函数名4Code
  public funcCHName4Code = ''; //函数中文名4Code
  public funcGCTypeId = ''; //函数生成代码类型Id
  public applicationTypeId = 0; //应用程序类型ID
  public funcPurposeId = ''; //函数用途Id
  public funcTypeId = ''; //函数类型Id

  /**
   * 常量:"FuncId4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncId4Code(): string {
    return 'funcId4Code';
  } //函数Id4Code

  /**
   * 常量:"FuncName4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncName4Code(): string {
    return 'funcName4Code';
  } //函数名4Code

  /**
   * 常量:"FuncCHName4Code"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncCHName4Code(): string {
    return 'funcCHName4Code';
  } //函数中文名4Code

  /**
   * 常量:"FuncGCTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncGCTypeId(): string {
    return 'funcGCTypeId';
  } //函数生成代码类型Id

  /**
   * 常量:"ApplicationTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"FuncPurposeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncPurposeId(): string {
    return 'funcPurposeId';
  } //函数用途Id

  /**
   * 常量:"FuncTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncTypeId(): string {
    return 'funcTypeId';
  } //函数类型Id
}
