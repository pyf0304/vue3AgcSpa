// import $ from 'jquery';
import { SqlTableCRUD } from '@/viewsBase/SqlViewMan/SqlTableCRUD';
import { stuSqlTable } from '@/ts/FunClass/stuSqlTable';
import { clsSqlTableEN } from '@/ts/L0Entity/SqlViewMan/clsSqlTableEN';
import {
  SqlTableEx_GetObjLstAsync,
  SqlTableEx_GetObjLstByPager,
  SqlTableEx_RemoveExistedTabFromDT,
} from '@/ts/L3ForWApiEx/SqlViewMan/clsSqlTableExWApi';
import { PrjTabEx_ImportSqlTab } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  CheckControlExistInDivObj,
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  SetCheckBoxValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { divVarSet, qryVarSet, viewVarSet } from '@/views/SqlViewMan/SqlTableVueShare';

//import $ from "jquery";
/** SqlTableCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class SqlTableCRUDEx extends SqlTableCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortSqlTableBy = "SqlTableId";
  public static arrSqlTableObjLst_Sql: Array<clsSqlTableEN> = [];
  public static arrSqlTableObjLst_CurrPage: Array<clsSqlTableEN> = [];
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in ViewInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ViewInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_SqlTable(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'SqlTable':
        alert('该类没有绑定该函数：[this.BindGv_SqlTableCache]！');
        //this.BindGv_SqlTableCache();
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: SqlTableCRUDEx;
    if (SqlTableCRUD.objPageCRUD == null) {
      SqlTableCRUD.objPageCRUD = new SqlTableCRUDEx();
      objPage = <SqlTableCRUDEx>SqlTableCRUD.objPageCRUD;
    } else {
      objPage = <SqlTableCRUDEx>SqlTableCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'ImportSelectedTables': //查询记录
        objPage.btnImportSelectedTables_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SqlTableCRUDExEx.btn_Click');

        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      viewVarSet.sortSqlTableBy = Format('{0} Desc', clsSqlTableEN.con_crDate);

      //2、显示无条件的表内容在GridView中
      await this.BindGv_SqlTable(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   **/
  public async BindGv_SqlTable(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_SqlTable.name;
    if (viewVarSet.sortSqlTableBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(sortSqlTableBy)为空，请检查！(In BindGv_SqlTable)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineSqlTableCondition();
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrSqlTableObjLst: Array<clsSqlTableEN> = [];
    try {
      if (this.refreshSqlTable_q) {
        SqlTableCRUDEx.arrSqlTableObjLst_Sql = await SqlTableEx_GetObjLstAsync(strWhereCond);
      }
      if (SqlTableCRUDEx.arrSqlTableObjLst_Sql.length == 0) {
        SqlTableCRUDEx.arrSqlTableObjLst_Sql = await SqlTableEx_GetObjLstAsync(strWhereCond);
      }
      const arrSqlTableObjLst_Remove = await SqlTableEx_RemoveExistedTabFromDT(
        SqlTableCRUDEx.arrSqlTableObjLst_Sql,
      );
      this.recCount = arrSqlTableObjLst_Remove.length; // await SqlTable_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0！', strWhereCond);

        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中，根据条件:[{0}]获取的对象列表数为0！', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = intPageCount;
        else intCurrPageIndex = 1;
        this.SetCurrPageIndex(intCurrPageIndex);
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.SetCurrPageIndex(intCurrPageIndex);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortSqlTableBy, //如果该字段为空，就使用下面的排序函数
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrSqlTableObjLst = await SqlTableEx_GetObjLstByPager(objPagerPara, arrSqlTableObjLst_Remove);
      SqlTableCRUDEx.arrSqlTableObjLst_CurrPage = arrSqlTableObjLst;
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
    const divPager: HTMLDivElement = <HTMLDivElement>document.getElementById('divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }
    if (arrSqlTableObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0！';
      const divDataLst: HTMLDivElement = divList;
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strMsg = Format('根据条件获取的记录数为0！');
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_SqlTable(divList, arrSqlTableObjLst);
      //console.log("完成BindGv_SqlTable!");
    } catch (e) {
      //console.trace();
      const strMsg = Format(
        '绑定对象列表不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    // const strThisFuncName = this.btnQuery_Click.name;
    this.SetCurrPageIndex(1);
    await this.BindGv_SqlTable(divVarSet.refDivList);
    this.refreshSqlTable_q = false;
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineSqlTableCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      // if (this.sqlTableId_q != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clsSqlTableEN.con_SqlTableId,
      //     this.sqlTableId_q,
      //   );
      // }
      if (qryVarSet.tableName_q != '') {
        strWhereCond += Format(
          " And Name like '%{1}%'",
          clsSqlTableEN.con_TableName,
          qryVarSet.tableName_q,
        );
      }
      if (qryVarSet.xtype_q != '') {
        strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_xtype, qryVarSet.xtype_q);
      }
      //if (this.crDate_q != "") {
      //    strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_crDate, this.crDate_q);
      //}
      //if (this.updUserId_q != "") {
      //    strWhereCond += Format(" And {0} like '%{1}%'", clsSqlTableEN.con_UpdUserId, this.updUserId_q);
      //}
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0009)在组合查询条件(CombineSqlTableCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /**
   * 是否显示所有错误
   **/
  public get refreshSqlTable_q(): boolean {
    const objDiv = divVarSet.refDivQuery;
    CheckControlExistInDivObj(divVarSet.refDivQuery, 'input', 'chkRefreshSqlTable_q');
    const strId = 'chkRefreshSqlTable_q';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /**
   * 是否显示所有错误
   **/
  public set refreshSqlTable_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivQuery, 'chkRefreshSqlTable_q', value);
  }
  public async btnImportSelectedTables_Click() {
    let bolResult = true;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要导入的Sql表！');
      return '';
    }
    //if (confirm_del(arrKeyIds.length) == false) {
    //    return;
    //}
    let strMsg;
    //const arrTableList = GetAllCheckedFrom(gvTables, 1, "chkCheckRec");
    //const arrTableSqlDsTypeList = GetAllCheckedFldValueFromGv(gvTables, 2, "chkCheckRec");
    const arrSqlTable = new Array<stuSqlTable>();
    const intCount = arrKeyIds.length;
    for (let i = 0; i < intCount; i++) {
      const objSqlTable = new stuSqlTable();
      const objSqlTable_Curr = SqlTableCRUDEx.arrSqlTableObjLst_CurrPage.find(
        (x) => x.sqlTableId == arrKeyIds[i],
      );
      if (objSqlTable_Curr == null) continue;

      const strTabName = objSqlTable_Curr.tableName;
      const strSqlDsTypeId = objSqlTable_Curr.xtype.trim() == 'U' ? '01' : '02';
      objSqlTable.tabName = strTabName;
      objSqlTable.sqlTypeId = strSqlDsTypeId;
      arrSqlTable.push(objSqlTable);
    }

    try {
      const myData = {
        arrSqlTable: JSON.stringify(arrSqlTable),
        strPrjId: clsPrivateSessionStorage.currSelPrjId,
        strPrjDataBaseId: clsPrivateSessionStorage.currPrjDataBaseId,
        strOpUser: clsPubLocalStorage.userId,
      };
      bolResult = await PrjTabEx_ImportSqlTab(myData);
      if (bolResult == true) {
        await this.BindGv_SqlTable(divVarSet.refDivList);
      }
    } catch (e) {
      strMsg = `导入数据表(视图)失败--添加对象失败。${e}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (bolResult == false) strMsg = '导入数据表(视图)失败--添加对象失败。';
    else strMsg = '导入数据表(视图)成功！';
    console.log(strMsg);
    alert(strMsg);
  }

  /** 显示SqlTable对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrSqlTableObjLst:需要绑定的对象列表
   **/
  public async BindTab_SqlTable(
    divContainer: HTMLDivElement,
    arrSqlTableObjLst: Array<clsSqlTableEN>,
  ) {
    // const strThisFuncName = this.BindTab_SqlTable.name;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
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
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsSqlTableEN.con_SqlTableId,
        sortBy: clsSqlTableEN.con_SqlTableId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Sql视图Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsSqlTableEN.con_TableName,
        sortBy: clsSqlTableEN.con_TableName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsSqlTableEN.con_xtype,
        sortBy: clsSqlTableEN.con_xtype,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsSqlTableEN.con_crDate,
        sortBy: clsSqlTableEN.con_crDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    await BindTab(divDataLst, arrSqlTableObjLst, arrDataColumn, clsSqlTableEN.con_SqlTableId, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);

    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param sortColumnKey:排序字段名
   * @param sortDirection:排序方向，升序还是降序
   **/
  public SortColumn(sortColumnKey: string, sortDirection: string): void {
    console.log(sortColumnKey, sortDirection);
  }
}
