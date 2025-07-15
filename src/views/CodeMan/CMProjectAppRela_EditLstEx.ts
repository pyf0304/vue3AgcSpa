import { clsCMProjectAppRelaEN } from '@/ts/L0Entity/CodeMan/clsCMProjectAppRelaEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import {
  CMProjectAppRela_AddNewRecordAsync,
  CMProjectAppRela_CheckProperty4Update,
  CMProjectAppRela_IsExistRecordAsync,
  CMProjectAppRela_ReFreshCache,
} from '@/ts/L3ForWApi/CodeMan/clsCMProjectAppRelaWApi';
import {
  CMProjectAppRelaEx_DelCmProjectApp,
  CMProjectAppRelaEx_GetObjLstByCmPrjId_Cache,
} from '@/ts/L3ForWApiEx/CodeMan/clsCMProjectAppRelaExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetCheckedObjLstInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { myMessage } from '@/utils/myMessage';
import {
  CmPrjId_Session,
  refCMProjectAppRela_Edit,
  divVarSet,
} from '@/views/CodeMan/CMProjectAppRelaVueShare';
import { CMProjectAppRela_Edit } from '@/viewsBase/CodeMan/CMProjectAppRela_Edit';

/* CMProjectAppRela_EditLstEx 的摘要说明。其中Q代表查询,U代表修改
(AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class CMProjectAppRela_EditLstEx extends CMProjectAppRela_Edit {
  public static arrAppTypeId_Old: Array<number>;

  /**
    按钮单击,用于调用Js函数中btn_Click
   (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
   **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    // const strThisFuncName = this.btnEdit_Click.name;
    console.log(strKeyId);

    const objPage: CMProjectAppRela_EditLstEx = <CMProjectAppRela_EditLstEx>(
      CMProjectAppRela_Edit.GetPageEditObj('CMProjectAppRela_EditLstEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[CMProjectAppRela_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      myMessage.warning(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'EditAppLst':
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        objPage.btnUpdateRecord_Click1();

        break;
      default:
        strMsg = `命令:${strCommandName}在函数(CMProjectAppRela_EditLstEx.btn_Click)中没有被处理！`;
        alert(strMsg);
        break;
    }
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord_EditLst(strCmPrjId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitCMProjectAppRela = '确认修改';
    this.btnCancelCMProjectAppRela = '取消修改';
    //this.keyId = lngmId.toString();
    CmPrjId_Session.value = strCmPrjId;
    try {
      let arrCMProjectAppRela_Sel = await CMProjectAppRelaEx_GetObjLstByCmPrjId_Cache(
        strCmPrjId,
        clsPrivateSessionStorage.currSelPrjId,
      );
      if (arrCMProjectAppRela_Sel == null) {
        arrCMProjectAppRela_Sel = new Array<clsCMProjectAppRelaEN>();
        await refCMProjectAppRela_Edit.value.ShowDataFromCMProjectAppRelaObj(
          arrCMProjectAppRela_Sel,
        );
      } else {
        await refCMProjectAppRela_Edit.value.ShowDataFromCMProjectAppRelaObj(
          arrCMProjectAppRela_Sel,
        );
      }
      CMProjectAppRela_EditLstEx.arrAppTypeId_Old = arrCMProjectAppRela_Sel.map(
        (x) => x.applicationTypeId,
      );

      return true;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click1() {
    const strThisFuncName = this.btnUpdateRecord_Click1.name;
    if (IsNullOrEmpty(CmPrjId_Session.value) == true) {
      const strMsg = '修改记录的CM工程Id为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // CmPrjId_Session.value = strCmPrjId;
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_CMProjectAppRela(this.opType);
      if (bolIsSuccess == false) return;

      this.btnSubmitCMProjectAppRela = '确认修改';
      this.btnCancelCMProjectAppRela = '取消修改';

      const update = await this.UpdateRecord_EditLst(CmPrjId_Session.value);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
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

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText = this.btnSubmitCMProjectAppRela;

    let returnBool;
    let strInfo;
    let strMsg;
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
            //HideDialog_CMProjectAppRela();
            //this.iShowList.BindGvCache(clsCMProjectAppRelaEN._CurrTabName, "");
            //}
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (CMProjectAppRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_CMProjectAppRela();
              }
              if (this.iShowList)
                this.iShowList.BindGvCache(
                  clsCMProjectAppRelaEN._CurrTabName,
                  returnBool.toString(),
                );
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecord_EditLstSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In CMProjectAppRela_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (CMProjectAppRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              this.HideDialog_CMProjectAppRela();
            }
            if (this.iShowList)
              this.iShowList.BindGvCache(clsCMProjectAppRelaEN._CurrTabName, returnBool.toString());
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

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecord_EditLstSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const objCMProjectAppRelaEN = new clsCMProjectAppRelaEN();
    objCMProjectAppRelaEN.SetCMProjectAppRelaId(Number(this.keyId));
    const arrChkObjLst_Checked: Array<HTMLInputElement> = GetCheckedObjLstInDivObj(
      divVarSet.refDivEdit,
    );
    const arrAppTypeId_New = new Array<number>();
    for (const objCheckBox of arrChkObjLst_Checked) {
      const strAppTypeId = objCheckBox.id.substring(3);
      const intAppTypeId = Number(strAppTypeId);
      arrAppTypeId_New.push(intAppTypeId);
    }
    const arrAppTypeId_Del = CMProjectAppRela_EditLstEx.arrAppTypeId_Old.filter(
      (x) => arrAppTypeId_New.indexOf(x) == -1,
    );
    const arrAppTypeId_Add = arrAppTypeId_New.filter(
      (x) => CMProjectAppRela_EditLstEx.arrAppTypeId_Old.indexOf(x) == -1,
    );
    console.log(arrAppTypeId_Add);
    for (const intAppTypeId of arrAppTypeId_Del) {
      await CMProjectAppRelaEx_DelCmProjectApp(CmPrjId_Session.value, intAppTypeId);
      CMProjectAppRela_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
    }
    for (const intAppTypeId of arrAppTypeId_New) {
      objCMProjectAppRelaEN.SetCmPrjId(CmPrjId_Session.value); // CM工程
      objCMProjectAppRelaEN.SetApplicationTypeId(intAppTypeId); // 应用类型
      objCMProjectAppRelaEN.SetOrderNum(10); // 序号
      objCMProjectAppRelaEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
      objCMProjectAppRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
      objCMProjectAppRelaEN.SetUpdUser(clsPubLocalStorage.userId); // 修改者
      //objCMProjectAppRelaEN.memo = this.memo;// 说明
      objCMProjectAppRelaEN.sfUpdFldSetStr = objCMProjectAppRelaEN.updFldString; //设置哪些字段被修改(脏字段)
      //if (objCMProjectAppRelaEN.mId == 0 || objCMProjectAppRelaEN.mId == undefined) {
      //    console.error("关键字不能为空!");
      //    throw "关键字不能为空!";
      //}
      try {
        CMProjectAppRela_CheckProperty4Update(objCMProjectAppRelaEN);
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
        const strCondition = Format(
          "{0}='{1}' and {2}={3}",
          clsCMProjectAppRelaEN.con_CmPrjId,
          CmPrjId_Session.value,
          clsCMProjectAppRelaEN.con_ApplicationTypeId,
          intAppTypeId,
        );
        const bolIsExist = await CMProjectAppRela_IsExistRecordAsync(strCondition);
        if (bolIsExist == false) {
          const returnBool = await CMProjectAppRela_AddNewRecordAsync(objCMProjectAppRelaEN);
          if (returnBool == true) {
            CMProjectAppRela_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
          }
        }
        //return returnBool;
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
    return true;
  }
}
