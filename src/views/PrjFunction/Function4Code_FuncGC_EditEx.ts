//import $ from "jquery";
import {
  Function4Code_GetMaxStrIdAsync,
  Function4Code_GetObjByFuncId4CodeAsync,
} from '@/ts/L3ForWApi/PrjFunction/clsFunction4CodeWApi';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  GetTextAreaValueInDivObj,
  HideTrInDivObj,
  SetInputValueInDivObj,
  SetTextAreaValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import Function4Code_FuncGCEx from '@/views/PrjFunction/Function4Code_FuncGCEx';
import { Function4Code_Edit } from '@/viewsBase/PrjFunction/Function4Code_Edit';
import { divVarSet, refFunction4Code_Edit } from '@/views/PrjFunction/Function4CodeVueShare';
/* Function4Code_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class Function4Code_FuncGC_EditEx extends Function4Code_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    let objPage: Function4Code_FuncGC_EditEx = <Function4Code_FuncGC_EditEx>(
      Function4Code_Edit.GetPageEditObj('Function4Code_FuncGC_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    if (objPage == null) {
      const objPage_P = new Function4Code_FuncGCEx();
      objPage = new Function4Code_FuncGC_EditEx('Function4Code_FuncGC_EditEx', objPage_P);
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucFunction4CodeB1.funcId4Code = Function4CodeGetMaxStrId_S();
    try {
      const returnString = await Function4Code_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表Function4Code的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        SetInputValueInDivObj(divVarSet.refDivEdit, 'txtFuncId4Code', returnString);
      }
      SetInputValueInDivObj(divVarSet.refDivEdit, 'txtOrderNum', '1');
      HideTrInDivObj(divVarSet.refDivEdit, 'trFuncTypeID');
      HideTrInDivObj(divVarSet.refDivEdit, 'trApplicationTypeId');
      //trFunctionSignature.Visible = false;
      HideTrInDivObj(divVarSet.refDivEdit, 'trOrderNum');
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strFuncId4Code: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strFuncId4Code;
    try {
      const objFunction4CodeEN = await Function4Code_GetObjByFuncId4CodeAsync(strFuncId4Code);
      if (objFunction4CodeEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      HideTrInDivObj(divVarSet.refDivEdit, 'trFuncTypeID');
      HideTrInDivObj(divVarSet.refDivEdit, 'trApplicationTypeId');
      // await this.GetDataFromFunction4CodeClass(objFunction4CodeEN);
      await refFunction4Code_Edit.value.ShowDataFromFunction4CodeObj();
      console.log('完成UpdateRecord!');
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

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    refFunction4Code_Edit.value.funcId4Code = '';
    refFunction4Code_Edit.value.funcName4Code = '';
    refFunction4Code_Edit.value.funcCHName4Code = '';
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlApplicationTypeId');
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlReturnTypeId');
    // ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlFuncTypeId');
    refFunction4Code_Edit.value.tabName = '';
    refFunction4Code_Edit.value.clsName = '';
    refFunction4Code_Edit.value.orderNum = 0;
    refFunction4Code_Edit.value.memo = '';
  }
  /**
   * 说明 (Used In Clear())
   **/
  public set memo(value: string) {
    SetTextAreaValueByIdInDivObj(divVarSet.refDivEdit, 'txtMemo', value);
  }
  /**
   * 说明 (Used In PutDataToClass())
   **/
  public get memo(): string {
    const strValue = GetTextAreaValueInDivObj(divVarSet.refDivEdit, 'txtMemo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }

  /**
   * 说明 (Used In Clear())
   **/
  public set returnTypeNameCustom(value: string) {
    SetInputValueInDivObj(divVarSet.refDivEdit, 'txtReturnTypeNameCustom', value);
  }
  /**
   * 说明 (Used In PutDataToClass())
   **/
  public get returnTypeNameCustom(): string {
    const strValue = GetInputValueInDivObj(divVarSet.refDivEdit, 'txtReturnTypeNameCustom');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
