/*import $ from "jquery";*/
import { useConstraintFieldsStore } from '@/store/modules/constraintFields';
import { useUserStore } from '@/store/modulesShare/user';
import { clsConstraintFieldsEN } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsEN';
import { enumConstraintType } from '@/ts/L0Entity/Table_Field/clsConstraintTypeEN';
import { clsPrjConstraintEN } from '@/ts/L0Entity/Table_Field/clsPrjConstraintEN';
import { enumSortType } from '@/ts/L0Entity/Table_Field/clsSortTypeEN';
import { PrjConstraint_GetMaxStrIdAsync } from '@/ts/L3ForWApi/Table_Field/clsPrjConstraintWApi';
import { ConstraintFieldsEx_AddNewRecordSave } from '@/ts/L3ForWApiEx/Table_Field/clsConstraintFieldsExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsCboObject } from '@/ts/PubFun/clsCboObject';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { myMessage } from '@/utils/myMessage';
import { PrjConstraint_Edit } from '@/viewsBase/Table_Field/PrjConstraint_Edit';
import { refPrjConstraint_Edit, TabId_Static } from '@/views/Table_Field/PrjConstraintVueShare';
import { vPrjConstraint_Sim_GetObjByPrjConstraintIdCache } from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';

/* PrjConstraint_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class PrjConstraint_EditEx extends PrjConstraint_Edit {
  public static getSelectedFldObjLst: () => clsCboObject[];
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static async btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage = PrjConstraint_Edit.GetPageEditObj('PrjConstraint_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let strMsg = '';
    let objPrjConstraint;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecordWithMaxId_Click();
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
        // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divName4List);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        await objPage.btnUpdateRecord_Click(strKeyId);
        setTimeout(async () => {
          objPrjConstraint = await vPrjConstraint_Sim_GetObjByPrjConstraintIdCache(
            strKeyId,
            clsPrivateSessionStorage.currSelPrjId,
          );
          refPrjConstraint_Edit.value.ShowFieldObjSelector(objPrjConstraint.tabId, strKeyId);
        }, 10);

        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPage.btnUpdateRecordInTab_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PrjConstraint_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    const userStore = useUserStore();
    console.log('strThisFuncName1', strThisFuncName);
    refPrjConstraint_Edit.value.Clear();
    refPrjConstraint_Edit.value.createUserId = userStore.getUserId;
    refPrjConstraint_Edit.value.inUse = true;
    try {
      const returnString = await PrjConstraint_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表PrjConstraint的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    const userStore = useUserStore();
    refPrjConstraint_Edit.value.Clear();
    refPrjConstraint_Edit.value.createUserId = userStore.getUserId;
    refPrjConstraint_Edit.value.inUse = true;
    //this.prjConstraintId = await PrjConstraint_GetMaxStrIdAsync();
    try {
      const returnString = await PrjConstraint_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表PrjConstraint的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const userStore = useUserStore();
    const constraintFieldsStore = useConstraintFieldsStore();
    const strCommandText: string = this.btnSubmitPrjConstraint;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      let intIndex;
      const arrConstraintFields = new Array<clsConstraintFieldsEN>();
      let strConstraintTypeId = '';
      const arrSelectedFldObj = PrjConstraint_EditEx.getSelectedFldObjLst();

      console.log('arrSelectedFldObj:', arrSelectedFldObj);
      strConstraintTypeId = refPrjConstraint_Edit.value.constraintTypeId;
      if (
        strConstraintTypeId == enumConstraintType.Uniqueness_01 &&
        arrSelectedFldObj.length == 0
      ) {
        myMessage.warning('唯一性约束一定要选择字段！');
        return;
      }
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPrjConstraint = '确认添加';
          this.btnCancelPrjConstraint = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (['02', '03', '06'].indexOf(clsPrjConstraintEN.PrimaryTypeId) > -1) {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == true) {
              strInfo = returnBool ? '添加成功!' : '添加不成功!';
              strInfo += '(In PrjConstraint_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              return;
            }
            this.keyId = returnKeyId;
            intIndex = 1;
            for (const objCboObj of arrSelectedFldObj) {
              const pobjConstraintFieldsEN = new clsConstraintFieldsEN();
              pobjConstraintFieldsEN.SetPrjConstraintId(this.keyId); // 约束表Id
              if (refPrjConstraint_Edit.value.tabId != '') {
                pobjConstraintFieldsEN.SetTabId(TabId_Static.value); // 表ID
              } else {
                pobjConstraintFieldsEN.SetTabId(TabId_Static.value); // 表ID
              }

              pobjConstraintFieldsEN.SetFldId(objCboObj.value); // 字段Id
              if (strConstraintTypeId == enumConstraintType.MaxMinValue_02) {
                pobjConstraintFieldsEN.SetMaxValue(''); //this.maxValue); // 最大值
                pobjConstraintFieldsEN.SetMinValue(''); //this.minValue); // 最小值
              }
              pobjConstraintFieldsEN.SetSortTypeId(enumSortType.AscendingOrder_01); //this.sortTypeId); // 排序类型Id
              pobjConstraintFieldsEN.SetInUse(true); // 是否在用
              pobjConstraintFieldsEN.SetOrderNum(intIndex++); // 序号
              pobjConstraintFieldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
              pobjConstraintFieldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
              pobjConstraintFieldsEN.SetUpdUser(userStore.getUserId); // 修改者
              pobjConstraintFieldsEN.SetMemo(refPrjConstraint_Edit.value.memo); // 说明
              arrConstraintFields.push(pobjConstraintFieldsEN);
            }
            returnBool = await ConstraintFieldsEx_AddNewRecordSave(arrConstraintFields, this.keyId);
            constraintFieldsStore.delObjLstByPrjConstraintId(this.keyId);
            if (returnBool == true) {
              if (PrjConstraint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_PrjConstraint();
              if (this.iShowList)
                this.iShowList.BindGvCache(clsPrjConstraintEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == false) {
              strInfo = returnBool ? '添加成功!' : '添加不成功!';
              strInfo += '(In PrjConstraint_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              return;
            }
            intIndex = 1;
            for (const objCboObj of arrSelectedFldObj) {
              const pobjConstraintFieldsEN = new clsConstraintFieldsEN();
              pobjConstraintFieldsEN.SetPrjConstraintId(this.keyId); // 约束表Id
              pobjConstraintFieldsEN.SetTabId(refPrjConstraint_Edit.value.tabId); // 表ID
              pobjConstraintFieldsEN.SetFldId(objCboObj.value); // 字段Id
              if (strConstraintTypeId == enumConstraintType.MaxMinValue_02) {
                pobjConstraintFieldsEN.SetMaxValue(''); //this.maxValue); // 最大值
                pobjConstraintFieldsEN.SetMinValue(''); //this.minValue); // 最小值
              }
              pobjConstraintFieldsEN.SetSortTypeId(enumSortType.AscendingOrder_01); //this.sortTypeId); // 排序类型Id
              pobjConstraintFieldsEN.SetInUse(true); // 是否在用
              pobjConstraintFieldsEN.SetOrderNum(intIndex++); // 序号
              pobjConstraintFieldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
              pobjConstraintFieldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
              pobjConstraintFieldsEN.SetUpdUser(userStore.getUserId); // 修改者
              pobjConstraintFieldsEN.SetMemo(refPrjConstraint_Edit.value.memo); // 说明
              arrConstraintFields.push(pobjConstraintFieldsEN);
            }
            returnBool = await ConstraintFieldsEx_AddNewRecordSave(arrConstraintFields, this.keyId);
            constraintFieldsStore.delObjLstByPrjConstraintId(this.keyId);

            if (returnBool == true) {
              if (PrjConstraint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                refPrjConstraint_Edit.value.hideDialog();
              }
              if (this.iShowList)
                this.iShowList.BindGvCache(clsPrjConstraintEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单

          returnBool = await this.UpdateRecordSave();
          if (returnBool == false) {
            strInfo = returnBool ? '修改成功!' : '修改不成功!';
            strInfo += '(In PrjConstraint_Edit.btnSubmit_Click)';
            //显示信息框
            //console.log(strInfo);
            alert(strInfo);
            return;
          }
          intIndex = 1;
          for (const objCboObj of arrSelectedFldObj) {
            const pobjConstraintFieldsEN = new clsConstraintFieldsEN();
            pobjConstraintFieldsEN.SetPrjConstraintId(this.keyId); // 约束表Id
            pobjConstraintFieldsEN.SetTabId(refPrjConstraint_Edit.value.tabId); // 表ID
            pobjConstraintFieldsEN.SetFldId(objCboObj.value); // 字段Id
            if (strConstraintTypeId == enumConstraintType.MaxMinValue_02) {
              pobjConstraintFieldsEN.SetMaxValue(''); //this.maxValue); // 最大值
              pobjConstraintFieldsEN.SetMinValue(''); //this.minValue); // 最小值
            }
            pobjConstraintFieldsEN.SetSortTypeId(enumSortType.AscendingOrder_01); //this.sortTypeId); // 排序类型Id
            pobjConstraintFieldsEN.SetInUse(true); // 是否在用
            pobjConstraintFieldsEN.SetOrderNum(intIndex++); // 序号
            pobjConstraintFieldsEN.SetPrjId(clsPrivateSessionStorage.currSelPrjId); // 工程ID
            pobjConstraintFieldsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
            pobjConstraintFieldsEN.SetUpdUser(userStore.getUserId); // 修改者
            pobjConstraintFieldsEN.SetMemo(refPrjConstraint_Edit.value.memo); // 说明
            arrConstraintFields.push(pobjConstraintFieldsEN);
          }
          returnBool = await ConstraintFieldsEx_AddNewRecordSave(arrConstraintFields, this.keyId);
          constraintFieldsStore.delObjLstByPrjConstraintId(this.keyId);

          if (returnBool == true) {
            if (PrjConstraint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              refPrjConstraint_Edit.value.hideDialog();
            }
            if (this.iShowList)
              this.iShowList.BindGvCache(clsPrjConstraintEN._CurrTabName, this.keyId);
          }
          break;
        default:
          strMsg = Format(
            'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
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
        this.className,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  // public Clear() {
  //   refPrjConstraint_Edit.value.constraintName = '';
  //   ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlTabId');
  //   ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlConstraintTypeId');
  //   refPrjConstraint_Edit.value.constraintDescription = '';
  //   refPrjConstraint_Edit.value.createUserId = '';
  //   refPrjConstraint_Edit.value.inUse = false;
  //   refPrjConstraint_Edit.value.memo = '';
  // }
}
