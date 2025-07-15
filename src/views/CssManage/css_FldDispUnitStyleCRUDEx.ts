import { css_FldDispUnitStyleCRUD } from '@/viewsBase/CssManage/css_FldDispUnitStyleCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';
import { clscss_FldDispUnitStyleENEx } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { css_FldDispUnitStyleEx_CreateGraph4FldDispUnit } from '@/ts/L3ForWApiEx/CssManage/clscss_FldDispUnitStyleExWApi';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  css_FldDispUnitStyle_AddNewRecordAsync,
  css_FldDispUnitStyle_GetMaxStrIdAsync,
  css_FldDispUnitStyle_GetObjLstByFldDispUnitStyleIdLstAsync,
} from '@/ts/L3ForWApi/CssManage/clscss_FldDispUnitStyleWApi';
import { CtlType_BindDdl_CtlTypeIdByIsVisibleInDivCache } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refcss_FldDispUnitStyle_Detail,
  refcss_FldDispUnitStyle_Edit,
  viewVarSet,
  qryVarSet,
  CtlTypeId_Static,
} from '@/views/CssManage/css_FldDispUnitStyleVueShare';
import css_FldDispUnitStyle_EditEx from '@/views/CssManage/css_FldDispUnitStyle_EditEx';

//import $ from "jquery";
/** css_FldDispUnitStyleCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class css_FldDispUnitStyleCRUDEx
  extends css_FldDispUnitStyleCRUD
  implements IShowList
{
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortcss_FldDispUnitStyleBy = "FldDispUnitStyleId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 20;
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
    this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'css_FldDispUnitStyle':
        alert('该类没有绑定该函数：[this.BindGv_css_FldDispUnitStyle4Func]！');
        this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
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
    let objPage: css_FldDispUnitStyleCRUDEx;
    if (css_FldDispUnitStyleCRUD.objPageCRUD == null) {
      css_FldDispUnitStyleCRUD.objPageCRUD = new css_FldDispUnitStyleCRUDEx();
      objPage = <css_FldDispUnitStyleCRUDEx>css_FldDispUnitStyleCRUD.objPageCRUD;
    } else {
      objPage = <css_FldDispUnitStyleCRUDEx>css_FldDispUnitStyleCRUD.objPageCRUD;
    }
    const objPageEdit = new css_FldDispUnitStyle_EditEx('css_FldDispUnitStyle_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refcss_FldDispUnitStyle_Edit.value.btncss_FldDispUnitStyle_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'Detail': //详细信息
        refcss_FldDispUnitStyle_Detail.value.btncss_FldDispUnitStyle_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refcss_FldDispUnitStyle_Edit.value.btncss_FldDispUnitStyle_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
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
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'css_FldDispUnitStyleCRUDExEx.btn_Click');

        break;
    }
  }

  /** 显示css_FldDispUnitStyle对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrcss_FldDispUnitStyleExObjLst:需要绑定的对象列表
   **/
  public async BindTab_css_FldDispUnitStyle4Func(
    divContainer: HTMLDivElement,
    arrcss_FldDispUnitStyleExObjLst: Array<clscss_FldDispUnitStyleENEx>,
  ) {
    const strThisFuncName = this.BindTab_css_FldDispUnitStyle4Func.name;
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
        fldName: clscss_FldDispUnitStyleEN.con_OrderNum,
        sortBy: clscss_FldDispUnitStyleEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '序号',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '显示样式Id',
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
        fldName: clscss_FldDispUnitStyleENEx.con_CtlTypeName,
        sortBy: clscss_FldDispUnitStyleENEx.con_CtlTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '控件类型',
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
        fldName: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
        sortBy: clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '显示样式名',
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
          strKey = strText;
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
          strKey = strText;
          return new HTMLElement();
        },
      },
      {
        fldName: clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp,
        sortBy: clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '显示格式',
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
        fldName: clscss_FldDispUnitStyleENEx.con_StyleNameTitle,
        sortBy: clscss_FldDispUnitStyleENEx.con_StyleNameTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '标题样式',
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
        fldName: clscss_FldDispUnitStyleENEx.con_StyleNameContent,
        sortBy: clscss_FldDispUnitStyleENEx.con_StyleNameContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '内容样式',
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
        fldName: '',
        sortBy: '',
        sortFun: clsPubVar4Web.SortFun,
        getDataSource: '',
        colHeader: '显示样式',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: async (strKey: string, strText: string) => {
          const divPath = await css_FldDispUnitStyleEx_CreateGraph4FldDispUnit(strKey);
          strKey = strText;
          return divPath;
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
          strKey = strText;
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
          strKey = strText;
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
          strKey = strText;
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrcss_FldDispUnitStyleExObjLst, arrDataColumn);
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
      arrcss_FldDispUnitStyleExObjLst,
      arrDataColumn,
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      CtlTypeId_Static.value = enumCtlType.span_43;

      const bolIsVisible = true;

      await CtlType_BindDdl_CtlTypeIdByIsVisibleInDivCache(
        divVarSet.refDivFunction,
        'ddlCtlTypeId_OrderNum',
        bolIsVisible,
      ); //
      if (IsNullOrEmpty(clsPrivateSessionStorage.css_FldDispUnitStyle_CtlTypeId) == false) {
        qryVarSet.ctlTypeId_q = clsPrivateSessionStorage.css_FldDispUnitStyle_CtlTypeId;
        // this.CtlTypeId_OrderNum = clsPrivateSessionStorage.css_FldDispUnitStyle_CtlTypeId;
      }

      viewVarSet.sortcss_FldDispUnitStyleBy = Format(
        '{0} Asc',
        clscss_FldDispUnitStyleEN.con_OrderNum,
      );

      //2、显示无条件的表内容在GridView中
      await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
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

  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   **/
  public async ddlCtlTypeId_q_SelectedIndexChanged() {
    const strCtlTypeId = qryVarSet.ctlTypeId_q;
    if (IsNullOrEmpty(strCtlTypeId)) {
      return;
      //alert('请选择一个有在扩展层:css_FldDispUnitStyle_EditExEx中重写该函数！');
    }
    // await this.SetDdl_StyleIdTitleInDiv(strCtlTypeId); //编辑区域
    // await this.SetDdl_StyleIdContentInDiv(strCtlTypeId); //编辑区域
    // this.CtlTypeId_OrderNum = this.ctlTypeId_q;
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    // const strThisFuncName = this.btnQuery_Click.name;
    this.SetCurrPageIndex(1);

    clsPrivateSessionStorage.css_FldDispUnitStyle_CtlTypeId = qryVarSet.ctlTypeId_q;

    await this.BindGv_css_FldDispUnitStyle4Func(divVarSet.refDivList);
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
        objInFor.fldDispUnitStyleName = `${objInFor.fldDispUnitStyleName}_C`;

        const returnBool = await css_FldDispUnitStyle_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          //css_FldDispUnitStyle_ReFreshCache();
          // const strInfo = Format('克隆记录成功!');
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成！');
    } catch (e) {
      const strMsg = Format(
        '复制记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
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
