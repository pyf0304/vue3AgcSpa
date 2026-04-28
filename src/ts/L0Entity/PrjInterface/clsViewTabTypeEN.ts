/**
 * 类名:clsViewTabTypeEN
 * 表名:ViewTabType(00050103)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/29 01:25:29
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 界面表类型(ViewTabType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewTabTypeEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static _CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static readonly _CacheModeId: string = '03'; //localStorage
  public static readonly _PrimaryTypeId: string = '03'; //自增
  public static readonly _IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static readonly _WhereFormat = ''; //条件格式串
  public static readonly _CurrTabName: string = 'ViewTabType'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName: string = 'ViewTabTypeId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 4;
  public static readonly _AttributeName = [
    'viewTabTypeId',
    'viewTabTypeName',
    'viewTabTypeEnName',
    'tabTypeFunction',
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
  private mstrViewTabTypeId = ''; //界面表类型码
  private mstrViewTabTypeName = ''; //界面表类型名
  private mstrViewTabTypeEnName = ''; //界面表类型英文名
  private mstrTabTypeFunction = ''; //表类型功能

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
   * 界面表类型名(说明:;字段类型:varchar;字段长度:20;是否可空:False)
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
   * 界面表类型英文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewTabTypeEnName(value: string) {
    if (value != undefined) {
      this.viewTabTypeEnName = value;
      this.hmProperty['viewTabTypeEnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表类型功能(说明:;字段类型:varchar;字段长度:500;是否可空:True)
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
      case clsViewTabTypeEN.con_ViewTabTypeEnName:
        return this.viewTabTypeEnName;
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
      case clsViewTabTypeEN.con_ViewTabTypeEnName:
        this.viewTabTypeEnName = strValue;
        this.hmProperty['viewTabTypeEnName'] = true;
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
  public viewTabTypeName = ''; //界面表类型名
  public viewTabTypeEnName = ''; //界面表类型英文名
  public tabTypeFunction = ''; //表类型功能

  /**
   * 常量:"ViewTabTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ViewTabTypeId = 'viewTabTypeId'; //界面表类型码

  /**
   * 常量:"ViewTabTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ViewTabTypeName = 'viewTabTypeName'; //界面表类型名

  /**
   * 常量:"ViewTabTypeEnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_ViewTabTypeEnName = 'viewTabTypeEnName'; //界面表类型英文名

  /**
   * 常量:"TabTypeFunction"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static readonly con_TabTypeFunction = 'tabTypeFunction'; //表类型功能

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

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsViewTabTypeEN();
    const instance = new clsViewTabTypeEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export class enumViewTabType {
  /**
   * 未确定
   **/
  static readonly Undetermined_0000 = '0000';
  /**
   * 界面主表
   **/
  static readonly Interface_Master_Table_0001 = '0001';
  /**
   * 界面明细表
   **/
  static readonly Interface_Detail_Table_0002 = '0002';
  /**
   * 查询区主表
   **/
  static readonly Query_Area_Master_Table_0003 = '0003';
  /**
   * 编辑区主表
   **/
  static readonly Edit_Area_Master_Table_0004 = '0004';
  /**
   * 列表区主表
   **/
  static readonly List_Area_Master_Table_0005 = '0005';
  /**
   * 功能区主表
   **/
  static readonly Function_Area_Master_Table_0006 = '0006';
  /**
   * 详细区主表
   **/
  static readonly Detail_Area_Master_Table_0007 = '0007';
  /**
   * 导出区主表
   **/
  static readonly Export_Area_Master_Table_0008 = '0008';
  /**
   * 父表
   **/
  static readonly Parent_Table_0009 = '0009';
  /**
   * 参考表
   **/
  static readonly Reference_Table_0010 = '0010';
  /**
   * 相关表
   **/
  static readonly Related_Table_0011 = '0011';
  /**
   * 平行表
   **/
  static readonly Parallel_Table_0012 = '0012';
  /**
   * 主表视图
   **/
  static readonly Master_Table_View_0013 = '0013';
}
