/**
 * 类名:clsvFunction4GeneCode_Sim
 * 表名:vFunction4GeneCode_Sim(00050605)
 * 版本:2026.04.19(服务器:PYF-AI)
 * 日期:2026/05/27 12:58:59
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
/**
 * v函数4GC_Sim(vFunction4GeneCode_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsvFunction4GeneCode_Sim {
  public static readonly _CurrTabName = 'vFunction4GeneCode_Sim'; //当前表名,与该类相关的表名
  public static readonly _KeyFldName = 'FuncId4GC'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static readonly _AttributeCount = 11;
  public static readonly _AttributeName = [
    'funcId4GC',
    'funcName',
    'funcId4Code',
    'sqlDsTypeId',
    'featureId',
    'inUse',
    'funcGCTypeId',
    'templateNum',
    'progLangTypeId',
    'funcCodeTypeId',
    'usedTimes',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public funcId4GC = ''; //函数ID
  public funcName = ''; //函数名
  public funcId4Code = ''; //函数Id4Code
  public sqlDsTypeId = ''; //数据源类型Id
  public featureId = ''; //功能Id
  public inUse = false; //是否在用
  public funcGCTypeId = ''; //函数生成代码类型Id
  public templateNum = 0; //TemplateNum
  public progLangTypeId = ''; //编程语言类型Id
  public funcCodeTypeId = ''; //函数代码类型Id
  public usedTimes = 0; //使用次数

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvFunction4GeneCode_Sim.con_FuncId4GC:
        return this.funcId4GC;
      case clsvFunction4GeneCode_Sim.con_FuncName:
        return this.funcName;
      case clsvFunction4GeneCode_Sim.con_FuncId4Code:
        return this.funcId4Code;
      case clsvFunction4GeneCode_Sim.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsvFunction4GeneCode_Sim.con_FeatureId:
        return this.featureId;
      case clsvFunction4GeneCode_Sim.con_InUse:
        return this.inUse;
      case clsvFunction4GeneCode_Sim.con_FuncGCTypeId:
        return this.funcGCTypeId;
      case clsvFunction4GeneCode_Sim.con_TemplateNum:
        return this.templateNum;
      case clsvFunction4GeneCode_Sim.con_ProgLangTypeId:
        return this.progLangTypeId;
      case clsvFunction4GeneCode_Sim.con_FuncCodeTypeId:
        return this.funcCodeTypeId;
      case clsvFunction4GeneCode_Sim.con_UsedTimes:
        return this.usedTimes;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vFunction4GeneCode_Sim]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"FuncId4GC"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_FuncId4GC = 'funcId4GC'; //函数ID

  /**
   * 常量:"FuncName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_FuncName = 'funcName'; //函数名

  /**
   * 常量:"FuncId4Code"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_FuncId4Code = 'funcId4Code'; //函数Id4Code

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_SqlDsTypeId = 'sqlDsTypeId'; //数据源类型Id

  /**
   * 常量:"FeatureId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_FeatureId = 'featureId'; //功能Id

  /**
   * 常量:"InUse"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_InUse = 'inUse'; //是否在用

  /**
   * 常量:"FuncGCTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_FuncGCTypeId = 'funcGCTypeId'; //函数生成代码类型Id

  /**
   * 常量:"TemplateNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_TemplateNum = 'templateNum'; //TemplateNum

  /**
   * 常量:"ProgLangTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_ProgLangTypeId = 'progLangTypeId'; //编程语言类型Id

  /**
   * 常量:"FuncCodeTypeId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_FuncCodeTypeId = 'funcCodeTypeId'; //函数代码类型Id

  /**
   * 常量:"UsedTimes"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static readonly con_UsedTimes = 'usedTimes'; //使用次数
}
