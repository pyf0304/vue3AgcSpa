import $ from 'jquery';
import { ViewRegion_Edit_Sim } from '@/viewsBase/RegionManage/ViewRegion_Edit_Sim';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import {
  ViewRegion_CheckProperty4Update,
  ViewRegion_UpdateRecordAsync,
} from '@/ts/L3ForWApi/RegionManage/clsViewRegionWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format } from '@/ts/PubFun/clsString';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { useviewRegionStore } from '@/store/modules/viewRegion';
import { refViewRegion_Edit_Sim } from '@/views/RegionManage/ViewRegion_UVueShare';

/** ViewRegion_Edit_SimEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ViewRegion_Edit_SimEx extends ViewRegion_Edit_Sim {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = ViewRegion_Edit_SimEx.objPageEdit;

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'Update_ViewRegion': //修改记录
        objPage.btnUpdateRecord_Click();

        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewRegion_Edit_SimEx.btn_Click');

        break;
    }
  }

  public async btnSubmit_Click() {
    const strCommandText = this.btnSubmitViewRegion;
    let returnBool;
    let strMsg;
    let strInfo;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            // responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData)=>{
            //const returnBool2: boolean = jsonData;
            //if (returnBool2 == true)
            //{
            //  if (ViewRegion_Edit_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01) {
            //   refViewRegion_Edit_Sim.value.hideDialog();
            // };
            //this.BindGv_vViewRegion();
            //}
            //});
          } else {
            await this.AddNewRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                if (ViewRegion_Edit_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  refViewRegion_Edit_Sim.value.hideDialog();
                }
                //this.BindGv_vViewRegion();
              }
            });
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In ViewRegion_U.btnSubmit_Click)';
          $('#lblResult51').val(strInfo);
          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (ViewRegion_Edit_Sim.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refViewRegion_Edit_Sim.value.hideDialog();
            }
            //const update = objViewRegion_UEx.btnDetailRecord_Click();
            if (this.iShowList)
              this.iShowList.BindGvCache(`${clsViewRegionEN._CurrTabName}Detail`, '');

            //                            this.BindGv_vViewRegion();
          }

          break;
        default:
          strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /** 修改记录
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async UpdateRecordSave(): Promise<boolean> {
    const viewRegionStore = useviewRegionStore();
    //this.divName = "divUpdateRecordSave";
    // const objViewRegionEN: clsViewRegionEN = new clsViewRegionEN();
    // objViewRegionEN.regionId = this.keyId;
    const objViewRegion_Old = await viewRegionStore.getObj(this.keyId);
    if (objViewRegion_Old == null) {
      const strMsg = Format(
        '在项目:[{0}]中，区域Id:[{1}]没有相应区域，请检查！',
        clsPrivateSessionStorage.currSelPrjName,
        this.keyId,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    const objViewRegionEN = await refViewRegion_Edit_Sim.value.GetEditDataViewRegionObj();
    objViewRegionEN.SetRegionId(this.keyId);

    objViewRegionEN.regionTypeId = objViewRegion_Old.regionTypeId;

    objViewRegionEN.sfUpdFldSetStr = objViewRegionEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewRegionEN.regionId == '' || objViewRegionEN.regionId == undefined) {
      throw '关键字不能为空!';
    }
    try {
      ViewRegion_CheckProperty4Update(objViewRegionEN);
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `检查数据不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const returnBool = await ViewRegion_UpdateRecordAsync(objViewRegionEN);

      if (returnBool == true) {
        viewRegionStore.delObj(objViewRegionEN.regionId);
      }
      return returnBool;
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
}
