/**
 * 类名:clsCMRequirementTypeEN
 * 表名:CMRequirementType(00050082)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:19
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 需求类型(CMRequirementType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCMRequirementTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CMRequirementType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'RequirementTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = [
    'requirementTypeId',
    'requirementTypeName',
    'requirementTypeENName',
    'memo',
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
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mstrRequirementTypeId = ''; //需求类型Id
  private mstrRequirementTypeName = ''; //需求类型名
  private mstrRequirementTypeENName = ''; //需求类型英文名
  private mstrMemo = ''; //说明

  /**
   * 需求类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRequirementTypeId(value: string) {
    if (value != undefined) {
      this.requirementTypeId = value;
      this.hmProperty['requirementTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 需求类型名(说明:;字段类型:varchar;字段长度:30;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRequirementTypeName(value: string) {
    if (value != undefined) {
      this.requirementTypeName = value;
      this.hmProperty['requirementTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 需求类型英文名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRequirementTypeENName(value: string) {
    if (value != undefined) {
      this.requirementTypeENName = value;
      this.hmProperty['requirementTypeENName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
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
      case clsCMRequirementTypeEN.con_RequirementTypeId:
        return this.requirementTypeId;
      case clsCMRequirementTypeEN.con_RequirementTypeName:
        return this.requirementTypeName;
      case clsCMRequirementTypeEN.con_RequirementTypeENName:
        return this.requirementTypeENName;
      case clsCMRequirementTypeEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMRequirementType]中不存在!`;
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
      case clsCMRequirementTypeEN.con_RequirementTypeId:
        this.requirementTypeId = strValue;
        this.hmProperty['requirementTypeId'] = true;
        break;
      case clsCMRequirementTypeEN.con_RequirementTypeName:
        this.requirementTypeName = strValue;
        this.hmProperty['requirementTypeName'] = true;
        break;
      case clsCMRequirementTypeEN.con_RequirementTypeENName:
        this.requirementTypeENName = strValue;
        this.hmProperty['requirementTypeENName'] = true;
        break;
      case clsCMRequirementTypeEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CMRequirementType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public requirementTypeId = ''; //需求类型Id
  public requirementTypeName = ''; //需求类型名
  public requirementTypeENName = ''; //需求类型英文名
  public memo = ''; //说明

  /**
   * 常量:"RequirementTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RequirementTypeId(): string {
    return 'requirementTypeId';
  } //需求类型Id

  /**
   * 常量:"RequirementTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RequirementTypeName(): string {
    return 'requirementTypeName';
  } //需求类型名

  /**
   * 常量:"RequirementTypeENName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_RequirementTypeENName(): string {
    return 'requirementTypeENName';
  } //需求类型英文名

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

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
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumCMRequirementType {
  /**
   * 基本需求
   **/
  static readonly BaseRequirement_0001 = '0001';
  /**
   * 高级需求
   **/
  static readonly AdvancedRequirement_0002 = '0002';
  /**
   * 远期需求
   **/
  static readonly ForwardRequirement_0003 = '0003';
}
