import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { IShowList } from '@/ts/PubFun/IShowList';
import { CmProjectPrjTabCRUD } from '@/viewsBase/CodeMan/CmProjectPrjTabCRUD';
import {
  divVarSet,
  refCmProjectPrjTab_Detail,
  refCmProjectPrjTab_Edit,
  viewVarSet,
} from '@/views/CodeMan/CmProjectPrjTabVueShare';
import { Format } from '@/ts/PubFun/clsString';
import CmProjectPrjTab_EditEx from '@/views/CodeMan/CmProjectPrjTab_EditEx';

/** CmProjectPrjTabCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class CmProjectPrjTabCRUDEx extends CmProjectPrjTabCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortCMProjectPrjTabBy = "mId";
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
    alert(`该类没有绑定该函数：[this.BindGv_CMProjectPrjTab]！${strType}${strPara}`);
    //this.BindGv_CMProjectPrjTab();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'CMProjectPrjTab':
        this.BindGv_CmProjectPrjTab4Func(divVarSet.refDivList);
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
    let objPage: CmProjectPrjTabCRUDEx;
    if (CmProjectPrjTabCRUD.objPageCRUD == null) {
      CmProjectPrjTabCRUD.objPageCRUD = new CmProjectPrjTabCRUDEx();
      objPage = <CmProjectPrjTabCRUDEx>CmProjectPrjTabCRUD.objPageCRUD;
    } else {
      objPage = <CmProjectPrjTabCRUDEx>CmProjectPrjTabCRUD.objPageCRUD;
    }
    const objPageEdit = new CmProjectPrjTab_EditEx('CmProjectPrjTab_EditEx', objPage);
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
        refCmProjectPrjTab_Edit.value.btnCmProjectPrjTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refCmProjectPrjTab_Edit.value.btnCmProjectPrjTab_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refCmProjectPrjTab_Detail.value.btnCmProjectPrjTab_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refCmProjectPrjTab_Edit.value.btnCmProjectPrjTab_Edit_Click(strCommandName, strKeyId);
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
        AccessBtnClickDefault(strCommandName, 'CmProjectPrjTabCRUDEx.btn_Click');

        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'tabName|Ex':
        viewVarSet.sortCmProjectPrjTabBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'cmPrjName|Ex':
        viewVarSet.sortCmProjectPrjTabBy = `CMProject|cmPrjName ${sortDirection}|CmProjectPrjTab.CmPrjId = CMProject.CmPrjId`;
        break;
      case 'prjName|Ex':
        viewVarSet.sortCmProjectPrjTabBy = `Projects|prjName ${sortDirection}|CmProjectPrjTab.PrjId = Projects.PrjId`;
        break;
      default:
        viewVarSet.sortCmProjectPrjTabBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_CmProjectPrjTab4Func(this.listPara.listDiv);
  }
}
