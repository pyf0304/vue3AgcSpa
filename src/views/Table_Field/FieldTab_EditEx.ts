import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { PrjTabFldEx_getTabIdLstByFldId } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';
import { HideTrInDivObj, ShowTrInDiv, GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { FieldTab_Edit } from '@/viewsBase/Table_Field/FieldTab_Edit';

import { vPrjTab_SimEx_GetObjByTabIdCache } from '@/ts/L3ForWApiEx/Table_Field/clsvPrjTab_SimExWApi';
import {
  FieldTab_CheckProperty4Update,
  FieldTab_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTabWApi';
import { clsFieldTabEN } from '@/ts/L0Entity/Table_Field/clsFieldTabEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { usevFieldTab_Sim2Store } from '@/store/modules/vFieldTab_Sim2';
import { divVarSet, refFieldTab_Edit } from '@/views/Table_Field/FieldTabVueShare';

/* FieldTab_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class FieldTab_EditEx extends FieldTab_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;

    const objPage: FieldTab_EditEx = <FieldTab_EditEx>(
      FieldTab_Edit.GetPageEditObj('FieldTab_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'EditTabFld': //查询记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPage.btnUpdateRecordInTab_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'FieldTab_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }
  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refFieldTab_Edit.value.showDialog();
      }
      divVarSet.refDivEdit = refFieldTab_Edit.value.$refs.refDivEdit;

      this.opType = 'Add';

      this.bolIsLoadEditRegion = true; //
      this.AddNewRecord();
      // if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      //   this.ShowDialog_FieldTab('Add');
      // }

      HideTrInDivObj(divVarSet.refDivEdit, 'trRelaTabInfo');
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

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        await refFieldTab_Edit.value.showDialog();
      }
      divVarSet.refDivEdit = refFieldTab_Edit.value.$refs.refDivEdit;
      this.opType = 'Update';

      //
      // await this.AddDPV_Edit(divEdit);
      this.opType = 'Update';

      this.bolIsLoadEditRegion = true; //
      this.btnSubmitFieldTab = '确认修改';
      this.btnCancelFieldTab = '取消修改';
      const update = await this.UpdateRecord(strKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      // if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      //   this.ShowDialog_FieldTab('Update');
      // }

      ShowTrInDiv(divVarSet.refDivEdit, 'trRelaTabInfo');
      const arrTabId = await PrjTabFldEx_getTabIdLstByFldId(strKeyId);
      let arrvPrjTab = new Array<clsvPrjTab_SimEN>();
      const U_Tab: HTMLUListElement = document.createElement('ul');
      //U_Tab.classList.add("menu-item-child");
      //U_Tab.style.display = "none";
      for (const strTabId of arrTabId) {
        if (strTabId == '') continue;
        const objPrjTab = await vPrjTab_SimEx_GetObjByTabIdCache(
          strTabId,
          clsPrivateSessionStorage.currSelPrjId,
        );
        if (objPrjTab == null) continue;
        arrvPrjTab.push(objPrjTab);
      }
      arrvPrjTab = arrvPrjTab.sort((x, y) => x.tabName.localeCompare(y.tabName));
      for (const objPrjTab of arrvPrjTab) {
        const Li_FldLst: HTMLLIElement = document.createElement('li');
        const A_FldLst: HTMLAnchorElement = document.createElement('a');
        const Span_FldLst: HTMLSpanElement = document.createElement('span');
        Span_FldLst.innerText = Format('{0}', objPrjTab.tabName);

        (function (strTabId1) {
          A_FldLst.onclick = function () {
            EditPrjTab(strTabId1);
          };
        })(objPrjTab.tabId);
        A_FldLst.appendChild(Span_FldLst);
        Li_FldLst.appendChild(A_FldLst);
        U_Tab.appendChild(Li_FldLst);
      }
      const divRelaTabInfo = GetDivObjInDivObj(divVarSet.refDivEdit, 'divRelaTabInfo');
      divRelaTabInfo.innerHTML = '';
      divRelaTabInfo.appendChild(U_Tab);
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();

    let objFieldTabEN;
    try {
      objFieldTabEN = await refFieldTab_Edit.value.GetEditDataFieldTabObj();
      objFieldTabEN.fldId = this.keyId;
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }

    objFieldTabEN.sfUpdFldSetStr = objFieldTabEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objFieldTabEN.fldId == '' || objFieldTabEN.fldId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FieldTab_CheckProperty4Update(objFieldTabEN);
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
      //检查唯一性条件
      const bolIsExistCond_PrjId_FldName_DataTypeId = await this.CheckUniCond4Update(objFieldTabEN);
      if (bolIsExistCond_PrjId_FldName_DataTypeId == false) {
        return false;
      }
      const returnBool = await FieldTab_UpdateRecordAsync(objFieldTabEN);
      if (returnBool == true) {
        //FieldTab_ReFreshCache(FieldTab_Edit.PrjIdCache);

        vFieldTab_Sim2Store.delObj(this.keyId);
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const vFieldTab_Sim2Store = usevFieldTab_Sim2Store();
    const strCommandText: string = this.btnSubmitFieldTab;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitFieldTab = '确认添加';
          this.btnCancelFieldTab = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refFieldTab_Edit.value.hideDialog();
              }
              if (this.iShowList) {
                this.iShowList.BindGv(clsFieldTabEN._CurrTabName, returnKeyId);
              } else {
                console.error('iShowList is null or undefined.');
              }
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refFieldTab_Edit.value.hideDialog();
              }

              if (this.iShowList) {
                this.iShowList.BindGv(clsFieldTabEN._CurrTabName, returnBool.toString());
              } else {
                console.error('iShowList is null or undefined.');
              }
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In FieldTab_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            vFieldTab_Sim2Store.delObj(this.keyId);
            if (FieldTab_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refFieldTab_Edit.value.hideDialog();
            }
            if (this.iShowList) {
              this.iShowList.BindGv(clsFieldTabEN._CurrTabName, returnBool.toString());
            }
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
}
function EditPrjTab(strTabId: string) {
  refFieldTab_Edit.value.EditPrjTab(strTabId);
}
