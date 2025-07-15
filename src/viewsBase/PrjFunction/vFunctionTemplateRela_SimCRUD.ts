/**
 * 类名:vFunctionTemplateRela_SimCRUD(界面:vFunctionTemplateRela_SimCRUD,00050321)
 * 表名:vFunctionTemplateRela_Sim(00050604)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/15 01:36:02
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  CombinevFunctionTemplateRela_SimCondition,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refvFunctionTemplateRela_Sim_List,
} from '@/views/PrjFunction/vFunctionTemplateRela_SimVueShare';
import {
  vFunctionTemplateRela_Sim_GetRecCountByCondAsync,
  vFunctionTemplateRela_Sim_GetObjLstAsync,
  vFunctionTemplateRela_Sim_GetObjByKeyLstAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsvFunctionTemplateRela_SimWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsvFunctionTemplateRela_SimENEx } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimENEx';
import {
  vFunctionTemplateRela_SimEx_FuncMapByFldName,
  vFunctionTemplateRela_SimEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/PrjFunction/clsvFunctionTemplateRela_SimExWApi';
import { clsvFunctionTemplateRela_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRela_SimEN';
import {
  BindTab_KeyLst_V,
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
/** vFunctionTemplateRela_SimCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class vFunctionTemplateRela_SimCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: vFunctionTemplateRela_SimCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    vFunctionTemplateRela_SimCRUD.objPageCRUD = this;
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
    return clsvFunctionTemplateRela_SimEN._CurrTabName;
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
      if (viewVarSet.sortvFunctionTemplateRela_SimBy == '')
        viewVarSet.sortvFunctionTemplateRela_SimBy = `${clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vFunctionTemplateRela_Sim4Func(divVarSet.refDivList);
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
      if (viewVarSet.sortvFunctionTemplateRela_SimBy == '')
        viewVarSet.sortvFunctionTemplateRela_SimBy = `${clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vFunctionTemplateRela_Sim4Func(divVarSet.refDivList);
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
    await this.BindGv_vFunctionTemplateRela_Sim4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrvFunctionTemplateRela_SimObjLst: Array<clsvFunctionTemplateRela_SimEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrvFunctionTemplateRela_SimObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsvFunctionTemplateRela_SimEN = arrvFunctionTemplateRela_SimObjLst[i];
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
      'v函数模板关系_Sim({0})导出.xlsx',
      clsvFunctionTemplateRela_SimEN._CurrTabName,
    );
    const strSheetName = 'v函数模板关系_Sim列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel)
   **/
  public async ExportExcel_vFunctionTemplateRela_Sim(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_vFunctionTemplateRela_Sim.name;
    if (viewVarSet.sortvFunctionTemplateRela_SimBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvFunctionTemplateRela_SimBy)为空,请检查!(In BindGv_vFunctionTemplateRela_SimCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }

    const strWhereCond = await CombinevFunctionTemplateRela_SimCondition();
    let arrvFunctionTemplateRela_SimObjLst: Array<clsvFunctionTemplateRela_SimEN> = [];
    try {
      this.recCount = await vFunctionTemplateRela_Sim_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      arrvFunctionTemplateRela_SimObjLst = await vFunctionTemplateRela_Sim_GetObjLstAsync(
        strWhereCond,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrvFunctionTemplateRela_SimObjLst.length == 0) {
      const strMsg = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'functionTemplateId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '函数模板Id',
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
          fldName: 'funcId4GC',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '函数ID',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 3,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrvFunctionTemplateRela_SimObjLst = arrvFunctionTemplateRela_SimObjLst.sort(
        this.SortFunExportExcel,
      );
      return this.CombineData(arrvFunctionTemplateRela_SimObjLst, arrDataColumn);
      //console.log("完成BindGv_vFunctionTemplateRela_Sim!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
  }
  //多关键字,不支持复制功能!
  //由于当前主表:[$vFunctionTemplateRela_Sim]是视图,不需要生成删除功能函数[btnDelRecordInTab_Click];

  /**
   * 在数据表里选择记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   **/
  public async btnSelectRecordInTab_Click(strFunctionTemplateId: string, strFuncId4GC: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strFunctionTemplateId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (IsNullOrEmpty(strFuncId4GC) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strFunctionTemplateId, strFuncId4GC);
    } catch (e) {
      const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //由于当前主表:[$vFunctionTemplateRela_Sim]是视图,不需要生成删除功能函数[DelRecord];

  /**
   * 根据关键字选择相应的记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
   * @param sender:参数列表
   **/
  public async SelectRecord(strFunctionTemplateId: string, strFuncId4GC: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objvFunctionTemplateRela_SimEN = await vFunctionTemplateRela_Sim_GetObjByKeyLstAsync(
        strFunctionTemplateId,
        strFuncId4GC,
      );
      console.log('完成SelectRecord!', objvFunctionTemplateRela_SimEN);
      Redirect('/Index/Main_vFunctionTemplateRela_Sim');
    } catch (e) {
      const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  //由于当前主表:[$vFunctionTemplateRela_Sim]是视图,不需要生成删除功能函数[btnDelRecord_Click];

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   **/
  public async btnExportExcel_Click() {
    await this.ExportExcel_vFunctionTemplateRela_Sim();
  }

  /** 显示vFunctionTemplateRela_Sim对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrvFunctionTemplateRela_SimObjLst:需要绑定的对象列表
   **/
  public async BindTab_vFunctionTemplateRela_Sim(
    divContainer: HTMLDivElement,
    arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx>,
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
        fldName: clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
        sortBy: clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数模板Id',
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
        fldName: clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeName,
        sortBy: 'progLangTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编程语言类型名',
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
        fldName: clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
        sortBy: clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数ID',
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
        fldName: clsvFunctionTemplateRela_SimENEx.con_SqlDsTypeId,
        sortBy: 'sqlDsTypeId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '数据源类型Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refvFunctionTemplateRela_Sim_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrvFunctionTemplateRela_SimExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_vFunctionTemplateRela_Sim函数中，divDataLst不存在!');
        return;
      }
      const arrKeyLst = [
        clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
        clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
      ];
      await BindTab_KeyLst_V(
        divDataLst,
        arrvFunctionTemplateRela_SimExObjLst,
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

  /** 显示vFunctionTemplateRela_Sim对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrvFunctionTemplateRela_SimExObjLst:需要绑定的对象列表
   **/
  public async BindTab_vFunctionTemplateRela_Sim4Func(
    divContainer: HTMLDivElement,
    arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx>,
  ) {
    const strThisFuncName = this.BindTab_vFunctionTemplateRela_Sim4Func.name;
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
        fldName: clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
        sortBy: clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数模板Id',
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
        fldName: clsvFunctionTemplateRela_SimENEx.con_ProgLangTypeName,
        sortBy: 'progLangTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编程语言类型名',
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
        fldName: clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
        sortBy: clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '函数ID',
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
        fldName: clsvFunctionTemplateRela_SimENEx.con_SqlDsTypeId,
        sortBy: 'sqlDsTypeId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '数据源类型Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrvFunctionTemplateRela_SimExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refvFunctionTemplateRela_Sim_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrvFunctionTemplateRela_SimExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_vFunctionTemplateRela_Sim4Func函数中，divDataLst不存在!');
        return;
      }
      const arrKeyLst = [
        clsvFunctionTemplateRela_SimEN.con_FunctionTemplateId,
        clsvFunctionTemplateRela_SimEN.con_FuncId4GC,
      ];
      await BindTab_KeyLst_V(
        divDataLst,
        arrvFunctionTemplateRela_SimExObjLst,
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
   * @param arrvFunctionTemplateRela_SimExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsvFunctionTemplateRela_SimEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrvFunctionTemplateRela_SimExObjLst) {
        await vFunctionTemplateRela_SimEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_vFunctionTemplateRela_Sim4Func(this.listPara.listDiv);
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
  public async BindGv_vFunctionTemplateRela_Sim4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vFunctionTemplateRela_Sim4Func.name;
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
    if (viewVarSet.sortvFunctionTemplateRela_SimBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvFunctionTemplateRela_SimBy)为空,请检查!(In BindGv_vFunctionTemplateRela_SimCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await CombinevFunctionTemplateRela_SimCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvFunctionTemplateRela_SimExObjLst: Array<clsvFunctionTemplateRela_SimENEx> = [];
    try {
      this.recCount = await vFunctionTemplateRela_Sim_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrvFunctionTemplateRela_SimExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortvFunctionTemplateRela_SimBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrvFunctionTemplateRela_SimExObjLst =
        await vFunctionTemplateRela_SimEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrvFunctionTemplateRela_SimExObjLst.length == 0) {
      const strKey = Format('{0}', clsvFunctionTemplateRela_SimEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vFunctionTemplateRela_Sim4Func(
        divList,
        arrvFunctionTemplateRela_SimExObjLst,
      );
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
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
  public SortFunExportExcel(
    a: clsvFunctionTemplateRela_SimEN,
    b: clsvFunctionTemplateRela_SimEN,
  ): number {
    if (a.sqlDsTypeId == b.sqlDsTypeId) {
      if (a.sqlDsTypeId == null) return -1;
      if (b.sqlDsTypeId == null) return 1;
      return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
    } else {
      if (b.regionTypeId == null) return -1;
      if (a.regionTypeId == null) return 1;
      return a.regionTypeId.localeCompare(b.regionTypeId);
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
      viewVarSet.sortvFunctionTemplateRela_SimBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clsvFunctionTemplateRela_SimENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortvFunctionTemplateRela_SimBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    vFunctionTemplateRela_SimCRUD.sortFunStatic = sortFun;
    await this.BindGv_vFunctionTemplateRela_Sim4Func(this.listPara.listDiv);
  }
  //由于当前主表:[$vFunctionTemplateRela_Sim]是视图,不需要生成删除功能函数[DelMultiRecord];

  /** 显示{0}对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
   * @param divContainer:显示容器
   * @param objvFunctionTemplateRela_Sim:需要显示的对象
   **/
  public ShowvFunctionTemplateRela_SimObj(
    divContainer: HTMLDivElement,
    objvFunctionTemplateRela_Sim: clsvFunctionTemplateRela_SimEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objvFunctionTemplateRela_Sim);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objvFunctionTemplateRela_Sim.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjvFunctionTemplateRela_SimEN:表实体类对象
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
