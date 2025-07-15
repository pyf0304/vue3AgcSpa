/**
 * 类名:clsvTabFeatureFlds_SimEN
 * 表名:vTabFeatureFlds_Sim(00050611)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:13
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
 * v表功能字段_Sim(vTabFeatureFlds_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvTabFeatureFlds_SimEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vTabFeatureFlds_Sim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'mId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 10;
  public static AttributeName = [
    'mId',
    'tabFeatureId',
    'fldId',
    'isCurrTab',
    'fieldTypeId',
    'valueGivingModeId',
    'defaultValue',
    'orderNum',
    'inUse',
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
      case clsvTabFeatureFlds_SimEN.con_mId:
        return this.mId;
      case clsvTabFeatureFlds_SimEN.con_TabFeatureId:
        return this.tabFeatureId;
      case clsvTabFeatureFlds_SimEN.con_FldId:
        return this.fldId;
      case clsvTabFeatureFlds_SimEN.con_IsCurrTab:
        return this.isCurrTab;
      case clsvTabFeatureFlds_SimEN.con_FieldTypeId:
        return this.fieldTypeId;
      case clsvTabFeatureFlds_SimEN.con_ValueGivingModeId:
        return this.valueGivingModeId;
      case clsvTabFeatureFlds_SimEN.con_DefaultValue:
        return this.defaultValue;
      case clsvTabFeatureFlds_SimEN.con_OrderNum:
        return this.orderNum;
      case clsvTabFeatureFlds_SimEN.con_InUse:
        return this.inUse;
      case clsvTabFeatureFlds_SimEN.con_PrjId:
        return this.prjId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTabFeatureFlds_Sim]中不存在!`;
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
      case clsvTabFeatureFlds_SimEN.con_mId:
        this.mId = Number(strValue);
        break;
      case clsvTabFeatureFlds_SimEN.con_TabFeatureId:
        this.tabFeatureId = strValue;
        break;
      case clsvTabFeatureFlds_SimEN.con_FldId:
        this.fldId = strValue;
        break;
      case clsvTabFeatureFlds_SimEN.con_IsCurrTab:
        this.isCurrTab = Boolean(strValue);
        break;
      case clsvTabFeatureFlds_SimEN.con_FieldTypeId:
        this.fieldTypeId = strValue;
        break;
      case clsvTabFeatureFlds_SimEN.con_ValueGivingModeId:
        this.valueGivingModeId = strValue;
        break;
      case clsvTabFeatureFlds_SimEN.con_DefaultValue:
        this.defaultValue = strValue;
        break;
      case clsvTabFeatureFlds_SimEN.con_OrderNum:
        this.orderNum = Number(strValue);
        break;
      case clsvTabFeatureFlds_SimEN.con_InUse:
        this.inUse = Boolean(strValue);
        break;
      case clsvTabFeatureFlds_SimEN.con_PrjId:
        this.prjId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTabFeatureFlds_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public mId = 0; //mId
  public tabFeatureId = ''; //表功能Id
  public fldId = ''; //字段Id
  public isCurrTab = false; //是否当前表
  public fieldTypeId = ''; //字段类型Id
  public valueGivingModeId = ''; //给值方式Id
  public defaultValue = ''; //缺省值
  public orderNum = 0; //序号
  public inUse = false; //是否在用
  public prjId = ''; //工程ID

  /**
   * 常量:"mId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_mId(): string {
    return 'mId';
  } //mId

  /**
   * 常量:"TabFeatureId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabFeatureId(): string {
    return 'tabFeatureId';
  } //表功能Id

  /**
   * 常量:"FldId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FldId(): string {
    return 'fldId';
  } //字段Id

  /**
   * 常量:"IsCurrTab"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsCurrTab(): string {
    return 'isCurrTab';
  } //是否当前表

  /**
   * 常量:"FieldTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FieldTypeId(): string {
    return 'fieldTypeId';
  } //字段类型Id

  /**
   * 常量:"ValueGivingModeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ValueGivingModeId(): string {
    return 'valueGivingModeId';
  } //给值方式Id

  /**
   * 常量:"DefaultValue"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DefaultValue(): string {
    return 'defaultValue';
  } //缺省值

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"InUse"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InUse(): string {
    return 'inUse';
  } //是否在用

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
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
