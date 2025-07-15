/**
 * 类名:ViewIdGCVariableRelaCRUD(界面:ViewIdGCVariableRelaCRUD,00050339)
 * 表名:ViewIdGCVariableRela(00050631)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 01:36:04
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:生成代码(GeneCode)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { clsViewIdGCVariableRelaENEx } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaENEx';
import {
  CombineViewIdGCVariableRelaCondition,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refViewIdGCVariableRela_List,
} from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import {
  ViewIdGCVariableRela_GetRecCountByCondAsync,
  ViewIdGCVariableRela_GetObjLstAsync,
  ViewIdGCVariableRela_DelRecKeyLstAsync,
  ViewIdGCVariableRela_GetObjByKeyLstAsync,
  ViewIdGCVariableRela_SplitKeyLst,
  ViewIdGCVariableRela_UpdateRecordAsync,
  ViewIdGCVariableRela_DelRecKeyLstsAsync,
} from '@/ts/L3ForWApi/GeneCode/clsViewIdGCVariableRelaWApi';
import {
  ViewIdGCVariableRelaEx_CopyToEx,
  ViewIdGCVariableRelaEx_FuncMapByFldName,
  ViewIdGCVariableRelaEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/GeneCode/clsViewIdGCVariableRelaExWApi';
import { RetrievalMethod_BindDdl_RetrievalMethodIdInDivCache } from '@/ts/L3ForWApi/SysPara/clsRetrievalMethodWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetSelectValueInDivObj,
  GetCheckedKeyLstsInDivObj,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewIdGCVariableRelaEN } from '@/ts/L0Entity/GeneCode/clsViewIdGCVariableRelaEN';
import {
  ObjectAssign,
  BindTab_KeyLst,
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
/** ViewIdGCVariableRelaCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class ViewIdGCVariableRelaCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: ViewIdGCVariableRelaCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    ViewIdGCVariableRelaCRUD.objPageCRUD = this;
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
    return clsViewIdGCVariableRelaEN._CurrTabName;
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
      if (viewVarSet.sortViewIdGCVariableRelaBy == '')
        viewVarSet.sortViewIdGCVariableRelaBy = `${clsViewIdGCVariableRelaEN.con_VarId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
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
      if (viewVarSet.sortViewIdGCVariableRelaBy == '')
        viewVarSet.sortViewIdGCVariableRelaBy = `${clsViewIdGCVariableRelaEN.con_VarId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
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
    await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrViewIdGCVariableRelaObjLst: Array<clsViewIdGCVariableRelaEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrViewIdGCVariableRelaObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsViewIdGCVariableRelaEN = arrViewIdGCVariableRelaObjLst[i];
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
    const strFileName = Format(
      '界面变量关系({0})导出.xlsx',
      clsViewIdGCVariableRelaEN._CurrTabName,
    );
    const strSheetName = '界面变量关系列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrViewIdGCVariableRelaExObjLst: Array<clsViewIdGCVariableRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrViewIdGCVariableRelaExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsViewIdGCVariableRelaENEx = arrViewIdGCVariableRelaExObjLst[i];
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
    const strFileName = Format(
      '界面变量关系({0})导出.xlsx',
      clsViewIdGCVariableRelaEN._CurrTabName,
    );
    const strSheetName = '界面变量关系列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func_NoCache)
   **/
  public async ExportExcel_ViewIdGCVariableRela4Func(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_ViewIdGCVariableRela4Func.name;
    if (viewVarSet.sortViewIdGCVariableRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortViewIdGCVariableRelaBy)为空,请检查!(In BindGv_ViewIdGCVariableRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const strWhereCond = await CombineViewIdGCVariableRelaCondition();
    let arrViewIdGCVariableRelaExObjLst: Array<clsViewIdGCVariableRelaENEx> = [];
    try {
      this.recCount = await ViewIdGCVariableRela_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      const arrViewIdGCVariableRelaObjLst = await ViewIdGCVariableRela_GetObjLstAsync(strWhereCond);
      arrViewIdGCVariableRelaExObjLst = arrViewIdGCVariableRelaObjLst.map(
        ViewIdGCVariableRelaEx_CopyToEx,
      );
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrViewIdGCVariableRelaExObjLst.length == 0) {
      const strKey = Format('{0}', clsViewIdGCVariableRelaEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'varId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '变量Id',
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
          fldName: 'viewId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '界面Id',
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
          fldName: 'retrievalMethodId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '获取方式Id',
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
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改者',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '说明',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 7,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'varId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '变量名',
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
          fldName: 'varId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '变量类型名',
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
          fldName: 'retrievalMethodId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '获取方式名',
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
          fldName: 'viewId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '界面名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 11,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      try {
        await this.ExtendFldFuncMap(arrViewIdGCVariableRelaExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrViewIdGCVariableRelaExObjLst = arrViewIdGCVariableRelaExObjLst.sort(
        this.SortFunExportExcel,
      );
      return this.CombineData(arrViewIdGCVariableRelaExObjLst, arrDataColumn);
      //console.log("完成BindGv_ViewIdGCVariableRela!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[RetrievalMethodId]
   * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_RetrievalMethodIdInDivInFeature() {
    await RetrievalMethod_BindDdl_RetrievalMethodIdInDivCache(
      divVarSet.refDivFunction,
      'ddlRetrievalMethodId',
    ); //
  }

  /** 设置字段值-RetrievalMethodId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetRetrievalMethodId_Click() {
    const strThisFuncName = this.btnSetRetrievalMethodId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置获取方式Id的${this.thisTabName}记录!`);
        return '';
      }
      const strRetrievalMethodId = GetSelectValueInDivObj(
        divVarSet.refDivFunction,
        'ddlRetrievalMethodId_SetFldValue',
      );
      if (strRetrievalMethodId == '') {
        const strMsg = '请输入获取方式Id(RetrievalMethodId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strRetrievalMethodId=' + strRetrievalMethodId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      for (const strKeyLst of arrKeyIds) {
        await this.SetRetrievalMethodId(strKeyLst, strRetrievalMethodId);
      }
      await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //多关键字,不支持复制功能!

  /**
   * 在数据表里删除记录
   * "strVarId": 表关键字
   * "strViewId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strVarId: string, strViewId: string) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strVarId) == true) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (IsNullOrEmpty(strViewId) == true) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      await this.DelRecord(strVarId, strViewId);
      await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
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
  public async btnSelectRecordInTab_Click(strVarId: string, strViewId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strVarId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (IsNullOrEmpty(strViewId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strVarId, strViewId);
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
  public async DelRecord(strVarId: string, strViewId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await ViewIdGCVariableRela_DelRecKeyLstAsync(strVarId, strViewId);
      if (returnInt > 0) {
        //ViewIdGCVariableRela_ReFreshCache();
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
  public async SelectRecord(strVarId: string, strViewId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objViewIdGCVariableRelaEN = await ViewIdGCVariableRela_GetObjByKeyLstAsync(
        strVarId,
        strViewId,
      );
      console.log('完成SelectRecord!', objViewIdGCVariableRelaEN);
      Redirect('/Index/Main_ViewIdGCVariableRela');
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
      const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
      if (arrKeyLsts.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyLsts.length) == false) {
        return;
      }
      await this.DelMultiRecord_KeyLst(arrKeyLsts);
      await this.BindGv_ViewIdGCVariableRela4Func(divVarSet.refDivList);
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
    await this.ExportExcel_ViewIdGCVariableRela4Func();
  }

  /** 显示ViewIdGCVariableRela对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrViewIdGCVariableRelaObjLst:需要绑定的对象列表
   **/
  public async BindTab_ViewIdGCVariableRela(
    divContainer: HTMLDivElement,
    arrViewIdGCVariableRelaExObjLst: Array<clsViewIdGCVariableRelaENEx>,
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
        fldName: clsViewIdGCVariableRelaENEx.con_ViewName,
        sortBy: clsViewIdGCVariableRelaENEx.con_ViewName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '界面名称',
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
        fldName: clsViewIdGCVariableRelaEN.con_VarId,
        sortBy: clsViewIdGCVariableRelaEN.con_VarId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量Id',
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
        fldName: clsViewIdGCVariableRelaENEx.con_VarName,
        sortBy: clsViewIdGCVariableRelaENEx.con_VarName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量名',
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
        fldName: clsViewIdGCVariableRelaENEx.con_VarTypeName,
        sortBy: clsViewIdGCVariableRelaENEx.con_VarTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量类型名',
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
        fldName: clsViewIdGCVariableRelaENEx.con_RetrievalMethodName,
        sortBy: clsViewIdGCVariableRelaENEx.con_RetrievalMethodName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '获取方式名',
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
        fldName: clsViewIdGCVariableRelaEN.con_RegionTypeNames,
        sortBy: clsViewIdGCVariableRelaEN.con_RegionTypeNames,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域类型名s',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewIdGCVariableRelaEN.con_IsUseInRegion,
        sortBy: clsViewIdGCVariableRelaEN.con_IsUseInRegion,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在区域中使用',
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
        fldName: clsViewIdGCVariableRelaEN.con_UpdUser,
        sortBy: clsViewIdGCVariableRelaEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
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
        fldName: clsViewIdGCVariableRelaEN.con_UpdDate,
        sortBy: clsViewIdGCVariableRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsViewIdGCVariableRelaEN.con_Memo,
        sortBy: clsViewIdGCVariableRelaEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refViewIdGCVariableRela_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrViewIdGCVariableRelaExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_ViewIdGCVariableRela函数中，divDataLst不存在!');
        return;
      }
      const arrKeyLst = [clsViewIdGCVariableRelaEN.con_VarId, clsViewIdGCVariableRelaEN.con_ViewId];
      await BindTab_KeyLst(
        divDataLst,
        arrViewIdGCVariableRelaExObjLst,
        arrDataColumn,
        arrKeyLst,
        this,
      );
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

  /** 显示ViewIdGCVariableRela对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrViewIdGCVariableRelaExObjLst:需要绑定的对象列表
   **/
  public async BindTab_ViewIdGCVariableRela4Func(
    divContainer: HTMLDivElement,
    arrViewIdGCVariableRelaExObjLst: Array<clsViewIdGCVariableRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_ViewIdGCVariableRela4Func.name;
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
        fldName: clsViewIdGCVariableRelaENEx.con_ViewName,
        sortBy: clsViewIdGCVariableRelaENEx.con_ViewName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '界面名称',
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
        fldName: clsViewIdGCVariableRelaEN.con_VarId,
        sortBy: clsViewIdGCVariableRelaEN.con_VarId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量Id',
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
        fldName: clsViewIdGCVariableRelaENEx.con_VarName,
        sortBy: clsViewIdGCVariableRelaENEx.con_VarName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量名',
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
        fldName: clsViewIdGCVariableRelaENEx.con_VarTypeName,
        sortBy: clsViewIdGCVariableRelaENEx.con_VarTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '变量类型名',
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
        fldName: clsViewIdGCVariableRelaENEx.con_RetrievalMethodName,
        sortBy: clsViewIdGCVariableRelaENEx.con_RetrievalMethodName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '获取方式名',
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
        fldName: clsViewIdGCVariableRelaEN.con_RegionTypeNames,
        sortBy: clsViewIdGCVariableRelaEN.con_RegionTypeNames,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域类型名s',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsViewIdGCVariableRelaEN.con_IsUseInRegion,
        sortBy: clsViewIdGCVariableRelaEN.con_IsUseInRegion,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在区域中使用',
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
        fldName: clsViewIdGCVariableRelaEN.con_UpdUser,
        sortBy: clsViewIdGCVariableRelaEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
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
        fldName: clsViewIdGCVariableRelaEN.con_UpdDate,
        sortBy: clsViewIdGCVariableRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsViewIdGCVariableRelaEN.con_Memo,
        sortBy: clsViewIdGCVariableRelaEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrViewIdGCVariableRelaExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refViewIdGCVariableRela_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrViewIdGCVariableRelaExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_ViewIdGCVariableRela4Func函数中，divDataLst不存在!');
        return;
      }
      const arrKeyLst = [clsViewIdGCVariableRelaEN.con_VarId, clsViewIdGCVariableRelaEN.con_ViewId];
      await BindTab_KeyLst(
        divDataLst,
        arrViewIdGCVariableRelaExObjLst,
        arrDataColumn,
        arrKeyLst,
        this,
      );
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrViewIdGCVariableRelaExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrViewIdGCVariableRelaExObjLst: Array<clsViewIdGCVariableRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsViewIdGCVariableRelaEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrViewIdGCVariableRelaExObjLst) {
        await ViewIdGCVariableRelaEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_ViewIdGCVariableRela4Func(this.listPara.listDiv);
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
  public async BindGv_ViewIdGCVariableRela4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ViewIdGCVariableRela4Func.name;
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
    if (viewVarSet.sortViewIdGCVariableRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortViewIdGCVariableRelaBy)为空,请检查!(In BindGv_ViewIdGCVariableRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombineViewIdGCVariableRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrViewIdGCVariableRelaExObjLst: Array<clsViewIdGCVariableRelaENEx> = [];
    try {
      this.recCount = await ViewIdGCVariableRela_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrViewIdGCVariableRelaExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortViewIdGCVariableRelaBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrViewIdGCVariableRelaExObjLst = await ViewIdGCVariableRelaEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrViewIdGCVariableRelaExObjLst.length == 0) {
      const strKey = Format('{0}', clsViewIdGCVariableRelaEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ViewIdGCVariableRela4Func(divList, arrViewIdGCVariableRelaExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objViewIdGCVariableRelaENS:源对象
   * @returns 目标对象=>clsViewIdGCVariableRelaEN:objViewIdGCVariableRelaENT
   **/
  public CopyToEx(
    objViewIdGCVariableRelaENS: clsViewIdGCVariableRelaEN,
  ): clsViewIdGCVariableRelaENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objViewIdGCVariableRelaENT = new clsViewIdGCVariableRelaENEx();
    try {
      ObjectAssign(objViewIdGCVariableRelaENT, objViewIdGCVariableRelaENS);
      return objViewIdGCVariableRelaENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objViewIdGCVariableRelaENT;
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
  public SortFunExportExcel(a: clsViewIdGCVariableRelaEN, b: clsViewIdGCVariableRelaEN): number {
    if (a.memo == b.memo) {
      if (a.memo == null) return -1;
      if (b.memo == null) return 1;
      return a.memo.localeCompare(b.memo);
    } else {
      if (b.prjId == null) return -1;
      if (a.prjId == null) return 1;
      return a.prjId.localeCompare(b.prjId);
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
      viewVarSet.sortViewIdGCVariableRelaBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clsViewIdGCVariableRelaENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortViewIdGCVariableRelaBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    ViewIdGCVariableRelaCRUD.sortFunStatic = sortFun;
    await this.BindGv_ViewIdGCVariableRela4Func(this.listPara.listDiv);
  }
  //多关键字,不支持复制功能!

  /** 设置字段值-RetrievalMethodId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue4MultiKey)
   **/
  public async SetRetrievalMethodId(strKeyLst: string, strRetrievalMethodId: string) {
    const strThisFuncName = this.SetRetrievalMethodId.name;
    if (strRetrievalMethodId == null || strRetrievalMethodId == '') {
      const strMsg = '请输入获取方式Id(RetrievalMethodId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (strKeyLst.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const objKeyLst = ViewIdGCVariableRela_SplitKeyLst(strKeyLst);
      const objViewIdGCVariableRelaEN = await ViewIdGCVariableRela_GetObjByKeyLstAsync(
        objKeyLst.varId,
        objKeyLst.viewId,
      );
      let intCount = 0;
      if (objViewIdGCVariableRelaEN == null) return false;
      objViewIdGCVariableRelaEN.SetVarId(objKeyLst.varId);
      objViewIdGCVariableRelaEN.SetViewId(objKeyLst.viewId);
      objViewIdGCVariableRelaEN.SetRetrievalMethodId(strRetrievalMethodId);
      let returnBool = false;
      try {
        objViewIdGCVariableRelaEN.sfUpdFldSetStr = objViewIdGCVariableRelaEN.updFldString; //设置哪些字段被修改(脏字段)
        returnBool = await ViewIdGCVariableRela_UpdateRecordAsync(objViewIdGCVariableRelaEN);
      } catch (e) {
        const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        throw strMsg;
      }
      if (returnBool == true) {
        intCount++;
      } else {
        const strInfo = Format('设置记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        //ViewIdGCVariableRela_ReFreshCache();
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
  public async DelMultiRecord_KeyLst(arrKeyLsts: Array<string>) {
    const strThisFuncName = this.DelMultiRecord_KeyLst.name;
    try {
      const returnInt = await ViewIdGCVariableRela_DelRecKeyLstsAsync(arrKeyLsts);
      if (returnInt > 0) {
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
   * @param objViewIdGCVariableRela:需要显示的对象
   **/
  public ShowViewIdGCVariableRelaObj(
    divContainer: HTMLDivElement,
    objViewIdGCVariableRela: clsViewIdGCVariableRelaEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objViewIdGCVariableRela);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objViewIdGCVariableRela.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjViewIdGCVariableRelaEN:表实体类对象
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
