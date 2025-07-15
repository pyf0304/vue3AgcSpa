import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsPrjTabFldEN } from '@/ts/L0Entity/Table_Field/clsPrjTabFldEN';
import { clsPrjTabFldENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabFldENEx';
import {
  PrjTabFld_AddNewRecordAsync,
  PrjTabFld_CheckPropertyNew,
  PrjTabFld_ReFreshCache,
} from '@/ts/L3ForWApi/Table_Field/clsPrjTabFldWApi';

import { FieldTabEx_AddNewRec } from '@/ts/L3ForWApiEx/Table_Field/clsFieldTabExWApi';
import { CheckDivExist, GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { PrjTabFld_Edit } from '@/viewsBase/Table_Field/PrjTabFld_Edit';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usePrjTabFldStore } from '@/store/modules/prjTabFld';
import { divVarSet, refPrjTabFld_Edit, TabId_Static } from '@/views/Table_Field/PrjTabFldVueShare';

declare function GetPrjTabFldObj(): string;

/* PrjTabFld_EditByACEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class PrjTabFld_EditByACExBak extends PrjTabFld_Edit {
  public static intGetIframeTimes = 0;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = <PrjTabFld_EditByACExBak>PrjTabFld_EditByACExBak.objPageEdit;
    const strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'Create': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PrjTabFld_EditByACEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 为插入记录做准备工作
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    // const strThisFuncName = this.AddNewRecord.name;

    this.btnSubmitPrjTabFld = '确认添加';
    this.btnCancelPrjTabFld = '取消添加';
    //this.Clear();
    //wucPrjTabFldB1.mId = PrjTabFld_GetMaxStrId_S();
  }
  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refPrjTabFld_Edit.value.showDialog();
      }
      if (this.bolIsLoadEditRegion == false) {
        //
        // await this.AddDPV_Edit(PrjTabFld_EditByACEx.divEdit);
        this.opType = 'Add';

        this.bolIsLoadEditRegion = true; //
        this.AddNewRecord();
        // if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        //   this.ShowDialog_PrjTabFld('Add');
        // }
      } else {
        this.opType = 'Add';
        await this.AddNewRecord();
        // if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        //   this.ShowDialog_PrjTabFld('Add');
        // }
      }
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在当前界面中，导入编辑区域
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
   * @returns
   **/
  public async AddDPV_Edit(divName4Edit: string) {
    // const strThisFuncName = this.AddDPV_Edit.name;
    CheckDivExist(divName4Edit);
    const strUrl = '../Table_Field/PrjTabFld_EditByAC';
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

  /** 添加新记录，保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const prjTabFldStore = usePrjTabFldStore();
    const objPrjTabFldEN = new clsPrjTabFldENEx();
    try {
      const ifrPrjTabFld_AC = <HTMLIFrameElement>document.getElementById('ifrPrjTabFld_AC');

      const ifrDocument = ifrPrjTabFld_AC.contentDocument;
      if (ifrDocument == null) return false;
      const ifrWindow = ifrPrjTabFld_AC.contentWindow;
      if (ifrWindow == null) return false;

      //let jsonString = ifrWindow.GetPrjTabFldObj();
      //
      let jsonString = await GetPrjTabFldObj();
      console.log('jsonString', jsonString);
      if (IsNullOrEmpty(jsonString) == true) {
        jsonString = this.PrjTabFldObjStr;
        if (IsNullOrEmpty(jsonString) == true) {
          if (PrjTabFld_EditByACExBak.intGetIframeTimes > 2) {
            const strMsg = Format(
              '从IFrame获取数据不成功.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return false; //一定要有一个返回值，否则会出错！
          } else {
            PrjTabFld_EditByACExBak.intGetIframeTimes++;
            setTimeout(PrjTabFld_EditByACExBak.btnEdit_Click, 200, 'Submit', '');
            return false;
          }
        }
      }
      const objTemp = JSON.parse(jsonString);
      ObjectAssign(objPrjTabFldEN, objTemp);

      objPrjTabFldEN.SetTabId(TabId_Static.value);
      //objPrjTabFldEN.SetPrjId( PrjTabFld_Edit.PrjIdCache);

      console.log('objPrjTabFldEN in ByACEx(parent)-TS', objPrjTabFldEN);
      if (IsNullOrEmpty(objPrjTabFldEN.fldId) == true) {
        if (IsNullOrEmpty(objPrjTabFldEN.fldName) == false) {
          console.error('objPrjTabFldEN.fldName:', objPrjTabFldEN.fldName);
          //alert("objPrjTabFldEN.fldName:" + objPrjTabFldEN.fldName);
          const strFldName = objPrjTabFldEN.fldName;
          const strCaption = objPrjTabFldEN.caption;
          const strDataTypeId = objPrjTabFldEN.dataTypeId;
          const intFldLength = objPrjTabFldEN.fldLength;
          const intFldPrecision = objPrjTabFldEN.fldPrecision;
          const bolIsNull = objPrjTabFldEN.isTabNullable;
          const strPrjId = clsPrivateSessionStorage.currSelPrjId;
          const strUpdUser = clsPubLocalStorage.userId;
          try {
            const strFldId = await FieldTabEx_AddNewRec(
              strFldName,
              strCaption,
              strDataTypeId,
              intFldLength,
              intFldPrecision,
              bolIsNull,
              strPrjId,
              strUpdUser,
            );
            if (IsNullOrEmpty(strFldId) == false) {
              objPrjTabFldEN.fldId = strFldId;
            } else {
              alert('添加新字段(FieldTab)不成功!');
              return false;
            }
          } catch (e) {
            console.error(e);
            alert(e);
            return false;
          }
        }
      }
      //            await this.PutDataToPrjTabFldClass(objPrjTabFldEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      PrjTabFld_CheckPropertyNew(objPrjTabFldEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const returnBool = await PrjTabFld_AddNewRecordAsync(objPrjTabFldEN);
      if (returnBool == true) {
        PrjTabFld_ReFreshCache(TabId_Static.value);
        prjTabFldStore.delObjLstByTabId(TabId_Static.value);
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText = this.btnSubmitPrjTabFld;
    let strMsg;
    let returnBool;
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
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //HideDialog_PrjTabFld();
            //this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, "");
            //}
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              // if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              //   this.HideDialog_PrjTabFld();
              // }
              if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refPrjTabFld_Edit.value.hideDialog();
              }
              if (this.iShowList)
                this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, returnBool.toString());
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In PrjTabFld_Edit.btnSubmit_Click)';
          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            // if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
            //   this.HideDialog_PrjTabFld();
            // }
            if (PrjTabFld_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refPrjTabFld_Edit.value.hideDialog();
            }
            if (this.iShowList)
              this.iShowList.BindGvCache(clsPrjTabFldEN._CurrTabName, returnBool.toString());
          }
          break;
        default:
          strMsg = Format(
            'strCommandText:{0}在switch中没有处理！(In btnSubmit_Click())',
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置关键字的值
   **/
  public get PrjTabFldObjStr(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'hidPrjTabFldObjStr');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
