/**
 * 类名:css_FldDispUnitStyleCRUD(界面:css_FldDispUnitStyleCRUD,00050329)
 * 表名:css_FldDispUnitStyle(00050615)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 01:34:39
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:样式表管理(CssManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import { clscss_FldDispUnitStyleENEx } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleENEx';
import {
  Combinecss_FldDispUnitStyleConditionObj4ExportExcel,
  CtlTypeId_Static,
  Combinecss_FldDispUnitStyleConditionObj,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refcss_FldDispUnitStyle_List,
} from '@/views/CssManage/css_FldDispUnitStyleVueShare';
import {
  css_FldDispUnitStyle_GetRecCountByCondCache,
  css_FldDispUnitStyle_GetSubObjLstCache,
  css_FldDispUnitStyle_ReOrderAsync,
  css_FldDispUnitStyle_ReFreshCache,
  css_FldDispUnitStyle_GoBottomAsync,
  css_FldDispUnitStyle_DownMoveAsync,
  css_FldDispUnitStyle_UpMoveAsync,
  css_FldDispUnitStyle_GoTopAsync,
  css_FldDispUnitStyle_DelRecordAsync,
  css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdAsync,
  css_FldDispUnitStyle_GetObjExLstByPagerCache,
  css_FldDispUnitStyle_GetObjLstByFldDispUnitStyleIdLstAsync,
  css_FldDispUnitStyle_GetMaxStrIdAsync,
  css_FldDispUnitStyle_AddNewRecordAsync,
  css_FldDispUnitStyle_Delcss_FldDispUnitStylesAsync,
} from '@/ts/L3ForWApi/CssManage/clscss_FldDispUnitStyleWApi';
import {
  css_FldDispUnitStyleEx_CopyToEx,
  css_FldDispUnitStyleEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/CssManage/clscss_FldDispUnitStyleExWApi';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import {
  GetCheckedKeyIdsInDivObj,
  SetCheckedItem4KeyIdInDiv,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';
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
/** css_FldDispUnitStyleCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class css_FldDispUnitStyleCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: css_FldDispUnitStyleCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    css_FldDispUnitStyleCRUD.objPageCRUD = this;
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
    return clscss_FldDispUnitStyleEN._CurrTabName;
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
      if (viewVarSet.sortcss_FldDispUnitStyleBy == '')
        viewVarSet.sortcss_FldDispUnitStyleBy = `${clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
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
    await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrcss_FldDispUnitStyleObjLst: Array<clscss_FldDispUnitStyleEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrcss_FldDispUnitStyleObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clscss_FldDispUnitStyleEN = arrcss_FldDispUnitStyleObjLst[i];
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
      '字段显示单元样式({0})导出.xlsx',
      clscss_FldDispUnitStyleEN._CurrTabName,
    );
    const strSheetName = '字段显示单元样式列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrcss_FldDispUnitStyleExObjLst: Array<clscss_FldDispUnitStyleENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrcss_FldDispUnitStyleExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clscss_FldDispUnitStyleENEx = arrcss_FldDispUnitStyleExObjLst[i];
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
      '字段显示单元样式({0})导出.xlsx',
      clscss_FldDispUnitStyleEN._CurrTabName,
    );
    const strSheetName = '字段显示单元样式列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func)
   **/
  public async ExportExcel_css_FldDispUnitStyle4Func(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_css_FldDispUnitStyle4Func.name;
    if (viewVarSet.sortcss_FldDispUnitStyleBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcss_FldDispUnitStyleBy)为空,请检查!(In BindGv_css_FldDispUnitStyleCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    const objcss_FldDispUnitStyleCond = await Combinecss_FldDispUnitStyleConditionObj4ExportExcel();
    let arrcss_FldDispUnitStyleExObjLst: Array<clscss_FldDispUnitStyleENEx> = [];
    try {
      this.recCount = await css_FldDispUnitStyle_GetRecCountByCondCache(
        objcss_FldDispUnitStyleCond,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objcss_FldDispUnitStyleCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      const arrcss_FldDispUnitStyleObjLst = await css_FldDispUnitStyle_GetSubObjLstCache(
        objcss_FldDispUnitStyleCond,
      );
      arrcss_FldDispUnitStyleExObjLst = arrcss_FldDispUnitStyleObjLst.map(
        css_FldDispUnitStyleEx_CopyToEx,
      );
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrcss_FldDispUnitStyleExObjLst.length == 0) {
      const strKey = Format('{0}', clscss_FldDispUnitStyleEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '字段显示单元样式Id',
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
          fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '字段显示单元样式名称',
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
          fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '样式描述',
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
          fldName: clscss_FldDispUnitStyleEN.con_StyleIdContent,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '内容样式Id',
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
          fldName: clscss_FldDispUnitStyleEN.con_StyleIdTitle,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '标题样式Id',
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
          fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '样式内容',
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
          fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitFormat,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '字段显示单元格式',
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
          fldName: clscss_FldDispUnitStyleENEx.con_CtlTypeName,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '控件类型名',
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
          fldName: clscss_FldDispUnitStyleENEx.con_StyleNameContent,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '样式描述',
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
          fldName: clscss_FldDispUnitStyleENEx.con_StyleNameTitle,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '样式描述',
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
          fldName: clscss_FldDispUnitStyleEN.con_DeletedDate,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '删除日期',
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
          fldName: clscss_FldDispUnitStyleEN.con_IsDeleted,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否删除',
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
          fldName: clscss_FldDispUnitStyleEN.con_UpdDate,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: clscss_FldDispUnitStyleEN.con_UpdUser,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改者',
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
          fldName: clscss_FldDispUnitStyleEN.con_Memo,
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '说明',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 16,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      try {
        await this.ExtendFldFuncMap(arrcss_FldDispUnitStyleExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }
      arrcss_FldDispUnitStyleExObjLst = arrcss_FldDispUnitStyleExObjLst.sort(
        this.SortFunExportExcel,
      );
      return this.CombineData(arrcss_FldDispUnitStyleExObjLst, arrDataColumn);
      //console.log("完成BindGv_css_FldDispUnitStyle!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /**
   * 重序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   **/
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strCtlTypeId = CtlTypeId_Static.value;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        ctlTypeId: strCtlTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await css_FldDispUnitStyle_ReOrderAsync(objOrderByData);
      css_FldDispUnitStyle_ReFreshCache();
    } catch (e) {
      const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
  }

  /**
   * 置底
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
   **/
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strCtlTypeId = CtlTypeId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置底的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ctltypeid: strCtlTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await css_FldDispUnitStyle_GoBottomAsync(objOrderByData);
      css_FldDispUnitStyle_ReFreshCache();
    } catch (e) {
      const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 移动记录序号时的预检查函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
   **/
  public PreCheck4Order(): boolean {
    const strCtlTypeId = CtlTypeId_Static.value;
    if (strCtlTypeId == '') {
      const strMsg = Format('请输入CtlTypeId!');
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }

  /**
   * 下移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
   **/
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strCtlTypeId = CtlTypeId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ctltypeid: strCtlTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await css_FldDispUnitStyle_DownMoveAsync(objOrderByData);
      css_FldDispUnitStyle_ReFreshCache();
    } catch (e) {
      const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 上移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
   **/
  public async btnUpMove_Click() {
    const strThisFuncName = this.btnUpMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strCtlTypeId = CtlTypeId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ctltypeid: strCtlTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await css_FldDispUnitStyle_UpMoveAsync(objOrderByData);
      css_FldDispUnitStyle_ReFreshCache();
    } catch (e) {
      const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /** 置顶
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
   **/
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strCtlTypeId = CtlTypeId_Static.value;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置顶的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ctltypeid: strCtlTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await css_FldDispUnitStyle_GoTopAsync(objOrderByData);
      css_FldDispUnitStyle_ReFreshCache();
    } catch (e) {
      const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
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
      await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strFldDispUnitStyleId": 表关键字
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
      await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
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
  public async btnSelectRecordInTab_Click(strFldDispUnitStyleId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strFldDispUnitStyleId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strFldDispUnitStyleId);
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
  public async DelRecord(strFldDispUnitStyleId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await css_FldDispUnitStyle_DelRecordAsync(strFldDispUnitStyleId);
      if (returnInt > 0) {
        css_FldDispUnitStyle_ReFreshCache();
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
  public async SelectRecord(strFldDispUnitStyleId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objcss_FldDispUnitStyleEN = await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdAsync(
        strFldDispUnitStyleId,
      );
      console.log('完成SelectRecord!', objcss_FldDispUnitStyleEN);
      Redirect('/Index/Main_css_FldDispUnitStyle');
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
      await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
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
    await this.ExportExcel_css_FldDispUnitStyle4Func();
  }

  /** 显示css_FldDispUnitStyle对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrcss_FldDispUnitStyleObjLst:需要绑定的对象列表
   **/
  public async BindTab_css_FldDispUnitStyle(
    divContainer: HTMLDivElement,
    arrcss_FldDispUnitStyleExObjLst: Array<clscss_FldDispUnitStyleENEx>,
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段显示单元样式Id',
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
        fldName: clscss_FldDispUnitStyleENEx.con_CtlTypeName,
        sortBy: 'ctlTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '控件类型名',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段显示单元样式名称',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式描述',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式内容',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitFormat,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitFormat,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段显示单元格式',
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
        fldName: clscss_FldDispUnitStyleENEx.con_StyleNameContent,
        sortBy: clscss_FldDispUnitStyleENEx.con_StyleNameContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式描述',
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
        fldName: clscss_FldDispUnitStyleENEx.con_StyleNameTitle,
        sortBy: clscss_FldDispUnitStyleENEx.con_StyleNameTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式描述',
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
        fldName: clscss_FldDispUnitStyleEN.con_UpdDate,
        sortBy: clscss_FldDispUnitStyleEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clscss_FldDispUnitStyleEN.con_UpdUser,
        sortBy: clscss_FldDispUnitStyleEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
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
        fldName: clscss_FldDispUnitStyleEN.con_Memo,
        sortBy: clscss_FldDispUnitStyleEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
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
        fldName: clscss_FldDispUnitStyleEN.con_CtlTypeId,
        sortBy: 'ctlTypeId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '控件类型Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refcss_FldDispUnitStyle_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrcss_FldDispUnitStyleExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_css_FldDispUnitStyle函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrcss_FldDispUnitStyleExObjLst,
        arrDataColumn,
        clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
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

  /** 显示css_FldDispUnitStyle对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrcss_FldDispUnitStyleExObjLst:需要绑定的对象列表
   **/
  public async BindTab_css_FldDispUnitStyle4Func(
    divContainer: HTMLDivElement,
    arrcss_FldDispUnitStyleExObjLst: Array<clscss_FldDispUnitStyleENEx>,
  ) {
    const strThisFuncName = this.BindTab_css_FldDispUnitStyle4Func.name;
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段显示单元样式Id',
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
        fldName: clscss_FldDispUnitStyleENEx.con_CtlTypeName,
        sortBy: 'ctlTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '控件类型名',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段显示单元样式名称',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式描述',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式内容',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitFormat,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitFormat,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段显示单元格式',
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
        fldName: clscss_FldDispUnitStyleENEx.con_StyleNameContent,
        sortBy: clscss_FldDispUnitStyleENEx.con_StyleNameContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式描述',
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
        fldName: clscss_FldDispUnitStyleENEx.con_StyleNameTitle,
        sortBy: clscss_FldDispUnitStyleENEx.con_StyleNameTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '样式描述',
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
        fldName: clscss_FldDispUnitStyleEN.con_UpdDate,
        sortBy: clscss_FldDispUnitStyleEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clscss_FldDispUnitStyleEN.con_UpdUser,
        sortBy: clscss_FldDispUnitStyleEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
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
        fldName: clscss_FldDispUnitStyleEN.con_Memo,
        sortBy: clscss_FldDispUnitStyleEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
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
        fldName: clscss_FldDispUnitStyleEN.con_CtlTypeId,
        sortBy: 'ctlTypeId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '控件类型Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrcss_FldDispUnitStyleExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refcss_FldDispUnitStyle_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrcss_FldDispUnitStyleExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_css_FldDispUnitStyle4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrcss_FldDispUnitStyleExObjLst,
        arrDataColumn,
        clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
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
   * @param arrcss_FldDispUnitStyleExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrcss_FldDispUnitStyleExObjLst: Array<clscss_FldDispUnitStyleENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clscss_FldDispUnitStyleEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrcss_FldDispUnitStyleExObjLst) {
        await css_FldDispUnitStyleEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_css_FldDispUnitStyle4Func(this.listPara.listDiv);
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
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func)
   **/
  public async BindGv_css_FldDispUnitStyle4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_css_FldDispUnitStyle4Func.name;
    if (viewVarSet.sortcss_FldDispUnitStyleBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcss_FldDispUnitStyleBy)为空,请检查!(In BindGv_css_FldDispUnitStyleCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objcss_FldDispUnitStyleCond = await Combinecss_FldDispUnitStyleConditionObj();
    const strWhereCond = JSON.stringify(objcss_FldDispUnitStyleCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrcss_FldDispUnitStyleExObjLst: Array<clscss_FldDispUnitStyleENEx> = [];
    try {
      this.recCount = await css_FldDispUnitStyle_GetRecCountByCondCache(
        objcss_FldDispUnitStyleCond,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objcss_FldDispUnitStyleCond.whereCond,
        );
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objcss_FldDispUnitStyleCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrcss_FldDispUnitStyleExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (css_FldDispUnitStyleCRUD.sortFunStatic != undefined) {
        strSortFun = css_FldDispUnitStyleCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objcss_FldDispUnitStyleCond,
        orderBy: viewVarSet.sortcss_FldDispUnitStyleBy,
        sortFun: strSortFun,
      };
      arrcss_FldDispUnitStyleExObjLst = await css_FldDispUnitStyle_GetObjExLstByPagerCache(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcss_FldDispUnitStyleExObjLst.length == 0) {
      const strKey = Format('{0}', clscss_FldDispUnitStyleEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_css_FldDispUnitStyle4Func(divList, arrcss_FldDispUnitStyleExObjLst);
      //console.log("完成BindGv_css_FldDispUnitStyle4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objcss_FldDispUnitStyleENS:源对象
   * @returns 目标对象=>clscss_FldDispUnitStyleEN:objcss_FldDispUnitStyleENT
   **/
  public CopyToEx(
    objcss_FldDispUnitStyleENS: clscss_FldDispUnitStyleEN,
  ): clscss_FldDispUnitStyleENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objcss_FldDispUnitStyleENT = new clscss_FldDispUnitStyleENEx();
    try {
      ObjectAssign(objcss_FldDispUnitStyleENT, objcss_FldDispUnitStyleENS);
      return objcss_FldDispUnitStyleENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objcss_FldDispUnitStyleENT;
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
  public SortFunExportExcel(a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN): number {
    if (a.updDate == b.updDate) {
      if (a.updDate == null) return -1;
      if (b.updDate == null) return 1;
      return a.updDate.localeCompare(b.updDate);
    } else {
      if (b.memo == null) return -1;
      if (a.memo == null) return 1;
      return a.memo.localeCompare(b.memo);
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
      viewVarSet.sortcss_FldDispUnitStyleBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clscss_FldDispUnitStyleENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortcss_FldDispUnitStyleBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    css_FldDispUnitStyleCRUD.sortFunStatic = sortFun;
    await this.BindGv_css_FldDispUnitStyle4Func(this.listPara.listDiv);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrFldDispUnitStyleId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrcss_FldDispUnitStyleObjLst =
        await css_FldDispUnitStyle_GetObjLstByFldDispUnitStyleIdLstAsync(arrFldDispUnitStyleId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrcss_FldDispUnitStyleObjLst) {
        const strMaxStrId = await css_FldDispUnitStyle_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.fldDispUnitStyleId = strMaxStrId;
        const returnBool = await css_FldDispUnitStyle_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          css_FldDispUnitStyle_ReFreshCache();
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

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrFldDispUnitStyleId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await css_FldDispUnitStyle_Delcss_FldDispUnitStylesAsync(
        arrFldDispUnitStyleId,
      );
      if (returnInt > 0) {
        css_FldDispUnitStyle_ReFreshCache();
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
   * @param objcss_FldDispUnitStyle:需要显示的对象
   **/
  public Showcss_FldDispUnitStyleObj(
    divContainer: HTMLDivElement,
    objcss_FldDispUnitStyle: clscss_FldDispUnitStyleEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objcss_FldDispUnitStyle);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objcss_FldDispUnitStyle.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjcss_FldDispUnitStyleEN:表实体类对象
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
