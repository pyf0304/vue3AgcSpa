/**
 * 类名:UserCodePrjMainPathCRUD(界面:UserCodePrjMainPathCRUD,00050309)
 * 表名:UserCodePrjMainPath(00050338)
 * 版本:2025.05.12.1(服务器:PYF-AI)
 * 日期:2025/05/17 19:32:26
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
import {
  PrjId_Session,
  CombineUserCodePrjMainPathConditionObj4ExportExcel,
  CombineUserCodePrjMainPathConditionObj,
  divVarSet,
  viewVarSet,
  dataColumn,
  BindTabByList,
  refUserCodePrjMainPath_List,
} from '@/views/SystemSet/UserCodePrjMainPathVueShare';
import {
  UserCodePrjMainPath_GetRecCountByCondCache,
  UserCodePrjMainPath_GetSubObjLstCache,
  UserCodePrjMainPath_DelRecordAsync,
  UserCodePrjMainPath_ReFreshCache,
  UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync,
  UserCodePrjMainPath_FuncMapByFldName,
  UserCodePrjMainPath_GetObjExLstByPagerCache,
  UserCodePrjMainPath_GetObjLstByUserCodePrjMainPathIdLstAsync,
  UserCodePrjMainPath_GetMaxStrIdAsync,
  UserCodePrjMainPath_AddNewRecordAsync,
  UserCodePrjMainPath_DelUserCodePrjMainPathsAsync,
} from '@/ts/L3ForWApi/SystemSet/clsUserCodePrjMainPathWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsUserCodePrjMainPathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathENEx';
import { clsUserCodePrjMainPathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathEN';
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
/** UserCodePrjMainPathCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class UserCodePrjMainPathCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public listPara: ListPara; //是否窄行的小表,即表中加样式： table-sm
  public objPager: clsPager;
  public static objPageCRUD: UserCodePrjMainPathCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  constructor() {
    this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
    UserCodePrjMainPathCRUD.objPageCRUD = this;
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
    return clsUserCodePrjMainPathEN._CurrTabName;
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
      if (viewVarSet.sortUserCodePrjMainPathBy == '')
        viewVarSet.sortUserCodePrjMainPathBy = `${clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_UserCodePrjMainPath4Func(divVarSet.refDivList);
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
    await this.BindGv_UserCodePrjMainPath4Func(divVarSet.refDivList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrUserCodePrjMainPathObjLst: Array<clsUserCodePrjMainPathEN>,
    arrDataColumn: Array<clsDataColumn>,
  ): ExportExcelData {
    const intRowNum = arrUserCodePrjMainPathObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Record<string, any>> = [];
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsUserCodePrjMainPathEN = arrUserCodePrjMainPathObjLst[i];
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
      '用户生成项目主路径({0})导出.xlsx',
      clsUserCodePrjMainPathEN._CurrTabName,
    );
    const strSheetName = '用户生成项目主路径列表';
    return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_UserCodePrjMainPathCache(): Promise<ExportExcelData> {
    const strThisFuncName = this.ExportExcel_UserCodePrjMainPathCache.name;
    if (viewVarSet.sortUserCodePrjMainPathBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortUserCodePrjMainPathBy)为空,请检查!(In BindGv_UserCodePrjMainPathCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    const objUserCodePrjMainPathCond = await CombineUserCodePrjMainPathConditionObj4ExportExcel();
    objUserCodePrjMainPathCond.SetCondFldValue(
      clsUserCodePrjMainPathEN.con_PrjId,
      PrjId_Session.value,
      '=',
    );
    let arrUserCodePrjMainPathObjLst: Array<clsUserCodePrjMainPathEN> = [];
    try {
      this.recCount = await UserCodePrjMainPath_GetRecCountByCondCache(
        objUserCodePrjMainPathCond,
        PrjId_Session.value,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objUserCodePrjMainPathCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return { arrObjLst: [], sheetName: '', fileName: '' };
      }

      arrUserCodePrjMainPathObjLst = await UserCodePrjMainPath_GetSubObjLstCache(
        objUserCodePrjMainPathCond,
        PrjId_Session.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    if (arrUserCodePrjMainPathObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, PrjId_Session.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return { arrObjLst: [], sheetName: '', fileName: '' };
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'userCodePrjMainPathId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '生成主目录Id',
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
          fldName: 'isUsePrjMainPath',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否使用主路径',
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
          fldName: 'includeXmlPath',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '包含表Xml路径',
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
          fldName: 'isTemplate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否模板',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '说明',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 19,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrUserCodePrjMainPathObjLst = arrUserCodePrjMainPathObjLst.sort(this.SortFunExportExcel);
      return this.CombineData(arrUserCodePrjMainPathObjLst, arrDataColumn);
      //console.log("完成BindGv_UserCodePrjMainPath!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return { arrObjLst: [], sheetName: '', fileName: '' };
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
      await this.BindGv_UserCodePrjMainPath4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strUserCodePrjMainPathId": 表关键字
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
      await this.BindGv_UserCodePrjMainPath4Func(divVarSet.refDivList);
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
  public async btnSelectRecordInTab_Click(strUserCodePrjMainPathId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strUserCodePrjMainPathId);
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
  public async DelRecord(strUserCodePrjMainPathId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await UserCodePrjMainPath_DelRecordAsync(strUserCodePrjMainPathId);
      if (returnInt > 0) {
        UserCodePrjMainPath_ReFreshCache(PrjId_Session.value);
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
  public async SelectRecord(strUserCodePrjMainPathId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objUserCodePrjMainPathEN = await UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync(
        strUserCodePrjMainPathId,
      );
      console.log('完成SelectRecord!', objUserCodePrjMainPathEN);
      Redirect('/Index/Main_UserCodePrjMainPath');
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
      await this.BindGv_UserCodePrjMainPath4Func(divVarSet.refDivList);
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
    await this.ExportExcel_UserCodePrjMainPathCache();
  }

  /** 显示UserCodePrjMainPath对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrUserCodePrjMainPathObjLst:需要绑定的对象列表
   **/
  public async BindTab_UserCodePrjMainPath(
    divContainer: HTMLDivElement,
    arrUserCodePrjMainPathExObjLst: Array<clsUserCodePrjMainPathENEx>,
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
        fldName: clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        sortBy: clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '生成主目录Id',
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
        fldName: clsUserCodePrjMainPathENEx.con_ProgLangTypeName,
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
        fldName: clsUserCodePrjMainPathENEx.con_PrjName,
        sortBy: 'prjName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '工程名称',
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
        fldName: clsUserCodePrjMainPathEN.con_IsTemplate,
        sortBy: clsUserCodePrjMainPathEN.con_IsTemplate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否模板',
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
        fldName: clsUserCodePrjMainPathEN.con_InUse,
        sortBy: 'inUse',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
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
        fldName: clsUserCodePrjMainPathEN.con_IncludeXmlPath,
        sortBy: clsUserCodePrjMainPathEN.con_IncludeXmlPath,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '包含表Xml路径',
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
        fldName: clsUserCodePrjMainPathEN.con_IsUsePrjMainPath,
        sortBy: clsUserCodePrjMainPathEN.con_IsUsePrjMainPath,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否使用主路径',
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
        fldName: clsUserCodePrjMainPathENEx.con_PrjName,
        sortBy: 'memo',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    if (refUserCodePrjMainPath_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrUserCodePrjMainPathExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_UserCodePrjMainPath函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrUserCodePrjMainPathExObjLst,
        arrDataColumn,
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
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

  /** 显示UserCodePrjMainPath对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrUserCodePrjMainPathExObjLst:需要绑定的对象列表
   **/
  public async BindTab_UserCodePrjMainPath4Func(
    divContainer: HTMLDivElement,
    arrUserCodePrjMainPathExObjLst: Array<clsUserCodePrjMainPathENEx>,
  ) {
    const strThisFuncName = this.BindTab_UserCodePrjMainPath4Func.name;
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
        fldName: clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        sortBy: clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '生成主目录Id',
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
        fldName: clsUserCodePrjMainPathENEx.con_ProgLangTypeName,
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
        fldName: clsUserCodePrjMainPathENEx.con_PrjName,
        sortBy: 'prjName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '工程名称',
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
        fldName: clsUserCodePrjMainPathEN.con_IsTemplate,
        sortBy: clsUserCodePrjMainPathEN.con_IsTemplate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否模板',
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
        fldName: clsUserCodePrjMainPathEN.con_InUse,
        sortBy: 'inUse',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否在用',
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
        fldName: clsUserCodePrjMainPathEN.con_IncludeXmlPath,
        sortBy: clsUserCodePrjMainPathEN.con_IncludeXmlPath,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '包含表Xml路径',
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
        fldName: clsUserCodePrjMainPathEN.con_IsUsePrjMainPath,
        sortBy: clsUserCodePrjMainPathEN.con_IsUsePrjMainPath,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否使用主路径',
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
        fldName: clsUserCodePrjMainPathENEx.con_PrjName,
        sortBy: 'memo',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrUserCodePrjMainPathExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refUserCodePrjMainPath_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrUserCodePrjMainPathExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_UserCodePrjMainPath4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrUserCodePrjMainPathExObjLst,
        arrDataColumn,
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
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
   * @param arrUserCodePrjMainPathExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrUserCodePrjMainPathExObjLst: Array<clsUserCodePrjMainPathENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsUserCodePrjMainPathEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrUserCodePrjMainPathExObjLst) {
        await UserCodePrjMainPath_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_UserCodePrjMainPath4Func(this.listPara.listDiv);
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
  public async BindGv_UserCodePrjMainPath4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_UserCodePrjMainPath4Func.name;
    if (viewVarSet.sortUserCodePrjMainPathBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortUserCodePrjMainPathBy)为空,请检查!(In BindGv_UserCodePrjMainPathCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objUserCodePrjMainPathCond = await CombineUserCodePrjMainPathConditionObj();
    objUserCodePrjMainPathCond.SetCondFldValue(
      clsUserCodePrjMainPathEN.con_PrjId,
      PrjId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objUserCodePrjMainPathCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrUserCodePrjMainPathExObjLst: Array<clsUserCodePrjMainPathENEx> = [];
    try {
      this.recCount = await UserCodePrjMainPath_GetRecCountByCondCache(
        objUserCodePrjMainPathCond,
        PrjId_Session.value,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objUserCodePrjMainPathCond.whereCond,
        );
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objUserCodePrjMainPathCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        BindTabByList(arrUserCodePrjMainPathExObjLst, true);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (UserCodePrjMainPathCRUD.sortFunStatic != undefined) {
        strSortFun = UserCodePrjMainPathCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objUserCodePrjMainPathCond,
        orderBy: viewVarSet.sortUserCodePrjMainPathBy,
        sortFun: strSortFun,
      };
      arrUserCodePrjMainPathExObjLst = await UserCodePrjMainPath_GetObjExLstByPagerCache(
        objPagerPara,
        PrjId_Session.value,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrUserCodePrjMainPathExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, PrjId_Session.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_UserCodePrjMainPath4Func(divList, arrUserCodePrjMainPathExObjLst);
      //console.log("完成BindGv_UserCodePrjMainPath4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objUserCodePrjMainPathENS:源对象
   * @returns 目标对象=>clsUserCodePrjMainPathEN:objUserCodePrjMainPathENT
   **/
  public CopyToEx(objUserCodePrjMainPathENS: clsUserCodePrjMainPathEN): clsUserCodePrjMainPathENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objUserCodePrjMainPathENT = new clsUserCodePrjMainPathENEx();
    try {
      ObjectAssign(objUserCodePrjMainPathENT, objUserCodePrjMainPathENS);
      return objUserCodePrjMainPathENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objUserCodePrjMainPathENT;
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
  public SortFunExportExcel(a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN): number {
    if (a.prjId == b.prjId) {
      if (a.prjId == null) return -1;
      if (b.prjId == null) return 1;
      return a.prjId.localeCompare(b.prjId);
    } else {
      if (b.userId == null) return -1;
      if (a.userId == null) return 1;
      return a.userId.localeCompare(b.userId);
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
      viewVarSet.sortUserCodePrjMainPathBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (Object.prototype.hasOwnProperty.call(clsUserCodePrjMainPathENEx, sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
      return;
    }
    viewVarSet.sortUserCodePrjMainPathBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    UserCodePrjMainPathCRUD.sortFunStatic = sortFun;
    await this.BindGv_UserCodePrjMainPath4Func(this.listPara.listDiv);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrUserCodePrjMainPathId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrUserCodePrjMainPathObjLst =
        await UserCodePrjMainPath_GetObjLstByUserCodePrjMainPathIdLstAsync(
          arrUserCodePrjMainPathId,
        );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrUserCodePrjMainPathObjLst) {
        const strMaxStrId = await UserCodePrjMainPath_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.userCodePrjMainPathId = strMaxStrId;
        const returnBool = await UserCodePrjMainPath_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          UserCodePrjMainPath_ReFreshCache(PrjId_Session.value);
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
  public async DelMultiRecord(arrUserCodePrjMainPathId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await UserCodePrjMainPath_DelUserCodePrjMainPathsAsync(
        arrUserCodePrjMainPathId,
      );
      if (returnInt > 0) {
        UserCodePrjMainPath_ReFreshCache(PrjId_Session.value);
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
   * @param objUserCodePrjMainPath:需要显示的对象
   **/
  public ShowUserCodePrjMainPathObj(
    divContainer: HTMLDivElement,
    objUserCodePrjMainPath: clsUserCodePrjMainPathEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objUserCodePrjMainPath);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objUserCodePrjMainPath.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjUserCodePrjMainPathEN:表实体类对象
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
