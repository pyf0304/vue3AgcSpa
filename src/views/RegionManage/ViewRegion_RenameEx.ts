import $ from 'jquery';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { ViewRegionEx_Rename } from '@/ts/L3ForWApiEx/RegionManage/clsViewRegionExWApi';
import {
  CheckControlExistInDivObj,
  CheckDivExist,
  GetCheckBoxValueInDivObj,
  GetInputValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ViewRegion_Edit } from '@/viewsBase/RegionManage/ViewRegion_Edit';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { divVarSet, refViewRegion_Edit } from '@/views/RegionManage/ViewRegionVueShare';
/** ViewRegion_RenameEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ViewRegion_RenameEx extends ViewRegion_Edit {
  public strViewIdCache = '9991';
  public strRegionIdCache = '9991';

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: ViewRegion_RenameEx = <ViewRegion_RenameEx>(
      ViewRegion_Edit.GetPageEditObj('ViewRegion_RenameEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'ConfirmRename': //开始生成区域
        objPage.btnConfirmRename_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
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
  public async btnConfirmRename_Click() {
    const strThisFuncName = this.btnConfirmRename_Click.name;
    const viewRegionStore = useviewRegionStore();
    // const strCommandText = this.btnSubmitViewRegion;
    //这是一个单表的修改的代码,由于逻辑层太简单,

    try {
      const strNewRegionName = this.NewRegionName;
      const returnBool = await ViewRegionEx_Rename(
        this.strRegionIdCache,
        this.strViewIdCache, //视图ID(viewId)
        strNewRegionName, //区域类型
        clsPubLocalStorage.userId,
      );

      if (returnBool == true) {
        viewRegionStore.delObj(this.strRegionIdCache);
        if (ViewRegion_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          refViewRegion_Edit.value.hideDialog();
        }
        if (this.iShowList)
          this.iShowList.BindGvCache(`${clsViewRegionEN._CurrTabName}_Rename`, '');
      }
      return returnBool;
    } catch (objException: any) {
      const strMsg = Format(
        '区域名称重命名出错,请联系管理员！错误:{0}.({1}.{2})',
        objException,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // let strInfo = '生成区域和字段成功！';
    // strInfo += '(In ViewRegion_Edit.btnSubmit_Click)';
    // $('#lblResult51').val(strInfo);
    // //显示信息框
    // console.log(strInfo);
    // alert(strInfo);

    // if (ViewRegion_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
    //   refViewRegion_Edit.value.hideDialog();
    // }
    // if (this.iShowList)
    //   this.iShowList.BindGvCache(`${clsViewRegionEN._CurrTabName}MultiCreate`, '');
  }

  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Edit(divName4Edit: string) {
    CheckDivExist(divName4Edit);
    const strUrl = '../RegionManage/ViewRegion_Rename';
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
  public async btnRenameRegion_Click() {
    this.opType = 'Rename';
    try {
      if (IsNullOrEmpty(this.strRegionIdCache) == true) {
        const strMsg = Format('重命名时，区域Id为空！');
        console.error(strMsg);
        return;
      }
      if (this.bolIsLoadEditRegion == false) {
        //
        // await this.AddDPV_Edit(divVarSet.refDivEdit);
        // 为编辑区绑定下拉框

        // this.ShowDialog_ViewRegion('Rename');
        this.bolIsLoadEditRegion = true; //
        this.Rename(this.strRegionIdCache);
      } else {
        // this.ShowDialog_ViewRegion('Rename');
        await this.Rename(this.strRegionIdCache);
      }
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
  public async Rename(strRegionId: string) {
    const viewRegionStore = useviewRegionStore();
    console.log(strRegionId);
    this.btnSubmitViewRegion = '确认添加';
    this.btnCancelViewRegion = '取消添加';
    refViewRegion_Edit.value.Clear();
    //wucViewRegionB1.ViewRegionId = ViewRegion_GetMaxStrId_S();
    try {
      const objViewRegion = await viewRegionStore.getObj(this.strRegionIdCache);
      if (objViewRegion == null) {
        const strMsg = Format(
          '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
          clsPrivateSessionStorage.currSelPrjName,
          this.strRegionIdCache,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      $('#txtNewRegionName').val(objViewRegion.clsName);
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
   * 新区域名称 (Used In Clear())
   */
  public set NewRegionName(value: string) {
    const objDiv = divVarSet.refDivEdit;
    CheckControlExistInDivObj(divVarSet.refDivEdit, 'input', 'txtNewRegionName');
    const strId = 'txtNewRegionName';

    SetInputValueInDivObj(objDiv, strId, value);
  }
  /*
   * 新区域名称 (Used In PutDataToClass())
   */
  public get NewRegionName(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtNewRegionName');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
}
