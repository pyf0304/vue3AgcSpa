/**
 * 类名:clsvFieldTab_Sim2EN
 * 表名:vFieldTab_Sim2(00050608)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:36
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * vFieldTab_Sim2(vFieldTab_Sim2)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvFieldTab_Sim2EN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vFieldTab_Sim2'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'FldId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'fldId',
    'dataTypeId',
    'fldName',
    'caption',
    'fldLength',
    'fldPrecision',
    'prjId',
    'fieldTypeId',
    'homologousFldId',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvFieldTab_Sim2EN.con_FldId:
        return this.fldId;
      case clsvFieldTab_Sim2EN.con_DataTypeId:
        return this.dataTypeId;
      case clsvFieldTab_Sim2EN.con_FldName:
        return this.fldName;
      case clsvFieldTab_Sim2EN.con_Caption:
        return this.caption;
      case clsvFieldTab_Sim2EN.con_FldLength:
        return this.fldLength;
      case clsvFieldTab_Sim2EN.con_FldPrecision:
        return this.fldPrecision;
      case clsvFieldTab_Sim2EN.con_PrjId:
        return this.prjId;
      case clsvFieldTab_Sim2EN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsvFieldTab_Sim2EN.con_HomologousFldId:
        return this.homologousFldId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFieldTab_Sim2]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsvFieldTab_Sim2EN.con_FldId:
        this.fldId = strValue;
        break;
      case clsvFieldTab_Sim2EN.con_DataTypeId:
        this.dataTypeId = strValue;
        break;
      case clsvFieldTab_Sim2EN.con_FldName:
        this.fldName = strValue;
        break;
      case clsvFieldTab_Sim2EN.con_Caption:
        this.caption = strValue;
        break;
      case clsvFieldTab_Sim2EN.con_FldLength:
        this.fldLength = Number(strValue);
        break;
      case clsvFieldTab_Sim2EN.con_FldPrecision:
        this.fldPrecision = Number(strValue);
        break;
      case clsvFieldTab_Sim2EN.con_PrjId:
        this.prjId = strValue;
        break;
      case clsvFieldTab_Sim2EN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        break;
      case clsvFieldTab_Sim2EN.con_HomologousFldId:
        this.homologousFldId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFieldTab_Sim2]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public fldId = ''; //字段Id
  public dataTypeId = ''; //数据类型Id
  public fldName = ''; //字段名
  public caption = ''; //标题
  public fldLength = 0; //字段长度
  public fldPrecision = 0; //精确度
  public prjId = ''; //工程ID
  public fieldTypeId = ''; //字段类型Id
  public homologousFldId = ''; //同源字段Id

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"DataTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataTypeId(): string {
    return 'dataTypeId';
  } //数据类型Id

  /**
   * 常量:"FldName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldName(): string {
    return 'fldName';
  } //字段名

  /**
   * 常量:"Caption"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Caption(): string {
    return 'caption';
  } //标题

  /**
   * 常量:"FldLength"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldLength(): string {
    return 'fldLength';
  } //字段长度

  /**
   * 常量:"FldPrecision"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldPrecision(): string {
    return 'fldPrecision';
  } //精确度

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"HomologousFldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_HomologousFldId(): string {
    return 'homologousFldId';
  } //同源字段Id

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
