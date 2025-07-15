/**
 * 类名:ExcelExportRegionFldsCRUD(界面:ExcelExportRegionFldsCRUD,00050279)
 * 表名:ExcelExportRegionFlds(00050149)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 01:36:20
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:区域管理(RegionManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  RegionId_Static,
  CombineExcelExportRegionFldsConditionObj4ExportExcel,
  CombineExcelExportRegionFldsConditionObj,
  ExcelExportRegionFlds_DeleteKeyIdCache,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refExcelExportRegionFlds_List,
} from '@/views/RegionManage/ExcelExportRegionFldsVueShare';
import {
  ExcelExportRegionFlds_GetRecCountByCondCache,
  ExcelExportRegionFlds_GetSubObjLstCache,
  ExcelExportRegionFlds_ReOrderAsync,
  ExcelExportRegionFlds_ReFreshCache,
  ExcelExportRegionFlds_GoBottomAsync,
  ExcelExportRegionFlds_DownMoveAsync,
  ExcelExportRegionFlds_UpMoveAsync,
  ExcelExportRegionFlds_GoTopAsync,
  ExcelExportRegionFlds_DelRecordAsync,
  ExcelExportRegionFlds_GetObjBymIdAsync,
  ExcelExportRegionFlds_GetObjExLstByPagerCache,
  ExcelExportRegionFlds_GetObjLstBymIdLstAsync,
  ExcelExportRegionFlds_AddNewRecordAsync,
  ExcelExportRegionFlds_UpdateRecordAsync,
  ExcelExportRegionFlds_DelExcelExportRegionFldssAsync,
} from '@/ts/L3ForWApi/RegionManage/clsExcelExportRegionFldsWApi';
import {
  GetCheckedKeyIdsInDivObj,
  SetCheckedItem4KeyIdInDiv,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsExcelExportRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsENEx';
import { IsNullOrEmpty, TransToBool, Format } from '@/ts/PubFun/clsString';
import { ExcelExportRegionFldsEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/RegionManage/clsExcelExportRegionFldsExWApi';
import { clsExcelExportRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionFldsEN';
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
/** ExcelExportRegionFldsCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class ExcelExportRegionFldsCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: ExcelExportRegionFldsCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    ExcelExportRegionFldsCRUD.objPageCRUD = this;
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
    return clsExcelExportRegionFldsEN._CurrTabName;
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
      if (viewVarSet.sortExcelExportRegionFldsBy == '')
        viewVarSet.sortExcelExportRegionFldsBy = `${clsExcelExportRegionFldsEN.con_RegionId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
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
    await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrExcelExportRegionFldsObjLst: Array<clsExcelExportRegionFldsEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrExcelExportRegionFldsObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsExcelExportRegionFldsEN = arrExcelExportRegionFldsObjLst[i];
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
      'Excel导出区域字段({0})导出.xlsx',
      clsExcelExportRegionFldsEN._CurrTabName,
    );
    const strSheetName = 'Excel导出区域字段列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_ExcelExportRegionFldsCache(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_ExcelExportRegionFldsCache.name;
    if (viewVarSet.sortExcelExportRegionFldsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortExcelExportRegionFldsBy)为空,请检查!(In BindGv_ExcelExportRegionFldsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    const objExcelExportRegionFldsCond =
      await CombineExcelExportRegionFldsConditionObj4ExportExcel();
    objExcelExportRegionFldsCond.SetCondFldValue(
      clsExcelExportRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    let arrExcelExportRegionFldsObjLst: Array<clsExcelExportRegionFldsEN> = [];
    try {
      this.recCount = await ExcelExportRegionFlds_GetRecCountByCondCache(
        objExcelExportRegionFldsCond,
        RegionId_Static.value,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objExcelExportRegionFldsCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      arrExcelExportRegionFldsObjLst = await ExcelExportRegionFlds_GetSubObjLstCache(
        objExcelExportRegionFldsCond,
        RegionId_Static.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrExcelExportRegionFldsObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsExcelExportRegionFldsEN._CurrTabName,
        RegionId_Static.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'colCaption',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '列标题',
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
          fldName: 'inUse',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否在用',
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
          fldName: 'isUseFunc',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '使用函数映射',
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
          fldName: 'dataPropertyName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '数据属性名',
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
          fldName: 'isDefaultSort',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否默认排序',
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
          fldName: 'isNeedSort',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否需要排序',
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
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改者',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '说明',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 10,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrExcelExportRegionFldsObjLst = arrExcelExportRegionFldsObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrExcelExportRegionFldsObjLst, arrDataColumn);
      //console.log("完成BindGv_ExcelExportRegionFlds!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }

  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetInUse_Click() {
    const strThisFuncName = this.btnSetInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置是否在用的${this.thisTabName}记录!`);
        return '';
      }
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds);
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
   **/
  public async btnSetNotInUse_Click() {
    const strThisFuncName = this.btnSetNotInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置是否在用的${this.thisTabName}记录!`);
        return '';
      }
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetNotInUse(arrKeyIds);
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 重序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   **/
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    if (this.PreCheck4Order() == false) return;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      await ExcelExportRegionFlds_ReOrderAsync(objOrderByData);
      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
  }

  /**
   * 置底
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
   **/
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置底的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      await ExcelExportRegionFlds_GoBottomAsync(objOrderByData);
      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 移动记录序号时的预检查函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
   **/
  public PreCheck4Order(): boolean {
    return true;
  }

  /**
   * 下移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
   **/
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      await ExcelExportRegionFlds_DownMoveAsync(objOrderByData);
      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
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
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      await ExcelExportRegionFlds_UpMoveAsync(objOrderByData);
      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
    const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /** 置顶
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
   **/
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置顶的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      await ExcelExportRegionFlds_GoTopAsync(objOrderByData);
      ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
    } catch (e) {
      const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
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
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "lngmId": 表关键字
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
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
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
  public async btnSelectRecordInTab_Click(lngmId: number) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (lngmId == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(lngmId);
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
  public async DelRecord(lngmId: number) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await ExcelExportRegionFlds_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
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
  public async SelectRecord(lngmId: number) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objExcelExportRegionFldsEN = await ExcelExportRegionFlds_GetObjBymIdAsync(lngmId);
      console.log('完成SelectRecord!', objExcelExportRegionFldsEN);
      Redirect('/Index/Main_ExcelExportRegionFlds');
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
      await this.BindGv_ExcelExportRegionFlds4Func(divVarSet.refDivList);
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
    await this.ExportExcel_ExcelExportRegionFldsCache();
  }

  /** 显示ExcelExportRegionFlds对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrExcelExportRegionFldsObjLst:需要绑定的对象列表
   **/
  public async BindTab_ExcelExportRegionFlds(
    divContainer: HTMLDivElement,
    arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx>,
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
        fldName: clsExcelExportRegionFldsENEx.con_TabName,
        sortBy: 'tabName',
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
        fldName: clsExcelExportRegionFldsENEx.con_FldName,
        sortBy: 'fldName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段名',
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
        fldName: clsExcelExportRegionFldsENEx.con_DataPropertyName,
        sortBy: 'dataPropertyName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '数据属性名',
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
        fldName: clsExcelExportRegionFldsEN.con_ColCaption,
        sortBy: clsExcelExportRegionFldsEN.con_ColCaption,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '列标题',
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
        fldName: clsExcelExportRegionFldsEN.con_InUse,
        sortBy: clsExcelExportRegionFldsEN.con_InUse,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refExcelExportRegionFlds_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrExcelExportRegionFldsExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_ExcelExportRegionFlds函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrExcelExportRegionFldsExObjLst,
        arrDataColumn,
        clsExcelExportRegionFldsEN.con_mId,
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

  /** 显示ExcelExportRegionFlds对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrExcelExportRegionFldsExObjLst:需要绑定的对象列表
   **/
  public async BindTab_ExcelExportRegionFlds4Func(
    divContainer: HTMLDivElement,
    arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx>,
  ) {
    const strThisFuncName = this.BindTab_ExcelExportRegionFlds4Func.name;
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
        fldName: clsExcelExportRegionFldsENEx.con_TabName,
        sortBy: 'tabName',
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
        fldName: clsExcelExportRegionFldsENEx.con_FldName,
        sortBy: 'fldName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段名',
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
        fldName: clsExcelExportRegionFldsENEx.con_DataPropertyName,
        sortBy: 'dataPropertyName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '数据属性名',
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
        fldName: clsExcelExportRegionFldsEN.con_ColCaption,
        sortBy: clsExcelExportRegionFldsEN.con_ColCaption,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '列标题',
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
        fldName: clsExcelExportRegionFldsEN.con_InUse,
        sortBy: clsExcelExportRegionFldsEN.con_InUse,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrExcelExportRegionFldsExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refExcelExportRegionFlds_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrExcelExportRegionFldsExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_ExcelExportRegionFlds4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrExcelExportRegionFldsExObjLst,
        arrDataColumn,
        clsExcelExportRegionFldsEN.con_mId,
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
   * @param arrExcelExportRegionFldsExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsExcelExportRegionFldsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrExcelExportRegionFldsExObjLst) {
        await ExcelExportRegionFldsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_ExcelExportRegionFlds4Func(this.listPara.listDiv);
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
  public async BindGv_ExcelExportRegionFlds4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ExcelExportRegionFlds4Func.name;
    if (viewVarSet.sortExcelExportRegionFldsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortExcelExportRegionFldsBy)为空,请检查!(In BindGv_ExcelExportRegionFldsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objExcelExportRegionFldsCond = await CombineExcelExportRegionFldsConditionObj();
    objExcelExportRegionFldsCond.SetCondFldValue(
      clsExcelExportRegionFldsEN.con_RegionId,
      RegionId_Static.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objExcelExportRegionFldsCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrExcelExportRegionFldsExObjLst: Array<clsExcelExportRegionFldsENEx> = [];
    try {
      this.recCount = await ExcelExportRegionFlds_GetRecCountByCondCache(
        objExcelExportRegionFldsCond,
        RegionId_Static.value,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objExcelExportRegionFldsCond.whereCond,
        );
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objExcelExportRegionFldsCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrExcelExportRegionFldsExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (ExcelExportRegionFldsCRUD.sortFunStatic != undefined) {
        strSortFun = ExcelExportRegionFldsCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objExcelExportRegionFldsCond,
        orderBy: viewVarSet.sortExcelExportRegionFldsBy,
        sortFun: strSortFun,
      };
      arrExcelExportRegionFldsExObjLst = await ExcelExportRegionFlds_GetObjExLstByPagerCache(
        objPagerPara,
        RegionId_Static.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrExcelExportRegionFldsExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsExcelExportRegionFldsEN._CurrTabName,
        RegionId_Static.value,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ExcelExportRegionFlds4Func(divList, arrExcelExportRegionFldsExObjLst);
      //console.log("完成BindGv_ExcelExportRegionFlds4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objExcelExportRegionFldsENS:源对象
   * @returns 目标对象=>clsExcelExportRegionFldsEN:objExcelExportRegionFldsENT
   **/
  public CopyToEx(
    objExcelExportRegionFldsENS: clsExcelExportRegionFldsEN,
  ): clsExcelExportRegionFldsENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objExcelExportRegionFldsENT = new clsExcelExportRegionFldsENEx();
    try {
      ObjectAssign(objExcelExportRegionFldsENT, objExcelExportRegionFldsENS);
      return objExcelExportRegionFldsENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objExcelExportRegionFldsENT;
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
  public SortFunExportExcel(a: clsExcelExportRegionFldsEN, b: clsExcelExportRegionFldsEN): number {
    if (a.prjId == b.prjId) {
      if (a.prjId == null) return -1;
      if (b.prjId == null) return 1;
      return a.prjId.localeCompare(b.prjId);
    } else {
      if (b.isNeedSort == null) return -1;
      if (a.isNeedSort == null) return 1;
      return a.isNeedSort ? -1 : 1;
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
      viewVarSet.sortExcelExportRegionFldsBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clsExcelExportRegionFldsENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortExcelExportRegionFldsBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    ExcelExportRegionFldsCRUD.sortFunStatic = sortFun;
    await this.BindGv_ExcelExportRegionFlds4Func(this.listPara.listDiv);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrmId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrExcelExportRegionFldsObjLst = await ExcelExportRegionFlds_GetObjLstBymIdLstAsync(
        arrmId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrExcelExportRegionFldsObjLst) {
        const returnBool = await ExcelExportRegionFlds_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
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

  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetInUse(arrmId: Array<string>) {
    const strThisFuncName = this.SetInUse.name;
    if (arrmId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrExcelExportRegionFldsObjLst = await ExcelExportRegionFlds_GetObjLstBymIdLstAsync(
        arrmId,
      );
      let intCount = 0;
      for (const objInFor of arrExcelExportRegionFldsObjLst) {
        const objExcelExportRegionFldsEN = new clsExcelExportRegionFldsEN();
        ObjectAssign(objExcelExportRegionFldsEN, objInFor);
        objExcelExportRegionFldsEN.SetmId(objInFor.mId);
        objExcelExportRegionFldsEN.SetInUse(TransToBool('true'));
        let returnBool = false;
        try {
          objExcelExportRegionFldsEN.sfUpdFldSetStr = objExcelExportRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await ExcelExportRegionFlds_UpdateRecordAsync(objExcelExportRegionFldsEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          ExcelExportRegionFlds_DeleteKeyIdCache(RegionId_Static.value, objInFor.mId);
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
        ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 设置字段值-InUse
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetNotInUse(arrmId: Array<string>) {
    const strThisFuncName = this.SetNotInUse.name;
    if (arrmId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrExcelExportRegionFldsObjLst = await ExcelExportRegionFlds_GetObjLstBymIdLstAsync(
        arrmId,
      );
      let intCount = 0;
      for (const objInFor of arrExcelExportRegionFldsObjLst) {
        const objExcelExportRegionFldsEN = new clsExcelExportRegionFldsEN();
        ObjectAssign(objExcelExportRegionFldsEN, objInFor);
        objExcelExportRegionFldsEN.SetmId(objInFor.mId);
        objExcelExportRegionFldsEN.SetInUse(TransToBool('false'));
        let returnBool = false;
        try {
          objExcelExportRegionFldsEN.sfUpdFldSetStr = objExcelExportRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await ExcelExportRegionFlds_UpdateRecordAsync(objExcelExportRegionFldsEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          ExcelExportRegionFlds_DeleteKeyIdCache(RegionId_Static.value, objInFor.mId);
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
        ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
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
  public async DelMultiRecord(arrmId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await ExcelExportRegionFlds_DelExcelExportRegionFldssAsync(arrmId);
      if (returnInt > 0) {
        ExcelExportRegionFlds_ReFreshCache(RegionId_Static.value);
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
   * @param objExcelExportRegionFlds:需要显示的对象
   **/
  public ShowExcelExportRegionFldsObj(
    divContainer: HTMLDivElement,
    objExcelExportRegionFlds: clsExcelExportRegionFldsEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objExcelExportRegionFlds);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objExcelExportRegionFlds.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjExcelExportRegionFldsEN:表实体类对象
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
