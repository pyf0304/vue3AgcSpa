import { Ref } from 'vue';
import $ from 'jquery';
import { enumRegionType } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { ViewRegionRela_ReFreshCache } from '@/ts/L3ForWApi/RegionManage/clsViewRegionRelaWApi';
import { ViewReferFilesEx_CopyFromTempplate } from '@/ts/L3ForWApiEx/GeneCode/clsViewReferFilesExWApi';
import {
  ViewInfoEx_ImportRegionAndFlds1,
  ViewInfoEx_SetViewUpdDate,
} from '@/ts/L3ForWApiEx/PrjInterface/clsViewInfoExWApi';
import {
  CheckControlExistInDivObj,
  CheckDivExist,
  GetCheckBoxValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { ViewRegion_Edit } from '@/viewsBase/RegionManage/ViewRegion_Edit';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

/** ViewRegion_MultiCreateEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ViewRegion_MultiCreateEx extends ViewRegion_Edit {
  public static Edit_MultiCreateRef: Ref<any>;
  public static divEdit_MultiCreate: HTMLDivElement;
  public static strViewIdCache = '9991';

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // let objPage_MultiCreate;
    const objPage = <ViewRegion_MultiCreateEx>(
      ViewRegion_Edit.GetPageEditObj('ViewRegion_MultiCreateEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'StartGeneRegion': //开始生成区域
        objPage.btnStartGeneRegion_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'AddRelaViewRegion': //自定义功能
        objPage.btnAddNewRegion_Click();

        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegion_MultiCreateEx.btn_Click');

        break;
    }
  }

  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get CopyReferFilesTemplate(): boolean {
    const objDiv = ViewRegion_MultiCreateEx.divEdit_MultiCreate;
    CheckControlExistInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'input',
      'chkCopyReferFilesTemplate',
    );
    const strId = 'chkCopyReferFilesTemplate';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  public set CopyReferFilesTemplate(value: boolean) {
    SetCheckBoxValueByIdInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'chkCopyReferFilesTemplate',
      value,
    );
  }
  public set QueryRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'chkQueryRegion',
      value,
    );
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get QueryRegion(): boolean {
    const objDiv = ViewRegion_MultiCreateEx.divEdit_MultiCreate;
    CheckControlExistInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'input',
      'chkQueryRegion',
    );
    const strId = 'chkQueryRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set DGRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'chkDGRegion',
      value,
    );
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get DGRegion(): boolean {
    const objDiv = ViewRegion_MultiCreateEx.divEdit_MultiCreate;
    CheckControlExistInDivObj(ViewRegion_MultiCreateEx.divEdit_MultiCreate, 'input', 'chkDGRegion');
    const strId = 'chkDGRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set EditRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'chkEditRegion',
      value,
    );
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get EditRegion(): boolean {
    const objDiv = ViewRegion_MultiCreateEx.divEdit_MultiCreate;
    CheckControlExistInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'input',
      'chkEditRegion',
    );
    const strId = 'chkEditRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }
  /*
   * 是否使用Cache (Used In Clear())
   */
  public set ExcelExportRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'chkExcelExportRegion',
      value,
    );
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get ExcelExportRegion(): boolean {
    const objDiv = ViewRegion_MultiCreateEx.divEdit_MultiCreate;
    CheckControlExistInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'input',
      'chkExcelExportRegion',
    );
    const strId = 'chkExcelExportRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set FeatureRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'chkFeatureRegion',
      value,
    );
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get FeatureRegion(): boolean {
    const objDiv = ViewRegion_MultiCreateEx.divEdit_MultiCreate;
    CheckControlExistInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'input',
      'chkFeatureRegion',
    );
    const strId = 'chkFeatureRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /*
   * 是否使用Cache (Used In Clear())
   */
  public set DetailRegion(value: boolean) {
    SetCheckBoxValueByIdInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'chkDetailRegion',
      value,
    );
  }
  /*
   * 是否使用Cache (Used In PutDataToClass())
   */
  public get DetailRegion(): boolean {
    const objDiv = ViewRegion_MultiCreateEx.divEdit_MultiCreate;
    CheckControlExistInDivObj(
      ViewRegion_MultiCreateEx.divEdit_MultiCreate,
      'input',
      'chkDetailRegion',
    );
    const strId = 'chkDetailRegion';
    return GetCheckBoxValueInDivObj(objDiv, strId);
  }

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnStartGeneRegion_Click() {
    const strThisFuncName = this.btnStartGeneRegion_Click.name;
    // const strCommandText = this.btnStartGeneRegion;
    //这是一个单表的修改的代码,由于逻辑层太简单,

    try {
      if (this.CopyReferFilesTemplate == true) {
        await ViewReferFilesEx_CopyFromTempplate(
          ViewRegion_MultiCreateEx.strViewIdCache,
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
          ViewRegion_MultiCreateEx.strViewIdCache, //视图ID(viewId)
          enumRegionType.QueryRegion_0001, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
      }
      //如果选择列表区域
      if (this.DGRegion == true) {
        // && txtFileName_DGRegion.text.Trim() != "")
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewRegion_MultiCreateEx.strViewIdCache, //视图ID(viewId)
          enumRegionType.ListRegion_0002, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
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
          ViewRegion_MultiCreateEx.strViewIdCache, //视图ID(viewId)
          enumRegionType.EditRegion_0003, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
      }
      //如果选择Excel导出区域
      if (this.ExcelExportRegion == true) {
        // && txtFileName_ExcelExportRegion.text.Trim() != "") {
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewRegion_MultiCreateEx.strViewIdCache, //视图ID(viewId)
          enumRegionType.ExcelExportRegion_0007, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
      }

      //如果选择功能区域
      if (this.FeatureRegion == true) {
        //&& txtFileName_ExcelExportRegion.text.Trim() != "")
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewRegion_MultiCreateEx.strViewIdCache, //视图ID(viewId)
          enumRegionType.FeatureRegion_0008, //功能区域
          clsPubLocalStorage.userId,
          '', //区域名称
        );
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
      }
      //如果选择详细信息区域
      if (this.DetailRegion == true) {
        // && txtFileName_DetailRegion.text.Trim() != "")
        await ViewInfoEx_ImportRegionAndFlds1(
          ViewRegion_MultiCreateEx.strViewIdCache, //视图ID(viewId)
          enumRegionType.DetailRegion_0006, //区域类型
          clsPubLocalStorage.userId,
          '', //区域名称
        );
        ViewRegionRela_ReFreshCache(clsPrivateSessionStorage.cmPrjId);
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
      //设置当前界面的修改日期

      await ViewInfoEx_SetViewUpdDate(ViewRegion_MultiCreateEx.strViewIdCache);
    } catch (objException: any) {
      const strMsg = Format(
        '在设置viewId:[{0}]的类名时出错，{1}. (In {2}.{3})',
        ViewRegion_MultiCreateEx.strViewIdCache,
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

    if (ViewRegion_MultiCreateEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      ViewRegion_MultiCreateEx.Edit_MultiCreateRef.value.hideDialog();
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
    const strUrl = '../RegionManage/ViewRegion_MultiCreate';
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
  /** 为插入记录做准备工作
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    this.btnStartGeneRegion = '开始生成';
    this.btnCancelViewRegion = '关闭';
    //this.Clear();
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
  /** 添加新记录
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewRegion_Click() {
    try {
      if (ViewRegion_MultiCreateEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await ViewRegion_MultiCreateEx.Edit_MultiCreateRef.value.showDialog();
      }
      ViewRegion_MultiCreateEx.divEdit_MultiCreate =
        ViewRegion_MultiCreateEx.Edit_MultiCreateRef.value.$refs.refDivEdit;
      this.opType = 'Add';

      if (this.bolIsLoadEditRegion == false) {
        //
        // await this.AddDPV_Edit(ViewRegion_MultiCreateEx.divEdit_MultiCreate);
        // 为编辑区绑定下拉框
        //if (this.bolIsUseInDiv == true) {
        //    await this.BindDdl4EditRegionInDiv();
        //}
        //else {
        //    await this.BindDdl4EditRegion();
        //}

        this.bolIsLoadEditRegion = true; //
        this.opType = 'Add';
        this.AddNewRecord();
      } else {
        this.opType = 'Add';
        await this.AddNewRecord();
      }
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
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
  //     $('#lblDialogTitle_ViewRegion').html('详细信息');
  //   }
  //   // ShowDialog('#divEditDialog_ViewRegion');
  // }

  /**
   * 获取按钮的标题
   **/
  public get btnStartGeneRegion(): string {
    const strValue =
      ViewRegion_MultiCreateEx.Edit_MultiCreateRef.value.GetButtonText('btnStartGeneRegion');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnStartGeneRegion(value: string) {
    ViewRegion_MultiCreateEx.Edit_MultiCreateRef.value.SetButtonText('btnStartGeneRegion', value);
  }
}
