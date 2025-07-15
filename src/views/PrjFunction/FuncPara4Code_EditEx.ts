/**
 * 类名:FuncPara4Code_EditEx(界面:FuncPara4CodeCRUD)
 * 表名:FuncPara4Code(00050384)
 * 版本:2023.07.28.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/31 17:30:39
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:函数管理(PrjFunction)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { clsFuncPara4CodeEN } from '@/ts/L0Entity/PrjFunction/clsFuncPara4CodeEN';
import {
  FuncPara4Code_AddNewRecordWithMaxIdAsync,
  FuncPara4Code_CheckPropertyNew,
} from '@/ts/L3ForWApi/PrjFunction/clsFuncPara4CodeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { refFuncPara4Code_Edit, divVarSet } from '@/views/PrjFunction/FuncPara4CodeVueShare';
import { FuncPara4Code_Edit } from '@/viewsBase/PrjFunction/FuncPara4Code_Edit';
/* FuncPara4Code_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class FuncPara4Code_EditEx extends FuncPara4Code_Edit {
  public static Create4FuncId: (strFuncId4Code: string, strParaId: string) => Promise<boolean>;
  public static strFuncId4Code = '';
  public funcId4Code = '';

  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: FuncPara4Code_EditEx = <FuncPara4Code_EditEx>(
      FuncPara4Code_Edit.GetPageEditObj('FuncPara4Code_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let strMsg = '';
    const strFuncId4Code = strKeyId;
    switch (strCommandName) {
      case 'Submit': //提交
        if (FuncPara4Code_EditEx.strFuncId4Code != '' || objPage.opType == 'AddEx') {
          objPage.btnSubmit_ClickEx();
        } else {
          objPage.btnSubmit_Click();
        }
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'AddNewPara': //添加新参数
        objPage.funcId4Code = strFuncId4Code;
        objPage.btnAddNewRecord_ClickEx(strFuncId4Code);
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
  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_ClickEx(strFuncId4Code: string) {
    const strThisFuncName = this.btnAddNewRecord_ClickEx.name;
    FuncPara4Code_EditEx.strFuncId4Code = strFuncId4Code;
    try {
      this.opType = 'AddEx';
      const bolIsSuccess = await this.ShowDialog_FuncPara4Code(this.opType);
      if (bolIsSuccess == false) return;

      await this.AddNewRecord();
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
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_FuncPara4Code(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_FuncPara4Code.name;
    if (FuncPara4Code_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      await refFuncPara4Code_Edit.value.showDialog();
    }
    divVarSet.refDivEdit = refFuncPara4Code_Edit.value.$refs.refDivEdit;
    if (divVarSet.refDivEdit == null) {
      if (FuncPara4Code_Edit.times4TestShowDialog < 2) {
        FuncPara4Code_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_FuncPara4Code(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      FuncPara4Code_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddEx' || strOp === 'AddWithMaxId') {
      this.btnSubmitFuncPara4Code = '确认添加';
      this.btnCancelFuncPara4Code = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitFuncPara4Code = '确认修改';
      this.btnCancelFuncPara4Code = '取消修改';
    }
    return true;
  }
  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_ClickEx() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText: string = this.btnSubmitFuncPara4Code;
    try {
      // let returnBool = false;
      let returnKeyId = '';
      // const strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitFuncPara4Code = '确认添加';
          this.btnCancelFuncPara4Code = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
          } else {
            returnKeyId = await this.AddNewRecordSaveEx();
          }
          if (IsNullOrEmpty(returnKeyId) == false) {
            await FuncPara4Code_EditEx.Create4FuncId(this.funcId4Code, returnKeyId);
            if (FuncPara4Code_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
              this.HideDialog_FuncPara4Code();
            if (this.iShowList) {
              this.iShowList.BindGv(clsFuncPara4CodeEN._CurrTabName, returnKeyId);
            } else {
              console.error('iShowList is null or undefined.');
            }
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
        this.constructor.name,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSaveEx(): Promise<string> {
    const strThisFuncName = this.AddNewRecordSave.name;

    let objFuncPara4CodeEN;
    try {
      objFuncPara4CodeEN = await refFuncPara4Code_Edit.value.GetEditDataFuncPara4CodeObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return ''; //一定要有一个返回值,否则会出错!
    }
    try {
      FuncPara4Code_CheckPropertyNew(objFuncPara4CodeEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return ''; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objFuncPara4CodeEN);
      if (bolIsExistCond == false) {
        return '';
      }
      let returnBool = false;
      const returnKeyId = await FuncPara4Code_AddNewRecordWithMaxIdAsync(objFuncPara4CodeEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        //FuncPara4Code_ReFreshCache(FuncPurposeId_Static.value);
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnKeyId; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return ''; //一定要有一个返回值,否则会出错!
    }
  }
}
