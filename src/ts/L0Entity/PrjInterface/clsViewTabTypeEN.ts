/**
 * 类名:clsViewTabTypeEN
 * 表名:ViewTabType(00050103)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:42:20
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 界面表类型(ViewTabType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewTabTypeEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '03'; //localStorage
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewTabType'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewTabTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 3;
  public static AttributeName = ['viewTabTypeId', 'viewTabTypeName', 'tabTypeFunction'];
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
  private mstrViewTabTypeId = ''; //界面表类型码
  private mstrViewTabTypeName = ''; //ViewTabTypeName
  private mstrTabTypeFunction = ''; //TabTypeFunction

  /**
   * 界面表类型码(说明:;字段类型:varchar;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewTabTypeId(value: string) {
    if (value != undefined) {
      this.viewTabTypeId = value;
      this.hmProperty['viewTabTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * ViewTabTypeName(说明:;字段类型:varchar;字段长度:20;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewTabTypeName(value: string) {
    if (value != undefined) {
      this.viewTabTypeName = value;
      this.hmProperty['viewTabTypeName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * TabTypeFunction(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabTypeFunction(value: string) {
    if (value != undefined) {
      this.tabTypeFunction = value;
      this.hmProperty['tabTypeFunction'] = true;
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
      case clsViewTabTypeEN.con_ViewTabTypeId:
        return this.viewTabTypeId;
      case clsViewTabTypeEN.con_ViewTabTypeName:
        return this.viewTabTypeName;
      case clsViewTabTypeEN.con_TabTypeFunction:
        return this.tabTypeFunction;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewTabType]中不存在!`;
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
      case clsViewTabTypeEN.con_ViewTabTypeId:
        this.viewTabTypeId = strValue;
        this.hmProperty['viewTabTypeId'] = true;
        break;
      case clsViewTabTypeEN.con_ViewTabTypeName:
        this.viewTabTypeName = strValue;
        this.hmProperty['viewTabTypeName'] = true;
        break;
      case clsViewTabTypeEN.con_TabTypeFunction:
        this.tabTypeFunction = strValue;
        this.hmProperty['tabTypeFunction'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewTabType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public viewTabTypeId = ''; //界面表类型码
  public viewTabTypeName = ''; //ViewTabTypeName
  public tabTypeFunction = ''; //TabTypeFunction

  /**
   * 常量:"ViewTabTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewTabTypeId(): string {
    return 'viewTabTypeId';
  } //界面表类型码

  /**
   * 常量:"ViewTabTypeName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewTabTypeName(): string {
    return 'viewTabTypeName';
  } //ViewTabTypeName

  /**
   * 常量:"TabTypeFunction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TabTypeFunction(): string {
    return 'tabTypeFunction';
  } //TabTypeFunction

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
