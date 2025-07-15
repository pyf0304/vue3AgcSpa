import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetFirstCheckedKeyIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { IShowList } from '@/ts/PubFun/IShowList';
import { AppCodeTypeRelaCRUD } from '@/viewsBase/GeneCode/AppCodeTypeRelaCRUD';
import {
  divVarSet,
  refAppCodeTypeRela_Detail,
  refAppCodeTypeRela_Edit,
} from '@/views/GeneCode/AppCodeTypeRelaVueShare';
import AppCodeTypeRela_EditEx from '@/views/GeneCode/AppCodeTypeRela_EditEx';

/** AppCodeTypeRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class AppCodeTypeRelaCRUDEx extends AppCodeTypeRelaCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortAppCodeTypeRelaBy=  "mId";
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
    this.BindGv_AppCodeTypeRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'AppCodeTypeRela':
        alert('该类没有绑定该函数：[this.BindGv_AppCodeTypeRela4Func]！');
        //this.BindGv_AppCodeTypeRela4Func();
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
    let objPage: AppCodeTypeRelaCRUDEx;
    if (AppCodeTypeRelaCRUD.objPageCRUD == null) {
      AppCodeTypeRelaCRUD.objPageCRUD = new AppCodeTypeRelaCRUDEx();
      objPage = <AppCodeTypeRelaCRUDEx>AppCodeTypeRelaCRUD.objPageCRUD;
    } else {
      objPage = <AppCodeTypeRelaCRUDEx>AppCodeTypeRelaCRUD.objPageCRUD;
    }
    const objPageEdit = new AppCodeTypeRela_EditEx('AppCodeTypeRela_EditEx', objPage);
    console.log(objPageEdit);

    // const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refAppCodeTypeRela_Edit.value.btnAppCodeTypeRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refAppCodeTypeRela_Edit.value.btnAppCodeTypeRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refAppCodeTypeRela_Detail.value.btnAppCodeTypeRela_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refAppCodeTypeRela_Edit.value.btnAppCodeTypeRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'AppCodeTypeRelaCRUDEx.btn_Click');

        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    console.log('sortColumnKey', sortColumnKey);
    console.log('sortDirection', sortDirection);
  }
}
