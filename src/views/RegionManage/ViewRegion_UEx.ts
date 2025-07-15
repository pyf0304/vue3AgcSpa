import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { IShowList } from '@/ts/PubFun/IShowList';
import { ViewRegion_U } from '@/viewsBase/RegionManage/ViewRegion_U';
import { divVarSet, refViewRegion_Edit, viewVarSet } from '@/views/RegionManage/ViewRegionVueShare';
import { refViewRegion_Detail_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';
import { Format } from '@/ts/PubFun/clsString';
import ViewRegion_EditEx from '@/views/RegionManage/ViewRegion_EditEx';

/** ViewRegion_UEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewRegion_UEx extends ViewRegion_U implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvViewRegionBy=  "regionId";
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
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vViewRegion]！');
    //this.BindGv_vViewRegion();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vViewRegion':
        this.BindGv_ViewRegion4Func(divVarSet.refDivList);
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
    let objPage: ViewRegion_UEx;
    if (ViewRegion_U.objPageCRUD == null) {
      ViewRegion_U.objPageCRUD = new ViewRegion_UEx();
      objPage = <ViewRegion_UEx>ViewRegion_U.objPageCRUD;
    } else {
      objPage = <ViewRegion_UEx>ViewRegion_U.objPageCRUD;
    }
    const objPageEdit = new ViewRegion_EditEx('ViewRegion_EditEx', objPage);
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
        refViewRegion_Edit.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refViewRegion_Edit.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refViewRegion_Detail_Sim.value.btnViewRegion_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refViewRegion_Edit.value.btnViewRegion_Edit_Click(strCommandName, strKeyId);
        break;
      // case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      //   //objPageEdit.btnAddNewRecordWithMaxId_Click();
      //   break;
      // case 'CreateWithMaxId': //添加记录使用最大关键字
      //   //objPageEdit.btnAddNewRecordWithMaxId_Click();
      //   break;
      // //case "AddNewRecord":            //添加记录
      // //case "Create":            //添加记录
      // //    objPage.btnAddNewRecord_Click();
      // //    break;
      // case 'UpdateRecord': //修改记录
      // case 'Update': //修改记录
      //   strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
      //   if (IsNullOrEmpty(strKeyId) == true) {
      //     strMsg = '请选择需要修改的记录！';
      //     console.error(strMsg);
      //     alert(strMsg);
      //     return;
      //   }
      //   objPageEdit.btnUpdateRecord_Click(strKeyId);
      //   break;
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
        AccessBtnClickDefault(strCommandName, 'ViewRegion_UEx.btn_Click');

        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'referNum|Ex':
        viewVarSet.sortViewRegionBy = `vViewRegionReferNum|referNum ${sortDirection}|ViewRegion.RegionId = vViewRegionReferNum.RegionId`;
        break;
      case 'regionTypeSimName|Ex':
        viewVarSet.sortViewRegionBy = `RegionType|regionTypeSimName ${sortDirection}|ViewRegion.RegionTypeId = RegionType.RegionTypeId`;
        break;
      case 'containerTypeName|Ex':
        viewVarSet.sortViewRegionBy = `GCContainerType|containerTypeName ${sortDirection}|ViewRegion.ContainerTypeId = GCContainerType.ContainerTypeId`;
        break;
      case 'pageDispModeName|Ex':
        viewVarSet.sortViewRegionBy = `PageDispMode|pageDispModeName ${sortDirection}|ViewRegion.PageDispModeId = PageDispMode.PageDispModeId`;
        break;
      case 'inOutTypeName|Ex':
        viewVarSet.sortViewRegionBy = `InOutType|inOutTypeName ${sortDirection}|ViewRegion.InOutTypeId = InOutType.InOutTypeId`;
        break;
      case 'tabName|Ex':
        viewVarSet.sortViewRegionBy = `vPrjTab_Sim|tabName ${sortDirection}|ViewRegion.TabId = vPrjTab_Sim.TabId`;
        break;
      default:
        viewVarSet.sortViewRegionBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ViewRegion4Func(this.listPara.listDiv);
  }
}
