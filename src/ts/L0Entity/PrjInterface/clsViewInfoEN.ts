/**
 * 类名:clsViewInfoEN
 * 表名:ViewInfo(00050006)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:44
 * 生成者:pyf
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * 界面(ViewInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsViewInfoEN extends clsGeneralTab {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '06'; //前缀自增
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'ViewInfo'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 39;
  public static AttributeName = [
    'viewId',
    'viewName',
    'applicationTypeId',
    'funcModuleAgcId',
    'dataBaseName',
    'keyForMainTab',
    'keyForDetailTab',
    'isNeedSort',
    'isNeedTransCode',
    'isNeedSetExportFld',
    'userId',
    'prjId',
    'viewFunction',
    'viewDetail',
    'defaMenuName',
    'detailTabId',
    'fileName',
    'filePath',
    'mainTabId',
    'viewCnName',
    'viewGroupId',
    'inRelaTabId',
    'inSqlDsTypeId',
    'outRelaTabId',
    'outSqlDsTypeId',
    'detailTabType',
    'detailViewId',
    'mainTabType',
    'mainViewId',
    'geneCodeDate',
    'taskId',
    'keyId4Test',
    'viewMasterId',
    'isShare',
    'errMsg',
    'updDate',
    'updUserId',
    'memo',
    'regionNum',
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
  private mstrViewId = ''; //界面Id
  private mstrViewName = ''; //界面名称
  private mintApplicationTypeId = 0; //应用程序类型ID
  private mstrFuncModuleAgcId = ''; //功能模块Id
  private mstrDataBaseName = ''; //数据库名
  private mstrKeyForMainTab = ''; //主表关键字
  private mstrKeyForDetailTab = ''; //明细表关键字
  private mbolIsNeedSort = false; //是否需要排序
  private mbolIsNeedTransCode = false; //是否需要转换代码
  private mbolIsNeedSetExportFld = false; //是否需要设置导出字段
  private mstrUserId = ''; //用户Id
  private mstrPrjId = ''; //工程Id
  private mstrViewFunction = ''; //界面功能
  private mstrViewDetail = ''; //界面说明
  private mstrDefaMenuName = ''; //缺省菜单名
  private mstrDetailTabId = ''; //明细表ID
  private mstrFileName = ''; //文件名
  private mstrFilePath = ''; //文件路径
  private mstrMainTabId = ''; //主表ID
  private mstrViewCnName = ''; //视图中文名
  private mstrViewGroupId = ''; //界面组ID
  private mstrInRelaTabId = ''; //输入数据源表ID
  private mstrInSqlDsTypeId = ''; //输入数据源类型
  private mstrOutRelaTabId = ''; //输出数据源表ID
  private mstrOutSqlDsTypeId = ''; //输出数据源类型
  private mstrDetailTabType = ''; //DetailTabType
  private mstrDetailViewId = ''; //DetailViewId
  private mstrMainTabType = ''; //MainTabType
  private mstrMainViewId = ''; //MainViewId
  private mstrGeneCodeDate = ''; //生成代码日期
  private mstrTaskId = ''; //任务Id
  private mstrKeyId4Test = ''; //测试关键字Id
  private mstrViewMasterId = ''; //界面母版Id
  private mbolIsShare = false; //是否共享
  private mstrErrMsg = ''; //错误信息
  private mstrUpdDate = ''; //修改日期
  private mstrUpdUserId = ''; //修改用户Id
  private mstrMemo = ''; //说明
  private mintRegionNum = 0; //区域数

  /**
   * 界面Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewId(value: string) {
    if (value != undefined) {
      this.viewId = value;
      this.hmProperty['viewId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewName(value: string) {
    if (value != undefined) {
      this.viewName = value;
      this.hmProperty['viewName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 应用程序类型ID(说明:;字段类型:int;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetApplicationTypeId(value: number) {
    if (value != undefined) {
      this.applicationTypeId = value;
      this.hmProperty['applicationTypeId'] = true;
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
   * 主表关键字(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyForMainTab(value: string) {
    if (value != undefined) {
      this.keyForMainTab = value;
      this.hmProperty['keyForMainTab'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 明细表关键字(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetKeyForDetailTab(value: string) {
    if (value != undefined) {
      this.keyForDetailTab = value;
      this.hmProperty['keyForDetailTab'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否需要排序(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedSort(value: boolean) {
    if (value != undefined) {
      this.isNeedSort = value;
      this.hmProperty['isNeedSort'] = true;
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
   * 是否需要设置导出字段(说明:;字段类型:bit;字段长度:1;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsNeedSetExportFld(value: boolean) {
    if (value != undefined) {
      this.isNeedSetExportFld = value;
      this.hmProperty['isNeedSetExportFld'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 用户Id(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUserId(value: string) {
    if (value != undefined) {
      this.userId = value;
      this.hmProperty['userId'] = true;
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
   * 界面功能(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewFunction(value: string) {
    if (value != undefined) {
      this.viewFunction = value;
      this.hmProperty['viewFunction'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面说明(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewDetail(value: string) {
    if (value != undefined) {
      this.viewDetail = value;
      this.hmProperty['viewDetail'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 缺省菜单名(说明:;字段类型:varchar;字段长度:100;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDefaMenuName(value: string) {
    if (value != undefined) {
      this.defaMenuName = value;
      this.hmProperty['defaMenuName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 明细表ID(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDetailTabId(value: string) {
    if (value != undefined) {
      this.detailTabId = value;
      this.hmProperty['detailTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件名(说明:;字段类型:varchar;字段长度:150;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFileName(value: string) {
    if (value != undefined) {
      this.fileName = value;
      this.hmProperty['fileName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 文件路径(说明:;字段类型:varchar;字段长度:500;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFilePath(value: string) {
    if (value != undefined) {
      this.filePath = value;
      this.hmProperty['filePath'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 主表ID(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMainTabId(value: string) {
    if (value != undefined) {
      this.mainTabId = value;
      this.hmProperty['mainTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 视图中文名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewCnName(value: string) {
    if (value != undefined) {
      this.viewCnName = value;
      this.hmProperty['viewCnName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 界面组ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewGroupId(value: string) {
    if (value != undefined) {
      this.viewGroupId = value;
      this.hmProperty['viewGroupId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输入数据源表ID(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInRelaTabId(value: string) {
    if (value != undefined) {
      this.inRelaTabId = value;
      this.hmProperty['inRelaTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输入数据源类型(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetInSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.inSqlDsTypeId = value;
      this.hmProperty['inSqlDsTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输出数据源表ID(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOutRelaTabId(value: string) {
    if (value != undefined) {
      this.outRelaTabId = value;
      this.hmProperty['outRelaTabId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 输出数据源类型(说明:;字段类型:char;字段长度:2;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOutSqlDsTypeId(value: string) {
    if (value != undefined) {
      this.outSqlDsTypeId = value;
      this.hmProperty['outSqlDsTypeId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DetailTabType(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDetailTabType(value: string) {
    if (value != undefined) {
      this.detailTabType = value;
      this.hmProperty['detailTabType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * DetailViewId(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetDetailViewId(value: string) {
    if (value != undefined) {
      this.detailViewId = value;
      this.hmProperty['detailViewId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * MainTabType(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMainTabType(value: string) {
    if (value != undefined) {
      this.mainTabType = value;
      this.hmProperty['mainTabType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * MainViewId(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMainViewId(value: string) {
    if (value != undefined) {
      this.mainViewId = value;
      this.hmProperty['mainViewId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 生成代码日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGeneCodeDate(value: string) {
    if (value != undefined) {
      this.geneCodeDate = value;
      this.hmProperty['geneCodeDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 任务Id(说明:;字段类型:char;字段长度:16;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTaskId(value: string) {
    if (value != undefined) {
      this.taskId = value;
      this.hmProperty['taskId'] = true;
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
   * 界面母版Id(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetViewMasterId(value: string) {
    if (value != undefined) {
      this.viewMasterId = value;
      this.hmProperty['viewMasterId'] = true;
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
   * 区域数(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegionNum(value: number) {
    if (value != undefined) {
      this.regionNum = value;
      this.hmProperty['regionNum'] = true;
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
      case clsViewInfoEN.con_ViewId:
        return this.viewId;
      case clsViewInfoEN.con_ViewName:
        return this.viewName;
      case clsViewInfoEN.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsViewInfoEN.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsViewInfoEN.con_DataBaseName:
        return this.dataBaseName;
      case clsViewInfoEN.con_KeyForMainTab:
        return this.keyForMainTab;
      case clsViewInfoEN.con_KeyForDetailTab:
        return this.keyForDetailTab;
      case clsViewInfoEN.con_IsNeedSort:
        return this.isNeedSort;
      case clsViewInfoEN.con_IsNeedTransCode:
        return this.isNeedTransCode;
      case clsViewInfoEN.con_IsNeedSetExportFld:
        return this.isNeedSetExportFld;
      case clsViewInfoEN.con_UserId:
        return this.userId;
      case clsViewInfoEN.con_PrjId:
        return this.prjId;
      case clsViewInfoEN.con_ViewFunction:
        return this.viewFunction;
      case clsViewInfoEN.con_ViewDetail:
        return this.viewDetail;
      case clsViewInfoEN.con_DefaMenuName:
        return this.defaMenuName;
      case clsViewInfoEN.con_DetailTabId:
        return this.detailTabId;
      case clsViewInfoEN.con_FileName:
        return this.fileName;
      case clsViewInfoEN.con_FilePath:
        return this.filePath;
      case clsViewInfoEN.con_MainTabId:
        return this.mainTabId;
      case clsViewInfoEN.con_ViewCnName:
        return this.viewCnName;
      case clsViewInfoEN.con_ViewGroupId:
        return this.viewGroupId;
      case clsViewInfoEN.con_InRelaTabId:
        return this.inRelaTabId;
      case clsViewInfoEN.con_InSqlDsTypeId:
        return this.inSqlDsTypeId;
      case clsViewInfoEN.con_OutRelaTabId:
        return this.outRelaTabId;
      case clsViewInfoEN.con_OutSqlDsTypeId:
        return this.outSqlDsTypeId;
      case clsViewInfoEN.con_DetailTabType:
        return this.detailTabType;
      case clsViewInfoEN.con_DetailViewId:
        return this.detailViewId;
      case clsViewInfoEN.con_MainTabType:
        return this.mainTabType;
      case clsViewInfoEN.con_MainViewId:
        return this.mainViewId;
      case clsViewInfoEN.con_GeneCodeDate:
        return this.geneCodeDate;
      case clsViewInfoEN.con_TaskId:
        return this.taskId;
      case clsViewInfoEN.con_KeyId4Test:
        return this.keyId4Test;
      case clsViewInfoEN.con_ViewMasterId:
        return this.viewMasterId;
      case clsViewInfoEN.con_IsShare:
        return this.isShare;
      case clsViewInfoEN.con_ErrMsg:
        return this.errMsg;
      case clsViewInfoEN.con_UpdDate:
        return this.updDate;
      case clsViewInfoEN.con_UpdUserId:
        return this.updUserId;
      case clsViewInfoEN.con_Memo:
        return this.memo;
      case clsViewInfoEN.con_RegionNum:
        return this.regionNum;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewInfo]中不存在!`;
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
      case clsViewInfoEN.con_ViewId:
        this.viewId = strValue;
        this.hmProperty['viewId'] = true;
        break;
      case clsViewInfoEN.con_ViewName:
        this.viewName = strValue;
        this.hmProperty['viewName'] = true;
        break;
      case clsViewInfoEN.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);
        this.hmProperty['applicationTypeId'] = true;
        break;
      case clsViewInfoEN.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;
        this.hmProperty['funcModuleAgcId'] = true;
        break;
      case clsViewInfoEN.con_DataBaseName:
        this.dataBaseName = strValue;
        this.hmProperty['dataBaseName'] = true;
        break;
      case clsViewInfoEN.con_KeyForMainTab:
        this.keyForMainTab = strValue;
        this.hmProperty['keyForMainTab'] = true;
        break;
      case clsViewInfoEN.con_KeyForDetailTab:
        this.keyForDetailTab = strValue;
        this.hmProperty['keyForDetailTab'] = true;
        break;
      case clsViewInfoEN.con_IsNeedSort:
        this.isNeedSort = Boolean(strValue);
        this.hmProperty['isNeedSort'] = true;
        break;
      case clsViewInfoEN.con_IsNeedTransCode:
        this.isNeedTransCode = Boolean(strValue);
        this.hmProperty['isNeedTransCode'] = true;
        break;
      case clsViewInfoEN.con_IsNeedSetExportFld:
        this.isNeedSetExportFld = Boolean(strValue);
        this.hmProperty['isNeedSetExportFld'] = true;
        break;
      case clsViewInfoEN.con_UserId:
        this.userId = strValue;
        this.hmProperty['userId'] = true;
        break;
      case clsViewInfoEN.con_PrjId:
        this.prjId = strValue;
        this.hmProperty['prjId'] = true;
        break;
      case clsViewInfoEN.con_ViewFunction:
        this.viewFunction = strValue;
        this.hmProperty['viewFunction'] = true;
        break;
      case clsViewInfoEN.con_ViewDetail:
        this.viewDetail = strValue;
        this.hmProperty['viewDetail'] = true;
        break;
      case clsViewInfoEN.con_DefaMenuName:
        this.defaMenuName = strValue;
        this.hmProperty['defaMenuName'] = true;
        break;
      case clsViewInfoEN.con_DetailTabId:
        this.detailTabId = strValue;
        this.hmProperty['detailTabId'] = true;
        break;
      case clsViewInfoEN.con_FileName:
        this.fileName = strValue;
        this.hmProperty['fileName'] = true;
        break;
      case clsViewInfoEN.con_FilePath:
        this.filePath = strValue;
        this.hmProperty['filePath'] = true;
        break;
      case clsViewInfoEN.con_MainTabId:
        this.mainTabId = strValue;
        this.hmProperty['mainTabId'] = true;
        break;
      case clsViewInfoEN.con_ViewCnName:
        this.viewCnName = strValue;
        this.hmProperty['viewCnName'] = true;
        break;
      case clsViewInfoEN.con_ViewGroupId:
        this.viewGroupId = strValue;
        this.hmProperty['viewGroupId'] = true;
        break;
      case clsViewInfoEN.con_InRelaTabId:
        this.inRelaTabId = strValue;
        this.hmProperty['inRelaTabId'] = true;
        break;
      case clsViewInfoEN.con_InSqlDsTypeId:
        this.inSqlDsTypeId = strValue;
        this.hmProperty['inSqlDsTypeId'] = true;
        break;
      case clsViewInfoEN.con_OutRelaTabId:
        this.outRelaTabId = strValue;
        this.hmProperty['outRelaTabId'] = true;
        break;
      case clsViewInfoEN.con_OutSqlDsTypeId:
        this.outSqlDsTypeId = strValue;
        this.hmProperty['outSqlDsTypeId'] = true;
        break;
      case clsViewInfoEN.con_DetailTabType:
        this.detailTabType = strValue;
        this.hmProperty['detailTabType'] = true;
        break;
      case clsViewInfoEN.con_DetailViewId:
        this.detailViewId = strValue;
        this.hmProperty['detailViewId'] = true;
        break;
      case clsViewInfoEN.con_MainTabType:
        this.mainTabType = strValue;
        this.hmProperty['mainTabType'] = true;
        break;
      case clsViewInfoEN.con_MainViewId:
        this.mainViewId = strValue;
        this.hmProperty['mainViewId'] = true;
        break;
      case clsViewInfoEN.con_GeneCodeDate:
        this.geneCodeDate = strValue;
        this.hmProperty['geneCodeDate'] = true;
        break;
      case clsViewInfoEN.con_TaskId:
        this.taskId = strValue;
        this.hmProperty['taskId'] = true;
        break;
      case clsViewInfoEN.con_KeyId4Test:
        this.keyId4Test = strValue;
        this.hmProperty['keyId4Test'] = true;
        break;
      case clsViewInfoEN.con_ViewMasterId:
        this.viewMasterId = strValue;
        this.hmProperty['viewMasterId'] = true;
        break;
      case clsViewInfoEN.con_IsShare:
        this.isShare = Boolean(strValue);
        this.hmProperty['isShare'] = true;
        break;
      case clsViewInfoEN.con_ErrMsg:
        this.errMsg = strValue;
        this.hmProperty['errMsg'] = true;
        break;
      case clsViewInfoEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsViewInfoEN.con_UpdUserId:
        this.updUserId = strValue;
        this.hmProperty['updUserId'] = true;
        break;
      case clsViewInfoEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsViewInfoEN.con_RegionNum:
        this.regionNum = Number(strValue);
        this.hmProperty['regionNum'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[ViewInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public viewId = ''; //界面Id
  public viewName = ''; //界面名称
  public applicationTypeId = 0; //应用程序类型ID
  public funcModuleAgcId = ''; //功能模块Id
  public dataBaseName = ''; //数据库名
  public keyForMainTab = ''; //主表关键字
  public keyForDetailTab = ''; //明细表关键字
  public isNeedSort = false; //是否需要排序
  public isNeedTransCode = false; //是否需要转换代码
  public isNeedSetExportFld = false; //是否需要设置导出字段
  public userId = ''; //用户Id
  public prjId = ''; //工程Id
  public viewFunction = ''; //界面功能
  public viewDetail = ''; //界面说明
  public defaMenuName = ''; //缺省菜单名
  public detailTabId = ''; //明细表ID
  public fileName = ''; //文件名
  public filePath = ''; //文件路径
  public mainTabId = ''; //主表ID
  public viewCnName = ''; //视图中文名
  public viewGroupId = ''; //界面组ID
  public inRelaTabId = ''; //输入数据源表ID
  public inSqlDsTypeId = ''; //输入数据源类型
  public outRelaTabId = ''; //输出数据源表ID
  public outSqlDsTypeId = ''; //输出数据源类型
  public detailTabType = ''; //DetailTabType
  public detailViewId = ''; //DetailViewId
  public mainTabType = ''; //MainTabType
  public mainViewId = ''; //MainViewId
  public geneCodeDate = ''; //生成代码日期
  public taskId = ''; //任务Id
  public keyId4Test = ''; //测试关键字Id
  public viewMasterId = ''; //界面母版Id
  public isShare = false; //是否共享
  public errMsg = ''; //错误信息
  public updDate = ''; //修改日期
  public updUserId = ''; //修改用户Id
  public memo = ''; //说明
  public regionNum = 0; //区域数

  /**
   * 常量:"ViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewId(): string {
    return 'viewId';
  } //界面Id

  /**
   * 常量:"ViewName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewName(): string {
    return 'viewName';
  } //界面名称

  /**
   * 常量:"ApplicationTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"FuncModuleAgcId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"DataBaseName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DataBaseName(): string {
    return 'dataBaseName';
  } //数据库名

  /**
   * 常量:"KeyForMainTab"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyForMainTab(): string {
    return 'keyForMainTab';
  } //主表关键字

  /**
   * 常量:"KeyForDetailTab"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyForDetailTab(): string {
    return 'keyForDetailTab';
  } //明细表关键字

  /**
   * 常量:"IsNeedSort"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedSort(): string {
    return 'isNeedSort';
  } //是否需要排序

  /**
   * 常量:"IsNeedTransCode"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedTransCode(): string {
    return 'isNeedTransCode';
  } //是否需要转换代码

  /**
   * 常量:"IsNeedSetExportFld"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsNeedSetExportFld(): string {
    return 'isNeedSetExportFld';
  } //是否需要设置导出字段

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"PrjId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程Id

  /**
   * 常量:"ViewFunction"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewFunction(): string {
    return 'viewFunction';
  } //界面功能

  /**
   * 常量:"ViewDetail"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewDetail(): string {
    return 'viewDetail';
  } //界面说明

  /**
   * 常量:"DefaMenuName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DefaMenuName(): string {
    return 'defaMenuName';
  } //缺省菜单名

  /**
   * 常量:"DetailTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DetailTabId(): string {
    return 'detailTabId';
  } //明细表ID

  /**
   * 常量:"FileName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FileName(): string {
    return 'fileName';
  } //文件名

  /**
   * 常量:"FilePath"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FilePath(): string {
    return 'filePath';
  } //文件路径

  /**
   * 常量:"MainTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MainTabId(): string {
    return 'mainTabId';
  } //主表ID

  /**
   * 常量:"ViewCnName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewCnName(): string {
    return 'viewCnName';
  } //视图中文名

  /**
   * 常量:"ViewGroupId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewGroupId(): string {
    return 'viewGroupId';
  } //界面组ID

  /**
   * 常量:"InRelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InRelaTabId(): string {
    return 'inRelaTabId';
  } //输入数据源表ID

  /**
   * 常量:"InSqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_InSqlDsTypeId(): string {
    return 'inSqlDsTypeId';
  } //输入数据源类型

  /**
   * 常量:"OutRelaTabId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutRelaTabId(): string {
    return 'outRelaTabId';
  } //输出数据源表ID

  /**
   * 常量:"OutSqlDsTypeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OutSqlDsTypeId(): string {
    return 'outSqlDsTypeId';
  } //输出数据源类型

  /**
   * 常量:"DetailTabType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DetailTabType(): string {
    return 'detailTabType';
  } //DetailTabType

  /**
   * 常量:"DetailViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DetailViewId(): string {
    return 'detailViewId';
  } //DetailViewId

  /**
   * 常量:"MainTabType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MainTabType(): string {
    return 'mainTabType';
  } //MainTabType

  /**
   * 常量:"MainViewId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_MainViewId(): string {
    return 'mainViewId';
  } //MainViewId

  /**
   * 常量:"GeneCodeDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GeneCodeDate(): string {
    return 'geneCodeDate';
  } //生成代码日期

  /**
   * 常量:"TaskId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TaskId(): string {
    return 'taskId';
  } //任务Id

  /**
   * 常量:"KeyId4Test"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_KeyId4Test(): string {
    return 'keyId4Test';
  } //测试关键字Id

  /**
   * 常量:"ViewMasterId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ViewMasterId(): string {
    return 'viewMasterId';
  } //界面母版Id

  /**
   * 常量:"IsShare"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsShare(): string {
    return 'isShare';
  } //是否共享

  /**
   * 常量:"ErrMsg"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明

  /**
   * 常量:"RegionNum"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegionNum(): string {
    return 'regionNum';
  } //区域数

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
    //return propName in new clsViewInfoEN();
    const instance = new clsViewInfoEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}
