/**
 * 类名:clsvPrjTabKeyFldEN
 * 表名:vPrjTabKeyFld(00050286)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:46
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
 * vPrjTabKeyFld(vPrjTabKeyFld)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvPrjTabKeyFldEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vPrjTabKeyFld'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TabId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 7;
  public static AttributeName = [
    'tabId',
    'fldId',
    'fieldTypeId',
    'primaryTypeId',
    'primaryTypeName',
    'keyFldName',
    'prjId',
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
      case clsvPrjTabKeyFldEN.con_TabId:
        return this.tabId;
      case clsvPrjTabKeyFldEN.con_FldId:
        return this.fldId;
      case clsvPrjTabKeyFldEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsvPrjTabKeyFldEN.con_PrimaryTypeId:
        return this.primaryTypeId;
      case clsvPrjTabKeyFldEN.con_PrimaryTypeName:
        return this.primaryTypeName;
      case clsvPrjTabKeyFldEN.con_KeyFldName:
        return this.keyFldName;
      case clsvPrjTabKeyFldEN.con_PrjId:
        return this.prjId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjTabKeyFld]中不存在!`;
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
      case clsvPrjTabKeyFldEN.con_TabId:
        this.tabId = strValue;
        break;
      case clsvPrjTabKeyFldEN.con_FldId:
        this.fldId = strValue;
        break;
      case clsvPrjTabKeyFldEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        break;
      case clsvPrjTabKeyFldEN.con_PrimaryTypeId:
        this.primaryTypeId = strValue;
        break;
      case clsvPrjTabKeyFldEN.con_PrimaryTypeName:
        this.primaryTypeName = strValue;
        break;
      case clsvPrjTabKeyFldEN.con_KeyFldName:
        this.keyFldName = strValue;
        break;
      case clsvPrjTabKeyFldEN.con_PrjId:
        this.prjId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vPrjTabKeyFld]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public tabId = ''; //表ID
  public fldId = ''; //字段Id
  public fieldTypeId = ''; //字段类型Id
  public primaryTypeId = ''; //主键类型ID
  public primaryTypeName = ''; //主键类型名
  public keyFldName = ''; //关键字段名
  public prjId = ''; //工程ID

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"FldId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"FieldTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"PrimaryTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryTypeId(): string {
    return 'primaryTypeId';
  } //主键类型ID

  /**
   * 常量:"PrimaryTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrimaryTypeName(): string {
    return 'primaryTypeName';
  } //主键类型名

  /**
   * 常量:"KeyFldName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyFldName(): string {
    return 'keyFldName';
  } //关键字段名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

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
