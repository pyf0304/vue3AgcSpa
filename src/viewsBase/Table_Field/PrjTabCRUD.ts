/**
 * 类名:PrjTabCRUD(界面:PrjTabCRUD,00050235)
 * 表名:PrjTab(00050009)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 01:35:51
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { clsPrjTabENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabENEx';
import {
  CombinePrjTabCondition,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refvPrjTab_List,
} from '@/views/Table_Field/PrjTabVueShare';
import {
  PrjTab_GetRecCountByCondAsync,
  PrjTab_GetObjLstAsync,
  PrjTab_DelRecordAsync,
  PrjTab_GetObjByTabIdAsync,
  PrjTab_GetObjLstByTabIdLstAsync,
  PrjTab_GetMaxStrIdByPrefixAsync,
  PrjTab_AddNewRecordAsync,
  PrjTab_UpdateRecordAsync,
  PrjTab_DelPrjTabsAsync,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabWApi';
import {
  PrjTabEx_CopyToEx,
  PrjTabEx_FuncMapByFldName,
  PrjTabEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import { TabState_BindDdl_TabStateIdInDivCache } from '@/ts/L3ForWApi/Table_Field/clsTabStateWApi';
import { CacheMode_BindDdl_CacheModeIdByInUseInDivCache } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { FuncModule_Agc_BindDdl_FuncModuleAgcIdByPrjIdInDivCache } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPrjTabEN } from '@/ts/L0Entity/Table_Field/clsPrjTabEN';
import {
  ObjectAssign,
  BindTab,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPager } from '@/ts/PubFun/clsPager';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { ListPara, clsOperateList, GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
/** PrjTabCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class PrjTabCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: PrjTabCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    PrjTabCRUD.objPageCRUD = this;
    this.objPager = new clsPager(this);
  }
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    return divVarSet.refDivList;
  }
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return divVarSet.refDivLayout;
  }
  /**
   * 获取当前界面的主表名
   **/
  public get thisTabName(): string {
    return clsPrjTabEN._CurrTabName;
  }
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public abstract InitVarSet(): void;
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public abstract InitCtlVar(): void;

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      if (viewVarSet.sortPrjTabBy == '') viewVarSet.sortPrjTabBy = `${clsPrjTabEN.con_TabId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      if (viewVarSet.sortPrjTabBy == '') viewVarSet.sortPrjTabBy = `${clsPrjTabEN.con_TabId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_PrjTab4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrPrjTabObjLst: Array<clsPrjTabEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrPrjTabObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsPrjTabEN = arrPrjTabObjLst[i];
      const objRow: Record<string, any> = {};
      for (let j = 0; j < intColNum; j++) {
        const fldName = arrDataColumn[j].fldName;
        const colHeader = arrDataColumn[j].colHeader;
        const value = objEN.GetFldValue(fldName); // Get the value using fldName
        objRow[colHeader] = value; // Use colHeader as the property name
      }
      arrData.push(objRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('工程表({0})导出.xlsx', clsPrjTabEN._CurrTabName);
    const strSheetName = '工程表列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrPrjTabExObjLst: Array<clsPrjTabENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrPrjTabExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsPrjTabENEx = arrPrjTabExObjLst[i];
      const objRow: Record<string, any> = {};
      for (let j = 0; j < intColNum; j++) {
        const fldName = arrDataColumn[j].fldName;
        const colHeader = arrDataColumn[j].colHeader;
        const value = objEN.GetFldValue(fldName); // Get the value using fldName
        objRow[colHeader] = value; // Use colHeader as the property name
      }
      arrData.push(objRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('工程表({0})导出.xlsx', clsPrjTabEN._CurrTabName);
    const strSheetName = '工程表列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func_NoCache)
   **/
  public async ExportExcel_PrjTab4Func(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_PrjTab4Func.name;
    if (viewVarSet.sortPrjTabBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortPrjTabBy)为空,请检查!(In BindGv_PrjTabCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const strWhereCond = await CombinePrjTabCondition();
    let arrPrjTabExObjLst: Array<clsPrjTabENEx> = [];
    try {
      this.recCount = await PrjTab_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      const arrPrjTabObjLst = await PrjTab_GetObjLstAsync(strWhereCond);
      arrPrjTabExObjLst = arrPrjTabObjLst.map(PrjTabEx_CopyToEx);
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrPrjTabExObjLst.length == 0) {
      const strKey = Format('{0}', clsPrjTabEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'tabId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '表ID',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 2,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'funcModuleAgcId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '功能模块名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 2,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'relaTabId4View',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'RelaTabName4View',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 2,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'tabName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '表名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 3,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'tabCnName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '表中文名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 4,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isReleToSqlTab',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否与SQL表相关',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 5,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'keyword',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '关键字',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 6,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'orderNum4Refer',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '引用序号',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 8,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isNeedGeneIndexer',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否需要生成索引器',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 9,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isUseCache',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否使用Cache',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 11,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'updUserId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改用户Id',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 12,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 13,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'tabStateId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '表状态',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 14,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'tabTypeId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '表类型',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 16,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'prjId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '工程ID',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 17,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'prjId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '工程名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 18,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      try {
        await this.ExtendFldFuncMap(arrPrjTabExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrPrjTabExObjLst = arrPrjTabExObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrPrjTabExObjLst, arrDataColumn);
      //console.log("完成BindGv_PrjTab!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[TabStateId]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_TabStateIdInDivInFeature() {
    await TabState_BindDdl_TabStateIdInDivCache(divVarSet.refDivFunction, 'ddlTabStateId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[CacheModeId]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_CacheModeIdInDivInFeature(bolInUse: boolean) {
    await CacheMode_BindDdl_CacheModeIdByInUseInDivCache(
      divVarSet.refDivFunction,
      'ddlCacheModeId',
      bolInUse,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[FuncModuleAgcId]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_FuncModuleAgcIdInDivInFeature(strPrjId: string) {
    if (IsNullOrEmpty(strPrjId) == true) {
      const strMsg = Format('参数:[strPrjId]不能为空!(In .SetDdl_FuncModuleAgcIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(.SetDdl_FuncModuleAgcIdInDivInFeature)',
        strPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strPrjId) == true) {
      const strMsg = Format('参数:[strPrjId]不能为空!(In .SetDdl_FuncModuleAgcIdInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(.SetDdl_FuncModuleAgcIdInDivInFeature)',
        strPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await FuncModule_Agc_BindDdl_FuncModuleAgcIdByPrjIdInDivCache(
      divVarSet.refDivFunction,
      'ddlFuncModuleAgcId',
      strPrjId,
    ); //
  }

  /** 设置字段值-FuncModuleAgcId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetFuncModuleAgcId_Click() {
    const strThisFuncName = this.btnSetFuncModuleAgcId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置功能模块Id的${this.thisTabName}记录!`);
        return '';
      }
      const strFuncModuleAgcId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlFuncModuleAgcId_SetFldValue',
      );
      if (strFuncModuleAgcId == '') {
        const strMsg = '请输入功能模块Id(FuncModuleAgcId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strFuncModuleAgcId=' + strFuncModuleAgcId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetFuncModuleAgcId(arrKeyIds, strFuncModuleAgcId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-TabStateId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetTabStateId_Click() {
    const strThisFuncName = this.btnSetTabStateId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置表状态ID的${this.thisTabName}记录!`);
        return '';
      }
      const strTabStateId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlTabStateId_SetFldValue',
      );
      if (strTabStateId == '') {
        const strMsg = '请输入表状态ID(TabStateId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strTabStateId=' + strTabStateId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetTabStateId(arrKeyIds, strTabStateId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-CacheModeId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetCacheModeId_Click() {
    const strThisFuncName = this.btnSetCacheModeId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置缓存方式Id的${this.thisTabName}记录!`);
        return '';
      }
      const strCacheModeId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlCacheModeId_SetFldValue',
      );
      if (strCacheModeId == '') {
        const strMsg = '请输入缓存方式Id(CacheModeId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strCacheModeId=' + strCacheModeId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetCacheModeId(arrKeyIds, strCacheModeId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要克隆的${this.thisTabName}记录!`);
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strTabId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      await this.DelRecord(strKeyId);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里选择记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   **/
  public async btnSelectRecordInTab_Click(strTabId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strTabId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strTabId);
    } catch (e) {
      const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   **/
  public async DelRecord(strTabId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await PrjTab_DelRecordAsync(strTabId);
      if (returnInt > 0) {
        //PrjTab_ReFreshCache();
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字选择相应的记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
   * @param sender:参数列表
   **/
  public async SelectRecord(strTabId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objPrjTabEN = await PrjTab_GetObjByTabIdAsync(strTabId);
      console.log('完成SelectRecord!', objPrjTabEN);
      Redirect('/Index/Main_PrjTab');
    } catch (e) {
      const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_PrjTab4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   **/
  public async btnExportExcel_Click() {
    await this.ExportExcel_PrjTab4Func();
  }

  /** 显示PrjTab对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrPrjTabObjLst:需要绑定的对象列表
   **/
  public async BindTab_PrjTab(
    divContainer: HTMLDivElement,
    arrPrjTabExObjLst: Array<clsPrjTabENEx>,
  ) {
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabId,
        sortBy: clsPrjTabEN.con_TabId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabName,
        sortBy: clsPrjTabEN.con_TabName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabCnName,
        sortBy: clsPrjTabEN.con_TabCnName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表中文名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_FuncModuleName,
        sortBy: 'funcModuleName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '功能模块名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabId,
        sortBy: 'fldNum',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_SqlDsTypeName,
        sortBy: 'sqlDsTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Sql数据源名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_TabStateName,
        sortBy: 'tabStateName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表状态名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_TabMainTypeName,
        sortBy: 'tabMainTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表主类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_TabTypeName,
        sortBy: 'tabTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_ParentClass,
        sortBy: clsPrjTabEN.con_ParentClass,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '父类',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_DateTimeSim,
        sortBy: 'dateTime_Sim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_CacheClassifyField,
        sortBy: clsPrjTabEN.con_CacheClassifyField,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存分类字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_IsUseCache,
        sortBy: clsPrjTabEN.con_IsUseCache,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Cache?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_IsReleToSqlTab,
        sortBy: clsPrjTabEN.con_IsReleToSqlTab,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表相关',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_RelaTabName4View,
        sortBy: 'relaTabId4View',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'RelaTabName4View',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_OrderNum4Refer,
        sortBy: clsPrjTabEN.con_OrderNum4Refer,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '引用序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refvPrjTab_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrPrjTabExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_PrjTab函数中，divDataLst不存在!');
        return;
      }
      await BindTab(divDataLst, arrPrjTabExObjLst, arrDataColumn, clsPrjTabEN.con_TabId, this);
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /**
   * 是否显示所有错误
   **/
  public get dispAllErrMsg_q(): boolean {
    return true;
  }

  /** 显示PrjTab对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrPrjTabExObjLst:需要绑定的对象列表
   **/
  public async BindTab_PrjTab4Func(
    divContainer: HTMLDivElement,
    arrPrjTabExObjLst: Array<clsPrjTabENEx>,
  ) {
    const strThisFuncName = this.BindTab_PrjTab4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabId,
        sortBy: clsPrjTabEN.con_TabId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabName,
        sortBy: clsPrjTabEN.con_TabName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabCnName,
        sortBy: clsPrjTabEN.con_TabCnName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表中文名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_FuncModuleName,
        sortBy: 'funcModuleName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '功能模块名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_TabId,
        sortBy: 'fldNum',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_SqlDsTypeName,
        sortBy: 'sqlDsTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Sql数据源名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_TabStateName,
        sortBy: 'tabStateName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表状态名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_TabMainTypeName,
        sortBy: 'tabMainTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表主类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_TabTypeName,
        sortBy: 'tabTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_ParentClass,
        sortBy: clsPrjTabEN.con_ParentClass,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '父类',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_DateTimeSim,
        sortBy: 'dateTime_Sim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_CacheClassifyField,
        sortBy: clsPrjTabEN.con_CacheClassifyField,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存分类字段',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_IsUseCache,
        sortBy: clsPrjTabEN.con_IsUseCache,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Cache?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_IsReleToSqlTab,
        sortBy: clsPrjTabEN.con_IsReleToSqlTab,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表相关',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabENEx.con_RelaTabName4View,
        sortBy: 'relaTabId4View',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'RelaTabName4View',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsPrjTabEN.con_OrderNum4Refer,
        sortBy: clsPrjTabEN.con_OrderNum4Refer,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '引用序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrPrjTabExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refvPrjTab_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrPrjTabExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_PrjTab4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(divDataLst, arrPrjTabExObjLst, arrDataColumn, clsPrjTabEN.con_TabId, this);
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrPrjTabExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrPrjTabExObjLst: Array<clsPrjTabENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsPrjTabEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrPrjTabExObjLst) {
        await PrjTabEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 函数功能:在数据 列表中跳转到某一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   * @param intPageIndex:页序号
   **/
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    //console.log("跳转到" + intPageIndex + "页");
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_PrjTab4Func(this.listPara.listDiv);
  }

  /** 函数功能:在数据列表中跳转到下一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
   **/
  public async NextPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) + 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:在数据列表中跳转到前一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
   **/
  public async PrevPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) - 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_PrjTab4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_PrjTab4Func.name;
    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    if (viewVarSet.sortPrjTabBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortPrjTabBy)为空,请检查!(In BindGv_PrjTabCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombinePrjTabCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPrjTabExObjLst: Array<clsPrjTabENEx> = [];
    try {
      this.recCount = await PrjTab_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrPrjTabExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortPrjTabBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrPrjTabExObjLst = await PrjTabEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrPrjTabExObjLst.length == 0) {
      const strKey = Format('{0}', clsPrjTabEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_PrjTab4Func(divList, arrPrjTabExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objPrjTabENS:源对象
   * @returns 目标对象=>clsPrjTabEN:objPrjTabENT
   **/
  public CopyToEx(objPrjTabENS: clsPrjTabEN): clsPrjTabENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objPrjTabENT = new clsPrjTabENEx();
    try {
      ObjectAssign(objPrjTabENT, objPrjTabENS);
      return objPrjTabENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objPrjTabENT;
    }
  }

  /**
   * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
   * 作者:pyf
   * 日期:
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
   * @param a:比较的第1个对象
   * @param b:比较的第1个对象
   * @returns 返回两个对象比较的结果
   **/
  public SortFunExportExcel(a: clsPrjTabEN, b: clsPrjTabEN): number {
    if (a.isNeedTransCode == b.isNeedTransCode) {
      if (a.isNeedTransCode == null) return -1;
      if (b.isNeedTransCode == null) return 1;
      return a.isNeedTransCode ? -1 : 1;
    } else {
      if (b.dataBaseName == null) return -1;
      if (a.dataBaseName == null) return 1;
      return a.dataBaseName.localeCompare(b.dataBaseName);
    }
  }

  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public abstract SortColumn(sortColumnKey: string, sortDirection: string): void;
  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortPrjTabBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clsPrjTabENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortPrjTabBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    PrjTabCRUD.sortFunStatic = sortFun;
    await this.BindGv_PrjTab4Func(this.listPara.listDiv);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrTabId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrPrjTabObjLst = await PrjTab_GetObjLstByTabIdLstAsync(arrTabId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrPrjTabObjLst) {
        const strMaxStrId = await PrjTab_GetMaxStrIdByPrefixAsync(objInFor.prjId);
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.tabId = strMaxStrId;
        const returnBool = await PrjTab_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          //PrjTab_ReFreshCache();
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 设置字段值-FuncModuleAgcId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetFuncModuleAgcId(arrTabId: Array<string>, strFuncModuleAgcId: string) {
    const strThisFuncName = this.SetFuncModuleAgcId.name;
    if (strFuncModuleAgcId == null || strFuncModuleAgcId == '') {
      const strMsg = '请输入功能模块Id(FuncModuleAgcId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrTabId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrPrjTabObjLst = await PrjTab_GetObjLstByTabIdLstAsync(arrTabId);
      let intCount = 0;
      for (const objInFor of arrPrjTabObjLst) {
        const objPrjTabEN = new clsPrjTabEN();
        ObjectAssign(objPrjTabEN, objInFor);
        objPrjTabEN.SetTabId(objInFor.tabId);
        objPrjTabEN.SetFuncModuleAgcId(strFuncModuleAgcId);
        let returnBool = false;
        try {
          objPrjTabEN.sfUpdFldSetStr = objPrjTabEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await PrjTab_UpdateRecordAsync(objPrjTabEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          //PrjTab_DeleteKeyIdCache(objInFor.tabId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        //PrjTab_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-TabStateId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetTabStateId(arrTabId: Array<string>, strTabStateId: string) {
    const strThisFuncName = this.SetTabStateId.name;
    if (strTabStateId == null || strTabStateId == '') {
      const strMsg = '请输入表状态ID(TabStateId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrTabId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrPrjTabObjLst = await PrjTab_GetObjLstByTabIdLstAsync(arrTabId);
      let intCount = 0;
      for (const objInFor of arrPrjTabObjLst) {
        const objPrjTabEN = new clsPrjTabEN();
        ObjectAssign(objPrjTabEN, objInFor);
        objPrjTabEN.SetTabId(objInFor.tabId);
        objPrjTabEN.SetTabStateId(strTabStateId);
        let returnBool = false;
        try {
          objPrjTabEN.sfUpdFldSetStr = objPrjTabEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await PrjTab_UpdateRecordAsync(objPrjTabEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          //PrjTab_DeleteKeyIdCache(objInFor.tabId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        //PrjTab_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-CacheModeId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetCacheModeId(arrTabId: Array<string>, strCacheModeId: string) {
    const strThisFuncName = this.SetCacheModeId.name;
    if (strCacheModeId == null || strCacheModeId == '') {
      const strMsg = '请输入缓存方式Id(CacheModeId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrTabId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrPrjTabObjLst = await PrjTab_GetObjLstByTabIdLstAsync(arrTabId);
      let intCount = 0;
      for (const objInFor of arrPrjTabObjLst) {
        const objPrjTabEN = new clsPrjTabEN();
        ObjectAssign(objPrjTabEN, objInFor);
        objPrjTabEN.SetTabId(objInFor.tabId);
        objPrjTabEN.SetCacheModeId(strCacheModeId);
        let returnBool = false;
        try {
          objPrjTabEN.sfUpdFldSetStr = objPrjTabEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await PrjTab_UpdateRecordAsync(objPrjTabEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          //PrjTab_DeleteKeyIdCache(objInFor.tabId);
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        //PrjTab_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrTabId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await PrjTab_DelPrjTabsAsync(arrTabId);
      if (returnInt > 0) {
        //PrjTab_ReFreshCache();
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示{0}对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
   * @param divContainer:显示容器
   * @param objPrjTab:需要显示的对象
   **/
  public ShowPrjTabObj(divContainer: HTMLDivElement, objPrjTab: clsPrjTabEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objPrjTab);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objPrjTab.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjPrjTabEN:表实体类对象
   * @returns 列表的第一个关键字值
   **/
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字!目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /** 函数功能:预留函数,在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }

  /** 函数功能:设置当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
   * @param value:页序号
   * @param strDivName4Pager:当前分页所在的层(div)
   **/
  public SetCurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }

  /**
   * 设置界面标题-相当使用ViewState功能
   **/
  public set ViewTitle(value: string) {
    SetLabelHtmlByIdInDivObj(divVarSet.refDivLayout, 'lblViewTitle', value);
  }
  /**
   * 设置界面标题
   **/
  public get ViewTitle(): string {
    const strValue = GetLabelHtmlInDivObj(divVarSet.refDivLayout, 'lblViewTitle');
    return strValue;
  }
}
