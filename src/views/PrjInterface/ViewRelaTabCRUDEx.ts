import { Main_ViewInfo } from '../Index/Main_ViewInfo';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubFun } from '@/ts/PubConfig/clsPubFun';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { IShowList } from '@/ts/PubFun/IShowList';
import { ViewRelaTabCRUD } from '@/viewsBase/PrjInterface/ViewRelaTabCRUD';
import { clsViewRelaTabEN } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  dataColumn,
  BindTabByList,
  refvViewRelaTab_List,
  refViewRelaTab_Edit,
  viewVarSet,
} from '@/views/PrjInterface/ViewRelaTabVueShare';
import {
  selectedRelaTabId,
  relaTabFilterOptions,
  selectedViewTabTypeId,
  viewTabTypeFilterOptions,
  selectedRegionTypeId,
  regionTypeFilterOptions,
} from '@/views/PrjInterface/ViewRelaTabVueShareEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { PrjId_Session } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import ViewRelaTab_EditEx from '@/views/PrjInterface/ViewRelaTab_EditEx';
import {
  ViewRelaTab_AddNewRecordAsync,
  ViewRelaTab_GetRecCountByCondAsync,
  ViewRelaTab_GetObjLstAsync,
  ViewRelaTab_FuncMapInOutTypeName,
} from '@/ts/L3ForWApi/PrjInterface/clsViewRelaTabWApi';
import { ViewInfo_GetObjByViewIdCache } from '@/ts/L3ForWApi/PrjInterface/clsViewInfoWApi';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { enumInOutType } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
import { enumCtlType } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { ViewRegionEx_GetObjLstByViewIdCache } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { QryRegionFldsEx_GetObjLstByRegionIdCacheEx } from '@/ts/L3ForWApiEx/RegionManage/clsQryRegionFldsExWApi';
import { EditRegionFldsEx_GetObjLstByRegionIdCacheEx } from '@/ts/L3ForWApiEx/RegionManage/clsEditRegionFldsExWApi';
import { DGRegionFldsEx_GetObjLstByRegionIdCacheEx } from '@/ts/L3ForWApiEx/RegionManage/clsDGRegionFldsExWApi';
import { DetailRegionFldsEx_GetObjLstByRegionIdCacheEx } from '@/ts/L3ForWApiEx/RegionManage/clsDetailRegionFldsExWApi';
import { enumViewTabType } from '@/ts/L0Entity/PrjInterface/clsViewTabTypeEN';
import { PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { vFieldTab_Sim_GetNameByFldIdCache } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { vPrjTab_SimEx_func } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import { DnPath_GetObjByDnPathIdAsync } from '@/ts/L3ForWApi/AIModule/clsDnPathWApi';
import { vDataNode_SimEx_GetTabIdByDataNodeIdCacheEx } from '@/ts/L3ForWApiEx/AIModule/clsvDataNode_SimExWApi';
import { clsViewRelaTabENEx } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabENEx';
import {
  ViewRelaTabEx_FuncMap_TabName,
  ViewRelaTabEx_FuncMap_ViewName,
  ViewRelaTabEx_FuncMap_RegionName,
  ViewRelaTabEx_FuncMap_RegionTypeName,
  ViewRelaTabEx_FuncMap_ViewTabTypeName,
  ViewRelaTabEx_FuncMap_DateTimeSim,
  ViewRelaTabEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewRelaTabExWApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';

/** ViewRelaTabCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewRelaTabCRUDEx extends ViewRelaTabCRUD implements IShowList {
  private summaryFilterTypeName = '';
  private summaryFilterRegionName = '';
  private mapRegionIdsByRegionTypeId = new Map<string, Array<string>>();

  private EscapeHtml(strVal: string): string {
    return (strVal || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  private GetTypeNameForSummary(objViewRelaTab: clsViewRelaTabENEx): string {
    return IsNullOrEmpty(objViewRelaTab.viewTabTypeName) == true
      ? objViewRelaTab.viewTabTypeId || ''
      : objViewRelaTab.viewTabTypeName;
  }

  private GetRegionNameForSummary(objViewRelaTab: clsViewRelaTabENEx): string {
    if (objViewRelaTab.tabFunction == '当前界面主表') return '界面主表';
    return IsNullOrEmpty(objViewRelaTab.regionName) == true
      ? objViewRelaTab.regionId || ''
      : objViewRelaTab.regionName;
  }

  private IsRecordMatchedBySummaryFilter(objViewRelaTab: clsViewRelaTabENEx): boolean {
    if (IsNullOrEmpty(this.summaryFilterTypeName) == false) {
      const strTypeName = this.GetTypeNameForSummary(objViewRelaTab);
      if (strTypeName != this.summaryFilterTypeName) return false;
    }
    if (IsNullOrEmpty(this.summaryFilterRegionName) == false) {
      const strRegionName = this.GetRegionNameForSummary(objViewRelaTab);
      if (strRegionName != this.summaryFilterRegionName) return false;
    }
    return true;
  }

  private GetFilteredDetailRows(
    arrViewRelaTabExObjLst: Array<clsViewRelaTabENEx>,
  ): Array<clsViewRelaTabENEx> {
    if (
      IsNullOrEmpty(this.summaryFilterTypeName) == true &&
      IsNullOrEmpty(this.summaryFilterRegionName) == true
    ) {
      return arrViewRelaTabExObjLst;
    }
    return arrViewRelaTabExObjLst.filter((x) => this.IsRecordMatchedBySummaryFilter(x));
  }

  private BuildTabSummaryRows(arrViewRelaTabExObjLst: Array<clsViewRelaTabENEx>): Array<{
    tabName: string;
    viewTabTypes: Array<string>;
    regions: Array<string>;
  }> {
    const mapSummary = new Map<
      string,
      {
        tabName: string;
        setType: Set<string>;
        setRegion: Set<string>;
      }
    >();

    for (const objInFor of arrViewRelaTabExObjLst) {
      const strTabKey = IsNullOrEmpty(objInFor.tabId) == true ? objInFor.tabName : objInFor.tabId;
      const strTabName =
        IsNullOrEmpty(objInFor.tabName) == true
          ? IsNullOrEmpty(objInFor.tabId) == true
            ? '未知表'
            : objInFor.tabId
          : objInFor.tabName;
      const strTypeName = this.GetTypeNameForSummary(objInFor);
      const strRegionName = this.GetRegionNameForSummary(objInFor);

      if (mapSummary.has(strTabKey) == false) {
        mapSummary.set(strTabKey, {
          tabName: strTabName,
          setType: new Set<string>(),
          setRegion: new Set<string>(),
        });
      }
      const objSummary = mapSummary.get(strTabKey)!;
      if (IsNullOrEmpty(strTypeName) == false) objSummary.setType.add(strTypeName);
      if (IsNullOrEmpty(strRegionName) == false) objSummary.setRegion.add(strRegionName);
    }

    return Array.from(mapSummary.values())
      .map((x) => {
        return {
          tabName: x.tabName,
          viewTabTypes: Array.from(x.setType).sort((a, b) => a.localeCompare(b)),
          regions: Array.from(x.setRegion).sort((a, b) => a.localeCompare(b)),
        };
      })
      .sort((a, b) => a.tabName.localeCompare(b.tabName));
  }

  private RenderTabSummaryTable(
    divSummary: HTMLDivElement,
    arrViewRelaTabExObjLst: Array<clsViewRelaTabENEx>,
    intFilteredCount: number,
  ): void {
    const arrSummary = this.BuildTabSummaryRows(arrViewRelaTabExObjLst);
    const renderLinks = (arrVal: Array<string>, strKind: 'type' | 'region') => {
      if (arrVal.length == 0) return '';
      return arrVal
        .map((x) => {
          const strEncodedValue = encodeURIComponent(x);
          const bolSelected =
            strKind == 'type' ? x == this.summaryFilterTypeName : x == this.summaryFilterRegionName;
          const strStyle = bolSelected
            ? 'color:#fff;background:#17a2b8;border-color:#17a2b8;'
            : 'color:#17a2b8;background:#fff;border-color:#17a2b8;';
          return `<a
            href="#"
            data-filter-kind="${strKind}"
            data-filter-value="${strEncodedValue}"
            style="display:inline-block;padding:1px 6px;margin:1px 4px 1px 0;border:1px solid;border-radius:10px;text-decoration:none;font-size:12px;${strStyle}"
          >${this.EscapeHtml(x)}</a>`;
        })
        .join('');
    };

    const arrTr = arrSummary.map((x, index) => {
      return (
        `<tr>` +
        `<td class="text-left">${index + 1}</td>` +
        `<td class="text-left">${this.EscapeHtml(x.tabName)}</td>` +
        `<td class="text-left">${renderLinks(x.viewTabTypes, 'type')}</td>` +
        `<td class="text-left">${renderLinks(x.regions, 'region')}</td>` +
        `</tr>`
      );
    });

    const strFilterInfo =
      `类型:${
        IsNullOrEmpty(this.summaryFilterTypeName) == true ? '全部' : this.summaryFilterTypeName
      }，` +
      `区域:${
        IsNullOrEmpty(this.summaryFilterRegionName) == true ? '全部' : this.summaryFilterRegionName
      }`;

    divSummary.innerHTML =
      `<div style="margin-bottom: 8px;">` +
      `<span class="text-info" style="font-weight: 600;">相关表汇总（每表一条）</span>` +
      `<span class="text-secondary" style="margin-left: 8px;">共 ${arrSummary.length} 张表</span>` +
      `<span class="text-secondary" style="margin-left: 8px;">明细显示 ${intFilteredCount}/${arrViewRelaTabExObjLst.length} 条</span>` +
      `<button id="btnClearSummaryFilter" class="btn btn-outline-secondary btn-sm" style="margin-left: 8px;" ${
        IsNullOrEmpty(this.summaryFilterTypeName) == true &&
        IsNullOrEmpty(this.summaryFilterRegionName) == true
          ? 'disabled'
          : ''
      }>清空筛选</button>` +
      `</div>` +
      `<div class="text-secondary" style="font-size:12px;margin-bottom:8px;">当前筛选：${this.EscapeHtml(
        strFilterInfo,
      )}（点击类型或区域可筛选明细）</div>` +
      `<table class="table table-bordered table-hover table-sm" style="margin-bottom: 12px;">` +
      `<thead>` +
      `<tr class="text-primary">` +
      `<th style="width: 60px;">序号</th>` +
      `<th style="min-width: 220px;">表名</th>` +
      `<th style="min-width: 300px;">类型</th>` +
      `<th style="min-width: 300px;">区域</th>` +
      `</tr>` +
      `</thead>` +
      `<tbody>${arrTr.join('')}</tbody>` +
      `</table>`;

    const arrFilterLinks = divSummary.querySelectorAll('a[data-filter-kind][data-filter-value]');
    arrFilterLinks.forEach((objLink) => {
      objLink.addEventListener('click', (e) => {
        e.preventDefault();
        const strKind = (objLink.getAttribute('data-filter-kind') || '') as 'type' | 'region';
        const strValue = decodeURIComponent(objLink.getAttribute('data-filter-value') || '');
        if (strKind == 'type') {
          this.summaryFilterTypeName = this.summaryFilterTypeName == strValue ? '' : strValue;
        } else if (strKind == 'region') {
          this.summaryFilterRegionName = this.summaryFilterRegionName == strValue ? '' : strValue;
        }
        this.SetCurrPageIndex(1);
        this.BindGv_ViewRelaTab4Func(this.listPara.listDiv);
      });
    });

    const btnClear = divSummary.querySelector('#btnClearSummaryFilter') as HTMLButtonElement | null;
    if (btnClear != null) {
      btnClear.addEventListener('click', () => {
        this.summaryFilterTypeName = '';
        this.summaryFilterRegionName = '';
        this.SetCurrPageIndex(1);
        this.BindGv_ViewRelaTab4Func(this.listPara.listDiv);
      });
    }
  }

  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvViewRelaTabBy=  "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
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
    alert('该类没有绑定该函数：[this.BindGv_vViewRelaTab]！');
    //this.BindGv_vViewRelaTab();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vViewRelaTab':
        this.BindGv_ViewRelaTab4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: ViewRelaTabCRUDEx;
    if (ViewRelaTabCRUD.objPageCRUD == null) {
      ViewRelaTabCRUD.objPageCRUD = new ViewRelaTabCRUDEx();
      objPage = <ViewRelaTabCRUDEx>ViewRelaTabCRUD.objPageCRUD;
    } else {
      objPage = <ViewRelaTabCRUDEx>ViewRelaTabCRUD.objPageCRUD;
    }
    const objPageEdit = new ViewRelaTab_EditEx('ViewRelaTab_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refViewRelaTab_Edit.value.btnViewRelaTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refViewRelaTab_Edit.value.btnViewRelaTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refViewRelaTab_Edit.value.btnViewRelaTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        objPage.btnDelRecord_Click();
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
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      case 'ImportRelaTab':
        objPage.btnImportRelaTab_Click();
        break;
      case 'PreviewImportRelaTab':
        objPage.btnPreviewImportRelaTab_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewRelaTabCRUDEx.btn_Click');

        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoadCache)
 */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      switch (this.qsOp) {
        case 'ViewEdit':
          break;
        case 'ViewRegionEdit':
          break;

        case '':
          //Main_ViewInfo.DispUserInfo();
          await Main_ViewInfo.DispViewInfo();
          await Main_ViewInfo.ShowCurrItem('ViewRelaTabCRUD', '');
          break;
      }
      // const aa: ASPDiv = new ASPDiv();
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;
      clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      await this.RefreshRelaTabFilterOptions();

      viewVarSet.sortViewRelaTabBy = `${clsViewRelaTabEN.con_ViewId} Asc`;
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewRelaTab4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevViewRelaTabConditionObj(): Promise<clsViewRelaTabEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    // const strWhereCond = `viewId='${strViewId}'`;
    const objViewRelaTab_Cond: clsViewRelaTabEN = new clsViewRelaTabEN();
    objViewRelaTab_Cond.SetCondFldValue(clsViewRelaTabEN.con_ViewId, strViewId, '=');

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    // try {

    // }
    // catch (objException:any) {
    //     const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineViewRelaTabConditionObj)时出错!请联系管理员!${objException.message}`;
    //     throw strMsg;
    // }
    return objViewRelaTab_Cond;
  }
  /*
   * 界面Id
   */
  public get viewId(): string {
    return clsPrivateSessionStorage.viewId_Main;
  }
  /*
   * 工程ID
   */
  public get prjId(): string {
    return clsPrivateSessionStorage.currSelPrjId;
  }
  public get qsOp() {
    const strName = 'Op';
    const reg = new RegExp(`(^|&)${strName}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return '';
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      default:
        viewVarSet.sortViewRelaTabBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ViewRelaTab4Func(this.listPara.listDiv);
  }

  private async CombineViewRelaTabConditionEx(): Promise<string> {
    let strWhereCond = ' 1 = 1 ';
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    if (IsNullOrEmpty(strViewId) == false) {
      strWhereCond += Format(" and {0}='{1}'", clsViewRelaTabEN.con_ViewId, strViewId);
    }
    if (IsNullOrEmpty(selectedRelaTabId.value) == false) {
      strWhereCond += Format(" and {0}='{1}'", clsViewRelaTabEN.con_TabId, selectedRelaTabId.value);
    }
    if (IsNullOrEmpty(selectedViewTabTypeId.value) == false) {
      strWhereCond += Format(
        " and {0}='{1}'",
        clsViewRelaTabEN.con_ViewTabTypeId,
        selectedViewTabTypeId.value,
      );
    }
    if (IsNullOrEmpty(selectedRegionTypeId.value) == false) {
      const arrRegionId = this.mapRegionIdsByRegionTypeId.get(selectedRegionTypeId.value) || [];
      if (arrRegionId.length == 0) {
        strWhereCond += ' and 1=2';
      } else {
        const strInLst = arrRegionId.map((x) => `'${x}'`).join(',');
        strWhereCond += Format(' and {0} in ({1})', clsViewRelaTabEN.con_RegionId, strInLst);
      }
    }
    return strWhereCond;
  }

  public async BindGv_ViewRelaTab4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_ViewRelaTab4Func.name;
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
    if (viewVarSet.sortViewRelaTabBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortViewRelaTabBy)为空,请检查!(In BindGv_ViewRelaTabCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await this.CombineViewRelaTabConditionEx();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);
    let arrViewRelaTabExObjLst: Array<clsViewRelaTabENEx> = [];
    try {
      this.recCount = await ViewRelaTab_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        alert(strMsg);
        BindTabByList(arrViewRelaTabExObjLst, true);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortViewRelaTabBy,
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrViewRelaTabExObjLst = await ViewRelaTabEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrViewRelaTabExObjLst.length == 0) {
      const strKey = Format('{0}', clsViewRelaTabEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_ViewRelaTab4Func(divList, arrViewRelaTabExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindTab_ViewRelaTab4Func(
    divContainer: HTMLDivElement,
    arrViewRelaTabExObjLst: Array<clsViewRelaTabENEx>,
  ) {
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }

    for (const objInFor of arrViewRelaTabExObjLst) {
      await ViewRelaTabEx_FuncMap_ViewName(objInFor);
      if (IsNullOrEmpty(objInFor.viewName) == true) {
        objInFor.viewName = objInFor.viewId;
      }

      await ViewRelaTabEx_FuncMap_RegionName(objInFor);
      if (IsNullOrEmpty(objInFor.regionName) == true) {
        objInFor.regionName = objInFor.regionId;
      }

      await ViewRelaTabEx_FuncMap_RegionTypeName(objInFor);
      if (IsNullOrEmpty(objInFor.regionTypeName) == true) {
        objInFor.regionTypeName = objInFor.regionId;
      }

      if (objInFor.tabFunction == '当前界面主表') {
        objInFor.regionName = '';
        objInFor.regionTypeName = '';
      }

      await ViewRelaTabEx_FuncMap_ViewTabTypeName(objInFor);
      if (IsNullOrEmpty(objInFor.viewTabTypeName) == true) {
        objInFor.viewTabTypeName = objInFor.viewTabTypeId;
      }

      await ViewRelaTab_FuncMapInOutTypeName(objInFor);
      if (IsNullOrEmpty(objInFor.inOutTypeName) == true) {
        objInFor.inOutTypeName = objInFor.inOutTypeId;
      }

      await ViewRelaTabEx_FuncMap_TabName(objInFor);
      if (IsNullOrEmpty(objInFor.tabName) == true) {
        objInFor.tabName = objInFor.tabId;
      }
      await ViewRelaTabEx_FuncMap_DateTimeSim(objInFor);
      if (IsNullOrEmpty(objInFor.dateTimeSim) == true) {
        objInFor.dateTimeSim = objInFor.updDate;
      }
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
        fldName: clsViewRelaTabENEx.con_ViewTabTypeName,
        sortBy: clsViewRelaTabENEx.con_ViewTabTypeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '界面表类型',
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
        fldName: clsViewRelaTabENEx.con_TabName,
        sortBy: clsViewRelaTabENEx.con_TabName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表名',
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
        fldName: clsViewRelaTabEN.con_RelaFldNames,
        sortBy: clsViewRelaTabEN.con_RelaFldNames,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '相关字段s',
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
        fldName: clsViewRelaTabENEx.con_InOutTypeName,
        sortBy: clsViewRelaTabENEx.con_InOutTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'INOUT类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      // {
      //   fldName: clsViewRelaTabENEx.con_ViewName,
      //   sortBy: clsViewRelaTabENEx.con_ViewName,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '界面',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 4,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsViewRelaTabENEx.con_RegionTypeName,
        sortBy: clsViewRelaTabENEx.con_RegionTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域类型',
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
        fldName: clsViewRelaTabENEx.con_RegionName,
        sortBy: clsViewRelaTabENEx.con_RegionName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '区域',
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
        fldName: clsViewRelaTabEN.con_TabFunction,
        sortBy: clsViewRelaTabEN.con_TabFunction,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '表功能说明',
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
        fldName: clsViewRelaTabENEx.con_DateTimeSim,
        sortBy: clsViewRelaTabENEx.con_DateTimeSim,
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
      // {
      //   fldName: clsViewRelaTabEN.con_UpdUser,
      //   sortBy: clsViewRelaTabEN.con_UpdUser,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '修改者',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 18,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsViewRelaTabEN.con_Memo,
        sortBy: clsViewRelaTabEN.con_Memo,
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

    const arrFilteredViewRelaTabExObjLst = this.GetFilteredDetailRows(arrViewRelaTabExObjLst);

    if (refvViewRelaTab_List.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList(arrFilteredViewRelaTabExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_ViewRelaTab函数中，divDataLst不存在!');
        return;
      }

      divDataLst.innerHTML = '';
      const divSummary = document.createElement('div');
      divSummary.id = 'divViewRelaTabSummary';
      this.RenderTabSummaryTable(
        divSummary,
        arrViewRelaTabExObjLst,
        arrFilteredViewRelaTabExObjLst.length,
      );
      divDataLst.appendChild(divSummary);

      const divDataDetail = document.createElement('div');
      divDataDetail.id = 'divViewRelaTabDetail';
      divDataLst.appendChild(divDataDetail);

      if (arrFilteredViewRelaTabExObjLst.length == 0) {
        divDataDetail.innerHTML =
          '<div class="text-warning" style="padding:8px 0;">当前筛选下没有明细记录。</div>';
      } else {
        await BindTab(
          divDataDetail,
          arrFilteredViewRelaTabExObjLst,
          arrDataColumn,
          clsViewRelaTabEN.con_mId,
          this,
        );
      }
    }
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  private async GetTabDisplayName(
    strTabId: string,
    mapTabNameCache: Map<string, string>,
  ): Promise<string> {
    if (IsNullOrEmpty(strTabId) == true) return strTabId;
    if (mapTabNameCache.has(strTabId) == true) return mapTabNameCache.get(strTabId) || strTabId;

    try {
      const strTabName = await vPrjTab_SimEx_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        strTabId,
      );
      const strDispName =
        IsNullOrEmpty(strTabName) == true ? strTabId : `${strTabName}(${strTabId})`;
      mapTabNameCache.set(strTabId, strDispName);
      return strDispName;
    } catch {
      mapTabNameCache.set(strTabId, strTabId);
      return strTabId;
    }
  }

  private async RefreshRelaTabFilterOptions(): Promise<void> {
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    const arrViewTabTypeOptDefault = [
      { value: '', label: '--全部界面表类型--' },
      {
        value: enumViewTabType.Interface_Master_Table_0001,
        label: this.GetViewTabTypeNameById(enumViewTabType.Interface_Master_Table_0001),
      },
      {
        value: enumViewTabType.Interface_Detail_Table_0002,
        label: this.GetViewTabTypeNameById(enumViewTabType.Interface_Detail_Table_0002),
      },
      {
        value: enumViewTabType.Query_Area_Master_Table_0003,
        label: this.GetViewTabTypeNameById(enumViewTabType.Query_Area_Master_Table_0003),
      },
      {
        value: enumViewTabType.Edit_Area_Master_Table_0004,
        label: this.GetViewTabTypeNameById(enumViewTabType.Edit_Area_Master_Table_0004),
      },
      {
        value: enumViewTabType.List_Area_Master_Table_0005,
        label: this.GetViewTabTypeNameById(enumViewTabType.List_Area_Master_Table_0005),
      },
      {
        value: enumViewTabType.Function_Area_Master_Table_0006,
        label: this.GetViewTabTypeNameById(enumViewTabType.Function_Area_Master_Table_0006),
      },
      {
        value: enumViewTabType.Detail_Area_Master_Table_0007,
        label: this.GetViewTabTypeNameById(enumViewTabType.Detail_Area_Master_Table_0007),
      },
      {
        value: enumViewTabType.Export_Area_Master_Table_0008,
        label: this.GetViewTabTypeNameById(enumViewTabType.Export_Area_Master_Table_0008),
      },
      {
        value: enumViewTabType.Parent_Table_0009,
        label: this.GetViewTabTypeNameById(enumViewTabType.Parent_Table_0009),
      },
      {
        value: enumViewTabType.Reference_Table_0010,
        label: this.GetViewTabTypeNameById(enumViewTabType.Reference_Table_0010),
      },
      {
        value: enumViewTabType.Related_Table_0011,
        label: this.GetViewTabTypeNameById(enumViewTabType.Related_Table_0011),
      },
      {
        value: enumViewTabType.Parallel_Table_0012,
        label: this.GetViewTabTypeNameById(enumViewTabType.Parallel_Table_0012),
      },
      {
        value: enumViewTabType.Master_Table_View_0013,
        label: this.GetViewTabTypeNameById(enumViewTabType.Master_Table_View_0013),
      },
    ];
    const arrRegionTypeOptDefault = [
      { value: '', label: '--全部区域类型--' },
      {
        value: enumRegionType.QueryRegion_0001,
        label: this.GetRegionTypeNameById(enumRegionType.QueryRegion_0001),
      },
      {
        value: enumRegionType.ListRegion_0002,
        label: this.GetRegionTypeNameById(enumRegionType.ListRegion_0002),
      },
      {
        value: enumRegionType.EditRegion_0003,
        label: this.GetRegionTypeNameById(enumRegionType.EditRegion_0003),
      },
      {
        value: enumRegionType.DetailRegion_0006,
        label: this.GetRegionTypeNameById(enumRegionType.DetailRegion_0006),
      },
      {
        value: enumRegionType.ExcelExportRegion_0007,
        label: this.GetRegionTypeNameById(enumRegionType.ExcelExportRegion_0007),
      },
      {
        value: enumRegionType.FeatureRegion_0008,
        label: this.GetRegionTypeNameById(enumRegionType.FeatureRegion_0008),
      },
    ];

    if (IsNullOrEmpty(strViewId) == true) {
      relaTabFilterOptions.value = [{ value: '', label: '--全部相关表--' }];
      viewTabTypeFilterOptions.value = arrViewTabTypeOptDefault;
      regionTypeFilterOptions.value = arrRegionTypeOptDefault;
      selectedRelaTabId.value = '';
      selectedViewTabTypeId.value = '';
      selectedRegionTypeId.value = '';
      this.mapRegionIdsByRegionTypeId.clear();
      return;
    }

    viewTabTypeFilterOptions.value = arrViewTabTypeOptDefault;
    regionTypeFilterOptions.value = arrRegionTypeOptDefault;

    let arrOpt = [{ value: '', label: '--全部相关表--' }];
    try {
      const strWhereCond = Format("{0}='{1}'", clsViewRelaTabEN.con_ViewId, strViewId);
      const arrObjLst = await ViewRelaTab_GetObjLstAsync(strWhereCond);
      const setTabId = new Set<string>();
      for (const objInFor of arrObjLst) {
        if (IsNullOrEmpty(objInFor.tabId) == false) {
          setTabId.add(objInFor.tabId);
        }
      }

      const mapTabNameCache = new Map<string, string>();
      const arrTabId = Array.from(setTabId.values()).sort((a, b) => a.localeCompare(b));
      arrOpt = [{ value: '', label: '--全部相关表--' }];
      for (const strTabId of arrTabId) {
        const strLabel = await this.GetTabDisplayName(strTabId, mapTabNameCache);
        arrOpt.push({ value: strTabId, label: strLabel });
      }
    } catch {
      arrOpt = [{ value: '', label: '--全部相关表--' }];
    }
    relaTabFilterOptions.value = arrOpt;

    let arrRegionTypeOpt = arrRegionTypeOptDefault;
    try {
      const strCmPrjId =
        IsNullOrEmpty(clsPrivateSessionStorage.cmPrjId) == true
          ? clsPrivateSessionStorage.currSelPrjId
          : clsPrivateSessionStorage.cmPrjId;
      const arrRegion = await ViewRegionEx_GetObjLstByViewIdCache(strViewId, strCmPrjId);
      const mapRegionIdsByType = new Map<string, Array<string>>();
      for (const objRegion of arrRegion) {
        if (
          IsNullOrEmpty(objRegion.regionTypeId) == true ||
          IsNullOrEmpty(objRegion.regionId) == true
        )
          continue;
        if (mapRegionIdsByType.has(objRegion.regionTypeId) == false) {
          mapRegionIdsByType.set(objRegion.regionTypeId, []);
        }
        mapRegionIdsByType.get(objRegion.regionTypeId)?.push(objRegion.regionId);
      }
      this.mapRegionIdsByRegionTypeId = mapRegionIdsByType;

      const arrRegionTypeId = Array.from(mapRegionIdsByType.keys()).sort((a, b) =>
        a.localeCompare(b),
      );
      arrRegionTypeOpt = [{ value: '', label: '--全部区域类型--' }];
      for (const strRegionTypeId of arrRegionTypeId) {
        arrRegionTypeOpt.push({
          value: strRegionTypeId,
          label: this.GetRegionTypeNameById(strRegionTypeId),
        });
      }
      regionTypeFilterOptions.value = arrRegionTypeOpt;
    } catch {
      this.mapRegionIdsByRegionTypeId.clear();
      regionTypeFilterOptions.value = arrRegionTypeOptDefault;
    }

    if (
      IsNullOrEmpty(selectedRelaTabId.value) == false &&
      arrOpt.some((x) => x.value == selectedRelaTabId.value) == false
    ) {
      selectedRelaTabId.value = '';
    }
    if (
      IsNullOrEmpty(selectedViewTabTypeId.value) == false &&
      arrViewTabTypeOptDefault.some((x) => x.value == selectedViewTabTypeId.value) == false
    ) {
      selectedViewTabTypeId.value = '';
    }
    if (
      IsNullOrEmpty(selectedRegionTypeId.value) == false &&
      arrRegionTypeOpt.some((x) => x.value == selectedRegionTypeId.value) == false
    ) {
      selectedRegionTypeId.value = '';
    }
  }

  private async BuildImportRelaTabCandidateList(): Promise<Array<clsViewRelaTabEN>> {
    const strViewId = clsPrivateSessionStorage.viewId_Main;
    const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
    const strPrjId = clsPrivateSessionStorage.currSelPrjId;
    const strUpdUser = clsPubLocalStorage.userId;

    if (IsNullOrEmpty(strViewId) == true) {
      throw '当前界面Id为空，不能导入相关表！';
    }

    const objViewInfo = await ViewInfo_GetObjByViewIdCache(strViewId, strPrjId);
    if (objViewInfo == null) {
      throw Format('界面Id:[{0}]对应的界面信息不存在，不能导入！', strViewId);
    }

    const strViewTabTypeMain = enumViewTabType.Interface_Master_Table_0001;
    const strViewTabTypeDetail = enumViewTabType.Interface_Detail_Table_0002;
    const strViewTabTypeRef = enumViewTabType.Related_Table_0011;
    const strViewTabTypeRelated = enumViewTabType.Related_Table_0011;

    const getRegionMasterViewTabTypeId = (strRegionTypeId: string): string => {
      switch (strRegionTypeId) {
        case enumRegionType.QueryRegion_0001:
          return enumViewTabType.Query_Area_Master_Table_0003;
        case enumRegionType.EditRegion_0003:
          return enumViewTabType.Edit_Area_Master_Table_0004;
        case enumRegionType.ListRegion_0002:
          return enumViewTabType.List_Area_Master_Table_0005;
        case enumRegionType.FeatureRegion_0008:
          return enumViewTabType.Function_Area_Master_Table_0006;
        case enumRegionType.DetailRegion_0006:
          return enumViewTabType.Detail_Area_Master_Table_0007;
        case enumRegionType.ExcelExportRegion_0007:
          return enumViewTabType.Export_Area_Master_Table_0008;
        default:
          return strViewTabTypeMain;
      }
    };

    const arrRegion = await ViewRegionEx_GetObjLstByViewIdCache(strViewId, strCmPrjId);
    if (arrRegion.length == 0) {
      throw Format('界面:[{0}]没有区域，无法导入相关表！', strViewId);
    }

    const dicRegionByType = new Map<string, string>();
    for (const objRegion of arrRegion) {
      if (
        IsNullOrEmpty(objRegion.regionTypeId) == false &&
        IsNullOrEmpty(objRegion.regionId) == false &&
        dicRegionByType.has(objRegion.regionTypeId) == false
      ) {
        dicRegionByType.set(objRegion.regionTypeId, objRegion.regionId);
      }
    }

    const strMainRegionId =
      dicRegionByType.get(enumRegionType.ListRegion_0002) ||
      dicRegionByType.get(enumRegionType.EditRegion_0003) ||
      dicRegionByType.get(enumRegionType.QueryRegion_0001) ||
      dicRegionByType.get(enumRegionType.FeatureRegion_0008) ||
      arrRegion[0].regionId;
    const strDetailRegionId =
      dicRegionByType.get(enumRegionType.DetailRegion_0006) || strMainRegionId;

    const strWhereCond = Format("{0}='{1}'", clsViewRelaTabEN.con_ViewId, strViewId);
    const arrExist = await ViewRelaTab_GetObjLstAsync(strWhereCond);
    const setKeyExist = new Set<string>();
    for (const objExist of arrExist) {
      setKeyExist.add(`${objExist.viewId}|${objExist.regionId}|${objExist.tabId}`);
    }

    const mapCandidate = new Map<
      string,
      {
        regionId: string;
        inOutTypeId: string;
        viewTabTypeId: string;
        tabId: string;
        tabFunction: string;
        relatedFldSet: Set<string>;
      }
    >();

    const extractFldName = async (objFld: any): Promise<string> => {
      const arrCandidate = [
        objFld?.fldName,
        objFld?.fldNameV2,
        objFld?.ctlCnName,
        objFld?.labelCaption,
        objFld?.headerText,
      ];
      for (const strName of arrCandidate) {
        if (IsNullOrEmpty(strName) == false) return String(strName).trim();
      }

      const arrFldIdCandidate = [objFld?.fldId, objFld?.releFldId];
      for (const strFldId of arrFldIdCandidate) {
        if (IsNullOrEmpty(strFldId) == true || strFldId == '0') continue;
        try {
          const strFldName = await vFieldTab_Sim_GetNameByFldIdCache(strFldId, strPrjId);
          if (IsNullOrEmpty(strFldName) == false) return strFldName;
        } catch {
          // Ignore lookup errors and continue fallback chain.
        }
        return String(strFldId);
      }
      return '';
    };

    const addCandidate = (
      strRegionId: string,
      strInOutTypeId: string,
      strViewTabTypeId: string,
      strTabId: string,
      strTabFunction: string,
      strRelatedFldName = '',
    ) => {
      if (IsNullOrEmpty(strRegionId) == true) return;
      if (IsNullOrEmpty(strTabId) == true || strTabId == '0') return;
      if (IsNullOrEmpty(strViewTabTypeId) == true) return;
      const strInOut =
        IsNullOrEmpty(strInOutTypeId) == true ? enumInOutType.OUT_IN_01 : strInOutTypeId;
      const strKey = `${strViewId}|${strRegionId}|${strTabId}`;
      if (setKeyExist.has(strKey) == true) return;

      if (mapCandidate.has(strKey) == false) {
        mapCandidate.set(strKey, {
          regionId: strRegionId,
          inOutTypeId: strInOut,
          viewTabTypeId: strViewTabTypeId,
          tabId: strTabId,
          tabFunction: strTabFunction,
          relatedFldSet: new Set<string>(),
        });
      }

      const objAgg = mapCandidate.get(strKey);
      if (objAgg == null) return;
      if (IsNullOrEmpty(strRelatedFldName) == false) {
        objAgg.relatedFldSet.add(strRelatedFldName);
      }
    };

    const getRelaTabIdByOutFldId = async (
      strRegionTabId: string,
      strOutFldId: string,
    ): Promise<string> => {
      if (IsNullOrEmpty(strRegionTabId) == true) return '';
      if (IsNullOrEmpty(strOutFldId) == true || strOutFldId == '0') return '';
      try {
        const strDnPathId = await PrjTabFldEx_GetDnPathIdByTabIdAndOutFldIdCache(
          strRegionTabId,
          strOutFldId,
        );
        if (IsNullOrEmpty(strDnPathId) == true) return '';

        const objDnPath = await DnPath_GetObjByDnPathIdAsync(strDnPathId);
        if (objDnPath == null) return '';
        if (objDnPath.outDataNodeId == 0) return '';

        const strOutTabId = await vDataNode_SimEx_GetTabIdByDataNodeIdCacheEx(
          objDnPath.outDataNodeId,
          strPrjId,
        );
        return strOutTabId;
      } catch {
        return '';
      }
    };

    addCandidate(
      strMainRegionId,
      enumInOutType.OUT_IN_01,
      strViewTabTypeMain,
      objViewInfo.mainTabId,
      '当前界面主表',
    );
    addCandidate(
      strDetailRegionId,
      enumInOutType.OUT_IN_01,
      strViewTabTypeDetail,
      objViewInfo.detailTabId,
      '当前界面详细表',
    );
    addCandidate(
      strMainRegionId,
      enumInOutType.IN_02,
      strViewTabTypeRef,
      objViewInfo.inRelaTabId,
      '当前界面输入关联表',
    );
    addCandidate(
      strMainRegionId,
      enumInOutType.OUT_03,
      strViewTabTypeRef,
      objViewInfo.outRelaTabId,
      '当前界面输出关联表',
    );

    for (const objRegion of arrRegion) {
      const strRegionInOut =
        IsNullOrEmpty(objRegion.inOutTypeId) == true
          ? enumInOutType.OUT_IN_01
          : objRegion.inOutTypeId;

      addCandidate(
        objRegion.regionId,
        strRegionInOut,
        getRegionMasterViewTabTypeId(objRegion.regionTypeId),
        objRegion.tabId,
        '区域主表',
      );

      if (objRegion.regionTypeId == enumRegionType.QueryRegion_0001) {
        const arrQryFlds = await QryRegionFldsEx_GetObjLstByRegionIdCacheEx(objRegion.regionId);
        for (const objFld of arrQryFlds) {
          if (objFld.inUse === false) continue;
          const bolIsDdlCtl =
            objFld.ctlTypeId == enumCtlType.DropDownList_06 ||
            objFld.ctlTypeId == enumCtlType.DropDownList_Bool_18;
          if (bolIsDdlCtl == false) continue;

          addCandidate(
            objRegion.regionId,
            strRegionInOut,
            strViewTabTypeRef,
            objFld.dsTabId,
            '查询区下拉框数据源表',
            await extractFldName(objFld),
          );
        }
      } else if (objRegion.regionTypeId == enumRegionType.EditRegion_0003) {
        const arrEditFlds = await EditRegionFldsEx_GetObjLstByRegionIdCacheEx(objRegion.regionId);
        for (const objFld of arrEditFlds) {
          if (objFld.inUse === false) continue;
          addCandidate(
            objRegion.regionId,
            strRegionInOut,
            strViewTabTypeRef,
            objFld.dsTabId,
            '编辑区下拉框数据源表',
            await extractFldName(objFld),
          );
        }
      } else if (objRegion.regionTypeId == enumRegionType.ListRegion_0002) {
        const arrDGFlds = await DGRegionFldsEx_GetObjLstByRegionIdCacheEx(objRegion.regionId);
        for (const objFld of arrDGFlds) {
          if (objFld.inUse === false) continue;
          const strRelaTabId = await getRelaTabIdByOutFldId(objRegion.tabId, objFld.outFldId);
          if (IsNullOrEmpty(strRelaTabId) == false) {
            const strRelatedFldName = await extractFldName(objFld);
            if (IsNullOrEmpty(strRelatedFldName) == true) continue;
            addCandidate(
              objRegion.regionId,
              strRegionInOut,
              strViewTabTypeRelated,
              strRelaTabId,
              '列表区代码转换表',
              strRelatedFldName,
            );
          }
        }
      } else if (objRegion.regionTypeId == enumRegionType.DetailRegion_0006) {
        const arrDetailFlds = await DetailRegionFldsEx_GetObjLstByRegionIdCacheEx(
          objRegion.regionId,
        );
        for (const objFld of arrDetailFlds) {
          if (objFld.inUse === false) continue;
          const strRelaTabId = await getRelaTabIdByOutFldId(objRegion.tabId, objFld.outFldId);
          if (IsNullOrEmpty(strRelaTabId) == false) {
            addCandidate(
              objRegion.regionId,
              strRegionInOut,
              strViewTabTypeRelated,
              strRelaTabId,
              '详细区代码转换表',
              await extractFldName(objFld),
            );
          }
        }
      }
    }

    const arrAddObj: Array<clsViewRelaTabEN> = [];
    for (const objAgg of mapCandidate.values()) {
      const objNew = new clsViewRelaTabEN();
      objNew.SetViewId(strViewId);
      objNew.SetRegionId(objAgg.regionId);
      objNew.SetInOutTypeId(objAgg.inOutTypeId);
      objNew.SetViewTabTypeId(objAgg.viewTabTypeId);
      objNew.SetTabId(objAgg.tabId);
      objNew.SetTabFunction(objAgg.tabFunction);
      objNew.SetPrjId(strPrjId);
      objNew.SetUpdUser(strUpdUser);

      const arrRelatedFld = Array.from(objAgg.relatedFldSet.values()).filter(
        (x) => IsNullOrEmpty(x) == false,
      );
      const bolIsMainOrDetailTab =
        objAgg.tabId == objViewInfo.mainTabId || objAgg.tabId == objViewInfo.detailTabId;
      if (bolIsMainOrDetailTab == false && arrRelatedFld.length == 0) {
        continue;
      }

      if (objAgg.tabId == objViewInfo.mainTabId) {
        objNew.SetRelaFldNames('');
      } else if (arrRelatedFld.length > 0) {
        objNew.SetRelaFldNames(arrRelatedFld.join(','));
      } else {
        objNew.SetRelaFldNames('');
      }
      objNew.SetMemo('功能区自动导入');
      arrAddObj.push(objNew);
    }
    return arrAddObj;
  }

  private EscHtml(strText: string): string {
    return String(strText || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  private GetRegionTypeNameById(strRegionTypeId: string): string {
    switch (strRegionTypeId) {
      case enumRegionType.QueryRegion_0001:
        return '查询区';
      case enumRegionType.ListRegion_0002:
        return '列表区';
      case enumRegionType.EditRegion_0003:
        return '编辑区';
      case enumRegionType.ExcelExportRegion_0007:
        return '导出区';
      case enumRegionType.DetailRegion_0006:
        return '详细区';
      case enumRegionType.FeatureRegion_0008:
        return '功能区';
      default:
        return IsNullOrEmpty(strRegionTypeId) == true ? '' : strRegionTypeId;
    }
  }

  private GetRegionMainTypeName(strRegionTypeName: string): string {
    if (IsNullOrEmpty(strRegionTypeName) == true) return '区域主表';
    if (strRegionTypeName.endsWith('区') == true) {
      return `${strRegionTypeName.substring(0, strRegionTypeName.length - 1)}区域主表`;
    }
    return `${strRegionTypeName}主表`;
  }

  private GetViewTabTypeNameById(strViewTabTypeId: string): string {
    switch (strViewTabTypeId) {
      case enumViewTabType.Interface_Master_Table_0001:
        return '界面主表';
      case enumViewTabType.Interface_Detail_Table_0002:
        return '界面明细表';
      case enumViewTabType.Query_Area_Master_Table_0003:
        return '查询区主表';
      case enumViewTabType.Edit_Area_Master_Table_0004:
        return '编辑区主表';
      case enumViewTabType.List_Area_Master_Table_0005:
        return '列表区主表';
      case enumViewTabType.Function_Area_Master_Table_0006:
        return '功能区主表';
      case enumViewTabType.Detail_Area_Master_Table_0007:
        return '详细区主表';
      case enumViewTabType.Export_Area_Master_Table_0008:
        return '导出区主表';
      case enumViewTabType.Parent_Table_0009:
        return '父表';
      case enumViewTabType.Reference_Table_0010:
        return '参考表';
      case enumViewTabType.Related_Table_0011:
        return '相关表';
      case enumViewTabType.Parallel_Table_0012:
        return '平行表';
      case enumViewTabType.Master_Table_View_0013:
        return '主表视图';
      case enumViewTabType.Undetermined_0000:
        return '未确定';
      default:
        return IsNullOrEmpty(strViewTabTypeId) == true ? '' : strViewTabTypeId;
    }
  }

  private ShowPreviewPopup(
    arrPreviewData: Array<{
      regionId: string;
      regionTypeName: string;
      regionTabDispName: string;
      relaTabDispName: string;
      viewTabTypeId: string;
      inOutTypeId: string;
      relaFldNames: string;
      tabFunction: string;
    }>,
    arrEmptySample: Array<{
      regionId: string;
      regionTypeName: string;
      regionTabDispName: string;
      relaTabDispName: string;
      viewTabTypeId: string;
      tabFunction: string;
    }>,
    strSummary: string,
  ): boolean {
    const intWidth = Math.min(window.screen.availWidth - 60, 2200);
    const intHeight = Math.min(window.screen.availHeight - 80, 1100);
    const objWin = window.open(
      '',
      '_blank',
      `width=${intWidth},height=${intHeight},left=20,top=20,resizable=yes,scrollbars=yes`,
    );
    if (objWin == null) return false;

    const strRows = arrPreviewData
      .map(
        (x, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td>${this.EscHtml(x.regionId)}</td>
        <td>${this.EscHtml(x.regionTypeName)}</td>
        <td>${this.EscHtml(x.regionTabDispName)}</td>
        <td>${this.EscHtml(x.relaTabDispName)}</td>
        <td>${this.EscHtml(this.GetViewTabTypeNameById(x.viewTabTypeId))}</td>
        <td>${this.EscHtml(x.inOutTypeId)}</td>
        <td>${this.EscHtml(x.relaFldNames)}</td>
        <td>${this.EscHtml(x.tabFunction)}</td>
      </tr>`,
      )
      .join('');

    const strEmptyRows = arrEmptySample
      .map(
        (x, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td>${this.EscHtml(x.regionId)}</td>
        <td>${this.EscHtml(x.regionTypeName)}</td>
        <td>${this.EscHtml(x.regionTabDispName)}</td>
        <td>${this.EscHtml(x.relaTabDispName)}</td>
        <td>${this.EscHtml(this.GetViewTabTypeNameById(x.viewTabTypeId))}</td>
        <td>${this.EscHtml(x.tabFunction)}</td>
      </tr>`,
      )
      .join('');

    const strHtml = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>预览待导入相关表</title>
  <style>
    body { font-family: "Microsoft YaHei", sans-serif; margin: 12px; }
    .summary { white-space: pre-wrap; margin-bottom: 10px; color: #333; }
    table { border-collapse: collapse; width: 100%; table-layout: fixed; }
    th, td { border: 1px solid #ddd; padding: 6px 8px; font-size: 12px; vertical-align: top; word-break: break-all; }
    th { background: #f7f7f7; }
    h3 { margin: 8px 0; }
  </style>
</head>
<body>
  <h3>预览待导入相关表</h3>
  <div class="summary">${this.EscHtml(strSummary)}</div>
  <h3>候选明细(最多30条)</h3>
  <table>
    <thead>
      <tr>
        <th style="width:50px">序号</th>
        <th style="width:120px">区域</th>
        <th style="width:120px">区域类别</th>
        <th style="width:240px">区域表</th>
        <th style="width:240px">相关表</th>
        <th style="width:100px">类型</th>
        <th style="width:100px">INOUT</th>
        <th>相关字段s</th>
        <th style="width:220px">说明</th>
      </tr>
    </thead>
    <tbody>${strRows}</tbody>
  </table>
  <h3>代码转换表中相关字段s为空样本(最多10条)</h3>
  <table>
    <thead>
      <tr>
        <th style="width:50px">序号</th>
        <th style="width:120px">区域</th>
        <th style="width:120px">区域类别</th>
        <th style="width:260px">区域表</th>
        <th style="width:260px">相关表</th>
        <th style="width:100px">类型</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>${strEmptyRows || '<tr><td colspan="7">无</td></tr>'}</tbody>
  </table>
</body>
</html>`;

    objWin.document.open();
    objWin.document.write(strHtml);
    objWin.document.close();
    return true;
  }

  public async btnPreviewImportRelaTab_Click() {
    const strThisFuncName = this.btnPreviewImportRelaTab_Click.name;
    try {
      const arrCandidate = await this.BuildImportRelaTabCandidateList();
      const objViewInfo = await ViewInfo_GetObjByViewIdCache(
        clsPrivateSessionStorage.viewId_Main,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (arrCandidate.length == 0) {
        alert('预览结果：没有可导入的新相关表（可能已全部存在）！');
        return;
      }

      const mapStatByFunc = new Map<string, number>();
      for (const objRow of arrCandidate) {
        const strKey = IsNullOrEmpty(objRow.tabFunction) == true ? '未分类' : objRow.tabFunction;
        mapStatByFunc.set(strKey, (mapStatByFunc.get(strKey) || 0) + 1);
      }

      const arrStatLine = Array.from(mapStatByFunc.entries())
        .sort((a, b) => b[1] - a[1])
        .map((x) => `${x[0]}:${x[1]}条`);

      const mapTabNameCache = new Map<string, string>();
      const mapRegionTypeNameByRegionId = new Map<string, string>();
      const mapRegionTabIdByRegionId = new Map<string, string>();
      const arrRegion = await ViewRegionEx_GetObjLstByViewIdCache(
        clsPrivateSessionStorage.viewId_Main,
        clsPrivateSessionStorage.cmPrjId,
      );
      for (const objRegion of arrRegion) {
        const strRegionTypeName = this.GetRegionTypeNameById(objRegion.regionTypeId);
        mapRegionTypeNameByRegionId.set(objRegion.regionId, strRegionTypeName);
        mapRegionTabIdByRegionId.set(objRegion.regionId, objRegion.tabId || '');
      }
      const arrConvertCandidate = arrCandidate.filter(
        (x) => (x.tabFunction || '').indexOf('代码转换表') > -1,
      );
      const arrConvertNoRelaFld = arrConvertCandidate.filter(
        (x) => IsNullOrEmpty(x.relaFldNames) == true,
      );

      const arrPreviewData = arrCandidate.slice(0, 30);
      const arrPreviewRow: Array<{
        regionId: string;
        regionTypeName: string;
        regionTabDispName: string;
        relaTabDispName: string;
        viewTabTypeId: string;
        inOutTypeId: string;
        relaFldNames: string;
        tabFunction: string;
      }> = [];
      for (const x of arrPreviewData) {
        let strRegionTabDispName = await this.GetTabDisplayName(
          mapRegionTabIdByRegionId.get(x.regionId) || '',
          mapTabNameCache,
        );
        const strRelaTabDispName = await this.GetTabDisplayName(x.tabId, mapTabNameCache);
        const strBaseRegionTypeName = mapRegionTypeNameByRegionId.get(x.regionId) || '';
        let strRegionId = x.regionId;
        let strRegionTypeName = strBaseRegionTypeName;
        if (
          x.tabFunction == '当前界面主表' &&
          objViewInfo != null &&
          x.tabId == objViewInfo.mainTabId
        ) {
          strRegionId = '';
          strRegionTypeName = '';
          strRegionTabDispName = '';
        } else if (x.tabFunction == '区域主表') {
          strRegionTypeName = this.GetRegionMainTypeName(strBaseRegionTypeName);
        }
        arrPreviewRow.push({
          regionId: strRegionId,
          regionTypeName: strRegionTypeName,
          regionTabDispName: strRegionTabDispName,
          relaTabDispName: strRelaTabDispName,
          viewTabTypeId: x.viewTabTypeId,
          inOutTypeId: x.inOutTypeId,
          relaFldNames: x.relaFldNames,
          tabFunction: x.tabFunction,
        });
      }

      const arrEmptySampleRow: Array<{
        regionId: string;
        regionTypeName: string;
        regionTabDispName: string;
        relaTabDispName: string;
        viewTabTypeId: string;
        tabFunction: string;
      }> = [];
      for (const x of arrConvertNoRelaFld.slice(0, 10)) {
        const strRegionTabDispName = await this.GetTabDisplayName(
          mapRegionTabIdByRegionId.get(x.regionId) || '',
          mapTabNameCache,
        );
        const strRelaTabDispName = '无';
        arrEmptySampleRow.push({
          regionId: x.regionId,
          regionTypeName: mapRegionTypeNameByRegionId.get(x.regionId) || '',
          regionTabDispName: strRegionTabDispName,
          relaTabDispName: strRelaTabDispName,
          viewTabTypeId: x.viewTabTypeId,
          tabFunction: x.tabFunction,
        });
      }

      let strMsg = Format('预览完成：待导入[{0}]条。\n', arrCandidate.length);
      if (arrStatLine.length > 0) {
        strMsg += `分类统计: ${arrStatLine.join(' | ')}\n`;
      }
      strMsg += Format(
        '代码转换表候选:[{0}]条；其中相关字段s为空:[{1}]条。\n',
        arrConvertCandidate.length,
        arrConvertNoRelaFld.length,
      );
      if (arrConvertNoRelaFld.length > 0) {
        strMsg += `相关字段s为空样本(最多10条):\n`;
        const arrEmptySample = arrConvertNoRelaFld.slice(0, 10);
        for (const x of arrEmptySample) {
          const strRegionTabDispName = await this.GetTabDisplayName(
            mapRegionTabIdByRegionId.get(x.regionId) || '',
            mapTabNameCache,
          );
          const strRegionTypeName = mapRegionTypeNameByRegionId.get(x.regionId) || '';
          strMsg +=
            `区域:${x.regionId} | 区域类别:${strRegionTypeName} | 区域表:${strRegionTabDispName}` +
            ` | 相关表:无 | 类型:${x.viewTabTypeId} | 说明:${x.tabFunction}\n`;
        }
      }
      if (arrCandidate.length > 30) {
        strMsg += '仅显示前30条：\n';
      }

      const bolPopupOk = this.ShowPreviewPopup(arrPreviewRow, arrEmptySampleRow, strMsg);
      if (bolPopupOk == false) {
        alert(`${strMsg}\n浏览器拦截了新窗口，请允许弹窗后重试。`);
      }
    } catch (e: any) {
      const strMsg = Format(
        '预览导入相关表失败!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnImportRelaTab_Click() {
    const strThisFuncName = this.btnImportRelaTab_Click.name;
    try {
      const arrAddObj = await this.BuildImportRelaTabCandidateList();

      if (arrAddObj.length == 0) {
        alert('没有可导入的新相关表（可能已全部存在）！');
        return;
      }

      let intSuccNum = 0;
      const arrErrMsg: Array<string> = [];
      for (const objInFor of arrAddObj) {
        try {
          const bolIsOk = await ViewRelaTab_AddNewRecordAsync(objInFor);
          if (bolIsOk == true) intSuccNum++;
          else {
            arrErrMsg.push(
              Format(
                '导入失败: regionId={0}, tabId={1}, type={2}',
                objInFor.regionId,
                objInFor.tabId,
                objInFor.viewTabTypeId,
              ),
            );
          }
        } catch (e: any) {
          arrErrMsg.push(
            Format(
              '导入异常: regionId={0}, tabId={1}, err={2}',
              objInFor.regionId,
              objInFor.tabId,
              e,
            ),
          );
        }
      }

      await this.RefreshRelaTabFilterOptions();
      await this.BindGv_ViewRelaTab4Func(divVarSet.refDivList);

      let strMsg = Format('导入完成：新增[{0}]条，候选[{1}]条。', intSuccNum, arrAddObj.length);
      if (arrErrMsg.length > 0) {
        strMsg += Format(
          '\n失败[{0}]条，前3条:\n{1}',
          arrErrMsg.length,
          arrErrMsg.slice(0, 3).join('\n'),
        );
      }
      alert(strMsg);
    } catch (e: any) {
      const strMsg = Format(
        '导入相关表失败!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
