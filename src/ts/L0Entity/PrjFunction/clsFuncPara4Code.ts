/**
 * 类名:clsFuncPara4Code
 * 表名:FuncPara4Code(00050384)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/12 08:08:09
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 函数参数4Code(FuncPara4Code)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsFuncPara4Code {
  public static _CurrTabName = 'FuncPara4Code'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FuncParaId4Code'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'funcParaId4Code',
    'paraName',
    'paraCnName',
    'dataTypeId',
    'parameterType',
    'parameterTypeFullName',
    'isByRef',
    'prjId',
    'isTemplate',
    'funcPurposeId',
    'updDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public funcParaId4Code = ''; //函数参数Id
  public paraName = ''; //参数名
  public paraCnName = ''; //参数中文名
  public dataTypeId = ''; //数据类型Id
  public parameterType = ''; //参数类型
  public parameterTypeFullName = ''; //参数类型全名
  public isByRef = false; //是否引用型参数
  public prjId = ''; //工程ID
  public isTemplate = false; //是否模板
  public funcPurposeId = ''; //函数用途Id
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
      case clsFuncPara4Code.con_FuncParaId4Code:
        return this.funcParaId4Code;
      case clsFuncPara4Code.con_ParaName:
        return this.paraName;
      case clsFuncPara4Code.con_ParaCnName:
        return this.paraCnName;
      case clsFuncPara4Code.con_DataTypeId:
        return this.dataTypeId;
      case clsFuncPara4Code.con_ParameterType:
        return this.parameterType;
      case clsFuncPara4Code.con_ParameterTypeFullName:
        return this.parameterTypeFullName;
      case clsFuncPara4Code.con_IsByRef:
        return this.isByRef;
      case clsFuncPara4Code.con_PrjId:
        return this.prjId;
      case clsFuncPara4Code.con_IsTemplate:
        return this.isTemplate;
      case clsFuncPara4Code.con_FuncPurposeId:
        return this.funcPurposeId;
      case clsFuncPara4Code.con_UpdDate:
        return this.updDate;
      case clsFuncPara4Code.con_UpdUser:
        return this.updUser;
      case clsFuncPara4Code.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[FuncPara4Code]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"FuncParaId4Code"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FuncParaId4Code(): string {
    return 'funcParaId4Code';
  } //函数参数Id

  /**
   * 常量:"ParaName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ParaName(): string {
    return 'paraName';
  } //参数名

  /**
   * 常量:"ParaCnName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ParaCnName(): string {
    return 'paraCnName';
  } //参数中文名

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"ParameterType"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ParameterType(): string {
    return 'parameterType';
  } //参数类型

  /**
   * 常量:"ParameterTypeFullName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ParameterTypeFullName(): string {
    return 'parameterTypeFullName';
  } //参数类型全名

  /**
   * 常量:"IsByRef"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsByRef(): string {
    return 'isByRef';
  } //是否引用型参数

  /**
   * 常量:"PrjId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"IsTemplate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsTemplate(): string {
    return 'isTemplate';
  } //是否模板

  /**
   * 常量:"FuncPurposeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FuncPurposeId(): string {
    return 'funcPurposeId';
  } //函数用途Id

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
