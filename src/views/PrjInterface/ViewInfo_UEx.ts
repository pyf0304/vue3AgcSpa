import ViewInfo_DetailEx from './ViewInfo_DetailEx';
import ViewInfo_EditEx from './ViewInfo_EditEx';
import { ViewInfo_U } from '@/viewsBase/PrjInterface/ViewInfo_U';
import { clsPubFun } from '@/ts/PubConfig/clsPubFun';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';

import { CMProject_GetObjByCmPrjIdCache } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { CMProjectEx_GetObjLstByPrjIdCache } from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  ApplicationTypeId_Static,
  divVarSet,
  refViewInfo_Detail,
  refViewInfo_Edit2,
  UserId_Local,
  viewVarSet,
} from '@/views/PrjInterface/ViewInfo_UVueShare';

/** ViewInfo_UEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewInfo_UEx extends ViewInfo_U implements IShowList {
  public static GetPropValueV2: (strPropName: string) => any;
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvViewInfoBy=  "viewId";
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
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vViewInfo]！');
    //this.BindGv_vViewInfo();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vViewInfo':
        // this.BindGv_ViewInfoCache(divVarSet.refDivList);
        break;
      case 'ViewInfo':
        this.ShowDetailRecord();
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
    let objPage: ViewInfo_UEx;
    if (ViewInfo_U.objPageCRUD == null) {
      ViewInfo_U.objPageCRUD = new ViewInfo_UEx();
      objPage = <ViewInfo_UEx>ViewInfo_U.objPageCRUD;
    } else {
      objPage = <ViewInfo_UEx>ViewInfo_U.objPageCRUD;
    }
    const objPageEdit = new ViewInfo_EditEx('ViewInfo_EditEx', objPage);
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
        refViewInfo_Edit2.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refViewInfo_Edit2.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refViewInfo_Detail.value.btnViewInfo_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        strKeyId = clsPrivateSessionStorage.viewId_Main;
        refViewInfo_Edit2.value.btnViewInfo_Edit_Click(strCommandName, strKeyId);
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
        AccessBtnClickDefault(strCommandName, 'ViewInfo_UEx.btn_Click');

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
          //await Main_ViewInfo.DispViewInfo();
          //await Main_ViewInfo.ShowCurrItem("ViewInfo_U", "");
          break;
      }
      UserId_Local.value = clsPubLocalStorage.userId;

      let strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      if (IsNullOrEmpty(strCmPrjId) == true) {
        const arrCMProject = await CMProjectEx_GetObjLstByPrjIdCache(
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (arrCMProject.length == 0) {
          const strMsg = Format(
            '工程:{0}没有相关的CM工程！',
            clsPrivateSessionStorage.currSelPrjName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strCmPrjId = arrCMProject[0].cmPrjId;

        ApplicationTypeId_Static.value = arrCMProject[0].applicationTypeId;
      } else {
        const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
        if (objCMProject == null) {
          const strMsg = Format('CM项目Id:[{0}]，没有相应的CM项目，请检查！', strCmPrjId);
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        ApplicationTypeId_Static.value = objCMProject.applicationTypeId;
      }

      clsPubFun.SetCommFun4BL();
      // 为查询区绑定下拉框

      //await this.BindGv_vViewInfoCache();
      if (refViewInfo_Detail.value != null) {
        this.ShowDetailRecord();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async ShowDetailRecord() {
    const objViewInfo_UEx = new ViewInfo_UEx();
    const objViewInfo_Detail = new ViewInfo_DetailEx(objViewInfo_UEx);
    // const divViewInfoDetail = ViewInfo_UEx.GetPropValueV2('detailDiv');
    // if (divViewInfoDetail == null) return;
    // objViewInfo_Detail.divDetail = divViewInfoDetail;
    await objViewInfo_Detail.btnDetailRecord_Click();
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
      case 'applicationTypeSimName|Ex':
        viewVarSet.sortViewInfoBy = `ApplicationType|applicationTypeSimName ${sortDirection}|ViewInfo.ApplicationTypeId = ApplicationType.ApplicationTypeId`;
        break;
      case 'funcModuleName|Ex':
        viewVarSet.sortViewInfoBy = `FuncModule_Agc|funcModuleName ${sortDirection}|ViewInfo.FuncModuleAgcId = FuncModule_Agc.FuncModuleAgcId`;
        break;
      case 'mainTabNameEx|Ex':
        viewVarSet.sortViewInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortViewInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ViewInfo4Func(this.listPara.listDiv);
  }
}
