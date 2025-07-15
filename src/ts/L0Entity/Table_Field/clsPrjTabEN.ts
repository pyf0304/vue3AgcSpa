/**
 * 类名:clsPrjTabEN
 * 表名:PrjTab(00050009)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:21
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 工程表(PrjTab)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsPrjTabEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = ''; //
  public static PrimaryTypeId = '06'; //前缀自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'PrjTab'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'TabId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 46;
  public static AttributeName = [
    'tabId',
    'tabName',
    'tabCnName',
    'prjId',
    'sqlDsTypeId',
    'tabStateId',
    'funcModuleAgcId',
    'isReleToSqlTab',
    'keyword',
    'tabTypeId',
    'tabMainTypeId',
    'relaTabId4View',
    'isNeedGeneIndexer',
    'parentClass',
    'isShare',
    'isUseDelSign',
    'isUseCache',
    'isMultiKeyClassify',
    'cacheClassifyField',
    'cacheClassifyField2',
    'cacheModeId',
    'cacheClassifyFieldTS',
    'cacheClassifyField2TS',
    'paraVar2TS',
    'paraVar1TS',
    'whereFormat',
    'whereFormatBack',
    'isRefresh4RelaView',
    'tabRecNum',
    'keyId4Test',
    'errMsg',
    'fldNum',
    'updUserId',
    'updDate',
    'memo',
    'orderNum4Refer',
    'isChecked',
    'owner',
    'tabEnName',
    'isNeedTransCode',
    'tabNameB',
    'relaViewId',
    'dataBaseName',
    'isNationStandard',
    'isParaTab',
    'isArchive',
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
  private mstrTabId = ''; //表ID
  private mstrTabName = ''; //表名
  private mstrTabCnName = ''; //表中文名
  private mstrPrjId = ''; //工程Id
  private mstrSqlDsTypeId = ''; //数据源类型Id
  private mstrTabStateId = ''; //表状态ID
  private mstrFuncModuleAgcId = ''; //功能模块Id
  private mbolIsReleToSqlTab = false; //是否与SQL表相关
  private mstrKeyword = ''; //关键字
  private mstrTabTypeId = ''; //表类型Id
  private mstrTabMainTypeId = ''; //表主类型Id
  private mstrRelaTabId4View = ''; //视图的相关表ID
  private mbolIsNeedGeneIndexer = false; //是否需要生成索引器
  private mstrParentClass = ''; //父类
  private mbolIsShare = false; //是否共享
  private mbolIsUseDelSign = false; //是否使用删除标记
  private mbolIsUseCache = false; //是否使用Cache
  private mbolIsMultiKeyClassify = false; //是否可以多个关键字分类共存
  private mstrCacheClassifyField = ''; //缓存分类字段
  private mstrCacheClassifyField2 = ''; //缓存分类字段2
  private mstrCacheModeId = ''; //缓存方式Id
  private mstrCacheClassifyFieldTS = ''; //缓存分类字段_TS
  private mstrCacheClassifyField2TS = ''; //缓存分类字段2_TS
  private mstrParaVar2TS = ''; //参数变量2_TS
  private mstrParaVar1TS = ''; //参数变量_TS
  private mstrWhereFormat = ''; //缓存条件格式
  private mstrWhereFormatBack = ''; //后台缓存条件格式
  private mbolIsRefresh4RelaView = false; //是否刷新相关视图
  private mintTabRecNum = 0; //记录数
  private mstrKeyId4Test = ''; //测试关键字Id
  private mstrErrMsg = ''; //错误信息
  private mintFldNum = 0; //字段数
  private mstrUpdUserId = ''; //修改用户Id
  private mstrUpdDate = ''; //修改日期
  private mstrMemo = ''; //说明
  private mintOrderNum4Refer = 0; //引用序号
  private mbolIsChecked = false; //是否核实
  private mstrOwner = ''; //拥有者
  private mstrTabEnName = ''; //表英文详细名
  private mbolIsNeedTransCode = false; //是否需要转换代码
  private mstrTabNameB = ''; //表名_后备
  private mstrRelaViewId = ''; //RelaViewId
  private mstrDataBaseName = ''; //数据库名
  private mbolIsNationStandard = false; //是否国标
  private mbolIsParaTab = false; //是否参数表
  private mbolIsArchive = false; //是否存档

  /**
   * 表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabId(value: string) {
    if (value != undefined) {
      this.tabId = value;
      this.hmProperty['tabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabName(value: string) {
    if (value != undefined) {
      this.tabName = value;
      this.hmProperty['tabName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表中文名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabCnName(value: string) {
    if (value != undefined) {
      this.tabCnName = value;
      this.hmProperty['tabCnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 工程Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPrjId(value: string) {
    if (value != undefined) {
      this.prjId = value;
      this.hmProperty['prjId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据源类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.sqlDsTypeId = value;
      this.hmProperty['sqlDsTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表状态ID(说明:;字段类型:char;字段长度:2;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabStateId(value: string) {
    if (value != undefined) {
      this.tabStateId = value;
      this.hmProperty['tabStateId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 功能模块Id(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFuncModuleAgcId(value: string) {
    if (value != undefined) {
      this.funcModuleAgcId = value;
      this.hmProperty['funcModuleAgcId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否与SQL表相关(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsReleToSqlTab(value: boolean) {
    if (value != undefined) {
      this.isReleToSqlTab = value;
      this.hmProperty['isReleToSqlTab'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 关键字(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyword(value: string) {
    if (value != undefined) {
      this.keyword = value;
      this.hmProperty['keyword'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表类型Id(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabTypeId(value: string) {
    if (value != undefined) {
      this.tabTypeId = value;
      this.hmProperty['tabTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表主类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabMainTypeId(value: string) {
    if (value != undefined) {
      this.tabMainTypeId = value;
      this.hmProperty['tabMainTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 视图的相关表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelaTabId4View(value: string) {
    if (value != undefined) {
      this.relaTabId4View = value;
      this.hmProperty['relaTabId4View'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要生成索引器(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedGeneIndexer(value: boolean) {
    if (value != undefined) {
      this.isNeedGeneIndexer = value;
      this.hmProperty['isNeedGeneIndexer'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 父类(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParentClass(value: string) {
    if (value != undefined) {
      this.parentClass = value;
      this.hmProperty['parentClass'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否共享(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsShare(value: boolean) {
    if (value != undefined) {
      this.isShare = value;
      this.hmProperty['isShare'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否使用删除标记(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUseDelSign(value: boolean) {
    if (value != undefined) {
      this.isUseDelSign = value;
      this.hmProperty['isUseDelSign'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否使用Cache(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsUseCache(value: boolean) {
    if (value != undefined) {
      this.isUseCache = value;
      this.hmProperty['isUseCache'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否可以多个关键字分类共存(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsMultiKeyClassify(value: boolean) {
    if (value != undefined) {
      this.isMultiKeyClassify = value;
      this.hmProperty['isMultiKeyClassify'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缓存分类字段(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCacheClassifyField(value: string) {
    if (value != undefined) {
      this.cacheClassifyField = value;
      this.hmProperty['cacheClassifyField'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缓存分类字段2(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCacheClassifyField2(value: string) {
    if (value != undefined) {
      this.cacheClassifyField2 = value;
      this.hmProperty['cacheClassifyField2'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缓存方式Id(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCacheModeId(value: string) {
    if (value != undefined) {
      this.cacheModeId = value;
      this.hmProperty['cacheModeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缓存分类字段_TS(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCacheClassifyFieldTS(value: string) {
    if (value != undefined) {
      this.cacheClassifyFieldTS = value;
      this.hmProperty['cacheClassifyFieldTS'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缓存分类字段2_TS(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCacheClassifyField2TS(value: string) {
    if (value != undefined) {
      this.cacheClassifyField2TS = value;
      this.hmProperty['cacheClassifyField2TS'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 参数变量2_TS(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParaVar2TS(value: string) {
    if (value != undefined) {
      this.paraVar2TS = value;
      this.hmProperty['paraVar2TS'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 参数变量_TS(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetParaVar1TS(value: string) {
    if (value != undefined) {
      this.paraVar1TS = value;
      this.hmProperty['paraVar1TS'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缓存条件格式(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWhereFormat(value: string) {
    if (value != undefined) {
      this.whereFormat = value;
      this.hmProperty['whereFormat'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 后台缓存条件格式(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWhereFormatBack(value: string) {
    if (value != undefined) {
      this.whereFormatBack = value;
      this.hmProperty['whereFormatBack'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否刷新相关视图(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsRefresh4RelaView(value: boolean) {
    if (value != undefined) {
      this.isRefresh4RelaView = value;
      this.hmProperty['isRefresh4RelaView'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 记录数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabRecNum(value: number) {
    if (value != undefined) {
      this.tabRecNum = value;
      this.hmProperty['tabRecNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 测试关键字Id(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyId4Test(value: string) {
    if (value != undefined) {
      this.keyId4Test = value;
      this.hmProperty['keyId4Test'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 错误信息(说明:;字段类型:varchar;字段长度:2000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetErrMsg(value: string) {
    if (value != undefined) {
      this.errMsg = value;
      this.hmProperty['errMsg'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 字段数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFldNum(value: number) {
    if (value != undefined) {
      this.fldNum = value;
      this.hmProperty['fldNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUserId(value: string) {
    if (value != undefined) {
      this.updUserId = value;
      this.hmProperty['updUserId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
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
   * 引用序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum4Refer(value: number) {
    if (value != undefined) {
      this.orderNum4Refer = value;
      this.hmProperty['orderNum4Refer'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否核实(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsChecked(value: boolean) {
    if (value != undefined) {
      this.isChecked = value;
      this.hmProperty['isChecked'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 拥有者(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOwner(value: string) {
    if (value != undefined) {
      this.owner = value;
      this.hmProperty['owner'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表英文详细名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabEnName(value: string) {
    if (value != undefined) {
      this.tabEnName = value;
      this.hmProperty['tabEnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要转换代码(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedTransCode(value: boolean) {
    if (value != undefined) {
      this.isNeedTransCode = value;
      this.hmProperty['isNeedTransCode'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 表名_后备(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTabNameB(value: string) {
    if (value != undefined) {
      this.tabNameB = value;
      this.hmProperty['tabNameB'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * RelaViewId(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRelaViewId(value: string) {
    if (value != undefined) {
      this.relaViewId = value;
      this.hmProperty['relaViewId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 数据库名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDataBaseName(value: string) {
    if (value != undefined) {
      this.dataBaseName = value;
      this.hmProperty['dataBaseName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否国标(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNationStandard(value: boolean) {
    if (value != undefined) {
      this.isNationStandard = value;
      this.hmProperty['isNationStandard'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否参数表(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsParaTab(value: boolean) {
    if (value != undefined) {
      this.isParaTab = value;
      this.hmProperty['isParaTab'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否存档(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsArchive(value: boolean) {
    if (value != undefined) {
      this.isArchive = value;
      this.hmProperty['isArchive'] = true;
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
      case clsPrjTabEN.con_TabId:
        return this.tabId;
      case clsPrjTabEN.con_TabName:
        return this.tabName;
      case clsPrjTabEN.con_TabCnName:
        return this.tabCnName;
      case clsPrjTabEN.con_PrjId:
        return this.prjId;
      case clsPrjTabEN.con_SqlDsTypeId:
        return this.sqlDsTypeId;
      case clsPrjTabEN.con_TabStateId:
        return this.tabStateId;
      case clsPrjTabEN.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsPrjTabEN.con_IsReleToSqlTab:
        return this.isReleToSqlTab;
      case clsPrjTabEN.con_Keyword:
        return this.keyword;
      case clsPrjTabEN.con_TabTypeId:
        return this.tabTypeId;
      case clsPrjTabEN.con_TabMainTypeId:
        return this.tabMainTypeId;
      case clsPrjTabEN.con_RelaTabId4View:
        return this.relaTabId4View;
      case clsPrjTabEN.con_IsNeedGeneIndexer:
        return this.isNeedGeneIndexer;
      case clsPrjTabEN.con_ParentClass:
        return this.parentClass;
      case clsPrjTabEN.con_IsShare:
        return this.isShare;
      case clsPrjTabEN.con_IsUseDelSign:
        return this.isUseDelSign;
      case clsPrjTabEN.con_IsUseCache:
        return this.isUseCache;
      case clsPrjTabEN.con_IsMultiKeyClassify:
        return this.isMultiKeyClassify;
      case clsPrjTabEN.con_CacheClassifyField:
        return this.cacheClassifyField;
      case clsPrjTabEN.con_CacheClassifyField2:
        return this.cacheClassifyField2;
      case clsPrjTabEN.con_CacheModeId:
        return this.cacheModeId;
      case clsPrjTabEN.con_CacheClassifyFieldTS:
        return this.cacheClassifyFieldTS;
      case clsPrjTabEN.con_CacheClassifyField2TS:
        return this.cacheClassifyField2TS;
      case clsPrjTabEN.con_ParaVar2TS:
        return this.paraVar2TS;
      case clsPrjTabEN.con_ParaVar1TS:
        return this.paraVar1TS;
      case clsPrjTabEN.con_WhereFormat:
        return this.whereFormat;
      case clsPrjTabEN.con_WhereFormatBack:
        return this.whereFormatBack;
      case clsPrjTabEN.con_IsRefresh4RelaView:
        return this.isRefresh4RelaView;
      case clsPrjTabEN.con_TabRecNum:
        return this.tabRecNum;
      case clsPrjTabEN.con_KeyId4Test:
        return this.keyId4Test;
      case clsPrjTabEN.con_ErrMsg:
        return this.errMsg;
      case clsPrjTabEN.con_FldNum:
        return this.fldNum;
      case clsPrjTabEN.con_UpdUserId:
        return this.updUserId;
      case clsPrjTabEN.con_UpdDate:
        return this.updDate;
      case clsPrjTabEN.con_Memo:
        return this.memo;
      case clsPrjTabEN.con_OrderNum4Refer:
        return this.orderNum4Refer;
      case clsPrjTabEN.con_IsChecked:
        return this.isChecked;
      case clsPrjTabEN.con_Owner:
        return this.owner;
      case clsPrjTabEN.con_TabEnName:
        return this.tabEnName;
      case clsPrjTabEN.con_IsNeedTransCode:
        return this.isNeedTransCode;
      case clsPrjTabEN.con_TabNameB:
        return this.tabNameB;
      case clsPrjTabEN.con_RelaViewId:
        return this.relaViewId;
      case clsPrjTabEN.con_DataBaseName:
        return this.dataBaseName;
      case clsPrjTabEN.con_IsNationStandard:
        return this.isNationStandard;
      case clsPrjTabEN.con_IsParaTab:
        return this.isParaTab;
      case clsPrjTabEN.con_IsArchive:
        return this.isArchive;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTab]中不存在!`;
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
      case clsPrjTabEN.con_TabId:
        this.tabId = strValue;
        this.hmProperty['tabId'] = true;
        break;
      case clsPrjTabEN.con_TabName:
        this.tabName = strValue;
        this.hmProperty['tabName'] = true;
        break;
      case clsPrjTabEN.con_TabCnName:
        this.tabCnName = strValue;
        this.hmProperty['tabCnName'] = true;
        break;
      case clsPrjTabEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsPrjTabEN.con_SqlDsTypeId:
        this.sqlDsTypeId = strValue;
        this.hmProperty['sqlDsTypeId'] = true;
        break;
      case clsPrjTabEN.con_TabStateId:
        this.tabStateId = strValue;
        this.hmProperty['tabStateId'] = true;
        break;
      case clsPrjTabEN.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;
        this.hmProperty['funcModuleAgcId'] = true;
        break;
      case clsPrjTabEN.con_IsReleToSqlTab:
        this.isReleToSqlTab = Boolean(strValue);
        this.hmProperty['isReleToSqlTab'] = true;
        break;
      case clsPrjTabEN.con_Keyword:
        this.keyword = strValue;
        this.hmProperty['keyword'] = true;
        break;
      case clsPrjTabEN.con_TabTypeId:
        this.tabTypeId = strValue;
        this.hmProperty['tabTypeId'] = true;
        break;
      case clsPrjTabEN.con_TabMainTypeId:
        this.tabMainTypeId = strValue;
        this.hmProperty['tabMainTypeId'] = true;
        break;
      case clsPrjTabEN.con_RelaTabId4View:
        this.relaTabId4View = strValue;
        this.hmProperty['relaTabId4View'] = true;
        break;
      case clsPrjTabEN.con_IsNeedGeneIndexer:
        this.isNeedGeneIndexer = Boolean(strValue);
        this.hmProperty['isNeedGeneIndexer'] = true;
        break;
      case clsPrjTabEN.con_ParentClass:
        this.parentClass = strValue;
        this.hmProperty['parentClass'] = true;
        break;
      case clsPrjTabEN.con_IsShare:
        this.isShare = Boolean(strValue);
        this.hmProperty['isShare'] = true;
        break;
      case clsPrjTabEN.con_IsUseDelSign:
        this.isUseDelSign = Boolean(strValue);
        this.hmProperty['isUseDelSign'] = true;
        break;
      case clsPrjTabEN.con_IsUseCache:
        this.isUseCache = Boolean(strValue);
        this.hmProperty['isUseCache'] = true;
        break;
      case clsPrjTabEN.con_IsMultiKeyClassify:
        this.isMultiKeyClassify = Boolean(strValue);
        this.hmProperty['isMultiKeyClassify'] = true;
        break;
      case clsPrjTabEN.con_CacheClassifyField:
        this.cacheClassifyField = strValue;
        this.hmProperty['cacheClassifyField'] = true;
        break;
      case clsPrjTabEN.con_CacheClassifyField2:
        this.cacheClassifyField2 = strValue;
        this.hmProperty['cacheClassifyField2'] = true;
        break;
      case clsPrjTabEN.con_CacheModeId:
        this.cacheModeId = strValue;
        this.hmProperty['cacheModeId'] = true;
        break;
      case clsPrjTabEN.con_CacheClassifyFieldTS:
        this.cacheClassifyFieldTS = strValue;
        this.hmProperty['cacheClassifyFieldTS'] = true;
        break;
      case clsPrjTabEN.con_CacheClassifyField2TS:
        this.cacheClassifyField2TS = strValue;
        this.hmProperty['cacheClassifyField2TS'] = true;
        break;
      case clsPrjTabEN.con_ParaVar2TS:
        this.paraVar2TS = strValue;
        this.hmProperty['paraVar2TS'] = true;
        break;
      case clsPrjTabEN.con_ParaVar1TS:
        this.paraVar1TS = strValue;
        this.hmProperty['paraVar1TS'] = true;
        break;
      case clsPrjTabEN.con_WhereFormat:
        this.whereFormat = strValue;
        this.hmProperty['whereFormat'] = true;
        break;
      case clsPrjTabEN.con_WhereFormatBack:
        this.whereFormatBack = strValue;
        this.hmProperty['whereFormatBack'] = true;
        break;
      case clsPrjTabEN.con_IsRefresh4RelaView:
        this.isRefresh4RelaView = Boolean(strValue);
        this.hmProperty['isRefresh4RelaView'] = true;
        break;
      case clsPrjTabEN.con_TabRecNum:
        this.tabRecNum = Number(strValue);
        this.hmProperty['tabRecNum'] = true;
        break;
      case clsPrjTabEN.con_KeyId4Test:
        this.keyId4Test = strValue;
        this.hmProperty['keyId4Test'] = true;
        break;
      case clsPrjTabEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsPrjTabEN.con_FldNum:
        this.fldNum = Number(strValue);
        this.hmProperty['fldNum'] = true;
        break;
      case clsPrjTabEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsPrjTabEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsPrjTabEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsPrjTabEN.con_OrderNum4Refer:
        this.orderNum4Refer = Number(strValue);
        this.hmProperty['orderNum4Refer'] = true;
        break;
      case clsPrjTabEN.con_IsChecked:
        this.isChecked = Boolean(strValue);
        this.hmProperty['isChecked'] = true;
        break;
      case clsPrjTabEN.con_Owner:
        this.owner = strValue;
        this.hmProperty['owner'] = true;
        break;
      case clsPrjTabEN.con_TabEnName:
        this.tabEnName = strValue;
        this.hmProperty['tabEnName'] = true;
        break;
      case clsPrjTabEN.con_IsNeedTransCode:
        this.isNeedTransCode = Boolean(strValue);
        this.hmProperty['isNeedTransCode'] = true;
        break;
      case clsPrjTabEN.con_TabNameB:
        this.tabNameB = strValue;
        this.hmProperty['tabNameB'] = true;
        break;
      case clsPrjTabEN.con_RelaViewId:
        this.relaViewId = strValue;
        this.hmProperty['relaViewId'] = true;
        break;
      case clsPrjTabEN.con_DataBaseName:
        this.dataBaseName = strValue;
        this.hmProperty['dataBaseName'] = true;
        break;
      case clsPrjTabEN.con_IsNationStandard:
        this.isNationStandard = Boolean(strValue);
        this.hmProperty['isNationStandard'] = true;
        break;
      case clsPrjTabEN.con_IsParaTab:
        this.isParaTab = Boolean(strValue);
        this.hmProperty['isParaTab'] = true;
        break;
      case clsPrjTabEN.con_IsArchive:
        this.isArchive = Boolean(strValue);
        this.hmProperty['isArchive'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PrjTab]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public tabId = ''; //表ID
  public tabName = ''; //表名
  public tabCnName = ''; //表中文名
  public prjId = ''; //工程Id
  public sqlDsTypeId = ''; //数据源类型Id
  public tabStateId = ''; //表状态ID
  public funcModuleAgcId = ''; //功能模块Id
  public isReleToSqlTab = false; //是否与SQL表相关
  public keyword = ''; //关键字
  public tabTypeId = ''; //表类型Id
  public tabMainTypeId = ''; //表主类型Id
  public relaTabId4View = ''; //视图的相关表ID
  public isNeedGeneIndexer = false; //是否需要生成索引器
  public parentClass = ''; //父类
  public isShare = false; //是否共享
  public isUseDelSign = false; //是否使用删除标记
  public isUseCache = false; //是否使用Cache
  public isMultiKeyClassify = false; //是否可以多个关键字分类共存
  public cacheClassifyField = ''; //缓存分类字段
  public cacheClassifyField2 = ''; //缓存分类字段2
  public cacheModeId = ''; //缓存方式Id
  public cacheClassifyFieldTS = ''; //缓存分类字段_TS
  public cacheClassifyField2TS = ''; //缓存分类字段2_TS
  public paraVar2TS = ''; //参数变量2_TS
  public paraVar1TS = ''; //参数变量_TS
  public whereFormat = ''; //缓存条件格式
  public whereFormatBack = ''; //后台缓存条件格式
  public isRefresh4RelaView = false; //是否刷新相关视图
  public tabRecNum = 0; //记录数
  public keyId4Test = ''; //测试关键字Id
  public errMsg = ''; //错误信息
  public fldNum = 0; //字段数
  public updUserId = ''; //修改用户Id
  public updDate = ''; //修改日期
  public memo = ''; //说明
  public orderNum4Refer = 0; //引用序号
  public isChecked = false; //是否核实
  public owner = ''; //拥有者
  public tabEnName = ''; //表英文详细名
  public isNeedTransCode = false; //是否需要转换代码
  public tabNameB = ''; //表名_后备
  public relaViewId = ''; //RelaViewId
  public dataBaseName = ''; //数据库名
  public isNationStandard = false; //是否国标
  public isParaTab = false; //是否参数表
  public isArchive = false; //是否存档

  /**
   * 常量:"TabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabId(): string {
    return 'tabId';
  } //表ID

  /**
   * 常量:"TabName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabName(): string {
    return 'tabName';
  } //表名

  /**
   * 常量:"TabCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabCnName(): string {
    return 'tabCnName';
  } //表中文名

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"SqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SqlDsTypeId(): string {
    return 'sqlDsTypeId';
  } //数据源类型Id

  /**
   * 常量:"TabStateId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabStateId(): string {
    return 'tabStateId';
  } //表状态ID

  /**
   * 常量:"FuncModuleAgcId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"IsReleToSqlTab"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsReleToSqlTab(): string {
    return 'isReleToSqlTab';
  } //是否与SQL表相关

  /**
   * 常量:"Keyword"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Keyword(): string {
    return 'keyword';
  } //关键字

  /**
   * 常量:"TabTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabTypeId(): string {
    return 'tabTypeId';
  } //表类型Id

  /**
   * 常量:"TabMainTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabMainTypeId(): string {
    return 'tabMainTypeId';
  } //表主类型Id

  /**
   * 常量:"RelaTabId4View"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaTabId4View(): string {
    return 'relaTabId4View';
  } //视图的相关表ID

  /**
   * 常量:"IsNeedGeneIndexer"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedGeneIndexer(): string {
    return 'isNeedGeneIndexer';
  } //是否需要生成索引器

  /**
   * 常量:"ParentClass"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParentClass(): string {
    return 'parentClass';
  } //父类

  /**
   * 常量:"IsShare"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsShare(): string {
    return 'isShare';
  } //是否共享

  /**
   * 常量:"IsUseDelSign"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsUseDelSign(): string {
    return 'isUseDelSign';
  } //是否使用删除标记

  /**
   * 常量:"IsUseCache"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsUseCache(): string {
    return 'isUseCache';
  } //是否使用Cache

  /**
   * 常量:"IsMultiKeyClassify"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsMultiKeyClassify(): string {
    return 'isMultiKeyClassify';
  } //是否可以多个关键字分类共存

  /**
   * 常量:"CacheClassifyField"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CacheClassifyField(): string {
    return 'cacheClassifyField';
  } //缓存分类字段

  /**
   * 常量:"CacheClassifyField2"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CacheClassifyField2(): string {
    return 'cacheClassifyField2';
  } //缓存分类字段2

  /**
   * 常量:"CacheModeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CacheModeId(): string {
    return 'cacheModeId';
  } //缓存方式Id

  /**
   * 常量:"CacheClassifyFieldTS"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CacheClassifyFieldTS(): string {
    return 'cacheClassifyFieldTS';
  } //缓存分类字段_TS

  /**
   * 常量:"CacheClassifyField2TS"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CacheClassifyField2TS(): string {
    return 'cacheClassifyField2TS';
  } //缓存分类字段2_TS

  /**
   * 常量:"ParaVar2TS"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParaVar2TS(): string {
    return 'paraVar2TS';
  } //参数变量2_TS

  /**
   * 常量:"ParaVar1TS"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ParaVar1TS(): string {
    return 'paraVar1TS';
  } //参数变量_TS

  /**
   * 常量:"WhereFormat"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WhereFormat(): string {
    return 'whereFormat';
  } //缓存条件格式

  /**
   * 常量:"WhereFormatBack"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WhereFormatBack(): string {
    return 'whereFormatBack';
  } //后台缓存条件格式

  /**
   * 常量:"IsRefresh4RelaView"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsRefresh4RelaView(): string {
    return 'isRefresh4RelaView';
  } //是否刷新相关视图

  /**
   * 常量:"TabRecNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabRecNum(): string {
    return 'tabRecNum';
  } //记录数

  /**
   * 常量:"KeyId4Test"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyId4Test(): string {
    return 'keyId4Test';
  } //测试关键字Id

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"FldNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FldNum(): string {
    return 'fldNum';
  } //字段数

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"OrderNum4Refer"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OrderNum4Refer(): string {
    return 'orderNum4Refer';
  } //引用序号

  /**
   * 常量:"IsChecked"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsChecked(): string {
    return 'isChecked';
  } //是否核实

  /**
   * 常量:"Owner"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Owner(): string {
    return 'owner';
  } //拥有者

  /**
   * 常量:"TabEnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabEnName(): string {
    return 'tabEnName';
  } //表英文详细名

  /**
   * 常量:"IsNeedTransCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedTransCode(): string {
    return 'isNeedTransCode';
  } //是否需要转换代码

  /**
   * 常量:"TabNameB"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TabNameB(): string {
    return 'tabNameB';
  } //表名_后备

  /**
   * 常量:"RelaViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RelaViewId(): string {
    return 'relaViewId';
  } //RelaViewId

  /**
   * 常量:"DataBaseName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataBaseName(): string {
    return 'dataBaseName';
  } //数据库名

  /**
   * 常量:"IsNationStandard"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNationStandard(): string {
    return 'isNationStandard';
  } //是否国标

  /**
   * 常量:"IsParaTab"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsParaTab(): string {
    return 'isParaTab';
  } //是否参数表

  /**
   * 常量:"IsArchive"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsArchive(): string {
    return 'isArchive';
  } //是否存档

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
    //return propName in new clsPrjTabEN();
    const instance = new clsPrjTabEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
