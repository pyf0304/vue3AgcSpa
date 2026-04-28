/**
 * 类名:clsPrjTabENEx
 * 表名:PrjTab(00050009)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/28 23:40:34
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
/**
 * 工程表(PrjTab)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';

export class clsPrjTabENEx extends clsPrjTabEN {
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
      case clsPrjTabENEx.con_FuncModuleName:
        return this.funcModuleName;
      case clsPrjTabENEx.con_SqlDsTypeName:
        return this.sqlDsTypeName;
      case clsPrjTabENEx.con_TabStateName:
        return this.tabStateName;
      case clsPrjTabENEx.con_TabMainTypeName:
        return this.tabMainTypeName;
      case clsPrjTabENEx.con_TabTypeName:
        return this.tabTypeName;
      case clsPrjTabENEx.con_DateTimeSim:
        return this.dateTimeSim;
      case clsPrjTabENEx.con_RelaTabName4View:
        return this.relaTabName4View;
      case clsPrjTabENEx.con_PrjName:
        return this.prjName;
      case clsPrjTabENEx.con_TabFeatureConstraint:
        return this.tabFeatureConstraint;
      case clsPrjTabENEx.con_TabNameEx:
        return this.tabNameEx;
      case clsPrjTabENEx.con_TabTypeNameEx:
        return this.tabTypeNameEx;
      case clsPrjTabENEx.con_CacheClassifyField4TSEx:
        return this.cacheClassifyField4TSEx;
      case clsPrjTabENEx.con_CacheClassifyFieldEx:
        return this.cacheClassifyFieldEx;
      case clsPrjTabENEx.con_CmPrjNames:
        return this.cmPrjNames;
      case clsPrjTabENEx.con_PrimaryTypeNameEx:
        return this.primaryTypeNameEx;
      case clsPrjTabENEx.con_PrimaryTypeName:
        return this.primaryTypeName;
      case clsPrjTabENEx.con_TrClass:
        return this.trClass;
      case clsPrjTabENEx.con_KeyFldNames:
        return this.keyFldNames;
      case clsPrjTabENEx.con_PrimaryTypeId:
        return this.primaryTypeId;
      case clsPrjTabENEx.con_IncludeFldId:
        return this.includeFldId;
      case clsPrjTabENEx.con_FeatureId:
        return this.featureId;
      case clsPrjTabENEx.con_Checked:
        return this.checked;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"FuncModuleName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FuncModuleName = 'funcModuleName'; //功能模块名称

  /**
   * 常量:"SqlDsTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_SqlDsTypeName = 'sqlDsTypeName'; //Sql数据源名

  /**
   * 常量:"TabStateName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TabStateName = 'tabStateName'; //表状态名称

  /**
   * 常量:"TabMainTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TabMainTypeName = 'tabMainTypeName'; //表主类型名

  /**
   * 常量:"TabTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TabTypeName = 'tabTypeName'; //表类型名

  /**
   * 常量:"DateTimeSim"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_DateTimeSim = 'dateTimeSim'; //简化日期时间

  /**
   * 常量:"RelaTabName4View"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_RelaTabName4View = 'relaTabName4View'; //RelaTabName4View

  /**
   * 常量:"PrjName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrjName = 'prjName'; //工程名称

  /**
   * 常量:"TabFeatureConstraint"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TabFeatureConstraint = 'tabFeatureConstraint'; //表功能约束

  /**
   * 常量:"TabNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TabNameEx = 'tabNameEx'; //Cm工程名s

  /**
   * 常量:"TabTypeNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TabTypeNameEx = 'tabTypeNameEx'; //表类型名Ex

  /**
   * 常量:"CacheClassifyField4TSEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_CacheClassifyField4TSEx = 'cacheClassifyField4TSEx'; //缓存分类字段名Ex

  /**
   * 常量:"CacheClassifyFieldEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_CacheClassifyFieldEx = 'cacheClassifyFieldEx'; //缓存分类字段名Ex

  /**
   * 常量:"CmPrjNames"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_CmPrjNames = 'cmPrjNames'; //Cm工程名s

  /**
   * 常量:"PrimaryTypeNameEx"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrimaryTypeNameEx = 'primaryTypeNameEx'; //主键类型名Ex

  /**
   * 常量:"PrimaryTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrimaryTypeName = 'primaryTypeName'; //主键类型名

  /**
   * 常量:"TrClass"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_TrClass = 'trClass'; //TrClass

  /**
   * 常量:"KeyFldNames"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_KeyFldNames = 'keyFldNames'; //关键字段名s

  /**
   * 常量:"PrimaryTypeId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_PrimaryTypeId = 'primaryTypeId'; //主键类型ID

  /**
   * 常量:"IncludeFldId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_IncludeFldId = 'includeFldId'; //包含字段Id

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_FeatureId = 'featureId'; //功能Id

  /**
   * 常量:"Checked"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static readonly con_Checked = 'checked'; //是否选择

  public funcModuleName = ''; //功能模块名称
  public sqlDsTypeName = ''; //Sql数据源名
  public tabStateName = ''; //表状态名称
  public tabMainTypeName = ''; //表主类型名
  public tabTypeName = ''; //表类型名
  public dateTimeSim = ''; //简化日期时间
  public relaTabName4View = ''; //RelaTabName4View
  public prjName = ''; //工程名称
  public tabFeatureConstraint = ''; //表功能约束
  public tabNameEx = ''; //Cm工程名s
  public tabTypeNameEx = ''; //表类型名Ex
  public cacheClassifyField4TSEx = ''; //缓存分类字段名Ex
  public cacheClassifyFieldEx = ''; //缓存分类字段名Ex
  public cmPrjNames = ''; //Cm工程名s
  public primaryTypeNameEx = ''; //主键类型名Ex
  public primaryTypeName = ''; //主键类型名
  public trClass = ''; //TrClass
  public keyFldNames = ''; //关键字段名s
  public primaryTypeId = ''; //主键类型ID
  public includeFldId = ''; //包含字段Id
  public featureId = ''; //功能Id
  public checked = false; //是否选择

  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsPrjTabENEx();
    const instance = new clsPrjTabENEx();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
