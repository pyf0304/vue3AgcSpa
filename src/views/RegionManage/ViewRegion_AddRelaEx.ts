import $ from 'jquery';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { ViewRegionRela_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';
import { ViewReferFilesEx_CopyFromTempplate } from '@/ts/L3ForWApiEx/GeneCode/clsViewReferFilesExWApi';
import {
  ViewInfoEx_ImportRegionAndFlds1,
  ViewInfoEx_SetViewUpdDate,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import { ViewRegionEx_SetClassName4ViewInfo } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import { ViewRegionRelaEx_AddRelaRegion } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionRelaExWApi';
import {
  CheckControlExistInDivObj,
  CheckDivExist,
  GetCheckBoxValueInDivObj,
  GetSelectValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { ViewRegion_Edit } from '@/viewsBase/RegionManage/ViewRegion_Edit';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

import { ViewRegionRela_Edit } from '@/viewsBase/RegionManage/ViewRegionRela_Edit';
import { clsViewRegionRelaEN } from '@/ts/L0Entity/RegionManage/clsViewRegionRelaEN';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewInfoStore } from '@/store/modules/viewInfo';
import { divVarSet, ViewId_Main_Session } from '@/views/RegionManage/ViewRegionRelaVueShare';
import { refViewRegion_Edit } from '@/views/RegionManage/ViewRegionVueShare';

/** ViewRegion_AddRelaEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ViewRegion_AddRelaEx extends ViewRegionRela_Edit {
  // public static Edit_AddRelaObj: any;

  // public static divEdit_AddRela: HTMLDivElement;
  // public static strViewIdCache = '9991';
  public static strApplicationTypeIdCache = 0;

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static async btnEdit_Click(strCommandName: string, strKeyId: string) {
    const viewInfoStore = useviewInfoStore();
    const objPage = <ViewRegion_AddRelaEx>(
      ViewRegionRela_Edit.GetPageEditObj('ViewRegion_AddRelaEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    console.log(strKeyId);

    let objViewInfo;
    let strMsg;
    switch (strCommandName) {
      case 'StartGeneRegion': //开始生成区域
        objPage.btnStartGeneRegion_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        // ViewRegion_AddRelaEx.strViewIdCache = clsPrivateSessionStorage.viewId_Main;

        objViewInfo = await viewInfoStore.getObj(ViewId_Main_Session.value);
        if (objViewInfo == null) {
          strMsg = `变量：ViewId_Main_Session：${ViewId_Main_Session.value}所指向的界面为空！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        ViewRegion_AddRelaEx.strApplicationTypeIdCache = objViewInfo.applicationTypeId;
        // objPage.divName4Edit = 'divEdit_Region';
        objPage.btnAddRelaRegion_Click();

        break;

      case 'AddRelaRegion': //提交
        objPage.btnAddRelaRegion_Click();
        break;
      case 'Submit': //提交
        objPage.btnSubmitAddRelaRegion_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegion_EditEx.btn_Click');

        break;
    }
  }

  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get CopyReferFilesTemplate(): boolean {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'chkCopyReferFilesTemplate');
    const strId = 'chkCopyReferFilesTemplate';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  public set CopyReferFilesTemplate(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkCopyReferFilesTemplate', value);
  }
  public set QueryRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkQueryRegion', value);
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get QueryRegion(): boolean {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'chkQueryRegion');
    const strId = 'chkQueryRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set DGRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkDGRegion', value);
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get DGRegion(): boolean {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'chkDGRegion');
    const strId = 'chkDGRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set EditRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkEditRegion', value);
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get EditRegion(): boolean {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'chkEditRegion');
    const strId = 'chkEditRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /*
   * 是否使用Cache (Used In Clear())
   */
  public set ExcelExportRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkExcelExportRegion', value);
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get ExcelExportRegion(): boolean {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'chkExcelExportRegion');
    const strId = 'chkExcelExportRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set FeatureRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkFeatureRegion', value);
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get FeatureRegion(): boolean {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'chkFeatureRegion');
    const strId = 'chkFeatureRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set DetailRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(divVarSet.refDivEdit, 'chkDetailRegion', value);
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get DetailRegion(): boolean {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'chkDetailRegion');
    const strId = 'chkDetailRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnStartGeneRegion_Click() {
    const strThisFuncName = this.btnStartGeneRegion_Click.name;
    // const strCommandText = this.btnSubmitViewRegion;
    //这是一个单表的修改的代码,由于逻辑层太简单,

    try {
      if (this.CopyReferFilesTemplate == true) {
        await ViewReferFilesEx_CopyFromTempplate(
          ViewId_Main_Session.value,
          clsPrivateSessionStorage.currSelPrjId,
          clsPubLocalStorage.userId,
        );
      }
    } catch (objException2: any) {
      const strMsg = Format(
        '复制模板记录出错,请联系管理员！错误:{0}.({1}.{2})',
        objException2,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    try {
      if (this.QueryRegion == true) {
        //&& txtFileName_QueryRegion.text.Trim() != "")
        ///添加区域及区域字段，该函数是ViewInfo的相关函数，
        ///有三个参数：1、视图ID(viewId)
        ///				2、区域类型()
        ///				3、数据源类型ID
        ///				4、数据源表ID()
        ///
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewId_Main_Session.value, //视图ID(viewId)
          enumRegionType.QueryRegion_0001, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
      }
      //如果选择列表区域
      if (this.DGRegion == true) {
        // && txtFileName_DGRegion.text.Trim() != "")
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewId_Main_Session.value, //视图ID(viewId)
          enumRegionType.ListRegion_0002, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
      }
      ////如果选择ListView区域
      //if (chkListViewRegion.Checked == true && txtFileName_ListViewRegion.text.Trim() != "")
      //{
      //    clsViewInfoBLEx.ImportRegionAndFlds(seViewId, //视图ID(viewId)
      //        clsRegionTypeENEx.LISTVIEWREGION,               //区域类型
      //        ""                              //区域名称
      //        );
      //}
      //如果选择编辑区域
      if (this.EditRegion == true) {
        //&& txtFileName_EditRegion.text.Trim() != "") {
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewId_Main_Session.value, //视图ID(viewId)
          enumRegionType.EditRegion_0003, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
      }
      //如果选择Excel导出区域
      if (this.ExcelExportRegion == true) {
        // && txtFileName_ExcelExportRegion.text.Trim() != "") {
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewId_Main_Session.value, //视图ID(viewId)
          enumRegionType.ExcelExportRegion_0007, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
      }

      //如果选择功能区域
      if (this.FeatureRegion == true) {
        //&& txtFileName_ExcelExportRegion.text.Trim() != "")
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewId_Main_Session.value, //视图ID(viewId)
          enumRegionType.FeatureRegion_0008, //功能区域
          clsPubLocalStorage.userId,
          '', //区域名称
        );
      }
      //如果选择详细信息区域
      if (this.DetailRegion == true) {
        // && txtFileName_DetailRegion.text.Trim() != "")
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewId_Main_Session.value, //视图ID(viewId)
          enumRegionType.DetailRegion_0006, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
      }
    } catch (objException: any) {
      const strMsg = Format(
        '生成区域和字段出错,请联系管理员！错误:{0}.({1}.{2})',
        objException,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      await ViewRegionEx_SetClassName4ViewInfo(ViewId_Main_Session.value);
    } catch (objException: any) {
      const strMsg = Format(
        '在设置viewId:[{0}]的类名时出错，{1}. (In {2}.{3})',
        ViewId_Main_Session.value,
        objException,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      //设置当前界面的修改日期

      await ViewInfoEx_SetViewUpdDate(ViewId_Main_Session.value);
    } catch (objException: any) {
      const strMsg = Format(
        '在设置viewId:[{0}]的类名时出错，{1}. (In {2}.{3})',
        ViewId_Main_Session.value,
        objException,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    let strInfo = '生成区域和字段成功！';
    strInfo += '(In ViewRegion_Edit.btnSubmit_Click)';
    $('#lblResult51').val(strInfo);
    //显示信息框
    console.log(strInfo);
    alert(strInfo);

    if (ViewRegion_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      refViewRegion_Edit.value.hideDialog();
    }
    if (this.iShowList)
      this.iShowList.BindGvCache(`${clsViewRegionEN._CurrTabName}MultiCreate`, '');
  }

  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Edit(divName4Edit: string) {
    CheckDivExist(divName4Edit);
    const strUrl = '../RegionManage/ViewRegion_AddRela';
    console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data: any) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }
  /** 添加新记录
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddRelaRegion_Click() {
    this.opType = 'AddRela';
    try {
      if (ViewRegion_AddRelaEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refViewRegion_Edit.value.showDialog();
      }

      // 为编辑区绑定下拉框
      //if (this.bolIsUseInDiv == true) {
      console.error('btnAddRelaRegion_Click, BindDdl4EditRegionInDiv');

      this.AddNewRecord();
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /** 为插入记录做准备工作
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    this.btnSubmitViewRegionRela = '确认添加';
    this.btnCancelViewRegionRela = '取消添加';
    // this.Clear();
    //wucViewRegionB1.ViewRegionId = ViewRegion_GetMaxStrId_S();
    try {
      //await ViewRegion_GetMaxStrIdAsync();
      //const returnString=  responseText;
      //if (returnString == "") {
      //    const strInfo = `获取表ViewRegion的最大关键字为空，不成功，请检查!`;
      //    //显示信息框
      //    alert(strInfo);
      //}
      //else {
      //    $('#txtViewRegionId').val(returnString);
      //}
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
 显示对话框
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_ShowDialog)
*/
  // public ShowDialog_ViewRegion(strOp: string) {
  //   if (strOp === 'Add') {
  //     $('#lblDialogTitle_ViewRegion').html('添加记录');
  //     //ViewRegion_EditEx.GetMaxStrId('#txtViewRegionId');
  //   } else if (strOp === 'Update') {
  //     $('#lblDialogTitle_ViewRegion').html('修改记录');
  //   } else if (strOp === 'Detail') {
  //     $('#btnSubmit_ViewRegion').hide();
  //     $('#lblDialogTitle_ViewRegion').html('详细信息');
  //   } else if (strOp === 'AddRela') {
  //     $('#lblDialogTitle_ViewRegion').html('添加现有');
  //   }

  //   ShowDialog('#divEditDialog_ViewRegion');
  // }

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnSubmitAddRelaRegion_Click() {
    const strThisFuncName = this.btnSubmitAddRelaRegion_Click.name;
    // const strCommandText = this.btnSubmitViewRegion;
    const strRegionId = this.regionId;
    console.log('strRegionId', strRegionId);

    //这是一个单表的修改的代码,由于逻辑层太简单,

    try {
      const responseBool = await ViewRegionRelaEx_AddRelaRegion(
        ViewId_Main_Session.value,
        strRegionId,
        clsPrivateSessionStorage.currSelPrjId,
        clsPubLocalStorage.userId,
      );
      if (responseBool == true) {
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
        if (ViewRegion_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          refViewRegion_Edit.value.hideDialog();
        }
        if (this.iShowList)
          this.iShowList.BindGvCache(`${clsViewRegionRelaEN._CurrTabName}AddRela`, '');
        let strInfo = '为界面引用相关区域成功！';
        strInfo += '(In ViewRegion_Edit.btnSubmitAddRelaRegion_Click)';
        $('#lblResult51').val(strInfo);
        //显示信息框
        console.log(strInfo);
        alert(strInfo);
      }
    } catch (objException2: any) {
      const strMsg = Format(
        '复制模板记录出错,请联系管理员！错误:{0}.({1}.{2})',
        objException2,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    try {
      //设置当前界面的修改日期

      await ViewInfoEx_SetViewUpdDate(ViewId_Main_Session.value);
    } catch (objException: any) {
      const strMsg = Format(
        '在设置viewId:[{0}]的类名时出错，{1}. (In {2}.{3})',
        ViewId_Main_Session.value,
        objException,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
  }

  /*
   * 表ID (Used In Clear())
   */
  public set regionId(value: string) {
    const objDiv = divVarSet.refDivEdit;
    if (objDiv == null) {
      const strMsg = Format('层不存在, 请检查！');
      alert(strMsg);
      return;
    }
    const strId = 'lstViewRegion';
    SetSelectValueByIdInDivObj(objDiv, strId, value);
  }
  /*
   * 表ID (Used In PutDataToClass())
   */
  public get regionId(): string {
    const strValue = GetSelectValueInDivObj(divVarSet.refDivEdit, 'lstViewRegion');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
}
