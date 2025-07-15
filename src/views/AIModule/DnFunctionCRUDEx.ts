import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { DnFunctionCRUD } from '@/viewsBase/AIModule/DnFunctionCRUD';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refDnFunction_Detail,
  refDnFunction_Edit,
  viewVarSet,
  PrjId_Session,
} from '@/views/AIModule/DnFunctionVueShare';

import { Format } from '@/ts/PubFun/clsString';
import DnFunction_EditEx from '@/views/AIModule/DnFunction_EditEx';

/** DnFunctionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class DnFunctionCRUDEx extends DnFunctionCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvDnFunctionBy=  "dnFunctionId";
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
    alert('该类没有绑定该函数：[this.BindGv_vDnFunction]！');
    //this.BindGv_vDnFunction();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vDnFunction':
      case 'DnFunction':
        this.BindGv_DnFunction4Func(divVarSet.refDivList);
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
    let objPage: DnFunctionCRUDEx;
    if (DnFunctionCRUD.objPageCRUD == null) {
      DnFunctionCRUD.objPageCRUD = new DnFunctionCRUDEx();
      objPage = <DnFunctionCRUDEx>DnFunctionCRUD.objPageCRUD;
    } else {
      objPage = <DnFunctionCRUDEx>DnFunctionCRUD.objPageCRUD;
    }
    const objPageEdit = new DnFunction_EditEx('DnFunction_EditEx', objPage);
    console.log(objPageEdit);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'JumpToNewWin':
      case 'JumpToNewTab':
      case 'TestAutoComplete':
      case 'TestAutoCompletePro':
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        refDnFunction_Edit.value.btnDnFunction_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refDnFunction_Edit.value.btnDnFunction_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refDnFunction_Detail.value.btnDnFunction_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refDnFunction_Edit.value.btnDnFunction_Edit_Click(strCommandName, strKeyId);
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
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
        AccessBtnClickDefault(strCommandName, 'DnFunctionCRUDEx.btn_Click');

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
      //clsPubFun.SetCommFun4BL();
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();

      viewVarSet.sortDnFunctionBy = 'dnFunctionId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_DnFunction4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'associationMappingName|Ex':
        viewVarSet.sortDnFunctionBy = `AssociationMapping|AssociationMappingName ${sortDirection}|DnFunction.AssociationMappingId = AssociationMapping.AssociationMappingId`;
        break;
      default:
        viewVarSet.sortDnFunctionBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_DnFunction4Func(this.thisDivList);
  }
}
