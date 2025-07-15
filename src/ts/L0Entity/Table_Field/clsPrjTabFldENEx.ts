/**
 * 类名:clsPrjTabFldENEx
 * 表名:PrjTabFld(00050019)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 22:28:00
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 工程表字段(PrjTabFld)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';

export class clsPrjTabFldENEx extends clsPrjTabFldEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      case clsPrjTabFldENEx.con_FldName:
        return this.fldName;
      case clsPrjTabFldENEx.con_FldNameEx:
        return this.fldNameEx;
      case clsPrjTabFldENEx.con_Caption:
        return this.caption;
      case clsPrjTabFldENEx.con_PrimaryTypeName:
        return this.primaryTypeName;
      case clsPrjTabFldENEx.con_FieldTypeName:
        return this.fieldTypeName;
      case clsPrjTabFldENEx.con_DataTypeName:
        return this.dataTypeName;
      case clsPrjTabFldENEx.con_FldLength:
        return this.fldLength;
      case clsPrjTabFldENEx.con_TabName:
        return this.tabName;
      case clsPrjTabFldENEx.con_ForeignKeyTabName:
        return this.foreignKeyTabName;
      case clsPrjTabFldENEx.con_DataTypeId:
        return this.dataTypeId;
      case clsPrjTabFldENEx.con_FldPrecision:
        return this.fldPrecision;
      case clsPrjTabFldENEx.con_ErrorLevelId:
        return this.errorLevelId;
      case clsPrjTabFldENEx.con_TabCheckErrorTypeId:
        return this.tabCheckErrorTypeId;
      case clsPrjTabFldENEx.con_TypeNameSql:
        return this.typeNameSql;
      case clsPrjTabFldENEx.con_LengthSql:
        return this.lengthSql;
      case clsPrjTabFldENEx.con_PrecisionSql:
        return this.precisionSql;
      case clsPrjTabFldENEx.con_IsNullableSql:
        return this.isNullableSql;
      case clsPrjTabFldENEx.con_SourceTabName:
        return this.sourceTabName;
      case clsPrjTabFldENEx.con_ConvFldName:
        return this.convFldName;
      case clsPrjTabFldENEx.con_TrClass:
        return this.trClass;
      case clsPrjTabFldENEx.con_TdClass:
        return this.tdClass;
      case clsPrjTabFldENEx.con_IsNeedAddConvFldName:
        return this.isNeedAddConvFldName;
      case clsPrjTabFldENEx.con_DnPathDivStr:
        return this.dnPathDivStr;
      case clsPrjTabFldENEx.con_Checked:
        return this.checked;
      case clsPrjTabFldENEx.con_CmPrjId:
        return this.cmPrjId;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"FldNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldNameEx(): string {
    return 'fldNameEx';
  } //字段名Ex

  /**
   * 常量:"Caption"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_Caption(): string {
    return 'caption';
  } //标题

  /**
   * 常量:"PrimaryTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrimaryTypeName(): string {
    return 'primaryTypeName';
  } //主键类型名

  /**
   * 常量:"FieldTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FieldTypeName(): string {
    return 'fieldTypeName';
  } //字段类型名

  /**
   * 常量:"DataTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataTypeName(): string {
    return 'dataTypeName';
  } //数据类型名称

  /**
   * 常量:"FldLength"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldLength(): string {
    return 'fldLength';
  } //字段长度

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"ForeignKeyTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ForeignKeyTabName(): string {
    return 'foreignKeyTabName';
  } //表名

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"FldPrecision"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_FldPrecision(): string {
    return 'fldPrecision';
  } //精确度

  /**
   * 常量:"ErrorLevelId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ErrorLevelId(): string {
    return 'errorLevelId';
  } //错误等级Id

  /**
   * 常量:"TabCheckErrorTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TabCheckErrorTypeId(): string {
    return 'tabCheckErrorTypeId';
  } //表检查错误类型Id

  /**
   * 常量:"TypeNameSql"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TypeNameSql(): string {
    return 'typeNameSql';
  } //TypeName_Sql

  /**
   * 常量:"LengthSql"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_LengthSql(): string {
    return 'lengthSql';
  } //Length_Sql

  /**
   * 常量:"PrecisionSql"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PrecisionSql(): string {
    return 'precisionSql';
  } //Precision_Sql

  /**
   * 常量:"IsNullableSql"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsNullableSql(): string {
    return 'isNullableSql';
  } //Is_Nullable_SQL

  /**
   * 常量:"SourceTabName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_SourceTabName(): string {
    return 'sourceTabName';
  } //SourceTabName

  /**
   * 常量:"ConvFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ConvFldName(): string {
    return 'convFldName';
  } //转换字段名

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TrClass(): string {
    return 'trClass';
  } //TrClass

  /**
   * 常量:"TdClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_TdClass(): string {
    return 'tdClass';
  } //TdClass

  /**
   * 常量:"IsNeedAddConvFldName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_IsNeedAddConvFldName(): string {
    return 'isNeedAddConvFldName';
  } //是否需要添加转换字段

  /**
   * 常量:"DnPathDivStr"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DnPathDivStr(): string {
    return 'dnPathDivStr';
  } //路径DivStr

  /**
   * 常量:"Checked"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_Checked(): string {
    return 'checked';
  } //是否选择

  /**
   * 常量:"CmPrjId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CmPrjId(): string {
    return 'cmPrjId';
  } //Cm工程Id

  public fldName = ''; //字段名
  public fldNameEx = ''; //字段名Ex
  public caption = ''; //标题
  public primaryTypeName = ''; //主键类型名
  public fieldTypeName = ''; //字段类型名
  public dataTypeName = ''; //数据类型名称
  public fldLength = 0; //字段长度
  public tabName = ''; //表名
  public foreignKeyTabName = ''; //表名
  public dataTypeId = ''; //数据类型Id
  public fldPrecision = 0; //精确度
  public errorLevelId = 0; //错误等级Id
  public tabCheckErrorTypeId = ''; //表检查错误类型Id
  public typeNameSql = ''; //TypeName_Sql
  public lengthSql = 0; //Length_Sql
  public precisionSql = 0; //Precision_Sql
  public isNullableSql = false; //Is_Nullable_SQL
  public sourceTabName = ''; //SourceTabName
  public convFldName = ''; //转换字段名
  public trClass = ''; //TrClass
  public tdClass = ''; //TdClass
  public isNeedAddConvFldName = false; //是否需要添加转换字段
  public dnPathDivStr = ''; //路径DivStr
  public checked = false; //是否选择
  public cmPrjId = ''; //Cm工程Id
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsPrjTabFldENEx();
    const instance = new clsPrjTabFldENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
