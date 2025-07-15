import { Main_ViewInfo } from '../Index/Main_ViewInfo';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubFun } from '@/ts/PubConfig/clsPubFun';

import { IShowList } from '@/ts/PubFun/IShowList';
import { ViewRelaTabCRUD } from '@/viewsBase/PrjInterface/ViewRelaTabCRUD';
import { clsViewRelaTabEN } from '@/ts/L0Entity/PrjInterface/clsViewRelaTabEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refViewRelaTab_Edit,
  viewVarSet,
} from '@/views/PrjInterface/ViewRelaTabVueShare';
import { Format } from '@/ts/PubFun/clsString';
import { PrjId_Session } from '@/views/GeneCode/ViewIdGCVariableRelaVueShare';
import ViewRelaTab_EditEx from '@/views/PrjInterface/ViewRelaTab_EditEx';

/** ViewRelaTabCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewRelaTabCRUDEx extends ViewRelaTabCRUD implements IShowList {
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
        this.BindGv_ViewRelaTab(divVarSet.refDivList);
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

      viewVarSet.sortViewRelaTabBy = 'viewName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_ViewRelaTab(divVarSet.refDivList);
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
    await this.BindGv_ViewRelaTab(this.listPara.listDiv);
  }
}
