import { UseState_BindDdl_UseStateIdInDivCache } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { FuncModule_AgcCRUD } from '@/viewsBase/PrjManage/FuncModule_AgcCRUD';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  PrjId_Session,
  refFuncModule_Agc_Detail,
  refFuncModule_Agc_Edit,
  viewVarSet,
} from '@/views/PrjManage/FuncModule_AgcVueShare';
import FuncModule_Agc_EditEx from '@/views/PrjManage/FuncModule_Agc_EditEx';

/** FuncModule_AgcCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class FuncModule_AgcCRUDEx extends FuncModule_AgcCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortFuncModule_AgcBy = "FuncModuleAgcId";
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
    this.BindGv_FuncModule_Agc4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);

    switch (strType) {
      case 'FuncModule_Agc':
        // alert('该类没有绑定该函数：[this.BindGv_FuncModule_Agc4Func]！');
        this.BindGv_FuncModule_Agc4Func(divVarSet.refDivList);
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
    let objPage: FuncModule_AgcCRUDEx;
    if (FuncModule_AgcCRUD.objPageCRUD == null) {
      FuncModule_AgcCRUD.objPageCRUD = new FuncModule_AgcCRUDEx();
      objPage = <FuncModule_AgcCRUDEx>FuncModule_AgcCRUD.objPageCRUD;
    } else {
      objPage = <FuncModule_AgcCRUDEx>FuncModule_AgcCRUD.objPageCRUD;
    }
    const objPageEdit = new FuncModule_Agc_EditEx('FuncModule_Agc_EditEx', objPage);
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
        refFuncModule_Agc_Edit.value.btnFuncModule_Agc_Edit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        refFuncModule_Agc_Edit.value.btnFuncModule_Agc_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refFuncModule_Agc_Detail.value.btnFuncModule_Agc_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        refFuncModule_Agc_Edit.value.btnFuncModule_Agc_Edit_Click(strCommandName, strKeyId);
        break;
      case 'SetUseStateId': //自定义功能:设置使用状态
        objPage.btnSetUseStateId_Click();
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
        AccessBtnClickDefault(strCommandName, 'FuncModule_AgcCRUDEx.btn_Click');

        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      // // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();

      await UseState_BindDdl_UseStateIdInDivCache(
        divVarSet.refDivFunction,
        'ddlUseStateId_SetFldValue',
      ); //

      viewVarSet.sortFuncModule_AgcBy = 'funcModuleAgcId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_FuncModule_Agc4Func(divVarSet.refDivList);
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
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      PrjId_Session.value = clsPrivateSessionStorage.currSelPrjId;

      // // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();

      viewVarSet.sortFuncModule_AgcBy = 'funcModuleAgcId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_FuncModule_Agc4Func(divVarSet.refDivList);
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
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'useStateName|Ex':
        viewVarSet.sortFuncModule_AgcBy = `UseState|useStateName ${sortDirection}|FuncModule_Agc.UseStateId = UseState.UseStateId`;
        break;
      case 'viewNum|Ex':
        viewVarSet.sortFuncModule_AgcBy = `vFuncModuleViewNum|viewNum ${sortDirection}|FuncModule_Agc.FuncModuleAgcId = vFuncModuleViewNum.FuncModuleAgcId`;
        break;
      case 'tabNum|Ex':
        viewVarSet.sortFuncModule_AgcBy = `vFuncModuleTabNum|tabNum ${sortDirection}|FuncModule_Agc.FuncModuleAgcId = vFuncModuleTabNum.FuncModuleAgcId`;
        break;
      case 'prjName|Ex':
        viewVarSet.sortFuncModule_AgcBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortFuncModule_AgcBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_FuncModule_Agc4Func(this.listPara.listDiv);
  }
}
