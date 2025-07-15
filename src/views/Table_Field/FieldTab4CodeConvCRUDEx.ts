import { FieldTab4CodeConvCRUD } from '@/viewsBase/Table_Field/FieldTab4CodeConvCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format } from '@/ts/PubFun/clsString';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsFieldTab4CodeConvENEx } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvENEx';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4CodeTab } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  FieldTab4CodeConv_GetObjExLstByPagerCache,
  FieldTab4CodeConv_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTab4CodeConvWApi';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  divVarSet,
  PrjId_Session,
  qryVarSet,
  refFieldTab4CodeConv_Detail,
  refFieldTab4CodeConv_Edit,
  viewVarSet,
} from '@/views/Table_Field/FieldTab4CodeConvVueShare';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import FieldTab4CodeConv_EditEx from '@/views/Table_Field/FieldTab4CodeConv_EditEx';

//import $ from "jquery";
/** FieldTab4CodeConvCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class FieldTab4CodeConvCRUDEx extends FieldTab4CodeConvCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortFieldTab4CodeConvBy = "FldId";
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
    this.BindGv_FieldTab4CodeConv4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'FieldTab4CodeConv':
        alert('该类没有绑定该函数：[this.BindGv_FieldTab4CodeConv4Func]！');
        this.BindGv_FieldTab4CodeConv4Func(divVarSet.refDivList);
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
    let objPage: FieldTab4CodeConvCRUDEx;
    if (FieldTab4CodeConvCRUD.objPageCRUD == null) {
      FieldTab4CodeConvCRUD.objPageCRUD = new FieldTab4CodeConvCRUDEx();
      objPage = <FieldTab4CodeConvCRUDEx>FieldTab4CodeConvCRUD.objPageCRUD;
    } else {
      objPage = <FieldTab4CodeConvCRUDEx>FieldTab4CodeConvCRUD.objPageCRUD;
    }
    const objPageEdit = new FieldTab4CodeConv_EditEx('FieldTab4CodeConv_EditEx', objPage);
    console.log(objPageEdit);
    const strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refFieldTab4CodeConv_Edit.value.btnFieldTab4CodeConv_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFieldTab4CodeConv_Edit.value.btnFieldTab4CodeConv_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFieldTab4CodeConv_Detail.value.btnFieldTab4CodeConv_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refFieldTab4CodeConv_Edit.value.btnFieldTab4CodeConv_Edit_Click(strCommandName, strKeyId);
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
        AccessBtnClickDefault(strCommandName, 'FieldTab4CodeConvCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineFieldTab4CodeConvCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and PrjId ='{0}'", clsPrivateSessionStorage.currSelPrjId);
    try {
      if (qryVarSet.fldId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFieldTab4CodeConvEN.con_FldId,
          qryVarSet.fldId_q,
        );
      }
      if (this.fldName_q != '') {
        strWhereCond += Format(
          " And {0} in (Select {0} from fieldTab where FldName like '%{1}%')",
          clsFieldTab4CodeConvEN.con_FldId,
          this.fldName_q,
        );
      }
      if (qryVarSet.codeTabId_q != '' && qryVarSet.codeTabId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFieldTab4CodeConvEN.con_CodeTabId,
          qryVarSet.codeTabId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineFieldTab4CodeConvCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  /**
   * 字段Id (Used In CombineCondition())
   **/
  public get fldName_q(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivQuery, 'txtFldName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 字段Id (Used In CombineCondition())
   **/
  public set fldName_q(value: string) {
    SetInputValueInDivObj(divVarSet.refDivQuery, 'txtFldName_q', value);
  }
  /** 显示FieldTab4CodeConv对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrFieldTab4CodeConvExObjLst:需要绑定的对象列表
   **/
  public async BindTab_FieldTab4CodeConv4Func(
    divContainer: HTMLDivElement,
    arrFieldTab4CodeConvExObjLst: Array<clsFieldTab4CodeConvENEx>,
  ) {
    const strThisFuncName = this.BindTab_FieldTab4CodeConv4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在！', divContainer));
      return;
    }
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
        fldName: clsFieldTab4CodeConvEN.con_FldId,
        sortBy: clsFieldTab4CodeConvEN.con_FldId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段Id',
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
        fldName: clsFieldTab4CodeConvENEx.con_FldName,
        sortBy: 'fldName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段名',
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
        fldName: clsFieldTab4CodeConvEN.con_CodeTabId,
        sortBy: clsFieldTab4CodeConvEN.con_CodeTabId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '代码表Id',
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
        fldName: clsFieldTab4CodeConvENEx.con_CodeTabName,
        sortBy: clsFieldTab4CodeConvENEx.con_CodeTabName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Code表名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTab4CodeConvEN.con_CodeTabCodeId,
        sortBy: clsFieldTab4CodeConvEN.con_CodeTabCodeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '代码Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTab4CodeConvENEx.con_CodeFldName,
        sortBy: 'codeFldName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '代码字段名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTab4CodeConvEN.con_CodeTabNameId,
        sortBy: clsFieldTab4CodeConvEN.con_CodeTabNameId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '代码_名Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTab4CodeConvENEx.con_CodeNameFldName,
        sortBy: 'codeNameFldName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '代码名称字段名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTab4CodeConvEN.con_UpdDate,
        sortBy: clsFieldTab4CodeConvEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTab4CodeConvEN.con_UpdUser,
        sortBy: clsFieldTab4CodeConvEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTab4CodeConvEN.con_Memo,
        sortBy: clsFieldTab4CodeConvEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrFieldTab4CodeConvExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrFieldTab4CodeConvExObjLst,
      arrDataColumn,
      clsFieldTab4CodeConvEN.con_FldId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortFieldTab4CodeConvBy = 'fldId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_FieldTab4CodeConv4Func(divVarSet.refDivList);
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

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId; //Session存储、local存储

    await this.SetDdl_CodeTabIdInDiv(strCmPrjId); //查询区域
  }
  public async SetDdl_CodeTabIdInDiv(strCmPrjId: string) {
    await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache4CodeTab(
      divVarSet.refDivQuery,
      'ddlCodeTabId_q',
      strCmPrjId,
    ); //
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_FieldTab4CodeConv4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_FieldTab4CodeConv4Func.name;
    if (viewVarSet.sortFieldTab4CodeConvBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortFieldTab4CodeConvBy)为空,请检查!(In BindGv_FieldTab4CodeConvCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objFieldTab4CodeConvCond = await this.CombineFieldTab4CodeConvConditionObj();
    objFieldTab4CodeConvCond.SetCondFldValue(
      clsFieldTab4CodeConvEN.con_PrjId,
      PrjId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objFieldTab4CodeConvCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrFieldTab4CodeConvExObjLst: Array<clsFieldTab4CodeConvENEx> = [];
    try {
      this.recCount = await FieldTab4CodeConv_GetRecCountByCondCache(
        objFieldTab4CodeConvCond,
        PrjId_Session.value,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objFieldTab4CodeConvCond.whereCond,
        );
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objFieldTab4CodeConvCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (FieldTab4CodeConvCRUD.sortFunStatic != undefined) {
        strSortFun = FieldTab4CodeConvCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objFieldTab4CodeConvCond,
        orderBy: viewVarSet.sortFieldTab4CodeConvBy,
        sortFun: strSortFun,
      };
      arrFieldTab4CodeConvExObjLst = await FieldTab4CodeConv_GetObjExLstByPagerCache(
        objPagerPara,
        PrjId_Session.value,
      );
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrFieldTab4CodeConvExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, PrjId_Session.value);
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_FieldTab4CodeConv4Func(divList, arrFieldTab4CodeConvExObjLst);
      //console.log("完成BindGv_FieldTab4CodeConv4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineFieldTab4CodeConvConditionObj(): Promise<ConditionCollection> {
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objFieldTab4CodeConvCond = new ConditionCollection();
    objFieldTab4CodeConvCond.SetCondFldValue(
      clsFieldTab4CodeConvEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.fldId_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFieldTab4CodeConvEN.con_FldId,
          qryVarSet.fldId_q,
        );
        objFieldTab4CodeConvCond.SetCondFldValue(
          clsFieldTab4CodeConvEN.con_FldId,
          qryVarSet.fldId_q,
          'like',
        );
      }
      if (this.fldName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsFieldTab4CodeConvENEx.con_FldName,
          this.fldName_q,
        );
        const arrFldId = await vFieldTab_Sim2Store.getKeyIdLstByName(
          clsPrivateSessionStorage.currSelPrjId,
          this.fldName_q,
          enumComparisonOp.Like_03,
        );
        if (arrFldId.length > 0) {
          const strFldIdLst = arrFldId.join(',');
          objFieldTab4CodeConvCond.SetCondFldValue(
            clsFieldTab4CodeConvENEx.con_FldId,
            strFldIdLst,
            'in',
          );
        }
      }
      if (qryVarSet.codeTabId_q != '' && qryVarSet.codeTabId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsFieldTab4CodeConvEN.con_CodeTabId,
          qryVarSet.codeTabId_q,
        );
        objFieldTab4CodeConvCond.SetCondFldValue(
          clsFieldTab4CodeConvEN.con_CodeTabId,
          qryVarSet.codeTabId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineFieldTab4CodeConvConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objFieldTab4CodeConvCond.whereCond = strWhereCond;
    return objFieldTab4CodeConvCond;
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
