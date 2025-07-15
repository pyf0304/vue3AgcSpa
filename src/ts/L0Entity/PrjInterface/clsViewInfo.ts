export class clsViewInfo {
  public static _CurrTabName = 'ViewInfo'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'ViewId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 38;
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
  ];
  //以下是属性变量

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsViewInfo.con_ViewId:
        return this.viewId;
      case clsViewInfo.con_ViewName:
        return this.viewName;
      case clsViewInfo.con_ApplicationTypeId:
        return this.applicationTypeId;
      case clsViewInfo.con_FuncModuleAgcId:
        return this.funcModuleAgcId;
      case clsViewInfo.con_DataBaseName:
        return this.dataBaseName;
      case clsViewInfo.con_KeyForMainTab:
        return this.keyForMainTab;
      case clsViewInfo.con_KeyForDetailTab:
        return this.keyForDetailTab;
      case clsViewInfo.con_IsNeedSort:
        return this.isNeedSort;
      case clsViewInfo.con_IsNeedTransCode:
        return this.isNeedTransCode;
      case clsViewInfo.con_IsNeedSetExportFld:
        return this.isNeedSetExportFld;
      case clsViewInfo.con_UserId:
        return this.userId;
      case clsViewInfo.con_PrjId:
        return this.prjId;
      case clsViewInfo.con_ViewFunction:
        return this.viewFunction;
      case clsViewInfo.con_ViewDetail:
        return this.viewDetail;
      case clsViewInfo.con_DefaMenuName:
        return this.defaMenuName;
      case clsViewInfo.con_DetailTabId:
        return this.detailTabId;
      case clsViewInfo.con_FileName:
        return this.fileName;
      case clsViewInfo.con_FilePath:
        return this.filePath;
      case clsViewInfo.con_MainTabId:
        return this.mainTabId;
      case clsViewInfo.con_ViewCnName:
        return this.viewCnName;
      case clsViewInfo.con_ViewGroupId:
        return this.viewGroupId;
      case clsViewInfo.con_InRelaTabId:
        return this.inRelaTabId;
      case clsViewInfo.con_InSqlDsTypeId:
        return this.inSqlDsTypeId;
      case clsViewInfo.con_OutRelaTabId:
        return this.outRelaTabId;
      case clsViewInfo.con_OutSqlDsTypeId:
        return this.outSqlDsTypeId;
      case clsViewInfo.con_DetailTabType:
        return this.detailTabType;
      case clsViewInfo.con_DetailViewId:
        return this.detailViewId;
      case clsViewInfo.con_MainTabType:
        return this.mainTabType;
      case clsViewInfo.con_MainViewId:
        return this.mainViewId;
      case clsViewInfo.con_GeneCodeDate:
        return this.geneCodeDate;
      case clsViewInfo.con_TaskId:
        return this.taskId;
      case clsViewInfo.con_KeyId4Test:
        return this.keyId4Test;
      case clsViewInfo.con_ViewMasterId:
        return this.viewMasterId;
      case clsViewInfo.con_IsShare:
        return this.isShare;
      case clsViewInfo.con_ErrMsg:
        return this.errMsg;
      case clsViewInfo.con_UpdDate:
        return this.updDate;
      case clsViewInfo.con_UpdUserId:
        return this.updUserId;
      case clsViewInfo.con_Memo:
        return this.memo;

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
      case clsViewInfo.con_ViewId:
        this.viewId = strValue;

        break;
      case clsViewInfo.con_ViewName:
        this.viewName = strValue;

        break;
      case clsViewInfo.con_ApplicationTypeId:
        this.applicationTypeId = Number(strValue);

        break;
      case clsViewInfo.con_FuncModuleAgcId:
        this.funcModuleAgcId = strValue;

        break;
      case clsViewInfo.con_DataBaseName:
        this.dataBaseName = strValue;

        break;
      case clsViewInfo.con_KeyForMainTab:
        this.keyForMainTab = strValue;

        break;
      case clsViewInfo.con_KeyForDetailTab:
        this.keyForDetailTab = strValue;

        break;
      case clsViewInfo.con_IsNeedSort:
        this.isNeedSort = Boolean(strValue);

        break;
      case clsViewInfo.con_IsNeedTransCode:
        this.isNeedTransCode = Boolean(strValue);

        break;
      case clsViewInfo.con_IsNeedSetExportFld:
        this.isNeedSetExportFld = Boolean(strValue);

        break;
      case clsViewInfo.con_UserId:
        this.userId = strValue;

        break;
      case clsViewInfo.con_PrjId:
        this.prjId = strValue;

        break;
      case clsViewInfo.con_ViewFunction:
        this.viewFunction = strValue;

        break;
      case clsViewInfo.con_ViewDetail:
        this.viewDetail = strValue;

        break;
      case clsViewInfo.con_DefaMenuName:
        this.defaMenuName = strValue;

        break;
      case clsViewInfo.con_DetailTabId:
        this.detailTabId = strValue;

        break;
      case clsViewInfo.con_FileName:
        this.fileName = strValue;

        break;
      case clsViewInfo.con_FilePath:
        this.filePath = strValue;

        break;
      case clsViewInfo.con_MainTabId:
        this.mainTabId = strValue;

        break;
      case clsViewInfo.con_ViewCnName:
        this.viewCnName = strValue;

        break;
      case clsViewInfo.con_ViewGroupId:
        this.viewGroupId = strValue;

        break;
      case clsViewInfo.con_InRelaTabId:
        this.inRelaTabId = strValue;

        break;
      case clsViewInfo.con_InSqlDsTypeId:
        this.inSqlDsTypeId = strValue;

        break;
      case clsViewInfo.con_OutRelaTabId:
        this.outRelaTabId = strValue;

        break;
      case clsViewInfo.con_OutSqlDsTypeId:
        this.outSqlDsTypeId = strValue;

        break;
      case clsViewInfo.con_DetailTabType:
        this.detailTabType = strValue;

        break;
      case clsViewInfo.con_DetailViewId:
        this.detailViewId = strValue;

        break;
      case clsViewInfo.con_MainTabType:
        this.mainTabType = strValue;

        break;
      case clsViewInfo.con_MainViewId:
        this.mainViewId = strValue;

        break;
      case clsViewInfo.con_GeneCodeDate:
        this.geneCodeDate = strValue;

        break;
      case clsViewInfo.con_TaskId:
        this.taskId = strValue;

        break;
      case clsViewInfo.con_KeyId4Test:
        this.keyId4Test = strValue;

        break;
      case clsViewInfo.con_ViewMasterId:
        this.viewMasterId = strValue;

        break;
      case clsViewInfo.con_IsShare:
        this.isShare = Boolean(strValue);

        break;
      case clsViewInfo.con_ErrMsg:
        this.errMsg = strValue;

        break;
      case clsViewInfo.con_UpdDate:
        this.updDate = strValue;

        break;
      case clsViewInfo.con_UpdUserId:
        this.updUserId = strValue;

        break;
      case clsViewInfo.con_Memo:
        this.memo = strValue;

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
  public prjId = ''; //工程ID
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

  /**
   * 常量:"ViewId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewId(): string {
    return 'viewId';
  } //界面Id

  /**
   * 常量:"ViewName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewName(): string {
    return 'viewName';
  } //界面名称

  /**
   * 常量:"ApplicationTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ApplicationTypeId(): string {
    return 'applicationTypeId';
  } //应用程序类型ID

  /**
   * 常量:"FuncModuleAgcId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FuncModuleAgcId(): string {
    return 'funcModuleAgcId';
  } //功能模块Id

  /**
   * 常量:"DataBaseName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DataBaseName(): string {
    return 'dataBaseName';
  } //数据库名

  /**
   * 常量:"KeyForMainTab"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_KeyForMainTab(): string {
    return 'keyForMainTab';
  } //主表关键字

  /**
   * 常量:"KeyForDetailTab"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_KeyForDetailTab(): string {
    return 'keyForDetailTab';
  } //明细表关键字

  /**
   * 常量:"IsNeedSort"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNeedSort(): string {
    return 'isNeedSort';
  } //是否需要排序

  /**
   * 常量:"IsNeedTransCode"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNeedTransCode(): string {
    return 'isNeedTransCode';
  } //是否需要转换代码

  /**
   * 常量:"IsNeedSetExportFld"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsNeedSetExportFld(): string {
    return 'isNeedSetExportFld';
  } //是否需要设置导出字段

  /**
   * 常量:"UserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户Id

  /**
   * 常量:"PrjId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_PrjId(): string {
    return 'prjId';
  } //工程ID

  /**
   * 常量:"ViewFunction"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewFunction(): string {
    return 'viewFunction';
  } //界面功能

  /**
   * 常量:"ViewDetail"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewDetail(): string {
    return 'viewDetail';
  } //界面说明

  /**
   * 常量:"DefaMenuName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DefaMenuName(): string {
    return 'defaMenuName';
  } //缺省菜单名

  /**
   * 常量:"DetailTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DetailTabId(): string {
    return 'detailTabId';
  } //明细表ID

  /**
   * 常量:"FileName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FileName(): string {
    return 'fileName';
  } //文件名

  /**
   * 常量:"FilePath"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_FilePath(): string {
    return 'filePath';
  } //文件路径

  /**
   * 常量:"MainTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MainTabId(): string {
    return 'mainTabId';
  } //主表ID

  /**
   * 常量:"ViewCnName"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewCnName(): string {
    return 'viewCnName';
  } //视图中文名

  /**
   * 常量:"ViewGroupId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewGroupId(): string {
    return 'viewGroupId';
  } //界面组ID

  /**
   * 常量:"InRelaTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InRelaTabId(): string {
    return 'inRelaTabId';
  } //输入数据源表ID

  /**
   * 常量:"InSqlDsTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_InSqlDsTypeId(): string {
    return 'inSqlDsTypeId';
  } //输入数据源类型

  /**
   * 常量:"OutRelaTabId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OutRelaTabId(): string {
    return 'outRelaTabId';
  } //输出数据源表ID

  /**
   * 常量:"OutSqlDsTypeId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OutSqlDsTypeId(): string {
    return 'outSqlDsTypeId';
  } //输出数据源类型

  /**
   * 常量:"DetailTabType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DetailTabType(): string {
    return 'detailTabType';
  } //DetailTabType

  /**
   * 常量:"DetailViewId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_DetailViewId(): string {
    return 'detailViewId';
  } //DetailViewId

  /**
   * 常量:"MainTabType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MainTabType(): string {
    return 'mainTabType';
  } //MainTabType

  /**
   * 常量:"MainViewId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_MainViewId(): string {
    return 'mainViewId';
  } //MainViewId

  /**
   * 常量:"GeneCodeDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_GeneCodeDate(): string {
    return 'geneCodeDate';
  } //生成代码日期

  /**
   * 常量:"TaskId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_TaskId(): string {
    return 'taskId';
  } //任务Id

  /**
   * 常量:"KeyId4Test"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_KeyId4Test(): string {
    return 'keyId4Test';
  } //测试关键字Id

  /**
   * 常量:"ViewMasterId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ViewMasterId(): string {
    return 'viewMasterId';
  } //界面母版Id

  /**
   * 常量:"IsShare"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IsShare(): string {
    return 'isShare';
  } //是否共享

  /**
   * 常量:"ErrMsg"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_ErrMsg(): string {
    return 'errMsg';
  } //错误信息

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUserId"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //说明
}
