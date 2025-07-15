import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
import { clsFieldTabENEx } from '@/ts/L0Entity/Table_Field/clsFieldTabENEx';
import { FieldTab_GetRecCountByCondAsync } from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import {
  FieldTabEx_CopyToPrjTab,
  FieldTabEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/Table_Field/clsFieldTabExWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex, GetSortBy, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { FieldTabCRUD } from '@/viewsBase/Table_Field/FieldTabCRUD';

import { vFieldTab_SimEx_BindDdl_FldIdByPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { PrjTabFldEx_getTabIdLstByFldId } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { PrjTabEx_SetUpdDate } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabExWApi';
import { useUserStore } from '@/store/modulesShare/user';
import {
  CombineFieldTabCondition,
  divVarSet,
  PrjId_Session,
  refFieldTab_Detail,
  refFieldTab_Edit,
  UserId_Local,
  viewVarSet,
} from '@/views/Table_Field/FieldTabVueShare';
import FieldTab_EditEx from '@/views/Table_Field/FieldTab_EditEx';

/** FieldTabCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class FieldTabCRUDEx extends FieldTabCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortFieldTabBy = "fldId";
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
    this.BindGv_FieldTab4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'FieldTab':
        //alert('该类没有绑定该函数：[this.BindGv_FieldTabCache]！');
        this.BindGv_FieldTab4Func(divVarSet.refDivList);
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
    let objPage: FieldTabCRUDEx;
    const strFldId = strKeyId;
    if (FieldTabCRUD.objPageCRUD == null) {
      FieldTabCRUD.objPageCRUD = new FieldTabCRUDEx();
      objPage = <FieldTabCRUDEx>FieldTabCRUD.objPageCRUD;
    } else {
      objPage = <FieldTabCRUDEx>FieldTabCRUD.objPageCRUD;
    }
    const objPageEdit = new FieldTab_EditEx('FieldTab_EditEx', objPage);
    console.log(objPageEdit);
    const strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'CopyToPrjTab': //自定义功能:复制到表
        objPage.btnCopyToPrjTabClick();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refFieldTab_Edit.value.btnFieldTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFieldTab_Edit.value.btnFieldTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFieldTab_Detail.value.btnFieldTab_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (strFldId == '') {
          refFieldTab_Edit.value.btnFieldTab_Edit_Click(strCommandName, strKeyId);
        } else {
          refFieldTab_Edit.value.btnFieldTab_Edit_Click(strCommandName, strFldId);
        }
        break;
      case 'SetHomologousFldId': //设置同源字段
        objPage.btnSetHomologousFldId_Click();
        break;
      case 'SetFieldValue': //自定义功能
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'RefreshUpdDate4ReleTab': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnRefreshUpdDate4ReleTab_Click();
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
        AccessBtnClickDefault(strCommandName, 'FieldTabCRUDEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_FieldTab4FuncBak(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_FieldTab4Func.name;
    if (viewVarSet.sortFieldTabBy == null) {
      const strMsg = Format(
        '在显示列表时，排序字段(hidSortFieldTabBy)为空，请检查！(In BindGv_FieldTabCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    let strWhereCond = await CombineFieldTabCondition();
    strWhereCond += Format(
      " and {0}='{1}'",
      clsFieldTabEN.con_PrjId,
      clsPrivateSessionStorage.currSelPrjId,
    );
    //objFieldTab_Cond.SetCondFldValue(clsFieldTabEN.con_PrjId, FieldTabCRUD.PrjIdCache, "=");

    //const objFieldTabEN_Sim = FieldTab_GetSimObjFromObj(objFieldTab_Cond);
    //const strWhereCond = JSON.stringify(objFieldTabEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    //let arrFieldTabObjLst: Array<clsFieldTabEN> = [];
    let arrFieldTabExObjLst: Array<clsFieldTabENEx> = [];
    try {
      this.recCount = await FieldTab_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortFieldTabBy,
        sortFun: (x, y) => {
          x = y;
          return 0;
        },
      };
      arrFieldTabExObjLst = await FieldTabEx_GetObjExLstByPagerAsync(objPagerPara);
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
    if (arrFieldTabExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsFieldTabEN._CurrTabName,
        clsPrivateSessionStorage.currSelPrjId,
      );
      const strMsg = Format('根据条件获取的记录数为0！(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_FieldTab4Func(divList, arrFieldTabExObjLst);
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

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      //FieldTabCRUD.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      //FieldTab_Edit.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      //FieldTab_Detail.PrjIdCache = clsPrivateSessionStorage.currSelPrjId;

      //FieldTabCRUD.UserIdStatic = clsPubLocalStorage.userId;
      UserId_Local.value = clsPubLocalStorage.userId;
      //FieldTab_Detail.UserIdStatic = clsPubLocalStorage.userId;
      // const strPrjId = clsPrivateSessionStorage.currSelPrjId; //定义条件字段
      await vFieldTab_SimEx_BindDdl_FldIdByPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlHomologousFldId_SetFldValue',
        clsPrivateSessionStorage.currSelPrjId,
      );
      //const strPrjId = clsPrivateSessionStorage.currSelPrjId;  //定义条件字段
      await vPrjTab_SimEx_BindDdl_TabIdByCmPrjIdInDivCache(
        divVarSet.refDivFunction,
        'ddlTabId_SetFldValue',
        clsPrivateSessionStorage.cmPrjId,
      ); //

      viewVarSet.sortFieldTabBy = 'fldId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_FieldTab4Func(divVarSet.refDivList);
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

  /** 显示FieldTab对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrFieldTabExObjLst:需要绑定的对象列表
   **/
  public async BindTab_FieldTab4Func(
    divContainer: HTMLDivElement,
    arrFieldTabExObjLst: Array<clsFieldTabENEx>,
  ) {
    const strThisFuncName = this.BindTab_FieldTab4Func.name;
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
        fldName: clsFieldTabEN.con_FldId,
        sortBy: clsFieldTabEN.con_FldId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'a',
        orderNum: 2,

        funcName: async (strKey: string, strText: string) => {
          const objA = <HTMLAnchorElement>document.createElement('a');

          const strFldId = strKey;
          objA.innerText = strText;
          objA.innerText = strFldId;
          objA.title = '编辑字段信息，注意：会影响所有引用该字段的表。';
          objA.className = 'link-success text-success font-weight-bold';
          (function (strFldId) {
            objA.onclick = function () {
              FieldTabCRUDEx.btn_Click('Update', strFldId);
            };
          })(strFldId);
          return objA;
        },
      },
      {
        fldName: clsFieldTabENEx.con_FldNameEx,
        sortBy: clsFieldTabEN.con_FldName,
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
        fldName: clsFieldTabEN.con_Caption,
        sortBy: clsFieldTabEN.con_Caption,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '标题',
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
        fldName: clsFieldTabENEx.con_FieldTypeName,
        sortBy: 'fieldTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '字段类型',
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
        fldName: clsFieldTabENEx.con_DataTypeName,
        sortBy: 'dataTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '数据类型',
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
        fldName: clsFieldTabEN.con_FldLength,
        sortBy: clsFieldTabEN.con_FldLength,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '长度',
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
        fldName: clsFieldTabEN.con_FldPrecision,
        sortBy: clsFieldTabEN.con_FldPrecision,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '精确度',
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
        fldName: clsFieldTabEN.con_IsNull,
        sortBy: clsFieldTabEN.con_IsNull,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '可空?',
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
        fldName: clsFieldTabEN.con_IsPrimaryKey,
        sortBy: clsFieldTabEN.con_IsPrimaryKey,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '主键?',
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
        fldName: clsFieldTabEN.con_IsOnlyOne,
        sortBy: clsFieldTabEN.con_IsOnlyOne,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否唯一',
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
        fldName: clsFieldTabEN.con_MaxValue,
        sortBy: clsFieldTabEN.con_MaxValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '最大值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTabEN.con_MinValue,
        sortBy: clsFieldTabEN.con_MinValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '最小值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTabEN.con_DefaultValue,
        sortBy: clsFieldTabEN.con_DefaultValue,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缺省值',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTabEN.con_TabNum,
        sortBy: 'tabNum',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTabEN.con_IsNeedTransCode,
        sortBy: clsFieldTabEN.con_IsNeedTransCode,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '转换代码?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTabEN.con_UpdDate,
        sortBy: clsFieldTabEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTabEN.con_UpdUser,
        sortBy: clsFieldTabEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改者',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clsFieldTabEN.con_Memo,
        sortBy: clsFieldTabEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 19,
        funcName: (strKey: string, strText: string) => {
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrFieldTabExObjLst, arrDataColumn);
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
    await BindTab(divDataLst, arrFieldTabExObjLst, arrDataColumn, clsFieldTabEN.con_FldId, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 设置字段值-tabId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnCopyToPrjTabClick() {
    const strThisFuncName = this.btnCopyToPrjTabClick.name;
    const prjTabFldStore = usePrjTabFldStore();
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要复制到新表的记录！');
        return '';
      }
      const strTabId = GetSelectValueInDivObj(divVarSet.refDivFunction, 'ddlTabId_SetFldValue');
      if (strTabId == '') {
        const strMsg = '请输入新表(tabId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      //console.log('strTabId=' + strTabId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      const myData = {
        arrKeyIds,
        strTabId,
        strPrjId: clsPrivateSessionStorage.currSelPrjId,
        strPrjDataBaseId: clsPrivateSessionStorage.currPrjDataBaseId,
        strOpUser: clsPubLocalStorage.userId,
      };
      const bolResult = await FieldTabEx_CopyToPrjTab(myData);
      if (bolResult == true) {
        alert('复制到新表记录成功！');

        prjTabFldStore.delObjLstByTabId(strTabId);
        await this.BindGv_FieldTab4Func(divVarSet.refDivList);
      }
    } catch (e) {
      const strMsg = Format(
        '复制到新表不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnRefreshUpdDate4ReleTab_Click() {
    const strThisFuncName = this.btnCopyToPrjTabClick.name;
    const prjTabFldStore = usePrjTabFldStore();
    const userStore = useUserStore();
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要复制到新表的记录！');
        return '';
      }
      let intCount = 0;
      for (const strFldId of arrKeyIds) {
        const arrTabId = await PrjTabFldEx_getTabIdLstByFldId(strFldId);
        for (const strTabId of arrTabId) {
          await PrjTabEx_SetUpdDate(strTabId, userStore.getUserId);
          intCount++;
          prjTabFldStore.delObjLstByTabId(strTabId);
        }
      }
      //console.log('strTabId=' + strTabId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);

      if (intCount > 0) {
        alert(`共刷新了${intCount}个表的修改日期！`);
        await this.BindGv_FieldTab4Func(divVarSet.refDivList);
      }
    } catch (e) {
      const strMsg = Format(
        '复制到新表不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'fieldTypeName|Ex':
      case 'fieldTypeName':
        viewVarSet.sortFieldTabBy = `fieldType|fieldTypeName ${sortDirection}|FieldTab.FieldTypeId = FieldType.FieldTypeId`;
        break;
      case 'dataTypeName|Ex':
      case 'dataTypeName':
        viewVarSet.sortFieldTabBy = `dataTypeAbbr|dataTypeName ${sortDirection}|FieldTab.DataTypeId = DataTypeAbbr.DataTypeId`;
        break;
      case 'tabNum|Ex':
      case 'tabNum':
        viewVarSet.sortFieldTabBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortFieldTabBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_FieldTab4Func(this.thisDivList);
  }

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
      viewVarSet.sortFieldTabBy,
      strSortExpress,
    );
    // 将 sortBy 按空格分成两部分
    const [sortColumnKey, sortDirection] = sortBy.split(' ');
    if (clsFieldTabENEx.hasProperty(sortColumnKey)) {
      // 调用 SortColumn 函数
      this.SortColumn(sortColumnKey, sortDirection);
    } else {
      viewVarSet.sortFieldTabBy = sortBy;
      viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
      FieldTabCRUD.sortFunStatic = sortFun;

      await this.BindGv_FieldTab4Func(divVarSet.refDivList);
    }
  }
}
