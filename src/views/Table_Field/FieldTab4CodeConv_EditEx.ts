/**
* 类名:FieldTab4CodeConv_EditEx(界面:FieldTab4CodeConvCRUD)
* 表名:FieldTab4CodeConv(00050593)
* 生成代码版本:2022.04.06.1
* 生成日期:2022/04/08 03:01:52
* 生成者:
工程名称:AGC(0005)
CM工程:AgcSpa前端(变量首字母小写)
* 相关数据库:103.116.76.183,9433AGC_CS12
* PrjDataBaseId:0005
* 模块中文名:字段、表维护(Table_Field)
* 框架-层名:WA_编辑区后台Ex_TS(WA_ViewScript_EditCSEx_TS)
* 编程语言:TypeScript
**/
import { FieldTab4CodeConv_Edit } from '@/viewsBase/Table_Field/FieldTab4CodeConv_Edit';
import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';
import {
  FieldTab4CodeConv_CheckProperty4Update,
  FieldTab4CodeConv_GetObjByFldIdAsync,
  FieldTab4CodeConv_ReFreshCache,
  FieldTab4CodeConv_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Table_Field/clsFieldTab4CodeConvWApi';
import { vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache } from '@/ts/L3ForWApiEx/Table_Field/clsvFieldTab_SimExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  divVarSet,
  refFieldTab4CodeConv_Edit,
} from '@/views/Table_Field/FieldTab4CodeConvVueShare';

/* FieldTab4CodeConv_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class FieldTab4CodeConv_EditEx extends FieldTab4CodeConv_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const strThisFuncName = this.btnEdit_Click.name;
    const objPage = FieldTab4CodeConv_Edit.GetPageEditObj('FieldTab4CodeConv_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按合适的关键字初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let strMsg;
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
        AccessBtnClickDefault(strCommandName, 'FieldTab4CodeConv_EditEx.btn_Click');
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlCodeTabId_SelectedIndexChanged(ddlCodeTabId: HTMLSelectElement) {
    console.log(ddlCodeTabId);
    // const strThisFuncName = this.ddlCodeTabId_SelectedIndexChanged.name;

    const strCodeTabId = refFieldTab4CodeConv_Edit.value.codeTabId;
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlCodeTabCodeId',
      strCodeTabId,
    );
    await vFieldTab_SimEx_BindDdl_FldIdByTabIdInDivCache(
      divVarSet.refDivEdit,
      'ddlCodeTabNameId',
      strCodeTabId,
    );

    //alert('请在扩展层:FieldTab4CodeConv_EditEx中重写该函数！');
  }
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strFldId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strFldId;
    let objFieldTab4CodeConvEN;
    try {
      objFieldTab4CodeConvEN = await FieldTab4CodeConv_GetObjByFldIdAsync(strFldId);
      if (objFieldTab4CodeConvEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        throw strMsg;
        //alert(strMsg);
        //return false;
      }
    } catch (e) {
      this.opType = 'Add';
      this.btnSubmitFieldTab4CodeConv = '确认添加';
      this.btnCancelFieldTab4CodeConv = '取消添加';
      if (objFieldTab4CodeConvEN == null) {
        objFieldTab4CodeConvEN = new clsFieldTab4CodeConvEN();
        objFieldTab4CodeConvEN.fldId = strFldId;
      }
    }
    try {
      await refFieldTab4CodeConv_Edit.value.ShowDataFromFieldTab4CodeConvObj(
        objFieldTab4CodeConvEN,
      );
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
  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;

    let objFieldTab4CodeConvEN;
    try {
      objFieldTab4CodeConvEN =
        await refFieldTab4CodeConv_Edit.value.GetEditDataFieldTab4CodeConvObj();
      objFieldTab4CodeConvEN.fldId = this.keyId;
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
    objFieldTab4CodeConvEN.sfUpdFldSetStr = objFieldTab4CodeConvEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objFieldTab4CodeConvEN.fldId == '' || objFieldTab4CodeConvEN.fldId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      FieldTab4CodeConv_CheckProperty4Update(objFieldTab4CodeConvEN);
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
      const returnBool = await FieldTab4CodeConv_UpdateRecordAsync(objFieldTab4CodeConvEN);
      if (returnBool == true) {
        FieldTab4CodeConv_ReFreshCache(clsPrivateSessionStorage.currSelPrjId);
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
}
